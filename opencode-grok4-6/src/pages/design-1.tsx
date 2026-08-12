import { useEffect, useState } from "react";
import { DesignNav } from "../components/design-nav.tsx";

const tabs = [
  {
    id: "summary",
    color: "#FF6B9D",
    label: "Summary",
    title: "What the paper is actually saying",
    body: "Working memory does not fail because people are careless. It fails when two tasks compete for the same rehearsal loop. The authors show this across four dual-task experiments, then argue that “pay more attention” is the wrong prescription. The useful move is to change the structure of the second task.",
  },
  {
    id: "quotes",
    color: "#FFE24A",
    label: "Quotes",
    title: "Lines worth stealing",
    body: "“Attention is not a spotlight you aim. It is a budget you spend, and most documents do not tell you the price of a page.” — p. 17",
    extra:
      "“Subjects who were told to try harder performed worse than subjects who were given a quieter second task.” — p. 41",
  },
  {
    id: "hints",
    color: "#7DCEA0",
    label: "Hints",
    title: "Words the paper assumes you know",
    body: "Articulatory suppression: saying “the the the” out loud so you cannot rehearse other words in your head. The paper uses it as a wedge — if a result survives this, it is not just inner speech.",
    extra:
      "Load theory: you do not filter first and then see. You see first, and only filter when the scene is already full.",
  },
  {
    id: "insights",
    color: "#2558D6",
    label: "Insights",
    title: "What to do with this on Monday",
    body: "If you are briefing a team, do not add a second slide deck “for context.” That second deck is the competing task. Put the decision at the top and let context be optional. The paper’s own data says optional context is read more carefully than mandatory context.",
  },
] as const;

const ghost =
  "Dual-task interference has been treated as a failure of motivation rather than a structural limit of the phonological loop. In four experiments (N = 312) we asked participants to retain a six-digit string while performing a secondary visual search. When the secondary task was silent, accuracy held. When participants were required to whisper a repeated syllable, digit recall collapsed, even among those instructed to concentrate. The implication is not that readers should try harder. It is that a document which asks for two kinds of work at once will lose the more fragile of the two, usually the one the author cared about.";

export function Design1() {
  const [active, setActive] = useState<(typeof tabs)[number]>(tabs[0]);
  const [fed, setFed] = useState(false);

  useEffect(() => {
    document.title = "Ratio Reader — Keep the ratio";
  }, []);

  return (
    <div className="x">
      <style>{css}</style>
      <div className="x-grain" aria-hidden="true" />
      <DesignNav brand="RATIO" />

      <aside className="x-tabs" aria-label="What comes back">
        {tabs.map((t) => (
          <button
            key={t.id}
            type="button"
            className="x-tab"
            style={{ background: t.color }}
            data-on={active.id === t.id ? "true" : "false"}
            onClick={() => setActive(t)}
          >
            {t.label}
          </button>
        ))}
      </aside>

      <header className="x-hero">
        <p className="x-file">
          <span>file</span> baddeley-hitch-reprint.pdf · 48 pages · xerox
        </p>
        <div className="x-stack">
          <p className="x-ghost">{ghost}</p>
          <h1>
            <span className="x-mark">Keep the ratio.</span>
            <span className="x-rest">Drop the rest.</span>
          </h1>
        </div>
        <p className="x-lead">
          Ratio Reader takes a long PDF and returns the small part that changes
          what you think: a summary, the quotes, the jargon, the implication.
          Not another document. A marked-up one.
        </p>
        <div className="x-cta">
          <button type="button" className="x-btn" onClick={() => setFed(true)}>
            {fed ? "Paper is on the desk" : "Drop a PDF on the desk"}
          </button>
          <p className="x-cta-note">
            {fed
              ? "A 48-page reprint just became four tabs on the left."
              : "Research papers, memos, books. We keep about one page in twelve."}
          </p>
        </div>
      </header>

      <section className="x-card" aria-live="polite">
        <div className="x-card-tab" style={{ background: active.color }} />
        <p className="x-card-k">{active.label}</p>
        <h2>{active.title}</h2>
        <p>{active.body}</p>
        {"extra" in active && active.extra ? <p>{active.extra}</p> : null}
      </section>

      <section className="x-how">
        <h2>Three marks on the page</h2>
        <ol>
          <li>
            <strong>You set the paper down.</strong>
            <span> A PDF is a stack. We do not pretend it is a chat.</span>
          </li>
          <li>
            <strong>We read it the way a tired colleague would.</strong>
            <span>
              {" "}
              Underline the claim. Box the evidence. Scribble “what is this
              word” in the margin.
            </span>
          </li>
          <li>
            <strong>You get the marked copy back.</strong>
            <span>
              {" "}
              Summary, quotes with page numbers, hints for jargon, and one
              insight you can act on.
            </span>
          </li>
        </ol>
      </section>

      <section className="x-who">
        <h2>Who keeps a highlighter in the bag</h2>
        <ul>
          <li>A student with two seminars and one Sunday.</li>
          <li>A lawyer who needs the holding, not the history.</li>
          <li>A founder reading a 90-page diligence memo at 11pm.</li>
        </ul>
      </section>

      <footer className="x-foot">
        <p>Ratio Reader</p>
        <p>The document stays whole. Your attention does not have to.</p>
      </footer>
    </div>
  );
}

