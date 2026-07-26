import { useCallback, useEffect, useRef, useState } from "react";

/* ─────────────────────────────────────────────────────────────────────────────
   DESIGN 05 · NOCTURNE
   An observatory for one document. The thesis: a document is a night sky — a
   few bright objects, a great deal of faint structure, and connections you only
   see once someone plots them. Ratio Reader is the instrument: it charts the
   concepts, records the observation, and lets you choose an eyepiece.
   Committed single-theme dark: an observatory does not have a light mode.
   ────────────────────────────────────────────────────────────────────────── */

const CSS = `
.nc {
  --night: #0B1026;
  --night-2: #101736;
  --night-3: #161E44;
  --star: #F3EEE2;
  --star-dim: #B9BFD6;
  --peri: #6C7BA8;
  --brass: #C9A24B;
  --brass-dim: rgba(201, 162, 75, 0.34);
  background: var(--night);
  color: var(--star);
  font-family: var(--font-spectral);
  font-weight: 300;
  font-size: 17px;
  line-height: 1.7;
  overflow-x: clip;
}
.nc ::selection { background: var(--brass); color: #1A1204; }
.nc :focus-visible { outline: 2px solid var(--brass); outline-offset: 3px; }

/* Type ---------------------------------------------------------------------- */
.nc-display {
  font-family: var(--font-cormorant);
  font-weight: 300;
  line-height: 1.04;
  letter-spacing: -0.005em;
  text-wrap: balance;
}
.nc-display em { font-style: italic; color: var(--brass); }
.nc-h {
  font-family: var(--font-cormorant);
  font-weight: 400;
  line-height: 1.12;
}
.nc-label {
  font-family: var(--font-cormorant);
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.28em;
  font-size: 11.5px;
  color: var(--brass);
}
.nc-meta {
  font-family: var(--font-spectral);
  font-size: 12.5px;
  letter-spacing: 0.06em;
  color: var(--peri);
  font-variant-numeric: tabular-nums;
}
.nc-num { font-variant-numeric: tabular-nums; }

/* Rules and frames --------------------------------------------------------- */
.nc-rule { border-top: 1px solid rgba(201, 162, 75, 0.24); }
.nc-frame {
  border: 1px solid rgba(201, 162, 75, 0.28);
  background: linear-gradient(180deg, rgba(22, 30, 68, 0.7), rgba(11, 16, 38, 0.4));
}

/* Buttons ------------------------------------------------------------------ */
.nc-btn {
  font-family: var(--font-cormorant);
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  font-size: 13px;
  padding: 0.9rem 1.7rem;
  background: var(--brass);
  color: #1A1204;
  border: 1px solid var(--brass);
  transition: background 160ms ease, color 160ms ease;
}
.nc-btn:hover { background: #E0BC6C; }
.nc-btn-line {
  background: transparent;
  color: var(--star);
  border-color: rgba(201, 162, 75, 0.45);
}
.nc-btn-line:hover { border-color: var(--brass); background: rgba(201, 162, 75, 0.1); }

/* Chart -------------------------------------------------------------------- */
.nc-chart-wrap {
  position: relative;
  border: 1px solid rgba(201, 162, 75, 0.28);
  background: radial-gradient(120% 90% at 30% 20%, #16203F 0%, #0A0E22 70%);
  overflow: hidden;
}
.nc-chart { display: block; width: 100%; height: 100%; cursor: crosshair; }
.nc-obj-btn {
  font-family: var(--font-spectral);
  font-size: 13.5px;
  text-align: left;
  padding: 0.55rem 0.8rem;
  border: 1px solid transparent;
  border-left: 1px solid rgba(201, 162, 75, 0.22);
  background: transparent;
  color: var(--star-dim);
  transition: all 160ms ease;
  width: 100%;
}
.nc-obj-btn:hover { color: var(--star); background: rgba(201, 162, 75, 0.07); }
.nc-obj-btn[aria-pressed="true"] {
  color: var(--star);
  border-left-color: var(--brass);
  background: rgba(201, 162, 75, 0.1);
}
.nc-mag {
  font-family: var(--font-spectral);
  font-size: 11px;
  letter-spacing: 0.1em;
  color: var(--brass);
  font-variant-numeric: tabular-nums;
}

/* Eyepiece ----------------------------------------------------------------- */
.nc-eyepiece {
  position: relative;
  aspect-ratio: 1;
  border-radius: 50%;
  border: 2px solid rgba(201, 162, 75, 0.5);
  box-shadow:
    inset 0 0 40px rgba(0, 0, 0, 0.75),
    inset 0 0 0 12px rgba(11, 16, 38, 0.85);
  background: radial-gradient(80% 80% at 50% 40%, #17203F, #090D1E);
  display: grid;
  place-items: center;
  padding: 15%;
  overflow: hidden;
}
.nc-eyepiece p {
  text-align: center;
  transition: font-size 340ms ease, opacity 340ms ease;
}
.nc-eyepiece::after {
  /* reticle */
  content: "";
  position: absolute;
  inset: 12%;
  border-radius: 50%;
  border: 1px dashed rgba(201, 162, 75, 0.18);
  pointer-events: none;
}
.nc-ep-btn {
  font-family: var(--font-cormorant);
  text-transform: uppercase;
  letter-spacing: 0.18em;
  font-size: 12px;
  padding: 0.55rem 1rem;
  border: 1px solid rgba(201, 162, 75, 0.3);
  background: transparent;
  color: var(--star-dim);
  transition: all 160ms ease;
}
.nc-ep-btn:hover { color: var(--star); border-color: var(--brass); }
.nc-ep-btn[aria-pressed="true"] { background: var(--brass); border-color: var(--brass); color: #1A1204; }

/* Log ---------------------------------------------------------------------- */
.nc-log { width: 100%; border-collapse: collapse; }
.nc-log th, .nc-log td {
  border-bottom: 1px solid rgba(201, 162, 75, 0.16);
  padding: 0.85rem 0.9rem;
  text-align: left;
  vertical-align: top;
}
.nc-log th {
  font-family: var(--font-cormorant);
  text-transform: uppercase;
  letter-spacing: 0.2em;
  font-size: 11px;
  font-weight: 500;
  color: var(--brass);
  white-space: nowrap;
}
.nc-log td:first-child {
  font-variant-numeric: tabular-nums;
  color: var(--peri);
  white-space: nowrap;
  font-size: 14px;
}

/* Instruments -------------------------------------------------------------- */
.nc-instr { border-top: 1px solid rgba(201, 162, 75, 0.24); padding-top: 1.5rem; }
.nc-instr svg { stroke: var(--brass); fill: none; }

@keyframes nc-rise { from { opacity: 0; transform: translateY(16px); } to { opacity: 1; transform: none; } }
.nc-rise { animation: nc-rise 900ms cubic-bezier(0.2, 0.7, 0.25, 1) both; }
@media (prefers-reduced-motion: reduce) {
  .nc *, .nc *::before, .nc *::after { animation: none !important; transition: none !important; }
}
`;

