import "@fontsource/ibm-plex-mono/400.css";
import "@fontsource/ibm-plex-mono/500.css";
import "@fontsource/ibm-plex-mono/700.css";
import "./receipt.css";
import { brand, features, pitch, sample, steps } from "../../ratio/content";

const featureCounts: Record<string, number> = {
  Summary: 1,
  "Key points": sample.keyPoints.length,
  Hints: sample.hints.length,
  Quotes: sample.quotes.length,
  Insights: sample.insights.length,
};

const pagesPerMinute = (sample.pages / sample.readMinutes).toFixed(1);

const barcodePattern = [
  2, 1, 1, 3, 1, 2, 4, 1, 1, 2, 3, 1, 1, 2, 1, 4, 2, 1, 1, 3, 2, 1, 2, 1, 3, 1, 1, 2, 4, 1, 2, 1, 1,
  3, 1, 2, 1, 4,
];
const barcodeBars: { x: number; width: number }[] = [];
let barcodeWidth = 0;
barcodePattern.forEach((width, index) => {
  if (index % 2 === 0) barcodeBars.push({ x: barcodeWidth, width });
  barcodeWidth += width;
});

const tornEdgePath = `M0 0 ${Array.from({ length: 20 }, (_, index) => index * 20)
  .map((x) => `L${x + 10} 12 L${x + 20} 0`)
  .join(" ")} Z`;

function LedgerRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="receipt-row">
      <span>{label}</span>
      <span aria-hidden="true" className="receipt-leader" />
      <span className="whitespace-nowrap">{value}</span>
    </div>
  );
}

