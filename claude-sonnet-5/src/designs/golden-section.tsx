import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Reveal, staggerContainer, fadeUpItem } from "@/components/reveal";

const ACCENT = "#E8432A";
const LINE = "#D8D6D0";

const features = [
  {
    n: "01",
    title: "Instant Summaries",
    body: "The essential points of any document — distilled in seconds, regardless of length.",
  },
  {
    n: "02",
    title: "Smart Hints",
    body: "Plain-language context for jargon and dense passages, placed exactly where you need it.",
  },
  {
    n: "03",
    title: "Key Quotes",
    body: "The exact sentences worth remembering. Extracted automatically, cited precisely.",
  },
  {
    n: "04",
    title: "Deeper Insights",
    body: "Connections, implications, and the questions your source raises but never states.",
  },
] as const;

const steps = [
  { n: "01", title: "Upload", body: "Any PDF. Any length. Drop it in." },
  { n: "02", title: "Analyze", body: "Ratio Reader reads every page, measuring what's essential against what isn't." },
  { n: "03", title: "Receive", body: "One structured breakdown — summary, hints, quotes, insights." },
  { n: "04", title: "Go deeper", body: "Expand any section. Follow any quote back to its page." },
] as const;

const stats = [
  { value: "6.4×", label: "Faster than reading the source document in full, on average." },
  { value: "312", label: "Pages — the longest single document processed without truncation." },
  { value: "94%", label: "Extracted quotes confirmed as exact matches on manual audit." },
] as const;

const navLinks = [
  { href: "#capabilities", label: "Capabilities" },
  { href: "#process", label: "Process" },
  { href: "#sample", label: "Sample" },
  { href: "#proof", label: "Proof" },
] as const;

function UploadButton({ className = "" }: { className?: string }) {
  return (
    <button
      type="button"
      className={`group inline-flex items-center justify-center gap-2 whitespace-nowrap bg-[#E8432A] font-medium tracking-wide text-[#FAFAF7] transition-colors hover:bg-[#0A0A0A] ${className}`}
    >
      Upload a PDF
      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
    </button>
  );
}

function SectionKicker({ n, title, tone = "light" }: { n: string; title: string; tone?: "light" | "dark" }) {
  const dim = tone === "dark" ? "text-[#FAFAF7]/40" : "text-[#0A0A0A]/40";
  return (
    <div className="flex items-baseline gap-4">
      <span className={`text-xs font-semibold tabular-nums tracking-[0.3em] ${dim}`}>{n}</span>
      <h2 className="text-3xl font-medium tracking-tight sm:text-4xl">{title}</h2>
    </div>
  );
}

/**
 * The signature moment: a Fibonacci / golden-ratio spiral built from the
 * classic square sequence 1, 1, 2, 3, 5, 8, 13 (scaled ×10 for clean SVG
 * coordinates — note the sequence is legible directly in the arc radii
 * below). Squares are drawn as a hairline grid; the spiral is a single
 * continuous path of seven tangent quarter-circle arcs, one inscribed in
 * each square, that draws itself via an animated `pathLength`.
 */
function GoldenSpiral({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 130 210"
      className={className}
      role="img"
      aria-label="Diagram of a golden ratio spiral constructed from squares sized 1, 1, 2, 3, 5, 8 and 13."
    >
      <title>Golden ratio spiral, built from squares 1, 1, 2, 3, 5, 8, 13</title>
      <g fill="none" stroke={LINE} strokeWidth={1} vectorEffect="non-scaling-stroke">
        <rect x={30} y={50} width={10} height={10} />
        <rect x={40} y={50} width={10} height={10} />
        <rect x={30} y={60} width={20} height={20} />
        <rect x={0} y={50} width={30} height={30} />
        <rect x={0} y={0} width={50} height={50} />
        <rect x={50} y={0} width={80} height={80} />
        <rect x={0} y={80} width={130} height={130} />
      </g>
      <motion.path
        d="M30 60 A10 10 0 0 0 40 50 A10 10 0 0 0 50 60 A20 20 0 0 0 30 80 A30 30 0 0 0 0 50 A50 50 0 0 0 50 0 A80 80 0 0 0 130 80 A130 130 0 0 0 0 210"
        fill="none"
        stroke={ACCENT}
        strokeWidth={2.5}
        vectorEffect="non-scaling-stroke"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 2.4, ease: [0.65, 0, 0.35, 1] }}
      />
    </svg>
  );
}

