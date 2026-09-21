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
import "./five.css";

export function DesignFive() {
  usePage("Long read — Ratio Reader", "#e4e6ea");
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <>
      <Skip />
      <main className="d5" id="content">
        <div className="d5-wrap">
          <h1>Ratio Reader keeps four sentences of this excerpt.</h1>
          <p className="d5-intro">
            The briefing is 42 pages on street trees. The pale lines stay in
            the original. Open a dark sentence for the hint and the reason it
            was kept.
          </p>
          <article className="d5-article">
            {sentences.map((sentence) => {
              if (!sentence.kept) {
                return (
                  <p key={sentence.id} className="d5-fog">
                    {sentence.text}
                  </p>
                );
              }

              const open = openId === sentence.id;

              return (
                <p
                  key={sentence.id}
                  className={sentence.id === "shade" ? "d5-kept d5-hero" : "d5-kept"}
                >
                  <button
                    type="button"
                    aria-expanded={open}
                    onClick={() => setOpenId(open ? null : sentence.id)}
                  >
                    {sentence.text}
                    <span className="vh">
                      {open ? " Hide the note" : " Show the hint and the insight"}
                    </span>
                  </button>
                  {open ? (
                    <div className="d5-panel">
                      <p>{sentence.note}</p>
                      {sentence.hint ? <p>{sentence.hint}</p> : null}
                      {sentence.insight ? <p>{sentence.insight}</p> : null}
                    </div>
                  ) : null}
                </p>
              );
            })}

            <h2>What comes back</h2>
            <h3>Summary</h3>
            <p className="d5-close">{summary}</p>
            <h3>Quote</h3>
            <blockquote>“{quote}”</blockquote>
            <h3>Hint</h3>
            <p className="d5-close">{pitHint}</p>
            <h3>Insight</h3>
            <p className="d5-close">{insightText}</p>
            <h2>Upload a PDF</h2>
            <p className="d5-close">
              Ratio Reader does this to the file you give it. You read the dark
              sentences first. You open one when the wording gets thick. Dates,
              tables, and appendices stay in the original, where you can still
              find them.
            </p>
          </article>
          <VersionNav href="/5" />
        </div>
      </main>
    </>
  );
}