/* The document's concept map. Coordinates are normalised so the chart can be
   drawn at any size. Magnitude drives the drawn radius, as it would on a real
   chart: the brighter the object, the more of the argument rests on it. */
type Obj = {
  id: string;
  x: number;
  y: number;
  mag: number;
  name: string;
  kind: string;
  folio: string;
  note: string;
};

const OBJECTS: Obj[] = [
  {
    id: "thesis",
    x: 0.5,
    y: 0.3,
    mag: 1,
    name: "Rebalancing recovers capacity",
    kind: "Primary · the thesis",
    folio: "p. 3, restated p. 31",
    note: "The one sentence the document exists to defend. Everything else is either support for it or an admission of where it fails.",
  },
  {
    id: "drift",
    x: 0.26,
    y: 0.48,
    mag: 0.82,
    name: "4.2 °C median drift",
    kind: "Bright · the measurement",
    folio: "p. 12, table 2",
    note: "The only figure repeated in the abstract, the results and the conclusion. When someone cites this paper, they are citing this number.",
  },
  {
    id: "shadow",
    x: 0.68,
    y: 0.52,
    mag: 0.74,
    name: "Airflow shadowing",
    kind: "Bright · the mechanism",
    folio: "defined p. 9, used 31×",
    note: "The proposed cause. Instrumented at three of eleven sites, inferred at the rest — which is why it is charted as bright rather than primary.",
  },
  {
    id: "gap",
    x: 0.44,
    y: 0.66,
    mag: 0.55,
    name: "Attribution gap",
    kind: "Variable · unstable",
    folio: "§4.2, p. 14",
    note: "The authors write 'we attribute'; the data supports 'we observed'. Charted as variable because its brightness depends entirely on which site you read.",
  },
  {
    id: "season",
    x: 0.14,
    y: 0.74,
    mag: 0.46,
    name: "Seasonal load confound",
    kind: "Faint · admitted limit",
    folio: "p. 16, footnote 8",
    note: "Named once, in a footnote, and never controlled for. Faint objects like this are the reason a second reading exists.",
  },
  {
    id: "practice",
    x: 0.8,
    y: 0.76,
    mag: 0.6,
    name: "Operator practice",
    kind: "Bright · second argument",
    folio: "pp. 22–27",
    note: "A quieter argument about maintenance schedules, arriving after the conclusion most readers stop at.",
  },
  {
    id: "retro",
    x: 0.6,
    y: 0.86,
    mag: 0.4,
    name: "Retrofit rooms worst affected",
    kind: "Faint · consequence",
    folio: "p. 26",
    note: "Follows from rack density but is never stated as a recommendation, though it is the most actionable line in the document.",
  },
  {
    id: "cost",
    x: 0.34,
    y: 0.16,
    mag: 0.5,
    name: "Cost of rebalancing",
    kind: "Faint · absent",
    folio: "not addressed",
    note: "Charted as an absence. The thesis recommends quarterly work without once costing it — worth knowing before you quote the paper at a budget meeting.",
  },
];

