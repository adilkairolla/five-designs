import { Reveal, useInView } from "../components/reveal";

/*
 * Design 3 — "Swiss Ratio"
 * International Typographic Style. Exposed grid, Archivo 900 expanded,
 * black / off-white / signal red. The golden rectangle IS the feature grid.
 */

const BG = "#F2F0EA";
const BLACK = "#111110";
const RED = "#E32119";

const heavy = { fontStretch: "125%" as const, fontWeight: 900 };

function GoldenDiagram() {
  const { ref, inView } = useInView<HTMLDivElement>(0.3);
  const cell = "absolute border border-[#111110] flex flex-col justify-between p-3 md:p-5";
  return (
    <div ref={ref} className="relative w-full select-none" style={{ aspectRatio: "1.618" }}>
      {/* squares of the golden subdivision, each a feature */}
      <div className={cell} style={{ left: 0, top: 0, width: "61.8%", height: "100%" }}>
        <span className="font-archivo text-xs tracking-[0.2em]" style={{ color: RED }}>01</span>
        <div>
          <p className="font-archivo text-xl uppercase leading-none md:text-4xl" style={heavy}>Summary</p>
          <p className="mt-2 hidden max-w-[26ch] font-archivo text-xs leading-snug text-[#111110]/70 md:block md:text-sm">
            The core argument of the document, restated in proportion. The largest share of the brief — as it should be.
          </p>
        </div>
      </div>
      <div className={cell} style={{ left: "61.8%", top: 0, width: "38.2%", height: "61.8%" }}>
        <span className="font-archivo text-xs tracking-[0.2em]" style={{ color: RED }}>02</span>
        <p className="font-archivo text-lg uppercase leading-none md:text-3xl" style={heavy}>Quotes</p>
      </div>
      <div className={cell} style={{ left: "76.4%", top: "61.8%", width: "23.6%", height: "38.2%" }}>
        <span className="font-archivo text-[10px] tracking-[0.2em]" style={{ color: RED }}>03</span>
        <p className="font-archivo text-sm uppercase leading-none md:text-xl" style={heavy}>Hints</p>
      </div>
      <div className={cell} style={{ left: "61.8%", top: "76.4%", width: "14.6%", height: "23.6%" }}>
        <span className="font-archivo text-[9px] tracking-[0.15em]" style={{ color: RED }}>04</span>
        <p className="font-archivo text-[10px] uppercase leading-none md:text-sm" style={heavy}>
          In­sights
        </p>
      </div>
      {/* the remainder: you */}
      <div
        className="absolute flex items-center justify-center"
        style={{ left: "61.8%", top: "61.8%", width: "14.6%", height: "14.6%", background: RED }}
      >
        <span className="font-archivo text-[9px] uppercase tracking-widest text-white md:text-[11px]" style={heavy}>
          you
        </span>
      </div>

      {/* golden spiral */}
      <svg className="pointer-events-none absolute inset-0 h-full w-full" viewBox="0 0 1618 1000" fill="none" preserveAspectRatio="none" aria-hidden>
        <path
          d="M 0 1000 A 1000 1000 0 0 1 1000 0 A 618 618 0 0 1 1618 618 A 382 382 0 0 1 1236 1000 A 236 236 0 0 1 1000 764"
          stroke={RED}
          strokeWidth="6"
          strokeDasharray="4200"
          strokeDashoffset={inView ? 0 : 4200}
          style={{ transition: "stroke-dashoffset 2.6s cubic-bezier(0.65,0,0.35,1) 0.2s" }}
        />
      </svg>
    </div>
  );
}

function Mark() {
  return (
    <span className="font-archivo text-[10px]" style={{ color: BLACK }} aria-hidden>
      +
    </span>
  );
}

