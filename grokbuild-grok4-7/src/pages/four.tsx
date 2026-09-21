import { useState } from "react";
import {
  decision,
  insightText,
  pitHint,
  pitSentence,
  quote,
  sentences,
  summary,
  type Kind,
} from "../content.ts";
import { Skip, VersionNav } from "../site.tsx";
import { usePage } from "../use-page.ts";
import "./four.css";

const kinds: { kind: Kind; label: string }[] = [
  { kind: "claim", label: "Claims" },
  { kind: "quote", label: "Quotes" },
  { kind: "hint", label: "Hints" },
  { kind: "insight", label: "Insights" },
];

export function DesignFour() {
  usePage("Highlighter — Ratio Reader", "#ffffff");
  const [marks, setMarks] = useState<Record<Kind, boolean>>({
    claim: true,
    quote: true,
    hint: true,
    insight: true,
  });

  return (
    <>
      <Skip />
      <main className="d4" id="content">
        <section className="d4-band d4-yellow">
            <h1>Read the marked parts. Understand the whole document.</h1>
            <p className="d4-lead">
              Ratio Reader marks a PDF with four highlighters. Yellow is the
              claim. Pink is a quote worth keeping. Green is a hint. Blue is
              the insight that changes the reading. This page is fifteen
              sentences from a 42-page briefing on street trees.
            </p>
            <div className="d4-toggles" role="group" aria-label="Highlighter marks">
              {kinds.map((item) => (
                <button
                  key={item.kind}
                  type="button"
                  aria-pressed={marks[item.kind]}
                  onClick={() =>
                    setMarks((current) => ({
                      ...current,
                      [item.kind]: !current[item.kind],
                    }))
                  }
                >
                  <span className={`swatch swatch-${item.kind}`} aria-hidden="true" />
                  {item.label}
                </button>
              ))}
            </div>
            <article className="d4-sheet">
              <h2>Street trees as infrastructure</h2>
              <p>
                {sentences.map((sentence) => {
                  const marked = sentence.kind !== null && marks[sentence.kind];
                  return (
                    <span
                      key={sentence.id}
                      className={marked ? `mark mark-${sentence.kind}` : undefined}
                    >
                      {sentence.text}{" "}
                    </span>
                  );
                })}
              </p>
            </article>
            <h2 className="d4-sub">The summary is four sentences.</h2>
            <p className="d4-copy">{summary}</p>
        </section>

        <section className="d4-band d4-pink">
          <h2 className="d4-quote">“{quote}”</h2>
          <p className="d4-copy">
            This is a quote, kept in the author’s words. Canopy means the shade
            of the crowns, not the count of trunks.
          </p>
        </section>

        <section className="d4-band d4-green">
          <h2 className="d4-mid">{pitSentence}</h2>
          <p className="d4-copy">
            This is a hint, for the sentence you were about to skip. {pitHint}
          </p>
        </section>

        <section className="d4-band d4-blue">
          <h2 className="d4-mid">{decision}</h2>
          <p className="d4-copy">This is the insight. {insightText}</p>
        </section>

        <section className="d4-band d4-white">
          <h2 className="d4-mid">Upload a PDF.</h2>
          <ol className="d4-steps">
            <li>Ratio Reader reads the file and marks the sentences that carry it.</li>
            <li>
              Read those marks. Use the switches above if you only want the
              claims, the quotes, the hints, or the insights.
            </li>
            <li>
              The unmarked sentences stay in the original: dates, tables, bids,
              and thank-yous.
            </li>
          </ol>
          <VersionNav href="/4" />
        </section>
      </main>
    </>
  );
}
