import { useEffect, useState } from "react";

/* ─────────────────────────────────────────────────────────────────────────────
   DESIGN 04 · ATLAS
   A survey sheet. The thesis: a document is terrain — the argument has high
   ground, the evidence has density, and there is a route through it that a
   good reader takes. Ratio Reader is the survey: contours, a legend, a scale
   bar and an elevation profile of where the substance actually sits.
   Cartographic conventions carry real information here: italic serif for the
   through-line, letterspaced small caps for regions, leader dots in the index.
   ────────────────────────────────────────────────────────────────────────── */

const CSS = `
.at {
  --paper: #E6EDE7;
  --paper-2: #DCE6DD;
  --plate: #EFF4EF;
  --pine: #1D3A33;
  --pine-soft: #4A6A60;
  --hair: #A9BEB4;
  --olive: #8A9A5B;
  --tan: #CDBA8A;
  --clay: #C08552;
  --water: #7FA7B8;
  background: var(--paper);
  color: var(--pine);
  font-family: var(--font-jost);
  font-size: 16.5px;
  line-height: 1.65;
  overflow-x: clip;
}
.at ::selection { background: var(--tan); color: var(--pine); }
.at :focus-visible { outline: 2px solid var(--clay); outline-offset: 3px; }

/* Type ---------------------------------------------------------------------- */
.at-display {
  font-family: var(--font-marcellus);
  font-weight: 400;
  line-height: 1.02;
  letter-spacing: 0.005em;
  text-wrap: balance;
}
.at-region {
  font-family: var(--font-marcellus);
  text-transform: uppercase;
  letter-spacing: 0.26em;
  font-size: 12px;
  color: var(--pine-soft);
}
.at-label {
  font-family: var(--font-jost);
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 0.18em;
  font-size: 11px;
  color: var(--pine-soft);
}
.at-num { font-variant-numeric: tabular-nums; }

/* Neatline frames ---------------------------------------------------------- */
.at-plate {
  background: var(--plate);
  border: 1px solid var(--pine);
  outline: 1px solid var(--pine);
  outline-offset: 4px;
  position: relative;
}
.at-card { background: var(--plate); border: 1px solid var(--hair); }

/* Graticule ---------------------------------------------------------------- */
.at-grat {
  background-image:
    linear-gradient(rgba(29, 58, 51, 0.055) 1px, transparent 1px),
    linear-gradient(90deg, rgba(29, 58, 51, 0.055) 1px, transparent 1px);
  background-size: 88px 88px;
}

/* Buttons ------------------------------------------------------------------ */
.at-btn {
  font-family: var(--font-jost);
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.16em;
  font-size: 12px;
  padding: 0.85rem 1.6rem;
  background: var(--pine);
  color: var(--paper);
  border: 1px solid var(--pine);
  transition: background 150ms ease, color 150ms ease;
}
.at-btn:hover { background: #12261F; }
.at-btn-line { background: transparent; color: var(--pine); }
.at-btn-line:hover { background: var(--pine); color: var(--paper); }
/* for the two pine-coloured grounds — a utility class would lose to .at-btn */
.at-btn-invert {
  background: var(--paper);
  color: var(--pine);
  border-color: var(--paper);
}
.at-btn-invert:hover { background: #fff; color: #12261F; }

/* Map ---------------------------------------------------------------------- */
.at-contour { fill: none; stroke: var(--pine); stroke-opacity: 0.34; stroke-width: 0.9; }
.at-contour-index { stroke-opacity: 0.7; stroke-width: 1.3; }
.at-band-1 { fill: rgba(138, 154, 91, 0.16); }
.at-band-2 { fill: rgba(205, 186, 138, 0.22); }
.at-band-3 { fill: rgba(192, 133, 82, 0.22); }
.at-river { fill: none; stroke: var(--water); stroke-width: 2.4; stroke-linecap: round; }
.at-water-label {
  font-family: var(--font-marcellus);
  font-style: italic;
  font-size: 12px;
  fill: #5E8496;
  letter-spacing: 0.06em;
}
.at-map-label {
  font-family: var(--font-jost);
  font-size: 9.5px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  fill: var(--pine-soft);
}
.at-map-title {
  font-family: var(--font-marcellus);
  font-size: 12.5px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  fill: var(--pine);
}
.at-pin {
  cursor: pointer;
  transition: transform 200ms cubic-bezier(0.3, 1.3, 0.4, 1);
  transform-box: fill-box;
  transform-origin: center bottom;
}
.at-pin circle { transition: fill 180ms ease, r 180ms ease; }
.at-pin:hover { transform: scale(1.18); }
.at-pin[data-on="true"] circle { fill: var(--clay); }

/* Scale bar --------------------------------------------------------------- */
.at-scalebar { display: flex; height: 15px; border: 1px solid var(--pine); }
.at-scalebar span { flex: 1; transition: background 300ms ease; }
.at-scalebar span:nth-child(odd) { background: var(--pine); }
.at-scale-btn {
  font-family: var(--font-jost);
  text-transform: uppercase;
  letter-spacing: 0.16em;
  font-size: 11.5px;
  padding: 0.5rem 0.95rem;
  border: 1px solid var(--hair);
  background: transparent;
  color: var(--pine-soft);
  transition: all 150ms ease;
}
.at-scale-btn:hover { border-color: var(--pine); color: var(--pine); }
.at-scale-btn[aria-pressed="true"] {
  background: var(--pine);
  border-color: var(--pine);
  color: var(--paper);
}

/* Legend ------------------------------------------------------------------- */
.at-legend-row {
  display: grid;
  grid-template-columns: 2.6rem 1fr;
  gap: 1rem;
  align-items: start;
  padding: 0.95rem 0;
  border-bottom: 1px solid var(--hair);
}
.at-legend-row:last-child { border-bottom: 0; }

/* Index with leader dots --------------------------------------------------- */
.at-index dt {
  font-family: var(--font-marcellus);
  font-size: 18px;
  display: flex;
  align-items: baseline;
  gap: 0.6rem;
}
.at-index dt::after {
  content: "";
  flex: 1;
  border-bottom: 1px dotted var(--hair);
  transform: translateY(-0.25em);
}
.at-index dd { max-width: 64ch; color: #2C4A42; margin-top: 0.4rem; }
.at-index .at-folio { font-family: var(--font-jost); font-size: 12px; letter-spacing: 0.14em; color: var(--pine-soft); }

/* Elevation profile ------------------------------------------------------- */
.at-prof-area { fill: rgba(138, 154, 91, 0.22); }
.at-prof-line { fill: none; stroke: var(--pine); stroke-width: 1.6; }
.at-prof-grid { stroke: rgba(29, 58, 51, 0.12); stroke-width: 1; }
.at-prof-peak { fill: var(--clay); }

@keyframes at-draw { from { stroke-dashoffset: 2600; } to { stroke-dashoffset: 0; } }
.at-draw { stroke-dasharray: 2600; animation: at-draw 2200ms ease-out both; }
@keyframes at-drop {
  from { opacity: 0; transform: translateY(-10px); }
  to { opacity: 1; transform: none; }
}
.at-drop { animation: at-drop 520ms cubic-bezier(0.2, 0.9, 0.3, 1) both; }
@keyframes at-fade { from { opacity: 0; transform: translateY(12px); } to { opacity: 1; transform: none; } }
.at-fade { animation: at-fade 700ms cubic-bezier(0.22, 0.68, 0.28, 1) both; }

@media (prefers-reduced-motion: reduce) {
  .at *, .at *::before, .at *::after {
    animation: none !important;
    transition: none !important;
    stroke-dasharray: none !important;
  }
}
`;

