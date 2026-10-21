import { Fragment, useState } from "react";
import { motion } from "motion/react";
import { ArrowRight, ArrowUpRight, FileUp, Minus, Plus, Sparkles, Zap } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { DesignSwitcher } from "@/components/DesignSwitcher";
import { faqs, features, plans, product, stats, testimonials } from "@/content";
import { cn } from "@/lib/utils";

const PINK = "#FF4FA3";
const BLUE = "#3B5BFF";
const GREEN = "#00E585";

const CARD_COLORS = [PINK, BLUE, "#FFFFFF", GREEN];
const CARD_TEXT = ["#0B0B0B", "#FFFFFF", "#0B0B0B", "#0B0B0B"];

function Sticker({ children, className, rotate = -6 }: { children: React.ReactNode; className?: string; rotate?: number }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 border-[3px] border-[#0B0B0B] px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.08em]",
        className,
      )}
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      {children}
    </span>
  );
}

function Arrow() {
  return (
    <svg viewBox="0 0 60 40" className="h-8 w-12 shrink-0 text-[#0B0B0B]" aria-hidden>
      <path d="M2 20h44" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
      <path d="M38 6l18 14-18 14z" fill="currentColor" />
    </svg>
  );
}

export default function Design4() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#FFE500] text-[#0B0B0B] antialiased">
      {/* marquee */}
      <div className="relative z-40 overflow-hidden border-b-[3px] border-[#0B0B0B] bg-[#0B0B0B] py-2 text-[#FFE500]">
        <div className="rr-marquee-track flex w-max gap-10 whitespace-nowrap">
          {Array.from({ length: 2 }).map((_, block) => (
            <div key={block} className="flex gap-10">
              {["NO SIGNUP", "FREE TO START", "FILES NEVER TRAIN MODELS", "40+ LANGUAGES", "11 SECOND DIGESTS", "PAGE-LINKED SOURCES"].map(
                (item) => (
                  <span key={item} className="flex items-center gap-10 font-display text-[13px] tracking-[0.06em]">
                    {item}
                    <span className="text-[#FF4FA3]">★</span>
                  </span>
                ),
              )}
            </div>
          ))}
        </div>
      </div>

      {/* nav */}
      <header className="sticky top-0 z-40 border-b-[3px] border-[#0B0B0B] bg-[#FFE500]/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-[1320px] items-center justify-between gap-6 px-4 py-3 sm:px-7">
          <a href="#top" className="flex items-center gap-3">
            <span className="border-[3px] border-[#0B0B0B] bg-[#0B0B0B] px-3 py-1.5 font-display text-[18px] tracking-tight text-[#FFE500]">
              RATIO<span className="text-[#FF4FA3]">/</span>READER
            </span>
          </a>
          <nav className="hidden items-center gap-5 lg:flex">
            {["SUMMARY", "HINTS", "QUOTES", "INSIGHTS", "PRICING"].map((item) => (
              <a
                key={item}
                href="#features"
                className="font-grotesk text-[12.5px] font-bold uppercase tracking-[0.08em] underline decoration-[3px] underline-offset-4 transition-all hover:bg-[#0B0B0B] hover:text-[#FFE500] hover:decoration-[#FF4FA3]"
              >
                {item}
              </a>
            ))}
          </nav>
          <a
            href="#upload"
            className="group border-[3px] border-[#0B0B0B] bg-[#FF4FA3] px-5 py-2 font-grotesk text-[12.5px] font-bold uppercase tracking-[0.08em] shadow-[4px_4px_0_#0B0B0B] transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_#0B0B0B]"
          >
            Upload PDF
          </a>
        </div>
      </header>

      {/* hero */}
      <section id="top" className="relative overflow-hidden border-b-[3px] border-[#0B0B0B]">
        <div className="pointer-events-none absolute -right-24 top-10 hidden h-64 w-64 rr-halftone text-[#0B0B0B] opacity-25 lg:block" />
        <div className="mx-auto grid max-w-[1320px] items-center gap-10 px-4 py-14 sm:px-7 lg:grid-cols-12 lg:py-20">
          <div className="lg:col-span-7">
            <Reveal>
              <div className="flex flex-wrap items-center gap-3">
                <Sticker className="bg-[#00E585]" rotate={-3}>
                  <Zap className="h-3 w-3" /> instant digests
                </Sticker>
                <Sticker className="bg-[#FFFFFF]" rotate={4}>
                  <Sparkles className="h-3 w-3" /> free forever tier
                </Sticker>
              </div>
            </Reveal>

            <Reveal delay={0.05}>
              <h1 className="mt-7 flex flex-col items-start gap-4 font-display text-[clamp(3.2rem,10vw,8rem)] uppercase leading-[0.8] tracking-[-0.02em]">
                <span className="block">READ</span>
                <span className="flex flex-wrap items-center gap-3">
                  <span className="border-[3px] border-[#0B0B0B] bg-[#0B0B0B] px-4 py-1 text-[#FFE500] shadow-[6px_6px_0_#FF4FA3]">
                    THE
                  </span>
                  <span className="border-[3px] border-[#0B0B0B] bg-[#FFFFFF] px-4 py-1 shadow-[6px_6px_0_#0B0B0B]">
                    POINT
                  </span>
                </span>
              </h1>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mt-8 max-w-[48ch] border-l-[6px] border-[#0B0B0B] pl-5 font-grotesk text-[16.5px] leading-[1.6] font-medium">
                Stop wrestling with 200-page PDFs. Ratio Reader hands you the summary, the
                hints, the quotes and the insights — all linked to the exact page they came
                from.
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <a
                  href="#upload"
                  className="group inline-flex items-center gap-3 border-[3px] border-[#0B0B0B] bg-[#0B0B0B] px-7 py-4 font-grotesk text-[14px] font-bold uppercase tracking-[0.06em] text-[#FFE500] shadow-[6px_6px_0_#FF4FA3] transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-[3px_3px_0_#FF4FA3]"
                >
                  Read my PDF
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
                <a
                  href="#features"
                  className="inline-flex items-center gap-2 border-[3px] border-[#0B0B0B] bg-[#FFFFFF] px-6 py-4 font-grotesk text-[14px] font-bold uppercase tracking-[0.06em] shadow-[6px_6px_0_#0B0B0B] transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-[3px_3px_0_#0B0B0B]"
                >
                  See the 4 layers
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
                {stats.map((s) => (
                  <div key={s.label} className="border-[3px] border-[#0B0B0B] bg-[#FFFFFF] px-4 py-3 shadow-[4px_4px_0_#0B0B0B]">
                    <p className="font-display text-[26px] leading-none">{s.value}</p>
                    <p className="mt-1 font-grotesk text-[10.5px] font-bold uppercase tracking-[0.1em] text-[#0B0B0B]/60">
                      {s.label}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          {/* upload card */}
          <Reveal delay={0.12} className="lg:col-span-5">
            <div className="relative">
              <motion.div
                animate={{ rotate: [-1.5, 1, -1.5] }}
                transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -right-3 -top-6 z-20 hidden sm:block"
              >
                <Sticker className="bg-[#FF4FA3] px-4 py-2 text-[12px]" rotate={6}>
                  <ArrowUpRight className="h-3.5 w-3.5" /> 11 seconds
                </Sticker>
              </motion.div>

              <div className="border-[3px] border-[#0B0B0B] bg-[#FFFFFF] p-6 shadow-[10px_10px_0_#0B0B0B] sm:p-8">
                <div className="flex items-center justify-between border-b-[3px] border-[#0B0B0B] pb-4">
                  <p className="font-display text-[20px] uppercase leading-none">NEW READ</p>
                  <span className="font-grotesk text-[11px] font-bold uppercase tracking-[0.1em] text-[#0B0B0B]/50">
                    PDF / EPUB / DOCX
                  </span>
                </div>

                <div className="mt-6 flex flex-col items-center justify-center border-[3px] border-dashed border-[#0B0B0B] bg-[#FFE500]/40 px-6 py-12 text-center transition-colors hover:bg-[#FFE500]">
                  <FileUp className="h-9 w-9" strokeWidth={2} />
                  <p className="mt-4 font-display text-[26px] uppercase leading-none">Drop it here</p>
                  <p className="mt-2 font-grotesk text-[12px] font-bold uppercase tracking-[0.1em] text-[#0B0B0B]/60">
                    drag · click · paste a link
                  </p>
                </div>

                <div className="mt-6 space-y-2.5">
                  {[
                    ["SUMMARY", "the whole thing in five minutes"],
                    ["HINTS", "every jargon word, explained"],
                    ["QUOTES", "the lines worth keeping"],
                    ["INSIGHTS", "what the author left out"],
                  ].map(([k, v]) => (
                    <div
                      key={k}
                      className="flex items-center gap-3 border-[3px] border-[#0B0B0B] bg-[#FFFFFF] px-3 py-2"
                    >
                      <span className="bg-[#0B0B0B] px-2 py-0.5 font-display text-[11px] text-[#FFE500]">
                        {k}
                      </span>
                      <span className="font-grotesk text-[12px] font-medium text-[#0B0B0B]/70">{v}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* features */}
      <section id="features" className="border-b-[3px] border-[#0B0B0B] bg-[#FFFFFF]">
        <div className="mx-auto max-w-[1320px] px-4 py-16 sm:px-7 sm:py-20">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-6">
              <h2 className="font-display text-[clamp(2.6rem,7vw,5.4rem)] uppercase leading-[0.85] tracking-[-0.02em]">
                FOUR LAYERS.
                <br />
                <span className="text-[#FF4FA3]">ONE FILE.</span>
              </h2>
              <p className="max-w-[38ch] font-grotesk text-[15px] font-medium leading-[1.6]">
                Most tools stop at a summary and call it a day. Ratio Reader keeps going —
                and every claim links back to its source page.
              </p>
            </div>
          </Reveal>

          <div className="mt-14 grid gap-5 sm:grid-cols-2">
            {features.map((feature, i) => (
              <Reveal key={feature.key} delay={i * 0.06}>
                <motion.article
                  whileHover={{ y: -8, rotate: i % 2 ? 1 : -1 }}
                  transition={{ type: "spring", stiffness: 260, damping: 18 }}
                  className="relative flex h-full flex-col border-[3px] border-[#0B0B0B] p-7 shadow-[8px_8px_0_#0B0B0B]"
                  style={{ backgroundColor: CARD_COLORS[i], color: CARD_TEXT[i] }}
                >
                  <span className="font-display text-[52px] leading-none opacity-25">
                    {feature.index}
                  </span>
                  <h3 className="mt-3 font-display text-[38px] uppercase leading-none tracking-tight">
                    {feature.title}
                  </h3>
                  <p className="mt-4 font-grotesk text-[15px] font-bold leading-[1.4] uppercase tracking-[0.02em]">
                    {feature.lead}
                  </p>
                  <p className="mt-4 flex-1 font-grotesk text-[14.5px] leading-[1.65] font-medium opacity-85">
                    {feature.body}
                  </p>
                  <p className="mt-6 inline-flex w-fit border-[3px] border-current px-3 py-1.5 font-grotesk text-[11px] font-bold uppercase tracking-[0.1em]">
                    {feature.detail}
                  </p>
                </motion.article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* steps */}
      <section className="border-b-[3px] border-[#0B0B0B] bg-[#FFE500]">
        <div className="mx-auto max-w-[1320px] px-4 py-16 sm:px-7 sm:py-20">
          <Reveal>
            <h2 className="font-display text-[clamp(2.2rem,5.6vw,4.2rem)] uppercase leading-[0.88] tracking-[-0.02em]">
              HOW IT{" "}
              <span className="border-[3px] border-[#0B0B0B] bg-[#3B5BFF] px-3 text-white shadow-[5px_5px_0_#0B0B0B]">
                WORKS
              </span>
            </h2>
          </Reveal>

          <div className="mt-12 grid items-stretch gap-5 lg:grid-cols-[1fr_auto_1fr_auto_1fr]">
            {[
              {
                t: "DROP IT",
                b: "Drag a PDF, paste a link, or pick a file. Scans get OCR'd automatically.",
                bg: "#FFFFFF",
              },
              {
                t: "WE READ IT",
                b: "Sections, claims, citations and definitions get mapped before anything is written.",
                bg: "#3B5BFF",
                fg: "#FFFFFF",
              },
              {
                t: "YOU READ THE POINT",
                b: "Four layers arrive together, each one linked to the page it came from.",
                bg: "#FF4FA3",
              },
            ].map((s, i) => (
              <Fragment key={s.t}>
                <Reveal delay={i * 0.08} className="h-full">
                  <div
                    className="h-full border-[3px] border-[#0B0B0B] p-6 shadow-[8px_8px_0_#0B0B0B]"
                    style={{ backgroundColor: s.bg, color: s.fg ?? "#0B0B0B" }}
                  >
                    <p className="font-grotesk text-[11px] font-bold uppercase tracking-[0.16em] opacity-60">
                      Step 0{i + 1}
                    </p>
                    <h3 className="mt-2 font-display text-[30px] uppercase leading-none">{s.t}</h3>
                    <p className="mt-3 font-grotesk text-[14px] font-medium leading-[1.6] opacity-85">
                      {s.b}
                    </p>
                  </div>
                </Reveal>
                {i < 2 && (
                  <div className="hidden self-center lg:block">
                    <Arrow />
                  </div>
                )}
              </Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* testimonial */}
      <section className="border-b-[3px] border-[#0B0B0B] bg-[#3B5BFF] text-white">
        <div className="mx-auto max-w-[1320px] px-4 py-16 sm:px-7 sm:py-20">
          <Reveal>
            <div
              className="relative mx-auto max-w-[900px] border-[3px] border-[#0B0B0B] bg-[#FFFFFF] p-8 text-[#0B0B0B] shadow-[10px_10px_0_#0B0B0B] sm:p-12"
              style={{
                clipPath:
                  "polygon(0% 8%, 6% 4%, 12% 8%, 18% 3%, 25% 7%, 32% 2%, 39% 6%, 46% 1%, 54% 6%, 61% 2%, 68% 7%, 75% 3%, 82% 8%, 89% 4%, 96% 9%, 100% 6%, 100% 94%, 94% 91%, 88% 96%, 81% 92%, 74% 97%, 67% 92%, 60% 97%, 53% 91%, 46% 96%, 39% 92%, 32% 97%, 25% 92%, 18% 96%, 11% 91%, 5% 95%, 0% 92%)",
              }}
            >
              <p className="font-display text-[clamp(1.5rem,3.4vw,2.6rem)] uppercase leading-[1.02] tracking-tight">
                “{testimonials[0].quote}”
              </p>
              <div className="mt-7 flex flex-wrap items-center gap-4">
                <span className="border-[3px] border-[#0B0B0B] bg-[#FFE500] px-3 py-1.5 font-grotesk text-[12px] font-bold uppercase tracking-[0.08em]">
                  {testimonials[0].name}
                </span>
                <span className="font-grotesk text-[13px] font-bold uppercase tracking-[0.08em] opacity-70">
                  {testimonials[0].role}
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* plans */}
      <section id="plans" className="border-b-[3px] border-[#0B0B0B] bg-[#FFFFFF]">
        <div className="mx-auto max-w-[1320px] px-4 py-16 sm:px-7 sm:py-20">
          <Reveal>
            <h2 className="font-display text-[clamp(2.4rem,6.4vw,5rem)] uppercase leading-[0.86] tracking-[-0.02em]">
              PRICING, <span className="text-[#FF4FA3]">NO MYSTERY</span>
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {plans.map((plan, i) => (
              <Reveal key={plan.name} delay={i * 0.06}>
                <motion.div
                  whileHover={{ y: -6 }}
                  className={cn(
                    "flex h-full flex-col border-[3px] border-[#0B0B0B] p-7 shadow-[8px_8px_0_#0B0B0B]",
                    plan.featured ? "bg-[#0B0B0B] text-[#FFE500]" : "bg-[#FFE500] text-[#0B0B0B]",
                  )}
                >
                  <div className="flex items-center justify-between">
                    <h3 className="font-display text-[34px] uppercase leading-none">{plan.name}</h3>
                    {plan.featured && (
                      <span className="rotate-[-6deg] border-[3px] border-[#0B0B0B] bg-[#FF4FA3] px-2.5 py-1 font-display text-[11px] text-white">
                        HOT
                      </span>
                    )}
                  </div>
                  <p className="mt-2 font-grotesk text-[13px] font-bold uppercase tracking-[0.06em] opacity-70">
                    {plan.blurb}
                  </p>
                  <p className="mt-6 font-display text-[52px] uppercase leading-none">
                    {plan.price}
                    <span className="ml-2 font-grotesk text-[11px] font-bold uppercase tracking-[0.08em] opacity-70">
                      {plan.cadence}
                    </span>
                  </p>
                  <ul className="mt-6 flex-1 space-y-3 border-t-[3px] border-current pt-5">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-3 font-grotesk text-[13.5px] font-medium">
                        <span className="mt-[2px] font-display text-[15px]">✳</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#upload"
                    className={cn(
                      "mt-7 inline-flex items-center justify-center gap-2 border-[3px] border-[#0B0B0B] px-5 py-3.5 font-grotesk text-[13px] font-bold uppercase tracking-[0.06em] transition-all hover:translate-x-[2px] hover:translate-y-[2px]",
                      plan.featured
                        ? "bg-[#FFE500] text-[#0B0B0B] shadow-[5px_5px_0_#FF4FA3]"
                        : "bg-[#0B0B0B] text-[#FFE500] shadow-[5px_5px_0_#FF4FA3]",
                    )}
                  >
                    Choose {plan.name}
                  </a>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* faq */}
      <section className="border-b-[3px] border-[#0B0B0B] bg-[#00E585]">
        <div className="mx-auto grid max-w-[1320px] gap-10 px-4 py-16 sm:px-7 sm:py-20 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <h2 className="font-display text-[clamp(2.4rem,6vw,4.6rem)] uppercase leading-[0.86] tracking-[-0.02em]">
              FINE
              <br />
              PRINT
            </h2>
            <p className="mt-5 max-w-[30ch] font-grotesk text-[15px] font-medium leading-[1.6]">
              The small print, in big type. Because your documents should be private.
            </p>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <div key={faq.q} className="border-[3px] border-[#0B0B0B] bg-[#FFFFFF] shadow-[6px_6px_0_#0B0B0B]">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="flex w-full items-center justify-between gap-5 px-5 py-4 text-left"
                  >
                    <span className="font-grotesk text-[15px] font-bold uppercase tracking-[0.02em]">
                      {faq.q}
                    </span>
                    {openFaq === i ? (
                      <Minus className="h-5 w-5 shrink-0" strokeWidth={3} />
                    ) : (
                      <Plus className="h-5 w-5 shrink-0" strokeWidth={3} />
                    )}
                  </button>
                  <motion.div
                    initial={false}
                    animate={{ height: openFaq === i ? "auto" : 0, opacity: openFaq === i ? 1 : 0 }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="border-t-[3px] border-[#0B0B0B] px-5 py-4 font-grotesk text-[14px] font-medium leading-[1.65]">
                      {faq.a}
                    </p>
                  </motion.div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* cta */}
      <section id="upload" className="relative overflow-hidden bg-[#0B0B0B] text-[#FFE500]">
        <div className="pointer-events-none absolute inset-0 rr-halftone text-[#FFE500] opacity-[0.12]" />
        <div className="relative mx-auto max-w-[1320px] px-4 py-20 text-center sm:px-7 sm:py-28">
          <Reveal>
            <h2 className="font-display text-[clamp(2.8rem,9vw,7rem)] uppercase leading-[0.84] tracking-[-0.02em]">
              DROP THE PDF.
              <br />
              <span className="text-[#FF4FA3]">KEEP THE POINT.</span>
            </h2>
            <p className="mx-auto mt-7 max-w-[46ch] font-grotesk text-[16px] font-medium leading-[1.6] text-[rgba(255,229,0,0.8)]">
              No signup, no card, no subscription to see if you like it. Three documents a
              month, free, forever.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <a
                href="#top"
                className="group inline-flex items-center gap-3 border-[3px] border-[#FFE500] bg-[#FFE500] px-8 py-4 font-display text-[22px] uppercase tracking-tight text-[#0B0B0B] shadow-[7px_7px_0_#FF4FA3] transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-[4px_4px_0_#FF4FA3]"
              >
                Start reading
                <ArrowRight className="h-6 w-6 transition-transform group-hover:translate-x-1" />
              </a>
              <Sticker className="bg-[#00E585] px-4 py-2.5 text-[12px]" rotate={-4}>
                11 second digests
              </Sticker>
            </div>
            <p className="mt-8 font-grotesk text-[12px] font-bold uppercase tracking-[0.14em] text-[rgba(255,229,0,0.55)]">
              {product.subCta}
            </p>
          </Reveal>
        </div>
      </section>

      {/* footer */}
      <footer className="border-t-[3px] border-[#0B0B0B] bg-[#FFE500]">
        <div className="mx-auto max-w-[1320px] px-4 py-14 sm:px-7">
          <div className="grid gap-10 md:grid-cols-12">
            <div className="md:col-span-4">
              <p className="font-display text-[26px] uppercase leading-none">
                RATIO<span className="text-[#FF4FA3]">/</span>READER
              </p>
              <p className="mt-3 max-w-[32ch] font-grotesk text-[14px] font-medium leading-[1.6]">
                For people with more documents than hours. Your files are never training
                data.
              </p>
            </div>
            {[
              { t: "Product", l: ["Summary", "Hints", "Quotes", "Insights", "Pricing"] },
              { t: "Company", l: ["About", "Careers", "Press", "Contact"] },
              { t: "Legal", l: ["Privacy", "Terms", "Security"] },
            ].map((col) => (
              <div key={col.t} className="md:col-span-2">
                <p className="font-display text-[15px] uppercase tracking-tight">{col.t}</p>
                <ul className="mt-4 space-y-2">
                  {col.l.map((l) => (
                    <li key={l}>
                      <a
                        href="#top"
                        className="font-grotesk text-[13.5px] font-bold uppercase tracking-[0.04em] underline decoration-[3px] underline-offset-4 hover:text-[#FF4FA3]"
                      >
                        {l}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div className="md:col-span-2">
              <p className="font-display text-[15px] uppercase tracking-tight">Status</p>
              <p className="mt-4 inline-flex items-center gap-2 border-[3px] border-[#0B0B0B] bg-[#00E585] px-3 py-1.5 font-grotesk text-[11px] font-bold uppercase tracking-[0.08em]">
                <span className="h-2 w-2 rounded-full bg-[#0B0B0B]" /> all good
              </p>
            </div>
          </div>
          <p className="mt-12 border-t-[3px] border-[#0B0B0B] pt-5 font-grotesk text-[11.5px] font-bold uppercase tracking-[0.14em]">
            © {new Date().getFullYear()} Ratio Reader — built loud, reads quiet.
          </p>
        </div>
      </footer>

      <div className="fixed bottom-4 left-4 z-[60]">
        <DesignSwitcher
          className="border-[3px] border-[#0B0B0B] bg-[#FFFFFF] shadow-[4px_4px_0_#0B0B0B]"
          buttonClassName="text-[#0B0B0B]"
          activeClassName="bg-[#0B0B0B] !text-[#FFE500] opacity-100"
          label="dsn"
        />
      </div>
    </div>
  );
}