export function Swiss() {
  return (
    <main className="min-h-screen font-archivo antialiased selection:bg-[#E32119] selection:text-white" style={{ background: BG, color: BLACK }}>
      {/* exposed column grid */}
      <div
        className="pointer-events-none fixed inset-0 z-0 mx-auto max-w-7xl"
        style={{
          backgroundImage: `linear-gradient(90deg, ${BLACK}0F 1px, transparent 1px)`,
          backgroundSize: "calc(100% / 6) 100%",
        }}
        aria-hidden
      />

      <div className="relative z-10">
        {/* ── Nav ──────────────────────────────────────────────────── */}
        <header className="border-b" style={{ borderColor: BLACK }}>
          <div className="mx-auto flex max-w-7xl items-stretch justify-between px-6">
            <a href="#" className="flex items-center gap-3 py-4">
              <span className="flex h-8 w-8 items-center justify-center text-sm text-white" style={{ background: BLACK, ...heavy }}>
                R
              </span>
              <span className="text-lg uppercase tracking-tight" style={heavy}>
                Ratio<span style={{ color: RED }}>®</span>
              </span>
            </a>
            <nav className="hidden items-center gap-10 text-[11px] uppercase tracking-[0.25em] md:flex">
              <a href="#ratio" className="transition-colors hover:text-[#E32119]">The Ratio</a>
              <a href="#process" className="transition-colors hover:text-[#E32119]">Process</a>
              <a href="#figures" className="transition-colors hover:text-[#E32119]">Figures</a>
            </nav>
            <a
              href="#cta"
              className="hidden items-center px-6 text-[11px] uppercase tracking-[0.25em] text-white transition-colors hover:bg-[#E32119] md:flex"
              style={{ background: BLACK }}
            >
              Upload PDF
            </a>
          </div>
        </header>

        {/* ── Hero ─────────────────────────────────────────────────── */}
        <section className="mx-auto max-w-7xl border-b px-6" style={{ borderColor: BLACK }}>
          <div className="grid lg:grid-cols-[1.4fr_1fr]">
            <div className="border-b py-16 md:py-24 lg:border-b-0 lg:border-r lg:pr-12" style={{ borderColor: BLACK }}>
              <Reveal>
                <p className="text-[11px] uppercase tracking-[0.4em] text-[#111110]/60">
                  Ratio Reader — N°1 in proportional reading
                </p>
                <h1 className="mt-8 text-[clamp(3.2rem,9vw,8.5rem)] uppercase leading-[0.85] tracking-[-0.02em]" style={heavy}>
                  Read
                  <br />
                  less<span style={{ color: RED }}>.</span>
                  <br />
                  Know
                  <br />
                  more<span style={{ color: RED }}>.</span>
                </h1>
              </Reveal>
              <Reveal delay={200}>
                <div className="mt-10 flex flex-wrap items-center gap-4">
                  <a
                    href="#cta"
                    className="px-8 py-4 text-[12px] uppercase tracking-[0.25em] text-white transition-colors hover:bg-[#E32119]"
                    style={{ background: BLACK }}
                  >
                    Upload a PDF — free
                  </a>
                  <a
                    href="#ratio"
                    className="border px-8 py-4 text-[12px] uppercase tracking-[0.25em] transition-colors hover:border-[#E32119] hover:text-[#E32119]"
                    style={{ borderColor: BLACK }}
                  >
                    See the ratio ↓
                  </a>
                </div>
              </Reveal>
            </div>

            <div className="flex flex-col justify-between gap-10 py-16 md:py-24 lg:pl-12">
              <Reveal delay={300}>
                <p className="max-w-sm text-lg leading-relaxed text-[#111110]/80">
                  Every document has a ratio of substance to filler. Ratio Reader finds it — and hands you the
                  substance: summary, quotes, hints, insights. In golden proportion to your time.
                </p>
              </Reveal>
              <Reveal delay={450}>
                <div className="flex items-end justify-between">
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.3em] text-[#111110]/60">The constant</p>
                    <p className="mt-2 text-6xl tabular-nums md:text-7xl" style={{ ...heavy, color: RED }}>
                      1:1.618
                    </p>
                  </div>
                  <div className="hidden h-20 w-20 rounded-full sm:block" style={{ background: RED }} aria-hidden />
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ── Marquee ──────────────────────────────────────────────── */}
        <div className="overflow-hidden border-b py-3" style={{ background: BLACK, borderColor: BLACK }}>
          <div className="flex w-max animate-[marquee_24s_linear_infinite] whitespace-nowrap">
            {[0, 1].map((n) => (
              <span key={n} className="text-sm uppercase tracking-[0.35em] text-white">
                {Array.from({ length: 6 }, () => "Read less — Know more — Ratio Reader — ").join("")}
              </span>
            ))}
          </div>
        </div>

        {/* ── Golden diagram ───────────────────────────────────────── */}
        <section id="ratio" className="mx-auto max-w-7xl border-b px-6 py-20 md:py-28" style={{ borderColor: BLACK }}>
          <div className="grid gap-12 lg:grid-cols-[1fr_2fr]">
            <Reveal>
              <div className="flex h-full flex-col justify-between gap-8">
                <div>
                  <p className="text-[11px] uppercase tracking-[0.4em]" style={{ color: RED }}>
                    Fig. 1
                  </p>
                  <h2 className="mt-4 text-4xl uppercase leading-[0.95] md:text-5xl" style={heavy}>
                    The brief,
                    <br />
                    divided
                    <br />
                    correctly
                  </h2>
                </div>
                <p className="max-w-xs text-base leading-relaxed text-[#111110]/75">
                  Four outputs, weighted by the golden section. The summary carries the argument. Quotes carry the
                  proof. Hints guide the deep read. Insights carry what the author never said aloud.
                  <br />
                  <br />
                  The red square is the time you spend. All of it.
                </p>
              </div>
            </Reveal>
            <Reveal delay={200}>
              <GoldenDiagram />
            </Reveal>
          </div>
        </section>

        {/* ── Process ──────────────────────────────────────────────── */}
        <section id="process" className="mx-auto max-w-7xl border-b px-6 py-20 md:py-28" style={{ borderColor: BLACK }}>
          <Reveal>
            <p className="text-[11px] uppercase tracking-[0.4em]" style={{ color: RED }}>
              Fig. 2 — Process
            </p>
          </Reveal>
          <div className="mt-12 grid gap-px md:grid-cols-3" style={{ background: BLACK }}>
            {[
              { n: "1", t: "Deposit", d: "One PDF. Any length, any discipline, any era of scanning technology." },
              { n: "2", t: "Reduction", d: "The document is weighed. Substance is separated from ornament, claim from repetition." },
              { n: "3", t: "Delivery", d: "The brief arrives: proportioned, paginated, citable. Four minutes of your attention, well spent." },
            ].map((s, i) => (
              <Reveal key={s.n} delay={i * 140}>
                <div className="group h-full p-8 transition-colors duration-300 hover:bg-[#111110] md:p-10" style={{ background: BG }}>
                  <p className="text-[clamp(4rem,8vw,7rem)] leading-none transition-colors group-hover:text-[#E32119]" style={{ ...heavy, color: RED }}>
                    {s.n}
                  </p>
                  <h3 className="mt-6 text-2xl uppercase transition-colors group-hover:text-white" style={heavy}>
                    {s.t}
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-[#111110]/75 transition-colors group-hover:text-white/70">
                    {s.d}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ── Figures ──────────────────────────────────────────────── */}
        <section id="figures" className="mx-auto max-w-7xl border-b px-6 py-20 md:py-28" style={{ borderColor: BLACK }}>
          <Reveal>
            <p className="text-[11px] uppercase tracking-[0.4em]" style={{ color: RED }}>
              Fig. 3 — Measured results
            </p>
          </Reveal>
          <div className="mt-12 grid gap-12 md:grid-cols-3">
            {[
              ["38:1", "average compression, pages to minutes"],
              ["94%", "of readers report finishing what they start"],
              ["11", "verbatim quotes pinned per document, page numbers included"],
            ].map(([num, label], i) => (
              <Reveal key={label} delay={i * 140}>
                <div className="border-t-4 pt-6" style={{ borderColor: i === 1 ? RED : BLACK }}>
                  <p className="text-[clamp(4rem,9vw,7.5rem)] leading-none tabular-nums" style={heavy}>
                    {num}
                  </p>
                  <p className="mt-4 max-w-[28ch] text-sm uppercase leading-relaxed tracking-[0.15em] text-[#111110]/70">
                    {label}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={300}>
            <p className="mt-16 max-w-2xl text-2xl leading-snug md:text-3xl" style={{ fontWeight: 500 }}>
              "The first reading tool that respects proportion — of arguments, of evidence,{" "}
              <span style={{ color: RED }}>of my afternoon</span>."
            </p>
            <p className="mt-4 text-[11px] uppercase tracking-[0.3em] text-[#111110]/60">
              — Research director, basel
            </p>
          </Reveal>
        </section>

        {/* ── CTA ──────────────────────────────────────────────────── */}
        <section id="cta" className="border-b" style={{ background: RED, borderColor: BLACK }}>
          <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
            <Reveal>
              <div className="flex flex-col items-start justify-between gap-10 lg:flex-row lg:items-end">
                <h2 className="max-w-3xl text-[clamp(2.6rem,7vw,6rem)] uppercase leading-[0.9] text-white" style={heavy}>
                  Every document has a ratio<span style={{ color: BLACK }}>.</span>
                </h2>
                <a
                  href="#"
                  className="shrink-0 px-10 py-5 text-[12px] uppercase tracking-[0.25em] text-white transition-transform hover:-translate-y-1"
                  style={{ background: BLACK }}
                >
                  Find yours — upload free
                </a>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ── Footer ───────────────────────────────────────────────── */}
        <footer className="mx-auto max-w-7xl px-6 py-10">
          <div className="flex flex-wrap items-center justify-between gap-6 text-[10px] uppercase tracking-[0.3em] text-[#111110]/60">
            <div className="flex items-center gap-3">
              <Mark />
              <span>Ratio Reader® MMXXVI</span>
            </div>
            <span>Set in Archivo · composed on a 6-column grid, obviously</span>
            <div className="flex items-center gap-3">
              <span>1 : 1.618</span>
              <Mark />
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}
