import { useEffect, useState } from "react";

/* ─────────────────────────────────────────────────────────────────────────────
   DESIGN 02 · BLUEPRINT
   A cyanotype drawing sheet. The thesis: a document has a structure, and Ratio
   Reader draws it — pages compress into evidence, evidence into claims, claims
   into one thesis. Everything borrows the vernacular of a drafting sheet: a
   grid, dimension lines, a legend, general notes and a title block.
   Committed single-theme: a blueprint is not a thing that has a light mode.
   ────────────────────────────────────────────────────────────────────────── */

const CSS = `
.bp {
  --cyan: #0C2A4D;
  --chalk: #EAF1F7;
  --chalk-dim: #A9C2D8;
  --line: rgba(234, 241, 247, 0.28);
  --line-soft: rgba(234, 241, 247, 0.14);
  --ochre: #E0A43A;
  --panel: rgba(234, 241, 247, 0.045);
  background-color: var(--cyan);
  background-image:
    linear-gradient(var(--line-soft) 1px, transparent 1px),
    linear-gradient(90deg, var(--line-soft) 1px, transparent 1px),
    linear-gradient(rgba(234, 241, 247, 0.055) 1px, transparent 1px),
    linear-gradient(90deg, rgba(234, 241, 247, 0.055) 1px, transparent 1px);
  background-size: 120px 120px, 120px 120px, 24px 24px, 24px 24px;
  background-position: -1px -1px;
  color: var(--chalk);
  font-family: var(--font-plex);
  font-size: 15.5px;
  line-height: 1.6;
  overflow-x: clip;
}
.bp ::selection { background: var(--ochre); color: #23180A; }
.bp :focus-visible { outline: 2px solid var(--ochre); outline-offset: 3px; }

/* Type ---------------------------------------------------------------------- */
.bp-title {
  font-family: var(--font-saira);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.005em;
  line-height: 0.92;
  text-wrap: balance;
}
.bp-sub {
  font-family: var(--font-saira);
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.06em;
}
.bp-mono {
  font-family: var(--font-plexmono);
  font-size: 11px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--chalk-dim);
}
.bp-num { font-variant-numeric: tabular-nums; }
/* figures keep their own case: uppercasing "40 s" into "40 S" reads as a typo */
.bp-stat {
  font-family: var(--font-saira);
  font-weight: 600;
  letter-spacing: 0.01em;
  font-variant-numeric: tabular-nums;
}

/* Panels: drawn, not filled ------------------------------------------------- */
.bp-panel {
  border: 1px solid var(--line);
  background: var(--panel);
  position: relative;
}
/* corner ticks, the way a drawing frames a detail */
.bp-tick::before,
.bp-tick::after {
  content: "";
  position: absolute;
  width: 9px;
  height: 9px;
  border: 1px solid var(--ochre);
}
.bp-tick::before { top: -1px; left: -1px; border-right: 0; border-bottom: 0; }
.bp-tick::after { bottom: -1px; right: -1px; border-left: 0; border-top: 0; }

/* Buttons ------------------------------------------------------------------- */
.bp-btn {
  font-family: var(--font-saira);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-weight: 600;
  font-size: 15px;
  padding: 0.7rem 1.4rem;
  background: var(--ochre);
  color: #1B1206;
  border: 1px solid var(--ochre);
  transition: background 140ms ease, color 140ms ease;
}
.bp-btn:hover { background: #F0BA5C; }
.bp-btn-line {
  background: transparent;
  color: var(--chalk);
  border-color: var(--line);
}
.bp-btn-line:hover { border-color: var(--chalk); background: rgba(234,241,247,0.07); }

/* Drop zone ---------------------------------------------------------------- */
.bp-drop {
  border: 1.5px dashed var(--line);
  transition: border-color 160ms ease, background 160ms ease;
}
.bp-drop:hover { border-color: var(--ochre); background: rgba(224,164,58,0.06); }

/* Scale selector ----------------------------------------------------------- */
.bp-scale {
  font-family: var(--font-plexmono);
  font-size: 12px;
  letter-spacing: 0.1em;
  padding: 0.45rem 0.9rem;
  border: 1px solid var(--line);
  background: transparent;
  color: var(--chalk-dim);
  transition: all 140ms ease;
}
.bp-scale:hover { color: var(--chalk); border-color: var(--chalk); }
.bp-scale[aria-pressed="true"] {
  background: var(--chalk);
  border-color: var(--chalk);
  color: var(--cyan);
}
/* a dimension line whose length is the compression */
.bp-dim { position: relative; height: 34px; border-bottom: 1px solid var(--line); }
.bp-dim-bar {
  position: absolute;
  bottom: -1px;
  left: 0;
  height: 34px;
  border-bottom: 2px solid var(--ochre);
  background: linear-gradient(
    180deg,
    rgba(224, 164, 58, 0.03),
    rgba(224, 164, 58, 0.18)
  );
  transition: width 520ms cubic-bezier(0.3, 0.7, 0.2, 1);
}
.bp-dim-bar::before,
.bp-dim-bar::after {
  content: "";
  position: absolute;
  bottom: -6px;
  width: 1px;
  height: 12px;
  background: var(--ochre);
}
.bp-dim-bar::before { left: 0; }
.bp-dim-bar::after { right: 0; }

/* Legend rows -------------------------------------------------------------- */
.bp-legend-row {
  display: grid;
  grid-template-columns: 3.5rem 1fr;
  gap: 1.25rem;
  padding: 1.15rem 0.75rem;
  border-top: 1px solid var(--line-soft);
  transition: background 160ms ease;
}
.bp-legend-row:first-child { border-top: 0; }
.bp-legend-row:hover { background: rgba(234,241,247,0.05); }
.bp-legend-row:hover .bp-sym { stroke: var(--ochre); }
.bp-sym { stroke: var(--chalk); transition: stroke 160ms ease; }

/* Spec table --------------------------------------------------------------- */
.bp-table { width: 100%; border-collapse: collapse; font-size: 14px; }
.bp-table th,
.bp-table td {
  border: 1px solid var(--line-soft);
  padding: 0.6rem 0.85rem;
  text-align: left;
  vertical-align: top;
}
.bp-table th {
  font-family: var(--font-plexmono);
  font-size: 10.5px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--chalk-dim);
  font-weight: 400;
  background: rgba(234,241,247,0.04);
  white-space: nowrap;
}
.bp-table td { font-variant-numeric: tabular-nums; }

.bp-note-no {
  font-family: var(--font-plexmono);
  font-size: 11px;
  color: var(--ochre);
  letter-spacing: 0.1em;
}

.bp-stamp {
  font-family: var(--font-saira);
  text-transform: uppercase;
  letter-spacing: 0.18em;
  font-size: 11px;
  color: var(--ochre);
  border: 1px solid var(--ochre);
  padding: 0.28rem 0.6rem;
  white-space: nowrap;
}

/* Drawing ------------------------------------------------------------------ */
.bp-draw-ink {
  fill: rgba(234, 241, 247, 0.06);
  stroke: var(--chalk);
  stroke-width: 1.2;
  vector-effect: non-scaling-stroke;
}
.bp-draw-hot { stroke: var(--ochre); fill: rgba(224, 164, 58, 0.12); }
.bp-draw-lead { stroke: var(--line); stroke-width: 1; stroke-dasharray: 3 4; fill: none; }
.bp-draw-rule { stroke: var(--chalk-dim); stroke-width: 1; fill: none; }
.bp-draw-label {
  font-family: var(--font-plexmono);
  font-size: 9.5px;
  letter-spacing: 0.12em;
  fill: var(--chalk-dim);
  text-transform: uppercase;
}
.bp-draw-value {
  font-family: var(--font-saira);
  font-size: 20px;
  font-weight: 600;
  fill: var(--chalk);
  letter-spacing: 0.02em;
}

@keyframes bp-draw-in {
  from { stroke-dashoffset: 1400; opacity: 0.15; }
  to { stroke-dashoffset: 0; opacity: 1; }
}
.bp-anim { stroke-dasharray: 1400; animation: bp-draw-in 1400ms ease-out both; }
@keyframes bp-fade-up {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: none; }
}
.bp-in { animation: bp-fade-up 600ms cubic-bezier(0.22, 0.68, 0.28, 1) both; }
@media (prefers-reduced-motion: reduce) {
  .bp *, .bp *::before, .bp *::after {
    animation: none !important;
    transition: none !important;
    stroke-dasharray: none !important;
  }
}
`;

