import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { faqs, features, pricing, sampleDoc, stats, steps, testimonials } from "../lib/content";

/* ------------------------------------------------------------------ */
/* Design 5 — "Golden"                                                  */
/* Swiss modernism built on φ. Off-white, black, one red. Heavy grid,   */
/* enormous numerals, a golden spiral that winds as you scroll, and     */
/* a feature grid laid out as nested golden rectangles (8·5·3·2·1·1).   */
/* ------------------------------------------------------------------ */

const paper = "#f3f1ec";
const ink = "#0e0e0e";
const red = "#e8321e";
const PHI = 1.618;

function Spiral() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const rotate = useTransform(scrollYProgress, [0, 1], [-20, 40]);
  const draw = useTransform(scrollYProgress, [0, 0.6], [0, 1]);

  // quarter arcs of a golden spiral, radii by fibonacci
  const arcs = [
    "M 233 233 A 233 233 0 0 1 0 0",
    "M 0 0 A 144 144 0 0 1 144 -144",
    "M 144 -144 A 89 89 0 0 1 233 -55",
    "M 233 -55 A 55 55 0 0 1 178 0",
    "M 178 0 A 34 34 0 0 1 144 -34",
    "M 144 -34 A 21 21 0 0 1 165 -55",
    "M 165 -55 A 13 13 0 0 1 178 -42",
  ];
  return (
    <div ref={ref} className="relative aspect-square w-full max-w-[520px]">
      <motion.svg viewBox="-20 -170 280 420" className="h-full w-full" style={{ rotate }} fill="none">
        {/* golden rectangles */}
        {[
          [0, -144, 233, 377],
          [0, -144, 233, 233],
          [0, -144, 144, 144],
          [144, -144, 89, 89],
          [178, -55, 55, 55],
          [144, -34, 34, 34],
        ].map(([x, y, w, h], i) => (
          <rect key={i} x={x} y={y} width={w} height={h} stroke={ink} strokeWidth={0.6} opacity={0.35} />
        ))}
        {arcs.map((d, i) => (
          <motion.path key={i} d={d} stroke={red} strokeWidth={2.4} strokeLinecap="round" style={{ pathLength: draw }} />
        ))}
      </motion.svg>
      <div className="absolute bottom-2 left-2 font-plex text-[11px] uppercase tracking-widest" style={{ color: ink }}>
        φ = 1.618…
      </div>
    </div>
  );
}

function Num({ children }: { children: React.ReactNode }) {
  return (
    <span className="font-plex text-xs uppercase tracking-[0.25em]" style={{ color: red }}>
      {children}
    </span>
  );
}