const EDGES: [string, string][] = [
  ["thesis", "drift"],
  ["thesis", "shadow"],
  ["drift", "gap"],
  ["shadow", "gap"],
  ["gap", "season"],
  ["shadow", "practice"],
  ["practice", "retro"],
  ["thesis", "cost"],
  ["drift", "season"],
];

const EYEPIECES = [
  {
    id: "1:100",
    label: "Wide field",
    power: "×0.8 finder",
    size: 15,
    out: "48 words · 15 sec",
    body: "Eleven cold-storage sites drift 4.2 °C off setpoint within three months. Quarterly rack rebalancing recovers most of the loss. Strong evidence for the drift, thin evidence for the cause.",
  },
  {
    id: "1:20",
    label: "Standard",
    power: "×20",
    size: 12.5,
    out: "290 words · 90 sec",
    body: "The thesis, the four claims that carry it, how the measurements were taken, and the limits the authors admit to — including the seasonal confound they name in a footnote and never control for. This is the eyepiece most observers leave fitted.",
  },
  {
    id: "1:5",
    label: "High power",
    power: "×100",
    size: 10.5,
    out: "1,140 words · 5 min",
    body: "Every section in the authors' own order, page by page, with method and limitations quoted rather than paraphrased. Narrow field: you see one part of the sky at a time, in detail, and you will need to move the tube to see the rest of the argument.",
  },
];

const INSTRUMENTS = [
  {
    name: "The summary",
    body: "Drawn in tiers, the way a chart is drawn to a limiting magnitude. Thesis, then the claims beneath it, then the detail — stop at any magnitude and the sky still makes sense.",
    sym: (
      <>
        <circle cx="22" cy="22" r="17" strokeWidth="1" />
        <circle cx="22" cy="22" r="11" strokeWidth="1" />
        <circle cx="22" cy="22" r="5" strokeWidth="1.4" />
      </>
    ),
  },
  {
    name: "The hints",
    body: "A reticle laid over the page: questions set before you begin, each pointing at the paragraph that answers it, so you always know what you are looking for.",
    sym: (
      <>
        <circle cx="22" cy="22" r="17" strokeWidth="1" />
        <path d="M22 3v38M3 22h38" strokeWidth="0.9" />
        <circle cx="22" cy="22" r="4" strokeWidth="1.2" />
      </>
    ),
  },
  {
    name: "The quotes",
    body: "Spectral lines: the exact sentences the document is made of, copied with page and paragraph, never regenerated. You can always read them back against the source.",
    sym: (
      <>
        <rect x="5" y="12" width="34" height="20" strokeWidth="1" />
        <path d="M12 12v20M18 12v20M27 12v20M33 12v20" strokeWidth="1.2" />
      </>
    ),
  },
  {
    name: "The insights",
    body: "Anomalies. Where the argument does not behave: an assumption carrying more than its evidence, a figure disagreeing with a table, a term redefined halfway through.",
    sym: (
      <>
        <path d="M22 5l4.8 10.2L38 16.8l-8 7.6 1.9 11.2L22 30.2l-9.9 5.4L14 24.4l-8-7.6 11.2-1.6z" strokeWidth="1.1" />
      </>
    ),
  },
];

