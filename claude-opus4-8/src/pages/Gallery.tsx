import { Link } from "react-router-dom";
import { motion } from "motion/react";

type Entry = {
  no: string;
  to: string;
  name: string;
  tag: string;
  blurb: string;
  swatches: string[];
};

const ENTRIES: Entry[] = [
  {
    no: "01",
    to: "/1",
    name: "The Marginalia",
    tag: "Editorial · Literary",
    blurb: "A reading room set in type — warm paper, deep ink, the quiet confidence of print.",
    swatches: ["#f3ead7", "#1c1813", "#b23a26"],
  },
  {
    no: "02",
    to: "/2",
    name: "Reading Engine",
    tag: "Computational · Terminal",
    blurb: "The machine that thinks while you read. Phosphor glow, live readouts, pure signal.",
    swatches: ["#07090b", "#5ef39b", "#1d6b6b"],
  },
  {
    no: "03",
    to: "/3",
    name: "Slow Light",
    tag: "Organic · Calm",
    blurb: "Reading as restoration. Soft botanical forms, generous air, an unhurried pace.",
    swatches: ["#f1ece1", "#7c8a6b", "#c97f5a"],
  },
  {
    no: "04",
    to: "/4",
    name: "LESS / MORE",
    tag: "Brutalist · Maximal",
    blurb: "Loud, raw, unmissable. Oversized type and acid light that refuse to whisper.",
    swatches: ["#0a0a0a", "#ffffff", "#d8f000"],
  },
  {
    no: "05",
    to: "/5",
    name: "Aurelia",
    tag: "Luxury · Cinematic",
    blurb: "Intelligence as a luxury object. Midnight, champagne gold, and aurora light.",
    swatches: ["#0b0a14", "#e4c179", "#7b6bd8"],
  },
];

export function Gallery() {
  return (
    <div
      className="relative min-h-screen overflow-hidden bg-[#100e0a] font-manrope text-[#efe7d6] antialiased"
      style={{
        backgroundImage:
          "radial-gradient(120% 90% at 80% -10%, rgba(228,193,121,0.10), transparent 55%), radial-gradient(90% 70% at 0% 110%, rgba(123,107,216,0.10), transparent 55%)",
      }}
    >
      {/* grain */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-50 opacity-[0.04] mix-blend-soft-light"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />

      <div className="mx-auto flex min-h-screen max-w-6xl flex-col px-6 py-10 md:px-10 md:py-14">
        {/* top bar */}
        <header className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="grid h-9 w-9 place-items-center rounded-full border border-[#e4c179]/40">
              <span className="flex flex-col gap-[3px]">
                <span className="block h-[2px] w-4 bg-[#e4c179]" />
                <span className="block h-[2px] w-3 bg-[#e4c179]/70" />
                <span className="block h-[2px] w-4 bg-[#e4c179]/40" />
              </span>
            </span>
            <span className="text-[13px] font-semibold uppercase tracking-[0.32em] text-[#e4c179]">
              Ratio&nbsp;Reader
            </span>
          </div>
          <span className="hidden text-[12px] uppercase tracking-[0.28em] text-[#efe7d6]/45 sm:block">
            Marketing site · 5 concepts
          </span>
        </header>

        {/* hero */}
        <div className="flex flex-1 flex-col justify-center py-16 md:py-24">
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="mb-6 max-w-xl text-[13px] uppercase tracking-[0.3em] text-[#efe7d6]/50"
          >
            Upload a PDF — get the essence
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1], delay: 0.05 }}
            className="font-fraunces text-[clamp(2.6rem,7vw,5.6rem)] font-light leading-[0.98] tracking-[-0.02em]"
            style={{ fontOpticalSizing: "auto" }}
          >
            Five ways to see
            <br />
            <span className="italic text-[#e4c179]">the same idea.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
            className="mt-7 max-w-xl text-[15px] leading-relaxed text-[#efe7d6]/65"
          >
            Ratio Reader turns dense documents into summaries, hints, quotes and
            insights — so you understand more in less time. Below are five
            complete landing-page visions for the same product. Each is a fully
            distinct world. Step inside.
          </motion.p>
        </div>

        {/* list */}
        <nav className="border-t border-[#efe7d6]/12">
          {ENTRIES.map((e, i) => (
            <motion.div
              key={e.to}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                ease: [0.16, 1, 0.3, 1],
                delay: 0.25 + i * 0.08,
              }}
            >
              <Link
                to={e.to}
                className="group relative flex items-center gap-5 border-b border-[#efe7d6]/12 py-6 transition-colors duration-500 hover:bg-[#efe7d6]/[0.03] md:gap-8 md:py-8"
              >
                {/* hover wash */}
                <span className="pointer-events-none absolute inset-0 origin-left scale-x-0 bg-gradient-to-r from-[#e4c179]/[0.06] to-transparent transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100" />
                <span className="relative font-jetbrains text-[12px] tabular-nums text-[#efe7d6]/40 md:text-[13px]">
                  {e.no}
                </span>
                <div className="relative flex-1">
                  <div className="flex items-baseline gap-4">
                    <h2 className="font-fraunces text-2xl font-normal tracking-[-0.01em] transition-transform duration-500 group-hover:translate-x-1 md:text-4xl">
                      {e.name}
                    </h2>
                    <span className="hidden text-[11px] uppercase tracking-[0.26em] text-[#e4c179]/70 sm:block">
                      {e.tag}
                    </span>
                  </div>
                  <p className="mt-2 max-w-xl text-[13px] leading-relaxed text-[#efe7d6]/55 md:text-[14px]">
                    {e.blurb}
                  </p>
                </div>
                {/* palette */}
                <div className="relative hidden items-center gap-1.5 md:flex">
                  {e.swatches.map((c, j) => (
                    <span
                      key={j}
                      className="h-6 w-6 rounded-full ring-1 ring-white/10 transition-transform duration-500 group-hover:scale-110"
                      style={{ backgroundColor: c, transitionDelay: `${j * 40}ms` }}
                    />
                  ))}
                </div>
                <span className="relative font-jetbrains text-lg text-[#efe7d6]/40 transition-all duration-500 group-hover:translate-x-1 group-hover:text-[#e4c179]">
                  →
                </span>
              </Link>
            </motion.div>
          ))}
        </nav>

        {/* footer */}
        <footer className="mt-10 flex flex-col gap-2 text-[12px] text-[#efe7d6]/35 sm:flex-row sm:items-center sm:justify-between">
          <span className="uppercase tracking-[0.26em]">
            © Ratio Reader — concept studies
          </span>
          <span className="font-jetbrains">routes /1 → /5</span>
        </footer>
      </div>
    </div>
  );
}
