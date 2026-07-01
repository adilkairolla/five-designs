import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import {
  ArrowUpRight,
  ArrowRight,
  Timer,
  MessageSquareText,
  Quote,
  Telescope,
  UploadCloud,
  ScrollText,
  Feather,
  Compass,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Reveal, staggerContainer, fadeUpItem } from "@/components/reveal";

/* ---------------------------------------------------------------------- */
/*  Content                                                                */
/* ---------------------------------------------------------------------- */

type Annotation = {
  id: number;
  phrase: string;
  note: string;
};

const manuscriptParagraphOne =
  "he committee's findings rest on an assumption rarely stated outright: that behavior observed under scarcity generalizes to behavior under abundance. This is, at best, an open question, and at worst, a category error smuggled into the methodology as a convenience. Where the data shows correlation, the authors repeatedly reach for causal language, treating what is ";
const manuscriptParagraphOneMid =
  " as though it were an external, unimpeachable force.";

const manuscriptParagraphTwoA =
  "None of this diminishes the report's usefulness as a starting point. Its literature review is thorough, and its account of ";
const manuscriptParagraphTwoB =
  " between regulator and firm is, if anything, understated. But a policy built on a single study's confidence interval is a policy built on sand, and the appendix — buried on page forty-one — admits as much in a footnote most readers will ";
const manuscriptParagraphTwoEnd = ".";

const annotations: Annotation[] = [
  {
    id: 1,
    phrase: "endogenous to the model",
    note: "Plain English: a result the model produces on its own — not proof of some outside cause.",
  },
  {
    id: 2,
    phrase: "asymmetric information",
    note: "One side knows more than the other. Here: the firm knows things the regulator doesn't.",
  },
  {
    id: 3,
    phrase: "never reach",
    note: "Worth noting: the report's own caveat is placed where it is least likely to be read.",
  },
];

