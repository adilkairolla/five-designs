import "@fontsource-variable/newsreader/opsz.css";
import "@fontsource-variable/newsreader/opsz-italic.css";
import "@fontsource-variable/hanken-grotesk";
import type { ReactNode } from "react";
import { brand, features, pitch, sample, steps } from "@/ratio/content";
import "./margin.css";

type Tone = "ink" | "hint" | "insight";

const quotes = [...sample.quotes].sort((a, b) => a.page - b.page);

const keyPointLeads = [
  {
    lead: "Start with the question a price change asks.",
    tail: "Percentages let a $2 rise on a $4 coffee be compared with a $2 rise on a $200 printer.",
  },
  {
    lead: "Whether a good stretches depends on what else a buyer could choose.",
    tail: "A commuter with no other route to work is the clearest example.",
  },
  {
    lead: "Habit shapes how much people react.",
    tail: "In five days most drivers keep their routines. In five years they can move closer to work or buy a more efficient car.",
  },
  {
    lead: "The tax question starts with the market, not the tax form.",
    tail: "Economists test each side's elasticity to find the real burden.",
  },
  {
    lead: "Sellers watch the same ratio when they set prices.",
    tail: "Check which case you are in before you change a price.",
  },
];

const hintExcerpts = [
  {
    before: "Buyers respond to prices in different degrees. Think about how far they ",
    phrase: "stretch",
    after: " when a price pulls on them.",
  },
  {
    before: "Calculations go wrong when the starting price changes. Economists use ",
    phrase: "midpoint percentages",
    after: " to avoid this problem, which otherwise makes one change look like two.",
  },
  {
    before: "The tax burden follows the options each side has. Where buyers have ",
    phrase: "fewer alternatives",
    after: ", they pay more of the tax.",
  },
];

const insightExcerpts = [
  "Chapter 2 drew demand and supply as curves. Elasticity is a percentage measure, so it is not the same thing as how steep a curve looks on the graph.",
  "Demand for a good with few substitutes is inelastic. In that case the quantity barely changes when the price does.",
  "Problem set. Work the questions at the end of the chapter before you check any answers.",
];

const keyPointRows = sample.keyPoints.map((point, index) => ({ ...point, ...keyPointLeads[index] }));
const hintRows = sample.hints.map((hint, index) => ({ ...hint, ...hintExcerpts[index] }));
const insightRows = sample.insights.map((insight, index) => ({ ...insight, excerpt: insightExcerpts[index] }));

function sentenceCase(text: string) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

