import { useEffect, useState } from "react";
import { DesignNav } from "../components/design-nav.tsx";

const tickets = [
  {
    file: "KAHNEMAN_THINKING.pdf",
    pages: 412,
    kept: "9%",
    time: "6 MIN",
    kind: "BOOK",
    summary:
      "Two systems share one mind. System 1 is fast and cheap and usually right until it is loudly wrong. System 2 is lazy. Most of the book is a catalog of the bills System 1 runs up when nobody is watching.",
    quotes: 7,
    hints: 11,
    insights: 4,
  },
  {
    file: "Q3_BOARD_PACK.pdf",
    pages: 86,
    kept: "11%",
    time: "4 MIN",
    kind: "MEMO",
    summary:
      "Revenue is fine. The problem is concentration: one customer is 31% of bookings and their renewal sits in November. The pack hides this on slide 54. Hire plan should wait on that signature.",
    quotes: 3,
    hints: 5,
    insights: 3,
  },
  {
    file: "CHEN_V_NORTHLINE.pdf",
    pages: 64,
    kept: "8%",
    time: "3 MIN",
    kind: "BRIEF",
    summary:
      "The holding is narrow. Northline won on standing, not on the merits. If Chen refiles with a named plaintiff who bought in-state, the same facts likely survive. Do not celebrate yet.",
    quotes: 5,
    hints: 8,
    insights: 2,
  },
];

export function Design2() {
  const [i, setI] = useState(0);
  const t = tickets[i];

  useEffect(() => {
    document.title = "Ratio Reader — You keep the change";
  }, []);

  return (
    <div className="r">
      <style>{css}</style>
      <DesignNav brand="RATIO" />

      <div className="r-counter">
        <div className="r-machine">
          <div className="r-bezel">
            <span className="r-led" key={`led-${i}`} />
            <span className="r-model">RR-80 THERMAL</span>
            <button
              type="button"
              className="r-feed"
              onClick={() => setI((n) => (n + 1) % tickets.length)}
            >
              FEED NEXT
            </button>
          </div>
          <div className="r-slot" />
        </div>

        <article className="r-slip" key={i}>
          <header className="r-head">
            <p className="r-brand">RATIO READER</p>
            <p className="r-addr">KEEP THE RATIO · DROP THE REST</p>
            <p className="r-rule">********************************</p>
          </header>

          <p className="r-hero">
            412 PAGES IN.
            <br />
            YOU KEEP THE CHANGE.
          </p>

          <dl className="r-meta">
            <div>
              <dt>FILE</dt>
              <dd>{t.file}</dd>
            </div>
            <div>
              <dt>KIND</dt>
              <dd>{t.kind}</dd>
            </div>
            <div>
              <dt>PAGES</dt>
              <dd>{t.pages}</dd>
            </div>
            <div>
              <dt>KEPT</dt>
              <dd>{t.kept}</dd>
            </div>
            <div>
              <dt>READ TIME</dt>
              <dd>{t.time}</dd>
            </div>
          </dl>

          <p className="r-rule">--------------------------------</p>
          <p className="r-sec">* SUMMARY</p>
          <p className="r-body">{t.summary}</p>

          <p className="r-rule">--------------------------------</p>
          <ul className="r-items">
            <li>
              <span>QUOTES, VERBATIM + PAGE</span>
              <span>{t.quotes}</span>
            </li>
            <li>
              <span>HINTS (JARGON, UNPACKED)</span>
              <span>{t.hints}</span>
            </li>
            <li>
              <span>INSIGHTS YOU CAN USE</span>
              <span>{t.insights}</span>
            </li>
            <li>
              <span>ORIGINAL PDF, STILL YOURS</span>
              <span>1</span>
            </li>
          </ul>

          <p className="r-rule">--------------------------------</p>
          <p className="r-sec">* HOW TO PAY</p>
          <p className="r-body">
            Set a PDF on the counter. We read it. You walk out with a slip:
            what it said, the lines worth keeping, the words it assumed you
            knew, and what to do next. No second book. No chat that forgets
            page 40.
          </p>

          <p className="r-rule">--------------------------------</p>
          <p className="r-sec">* WHO COMES TO THIS WINDOW</p>
          <p className="r-body">
            Analysts before a Monday meeting. Students before a seminar.
            Anyone who has paid for a document with hours they did not have.
          </p>

          <div className="r-tear">
            <span>✂ TEAR HERE</span>
          </div>

          <div className="r-stamp-wrap">
            <p className="r-stamp">READ IN FULL</p>
          </div>

          <button type="button" className="r-cta">
            DROP A PDF · GET A SLIP
          </button>

          <p className="r-thanks">THANK YOU FOR READING</p>
          <p className="r-barcode" aria-hidden="true">
            ||| ||||| | || ||||| || ||| | ||||| ||
          </p>
          <p className="r-sku">RR · {t.file.slice(0, 8)} · {t.pages}PG</p>
        </article>
      </div>
    </div>
  );
}

