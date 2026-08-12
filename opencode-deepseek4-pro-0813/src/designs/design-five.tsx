import "@fontsource-variable/playfair-display";
import "@fontsource-variable/fraunces";
import { motion } from "motion/react";

const GOLD = "#d4a853";

const stars = [
  [8, 12], [18, 5], [31, 9], [44, 3], [57, 11], [70, 6], [83, 13], [92, 4],
  [12, 28], [26, 22], [38, 31], [51, 25], [64, 29], [77, 21], [88, 33],
  [6, 48], [21, 44], [33, 52], [47, 46], [59, 53], [72, 44], [85, 51], [95, 47],
  [15, 66], [29, 62], [42, 71], [55, 65], [68, 73], [81, 63], [91, 70],
  [10, 84], [24, 79], [37, 87], [50, 82], [63, 89], [76, 81], [87, 86],
];

function Divider({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center gap-4 ${className}`}>
      <span className="h-px w-16 bg-gradient-to-r from-transparent to-[#d4a853]/60" />
      <span className="text-[#d4a853]">✦</span>
      <span className="h-px w-16 bg-gradient-to-l from-transparent to-[#d4a853]/60" />
    </div>
  );
}

const volumes = [
  {
    n: "I",
    title: "The Summary",
    sub: "De Arcanis Compressis",
    body: "The whole point of the work, distilled into a few faithful paragraphs — the thesis, the stakes, the conclusions, bound in order.",
  },
  {
    n: "II",
    title: "The Hints",
    sub: "In Marginibus",
    body: "Notes in the margin, where they have always belonged. Hints flag the load-bearing sentences — the ones that unlock all the rest.",
  },
  {
    n: "III",
    title: "The Quotes",
    sub: "Verba Ipsa",
    body: "The author's own words, preserved exactly. No paraphrase shall stand where the original is stronger.",
  },
  {
    n: "IV",
    title: "The Insights",
    sub: "Sensus Rerum",
    body: "The meaning beneath the argument — where the text sits in its field, what it answers, and what it quietly sets in motion.",
  },
];

export function DesignFive() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#0d1019] font-[Playfair_Display_Variable] text-[#efe4c9]">
      {/* night sky */}
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,#1a2130_0%,#0d1019_55%,#090b12_100%)]" />
        {stars.map(([x, y], i) => (
          <span
            key={i}
            className="absolute h-[2px] w-[2px] rounded-full"
            style={{
              left: `${x}%`,
              top: `${y}%`,
              background: GOLD,
              opacity: 0.12 + (i % 5) * 0.1,
              boxShadow: "0 0 6px rgba(212,168,83,0.6)",
            }}
          />
        ))}
      </div>

      <div className="relative">
        {/* nav */}
        <header className="border-b border-[#d4a853]/20">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5">
            <a href="#top" className="text-xs uppercase tracking-[0.4em] text-[#efe4c9]/60 transition-colors hover:text-[#d4a853]">
              Ratio Reader
            </a>
            <div className="flex items-center gap-6 text-[11px] uppercase tracking-[0.3em] text-[#efe4c9]/50">
              <a href="#volumes" className="hidden transition-colors hover:text-[#d4a853] sm:block">The Volumes</a>
              <a href="#ritual" className="hidden transition-colors hover:text-[#d4a853] sm:block">The Ritual</a>
              <span className="text-[#d4a853]/60">✦</span>
              <span className="text-[#efe4c9]/40">Est. MMXXVI</span>
            </div>
          </div>
        </header>

        {/* hero */}
        <section className="mx-auto max-w-5xl px-5 pb-20 pt-16 text-center md:pt-24">
          {/* astrolabe */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto mb-10 w-fit"
          >
            <motion.svg
              width="96"
              height="96"
              viewBox="0 0 96 96"
              fill="none"
              animate={{ rotate: 360 }}
              transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
              className="text-[#d4a853]"
            >
              <circle cx="48" cy="48" r="44" stroke="currentColor" strokeOpacity="0.5" />
              <circle cx="48" cy="48" r="34" stroke="currentColor" strokeOpacity="0.35" />
              <circle cx="48" cy="48" r="8" stroke="currentColor" />
              <path d="M48 4v20M48 72v20M4 48h20M72 48h20M16 16l14 14M66 66l14 14M80 16L66 30M30 66L16 80" stroke="currentColor" strokeOpacity="0.45" />
              <path d="M48 18 L56 48 L48 62 L40 48 Z" fill="currentColor" fillOpacity="0.8" />
            </motion.svg>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-[11px] uppercase tracking-[0.5em] text-[#d4a853]/80"
          >
            The Library of Extracted Thought
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto mt-8 max-w-4xl text-5xl font-medium leading-[1.08] tracking-tight md:text-7xl"
          >
            Every book, distilled to its{" "}
            <em className="bg-gradient-to-b from-[#eed9a4] via-[#d4a853] to-[#a87f35] bg-clip-text not-italic text-transparent">
              essence.
            </em>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="mx-auto mt-7 max-w-xl text-lg italic leading-relaxed text-[#efe4c9]/65"
          >
            Bring a document. Leave with its summary, its hints, its finest quotes, and its
            meaning — bound into a single page, at a ratio of twelve to one.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-11 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <a
              href="#ritual"
              className="border border-[#d4a853] bg-gradient-to-b from-[#e6c684] to-[#b98a3e] px-9 py-3.5 text-sm font-semibold uppercase tracking-[0.25em] text-[#0d1019] shadow-[0_0_40px_rgba(212,168,83,0.25)] transition-all hover:shadow-[0_0_60px_rgba(212,168,83,0.45)]"
            >
              Enter the library
            </a>
            <a href="#volumes" className="border border-[#d4a853]/40 px-9 py-3.5 text-sm uppercase tracking-[0.25em] text-[#efe4c9]/80 transition-colors hover:border-[#d4a853] hover:text-[#d4a853]">
              Browse the volumes
            </a>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9, duration: 1 }}>
            <Divider className="mt-14" />
          </motion.div>
        </section>

        {/* the four volumes */}
        <section id="volumes" className="mx-auto max-w-6xl px-5 py-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center"
          >
            <p className="text-[11px] uppercase tracking-[0.5em] text-[#d4a853]/80">The Four Volumes</p>
            <h2 className="mt-4 text-4xl font-medium tracking-tight md:text-5xl">What the digest contains</h2>
          </motion.div>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {volumes.map((v, i) => (
              <motion.article
                key={v.n}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="group relative border border-[#d4a853]/25 bg-gradient-to-b from-[#141a28] to-[#0f131d] p-8 transition-colors duration-500 hover:border-[#d4a853]/60 md:p-10"
              >
                <div className="pointer-events-none absolute inset-2 border border-[#d4a853]/15 transition-colors duration-500 group-hover:border-[#d4a853]/35" />
                <div className="relative">
                  <div className="flex items-baseline justify-between">
                    <span className="text-5xl font-medium text-[#d4a853]/50">Vol. {v.n}</span>
                    <span className="text-[10px] uppercase tracking-[0.35em] text-[#efe4c9]/40">{v.sub}</span>
                  </div>
                  <h3 className="mt-4 text-3xl font-medium tracking-tight text-[#f3e9d2]">{v.title}</h3>
                  <p className="mt-3 text-[15px] leading-7 text-[#efe4c9]/60">{v.body}</p>
                  <p className="mt-6 font-[Fraunces_Variable] text-sm italic text-[#d4a853]/70">
                    ✦ bound in every digest
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        {/* from the margins */}
        <section className="mx-auto max-w-4xl px-5 py-20 text-center md:py-28">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <p className="text-[11px] uppercase tracking-[0.5em] text-[#d4a853]/80">From the margins</p>
            <blockquote className="mt-8 text-3xl italic leading-snug md:text-5xl">
              “Not all that is written deserves to be read twice.
              <br />
              <span className="text-[#d4a853]">The rest is ours to keep.”</span>
            </blockquote>
            <p className="mt-8 text-xs uppercase tracking-[0.35em] text-[#efe4c9]/45">
              — marginal note, found in a well-read copy
            </p>
          </motion.div>
        </section>

        {/* the ritual */}
        <section id="ritual" className="border-y border-[#d4a853]/20 bg-[#10141f]/60">
          <div className="mx-auto max-w-6xl px-5 py-16 md:py-20">
            <div className="text-center">
              <p className="text-[11px] uppercase tracking-[0.5em] text-[#d4a853]/80">The Ritual</p>
              <h2 className="mt-4 text-4xl font-medium tracking-tight md:text-5xl">Three steps, one page</h2>
            </div>
            <div className="mt-12 grid gap-10 md:grid-cols-3">
              {[
                ["I", "The Offering", "Present any PDF to the library. A paper, a lease, a book, a brief. It is received as it is — no preparation required."],
                ["II", "The Reading", "The engine reads with care: weighing every sentence, marking the load-bearing ones, noting where the argument turns."],
                ["III", "The Digest", "A single page returns to you — summary, hints, quotes, insights. One page for every twelve, faithfully kept."],
              ].map(([n, t, d], i) => (
                <motion.div
                  key={n}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: i * 0.12 }}
                  className="text-center"
                >
                  <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-[#d4a853]/50 font-[Fraunces_Variable] text-xl text-[#d4a853]">
                    {n}
                  </span>
                  <h3 className="mt-5 text-xl font-medium tracking-wide text-[#f3e9d2]">{t}</h3>
                  <p className="mx-auto mt-3 max-w-xs text-sm leading-7 text-[#efe4c9]/55">{d}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-16 text-center"
            >
              <a
                href="#top"
                className="inline-block border border-[#d4a853] bg-gradient-to-b from-[#e6c684] to-[#b98a3e] px-12 py-4 text-sm font-semibold uppercase tracking-[0.25em] text-[#0d1019] shadow-[0_0_40px_rgba(212,168,83,0.25)] transition-all hover:shadow-[0_0_70px_rgba(212,168,83,0.5)]"
              >
                Offer your first PDF
              </a>
              <p className="mt-5 text-xs italic tracking-wide text-[#efe4c9]/40">
                The first reading is a gift. Thereafter, a modest tribute of one coffee per month.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ledger */}
        <section className="mx-auto max-w-3xl px-5 py-16">
          <p className="text-center text-[11px] uppercase tracking-[0.5em] text-[#d4a853]/80">The Ledger of the House</p>
          <div className="mt-8 border border-[#d4a853]/25 bg-[#0f131d]/70 p-8">
            {[
              ["Documents distilled this week", "4,211"],
              ["Mean compression ratio", "12.4 : 1"],
              ["Retention, vs. skimming", "+3.1×"],
              ["Padding permitted to survive", "none whatsoever"],
            ].map(([k, v], i) => (
              <motion.div
                key={k}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className="flex items-baseline justify-between gap-6 border-b border-[#d4a853]/15 py-3.5 last:border-0"
              >
                <span className="text-sm tracking-wide text-[#efe4c9]/55">{k}</span>
                <span className="font-[Fraunces_Variable] text-lg text-[#d4a853]">{v}</span>
              </motion.div>
            ))}
          </div>
        </section>

        {/* footer */}
        <footer className="border-t border-[#d4a853]/20 py-10 text-center">
          <p className="text-[11px] uppercase tracking-[0.5em] text-[#d4a853]/70">Ex Libris</p>
          <p className="mt-3 text-lg font-medium tracking-wide text-[#f3e9d2]">Ratio Reader</p>
          <p className="mt-2 text-xs italic text-[#efe4c9]/40">
            MMXXVI · all signal, no filler · set in Playfair & Fraunces, by candlelight
          </p>
        </footer>
      </div>
    </div>
  );
}
