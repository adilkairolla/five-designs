import { useEffect, useState } from "react";
import { useReveal } from "@/lib/use-reveal";

const MODES = [
  {
    code: "SUM",
    name: "Summary",
    angle: -135,
    lcd: "312 PP → 1 PAGE",
    receipt: [
      "SUMMARY ··········· 01/04",
      "",
      "Remote teams ship as fast as",
      "co-located ones, but only when",
      "decisions are written down.",
      "",
      "Async docs cut meeting load 41%.",
      "Onboarding is the weak point:",
      "new hires take 2x longer to",
      "reach full output.",
    ],
  },
  {
    code: "HINT",
    name: "Hints",
    angle: -45,
    lcd: "14 HINTS PLACED",
    receipt: [
      "HINTS ············· 02/04",
      "",
      "☞ Read §5 before §3. The",
      "  survey design explains why",
      "  the numbers look odd.",
      "",
      "☞ 'Velocity' here means merged",
      "  PRs/week, not story points.",
      "",
      "☞ Table 4 is the whole paper.",
    ],
  },
  {
    code: "QUOT",
    name: "Quotes",
    angle: 45,
    lcd: "9 QUOTES · CITED",
    receipt: [
      "QUOTES ············ 03/04",
      "",
      "\"Distance didn't slow us down;",
      " ambiguity did.\"",
      "                       p. 44",
      "",
      "\"A decision nobody wrote down",
      " is a decision made twice.\"",
      "                      p. 118",
    ],
  },
  {
    code: "INSI",
    name: "Insights",
    angle: 135,
    lcd: "3 INSIGHTS FOUND",
    receipt: [
      "INSIGHTS ·········· 04/04",
      "",
      "◆ The real variable is writing",
      "  culture, not location.",
      "",
      "◆ Contradicts ch.2: the teams",
      "  with most meetings were the",
      "  slowest, not the most aligned.",
      "",
      "◆ Implies: hire for writing.",
    ],
  },
];

function Knob({ mode, onChange }: { mode: number; onChange: (m: number) => void }) {
  return (
    <div className="relative aspect-square w-full max-w-[220px]">
      {MODES.map((m, i) => {
        const rad = ((m.angle - 90) * Math.PI) / 180;
        return (
          <button
            key={m.code}
            onClick={() => onChange(i)}
            className={`absolute -translate-x-1/2 -translate-y-1/2 font-martian text-[0.6rem] tracking-wider transition-colors ${
              mode === i ? "text-[#ff5b1a]" : "text-[#26272a]/60 hover:text-[#26272a]"
            }`}
            style={{ left: `${50 + Math.cos(rad) * 50}%`, top: `${50 + Math.sin(rad) * 50}%` }}
          >
            {m.code}
          </button>
        );
      })}
      {MODES.map((m) => (
        <span
          key={m.code}
          className="absolute top-1/2 left-1/2 h-[37%] w-px origin-top bg-[#26272a]/25"
          style={{ transform: `rotate(${m.angle + 180}deg)` }}
        />
      ))}
      <button
        onClick={() => onChange((mode + 1) % MODES.length)}
        aria-label={`Mode: ${MODES[mode].name}. Click to turn the dial.`}
        className="absolute inset-[18%] rounded-full bg-[radial-gradient(circle_at_35%_30%,#fbfaf7,#d8d5ce_65%,#bdb9b0)] shadow-[0_14px_22px_-8px_rgba(0,0,0,0.45),inset_0_-4px_8px_rgba(0,0,0,0.12),inset_0_3px_4px_rgba(255,255,255,0.9)] transition-transform duration-700 ease-[cubic-bezier(0.5,1.6,0.4,1)] active:scale-[0.97]"
        style={{ transform: `rotate(${MODES[mode].angle}deg)` }}
      >
        <span className="absolute inset-[14%] rounded-full bg-[repeating-conic-gradient(from_0deg,rgba(0,0,0,0.06)_0deg_3deg,transparent_3deg_6deg)]" />
        <span className="absolute top-[8%] left-1/2 h-[22%] w-[7px] -translate-x-1/2 rounded-full bg-[#ff5b1a]" />
      </button>
    </div>
  );
}

