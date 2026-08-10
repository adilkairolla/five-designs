import type { ReactNode } from "react";
import { motion } from "motion/react";
import {
  ArrowRight,
  Compass,
  Droplets,
  Feather,
  Quote,
  Sparkles,
  Upload,
} from "lucide-react";
import { DesignSwitcher } from "../components/DesignSwitcher";
import { Reveal } from "../components/Reveal";

const FEATURES = [
  {
    icon: Droplets,
    title: "Summary, softly",
    body: "The core argument, evidence and conclusions — in plain language, on one calm page.",
    chip: "from-violet-400 to-indigo-400",
  },
  {
    icon: Feather,
    title: "Hints in the margins",
    body: "Gentle nudges where the text gets dense: context, definitions, and the short way through.",
    chip: "from-rose-400 to-pink-400",
  },
  {
    icon: Quote,
    title: "Quotes to keep",
    body: "The passages worth remembering, lifted verbatim with page numbers attached.",
    chip: "from-sky-400 to-cyan-400",
  },
  {
    icon: Compass,
    title: "Insights, quietly",
    body: "What's implied, what's missing, and where to read next — without the noise.",
    chip: "from-amber-400 to-orange-400",
  },
];

const TESTIMONIALS = [
  {
    text: "It's the first reading tool that feels like a deep breath instead of a deadline.",
    from: "Elena R.",
    role: "Policy analyst",
  },
  {
    text: "I read the digest, then the chapters that deserved me. My comprehension scores say the rest.",
    from: "Marcus T.",
    role: "Medical student",
  },
  {
    text: "The quotes feature alone paid for the year. Everything else was a gift.",
    from: "June P.",
    role: "Essayist",
  },
];

const PLANS = [
  {
    name: "Drift",
    price: "$0",
    note: "For the casually curious",
    perks: ["10 documents", "Full digests", "Hints & quotes"],
    featured: false,
  },
  {
    name: "Flow",
    price: "$10/mo",
    note: "For the seriously bookish",
    perks: ["Unlimited documents", "Insights & exports", "Audio digests", "Priority distilling"],
    featured: true,
  },
  {
    name: "Studio",
    price: "$32/mo",
    note: "For teams & seminars",
    perks: ["Everything in Flow", "Shared libraries", "Group annotations", "SSO & API"],
    featured: false,
  },
];

function Aurora() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 overflow-hidden">
      <div className="absolute -top-32 left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-gradient-to-br from-violet-300/50 via-fuchsia-200/40 to-transparent blur-3xl" />
      <div className="absolute -left-40 top-1/3 h-[460px] w-[460px] rounded-full bg-sky-200/50 blur-3xl" />
      <div className="absolute -right-40 top-2/3 h-[480px] w-[480px] rounded-full bg-rose-200/50 blur-3xl" />
      <div className="absolute bottom-0 left-1/4 h-[380px] w-[520px] rounded-full bg-amber-100/60 blur-3xl" />
    </div>
  );
}

function GlassCard({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={`rounded-2xl border border-white/70 bg-white/55 shadow-[0_20px_60px_-20px_rgba(80,70,140,0.25)] backdrop-blur-xl ${className}`}
    >
      {children}
    </div>
  );
}

function HeroVisual() {
  return (
    <div className="relative mx-auto mt-16 max-w-4xl">
      <div className="grid items-center gap-6 md:grid-cols-[1fr_auto_1fr]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="animate-float-slow"
        >
          <GlassCard className="p-6">
            <div className="flex items-center justify-between">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                Source
              </p>
              <span className="rounded-full bg-slate-900/5 px-3 py-1 text-xs font-semibold text-slate-500">
                128 pages
              </span>
            </div>
            <p className="mt-3 font-instrument text-2xl text-slate-800">quarterly_review_final_v9.pdf</p>
            <div className="mt-4 space-y-2">
              {[100, 94, 98, 82, 96, 74, 90, 97, 68, 88].map((w, i) => (
                <div key={i} className="h-1.5 rounded-full bg-slate-900/10" style={{ width: `${w}%` }} />
              ))}
            </div>
          </GlassCard>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="hidden justify-center md:flex"
        >
          <div className="flex flex-col items-center gap-2">
            <Sparkles size={22} className="text-violet-500" />
            <div className="h-px w-16 bg-gradient-to-r from-violet-400 to-rose-400" />
            <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-slate-400">
              distilled
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="animate-float"
        >
          <GlassCard className="p-6">
            <div className="flex items-center justify-between">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-500">
                Digest
              </p>
              <span className="rounded-full bg-violet-500/10 px-3 py-1 text-xs font-semibold text-violet-600">
                1 page
              </span>
            </div>
            <p className="mt-3 font-instrument text-2xl text-slate-800">The whole point, kept.</p>
            <ul className="mt-4 space-y-2.5 text-sm text-slate-600">
              <li className="flex gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-400" />
                Revenue up 18% — driven by exactly two decisions.
              </li>
              <li className="flex gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-rose-400" />
                Hint: §7 redefines "churn" — read the note first.
              </li>
              <li className="flex gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-400" />
                Quote worth keeping: p. 92, on customer trust.
              </li>
            </ul>
          </GlassCard>
        </motion.div>
      </div>
    </div>
  );
}

