import { useInView } from "../lib/hooks";

function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const { ref, inView } = useInView<HTMLDivElement>(0.1);
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out ${inView ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"}`}
    >
      {children}
    </div>
  );
}

function Ticker() {
  return (
    <div className="overflow-hidden border-y border-black bg-black py-2">
      <div className="flex w-max animate-marquee-slow items-center gap-0 pr-0">
        {Array.from({ length: 10 }).map((_, i) => (
          <span
            key={i}
            className="flex items-center gap-6 pr-6 font-tight text-[11px] font-semibold tracking-[0.25em] whitespace-nowrap text-white uppercase"
          >
            <span className="text-[#E4002B]">●</span> summary
            <span className="text-[#E4002B]">●</span> quotes
            <span className="text-[#E4002B]">●</span> hints
            <span className="text-[#E4002B]">●</span> insights
          </span>
        ))}
      </div>
    </div>
  );
}

const indexRows = [
  {
    n: "01",
    title: "SUMMARY",
    body: "The argument compressed to its load-bearing structure. One paragraph, then the essentials — ranked by importance, not by page order.",
    meta: "MOD/A — 3 MIN",
  },
  {
    n: "02",
    title: "QUOTES",
    body: "Key passages extracted verbatim, each cited to its page number. Use the report's own words without wading through the report.",
    meta: "MOD/B — P. CITED",
  },
  {
    n: "03",
    title: "HINTS",
    body: "A map before the territory: which section to read first, which appendix contradicts the body, which chart carries the argument.",
    meta: "MOD/C — GUIDED",
  },
  {
    n: "04",
    title: "INSIGHTS",
    body: "Tensions the author didn't spell out — shaky assumptions, data that disagrees with itself, the subtext between sections.",
    meta: "MOD/D — DEEP",
  },
];

function Specimen() {
  return (
    <div className="grid border-t border-l border-black md:grid-cols-2">
      <div className="border-r border-b border-black p-6 sm:p-10">
        <div className="flex items-baseline justify-between">
          <p className="font-tight text-xs font-bold tracking-[0.3em] uppercase">Input</p>
          <p className="font-tight text-xs font-bold tracking-[0.3em] text-black/40 uppercase">214 pages</p>
        </div>
        <p className="mt-2 font-tight text-[11px] tracking-wide text-black/40 uppercase">
          The state of logistics, 2025 — raw
        </p>
        <div className="mt-6 space-y-[7px]">
          {Array.from({ length: 22 }).map((_, i) => (
            <div
              key={i}
              className={`h-[5px] ${i === 9 || i === 16 ? "bg-[#E4002B]" : "bg-black/[0.14]"}`}
              style={{ width: `${[100, 97, 92, 88, 100, 76, 95, 60, 90, 84, 100, 71, 93, 88, 66, 97, 80, 100, 74, 89, 95, 62][i]}%` }}
            />
          ))}
        </div>
        <p className="mt-6 font-tight text-xs font-semibold tracking-wide text-black/50 uppercase">
          <span className="bg-[#E4002B] px-1.5 py-0.5 text-white">Red lines</span> = the 2% you actually needed
        </p>
      </div>
      <div className="border-b border-black p-6 sm:p-10">
        <div className="flex items-baseline justify-between">
          <p className="font-tight text-xs font-bold tracking-[0.3em] uppercase">Output</p>
          <p className="font-tight text-xs font-bold tracking-[0.3em] text-black/40 uppercase">5 pages</p>
        </div>
        <p className="mt-2 font-tight text-[11px] tracking-wide text-black/40 uppercase">The brief — distilled</p>
        <p className="mt-6 font-tight text-2xl leading-[1.15] font-bold tracking-tight text-black sm:text-[2rem]">
          LOGISTICS IS BECOMING A SOFTWARE BUSINESS.
        </p>
        <p className="mt-5 font-tight text-sm leading-relaxed text-black/70 sm:text-base">
          Margins are migrating from fleets to orchestration layers. The winners are buying data, not trucks. The
          report's 214 pages support three moves — everything else is ceremony.
        </p>
        <div className="mt-7 space-y-2 border-t border-black/10 pt-6">
          {[
            ["→", "Quote, p.12: “consolidating around platforms with proprietary data.”"],
            ["→", "Hint: start at appendix B — it contradicts §3."],
            ["→", "Insight: growth claims lean on 2022 data."],
          ].map(([arrow, text]) => (
            <p key={text} className="flex gap-3 font-tight text-[13px] leading-snug font-medium text-black/60">
              <span className="text-[#E4002B]">{arrow}</span>
              {text}
            </p>
          ))}
        </div>
        <p className="mt-8 font-tight text-xs font-bold tracking-[0.25em] text-black/40 uppercase">
          Reading time: 3 min — compression: 43:1
        </p>
      </div>
    </div>
  );
}

