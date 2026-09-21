import { useState } from "react";
import {
  canopyHint,
  insightText,
  pitHint,
  pitSentence,
  quote,
  summary,
} from "../content.ts";
import { Skip, VersionNav } from "../site.tsx";
import { usePage } from "../use-page.ts";
import "./two.css";

const cards = [
  {
    kind: "Summary",
    body: summary,
  },
  {
    kind: "Quote",
    body: `“${quote}” ${canopyHint}`,
  },
  {
    kind: "Hint",
    body: `${pitSentence} ${pitHint}`,
  },
  {
    kind: "Insight",
    body: insightText,
  },
] as const;

export function DesignTwo() {
  usePage("Index card — Ratio Reader", "#1c5c42");
  const [flipped, setFlipped] = useState(false);
  const [index, setIndex] = useState(0);
  const card = cards[index];

  return (
    <>
      <Skip />
      <main className="d2" id="content">
        <div className="d2-card">
          <div className={flipped ? "d2-inner is-flipped" : "d2-inner"}>
            <div className="d2-face d2-front" inert={flipped ? true : undefined}>
              <p className="d2-print">Ratio Reader</p>
              <div className="d2-ruled">
                <h1>Upload a PDF. Keep only what you would write on a card.</h1>
                <p aria-hidden="true">&nbsp;</p>
                <p>The summary.</p>
                <p>The quote, in the author’s words.</p>
                <p>The hint for the hard sentence.</p>
                <p>The insight that ties the file together.</p>
                <p aria-hidden="true">&nbsp;</p>
                <p>
                  This sample is a 42-page briefing on street trees. Turn the
                  card over.
                </p>
              </div>
            </div>
            <div className="d2-face d2-back" inert={flipped ? undefined : true}>
              <h2 className="d2-print">{card.kind}</h2>
              <div className="d2-ruled">
                <p>{card.body}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="d2-foot">
          <p className="d2-status" aria-live="polite">
            {flipped
              ? `${card.kind}. Card ${index + 1} of ${cards.length}.`
              : "Front of the card. The sample is on the back."}
          </p>
          <div className="d2-actions">
            <button type="button" onClick={() => setFlipped((value) => !value)}>
              {flipped ? "Turn back" : "Turn the card"}
            </button>
            <button
              type="button"
              onClick={() => {
                setIndex((value) => (value + 1) % cards.length);
                setFlipped(true);
              }}
            >
              Next card
            </button>
          </div>
          <p className="d2-note">
            You upload a PDF. Ratio Reader writes a card for the summary, a
            card for each quote worth keeping, a card for each hint, and a card
            for the insight. Dates, tables, and appendices stay in the original.
            The cards are the way in.
          </p>
          <VersionNav href="/2" />
        </div>
      </main>
    </>
  );
}
