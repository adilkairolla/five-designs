import { usePage } from "@/lib/page";
import type { CSSProperties } from "react";

const fonts =
  "https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;500;600;700&family=IBM+Plex+Sans:ital,wght@0,400;0,500;0,600;1,400&family=Space+Mono:ital,wght@0,400;0,700;1,400&display=swap";

const pageCss = `
.bp { font-family: 'IBM Plex Sans', system-ui, sans-serif; }
.bp-cond { font-family: 'Barlow Condensed', 'Arial Narrow', sans-serif; }
.bp-mono { font-family: 'Space Mono', ui-monospace, monospace; }
.bp-grid {
  background-image:
    linear-gradient(rgba(220,233,255,.055) 1px, transparent 1px),
    linear-gradient(90deg, rgba(220,233,255,.055) 1px, transparent 1px),
    linear-gradient(rgba(220,233,255,.11) 1px, transparent 1px),
    linear-gradient(90deg, rgba(220,233,255,.11) 1px, transparent 1px);
  background-size: 24px 24px, 24px 24px, 120px 120px, 120px 120px;
}
.bp-sheet { border: 1px solid rgba(220,233,255,.45); outline: 1px solid rgba(220,233,255,.16); outline-offset: 6px; }
.bp-panel { background: rgba(8,30,58,.55); border: 1px solid rgba(220,233,255,.3); }
.bp-box { position: relative; border: 1px solid rgba(220,233,255,.4); background: rgba(8,30,58,.5); }
.bp-box::before, .bp-box::after {
  content:""; position:absolute; width:10px; height:10px; border-color:#F0D264; border-style:solid;
}
.bp-box::before { top:-1px; left:-1px; border-width:2px 0 0 2px; }
.bp-box::after { bottom:-1px; right:-1px; border-width:0 2px 2px 0; }
.bp-line { animation: bp-draw 1.5s cubic-bezier(.4,.1,.2,1) forwards; }
@keyframes bp-draw { to { stroke-dashoffset: 0; } }
.bp-fade { animation: bp-fade .9s ease-out both; }
@keyframes bp-fade { from { opacity: 0; } to { opacity: 1; } }
.bp-blip { animation: bp-blip .45s cubic-bezier(.3,1.4,.5,1) both; transform-origin: center; transform-box: fill-box; }
@keyframes bp-blip { from { opacity: 0; transform: scale(.4); } to { opacity: 1; transform: scale(1); } }
.bp-link { text-decoration: underline; text-underline-offset: 4px; text-decoration-color: rgba(220,233,255,.4); }
.bp-link:hover { text-decoration-color: #F0D264; color: #F0D264; }
.bp-row:hover { background: rgba(220,233,255,.06); }
@media (prefers-reduced-motion: reduce) {
  .bp-line { animation: none !important; stroke-dashoffset: 0 !important; }
  .bp-blip, .bp-fade { animation: none; }
}
`;

const outputs = [
  {
    part: "RR-SUM-01",
    name: "Summary",
    fn: "The load-bearing claims, ranked by consequence rather than page order.",
  },
  {
    part: "RR-HNT-02",
    name: "Hints",
    fn: "Plain-language context for jargon, formulas, and unstated assumptions.",
  },
  {
    part: "RR-QTE-03",
    name: "Quotes",
    fn: "Verbatim sentences worth keeping, delivered with their page numbers.",
  },
  {
    part: "RR-INS-04",
    name: "Insights",
    fn: "Cross-document connections and contradictions the original never names.",
  },
  {
    part: "RR-SRC-05",
    name: "Sources",
    fn: "A live link from every returned line back to the page it came from.",
  },
];

function delay(s: number): CSSProperties {
  return { animationDelay: `${s}s` };
}

function draw(len: number, d = 0): CSSProperties {
  return {
    animationDelay: `${d}s`,
    strokeDasharray: len,
    strokeDashoffset: len,
  };
}