const SCALES = [
  {
    id: "1:5",
    width: "78%",
    out: "1,140 words",
    read: "5 min",
    keeps: "Every subsection in the authors' order, page-numbered, with method and limitations quoted rather than paraphrased.",
    drop: "Only repetition and the related-work survey.",
  },
  {
    id: "1:20",
    width: "34%",
    out: "290 words",
    read: "90 sec",
    keeps: "The thesis, the four load-bearing claims, how the measurements were taken, and the limits the authors admit to.",
    drop: "Worked examples, apparatus detail, and the literature review.",
  },
  {
    id: "1:100",
    width: "9%",
    out: "48 words",
    read: "15 sec",
    keeps: "The claim, the one number that carries it, and a verdict on whether the evidence holds.",
    drop: "Everything a specialist would want and a decision-maker will not read.",
  },
];

const LEGEND = [
  {
    key: "SUM",
    name: "Summary",
    body: "Built in tiers so you can stop at any depth and still hold something whole: thesis, then the claims under it, then the detail. Never the first three paragraphs padded out to look complete.",
    sym: (
      <>
        <rect x="4" y="7" width="32" height="3" />
        <rect x="4" y="15" width="24" height="3" />
        <rect x="4" y="23" width="14" height="3" />
      </>
    ),
  },
  {
    key: "HNT",
    name: "Hint",
    body: "A question to hold while you read, written before you start and pointing at the page that answers it. Reading with a question in hand is a different activity from reading without one.",
    sym: (
      <>
        <circle cx="20" cy="16" r="11" />
        <path d="M20 20v-2.5c2.8 0 4.4-1.6 4.4-3.8 0-2.3-1.9-4-4.4-4s-4.3 1.7-4.4 3.9" />
        <circle cx="20" cy="24" r="0.9" />
      </>
    ),
  },
  {
    key: "QUO",
    name: "Quote",
    body: "Copied verbatim with page and paragraph, and clickable straight back into the PDF. A quote you cannot locate in the source is not evidence, it is hearsay.",
    sym: (
      <>
        <path d="M6 24V13h10v11H6zM24 24V13h10v11H24z" />
        <path d="M6 13l4-5M24 13l4-5" />
      </>
    ),
  },
  {
    key: "INS",
    name: "Insight",
    body: "What a second pass would have caught: an assumption carrying more weight than its evidence, a figure that disagrees with a table, a term used two different ways in one document.",
    sym: (
      <>
        <path d="M20 4l4.4 9.2 10 1.4-7.2 7 1.7 9.9L20 26.8l-8.9 4.7 1.7-9.9-7.2-7 10-1.4z" />
      </>
    ),
  },
];

