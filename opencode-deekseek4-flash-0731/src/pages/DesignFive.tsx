import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { DesignSwitcher } from "../components/DesignSwitcher";
import { Reveal } from "../components/Reveal";

const BLUE = "#2036ff";
const RATIOS = ["63:1", "27:1", "12:1", "48:1", "19:1"];

const INDEX = [
  {
    no: "01",
    name: "Summary",
    body: "One page. The argument, the evidence, the conclusion. Nothing that pads the page count.",
  },
  {
    no: "02",
    name: "Hints",
    body: "Marginal notes at the dense passages — definitions, context, and a suggested reading order.",
  },
  {
    no: "03",
    name: "Quotes",
    body: "Verbatim passages with page numbers. The lines that carry the weight of the document.",
  },
  {
    no: "04",
    name: "Insights",
    body: "Assumptions, implications, counterpoints. What the document doesn't say, noted plainly.",
  },
];

const METHOD = [
  { no: "01", name: "Upload", body: "Any PDF, any length. A report, a paper, a manual — the input is irrelevant; the output is the point." },
  { no: "02", name: "Distill", body: "Every page is weighed against the document's thesis. Signal is ranked. Noise is discarded." },
  { no: "03", name: "Read", body: "One page, thirty seconds. Then read the source — or don't. You now have the information to decide." },
];

const STATS = [
  ["27:1", "average ratio"],
  ["32s", "median digest time"],
  ["99.2%", "key-point recall"],
  ["1.2M", "pages distilled"],
];

function CyclingRatio() {
  const [i, setI] = useState(1);
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % RATIOS.length), 2200);
    return () => clearInterval(t);
  }, []);
  return (
    <div className="relative">
      <motion.span
        key={RATIOS[i]}
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className="block font-plex text-[26vw] font-semibold leading-[0.85] tracking-tighter tabular-nums sm:text-[18vw] lg:text-[11rem]"
        style={{ color: BLUE }}
      >
        {RATIOS[i]}
      </motion.span>
    </div>
  );
}

