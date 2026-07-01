import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { motion, type Variants } from "motion/react";
import { clsx } from "clsx";
import { cva, type VariantProps } from "class-variance-authority";
import { Zap, MessageCircleQuestion, Quote as QuoteIcon, Sparkles, Upload, ArrowRight } from "lucide-react";
import { Reveal, staggerContainer, fadeUpItem } from "@/components/reveal";

/* ---------------------------------------------------------------------- */
/*  Palette                                                                */
/* ---------------------------------------------------------------------- */

const PINK = "#FF6FA1";
const YELLOW = "#FFE066";
const BLUE = "#9FD6E0";

/* ---------------------------------------------------------------------- */
/*  Deterministic "torn paper" clip-paths (seeded, computed once)          */
/* ---------------------------------------------------------------------- */

function mulberry32(seed: number) {
  let a = seed;
  return function random() {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function tornClipPath(seed: number, jag = 3.2): string {
  const rand = mulberry32(seed);
  const steps = 9;
  const top: string[] = [];
  const bottom: string[] = [];
  for (let i = 0; i <= steps; i++) {
    const x = (i / steps) * 100;
    const yTop = rand() * jag;
    const yBottom = 100 - rand() * jag;
    top.push(`${x.toFixed(1)}% ${yTop.toFixed(1)}%`);
    bottom.push(`${x.toFixed(1)}% ${yBottom.toFixed(1)}%`);
  }
  bottom.reverse();
  return `polygon(${top.join(", ")}, ${bottom.join(", ")})`;
}

const TORN_PATHS = [1, 2, 3, 4, 5, 6].map((seed) => tornClipPath(seed));

/* ---------------------------------------------------------------------- */
/*  Small decorative primitives                                           */
/* ---------------------------------------------------------------------- */

function Pin({ className, size = 15 }: { className?: string; size?: number }) {
  return (
    <span
      aria-hidden
      className={clsx("ds-pin-shadow pointer-events-none absolute z-20 block rounded-full", className)}
      style={{
        width: size,
        height: size,
        background: "radial-gradient(circle at 32% 28%, #fff 0%, #ff9dbd 22%, #d43e73 62%, #7a1f42 100%)",
      }}
    />
  );
}

function Tape({
  color,
  rotate = -4,
  className,
}: {
  color: string;
  rotate?: number;
  className?: string;
}) {
  return (
    <span
      aria-hidden
      className={clsx("ds-tape pointer-events-none absolute z-20 block h-6 w-16 sm:h-7 sm:w-20", className)}
      style={{
        backgroundColor: color,
        backgroundImage:
          "repeating-linear-gradient(135deg, rgba(255,255,255,0.45) 0px, rgba(255,255,255,0.45) 2px, transparent 2px, transparent 7px)",
        transform: `rotate(${rotate}deg)`,
      }}
    />
  );
}

function HighlightMark({
  children,
  color = YELLOW,
  variant = 0,
  className,
}: {
  children: ReactNode;
  color?: string;
  variant?: number;
  className?: string;
}) {
  const path = variant % 2 === 0 ? "M1,15 Q20,4 40,12 T78,10 T99,13" : "M1,12 Q22,19 45,11 T80,16 T99,10";
  return (
    <span className={clsx("relative inline-block px-0.5 whitespace-normal", className)}>
      <svg
        aria-hidden
        viewBox="0 0 100 24"
        preserveAspectRatio="none"
        className="pointer-events-none absolute -inset-x-[6%] top-[6%] -z-10 h-[90%] w-[112%]"
      >
        <path d={path} fill="none" stroke={color} strokeWidth="15" strokeLinecap="round" style={{ mixBlendMode: "multiply" }} />
      </svg>
      <span className="relative">{children}</span>
    </span>
  );
}

function ScribbleArrow({ className, flip = false }: { className?: string; flip?: boolean }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 70 46"
      className={clsx("pointer-events-none absolute text-[#2B2118]", className)}
      style={{ transform: flip ? "scaleX(-1)" : undefined }}
    >
      <path
        d="M4,6 C10,26 26,40 46,36 C52,35 54,32 52,30"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.8"
      />
      <path d="M45,24 C48,28 50,33 52,30 C55,32 58,34 61,32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.8" />
    </svg>
  );
}

function TallyMarks({ className }: { className?: string }) {
  return (
    <svg aria-hidden viewBox="0 0 40 32" className={clsx("text-[#2B2118]", className)}>
      <path
        d="M4,4 L4,28 M12,4 L12,28 M20,4 L20,28 M28,4 L28,28 M2,26 L34,6"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CircledNumber({ n }: { n: number }) {
  return (
    <span className="relative inline-flex h-14 w-14 shrink-0 items-center justify-center">
      <svg aria-hidden viewBox="0 0 56 56" className="absolute inset-0">
        <path
          d="M28,4 C40,3 52,12 51,28 C50,44 39,52 27,51 C15,50 4,42 5,27 C6,13 16,5 28,4 Z"
          fill="none"
          stroke="#2B2118"
          strokeWidth="2.2"
        />
      </svg>
      <span className="font-hand-playful relative text-[28px] leading-none">{n}</span>
    </span>
  );
}

/* ---------------------------------------------------------------------- */
/*  Sticky note (cva variants)                                            */
/* ---------------------------------------------------------------------- */

const stickyNote = cva("ds-paper-grain relative shadow-[3px_5px_0_rgba(43,33,24,0.12)]", {
  variants: {
    tone: {
      pink: "bg-[#FF6FA1] text-[#2B2118]",
      yellow: "bg-[#FFE066] text-[#2B2118]",
      blue: "bg-[#9FD6E0] text-[#2B2118]",
      paper: "bg-[#FBF3DE] text-[#2B2118]",
    },
  },
  defaultVariants: { tone: "paper" },
});

type StickyToneProps = VariantProps<typeof stickyNote>;

/* ---------------------------------------------------------------------- */
/*  Motion variants                                                       */
/* ---------------------------------------------------------------------- */

function scatterItem(finalRotate: number, fromY = -70, fromX = 0): Variants {
  return {
    hidden: { opacity: 0, y: fromY, x: fromX, rotate: finalRotate * 3.4, scale: 0.82 },
    show: {
      opacity: 1,
      y: 0,
      x: 0,
      rotate: finalRotate,
      scale: 1,
      transition: { type: "spring", stiffness: 260, damping: 17, mass: 0.9 },
    },
  };
}

const hoverSettle = {
  rotate: 0,
  y: -10,
  scale: 1.035,
};

const hoverSpring = { type: "spring" as const, stiffness: 320, damping: 14 };

/* ---------------------------------------------------------------------- */
/*  Content data                                                          */
/* ---------------------------------------------------------------------- */

type Feature = {
  icon: typeof Zap;
  tone: NonNullable<StickyToneProps["tone"]>;
  title: string;
  body: string;
  rotate: number;
  mt: string;
};

const FEATURES: Feature[] = [
  {
    icon: Zap,
    tone: "yellow",
    title: "Instant Summaries",
    body: "The important stuff, distilled in seconds — doesn't matter if it's 4 pages or 400.",
    rotate: -3,
    mt: "md:mt-0",
  },
  {
    icon: MessageCircleQuestion,
    tone: "blue",
    title: "Smart Hints",
    body: "Plain-English explanations dropped in wherever it gets confusing, technical, or just plain jargon-y.",
    rotate: 2,
    mt: "md:mt-6",
  },
  {
    icon: QuoteIcon,
    tone: "pink",
    title: "Key Quotes",
    body: "The lines actually worth remembering — pulled out, highlighted, and ready to cite.",
    rotate: -2,
    mt: "md:mt-3",
  },
  {
    icon: Sparkles,
    tone: "paper",
    title: "Deeper Insights",
    body: "The connections and “wait, that means…” moments you'd have skimmed right past.",
    rotate: 3,
    mt: "md:mt-9",
  },
];

type QuoteCard = {
  pre: string;
  mark: string;
  post: string;
  source: string;
  aside: string;
  markColor: string;
  markVariant: number;
  tapeColor: string;
  cardRotate: number;
  asideRotate: number;
  torn: number;
};

const QUOTES: QuoteCard[] = [
  {
    pre: "Across three independent cohorts, the intervention group showed ",
    mark: "a moderate-to-large effect (d = 0.71)",
    post: " — though we'd love to see this replicated before anyone gets too excited.",
    source: "— Effects of Spaced Repetition on Long-Term Retention, p. 14",
    aside: "translation: it worked. probably. ask again next year",
    markColor: YELLOW,
    markVariant: 0,
    tapeColor: BLUE,
    cardRotate: -3,
    asideRotate: 6,
    torn: 0,
  },
  {
    pre: "Notwithstanding anything to the contrary herein, Party B's total liability ",
    mark: "shall not exceed the fees paid in the preceding twelve (12) months",
    post: ".",
    source: "— Master Services Agreement, section 9.3",
    aside: "THIS is the sentence your lawyer wants you to see",
    markColor: PINK,
    markVariant: 1,
    tapeColor: YELLOW,
    cardRotate: 2,
    asideRotate: -5,
    torn: 1,
  },
  {
    pre: "By the time the ice shelf finally gave way, the models predicting it had already been ",
    mark: "quietly revised three times",
    post: " — each version a little more alarming than the last.",
    source: "— longform feature, paragraph 22 of 40",
    aside: "wait. go back and read that again",
    markColor: BLUE,
    markVariant: 0,
    tapeColor: PINK,
    cardRotate: -2,
    asideRotate: 4,
    torn: 2,
  },
  {
    pre: "We didn't lose the account over price. We lost it in ",
    mark: "the eleven days it took us to reply to the first email",
    post: ".",
    source: "— internal post-mortem memo",
    aside: "oof. bookmarking this one forever",
    markColor: YELLOW,
    markVariant: 1,
    tapeColor: BLUE,
    cardRotate: 3,
    asideRotate: -6,
    torn: 3,
  },
];

const STEPS = [
  {
    title: "Drop in your PDF",
    body: "Any length, any font size, scanned or typed — doesn't matter. Just upload the thing.",
  },
  {
    title: "We actually read it",
    body: "The whole thing. Every page — not just the abstract, the intro, and a hopeful guess.",
  },
  {
    title: "You get the good stuff",
    body: "Summary, hints, quotes, and insights, all waiting for you in one spot.",
  },
  {
    title: "Dig deeper if you want",
    body: "Tap into any part for more — we already read it twice, it's really no trouble.",
  },
];

const NAV_LINKS = [
  { href: "#good-stuff", label: "the good stuff" },
  { href: "#how", label: "how it works" },
  { href: "#proof", label: "the receipts" },
];

const STATS = [
  { big: "≤ 2 min", label: "average read-back time for a 40-page paper" },
  { big: "6,200+", label: "pages read this week so nobody else had to" },
  { big: "0", label: "PDFs judged for being 87 pages long" },
];

/* ---------------------------------------------------------------------- */
/*  Component                                                              */
/* ---------------------------------------------------------------------- */

export function DeskScraps() {
  return (
    <main className="ds-root relative min-h-screen overflow-x-clip bg-[#EFE0BE] font-display-playful text-[#2B2118] selection:bg-[#FFE066] selection:text-[#2B2118]">
      <style>{`
        .ds-corkboard-texture {
          background-image:
            radial-gradient(circle at 1px 1px, rgba(43,33,24,0.10) 1px, transparent 0),
            radial-gradient(circle at 13px 9px, rgba(43,33,24,0.06) 1px, transparent 0);
          background-size: 26px 26px, 26px 26px;
        }
        .ds-paper-grain {
          background-image: radial-gradient(circle at 1px 1px, rgba(43,33,24,0.05) 1px, transparent 0);
          background-size: 5px 5px;
        }
        .ds-tape {
          mix-blend-mode: multiply;
          opacity: 0.85;
          clip-path: polygon(2% 10%, 6% 0%, 94% 0%, 98% 10%, 100% 45%, 97% 55%, 100% 90%, 94% 100%, 6% 100%, 2% 92%, 0% 55%, 3% 45%);
        }
        .ds-pin-shadow {
          filter: drop-shadow(0 3px 3px rgba(43,33,24,0.4));
        }
        @keyframes ds-draw {
          to { stroke-dashoffset: 0; }
        }
        .ds-underline-path {
          stroke-dasharray: 220;
          stroke-dashoffset: 220;
          animation: ds-draw 1s ease-out 0.5s forwards;
        }
        @keyframes ds-float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-7px); }
        }
        .ds-float {
          animation: ds-float 5.5s ease-in-out infinite;
        }
        .ds-torn {
          filter: drop-shadow(3px 7px 6px rgba(43,33,24,0.32));
        }
        .ds-torn:hover {
          filter: drop-shadow(6px 16px 16px rgba(43,33,24,0.4));
        }
        .ds-sticky-shadow {
          filter: drop-shadow(2px 6px 5px rgba(43,33,24,0.28));
        }
      `}</style>

      {/* ambient corkboard texture across the whole page */}
      <div aria-hidden className="ds-corkboard-texture pointer-events-none fixed inset-0 z-0" />

      <div className="relative z-10">
        {/* ---------------------------------------------------------- */}
        {/* Top strip / nav                                            */}
        {/* ---------------------------------------------------------- */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="sticky top-0 z-40 border-b border-[#2B2118]/10 bg-[#EFE0BE]/90 backdrop-blur-sm"
        >
          <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-5 py-4 sm:px-8">
            <div className="flex min-w-0 items-center gap-3 sm:gap-4">
              {/* torn-ticket "back to gallery" tab */}
              <Link
                to="/"
                className="ds-sticky-shadow -rotate-3 shrink-0 bg-[#FBF3DE] px-2.5 py-1 font-display-playful text-[11px] font-semibold tracking-wide text-[#2B2118] transition-transform hover:-translate-y-0.5 hover:rotate-0 sm:px-3 sm:py-1.5 sm:text-xs"
                style={{ clipPath: "polygon(0% 15%, 8% 0%, 92% 0%, 100% 15%, 100% 85%, 92% 100%, 8% 100%, 0% 85%)" }}
              >
                ← gallery
              </Link>

              <span className="relative inline-block truncate font-display-playful text-lg font-bold tracking-tight sm:text-xl">
                Ratio Reader
                <svg aria-hidden viewBox="0 0 160 14" className="pointer-events-none absolute -bottom-2 left-0 w-full">
                  <path
                    d="M2,8 C30,2 60,11 90,5 C110,1 130,9 158,4"
                    fill="none"
                    stroke={PINK}
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    className="ds-underline-path"
                  />
                </svg>
              </span>
            </div>

            <nav className="hidden items-center gap-6 font-display-playful text-sm font-medium text-[#2B2118]/80 md:flex">
              {NAV_LINKS.map((l) => (
                <a key={l.href} href={l.href} className="decoration-2 underline-offset-4 transition-colors hover:text-[#2B2118] hover:underline">
                  {l.label}
                </a>
              ))}
            </nav>

            <a
              href="#hero-cta"
              className="ds-sticky-shadow shrink-0 rotate-2 bg-[#FFE066] px-3 py-2 font-display-playful text-xs font-bold text-[#2B2118] transition-transform hover:-translate-y-0.5 hover:rotate-0 sm:px-4 sm:text-sm"
              style={{ clipPath: "polygon(0% 8%, 5% 0%, 95% 0%, 100% 10%, 98% 92%, 100% 100%, 3% 100%, 0% 90%)" }}
            >
              try it free
            </a>
          </div>
        </motion.div>

        {/* ---------------------------------------------------------- */}
        {/* Hero                                                        */}
        {/* ---------------------------------------------------------- */}
        <section id="hero" className="relative mx-auto max-w-6xl px-5 pb-24 pt-16 sm:px-8 sm:pt-24">
          <div className="relative">
            <span className="ds-float font-hand-playful pointer-events-none absolute -top-8 left-1 -rotate-6 text-xl text-[#2B2118]/70 sm:left-4 sm:text-2xl">
              seriously, we mean it
            </span>

            <Reveal y={26} duration={0.7}>
              <h1 className="max-w-3xl font-display-playful text-[2.5rem] font-bold leading-[1.05] tracking-tight sm:text-6xl">
                You don't have to <HighlightMark color={YELLOW}>read</HighlightMark> the whole thing.
              </h1>
            </Reveal>

            <Reveal delay={0.1} y={22}>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-[#2B2118]/80 sm:text-xl">
                Drop in any PDF — a paper, a contract, a 40-page report you've been avoiding — and get the
                summary, the hints, the quotes, and the insights back in about two minutes. Highlighter not included.
              </p>
            </Reveal>

            <Reveal delay={0.2} className="mt-9 flex flex-wrap items-center gap-4" y={18}>
              <a
                id="hero-cta"
                href="#quotes"
                className="ds-sticky-shadow group inline-flex -rotate-1 items-center gap-2 bg-[#2B2118] px-6 py-3.5 font-display-playful text-base font-bold text-[#FBF3DE] transition-transform hover:rotate-0 hover:-translate-y-0.5"
              >
                <Upload className="h-4 w-4" strokeWidth={2.5} />
                Upload a PDF
              </a>
              <a
                href="#quotes"
                className="font-display-playful text-sm font-semibold text-[#2B2118]/70 underline decoration-dashed decoration-2 underline-offset-4 transition-colors hover:text-[#2B2118]"
              >
                see what it finds →
              </a>
            </Reveal>

            {/* teaser scatter of tiny result-tags */}
            <Reveal delay={0.32} className="relative mt-14 flex flex-wrap gap-3 sm:gap-4" y={16}>
              {[
                { text: "40 pages → 2 min read", tone: "yellow" as const, rotate: -3 },
                { text: "jargon → plain English", tone: "blue" as const, rotate: 2 },
                { text: "the good quote, found", tone: "pink" as const, rotate: -2 },
              ].map((t) => (
                <span
                  key={t.text}
                  className={clsx(
                    stickyNote({ tone: t.tone }),
                    "ds-sticky-shadow px-4 py-2 font-display-playful text-xs font-semibold sm:text-sm"
                  )}
                  style={{ transform: `rotate(${t.rotate}deg)` }}
                >
                  {t.text}
                </span>
              ))}
            </Reveal>
          </div>
        </section>

        {/* ---------------------------------------------------------- */}
        {/* Features / "the good stuff"                                */}
        {/* ---------------------------------------------------------- */}
        <section id="good-stuff" className="relative mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
          <Reveal className="max-w-xl">
            <p className="font-hand-playful -rotate-2 text-2xl text-[#2B2118]/70">the good stuff</p>
            <h2 className="mt-1 font-display-playful text-3xl font-bold tracking-tight sm:text-4xl">
              Four things it does <HighlightMark color={BLUE} variant={1}>really</HighlightMark> well
            </h2>
          </Reveal>

          <motion.div
            variants={staggerContainer(0.12, 0.05)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2"
          >
            {FEATURES.map((f) => {
              const Icon = f.icon;
              return (
                <motion.div
                  key={f.title}
                  variants={fadeUpItem}
                  whileHover={{ rotate: 0, y: -8, scale: 1.02 }}
                  transition={hoverSpring}
                  className={clsx(stickyNote({ tone: f.tone }), "ds-sticky-shadow p-6 sm:p-7", f.mt)}
                  style={{ transform: `rotate(${f.rotate}deg)` }}
                >
                  <Pin className="left-1/2 -top-2 -translate-x-1/2" />
                  <Icon className="h-7 w-7" strokeWidth={2.2} />
                  <h3 className="mt-4 font-display-playful text-xl font-bold">{f.title}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-[#2B2118]/80">{f.body}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </section>

        {/* ---------------------------------------------------------- */}
        {/* How it works                                                */}
        {/* ---------------------------------------------------------- */}
        <section id="how" className="relative mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
          <Reveal className="max-w-xl">
            <p className="font-hand-playful rotate-2 text-2xl text-[#2B2118]/70">how it works</p>
            <h2 className="mt-1 font-display-playful text-3xl font-bold tracking-tight sm:text-4xl">
              No account setup. No tutorial. Just this:
            </h2>
          </Reveal>

          <motion.ol
            variants={staggerContainer(0.14, 0.05)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
          >
            {STEPS.map((s, i) => (
              <motion.li
                key={s.title}
                variants={fadeUpItem}
                className={clsx(
                  "ds-sticky-shadow relative bg-[#FBF3DE] p-6",
                  i % 2 === 0 ? "sm:-rotate-1" : "sm:rotate-1"
                )}
                style={{ clipPath: TORN_PATHS[i] }}
              >
                <CircledNumber n={i + 1} />
                <h3 className="mt-4 font-display-playful text-lg font-bold">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#2B2118]/80">{s.body}</p>
              </motion.li>
            ))}
          </motion.ol>
        </section>

        {/* ---------------------------------------------------------- */}
        {/* Corkboard of highlights — signature moment              */}
        {/* ---------------------------------------------------------- */}
        <section id="quotes" className="relative mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
          <Reveal className="max-w-xl">
            <p className="font-hand-playful -rotate-1 text-2xl text-[#2B2118]/70">the corkboard</p>
            <h2 className="mt-1 font-display-playful text-3xl font-bold tracking-tight sm:text-4xl">
              Real lines it would've pulled out for you
            </h2>
            <p className="mt-3 text-[15px] leading-relaxed text-[#2B2118]/70">
              Four sample documents, four sentences actually worth remembering. (Hover one — they don't like sitting
              still.)
            </p>
          </Reveal>

          <motion.div
            variants={staggerContainer(0.16, 0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="relative mt-14 grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2"
          >
            {QUOTES.map((q, i) => (
              <motion.div
                key={q.source}
                variants={scatterItem(q.cardRotate, -60, i % 2 === 0 ? -20 : 20)}
                whileHover={hoverSettle}
                transition={hoverSpring}
                className={clsx("relative", i % 2 === 1 && "sm:mt-10")}
              >
                <div
                  className="ds-torn relative bg-[#FBF3DE] p-7 pb-9 sm:p-8"
                  style={{ clipPath: TORN_PATHS[q.torn] }}
                >
                  <Pin className="left-6 -top-2" size={16} />
                  <Tape color={q.tapeColor} rotate={i % 2 === 0 ? -6 : 5} className="-right-3 -top-3" />

                  <QuoteIcon className="h-5 w-5 text-[#2B2118]/40" strokeWidth={2.2} />
                  <p className="mt-3 font-display-playful text-lg leading-snug sm:text-xl">
                    “{q.pre}
                    <HighlightMark color={q.markColor} variant={q.markVariant}>
                      {q.mark}
                    </HighlightMark>
                    {q.post}”
                  </p>
                  <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-[#2B2118]/50">{q.source}</p>
                </div>

                <div className={clsx("mt-4 flex", i % 2 === 0 ? "justify-end pr-2 text-right sm:pr-6" : "justify-start pl-2 sm:pl-6")}>
                  <div className="relative inline-block max-w-[13rem]" style={{ transform: `rotate(${q.asideRotate}deg)` }}>
                    <ScribbleArrow
                      className={clsx("pointer-events-none absolute -top-7 h-7 w-11 opacity-70", i % 2 === 0 ? "right-2" : "left-2")}
                      flip={i % 2 === 1}
                    />
                    <span className="font-hand-playful block text-xl leading-tight text-[#2B2118]/80 sm:text-2xl">
                      {q.aside}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* ---------------------------------------------------------- */}
        {/* Proof points / "the receipts"                              */}
        {/* ---------------------------------------------------------- */}
        <section id="proof" className="relative mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
          <Reveal className="max-w-xl">
            <p className="font-hand-playful rotate-1 text-2xl text-[#2B2118]/70">the receipts</p>
            <h2 className="mt-1 font-display-playful text-3xl font-bold tracking-tight sm:text-4xl">
              We made these numbers up — but they're the vibe
            </h2>
          </Reveal>

          <motion.div
            variants={staggerContainer(0.12, 0.05)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-3"
          >
            {STATS.map((s, i) => (
              <motion.div
                key={s.label}
                variants={fadeUpItem}
                whileHover={{ rotate: 0, y: -6 }}
                transition={hoverSpring}
                className={clsx(
                  "ds-sticky-shadow relative bg-[#FBF3DE] p-6 sm:p-7",
                  i === 0 && "-rotate-2",
                  i === 1 && "rotate-1",
                  i === 2 && "-rotate-1"
                )}
              >
                <p className="font-display-playful text-4xl font-bold sm:text-5xl">{s.big}</p>
                <p className="mt-2 text-sm leading-relaxed text-[#2B2118]/75">{s.label}</p>
                {i === 1 && <TallyMarks className="absolute right-5 top-6 h-7 w-7 opacity-70" />}
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* ---------------------------------------------------------- */}
        {/* Final CTA                                                   */}
        {/* ---------------------------------------------------------- */}
        <section className="relative mx-auto max-w-6xl px-5 py-20 text-center sm:px-8 sm:py-28">
          <Reveal>
            <h2 className="font-display-playful text-3xl font-bold tracking-tight sm:text-5xl">
              Stop highlighting. <br className="sm:hidden" />
              Start uploading.
            </h2>
            <p className="mx-auto mt-4 max-w-md text-[15px] leading-relaxed text-[#2B2118]/75">
              Your next PDF doesn't stand a chance. Give it two minutes and see what comes back.
            </p>
            <a
              href="#hero-cta"
              className="ds-sticky-shadow group mt-8 inline-flex rotate-1 items-center gap-2 bg-[#2B2118] px-7 py-4 font-display-playful text-base font-bold text-[#FBF3DE] transition-transform hover:rotate-0 hover:-translate-y-0.5"
            >
              Try it, it's free
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" strokeWidth={2.5} />
            </a>
          </Reveal>
        </section>

        {/* ---------------------------------------------------------- */}
        {/* Footer                                                      */}
        {/* ---------------------------------------------------------- */}
        <footer className="relative border-t border-[#2B2118]/10 px-5 py-10 sm:px-8">
          <div className="mx-auto flex max-w-6xl flex-col items-center gap-5 sm:flex-row sm:justify-between">
            <span className="font-display-playful text-base font-bold">Ratio Reader</span>
            <nav className="flex flex-wrap items-center justify-center gap-5 font-display-playful text-sm font-medium text-[#2B2118]/70">
              {NAV_LINKS.map((l) => (
                <a key={l.href} href={l.href} className="transition-colors hover:text-[#2B2118]">
                  {l.label}
                </a>
              ))}
            </nav>
            <span className="font-hand-playful -rotate-2 text-xl text-[#2B2118]/70">
              made with 4 highlighters & 1 all-nighter
            </span>
          </div>
        </footer>
      </div>
    </main>
  );
}