const SPECS: [string, string][] = [
  ["Input", "PDF, EPUB, DOCX, plus photographed and scanned pages"],
  ["Maximum length", "900 pages, or 1.2 million words"],
  ["Time to first output", "≈ 40 s for a 400-page report"],
  ["Text recovery", "OCR from 300 dpi, two-column and rotated pages"],
  ["Structure kept", "Headings, footnotes, tables, figure captions, reading order"],
  ["Reading languages", "34, with output in any of them"],
  ["Anchors", "Page and paragraph on every claim and every quote"],
  ["Export", "Markdown, plain text, Anki deck, citation-linked references"],
  ["Retention", "Deleted within 24 h unless saved to a shelf"],
];

const NOTES = [
  "Every sentence of a summary carries the page it was drawn from. A line without an anchor is a defect — report it and we treat it as one.",
  "Quotes are copied, never regenerated, so a quote is always exactly what the document says, punctuation included.",
  "Nothing you upload is used to train a model, and files are deleted within 24 hours unless you save them to a shelf.",
  "Where a document is genuinely ambiguous, Ratio records the ambiguity instead of picking a reading on your behalf.",
  "Scale is a setting, not a commitment. Change it afterwards and the same document is redrawn at the new ratio in about two seconds.",
  "Figures and tables are read, not skipped. If a chart contradicts the text, that contradiction is an insight, not a rounding error.",
];

