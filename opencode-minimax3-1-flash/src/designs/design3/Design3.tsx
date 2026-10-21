import { useState } from "react";
import { motion } from "motion/react";
import { ArrowRight, FileText, Highlighter, Lightbulb, Quote, Search, Sparkles } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { DesignSwitcher } from "@/components/DesignSwitcher";
import { faqs, features, plans, product, stats, testimonials } from "@/content";
import { cn } from "@/lib/utils";

const RED = "#C8452F";
const HIGHLIGHT = "#F6E38C";

function Handwriting({
  children,
  className,
  color = RED,
}: {
  children: React.ReactNode;
  className?: string;
  color?: string;
}) {
  return (
    <span
      className={cn("font-hand leading-tight", className)}
      style={{ color, fontFamily: "'Caveat', cursive" }}
    >
      {children}
    </span>
  );
}

function StickyNote({
  children,
  className,
  color = "#F6E38C",
  rotate = -3,
}: {
  children: React.ReactNode;
  className?: string;
  color?: string;
  rotate?: number;
}) {
  return (
    <motion.div
      whileHover={{ rotate: 0, scale: 1.03 }}
      transition={{ type: "spring", stiffness: 220, damping: 18 }}
      className={cn(
        "absolute z-20 px-4 py-3 shadow-[0_10px_24px_-12px_rgba(36,50,83,0.55)]",
        className,
      )}
      style={{ backgroundColor: color, rotate: `${rotate}deg` }}
    >
      {children}
    </motion.div>
  );
}

function Tape({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "absolute h-6 w-24 bg-[rgba(226,214,180,0.75)] shadow-[0_1px_3px_rgba(36,50,83,0.2)] backdrop-blur-[1px]",
        className,
      )}
      style={{ clipPath: "polygon(2% 8%,98% 0%,96% 92%,4% 100%)" }}
    />
  );
}

const FEATURE_ICONS = [FileText, Highlighter, Quote, Lightbulb];