/* A closed contour, generated rather than hand-authored: a radius modulated by
   two fixed sine terms so every ring is irregular but deterministic. */
function contour(cx: number, cy: number, r: number, phase: number, squash = 1) {
  const pts: string[] = [];
  const steps = 64;
  for (let i = 0; i < steps; i++) {
    const t = (i / steps) * Math.PI * 2;
    const mod =
      1 +
      0.13 * Math.sin(3 * t + phase) +
      0.07 * Math.sin(5 * t - phase * 1.7) +
      0.04 * Math.sin(7 * t + phase * 0.5);
    const x = cx + Math.cos(t) * r * mod;
    const y = cy + Math.sin(t) * r * mod * squash;
    pts.push(`${x.toFixed(1)},${y.toFixed(1)}`);
  }
  return `M${pts.join("L")}Z`;
}

const SUMMIT = { cx: 258, cy: 214 };
const RIDGE = { cx: 462, cy: 372 };

const FEATURES = [
  {
    id: "thesis",
    x: 258,
    y: 214,
    kind: "Summit",
    name: "The thesis",
    folio: "p. 3, restated p. 31",
    body: "Quarterly rack rebalancing recovers most of the capacity lost to thermal drift. Everything else in these 34 pages is either support for that sentence or an admission of where it might fail.",
  },
  {
    id: "evidence",
    x: 176,
    y: 336,
    kind: "Dense ground",
    name: "The instrumented sites",
    folio: "pp. 9–18",
    body: "Eleven sites, 61 measurements, the highest evidence density in the document. If you only read ten pages, read these — the claims above them are made here or nowhere.",
  },
  {
    id: "fault",
    x: 372,
    y: 262,
    kind: "Fault line",
    name: "Attribution gap",
    folio: "§4.2, p. 14",
    body: "Cause is instrumented at three sites and inferred at the other eight. The authors say 'we attribute'; the data supports 'we observed'. This is the weakest joint in the argument.",
  },
  {
    id: "ridge",
    x: 462,
    y: 372,
    kind: "Secondary high ground",
    name: "Operator practice",
    folio: "pp. 22–27",
    body: "A second, quieter argument about maintenance schedules that most readers miss because it arrives after the conclusion they came for.",
  },
];

