import { useState } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronDown,
  Quote,
  Upload,
} from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { DesignSwitcher } from "@/components/DesignSwitcher";
import { features, faqs, plans, product, specs, steps, testimonials } from "@/content";
import { cn } from "@/lib/utils";

function Wordmark({ className }: { className?: string }) {
  return (
    <span className={cn("inline-flex items-baseline gap-2", className)}>
      <span className="font-serif text-[1.35rem] leading-none tracking-tight">Ratio</span>
      <span className="font-serif text-[1.35rem] leading-none italic text-[#C8452F]">Reader</span>
      <span className="ml-1 h-[5px] w-[5px] rounded-full bg-[#C8452F]" />
    </span>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return (
    <span className="text-[10px] font-semibold uppercase tracking-[0.26em] text-[#7A7365]">
      {children}
    </span>
  );
}

export default function Design1() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const { scrollYProgress } = useScroll();
  const specimenY = useTransform(scrollYProgress, [0, 0.35], [0, -40]);

  return (
    <div
      className="relative min-h-screen overflow-x-hidden bg-[#F4F1E9] text-[#15120E] antialiased"
      style={{ fontFamily: "Inter, sans-serif" }}
    >
      <div className="pointer-events-none fixed inset-0 rr-grain opacity-[0.035] mix-blend-multiply" />

      {/* ---------------- masthead ---------------- */}
      <header className="sticky top-0 z-50 border-b border-[rgba(21,18,14,0.14)] bg-[#F4F1E9]/85 backdrop-blur-md">
        <div className="mx-auto flex max-w-[1240px] items-center justify-between gap-6 px-5 py-3.5 sm:px-8">
          <a href="#top" className="group flex items-center gap-3">
            <Wordmark />
            <span className="hidden border-l border-[rgba(21,18,14,0.18)] pl-3 text-[10px] uppercase tracking-[0.2em] text-[#7A7365] sm:block">
              Reading, distilled
            </span>
          </a>
          <nav className="hidden items-center gap-7 lg:flex">
            {["Summary", "Hints", "Quotes", "Insights"].map((item) => (
              <a
                key={item}
                href="#features"
                className="group relative text-[13px] text-[#4C463B] transition-colors hover:text-[#15120E]"
              >
                {item}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-[#C8452F] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
            <a
              href="#plans"
              className="text-[13px] text-[#4C463B] transition-colors hover:text-[#15120E]"
            >
              Pricing
            </a>
          </nav>
          <a
            href="#upload"
            className="group inline-flex items-center gap-2 border border-[#15120E] bg-[#15120E] px-4 py-2 text-[12px] font-medium tracking-wide text-[#F4F1E9] transition-colors hover:bg-[#C8452F] hover:border-[#C8452F]"
          >
            <Upload className="h-3.5 w-3.5" strokeWidth={1.6} />
            Upload PDF
          </a>
        </div>
      </header>

      {/* ---------------- hero ---------------- */}
      <section id="top" className="relative mx-auto max-w-[1240px] px-5 pb-16 pt-14 sm:px-8 sm:pt-20">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-7">
            <Reveal>
              <div className="flex items-center gap-3">
                <span className="h-[6px] w-[6px] rotate-45 bg-[#C8452F]" />
                <Label>№ 01 — The short read</Label>
              </div>
            </Reveal>

            <Reveal delay={0.05}>
              <h1 className="mt-6 font-serif text-[clamp(2.9rem,7.2vw,5.6rem)] leading-[0.94] tracking-[-0.02em]">
                Read the part
                <br />
                that{" "}
                <span className="relative inline-block italic text-[#C8452F]">
                  matters
                  <svg
                    viewBox="0 0 300 20"
                    className="absolute -bottom-2 left-0 h-3 w-full text-[#C8452F]/40"
                    preserveAspectRatio="none"
                    aria-hidden
                  >
                    <path
                      d="M2 14C60 5 130 4 200 9c40 3 70 5 98 3"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="4"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
                .
              </h1>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mt-8 max-w-[46ch] text-[17px] leading-[1.65] text-[#4C463B]">
                Ratio Reader takes the PDF you have been avoiding and returns four things:
                a summary you can finish in five minutes, hints for every word that stopped
                you, the quotes worth keeping, and the insights the document never says out
                loud.
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <a
                  href="#upload"
                  className="group inline-flex items-center gap-3 bg-[#15120E] px-7 py-4 text-[13px] font-medium tracking-[0.02em] text-[#F4F1E9] transition-transform duration-300 hover:-translate-y-0.5"
                >
                  {product.cta}
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
                <a
                  href="#specimen"
                  className="group inline-flex items-center gap-2 border-b border-[rgba(21,18,14,0.3)] pb-1 text-[13px] text-[#4C463B] transition-colors hover:border-[#C8452F] hover:text-[#15120E]"
                >
                  See a sample digest
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="mt-6 font-mono text-[11px] tracking-wide text-[#7A7365]">
                {product.subCta} · 40+ languages · PDF, EPUB, DOCX, scans
              </p>
            </Reveal>
          </div>

          {/* specimen */}
          <motion.div style={{ y: specimenY }} className="lg:col-span-5">
            <Reveal delay={0.12} x={20}>
              <div id="specimen" className="relative">
                <div className="absolute -left-4 -top-4 h-full w-full border border-[rgba(21,18,14,0.12)]" />
                <div className="relative border border-[rgba(21,18,14,0.2)] bg-[#FBF9F3] p-7 shadow-[0_28px_60px_-30px_rgba(21,18,14,0.5)] sm:p-9">
                  <div className="flex items-center justify-between border-b border-[rgba(21,18,14,0.14)] pb-3">
                    <Label>Sample digest</Label>
                    <span className="font-mono text-[10px] text-[#7A7365]">paper.pdf · 214 pp</span>
                  </div>

                  <h3 className="mt-6 font-serif text-[26px] leading-tight">
                    The Attention Economy of Reading
                  </h3>
                  <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.18em] text-[#7A7365]">
                    Dr. Imani Rowe · Journal of Media Studies, 2024
                  </p>

                  <p className="mt-6 text-[14.5px] leading-[1.75] text-[#3B362E]">
                    <span className="float-left mr-2 mt-[-6px] font-serif text-[54px] leading-[0.8] text-[#C8452F]">
                      R
                    </span>
                    ading is not a shortage of attention — it is a distribution problem.
                    This paper argues that comprehension collapses not because readers
                    lack focus, but because documents are built for storage rather than
                    for understanding.
                  </p>

                  <div className="mt-6 border-l-2 border-[#C8452F] bg-[rgba(200,69,47,0.06)] py-4 pl-5 pr-4">
                    <p className="font-serif text-[19px] italic leading-[1.45]">
                      “We optimised the container and abandoned the reader.”
                    </p>
                    <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.16em] text-[#7A7365]">
                      p. 88 — thesis statement
                    </p>
                  </div>

                  <div className="mt-6 space-y-3">
                    {[
                      ["Hints", "§2.1 — “salience” is used here to mean …", "#C8452F"],
                      ["Hints", "“Hirsch, 1974” first appears on p. 14 …", "#15120E"],
                      ["Insight", "The argument contradicts the 2019 baseline …", "#15120E"],
                    ].map(([tag, text, color]) => (
                      <div key={text} className="flex items-start gap-3">
                        <span
                          className="mt-[3px] shrink-0 border px-1.5 py-0.5 font-mono text-[9px] uppercase tracking-[0.12em]"
                          style={{ borderColor: color, color }}
                        >
                          {tag}
                        </span>
                        <span className="text-[13px] leading-[1.6] text-[#4C463B]">{text}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-7 flex items-center justify-between border-t border-[rgba(21,18,14,0.14)] pt-4">
                    <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#7A7365]">
                      Summary · Hints · Quotes · Insights
                    </span>
                    <span className="font-mono text-[10px] text-[#C8452F]">11s</span>
                  </div>
                </div>
              </div>
            </Reveal>
          </motion.div>
        </div>
      </section>

      {/* ---------------- features ---------------- */}
      <section id="features" className="border-t border-[rgba(21,18,14,0.14)]">
        <div className="mx-auto max-w-[1240px] px-5 py-20 sm:px-8 sm:py-24">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <Reveal>
              <Label>What comes back</Label>
              <h2 className="mt-4 max-w-[18ch] font-serif text-[clamp(2rem,4.4vw,3.4rem)] leading-[1.03] tracking-[-0.015em]">
                Four layers, one document.
              </h2>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="max-w-[38ch] text-[14.5px] leading-[1.7] text-[#4C463B]">
                Most tools stop at a summary. Ratio Reader keeps going — each layer is
                grounded in the page it came from, so you can always check the source.
              </p>
            </Reveal>
          </div>

          <div className="mt-14 grid border-l border-t border-[rgba(21,18,14,0.16)] sm:grid-cols-2">
            {features.map((feature, i) => (
              <Reveal key={feature.key} delay={i * 0.06}>
                <article className="group relative h-full border-b border-r border-[rgba(21,18,14,0.16)] p-7 transition-colors duration-500 hover:bg-[#FBF9F3] sm:p-9">
                  <div className="flex items-baseline justify-between">
                    <span className="font-serif text-[40px] italic leading-none text-[#C8452F]/80">
                      {feature.index}
                    </span>
                    <ArrowUpRight className="h-5 w-5 -translate-x-1 translate-y-1 text-[rgba(21,18,14,0.25)] transition-all duration-300 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:text-[#C8452F]" />
                  </div>
                  <h3 className="mt-5 font-serif text-[30px] leading-none">{feature.title}</h3>
                  <p className="mt-3 font-serif text-[19px] italic leading-[1.4] text-[#C8452F]">
                    {feature.lead}
                  </p>
                  <p className="mt-4 max-w-[46ch] text-[14.5px] leading-[1.7] text-[#4C463B]">
                    {feature.body}
                  </p>
                  <p className="mt-6 font-mono text-[10px] uppercase tracking-[0.18em] text-[#7A7365]">
                    {feature.detail}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- how it works ---------------- */}
      <section className="border-t border-[rgba(21,18,14,0.14)] bg-[#EDEAE1]">
        <div className="mx-auto max-w-[1240px] px-5 py-20 sm:px-8 sm:py-24">
          <Reveal>
            <Label>How it works</Label>
          </Reveal>
          <div className="mt-10 grid gap-10 md:grid-cols-3 md:gap-0">
            {steps.map((step, i) => (
              <Reveal key={step.number} delay={i * 0.08}>
                <div
                  className={cn(
                    "md:pr-10",
                    i > 0 && "md:border-l md:border-[rgba(21,18,14,0.16)] md:pl-10",
                  )}
                >
                  <span className="font-serif text-[52px] italic leading-none text-[#C8452F]">
                    {step.number}
                  </span>
                  <h3 className="mt-4 font-serif text-[25px] leading-tight">{step.title}</h3>
                  <p className="mt-3 text-[14.5px] leading-[1.7] text-[#4C463B]">{step.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- quote ---------------- */}
      <section className="border-t border-[rgba(21,18,14,0.14)]">
        <div className="mx-auto max-w-[1240px] px-5 py-20 sm:px-8 sm:py-24">
          <div className="grid gap-12 lg:grid-cols-12">
            <Reveal className="lg:col-span-8">
              <Quote className="h-8 w-8 text-[#C8452F]" strokeWidth={1.2} />
              <blockquote className="mt-6 font-serif text-[clamp(1.6rem,3.4vw,2.7rem)] leading-[1.16] tracking-[-0.01em]">
                “I uploaded a 180-page policy PDF expecting to skim it. Ten minutes later I
                could brief the whole team without a single wrong page open on screen.”
              </blockquote>
              <div className="mt-8 flex items-center gap-4">
                <div className="grid h-11 w-11 place-items-center rounded-full bg-[#15120E] font-serif text-[16px] text-[#F4F1E9]">
                  N
                </div>
                <div>
                  <p className="text-[13.5px] font-medium">Nadia Okonkwo</p>
                  <p className="font-mono text-[10.5px] uppercase tracking-[0.16em] text-[#7A7365]">
                    Head of Research, Fieldnote
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.1} className="lg:col-span-4">
              <div className="border border-[rgba(21,18,14,0.16)] bg-[#FBF9F3] p-7">
                <Label>Also reading with Ratio</Label>
                <ul className="mt-5 space-y-4">
                  {testimonials.slice(1).map((t) => (
                    <li key={t.name} className="border-b border-[rgba(21,18,14,0.12)] pb-4 last:border-0 last:pb-0">
                      <p className="font-serif text-[16px] leading-[1.5] text-[#3B362E]">
                        “{t.quote}”
                      </p>
                      <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.16em] text-[#7A7365]">
                        {t.name} — {t.role}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------------- specs ---------------- */}
      <section className="border-t border-[rgba(21,18,14,0.14)] bg-[#EDEAE1]">
        <div className="mx-auto grid max-w-[1240px] gap-12 px-5 py-20 sm:px-8 sm:py-24 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <Label>Specifications</Label>
            <h2 className="mt-4 font-serif text-[clamp(1.9rem,3.4vw,2.8rem)] leading-[1.05]">
              The dry details, in full.
            </h2>
            <p className="mt-5 max-w-[34ch] text-[14.5px] leading-[1.7] text-[#4C463B]">
              No asterisks. Here is exactly what Ratio Reader accepts, returns and does with
              your file.
            </p>
          </Reveal>
          <Reveal delay={0.08} className="lg:col-span-8">
            <dl className="border-t border-[rgba(21,18,14,0.16)]">
              {specs.map(([term, def]) => (
                <div
                  key={term}
                  className="grid grid-cols-1 gap-1 border-b border-[rgba(21,18,14,0.16)] py-4 sm:grid-cols-[200px_1fr] sm:gap-6"
                >
                  <dt className="font-mono text-[11px] uppercase tracking-[0.16em] text-[#7A7365]">
                    {term}
                  </dt>
                  <dd className="text-[15px] leading-[1.6]">{def}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      {/* ---------------- plans ---------------- */}
      <section id="plans" className="border-t border-[rgba(21,18,14,0.14)]">
        <div className="mx-auto max-w-[1240px] px-5 py-20 sm:px-8 sm:py-24">
          <Reveal>
            <Label>Pricing</Label>
            <h2 className="mt-4 max-w-[20ch] font-serif text-[clamp(2rem,4.4vw,3.4rem)] leading-[1.03]">
              Start free. Upgrade when the pile grows.
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-px bg-[rgba(21,18,14,0.16)] lg:grid-cols-3">
            {plans.map((plan, i) => (
              <Reveal key={plan.name} delay={i * 0.06}>
                <div className="flex h-full flex-col bg-[#F4F1E9] p-8">
                  <div className="flex items-baseline justify-between">
                    <h3 className="font-serif text-[26px]">{plan.name}</h3>
                    {plan.featured && (
                      <span className="bg-[#C8452F] px-2 py-1 font-mono text-[9px] uppercase tracking-[0.14em] text-[#F4F1E9]">
                        Popular
                      </span>
                    )}
                  </div>
                  <p className="mt-2 text-[13px] text-[#7A7365]">{plan.blurb}</p>
                  <p className="mt-6 font-serif text-[46px] leading-none">
                    {plan.price}
                    <span className="ml-2 font-sans text-[12px] tracking-wide text-[#7A7365]">
                      {plan.cadence}
                    </span>
                  </p>
                  <ul className="mt-7 space-y-3 border-t border-[rgba(21,18,14,0.14)] pt-6">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-3 text-[14px] text-[#3B362E]">
                        <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#C8452F]" strokeWidth={2.2} />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#upload"
                    className={cn(
                      "mt-8 inline-flex h-11 items-center justify-center border text-[13px] font-medium transition-colors",
                      plan.featured
                        ? "border-[#15120E] bg-[#15120E] text-[#F4F1E9] hover:bg-[#C8452F] hover:border-[#C8452F]"
                        : "border-[rgba(21,18,14,0.3)] hover:border-[#15120E]",
                    )}
                  >
                    {plan.name === "Reader" ? "Start reading" : `Choose ${plan.name}`}
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- faq ---------------- */}
      <section className="border-t border-[rgba(21,18,14,0.14)] bg-[#EDEAE1]">
        <div className="mx-auto max-w-[1240px] px-5 py-20 sm:px-8 sm:py-24">
          <div className="grid gap-12 lg:grid-cols-12">
            <Reveal className="lg:col-span-4">
              <Label>Questions</Label>
              <h2 className="mt-4 font-serif text-[clamp(1.9rem,3.4vw,2.8rem)] leading-[1.05]">
                Read before you read.
              </h2>
            </Reveal>
            <Reveal delay={0.08} className="lg:col-span-8">
              <div className="border-t border-[rgba(21,18,14,0.16)]">
                {faqs.map((faq, i) => (
                  <div key={faq.q} className="border-b border-[rgba(21,18,14,0.16)]">
                    <button
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      className="flex w-full items-center justify-between gap-6 py-5 text-left"
                    >
                      <span className="flex items-baseline gap-4">
                        <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#C8452F]">
                          Q{i + 1}
                        </span>
                        <span className="font-serif text-[21px] leading-snug">{faq.q}</span>
                      </span>
                      <ChevronDown
                        className={cn(
                          "h-4 w-4 shrink-0 text-[#7A7365] transition-transform duration-300",
                          openFaq === i && "rotate-180",
                        )}
                      />
                    </button>
                    <motion.div
                      initial={false}
                      animate={{ height: openFaq === i ? "auto" : 0, opacity: openFaq === i ? 1 : 0 }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="max-w-[62ch] pb-6 pl-[42px] text-[14.5px] leading-[1.7] text-[#4C463B]">
                        {faq.a}
                      </p>
                    </motion.div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------------- upload cta ---------------- */}
      <section id="upload" className="border-t border-[rgba(21,18,14,0.14)]">
        <div className="mx-auto max-w-[1240px] px-5 py-20 sm:px-8 sm:py-24">
          <Reveal>
            <div className="relative overflow-hidden border border-[#15120E] bg-[#FBF9F3] px-6 py-16 text-center sm:px-16">
              <div className="pointer-events-none absolute inset-0 rr-grain opacity-[0.05]" />
              <Label>The last page you have to start</Label>
              <h2 className="mx-auto mt-5 max-w-[16ch] font-serif text-[clamp(2.2rem,5vw,4rem)] leading-[1] tracking-[-0.02em]">
                Drop the PDF. Get the point.
              </h2>
              <p className="mx-auto mt-5 max-w-[48ch] text-[15px] leading-[1.7] text-[#4C463B]">
                No signup, no card, no reading required. Three documents a month, free,
                forever.
              </p>
              <div className="mx-auto mt-10 max-w-[640px] border-2 border-dashed border-[rgba(21,18,14,0.28)] px-6 py-10 transition-colors hover:border-[#C8452F] hover:bg-[rgba(200,69,47,0.03)]">
                <Upload className="mx-auto h-7 w-7 text-[#C8452F]" strokeWidth={1.4} />
                <p className="mt-4 font-serif text-[21px]">Drag a PDF here</p>
                <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.16em] text-[#7A7365]">
                  or click to browse · up to 200MB
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------------- footer ---------------- */}
      <footer className="border-t border-[rgba(21,18,14,0.14)] bg-[#15120E] text-[#F4F1E9]">
        <div className="mx-auto max-w-[1240px] px-5 py-14 sm:px-8">
          <div className="grid gap-10 md:grid-cols-12">
            <div className="md:col-span-5">
              <Wordmark className="text-[#F4F1E9]" />
              <p className="mt-4 max-w-[34ch] text-[14px] leading-[1.7] text-[rgba(244,241,233,0.6)]">
                Reading, distilled. Built for people with more documents than hours.
              </p>
            </div>
            {[
              { title: "Product", links: ["Summary", "Hints", "Quotes", "Insights", "Pricing"] },
              { title: "Company", links: ["About", "Careers", "Press", "Contact"] },
              { title: "Legal", links: ["Privacy", "Terms", "Security", "Data policy"] },
            ].map((col) => (
              <div key={col.title} className="md:col-span-2">
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[rgba(244,241,233,0.45)]">
                  {col.title}
                </p>
                <ul className="mt-4 space-y-2.5">
                  {col.links.map((link) => (
                    <li key={link}>
                      <a
                        href="#top"
                        className="text-[13.5px] text-[rgba(244,241,233,0.75)] transition-colors hover:text-[#F4F1E9]"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div className="md:col-span-1" />
          </div>
          <div className="mt-14 flex flex-col gap-3 border-t border-[rgba(244,241,233,0.14)] pt-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="font-mono text-[10.5px] uppercase tracking-[0.16em] text-[rgba(244,241,233,0.45)]">
              © {new Date().getFullYear()} Ratio Reader — Issue 01
            </p>
            <p className="font-mono text-[10.5px] uppercase tracking-[0.16em] text-[rgba(244,241,233,0.45)]">
              Your documents are never training data
            </p>
          </div>
        </div>
      </footer>

      <div className="fixed bottom-4 left-4 z-[60]">
        <DesignSwitcher
          className="border border-[rgba(21,18,14,0.16)] bg-[#FBF9F3]/90"
          buttonClassName="text-[#15120E]"
          activeClassName="bg-[#C8452F] !text-[#F4F1E9] opacity-100"
          label="No."
        />
      </div>
    </div>
  );
}
