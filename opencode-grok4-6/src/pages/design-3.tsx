import { useEffect, useState } from "react";
import { DesignNav } from "../components/design-nav.tsx";

const frames = [
  {
    id: "SUM",
    title: "FRAME 01 · SUMMARY",
    kicker: "REDUCED FROM 126 FRAMES",
    body: "The archive box is labeled “Climate finance, 2019–2024.” What it actually contains is an argument: public money crowds in private money only when the first-loss piece is real, not ceremonial. Three case studies (Indonesia, Senegal, Chile) agree. Two (UK green gilts, a US municipal experiment) do not, because the first-loss was a press release.",
  },
  {
    id: "QTE",
    title: "FRAME 02 · QUOTES",
    kicker: "VERBATIM · WITH SHELF MARKS",
    body: "“Blended finance fails in the same way bad lighting fails: everyone can see the object, nobody can see the edges.” — p. 22\n\n“A guarantee that cannot be called is not a guarantee. It is stationery.” — p. 67",
  },
  {
    id: "HNT",
    title: "FRAME 03 · HINTS",
    kicker: "WORDS THE FICHE ASSUMES",
    body: "First-loss tranche: the slice of a deal that gets hurt first. If this slice is fake, the rest of the capital is just applauding.\n\nAdditionality: would this project have happened anyway? If yes, the public money bought a ribbon, not a bridge.",
  },
  {
    id: "INS",
    title: "FRAME 04 · INSIGHT",
    kicker: "WHY THIS BOX WAS PULLED",
    body: "If you are writing a memo this week, ask one question the paper keeps asking: can the first-loss actually be lost? If legal ops cannot point to the clause, you do not have a structure. You have a story about a structure.",
  },
];