export function GoldenSection() {
  return (
    <main className="min-h-screen bg-[#FAFAF7] font-display-swiss text-[#0A0A0A] selection:bg-[#E8432A] selection:text-[#FAFAF7]">
      <style>{`
        @keyframes gs-grid-draw {
          from { transform: scaleY(0); }
          to { transform: scaleY(1); }
        }
        .gs-grid-line {
          transform-origin: top;
          animation: gs-grid-draw 1.2s cubic-bezier(0.65, 0, 0.35, 1) both;
        }
        @keyframes gs-blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.15; }
        }
        .gs-blink {
          animation: gs-blink 2.6s ease-in-out infinite;
        }
      `}</style>

      {/* The one rule. */}
      <div className="h-[3px] w-full bg-[#E8432A]" aria-hidden="true" />

      <header className="border-b border-[#D8D6D0]">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-6 px-6 py-5 sm:px-10 lg:px-16">
          <div className="flex items-center gap-6 sm:gap-10">
            <Link
              to="/"
              className="border-b border-[#0A0A0A]/30 pb-0.5 text-xs tracking-[0.2em] text-[#0A0A0A]/60 uppercase transition-colors hover:border-[#0A0A0A] hover:text-[#0A0A0A]"
            >
              Index
            </Link>
            <span className="text-sm font-medium tracking-tight whitespace-nowrap">
              Ratio <span className="text-[#0A0A0A]/40">/</span> Reader
            </span>
          </div>
          <nav aria-label="Section" className="hidden items-center gap-8 text-xs tracking-[0.2em] text-[#0A0A0A]/60 uppercase md:flex">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} className="font-semibold transition-colors hover:text-[#0A0A0A]">
                {l.label}
              </a>
            ))}
          </nav>
          <UploadButton className="shrink-0 px-4 py-2.5 text-xs" />
        </div>
      </header>

      {/* 00 — Hero */}
      <section className="relative overflow-hidden border-b border-[#D8D6D0]">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 grid grid-cols-8">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="gs-grid-line border-l border-[#D8D6D0]" style={{ animationDelay: `${i * 70}ms` }} />
          ))}
        </div>

        <div className="relative mx-auto grid max-w-[1440px] grid-cols-1 gap-16 px-6 py-24 sm:px-10 sm:py-32 lg:grid-cols-[1.618fr_1fr] lg:gap-20 lg:px-16 lg:py-40">
          <div>
            <Reveal>
              <p className="text-xs font-semibold tracking-[0.3em] text-[#0A0A0A]/50 uppercase">00 — Reading, distilled</p>
            </Reveal>
            <Reveal delay={0.05}>
              <h1 className="mt-6 text-6xl leading-[0.95] font-normal tracking-tight sm:text-7xl lg:text-8xl">
                Every document
                <br />
                has a ratio.
              </h1>
            </Reveal>
            <div className="mt-8 h-px w-24 bg-[#0A0A0A]/25" />
            <Reveal delay={0.2}>
              <p className="mt-8 max-w-md text-base leading-relaxed text-[#0A0A0A]/70 sm:text-lg">
                Signal, extracted from noise. Ratio Reader reads the whole document and returns the summary, the hints,
                the quotes, and the insights that land on the correct side of that line.
              </p>
            </Reveal>
            <Reveal delay={0.3} className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
              <UploadButton className="px-7 py-4 text-sm" />
              <a
                href="#process"
                className="group inline-flex items-center gap-1.5 text-sm tracking-wide text-[#0A0A0A]/70 transition-colors hover:text-[#0A0A0A]"
              >
                See the method
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </Reveal>
          </div>

          <Reveal delay={0.25} className="relative mx-auto aspect-[130/210] w-full max-w-[360px] lg:mx-0">
            <GoldenSpiral className="absolute inset-0 h-full w-full" />
            <div className="absolute right-0 bottom-0 text-right">
              <div className="flex items-center justify-end gap-2">
                <span className="gs-blink inline-block h-1.5 w-1.5 bg-[#E8432A]" aria-hidden="true" />
                <span className="text-[10px] font-semibold tracking-[0.3em] text-[#0A0A0A]/50 uppercase">Golden ratio</span>
              </div>
              <p className="mt-1 text-5xl leading-none font-normal tabular-nums text-[#E8432A] sm:text-6xl">1.618</p>
              <p className="mt-3 ml-auto max-w-[220px] text-sm leading-snug text-[#0A0A0A]/60">
                Every document has a ratio of signal to noise. We find it.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 01 — Capabilities */}
      <section id="capabilities" className="border-b border-[#D8D6D0]">
        <div className="mx-auto max-w-[1440px] px-6 py-24 sm:px-10 sm:py-32 lg:px-16">
          <Reveal>
            <SectionKicker n="01" title="Capabilities" />
            <p className="mt-4 max-w-md text-sm leading-relaxed text-[#0A0A0A]/60">
              Four outputs. One document. Every upload returns the same structured breakdown, regardless of subject
              or length.
            </p>
          </Reveal>

          <motion.div
            className="mt-16 divide-y divide-[#D8D6D0] border-y border-[#D8D6D0]"
            variants={staggerContainer(0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
          >
            {features.map((f) => (
              <motion.div
                key={f.n}
                variants={fadeUpItem}
                className="grid grid-cols-[2.5rem_1fr] gap-x-6 gap-y-3 py-10 sm:grid-cols-[4rem_14rem_1fr] sm:items-baseline sm:gap-x-10"
              >
                <span className="text-sm font-semibold tabular-nums text-[#0A0A0A]/40">{f.n}</span>
                <h3 className="text-xl font-medium tracking-tight sm:text-2xl">{f.title}</h3>
                <p className="col-span-2 max-w-lg text-[15px] leading-relaxed text-[#0A0A0A]/65 sm:col-span-1">
                  {f.body}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 02 — Process (inverted, flat) */}
      <section id="process" className="border-b border-[#D8D6D0] bg-[#0A0A0A] text-[#FAFAF7]">
        <div className="mx-auto max-w-[1440px] px-6 py-24 sm:px-10 sm:py-32 lg:px-16">
          <Reveal>
            <SectionKicker n="02" title="Process" tone="dark" />
            <p className="mt-4 max-w-md text-sm leading-relaxed text-[#FAFAF7]/60">
              From file to breakdown, in four steps.
            </p>
          </Reveal>

          <motion.div
            className="mt-16 grid grid-cols-1 divide-y divide-[#FAFAF7]/15 sm:grid-cols-2 sm:divide-y-0 sm:divide-x lg:grid-cols-4"
            variants={staggerContainer(0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
          >
            {steps.map((s) => (
              <motion.div key={s.n} variants={fadeUpItem} className="py-10 sm:px-8 sm:py-0 sm:first:pl-0">
                <p className="text-5xl font-normal tabular-nums text-[#FAFAF7]/30">{s.n}</p>
                <h3 className="mt-4 text-lg font-medium tracking-tight">{s.title}</h3>
                <p className="mt-2 max-w-[26ch] text-sm leading-relaxed text-[#FAFAF7]/60">{s.body}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 03 — Sample */}
      <section id="sample" className="border-b border-[#D8D6D0]">
        <div className="mx-auto max-w-[1440px] px-6 py-24 sm:px-10 sm:py-32 lg:px-16">
          <Reveal>
            <SectionKicker n="03" title="Sample" />
            <p className="mt-4 max-w-md text-sm leading-relaxed text-[#0A0A0A]/60">
              One excerpt. Three outputs. This is what a page of Ratio Reader looks like.
            </p>
          </Reveal>

          <Reveal delay={0.1} className="mt-16 border border-[#D8D6D0] p-8 sm:p-12">
            <p className="text-xs font-semibold tracking-[0.3em] text-[#0A0A0A]/40 uppercase">
              Source — North Atlantic Fisheries Review, Section 4.2
            </p>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-[#0A0A0A]/80">
              "Cod biomass in the Grand Banks region has increased 34% since the 2019 moratorium extension, though
              recovery remains uneven across sub-populations. Juvenile survival rates correlate more strongly with
              prey availability than with water temperature, contradicting three of the five predictive models used
              in the 2015 assessment. Current harvest quotas, set under the older models, may be miscalibrated by as
              much as 12% in either direction."
            </p>
          </Reveal>

          <div className="grid grid-cols-1 divide-y divide-[#D8D6D0] border border-t-0 border-[#D8D6D0] sm:grid-cols-3 sm:divide-y-0 sm:divide-x">
            <Reveal delay={0.15} className="p-8 sm:p-10">
              <p className="text-xs font-semibold tracking-[0.3em] text-[#0A0A0A]/40 uppercase">Summary</p>
              <p className="mt-4 text-[15px] leading-relaxed text-[#0A0A0A]/80">
                Cod stocks are recovering, but the models used to set quotas are outdated — current limits could be
                off by up to 12%.
              </p>
            </Reveal>
            <Reveal delay={0.2} className="p-8 sm:p-10">
              <p className="text-xs font-semibold tracking-[0.3em] text-[#0A0A0A]/40 uppercase">Key Quote</p>
              <p className="mt-4 text-[15px] leading-relaxed text-[#0A0A0A]/80">
                "Juvenile survival rates correlate more strongly with prey availability than with water temperature,
                contradicting three of the five predictive models used in the 2015 assessment."
              </p>
            </Reveal>
            <Reveal delay={0.25} className="p-8 sm:p-10">
              <p className="text-xs font-semibold tracking-[0.3em] text-[#0A0A0A]/40 uppercase">Insight</p>
              <p className="mt-4 text-[15px] leading-relaxed text-[#0A0A0A]/80">
                Recalibrating quotas to prey-based models, rather than temperature-based ones, could accelerate
                recovery — if regulators act before the next assessment cycle.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 04 — Proof */}
      <section id="proof" className="border-b border-[#D8D6D0]">
        <div className="mx-auto max-w-[1440px] px-6 py-24 sm:px-10 sm:py-32 lg:px-16">
          <Reveal>
            <SectionKicker n="04" title="Proof" />
          </Reveal>

          <motion.div
            className="mt-16 grid grid-cols-1 divide-y divide-[#D8D6D0] border-y border-[#D8D6D0] sm:grid-cols-3 sm:divide-y-0 sm:divide-x"
            variants={staggerContainer(0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
          >
            {stats.map((s) => (
              <motion.div key={s.label} variants={fadeUpItem} className="py-10 sm:px-10 sm:py-14 sm:first:pl-0">
                <p className="text-6xl font-normal tracking-tight tabular-nums sm:text-7xl">{s.value}</p>
                <p className="mt-4 max-w-[24ch] text-sm leading-relaxed text-[#0A0A0A]/60">{s.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 05 — Start */}
      <section id="start">
        <div className="mx-auto max-w-[1440px] px-6 py-24 sm:px-10 sm:py-32 lg:px-16">
          <Reveal>
            <span className="text-xs font-semibold tracking-[0.3em] text-[#0A0A0A]/40 tabular-nums uppercase">05 — Start</span>
            <h2 className="mt-4 max-w-3xl text-4xl leading-[1.05] font-normal tracking-tight sm:text-6xl">
              Start with one PDF.
            </h2>
            <p className="mt-6 max-w-md text-[15px] leading-relaxed text-[#0A0A0A]/65">
              No account required for your first read. Upload a document and see its ratio in seconds.
            </p>
            <UploadButton className="mt-10 px-7 py-4 text-sm" />
          </Reveal>
        </div>
      </section>

      <footer className="border-t border-[#D8D6D0]">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-8 px-6 py-12 sm:flex-row sm:items-end sm:justify-between sm:px-10 lg:px-16">
          <div>
            <p className="text-sm font-medium tracking-tight">Ratio / Reader</p>
            <p className="mt-1 text-xs text-[#0A0A0A]/50">Reading, distilled to its ratio. φ 1.618</p>
          </div>
          <nav aria-label="Section" className="flex flex-wrap gap-x-8 gap-y-3 text-xs font-semibold tracking-[0.2em] text-[#0A0A0A]/50 uppercase">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} className="transition-colors hover:text-[#0A0A0A]">
                {l.label}
              </a>
            ))}
          </nav>
          <p className="text-xs text-[#0A0A0A]/40">© 2026</p>
        </div>
      </footer>
    </main>
  );
}