type Feature = {
  n: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

const features: Feature[] = [
  {
    n: "01",
    title: "Instant Summaries",
    description:
      "The argument a document is actually making, distilled to its load-bearing sentences — whether the source is four pages or four hundred.",
    icon: Timer,
  },
  {
    n: "02",
    title: "Smart Hints",
    description:
      "Jargon, acronyms, and dense clauses get a plain-language gloss in the margin, the way a good editor writes for the reader who wasn't in the room.",
    icon: MessageSquareText,
  },
  {
    n: "03",
    title: "Key Quotes",
    description:
      "The handful of sentences worth remembering — and worth citing — pulled out verbatim, so you never have to go hunting for the line you half-recall.",
    icon: Quote,
  },
  {
    n: "04",
    title: "Deeper Insights",
    description:
      "The connections, implications, and unasked questions the document raises but never states — read between the lines, so you don't have to.",
    icon: Telescope,
  },
];

type Step = {
  n: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

const steps: Step[] = [
  {
    n: "01",
    title: "Upload",
    description: "Drag in a PDF — a contract, a paper, a forty-page brief. Any length, any subject, no formatting required.",
    icon: UploadCloud,
  },
  {
    n: "02",
    title: "Read",
    description: "Ratio Reader reads the entire document the way a careful editor would — closely, and more than once.",
    icon: ScrollText,
  },
  {
    n: "03",
    title: "Distill",
    description: "You receive four things at once: the summary, the hints, the quotes, and the insights — laid out, not buried.",
    icon: Feather,
  },
  {
    n: "04",
    title: "Go Deeper",
    description: "Ask for more on any passage and get the fuller context, without re-reading the page it came from.",
    icon: Compass,
  },
];

const proofPoints = [
  { figure: "71%", caption: "average reduction in reading time, measured against the source document's word count." },
  { figure: "12 sec", caption: "median time to a first summary, for documents up to forty pages long." },
  { figure: "1–400", caption: "pages handled without losing the thread, from a single memo to a full dissertation." },
];

const navLinks = [
  { href: "#features", label: "Features" },
  { href: "#how-it-works", label: "How it Works" },
  { href: "#sample", label: "Sample" },
];

/* ---------------------------------------------------------------------- */
/*  Small pieces                                                          */
/* ---------------------------------------------------------------------- */

function ManuscriptMark({
  annotation,
  active,
  onEnter,
  onLeave,
  onToggle,
}: {
  annotation: Annotation;
  active: boolean;
  onEnter: () => void;
  onLeave: () => void;
  onToggle: () => void;
}) {
  return (
    <button
      type="button"
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      onFocus={onEnter}
      onBlur={onLeave}
      onClick={onToggle}
      className={`fn-mark ${active ? "fn-mark-active" : ""}`}
      aria-describedby={`fn-note-${annotation.id}`}
    >
      {annotation.phrase}
      <sup className="ml-[1px] text-[0.6em]" style={{ color: "#B23A2E" }}>
        {annotation.id}
      </sup>
    </button>
  );
}

function MarginNote({ annotation, active }: { annotation: Annotation; active: boolean }) {
  return (
    <div
      id={`fn-note-${annotation.id}`}
      className={`relative border-l pl-4 py-1 transition-colors duration-300 ${
        active ? "border-[#B23A2E]" : "border-[#211C17]/15"
      }`}
    >
      <span
        className={`absolute -left-[1px] top-1 h-3.5 w-[2px] transition-colors duration-300 ${
          active ? "bg-[#B23A2E]" : "bg-transparent"
        }`}
      />
      <p className="font-body-editorial text-[13px] leading-snug text-[#211C17]/70">
        <span
          className="mr-1 font-display-editorial not-italic"
          style={{ color: active ? "#B23A2E" : "#8A6D3B" }}
        >
          {annotation.id}.
        </span>
        <em className="italic">{annotation.note}</em>
      </p>
    </div>
  );
}

function FeatureRow({ feature, index }: { feature: Feature; index: number }) {
  const Icon = feature.icon;
  return (
    <Reveal delay={index * 0.06} y={18} className="border-t border-[#211C17]/15 py-8 sm:py-10">
      <div className="grid grid-cols-[3rem_1fr] sm:grid-cols-[6rem_1fr_2.5rem] items-start gap-x-4 sm:gap-x-8">
        <span
          className="font-display-editorial text-3xl sm:text-4xl leading-none"
          style={{ color: "#8A6D3B", fontVariationSettings: "'opsz' 40" }}
        >
          {feature.n}
        </span>
        <div>
          <h3 className="font-display-editorial italic text-2xl sm:text-3xl text-[#211C17]">{feature.title}</h3>
          <p className="mt-2 max-w-xl font-body-editorial text-[15px] sm:text-base leading-relaxed text-[#211C17]/75">
            {feature.description}
          </p>
        </div>
        <Icon className="hidden sm:block mt-1 h-5 w-5 shrink-0 justify-self-end" style={{ color: "#211C17", opacity: 0.35 }} strokeWidth={1.25} />
      </div>
    </Reveal>
  );
}

function StepItem({ step, index, isLast }: { step: Step; index: number; isLast: boolean }) {
  const Icon = step.icon;
  return (
    <Reveal delay={index * 0.08} y={16} className="relative flex-1 min-w-[220px]">
      <div className="flex items-center gap-3">
        <span className="fn-step-numeral">{step.n}</span>
        <Icon className="h-4 w-4" style={{ color: "#B23A2E" }} strokeWidth={1.5} />
        {!isLast && <span className="hidden sm:block flex-1 h-px bg-[#211C17]/20" />}
      </div>
      <h4 className="mt-4 font-display-editorial italic text-xl text-[#211C17]">{step.title}</h4>
      <p className="mt-2 font-body-editorial text-[14px] leading-relaxed text-[#211C17]/70 pr-4">{step.description}</p>
    </Reveal>
  );
}

/* ---------------------------------------------------------------------- */
/*  Main component                                                        */
/* ---------------------------------------------------------------------- */

export function FieldNotes() {
  const [activeMark, setActiveMark] = useState<number | null>(null);

  return (
    <main className="fn-root min-h-screen bg-[#F5EFE3] text-[#211C17] selection:bg-[#B23A2E]/20 selection:text-[#211C17]">
      <style>{`
        .fn-root { position: relative; }

        .fn-grain {
          position: fixed;
          inset: 0;
          pointer-events: none;
          z-index: 1;
          mix-blend-mode: multiply;
        }

        .fn-mark {
          all: unset;
          cursor: pointer;
          display: inline;
          border-bottom: 1.5px solid #B23A2E;
          padding-bottom: 1px;
          transition: background-color 0.25s ease;
          border-radius: 1px;
        }
        .fn-mark:hover,
        .fn-mark-active {
          background-color: rgba(178, 58, 46, 0.12);
        }

        .fn-dropcap {
          float: left;
          font-family: "Fraunces", serif;
          font-style: italic;
          font-size: 4.6rem;
          line-height: 0.78;
          padding-right: 0.35rem;
          padding-top: 0.2rem;
          color: #211C17;
          font-variation-settings: "opsz" 70;
        }

        .fn-step-numeral {
          font-family: "Fraunces", serif;
          font-style: italic;
          font-size: 1.05rem;
          color: #211C17;
          border: 1px solid #211C17;
          border-radius: 999px;
          width: 2rem;
          height: 2rem;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .fn-hairline-fade {
          height: 1px;
          background: linear-gradient(to right, transparent, rgba(33,28,23,0.35), transparent);
        }

        @keyframes fn-blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        .fn-cursor {
          animation: fn-blink 1.1s step-end infinite;
        }
      `}</style>

      {/* paper grain overlay */}
      <svg width="0" height="0" className="absolute">
        <defs>
          <filter id="fnGrainFilter">
            <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="2" seed="7" stitchTiles="stitch" />
            <feColorMatrix type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.05 0" />
          </filter>
        </defs>
      </svg>
      <div className="fn-grain" style={{ filter: "url(#fnGrainFilter)" }} />

      <div className="relative z-[2]">
        {/* ---------------------------------------------------------- */}
        {/* Utility bar                                                 */}
        {/* ---------------------------------------------------------- */}
        <div className="border-b border-[#211C17]/15">
          <div className="mx-auto max-w-6xl px-5 sm:px-8 flex items-center justify-between py-2 text-[10px] sm:text-[11px] tracking-[0.18em] uppercase">
            <Link
              to="/"
              className="text-[#8A6D3B] hover:text-[#B23A2E] transition-colors inline-flex items-center gap-1"
            >
              <span aria-hidden="true">←</span> Index
            </Link>
            <span className="text-[#211C17]/45">Field Notes Edition — 01 July 2026</span>
          </div>
        </div>

        {/* ---------------------------------------------------------- */}
        {/* Masthead                                                    */}
        {/* ---------------------------------------------------------- */}
        <header className="sticky top-0 z-20 bg-[#F5EFE3]/95 backdrop-blur-sm border-b border-[#211C17]/20">
          <div className="mx-auto max-w-6xl px-5 sm:px-8 py-4 sm:py-5 flex items-center justify-between gap-4">
            <div className="flex items-baseline gap-2 sm:gap-3">
              <span className="font-display-editorial text-xl sm:text-2xl tracking-tight text-[#211C17]">
                Ratio Reader
              </span>
              <span className="hidden sm:inline font-body-editorial italic text-xs text-[#211C17]/50">
                Vol. I &middot; No. 07
              </span>
            </div>
            <nav className="hidden md:flex items-center gap-8 font-body-editorial text-[13px] tracking-wide text-[#211C17]/70">
              {navLinks.map((l) => (
                <a key={l.href} href={l.href} className="hover:text-[#B23A2E] transition-colors">
                  {l.label}
                </a>
              ))}
            </nav>
            <button
              type="button"
              className="group inline-flex items-center gap-1.5 border border-[#211C17] px-3.5 py-1.5 text-[12px] sm:text-[13px] tracking-wide text-[#211C17] hover:bg-[#211C17] hover:text-[#F5EFE3] transition-colors"
            >
              Upload a PDF
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={1.75} />
            </button>
          </div>
        </header>

        {/* ---------------------------------------------------------- */}
        {/* Hero                                                        */}
        {/* ---------------------------------------------------------- */}
        <section className="mx-auto max-w-6xl px-5 sm:px-8 pt-14 sm:pt-20 pb-16 sm:pb-24">
          <motion.div variants={staggerContainer(0.16, 0.05)} initial="hidden" animate="show">
            <motion.p
              variants={fadeUpItem}
              className="font-body-editorial italic text-sm text-[#B23A2E] tracking-wide"
            >
              On Reading, Distilled
            </motion.p>

            <motion.h1
              variants={fadeUpItem}
              className="mt-4 font-display-editorial text-[13vw] leading-[0.98] sm:text-6xl md:text-7xl sm:leading-[0.98] text-[#211C17] max-w-4xl"
            >
              Read less.
              <br />
              Understand{" "}
              <em className="italic" style={{ fontVariationSettings: "'opsz' 90" }}>
                everything
              </em>
              .
            </motion.h1>

            <motion.p
              variants={fadeUpItem}
              className="mt-6 sm:mt-8 max-w-xl font-body-editorial text-base sm:text-lg leading-relaxed text-[#211C17]/75"
            >
              Ratio Reader turns any PDF — a paper, a contract, a report nobody has time for — into
              the summary, the hints, the quotes, and the insights you'd have found yourself,
              given a week instead of ten minutes.
            </motion.p>

            <motion.div variants={fadeUpItem} className="mt-8 flex flex-wrap items-center gap-6 sm:gap-8">
              <button
                type="button"
                className="group inline-flex items-center gap-2 bg-[#211C17] text-[#F5EFE3] px-5 py-3 text-sm tracking-wide hover:bg-[#B23A2E] transition-colors"
              >
                Upload a PDF
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={1.75} />
              </button>
              <a
                href="#sample"
                className="group inline-flex items-center gap-1.5 text-sm tracking-wide text-[#211C17]/70 hover:text-[#B23A2E] transition-colors border-b border-transparent hover:border-[#B23A2E]"
              >
                Read a sample
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" strokeWidth={1.75} />
              </a>
            </motion.div>
          </motion.div>

          {/* Manuscript mockup — signature interactive moment */}
          <motion.div
            variants={staggerContainer(0.12, 0.55)}
            initial="hidden"
            animate="show"
            className="mt-16 sm:mt-20 grid grid-cols-1 lg:grid-cols-[minmax(0,7fr)_minmax(0,4fr)] gap-8 lg:gap-10 items-start"
          >
            {/* the "page" */}
            <motion.div variants={fadeUpItem} className="relative">
              <div
                className="absolute inset-0 border border-[#211C17]/15 bg-[#EDE4D2]"
                style={{ transform: "rotate(-1.1deg)" }}
                aria-hidden="true"
              />
              <div
                className="relative border border-[#211C17]/25 bg-[#FBF7EC] px-6 sm:px-10 py-8 sm:py-10"
                style={{ transform: "rotate(0.5deg)" }}
              >
                <div className="flex items-center justify-between text-[10px] tracking-[0.2em] uppercase text-[#211C17]/40 pb-4 mb-5 border-b border-dashed border-[#211C17]/20">
                  <span>MS. 214 — Draft §3</span>
                  <span>p. 3 of 41</span>
                </div>

                <p className="font-body-editorial text-[15px] sm:text-[16px] leading-[1.75] text-[#211C17]/90 text-justify">
                  <span className="fn-dropcap" aria-hidden="true">
                    T
                  </span>
                  {manuscriptParagraphOne}
                  <ManuscriptMark
                    annotation={annotations[0]}
                    active={activeMark === 1}
                    onEnter={() => setActiveMark(1)}
                    onLeave={() => setActiveMark(null)}
                    onToggle={() => setActiveMark((v) => (v === 1 ? null : 1))}
                  />
                  {manuscriptParagraphOneMid} The result reads more like advocacy than analysis —
                  persuasive, certainly, but only to a reader who has not asked what the
                  counterfactual would need to look like.
                </p>

                <p className="mt-5 font-body-editorial text-[15px] sm:text-[16px] leading-[1.75] text-[#211C17]/90 text-justify">
                  {manuscriptParagraphTwoA}
                  <ManuscriptMark
                    annotation={annotations[1]}
                    active={activeMark === 2}
                    onEnter={() => setActiveMark(2)}
                    onLeave={() => setActiveMark(null)}
                    onToggle={() => setActiveMark((v) => (v === 2 ? null : 2))}
                  />
                  {manuscriptParagraphTwoB}
                  <ManuscriptMark
                    annotation={annotations[2]}
                    active={activeMark === 3}
                    onEnter={() => setActiveMark(3)}
                    onLeave={() => setActiveMark(null)}
                    onToggle={() => setActiveMark((v) => (v === 3 ? null : 3))}
                  />
                  {manuscriptParagraphTwoEnd}
                </p>
              </div>
            </motion.div>

            {/* the margin */}
            <motion.div variants={fadeUpItem} className="lg:pt-16">
              <p className="font-body-editorial italic text-xs text-[#8A6D3B] mb-4 tracking-wide">
                Margin notes — Smart Hints in action
              </p>
              <div className="flex flex-col gap-5">
                {annotations.map((a) => (
                  <MarginNote key={a.id} annotation={a} active={activeMark === a.id} />
                ))}
              </div>
              <p className="mt-6 font-body-editorial text-xs text-[#211C17]/45 italic">
                Hover or tap a marked phrase to see its note.
              </p>
            </motion.div>
          </motion.div>
        </section>

        {/* ---------------------------------------------------------- */}
        {/* Features                                                    */}
        {/* ---------------------------------------------------------- */}
        <section id="features" className="mx-auto max-w-6xl px-5 sm:px-8 py-16 sm:py-24">
          <Reveal>
            <p className="font-body-editorial italic text-sm text-[#B23A2E]">The Marks We Make</p>
            <h2 className="mt-3 font-display-editorial text-4xl sm:text-5xl max-w-2xl text-[#211C17]">
              Four ways we edit down what you're given.
            </h2>
          </Reveal>

          <div className="mt-6 sm:mt-10">
            {features.map((f, i) => (
              <FeatureRow key={f.title} feature={f} index={i} />
            ))}
            <div className="border-t border-[#211C17]/15" />
          </div>
        </section>

        {/* ---------------------------------------------------------- */}
        {/* How it works                                                */}
        {/* ---------------------------------------------------------- */}
        <section id="how-it-works" className="border-t border-[#211C17]/15 bg-[#EFE7D6]/60">
          <div className="mx-auto max-w-6xl px-5 sm:px-8 py-16 sm:py-24">
            <Reveal>
              <p className="font-body-editorial italic text-sm text-[#B23A2E]">The Process</p>
              <h2 className="mt-3 font-display-editorial text-4xl sm:text-5xl max-w-2xl text-[#211C17]">
                How it works, from PDF to precis.
              </h2>
            </Reveal>

            <div className="mt-12 flex flex-col sm:flex-row flex-wrap gap-10 sm:gap-6">
              {steps.map((s, i) => (
                <StepItem key={s.title} step={s} index={i} isLast={i === steps.length - 1} />
              ))}
            </div>
          </div>
        </section>

        {/* ---------------------------------------------------------- */}
        {/* Sample                                                      */}
        {/* ---------------------------------------------------------- */}
        <section id="sample" className="mx-auto max-w-6xl px-5 sm:px-8 py-16 sm:py-24">
          <Reveal>
            <p className="font-body-editorial italic text-sm text-[#B23A2E]">A Sample, Marked Up</p>
            <h2 className="mt-3 font-display-editorial text-4xl sm:text-5xl max-w-2xl text-[#211C17]">
              One excerpt. Three verdicts.
            </h2>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
            <Reveal delay={0.05}>
              <p className="text-[11px] tracking-[0.2em] uppercase text-[#211C17]/45 mb-3">
                Source — The Halden Report on Freshwater Allocation, §4.2
              </p>
              <blockquote className="font-body-editorial italic text-[17px] sm:text-lg leading-relaxed text-[#211C17]/85 border-l-2 border-[#211C17]/25 pl-5">
                "Between 2019 and 2024, seventeen municipal water authorities in the basin adopted
                tiered pricing intended to curb peak-season demand. Consumption fell in every
                district that adopted the policy — but fell furthest in the districts that could
                least afford further austerity, a pattern the report's authors note only in a
                single sentence on page thirty-three. Nowhere does the report ask whether tiered
                pricing simply shifted the burden of conservation onto households already living
                with the smallest margins."
              </blockquote>
            </Reveal>

            <motion.div
              variants={staggerContainer(0.1, 0.1)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
              className="flex flex-col gap-8"
            >
              <motion.div variants={fadeUpItem}>
                <p className="text-[11px] tracking-[0.2em] uppercase text-[#8A6D3B] mb-2">Summary</p>
                <p className="font-body-editorial text-[15px] leading-relaxed text-[#211C17]/85">
                  Tiered water pricing reduced consumption across the basin, but the report's own
                  data shows the reduction was steepest among lower-income districts — a
                  distributional cost the authors mention once and never examine.
                </p>
              </motion.div>

              <motion.div variants={fadeUpItem}>
                <p className="text-[11px] tracking-[0.2em] uppercase text-[#8A6D3B] mb-2">Key Quote</p>
                <p className="font-body-editorial text-[15px] leading-relaxed text-[#211C17]/85 pl-6 relative">
                  <Quote
                    className="absolute left-0 top-0.5 h-4 w-4"
                    style={{ color: "#B23A2E" }}
                    strokeWidth={1.5}
                    aria-hidden="true"
                  />
                  Consumption fell furthest in the districts that could least afford further
                  austerity.
                </p>
              </motion.div>

              <motion.div variants={fadeUpItem} className="border border-[#211C17]/20 p-5 bg-[#FBF7EC]">
                <p className="text-[11px] tracking-[0.2em] uppercase text-[#B23A2E] mb-2 flex items-center gap-1.5">
                  <Telescope className="h-3.5 w-3.5" strokeWidth={1.75} />
                  Insight
                </p>
                <p className="font-body-editorial text-[15px] leading-relaxed text-[#211C17]/85">
                  The report measures whether the policy worked, not who it worked on. Its own
                  tables suggest tiered pricing may function less like conservation and more like
                  rationing by income.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ---------------------------------------------------------- */}
        {/* Proof points                                                */}
        {/* ---------------------------------------------------------- */}
        <section className="border-t border-b border-[#211C17]/15">
          <div className="mx-auto max-w-6xl px-5 sm:px-8 py-14 sm:py-20">
            <motion.div
              variants={staggerContainer(0.1, 0)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-8"
            >
              {proofPoints.map((p, i) => (
                <motion.div
                  key={p.figure}
                  variants={fadeUpItem}
                  className={`${i > 0 ? "sm:border-l sm:border-[#211C17]/15 sm:pl-8" : ""}`}
                >
                  <p className="font-display-editorial italic text-4xl sm:text-5xl text-[#211C17]">{p.figure}</p>
                  <p className="mt-3 font-body-editorial text-sm leading-relaxed text-[#211C17]/70 max-w-xs">
                    {p.caption}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ---------------------------------------------------------- */}
        {/* Final CTA                                                   */}
        {/* ---------------------------------------------------------- */}
        <section className="mx-auto max-w-6xl px-5 sm:px-8 py-20 sm:py-28 text-center">
          <Reveal>
            <p className="font-body-editorial italic text-sm text-[#B23A2E]">Colophon</p>
            <h2 className="mt-4 font-display-editorial text-4xl sm:text-6xl text-[#211C17] max-w-3xl mx-auto leading-[1.05]">
              Begin with one document.
            </h2>
            <p className="mt-5 font-body-editorial text-base sm:text-lg text-[#211C17]/70 max-w-lg mx-auto leading-relaxed">
              However dense. However long. However many times you've meant to get to it.
            </p>
            <button
              type="button"
              className="group mt-9 inline-flex items-center gap-2 bg-[#211C17] text-[#F5EFE3] px-6 py-3.5 text-sm tracking-wide hover:bg-[#B23A2E] transition-colors"
            >
              Upload a PDF
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={1.75} />
            </button>
          </Reveal>
        </section>

        {/* ---------------------------------------------------------- */}
        {/* Footer                                                      */}
        {/* ---------------------------------------------------------- */}
        <footer className="border-t border-[#211C17]/20">
          <div className="mx-auto max-w-6xl px-5 sm:px-8 py-10 sm:py-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <p className="font-display-editorial text-xl text-[#211C17]">Ratio Reader</p>
              <p className="mt-1 font-body-editorial italic text-xs text-[#211C17]/50">
                Set in Fraunces &amp; Newsreader. Field Notes, Vol. I No. 07.
              </p>
            </div>
            <nav className="flex flex-wrap items-center gap-6 font-body-editorial text-[13px] text-[#211C17]/70">
              {navLinks.map((l) => (
                <a key={l.href} href={l.href} className="hover:text-[#B23A2E] transition-colors">
                  {l.label}
                </a>
              ))}
              <Link to="/" className="hover:text-[#B23A2E] transition-colors">
                ← Index
              </Link>
            </nav>
          </div>
        </footer>
      </div>
    </main>
  );
}
