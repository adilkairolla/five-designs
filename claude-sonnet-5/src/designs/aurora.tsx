import { useRef } from "react";
import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import {
  motion,
  useMotionValue,
  useScroll,
  useTransform,
  type MotionValue,
  type Variants,
} from "motion/react";
import {
  ArrowLeft,
  ArrowUpRight,
  Brain,
  ChevronDown,
  FileText,
  Lightbulb,
  Quote as QuoteIcon,
  Sparkles,
  UploadCloud,
  Waypoints,
  type LucideIcon,
} from "lucide-react";
import { Reveal, staggerContainer } from "@/components/reveal";

/* ----------------------------------------------------------------------- */
/* Utilities                                                               */
/* ----------------------------------------------------------------------- */

function cn(...parts: Array<string | false | null | undefined>): string {
  return parts.filter(Boolean).join(" ");
}

const easeOut = [0.16, 1, 0.3, 1] as const;

/** Fade + slight blur-in reveal — bespoke sibling to <Reveal>, adds a soft
 *  optical "resolving into focus" quality that suits the ambient theme. */
function BlurIn({
  children,
  delay = 0,
  className,
  y = 18,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  y?: number;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y, filter: "blur(10px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.9, delay, ease: easeOut }}
    >
      {children}
    </motion.div>
  );
}