const LEGEND = [
  {
    name: "Summary",
    note: "Contour intervals — the same terrain drawn at the interval you choose. Thesis, then claims, then detail; stop at any interval and the shape still holds.",
    sym: (
      <>
        <path d="M3 20a11 8 0 0 1 22 0" fill="none" stroke="currentColor" strokeWidth="1" />
        <path d="M6 20a8 6 0 0 1 16 0" fill="none" stroke="currentColor" strokeWidth="1" />
        <path d="M9.5 20a4.5 3.5 0 0 1 9 0" fill="none" stroke="currentColor" strokeWidth="1.4" />
      </>
    ),
  },
  {
    name: "Hint",
    note: "Waymarks. A question set before you set out, planted on the page that answers it, so you always know why you are walking this way.",
    sym: (
      <>
        <path d="M14 24V6" stroke="currentColor" strokeWidth="1.2" />
        <path d="M14 6h11l-3 4 3 4H14" fill="none" stroke="currentColor" strokeWidth="1.2" />
      </>
    ),
  },
  {
    name: "Quote",
    note: "Survey stations. Fixed points copied exactly, each with its page and paragraph, so anyone can walk back and check the reading.",
    sym: (
      <>
        <circle cx="14" cy="15" r="4.5" fill="none" stroke="currentColor" strokeWidth="1.2" />
        <circle cx="14" cy="15" r="1.4" fill="currentColor" />
        <path d="M14 4v4M14 22v4M4 15h4M20 15h4" stroke="currentColor" strokeWidth="1" />
      </>
    ),
  },
  {
    name: "Insight",
    note: "Fault lines. Where the ground moves: an assumption carrying too much, a figure that disagrees with its table, a term redefined mid-document.",
    sym: (
      <>
        <path d="M3 9l7 5-4 4 8 6" fill="none" stroke="currentColor" strokeWidth="1.4" />
        <path d="M14 24l6-4 5 3" fill="none" stroke="currentColor" strokeWidth="1.4" />
      </>
    ),
  },
];

const SCALES = [
  {
    id: "1:5",
    divisions: 10,
    equiv: "One page of summary for every five of source",
    out: "1,140 words · 5 min",
    note: "Section-by-section, in the authors' order, with method and limitations quoted rather than paraphrased.",
  },
  {
    id: "1:20",
    divisions: 6,
    equiv: "One page of summary for every twenty of source",
    out: "290 words · 90 sec",
    note: "The thesis, the four claims that carry it, the method in one sentence, and the limits the authors admit to.",
  },
  {
    id: "1:100",
    divisions: 3,
    equiv: "One paragraph for every hundred pages of source",
    out: "48 words · 15 sec",
    note: "The claim, the number behind it, and a verdict on whether the evidence holds. Enough to decide whether to walk the ground yourself.",
  },
];

/* argument density by page, sampled every two pages — the elevation profile */
const PROFILE = [
  8, 14, 22, 30, 26, 34, 52, 68, 74, 62, 58, 44, 38, 56, 71, 48, 36, 30, 42, 34,
  24, 18, 12, 9,
];

const LEGS = [
  {
    numeral: "I",
    bearing: "Bearing 000° · ascent",
    title: "Hand over the document",
    body: "A PDF, EPUB, DOCX, or a photograph of a page. Up to 900 pages. Ratio recovers the text, including two-column spreads, rotated scans and footnotes, and puts them back in reading order before anything is summarised.",
  },
  {
    numeral: "II",
    bearing: "Bearing 090° · survey",
    title: "It walks the whole ground",
    body: "The entire document, once, in order — not a keyword index and not the first ten pages. It notes where evidence is dense, where claims outrun it, and where the authors themselves hedge. About forty seconds for a 400-page report.",
  },
  {
    numeral: "III",
    bearing: "Bearing 180° · return",
    title: "You get the sheet",
    body: "Summary at your chosen interval, the waymarks, the survey stations, the fault lines — every one of them referenced to a page. Export it, or keep reading with it open beside the source.",
  },
];

const REPORTS = [
  {
    body: "I brief a committee on planning documents I have not written and cannot skim. The elevation profile alone tells me which forty pages of six hundred hold the actual argument.",
    who: "Eleanor Ashcombe",
    role: "Policy adviser, transport",
  },
  {
    body: "It found a fault line in a supplier's white paper: the headline number came from a pilot with three sites, not the fleet. We renegotiated on that sentence.",
    who: "Yusuf Demirel",
    role: "Procurement, cold chain logistics",
  },
];

