import "@fontsource/archivo-black";
import "@fontsource-variable/space-grotesk";
import { motion } from "motion/react";

const RED = "#ff3b30";
const BLUE = "#2b5cff";
const YELLOW = "#ffd500";
const INK = "#111111";

const stroke = (color: string, w = 2) => ({ WebkitTextStroke: `${w}px ${color}`, color: "transparent" });

function Sticker({ children, className = "", bg = YELLOW, fg = INK, rotate = -3 }: { children: React.ReactNode; className?: string; bg?: string; fg?: string; rotate?: number }) {
  return (
    <span
      className={`inline-block rotate-[var(--r)] border-2 border-[#111111] px-4 py-1.5 text-xs font-bold uppercase tracking-[0.15em] ${className}`}
      style={{ background: bg, color: fg, boxShadow: "4px 4px 0 #111111", ["--r" as string]: `${rotate}deg` }}
    >
      {children}
    </span>
  );
}

const features = [
  {
    n: "01",
    bg: YELLOW,
    title: "SUMMARIES",
    sub: "the whole point, compressed",
    body: "Your PDF, wrung out. We keep the thesis, the stakes, the conclusions — and leave the padding on the cutting room floor.",
    sticker: "214 pages → 3 paragraphs",
    rotate: -1.5,
  },
  {
    n: "02",
    bg: "#7de2d1",
    title: "HINTS",
    sub: "a tutor in your margins",
    body: "Little neon flags on the sentences that matter later. The ones that unlock chapters. The ones that look innocent and aren't.",
    sticker: "47 flags per doc",
    rotate: 1.2,
  },
  {
    n: "03",
    bg: "#ffb3c1",
    title: "QUOTES",
    sub: "the author, verbatim",
    body: "No paraphrase laundering. The exact lines that carry the argument, lifted clean — so you can cite like you read it. You did.",
    sticker: "100% the author's words",
    rotate: -1,
  },
  {
    n: "04",
    bg: "#c9d6ff",
    title: "INSIGHTS",
    sub: "why any of it matters",
    body: "The bit everyone else skips. Where the text sits in its field, who it answers, what it sets up. Context, free of charge.",
    sticker: "context included",
    rotate: 1.5,
  },
];

