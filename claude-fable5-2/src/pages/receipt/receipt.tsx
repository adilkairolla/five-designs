import { useState } from "react";
import type { ReactNode } from "react";
import "@fontsource/dm-mono/400.css";
import "@fontsource/dm-mono/500.css";
import "@fontsource/anton/400.css";
import { usePdfPicker } from "@/lib/use-pdf-picker.ts";

const FOCUS_RING = "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black";

export function Receipt() {
  return (
    <div className="receipt min-h-svh bg-counter font-dm-mono text-black">
      <title>Ratio Reader: every PDF, itemized</title>
      <main className="mx-auto max-w-[78rem] px-5 lg:grid lg:grid-cols-[minmax(0,1fr)_29rem] lg:gap-14 lg:px-10">
        <Pitch />
        <Strip />
      </main>
    </div>
  );
}

function Pitch() {
  return (
    <div className="flex flex-col gap-10 pt-6 lg:sticky lg:top-0 lg:h-svh lg:justify-between lg:py-8">
      <header className="flex items-center justify-between gap-6">
        <a href="/4" className={`text-lg font-medium ${FOCUS_RING}`}>
          Ratio Reader
        </a>
        <a href="#upload" className={`underline underline-offset-4 lg:hidden ${FOCUS_RING}`}>
          Upload a PDF
        </a>
      </header>

      <div>
        <h1 className="font-anton text-[clamp(4rem,9vw,8.75rem)] leading-[0.94]">
          Every PDF,
          <br />
          itemized.
        </h1>
        <p className="mt-7 max-w-[33rem] text-[1.0625rem] leading-[1.65]">
          Upload a PDF. Ratio Reader reads it and prints out what is inside: a summary of the most
          important information, plus the hints, quotes and insights that help you understand it.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
          <a
            href="#upload"
            className={`bg-black px-7 py-4 text-lg font-medium text-counter transition-colors hover:bg-stamp hover:text-white ${FOCUS_RING}`}
          >
            Upload a PDF
          </a>
          <p>First three PDFs free. No card.</p>
        </div>
      </div>

      <nav aria-label="Sections of the receipt" className="hidden lg:block">
        <p className="font-medium">On the receipt</p>
        <ul className="mt-2 flex flex-wrap gap-x-7 gap-y-1">
          {[
            ["#what-you-get", "What you get"],
            ["#how-it-works", "How it works"],
            ["#price-list", "Price list"],
            ["#store-policy", "Store policy"],
          ].map(([href, label]) => (
            <li key={href}>
              <a href={href} className={`underline underline-offset-4 hover:no-underline ${FOCUS_RING}`}>
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

function Strip() {
  const [printedAt] = useState(() => new Date());
  const date = printedAt.toLocaleDateString("en-GB", {
    weekday: "short",
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
  const time = printedAt.toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit" });

  return (
    <div className="strip pt-10 pb-24 lg:pt-12">
      <div aria-hidden="true" className="slot relative z-10 mx-auto h-7 max-w-[29rem] rounded-full" />
      <article className="paper mx-auto -mt-3.5 w-[calc(100%-2.5rem)] max-w-[26rem] px-6 pt-12 text-[0.8438rem] leading-[1.6] text-print">
        <header className="text-center">
          <p className="text-2xl font-medium tracking-[0.16em]">RATIO READER</p>
          <p>Reading, itemized</p>
        </header>

        <Rule />
        <div className="flex justify-between">
          <span>{date}</span>
          <span>{time}</span>
        </div>
        <div className="flex justify-between">
          <span>Order no. 0357</span>
          <span>Till 01</span>
        </div>

        <Rule />
        <div className="relative">
          <p className="font-medium">1 x walden.pdf</p>
          <p className="pl-[4ch]">Henry David Thoreau, 1854</p>
          <p className="pl-[4ch]">357 pages</p>
          <p className="stamp absolute top-3 right-[-0.5rem] rotate-[-8deg] px-2.5 py-1 text-[0.8125rem] font-medium tracking-[0.06em]">
            FIRST 3 FREE
          </p>
        </div>

        <Rule />
        <section id="what-you-get" className="scroll-mt-6">
          <SectionHead>What you get</SectionHead>
          <Row label="Summary" value="9 points" />
          <Row label="Hints" value="14" />
          <Row label="Quotes" value="21" />
          <Row label="Insights" value="6" />
        </section>

        <Rule />
        <Row label="To read all 357 pages" value="11 h 54 min" />
        <Row label="To read what matters" value="21 min" />

        <div className="double-rule mt-4" />
        <div className="flex items-baseline justify-between py-1.5 text-[1.75rem] leading-tight font-medium">
          <span>Total</span>
          <span>21 min</span>
        </div>
        <div className="double-rule" />

        <Item
          name="Summary"
          count="9 points"
          what="The most important information, in the book’s own order. Every point shows its page."
          sample="Thoreau moves to a cabin at Walden Pond for two years to find out how little a person needs, and what is left of a life once the rest is taken away."
          reference="Point 1 of 9, p. 98"
        />
        <Item
          name="Hints"
          count="14"
          what="Short notes that get you past the hard parts."
          sample="“Economy” is the longest chapter and the slowest. It is also the argument. Skim the lists, read the rest."
          reference="For p. 5 to 86"
        />
        <Item
          name="Quotes"
          count="21"
          what="The lines worth keeping, word for word, ready to cite."
          sample="“The cost of a thing is the amount of what I will call life which is required to be exchanged for it, immediately or in the long run.”"
          reference="p. 34"
        />
        <Item
          name="Insights"
          count="6"
          what="What the text implies but does not say."
          sample="Thoreau printed a receipt too. His cabin cost $28.12½, itemized down to one cent of chalk. The whole book is an account: every chapter asks what a thing costs in life."
          reference="From p. 53"
        />

        <Rule />
        <section id="how-it-works" className="scroll-mt-6">
          <SectionHead>How it works</SectionHead>
          <ol className="space-y-3">
            <Step number={1} title="Upload a PDF" clock="0:00">
              Books, papers, contracts, scans. Up to 2,000 pages.
            </Step>
            <Step number={2} title="Ratio Reader reads it" clock="0:55">
              Every page, footnotes included.
            </Step>
            <Step number={3} title="You read what matters" clock="0:56">
              Summary first. Any line opens the page it came from.
            </Step>
          </ol>
        </section>

        <Rule />
        <section id="price-list" className="scroll-mt-6">
          <SectionHead>Price list</SectionHead>
          <Row label="First 3 PDFs" value="$0.00" />
          <Row label="Every PDF after, a month" value="$8.00" />
          <Row label="Card needed to start" value="No" />
        </section>

        <Rule />
        <section id="store-policy" className="scroll-mt-6">
          <SectionHead>Store policy</SectionHead>
          <dl className="space-y-3">
            <Policy term="Checking">
              Every line links back to its page, so you can hold it against the original.
            </Policy>
            <Policy term="Privacy">
              Your PDFs stay in your account. Delete one and everything written about it goes too.
            </Policy>
            <Policy term="Files">Any PDF up to 2,000 pages. Scans work.</Policy>
            <Policy term="No substitutions">
              This does not replace the book. It tells you what is in it and where to slow down.
            </Policy>
          </dl>
        </section>

        <Rule />
        <Barcode />
        <p className="mt-2 text-center tracking-[0.3em]">0357 0021 0009 0014</p>
        <p className="mt-4 text-center font-medium">Thank you. Keep reading.</p>

        <div aria-hidden="true" className="perforation -mx-6 mt-8" />
        <Coupon />
      </article>
      <div aria-hidden="true" className="torn-edge mx-auto w-[calc(100%-2.5rem)] max-w-[26rem]" />
    </div>
  );
}

function Rule() {
  return <div aria-hidden="true" className="rule my-4" />;
}

function SectionHead({ children }: { children: ReactNode }) {
  return <h2 className="mb-2 font-medium tracking-[0.1em] uppercase">{children}</h2>;
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <p className="flex items-baseline gap-2">
      <span>{label}</span>
      <span aria-hidden="true" className="min-w-4 flex-1 -translate-y-1 border-b border-dotted border-print/60" />
      <span className="tabular-nums">{value}</span>
    </p>
  );
}

function Item({
  name,
  count,
  what,
  sample,
  reference,
}: {
  name: string;
  count: string;
  what: string;
  sample: string;
  reference: string;
}) {
  return (
    <section className="mt-6">
      <h3 className="flex items-baseline justify-between gap-4 font-medium tracking-[0.1em] uppercase">
        <span>{name}</span>
        <span className="tracking-normal normal-case">{count}</span>
      </h3>
      <p className="mt-1">{what}</p>
      <figure className="mt-2.5 border-l-2 border-print pl-3">
        <blockquote>{sample}</blockquote>
        <figcaption className="mt-1 text-print/70">{reference}</figcaption>
      </figure>
    </section>
  );
}

function Step({
  number,
  title,
  clock,
  children,
}: {
  number: number;
  title: string;
  clock: string;
  children: ReactNode;
}) {
  return (
    <li className="grid grid-cols-[3ch_1fr]">
      <span className="font-medium">{number}</span>
      <div>
        <Row label={title} value={clock} />
        <p className="text-print/75">{children}</p>
      </div>
    </li>
  );
}

function Policy({ term, children }: { term: string; children: ReactNode }) {
  return (
    <div>
      <dt className="font-medium">{term}</dt>
      <dd>{children}</dd>
    </div>
  );
}

const BARCODE_WIDTHS = "3112213121123113221131221311221312113122113112231";

function Barcode() {
  return (
    <div aria-hidden="true" className="mt-6 flex h-14 justify-center">
      {BARCODE_WIDTHS.split("").map((width, index) => (
        <span
          key={index}
          className={index % 2 === 0 ? "bg-print" : ""}
          style={{ width: `${Number(width) * 0.15}rem` }}
        />
      ))}
    </div>
  );
}

function Coupon() {
  const { fileName, inputProps } = usePdfPicker();

  return (
    <section id="upload" className="scroll-mt-6 pt-7 pb-9 text-center">
      <h2 className="font-medium tracking-[0.1em] uppercase">Coupon</h2>
      <p className="mt-2 font-anton text-[3.5rem] leading-none text-black">3 PDFs free</p>
      <p className="mt-2">No card. Redeem by uploading your first one.</p>
      <label className="mt-5 block cursor-pointer bg-black px-6 py-4 text-base font-medium text-counter transition-colors hover:bg-stamp hover:text-white focus-within:outline-2 focus-within:outline-offset-4 focus-within:outline-black">
        <input {...inputProps} className="sr-only" />
        Upload a PDF
      </label>
      <p aria-live="polite" className="mt-3 min-h-[1.4rem]">
        {fileName && `1 x ${fileName} added.`}
      </p>
    </section>
  );
}
