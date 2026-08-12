import "@fontsource-variable/space-grotesk";
import "@fontsource-variable/fraunces";
import { Link } from "react-router-dom";
import { motion } from "motion/react";

const designs = [
  {
    n: "01",
    name: "The Broadside",
    desc: "Editorial print — ink on paper, marginalia & the news of your reading",
    href: "/1",
    swatch: "#f4efe4",
    ink: "#1a1712",
    accent: "#c83e2e",
  },
  {
    n: "02",
    name: "The Extractor",
    desc: "Brutalist terminal — hex dumps, ratios & signal mined from noise",
    href: "/2",
    swatch: "#0b0d0f",
    ink: "#d7ffe0",
    accent: "#7dff9b",
  },
  {
    n: "03",
    name: "The Zine",
    desc: "Swiss loudspeaker — stickers, halftones & unapologetic ink",
    href: "/3",
    swatch: "#ffffff",
    ink: "#111111",
    accent: "#ff3b30",
  },
  {
    n: "04",
    name: "The Still",
    desc: "Soft glass — pastel gradients, calm air & effortless focus",
    href: "/4",
    swatch: "#eef1f8",
    ink: "#2b2f45",
    accent: "#8b7cf6",
  },
  {
    n: "05",
    name: "The Library",
    desc: "Dark academia — candlelight, serifs & distilled thought",
    href: "/5",
    swatch: "#0d1019",
    ink: "#efe4c9",
    accent: "#d4a853",
  },
];

export function Gallery() {
  return (
    <div className="min-h-screen bg-[#101113] text-[#f2ede4] font-[Space_Grotesk_Variable]">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <motion.header
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-sm uppercase tracking-[0.35em] text-[#f2ede4]/50">
            Ratio Reader — design study
          </p>
          <h1 className="mt-6 max-w-3xl text-5xl font-medium leading-[1.02] tracking-tight md:text-7xl font-[Fraunces_Variable]">
            Five ways to say
            <em className="text-[#e8c05a]"> “read less, know more.”</em>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-[#f2ede4]/60">
            One product, five temperaments. Pick a door.
          </p>
        </motion.header>

        <div className="mt-16 grid gap-4 md:grid-cols-2">
          {designs.map((d, i) => (
            <motion.div
              key={d.n}
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link
                to={d.href}
                className="group relative block overflow-hidden rounded-2xl border border-white/10 p-6 transition-colors duration-300 hover:border-white/30"
                style={{ background: d.swatch, color: d.ink }}
              >
                <div className="flex items-start justify-between">
                  <span
                    className="text-5xl font-semibold tracking-tight"
                    style={{ color: d.ink, opacity: 0.25 }}
                  >
                    {d.n}
                  </span>
                  <span
                    className="h-4 w-4 rounded-full transition-transform duration-300 group-hover:scale-125"
                    style={{ background: d.accent }}
                  />
                </div>
                <h2
                  className="mt-10 text-3xl font-semibold tracking-tight"
                  style={{ fontFamily: "Fraunces Variable" }}
                >
                  {d.name}
                </h2>
                <p className="mt-2 max-w-sm text-sm leading-relaxed" style={{ color: d.ink, opacity: 0.6 }}>
                  {d.desc}
                </p>
                <div className="mt-8 flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em]">
                  <span style={{ color: d.accent }}>Open design</span>
                  <span
                    className="transition-transform duration-300 group-hover:translate-x-1.5"
                    style={{ color: d.accent }}
                  >
                    →
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.footer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-16 flex items-center justify-between border-t border-white/10 pt-6 text-xs uppercase tracking-[0.25em] text-[#f2ede4]/40"
        >
          <span>Ratio Reader</span>
          <span>Built with React + Tailwind</span>
        </motion.footer>
      </div>
    </div>
  );
}