export function DesignThree() {
  return (
    <div className="min-h-screen bg-white font-[Archivo_Black] text-[#111111]">
      <div className="pointer-events-none fixed inset-3 z-50 border-2 border-[#111111]" />

      {/* nav */}
      <header className="sticky top-0 z-40 border-b-2 border-[#111111] bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <a href="#top" className="flex items-center gap-2 text-xl font-black uppercase tracking-tight">
            Ratio<span className="inline-block rotate-12 text-[#ff3b30]">✺</span>Reader
          </a>
          <nav className="hidden gap-6 text-xs font-bold uppercase tracking-[0.15em] md:flex">
            {["Summaries", "Hints", "Quotes", "Insights"].map((s, i) => (
              <a key={s} href="#grid" className="border-b-4 border-transparent pb-1 transition-colors hover:border-[#111111]" style={{ color: [RED, BLUE, "#111111", "#2b5cff"][i] }}>
                {s}
              </a>
            ))}
          </nav>
          <a href="#cta" className="border-2 border-[#111111] bg-[#ffd500] px-4 py-2 text-xs font-bold uppercase tracking-[0.15em] shadow-[3px_3px_0_#111111] transition-transform hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[5px_5px_0_#111111]">
            Upload PDF
          </a>
        </div>
      </header>

      {/* hero */}
      <section className="relative overflow-hidden">
        <div className="halftone absolute right-0 top-10 h-72 w-72 text-[#ff3b30] opacity-25 md:h-96 md:w-96" />
        <div className="halftone absolute -left-10 bottom-24 h-56 w-56 text-[#2b5cff] opacity-20" />
        <div className="mx-auto max-w-6xl px-5 pb-16 pt-14 md:pb-24 md:pt-20">
          <motion.div
            initial={{ opacity: 0, rotate: -6, scale: 0.8 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 16, delay: 0.1 }}
            className="flex flex-wrap items-center gap-3"
          >
            <Sticker bg={RED} fg="#fff" rotate={-2}>Est. 2026</Sticker>
            <Sticker bg={BLUE} fg="#fff" rotate={2}>The anti-skim app</Sticker>
            <Sticker bg={YELLOW} rotate={-4}>Works on any PDF</Sticker>
          </motion.div>

          <h1 className="mt-10 text-[13vw] font-black leading-[0.88] tracking-tight md:text-[8.5rem]">
            <motion.span className="block" initial={{ x: -60, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}>
              READ LESS.
            </motion.span>
            <motion.span className="block" initial={{ x: 60, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}>
              <span style={stroke(INK, 2)}>KNOW</span>{" "}
              <span className="relative inline-block text-[#ff3b30]">
                MORE.
                <svg viewBox="0 0 220 24" className="absolute -bottom-2 left-0 w-full" fill="none">
                  <motion.path
                    d="M4 16 C 60 6, 140 22, 216 10"
                    stroke="#2b5cff"
                    strokeWidth="6"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.7, delay: 0.8 }}
                  />
                </svg>
              </span>
            </motion.span>
          </h1>

          <div className="mt-10 grid gap-8 md:grid-cols-2 md:items-end">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="max-w-md font-[Space_Grotesk_Variable] text-lg font-medium leading-relaxed"
            >
              Your PDF is <span className="border-b-4 border-[#ffd500]">boring</span>. Let's fix that.
              Ratio Reader chews up the document, keeps the good parts, and hands you back a
              digest with hints, quotes, and insights. <span className="font-bold">The ratio: 12.4 to 1.</span>
            </motion.p>
            <motion.div
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", stiffness: 180, damping: 14, delay: 0.6 }}
              className="justify-self-end"
            >
              <div className="rotate-2 border-2 border-[#111111] bg-[#111111] p-5 text-white shadow-[10px_10px_0_#ff3b30]">
                <p className="text-[10px] uppercase tracking-[0.3em] text-white/50">The ratio</p>
                <p className="mt-1 text-6xl text-[#ffd500]">12.4 : 1</p>
                <p className="mt-1 text-xs uppercase tracking-[0.2em] text-white/70">pages in → minutes out</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* marquee */}
      <div className="overflow-hidden border-y-4 border-[#111111] bg-[#2b5cff] py-3">
        <div className="animate-marquee flex w-max gap-6 whitespace-nowrap text-sm font-black uppercase tracking-[0.2em] text-white" style={{ ["--marquee-duration" as string]: "20s" }}>
          {Array.from({ length: 2 }).flatMap((_, k) =>
            ["Summaries", "Hints", "Quotes", "Insights", "No fluff", "All signal"].map((s) => (
              <span key={`${k}-${s}`} className="flex items-center gap-6">
                {s} <span className="text-[#ffd500]">✦</span>
              </span>
            )),
          )}
        </div>
      </div>

      {/* before / after */}
      <section className="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <div className="grid gap-8 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rotate-[-1.5deg] border-2 border-[#111111] bg-[#e8e6e1] p-7 shadow-[8px_8px_0_#111111]"
          >
            <div className="flex items-center justify-between">
              <Sticker bg="#b9b6ae" rotate={-2}>Before</Sticker>
              <span className="text-3xl">😴</span>
            </div>
            <h3 className="mt-6 text-2xl font-black uppercase">214 pages of dense prose</h3>
            <div className="mt-4 space-y-2">
              {[92, 78, 100, 64, 88, 71].map((w, i) => (
                <div key={i} className="h-2.5 bg-[#b9b6ae]" style={{ width: `${w}%` }} />
              ))}
            </div>
            <p className="mt-5 font-[Space_Grotesk_Variable] text-sm font-medium text-[#111111]/60">
              Estimated read: 3 hours 12 minutes. Attention available: 9 minutes. Uh oh.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="rotate-[1.5deg] border-2 border-[#111111] bg-[#ffd500] p-7 shadow-[8px_8px_0_#111111]"
          >
            <div className="flex items-center justify-between">
              <Sticker bg="#111111" fg="#fff" rotate={2}>After</Sticker>
              <span className="text-3xl">🤓</span>
            </div>
            <h3 className="mt-6 text-2xl font-black uppercase">One page of pure signal</h3>
            <ul className="mt-4 space-y-2 font-[Space_Grotesk_Variable] text-sm font-bold">
              {[
                ["Summary", "3 paragraphs — the spine"],
                ["Hints", "47 load-bearing sentences"],
                ["Quotes", "12, the author verbatim"],
                ["Insights", "9 — why it matters"],
              ].map(([k, v]) => (
                <li key={k} className="flex items-center gap-2 border-b-2 border-[#111111]/20 pb-2">
                  <span className="border-2 border-[#111111] bg-white px-2 py-0.5 text-[10px] uppercase">{k}</span>
                  {v}
                </li>
              ))}
            </ul>
            <p className="mt-5 font-[Space_Grotesk_Variable] text-sm font-bold">Read time: 9 minutes. Feel: unstoppable.</p>
          </motion.div>
        </div>
      </section>

      {/* feature grid */}
      <section id="grid" className="bg-[#f3f1ea] py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-5">
          <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
            <h2 className="text-5xl font-black uppercase leading-[0.95] tracking-tight md:text-7xl">
              Four tools.
              <br />
              <span style={stroke(INK, 2)}>Zero</span> fluff.
            </h2>
            <Sticker bg={RED} fg="#fff" rotate={3}>Guaranteed 0% waffle</Sticker>
          </div>

          <div className="grid gap-8 sm:grid-cols-2">
            {features.map((f, i) => (
              <motion.article
                key={f.n}
                initial={{ opacity: 0, y: 40, rotate: 0 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ type: "spring", stiffness: 120, damping: 14, delay: i * 0.08 }}
                className="relative border-2 border-[#111111] p-7 shadow-[10px_10px_0_#111111]"
                style={{ background: f.bg, transform: `rotate(${f.rotate}deg)` }}
              >
                <div className="halftone pointer-events-none absolute right-4 top-4 h-16 w-16 text-[#111111] opacity-15" />
                <div className="flex items-start justify-between">
                  <span className="text-6xl" style={stroke(INK, 2)}>{f.n}</span>
                  <span className="mt-1 inline-block rotate-6 border-2 border-[#111111] bg-white px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.15em]">
                    {f.sticker}
                  </span>
                </div>
                <h3 className="mt-5 text-3xl font-black uppercase">{f.title}</h3>
                <p className="mt-1 text-xs font-bold uppercase tracking-[0.2em] text-[#111111]/60">{f.sub}</p>
                <p className="mt-4 font-[Space_Grotesk_Variable] text-sm font-medium leading-relaxed">{f.body}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* stats */}
      <section className="border-t-4 border-[#111111] bg-[#ff3b30] py-14 text-white">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-5 text-center md:grid-cols-4">
          {[
            ["4,211", "PDFs digested this week"],
            ["12.4:1", "average compression"],
            ["3.1×", "retention vs. skimming"],
            ["0%", "fluff survived"],
          ].map(([v, d], i) => (
            <motion.div
              key={d}
              initial={{ opacity: 0, scale: 0.7 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 200, damping: 15, delay: i * 0.07 }}
            >
              <p className="text-4xl font-black md:text-6xl">{v}</p>
              <p className="mt-2 text-[11px] font-bold uppercase tracking-[0.2em] text-white/70">{d}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section id="cta" className="mx-auto max-w-6xl px-5 py-20 text-center md:py-28">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs font-bold uppercase tracking-[0.35em] text-[#111111]/50">Stop reading the boring way</p>
          <h2 className="mt-4 text-5xl font-black uppercase leading-[0.95] tracking-tight md:text-8xl">
            Upload. <span className="text-[#2b5cff]">Digest.</span> Win.
          </h2>
          <div className="mt-10 flex justify-center">
            <motion.a
              href="#top"
              whileHover={{ scale: 1.06, rotate: -1 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-[#111111] bg-[#ffd500] px-12 py-6 text-lg font-black uppercase tracking-[0.1em] shadow-[10px_10px_0_#111111]"
            >
              Upload your PDF →
            </motion.a>
          </div>
          <p className="mt-8 font-[Space_Grotesk_Variable] text-sm font-medium text-[#111111]/60">
            Free for your first document. After that, you'll be too busy reading to care.
          </p>
        </motion.div>
      </section>

      {/* footer */}
      <footer className="border-t-4 border-[#111111] bg-[#111111] py-8 text-white">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-5 text-[10px] font-bold uppercase tracking-[0.25em] text-white/50">
          <span>Ratio✺Reader — MMXXVI</span>
          <span>Made with too much coffee, not enough skimming</span>
          <span>All signal, no filler</span>
        </div>
      </footer>
    </div>
  );
}
