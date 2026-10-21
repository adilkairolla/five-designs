import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import {
  ArrowRight,
  ChevronDown,
  FileText,
  Highlighter,
  Lightbulb,
  MessageSquareQuote,
  Sparkles,
  Upload,
  Zap,
} from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { DesignSwitcher } from "@/components/DesignSwitcher";
import { faqs, features, plans, product, stats, steps } from "@/content";
import { cn } from "@/lib/utils";

const GLASS = "border border-white/10 bg-white/[0.045] backdrop-blur-xl";

const PREVIEW: Record<string, { title: string; body: string[]; meta: string }> = {
  Summary: {
    title: "The Attention Economy of Reading",
    body: [
      "Reading is not a shortage of attention — it is a distribution problem. Documents are built for storage and archiving, then handed to readers as if they were designed for comprehension.",
      "01  Comprehension falls with document length, not difficulty.  ·  p. 41",
      "02  Navigation, not attention, is the bottleneck.  ·  p. 58",
      "03  The fix is editorial structure, not reader discipline.  ·  p. 118",
    ],
    meta: "214 pages · 11s · grounded on 18 passages",
  },
  Hints: {
    title: "23 contextual notes",
    body: [
      "p. 12  “salience” — perceptual weight here, not statistical significance. The paper switches meaning on p. 90.",
      "p. 14  “Hirsch, 1974” is first cited properly in Appendix C, p. 214.",
      "p. 77  “reading fluency” arrives undefined; Rowe borrows it from Nation (2006).",
      "p. 96  “friction tax” is a metaphor, but the paper reports it as a measured number.",
    ],
    meta: "6 jargon · 9 citations · 8 undefined terms",
  },
  Quotes: {
    title: "Quotes ranked by impact",
    body: [
      "“We optimised the container and abandoned the reader.”   — p. 88",
      "“Length is not difficulty, but it is friction, and friction is a tax on attention that the reader pays without consent.”   — p. 133",
      "“The document was not written for you. It was written for the archive that would hold it.”   — p. 19",
    ],
    meta: "3 quotes · all page-cited · exportable",
  },
  Insights: {
    title: "Cross-reference pass",
    body: [
      "Tension — claims shorter docs are easier (p. 41) but concedes layout causes 31% of measured slowdown (p. 96). Never resolved.",
      "Contradiction — “attention is not the bottleneck” opposes Muthukumar et al. (2019), whose 3× retention finding goes unmentioned.",
      "Gap — no mobile-reading data, despite the introduction citing it as motivation.",
    ],
    meta: "3 insights · 2 tensions · 1 gap · 1 external source",
  },
};

const FEATURE_ICONS = [FileText, Highlighter, MessageSquareQuote, Lightbulb];
const TABS = ["Summary", "Hints", "Quotes", "Insights"];

