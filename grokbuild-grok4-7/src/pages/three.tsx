import { useState } from "react";
import {
  insightText,
  pitHint,
  quote,
  sentences,
  summary,
} from "../content.ts";
import { Skip, VersionNav } from "../site.tsx";
import { usePage } from "../use-page.ts";
import "./three.css";

const contextCount = sentences.filter((sentence) => !sentence.kept).length;

function visibleSentences(shownContext: number) {
  let remaining = shownContext;
  return sentences.filter((sentence) => {
    if (sentence.kept) return true;
    if (remaining > 0) {
      remaining -= 1;
      return true;
    }
    return false;
  });
}

export function DesignThree() {
  usePage("Fraction — Ratio Reader", "#ffffff");
  const [shownContext, setShownContext] = useState(0);
  const visible = visibleSentences(shownContext);

  return (
    <>
      <Skip />
      <main className="d3" id="content">
        <div className="d3-hero">
          <h1 className="d3-fraction">
            <span>
              the
              <br />
              argument
            </span>
            <span className="vh"> over </span>
            <span className="d3-bar" aria-hidden="true" />
            <span>
              the
              <br />
              document
            </span>
          </h1>
          <p className="d3-lead">
            Ratio Reader is that split. You upload a PDF, and what comes back
            is the top line: a summary of the argument, the quotes worth
            keeping in the author’s words, a hint where the wording gets thick,
            and an insight that says why a passage is in the file.
          </p>
        </div>

        <section className="d3-instrument" aria-labelledby="d3-count">
          <h2 id="d3-count">
            Four sentences kept from a fifteen-sentence excerpt of a 42-page
            briefing.
          </h2>
          <div className="d3-reading">
            {visible.map((sentence) => (
              <p
                key={sentence.id}
                className={sentence.kept ? "d3-kept" : "d3-quiet"}
              >
                {sentence.text}
              </p>
            ))}
          </div>
          <p className="d3-live" aria-live="polite">
            Showing {visible.length} of {sentences.length} sentences. Four carry
            the briefing.
          </p>
          <label className="d3-label">
            Show the sentences Ratio Reader leaves out
            <input
              type="range"
              min={0}
              max={contextCount}
              step={1}
              value={shownContext}
              onChange={(event) => setShownContext(Number(event.target.value))}
            />
          </label>
        </section>

        <section className="d3-split">
          <div>
            <h2>Summary</h2>
            <p>{summary}</p>
          </div>
          <div className="d3-side">
            <div>
              <h2>Quote</h2>
              <blockquote>“{quote}”</blockquote>
            </div>
            <div>
              <h2>Hint</h2>
              <p>{pitHint}</p>
            </div>
            <div>
              <h2>Insight</h2>
              <p>{insightText}</p>
            </div>
          </div>
        </section>
        <VersionNav href="/3" />
      </main>
    </>
  );
}
