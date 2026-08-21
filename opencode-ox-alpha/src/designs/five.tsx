import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";

const INK = "#111111";
const BLUE = "#2e45ff";
const HAIR = "#e4e4e0";

function Cross({ className = "" }: { className?: string }) {
  return (
    <span
      aria-hidden
      className={`pointer-events-none absolute font-inter-tight text-lg leading-none select-none ${className}`}
      style={{ color: "#c9c9c4" }}
    >
      +
    </span>
  );
}

function SectionLabel({ n, title }: { n: string; title: string }) {
  return (
    <div className="flex items-baseline justify-between border-b pb-3" style={{ borderColor: INK }}>
      <p className="font-inter-tight text-[11px] font-semibold tracking-[0.3em] uppercase" style={{ color: "#8a8a85" }}>
        {n} — {title}
      </p>
      <span className="font-inter-tight text-[11px] tracking-[0.3em] uppercase" style={{ color: "#b8b8b2" }}>
        RR/2026
      </span>
    </div>
  );
}

function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b" style={{ borderColor: HAIR, background: "rgba(250,250,248,0.88)", backdropFilter: "blur(12px)" }}>
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link to="/5" className="flex items-baseline gap-2">
          <span className="font-inter-tight text-[15px] font-bold tracking-tight" style={{ color: INK }}>
            RATIO READER
          </span>
          <sup className="font-inter-tight text-[10px] font-medium" style={{ color: BLUE }}>
            ®
          </sup>
        </Link>
        <div className="hidden items-center gap-8 font-inter-tight text-[11px] font-medium tracking-[0.22em] uppercase md:flex" style={{ color: "#6b6b66" }}>
          <a href="#method" className="transition-colors hover:text-[#2e45ff]">Method</a>
          <a href="#capabilities" className="transition-colors hover:text-[#2e45ff]">Capabilities</a>
          <a href="#evidence" className="transition-colors hover:text-[#2e45ff]">Evidence</a>
          <a href="#principles" className="transition-colors hover:text-[#2e45ff]">Principles</a>
        </div>
        <a
          href="#access"
          className="border px-4 py-2 font-inter-tight text-[11px] font-semibold tracking-[0.22em] uppercase transition-colors"
          style={{ borderColor: INK, color: INK }}
          onMouseEnter={(e) => (e.currentTarget.style.background = INK, e.currentTarget.style.color = "#fff")}
          onMouseLeave={(e) => (e.currentTarget.style.background = "transparent", e.currentTarget.style.color = INK)}
        >
          Request access
        </a>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative px-6 pt-20 pb-16 sm:pt-28">
      <Cross className="top-16 left-6" />
      <Cross className="top-16 right-6" />
      <div className="mx-auto max-w-6xl">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="font-inter-tight text-[11px] font-semibold tracking-[0.35em] uppercase"
          style={{ color: BLUE }}
        >
          Instrument Nº 001 — for the over-read
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 font-inter-tight text-[13.5vw] leading-[0.94] font-semibold tracking-[-0.04em] sm:text-8xl lg:text-[7.25rem]"
          style={{ color: INK }}
        >
          Reading,
          <br />
          <span className="relative inline-block">
            compressed
            <motion.span
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.7, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="absolute top-[54%] right-0 left-0 h-[0.09em] origin-left"
              style={{ background: BLUE }}
            />
            <span className="absolute -bottom-[0.08em] right-0 font-inter-tight text-[0.32em] font-medium tracking-normal" style={{ color: BLUE }}>
              ↓ to the ratio you choose
            </span>
          </span>
          .
        </motion.h1>
        <div className="mt-14 grid gap-10 md:grid-cols-12">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="max-w-md font-inter text-lg leading-relaxed md:col-span-6"
            style={{ color: "#4c4c47" }}
          >
            Upload a PDF. Ratio Reader returns its essence — a summary, the
            quotes worth keeping, hints for the difficult parts — at exactly
            the compression you ask for. Read ten percent of the pages.
            Understand all of the point.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="flex items-end md:col-span-6 md:justify-end"
          >
            <div className="flex gap-3">
              <a
                href="#compressor"
                className="px-7 py-4 font-inter-tight text-[12px] font-semibold tracking-[0.2em] uppercase text-white transition-opacity hover:opacity-85"
                style={{ background: INK }}
              >
                Try the compressor ↓
              </a>
              <a
                href="#method"
                className="border px-7 py-4 font-inter-tight text-[12px] font-semibold tracking-[0.2em] uppercase transition-colors hover:bg-black hover:text-white"
                style={{ borderColor: INK, color: INK }}
              >
                The method
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Compressor() {
  const [ratio, setRatio] = useState(15);
  const paragraphs = useMemo(
    () => [
      { full: "The 2025 field survey covers 2,400 respondents across 11 markets, establishing baseline adoption metrics for asynchronous reading tools in enterprise contexts.", keep: "Survey: 2,400 respondents, 11 markets — enterprise adoption baseline." },
      { full: "Notably, comprehension scores did not degrade with reduced page coverage when readers were given structured briefs with verbatim anchors, contradicting the intuition that brevity costs depth.", keep: "Comprehension holds with structured briefs + verbatim anchors." },
      { full: "The methodology section details a stratified sampling approach, though the absence of longitudinal follow-up limits causal claims beyond the six-month window studied.", keep: "Stratified sampling; no longitudinal follow-up — causal claims limited." },
      { full: "Economic modeling suggests organizations recover a median 6.1 hours per knowledge worker per week, with the effect concentrated in legal, consulting, and research functions.", keep: "Median 6.1 hrs/week recovered; strongest in legal & research." },
      { full: "The appendix reproduces all instruments, weighting procedures, and open-ended response codings for independent verification.", keep: "Appendix: full instruments & weights for verification." },
    ],
    [],
  );

  const keepCount = Math.max(1, Math.round((ratio / 100) * paragraphs.length));
  const stats = useMemo(() => {
    const pages = Math.max(1, Math.round(84 * (ratio / 100)));
    return {
      pages,
      minutes: Math.max(1, Math.round(pages * 1.9)),
      saved: Math.round(84 * (1 - ratio / 100) * 1.9),
    };
  }, [ratio]);

  return (
    <section id="compressor" className="relative px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <SectionLabel n="01" title="The compressor — interactive" />
        <div className="grid gap-px pt-10 md:grid-cols-12" style={{ background: HAIR }}>
          {/* controls */}
          <div className="flex flex-col justify-between gap-10 p-8 md:col-span-4" style={{ background: "#fafaf8" }}>
            <div>
              <p className="font-inter-tight text-[11px] font-semibold tracking-[0.3em] uppercase" style={{ color: "#8a8a85" }}>
                Set ratio
              </p>
              <p className="mt-4 font-inter-tight text-[5.5rem] leading-none font-semibold tracking-[-0.04em]" style={{ color: INK }}>
                {ratio}
                <span className="text-3xl" style={{ color: BLUE }}>%</span>
              </p>
              <input
                type="range"
                min={5}
                max={60}
                value={ratio}
                onChange={(e) => setRatio(Number(e.target.value))}
                className="mt-8 w-full accent-[#2e45ff]"
                aria-label="Compression ratio"
              />
              <div className="mt-2 flex justify-between font-inter-tight text-[10px] tracking-[0.2em] uppercase" style={{ color: "#b8b8b2" }}>
                <span>gist</span>
                <span>study</span>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-px" style={{ background: HAIR }}>
              {[
                { v: `${stats.pages}p`, l: "brief" },
                { v: `${stats.minutes}m`, l: "read" },
                { v: `${stats.saved}m`, l: "saved" },
              ].map((s) => (
                <div key={s.l} className="p-4 text-center" style={{ background: "#fafaf8" }}>
                  <p className="font-inter-tight text-xl font-semibold" style={{ color: BLUE }}>{s.v}</p>
                  <p className="mt-1 font-inter-tight text-[10px] tracking-[0.2em] uppercase" style={{ color: "#8a8a85" }}>{s.l}</p>
                </div>
              ))}
            </div>
          </div>

          {/* document */}
          <div className="p-8 md:col-span-8" style={{ background: "#ffffff" }}>
            <div className="flex items-center justify-between">
              <p className="font-inter-tight text-[11px] font-semibold tracking-[0.3em] uppercase" style={{ color: "#8a8a85" }}>
                field-survey-2025.pdf — 84 pages
              </p>
              <p className="font-inter-tight text-[11px] tracking-[0.2em] uppercase" style={{ color: BLUE }}>
                {ratio >= 45 ? "deep read" : ratio >= 20 ? "working read" : "essence"}
              </p>
            </div>
            <div className="mt-6 space-y-5">
              {paragraphs.map((p, i) => {
                const kept = i < keepCount;
                return (
                  <motion.div
                    key={i}
                    animate={{ opacity: 1 }}
                    className="relative"
                  >
                    <motion.p
                      animate={{ height: "auto", opacity: 1 }}
                      className="font-inter text-[13.5px] leading-relaxed transition-colors duration-300"
                      style={{ color: kept ? INK : "transparent" }}
                    >
                      {kept ? p.full : p.full}
                      <motion.span
                        aria-hidden
                        animate={{ opacity: kept ? 0 : 1 }}
                        transition={{ duration: 0.25 }}
                        className="absolute inset-0 font-inter text-[13.5px] leading-relaxed"
                        style={{ color: "#c9c9c4" }}
                      >
                        {p.full}
                      </motion.span>
                      <motion.span
                        aria-hidden
                        initial={false}
                        animate={{ opacity: kept ? 0 : 1, y: kept ? 8 : 0 }}
                        transition={{ duration: 0.3 }}
                        className={`absolute inset-0 font-inter-tight text-[14px] leading-relaxed font-medium ${kept ? "pointer-events-none" : ""}`}
                        style={{ color: BLUE }}
                      >
                        → {p.keep}
                      </motion.span>
                    </motion.p>
                  </motion.div>
                );
              })}
            </div>
            <div className="mt-8 flex items-center justify-between border-t pt-5" style={{ borderColor: HAIR }}>
              <p className="font-inter-tight text-[11px] tracking-[0.2em] uppercase" style={{ color: "#8a8a85" }}>
                {keepCount} of {paragraphs.length} passages retained
              </p>
              <p className="font-inter-tight text-[11px] tracking-[0.2em] uppercase" style={{ color: BLUE }}>
                quotes & hints attached →
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Method() {
  const steps = [
    { n: "01", t: "Ingest", d: "Any PDF to 800 pages. Layout, tables, footnotes parsed — not just raw text." },
    { n: "02", t: "Map", d: "The argument is reconstructed as a graph: claims, evidence, structure." },
    { n: "03", t: "Compress", d: "Passages ranked by necessity to the argument, not by position or volume." },
    { n: "04", t: "Annotate", d: "Quotes pinned verbatim; hints and insights attached where thinking is required." },
  ];
  return (
    <section id="method" className="relative px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <SectionLabel n="02" title="Method" />
        <div className="grid gap-px pt-10 md:grid-cols-4" style={{ background: HAIR }}>
          {steps.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative p-8 transition-colors duration-300 hover:bg-[#111] hover:text-white"
              style={{ background: "#fafaf8", color: INK }}
            >
              <p className="font-inter-tight text-[11px] tracking-[0.3em] uppercase transition-colors group-hover:text-white/60" style={{ color: "#b8b8b2" }}>
                {s.n}
              </p>
              <h3 className="mt-6 font-inter-tight text-2xl font-semibold tracking-tight">{s.t}</h3>
              <p className="mt-3 font-inter text-sm leading-relaxed transition-colors group-hover:text-white/70" style={{ color: "#5c5c57" }}>
                {s.d}
              </p>
              <span className="absolute right-6 bottom-6 h-2 w-2 rounded-full transition-colors group-hover:bg-[#2e45ff]" style={{ background: HAIR }} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Capabilities() {
  const cells = [
    { span: "md:col-span-3 md:row-span-2", big: true, n: "01", t: "Summaries that argue", d: "Not bullet mush. A structured brief preserving the document's actual reasoning — thesis, moves, conclusion. Tuned to your ratio.", accent: true },
    { span: "md:col-span-3", n: "02", t: "Verbatim quotes", d: "Word-perfect lines with page numbers. Cite without re-opening the PDF." },
    { span: "md:col-span-2", n: "03", t: "Critical hints", d: "Weak methods, buried assumptions, sections that deserve real eyes." },
    { span: "md:col-span-4", n: "04", t: "Cross-document insights", d: "Your library becomes a graph. New papers arrive pre-connected to what you already know." },
    { span: "md:col-span-2", n: "05", t: "40+ languages", d: "Briefs in your language, quotes in the original." },
    { span: "md:col-span-2", n: "06", t: "Export anywhere", d: "Markdown, Notion, BibTeX-ready annotations. Your notes, your system." },
  ];
  return (
    <section id="capabilities" className="relative px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <SectionLabel n="03" title="Capabilities" />
        <div className="mt-10 grid auto-rows-[minmax(150px,auto)] gap-px md:grid-cols-6" style={{ background: HAIR }}>
          {cells.map((c, i) => (
            <motion.div
              key={c.n}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className={`group relative flex flex-col justify-between p-8 transition-colors duration-300 hover:bg-[#111] ${c.span} ${c.big ? "min-h-[320px]" : "min-h-[190px]"}`}
              style={{ background: c.accent ? INK : "#fafaf8", color: c.accent ? "#fff" : INK }}
            >
              <div className="flex items-start justify-between">
                <p className="font-inter-tight text-[11px] tracking-[0.3em] uppercase" style={{ color: c.accent ? "#8888ff" : BLUE }}>
                  {c.n}
                </p>
                <span
                  className="h-2.5 w-2.5 rounded-full transition-transform duration-300 group-hover:scale-[1.8]"
                  style={{ background: c.accent ? "#2e45ff" : HAIR }}
                />
              </div>
              <div>
                <h3 className="font-inter-tight text-xl font-semibold tracking-tight sm:text-2xl">{c.t}</h3>
                <p
                  className="mt-2.5 max-w-md font-inter text-sm leading-relaxed"
                  style={{ color: c.accent ? "rgba(255,255,255,0.65)" : "#5c5c57" }}
                >
                  {c.d}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Evidence() {
  const metrics = [
    { v: "91%", l: "average compression", s: "with comprehension parity in user studies" },
    { v: "6.1h", l: "returned per week", s: "median across 2,400 knowledge workers" },
    { v: "1.4M", l: "pages distilled", s: "since public launch, and counting" },
    { v: "4.9/5", l: "reader rating", s: "from 12,000+ verified reviews" },
  ];
  return (
    <section id="evidence" className="relative px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <SectionLabel n="04" title="Evidence" />
        <div className="grid gap-px pt-10 sm:grid-cols-2 lg:grid-cols-4" style={{ background: HAIR }}>
          {metrics.map((m, i) => (
            <motion.div
              key={m.l}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="p-8"
              style={{ background: "#fafaf8" }}
            >
              <p className="font-inter-tight text-6xl font-semibold tracking-[-0.03em]" style={{ color: i === 0 ? BLUE : INK }}>
                {m.v}
              </p>
              <p className="mt-3 font-inter-tight text-[11px] font-semibold tracking-[0.25em] uppercase" style={{ color: INK }}>
                {m.l}
              </p>
              <p className="mt-1.5 font-inter text-[13px]" style={{ color: "#8a8a85" }}>
                {m.s}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Principles() {
  const items = [
    { n: "P.1", t: "Brevity is a format, not a loss." },
    { n: "P.2", t: "Never paraphrase a quotable line." },
    { n: "P.3", t: "Show the reader where the difficulty lives." },
    { n: "P.4", t: "The reader sets the ratio. Always." },
  ];
  return (
    <section id="principles" className="relative px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <SectionLabel n="05" title="Principles" />
        <div className="pt-10">
          {items.map((p, i) => (
            <motion.div
              key={p.n}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="group flex items-baseline justify-between gap-6 border-b py-7 transition-colors"
              style={{ borderColor: HAIR }}
            >
              <div className="flex items-baseline gap-8">
                <span className="font-inter-tight text-[11px] font-semibold tracking-[0.3em] uppercase" style={{ color: BLUE }}>
                  {p.n}
                </span>
                <h3 className="font-inter-tight text-2xl font-medium tracking-tight transition-transform duration-300 group-hover:translate-x-2 sm:text-4xl" style={{ color: INK }}>
                  {p.t}
                </h3>
              </div>
              <span className="hidden font-inter-tight text-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 sm:block" style={{ color: BLUE }}>
                →
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Access() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);
  return (
    <section id="access" className="relative px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <SectionLabel n="06" title="Access" />
        <a
          href="#access"
          onClick={(e) => e.preventDefault()}
          className="group mt-10 grid gap-px md:grid-cols-2"
          style={{ background: HAIR }}
        >
          <div className="p-10 transition-colors duration-300 group-hover:bg-[#111] md:p-14" style={{ background: INK }}>
            <p className="font-inter-tight text-[11px] font-semibold tracking-[0.3em] uppercase" style={{ color: "#8888ff" }}>
              Now enrolling — cohort 07
            </p>
            <h2 className="mt-6 font-inter-tight text-5xl leading-[0.98] font-semibold tracking-[-0.03em] text-white sm:text-6xl">
              Read 10%.
              <br />
              <span style={{ color: "#6d7dff" }}>Know 100%.</span>
            </h2>
            <p className="mt-6 max-w-sm font-inter leading-relaxed text-white/60">
              Three documents free, every month, forever. No card required —
              just a reading list you mean to finish.
            </p>
          </div>
          <div className="flex flex-col justify-center p-10 transition-colors duration-300 group-hover:bg-[#111] md:p-14" style={{ background: "#fafaf8" }}>
            {done ? (
              <p className="font-inter-tight text-2xl font-medium" style={{ color: BLUE }}>
                Position confirmed. Check your inbox. →
              </p>
            ) : (
              <form
                className="space-y-5"
                onSubmit={(e) => {
                  e.preventDefault();
                  if (email.trim()) setDone(true);
                }}
              >
                <label className="block font-inter-tight text-[11px] font-semibold tracking-[0.3em] uppercase" style={{ color: "#8a8a85" }}>
                  Email
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@studio.com"
                  className="w-full border-b bg-transparent pb-3 font-inter-tight text-2xl outline-none placeholder:text-[#c9c9c4]"
                  style={{ borderColor: INK, color: INK }}
                />
                <button
                  type="submit"
                  className="w-full py-4 font-inter-tight text-[12px] font-semibold tracking-[0.25em] uppercase text-white transition-opacity hover:opacity-85"
                  style={{ background: BLUE }}
                >
                  Request access
                </button>
                <p className="font-inter text-xs" style={{ color: "#8a8a85" }}>
                  Cohort 07 closes when the reading list does.
                </p>
              </form>
            )}
          </div>
        </a>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="relative px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 border-t pt-8 sm:flex-row sm:items-center" style={{ borderColor: INK }}>
        <p className="font-inter-tight text-[13px] font-semibold" style={{ color: INK }}>
          RATIO READER<sup style={{ color: BLUE }}>®</sup>
          <span className="ml-3 font-inter text-xs font-normal" style={{ color: "#8a8a85" }}>
            grid 72px · baseline 8px
          </span>
        </p>
        <p className="font-inter-tight text-[11px] tracking-[0.25em] uppercase" style={{ color: "#b8b8b2" }}>
          51.5072° N — set in Inter Tight
        </p>
        <Link to="/1" className="font-inter-tight text-[11px] font-semibold tracking-[0.25em] uppercase transition-colors hover:text-[#2e45ff]" style={{ color: "#6b6b66" }}>
          ↑ back to design 01
        </Link>
      </div>
    </footer>
  );
}

export function DesignFive() {
  useEffect(() => {
    document.title = "Ratio Reader — Grid";
  }, []);
  return (
    <div className="d5-grid-bg relative min-h-screen antialiased" style={{ background: "#fafaf8" }}>
      <Nav />
      <main>
        <Hero />
        <Compressor />
        <Method />
        <Capabilities />
        <Evidence />
        <Principles />
        <Access />
      </main>
      <Footer />
    </div>
  );
}