export function DesignFive() {
  return (
    <div className="min-h-screen bg-white text-[#0c0c0c] antialiased">
      <header className="border-b border-[#0c0c0c]">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 font-sans text-[11px] font-semibold uppercase tracking-[0.22em]">
          <p>Ratio reader®</p>
          <nav className="hidden items-center gap-8 md:flex">
            <a href="#index" className="hover:text-[#2036ff]">Index</a>
            <a href="#method" className="hover:text-[#2036ff]">Method</a>
            <a href="#figures" className="hover:text-[#2036ff]">Figures</a>
          </nav>
          <a href="#start" className="flex items-center gap-1 bg-[#0c0c0c] px-4 py-2 text-white transition-colors hover:bg-[#2036ff]">
            Start <ArrowUpRight size={13} />
          </a>
        </div>
      </header>

      <section className="relative overflow-hidden border-b border-[#0c0c0c]">
        <div aria-hidden className="pointer-events-none absolute inset-0 hidden lg:block">
          {Array.from({ length: 11 }).map((_, i) => (
            <div
              key={i}
              className="absolute bottom-0 top-0 w-px bg-[#0c0c0c]/[0.07]"
              style={{ left: `${((i + 1) / 12) * 100}%` }}
            />
          ))}
        </div>
        <div className="relative mx-auto max-w-7xl px-4 pb-16 pt-14 lg:pb-24 lg:pt-20">
          <div className="flex items-baseline justify-between font-plex text-[11px] uppercase tracking-[0.25em] text-[#0c0c0c]/50">
            <span>Fig. 01 — compression</span>
            <span className="hidden sm:block">pages in : pages out</span>
          </div>
          <CyclingRatio />
          <div className="mt-8 grid gap-10 lg:grid-cols-12">
            <h1 className="text-4xl font-bold leading-[1.02] tracking-tight sm:text-6xl lg:col-span-7 lg:text-7xl">
              Your reading, reduced to a ratio.
            </h1>
            <div className="lg:col-span-5 lg:border-l lg:border-[#0c0c0c] lg:pl-8">
              <p className="max-w-md text-base leading-relaxed text-[#0c0c0c]/70">
                Ratio reader distills dense PDFs into one-page digests — summary, hints, quotes,
                insights. The ratio varies by document. The promise doesn't: you read what
                matters, and skip what doesn't.
              </p>
              <a
                href="#start"
                className="mt-6 inline-flex items-center gap-2 bg-[#2036ff] px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.15em] text-white transition-colors hover:bg-[#0c0c0c]"
              >
                Upload a PDF <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="index" className="mx-auto max-w-7xl px-4 py-16 lg:py-24">
        <div className="flex items-baseline justify-between">
          <h2 className="font-plex text-[11px] uppercase tracking-[0.3em] text-[#0c0c0c]/50">
            Index — four outputs
          </h2>
          <span className="font-plex text-[11px] uppercase tracking-[0.3em] text-[#0c0c0c]/50">
            01–04
          </span>
        </div>
        <div className="mt-6 border-t border-[#0c0c0c]">
          {INDEX.map((row, i) => (
            <Reveal key={row.no} delay={i * 0.06}>
              <div className="group grid gap-2 border-b border-[#0c0c0c] py-7 transition-colors hover:bg-[#2036ff] hover:text-white md:grid-cols-12 md:items-baseline md:gap-6 md:px-4">
                <span className="font-plex text-sm text-[#0c0c0c]/40 group-hover:text-white/60 md:col-span-1">
                  {row.no}
                </span>
                <h3 className="text-3xl font-bold tracking-tight sm:text-4xl md:col-span-4">
                  {row.name}
                </h3>
                <p className="max-w-xl text-[15px] leading-relaxed text-[#0c0c0c]/60 group-hover:text-white/80 md:col-span-6">
                  {row.body}
                </p>
                <ArrowUpRight
                  size={26}
                  className="hidden text-[#0c0c0c]/25 transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-white md:col-span-1 md:block md:justify-self-end"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="method" className="border-y border-[#0c0c0c] bg-[#f4f4f2]">
        <div className="mx-auto max-w-7xl px-4 py-16 lg:py-24">
          <h2 className="font-plex text-[11px] uppercase tracking-[0.3em] text-[#0c0c0c]/50">
            Method — three movements
          </h2>
          <div className="mt-10 grid gap-12 md:grid-cols-3 md:gap-8">
            {METHOD.map((m, i) => (
              <Reveal key={m.no} delay={i * 0.1}>
                <div className="border-t-2 border-[#0c0c0c] pt-5">
                  <p className="font-plex text-6xl font-semibold tabular-nums text-[#2036ff]">
                    {m.no}
                  </p>
                  <h3 className="mt-4 text-2xl font-bold tracking-tight">{m.name}</h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-[#0c0c0c]/65">{m.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 lg:py-28">
        <Reveal>
          <blockquote className="max-w-5xl">
            <p className="text-3xl font-bold leading-[1.15] tracking-tight sm:text-5xl">
              "A three-hundred-page report contains, on average,{" "}
              <span className="bg-[#2036ff] px-2 text-white">three pages of signal</span>. Ratio
              reader finds them — and cites the page."
            </p>
            <footer className="mt-8 font-plex text-[11px] uppercase tracking-[0.3em] text-[#0c0c0c]/50">
              Design principle № 1 — the ratio doctrine
            </footer>
          </blockquote>
        </Reveal>
      </section>

      <section id="figures" className="border-y border-[#0c0c0c]">
        <div className="mx-auto grid max-w-7xl grid-cols-2 md:grid-cols-4">
          {STATS.map(([big, small], i) => (
            <div
              key={small}
              className={`px-6 py-10 text-center ${i > 0 ? "border-l border-[#0c0c0c]" : ""} ${
                i >= 2 ? "border-t border-[#0c0c0c] md:border-t-0" : ""
              }`}
            >
              <p className="font-plex text-4xl font-semibold tabular-nums tracking-tight">{big}</p>
              <p className="mt-2 font-plex text-[10px] uppercase tracking-[0.25em] text-[#0c0c0c]/50">
                {small}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section id="start" className="bg-[#2036ff] text-white">
        <div className="mx-auto max-w-7xl px-4 py-20 lg:py-28">
          <div className="flex flex-col items-start justify-between gap-10 md:flex-row md:items-end">
            <h2 className="text-5xl font-bold leading-[0.95] tracking-tight sm:text-7xl lg:text-8xl">
              Start
              <br />
              at 27:1.
            </h2>
            <div className="max-w-sm">
              <p className="text-white/75">
                Ten free documents. No account. The first digest arrives in about thirty seconds.
              </p>
              <a
                href="#"
                className="mt-6 inline-flex items-center gap-2 bg-white px-8 py-4 text-sm font-semibold uppercase tracking-[0.15em] text-[#2036ff] transition-colors hover:bg-[#0c0c0c] hover:text-white"
              >
                Upload a PDF <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="mx-auto max-w-7xl px-4 py-8">
        <div className="flex flex-wrap items-center justify-between gap-3 font-plex text-[10px] uppercase tracking-[0.25em] text-[#0c0c0c]/45">
          <span>Ratio reader® — a reading instrument</span>
          <span className="hidden md:block">Grid: 12 columns · Type: Inter & IBM Plex Mono</span>
          <span>© 2026</span>
        </div>
      </footer>

      <DesignSwitcher />
    </div>
  );
}
