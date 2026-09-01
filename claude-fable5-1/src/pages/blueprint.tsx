import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { faqs, features, pricing, sampleDoc, stats, steps, testimonials } from "../lib/content";

/* ------------------------------------------------------------------ */
/* Design 2 — "The Blueprint"                                           */
/* Dark engineering drawing. Grid paper, cyan ink, monospace type.      */
/* Signature: a live terminal session that "runs" Ratio Reader, and    */
/* an annotated pipeline schematic with animated flow.                  */
/* ------------------------------------------------------------------ */

const bg = "#071019";
const cyan = "#5ee7ff";
const dim = "#8aa3b5";
const line = "rgba(94,231,255,0.14)";

const script = [
  { t: "$ ratio read attention-is-all-you-need.pdf", c: "cmd" },
  { t: "→ parsing 15 pages · 6,812 words · 4 tables · 3 figures", c: "out" },
  { t: "→ mapping structure ........ 7 sections, 2 appendices", c: "out" },
  { t: "→ scoring 214 passages by information density", c: "out" },
  { t: "→ extracting 2 hints · 2 quotes · 2 insights", c: "out" },
  { t: "✓ done in 4.2s  ratio 1:12  reading time 31m → 2m 40s", c: "ok" },
  { t: "", c: "out" },
  { t: "SUMMARY", c: "h" },
  { t: sampleDoc.summary, c: "txt" },
  { t: "", c: "out" },
  { t: "QUOTE  p.1", c: "h" },
  { t: `"${sampleDoc.quotes[0].text}"`, c: "txt" },
  { t: "", c: "out" },
  { t: "INSIGHT", c: "h" },
  { t: sampleDoc.insights[0], c: "txt" },
];

function Terminal() {
  const [n, setN] = useState(0);
  useEffect(() => {
    if (n >= script.length) return;
    const delay = n === 0 ? 600 : script[n - 1].c === "cmd" ? 900 : 260;
    const id = setTimeout(() => setN((v) => v + 1), delay);
    return () => clearTimeout(id);
  }, [n]);

  return (
    <div className="overflow-hidden rounded-lg border shadow-[0_0_80px_-20px_rgba(94,231,255,0.35)]" style={{ borderColor: "rgba(94,231,255,0.3)", background: "#050b12" }}>
      <div className="flex items-center gap-2 border-b px-4 py-2.5 text-[11px]" style={{ borderColor: line, color: dim }}>
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        <span className="ml-3">ratio — zsh — 96×32</span>
      </div>
      <div className="min-h-[420px] p-5 text-[13px] leading-relaxed">
        {script.slice(0, n).map((l, i) => (
          <motion.p
            key={i}
            initial={{ opacity: 0, x: -4 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.2 }}
            className={
              l.c === "cmd"
                ? "text-white"
                : l.c === "ok"
                  ? "text-[#7CFFA1]"
                  : l.c === "h"
                    ? "mt-1 font-bold tracking-widest"
                    : l.c === "txt"
                      ? "max-w-prose text-white/85"
                      : ""
            }
            style={l.c === "h" ? { color: cyan } : l.c === "out" ? { color: dim } : undefined}
          >
            {l.t || " "}
          </motion.p>
        ))}
        {n < script.length && <span className="animate-blink inline-block h-4 w-2 align-middle" style={{ background: cyan }} />}
        {n >= script.length && (
          <p className="mt-2 text-white">
            $ <span className="animate-blink inline-block h-4 w-2 align-middle" style={{ background: cyan }} />
          </p>
        )}
      </div>
    </div>
  );
}