export default function Design5() {
  const [tab, setTab] = useState("Summary");
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const active = PREVIEW[tab];

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#05060F] text-[#E9EDF7] antialiased">
      {/* aurora field */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div
          className="rr-drift absolute -left-40 top-[-15%] h-[46rem] w-[46rem] rounded-full opacity-[0.7] blur-[110px]"
          style={{
            background:
              "radial-gradient(circle at 30% 30%, rgba(124,92,255,0.9), transparent 65%)",
            animationDuration: "22s",
          }}
        />
        <div
          className="rr-drift absolute -right-32 top-[6%] h-[40rem] w-[40rem] rounded-full opacity-[0.62] blur-[120px]"
          style={{
            background:
              "radial-gradient(circle at 60% 40%, rgba(53,208,255,0.85), transparent 65%)",
            animationDuration: "27s",
            animationDelay: "-6s",
          }}
        />
        <div
          className="rr-drift absolute bottom-[-20%] left-[26%] h-[42rem] w-[42rem] rounded-full opacity-[0.55] blur-[130px]"
          style={{
            background:
              "radial-gradient(circle at 50% 50%, rgba(255,111,181,0.8), transparent 65%)",
            animationDuration: "31s",
            animationDelay: "-14s",
          }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,transparent_30%,rgba(5,6,15,0.75)_75%)]" />
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
            maskImage: "radial-gradient(ellipse at 50% 30%, black 20%, transparent 75%)",
          }}
        />
      </div>

      {/* nav */}
      <header className="sticky top-0 z-50 px-4 pt-4 sm:px-7">
        <div
          className={cn(
            "mx-auto flex max-w-[1200px] items-center justify-between gap-6 rounded-2xl px-4 py-3 sm:px-5",
            GLASS,
          )}
        >
          <a href="#top" className="flex items-center gap-2.5">
            <span className="relative grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-[#7C5CFF] to-[#35D0FF]">
              <Sparkles className="h-4 w-4 text-white" strokeWidth={2} />
            </span>
            <span className="font-geo text-[15px] font-semibold tracking-tight">Ratio Reader</span>
          </a>
          <nav className="hidden items-center gap-1 lg:flex">
            {["Summary", "Hints", "Quotes", "Insights", "Pricing"].map((item) => (
              <a
                key={item}
                href="#layers"
                className="rounded-full px-4 py-2 text-[13.5px] text-white/60 transition-colors hover:bg-white/5 hover:text-white"
              >
                {item}
              </a>
            ))}
          </nav>
          <a
            href="#upload"
            className="group inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-[13.5px] font-medium text-[#080A16] transition-shadow hover:shadow-[0_0_30px_-4px_rgba(124,92,255,0.9)]"
          >
            <Upload className="h-3.5 w-3.5" strokeWidth={2} />
            Try it free
          </a>
        </div>
      </header>

      {/* hero */}
      <section id="top" className="relative px-4 pb-20 pt-16 sm:px-7 sm:pt-24">
        <div className="mx-auto max-w-[1100px] text-center">
          <Reveal>
            <span
              className={cn(
                "inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[12.5px] text-white/70",
                GLASS,
              )}
            >
              <Zap className="h-3.5 w-3.5 text-[#35D0FF]" />
              A 214-page paper, digested in 11 seconds
            </span>
          </Reveal>

          <Reveal delay={0.06}>
            <h1 className="mt-8 font-geo text-[clamp(2.5rem,6.4vw,4.8rem)] font-semibold leading-[1.02] tracking-[-0.035em]">
              Read the part
              <br />
              <span className="bg-gradient-to-r from-[#8C6BFF] via-[#35D0FF] to-[#FF6FB5] bg-clip-text text-transparent">
                that matters
              </span>
            </h1>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mx-auto mt-7 max-w-[58ch] text-[16.5px] leading-[1.75] text-white/60">
              Upload a PDF. Ratio Reader returns a summary you can finish in five minutes,
              hints that explain every word you had to look up, the quotes worth keeping, and
              the insights the author never said out loud.
            </p>
          </Reveal>

          <Reveal delay={0.14}>
            <div className="mx-auto mt-11 max-w-[640px]">
              <div
                className={cn(
                  "rounded-3xl p-3 shadow-[0_30px_80px_-40px_rgba(124,92,255,0.8)]",
                  GLASS,
                )}
              >
                <div className="group flex flex-col items-center justify-between gap-4 rounded-2xl border border-dashed border-white/20 bg-white/[0.03] px-6 py-8 transition-colors hover:border-[#35D0FF]/60 hover:bg-white/[0.06] sm:flex-row sm:px-8">
                  <div className="flex items-center gap-4">
                    <span className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-[#7C5CFF]/30 to-[#35D0FF]/30">
                      <Upload className="h-5 w-5 text-[#9EE7FF]" strokeWidth={1.8} />
                    </span>
                    <div className="text-left">
                      <p className="font-geo text-[15px] font-medium">Drop your PDF here</p>
                      <p className="mt-0.5 text-[12.5px] text-white/45">
                        or click to browse · PDF, EPUB, DOCX, scans
                      </p>
                    </div>
                  </div>
                  <button className="w-full shrink-0 rounded-xl bg-gradient-to-r from-[#7C5CFF] to-[#35D0FF] px-6 py-3 font-geo text-[13.5px] font-semibold text-white transition-transform hover:scale-[1.03] sm:w-auto">
                    Choose file
                  </button>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.18}>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[12.5px] text-white/40">
              <span>No signup</span>
              <span className="h-1 w-1 rounded-full bg-white/25" />
              <span>Files deleted in 24h</span>
              <span className="h-1 w-1 rounded-full bg-white/25" />
              <span>Never used for training</span>
              <span className="h-1 w-1 rounded-full bg-white/25" />
              <span>40+ languages</span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* stats */}
      <section className="relative px-4 sm:px-7">
        <div className="mx-auto max-w-[1100px]">
          <div className={cn("grid gap-px overflow-hidden rounded-2xl sm:grid-cols-2 lg:grid-cols-4", GLASS)}>
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.05}>
                <div className="bg-white/[0.02] px-6 py-7 text-center lg:text-left">
                  <p className="font-geo text-[28px] font-semibold tracking-tight text-white">
                    {s.value}
                  </p>
                  <p className="mt-1 text-[12.5px] text-white/45">{s.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* preview */}
      <section className="relative px-4 py-24 sm:px-7">
        <div className="mx-auto max-w-[1100px]">
          <Reveal>
            <div className="text-center">
              <h2 className="font-geo text-[clamp(1.9rem,4.4vw,3.2rem)] font-semibold tracking-[-0.03em]">
                See what comes back
              </h2>
              <p className="mx-auto mt-4 max-w-[52ch] text-[15.5px] leading-[1.7] text-white/55">
                Four layers, one document. Every line links to the page it came from, so you
                can verify anything in a click.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className={cn("mt-12 rounded-3xl p-2 shadow-[0_30px_80px_-50px_rgba(53,208,255,0.6)]", GLASS)}>
              <div className="flex gap-1 overflow-x-auto rr-hide-scrollbar">
                {TABS.map((t) => (
                  <button
                    key={t}
                    onClick={() => setTab(t)}
                    className={cn(
                      "relative shrink-0 rounded-xl px-5 py-2.5 text-[13.5px] font-medium transition-colors",
                      tab === t ? "text-white" : "text-white/50 hover:text-white/80",
                    )}
                  >
                    {tab === t && (
                      <motion.span
                        layoutId="preview-pill"
                        className="absolute inset-0 rounded-xl border border-white/10 bg-white/[0.08]"
                        transition={{ type: "spring", stiffness: 320, damping: 30 }}
                      />
                    )}
                    <span className="relative">{t}</span>
                  </button>
                ))}
              </div>

              <div className="mt-2 rounded-2xl border border-white/10 bg-[#080A16]/70 p-6 sm:p-9">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={tab}
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <h3 className="font-geo text-[19px] font-medium">{active.title}</h3>
                      <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11.5px] text-white/50">
                        {active.meta}
                      </span>
                    </div>
                    <div className="mt-5 space-y-3">
                      {active.body.map((line, i) => (
                        <p
                          key={i}
                          className={cn(
                            "text-[14.5px] leading-[1.75]",
                            i === 0 && tab === "Summary"
                              ? "text-white/80"
                              : "text-white/55",
                          )}
                        >
                          {line}
                        </p>
                      ))}
                    </div>
                    <div className="mt-7 flex flex-wrap gap-2">
                      {["open source page", "ask a follow-up", "export"].map((chip) => (
                        <span
                          key={chip}
                          className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[12px] text-white/50"
                        >
                          {chip}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* layers bento */}
      <section id="layers" className="relative px-4 py-8 sm:px-7">
        <div className="pointer-events-none absolute left-1/2 top-24 h-[30rem] w-[60rem] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(124,92,255,0.16),transparent_65%)] blur-3xl" />
        <div className="relative mx-auto max-w-[1100px]">
          <div className="grid gap-4 md:grid-cols-6">
            {features.map((feature, i) => {
              const Icon = FEATURE_ICONS[i];
              const span = [
                "md:col-span-3",
                "md:col-span-3",
                "md:col-span-2",
                "md:col-span-4",
              ][i];
              return (
                <Reveal key={feature.key} delay={i * 0.06} className={span}>
                  <motion.div
                    whileHover={{ y: -5 }}
                    transition={{ type: "spring", stiffness: 240, damping: 22 }}
                    className={cn(
                      "group relative h-full overflow-hidden rounded-2xl p-7",
                      GLASS,
                    )}
                  >
                    <div
                      className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-60"
                      style={{
                        background:
                          i % 2 === 0
                            ? "radial-gradient(circle,rgba(124,92,255,0.8),transparent 70%)"
                            : "radial-gradient(circle,rgba(53,208,255,0.8),transparent 70%)",
                      }}
                    />
                    <div className="relative">
                      <span className="grid h-11 w-11 place-items-center rounded-xl border border-white/10 bg-white/5">
                        <Icon className="h-5 w-5 text-[#9EE7FF]" strokeWidth={1.7} />
                      </span>
                      <h3 className="mt-6 font-geo text-[21px] font-semibold tracking-tight">
                        {feature.title}
                      </h3>
                      <p className="mt-2 text-[14px] leading-[1.6] text-[#B9C4FF]">{feature.lead}</p>
                      <p className="mt-3 max-w-[48ch] text-[13.5px] leading-[1.75] text-white/50">
                        {feature.body}
                      </p>
                      <p className="mt-6 text-[11.5px] uppercase tracking-[0.14em] text-white/35">
                        {feature.detail}
                      </p>
                    </div>
                  </motion.div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* steps */}
      <section className="relative px-4 py-24 sm:px-7">
        <div className="mx-auto max-w-[1100px]">
          <Reveal>
            <div className="text-center">
              <h2 className="font-geo text-[clamp(1.9rem,4.4vw,3.2rem)] font-semibold tracking-[-0.03em]">
                Three steps, eleven seconds
              </h2>
            </div>
          </Reveal>

          <div className="relative mt-14 grid gap-4 md:grid-cols-3">
            <div className="pointer-events-none absolute left-[16%] right-[16%] top-9 hidden h-px bg-gradient-to-r from-transparent via-white/20 to-transparent md:block" />
            {steps.map((s, i) => (
              <Reveal key={s.number} delay={i * 0.08}>
                <div className={cn("relative h-full rounded-2xl p-7", GLASS)}>
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-[#7C5CFF] to-[#35D0FF] font-geo text-[13px] font-semibold text-white">
                    {i + 1}
                  </span>
                  <h3 className="mt-6 font-geo text-[18px] font-medium">{s.title}</h3>
                  <p className="mt-3 text-[13.5px] leading-[1.75] text-white/50">{s.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* pricing */}
      <section id="plans" className="relative px-4 py-8 sm:px-7">
        <div className="mx-auto max-w-[1100px]">
          <Reveal>
            <div className="text-center">
              <h2 className="font-geo text-[clamp(1.9rem,4.4vw,3.2rem)] font-semibold tracking-[-0.03em]">
                Simple pricing
              </h2>
              <p className="mx-auto mt-4 max-w-[46ch] text-[15px] leading-[1.7] text-white/55">
                Start free. Upgrade when the reading pile becomes a reading habit.
              </p>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-4 lg:grid-cols-3">
            {plans.map((plan, i) => (
              <Reveal key={plan.name} delay={i * 0.06}>
                <div
                  className={cn(
                    "relative flex h-full flex-col overflow-hidden rounded-2xl p-7 transition-transform duration-300 hover:-translate-y-1.5",
                    plan.featured
                      ? "border border-[#7C5CFF]/50 bg-gradient-to-b from-[#7C5CFF]/15 to-[#35D0FF]/5 backdrop-blur-xl"
                      : GLASS,
                  )}
                >
                  {plan.featured && (
                    <span className="absolute right-5 top-5 rounded-full bg-gradient-to-r from-[#7C5CFF] to-[#35D0FF] px-3 py-1 text-[11px] font-medium text-white">
                      Most popular
                    </span>
                  )}
                  <h3 className="font-geo text-[19px] font-medium">{plan.name}</h3>
                  <p className="mt-1 text-[13px] text-white/45">{plan.blurb}</p>
                  <p className="mt-6 font-geo text-[40px] font-semibold tracking-tight">
                    {plan.price}
                    <span className="ml-2 text-[12.5px] font-normal text-white/40">
                      {plan.cadence}
                    </span>
                  </p>
                  <ul className="mt-6 flex-1 space-y-3 border-t border-white/10 pt-6">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-3 text-[13.5px] text-white/60">
                        <span className="mt-[6px] h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-[#7C5CFF] to-[#35D0FF]" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#upload"
                    className={cn(
                      "mt-7 inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-[13.5px] font-medium transition-colors",
                      plan.featured
                        ? "bg-white text-[#080A16] hover:shadow-[0_0_30px_-6px_rgba(124,92,255,0.9)]"
                        : "border border-white/12 text-white/75 hover:border-white/30 hover:text-white",
                    )}
                  >
                    {plan.name === "Reader" ? "Start free" : `Choose ${plan.name}`}
                    <ArrowRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* faq */}
      <section className="relative px-4 py-24 sm:px-7">
        <div className="mx-auto grid max-w-[1100px] gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal>
            <h2 className="font-geo text-[clamp(1.9rem,4.4vw,3.2rem)] font-semibold tracking-[-0.03em]">
              Questions, answered
            </h2>
            <p className="mt-5 max-w-[36ch] text-[15px] leading-[1.75] text-white/55">
              Your documents are yours. Here is exactly how we handle them.
            </p>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="space-y-3">
              {faqs.map((faq, i) => (
                <div key={faq.q} className={cn("overflow-hidden rounded-2xl", GLASS)}>
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left"
                  >
                    <span className="font-geo text-[15px] font-medium text-white/90">{faq.q}</span>
                    <ChevronDown
                      className={cn(
                        "h-4 w-4 shrink-0 text-white/40 transition-transform duration-300",
                        openFaq === i && "rotate-180 text-[#9EE7FF]",
                      )}
                    />
                  </button>
                  <motion.div
                    initial={false}
                    animate={{ height: openFaq === i ? "auto" : 0, opacity: openFaq === i ? 1 : 0 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-6 text-[13.5px] leading-[1.8] text-white/50">{faq.a}</p>
                  </motion.div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* cta */}
      <section id="upload" className="relative px-4 pb-24 sm:px-7">
        <div className="mx-auto max-w-[1100px]">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.07] to-white/[0.02] px-6 py-16 text-center backdrop-blur-xl sm:px-16">
              <div className="rr-spin-slow pointer-events-none absolute -left-28 -top-28 h-80 w-80 rounded-full opacity-45 blur-3xl" style={{ background: "conic-gradient(from 0deg, #7C5CFF, #35D0FF, #FF6FB5, #7C5CFF)" }} />
              <div className="relative">
                <h2 className="mx-auto max-w-[16ch] font-geo text-[clamp(2.1rem,5vw,3.6rem)] font-semibold leading-[1.03] tracking-[-0.03em]">
                  Stop reading 200 pages to learn one idea.
                </h2>
                <p className="mx-auto mt-5 max-w-[48ch] text-[15.5px] leading-[1.75] text-white/55">
                  {product.promise}
                </p>
                <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
                  <a
                    href="#top"
                    className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#7C5CFF] to-[#35D0FF] px-7 py-3.5 font-geo text-[14px] font-semibold text-white transition-shadow hover:shadow-[0_0_40px_-6px_rgba(124,92,255,1)]"
                  >
                    {product.cta}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </a>
                  <span className="text-[12.5px] text-white/40">{product.subCta}</span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* footer */}
      <footer className="relative border-t border-white/10 px-4 py-14 sm:px-7">
        <div className="mx-auto max-w-[1100px]">
          <div className="grid gap-10 md:grid-cols-12">
            <div className="md:col-span-4">
              <div className="flex items-center gap-2.5">
                <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-[#7C5CFF] to-[#35D0FF]">
                  <Sparkles className="h-4 w-4 text-white" strokeWidth={2} />
                </span>
                <span className="font-geo text-[15px] font-semibold">Ratio Reader</span>
              </div>
              <p className="mt-4 max-w-[32ch] text-[13.5px] leading-[1.7] text-white/45">
                Reading, distilled. Built for people with more documents than hours.
              </p>
            </div>
            {[
              { t: "Product", l: ["Summary", "Hints", "Quotes", "Insights", "Pricing"] },
              { t: "Company", l: ["About", "Careers", "Press", "Contact"] },
              { t: "Legal", l: ["Privacy", "Terms", "Security"] },
            ].map((col) => (
              <div key={col.t} className="md:col-span-2">
                <p className="text-[11px] uppercase tracking-[0.18em] text-white/35">{col.t}</p>
                <ul className="mt-4 space-y-2.5">
                  {col.l.map((l) => (
                    <li key={l}>
                      <a href="#top" className="text-[13.5px] text-white/55 transition-colors hover:text-white">
                        {l}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div className="md:col-span-2">
              <p className="text-[11px] uppercase tracking-[0.18em] text-white/35">Status</p>
              <p className="mt-4 inline-flex items-center gap-2 text-[13px] text-white/60">
                <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_2px_rgba(52,211,153,0.6)]" />
                All systems normal
              </p>
            </div>
          </div>
          <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-[12px] text-white/35 sm:flex-row sm:items-center sm:justify-between">
            <span>© {new Date().getFullYear()} Ratio Reader</span>
            <span>Your documents are never training data</span>
          </div>
        </div>
      </footer>

      <div className="fixed bottom-4 left-4 z-[60]">
        <DesignSwitcher
          className="border border-white/10 bg-white/[0.06] backdrop-blur-xl"
          buttonClassName="text-white/70"
          activeClassName="bg-white/15 !text-white opacity-100"
          label="dsn"
        />
      </div>
    </div>
  );
}
