import { chromium } from "@playwright/test";
import { mkdir } from "node:fs/promises";

const out = "/tmp/ratio-reader-qa";
await mkdir(out, { recursive: true });
const browser = await chromium.launch({ headless: true });
const page = await browser.newPage();
const errors = [];
page.on("pageerror", (error) => errors.push(error.message));
const ensure = (condition, message) => {
  if (!condition) throw new Error(message);
};

for (const width of [1440, 768, 390]) {
  await page.setViewportSize({ width, height: width === 390 ? 844 : 1000 });
  for (let design = 1; design <= 5; design++) {
    await page.goto(`http://localhost:5173/${design}`);
    await page.evaluate(() => document.fonts.ready);
    await page.locator("h1").waitFor();
    ensure(
      await page
        .locator("img")
        .evaluateAll((images) =>
          images.every((image) => image.complete && image.naturalWidth > 0),
        ),
      `${design}: image failed to load`,
    );
    ensure(
      (await page.locator("h1").count()) === 1,
      `${design}: expected one main heading`,
    );
    ensure(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= window.innerWidth,
      ),
      `${design}: horizontal overflow at ${width}`,
    );
    await page.screenshot({
      path: `${out}/design-${design}-${width}.png`,
      fullPage: true,
    });
    await page.locator(".sample-button").first().click();
    await page.getByRole("dialog").waitFor();
    await page.getByRole("tab", { name: "Hints" }).click();
    ensure(
      (await page.locator(".hint-box").count()) === 3,
      `${design}: hints missing`,
    );
    await page.getByRole("tab", { name: "Quotes" }).click();
    ensure(
      (await page.locator(".reader-quote").count()) === 3,
      `${design}: quotes missing`,
    );
    await page.getByRole("tab", { name: "Summary" }).click();
    ensure(
      (await page.locator(".reader-passage").count()) === 4,
      `${design}: summary missing`,
    );
    if (design === 1)
      await page.screenshot({
        path: `${out}/reader-${width}.png`,
        fullPage: false,
      });
    await page.keyboard.press("Escape");
    ensure(
      (await page.getByRole("dialog").count()) === 0,
      `${design}: Escape did not close reader`,
    );
    await page.locator("summary").first().click();
    ensure(
      (await page.locator("details[open]").count()) === 1,
      `${design}: FAQ did not open`,
    );
    if (width === 390) {
      await page.getByRole("button", { name: "Toggle menu" }).click();
      await page
        .getByRole("link", { name: "How it works", exact: true })
        .click();
      ensure(
        (await page.locator(".nav-links.is-open").count()) === 0,
        `${design}: mobile menu did not close`,
      );
    }
    console.log(
      `PASS /${design} at ${width}px: layout, reader tabs, dialog, FAQ${width === 390 ? ", mobile menu" : ""}`,
    );
  }
}

// A small, valid PDF fixture verifies actual parsing and source-page extraction.
const content =
  "BT /F1 12 Tf 50 740 Td (Attention develops through deliberate practice and regular reflection on the ideas we read.) Tj 0 -25 Td (A quiet environment supports focused reading and helps people understand complicated documents.) Tj 0 -25 Td (Pausing to explain an idea in your own words builds understanding and reveals unanswered questions.) Tj ET";
const objects = [
  "<< /Type /Catalog /Pages 2 0 R >>",
  "<< /Type /Pages /Kids [3 0 R] /Count 1 >>",
  "<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Resources << /Font << /F1 4 0 R >> >> /Contents 5 0 R >>",
  "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>",
  `<< /Length ${content.length} >>\nstream\n${content}\nendstream`,
];
let pdf = "%PDF-1.4\n";
const offsets = [0];
objects.forEach((object, index) => {
  offsets.push(Buffer.byteLength(pdf));
  pdf += `${index + 1} 0 obj\n${object}\nendobj\n`;
});
const xref = Buffer.byteLength(pdf);
pdf += `xref\n0 6\n0000000000 65535 f \n${offsets
  .slice(1)
  .map((offset) => `${String(offset).padStart(10, "0")} 00000 n `)
  .join("\n")}\ntrailer\n<< /Size 6 /Root 1 0 R >>\nstartxref\n${xref}\n%%EOF`;
await page.setViewportSize({ width: 1440, height: 1000 });
await page.goto("http://localhost:5173/1");
await page.locator(".primary-cta").first().click();
await page.locator("input[type=file]").setInputFiles({
  name: "reading-practice.pdf",
  mimeType: "application/pdf",
  buffer: Buffer.from(pdf),
});
await page
  .getByText("Local PDF preview", { exact: false })
  .waitFor({ timeout: 30000 });
ensure(
  (await page.locator(".reader-passage").count()) === 3,
  "PDF extraction did not return the fixture passages",
);
ensure(
  (await page.locator(".reader-sidebar h2").textContent()) ===
    "reading-practice",
  "Uploaded filename missing",
);
await page.getByRole("tab", { name: "Quotes" }).click();
ensure(
  (await page.locator(".reader-quote").first().textContent()).includes(
    "Page 1",
  ),
  "PDF quote source page missing",
);
await page.locator("input[type=file]").setInputFiles({
  name: "invalid.txt",
  mimeType: "text/plain",
  buffer: Buffer.from("not a PDF"),
});
ensure(
  (await page.getByRole("alert").textContent()).includes("Choose a PDF"),
  "File validation failed",
);
console.log(
  "PASS PDF upload: real extraction, source pages, filename, invalid-file validation",
);
ensure(errors.length === 0, `Browser errors: ${errors.join("; ")}`);
console.log(`PASS: no browser errors. Screenshots: ${out}`);
await browser.close();