const css = `
  .r {
    --counter: #1c1917;
    --chassis: #3f3a36;
    --thermal: #c5d5c0;
    --ink: #1a1f1c;
    --stamp: #c0392b;
    --led: #e8a317;
    min-height: 100vh;
    background:
      radial-gradient(ellipse at 50% 0%, #2a2522 0%, var(--counter) 55%);
    color: #e8e2d8;
    font-family: Outfit, sans-serif;
    padding-bottom: 4rem;
  }
  .r .dnav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.2rem 6vw 0;
    font-family: "Share Tech Mono", monospace;
    font-size: 12px;
    letter-spacing: 0.14em;
  }
  .r .dnav a { color: #cfc6ba; text-decoration: none; }
  .r .dnav-links { display: flex; gap: 0.8rem; }
  .r .dnav-links a[data-active="true"] { color: var(--led); }
  .r-counter {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem 1rem 0;
  }
  .r-machine { width: min(420px, 92vw); }
  .r-bezel {
    background: linear-gradient(180deg, #4a453f, var(--chassis));
    border-radius: 10px 10px 0 0;
    padding: 0.85rem 1rem;
    display: flex;
    align-items: center;
    gap: 0.7rem;
    box-shadow: inset 0 1px 0 rgba(255,255,255,0.12);
  }
  .r-led {
    width: 9px;
    height: 9px;
    border-radius: 50%;
    background: #5a4a28;
    animation: rled 1.5s ease-out;
  }
  @keyframes rled {
    0%, 75% {
      background: var(--led);
      box-shadow: 0 0 10px var(--led);
    }
    100% {
      background: #5a4a28;
      box-shadow: none;
    }
  }
  .r-model {
    font-family: "Share Tech Mono", monospace;
    font-size: 11px;
    letter-spacing: 0.16em;
    color: #b7aea4;
    flex: 1;
  }
  .r-feed {
    border: 1px solid #6a635c;
    background: #2b2724;
    color: #e8e2d8;
    font-family: "Share Tech Mono", monospace;
    font-size: 11px;
    letter-spacing: 0.08em;
    padding: 0.35rem 0.55rem;
    cursor: pointer;
  }
  .r-feed:hover { border-color: var(--led); color: var(--led); }
  .r-feed:focus-visible { outline: 2px solid var(--led); outline-offset: 2px; }
  .r-slot {
    height: 14px;
    background: #141210;
    box-shadow: inset 0 4px 8px #000;
  }
  .r-slip {
    width: min(420px, 92vw);
    background: var(--thermal);
    color: var(--ink);
    font-family: "Share Tech Mono", monospace;
    padding: 1.6rem 1.4rem 2rem;
    box-shadow: 0 24px 50px rgba(0,0,0,0.35);
    clip-path: polygon(
      0 0, 100% 0, 100% calc(100% - 12px),
      96% 100%, 92% calc(100% - 12px), 88% 100%, 84% calc(100% - 12px),
      80% 100%, 76% calc(100% - 12px), 72% 100%, 68% calc(100% - 12px),
      64% 100%, 60% calc(100% - 12px), 56% 100%, 52% calc(100% - 12px),
      48% 100%, 44% calc(100% - 12px), 40% 100%, 36% calc(100% - 12px),
      32% 100%, 28% calc(100% - 12px), 24% 100%, 20% calc(100% - 12px),
      16% 100%, 12% calc(100% - 12px), 8% 100%, 4% calc(100% - 12px), 0 100%
    );
    transform-origin: top center;
    animation: rprint 1.5s ease-out both;
  }
  @keyframes rprint {
    from { max-height: 80px; opacity: 0.4; }
    to { max-height: 2400px; opacity: 1; }
  }
  .r-brand {
    font-family: "Special Elite", "Courier New", monospace;
    font-size: 1.55rem;
    text-align: center;
    margin: 0 0 0.3rem;
    letter-spacing: 0.04em;
  }
  .r-addr, .r-thanks, .r-sku {
    text-align: center;
    margin: 0;
    font-size: 12px;
    letter-spacing: 0.08em;
  }
  .r-rule {
    text-align: center;
    margin: 0.85rem 0;
    letter-spacing: 0.08em;
  }
  .r-hero {
    font-family: "Special Elite", monospace;
    font-size: clamp(1.4rem, 4vw, 1.75rem);
    text-align: center;
    line-height: 1.25;
    margin: 0.4rem 0 0.2rem;
  }
  .r-meta { margin: 0; }
  .r-meta div {
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    font-size: 13px;
    line-height: 1.7;
  }
  .r-meta dt { color: #3d4a40; }
  .r-meta dd { margin: 0; text-align: right; }
  .r-sec { margin: 0 0 0.45rem; font-size: 13px; }
  .r-body {
    margin: 0;
    font-size: 13px;
    line-height: 1.55;
    text-transform: uppercase;
  }
  .r-items { list-style: none; margin: 0; padding: 0; }
  .r-items li {
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    font-size: 13px;
    line-height: 1.8;
  }
  .r-tear {
    border-top: 1px dashed #1a1f1c;
    border-bottom: 1px dashed #1a1f1c;
    margin: 1.1rem 0;
    padding: 0.35rem 0;
    text-align: center;
    font-size: 11px;
    letter-spacing: 0.2em;
    color: #3d4a40;
  }
  .r-stamp-wrap { display: flex; justify-content: center; margin: 0.6rem 0 1rem; }
  .r-stamp {
    margin: 0;
    font-family: "Special Elite", monospace;
    font-size: 1.35rem;
    color: var(--stamp);
    border: 3px solid var(--stamp);
    padding: 0.35rem 0.7rem;
    transform: rotate(-8deg);
    letter-spacing: 0.12em;
    opacity: 0.85;
  }
  .r-cta {
    display: block;
    width: 100%;
    border: 2px solid var(--ink);
    background: var(--ink);
    color: var(--thermal);
    font-family: "Share Tech Mono", monospace;
    font-size: 13px;
    letter-spacing: 0.08em;
    padding: 0.85rem 0.6rem;
    cursor: pointer;
  }
  .r-cta:hover { background: transparent; color: var(--ink); }
  .r-cta:focus-visible { outline: 3px solid var(--stamp); outline-offset: 3px; }
  .r-thanks { margin-top: 1.2rem; }
  .r-barcode {
    text-align: center;
    margin: 0.4rem 0 0.2rem;
    letter-spacing: -0.08em;
    font-size: 18px;
  }
  .r-sku { color: #3d4a40; }
`;