export default function Design3() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div
      className="relative min-h-screen overflow-x-hidden bg-[#F2EBD9] text-[#243253] antialiased"
      style={{ fontFamily: "Inter, sans-serif" }}
    >
      <div
        className="pointer-events-none fixed inset-0 opacity-[0.55]"
        style={{
          background:
            "radial-gradient(120% 90% at 50% 0%, #FFFDF6 0%, #F4EDDD 45%, #E9DFC9 100%)",
        }}
      />

      {/* ------------- top bar ------------- */}
      <header className="relative z-40 border-b border-[rgba(36,50,83,0.14)] bg-[#FBF7EC]/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-[1180px] items-center justify-between gap-6 px-5 py-3.5 sm:px-8">
          <div className="flex items-center gap-3">
            <span className="grid h-9 w-9 place-items-center rounded-[10px] bg-[#243253] text-[#FBF7EC]">
              <Sparkles className="h-4 w-4" strokeWidth={1.8} />
            </span>
            <div className="leading-none">
              <p className="font-fraunces text-[17px] font-semibold tracking-tight">
                Ratio Reader
              </p>
              <Handwriting className="text-[15px] text-[rgba(36,50,83,0.6)]">
                notes from your PDFs
              </Handwriting>
            </div>
          </div>
          <nav className="hidden items-center gap-6 md:flex">
            {["Summary", "Hints", "Quotes", "Insights"].map((item) => (
              <a
                key={item}
                href="#layers"
                className="group relative font-fraunces text-[14px] text-[rgba(36,50,83,0.75)] transition-colors hover:text-[#243253]"
              >
                {item}
                <span className="absolute -bottom-1 left-0 h-[2px] w-0 rounded-full bg-[#C8452F] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
            <a
              href="#plans"
              className="font-fraunces text-[14px] text-[rgba(36,50,83,0.75)] hover:text-[#243253]"
            >
              Pricing
            </a>
          </nav>
          <a
            href="#upload"
            className="inline-flex items-center gap-2 rounded-full bg-[#243253] px-5 py-2.5 text-[13px] font-medium text-[#FBF7EC] transition-transform hover:-translate-y-0.5"
          >
            <Search className="h-3.5 w-3.5" strokeWidth={2} />
            Read a PDF
          </a>
        </div>
      </header>

      {/* ------------- hero notebook page ------------- */}
      <section className="relative mx-auto max-w-[1180px] px-5 pb-24 pt-14 sm:px-8 sm:pt-20">
        <div className="relative">
          <Reveal>
            <div className="relative mx-auto max-w-[900px]">
              {/* page */}
              <div className="relative rounded-[4px] bg-[#FCF9F1] px-6 pb-14 pt-14 shadow-[0_30px_70px_-40px_rgba(36,50,83,0.55)] sm:px-14 sm:pb-20 sm:pt-16">
                <div className="pointer-events-none absolute inset-0 rr-ruled opacity-70" />
                <div className="pointer-events-none absolute inset-y-0 left-[68px] w-px bg-[rgba(200,69,47,0.28)] sm:left-[96px]" />
                <div className="pointer-events-none absolute inset-0 rr-grain opacity-[0.04]" />

                <div className="relative">
                  <Handwriting className="text-[19px] text-[rgba(36,50,83,0.55)]">
                    Tuesday, 9:14am — finally opened this 214-page thing
                  </Handwriting>

                  <h1 className="mt-4 max-w-[15ch] font-fraunces text-[clamp(2.1rem,4.9vw,3.6rem)] font-semibold leading-[1.04] tracking-[-0.025em]">
                    Everything your PDF is trying to tell you,
                    <span className="relative ml-3 inline-block">
                      <span className="relative z-10">written in the margin.</span>
                      <span
                        className="absolute inset-x-0 bottom-1 z-0 h-3 -rotate-1 opacity-80"
                        style={{ backgroundColor: HIGHLIGHT }}
                      />
                    </span>
                  </h1>

                  <p className="mt-7 max-w-[54ch] text-[16.5px] leading-[1.75] text-[rgba(36,50,83,0.8)]">
                    Upload a PDF and Ratio Reader hands back four things — a summary you can
                    finish before your coffee cools, hints that explain every word that
                    tripped you up, the quotes worth stealing, and the insights the author
                    never said out loud.
                  </p>

                  <div className="mt-9 flex flex-col items-start gap-3">
                    <a
                      href="#upload"
                      className="group inline-flex items-center gap-2.5 rounded-full bg-[#C8452F] px-7 py-3.5 text-[14px] font-semibold text-[#FFF7EC] shadow-[0_10px_22px_-12px_rgba(200,69,47,0.9)] transition-transform hover:-translate-y-0.5"
                    >
                      {product.cta}
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </a>
                    <Handwriting className="text-[19px] text-[rgba(36,50,83,0.65)]">
                      no signup, and it deletes your file →
                    </Handwriting>
                  </div>
                </div>

                <StickyNote className="-right-8 top-20 hidden w-[178px] sm:block" rotate={4}>
                  <Handwriting className="text-[20px] font-bold text-[#4A3C10]">
                    I read 214 pages in 11 seconds. Not a typo.
                  </Handwriting>
                </StickyNote>

                <StickyNote
                  className="bottom-14 right-6 hidden w-[168px] sm:block"
                  color="#D8EAD3"
                  rotate={-6}
                >
                  <Handwriting className="text-[19px] text-[#2C5B3E]">
                    the hints fixed the jargon thing I always complain about
                  </Handwriting>
                </StickyNote>
              </div>
              <Tape className="-top-3 left-1/2 -translate-x-1/2 rotate-[-2deg]" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ------------- stats strip ------------- */}
      <section className="border-y border-[rgba(36,50,83,0.14)] bg-[#F6EFDF]">
        <div className="mx-auto grid max-w-[1180px] grid-cols-2 gap-px bg-[rgba(36,50,83,0.12)] px-0 sm:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.05}>
              <div className="bg-[#F6EFDF] px-6 py-7">
                <p className="font-fraunces text-[30px] font-semibold leading-none">{s.value}</p>
                <Handwriting className="mt-2 text-[18px] text-[rgba(36,50,83,0.6)]">
                  {s.label}
                </Handwriting>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ------------- layers ------------- */}
      <section id="layers" className="mx-auto max-w-[1180px] px-5 py-24 sm:px-8">
        <Reveal>
          <div className="flex items-end justify-between gap-8">
            <div>
              <Handwriting className="text-[21px] text-[#C8452F]">four kinds of margin notes</Handwriting>
              <h2 className="mt-3 max-w-[18ch] font-fraunces text-[clamp(2rem,4.6vw,3.4rem)] font-semibold leading-[1.02] tracking-[-0.025em]">
                The four layers of a Ratio digest.
              </h2>
            </div>
            <p className="hidden max-w-[32ch] text-[15px] leading-[1.75] text-[rgba(36,50,83,0.7)] lg:block">
              Every layer links back to the exact page it came from, so you can always check
              the source instead of trusting a paraphrase.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {features.map((feature, i) => {
            const Icon = FEATURE_ICONS[i];
            return (
              <Reveal key={feature.key} delay={i * 0.06}>
                <article className="group relative h-full rounded-[6px] border border-[rgba(36,50,83,0.16)] bg-[#FCF9F1] p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_44px_-30px_rgba(36,50,83,0.6)] sm:p-9">
                  <div className="flex items-center justify-between">
                    <span
                      className={cn(
                        "grid h-11 w-11 place-items-center rounded-[14px]",
                        i === 0 && "bg-[#E7EEF9] text-[#2A4C8F]",
                        i === 1 && "bg-[#FBEFD2] text-[#8A6A12]",
                        i === 2 && "bg-[#F7E1DC] text-[#C8452F]",
                        i === 3 && "bg-[#DFF0E4] text-[#3F7D58]",
                      )}
                    >
                      <Icon className="h-5 w-5" strokeWidth={1.7} />
                    </span>
                    <Handwriting className="text-[24px] text-[rgba(36,50,83,0.35)]">
                      {feature.index}
                    </Handwriting>
                  </div>

                  <h3 className="mt-6 font-fraunces text-[27px] font-semibold tracking-tight">
                    {feature.title}
                  </h3>
                  <p className="mt-2 font-fraunces text-[17px] italic leading-[1.5] text-[rgba(36,50,83,0.65)]">
                    {feature.lead}
                  </p>
                  <p className="mt-4 text-[14.5px] leading-[1.8] text-[rgba(36,50,83,0.78)]">
                    {feature.body}
                  </p>

                  <div className="mt-6 border-t border-dashed border-[rgba(36,50,83,0.25)] pt-4">
                    <Handwriting className="text-[19px] text-[#3F7D58]">{feature.detail}</Handwriting>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* ------------- sample spread ------------- */}
      <section className="relative overflow-hidden border-y border-[rgba(36,50,83,0.14)] bg-[#F6EFDF] py-24">
        <div className="pointer-events-none absolute inset-0 rr-grain opacity-[0.05]" />
        <div className="relative mx-auto max-w-[1180px] px-5 sm:px-8">
          <Reveal>
            <div className="text-center">
              <Handwriting className="text-[21px] text-[#C8452F]">what you actually see</Handwriting>
              <h2 className="mx-auto mt-3 max-w-[20ch] font-fraunces text-[clamp(2rem,4.6vw,3.4rem)] font-semibold leading-[1.02] tracking-[-0.025em]">
                A digest that looks like good notes, not homework.
              </h2>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="mt-14 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
              {/* left page */}
              <div className="relative rounded-[6px] bg-[#FCF9F1] p-7 shadow-[0_26px_50px_-38px_rgba(36,50,83,0.6)] sm:p-10">
                <div className="pointer-events-none absolute inset-0 rr-ruled opacity-60" />
                <div className="relative">
                  <div className="flex items-center justify-between border-b border-[rgba(36,50,83,0.15)] pb-3">
                    <p className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-[rgba(36,50,83,0.5)]">
                      Summary · layer 1 of 4
                    </p>
                    <Handwriting className="text-[18px] text-[rgba(36,50,83,0.5)]">11 seconds</Handwriting>
                  </div>

                  <h3 className="mt-6 font-fraunces text-[24px] font-semibold">
                    The Attention Economy of Reading
                  </h3>
                  <Handwriting className="mt-1 text-[18px] text-[rgba(36,50,83,0.55)]">
                    Imani Rowe — Journal of Media Studies, 2024
                  </Handwriting>

                  <p className="mt-6 text-[15.5px] leading-[1.85] text-[rgba(36,50,83,0.85)]">
                    Reading is not a shortage of attention. It is a{" "}
                    <span className="relative inline-block">
                      <span
                        className="absolute inset-x-0 bottom-0 h-3 opacity-70"
                        style={{ backgroundColor: HIGHLIGHT }}
                      />
                      <span className="relative">distribution problem</span>
                    </span>
                    . Documents are built for storage and archiving, then handed to readers
                    as if they were designed for comprehension.
                  </p>

                  <ul className="mt-6 space-y-4">
                    {[
                      "Comprehension falls with document length — not with difficulty.",
                      "Navigation, not attention, is the real bottleneck (pp. 41–58).",
                      "The fix is editorial structure, not reader discipline (pp. 118–140).",
                    ].map((line, i) => (
                      <li key={i} className="flex gap-3 text-[14.5px] leading-[1.7]">
                        <span className="mt-[3px] font-fraunces text-[13px] font-semibold text-[#C8452F]">
                          0{i + 1}
                        </span>
                        <span className="text-[rgba(36,50,83,0.85)]">{line}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-7 rounded-[6px] border-l-[3px] border-[#C8452F] bg-[rgba(200,69,47,0.06)] px-5 py-4">
                    <p className="font-fraunces text-[17px] italic leading-[1.5]">
                      “We optimised the container and abandoned the reader.”
                    </p>
                    <p className="mt-2 font-mono text-[10.5px] uppercase tracking-[0.16em] text-[rgba(36,50,83,0.5)]">
                      p. 88 · thesis
                    </p>
                  </div>
                </div>
              </div>

              {/* right column notes */}
              <div className="space-y-5">
                {[
                  {
                    color: "#FBEFD2",
                    title: "Hint",
                    body: "§2.1 — “salience” means perceptual weight here, not statistical significance. The paper switches meanings on p. 90.",
                    meta: "p. 12",
                  },
                  {
                    color: "#D8EAD3",
                    title: "Hint",
                    body: "“Hirsch, 1974” appears here, first cited properly in Appendix C, p. 214.",
                    meta: "p. 14",
                  },
                  {
                    color: "#F7E1DC",
                    title: "Insight",
                    body: "The claim “attention is not the bottleneck” directly opposes Muthukumar et al. (2019), whose retention findings the paper never reconciles.",
                    meta: "cross-ref",
                  },
                ].map((note, i) => (
                  <Reveal key={note.title + i} delay={0.1 + i * 0.07}>
                    <motion.div
                      whileHover={{ rotate: i % 2 ? 0.6 : -0.6, y: -3 }}
                      transition={{ type: "spring", stiffness: 220, damping: 20 }}
                      className="relative rounded-[5px] p-5 shadow-[0_14px_28px_-20px_rgba(36,50,83,0.6)]"
                      style={{ backgroundColor: note.color }}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[rgba(36,50,83,0.65)]">
                          {note.title}
                        </span>
                        <span className="font-mono text-[10px] text-[rgba(36,50,83,0.45)]">
                          {note.meta}
                        </span>
                      </div>
                      <p className="mt-2.5 text-[14px] leading-[1.7] text-[rgba(36,50,83,0.88)]">
                        {note.body}
                      </p>
                    </motion.div>
                  </Reveal>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ------------- steps ------------- */}
      <section className="mx-auto max-w-[1180px] px-5 py-24 sm:px-8">
        <Reveal>
          <div className="text-center">
            <Handwriting className="text-[21px] text-[#C8452F]">how it goes</Handwriting>
            <h2 className="mx-auto mt-3 max-w-[22ch] font-fraunces text-[clamp(2rem,4.6vw,3.4rem)] font-semibold leading-[1.02] tracking-[-0.025em]">
              Three steps, none of them painful.
            </h2>
          </div>
        </Reveal>

        <div className="relative mt-16">
          <div className="absolute left-0 right-0 top-7 hidden border-t border-dashed border-[rgba(36,50,83,0.3)] md:block" />
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                n: "Step one",
                t: "Drop the PDF",
                b: "Drag it in or paste a link. Scanned pages get OCR first, so a photographed contract reads the same as a clean export.",
                hand: "no fiddling",
              },
              {
                n: "Step two",
                t: "Ratio maps it",
                b: "Sections, claims, citations and definitions are pulled out of the document before a single line of the digest is written.",
                hand: "it reads it first",
              },
              {
                n: "Step three",
                t: "You read the notes",
                b: "Summary, hints, quotes and insights arrive together. Ask a follow-up, jump to the source page, get on with your day.",
                hand: "then keep the understanding",
              },
            ].map((s, i) => (
              <Reveal key={s.n} delay={i * 0.08}>
                <div className="relative text-center md:px-6">
                  <span className="relative z-10 mx-auto grid h-14 w-14 place-items-center rounded-full border-2 border-[#243253] bg-[#FBF7EC] font-fraunces text-[18px] font-semibold">
                    {i + 1}
                  </span>
                  <p className="mt-6 font-mono text-[10.5px] uppercase tracking-[0.2em] text-[rgba(36,50,83,0.5)]">
                    {s.n}
                  </p>
                  <h3 className="mt-2 font-fraunces text-[24px] font-semibold tracking-tight">{s.t}</h3>
                  <p className="mx-auto mt-3 max-w-[38ch] text-[14.5px] leading-[1.8] text-[rgba(36,50,83,0.75)]">
                    {s.b}
                  </p>
                  <Handwriting className="mt-4 block text-[20px] text-[#C8452F]">({s.hand})</Handwriting>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ------------- testimonial on torn paper ------------- */}
      <section className="border-y border-[rgba(36,50,83,0.14)] bg-[#F6EFDF] py-24">
        <div className="mx-auto max-w-[1180px] px-5 sm:px-8">
          <div className="grid gap-6 lg:grid-cols-3">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={i * 0.07}>
                <motion.figure
                  whileHover={{ rotate: i === 1 ? 0 : i === 0 ? -1.2 : 1.2, y: -4 }}
                  transition={{ type: "spring", stiffness: 200, damping: 18 }}
                  className="relative h-full bg-[#FCF9F1] p-7 shadow-[0_22px_40px_-30px_rgba(36,50,83,0.65)]"
                  style={{
                    clipPath:
                      "polygon(0% 2%, 3% 0%, 97% 1%, 100% 3%, 99% 98%, 96% 100%, 4% 99%, 1% 97%)",
                  }}
                >
                  <Handwriting className="text-[24px] text-[#C8452F]">“</Handwriting>
                  <blockquote className="-mt-3 font-fraunces text-[18px] leading-[1.55] text-[rgba(36,50,83,0.9)]">
                    {t.quote}
                  </blockquote>
                  <figcaption className="mt-6 border-t border-dashed border-[rgba(36,50,83,0.3)] pt-4">
                    <p className="text-[13.5px] font-semibold">{t.name}</p>
                    <Handwriting className="text-[19px] text-[rgba(36,50,83,0.6)]">{t.role}</Handwriting>
                  </figcaption>
                </motion.figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ------------- plans as index cards ------------- */}
      <section id="plans" className="mx-auto max-w-[1180px] px-5 py-24 sm:px-8">
        <Reveal>
          <div className="text-center">
            <Handwriting className="text-[21px] text-[#C8452F]">index cards</Handwriting>
            <h2 className="mx-auto mt-3 max-w-[18ch] font-fraunces text-[clamp(2rem,4.6vw,3.4rem)] font-semibold leading-[1.02] tracking-[-0.025em]">
              Pick a card. Start reading.
            </h2>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {plans.map((plan, i) => (
            <Reveal key={plan.name} delay={i * 0.06}>
              <div
                className={cn(
                  "relative flex h-full flex-col rounded-[4px] bg-[#FCF9F1] p-7 shadow-[0_18px_34px_-28px_rgba(36,50,83,0.6)] transition-transform duration-300 hover:-translate-y-1.5",
                  plan.featured && "ring-2 ring-[#C8452F]",
                )}
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-fraunces text-[23px] font-semibold">{plan.name}</h3>
                  {plan.featured && (
                    <span className="rounded-full bg-[#C8452F] px-2.5 py-1 text-[10px] uppercase tracking-[0.12em] text-[#FFF7EC]">
                      popular
                    </span>
                  )}
                </div>
                <Handwriting className="mt-1 text-[19px] text-[rgba(36,50,83,0.6)]">{plan.blurb}</Handwriting>

                <p className="mt-6 font-fraunces text-[40px] font-semibold leading-none">
                  {plan.price}
                  <span className="ml-2 font-sans text-[12px] font-normal text-[rgba(36,50,83,0.55)]">
                    {plan.cadence}
                  </span>
                </p>

                <ul className="mt-6 flex-1 space-y-3 border-t border-dashed border-[rgba(36,50,83,0.28)] pt-5">
                  {plan.features.map((f) => (
                    <li key={f} className="flex gap-3 text-[14px] leading-[1.6] text-[rgba(36,50,83,0.8)]">
                      <span className="mt-[3px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#C8452F]" />
                      {f}
                    </li>
                  ))}
                </ul>

                <a
                  href="#upload"
                  className={cn(
                    "mt-7 inline-flex items-center justify-center rounded-full border px-5 py-3 text-[13.5px] font-semibold transition-colors",
                    plan.featured
                      ? "border-[#C8452F] bg-[#C8452F] text-[#FFF7EC] hover:bg-[#243253] hover:border-[#243253]"
                      : "border-[rgba(36,50,83,0.3)] hover:border-[#243253]",
                  )}
                >
                  {plan.name === "Reader" ? "Start reading" : `Choose ${plan.name}`}
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ------------- faq ------------- */}
      <section className="border-y border-[rgba(36,50,83,0.14)] bg-[#F6EFDF] py-24">
        <div className="mx-auto max-w-[1180px] px-5 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-12">
            <Reveal className="lg:col-span-4">
              <Handwriting className="text-[21px] text-[#C8452F]">things people ask</Handwriting>
              <h2 className="mt-3 font-fraunces text-[clamp(1.9rem,4vw,3rem)] font-semibold leading-[1.03] tracking-[-0.025em]">
                The margin notes on our privacy policy.
              </h2>
            </Reveal>
            <Reveal delay={0.08} className="lg:col-span-8">
              <div className="space-y-4">
                {faqs.map((faq, i) => (
                  <div
                    key={faq.q}
                    className="rounded-[4px] border border-[rgba(36,50,83,0.16)] bg-[#FCF9F1] px-6 py-5"
                  >
                    <button
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      className="flex w-full items-start justify-between gap-6 text-left"
                    >
                      <span className="font-fraunces text-[18px] font-semibold leading-snug">
                        {faq.q}
                      </span>
                      <span
                        className={cn(
                          "mt-1 shrink-0 font-mono text-[18px] text-[#C8452F] transition-transform duration-300",
                          openFaq === i && "rotate-45",
                        )}
                      >
                        +
                      </span>
                    </button>
                    <motion.div
                      initial={false}
                      animate={{ height: openFaq === i ? "auto" : 0, opacity: openFaq === i ? 1 : 0 }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="max-w-[62ch] pb-1 pt-3 text-[14.5px] leading-[1.8] text-[rgba(36,50,83,0.78)]">
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

      {/* ------------- upload cta ------------- */}
      <section id="upload" className="mx-auto max-w-[1180px] px-5 py-24 sm:px-8">
        <Reveal>
          <div className="relative mx-auto max-w-[780px]">
            <div className="relative rotate-[-0.6deg] bg-[#FCF9F1] px-8 py-14 text-center shadow-[0_30px_60px_-40px_rgba(36,50,83,0.7)] sm:px-16">
              <div className="pointer-events-none absolute inset-0 rr-grain opacity-[0.05]" />
              <Handwriting className="text-[22px] text-[#C8452F]">last thing</Handwriting>
              <h2 className="mx-auto mt-4 max-w-[16ch] font-fraunces text-[clamp(2.2rem,5vw,3.8rem)] font-semibold leading-[1.02] tracking-[-0.025em]">
                Drop the PDF. Get the point. Close the tab.
              </h2>
              <p className="mx-auto mt-5 max-w-[46ch] text-[15px] leading-[1.8] text-[rgba(36,50,83,0.75)]">
                Three documents a month, free, no account. Your file is deleted within 24
                hours and never used to train anything.
              </p>
              <div className="mx-auto mt-9 max-w-[520px] rounded-[6px] border-2 border-dashed border-[rgba(36,50,83,0.3)] px-6 py-9 transition-colors hover:border-[#C8452F] hover:bg-[rgba(200,69,47,0.04)]">
                <FileText className="mx-auto h-7 w-7 text-[#C8452F]" strokeWidth={1.5} />
                <p className="mt-4 font-fraunces text-[20px] font-semibold">Drop a PDF here</p>
                <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.16em] text-[rgba(36,50,83,0.5)]">
                  or click to browse
                </p>
              </div>
            </div>
            <Tape className="-top-4 left-1/2 -translate-x-1/2 rotate-[3deg]" />
          </div>
        </Reveal>
      </section>

      {/* ------------- footer ------------- */}
      <footer className="border-t border-[rgba(36,50,83,0.14)] bg-[#243253] text-[#F6EFDF]">
        <div className="mx-auto max-w-[1180px] px-5 py-14 sm:px-8">
          <div className="grid gap-10 md:grid-cols-12">
            <div className="md:col-span-5">
              <p className="font-fraunces text-[19px] font-semibold">Ratio Reader</p>
              <p className="mt-3 max-w-[34ch] text-[14px] leading-[1.75] text-[rgba(246,239,223,0.7)]">
                Notes from your PDFs — summaries, hints, quotes and the connections the
                author left out.
              </p>
            </div>
            {[
              { t: "Product", l: ["Summary", "Hints", "Quotes", "Insights", "Pricing"] },
              { t: "Company", l: ["About", "Careers", "Press", "Contact"] },
              { t: "Legal", l: ["Privacy", "Terms", "Security"] },
            ].map((col) => (
              <div key={col.t} className="md:col-span-2">
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[rgba(246,239,223,0.45)]">
                  {col.t}
                </p>
                <ul className="mt-4 space-y-2.5">
                  {col.l.map((l) => (
                    <li key={l}>
                      <a
                        href="#upload"
                        className="text-[13.5px] text-[rgba(246,239,223,0.75)] transition-colors hover:text-[#F6E38C]"
                      >
                        {l}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-12 flex flex-col gap-3 border-t border-[rgba(246,239,223,0.15)] pt-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="font-mono text-[10.5px] uppercase tracking-[0.16em] text-[rgba(246,239,223,0.45)]">
              © {new Date().getFullYear()} Ratio Reader
            </p>
            <Handwriting className="text-[19px] text-[rgba(246,239,223,0.55)]">
              made for people with too much to read
            </Handwriting>
          </div>
        </div>
      </footer>

      <div className="fixed bottom-4 left-4 z-[60]">
        <DesignSwitcher
          className="border border-[rgba(36,50,83,0.18)] bg-[#FCF9F1]/90"
          buttonClassName="text-[#243253]"
          activeClassName="bg-[#C8452F] !text-[#FFF7EC] opacity-100"
          label="dsn"
        />
      </div>
    </div>
  );
}