export function DesignFour() {
  return (
    <div className="relative min-h-screen bg-[#f6f7fc] text-slate-900 antialiased">
      <Aurora />

      <div className="relative">
        <header className="mx-auto max-w-6xl px-4 pt-6">
          <div className="flex items-center justify-between rounded-full border border-white/70 bg-white/55 px-5 py-3 shadow-[0_10px_40px_-15px_rgba(80,70,140,0.3)] backdrop-blur-xl">
            <p className="flex items-center gap-2 font-semibold tracking-tight">
              <span className="grid h-7 w-7 place-items-center rounded-full bg-gradient-to-br from-violet-500 to-rose-400 text-white">
                <Droplets size={14} />
              </span>
              Ratio reader
            </p>
            <nav className="hidden items-center gap-8 text-sm font-medium text-slate-500 md:flex">
              <a href="#features" className="transition-colors hover:text-slate-900">Features</a>
              <a href="#method" className="transition-colors hover:text-slate-900">Method</a>
              <a href="#pricing" className="transition-colors hover:text-slate-900">Pricing</a>
            </nav>
            <a
              href="#cta"
              className="rounded-full bg-slate-900 px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-violet-600"
            >
              Try free
            </a>
          </div>
        </header>

        <section className="mx-auto max-w-6xl px-4 pb-24 pt-20 text-center">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mx-auto w-fit rounded-full border border-white/70 bg-white/60 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.25em] text-violet-600 backdrop-blur"
          >
            Meet Ratio reader
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mx-auto mt-6 max-w-3xl font-instrument text-6xl leading-[1.02] tracking-tight text-slate-900 md:text-8xl"
          >
            Reading, <em className="bg-gradient-to-r from-violet-600 via-fuchsia-500 to-rose-500 bg-clip-text italic text-transparent">distilled</em>.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-slate-500"
          >
            Upload any PDF. Receive a calm, one-page digest — the summary, the hints, the quotes,
            and the quiet insights in between.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-9 flex flex-wrap items-center justify-center gap-4"
          >
            <a
              href="#cta"
              className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-slate-900/20 transition-all hover:gap-3 hover:bg-violet-600"
            >
              <Upload size={16} /> Upload a PDF
            </a>
            <a
              href="#features"
              className="inline-flex items-center gap-2 rounded-full border border-slate-300/80 bg-white/60 px-7 py-3.5 text-sm font-semibold text-slate-700 backdrop-blur transition-colors hover:border-violet-400 hover:text-violet-600"
            >
              See a sample
            </a>
          </motion.div>

          <HeroVisual />
        </section>

        <section className="mx-auto max-w-6xl px-4">
          <Reveal>
            <GlassCard className="grid grid-cols-2 gap-6 p-8 md:grid-cols-4">
              {[
                ["128 → 1", "pages in, page out"],
                ["30s", "to your first digest"],
                ["10:1", "average compression"],
                ["100%", "of jargon, translated"],
              ].map(([big, small]) => (
                <div key={big} className="text-center">
                  <p className="font-instrument text-4xl text-slate-900">{big}</p>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                    {small}
                  </p>
                </div>
              ))}
            </GlassCard>
          </Reveal>
        </section>

        <section id="features" className="mx-auto max-w-6xl px-4 py-24">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-violet-600">
              What arrives
            </p>
            <h2 className="mt-3 font-instrument text-4xl text-slate-900 md:text-6xl">
              The essence, extracted
            </h2>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {FEATURES.map((f, i) => (
              <Reveal key={f.title} delay={i * 0.08} className="h-full">
                <GlassCard className="flex h-full flex-col p-6">
                  <span
                    className={`grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br text-white shadow-md ${f.chip}`}
                  >
                    <f.icon size={20} strokeWidth={1.9} />
                  </span>
                  <h3 className="mt-5 text-lg font-semibold tracking-tight">{f.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-500">{f.body}</p>
                </GlassCard>
              </Reveal>
            ))}
          </div>
        </section>

        <section id="method" className="mx-auto max-w-6xl px-4 pb-24">
          <Reveal>
            <GlassCard className="p-8 md:p-12">
              <div className="grid items-center gap-10 md:grid-cols-2">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-violet-600">
                    The method
                  </p>
                  <h2 className="mt-3 font-instrument text-4xl text-slate-900 md:text-5xl">
                    From 128 pages
                    <br />
                    to one that matters
                  </h2>
                  <p className="mt-5 max-w-md leading-relaxed text-slate-500">
                    Ratio reader weighs every page against the document's own thesis. What
                    survives: the argument, the evidence, the lines worth quoting. What doesn't:
                    everything you'd have skimmed anyway.
                  </p>
                </div>
                <div>
                  <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                    <span>Source · 128 pages</span>
                    <span className="text-violet-600">Digest · 1 page</span>
                  </div>
                  <div className="mt-3 h-4 overflow-hidden rounded-full bg-slate-900/10">
                    <div className="h-full w-[9%] rounded-full bg-gradient-to-r from-violet-500 via-fuchsia-500 to-rose-400" />
                  </div>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {[
                      ["Thesis", "kept"],
                      ["Evidence", "kept"],
                      ["Quotes", "kept"],
                      ["Filler", "released"],
                    ].map(([label, state]) => (
                      <span
                        key={label}
                        className={`rounded-full px-3.5 py-1.5 text-xs font-semibold ${
                          state === "kept"
                            ? "bg-violet-500/10 text-violet-700"
                            : "bg-slate-900/5 text-slate-400 line-through"
                        }`}
                      >
                        {label}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </GlassCard>
          </Reveal>
        </section>

        <section className="mx-auto max-w-6xl px-4 pb-24">
          <div className="grid gap-6 md:grid-cols-3">
            {TESTIMONIALS.map((t, i) => (
              <Reveal key={t.from} delay={i * 0.1} className="h-full">
                <GlassCard className="flex h-full flex-col p-7">
                  <Quote size={20} className="text-violet-400" />
                  <p className="mt-4 flex-1 font-instrument text-xl leading-snug text-slate-800">
                    "{t.text}"
                  </p>
                  <p className="mt-6 text-sm font-semibold">{t.from}</p>
                  <p className="text-xs uppercase tracking-[0.18em] text-slate-400">{t.role}</p>
                </GlassCard>
              </Reveal>
            ))}
          </div>
        </section>

        <section id="pricing" className="mx-auto max-w-6xl px-4 pb-24">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-violet-600">
              Pricing
            </p>
            <h2 className="mt-3 font-instrument text-4xl text-slate-900 md:text-6xl">
              Light plans, heavy reading
            </h2>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {PLANS.map((p, i) => (
              <Reveal key={p.name} delay={i * 0.1} className="h-full">
                <div
                  className={`h-full rounded-2xl p-[1.5px] ${
                    p.featured
                      ? "bg-gradient-to-b from-violet-500 via-fuchsia-400 to-rose-400 shadow-[0_25px_60px_-20px_rgba(139,92,246,0.45)]"
                      : "bg-white/70"
                  }`}
                >
                  <div className="flex h-full flex-col rounded-[15px] bg-white/85 p-7 backdrop-blur-xl">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold">{p.name}</h3>
                      {p.featured && (
                        <span className="rounded-full bg-gradient-to-r from-violet-500 to-rose-400 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.15em] text-white">
                          Popular
                        </span>
                      )}
                    </div>
                    <p className="mt-1 text-xs uppercase tracking-[0.18em] text-slate-400">
                      {p.note}
                    </p>
                    <p className="mt-5 font-instrument text-5xl text-slate-900">{p.price}</p>
                    <ul className="mt-6 flex-1 space-y-2.5 text-sm text-slate-600">
                      {p.perks.map((perk) => (
                        <li key={perk} className="flex items-center gap-2.5">
                          <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-violet-500 to-rose-400" />
                          {perk}
                        </li>
                      ))}
                    </ul>
                    <a
                      href="#cta"
                      className={`mt-8 rounded-full py-3 text-center text-sm font-semibold transition-colors ${
                        p.featured
                          ? "bg-slate-900 text-white hover:bg-violet-600"
                          : "border border-slate-300 text-slate-700 hover:border-violet-400 hover:text-violet-600"
                      }`}
                    >
                      Choose {p.name}
                    </a>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section id="cta" className="mx-auto max-w-6xl px-4 pb-28">
          <Reveal>
            <div className="rounded-3xl p-[1.5px] bg-gradient-to-r from-violet-500 via-fuchsia-400 to-rose-400 shadow-[0_30px_80px_-25px_rgba(139,92,246,0.5)]">
              <div className="rounded-[22px] bg-white/85 px-8 py-14 text-center backdrop-blur-xl">
                <h2 className="mx-auto max-w-2xl font-instrument text-4xl text-slate-900 md:text-5xl">
                  Your next hundred pages are waiting.
                </h2>
                <p className="mx-auto mt-4 max-w-md text-slate-500">
                  Distill your first PDF free — no account, no card, no heaviness.
                </p>
                <a
                  href="#"
                  className="mt-8 inline-flex items-center gap-2 rounded-full bg-slate-900 px-8 py-4 text-sm font-semibold text-white transition-all hover:gap-3.5 hover:bg-violet-600"
                >
                  Distill your first PDF <ArrowRight size={16} />
                </a>
              </div>
            </div>
          </Reveal>
        </section>

        <footer className="mx-auto max-w-6xl px-4 pb-10">
          <div className="flex flex-wrap items-center justify-between gap-3 border-t border-slate-900/10 pt-6 text-xs text-slate-400">
            <span className="font-semibold text-slate-500">Ratio reader</span>
            <span>Reading, distilled — since 2026</span>
            <span>© 2026 Ratio reader, Inc.</span>
          </div>
        </footer>
      </div>

      <DesignSwitcher />
    </div>
  );
}