export function Design3() {
  const [on, setOn] = useState(false);
  const [frame, setFrame] = useState(0);

  useEffect(() => {
    document.title = "Ratio Reader — Special collections";
  }, []);

  return (
    <div className="f">
      <style>{css}</style>
      <DesignNav brand="RR ARCHIVE" />

      <div className="f-desk">
        <header className="f-intro">
          <p className="f-kicker">Municipal library · special collections</p>
          <h1>Slide the film in. We light the frames that matter.</h1>
          <p className="f-lead">
            Ratio Reader is a fiche viewer for PDFs. A long document goes in as
            a sheet of film. The screen comes back with four frames: summary,
            quotes, hints, insight. The rest of the reel stays in the jacket.
          </p>
        </header>

        <div className="f-rig">
          <div className="f-housing">
            <div className="f-top">
              <span className="f-plate">RATIO · MODEL 16MM</span>
              <span className="f-serial">SN 08441</span>
            </div>

            <div className="f-screen" data-lit={on ? "true" : "false"}>
              {!on ? (
                <div className="f-off">
                  <p>VIEWER STANDBY</p>
                  <p>LOAD A DOCUMENT TO ILLUMINATE</p>
                </div>
              ) : (
                <div className="f-on">
                  <p className="f-scan">{frames[frame].kicker}</p>
                  <h2>{frames[frame].title}</h2>
                  <p className="f-copy">{frames[frame].body}</p>
                </div>
              )}
              <div className="f-scanline" aria-hidden="true" />
            </div>

            <div className="f-controls">
              <button
                type="button"
                className="f-power"
                data-on={on ? "true" : "false"}
                onClick={() => setOn((v) => !v)}
              >
                {on ? "LAMP ON" : "LAMP OFF"}
              </button>
              <p className="f-dial">FOCUS · FIXED AT RATIO 1:12</p>
            </div>
          </div>

          <div className="f-strip-wrap">
            <p className="f-strip-label">Film strip · click a frame</p>
            <div className="f-strip" role="tablist" aria-label="Fiche frames">
              {frames.map((fr, i) => (
                <button
                  key={fr.id}
                  type="button"
                  role="tab"
                  aria-selected={on && frame === i}
                  className="f-cell"
                  data-active={on && frame === i ? "true" : "false"}
                  onClick={() => {
                    setOn(true);
                    setFrame(i);
                  }}
                >
                  <span className="f-cell-id">{fr.id}</span>
                  <span className="f-cell-lines" aria-hidden="true">
                    <i />
                    <i />
                    <i />
                    <i />
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>

        <section className="f-card">
          <h2>What the jacket holds</h2>
          <ul>
            <li>
              <strong>Summary.</strong> The claim, the evidence, the limit —
              written as if the archivist had to put it on one card.
            </li>
            <li>
              <strong>Quotes.</strong> Sentences copied exactly, with the page
              they came from, so you can go back to the reel.
            </li>
            <li>
              <strong>Hints.</strong> The words the author did not define.
              Ratio writes the definition in the margin of the frame.
            </li>
            <li>
              <strong>Insights.</strong> Why this document was worth pulling
              from the stack today.
            </li>
          </ul>
        </section>

        <section className="f-card">
          <h2>Hours of the reading room</h2>
          <p>
            Built for people who still have to finish the document, just not
            tonight: policy staff, doctoral students, investigators, anyone
            who has sat under a lamp with a box of paper and a deadline.
          </p>
          <button type="button" className="f-cta">
            Request a PDF from the desk
          </button>
        </section>
      </div>
    </div>
  );
}

const css = `
  .f {
    --desk: #1e2228;
    --housing: #5c6570;
    --bezel: #2c313c;
    --screen: #1a1208;
    --phosphor: #f0b060;
    --plate: #c4b7a2;
    --stamp: #6b1d2a;
    min-height: 100vh;
    background:
      linear-gradient(180deg, #252a32 0%, var(--desk) 30%, #171b20 100%);
    color: #d7d2c8;
    font-family: "Libre Franklin", sans-serif;
    padding-bottom: 5rem;
  }
  .f .dnav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.2rem 6vw 0;
    font-family: Inconsolata, monospace;
    font-size: 13px;
    letter-spacing: 0.12em;
  }
  .f .dnav a { color: #b7b1a6; text-decoration: none; }
  .f .dnav-links { display: flex; gap: 0.85rem; }
  .f .dnav-links a[data-active="true"] { color: var(--phosphor); }
  .f-desk { width: min(920px, 92vw); margin: 0 auto; }
  .f-intro { padding: 3.5rem 0 2rem; max-width: 38rem; }
  .f-kicker {
    font-family: Inconsolata, monospace;
    font-size: 12px;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--plate);
    margin: 0 0 1rem;
  }
  .f-intro h1 {
    font-family: "Bodoni Moda", serif;
    font-weight: 600;
    font-size: clamp(2.2rem, 5.5vw, 3.6rem);
    line-height: 0.98;
    letter-spacing: -0.02em;
    color: #f3ece1;
    margin: 0 0 1.1rem;
  }
  .f-lead { margin: 0; color: #c2bbb0; font-size: 1.05rem; line-height: 1.6; }
  .f-housing {
    background: linear-gradient(180deg, #6a7380, var(--housing) 40%, #4a525c);
    border-radius: 6px 6px 2px 2px;
    padding: 0.8rem 0.8rem 1rem;
    box-shadow:
      0 30px 60px rgba(0,0,0,0.35),
      inset 0 1px 0 rgba(255,255,255,0.18);
  }
  .f-top {
    display: flex;
    justify-content: space-between;
    padding: 0.2rem 0.4rem 0.7rem;
    font-family: Inconsolata, monospace;
    font-size: 11px;
    letter-spacing: 0.16em;
    color: #1b1e24;
  }
  .f-screen {
    position: relative;
    background: #0b0906;
    min-height: 280px;
    border: 10px solid var(--bezel);
    box-shadow: inset 0 0 40px #000;
    overflow: hidden;
  }
  .f-screen[data-lit="true"] {
    background: radial-gradient(ellipse at 50% 40%, #2a1c0c 0%, var(--screen) 70%);
  }
  .f-off {
    height: 280px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.4rem;
    font-family: Inconsolata, monospace;
    letter-spacing: 0.18em;
    color: #3a3228;
    font-size: 12px;
  }
  .f-on { padding: 1.6rem 1.8rem 2rem; color: var(--phosphor); }
  .f-scan {
    font-family: Inconsolata, monospace;
    font-size: 11px;
    letter-spacing: 0.2em;
    margin: 0 0 0.7rem;
    opacity: 0.75;
  }
  .f-on h2 {
    font-family: "Bodoni Moda", serif;
    font-weight: 600;
    font-size: clamp(1.4rem, 3vw, 2rem);
    margin: 0 0 1rem;
    color: #ffd89a;
  }
  .f-copy {
    margin: 0;
    font-size: 1rem;
    line-height: 1.6;
    white-space: pre-wrap;
    text-shadow: 0 0 12px rgba(240, 176, 96, 0.25);
  }
  .f-scanline {
    pointer-events: none;
    position: absolute;
    inset: 0;
    background: repeating-linear-gradient(
      to bottom,
      transparent 0 2px,
      rgba(0,0,0,0.12) 2px 3px
    );
    mix-blend-mode: multiply;
  }
  .f-screen[data-lit="true"] .f-scanline {
    animation: froll 7s linear infinite;
    background:
      linear-gradient(to bottom, transparent 40%, rgba(240,176,96,0.07) 50%, transparent 60%),
      repeating-linear-gradient(to bottom, transparent 0 2px, rgba(0,0,0,0.15) 2px 3px);
    background-size: 100% 200%, 100% 3px;
  }
  @keyframes froll { to { background-position: 0 100%, 0 0; } }
  .f-controls {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.75rem 0.4rem 0.15rem;
  }
  .f-power {
    border: 0;
    background: #2a2f36;
    color: #d7d2c8;
    font-family: Inconsolata, monospace;
    letter-spacing: 0.14em;
    font-size: 12px;
    padding: 0.55rem 0.85rem;
    cursor: pointer;
    box-shadow: 0 2px 0 #1a1d22;
  }
  .f-power[data-on="true"] { color: var(--phosphor); }
  .f-power:focus-visible { outline: 2px solid var(--phosphor); outline-offset: 3px; }
  .f-dial {
    margin: 0;
    font-family: Inconsolata, monospace;
    font-size: 11px;
    letter-spacing: 0.12em;
    color: #1b1e24;
  }
  .f-strip-wrap { margin: 1.2rem 0 3rem; }
  .f-strip-label {
    font-family: Inconsolata, monospace;
    font-size: 11px;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: #8c867c;
    margin: 0 0 0.55rem;
  }
  .f-strip {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 0.45rem;
    background: #0f1114;
    padding: 0.45rem;
  }
  .f-cell {
    border: 1px solid #3a3228;
    background: #1a140e;
    min-height: 88px;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 0.45rem;
    color: #8a7a60;
  }
  .f-cell[data-active="true"] {
    border-color: var(--phosphor);
    color: var(--phosphor);
    box-shadow: inset 0 0 20px rgba(240,176,96,0.15);
  }
  .f-cell:focus-visible { outline: 2px solid var(--phosphor); }
  .f-cell-id { font-family: Inconsolata, monospace; font-size: 12px; letter-spacing: 0.14em; }
  .f-cell-lines { display: flex; flex-direction: column; gap: 4px; }
  .f-cell-lines i {
    display: block;
    height: 2px;
    background: currentColor;
    opacity: 0.45;
  }
  .f-cell-lines i:nth-child(2) { width: 80%; }
  .f-cell-lines i:nth-child(3) { width: 64%; }
  .f-card {
    border-top: 1px solid #3a4048;
    padding: 2rem 0 0.5rem;
    max-width: 40rem;
  }
  .f-card h2 {
    font-family: "Bodoni Moda", serif;
    font-size: 1.8rem;
    font-weight: 600;
    margin: 0 0 1rem;
    color: #f3ece1;
  }
  .f-card ul { margin: 0; padding: 0; list-style: none; }
  .f-card li { margin: 0 0 0.9rem; line-height: 1.55; color: #c2bbb0; }
  .f-card p { margin: 0 0 1.4rem; line-height: 1.6; color: #c2bbb0; }
  .f-cta {
    border: 1px solid var(--phosphor);
    background: transparent;
    color: var(--phosphor);
    font-family: Inconsolata, monospace;
    letter-spacing: 0.12em;
    font-size: 13px;
    padding: 0.85rem 1.1rem;
    cursor: pointer;
  }
  .f-cta:hover { background: var(--phosphor); color: #1a1208; }
  .f-cta:focus-visible { outline: 2px solid var(--phosphor); outline-offset: 3px; }
  @media (max-width: 640px) {
    .f-strip { grid-template-columns: repeat(2, 1fr); }
    .f-on { padding: 1.1rem; }
  }
`;
