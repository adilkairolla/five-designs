import "@fontsource-variable/space-grotesk";
import "@fontsource-variable/dm-sans";
import { motion } from "motion/react";
import { BookOpen, Sparkles, Lightbulb, Quote, Compass, ArrowRight, Check, FileText } from "lucide-react";

const orbs = [
  { c: "#c7b9ff", size: 480, top: "-8%", left: "-6%", dur: "11s", delay: "0s" },
  { c: "#ffd0c4", size: 420, top: "22%", right: "-8%", dur: "13s", delay: "-3s" },
  { c: "#bff0e2", size: 380, bottom: "10%", left: "12%", dur: "12s", delay: "-6s" },
  { c: "#c4ddff", size: 460, bottom: "-10%", right: "14%", dur: "14s", delay: "-9s" },
];

const features = [
  {
    icon: FileText,
    tint: "#8b7cf6",
    bg: "#efebff",
    title: "Gentle summaries",
    body: "The whole point of your PDF, distilled into a few calm paragraphs. Long enough to be true, short enough to read with tea.",
  },
  {
    icon: Lightbulb,
    tint: "#f0a742",
    bg: "#fff4e0",
    title: "Helpful hints",
    body: "Tiny notes in the margin that point at the sentences that matter. A quiet guide that knows where the argument turns.",
  },
  {
    icon: Quote,
    tint: "#3aa0a0",
    bg: "#e0f5f3",
    title: "Kept quotes",
    body: "The author's own words, saved exactly. Quote with confidence — the good lines are already waiting for you.",
  },
  {
    icon: Compass,
    tint: "#5b8def",
    bg: "#e6efff",
    title: "Soft insights",
    body: "Where the text sits in its field, why it matters, what it answers. Context that turns reading into understanding.",
  },
];