const FIELD = [
  {
    body: "We tender against 200-page specifications. I used to skim for the clauses that would hurt us. Now I read the structure on one page and go straight to the three pages that matter.",
    who: "Tomas Břetislav",
    role: "Bid lead, mechanical contractor",
  },
  {
    body: "It flagged that a figure in the appendix disagreed with the summary table. That is the kind of thing you catch at 2 a.m. or you do not catch at all.",
    who: "Aisha Nwankwo",
    role: "Systems engineer, grid storage",
  },
];

const PLANS = [
  {
    sheet: "A",
    name: "Single sheet",
    price: "Free",
    per: "",
    body: "Five documents a month at up to 60 pages. All four output types, no watermark, no card.",
    rows: ["5 documents / month", "60 pages / file", "Markdown export"],
    cta: "Start drawing",
    rec: false,
  },
  {
    sheet: "B",
    name: "Full set",
    price: "$12",
    per: "/ month",
    body: "For one person with a real reading load: unlimited documents at full length, scans included.",
    rows: [
      "Unlimited documents",
      "900 pages / file",
      "OCR for scans and photos",
      "Cross-document connections",
      "Anki + citation export",
    ],
    cta: "Take the full set",
    rec: true,
  },
  {
    sheet: "C",
    name: "Issued to team",
    price: "$29",
    per: "/ seat / month",
    body: "One shared set of drawings: shared margins, a house glossary, and an audit trail.",
    rows: [
      "Everything in Full set",
      "Shared margins and replies",
      "House glossary of terms",
      "SSO, audit log, DPA",
    ],
    cta: "Request a quote",
    rec: false,
  },
];

/* plates of the compression stack: x-centre 220, leaders run out to x=430 so
   the labels never sit on top of the widest plate */
const PLATES = [
  { y: 356, w: 186, label: "pages scanned", value: "34", d: 0 },
  { y: 274, w: 148, label: "pieces of evidence", value: "61", d: 240 },
  { y: 194, w: 108, label: "claims identified", value: "12", d: 480 },
  { y: 116, w: 70, label: "themes", value: "4", d: 720 },
  { y: 50, w: 30, label: "thesis", value: "1", d: 960, hot: true },
];

