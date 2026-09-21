import { useRef, useState } from "react";
import {
  insightText,
  kindLabel,
  pitHint,
  quote,
  sentences,
  summary,
} from "../content.ts";
import { Skip, VersionNav } from "../site.tsx";
import { usePage } from "../use-page.ts";
import "./one.css";

export function DesignOne() {
  usePage("Exam sheet — Ratio Reader", "#e6edf2");
  const [activeId, setActiveId] = useState("shade");
  const asideRef = useRef<HTMLElement>(null);
  const active =
    sentences.find((sentence) => sentence.id === activeId) ?? sentences[3];

  function selectSentence(id: string) {
    setActiveId(id);
    if (window.matchMedia("(max-width: 800px)").matches) {
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      asideRef.current?.scrollIntoView({
        behavior: reduce ? "auto" : "smooth",
        block: "nearest",
      });
    }
  }

  return (
    <>
      <Skip />
      <div className="d1">
        <p className="d1-spine">Ratio Reader</p>
        <div className="d1-paper">
          <div className="d1-sheet">
            <main className="d1-main" id="content">
              <h1>Street trees as infrastructure</h1>
              <p className="d1-instruct">
                A fifteen-sentence excerpt from a 42-page city briefing. Click
                a sentence. Ratio Reader keeps four of them. The margin says
                why.
              </p>
              <p className="d1-prose">
                {sentences.map((sentence) => (
                  <span key={sentence.id}>
                    <button
                      type="button"
                      aria-pressed={sentence.id === activeId}
                      className={sentence.kept ? "is-kept" : undefined}
                      onClick={() => selectSentence(sentence.id)}
                    >
                      {sentence.text}
                    </button>{" "}
                  </span>
                ))}
              </p>
            </main>
            <aside className="d1-aside" aria-live="polite" ref={asideRef}>
              <h2>
                {active.kept && active.kind
                  ? kindLabel[active.kind]
                  : "Left in the original"}
              </h2>
              <p>{active.note}</p>
              {active.hint ? (
                <>
                  <h3>Hint</h3>
                  <p>{active.hint}</p>
                </>
              ) : null}
              {active.insight ? (
                <>
                  <h3>Insight</h3>
                  <p>{active.insight}</p>
                </>
              ) : null}
            </aside>
          </div>
          <div className="d1-wave-wrap">
            <div className="d1-wave" aria-hidden="true">
              {sentences.map((sentence) => (
                <span
                  key={sentence.id}
                  className={`${sentence.kept ? "is-kept" : ""} ${sentence.id === activeId ? "is-active" : ""}`.trim()}
                  style={{ height: `${sentence.mass}%` }}
                />
              ))}
            </div>
            <p>
              Each bar is a sentence in the excerpt. The four tall bars are the
              ones Ratio Reader keeps.
            </p>
          </div>
          <section className="d1-after">
            <h2>What you get back</h2>
            <p className="d1-doc">{summary}</p>
            <blockquote className="d1-doc">“{quote}”</blockquote>
            <p>That line stays in the author’s words.</p>
            <h2>The hint you would have needed</h2>
            <p>{pitHint}</p>
            <h2>The insight</h2>
            <p>{insightText}</p>
            <h2>What you do</h2>
            <ol>
              <li>Upload a PDF.</li>
              <li>
                Read the marked sentences: the summary, the quotes, the hints,
                and the insights.
              </li>
              <li>
                Leave the dates, the tables, and the appendices in the original
                until you need them.
              </li>
            </ol>
            <VersionNav href="/1" />
          </section>
        </div>
      </div>
    </>
  );
}