const LOG: [string, string, string][] = [
  ["00:00:00", "Document received", "34 pages, born-digital, two-column. No OCR required."],
  ["00:00:03", "Text recovered", "Reading order reconstructed; 61 footnotes reattached to their sentences; 4 tables parsed."],
  ["00:00:19", "First pass complete", "Full document read in order. 12 claims identified, 82 features logged."],
  ["00:00:31", "Chart plotted", "Concepts positioned by how much of the argument depends on them; 9 connections drawn."],
  ["00:00:40", "Report issued", "Summary at 1:20, 7 hints, 61 quotes, 9 insights. Every line referenced to a page."],
];

const OBSERVERS = [
  {
    body: "I supervise eleven students across four subfields. The chart is the first thing I look at, because it shows me in four seconds whether a paper's conclusion is actually load-bearing or decorative.",
    who: "Prof. Camille Ferreira",
    role: "Reader in energy systems",
  },
  {
    body: "The absence it charted — a recommendation with no costing — was the single most useful thing anyone said to me that quarter.",
    who: "Idris Bakare",
    role: "Infrastructure analyst",
  },
];

const PROGRAMMES = [
  {
    name: "Apprentice",
    price: "Free",
    per: "",
    body: "Five documents a month, up to 60 pages. Every instrument works; nothing is watermarked.",
    rows: ["5 documents / month", "60 pages / document", "Markdown export"],
    cta: "Begin observing",
    lead: false,
  },
  {
    name: "Astronomer",
    price: "$12",
    per: "per month",
    body: "Unlimited documents at full length, with OCR for scans and a chart that connects everything you have read.",
    rows: [
      "Unlimited documents",
      "900 pages / document",
      "OCR for scans and photographs",
      "Connections across your whole shelf",
      "Anki and citation export",
    ],
    cta: "Take the programme",
    lead: true,
  },
  {
    name: "Observatory",
    price: "$29",
    per: "per seat, per month",
    body: "For a group observing the same sky: shared margins, one glossary, and the records your security team asks for.",
    rows: [
      "Everything in Astronomer",
      "Shared margins and replies",
      "House glossary of terms",
      "SSO, audit log, DPA",
    ],
    cta: "Request a quote",
    lead: false,
  },
];

const METHOD = [
  {
    q: "How do you know it is not inventing objects?",
    a: "Every claim carries the page it was drawn from, and quotes are copied rather than regenerated. A line without a reference is a defect, and we treat reports of them as bugs. Where the document is genuinely ambiguous, Ratio charts the ambiguity instead of resolving it quietly.",
  },
  {
    q: "What happens to the document afterwards?",
    a: "Deleted within 24 hours unless you save it to a shelf, and never used to train a model. On the Observatory programme, documents stay inside your workspace and every read is logged.",
  },
  {
    q: "Difficult originals?",
    a: "Scans from 300 dpi, photographs of pages, rotated spreads, two-column layouts, tables and figure captions — all reconstructed in reading order first. Footnotes stay attached to the sentence that called them.",
  },
  {
    q: "Can I change eyepiece after the fact?",
    a: "Yes. The ratio is a setting: change it and the same document is re-reported in about two seconds, with nothing re-uploaded.",
  },
  {
    q: "Which languages?",
    a: "Reading in 34, with output in whichever one you ask for. A Japanese standard can be reported in English with its quotes left in Japanese.",
  },
  {
    q: "Does it read figures?",
    a: "Charts and tables are read alongside the prose. A figure that contradicts the text is charted as an anomaly rather than averaged into agreement.",
  },
];

/* deterministic dust: a tiny LCG, so the background sky is the same every load */
function makeDust(n: number) {
  let s = 20260726;
  const rand = () => ((s = (s * 1103515245 + 12345) & 0x7fffffff) / 0x7fffffff);
  return Array.from({ length: n }, () => ({
    x: rand(),
    y: rand(),
    r: 0.4 + rand() * 1.1,
    a: 0.18 + rand() * 0.5,
    phase: rand() * Math.PI * 2,
    speed: 0.4 + rand() * 0.9,
  }));
}
const DUST = makeDust(170);