export function Design5() {
  return (
    <div className="min-h-screen bg-[#F5F5F3] font-tight text-black antialiased selection:bg-[#E4002B] selection:text-white">
      <div
        className="pointer-events-none fixed inset-0 z-0 mx-auto hidden max-w-7xl grid-cols-6 lg:grid"
        aria-hidden
      >
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="border-l border-black/[0.06]" />
        ))}
      </div>

      <header className="sticky top-0 z-50 border-b border-black bg-[#F5F5F3]">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
          <a href="#" className="flex items-center gap-3">
            <span className="h-4 w-4 bg-[#E4002B]" />
            <span className="font-tight text-base font-extrabold tracking-tight uppercase">
              Ratio Reader<sup className="ml-0.5 text-[9px] font-bold">®</sup>
            </span>
          </a>
          <nav className="hidden items-center gap-8 font-tight text-xs font-bold tracking-[0.2em] uppercase md:flex">
            {[["Index", "index"], ["System", "system"], ["Specimen", "specimen"]].map(([label, href]) => (
              <a key={label} href={`#${href}`} className="group flex items-center gap-1.5">
                <span className="text-[#E4002B] transition-opacity group-hover:opacity-100 opacity-40">→</span>
                <span className="group-hover:bg-black group-hover:text-white px-1 transition-colors">{label}</span>
              </a>
            ))}
          </nav>
          <a
            href="#start"
            className="bg-black px-5 py-2.5 font-tight text-xs font-bold tracking-[0.2em] text-white uppercase transition-colors hover:bg-[#E4002B]"
          >
            Start — Free
          </a>
        </div>
      </header>

      <section className="relative border-b border-black">
        <div className="mx-auto max-w-7xl px-5 pt-14 pb-16 sm:px-8 sm:pt-20 sm:pb-24">
          <Reveal>
            <div className="flex flex-wrap items-center justify-between gap-3 font-tight text-[11px] font-bold tracking-[0.3em] text-black/50 uppercase">
              <p>Reading System — Nr. 01</p>
              <p>PDF → Brief → Understanding</p>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <h1 className="mt-10 font-tight text-[clamp(3.4rem,12vw,10.5rem)] leading-[0.86] font-black tracking-[-0.03em] uppercase">
              Read less.
              <br />
              Know{" "}
              <span className="relative inline-block">
                <span className="relative z-10 text-white">
                  <span className="absolute inset-0 -z-10 translate-x-2 translate-y-2 bg-[#E4002B]" aria-hidden />
                  more.
                </span>
              </span>
            </h1>
          </Reveal>

          <div className="mt-14 grid gap-0 border-t border-black md:grid-cols-12">
            <div className="border-b border-black py-7 pr-6 md:col-span-5 md:border-r md:border-b-0">
              <p className="font-tight text-base leading-relaxed font-medium text-black/80 sm:text-lg">
                Ratio Reader computes the signal-to-noise ratio of any PDF and returns its brief: the summary of what
                matters, key quotes cited to the page, hints for where to look, and insights that connect the dots.
              </p>
              <a
                href="#start"
                className="mt-7 inline-flex items-center gap-2 bg-[#E4002B] px-6 py-3 font-tight text-xs font-bold tracking-[0.2em] text-white uppercase transition-all hover:bg-black"
              >
                Upload a PDF <span aria-hidden>→</span>
              </a>
              <p className="mt-4 font-tight text-[11px] font-semibold tracking-[0.2em] text-black/40 uppercase">
                Free · No account · ~30 seconds
              </p>
            </div>
            <div className="border-b border-black py-7 pl-6 md:col-span-3 md:border-r md:border-b-0 md:pl-8">
              <p className="font-tight text-[11px] font-bold tracking-[0.3em] text-black/40 uppercase">The ratio</p>
              <p className="mt-4 font-tight text-6xl font-black tracking-tighter">
                40<span className="text-[#E4002B]">:</span>1
              </p>
              <p className="mt-3 font-tight text-sm leading-snug font-medium text-black/60">
                Median compression across 12,000+ distilled documents.
              </p>
            </div>
            <div className="py-7 pl-6 md:col-span-4 md:pl-8">
              <div className="flex h-full flex-col justify-between gap-6">
                {[
                  ["30 s", "to distill 200 pages"],
                  ["12 k+", "PDFs processed"],
                  ["97 %", "of the argument kept"],
                ].map(([v, l]) => (
                  <div key={l} className="flex items-baseline gap-4 border-b border-black/10 pb-3">
                    <span className="font-tight text-3xl font-black tracking-tight">{v}</span>
                    <span className="font-tight text-xs font-semibold tracking-[0.15em] text-black/50 uppercase">{l}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Ticker />

      <section id="index" className="border-b border-black">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-4">
              <h2 className="font-tight text-4xl font-black tracking-tight uppercase sm:text-6xl">The Index</h2>
              <p className="font-tight text-xs font-bold tracking-[0.25em] text-black/40 uppercase">
                4 modules / every brief / no filler
              </p>
            </div>
          </Reveal>
          <div className="mt-12 border-t border-black">
            {indexRows.map((row, i) => (
              <Reveal key={row.n} delay={i * 60}>
                <div className="group grid cursor-pointer grid-cols-[auto_1fr] items-baseline gap-x-6 gap-y-3 border-b border-black py-7 transition-colors duration-200 hover:bg-black sm:grid-cols-[80px_1fr_1fr_auto] sm:gap-x-10 sm:py-9">
                  <span className="font-tight text-sm font-bold text-[#E4002B] transition-colors group-hover:text-white">
                    {row.n}
                  </span>
                  <h3 className="font-tight text-3xl font-black tracking-tight uppercase transition-colors group-hover:text-white sm:text-5xl">
                    {row.title}
                  </h3>
                  <p className="col-span-2 max-w-md font-tight text-sm leading-relaxed font-medium text-black/60 transition-colors group-hover:text-white/70 sm:col-span-1">
                    {row.body}
                  </p>
                  <span className="hidden font-tight text-[11px] font-bold tracking-[0.25em] text-black/40 uppercase transition-colors group-hover:text-[#E4002B] sm:block">
                    {row.meta}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="specimen" className="border-b border-black">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-4">
              <h2 className="font-tight text-4xl font-black tracking-tight uppercase sm:text-6xl">Specimen</h2>
              <p className="font-tight text-xs font-bold tracking-[0.25em] text-black/40 uppercase">
                Before / after — actual example
              </p>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="mt-12 border-black">
              <Specimen />
            </div>
          </Reveal>
        </div>
      </section>

      <section id="system" className="border-b border-black">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24">
          <Reveal>
            <h2 className="font-tight text-4xl font-black tracking-tight uppercase sm:text-6xl">The System</h2>
          </Reveal>
          <div className="mt-12 grid border-t border-l border-black md:grid-cols-3">
            {[
              { n: "1", t: "Upload", d: "Any PDF up to 2,000 pages — reports, papers, contracts, specs. Processed in ~30 seconds, then deleted." },
              { n: "2", t: "Distill", d: "Every paragraph is ranked by importance. Signal is separated from noise; the ratio is computed." },
              { n: "3", t: "Understand", d: "Read the brief. Follow hints deeper if you need the depth — skip everything you don't." },
            ].map((s, i) => (
              <Reveal key={s.n} delay={i * 100}>
                <div className="group relative h-full border-r border-b border-black p-7 transition-colors hover:bg-[#E4002B] sm:p-10">
                  <p className="font-tight text-xs font-bold tracking-[0.3em] text-black/40 uppercase transition-colors group-hover:text-white/70">
                    Step {s.n}
                  </p>
                  <h3 className="mt-4 font-tight text-3xl font-black tracking-tight uppercase transition-colors group-hover:text-white sm:text-4xl">
                    {s.t}
                  </h3>
                  <p className="mt-4 font-tight text-sm leading-relaxed font-medium text-black/60 transition-colors group-hover:text-white/85">
                    {s.d}
                  </p>
                  <span className="absolute right-6 bottom-6 font-tight text-2xl font-black text-black/10 transition-colors group-hover:text-white/40">
                    ↓
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="start" className="bg-[#E4002B]">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
          <Reveal>
            <p className="font-tight text-xs font-bold tracking-[0.3em] text-white/70 uppercase">
              Ratio Reader — Begin
            </p>
            <a
              href="#"
              className="group mt-8 flex flex-wrap items-center justify-between gap-8 border-y border-white/40 py-8 sm:py-12"
            >
              <span className="font-tight text-[clamp(2.8rem,9vw,8rem)] leading-[0.9] font-black tracking-[-0.02em] text-white uppercase transition-transform duration-300 group-hover:translate-x-4">
                Start reading
              </span>
              <span className="flex h-24 w-24 shrink-0 items-center justify-center rounded-full bg-white font-tight text-4xl font-black text-[#E4002B] transition-transform duration-300 group-hover:rotate-45 sm:h-32 sm:w-32 sm:text-5xl">
                →
              </span>
            </a>
            <div className="mt-8 flex flex-wrap justify-between gap-4 font-tight text-[11px] font-bold tracking-[0.25em] text-white/70 uppercase">
              <p>First 3 briefs free</p>
              <p>No account required</p>
              <p>Nothing stored, ever</p>
            </div>
          </Reveal>
        </div>
      </section>

      <footer className="bg-black">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-4 px-5 py-8 sm:flex-row sm:items-center sm:px-8">
          <p className="font-tight text-sm font-black tracking-tight text-white uppercase">
            Ratio Reader<span className="text-[#E4002B]">®</span>
          </p>
          <p className="font-tight text-[11px] font-semibold tracking-[0.25em] text-white/40 uppercase">
            Set in Inter Tight · Zürich–Astana · MMXXVI
          </p>
          <div className="flex gap-6 font-tight text-[11px] font-bold tracking-[0.25em] text-white/50 uppercase">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