function Schematic() {
  const nodes = [
    { x: 40, label: "PDF", sub: "any size" },
    { x: 220, label: "PARSE", sub: "OCR + layout" },
    { x: 400, label: "RANK", sub: "density score" },
    { x: 580, label: "DISTILL", sub: "4 outputs" },
  ];
  return (
    <svg viewBox="0 0 700 220" className="w-full" fill="none" aria-label="Processing pipeline">
      <defs>
        <marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M0 0L10 5 0 10z" fill={cyan} />
        </marker>
      </defs>
      {nodes.map((nd, i) => (
        <g key={nd.label}>
          <rect x={nd.x} y={70} width={100} height={60} rx={4} stroke={cyan} strokeWidth={1.5} fill="rgba(94,231,255,0.05)" />
          <text x={nd.x + 50} y={97} textAnchor="middle" fill="#fff" fontSize={14} fontWeight={700} fontFamily="JetBrains Mono">
            {nd.label}
          </text>
          <text x={nd.x + 50} y={116} textAnchor="middle" fill={dim} fontSize={10} fontFamily="JetBrains Mono">
            {nd.sub}
          </text>
          <text x={nd.x} y={58} fill={cyan} fontSize={9} fontFamily="JetBrains Mono" letterSpacing={2}>
            0{i + 1}
          </text>
          {i < nodes.length - 1 && (
            <>
              <line x1={nd.x + 100} y1={100} x2={nd.x + 180} y2={100} stroke={line} strokeWidth={1.5} />
              <motion.line
                x1={nd.x + 100}
                y1={100}
                x2={nd.x + 180}
                y2={100}
                stroke={cyan}
                strokeWidth={1.5}
                strokeDasharray="6 10"
                markerEnd="url(#arrow)"
                animate={{ strokeDashoffset: [0, -32] }}
                transition={{ repeat: Infinity, duration: 1.2, ease: "linear" }}
              />
            </>
          )}
        </g>
      ))}
      {/* outputs fanning out */}
      {["summary", "hints", "quotes", "insights"].map((o, i) => {
        const y = 150 + i * 18;
        return (
          <g key={o}>
            <path d={`M630 130 C630 ${y}, 650 ${y}, 690 ${y}`} stroke={line} strokeWidth={1} />
            <motion.path
              d={`M630 130 C630 ${y}, 650 ${y}, 690 ${y}`}
              stroke={cyan}
              strokeWidth={1}
              strokeDasharray="4 8"
              animate={{ strokeDashoffset: [0, -24] }}
              transition={{ repeat: Infinity, duration: 1.4, ease: "linear", delay: i * 0.15 }}
            />
            <text x={640} y={y - 4} fill={dim} fontSize={9} fontFamily="JetBrains Mono">
              {o}
            </text>
          </g>
        );
      })}
      {/* dimension lines */}
      <line x1={40} y1={30} x2={680} y2={30} stroke={line} strokeWidth={1} />
      <line x1={40} y1={26} x2={40} y2={34} stroke={line} />
      <line x1={680} y1={26} x2={680} y2={34} stroke={line} />
      <text x={360} y={22} textAnchor="middle" fill={dim} fontSize={9} fontFamily="JetBrains Mono" letterSpacing={2}>
        ~4 SECONDS END TO END
      </text>
    </svg>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return (
    <span className="text-[11px] font-medium uppercase tracking-[0.25em]" style={{ color: cyan }}>
      {children}
    </span>
  );
}

export function Blueprint() {
  return (
    <main className="min-h-screen font-mono text-white" style={{ background: bg }}>
      {/* grid paper */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0"
        style={{
          backgroundImage: `linear-gradient(${line} 1px, transparent 1px), linear-gradient(90deg, ${line} 1px, transparent 1px), linear-gradient(rgba(94,231,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(94,231,255,0.05) 1px, transparent 1px)`,
          backgroundSize: "120px 120px, 120px 120px, 24px 24px, 24px 24px",
        }}
      />
      <div aria-hidden className="pointer-events-none fixed inset-0" style={{ background: "radial-gradient(ellipse at 50% -10%, rgba(94,231,255,0.15), transparent 60%)" }} />

      <div className="relative mx-auto max-w-6xl px-5 pb-28 sm:px-8">
        {/* Nav */}
        <header className="flex items-center justify-between py-6 text-xs">
          <div className="flex items-center gap-3">
            <span className="grid h-8 w-8 place-items-center border font-bold" style={{ borderColor: cyan, color: cyan }}>
              R
            </span>
            <span className="font-semibold tracking-wider">RATIO_READER</span>
            <span className="hidden text-[10px] sm:inline" style={{ color: dim }}>
              v2.4.0 · stable
            </span>
          </div>
          <nav className="hidden gap-6 sm:flex" style={{ color: dim }}>
            <a href="#pipeline" className="hover:text-white">
              pipeline
            </a>
            <a href="#spec" className="hover:text-white">
              spec
            </a>
            <a href="#pricing" className="hover:text-white">
              pricing
            </a>
          </nav>
          <a href="#pricing" className="border px-3 py-1.5 font-semibold transition-colors hover:bg-[#5ee7ff] hover:text-black" style={{ borderColor: cyan, color: cyan }}>
            $ get started
          </a>
        </header>

        {/* Hero */}
        <section className="grid items-center gap-10 py-12 lg:grid-cols-2 lg:py-20">
          <div>
            <Label>Fig. 1 — the problem</Label>
            <h1 className="mt-4 font-grotesk text-5xl font-bold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
              Documents are
              <br />
              <span style={{ color: cyan }}>1 part signal</span>,
              <br />
              12 parts noise.
            </h1>
            <p className="mt-6 max-w-lg text-[15px] leading-relaxed" style={{ color: dim }}>
              Ratio Reader is a reading engine. Feed it a PDF and it returns the compressed form: a layered summary, hints on where to slow down, verbatim quotes with page numbers, and the insights hiding between the lines.
            </p>
            <div className="mt-8 flex flex-wrap gap-3 text-sm">
              <a href="#pricing" className="px-5 py-3 font-bold text-black transition-transform hover:-translate-y-0.5" style={{ background: cyan }}>
                Upload a PDF →
              </a>
              <a href="#pipeline" className="border px-5 py-3 transition-colors hover:bg-white/5" style={{ borderColor: "rgba(255,255,255,0.2)" }}>
                Read the schematic
              </a>
            </div>
            <div className="mt-10 grid grid-cols-2 gap-x-8 gap-y-4 sm:grid-cols-4">
              {stats.map((s) => (
                <div key={s.label}>
                  <div className="font-grotesk text-3xl font-bold tabular-nums" style={{ color: cyan }}>
                    {s.value}
                  </div>
                  <div className="text-[10px] uppercase tracking-wider" style={{ color: dim }}>
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
            <Terminal />
          </motion.div>
        </section>

        {/* Pipeline */}
        <section id="pipeline" className="scroll-mt-10 border-t py-16" style={{ borderColor: line }}>
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <Label>Fig. 2 — the pipeline</Label>
              <h2 className="mt-3 font-grotesk text-3xl font-bold tracking-tight sm:text-4xl">Four stages. One ratio.</h2>
              <ol className="mt-6 space-y-5">
                {steps.map((s) => (
                  <li key={s.n} className="flex gap-4">
                    <span className="mt-0.5 text-xs" style={{ color: cyan }}>
                      {s.n}
                    </span>
                    <div>
                      <div className="text-sm font-bold">{s.title}</div>
                      <p className="mt-1 text-[13px] leading-relaxed" style={{ color: dim }}>
                        {s.body}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
            <div className="rounded-lg border p-4 lg:col-span-8" style={{ borderColor: line, background: "rgba(5,11,18,0.6)" }}>
              <Schematic />
            </div>
          </div>
        </section>

        {/* Spec sheet */}
        <section id="spec" className="scroll-mt-10 border-t py-16" style={{ borderColor: line }}>
          <Label>Table 1 — output spec</Label>
          <h2 className="mt-3 font-grotesk text-3xl font-bold tracking-tight sm:text-4xl">What comes out the other end</h2>
          <div className="mt-8 overflow-x-auto rounded-lg border" style={{ borderColor: line }}>
            <table className="w-full min-w-[640px] text-left text-sm">
              <thead>
                <tr className="text-[10px] uppercase tracking-[0.2em]" style={{ color: dim, background: "rgba(94,231,255,0.04)" }}>
                  <th className="px-4 py-3 font-medium">#</th>
                  <th className="px-4 py-3 font-medium">Output</th>
                  <th className="px-4 py-3 font-medium">Description</th>
                  <th className="px-4 py-3 font-medium">Example</th>
                </tr>
              </thead>
              <tbody>
                {features.map((f, i) => (
                  <tr key={f.key} className="border-t align-top" style={{ borderColor: line }}>
                    <td className="px-4 py-4 text-xs" style={{ color: cyan }}>
                      0{i + 1}
                    </td>
                    <td className="px-4 py-4 font-grotesk text-base font-bold">{f.title}</td>
                    <td className="px-4 py-4 text-[13px] leading-relaxed" style={{ color: dim }}>
                      {f.long}
                    </td>
                    <td className="px-4 py-4 text-[12px] leading-relaxed text-white/80">
                      {f.key === "summary" && sampleDoc.summary.slice(0, 120) + "…"}
                      {f.key === "hints" && sampleDoc.hints[1]}
                      {f.key === "quotes" && `"${sampleDoc.quotes[1].text}" — p.${sampleDoc.quotes[1].page}`}
                      {f.key === "insights" && sampleDoc.insights[1]}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Field notes — testimonials */}
        <section className="border-t py-16" style={{ borderColor: line }}>
          <Label>Field notes</Label>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <div key={t.name} className="rounded-lg border p-5" style={{ borderColor: line, background: "rgba(5,11,18,0.6)" }}>
                <div className="text-[10px]" style={{ color: dim }}>
                  LOG_{String(i + 1).padStart(3, "0")}
                </div>
                <p className="mt-3 font-grotesk text-[15px] leading-relaxed text-white/90">“{t.quote}”</p>
                <div className="mt-4 text-xs">
                  <span className="font-bold" style={{ color: cyan }}>
                    {t.name}
                  </span>
                  <span style={{ color: dim }}> · {t.role}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="scroll-mt-10 border-t py-16" style={{ borderColor: line }}>
          <Label>Table 2 — plans</Label>
          <h2 className="mt-3 font-grotesk text-3xl font-bold tracking-tight sm:text-4xl">Pick a plan. Start compressing.</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {pricing.map((p) => (
              <div
                key={p.name}
                className="flex flex-col rounded-lg border p-6"
                style={{
                  borderColor: p.highlight ? cyan : line,
                  background: p.highlight ? "rgba(94,231,255,0.06)" : "rgba(5,11,18,0.6)",
                  boxShadow: p.highlight ? "0 0 60px -20px rgba(94,231,255,0.5)" : undefined,
                }}
              >
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold tracking-widest">{p.name.toUpperCase()}</span>
                  {p.highlight && (
                    <span className="px-2 py-0.5 text-[10px] font-bold text-black" style={{ background: cyan }}>
                      RECOMMENDED
                    </span>
                  )}
                </div>
                <div className="mt-4 font-grotesk text-5xl font-bold tabular-nums">
                  {p.price}
                  <span className="ml-2 text-xs font-normal" style={{ color: dim }}>
                    {p.period}
                  </span>
                </div>
                <ul className="mt-6 flex-1 space-y-2 text-[13px]">
                  {p.features.map((f) => (
                    <li key={f} className="flex gap-2">
                      <span style={{ color: cyan }}>[✓]</span>
                      <span style={{ color: "rgba(255,255,255,0.85)" }}>{f}</span>
                    </li>
                  ))}
                </ul>
                <button
                  className="mt-6 py-2.5 text-sm font-bold transition-transform hover:-translate-y-0.5"
                  style={p.highlight ? { background: cyan, color: "#000" } : { border: `1px solid ${cyan}`, color: cyan }}
                >
                  $ {p.cta.toLowerCase()}
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="border-t py-16" style={{ borderColor: line }}>
          <Label>man ratio — frequently asked</Label>
          <div className="mt-6 grid gap-x-10 gap-y-8 md:grid-cols-2">
            {faqs.map((f) => (
              <div key={f.q}>
                <h4 className="font-grotesk text-lg font-bold">
                  <span style={{ color: cyan }}>? </span>
                  {f.q}
                </h4>
                <p className="mt-2 text-[13px] leading-relaxed" style={{ color: dim }}>
                  {f.a}
                </p>
              </div>
            ))}
          </div>
        </section>

        <footer className="border-t pt-8 text-center text-[11px]" style={{ borderColor: line, color: dim }}>
          <p className="font-grotesk text-2xl font-bold text-white">
            Ready? <span style={{ color: cyan }}>$ ratio read yours.pdf</span>
          </p>
          <p className="mt-6">RATIO_READER © 2026 · drawn to scale · no document is trained on</p>
        </footer>
      </div>
    </main>
  );
}