const blurUpItem: Variants = {
  hidden: { opacity: 0, y: 22, filter: "blur(10px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.8, ease: easeOut } },
};

/* ----------------------------------------------------------------------- */
/* Data                                                                    */
/* ----------------------------------------------------------------------- */

type NavLink = { href: string; label: string };

const navLinks: NavLink[] = [
  { href: "#features", label: "Features" },
  { href: "#how-it-works", label: "How it works" },
  { href: "#sample", label: "Inside a read" },
  { href: "#proof", label: "Proof" },
];

type Feature = { icon: LucideIcon; title: string; description: string; accent: string };

const features: Feature[] = [
  {
    icon: Sparkles,
    title: "Instant Summaries",
    description:
      "The essential points of anything you upload, distilled in moments — whether the source is three pages or three hundred.",
    accent: "#9B7BFF",
  },
  {
    icon: Lightbulb,
    title: "Smart Hints",
    description:
      "Calm, plain-language context the instant something reads dense or unfamiliar. No tab-switching, no dictionary required.",
    accent: "#47E0C2",
  },
  {
    icon: QuoteIcon,
    title: "Key Quotes",
    description:
      "The lines worth carrying with you — surfaced automatically, so the sentence that mattered never slips past you.",
    accent: "#FF6FA8",
  },
  {
    icon: Waypoints,
    title: "Deeper Insights",
    description:
      "The connections and implications the source never says outright, drawn out into the open where you can use them.",
    accent: "#9B7BFF",
  },
];

type Step = { index: string; title: string; description: string };

const steps: Step[] = [
  {
    index: "01",
    title: "Upload a PDF",
    description: "Bring anything — a paper, a contract, a three-hundred-page report. Length was never really the point.",
  },
  {
    index: "02",
    title: "Ratio reads, and reflects",
    description: "It reads the source in full, then sits with it — mapping structure, weighing importance, noticing what echoes.",
  },
  {
    index: "03",
    title: "Receive the distilled result",
    description: "Summary, hints, key quotes, and insights come back together — organized, legible, ready to use.",
  },
  {
    index: "04",
    title: "Go deeper where it resonates",
    description: "Open anything that catches you for more context, more connective tissue, more of the original source.",
  },
];

type Stat = { value: string; label: string; accent: string };

const stats: Stat[] = [
  { value: "2.4M+", label: "pages read on readers' behalf, every month", accent: "#9B7BFF" },
  { value: "11×", label: "faster from upload to real understanding, on average", accent: "#47E0C2" },
  { value: "94%", label: "of surfaced hints readers say they'd have otherwise searched for", accent: "#FF6FA8" },
];

/* ----------------------------------------------------------------------- */
/* Aurora background                                                       */
/* ----------------------------------------------------------------------- */

const grainUrl =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")";

function AuroraField({
  mx,
  my,
  scrollShift,
}: {
  mx: MotionValue<number>;
  my: MotionValue<number>;
  scrollShift: MotionValue<number>;
}) {
  const violetX = useTransform(mx, [-0.5, 0.5], [-26, 26]);
  const violetY = useTransform(my, [-0.5, 0.5], [-16, 16]);
  const tealX = useTransform(mx, [-0.5, 0.5], [22, -22]);
  const tealY = useTransform(my, [-0.5, 0.5], [18, -18]);
  const roseX = useTransform(mx, [-0.5, 0.5], [-14, 14]);
  const roseY = useTransform(my, [-0.5, 0.5], [-14, 14]);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-[#07070B]" aria-hidden="true">
      <motion.div className="au-blob au-blob-violet" style={{ x: violetX, y: violetY, translateY: scrollShift }} />
      <motion.div className="au-blob au-blob-teal" style={{ x: tealX, y: tealY, translateY: scrollShift }} />
      <motion.div className="au-blob au-blob-rose" style={{ x: roseX, y: roseY, translateY: scrollShift }} />
      <div className="au-blob au-blob-core" />
      <div className="au-vignette" />
      <div className="au-grain" style={{ backgroundImage: grainUrl }} />
    </div>
  );
}

/* ----------------------------------------------------------------------- */
/* Glass primitives                                                       */
/* ----------------------------------------------------------------------- */

function GlassPanel({
  className,
  children,
  glow,
}: {
  className?: string;
  children: ReactNode;
  glow?: string;
}) {
  return (
    <div
      className={cn(
        "relative rounded-3xl border border-white/10 bg-white/[0.045] backdrop-blur-2xl",
        "shadow-[0_1px_0_rgba(255,255,255,0.12)_inset,0_24px_60px_-20px_rgba(0,0,0,0.6)]",
        className,
      )}
      style={glow ? { boxShadow: `0 1px 0 rgba(255,255,255,0.12) inset, 0 24px 60px -20px rgba(0,0,0,0.6), 0 0 80px -30px ${glow}` } : undefined}
    >
      {children}
    </div>
  );
}

/* ----------------------------------------------------------------------- */
/* Hero visual — the document → summary → insight stack                   */
/* ----------------------------------------------------------------------- */

function HeroStack({ mx, my }: { mx: MotionValue<number>; my: MotionValue<number> }) {
  const rotateY = useTransform(mx, [-0.5, 0.5], [10, -10]);
  const rotateX = useTransform(my, [-0.5, 0.5], [-8, 8]);
  const shiftX = useTransform(mx, [-0.5, 0.5], [-14, 14]);
  const shiftY = useTransform(my, [-0.5, 0.5], [-10, 10]);

  const cards = [
    {
      label: "Document",
      title: "attention-debt.pdf",
      icon: FileText,
      lines: [92, 78, 88, 64],
      rotate: -7,
      x: -46,
      y: 10,
      accent: "rgba(155,123,255,0.35)",
    },
    {
      label: "Summary + hints",
      title: "Distilled in 6s",
      icon: Sparkles,
      lines: [70, 96, 55],
      rotate: -1.5,
      x: 18,
      y: -16,
      accent: "rgba(71,224,194,0.35)",
    },
    {
      label: "Insight",
      title: "What it implies",
      icon: Brain,
      lines: [60, 84],
      rotate: 6,
      x: 62,
      y: 46,
      accent: "rgba(255,111,168,0.35)",
    },
  ];

  return (
    <div className="au-perspective relative mx-auto h-[420px] w-full max-w-[420px] sm:h-[460px]">
      <motion.div
        className="relative h-full w-full"
        style={{ rotateY, rotateX, x: shiftX, y: shiftY, transformStyle: "preserve-3d" }}
      >
        {cards.map((card, i) => (
          <motion.div
            key={card.label}
            className="absolute left-1/2 top-1/2"
            style={{
              x: card.x,
              y: card.y,
              rotate: card.rotate,
              translateX: "-50%",
              translateY: "-50%",
            }}
            animate={{ y: [card.y, card.y - 14, card.y] }}
            transition={{ duration: 5 + i, repeat: Infinity, repeatType: "mirror", ease: "easeInOut", delay: i * 0.5 }}
          >
            <GlassPanel className="w-[240px] p-5 sm:w-[260px]" glow={card.accent}>
              <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-white/50">
                <card.icon className="h-3.5 w-3.5" strokeWidth={1.75} />
                {card.label}
              </div>
              <p className="mt-3 font-display-aurora text-lg leading-tight text-[#F1EEFB]">{card.title}</p>
              <div className="mt-4 flex flex-col gap-2">
                {card.lines.map((w, li) => (
                  <span
                    key={li}
                    className="h-[6px] rounded-full bg-gradient-to-r from-white/30 to-white/5"
                    style={{ width: `${w}%` }}
                  />
                ))}
              </div>
            </GlassPanel>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

/* ----------------------------------------------------------------------- */
/* Main component                                                          */
/* ----------------------------------------------------------------------- */

export function Aurora() {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rootRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll();
  const scrollShift = useTransform(scrollYProgress, [0, 1], [0, -140]);

  function handlePointerMove(e: React.MouseEvent<HTMLDivElement>) {
    const px = e.clientX / window.innerWidth - 0.5;
    const py = e.clientY / window.innerHeight - 0.5;
    mx.set(px);
    my.set(py);
  }

  return (
    <div
      ref={rootRef}
      onMouseMove={handlePointerMove}
      className="au-root relative min-h-screen w-full overflow-x-clip bg-[#07070B] font-body-aurora text-[#F1EEFB] selection:bg-[#9B7BFF]/40 selection:text-white"
    >
      <style>{`
        .au-root { --au-violet: #9B7BFF; --au-teal: #47E0C2; --au-rose: #FF6FA8; }

        .au-blob {
          position: absolute;
          border-radius: 9999px;
          mix-blend-mode: screen;
          filter: blur(90px);
          will-change: transform;
        }
        @media (min-width: 640px) { .au-blob { filter: blur(120px); } }

        .au-blob-violet {
          width: 60vw; height: 60vw; max-width: 720px; max-height: 720px;
          top: -14%; left: -12%;
          background: radial-gradient(circle at 32% 32%, rgba(155,123,255,0.85), rgba(155,123,255,0) 68%);
          animation: au-drift-a 28s ease-in-out infinite alternate;
        }
        .au-blob-teal {
          width: 55vw; height: 55vw; max-width: 660px; max-height: 660px;
          top: -8%; right: -16%;
          background: radial-gradient(circle at 65% 35%, rgba(71,224,194,0.8), rgba(71,224,194,0) 68%);
          animation: au-drift-b 34s ease-in-out infinite alternate;
        }
        .au-blob-rose {
          width: 50vw; height: 50vw; max-width: 600px; max-height: 600px;
          bottom: -18%; left: 18%;
          background: radial-gradient(circle at 50% 50%, rgba(255,111,168,0.7), rgba(255,111,168,0) 70%);
          animation: au-drift-c 32s ease-in-out infinite alternate;
        }
        .au-blob-core {
          width: 40vw; height: 40vw; max-width: 460px; max-height: 460px;
          top: 30%; left: 50%; transform: translateX(-50%);
          background: radial-gradient(circle, rgba(155,123,255,0.4), rgba(71,224,194,0.25) 45%, rgba(0,0,0,0) 72%);
          animation: au-drift-d 24s ease-in-out infinite alternate;
        }

        @keyframes au-drift-a {
          0%   { transform: translate(0, 0) scale(1); }
          50%  { transform: translate(6%, 8%) scale(1.1); }
          100% { transform: translate(-4%, -3%) scale(0.94); }
        }
        @keyframes au-drift-b {
          0%   { transform: translate(0, 0) scale(1); }
          50%  { transform: translate(-7%, 5%) scale(0.95); }
          100% { transform: translate(4%, -6%) scale(1.08); }
        }
        @keyframes au-drift-c {
          0%   { transform: translate(0, 0) scale(1); }
          50%  { transform: translate(5%, -6%) scale(1.06); }
          100% { transform: translate(-6%, 4%) scale(0.96); }
        }
        @keyframes au-drift-d {
          0%   { transform: translateX(-50%) translateY(0) scale(1); opacity: 0.7; }
          50%  { transform: translateX(-46%) translateY(4%) scale(1.12); opacity: 0.5; }
          100% { transform: translateX(-54%) translateY(-3%) scale(0.9); opacity: 0.7; }
        }

        .au-vignette {
          position: absolute; inset: 0;
          background:
            radial-gradient(ellipse 90% 60% at 50% 0%, rgba(7,7,11,0) 0%, rgba(7,7,11,0.5) 60%, rgba(7,7,11,0.95) 100%),
            radial-gradient(ellipse 120% 80% at 50% 100%, rgba(7,7,11,0.2) 0%, rgba(7,7,11,0.95) 100%);
        }
        .au-grain {
          position: absolute; inset: 0;
          opacity: 0.05;
          mix-blend-mode: overlay;
        }

        .au-perspective { perspective: 1400px; }

        .au-nav-link { position: relative; }
        .au-nav-link::after {
          content: ""; position: absolute; left: 0; right: 0; bottom: -4px; height: 1px;
          background: linear-gradient(90deg, var(--au-violet), var(--au-teal));
          transform: scaleX(0); transform-origin: left; transition: transform 0.35s ${`cubic-bezier(0.16,1,0.3,1)`};
        }
        .au-nav-link:hover::after { transform: scaleX(1); }

        .au-cta-glow {
          box-shadow: 0 0 0 1px rgba(241,238,251,0.14) inset, 0 8px 30px -8px rgba(155,123,255,0.55), 0 0 60px -20px rgba(71,224,194,0.4);
          animation: au-pulse 4.5s ease-in-out infinite;
        }
        @keyframes au-pulse {
          0%, 100% { box-shadow: 0 0 0 1px rgba(241,238,251,0.14) inset, 0 8px 30px -8px rgba(155,123,255,0.55), 0 0 60px -20px rgba(71,224,194,0.4); }
          50% { box-shadow: 0 0 0 1px rgba(241,238,251,0.2) inset, 0 8px 40px -6px rgba(155,123,255,0.75), 0 0 80px -14px rgba(71,224,194,0.55); }
        }

        .au-num-glow { text-shadow: 0 0 40px currentColor; }

        @media (prefers-reduced-motion: reduce) {
          .au-blob, .au-cta-glow { animation: none !important; }
        }
      `}</style>

      <AuroraField mx={mx} my={my} scrollShift={scrollShift} />

      {/* Top nav */}
      <header className="fixed inset-x-0 top-4 z-40 flex justify-center px-4 sm:top-6">
        <nav className="flex w-full max-w-3xl items-center justify-between gap-4 rounded-full border border-white/10 bg-white/[0.055] px-3 py-2.5 backdrop-blur-2xl sm:px-5">
          <div className="flex min-w-0 items-center gap-2 sm:gap-3">
            <Link
              to="/"
              aria-label="Back to gallery"
              className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-white/60 transition-colors hover:bg-white/[0.12] hover:text-white sm:h-8 sm:w-8"
            >
              <ArrowLeft className="h-3.5 w-3.5" strokeWidth={2} />
            </Link>
            <span className="flex min-w-0 items-center gap-2 font-display-aurora text-sm tracking-wide text-[#F1EEFB] sm:text-base">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="shrink-0">
                <defs>
                  <linearGradient id="au-mark" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
                    <stop offset="0" stopColor="#9B7BFF" />
                    <stop offset="1" stopColor="#47E0C2" />
                  </linearGradient>
                </defs>
                <circle cx="7" cy="17" r="3.4" fill="url(#au-mark)" />
                <circle cx="17" cy="7" r="2" fill="url(#au-mark)" opacity="0.85" />
                <line x1="9.2" y1="14.6" x2="15.2" y2="8.8" stroke="url(#au-mark)" strokeWidth="1.4" strokeLinecap="round" />
              </svg>
              <span className="truncate">Ratio Reader</span>
            </span>
          </div>

          <ul className="hidden items-center gap-6 text-[13px] text-white/70 md:flex">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="au-nav-link transition-colors hover:text-white">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#cta"
            className="au-cta-glow flex shrink-0 items-center gap-1.5 rounded-full bg-[#F1EEFB] px-4 py-2 text-[13px] font-medium text-[#0B0A10] transition-transform hover:scale-[1.03]"
          >
            Try Ratio Reader
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section id="hero" className="relative mx-auto flex min-h-screen max-w-6xl flex-col items-center px-6 pb-24 pt-36 sm:pt-44">
        <BlurIn className="flex flex-col items-center text-center">
          <span className="rounded-full border border-white/10 bg-white/[0.05] px-4 py-1.5 text-[11px] uppercase tracking-[0.28em] text-white/55 backdrop-blur-xl">
            Every document, distilled
          </span>
          <h1 className="mt-8 max-w-4xl font-display-aurora text-[2.6rem] font-medium leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">
            Turn the noise of reading
            <br />
            into <span className="au-headline-gradient bg-gradient-to-r from-[#9B7BFF] via-[#C9B8FF] to-[#47E0C2] bg-clip-text text-transparent">pure signal.</span>
          </h1>
          <p className="mt-7 max-w-xl text-balance text-[15px] leading-relaxed text-white/60 sm:text-base">
            Upload a PDF and Ratio Reader reads it the way a patient, brilliant friend would — then hands
            back the summary, the context, the quotes worth keeping, and the ideas underneath.
          </p>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
            <a
              href="#cta"
              className="au-cta-glow flex items-center gap-2 rounded-full bg-[#F1EEFB] px-6 py-3.5 text-sm font-medium text-[#0B0A10] transition-transform hover:scale-[1.03]"
            >
              <UploadCloud className="h-4 w-4" strokeWidth={2} />
              Upload a PDF
            </a>
            <a
              href="#sample"
              className="group flex items-center gap-1.5 text-sm text-white/55 transition-colors hover:text-white"
            >
              See how it feels
              <ChevronDown className="h-3.5 w-3.5 transition-transform group-hover:translate-y-0.5" />
            </a>
          </div>
        </BlurIn>

        <div className="mt-20 w-full sm:mt-24">
          <HeroStack mx={mx} my={my} />
        </div>
      </section>

      {/* Features */}
      <section id="features" className="relative mx-auto max-w-6xl px-6 py-28 sm:py-36">
        <BlurIn className="mx-auto max-w-2xl text-center">
          <p className="text-[11px] uppercase tracking-[0.3em] text-[#47E0C2]/80">What it does</p>
          <h2 className="mt-4 font-display-aurora text-3xl font-medium leading-tight sm:text-5xl">
            The atmosphere around your reading.
          </h2>
          <p className="mt-5 text-[15px] leading-relaxed text-white/55">
            Four quiet capabilities, always working underneath — so what reaches you is the part worth reading.
          </p>
        </BlurIn>

        <motion.div
          variants={staggerContainer(0.1, 0.05)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2"
        >
          {features.map((f) => (
            <motion.div key={f.title} variants={blurUpItem}>
              <GlassPanel className="group h-full p-7 transition-transform duration-500 hover:-translate-y-1" glow={`${f.accent}22`}>
                <div
                  className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10"
                  style={{ background: `linear-gradient(135deg, ${f.accent}33, transparent)` }}
                >
                  <f.icon className="h-5 w-5" strokeWidth={1.75} style={{ color: f.accent }} />
                </div>
                <h3 className="mt-5 font-display-aurora text-xl font-medium">{f.title}</h3>
                <p className="mt-2.5 text-[14px] leading-relaxed text-white/55">{f.description}</p>
              </GlassPanel>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="relative mx-auto max-w-5xl px-6 py-28 sm:py-36">
        <BlurIn className="mx-auto max-w-2xl text-center">
          <p className="text-[11px] uppercase tracking-[0.3em] text-[#9B7BFF]/80">How it works</p>
          <h2 className="mt-4 font-display-aurora text-3xl font-medium leading-tight sm:text-5xl">
            A calm sequence, start to finish.
          </h2>
        </BlurIn>

        <motion.ol
          variants={staggerContainer(0.12, 0.05)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="relative mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {steps.map((s) => (
            <motion.li key={s.index} variants={blurUpItem} className="list-none">
              <GlassPanel className="h-full p-6">
                <span className="font-display-aurora text-3xl text-white/25">{s.index}</span>
                <h3 className="mt-4 font-display-aurora text-lg font-medium">{s.title}</h3>
                <p className="mt-2 text-[13.5px] leading-relaxed text-white/55">{s.description}</p>
              </GlassPanel>
            </motion.li>
          ))}
        </motion.ol>
      </section>

      {/* Sample read */}
      <section id="sample" className="relative mx-auto max-w-5xl px-6 py-28 sm:py-36">
        <BlurIn className="mx-auto max-w-2xl text-center">
          <p className="text-[11px] uppercase tracking-[0.3em] text-[#FF6FA8]/80">Inside a read</p>
          <h2 className="mt-4 font-display-aurora text-3xl font-medium leading-tight sm:text-5xl">
            One document, rendered down.
          </h2>
        </BlurIn>

        <Reveal delay={0.1} className="mx-auto mt-14 max-w-3xl">
          <GlassPanel className="p-7 sm:p-9">
            <p className="text-[11px] uppercase tracking-[0.2em] text-white/40">
              Excerpt — "Attention Debt: Cognitive Load in the Age of Infinite Text" (Marín &amp; Osei, 2025)
            </p>
            <p className="mt-4 text-[15px] leading-relaxed text-white/70 sm:text-base">
              "Across fourteen longitudinal cohorts, we observed a consistent divergence between reading
              volume and reading yield: participants consumed 34% more text year-over-year while
              self-reported comprehension held flat. We term this gap attention debt — the widening distance
              between what passes before the eyes and what settles into understanding. The instruments that
              promised to help us read more, we argue, were never built to help us understand more."
            </p>
          </GlassPanel>
        </Reveal>

        <div className="mx-auto mt-6 grid max-w-3xl grid-cols-1 gap-5 sm:grid-cols-3">
          <Reveal delay={0.15}>
            <GlassPanel className="h-full p-6" glow="rgba(155,123,255,0.18)">
              <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-[#9B7BFF]">
                <Sparkles className="h-3.5 w-3.5" strokeWidth={1.75} />
                Summary
              </div>
              <p className="mt-3 text-[14px] leading-relaxed text-white/70">
                More text isn't more understanding — a widening "attention debt" separates how much we read
                from how much actually sticks.
              </p>
            </GlassPanel>
          </Reveal>
          <Reveal delay={0.25}>
            <GlassPanel className="h-full p-6" glow="rgba(255,111,168,0.18)">
              <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-[#FF6FA8]">
                <QuoteIcon className="h-3.5 w-3.5" strokeWidth={1.75} />
                Key quote
              </div>
              <p className="mt-3 font-display-aurora text-[15px] italic leading-relaxed text-white/85">
                "Never built to help us understand more."
              </p>
            </GlassPanel>
          </Reveal>
          <Reveal delay={0.35}>
            <GlassPanel className="h-full p-6" glow="rgba(71,224,194,0.18)">
              <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-[#47E0C2]">
                <Brain className="h-3.5 w-3.5" strokeWidth={1.75} />
                Insight
              </div>
              <p className="mt-3 text-[14px] leading-relaxed text-white/70">
                If comprehension hasn't scaled with consumption in over a decade, the fix isn't reading
                faster — it's reading assisted.
              </p>
            </GlassPanel>
          </Reveal>
        </div>
      </section>

      {/* Proof points */}
      <section id="proof" className="relative mx-auto max-w-5xl px-6 py-28 sm:py-36">
        <motion.div
          variants={staggerContainer(0.1, 0.05)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 gap-5 sm:grid-cols-3"
        >
          {stats.map((s) => (
            <motion.div key={s.label} variants={blurUpItem}>
              <GlassPanel className="h-full p-8 text-center" glow={`${s.accent}22`}>
                <p
                  className="au-num-glow font-display-aurora text-5xl font-medium sm:text-6xl"
                  style={{ color: s.accent }}
                >
                  {s.value}
                </p>
                <p className="mt-4 text-[13.5px] leading-relaxed text-white/55">{s.label}</p>
              </GlassPanel>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Final CTA */}
      <section id="cta" className="relative mx-auto max-w-4xl px-6 pb-28 sm:pb-36">
        <BlurIn>
          <GlassPanel className="flex flex-col items-center px-8 py-16 text-center sm:py-20" glow="rgba(155,123,255,0.28)">
            <h2 className="max-w-xl font-display-aurora text-3xl font-medium leading-tight sm:text-5xl">
              Your next read is already lighter.
            </h2>
            <p className="mt-5 max-w-md text-[15px] leading-relaxed text-white/55">
              No signup theater, no setup ritual. Drop a PDF in, and watch the noise settle into signal.
            </p>
            <a
              href="#hero"
              className="au-cta-glow mt-9 flex items-center gap-2 rounded-full bg-[#F1EEFB] px-7 py-3.5 text-sm font-medium text-[#0B0A10] transition-transform hover:scale-[1.03]"
            >
              <UploadCloud className="h-4 w-4" strokeWidth={2} />
              Try Ratio Reader
              <ArrowUpRight className="h-4 w-4" strokeWidth={2} />
            </a>
          </GlassPanel>
        </BlurIn>
      </section>

      {/* Footer */}
      <footer className="relative mx-auto max-w-6xl px-6 pb-14">
        <div className="flex flex-col items-center gap-6 border-t border-white/10 pt-10 text-center sm:flex-row sm:justify-between sm:text-left">
          <span className="font-display-aurora text-sm tracking-wide text-white/70">Ratio Reader</span>
          <ul className="flex flex-wrap items-center justify-center gap-5 text-[12.5px] text-white/45">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="transition-colors hover:text-white/80">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <span className="text-[12px] text-white/35">Reading, rendered as light. © 2026</span>
        </div>
      </footer>
    </div>
  );
}