function HeroDiagram() {
  const plates = [
    { x: 105, y: 200, name: "SUMMARY", sub: "RANKED KEY POINTS", n: "1" },
    { x: 130, y: 136, name: "HINTS", sub: "PLAIN-LANGUAGE CONTEXT", n: "2" },
    { x: 155, y: 72, name: "QUOTES", sub: "VERBATIM, WITH PAGES", n: "3" },
    { x: 180, y: 8, name: "INSIGHTS", sub: "CONNECTIONS & CONTRADICTIONS", n: "4" },
  ];

  return (
    <svg
      viewBox="0 0 660 640"
      className="bp h-auto w-full min-w-[560px]"
      fill="none"
      role="img"
      aria-label="Exploded drawing of a PDF separating into summary, hints, quotes, and insights layers"
    >
      <g stroke="#DCE9FF" strokeWidth="1.2" opacity=".55">
        {plates.map((p, i) => (
          <line
            key={`s${i}`}
            className="bp-fade"
            style={delay(0.85 + 0.15 * i)}
            x1="90"
            y1={p.y + 48}
            x2={p.x}
            y2={p.y + 48}
            strokeDasharray="4 4"
          />
        ))}
        <line className="bp-fade" style={delay(0.8)} x1="90" y1="270" x2="90" y2="56" strokeDasharray="4 4" />
      </g>

      {plates.map((p, i) => (
        <g key={p.name}>
          <rect
            className="bp-line"
            style={draw(580, 0.12 * i + 0.2)}
            x={p.x}
            y={p.y}
            width="240"
            height="48"
            stroke="#DCE9FF"
            strokeWidth="1.4"
            fill="rgba(220,233,255,.06)"
          />
          <g className="bp-blip" style={delay(1.15 + i * 0.12)}>
            <circle cx={p.x - 16} cy={p.y + 24} r="10" stroke="#F0D264" strokeWidth="1.3" fill="#123A6B" />
            <text
              x={p.x - 16}
              y={p.y + 28}
              textAnchor="middle"
              fill="#F0D264"
              fontSize="11"
              style={{ fontFamily: "'Space Mono', monospace" }}
            >
              {p.n}
            </text>
          </g>
          <line
            className="bp-line"
            style={draw(140, 0.5 + i * 0.12)}
            x1={p.x + 240}
            y1={p.y + 24}
            x2="470"
            y2={p.y + 24}
            stroke="#DCE9FF"
            strokeWidth="1"
          />
          <g className="bp-blip" style={delay(1.2 + i * 0.12)}>
            <text x="478" y={p.y + 20} fill="#DCE9FF" fontSize="17" className="bp-cond" letterSpacing="0.5">
              {p.name}
            </text>
            <text x="478" y={p.y + 35} fill="#7FA3D4" fontSize="9" className="bp-mono">
              {p.sub}
            </text>
          </g>
        </g>
      ))}

      <rect
        className="bp-line"
        style={draw(1100, 0.05)}
        x="80"
        y="270"
        width="240"
        height="300"
        stroke="#DCE9FF"
        strokeWidth="1.6"
        fill="rgba(220,233,255,.04)"
      />
      <path
        className="bp-line"
        style={draw(90, 0.35)}
        d="M294 270 l26 26 h-26 z"
        stroke="#DCE9FF"
        strokeWidth="1.2"
        fill="rgba(220,233,255,.08)"
      />
      <g stroke="#DCE9FF" strokeWidth="1" opacity=".35">
        {[300, 320, 340, 360, 380, 440, 460, 480, 500, 520, 540].map((y, i) => (
          <line
            key={y}
            className="bp-line"
            style={draw(180, 0.4 + i * 0.05)}
            x1="100"
            y1={y}
            x2={i % 3 === 1 ? 190 : 270}
            y2={y}
          />
        ))}
      </g>
      <line className="bp-line" style={draw(160, 0.85)} x1="320" y1="420" x2="470" y2="420" stroke="#DCE9FF" strokeWidth="1" />
      <g className="bp-blip" style={delay(1.5)}>
        <text x="478" y="416" fill="#DCE9FF" fontSize="17" className="bp-cond" letterSpacing="0.5">
          SOURCE PDF
        </text>
        <text x="478" y="431" fill="#7FA3D4" fontSize="9" className="bp-mono">
          UP TO 500 PAGES
        </text>
      </g>

      <g stroke="#F0D264" strokeWidth="1.1">
        <line className="bp-line" style={draw(220, 0.9)} x1="48" y1="270" x2="48" y2="56" />
        <line className="bp-line" style={draw(14, 0.95)} x1="42" y1="270" x2="54" y2="270" />
        <line className="bp-line" style={draw(14, 1)} x1="42" y1="56" x2="54" y2="56" />
      </g>
      <g className="bp-blip" style={delay(1.6)}>
        <text
          x="30"
          y="163"
          fill="#F0D264"
          fontSize="11"
          className="bp-mono"
          transform="rotate(-90 30 163)"
          textAnchor="middle"
        >
          STACK HEIGHT: 92% PADDING REMOVED
        </text>
      </g>

      <g stroke="#DCE9FF" strokeWidth="1.1" opacity=".8">
        <line className="bp-line" style={draw(250, 1.05)} x1="80" y1="600" x2="320" y2="600" />
        <line className="bp-line" style={draw(14, 1.1)} x1="80" y1="594" x2="80" y2="606" />
        <line className="bp-line" style={draw(14, 1.15)} x1="320" y1="594" x2="320" y2="606" />
      </g>
      <g className="bp-blip" style={delay(1.7)}>
        <text x="200" y="592" fill="#DCE9FF" fontSize="10" textAnchor="middle" className="bp-mono">
          214 PAGES IN
        </text>
        <text x="200" y="622" fill="#F0D264" fontSize="10" textAnchor="middle" className="bp-mono">
          9 MIN OUT · Δ 7 HOURS SAVED
        </text>
      </g>
    </svg>
  );
}