export default function Blueprint() {
  const [scaleId, setScaleId] = useState("1:20");
  const scale = SCALES.find((s) => s.id === scaleId)!;

  useEffect(() => {
    document.title = "Ratio Reader — the structural drawing of a document";
  }, []);

  return (
    <div className="bp min-h-screen">
      <style>{CSS}</style>

      {/* ── sheet header ─────────────────────────────────────────────────── */}
      <header className="border-b border-[var(--line)]">
        <div className="mx-auto flex max-w-[1240px] flex-wrap items-center justify-between gap-4 px-5 py-4 lg:px-8">
          <div className="flex flex-wrap items-baseline gap-x-5 gap-y-1">
            <span className="bp-sub text-[20px] tracking-[0.12em]">
              Ratio Reader
            </span>
            <span className="bp-mono">Drawing RR-001 · rev. C</span>
          </div>
          <nav className="flex items-center gap-6">
            <a href="#legend" className="bp-mono hidden hover:text-[var(--chalk)] md:inline">
              Legend
            </a>
            <a href="#scale" className="bp-mono hidden hover:text-[var(--chalk)] md:inline">
              Scale
            </a>
            <a href="#spec" className="bp-mono hidden hover:text-[var(--chalk)] md:inline">
              Spec
            </a>
            <button className="bp-btn">Upload a PDF</button>
          </nav>
        </div>
      </header>

      {/* ── hero: the drawing ────────────────────────────────────────────── */}
      <section className="mx-auto max-w-[1240px] px-5 pt-14 pb-10 lg:px-8 lg:pt-20">
        <div className="grid items-start gap-14 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
          <div>
            <p className="bp-mono bp-in">Reading assistant · sheet 01 of 06</p>
            <h1
              className="bp-title bp-in mt-5 text-[clamp(2.7rem,6.2vw,5rem)]"
              style={{ animationDelay: "70ms" }}
            >
              The structural
              <br />
              drawing of an
              <br />
              <span className="text-[var(--ochre)]">argument</span>
            </h1>
            <p
              className="bp-in mt-7 max-w-[54ch] text-[17px] leading-relaxed text-[#CBDCEB]"
              style={{ animationDelay: "160ms" }}
            >
              Upload a PDF and Ratio Reader draws what is holding it up: the
              thesis, the claims underneath it, the evidence underneath those,
              and the joints where the argument is weakest. Then it hands you a
              summary at whatever scale you asked for, every line dimensioned
              back to a page.
            </p>

            <div
              className="bp-in mt-9 flex flex-wrap items-center gap-4"
              style={{ animationDelay: "240ms" }}
            >
              <button className="bp-btn">Upload a PDF</button>
              <button className="bp-btn bp-btn-line">Read the spec</button>
            </div>

            <div
              className="bp-drop bp-in mt-8 flex flex-wrap items-center justify-between gap-3 px-5 py-4"
              style={{ animationDelay: "320ms" }}
            >
              <span className="bp-sub text-[15px]">Drop a file here</span>
              <span className="bp-mono">PDF · EPUB · DOCX · scans · 900 pp max</span>
            </div>

            <dl
              className="bp-in mt-9 grid grid-cols-3 gap-4 border-t border-[var(--line)] pt-5"
              style={{ animationDelay: "400ms" }}
            >
              {[
                ["40 s", "for a 400-page report"],
                ["34", "reading languages"],
                ["100%", "of claims page-anchored"],
              ].map(([v, k]) => (
                <div key={k}>
                  <dt className="bp-stat text-[28px] text-[var(--chalk)]">{v}</dt>
                  <dd className="bp-mono mt-1 normal-case tracking-[0.06em]">{k}</dd>
                </div>
              ))}
            </dl>
          </div>

          {/* the axonometric compression stack */}
          <figure className="bp-panel bp-tick p-4 sm:p-6">
            <figcaption className="bp-mono mb-3 flex flex-wrap justify-between gap-2 normal-case tracking-[0.08em]">
              <span>Detail A — compression stack</span>
              <span>Okonjo, Vale &amp; Ramanathan, 34 pp.</span>
            </figcaption>
            <svg
              viewBox="0 0 620 420"
              className="h-auto w-full"
              role="img"
              aria-label="An exploded drawing of one document: 34 scanned pages become 61 pieces of evidence, 12 claims, 4 themes and finally 1 thesis."
            >
              <path d="M220 42V388" className="bp-draw-lead" />

              {PLATES.map((l) => (
                <g key={l.value}>
                  <polygon
                    points={`${220 - l.w},${l.y} 220,${l.y - l.w * 0.33} ${220 + l.w},${l.y} 220,${l.y + l.w * 0.33}`}
                    className={`bp-draw-ink bp-anim ${l.hot ? "bp-draw-hot" : ""}`}
                    style={{ animationDelay: `${l.d}ms` }}
                  />
                  <path d={`M${220 + l.w},${l.y} H430`} className="bp-draw-lead" />
                  <text x="440" y={l.y - 4} className="bp-draw-value">
                    {l.value}
                  </text>
                  <text x="440" y={l.y + 11} className="bp-draw-label">
                    {l.label}
                  </text>
                </g>
              ))}

              <path d="M32 50V356" className="bp-draw-rule" />
              <path d="M26 50h12M26 356h12" className="bp-draw-rule" />
              <text
                x="20"
                y="203"
                className="bp-draw-label"
                transform="rotate(-90 20 203)"
                textAnchor="middle"
              >
                one reading pass · 40 s
              </text>
            </svg>
            <p className="bp-mono mt-2 border-t border-[var(--line-soft)] pt-3 normal-case tracking-[0.05em]">
              Read bottom to top. Each plate is what survives the plate below it.
            </p>
          </figure>
        </div>
      </section>

      {/* ── legend ───────────────────────────────────────────────────────── */}
      <section id="legend" className="mx-auto max-w-[1240px] px-5 py-20 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2 className="bp-title text-[clamp(1.9rem,3.6vw,2.9rem)]">
            Legend — what comes back
          </h2>
          <p className="bp-mono">4 symbols · used on every sheet</p>
        </div>

        <div className="bp-panel mt-8">
          {LEGEND.map((l) => (
            <div key={l.key} className="bp-legend-row">
              <div className="flex flex-col items-center gap-2">
                <svg
                  viewBox="0 0 40 34"
                  className="bp-sym h-9 w-11"
                  fill="none"
                  strokeWidth="1.4"
                  aria-hidden
                >
                  {l.sym}
                </svg>
                <span className="bp-mono text-[9.5px]">{l.key}</span>
              </div>
              <div>
                <h3 className="bp-sub text-[19px]">{l.name}</h3>
                <p className="mt-1.5 max-w-[74ch] text-[15px] leading-relaxed text-[#C3D6E6]">
                  {l.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── scale ────────────────────────────────────────────────────────── */}
      <section
        id="scale"
        className="border-y border-[var(--line)] bg-[rgba(9,32,60,0.6)]"
      >
        <div className="mx-auto max-w-[1240px] px-5 py-20 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.15fr] lg:gap-16">
            <div>
              <p className="bp-mono">Drawing scale</p>
              <h2 className="bp-title mt-4 text-[clamp(1.9rem,3.8vw,3rem)]">
                Choose the scale
                <br />
                before you read
              </h2>
              <p className="mt-5 max-w-[46ch] text-[16px] leading-relaxed text-[#C3D6E6]">
                A drawing at 1:100 is not a worse drawing than one at 1:5 — it is
                a drawing for a different decision. The same is true of a
                summary. Set the ratio, and Ratio Reader tells you exactly what
                it kept and what it left on the floor.
              </p>
              <div className="mt-8 flex flex-wrap gap-2">
                {SCALES.map((s) => (
                  <button
                    key={s.id}
                    className="bp-scale"
                    aria-pressed={scaleId === s.id}
                    onClick={() => setScaleId(s.id)}
                  >
                    {s.id}
                  </button>
                ))}
              </div>
            </div>

            <div className="bp-panel bp-tick p-6 sm:p-8">
              <div className="flex flex-wrap items-baseline justify-between gap-3">
                <span className="bp-sub text-[19px]">Scale {scale.id}</span>
                <span className="bp-mono bp-num">
                  {scale.out} · {scale.read} read
                </span>
              </div>

              <div className="bp-dim mt-7">
                <div className="bp-dim-bar" style={{ width: scale.width }} />
              </div>
              <div className="mt-2 flex justify-between">
                <span className="bp-mono">Output length</span>
                <span className="bp-mono">Source = 34 pp.</span>
              </div>

              <dl className="mt-8 grid gap-5 sm:grid-cols-2">
                <div className="border-t border-[var(--line-soft)] pt-4">
                  <dt className="bp-mono text-[var(--ochre)]">Kept</dt>
                  <dd className="mt-2 text-[15px] leading-relaxed">{scale.keeps}</dd>
                </div>
                <div className="border-t border-[var(--line-soft)] pt-4">
                  <dt className="bp-mono">Left out</dt>
                  <dd className="mt-2 text-[15px] leading-relaxed text-[#A9C2D8]">
                    {scale.drop}
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* ── spec ─────────────────────────────────────────────────────────── */}
      <section id="spec" className="mx-auto max-w-[1240px] px-5 py-20 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.5fr] lg:gap-14">
          <div>
            <h2 className="bp-title text-[clamp(1.9rem,3.6vw,2.9rem)]">
              Specification
            </h2>
            <p className="mt-5 max-w-[40ch] text-[16px] leading-relaxed text-[#C3D6E6]">
              The whole product on one table, with no adjectives. If a number
              here is wrong for the documents you read, that is the only thing
              worth arguing about.
            </p>
            <div className="bp-stamp mt-7 inline-block">Rev. C · current</div>
          </div>
          <div className="overflow-x-auto">
            <table className="bp-table">
              <caption className="sr-only">
                Ratio Reader technical specification
              </caption>
              <tbody>
                {SPECS.map(([k, v]) => (
                  <tr key={k}>
                    <th scope="row">{k}</th>
                    <td>{v}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── field notes ──────────────────────────────────────────────────── */}
      <section className="border-y border-[var(--line)] bg-[rgba(9,32,60,0.6)]">
        <div className="mx-auto grid max-w-[1240px] gap-10 px-5 py-16 lg:grid-cols-2 lg:px-8">
          {FIELD.map((f) => (
            <blockquote key={f.who} className="bp-panel p-7">
              <p className="text-[17px] leading-relaxed">{f.body}</p>
              <footer className="mt-6 border-t border-[var(--line-soft)] pt-4">
                <p className="bp-sub text-[15px]">{f.who}</p>
                <p className="bp-mono mt-1 normal-case tracking-[0.06em]">
                  {f.role}
                </p>
              </footer>
            </blockquote>
          ))}
        </div>
      </section>

      {/* ── plans ────────────────────────────────────────────────────────── */}
      <section className="mx-auto max-w-[1240px] px-5 py-20 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2 className="bp-title text-[clamp(1.9rem,3.6vw,2.9rem)]">
            Issue sheets
          </h2>
          <p className="bp-mono">Monthly · cancel any time · no minimum term</p>
        </div>
        <div className="mt-9 grid gap-5 md:grid-cols-3">
          {PLANS.map((p) => (
            <div
              key={p.sheet}
              className={`bp-panel flex flex-col p-6 ${p.rec ? "bp-tick" : ""}`}
              style={
                p.rec
                  ? {
                      borderColor: "var(--ochre)",
                      background: "rgba(224,164,58,0.07)",
                    }
                  : undefined
              }
            >
              <div className="flex items-baseline justify-between gap-3">
                <span className="bp-mono">Sheet {p.sheet}</span>
                {p.rec && <span className="bp-stamp">Recommended</span>}
              </div>
              <h3 className="bp-sub mt-4 text-[21px]">{p.name}</h3>
              <p className="bp-title bp-num mt-3 text-[38px]">
                {p.price}
                <span className="bp-mono ml-2 tracking-[0.08em]">{p.per}</span>
              </p>
              <p className="mt-3 text-[15px] leading-relaxed text-[#C3D6E6]">
                {p.body}
              </p>
              <ul className="mt-6 mb-7 flex flex-col gap-2">
                {p.rows.map((r) => (
                  <li
                    key={r}
                    className="bp-mono flex gap-2 normal-case tracking-[0.05em]"
                  >
                    <span aria-hidden className="text-[var(--ochre)]">
                      —
                    </span>
                    {r}
                  </li>
                ))}
              </ul>
              <button className={`bp-btn mt-auto w-full ${p.rec ? "" : "bp-btn-line"}`}>
                {p.cta}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* ── general notes ────────────────────────────────────────────────── */}
      <section className="mx-auto max-w-[1240px] px-5 pb-20 lg:px-8">
        <h2 className="bp-title text-[clamp(1.9rem,3.6vw,2.9rem)]">
          General notes
        </h2>
        <ol className="mt-8 grid gap-x-14 gap-y-6 md:grid-cols-2">
          {NOTES.map((n, i) => (
            <li
              key={i}
              className="grid grid-cols-[2.2rem_1fr] gap-3 border-t border-[var(--line-soft)] pt-4"
            >
              <span className="bp-note-no bp-num">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="max-w-[58ch] text-[15px] leading-relaxed text-[#C3D6E6]">
                {n}
              </p>
            </li>
          ))}
        </ol>
      </section>

      {/* ── closing + title block ────────────────────────────────────────── */}
      <section className="border-t border-[var(--line)]">
        <div className="mx-auto max-w-[1240px] px-5 py-20 lg:px-8">
          <h2 className="bp-title max-w-[22ch] text-[clamp(2.1rem,5vw,4rem)]">
            Stop skimming. Read the structure.
          </h2>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <button className="bp-btn">Upload a PDF</button>
            <span className="bp-mono">
              Five documents free · no card · nothing to install
            </span>
          </div>
        </div>

        {/* a real title block, with the fields a title block has */}
        <footer className="border-t border-[var(--line)]">
          <div className="mx-auto max-w-[1240px] px-5 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
              {[
                ["Project", "Ratio Reader"],
                ["Drawing", "Marketing sheet"],
                ["Scale", "1:20 u.n.o."],
                ["Drawn", "In-house, 2026"],
                ["Rev", "C"],
                ["Sheet", "01 / 06"],
              ].map(([k, v]) => (
                <div
                  key={k}
                  className="border-t border-r border-[var(--line-soft)] px-4 py-4 first:border-l"
                >
                  <p className="bp-mono">{k}</p>
                  <p className="bp-sub mt-1 text-[15px]">{v}</p>
                </div>
              ))}
            </div>
            <p className="bp-mono py-6 normal-case tracking-[0.06em]">
              Set in Saira Condensed, IBM Plex Sans and IBM Plex Mono. Drawn on a
              24 px grid.
            </p>
          </div>
        </footer>
      </section>
    </div>
  );
}
