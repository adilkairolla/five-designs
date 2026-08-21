import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "motion/react";
import {
  ArrowRight,
  FileText,
  Highlighter,
  Lightbulb,
  Link2,
  Quote,
  Sparkles,
  Zap,
} from "lucide-react";

const GRAIN =
  "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.5'/%3E%3C/svg%3E\")";

function Aurora() {
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden">
      <div
        className="d3-aurora-a absolute -top-[20%] -left-[15%] h-[60vmax] w-[60vmax] rounded-full opacity-30 blur-[120px]"
        style={{ background: "radial-gradient(circle, #7c3aed 0%, transparent 65%)" }}
      />
      <div
        className="d3-aurora-b absolute top-[10%] -right-[20%] h-[55vmax] w-[55vmax] rounded-full opacity-25 blur-[130px]"
        style={{ background: "radial-gradient(circle, #0ea5e9 0%, transparent 65%)" }}
      />
      <div
        className="d3-aurora-a absolute bottom-[-25%] left-[20%] h-[50vmax] w-[50vmax] rounded-full opacity-20 blur-[140px]"
        style={{ background: "radial-gradient(circle, #d946ef 0%, transparent 65%)", animationDelay: "-8s" }}
      />
      <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: GRAIN }} />
    </div>
  );
}

function GlassCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-xl ${className}`}
      style={{ boxShadow: "inset 0 1px 0 rgba(255,255,255,0.08), 0 24px 60px rgba(0,0,0,0.35)" }}
    >
      {children}
    </div>
  );
}

function Nav() {
  const { scrollY } = useScroll();
  const bg = useTransform(scrollY, [0, 80], ["rgba(7,6,11,0)", "rgba(7,6,11,0.75)"]);
  const border = useTransform(scrollY, [0, 80], ["rgba(255,255,255,0)", "rgba(255,255,255,0.08)"]);
  return (
    <motion.header
      style={{ background: bg, borderColor: border }}
      className="fixed inset-x-0 top-0 z-50 border-b backdrop-blur-xl"
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        <Link to="/3" className="flex items-center gap-2.5">
          <span className="relative flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 via-fuchsia-500 to-cyan-400">
            <Sparkles className="h-4 w-4 text-white" strokeWidth={2.5} />
          </span>
          <span className="font-sora text-lg font-semibold tracking-tight text-white">
            Ratio Reader
          </span>
        </Link>
        <div className="hidden items-center gap-8 text-sm text-white/60 md:flex">
          <a href="#features" className="transition hover:text-white">Features</a>
          <a href="#how" className="transition hover:text-white">How it works</a>
          <a href="#ratio" className="transition hover:text-white">The Ratio</a>
          <a href="#voices" className="transition hover:text-white">Voices</a>
        </div>
        <a
          href="#cta"
          className="group relative overflow-hidden rounded-full bg-white px-5 py-2 text-sm font-semibold text-slate-900 transition-transform hover:scale-[1.03] active:scale-95"
        >
          Try it free
        </a>
      </nav>
    </motion.header>
  );
}

function Hero() {
  return (
    <section className="relative px-5 pt-36 pb-16 sm:px-8 sm:pt-44">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto w-fit"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-4 py-1.5 text-xs font-medium text-white/70 backdrop-blur-xl">
            <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-violet-400 to-cyan-300" />
            Now reading 40+ languages
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mt-8 max-w-4xl text-center font-sora text-5xl leading-[1.02] font-bold tracking-tight sm:text-7xl"
        >
          <span className="text-white">Every page.</span>{" "}
          <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-300 bg-clip-text text-transparent">
            A fraction of the time.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.22 }}
          className="mx-auto mt-6 max-w-xl text-center text-lg leading-relaxed text-white/55"
        >
          Upload any PDF and watch it condense into a luminous brief — summary,
          key quotes, hints and insights included. You choose the ratio; we keep
          the meaning.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.34 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#ratio"
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-500 via-fuchsia-500 to-cyan-400 p-[1.5px]"
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-[#0b0912]/60 px-7 py-3 font-medium text-white backdrop-blur transition group-hover:bg-transparent">
              Distill your first PDF
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </span>
          </a>
          <a
            href="#how"
            className="rounded-full border border-white/12 px-7 py-3 text-white/70 transition hover:border-white/30 hover:text-white"
          >
            See how it works
          </a>
        </motion.div>

        {/* floating mockup */}
        <motion.div
          initial={{ opacity: 0, y: 60, rotateX: 18 }}
          animate={{ opacity: 1, y: 0, rotateX: 8 }}
          transition={{ duration: 1, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
          style={{ transformPerspective: 1200 }}
          className="relative mx-auto mt-20 max-w-4xl"
        >
          <div className="absolute -inset-x-8 -top-10 h-40 bg-gradient-to-r from-violet-500/30 via-fuchsia-500/20 to-cyan-400/30 blur-3xl" />
          <GlassCard className="relative overflow-hidden p-4 sm:p-6">
            <div className="flex items-center gap-2 pb-4">
              <span className="h-3 w-3 rounded-full bg-white/15" />
              <span className="h-3 w-3 rounded-full bg-white/15" />
              <span className="h-3 w-3 rounded-full bg-white/15" />
              <span className="ml-3 text-xs text-white/35">quantum-computing-survey.pdf → brief</span>
              <span className="ml-auto rounded-full bg-gradient-to-r from-violet-500/20 to-cyan-400/20 px-3 py-1 text-[11px] font-medium text-cyan-200">
                ratio 10%
              </span>
            </div>
            <div className="grid gap-4 sm:grid-cols-5">
              <div className="space-y-2.5 sm:col-span-2">
                {[95, 88, 100, 72, 90, 60].map((w, i) => (
                  <motion.div
                    key={i}
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 0.9 + i * 0.08, duration: 0.5 }}
                    className="h-2 origin-left rounded-full bg-white/[0.07]"
                    style={{ width: `${w}%` }}
                  />
                ))}
                <p className="pt-2 text-[11px] text-white/30">original · 84 pages</p>
              </div>
              <div className="space-y-3 sm:col-span-3">
                {[
                  { icon: FileText, label: "Summary", text: "Three paradigms of error correction compared; surface codes win on thresholds.", c: "text-violet-300 bg-violet-400/10" },
                  { icon: Quote, label: "Key quote", text: "“Fault tolerance is less a milestone than a budget.” — p.61", c: "text-fuchsia-300 bg-fuchsia-400/10" },
                  { icon: Lightbulb, label: "Hint", text: "§4 assumes noiseless mid-measurements — check before citing.", c: "text-cyan-300 bg-cyan-400/10" },
                ].map((row, i) => (
                  <motion.div
                    key={row.label}
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.1 + i * 0.15, duration: 0.5 }}
                    className="flex items-start gap-3 rounded-2xl border border-white/[0.06] bg-white/[0.03] p-3.5"
                  >
                    <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${row.c}`}>
                      <row.icon className="h-4 w-4" />
                    </span>
                    <div>
                      <p className="text-[11px] font-semibold tracking-wider uppercase text-white/40">{row.label}</p>
                      <p className="mt-0.5 text-sm leading-snug text-white/80">{row.text}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
}