function useTypewriter(lines: string[], key: number) {
  const full = lines.join("\n");
  const [shown, setShown] = useState({ key, n: 0 });
  const n = shown.key === key ? shown.n : 0;

  useEffect(() => {
    const id = window.setInterval(() => {
      setShown((s) => {
        const cur = s.key === key ? s.n : 0;
        if (cur >= full.length) {
          window.clearInterval(id);
          return s;
        }
        return { key, n: cur + 3 };
      });
    }, 16);
    return () => window.clearInterval(id);
  }, [key, full]);

  return full.slice(0, n);
}

function Device() {
  const [mode, setMode] = useState(0);
  const m = MODES[mode];
  const printed = useTypewriter(m.receipt, mode);

  return (
    <div className="relative mx-auto w-full max-w-[560px] pt-16">
      <div className="absolute top-0 left-[14%] z-0 w-[44%] rotate-[-3deg] border border-black/10 bg-white px-4 pt-3 pb-10 shadow-md">
        <div className="font-martian text-[0.55rem] text-[#26272a]/60">remote_work_study.pdf</div>
        <div className="mt-2 space-y-1.5">
          {[90, 75, 85, 60].map((w) => (
            <div key={w} className="h-1 bg-[#26272a]/15" style={{ width: `${w}%` }} />
          ))}
        </div>
      </div>

      <div className="relative z-10 rounded-[38px] bg-[linear-gradient(160deg,#f5f4f0,#e4e2dc)] p-6 shadow-[0_50px_80px_-30px_rgba(40,35,25,0.55),0_2px_0_rgba(255,255,255,0.8)_inset,0_-3px_0_rgba(0,0,0,0.08)_inset] md:p-8">
        <div className="mx-auto mb-6 h-2.5 w-[52%] rounded-full bg-[#26272a] shadow-[inset_0_2px_3px_rgba(0,0,0,0.6)]" />

        <div className="grid grid-cols-[1.25fr_1fr] items-center gap-6">
          <div>
            <div className="rounded-xl bg-[#26272a] p-2 shadow-[inset_0_2px_6px_rgba(0,0,0,0.6)]">
              <div className="relative h-36 overflow-hidden rounded-lg bg-[#131710] p-3 font-martian text-[#b6ff7a] [text-shadow:0_0_6px_rgba(182,255,122,0.55)]">
                <div className="flex justify-between text-[0.55rem] opacity-70">
                  <span>R-1 · MODE {mode + 1}/4</span>
                  <span className="blink">● REC</span>
                </div>
                <div key={mode} className="animate-in fade-in mt-3 duration-500">
                  <div className="text-xl leading-tight font-bold">{m.name.toUpperCase()}</div>
                  <div className="mt-1 text-[0.7rem]">{m.lcd}</div>
                </div>
                <div className="absolute right-3 bottom-3 left-3 flex gap-[3px]">
                  {Array.from({ length: 24 }, (_, i) => (
                    <span key={i} className="h-2 flex-1 bg-[#b6ff7a] transition-opacity duration-300" style={{ opacity: i < (printed.length / m.receipt.join("\n").length) * 24 ? 0.9 : 0.12 }} />
                  ))}
                </div>
                <div className="pointer-events-none absolute inset-0 bg-[repeating-linear-gradient(transparent_0_2px,rgba(0,0,0,0.25)_2px_3px)]" />
              </div>
            </div>
            <div className="mt-5 flex items-center gap-3">
              <span className="h-2.5 w-2.5 rounded-full bg-[#ff5b1a] shadow-[0_0_8px_#ff5b1a]" style={{ animation: "led 1.6s ease-in-out infinite" }} />
              <span className="font-martian text-[0.6rem] tracking-widest text-[#26272a]/70">READING</span>
              <span className="ml-auto grid grid-cols-8 gap-1.5">
                {Array.from({ length: 24 }, (_, i) => (
                  <span key={i} className="h-1.5 w-1.5 rounded-full bg-[#26272a]/70 shadow-[inset_0_1px_1px_rgba(0,0,0,0.6)]" />
                ))}
              </span>
            </div>
          </div>
          <Knob mode={mode} onChange={setMode} />
        </div>

        <div className="mt-6 flex items-end justify-between border-t border-black/10 pt-4">
          <div>
            <div className="font-isans text-xl font-semibold tracking-tight text-[#26272a]">ratio</div>
            <div className="font-martian text-[0.55rem] tracking-widest text-[#26272a]/50">R-1 READING INSTRUMENT</div>
          </div>
          <div className="h-2 w-[46%] rounded-full bg-[#26272a] shadow-[inset_0_2px_3px_rgba(0,0,0,0.6)]" />
        </div>
      </div>

      <div className="relative z-0 mx-auto -mt-1 w-[42%] min-w-[240px] translate-x-[22%] overflow-hidden">
        <div key={mode} className="bg-[#fbfaf5] px-4 pt-4 pb-6 shadow-[0_18px_30px_-12px_rgba(0,0,0,0.35)]" style={{ animation: "print-feed 0.9s cubic-bezier(0.3,0.7,0.2,1)" }}>
          <pre className="min-h-[190px] font-martian text-[0.6rem] leading-[1.55] whitespace-pre-wrap text-[#26272a]">
            {printed}
            <span className="blink">▌</span>
          </pre>
          <div className="mt-3 border-t border-dashed border-[#26272a]/40 pt-2 text-center font-martian text-[0.5rem] tracking-widest text-[#26272a]/50">
            EVERY LINE LINKED TO ITS PAGE
          </div>
        </div>
        <div className="h-2 bg-[linear-gradient(135deg,#fbfaf5_33%,transparent_33%),linear-gradient(225deg,#fbfaf5_33%,transparent_33%)] bg-[length:10px_10px]" />
      </div>
    </div>
  );
}