function BrandMark() {
  return (
    <svg className="size-7 shrink-0" viewBox="0 0 28 32" aria-hidden="true" focusable="false">
      <rect x="2" y="2" width="24" height="28" rx="2" fill="#ffffff" stroke="#17191e" strokeWidth="2" />
      <rect x="6" y="11" width="16" height="6" fill="#ffe45c" />
      <path d="M6 22h16M6 26h10" stroke="#17191e" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function LeaderLine() {
  return (
    <svg className="margin-leader" viewBox="0 0 32 8" aria-hidden="true" focusable="false">
      <path d="M0 4H32" pathLength={1} />
    </svg>
  );
}

function Row({
  tone,
  linked = false,
  divider = false,
  sheet,
  note,
}: {
  tone: Tone;
  linked?: boolean;
  divider?: boolean;
  sheet: ReactNode;
  note?: ReactNode;
}) {
  return (
    <>
      <div
        className={`margin-sheet-cell margin-tone-${tone} self-start px-6 pt-8 pb-6 sm:px-8 lg:px-14 lg:pb-8${divider ? " margin-break" : ""}`}
      >
        {linked && <span className="margin-bracket" aria-hidden="true" />}
        {sheet}
      </div>
      <div className={`margin-note-cell margin-tone-${tone} px-6 pb-8 sm:px-8 lg:px-0 lg:pt-8 lg:pb-8`}>
        {linked && <LeaderLine />}
        {note}
      </div>
    </>
  );
}

function Note({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="margin-note">
      <p className="margin-note-label">{label}</p>
      <p className="margin-note-text">{children}</p>
    </div>
  );
}

function Intro({ children }: { children: ReactNode }) {
  return (
    <div className="margin-note margin-note-quiet">
      <p className="margin-note-text">{children}</p>
    </div>
  );
}

function PinnedQuote({ text, page }: { text: string; page: number }) {
  return (
    <figure className="margin-quote">
      <span className="margin-pin" aria-hidden="true" />
      <blockquote className="margin-quote-text">{text}</blockquote>
      <figcaption className="margin-folio mt-3">Page {page}</figcaption>
    </figure>
  );
}

export function MarginPage() {
  return (
    <div className="ds-margin">
      <title>{brand.name}</title>
      <header className="mx-auto flex max-w-[1180px] items-center justify-between gap-6 px-5 py-5 sm:px-6 lg:px-0">
        <a href="#" className="flex items-center gap-3 text-[1.05rem] font-bold">
          <BrandMark />
          {brand.name}
        </a>
        <nav aria-label="Page sections" className="hidden items-center gap-8 md:flex">
          <a href="#how-it-works" className="margin-link">
            How it works
          </a>
          <a href="#sample" className="margin-link">
            Sample
          </a>
        </nav>
        <button type="button" className="margin-button">
          {brand.primaryCta}
        </button>
      </header>

      <main className="margin-doc mx-3 grid max-w-[1180px] grid-cols-1 sm:mx-6 lg:mx-auto lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
        <section aria-labelledby="margin-hero" className="contents">
          <Row
            tone="ink"
            sheet={
              <>
                <p className="margin-folio">{sample.title}</p>
                <h1 id="margin-hero" className="margin-display margin-title mt-6">
                  The margin notes you wish the author had written.
                </h1>
                <div className="mt-8 flex flex-wrap gap-3">
                  <button type="button" className="margin-button">
                    {brand.primaryCta}
                  </button>
                  <a href="#sample" className="margin-button margin-button-ghost">
                    {brand.secondaryCta}
                  </a>
                </div>
                <p className="margin-folio mt-8">
                  Sample output for a {sample.pages}-page chapter, read in about {sample.readMinutes} minutes.
                </p>
              </>
            }
            note={<Note label="What it does">{pitch}</Note>}
          />
        </section>

        <section aria-labelledby="how-it-works" className="contents">
          <Row
            tone="ink"
            divider
            sheet={
              <>
                <h2 id="how-it-works" className="margin-display margin-heading">
                  How it works
                </h2>
                <p className="margin-text mt-5">
                  Ratio Reader works through a document in three passes, the way a careful reader would. Each pass
                  narrows the text down to what you need.
                </p>
              </>
            }
            note={steps.map((step, index) => (
              <Note key={step.name} label={`Step ${index + 1}: ${step.name}`}>
                {step.detail}
              </Note>
            ))}
          />
        </section>

        <section aria-labelledby="margin-summary" className="contents">
          <Row
            tone="ink"
            divider
            sheet={
              <div id="sample">
                <h2 id="margin-summary" className="margin-display margin-heading">
                  Summary
                </h2>
                <p className="margin-folio mt-5">Abstract</p>
                <p className="margin-text margin-abstract mt-3">{sample.summary}</p>
              </div>
            }
            note={<Note label="Summary">{features[0].detail}</Note>}
          />
        </section>

        <section aria-labelledby="margin-keypoints" className="contents">
          <Row
            tone="ink"
            divider
            sheet={
              <h2 id="margin-keypoints" className="margin-display margin-heading">
                Key points
              </h2>
            }
            note={<Intro>{features[1].detail}</Intro>}
          />
          {keyPointRows.map((row) => (
            <Row
              key={row.page}
              tone="ink"
              linked
              sheet={
                <p className="margin-text">
                  {row.lead}{" "}
                  <mark className="margin-hl">{row.text}</mark>{" "}
                  {row.tail}
                </p>
              }
              note={<Note label={`Key point, page ${row.page}`}>{row.text}</Note>}
            />
          ))}
        </section>

        <section aria-labelledby="margin-hints" className="contents">
          <Row
            tone="hint"
            divider
            sheet={
              <h2 id="margin-hints" className="margin-display margin-heading">
                Hints
              </h2>
            }
            note={<Intro>{features[2].detail}</Intro>}
          />
          {hintRows.map((row) => (
            <Row
              key={row.page}
              tone="hint"
              linked
              sheet={
                <p className="margin-text">
                  {row.before}
                  <span className="margin-pencil">{row.phrase}</span>
                  {row.after}
                </p>
              }
              note={<Note label={`Hint, page ${row.page}`}>{row.text}</Note>}
            />
          ))}
        </section>

        <section aria-labelledby="margin-quotes" className="contents">
          <Row
            tone="ink"
            divider
            sheet={
              <h2 id="margin-quotes" className="margin-display margin-heading">
                Quotes
              </h2>
            }
            note={<Intro>{features[3].detail}</Intro>}
          />
          {quotes.map((quote) => (
            <Row key={quote.page} tone="ink" sheet={<PinnedQuote text={quote.text} page={quote.page} />} />
          ))}
        </section>

        <section aria-labelledby="margin-insights" className="contents">
          <Row
            tone="insight"
            divider
            sheet={
              <h2 id="margin-insights" className="margin-display margin-heading">
                Insights
              </h2>
            }
            note={<Intro>{features[4].detail}</Intro>}
          />
          {insightRows.map((row) => (
            <Row
              key={row.page}
              tone="insight"
              linked
              sheet={<p className="margin-text">{row.excerpt}</p>}
              note={<Note label={`${sentenceCase(row.kind)}, page ${row.page}`}>{row.text}</Note>}
            />
          ))}
        </section>

        <section aria-labelledby="margin-try" className="contents">
          <Row
            tone="ink"
            divider
            sheet={
              <>
                <h2 id="margin-try" className="margin-display margin-heading">
                  Try it on your own PDF
                </h2>
                <p className="margin-text mt-5">Upload a PDF and get the same notes for your own document.</p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <button type="button" className="margin-button">
                    {brand.primaryCta}
                  </button>
                  <a href="#sample" className="margin-button margin-button-ghost">
                    {brand.secondaryCta}
                  </a>
                </div>
              </>
            }
            note={<Note label="Ratio">{`${sample.pages} pages in, about ${sample.readMinutes} minutes to read.`}</Note>}
          />
        </section>
      </main>

      <footer className="mx-auto flex max-w-[1180px] flex-col gap-4 px-5 pt-10 pb-12 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-0">
        <p className="margin-folio">© 2026 {brand.name}</p>
        <nav aria-label="Footer" className="flex items-center gap-8">
          <a href="#how-it-works" className="margin-link">
            How it works
          </a>
          <a href="#sample" className="margin-link">
            Sample
          </a>
        </nav>
      </footer>
    </div>
  );
}