export default function Nocturne() {
  const [activeId, setActiveId] = useState("thesis");
  const [epId, setEpId] = useState("1:20");
  const active = OBJECTS.find((o) => o.id === activeId)!;
  const ep = EYEPIECES.find((e) => e.id === epId)!;

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const wrapRef = useRef<HTMLDivElement | null>(null);
  /* the animation loop reads the selection every frame, so it lives in a ref
     that is synced after commit rather than during render */
  const activeRef = useRef(activeId);
  useEffect(() => {
    activeRef.current = activeId;
  }, [activeId]);

  useEffect(() => {
    document.title = "Ratio Reader — an observatory for one document";
  }, []);

  /* the chart: canvas rather than SVG, because the dust field is generative
     and animated, and 170 twinkling nodes should not be 170 DOM elements */
  useEffect(() => {
    const canvas = canvasRef.current;
    const wrap = wrapRef.current;
    if (!canvas || !wrap) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let w = 0;
    let h = 0;
    let raf = 0;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const rect = wrap.getBoundingClientRect();
      w = rect.width;
      h = rect.height;
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const pos = (o: Obj) => ({ x: 30 + o.x * (w - 60), y: 26 + o.y * (h - 70) });

    const draw = (t: number) => {
      ctx.clearRect(0, 0, w, h);

      // dust
      for (const d of DUST) {
        const tw = reduce ? 1 : 0.65 + 0.35 * Math.sin(t / 1400 * d.speed + d.phase);
        ctx.globalAlpha = d.a * tw;
        ctx.fillStyle = "#DDE3F5";
        ctx.beginPath();
        ctx.arc(d.x * w, d.y * h, d.r, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1;

      // connections
      for (const [a, b] of EDGES) {
        const oa = OBJECTS.find((o) => o.id === a)!;
        const ob = OBJECTS.find((o) => o.id === b)!;
        const pa = pos(oa);
        const pb = pos(ob);
        const hot = activeRef.current === a || activeRef.current === b;
        ctx.strokeStyle = hot ? "rgba(201,162,75,0.75)" : "rgba(140,158,214,0.26)";
        ctx.lineWidth = hot ? 1.1 : 0.7;
        ctx.beginPath();
        ctx.moveTo(pa.x, pa.y);
        ctx.lineTo(pb.x, pb.y);
        ctx.stroke();
      }

      // objects
      for (const o of OBJECTS) {
        const p = pos(o);
        const on = activeRef.current === o.id;
        const r = 2.6 + o.mag * 5.4;
        const pulse = reduce ? 0 : 0.5 + 0.5 * Math.sin(t / 900 + o.x * 6);

        const g = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, r * 5);
        g.addColorStop(0, on ? "rgba(201,162,75,0.55)" : "rgba(226,232,250,0.34)");
        g.addColorStop(1, "rgba(226,232,250,0)");
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(p.x, p.y, r * 5, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = on ? "#F0D69A" : "#F3EEE2";
        ctx.beginPath();
        ctx.arc(p.x, p.y, r + (on ? 1.4 : 0) + pulse * 0.35, 0, Math.PI * 2);
        ctx.fill();

        if (on) {
          ctx.strokeStyle = "rgba(201,162,75,0.9)";
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.arc(p.x, p.y, r + 9, 0, Math.PI * 2);
          ctx.stroke();
        }

        ctx.font = `${on ? 500 : 400} 12px Spectral, Georgia, serif`;
        ctx.fillStyle = on ? "#F3EEE2" : "rgba(185,191,214,0.82)";
        ctx.textBaseline = "middle";
        const label = o.name;
        const tw = ctx.measureText(label).width;
        const gap = r + 15;
        const right = p.x + gap + tw < w - 8;
        ctx.textAlign = right ? "left" : "right";
        ctx.fillText(label, p.x + (right ? gap : -gap), p.y);
      }

      if (!reduce) raf = requestAnimationFrame(draw);
    };

    resize();
    draw(0);
    const ro = new ResizeObserver(() => {
      resize();
      if (reduce) draw(0);
    });
    ro.observe(wrap);
    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
    };
  }, []);

  const onChartMove = useCallback((e: React.MouseEvent<HTMLCanvasElement>) => {
    const wrap = wrapRef.current;
    if (!wrap) return;
    const rect = wrap.getBoundingClientRect();
    const mx = e.clientX - rect.left;
    const my = e.clientY - rect.top;
    let best: string | null = null;
    let bestD = 34;
    for (const o of OBJECTS) {
      const x = 30 + o.x * (rect.width - 60);
      const y = 26 + o.y * (rect.height - 70);
      const d = Math.hypot(mx - x, my - y);
      if (d < bestD) {
        bestD = d;
        best = o.id;
      }
    }
    if (best) setActiveId(best);
  }, []);

  return (
    <div className="nc min-h-screen">
      <style>{CSS}</style>

      {/* ── header ───────────────────────────────────────────────────────── */}
      <header className="border-b border-[rgba(201,162,75,0.24)]">
        <div className="mx-auto flex max-w-[1240px] flex-wrap items-baseline justify-between gap-3 px-5 py-5 lg:px-8">
          <div className="flex flex-wrap items-baseline gap-x-6 gap-y-1">
            <span className="nc-h text-[23px] tracking-[0.06em]">
              Ratio Reader
            </span>
            <span className="nc-label">Observatory</span>
          </div>
          <nav className="flex items-center gap-7">
            <a href="#chart" className="nc-label hover:text-[var(--star)]">
              Chart
            </a>
            <a href="#eyepiece" className="nc-label hidden hover:text-[var(--star)] sm:inline">
              Eyepiece
            </a>
            <a href="#log" className="nc-label hidden hover:text-[var(--star)] sm:inline">
              Log
            </a>
            <button className="nc-btn">Upload a PDF</button>
          </nav>
        </div>
      </header>

      {/* ── hero ─────────────────────────────────────────────────────────── */}
      <section className="mx-auto max-w-[1240px] px-5 pt-16 pb-10 lg:px-8 lg:pt-24">
        <p className="nc-label nc-rise">Reading, after dark</p>
        <h1 className="nc-display nc-rise mt-7 max-w-[24ch] text-[clamp(2.8rem,6.4vw,5.4rem)]" style={{ animationDelay: "90ms" }}>
          Every document is a night sky. Most readers only ever see{" "}
          <em>the bright ones.</em>
        </h1>
        <div className="mt-10 grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
          <p
            className="nc-rise max-w-[58ch] text-[18.5px] leading-[1.75] text-[#D6DAEA]"
            style={{ animationDelay: "180ms" }}
          >
            Upload a PDF and Ratio Reader observes it properly: it plots the
            concepts by how much of the argument rests on them, draws the
            connections between them, and hands you the summary, the hints, the
            quotes and the anomalies — each one referenced to a page. The faint
            objects are usually the interesting ones.
          </p>
          <div
            className="nc-rise flex flex-wrap items-center gap-4 lg:justify-end"
            style={{ animationDelay: "260ms" }}
          >
            <button className="nc-btn">Upload a PDF</button>
            <button className="nc-btn nc-btn-line">See a charted document</button>
          </div>
        </div>
      </section>

      {/* ── the chart ────────────────────────────────────────────────────── */}
      <section id="chart" className="mx-auto max-w-[1240px] px-5 pb-20 lg:px-8">
        <div className="nc-rule flex flex-wrap items-baseline justify-between gap-3 pt-5">
          <h2 className="nc-h text-[clamp(1.7rem,3vw,2.4rem)]">
            Chart of one document
          </h2>
          <p className="nc-meta">
            Thermal drift in cold-storage battery arrays · Okonjo, Vale &amp;
            Ramanathan · 34 pp.
          </p>
        </div>

        <div className="mt-7 grid gap-8 lg:grid-cols-[1.55fr_1fr] lg:gap-10">
          <div
            ref={wrapRef}
            className="nc-chart-wrap h-[380px] sm:h-[460px] lg:h-[520px]"
          >
            <canvas
              ref={canvasRef}
              className="nc-chart"
              onMouseMove={onChartMove}
              aria-hidden
            />
            <p className="nc-meta pointer-events-none absolute bottom-3 left-4">
              8 objects charted of 82 logged · size = how much rests on it
            </p>
          </div>

          <div className="flex flex-col">
            <div className="nc-frame p-6">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <span className="nc-label">{active.kind}</span>
                <span className="nc-meta">{active.folio}</span>
              </div>
              <h3 className="nc-h mt-3 text-[26px]">{active.name}</h3>
              <p className="mt-3 text-[16px] leading-relaxed text-[#D6DAEA]">
                {active.note}
              </p>
            </div>

            {/* the same objects, reachable without a mouse */}
            <ul className="mt-6 flex flex-col gap-0.5">
              {OBJECTS.map((o) => (
                <li key={o.id}>
                  <button
                    className="nc-obj-btn flex items-baseline justify-between gap-3"
                    aria-pressed={activeId === o.id}
                    onClick={() => setActiveId(o.id)}
                    onFocus={() => setActiveId(o.id)}
                  >
                    <span>{o.name}</span>
                    <span className="nc-mag">
                      mag {(1 + (1 - o.mag) * 4).toFixed(1)}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── instruments ──────────────────────────────────────────────────── */}
      <section className="border-y border-[rgba(201,162,75,0.24)] bg-[var(--night-2)]">
        <div className="mx-auto max-w-[1240px] px-5 py-20 lg:px-8">
          <h2 className="nc-display max-w-[26ch] text-[clamp(2rem,4vw,3.2rem)]">
            Four instruments, pointed at the same page
          </h2>
          <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {INSTRUMENTS.map((ins) => (
              <div key={ins.name} className="nc-instr">
                <svg viewBox="0 0 44 44" className="h-11 w-11" aria-hidden>
                  {ins.sym}
                </svg>
                <h3 className="nc-h mt-5 text-[22px]">{ins.name}</h3>
                <p className="mt-2.5 text-[15.5px] leading-relaxed text-[#C6CBDD]">
                  {ins.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── eyepiece ─────────────────────────────────────────────────────── */}
      <section id="eyepiece" className="mx-auto max-w-[1240px] px-5 py-20 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-[1fr_1fr] lg:gap-20">
          <div>
            <p className="nc-label">Choose an eyepiece</p>
            <h2 className="nc-display mt-5 text-[clamp(2rem,4.2vw,3.2rem)]">
              Wide field, or all the detail in one corner
            </h2>
            <p className="mt-5 max-w-[48ch] text-[17px] leading-relaxed text-[#D6DAEA]">
              A low-power eyepiece shows you the whole sky and nothing small. A
              high-power one shows you one crater properly. Neither is the
              better instrument — they answer different questions. The ratio you
              set works exactly the same way.
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              {EYEPIECES.map((e) => (
                <button
                  key={e.id}
                  className="nc-ep-btn"
                  aria-pressed={epId === e.id}
                  onClick={() => setEpId(e.id)}
                >
                  {e.label} · {e.id}
                </button>
              ))}
            </div>
            <p className="nc-meta mt-6">
              {ep.power} · {ep.out} · nothing is re-uploaded when you change
            </p>
          </div>

          <div className="mx-auto w-full max-w-[440px]">
            <div className="nc-eyepiece">
              <p
                className="text-[#E6E9F5]"
                style={{ fontSize: ep.size, lineHeight: 1.65 }}
              >
                {ep.body}
              </p>
            </div>
            <p className="nc-meta mt-4 text-center">
              Field of view at {ep.id} · summary only; hints, quotes and
              anomalies arrive alongside
            </p>
          </div>
        </div>
      </section>

      {/* ── observation log ──────────────────────────────────────────────── */}
      <section id="log" className="border-y border-[rgba(201,162,75,0.24)] bg-[var(--night-2)]">
        <div className="mx-auto max-w-[1240px] px-5 py-20 lg:px-8">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="nc-display text-[clamp(2rem,4vw,3.2rem)]">
              Observation log
            </h2>
            <p className="nc-meta">
              One 34-page document, from upload to report · 40 seconds
            </p>
          </div>
          <div className="mt-9 overflow-x-auto">
            <table className="nc-log">
              <caption className="sr-only">
                What Ratio Reader does, in order, with elapsed time
              </caption>
              <thead>
                <tr>
                  <th scope="col">Elapsed</th>
                  <th scope="col">Entry</th>
                  <th scope="col">Detail</th>
                </tr>
              </thead>
              <tbody>
                {LOG.map(([t, e, d]) => (
                  <tr key={t}>
                    <td>{t}</td>
                    <td className="nc-h text-[19px] whitespace-nowrap">{e}</td>
                    <td className="text-[15.5px] text-[#C6CBDD]">{d}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── observers ────────────────────────────────────────────────────── */}
      <section className="mx-auto max-w-[1240px] px-5 py-20 lg:px-8">
        <h2 className="nc-h text-[clamp(1.7rem,3vw,2.4rem)]">Other observers</h2>
        <div className="mt-9 grid gap-8 md:grid-cols-2">
          {OBSERVERS.map((o) => (
            <blockquote key={o.who} className="nc-frame p-7">
              <p className="nc-display text-[21px] leading-[1.45]">{o.body}</p>
              <footer className="nc-rule mt-6 pt-4">
                <p className="nc-h text-[18px]">{o.who}</p>
                <p className="nc-meta mt-1">{o.role}</p>
              </footer>
            </blockquote>
          ))}
        </div>
      </section>

      {/* ── programmes ───────────────────────────────────────────────────── */}
      <section className="border-y border-[rgba(201,162,75,0.24)] bg-[var(--night-2)]">
        <div className="mx-auto max-w-[1240px] px-5 py-20 lg:px-8">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="nc-display text-[clamp(2rem,4vw,3.2rem)]">
              Observing programmes
            </h2>
            <p className="nc-meta">Monthly · cancel from the account page</p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {PROGRAMMES.map((p) => (
              <div
                key={p.name}
                className="nc-frame flex flex-col p-7"
                style={
                  p.lead
                    ? {
                        borderColor: "var(--brass)",
                        background:
                          "linear-gradient(180deg, rgba(201,162,75,0.12), rgba(11,16,38,0.4))",
                      }
                    : undefined
                }
              >
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="nc-h text-[25px]">{p.name}</h3>
                  {p.lead && <span className="nc-label">Most fitted</span>}
                </div>
                <p className="nc-display nc-num mt-4 text-[42px]">
                  {p.price}
                  <span className="nc-meta ml-2">{p.per}</span>
                </p>
                <p className="mt-3 text-[15.5px] leading-relaxed text-[#C6CBDD]">
                  {p.body}
                </p>
                <ul className="nc-rule mt-6 mb-8 flex flex-col gap-2 pt-4">
                  {p.rows.map((r) => (
                    <li key={r} className="flex gap-2.5 text-[15px]">
                      <span aria-hidden className="text-[var(--brass)]">
                        ✦
                      </span>
                      {r}
                    </li>
                  ))}
                </ul>
                <button
                  className={`nc-btn mt-auto w-full ${p.lead ? "" : "nc-btn-line"}`}
                >
                  {p.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── method ───────────────────────────────────────────────────────── */}
      <section className="mx-auto max-w-[1240px] px-5 py-20 lg:px-8">
        <h2 className="nc-display text-[clamp(2rem,4vw,3.2rem)]">
          Notes on method
        </h2>
        <dl className="mt-10 grid gap-x-16 gap-y-9 md:grid-cols-2">
          {METHOD.map((m) => (
            <div key={m.q} className="nc-rule pt-5">
              <dt className="nc-h text-[21px]">{m.q}</dt>
              <dd className="mt-2.5 max-w-[58ch] text-[16px] leading-relaxed text-[#C6CBDD]">
                {m.a}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      {/* ── closing ──────────────────────────────────────────────────────── */}
      <section className="border-t border-[rgba(201,162,75,0.24)]">
        <div className="mx-auto max-w-[1240px] px-5 py-24 lg:px-8">
          <h2 className="nc-display max-w-[22ch] text-[clamp(2.4rem,6vw,4.8rem)]">
            The faint objects are the ones worth <em>staying up for.</em>
          </h2>
          <div className="mt-10 flex flex-wrap items-center gap-5">
            <button className="nc-btn">Upload a PDF</button>
            <span className="nc-meta">
              Five documents free · no card · nothing to install
            </span>
          </div>
        </div>
      </section>

      <footer className="border-t border-[rgba(201,162,75,0.18)] bg-[var(--night-2)]">
        <div className="mx-auto max-w-[1240px] px-5 py-10 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["Instrument", "Ratio Reader"],
              ["Charted", "By how much rests on it"],
              ["Eyepieces", "1:5 · 1:20 · 1:100"],
              ["Logged", "2026, continuously"],
            ].map(([k, v]) => (
              <div key={k}>
                <p className="nc-label">{k}</p>
                <p className="mt-1.5 text-[15.5px]">{v}</p>
              </div>
            ))}
          </div>
          <p className="nc-meta mt-9">
            Set in Cormorant Garamond and Spectral. Sky drawn on canvas; dust
            field deterministic, so the chart is the same every night.
          </p>
        </div>
      </footer>
    </div>
  );
}