const LAYERS = [
  { n: "01", name: "Intake", body: "Reads text PDFs, scans, tables, and figures. OCR runs automatically, even on crooked phone photos." },
  { n: "02", name: "Structure", body: "Rebuilds the document’s skeleton: chapters, sections, and which argument sits under which." },
  { n: "03", name: "Weigh", body: "Scores every passage for how much it carries the argument. The core rises and the filler sinks." },
  { n: "04", name: "Annotate", body: "Writes the summary, places hints where readers usually stall, and clips quotes and insights." },
  { n: "05", name: "Cite", body: "Links every output line back to its page and paragraph, so nothing has to be taken on faith." },
];

const SPECS = [
  ["Input", "PDF, scanned PDF, up to 1,000 pages"],
  ["Output modes", "4 — Summary · Hints · Quotes · Insights"],
  ["Time to first summary", "≈ 9 seconds (median, 200 pp)"],
  ["Summary depth", "Continuous, 1 line → 1 page per chapter"],
  ["Citation", "Page + paragraph on every line"],
  ["Languages", "34 in, 34 out, any pairing"],
  ["Export", "Markdown · Notion · Obsidian · PDF"],
  ["Privacy", "Encrypted at rest; never used for training"],
];

const MODELS = [
  { name: "R-1 Personal", price: "Free", color: "#ecebe6", knob: "#ff5b1a", items: ["5 documents / month", "Summary + Quotes", "Up to 60 pages"] },
  { name: "R-1 Pro", price: "$10 / mo", color: "#26272a", knob: "#ff5b1a", items: ["Unlimited documents", "All four modes", "Up to 1,000 pages", "All exports"], dark: true },
  { name: "R-1 Studio", price: "$25 / seat", color: "#ff5b1a", knob: "#ecebe6", items: ["Shared library", "Cross-document insights", "Admin + SSO", "API"] },
];