export function DesignFour() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#eef1f8] font-[DM_Sans_Variable] text-[#2b2f45]">
      {/* ambient orbs */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        {orbs.map((o, i) => (
          <div
            key={i}
            className="animate-float-slow absolute rounded-full blur-3xl"
            style={{
              width: o.size,
              height: o.size,
              background: o.c,
              opacity: 0.55,
              top: o.top,
              right: o.right,
              left: o.left,
              bottom: o.bottom,
              animationDuration: o.dur,
              animationDelay: o.delay,
            }}
          />
        ))}
      </div>

      <div className="relative">
        {/* nav */}
        <header className="mx-auto max-w-6xl px-5 pt-6">
          <nav className="flex items-center justify-between rounded-full border border-white/70 bg-white/50 px-5 py-3 shadow-[0_8px_32px_rgba(70,80,140,0.08)] backdrop-blur-xl">
            <a href="#top" className="flex items-center gap-2 font-[Space_Grotesk_Variable] text-lg font-semibold tracking-tight">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#8b7cf6] text-white">
                <BookOpen size={15} strokeWidth={2.5} />
              </span>
              Ratio Reader
            </a>
            <div className="hidden items-center gap-7 text-sm font-medium text-[#2b2f45]/60 md:flex">
              {["Features", "How it works", "Stories", "FAQ"].map((s) => (
                <a key={s} href="#features" className="transition-colors hover:text-[#2b2f45]">{s}</a>
              ))}
            </div>
            <a
              href="#cta"
              className="group flex items-center gap-1.5 rounded-full bg-[#2b2f45] px-5 py-2 text-sm font-semibold text-white transition-all hover:bg-[#8b7cf6]"
            >
              Get started
              <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
            </a>
          </nav>
        </header>

        {/* hero */}
        <section className="mx-auto max-w-6xl px-5 pb-20 pt-16 text-center md:pt-24">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/80 bg-white/60 px-4 py-1.5 text-xs font-semibold text-[#2b2f45]/70 shadow-sm backdrop-blur"
          >
            <Sparkles size={13} className="text-[#8b7cf6]" />
            Now in beta — free for your first document
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto mt-8 max-w-4xl font-[Space_Grotesk_Variable] text-5xl font-semibold leading-[1.02] tracking-tight md:text-7xl"
          >
            Reading,
            <span className="bg-gradient-to-r from-[#8b7cf6] via-[#5b8def] to-[#3aa0a0] bg-clip-text text-transparent"> at ease.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-[#2b2f45]/65"
          >
            Drop in a PDF. Get back its summary, hints, quotes, and insights —
            everything that matters, nothing that doesn't. Average ratio:{" "}
            <span className="font-semibold text-[#2b2f45]">12.4 : 1</span>.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <a
              href="#cta"
              className="group flex items-center gap-2 rounded-full bg-[#2b2f45] px-8 py-4 text-base font-semibold text-white shadow-[0_16px_40px_rgba(43,47,69,0.25)] transition-all hover:bg-[#8b7cf6] hover:shadow-[0_16px_40px_rgba(139,124,246,0.35)]"
            >
              Upload your first PDF
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </a>
            <a href="#digest" className="px-6 py-4 text-sm font-semibold text-[#2b2f45]/60 underline-offset-4 hover:text-[#2b2f45] hover:underline">
              See a sample digest
            </a>
          </motion.div>

          {/* floating digest mock */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
            id="digest"
            className="relative mx-auto mt-16 max-w-4xl"
          >
            <div className="rounded-[2.5rem] border border-white/70 bg-white/55 p-6 shadow-[0_40px_90px_rgba(70,80,140,0.18)] backdrop-blur-2xl md:p-10">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#efebff] text-[#8b7cf6]">
                    <FileText size={18} />
                  </span>
                  <div className="text-left">
                    <p className="text-sm font-semibold">attention_economy.pdf</p>
                    <p className="text-xs text-[#2b2f45]/50">214 pages · digested in 9 seconds</p>
                  </div>
                </div>
                <span className="rounded-full bg-[#e0f5f3] px-4 py-1.5 text-xs font-bold text-[#2b8f86]">
                  9 min read · 12.4 : 1
                </span>
              </div>

              <div className="mt-8 grid gap-4 text-left md:grid-cols-3">
                <div className="rounded-3xl bg-white/80 p-5 shadow-sm">
                  <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-[#8b7cf6]">Summary</p>
                  <p className="mt-2 text-sm leading-6 text-[#2b2f45]/75">
                    Okafor argues attention is cultivated, not mined. Platforms that harvest it
                    destroy it — and the fix is fewer, better-read pages.
                  </p>
                </div>
                <div className="rounded-3xl bg-white/80 p-5 shadow-sm">
                  <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-[#f0a742]">Hint</p>
                  <p className="mt-2 text-sm leading-6 text-[#2b2f45]/75">
                    The gardening metaphor returns in §4. It's load-bearing — don't skim it.
                  </p>
                </div>
                <div className="rounded-3xl bg-white/80 p-5 shadow-sm">
                  <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-[#3aa0a0]">Quote</p>
                  <p className="mt-2 font-serif text-sm italic leading-6 text-[#2b2f45]/80">
                    “A reader asked to attend to everything attends to nothing.”
                  </p>
                </div>
              </div>

              <div className="mt-4 flex flex-wrap items-center gap-2 text-left">
                {["thesis located", "47 hints", "12 quotes", "9 insights"].map((t) => (
                  <span key={t} className="flex items-center gap-1.5 rounded-full border border-[#2b2f45]/10 bg-white/70 px-3 py-1 text-xs font-medium text-[#2b2f45]/70">
                    <Check size={12} className="text-[#3aa0a0]" /> {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </section>

        {/* features */}
        <section id="features" className="mx-auto max-w-6xl px-5 py-16 md:py-24">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-2xl text-center"
          >
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#8b7cf6]">Everything a margin was for</p>
            <h2 className="mt-4 font-[Space_Grotesk_Variable] text-4xl font-semibold tracking-tight md:text-5xl">
              Four quiet superpowers
            </h2>
          </motion.div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="group rounded-[2rem] border border-white/70 bg-white/55 p-7 shadow-[0_20px_50px_rgba(70,80,140,0.1)] backdrop-blur-xl transition-transform duration-300 hover:-translate-y-2"
              >
                <span
                  className="flex h-12 w-12 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-110"
                  style={{ background: f.bg, color: f.tint }}
                >
                  <f.icon size={20} strokeWidth={2.2} />
                </span>
                <h3 className="mt-5 font-[Space_Grotesk_Variable] text-lg font-semibold tracking-tight">{f.title}</h3>
                <p className="mt-2.5 text-sm leading-6 text-[#2b2f45]/60">{f.body}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* stats band */}
        <section className="mx-auto max-w-6xl px-5 py-10">
          <div className="rounded-[2.5rem] border border-white/70 bg-gradient-to-r from-[#8b7cf6]/15 via-white/60 to-[#3aa0a0]/15 p-10 text-center backdrop-blur-xl md:p-14">
            <div className="grid gap-8 sm:grid-cols-3">
              {[
                ["12.4 : 1", "average compression ratio"],
                ["3.1×", "better retention than skimming"],
                ["0%", "fluff makes it through"],
              ].map(([v, d], i) => (
                <motion.div
                  key={d}
                  initial={{ opacity: 0, scale: 0.85 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 150, damping: 16, delay: i * 0.08 }}
                >
                  <p className="font-[Space_Grotesk_Variable] text-4xl font-semibold text-[#2b2f45] md:text-5xl">{v}</p>
                  <p className="mt-2 text-sm text-[#2b2f45]/55">{d}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* testimonials */}
        <section className="mx-auto max-w-6xl px-5 py-16 md:py-24">
          <div className="grid gap-6 md:grid-cols-3">
            {[
              ["“I finished three papers before lunch. My supervisor asked if I'd hired an assistant.”", "Maya, PhD candidate"],
              ["“The hints are the part. It's like the author left me notes, but nicer.”", "Jonas, product designer"],
              ["“Twelve pages of a lease, one paragraph of truth. That's the ratio I want in life.”", "Priya, small business owner"],
            ].map(([q, a], i) => (
              <motion.figure
                key={a}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="flex flex-col justify-between rounded-[2rem] border border-white/70 bg-white/55 p-7 backdrop-blur-xl"
              >
                <blockquote className="text-[15px] leading-7 text-[#2b2f45]/80">{q}</blockquote>
                <figcaption className="mt-6 flex items-center gap-3">
                  <span
                    className="flex h-9 w-9 items-center justify-center rounded-full text-sm font-bold text-white"
                    style={{ background: ["#8b7cf6", "#f0a742", "#3aa0a0"][i] }}
                  >
                    {a[0]}
                  </span>
                  <span className="text-sm font-semibold text-[#2b2f45]/70">{a}</span>
                </figcaption>
              </motion.figure>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section id="cta" className="mx-auto max-w-3xl px-5 pb-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="font-[Space_Grotesk_Variable] text-4xl font-semibold tracking-tight md:text-6xl">
              Your next book,
              <br />
              <span className="bg-gradient-to-r from-[#8b7cf6] to-[#3aa0a0] bg-clip-text text-transparent">minus the slog.</span>
            </h2>
            <p className="mx-auto mt-5 max-w-md text-[#2b2f45]/60">
              Upload a PDF and see the digest in under a minute. The first one's on us.
            </p>
            <div className="mt-9 flex justify-center">
              <a
                href="#top"
                className="group flex items-center gap-2 rounded-full bg-[#2b2f45] px-9 py-4 text-base font-semibold text-white shadow-[0_16px_40px_rgba(43,47,69,0.25)] transition-all hover:bg-[#8b7cf6]"
              >
                Drop your PDF here
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </motion.div>
        </section>

        <footer className="border-t border-[#2b2f45]/10 py-8 text-center text-xs text-[#2b2f45]/45">
          Ratio Reader © 2026 — reading, made gentle. All signal, no filler.
        </footer>
      </div>
    </div>
  );
}