const css = `
  .x {
    --paper: #d4d0c7;
    --ink: #1b2130;
    --mute: #5c6170;
    --mark: #ffe24a;
    --pen: #2558d6;
    min-height: 100vh;
    background: var(--paper);
    color: var(--ink);
    font-family: Literata, "Times New Roman", serif;
    position: relative;
    overflow-x: hidden;
    padding: 0 7vw 6rem;
  }
  .x-grain {
    pointer-events: none;
    position: fixed;
    inset: 0;
    opacity: 0.18;
    background-image:
      radial-gradient(rgba(40, 36, 28, 0.35) 0.6px, transparent 0.7px),
      radial-gradient(rgba(255, 255, 255, 0.25) 0.5px, transparent 0.6px);
    background-size: 3px 3px, 5px 5px;
    background-position: 0 0, 1px 2px;
    mix-blend-mode: multiply;
  }
  .x .dnav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.4rem 0 0;
    font-family: "IBM Plex Mono", monospace;
    font-size: 12px;
    letter-spacing: 0.08em;
  }
  .x .dnav a { color: var(--ink); text-decoration: none; }
  .x .dnav-links { display: flex; gap: 0.85rem; }
  .x .dnav-links a[data-active="true"] {
    background: var(--mark);
    padding: 0 0.25rem;
  }
  .x-tabs {
    position: fixed;
    left: 0;
    top: 28vh;
    z-index: 4;
    display: flex;
    flex-direction: column;
    gap: 0.45rem;
  }
  .x-tab {
    border: 0;
    width: 38px;
    padding: 1.1rem 0.15rem;
    writing-mode: vertical-rl;
    transform: rotate(180deg);
    font-family: "IBM Plex Mono", monospace;
    font-size: 11px;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    cursor: pointer;
    color: #1b2130;
    box-shadow: 2px 2px 0 rgba(0,0,0,0.12);
    clip-path: polygon(0 8px, 8px 0, 100% 0, 100% 100%, 8px 100%, 0 calc(100% - 8px));
  }
  .x-tab[data-on="true"] { width: 46px; }
  .x-hero { padding: 12vh 0 4rem; max-width: 58rem; margin-left: 3rem; }
  .x-file {
    font-family: "IBM Plex Mono", monospace;
    font-size: 12px;
    color: var(--mute);
    margin: 0 0 2rem;
  }
  .x-file span { color: var(--pen); }
  .x-stack { position: relative; min-height: 14rem; margin-bottom: 2rem; }
  .x-ghost {
    position: absolute;
    inset: 0;
    margin: 0;
    font-size: clamp(0.95rem, 1.5vw, 1.15rem);
    line-height: 1.7;
    color: #8a8680;
    user-select: none;
  }
  .x-hero h1 {
    position: relative;
    margin: 1.6rem 0 0;
    font-family: Anton, Impact, sans-serif;
    font-weight: 400;
    font-size: clamp(3.4rem, 10vw, 7.2rem);
    line-height: 0.86;
    letter-spacing: -0.01em;
    text-transform: uppercase;
  }
  .x-mark {
    display: inline;
    background-image: linear-gradient(var(--mark), var(--mark));
    background-repeat: no-repeat;
    background-size: 0% 82%;
    background-position: 0 78%;
    animation: xswipe 1.15s cubic-bezier(0.2, 0.7, 0.2, 1) 0.25s forwards;
    padding: 0 0.08em;
  }
  .x-rest { display: block; color: var(--ink); }
  @keyframes xswipe { to { background-size: 100% 82%; } }
  .x-lead {
    max-width: 36rem;
    font-size: 1.2rem;
    line-height: 1.55;
    margin: 0 0 2rem;
  }
  .x-cta { display: flex; flex-wrap: wrap; gap: 1rem 1.5rem; align-items: center; }
  .x-btn {
    border: 0;
    background: var(--ink);
    color: var(--paper);
    font-family: "IBM Plex Mono", monospace;
    font-size: 13px;
    letter-spacing: 0.04em;
    padding: 0.95rem 1.25rem;
    cursor: pointer;
  }
  .x-btn:hover { background: var(--pen); }
  .x-btn:focus-visible { outline: 3px solid var(--mark); outline-offset: 3px; }
  .x-cta-note { margin: 0; color: var(--mute); font-size: 0.95rem; max-width: 22rem; }
  .x-card {
    position: relative;
    max-width: 40rem;
    margin: 0 0 5rem 3rem;
    background: #efece4;
    padding: 2rem 2rem 2.2rem 2.4rem;
    box-shadow: 0 18px 40px rgba(40, 30, 10, 0.08);
    transform: rotate(-0.4deg);
  }
  .x-card-tab {
    position: absolute;
    top: -14px;
    right: 2rem;
    width: 46px;
    height: 28px;
    clip-path: polygon(8px 0, calc(100% - 8px) 0, 100% 100%, 0 100%);
  }
  .x-card-k {
    font-family: "IBM Plex Mono", monospace;
    font-size: 11px;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    margin: 0 0 0.6rem;
    color: var(--mute);
  }
  .x-card h2 {
    font-family: Anton, sans-serif;
    font-weight: 400;
    text-transform: uppercase;
    font-size: clamp(1.8rem, 4vw, 2.6rem);
    line-height: 0.95;
    margin: 0 0 1rem;
  }
  .x-card p { margin: 0 0 0.9rem; font-size: 1.08rem; line-height: 1.6; }
  .x-how, .x-who { max-width: 40rem; margin: 0 0 4rem 3rem; }
  .x-how h2, .x-who h2 {
    font-family: Anton, sans-serif;
    font-weight: 400;
    text-transform: uppercase;
    font-size: 2rem;
    margin: 0 0 1.2rem;
  }
  .x-how ol { margin: 0; padding: 0; list-style: none; }
  .x-how li {
    padding: 1rem 0;
    border-top: 1px dashed #8a8680;
    font-size: 1.05rem;
    line-height: 1.55;
  }
  .x-how li:last-child { border-bottom: 1px dashed #8a8680; }
  .x-who ul { margin: 0; padding: 0; list-style: none; }
  .x-who li {
    padding: 0.55rem 0 0.55rem 1.2rem;
    position: relative;
    font-size: 1.08rem;
  }
  .x-who li::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0.95rem;
    width: 0.65rem;
    height: 0.65rem;
    background: var(--mark);
  }
  .x-foot {
    margin-left: 3rem;
    padding-top: 2rem;
    border-top: 2px solid var(--ink);
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    font-family: "IBM Plex Mono", monospace;
    font-size: 12px;
  }
  @media (max-width: 800px) {
    .x { padding: 0 5vw 4rem; }
    .x-hero, .x-card, .x-how, .x-who, .x-foot { margin-left: 2.2rem; }
    .x-tabs { top: auto; bottom: 0; left: 0; right: 0; flex-direction: row; }
    .x-tab {
      writing-mode: horizontal-tb;
      transform: none;
      width: auto;
      flex: 1;
      padding: 0.7rem 0.2rem;
      clip-path: polygon(8px 0, calc(100% - 8px) 0, 100% 100%, 0 100%);
    }
    .x-tab[data-on="true"] { width: auto; }
    .x-stack { min-height: 11rem; }
    .x-foot { flex-direction: column; }
  }
`;