export default function Instrument() {
  useReveal();
  const [layer, setLayer] = useState(2);

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#dcd8cf] font-isans text-[#26272a] selection:bg-[#ff5b1a] selection:text-white">
      <header className="mx-auto flex max-w-7xl items-center justify-between px-5 py-6 md:px-10">
        <a href="#" className="flex items-center gap-3">
          <span className="relative h-8 w-8 rounded-full bg-[#ecebe6] shadow-[0_3px_6px_rgba(0,0,0,0.25),inset_0_1px_1px_#fff]">
            <span className="absolute top-1 left-1/2 h-2.5 w-1 -translate-x-1/2 rounded-full bg-[#ff5b1a]" />
          </span>
          <span className="text-xl font-semibold tracking-tight">ratio</span>
        </a>
        <nav className="hidden gap-8 font-martian text-[0.65rem] tracking-widest uppercase md:flex">
          <a href="#modes" className="hover:text-[#ff5b1a]">Modes</a>
          <a href="#inside" className="hover:text-[#ff5b1a]">Inside</a>
          <a href="#specs" className="hover:text-[#ff5b1a]">Specs</a>
          <a href="#models" className="hover:text-[#ff5b1a]">Models</a>
        </nav>
        <a href="#order" className="rounded-full bg-[#26272a] px-5 py-2 font-martian text-[0.65rem] tracking-widest text-[#ecebe6] uppercase hover:bg-[#ff5b1a]">
          Try R-1
        </a>
      </header>

      <section className="mx-auto grid max-w-7xl items-center gap-16 px-5 pt-8 pb-24 md:px-10 lg:grid-cols-[1fr_1.05fr]">
        <div>
          <div className="flex items-center gap-3 font-martian text-[0.65rem] tracking-widest uppercase">
            <span className="rounded-full bg-[#ff5b1a] px-2.5 py-1 text-white">New</span>
            <span className="text-[#26272a]/60">Model R-1 · Firmware 2.6</span>
          </div>
          <h1 className="mt-8 text-6xl leading-[0.92] font-semibold tracking-[-0.045em] md:text-[6.5rem]">
            A reading
            <br />
            instrument<span className="text-[#ff5b1a]">.</span>
          </h1>
          <p className="mt-8 max-w-md text-xl leading-snug text-[#26272a]/75">
            Put in a PDF and turn the dial. Ratio R-1 reads every page and prints what you need: a summary, hints, quotes, or
            insights. One control, four answers.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-5">
            <a
              href="#order"
              className="rounded-full bg-[#ff5b1a] px-8 py-4 font-martian text-xs tracking-widest text-white uppercase shadow-[0_10px_20px_-8px_#ff5b1a] transition-transform hover:-translate-y-0.5"
            >
              Insert a PDF
            </a>
            <span className="font-martian text-[0.65rem] tracking-widest text-[#26272a]/60 uppercase">↻ Turn the dial to try →</span>
          </div>
          <dl className="mt-14 grid max-w-md grid-cols-3 gap-6 border-t border-[#26272a]/20 pt-6">
            {[
              ["9s", "to summary"],
              ["1,000", "pages max"],
              ["4", "modes"],
            ].map(([v, k]) => (
              <div key={k}>
                <dt className="text-3xl font-semibold tracking-tight">{v}</dt>
                <dd className="font-martian text-[0.6rem] tracking-widest text-[#26272a]/60 uppercase">{k}</dd>
              </div>
            ))}
          </dl>
        </div>
        <Device />
      </section>

      <section id="modes" className="bg-[#ecebe6] px-5 py-24 md:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="reveal mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <h2 className="text-5xl leading-[0.95] font-semibold tracking-[-0.04em] md:text-7xl">
              Four positions.
              <br />
              <span className="text-[#26272a]/40">One dial.</span>
            </h2>
            <p className="max-w-sm text-lg text-[#26272a]/70">
              No menus and no settings to learn. Every position is a different way to understand the same document.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {[
              ["Summary", "The argument end to end, compressed to the length you choose, in the author’s order."],
              ["Hints", "Nudges placed where readers usually get stuck: read this first, this term means X, look at Fig. 4."],
              ["Quotes", "Lines worth keeping, clipped verbatim with page numbers, ready for your essay or deck."],
              ["Insights", "What the text implies: hidden assumptions, contradictions, and links to your other documents."],
            ].map(([t, b], i) => (
              <div
                key={t}
                className="reveal group rounded-[28px] bg-[#f7f6f2] p-7 shadow-[0_20px_40px_-28px_rgba(0,0,0,0.5),inset_0_1px_0_#fff] transition-transform hover:-translate-y-1"
                style={{ transitionDelay: `${i * 90}ms` }}
              >
                <div className="flex items-center justify-between">
                  <span className="relative h-14 w-14 rounded-full bg-[radial-gradient(circle_at_35%_30%,#fff,#d8d5ce)] shadow-[0_6px_10px_-4px_rgba(0,0,0,0.35)]">
                    <span
                      className="absolute inset-0 transition-transform duration-500 group-hover:rotate-[30deg]"
                      style={{ transform: `rotate(${MODES[i].angle}deg)` }}
                    >
                      <span className="absolute top-1.5 left-1/2 h-4 w-1 -translate-x-1/2 rounded-full bg-[#ff5b1a]" />
                    </span>
                  </span>
                  <span className="font-martian text-[0.6rem] tracking-widest text-[#26272a]/50">POS. 0{i + 1}</span>
                </div>
                <h3 className="mt-8 text-3xl font-semibold tracking-tight">{t}</h3>
                <p className="mt-3 leading-relaxed text-[#26272a]/70">{b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="inside" className="mx-auto max-w-7xl px-5 py-24 md:px-10">
        <div className="reveal mb-16">
          <p className="font-martian text-[0.65rem] tracking-widest text-[#ff5b1a] uppercase">Exploded view</p>
          <h2 className="mt-3 text-5xl font-semibold tracking-[-0.04em] md:text-7xl">Inside the R-1</h2>
        </div>
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div className="reveal relative mx-auto h-[440px] w-full max-w-md [perspective:1400px]">
            {LAYERS.map((l, i) => {
              const on = layer === i;
              return (
                <div
                  key={l.n}
                  onMouseEnter={() => setLayer(i)}
                  className="absolute left-1/2 h-48 w-64 cursor-pointer rounded-2xl border transition-all duration-500 [transform-style:preserve-3d]"
                  style={{
                    top: `${i * 62}px`,
                    transform: `translateX(-50%) rotateX(58deg) rotateZ(-38deg) translateZ(${on ? 40 : 0}px)`,
                    background: on ? "#ff5b1a" : i % 2 ? "#ecebe6" : "#f7f6f2",
                    borderColor: on ? "#ff5b1a" : "rgba(38,39,42,0.25)",
                    boxShadow: on ? "0 30px 40px -10px rgba(255,91,26,0.5)" : "0 20px 30px -18px rgba(0,0,0,0.4)",
                    zIndex: LAYERS.length - i,
                  }}
                >
                  <span className={`absolute top-3 left-4 font-martian text-xs ${on ? "text-white" : "text-[#26272a]/50"}`}>{l.n}</span>
                  <div className="absolute inset-6 grid grid-cols-6 gap-2 opacity-40">
                    {Array.from({ length: 18 }, (_, k) => (
                      <span key={k} className={`rounded-sm ${on ? "bg-white" : "bg-[#26272a]/25"}`} />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
          <ol className="space-y-2">
            {LAYERS.map((l, i) => (
              <li key={l.n}>
                <button
                  onMouseEnter={() => setLayer(i)}
                  onClick={() => setLayer(i)}
                  className={`w-full rounded-2xl p-5 text-left transition-colors ${layer === i ? "bg-[#26272a] text-[#ecebe6]" : "hover:bg-[#26272a]/5"}`}
                >
                  <div className="flex items-baseline gap-4">
                    <span className={`font-martian text-xs ${layer === i ? "text-[#ff5b1a]" : "text-[#26272a]/50"}`}>{l.n}</span>
                    <span className="text-2xl font-semibold tracking-tight">{l.name}</span>
                  </div>
                  <p className={`mt-2 pl-10 leading-relaxed ${layer === i ? "text-[#ecebe6]/75" : "text-[#26272a]/60"}`}>{l.body}</p>
                </button>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="specs" className="bg-[#26272a] px-5 py-24 text-[#ecebe6] md:px-10">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[1fr_1.4fr]">
          <div className="reveal">
            <p className="font-martian text-[0.65rem] tracking-widest text-[#ff5b1a] uppercase">Technical data</p>
            <h2 className="mt-3 text-5xl font-semibold tracking-[-0.04em] md:text-7xl">
              Less, but
              <br />
              better reading.
            </h2>
            <p className="mt-6 max-w-sm text-[#ecebe6]/60">
              Nothing on the R-1 is decorative. Every control does one job, and every output line shows where it came from.
            </p>
          </div>
          <dl className="reveal divide-y divide-[#ecebe6]/15 border-y border-[#ecebe6]/15">
            {SPECS.map(([k, v]) => (
              <div key={k} className="grid grid-cols-[1fr_1.4fr] gap-4 py-4">
                <dt className="font-martian text-[0.65rem] tracking-widest text-[#ecebe6]/50 uppercase">{k}</dt>
                <dd className="text-lg">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-24 md:px-10">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            ["“It’s the first AI tool that feels designed rather than assembled. One dial, and I actually use all four positions.”", "Kenji A.", "Product designer"],
            ["“Hints mode is the killer feature. It reads a methods section the way my advisor does.”", "Sofia R.", "PhD candidate, epidemiology"],
            ["“I run every contract through Insights before legal sees it. It catches the clause that contradicts page 3.”", "Dev P.", "Founder"],
          ].map(([q, n, r], i) => (
            <figure key={n} className="reveal rounded-[28px] bg-[#ecebe6] p-8" style={{ transitionDelay: `${i * 100}ms` }}>
              <blockquote className="text-xl leading-snug">{q}</blockquote>
              <figcaption className="mt-6 font-martian text-[0.6rem] tracking-widest uppercase">
                {n} <span className="text-[#26272a]/50">· {r}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section id="models" className="mx-auto max-w-7xl px-5 pb-24 md:px-10">
        <div className="reveal mb-14">
          <p className="font-martian text-[0.65rem] tracking-widest text-[#ff5b1a] uppercase">Models</p>
          <h2 className="mt-3 text-5xl font-semibold tracking-[-0.04em] md:text-7xl">Choose your R-1</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {MODELS.map((mo, i) => (
            <div
              key={mo.name}
              className={`reveal flex flex-col rounded-[32px] p-8 ${mo.dark ? "text-[#ecebe6]" : "text-[#26272a]"} shadow-[0_30px_50px_-30px_rgba(0,0,0,0.6)]`}
              style={{ background: mo.color, transitionDelay: `${i * 100}ms` }}
            >
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-2xl font-semibold tracking-tight">{mo.name}</h3>
                  <p className="mt-1 font-martian text-xs tracking-widest opacity-70">{mo.price}</p>
                </div>
                <span className="relative h-16 w-16 rounded-full shadow-[0_8px_14px_-6px_rgba(0,0,0,0.5),inset_0_2px_2px_rgba(255,255,255,0.4)]" style={{ background: mo.dark ? "#3a3b3f" : "rgba(255,255,255,0.6)" }}>
                  <span className="absolute top-2 left-1/2 h-5 w-1.5 -translate-x-1/2 rounded-full" style={{ background: mo.knob }} />
                </span>
              </div>
              <ul className="mt-10 flex-1 space-y-3">
                {mo.items.map((it) => (
                  <li key={it} className="flex items-center gap-3 border-b border-current/15 pb-3">
                    <span className="h-1.5 w-1.5 rounded-full bg-current" />
                    {it}
                  </li>
                ))}
              </ul>
              <a
                href="#order"
                className={`mt-8 rounded-full py-3 text-center font-martian text-[0.65rem] tracking-widest uppercase transition-opacity hover:opacity-85 ${
                  mo.dark ? "bg-[#ff5b1a] text-white" : "bg-[#26272a] text-[#ecebe6]"
                }`}
              >
                Choose {mo.name.replace("R-1 ", "")}
              </a>
            </div>
          ))}
        </div>
      </section>

      <footer id="order" className="bg-[#ecebe6] px-5 pt-24 pb-10 md:px-10">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-5xl leading-[0.95] font-semibold tracking-[-0.045em] md:text-8xl">
            Insert document<span className="text-[#ff5b1a]">.</span>
          </h2>
          <label className="group mx-auto mt-12 block max-w-lg cursor-pointer">
            <input type="file" accept="application/pdf" className="sr-only" />
            <div className="mx-auto h-4 w-full rounded-full bg-[#26272a] shadow-[inset_0_3px_4px_rgba(0,0,0,0.7)]" />
            <div className="mx-auto -mt-2 w-[80%] border border-black/10 bg-white px-6 pt-6 pb-4 shadow-md transition-transform duration-500 group-hover:translate-y-3">
              <div className="font-martian text-[0.65rem] tracking-widest text-[#26272a]/60 uppercase">Click or drop a PDF · Free</div>
            </div>
          </label>
        </div>
        <div className="mx-auto mt-24 flex max-w-7xl flex-wrap justify-between gap-4 border-t border-[#26272a]/15 pt-6 font-martian text-[0.6rem] tracking-widest text-[#26272a]/50 uppercase">
          <span>© 2026 Ratio Reader</span>
          <span>Designed for reading. Built for thinking.</span>
          <span>R-1 · Rev. 2.6</span>
        </div>
      </footer>
    </div>
  );
}