export function ReceiptPage() {
  return (
    <div className="ds-receipt min-h-dvh overflow-x-clip">
      <header className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-6 lg:px-10">
        <p className="text-lg font-bold">{brand.name}</p>
        <a href="#" className="receipt-button">
          {brand.primaryCta}
        </a>
      </header>

      <main className="mx-auto grid max-w-6xl gap-16 px-5 pb-24 pt-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,440px)] lg:gap-20 lg:px-10 lg:pt-10">
        <section aria-labelledby="receipt-hero" className="lg:sticky lg:top-12 lg:self-start">
          <h1
            id="receipt-hero"
            className="text-5xl leading-[1.02] font-bold tracking-tight sm:text-6xl lg:text-7xl"
          >
            {sample.pages} pages in. {sample.readMinutes} minutes out.
          </h1>
          <p className="receipt-lede mt-7 max-w-md text-lg leading-relaxed">{pitch}</p>
          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-4">
            <a href="#" className="receipt-button">
              {brand.primaryCta}
            </a>
            <a href="#sample" className="receipt-link">
              {brand.secondaryCta}
            </a>
          </div>
        </section>

        <div className="receipt-frame mx-auto w-full max-w-[440px] lg:mx-0 lg:justify-self-end">
          <div aria-hidden="true" className="receipt-slot" />
          <div className="receipt-feed">
            <article
              id="sample"
              aria-label="Sample receipt"
              className="receipt-sheet px-6 pt-9 pb-14 sm:px-9"
            >
              <header className="receipt-masthead text-center">
                <p className="receipt-store text-lg font-bold">{brand.name}</p>
                <p className="mt-5 leading-snug font-medium">{sample.title}</p>
                <p className="receipt-detail mt-2">
                  {sample.pages} pages, {sample.readMinutes} min read
                </p>
                <p aria-hidden="true" className="receipt-stamp">
                  Read
                </p>
              </header>

              <section aria-labelledby="receipt-order" className="mt-10">
                <h2 id="receipt-order" className="receipt-heading">
                  How it works
                </h2>
                <ol>
                  {steps.map((step, index) => (
                    <li key={step.name} className="py-2">
                      <LedgerRow label={step.name} value={String(index + 1)} />
                      <p className="receipt-detail mt-1">{step.detail}</p>
                    </li>
                  ))}
                </ol>
              </section>

              <div aria-hidden="true" className="receipt-perf my-9" />

              <section aria-labelledby="receipt-items">
                <h2 id="receipt-items" className="receipt-heading">
                  What you get
                </h2>
                <ul>
                  {features.map((feature) => (
                    <li key={feature.name} className="py-2">
                      <LedgerRow label={feature.name} value={String(featureCounts[feature.name])} />
                      <p className="receipt-detail mt-1">{feature.detail}</p>
                    </li>
                  ))}
                </ul>
              </section>

              <section aria-labelledby="receipt-summary" className="mt-9">
                <h2 id="receipt-summary" className="receipt-heading">
                  Summary
                </h2>
                <p className="text-[15px] leading-relaxed">{sample.summary}</p>
              </section>

              <section aria-labelledby="receipt-key-points" className="mt-9">
                <h2 id="receipt-key-points" className="receipt-heading">
                  Key points
                </h2>
                <ul>
                  {sample.keyPoints.map((point) => (
                    <li key={point.text} className="receipt-item">
                      <span className="text-[15px] leading-relaxed">{point.text}</span>
                      <span className="receipt-page text-sm">p. {point.page}</span>
                    </li>
                  ))}
                </ul>
              </section>

              <section aria-labelledby="receipt-hints" className="mt-9">
                <h2 id="receipt-hints" className="receipt-heading">
                  Hints
                </h2>
                <ul>
                  {sample.hints.map((hint) => (
                    <li key={hint.text} className="receipt-item">
                      <span className="text-[15px] leading-relaxed">{hint.text}</span>
                      <span className="receipt-page text-sm">p. {hint.page}</span>
                    </li>
                  ))}
                </ul>
              </section>

              <section aria-labelledby="receipt-quotes" className="mt-9">
                <h2 id="receipt-quotes" className="receipt-heading">
                  Quotes
                </h2>
                <ul>
                  {sample.quotes.map((quote) => (
                    <li key={quote.text} className="receipt-item">
                      <span className="text-[15px] leading-relaxed">“{quote.text}”</span>
                      <span className="receipt-page text-sm">p. {quote.page}</span>
                    </li>
                  ))}
                </ul>
              </section>

              <section aria-labelledby="receipt-insights" className="mt-9">
                <h2 id="receipt-insights" className="receipt-heading">
                  Insights
                </h2>
                <ul>
                  {sample.insights.map((insight) => (
                    <li key={insight.text} className="receipt-item">
                      <div className="grid gap-2">
                        <span className="receipt-tag">{insight.kind}</span>
                        <span className="text-[15px] leading-relaxed">{insight.text}</span>
                      </div>
                      <span className="receipt-page text-sm">p. {insight.page}</span>
                    </li>
                  ))}
                </ul>
              </section>

              <section aria-labelledby="receipt-totals" className="mt-9">
                <h2 id="receipt-totals" className="receipt-heading">
                  Totals
                </h2>
                <div className="grid gap-2 text-[15px]">
                  <LedgerRow label="PAGES" value={String(sample.pages)} />
                  <LedgerRow label="READ TIME" value={`${sample.readMinutes} MIN`} />
                  <LedgerRow label="PAGES PER MIN" value={pagesPerMinute} />
                </div>
                <svg
                  aria-hidden="true"
                  focusable="false"
                  viewBox={`0 0 ${barcodeWidth} 60`}
                  preserveAspectRatio="none"
                  className="receipt-barcode mt-8 h-16 w-full"
                >
                  {barcodeBars.map((bar) => (
                    <rect key={bar.x} x={bar.x} y={0} width={bar.width} height={60} />
                  ))}
                </svg>
              </section>

              <section aria-labelledby="receipt-close" className="mt-12">
                <h2 id="receipt-close" className="receipt-heading">
                  Upload your next PDF
                </h2>
                <p className="text-[15px] leading-relaxed">
                  Drop in a paper, a report, or a chapter, and read the key parts first.
                </p>
                <a href="#" className="receipt-button receipt-button-ink mt-6">
                  {brand.primaryCta}
                </a>
              </section>

              <svg
                aria-hidden="true"
                focusable="false"
                viewBox="0 0 400 12"
                preserveAspectRatio="none"
                className="receipt-torn"
              >
                <path d={tornEdgePath} />
              </svg>
            </article>
          </div>
        </div>
      </main>

      <footer className="receipt-footer mx-auto flex max-w-6xl flex-col gap-2 px-5 pb-12 lg:px-10">
        <p className="text-xl font-bold">Thank you for reading</p>
        <p className="text-sm">{brand.name} © 2026</p>
      </footer>
    </div>
  );
}