export function Golden() {
  return (
    <main className="min-h-screen overflow-x-hidden font-tight" style={{ background: paper, color: ink }}>
      {/* Grid overlay */}
      <div aria-hidden className="pointer-events-none fixed inset-0 mx-auto hidden max-w-6xl grid-cols-8 px-8 lg:grid">
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className="border-l" style={{ borderColor: "rgba(14,14,14,0.07)" }} />
        ))}
      </div>

      <div className="relative mx-auto max-w-6xl px-5 pb-28 sm:px-8">
        <header className="flex items-center justify-between border-b py-5" style={{ borderColor: ink }}>
          <div className="flex items-baseline gap-2">
            <span className="text-lg font-black tracking-tight">Ratio</span>
            <span className="text-lg font-light">Reader</span>
          </div>
          <div className="hidden font-plex text-xs uppercase tracking-widest sm:block">Read in proportion</div>
          <a href="#pricing" className="px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#e8321e]" style={{ background: ink }}>
            Start
          </a>
        </header>

        {/* Hero — 1 : φ split */}
        <section className="grid gap-10 py-14 lg:grid-cols-[1.618fr_1fr] lg:py-20">
          <div>
            <Num>01 — Proposition</Num>
            <h1 className="mt-4 text-[13vw] font-black leading-[0.86] tracking-[-0.04em] sm:text-7xl lg:text-[7rem]">
              Every
              <br />
              document
              <br />
              has a
              <br />
              ratio<span style={{ color: red }}>.</span>
            </h1>
            <p className="mt-8 max-w-md text-lg leading-snug">
              For every page you read, a fraction carries the meaning. Ratio Reader finds that fraction in any PDF and hands it to you as a summary, hints, quotes and insights.
            </p>
            <div className="mt-8 flex gap-3">
              <a href="#pricing" className="px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#e8321e]" style={{ background: ink }}>
                Upload a PDF
              </a>
              <a href="#method" className="border px-6 py-3 text-sm font-semibold transition-colors hover:bg-black/5" style={{ borderColor: ink }}>
                The method
              </a>
            </div>
          </div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} className="flex items-center justify-center">
            <Spiral />
          </motion.div>
        </section>

        {/* Stats band */}
        <section className="grid border-y sm:grid-cols-4" style={{ borderColor: ink }}>
          {stats.map((s, i) => (
            <div key={s.label} className="border-b p-5 sm:border-b-0 sm:border-r sm:last:border-r-0" style={{ borderColor: ink }}>
              <Num>0{i + 1}</Num>
              <div className="mt-2 text-5xl font-black tracking-tight tabular-nums">{s.value}</div>
              <div className="mt-1 text-sm">{s.label}</div>
            </div>
          ))}
        </section>

        {/* Method */}
        <section id="method" className="scroll-mt-10 grid gap-10 py-20 lg:grid-cols-[1fr_1.618fr]">
          <div>
            <Num>02 — Method</Num>
            <h2 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">
              Three moves,
              <br />
              in proportion.
            </h2>
          </div>
          <div className="divide-y" style={{ borderColor: ink }}>
            {steps.map((s, i) => (
              <motion.div
                key={s.n}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="grid grid-cols-[4rem_1fr] gap-4 border-t py-6"
                style={{ borderColor: ink }}
              >
                <div className="text-5xl font-black leading-none" style={{ color: i === 2 ? red : ink }}>
                  {i + 1}
                </div>
                <div>
                  <h3 className="text-xl font-bold">{s.title}</h3>
                  <p className="mt-1 leading-relaxed opacity-80">{s.body}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Golden grid — features laid out as 8 / 5 / 3 / 2 / 1 / 1 */}
        <section className="py-10">
          <Num>03 — Output</Num>
          <h2 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">What you get, in golden proportion.</h2>
          <div className="golden-grid mt-10 grid gap-[3px] border-[3px]" style={{ borderColor: ink, background: ink }}>
            {/* 8x8 — summary */}
            <article className="p-6 sm:p-8" style={{ gridArea: "a", background: paper }}>
              <Num>8 × 8</Num>
              <h3 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">{features[0].title}</h3>
              <p className="mt-3 text-lg leading-snug">{features[0].short}</p>
              <p className="mt-3 max-w-md leading-relaxed opacity-80">{features[0].long}</p>
              <div className="mt-6 border-l-[3px] pl-4 font-plex text-[13px] leading-relaxed" style={{ borderColor: red }}>
                {sampleDoc.summary}
              </div>
            </article>
            {/* 5x5 — hints */}
            <article className="p-5 sm:p-6" style={{ gridArea: "b", background: red, color: "#fff" }}>
              <span className="font-plex text-xs uppercase tracking-[0.25em]">5 × 5</span>
              <h3 className="mt-3 text-2xl font-black tracking-tight sm:text-3xl">{features[1].title}</h3>
              <p className="mt-2 leading-snug">{features[1].short}</p>
              <p className="mt-3 font-plex text-[12px] leading-relaxed opacity-90">{sampleDoc.hints[0]}</p>
            </article>
            {/* 3x3 — quotes */}
            <article className="p-4" style={{ gridArea: "c", background: ink, color: paper }}>
              <span className="font-plex text-[10px] uppercase tracking-[0.25em]" style={{ color: red }}>
                3 × 3
              </span>
              <h3 className="mt-2 text-lg font-black tracking-tight">{features[2].title}</h3>
              <p className="mt-1 text-xs leading-snug opacity-80">{features[2].short}</p>
            </article>
            {/* 2x2 — insights */}
            <article className="p-3" style={{ gridArea: "d", background: paper }}>
              <span className="font-plex text-[9px] uppercase tracking-[0.2em]" style={{ color: red }}>
                2×2
              </span>
              <h3 className="mt-1 text-sm font-black leading-tight">{features[3].title}</h3>
            </article>
            {/* 1x1, 1x1 */}
            <div className="grid place-items-center" style={{ gridArea: "e", background: red, minHeight: 40 }}>
              <span className="font-plex text-[10px] text-white">1</span>
            </div>
            <div className="grid place-items-center" style={{ gridArea: "f", background: paper, minHeight: 40 }}>
              <span className="font-plex text-[10px]">1</span>
            </div>
          </div>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <p className="leading-relaxed opacity-80">
              <b>Quotes.</b> {features[2].long}
            </p>
            <p className="leading-relaxed opacity-80">
              <b>Insights.</b> {features[3].long}
            </p>
          </div>
        </section>

        {/* Testimonials */}
        <section className="border-t py-20" style={{ borderColor: ink }}>
          <Num>04 — Readers</Num>
          <div className="mt-6 grid gap-8 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <figure key={t.name} className="border-t-[3px] pt-4" style={{ borderColor: i === 1 ? red : ink }}>
                <blockquote className="text-xl font-medium leading-snug tracking-tight">“{t.quote}”</blockquote>
                <figcaption className="mt-4 font-plex text-xs uppercase tracking-wider">
                  {t.name} <span className="opacity-50">/ {t.role}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="scroll-mt-10 border-t py-20" style={{ borderColor: ink }}>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <Num>05 — Plans</Num>
              <h2 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">Priced to the page.</h2>
            </div>
            <p className="max-w-xs text-sm opacity-70">Every plan includes verbatim quotes with page numbers and the promise that we never train on your files.</p>
          </div>
          <div className="mt-10 grid border-[3px] md:grid-cols-3" style={{ borderColor: ink }}>
            {pricing.map((p) => (
              <div key={p.name} className="flex flex-col border-b-[3px] p-6 md:border-b-0 md:border-r-[3px] md:last:border-r-0" style={{ borderColor: ink, background: p.highlight ? ink : "transparent", color: p.highlight ? paper : ink }}>
                <div className="flex items-baseline justify-between">
                  <h3 className="text-2xl font-black tracking-tight">{p.name}</h3>
                  {p.highlight && (
                    <span className="font-plex text-[10px] uppercase tracking-widest" style={{ color: red }}>
                      φ pick
                    </span>
                  )}
                </div>
                <div className="mt-4 text-6xl font-black tracking-tight tabular-nums">{p.price}</div>
                <div className="font-plex text-xs uppercase tracking-wider opacity-60">{p.period}</div>
                <ul className="mt-6 flex-1 space-y-2 text-sm">
                  {p.features.map((f) => (
                    <li key={f} className="flex gap-3">
                      <span style={{ color: red }}>—</span> {f}
                    </li>
                  ))}
                </ul>
                <button className="mt-6 py-3 text-sm font-semibold transition-colors hover:bg-[#e8321e] hover:text-white" style={{ background: p.highlight ? paper : ink, color: p.highlight ? ink : paper }}>
                  {p.cta}
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="border-t py-20" style={{ borderColor: ink }}>
          <Num>06 — Questions</Num>
          <div className="mt-6 grid gap-x-12 gap-y-8 md:grid-cols-2">
            {faqs.map((f) => (
              <div key={f.q}>
                <h4 className="text-lg font-bold tracking-tight">{f.q}</h4>
                <p className="mt-2 leading-relaxed opacity-80">{f.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="border-t pt-16" style={{ borderColor: ink }}>
          <div className="grid gap-8 lg:grid-cols-[1.618fr_1fr]">
            <h2 className="text-5xl font-black leading-[0.9] tracking-[-0.04em] sm:text-7xl">
              Read in
              <br />
              proportion<span style={{ color: red }}>.</span>
            </h2>
            <div className="flex flex-col justify-end gap-4">
              <a href="#pricing" className="px-6 py-4 text-center text-sm font-semibold text-white transition-colors hover:bg-[#e8321e]" style={{ background: ink }}>
                Upload your first PDF — free
              </a>
              <p className="font-plex text-[11px] uppercase tracking-widest opacity-60">
                Ratio Reader © 2026 · 1 : {PHI.toFixed(3)} · Set in Inter Tight &amp; IBM Plex Mono
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