export function Design5() {
  usePage("Ratio Reader · Spec Sheet RR-001", fonts);

  return (
    <div className="bp bp-grid min-h-dvh bg-[#123A6B] text-[#DCE9FF] antialiased">
      <style>{pageCss}</style>

      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-8 sm:py-10">
        <div className="bp-sheet bg-[#0E3059]/60">
          <header className="flex flex-wrap items-center justify-between gap-4 border-b border-[#DCE9FF]/35 px-5 py-4 sm:px-8">
            <div className="flex items-baseline gap-4">
              <span className="bp-cond text-2xl font-semibold tracking-wide">
                RATIO READER
              </span>
              <span className="bp-mono hidden text-[.62rem] text-[#7FA3D4] sm:inline">
                DWG. RR-001 · REV A
              </span>
            </div>
            <nav className="bp-mono hidden gap-6 text-[.68rem] lg:flex">
              <a className="bp-link" href="#overview">OVERVIEW</a>
              <a className="bp-link" href="#process">PROCESS</a>
              <a className="bp-link" href="#parts">PARTS LIST</a>
              <a className="bp-link" href="#rates">RATE SCHEDULE</a>
            </nav>
            <a
              href="#intake"
              className="bp-cond border border-[#F0D264] px-4 py-1.5 text-[.95rem] font-medium tracking-wide text-[#F0D264] transition-colors hover:bg-[#F0D264] hover:text-[#123A6B]"
            >
              UPLOAD PDF
            </a>
          </header>

          <section id="overview" className="grid items-center gap-10 border-b border-[#DCE9FF]/25 px-5 py-14 sm:px-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] lg:py-16">
            <div>
              <p className="bp-mono text-[.65rem] text-[#7FA3D4]">
                SPECIFICATION · DOCUMENT INSTRUMENT · ISSUE 2026-09
              </p>
              <h1 className="bp-cond mt-5 text-[clamp(3rem,7vw,5.6rem)] leading-[.9] font-semibold tracking-tight">
                READ THE SIGNAL.
                <br />
                <span className="text-[#F0D264]">SKIP THE NOISE.</span>
              </h1>
              <p className="mt-6 max-w-[56ch] text-[1.02rem] leading-8 text-[#C3D6F2]">
                Ratio Reader is a document instrument. It ingests a PDF,
                isolates the load-bearing information, and returns a summary
                with hints, quotes, and insights — each one traceable to the
                page it came from.
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-5">
                <a
                  href="#intake"
                  className="bp-cond bg-[#F0D264] px-7 py-3 text-[1.05rem] font-semibold tracking-wide text-[#123A6B] transition-colors hover:bg-[#F7E08C]"
                >
                  UPLOAD PDF
                </a>
                <a href="#parts" className="bp-mono text-[.72rem] text-[#DCE9FF]">
                  VIEW SAMPLE OUTPUT ↓
                </a>
              </div>
              <dl className="mt-10 grid max-w-lg grid-cols-3 gap-4 border-t border-[#DCE9FF]/25 pt-6">
                {[
                  { k: "FORMAT", v: "PDF, scans" },
                  { k: "LANGUAGES", v: "40+" },
                  { k: "FIRST DOCS", v: "Free ×3" },
                ].map((s) => (
                  <div key={s.k}>
                    <dt className="bp-mono text-[.58rem] text-[#7FA3D4]">{s.k}</dt>
                    <dd className="bp-cond mt-1 text-[1.15rem] font-medium">{s.v}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="overflow-x-auto">
              <HeroDiagram />
              <p className="bp-mono mt-3 text-center text-[.55rem] text-[#7FA3D4] lg:hidden">
                DRAG THE DRAWING TO INSPECT →
              </p>
            </div>
          </section>

          <section id="process" className="border-b border-[#DCE9FF]/25 px-5 py-14 sm:px-8">
            <div className="flex flex-wrap items-baseline justify-between gap-3">
              <h2 className="bp-cond text-[clamp(1.8rem,3.4vw,2.6rem)] font-semibold tracking-wide">
                DETAIL A — PROCESS
              </h2>
              <span className="bp-mono text-[.62rem] text-[#7FA3D4]">SEQUENCE 01 → 03</span>
            </div>

            <div className="mt-8 grid items-stretch gap-4 lg:grid-cols-[1fr_auto_1fr_auto_1fr]">
              {[
                {
                  n: "01",
                  t: "INTAKE",
                  d: "Drag in a PDF up to 500 pages. Read in memory, deleted after processing, never used for training.",
                  c: "FORMAT: PDF · OCR ON",
                },
                {
                  n: "02",
                  t: "ANALYSIS",
                  d: "Claims ranked by consequence. Jargon defined in place. Quotes lifted verbatim. Contradictions flagged across sections.",
                  c: "DEPTH: ADJUSTABLE",
                },
                {
                  n: "03",
                  t: "OUTPUT",
                  d: "A summary you can finish with one coffee, with every line linked to its source page and exportable to your notes.",
                  c: "EXPORT: MD · NOTES",
                },
              ].map((s, i) => (
                <div key={s.n} className="contents">
                  <div className="bp-box flex flex-col p-6">
                    <div className="flex items-baseline justify-between">
                      <span className="bp-mono text-[.65rem] text-[#7FA3D4]">STEP {s.n}</span>
                      <span className="bp-cond text-2xl font-semibold text-[#F0D264]">{s.t}</span>
                    </div>
                    <p className="mt-4 flex-1 text-[.96rem] leading-7 text-[#C3D6F2]">{s.d}</p>
                    <p className="bp-mono mt-5 border-t border-dashed border-[#DCE9FF]/30 pt-3 text-[.58rem] text-[#7FA3D4]">
                      {s.c}
                    </p>
                  </div>
                  {i < 2 && (
                    <div className="hidden items-center justify-center lg:flex" aria-hidden>
                      <svg viewBox="0 0 64 28" className="h-7 w-16" fill="none" stroke="#F0D264" strokeWidth="2">
                        <line className="bp-line" style={draw(50, i * 0.2)} x1="2" y1="14" x2="46" y2="14" />
                        <path className="bp-line" style={draw(45, i * 0.2 + 0.1)} d="M44 4 l16 10 -16 10" />
                      </svg>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          <section id="parts" className="border-b border-[#DCE9FF]/25 px-5 py-14 sm:px-8">
            <div className="flex flex-wrap items-baseline justify-between gap-3">
              <h2 className="bp-cond text-[clamp(1.8rem,3.4vw,2.6rem)] font-semibold tracking-wide">
                DETAIL B — PARTS LIST
              </h2>
              <span className="bp-mono text-[.62rem] text-[#7FA3D4]">INCLUDED WITH EVERY DOCUMENT</span>
            </div>

            <div className="mt-8 overflow-x-auto">
              <table className="w-full min-w-[640px] border-collapse text-left">
                <thead>
                  <tr className="bp-mono border-b border-[#DCE9FF]/40 text-[.6rem] text-[#7FA3D4]">
                    <th className="py-3 pr-4 font-normal">PART NO.</th>
                    <th className="py-3 pr-4 font-normal">COMPONENT</th>
                    <th className="py-3 pr-4 font-normal">FUNCTION</th>
                    <th className="py-3 font-normal">QTY</th>
                  </tr>
                </thead>
                <tbody>
                  {outputs.map((o) => (
                    <tr key={o.part} className="bp-row border-b border-[#DCE9FF]/15 transition-colors">
                      <td className="bp-mono py-5 pr-4 align-top text-[.7rem] text-[#F0D264]">{o.part}</td>
                      <td className="bp-cond py-5 pr-6 align-top text-[1.3rem] font-medium">{o.name}</td>
                      <td className="max-w-[52ch] py-5 pr-4 align-top text-[.96rem] leading-7 text-[#C3D6F2]">
                        {o.fn}
                      </td>
                      <td className="bp-mono py-5 align-top text-[.7rem] text-[#7FA3D4]">1 / DOC</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section className="border-b border-[#DCE9FF]/25 px-5 py-14 sm:px-8">
            <div className="flex flex-wrap items-baseline justify-between gap-3">
              <h2 className="bp-cond text-[clamp(1.8rem,3.4vw,2.6rem)] font-semibold tracking-wide">
                DETAIL C — PERFORMANCE DATA
              </h2>
              <span className="bp-mono text-[.62rem] text-[#7FA3D4]">MEASURED ON A 214-PAGE REPORT</span>
            </div>

            <div className="mt-10 space-y-8">
              {[
                { label: "READING TIME, BEFORE", value: "4 h 20 m", w: "100%", color: "#7FA3D4" },
                { label: "READING TIME, WITH RATIO READER", value: "9 min", w: "12%", color: "#F0D264" },
              ].map((b) => (
                <div key={b.label}>
                  <div className="flex items-baseline justify-between">
                    <span className="bp-mono text-[.62rem] text-[#7FA3D4]">{b.label}</span>
                    <span className="bp-cond text-[1.2rem] font-medium" style={{ color: b.color }}>
                      {b.value}
                    </span>
                  </div>
                  <div className="mt-2 flex h-5 items-stretch border border-[#DCE9FF]/35">
                    <span className="w-full">
                      <span className="block h-full" style={{ width: b.w, background: b.color, opacity: b.w === "100%" ? 0.35 : 0.9 }} />
                    </span>
                  </div>
                  <div className="bp-mono mt-1 flex justify-between text-[.55rem] text-[#7FA3D4]">
                    <span>0</span>
                    <span>1 h</span>
                    <span>2 h</span>
                    <span>3 h</span>
                    <span>4 h</span>
                    <span>5 h</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 grid gap-3 sm:grid-cols-3">
              {[
                { k: "CLAIMS TRACED TO SOURCE", v: "100%" },
                { k: "CONTRADICTIONS FLAGGED / 100 PP", v: "2.4" },
                { k: "HINTS WRITTEN PER DOC", v: "18 avg" },
              ].map((s) => (
                <div key={s.k} className="bp-panel flex items-baseline justify-between p-5">
                  <span className="bp-mono max-w-[16ch] text-[.58rem] leading-4 text-[#7FA3D4]">{s.k}</span>
                  <span className="bp-cond text-3xl font-semibold text-[#F0D264]">{s.v}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="border-b border-[#DCE9FF]/25 px-5 py-14 sm:px-8">
            <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_22rem]">
              <div>
                <h2 className="bp-cond text-[clamp(1.8rem,3.4vw,2.6rem)] font-semibold tracking-wide">
                  GENERAL NOTES
                </h2>
                <ol className="mt-7 space-y-5">
                  {[
                    "Documents are processed in memory and deleted the moment your summary is built. Nothing is stored. Nothing is used for training.",
                    "OCR is enabled by default for scans and photographs. Forty-plus languages supported, including mixed-language documents.",
                    "Re-run any section at a deeper setting if a passage feels thin. Depth is adjustable per document, not per plan.",
                    "Every returned line carries its source page. Clicking it opens the original at that page, so verification takes one click.",
                    "Export the full output to Markdown or send it straight to your notes app. Formatting is preserved.",
                    "If volume is unpredictable, start on Reader. Rate changes apply at the next cycle, never mid-month.",
                  ].map((n, i) => (
                    <li key={n} className="flex gap-5">
                      <span className="bp-mono shrink-0 text-[.7rem] text-[#F0D264]">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <p className="max-w-[62ch] text-[.98rem] leading-8 text-[#C3D6F2]">{n}</p>
                    </li>
                  ))}
                </ol>
              </div>

              <aside className="bp-panel self-start p-6">
                <p className="bp-mono text-[.6rem] text-[#7FA3D4]">CALLOUT LEGEND</p>
                <ul className="mt-5 space-y-4">
                  {outputs.slice(0, 4).map((o, i) => (
                    <li key={o.part} className="flex items-center gap-4">
                      <span className="bp-mono flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-[#F0D264] text-[.62rem] text-[#F0D264]">
                        {i + 1}
                      </span>
                      <span className="bp-cond text-[1.15rem] font-medium">{o.name}</span>
                    </li>
                  ))}
                </ul>
                <p className="bp-mono mt-6 border-t border-dashed border-[#DCE9FF]/30 pt-4 text-[.58rem] leading-4 text-[#7FA3D4]">
                  SEE HERO DIAGRAM FOR ASSEMBLY REFERENCE
                </p>
              </aside>
            </div>
          </section>

          <section id="rates" className="border-b border-[#DCE9FF]/25 px-5 py-14 sm:px-8">
            <div className="flex flex-wrap items-baseline justify-between gap-3">
              <h2 className="bp-cond text-[clamp(1.8rem,3.4vw,2.6rem)] font-semibold tracking-wide">
                RATE SCHEDULE
              </h2>
              <span className="bp-mono text-[.62rem] text-[#7FA3D4]">USD · MONTHLY · CANCEL ANY TIME</span>
            </div>

            <div className="mt-8 overflow-x-auto">
              <table className="w-full min-w-[640px] border-collapse text-left">
                <thead>
                  <tr className="bp-mono border-b border-[#DCE9FF]/40 text-[.6rem] text-[#7FA3D4]">
                    <th className="py-3 pr-4 font-normal">PLAN</th>
                    <th className="py-3 pr-4 font-normal">RATE</th>
                    <th className="py-3 pr-4 font-normal">INCLUDED</th>
                    <th className="py-3 font-normal" />
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      n: "READER",
                      p: "$0",
                      d: "3 documents / month · summary and quotes · source links",
                      hot: false,
                    },
                    {
                      n: "ANNOTATED",
                      p: "$9",
                      d: "Unlimited documents · hints and insights · export · questions to the document",
                      hot: true,
                    },
                    {
                      n: "LIBRARY",
                      p: "$19 / seat",
                      d: "Shared shelves · team annotations · admin, SSO, audit log",
                      hot: false,
                    },
                  ].map((r) => (
                    <tr key={r.n} className="bp-row border-b border-[#DCE9FF]/15 transition-colors">
                      <td className="bp-cond py-5 pr-6 align-top text-[1.3rem] font-medium">
                        {r.n}
                        {r.hot && (
                          <span className="bp-mono ml-3 border border-[#F0D264] px-2 py-0.5 align-middle text-[.55rem] text-[#F0D264]">
                            RECOMMENDED
                          </span>
                        )}
                      </td>
                      <td className="bp-cond py-5 pr-6 align-top text-2xl font-semibold text-[#F0D264]">{r.p}</td>
                      <td className="max-w-[52ch] py-5 pr-4 align-top text-[.96rem] leading-7 text-[#C3D6F2]">{r.d}</td>
                      <td className="py-5 align-top">
                        <a
                          href="#intake"
                          className="bp-mono whitespace-nowrap border border-[#DCE9FF]/50 px-3 py-1.5 text-[.6rem] transition-colors hover:border-[#F0D264] hover:text-[#F0D264]"
                        >
                          SELECT
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section className="border-b border-[#DCE9FF]/25 px-5 py-14 sm:px-8">
            <h2 className="bp-cond text-[clamp(1.8rem,3.4vw,2.6rem)] font-semibold tracking-wide">
              APPROVAL BLOCK
            </h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {[
                {
                  w: "Amara D.",
                  r: "Partner, advisory firm",
                  q: "Like having a colleague who read it twice before the meeting.",
                },
                {
                  w: "Tom A.",
                  r: "M&A analyst",
                  q: "It caught a contradiction between page 4 and page 60 that all of us missed.",
                },
                {
                  w: "Ruth L.",
                  r: "General counsel",
                  q: "It found the caveat on page 88 that changed our decision.",
                },
              ].map((t) => (
                <figure key={t.w} className="bp-box flex flex-col p-6">
                  <blockquote className="flex-1 text-[.98rem] leading-7 text-[#C3D6F2]">
                    “{t.q}”
                  </blockquote>
                  <figcaption className="mt-5 border-t border-dashed border-[#DCE9FF]/30 pt-4">
                    <p className="bp-cond text-[1.1rem] font-medium">{t.w}</p>
                    <p className="bp-mono mt-0.5 text-[.55rem] text-[#7FA3D4]">{t.r}</p>
                  </figcaption>
                </figure>
              ))}
            </div>
          </section>

          <section id="intake" className="px-5 py-16 text-center sm:px-8">
            <p className="bp-mono text-[.62rem] text-[#7FA3D4]">FINAL ASSEMBLY</p>
            <h2 className="bp-cond mx-auto mt-4 max-w-[24ch] text-[clamp(2.2rem,5vw,3.8rem)] leading-none font-semibold tracking-tight">
              LOAD THE DRAWING. GET THE SHORT VERSION.
            </h2>
            <p className="mx-auto mt-5 max-w-[52ch] text-[1rem] leading-8 text-[#C3D6F2]">
              First three documents are free and do not require a card. Bring
              the heaviest PDF in your downloads folder.
            </p>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-6">
              <a
                href="#overview"
                className="bp-cond bg-[#F0D264] px-8 py-3.5 text-[1.1rem] font-semibold tracking-wide text-[#123A6B] transition-colors hover:bg-[#F7E08C]"
              >
                UPLOAD PDF
              </a>
              <span className="bp-mono text-[.62rem] text-[#7FA3D4]">NO CARD · NO CALL · NO PADDING</span>
            </div>
          </section>

          <footer className="border-t border-[#DCE9FF]/35 px-5 py-8 sm:px-8">
            <div className="grid gap-6 md:grid-cols-4">
              {[
                { k: "PROJECT", v: "RATIO READER — MARKETING" },
                { k: "DRAWN BY", v: "THE IMPORTANT PARTS OFFICE" },
                { k: "SCALE / REV", v: "1:10 · REV A" },
                { k: "SHEET", v: "1 OF 1 · 2026-09-10" },
              ].map((f) => (
                <div key={f.k} className="border border-[#DCE9FF]/25 p-3">
                  <p className="bp-mono text-[.55rem] text-[#7FA3D4]">{f.k}</p>
                  <p className="bp-cond mt-1 text-[.95rem] font-medium tracking-wide">{f.v}</p>
                </div>
              ))}
            </div>
            <p className="bp-mono mt-6 text-center text-[.55rem] leading-4 text-[#7FA3D4]">
              RATIO READER · EVERY CLAIM KEEPS ITS PAGE · DOCUMENTS DELETED AFTER PROCESSING · NEVER TRAINING DATA
            </p>
          </footer>
        </div>
      </div>
    </div>
  );
}