const EDITIONS = [
  {
    name: "Pocket",
    price: "Free",
    per: "",
    note: "Five documents a month, up to 60 pages each. Every symbol on the legend works.",
    rows: ["5 documents / month", "60 pages / document", "Markdown export"],
    cta: "Take the pocket sheet",
    lead: false,
  },
  {
    name: "Folio",
    price: "$12",
    per: "per month",
    note: "The full survey: unlimited documents at full length, scans included, connections drawn between everything you have read.",
    rows: [
      "Unlimited documents",
      "900 pages / document",
      "OCR for scans and photographs",
      "Cross-document connections",
      "Anki and citation export",
    ],
    cta: "Take the folio",
    lead: true,
  },
  {
    name: "Survey party",
    price: "$29",
    per: "per seat, per month",
    note: "For a team walking the same ground: shared margins, one glossary, and the administration your security team asks for.",
    rows: [
      "Everything in Folio",
      "Shared margins and replies",
      "House glossary of terms",
      "SSO, audit log, DPA",
    ],
    cta: "Request a quote",
    lead: false,
  },
];

const INDEX = [
  {
    q: "Accuracy",
    folio: "and what to do when it slips",
    a: "Every claim in a summary is referenced to the page it was drawn from, and quotes are copied rather than regenerated. A line with no reference is a defect: report it and we treat it as one. Where the document itself is ambiguous, Ratio marks the ambiguity instead of resolving it for you.",
  },
  {
    q: "Confidentiality",
    folio: "retention and training",
    a: "Files are deleted within 24 hours unless you save them to a shelf, and nothing you upload is used to train a model. On Survey party, documents stay inside your workspace and the audit log records every read.",
  },
  {
    q: "Difficult originals",
    folio: "scans, columns, footnotes",
    a: "OCR handles scans from 300 dpi, photographs of pages and rotated spreads. Two-column layouts, tables and figure captions are reconstructed in reading order, and footnotes stay attached to the sentence that called them.",
  },
  {
    q: "Languages",
    folio: "reading and reporting",
    a: "Reading in 34 languages, with output in whichever one you ask for — so a German standard can be surveyed in English while its quotes stay in German.",
  },
  {
    q: "Intervals",
    folio: "changing the scale after the fact",
    a: "The interval is a setting, not a commitment. Change it and the same document is redrawn in about two seconds, without re-uploading anything.",
  },
  {
    q: "Figures and tables",
    folio: "read, not skipped",
    a: "Charts and tables are read alongside the prose. When a figure disagrees with the text, that disagreement is reported as a fault line rather than quietly averaged away.",
  },
];