function Logos() {
  const names = ["MERIDIAN LABS", "OXFORD PRESS", "HELIX LEGAL", "NORTHWIND AI", "ATLAS RESEARCH", "THE QUARTERLY"];
  return (
    <section className="border-y border-white/[0.06] py-8">
      <p className="mb-6 text-center text-[11px] font-medium tracking-[0.3em] text-white/30 uppercase">
        Trusted by teams who read for a living
      </p>
      <div className="overflow-hidden">
        <div className="d1-marquee-track flex w-max items-center gap-14 whitespace-nowrap px-7">
          {[...names, ...names].map((n, i) => (
            <span key={i} className="font-space-grotesk text-sm font-medium tracking-[0.2em] text-white/25">
              {n}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function Features() {
  const features = [
    { icon: Zap, title: "Instant essence", body: "A 300-page report becomes a three-minute brief while your coffee is still hot. GPU-fast, human-checked structure.", tint: "from-violet-500/20 to-violet-500/0", glow: "group-hover:shadow-[0_0_60px_-12px_rgba(139,92,246,0.5)]" },
    { icon: Quote, title: "Quotes, verbatim", body: "Every quotable line preserved word-for-word with page references. Cite with total confidence.", tint: "from-fuchsia-500/20 to-fuchsia-500/0", glow: "group-hover:shadow-[0_0_60px_-12px_rgba(217,70,239,0.5)]" },
    { icon: Highlighter, title: "Hints that teach", body: "Gentle flags on weak arguments, buried assumptions, and sections that genuinely deserve your eyes.", tint: "from-cyan-400/20 to-cyan-400/0", glow: "group-hover:shadow-[0_0_60px_-12px_rgba(34,211,238,0.5)]" },
    { icon: Link2, title: "Connected insights", body: "Ratio Reader links each document's ideas to your library, surfacing patterns across everything you've read.", tint: "from-blue-500/20 to-blue-500/0", glow: "group-hover:shadow-[0_0_60px_-12px_rgba(59,130,246,0.5)]" },
  ];
  return (
    <section id="features" className="relative px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="font-sora text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Not a summarizer.
            <span className="bg-gradient-to-r from-violet-400 to-cyan-300 bg-clip-text text-transparent"> A reading partner.</span>
          </h2>
          <p className="mt-4 text-white/50">
            Four instruments work on every document you upload.
          </p>
        </motion.div>
        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.08 }}
            >
              <GlassCard className={`group relative h-full overflow-hidden p-8 transition-all duration-500 hover:-translate-y-1 ${f.glow}`}>
                <div className={`absolute inset-x-0 top-0 h-32 bg-gradient-to-b ${f.tint} opacity-0 transition-opacity duration-500 group-hover:opacity-100`} />
                <f.icon className="relative h-9 w-9 text-white/80" strokeWidth={1.5} />
                <h3 className="relative mt-5 font-sora text-xl font-semibold text-white">{f.title}</h3>
                <p className="relative mt-2.5 leading-relaxed text-white/50">{f.body}</p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    { n: "01", title: "Upload", body: "Drag in any PDF up to 800 pages. Textbooks, contracts, papers, manuals." },
    { n: "02", title: "Set your ratio", body: "How much do you want back? 10% for gist, 25% for meetings, 50% for mastery." },
    { n: "03", title: "Read the light", body: "Your brief arrives: summary, quotes, hints, insights. Beautifully structured." },
  ];
  return (
    <section id="how" className="relative px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-5xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          className="text-center font-sora text-4xl font-bold tracking-tight text-white sm:text-5xl"
        >
          Three steps to clarity
        </motion.h2>
        <div className="relative mt-16 grid gap-10 md:grid-cols-3">
          <div className="absolute top-6 right-[16%] left-[16%] hidden h-px bg-gradient-to-r from-violet-500/50 via-fuchsia-500/50 to-cyan-400/50 md:block" />
          {steps.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.12 }}
              className="relative text-center"
            >
              <div className="relative mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-[#0b0912] font-sora text-sm font-bold text-white">
                <span className="absolute inset-0 rounded-full bg-gradient-to-br from-violet-500/40 to-cyan-400/40 blur-md" />
                <span className="relative">{s.n}</span>
              </div>
              <h3 className="mt-6 font-sora text-xl font-semibold text-white">{s.title}</h3>
              <p className="mx-auto mt-2 max-w-xs text-sm leading-relaxed text-white/50">{s.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function RatioDemo() {
  const [ratio, setRatio] = useState(10);
  const data = useMemo(() => {
    const pages = Math.max(1, Math.round(84 * (ratio / 100)));
    const minutes = Math.max(1, Math.round(pages * 1.9));
    const quotes = Math.max(2, Math.round(ratio / 2.2));
    const hints = Math.max(1, Math.round(ratio / 8));
    const saved = Math.round(84 * (1 - ratio / 100) * 1.9);
    return { pages, minutes, quotes, hints, saved };
  }, [ratio]);

  const bars = useMemo(
    () =>
      Array.from({ length: 28 }, (_, i) => {
        const threshold = (i / 28) * 100;
        return ratio >= threshold;
      }),
    [ratio],
  );

  return (
    <section id="ratio" className="relative px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          className="text-center"
        >
          <h2 className="font-sora text-4xl font-bold tracking-tight text-white sm:text-5xl">
            You set the ratio.
            <span className="bg-gradient-to-r from-violet-400 to-cyan-300 bg-clip-text text-transparent"> We keep the meaning.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-white/50">
            Drag the dial. Watch an 84-page paper reshape itself around the
            attention you actually have.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
        >
          <GlassCard className="mt-12 p-8 sm:p-12">
            <div className="grid items-center gap-10 lg:grid-cols-2">
              <div>
                <div className="flex items-end justify-between">
                  <div>
                    <p className="text-xs font-medium tracking-[0.25em] text-white/40 uppercase">Compression ratio</p>
                    <p className="mt-2 font-sora text-7xl font-bold tracking-tight">
                      <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-300 bg-clip-text text-transparent">
                        {ratio}%
                      </span>
                    </p>
                  </div>
                  <p className="pb-2 text-right text-sm text-white/40">
                    of the original,
                    <br />
                    distilled
                  </p>
                </div>
                <input
                  type="range"
                  min={5}
                  max={50}
                  value={ratio}
                  onChange={(e) => setRatio(Number(e.target.value))}
                  className="mt-8 w-full accent-fuchsia-400"
                  aria-label="Compression ratio"
                />
                <div className="mt-2 flex justify-between text-[11px] text-white/30">
                  <span>5% · pure signal</span>
                  <span>50% · deep study</span>
                </div>
                <div className="mt-8 grid grid-cols-3 gap-3">
                  {[
                    { v: data.minutes, l: "min read" },
                    { v: data.quotes, l: "key quotes" },
                    { v: data.hints, l: "hints" },
                  ].map((s) => (
                    <div key={s.l} className="rounded-2xl border border-white/[0.07] bg-white/[0.03] p-4 text-center">
                      <p className="font-sora text-2xl font-bold text-white">{s.v}</p>
                      <p className="mt-1 text-[11px] tracking-wider text-white/40 uppercase">{s.l}</p>
                    </div>
                  ))}
                </div>
                <p className="mt-6 text-sm text-emerald-300/80">
                  ≈ {Math.floor(data.saved / 60)}h {data.saved % 60}m returned to your life, per document.
                </p>
              </div>

              <div className="rounded-3xl border border-white/[0.07] bg-black/30 p-6">
                <div className="flex items-center justify-between text-[11px] tracking-wider text-white/35 uppercase">
                  <span>signal retained</span>
                  <span>{data.pages} pages</span>
                </div>
                <div className="mt-4 flex h-40 items-end gap-1.5">
                  {bars.map((on, i) => (
                    <motion.div
                      key={i}
                      animate={{
                        height: on ? `${45 + ((i * 37) % 55)}%` : "8%",
                        opacity: on ? 1 : 0.25,
                      }}
                      transition={{ type: "spring", stiffness: 300, damping: 26 }}
                      className="flex-1 rounded-t-md bg-gradient-to-t from-violet-600 via-fuchsia-500 to-cyan-300"
                    />
                  ))}
                </div>
                <div className="mt-5 space-y-2.5 border-t border-white/[0.07] pt-5">
                  {[
                    `Summary tuned to ${ratio}% density`,
                    `${data.quotes} verbatim quotes pinned`,
                    `${data.hints} critical hint${data.hints === 1 ? "" : "s"} attached`,
                  ].map((t) => (
                    <p key={t} className="flex items-center gap-2.5 text-sm text-white/60">
                      <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-violet-400 to-cyan-300" />
                      {t}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
}

function Voices() {
  const quotes = [
    { q: "I reviewed a 240-page filing over lunch and caught the one clause everyone else missed. The hints are scary good.", n: "Dana K.", r: "Partner, Helix Legal" },
    { q: "My literature reviews went from weeks to days. The verbatim quotes mean I never misattribute a claim again.", n: "Prof. Amara S.", r: "Computational Biology, ETH" },
    { q: "It's the first AI tool that made me feel smarter instead of lazier. The insights connect readings I'd never have linked.", n: "Tomás R.", r: "Strategy Lead, Meridian Labs" },
  ];
  return (
    <section id="voices" className="relative px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          className="text-center font-sora text-4xl font-bold tracking-tight text-white sm:text-5xl"
        >
          Voices from the well-read
        </motion.h2>
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {quotes.map((t, i) => (
            <motion.div
              key={t.n}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
            >
              <GlassCard className="h-full p-8 transition-transform duration-500 hover:-translate-y-1">
                <Quote className="h-6 w-6 text-fuchsia-300/70" />
                <p className="mt-4 leading-relaxed text-white/70">“{t.q}”</p>
                <div className="mt-6 flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-violet-500 to-cyan-400 font-sora text-xs font-bold text-white">
                    {t.n[0]}
                  </span>
                  <div>
                    <p className="text-sm font-medium text-white">{t.n}</p>
                    <p className="text-xs text-white/40">{t.r}</p>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section id="cta" className="relative px-5 py-24 sm:px-8">
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.7 }}
        className="mx-auto max-w-4xl"
      >
        <div className="relative rounded-[2rem] bg-gradient-to-r from-violet-500 via-fuchsia-500 to-cyan-400 p-[1.5px]">
          <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-r from-violet-500/20 via-fuchsia-500/20 to-cyan-400/20 blur-2xl" />
          <div className="relative rounded-[calc(2rem-1.5px)] bg-[#0b0912]/90 px-8 py-16 text-center backdrop-blur-xl sm:px-16">
            <h2 className="font-sora text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Your unread stack
              <span className="bg-gradient-to-r from-violet-400 to-cyan-300 bg-clip-text text-transparent"> called.</span>
            </h2>
            <p className="mx-auto mt-4 max-w-md text-white/55">
              Three documents free. No card. Just upload, choose a ratio, and
              finally know what's in there.
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row"
            >
              <input
                type="email"
                required
                placeholder="you@wellread.io"
                className="flex-1 rounded-full border border-white/12 bg-white/[0.05] px-5 py-3 text-sm text-white outline-none backdrop-blur placeholder:text-white/30 focus:border-fuchsia-400/50"
              />
              <button
                type="submit"
                className="rounded-full bg-white px-7 py-3 text-sm font-semibold text-slate-900 transition-transform hover:scale-[1.03] active:scale-95"
              >
                Start reading less
              </button>
            </form>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/[0.06] px-5 py-10 sm:px-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-5 sm:flex-row">
        <div className="flex items-center gap-2.5">
          <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-violet-500 via-fuchsia-500 to-cyan-400">
            <Sparkles className="h-3.5 w-3.5 text-white" />
          </span>
          <span className="font-sora text-sm font-semibold text-white/80">Ratio Reader</span>
        </div>
        <p className="text-xs text-white/30">© 2026 — read less, know more</p>
        <Link to="/4" className="text-xs text-white/40 transition hover:text-white">
          next design: brutalist →
        </Link>
      </div>
    </footer>
  );
}

export function DesignThree() {
  useEffect(() => {
    document.title = "Ratio Reader — Lumen";
  }, []);
  return (
    <div className="relative min-h-screen bg-[#07060b] font-inter antialiased selection:bg-fuchsia-500/40">
      <Aurora />
      <Nav />
      <main className="relative">
        <Hero />
        <Logos />
        <Features />
        <HowItWorks />
        <RatioDemo />
        <Voices />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