export default function Atlas() {
  const [featureId, setFeatureId] = useState("thesis");
  const [scaleId, setScaleId] = useState("1:20");
  const feature = FEATURES.find((f) => f.id === featureId)!;
  const scale = SCALES.find((s) => s.id === scaleId)!;

  useEffect(() => {
    document.title = "Ratio Reader — a survey of the document";
  }, []);

  const profileMax = Math.max(...PROFILE);
  const profileW = 900;
  const profileH = 170;
  const pts = PROFILE.map((v, i) => {
    const x = (i / (PROFILE.length - 1)) * profileW;
    const y = profileH - (v / profileMax) * (profileH - 18);
    return [x, y] as const;
  });
  const line = pts.map(([x, y]) => `${x.toFixed(1)},${y.toFixed(1)}`).join(" ");
  const area = `0,${profileH} ${line} ${profileW},${profileH}`;
  const peakIdx = PROFILE.indexOf(profileMax);

  return (
    <div className="at min-h-screen">
      <style>{CSS}</style>

      {/* ── header ───────────────────────────────────────────────────────── */}
      <header className="border-b border-[var(--hair)]">
        <div className="mx-auto flex max-w-[1220px] flex-wrap items-baseline justify-between gap-3 px-5 py-5 lg:px-8">
          <div className="flex flex-wrap items-baseline gap-x-6 gap-y-1">
            <span className="at-display text-[21px] tracking-[0.14em] uppercase">
              Ratio Reader
            </span>
            <span className="at-label">Sheet 4 · series A · 2026</span>
          </div>
          <nav className="flex items-center gap-7">
            <a href="#legend" className="at-label hover:text-[var(--pine)]">
              Legend
            </a>
            <a href="#profile" className="at-label hidden hover:text-[var(--pine)] sm:inline">
              Profile
            </a>
            <a href="#editions" className="at-label hidden hover:text-[var(--pine)] sm:inline">
              Editions
            </a>
            <button className="at-btn">Upload a PDF</button>
          </nav>
        </div>
      </header>

      {/* ── hero: the plate ──────────────────────────────────────────────── */}
      <section className="at-grat">
        <div className="mx-auto max-w-[1220px] px-5 pt-16 pb-14 lg:px-8">
          <div className="grid items-start gap-14 lg:grid-cols-[1fr_1.02fr] lg:gap-14">
            <div>
              <p className="at-region at-fade">A survey of one document</p>
              <h1
                className="at-display at-fade mt-6 max-w-[17ch] text-[clamp(2.4rem,4.3vw,3.6rem)]"
                style={{ animationDelay: "80ms" }}
              >
                Read a document the way you would read a country
              </h1>
              <p
                className="at-fade mt-7 max-w-[50ch] text-[17.5px] leading-relaxed text-[#2C4A42]"
                style={{ animationDelay: "170ms" }}
              >
                Upload a PDF and Ratio Reader surveys it: where the argument
                takes the high ground, where the evidence is dense, where the
                ground is unstable, and the shortest route through. You get a
                summary at the interval you choose, plus the quotes, hints and
                fault lines — each one referenced to a page.
              </p>
              <div
                className="at-fade mt-9 flex flex-wrap items-center gap-4"
                style={{ animationDelay: "250ms" }}
              >
                <button className="at-btn">Upload a PDF</button>
                <button className="at-btn at-btn-line">Read the legend</button>
              </div>
              <dl
                className="at-fade mt-11 grid grid-cols-3 gap-5 border-t border-[var(--hair)] pt-6"
                style={{ animationDelay: "330ms" }}
              >
                {[
                  ["40 sec", "to survey 400 pages"],
                  ["900", "pages per document"],
                  ["34", "languages read"],
                ].map(([v, k]) => (
                  <div key={k}>
                    <dt className="at-display at-num text-[30px]">{v}</dt>
                    <dd className="at-label mt-1 normal-case tracking-[0.1em]">
                      {k}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            {/* the map plate */}
            <figure className="at-plate at-fade p-4 sm:p-5" style={{ animationDelay: "180ms" }}>
              <svg
                viewBox="0 0 640 470"
                className="h-auto w-full"
                role="img"
                aria-label="A contour map of the document: a summit marking the thesis, dense ground where the evidence sits, a fault line at the attribution gap and secondary high ground on operator practice."
              >
                {/* hypsometric bands, low to high */}
                <path d={contour(SUMMIT.cx, SUMMIT.cy, 186, 0.4, 0.86)} className="at-band-1" />
                <path d={contour(SUMMIT.cx, SUMMIT.cy, 124, 1.1, 0.86)} className="at-band-2" />
                <path d={contour(SUMMIT.cx, SUMMIT.cy, 62, 2.2, 0.86)} className="at-band-3" />
                <path d={contour(RIDGE.cx, RIDGE.cy, 96, 3.1, 0.78)} className="at-band-1" />
                <path d={contour(RIDGE.cx, RIDGE.cy, 52, 0.9, 0.78)} className="at-band-2" />

                {/* contour lines */}
                {[210, 186, 162, 138, 114, 90, 66, 42].map((r, i) => (
                  <path
                    key={r}
                    d={contour(SUMMIT.cx, SUMMIT.cy, r, 0.4 + i * 0.42, 0.86)}
                    className={`at-contour at-draw ${i % 4 === 0 ? "at-contour-index" : ""}`}
                    style={{ animationDelay: `${i * 90}ms` }}
                  />
                ))}
                {[110, 84, 58, 34].map((r, i) => (
                  <path
                    key={`r${r}`}
                    d={contour(RIDGE.cx, RIDGE.cy, r, 3.1 + i * 0.5, 0.78)}
                    className={`at-contour at-draw ${i === 0 ? "at-contour-index" : ""}`}
                    style={{ animationDelay: `${300 + i * 90}ms` }}
                  />
                ))}

                {/* the through-line of the argument, drawn as water */}
                <path
                  d="M28 92 C 130 140, 168 196, 236 236 S 356 300, 404 358 S 520 424, 612 436"
                  className="at-river at-draw"
                  style={{ animationDelay: "500ms" }}
                />
                <text x="52" y="84" className="at-water-label">
                  the argument, running through
                </text>

                {/* summit marker */}
                <g className="at-drop" style={{ animationDelay: "900ms" }}>
                  <path
                    d={`M${SUMMIT.cx} ${SUMMIT.cy - 13} L${SUMMIT.cx + 11} ${SUMMIT.cy + 6} L${SUMMIT.cx - 11} ${SUMMIT.cy + 6} Z`}
                    fill="var(--pine)"
                  />
                  <text x={SUMMIT.cx + 18} y={SUMMIT.cy + 4} className="at-map-title">
                    Thesis
                  </text>
                </g>

                {/* feature pins */}
                {FEATURES.filter((f) => f.id !== "thesis").map((f, i) => (
                  <g
                    key={f.id}
                    className="at-pin at-drop"
                    style={{ animationDelay: `${1000 + i * 120}ms` }}
                    role="button"
                    tabIndex={0}
                    aria-label={`${f.kind}: ${f.name}`}
                    onMouseEnter={() => setFeatureId(f.id)}
                    onFocus={() => setFeatureId(f.id)}
                    onClick={() => setFeatureId(f.id)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        setFeatureId(f.id);
                      }
                    }}
                    data-on={featureId === f.id}
                  >
                    <circle
                      cx={f.x}
                      cy={f.y}
                      r={6.5}
                      fill="var(--plate)"
                      stroke="var(--pine)"
                      strokeWidth="1.6"
                    />
                    <circle cx={f.x} cy={f.y} r={2.6} fill="var(--pine)" />
                    <text x={f.x + 13} y={f.y + 4} className="at-map-label">
                      {f.name}
                    </text>
                  </g>
                ))}

                {/* thesis is also selectable, from its own marker area */}
                <g
                  className="at-pin"
                  role="button"
                  tabIndex={0}
                  aria-label="Summit: the thesis"
                  onMouseEnter={() => setFeatureId("thesis")}
                  onFocus={() => setFeatureId("thesis")}
                  onClick={() => setFeatureId("thesis")}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      setFeatureId("thesis");
                    }
                  }}
                  data-on={featureId === "thesis"}
                >
                  <circle
                    cx={SUMMIT.cx}
                    cy={SUMMIT.cy}
                    r={16}
                    fill="transparent"
                    stroke="none"
                  />
                </g>

                {/* neatline ticks along the frame */}
                {[88, 176, 264, 352, 440, 528].map((x) => (
                  <path key={x} d={`M${x} 0v8M${x} 470v-8`} className="at-prof-grid" />
                ))}
                {[88, 176, 264, 352].map((y) => (
                  <path key={`y${y}`} d={`M0 ${y}h8M640 ${y}h-8`} className="at-prof-grid" />
                ))}
              </svg>

              {/* the selected feature reads out below the plate */}
              <figcaption className="mt-4 border-t border-[var(--hair)] pt-4">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <span className="at-region">{feature.kind}</span>
                  <span className="at-label at-num">{feature.folio}</span>
                </div>
                <p className="at-display mt-2 text-[22px]">{feature.name}</p>
                <p className="mt-2 max-w-[62ch] text-[15.5px] leading-relaxed text-[#2C4A42]">
                  {feature.body}
                </p>
                <p className="at-label mt-4 normal-case tracking-[0.1em]">
                  Four features shown of 82 surveyed. Hover or tab a marker.
                </p>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* ── legend + scale ───────────────────────────────────────────────── */}
      <section
        id="legend"
        className="border-y border-[var(--hair)] bg-[var(--paper-2)]"
      >
        <div className="mx-auto grid max-w-[1220px] gap-14 px-5 py-18 lg:grid-cols-[1.15fr_1fr] lg:gap-20 lg:px-8">
          <div>
            <h2 className="at-display text-[clamp(1.8rem,3.4vw,2.6rem)]">
              Legend
            </h2>
            <p className="mt-4 max-w-[48ch] text-[16px] leading-relaxed text-[#2C4A42]">
              Four symbols, four kinds of attention. They are drawn from the
              conventions of a survey sheet because they do the same job: tell
              you what kind of thing you are looking at before you read it.
            </p>
            <div className="at-card mt-8 px-6 py-3">
              {LEGEND.map((l) => (
                <div key={l.name} className="at-legend-row">
                  <svg
                    viewBox="0 0 28 30"
                    className="mt-1 h-8 w-8 text-[var(--pine)]"
                    aria-hidden
                  >
                    {l.sym}
                  </svg>
                  <div>
                    <h3 className="at-display text-[19px]">{l.name}</h3>
                    <p className="mt-1 max-w-[52ch] text-[15px] leading-relaxed text-[#2C4A42]">
                      {l.note}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="at-display text-[clamp(1.8rem,3.4vw,2.6rem)]">
              Scale
            </h2>
            <p className="mt-4 max-w-[46ch] text-[16px] leading-relaxed text-[#2C4A42]">
              Every map is a decision about what to leave out. Set the interval
              and Ratio tells you plainly what it kept.
            </p>

            <div className="at-card mt-8 p-6">
              <div className="flex flex-wrap gap-2">
                {SCALES.map((s) => (
                  <button
                    key={s.id}
                    className="at-scale-btn"
                    aria-pressed={scaleId === s.id}
                    onClick={() => setScaleId(s.id)}
                  >
                    {s.id}
                  </button>
                ))}
              </div>

              <div className="mt-8">
                <div className="at-scalebar">
                  {Array.from({ length: scale.divisions }, (_, i) => (
                    <span key={i} />
                  ))}
                </div>
                <div className="mt-2 flex justify-between">
                  <span className="at-label at-num">0</span>
                  <span className="at-label at-num">34 pages of source</span>
                </div>
              </div>

              <p className="at-display mt-7 text-[21px]">{scale.equiv}</p>
              <p className="at-label at-num mt-2 tracking-[0.12em]">
                {scale.out}
              </p>
              <p className="mt-4 max-w-[46ch] text-[15.5px] leading-relaxed text-[#2C4A42]">
                {scale.note}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── elevation profile ────────────────────────────────────────────── */}
      <section id="profile" className="mx-auto max-w-[1220px] px-5 py-20 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2 className="at-display max-w-[26ch] text-[clamp(1.8rem,3.4vw,2.6rem)]">
            Where the substance actually sits
          </h2>
          <p className="at-label max-w-[34ch] normal-case tracking-[0.1em]">
            Evidence density by page, sampled every two pages
          </p>
        </div>

        <figure className="at-card mt-8 p-6 sm:p-8">
          <div className="overflow-x-auto">
            <svg
              viewBox={`0 0 ${profileW} ${profileH + 30}`}
              className="h-auto w-full min-w-[560px]"
              role="img"
              aria-label="An elevation profile of evidence density across 34 pages. Density rises from page 1, peaks between pages 15 and 20, dips through the discussion, rises again around page 28 and falls away in the appendix."
            >
              {[0.25, 0.5, 0.75].map((f) => (
                <line
                  key={f}
                  x1="0"
                  y1={profileH - f * (profileH - 18)}
                  x2={profileW}
                  y2={profileH - f * (profileH - 18)}
                  className="at-prof-grid"
                />
              ))}
              <polygon points={area} className="at-prof-area" />
              <polyline points={line} className="at-prof-line at-draw" />
              <circle
                cx={pts[peakIdx][0]}
                cy={pts[peakIdx][1]}
                r="4.5"
                className="at-prof-peak"
              />
              <text
                x={pts[peakIdx][0] + 10}
                y={pts[peakIdx][1] - 6}
                className="at-map-label"
              >
                pp. 15–18 · 61 measurements
              </text>
              <line x1="0" y1={profileH} x2={profileW} y2={profileH} stroke="var(--pine)" strokeWidth="1" />
              {[
                [0, "p. 1"],
                [profileW * 0.5, "p. 17"],
                [profileW, "p. 34"],
              ].map(([x, label]) => (
                <text
                  key={label as string}
                  x={x as number}
                  y={profileH + 20}
                  className="at-map-label"
                  textAnchor={x === 0 ? "start" : x === profileW ? "end" : "middle"}
                >
                  {label}
                </text>
              ))}
            </svg>
          </div>
          <figcaption className="mt-5 grid gap-6 border-t border-[var(--hair)] pt-5 sm:grid-cols-3">
            {[
              ["Read these", "pp. 15–18 — the measurements every claim rests on"],
              ["Skim these", "pp. 19–21 — discussion that repeats the results section"],
              ["Do not miss", "pp. 22–27 — the second argument, after the conclusion"],
            ].map(([k, v]) => (
              <div key={k}>
                <p className="at-region">{k}</p>
                <p className="mt-1.5 text-[15px] leading-relaxed text-[#2C4A42]">
                  {v}
                </p>
              </div>
            ))}
          </figcaption>
        </figure>
      </section>

      {/* ── the traverse ─────────────────────────────────────────────────── */}
      <section className="border-y border-[var(--hair)] bg-[var(--paper-2)]">
        <div className="mx-auto max-w-[1220px] px-5 py-20 lg:px-8">
          <h2 className="at-display text-[clamp(1.8rem,3.4vw,2.6rem)]">
            The traverse
          </h2>
          <div className="mt-12 grid gap-10 md:grid-cols-3">
            {LEGS.map((l) => (
              <div key={l.numeral} className="border-t border-[var(--pine)] pt-6">
                <div className="flex items-baseline gap-4">
                  <span className="at-display text-[44px] leading-none">
                    {l.numeral}
                  </span>
                  <span className="at-label">{l.bearing}</span>
                </div>
                <h3 className="at-display mt-5 text-[23px]">{l.title}</h3>
                <p className="mt-3 max-w-[40ch] text-[15.5px] leading-relaxed text-[#2C4A42]">
                  {l.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── field reports ────────────────────────────────────────────────── */}
      <section className="mx-auto max-w-[1220px] px-5 py-20 lg:px-8">
        <h2 className="at-display text-[clamp(1.8rem,3.4vw,2.6rem)]">
          Field reports
        </h2>
        <div className="mt-10 grid gap-8 md:grid-cols-2">
          {REPORTS.map((r) => (
            <blockquote key={r.who} className="at-card p-7">
              <p className="at-display text-[19px] leading-[1.5]">{r.body}</p>
              <footer className="mt-6 border-t border-[var(--hair)] pt-4">
                <p className="at-region">{r.who}</p>
                <p className="at-label mt-1 normal-case tracking-[0.1em]">
                  {r.role}
                </p>
              </footer>
            </blockquote>
          ))}
        </div>
      </section>

      {/* ── editions ─────────────────────────────────────────────────────── */}
      <section
        id="editions"
        className="at-grat border-y border-[var(--hair)]"
      >
        <div className="mx-auto max-w-[1220px] px-5 py-20 lg:px-8">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="at-display text-[clamp(1.8rem,3.4vw,2.6rem)]">
              Editions
            </h2>
            <p className="at-label normal-case tracking-[0.1em]">
              Monthly. Cancel from the account page.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {EDITIONS.map((e) => (
              <div
                key={e.name}
                className="at-card flex flex-col p-7"
                style={
                  e.lead
                    ? { borderColor: "var(--pine)", boxShadow: "6px 6px 0 rgba(29,58,51,0.1)" }
                    : undefined
                }
              >
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="at-display text-[24px]">{e.name}</h3>
                  {e.lead && <span className="at-region">Most taken</span>}
                </div>
                <p className="at-display at-num mt-4 text-[40px]">
                  {e.price}
                  <span className="at-label ml-2 tracking-[0.12em]">{e.per}</span>
                </p>
                <p className="mt-3 text-[15.5px] leading-relaxed text-[#2C4A42]">
                  {e.note}
                </p>
                <ul className="mt-6 mb-8 flex flex-col gap-2 border-t border-[var(--hair)] pt-4">
                  {e.rows.map((r) => (
                    <li key={r} className="flex gap-2.5 text-[15px]">
                      <span aria-hidden className="text-[var(--clay)]">
                        ·
                      </span>
                      {r}
                    </li>
                  ))}
                </ul>
                <button
                  className={`at-btn mt-auto w-full ${e.lead ? "" : "at-btn-line"}`}
                >
                  {e.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── index ────────────────────────────────────────────────────────── */}
      <section className="mx-auto max-w-[1220px] px-5 py-20 lg:px-8">
        <h2 className="at-display text-[clamp(1.8rem,3.4vw,2.6rem)]">
          Index to the sheet
        </h2>
        <dl className="at-index mt-10 grid gap-x-16 gap-y-8 md:grid-cols-2">
          {INDEX.map((i) => (
            <div key={i.q}>
              <dt>
                {i.q}
                <span className="at-folio whitespace-nowrap">{i.folio}</span>
              </dt>
              <dd className="text-[15.5px] leading-relaxed">{i.a}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* ── closing ──────────────────────────────────────────────────────── */}
      <section className="border-t border-[var(--hair)] bg-[var(--pine)] text-[var(--paper)]">
        <div className="mx-auto max-w-[1220px] px-5 py-24 lg:px-8">
          <h2 className="at-display max-w-[24ch] text-[clamp(2.2rem,5vw,3.8rem)]">
            You would not walk unfamiliar ground without a map. Stop reading
            without one.
          </h2>
          <div className="mt-10 flex flex-wrap items-center gap-5">
            <button className="at-btn at-btn-invert">Upload a PDF</button>
            <span className="at-label" style={{ color: "rgba(230,237,231,0.66)" }}>
              Five documents free · no card
            </span>
          </div>
        </div>
      </section>

      {/* ── credit block ─────────────────────────────────────────────────── */}
      <footer className="bg-[var(--pine)] text-[rgba(230,237,231,0.7)]">
        <div className="mx-auto max-w-[1220px] border-t border-[rgba(230,237,231,0.2)] px-5 py-10 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["Sheet", "Ratio Reader, series A, no. 4"],
              ["Projection", "Reading order, page-anchored"],
              ["Interval", "Variable: 1:5, 1:20, 1:100"],
              ["Surveyed", "2026 · revised continuously"],
            ].map(([k, v]) => (
              <div key={k}>
                <p
                  className="at-label"
                  style={{ color: "rgba(230,237,231,0.55)" }}
                >
                  {k}
                </p>
                <p className="mt-1 text-[15px]">{v}</p>
              </div>
            ))}
          </div>
          <p
            className="at-label mt-9 normal-case tracking-[0.1em]"
            style={{ color: "rgba(230,237,231,0.55)" }}
          >
            Set in Marcellus and Jost. Contours generated, not traced. Water in
            italic, as the convention requires.
          </p>
        </div>
      </footer>
    </div>
  );
}
