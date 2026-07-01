import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion, useInView, animate } from "motion/react";
import {
  UploadCloud,
  FileText,
  Quote,
  Lightbulb,
  Sparkles,
  ArrowRight,
  ScanLine,
  Layers,
  Compass,
  CircleDot,
} from "lucide-react";
import { Reveal, staggerContainer, fadeUpItem } from "@/components/reveal";

/* ------------------------------------------------------------------ */
/* Static data                                                          */
/* ------------------------------------------------------------------ */

const NAV_LINKS = [
  { href: "#functions", label: "FUNCTIONS" },
  { href: "#procedure", label: "PROCEDURE" },
  { href: "#readout", label: "READOUT" },
  { href: "#spec", label: "SPEC" },
];

type FunctionSpec = {
  code: string;
  icon: typeof Sparkles;
  name: string;
  detail: string;
};

const FUNCTIONS: FunctionSpec[] = [
  {
    code: "FN.01",
    icon: Sparkles,
    name: "Instant Summaries",
    detail:
      "Distills the essential argument of any document to its load-bearing points in seconds — regardless of source length.",
  },
  {
    code: "FN.02",
    icon: Lightbulb,
    name: "Smart Hints",
    detail:
      "Plain-language readouts for jargon, dense passages, and buried assumptions — decoded inline, on demand.",
  },
  {
    code: "FN.03",
    icon: Quote,
    name: "Key Quotes",
    detail:
      "Isolates the exact sentences worth remembering and extracts them verbatim, with source position logged.",
  },
  {
    code: "FN.04",
    icon: Compass,
    name: "Deeper Insights",
    detail:
      "Surfaces the connections, implications, and unasked questions the source raises but never states outright.",
  },
];

type Step = {
  index: string;
  title: string;
  detail: string;
};

const STEPS: Step[] = [
  {
    index: "01",
    title: "LOAD SPECIMEN",
    detail: "Upload a PDF of any length — report, paper, contract, brief.",
  },
  {
    index: "02",
    title: "RUN ANALYSIS",
    detail: "Ratio Reader parses structure, weighs each passage, and isolates signal from filler.",
  },
  {
    index: "03",
    title: "TAKE READING",
    detail: "Receive the distilled readout: summary, hints, key quotes, and insights — calibrated together.",
  },
  {
    index: "04",
    title: "PROBE DEEPER",
    detail: "Zoom into any section for a finer-grained pass, on demand.",
  },
];

const SPECS = [
  { value: "42.4×", unit: "AVG. COMPRESSION", note: "Pages of source per 1 page of readout" },
  { value: "6.8", unit: "SECONDS / 100 PP.", note: "Median analysis time, cold document" },
  { value: "11", unit: "DOCUMENT CLASSES", note: "Reports, papers, contracts, filings & more" },
];

/* ------------------------------------------------------------------ */
/* Small structural helpers                                             */
/* ------------------------------------------------------------------ */

function CornerMarks() {
  const cls = "pointer-events-none fixed z-40 h-5 w-5 text-[#5FD4FF]/50";
  return (
    <>
      <svg className={`${cls} top-3 left-3`} viewBox="0 0 20 20" fill="none">
        <path d="M10 2V18M2 10H18" stroke="currentColor" strokeWidth="1" />
      </svg>
      <svg className={`${cls} top-3 right-3`} viewBox="0 0 20 20" fill="none">
        <path d="M10 2V18M2 10H18" stroke="currentColor" strokeWidth="1" />
      </svg>
      <svg className={`${cls} bottom-3 left-3`} viewBox="0 0 20 20" fill="none">
        <path d="M10 2V18M2 10H18" stroke="currentColor" strokeWidth="1" />
      </svg>
      <svg className={`${cls} bottom-3 right-3`} viewBox="0 0 20 20" fill="none">
        <path d="M10 2V18M2 10H18" stroke="currentColor" strokeWidth="1" />
      </svg>
    </>
  );
}

function FigCaption({ id, label }: { id: string; label: string }) {
  return (
    <p className="mt-4 font-label-technical text-[11px] tracking-[0.25em] text-[#5FD4FF]/70 uppercase text-center">
      {id} — {label}
    </p>
  );
}

function SectionTag({ children }: { children: string }) {
  return (
    <span className="inline-flex items-center gap-2 font-label-technical text-[11px] tracking-[0.3em] uppercase text-[#5FD4FF]">
      <span className="h-1 w-1 rounded-full bg-[#5FD4FF]" />
      {children}
    </span>
  );
}

/* ------------------------------------------------------------------ */
/* Signature moment — the compression gauge                            */
/* ------------------------------------------------------------------ */

function CompressionGauge() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [pages, setPages] = useState(47);
  const [ratio, setRatio] = useState(0);
  const needleRef = useRef<SVGGElement>(null);

  useEffect(() => {
    if (!inView) return;
    const pageCtrl = animate(47, 1, {
      duration: 2.2,
      delay: 0.5,
      ease: [0.65, 0, 0.35, 1],
      onUpdate: (v) => setPages(Math.round(v)),
    });
    const ratioCtrl = animate(0, 97, {
      duration: 2.4,
      delay: 0.5,
      ease: [0.65, 0, 0.35, 1],
      onUpdate: (v) => setRatio(Math.round(v)),
    });
    if (needleRef.current) {
      animate(
        needleRef.current,
        { rotate: [-90, 88] },
        { duration: 2.4, delay: 0.5, ease: [0.65, 0, 0.35, 1] },
      );
    }
    return () => {
      pageCtrl.stop();
      ratioCtrl.stop();
    };
  }, [inView]);

  const ticks = Array.from({ length: 25 }, (_, i) => i);

  return (
    <div ref={ref} className="relative mx-auto w-full max-w-xl">
      <div className="relative rounded-sm border border-[#5FD4FF]/30 bg-[#0B2942]/60 px-6 pt-10 pb-8 sm:px-10 sm:pt-12 sm:pb-10">
        <div className="absolute -top-3 left-6 bg-[#0B2942] px-2 font-label-technical text-[11px] tracking-[0.25em] text-[#5FD4FF]">
          COMPRESSION GAUGE — LIVE
        </div>

        {/* dial */}
        <div className="relative mx-auto h-[168px] w-[280px] sm:h-[196px] sm:w-[340px]">
          <svg viewBox="0 0 340 196" className="h-full w-full overflow-visible">
            {/* outer arc */}
            <path
              d="M 20 186 A 150 150 0 0 1 320 186"
              fill="none"
              stroke="#5FD4FF"
              strokeOpacity="0.25"
              strokeWidth="1.5"
            />
            {/* ticks */}
            {ticks.map((i) => {
              const angle = -180 + (i / (ticks.length - 1)) * 180;
              const rad = (angle * Math.PI) / 180;
              const major = i % 6 === 0;
              const r1 = 150;
              const r2 = major ? 136 : 143;
              const cx = 170;
              const cy = 186;
              const x1 = cx + r1 * Math.cos(rad);
              const y1 = cy + r1 * Math.sin(rad);
              const x2 = cx + r2 * Math.cos(rad);
              const y2 = cy + r2 * Math.sin(rad);
              return (
                <line
                  key={i}
                  x1={x1}
                  y1={y1}
                  x2={x2}
                  y2={y2}
                  stroke="#5FD4FF"
                  strokeOpacity={major ? 0.8 : 0.35}
                  strokeWidth={major ? 1.5 : 1}
                />
              );
            })}
            {/* needle */}
            <g ref={needleRef} style={{ transformOrigin: "170px 186px", rotate: "-90deg" }}>
              <line x1="170" y1="186" x2="170" y2="52" stroke="#FFB454" strokeWidth="2" />
              <circle cx="170" cy="186" r="6" fill="#FFB454" />
            </g>
            <circle cx="170" cy="186" r="2.5" fill="#0B2942" stroke="#FFB454" strokeWidth="1" />
          </svg>

          <div className="absolute inset-x-0 bottom-0 flex justify-between px-1 font-label-technical text-[10px] tracking-[0.2em] text-[#5FD4FF]/60">
            <span>0×</span>
            <span>24×</span>
            <span>48×</span>
          </div>
        </div>

        {/* readout numerals */}
        <div className="mt-6 grid grid-cols-2 gap-4 border-t border-dashed border-[#5FD4FF]/25 pt-6 sm:mt-8 sm:pt-8">
          <div className="text-center">
            <p className="font-display-technical text-4xl tabular-nums text-[#DCEEFF] sm:text-5xl">{pages}</p>
            <p className="mt-1 font-label-technical text-[10px] tracking-[0.25em] text-[#5FD4FF]/70 uppercase">
              pages remaining
            </p>
          </div>
          <div className="text-center">
            <p className="font-display-technical text-4xl tabular-nums text-[#FFB454] sm:text-5xl">{ratio}%</p>
            <p className="mt-1 font-label-technical text-[10px] tracking-[0.25em] text-[#5FD4FF]/70 uppercase">
              signal retained
            </p>
          </div>
        </div>

        <p className="mt-6 text-center font-display-technical text-xs tracking-[0.15em] text-[#DCEEFF]/60">
          SPECIMEN: 47 PP. SOURCE&nbsp;&nbsp;→&nbsp;&nbsp;OUTPUT: 1 PP. READOUT
        </p>
      </div>
      <FigCaption id="FIG. 01" label="COMPRESSION" />
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Leader-line annotation (SVG line + endpoint dot connecting a label   */
/* to a point on the diagram it describes)                             */
/* ------------------------------------------------------------------ */

function Leader({ className = "", flip = false }: { className?: string; flip?: boolean }) {
  return (
    <svg
      viewBox="0 0 100 40"
      className={`pointer-events-none absolute h-10 w-24 text-[#5FD4FF]/50 ${className}`}
      preserveAspectRatio="none"
    >
      <path
        d={flip ? "M100 4 L20 4 L4 36" : "M0 4 L80 4 L96 36"}
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        strokeDasharray="3 3"
      />
      <circle cx={flip ? 96 : 4} cy="36" r="2.5" fill="currentColor" />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/* Main component                                                      */
/* ------------------------------------------------------------------ */

export function Blueprint() {
  return (
    <main className="bp-root relative min-h-screen overflow-x-clip bg-[#0B2942] font-body-technical text-[#DCEEFF] selection:bg-[#5FD4FF]/30 selection:text-[#DCEEFF]">
      <style>{`
        @keyframes bp-scan-sweep {
          0% { transform: translateY(-100%); opacity: 0; }
          5% { opacity: 1; }
          92% { opacity: 1; }
          100% { transform: translateY(100vh); opacity: 0; }
        }
        .bp-scanline {
          animation: bp-scan-sweep 2.6s cubic-bezier(0.65, 0, 0.35, 1) 0.15s 1 both;
        }
        @keyframes bp-blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.25; }
        }
        .bp-blink {
          animation: bp-blink 1.8s steps(2, jump-none) infinite;
        }
        .bp-grid {
          background-image:
            linear-gradient(to right, rgba(95, 212, 255, 0.08) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(95, 212, 255, 0.08) 1px, transparent 1px),
            linear-gradient(to right, rgba(95, 212, 255, 0.16) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(95, 212, 255, 0.16) 1px, transparent 1px);
          background-size: 16px 16px, 16px 16px, 96px 96px, 96px 96px;
        }
        .bp-dashed-v {
          background-image: linear-gradient(to bottom, rgba(95, 212, 255, 0.35) 60%, transparent 40%);
          background-size: 1px 8px;
          background-repeat: repeat-y;
        }
        @keyframes bp-dial-in {
          from { opacity: 0; letter-spacing: 0.6em; }
          to { opacity: 1; letter-spacing: 0.3em; }
        }
        .bp-snap {
          animation: bp-dial-in 0.5s cubic-bezier(0.2, 0.9, 0.3, 1) both;
        }
      `}</style>

      {/* full-bleed grid background */}
      <div className="bp-grid pointer-events-none fixed inset-0 z-0" aria-hidden="true" />
      {/* vignette so grid fades toward edges */}
      <div
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          background:
            "radial-gradient(120% 100% at 50% 0%, transparent 40%, #0B2942 92%)",
        }}
        aria-hidden="true"
      />
      {/* one-time scanline sweep */}
      <div
        className="bp-scanline pointer-events-none fixed inset-x-0 top-0 z-30 h-24"
        style={{
          background:
            "linear-gradient(to bottom, transparent, rgba(95, 212, 255, 0.14), transparent)",
        }}
        aria-hidden="true"
      />

      <CornerMarks />

      <div className="relative z-10">
        {/* ============================================================ */}
        {/* HEADER / SPEC STRIP                                           */}
        {/* ============================================================ */}
        <header className="border-b border-[#5FD4FF]/20">
          <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-5 py-4 sm:px-8">
            <motion.div
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, ease: "linear" }}
              className="flex items-center gap-3"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-sm border border-[#5FD4FF]/50">
                <CircleDot className="h-4 w-4 text-[#5FD4FF]" strokeWidth={1.5} />
              </span>
              <div className="leading-tight">
                <p className="font-display-technical text-sm tracking-[0.1em] text-[#DCEEFF]">
                  RATIO READER
                </p>
                <p className="font-label-technical text-[10px] tracking-[0.2em] text-[#5FD4FF]/70 uppercase">
                  Model: RR-1 · Instrument for Text
                </p>
              </div>
            </motion.div>

            <nav className="hidden items-center gap-6 md:flex">
              {NAV_LINKS.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.06, ease: "linear" }}
                  className="font-label-technical text-[11px] tracking-[0.2em] text-[#DCEEFF]/70 transition-colors hover:text-[#5FD4FF]"
                >
                  {l.label}
                </motion.a>
              ))}
            </nav>

            <motion.a
              href="#top"
              initial={{ opacity: 0, x: 12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4, ease: "linear" }}
              className="group inline-flex items-center gap-2 rounded-sm border border-[#5FD4FF] bg-[#5FD4FF]/10 px-4 py-2 font-label-technical text-[11px] tracking-[0.2em] text-[#5FD4FF] transition-colors hover:bg-[#5FD4FF]/20"
            >
              <UploadCloud className="h-3.5 w-3.5" strokeWidth={1.75} />
              UPLOAD A PDF
            </motion.a>
          </div>
        </header>

        {/* ============================================================ */}
        {/* HERO                                                          */}
        {/* ============================================================ */}
        <section id="top" className="relative mx-auto max-w-6xl px-5 pt-16 pb-20 sm:px-8 sm:pt-24 sm:pb-28">
          <div className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-start lg:gap-10">
            <div>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.5 }}
                className="bp-snap font-label-technical text-xs tracking-[0.3em] text-[#FFB454] uppercase"
              >
                SPEC — Document Intelligence Instrument
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6, ease: [0.4, 0, 0.2, 1] }}
                className="mt-5 font-display-technical text-[2.4rem] leading-[1.08] tracking-tight text-[#DCEEFF] sm:text-6xl"
              >
                A precision instrument
                <br />
                for measuring <span className="text-[#5FD4FF]">what a document says.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.75, ease: [0.4, 0, 0.2, 1] }}
                className="mt-6 max-w-md font-body-technical text-[15px] leading-relaxed text-[#DCEEFF]/75 sm:text-base"
              >
                Ratio Reader takes any PDF — a report, a paper, a contract — and reduces it to
                a calibrated readout: the summary, the hints, the quotes, and the insights,
                measured out and logged.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9, ease: [0.4, 0, 0.2, 1] }}
                className="mt-9 flex flex-wrap items-center gap-6"
              >
                <a
                  href="#procedure"
                  className="group inline-flex items-center gap-2 rounded-sm bg-[#5FD4FF] px-6 py-3 font-display-technical text-sm tracking-[0.08em] text-[#0B2942] transition-transform hover:translate-x-0.5"
                >
                  RUN ANALYSIS
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" strokeWidth={2} />
                </a>
                <a
                  href="#readout"
                  className="font-label-technical text-[12px] tracking-[0.2em] text-[#DCEEFF]/60 underline decoration-[#5FD4FF]/40 underline-offset-4 transition-colors hover:text-[#5FD4FF]"
                >
                  VIEW SAMPLE READOUT →
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 1.1 }}
                className="mt-14 hidden max-w-md sm:block"
              >
                <div className="bp-dashed-v h-10 w-px" />
                <p className="font-label-technical text-[10px] tracking-[0.25em] text-[#5FD4FF]/50 uppercase">
                  Ref. Fig. 01, right — live measurement below
                </p>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1.0, ease: [0.4, 0, 0.2, 1] }}
            >
              <CompressionGauge />
            </motion.div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* FUNCTIONS                                                     */}
        {/* ============================================================ */}
        <section id="functions" className="relative mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
          <Reveal>
            <SectionTag>Instrument Functions</SectionTag>
            <h2 className="mt-4 max-w-lg font-display-technical text-3xl leading-tight text-[#DCEEFF] sm:text-4xl">
              Four functions. One readout.
            </h2>
          </Reveal>

          <motion.div
            variants={staggerContainer(0.1, 0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="mt-14 grid gap-px overflow-hidden rounded-sm border border-[#5FD4FF]/20 bg-[#5FD4FF]/20 sm:grid-cols-2"
          >
            {FUNCTIONS.map((fn) => {
              const Icon = fn.icon;
              return (
                <motion.div
                  key={fn.code}
                  variants={fadeUpItem}
                  className="relative bg-[#0B2942] p-7 sm:p-8"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-label-technical text-[11px] tracking-[0.25em] text-[#FFB454]">
                      {fn.code}
                    </span>
                    <Icon className="h-5 w-5 text-[#5FD4FF]" strokeWidth={1.5} />
                  </div>
                  <h3 className="mt-5 font-display-technical text-lg text-[#DCEEFF]">{fn.name}</h3>
                  <p className="mt-3 font-body-technical text-sm leading-relaxed text-[#DCEEFF]/65">
                    {fn.detail}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
          <FigCaption id="FIG. 02" label="FUNCTION MATRIX" />
        </section>

        {/* ============================================================ */}
        {/* PROCEDURE / HOW IT WORKS                                      */}
        {/* ============================================================ */}
        <section id="procedure" className="relative mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
          <Reveal>
            <SectionTag>Calibration Sequence</SectionTag>
            <h2 className="mt-4 max-w-lg font-display-technical text-3xl leading-tight text-[#DCEEFF] sm:text-4xl">
              How the reading is taken.
            </h2>
          </Reveal>

          <div className="relative mt-16">
            {/* connecting rail */}
            <div
              className="absolute top-6 right-0 left-0 hidden h-px bg-[repeating-linear-gradient(to_right,rgba(95,212,255,0.4)_0px,rgba(95,212,255,0.4)_6px,transparent_6px,transparent_12px)] sm:block"
              aria-hidden="true"
            />
            <div className="grid gap-10 sm:grid-cols-4 sm:gap-6">
              {STEPS.map((step, i) => (
                <Reveal key={step.index} delay={i * 0.1} className="relative">
                  <div className="flex items-center gap-3 sm:block">
                    <div className="relative z-10 flex h-12 w-12 flex-none items-center justify-center rounded-full border border-[#5FD4FF] bg-[#0B2942] font-display-technical text-sm text-[#5FD4FF]">
                      {step.index}
                    </div>
                    <h3 className="font-display-technical text-sm tracking-[0.05em] text-[#DCEEFF] sm:mt-5">
                      {step.title}
                    </h3>
                  </div>
                  <p className="mt-2 font-body-technical text-sm leading-relaxed text-[#DCEEFF]/65 sm:mt-3">
                    {step.detail}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
          <FigCaption id="FIG. 03" label="CALIBRATION SEQUENCE" />
        </section>

        {/* ============================================================ */}
        {/* SAMPLE READOUT                                                */}
        {/* ============================================================ */}
        <section id="readout" className="relative mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
          <Reveal>
            <SectionTag>Sample Readout</SectionTag>
            <h2 className="mt-4 max-w-lg font-display-technical text-3xl leading-tight text-[#DCEEFF] sm:text-4xl">
              One passage in. Four readings out.
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
            <Reveal>
              <p className="font-label-technical text-[11px] tracking-[0.2em] text-[#5FD4FF]/70 uppercase">
                Specimen — §4.2, Structural Load Report No. 118-C
              </p>
              <blockquote className="mt-4 border-l-2 border-[#5FD4FF]/30 pl-5 font-body-technical text-[15px] leading-relaxed text-[#DCEEFF]/80 italic">
                "Deflection under sustained load exceeded the modeled tolerance by 6.1% at the
                east span, a variance attributable to thermal creep in the polymer joint
                compound rather than the structural members themselves. Absent intervention,
                the joint compound is expected to remain within serviceable limits for a
                further 8–11 years, after which resealing is advised regardless of observed
                wear."
              </blockquote>
              <div className="relative mt-8 hidden h-16 sm:block">
                <Leader className="left-0 top-0" />
              </div>
            </Reveal>

            <Reveal delay={0.15} className="relative rounded-sm border border-[#5FD4FF]/25 bg-[#5FD4FF]/[0.04] p-6 sm:p-8">
              <div className="absolute -top-3 left-6 bg-[#0B2942] px-2 font-label-technical text-[11px] tracking-[0.25em] text-[#5FD4FF]">
                INSTRUMENT OUTPUT
              </div>
              <div className="space-y-6">
                <div>
                  <p className="flex items-center gap-2 font-label-technical text-[11px] tracking-[0.2em] text-[#5FD4FF] uppercase">
                    <Sparkles className="h-3.5 w-3.5" strokeWidth={1.75} /> Summary
                  </p>
                  <p className="mt-2 font-body-technical text-sm leading-relaxed text-[#DCEEFF]/85">
                    The east span's excess deflection is a joint-compound issue, not a
                    structural one — safe to defer, with resealing due in 8–11 years.
                  </p>
                </div>
                <div className="border-t border-dashed border-[#5FD4FF]/20 pt-6">
                  <p className="flex items-center gap-2 font-label-technical text-[11px] tracking-[0.2em] text-[#5FD4FF] uppercase">
                    <Quote className="h-3.5 w-3.5" strokeWidth={1.75} /> Key Quote
                  </p>
                  <p className="mt-2 font-body-technical text-sm leading-relaxed text-[#DCEEFF]/85">
                    "...a variance attributable to thermal creep in the polymer joint compound
                    rather than the structural members themselves."
                  </p>
                </div>
                <div className="border-t border-dashed border-[#5FD4FF]/20 pt-6">
                  <p className="flex items-center gap-2 font-label-technical text-[11px] tracking-[0.2em] text-[#FFB454] uppercase">
                    <Compass className="h-3.5 w-3.5" strokeWidth={1.75} /> Insight
                  </p>
                  <p className="mt-2 font-body-technical text-sm leading-relaxed text-[#DCEEFF]/85">
                    The report defers action on a rising trend — worth flagging for the
                    9-year mark, since "serviceable" is a range, not a guarantee.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
          <FigCaption id="FIG. 04" label="DIAGNOSTIC READOUT" />
        </section>

        {/* ============================================================ */}
        {/* SPEC / PROOF POINTS                                           */}
        {/* ============================================================ */}
        <section id="spec" className="relative mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
          <Reveal>
            <SectionTag>Measured Performance</SectionTag>
            <h2 className="mt-4 max-w-lg font-display-technical text-3xl leading-tight text-[#DCEEFF] sm:text-4xl">
              Figures from the bench.
            </h2>
          </Reveal>

          <motion.div
            variants={staggerContainer(0.1, 0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="mt-14 grid gap-px overflow-hidden rounded-sm border border-[#5FD4FF]/20 bg-[#5FD4FF]/20 sm:grid-cols-3"
          >
            {SPECS.map((s) => (
              <motion.div key={s.unit} variants={fadeUpItem} className="bg-[#0B2942] p-8 text-center">
                <p className="font-display-technical text-4xl tabular-nums text-[#5FD4FF] sm:text-5xl">
                  {s.value}
                </p>
                <p className="mt-3 font-label-technical text-[11px] tracking-[0.2em] text-[#DCEEFF] uppercase">
                  {s.unit}
                </p>
                <p className="mt-2 font-body-technical text-xs leading-relaxed text-[#DCEEFF]/55">
                  {s.note}
                </p>
              </motion.div>
            ))}
          </motion.div>
          <FigCaption id="FIG. 05" label="BENCH FIGURES" />
        </section>

        {/* ============================================================ */}
        {/* FINAL CTA                                                     */}
        {/* ============================================================ */}
        <section className="relative mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
          <Reveal className="relative overflow-hidden rounded-sm border border-[#5FD4FF]/30 bg-[#5FD4FF]/[0.05] px-8 py-14 text-center sm:px-16 sm:py-20">
            <div className="bp-blink absolute top-5 right-5 flex items-center gap-2 font-label-technical text-[10px] tracking-[0.2em] text-[#5FD4FF]">
              <Layers className="h-3 w-3" strokeWidth={1.75} />
              READY
            </div>
            <ScanLine className="mx-auto h-8 w-8 text-[#5FD4FF]" strokeWidth={1.25} />
            <h2 className="mt-6 font-display-technical text-3xl leading-tight text-[#DCEEFF] sm:text-4xl">
              Put the next document on the bench.
            </h2>
            <p className="mx-auto mt-4 max-w-md font-body-technical text-sm leading-relaxed text-[#DCEEFF]/70">
              Upload a PDF and receive a calibrated readout — summary, hints, quotes, and
              insights — before the coffee's done.
            </p>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-6">
              <a
                href="#top"
                className="group inline-flex items-center gap-2 rounded-sm bg-[#5FD4FF] px-7 py-3 font-display-technical text-sm tracking-[0.08em] text-[#0B2942] transition-transform hover:translate-x-0.5"
              >
                <UploadCloud className="h-4 w-4" strokeWidth={2} />
                UPLOAD A PDF
              </a>
              <a
                href="#readout"
                className="font-label-technical text-[12px] tracking-[0.2em] text-[#DCEEFF]/60 underline decoration-[#5FD4FF]/40 underline-offset-4 transition-colors hover:text-[#5FD4FF]"
              >
                VIEW SAMPLE READOUT →
              </a>
            </div>
          </Reveal>
        </section>

        {/* ============================================================ */}
        {/* FOOTER                                                        */}
        {/* ============================================================ */}
        <footer className="border-t border-[#5FD4FF]/20">
          <div className="mx-auto max-w-6xl px-5 py-10 sm:px-8">
            <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <div className="flex items-center gap-3">
                  <span className="flex h-7 w-7 items-center justify-center rounded-sm border border-[#5FD4FF]/50">
                    <FileText className="h-3.5 w-3.5 text-[#5FD4FF]" strokeWidth={1.5} />
                  </span>
                  <p className="font-display-technical text-sm text-[#DCEEFF]">RATIO READER</p>
                </div>
                <p className="mt-3 max-w-xs font-body-technical text-xs leading-relaxed text-[#DCEEFF]/50">
                  MODEL RR-1 · Document Intelligence Instrument. Reads what you upload, reports
                  what matters.
                </p>
              </div>

              <nav className="flex flex-wrap gap-x-6 gap-y-2">
                {NAV_LINKS.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    className="font-label-technical text-[11px] tracking-[0.2em] text-[#DCEEFF]/60 transition-colors hover:text-[#5FD4FF]"
                  >
                    {l.label}
                  </a>
                ))}
              </nav>

              <Link
                to="/"
                className="inline-flex h-fit items-center gap-2 self-start rounded-sm border border-[#5FD4FF]/40 px-3 py-1.5 font-label-technical text-[11px] tracking-[0.2em] text-[#5FD4FF]/80 transition-colors hover:border-[#5FD4FF] hover:text-[#5FD4FF]"
              >
                [ INDEX ]
              </Link>
            </div>

            <div className="mt-10 flex flex-col gap-2 border-t border-dashed border-[#5FD4FF]/20 pt-6 font-label-technical text-[10px] tracking-[0.15em] text-[#DCEEFF]/40 sm:flex-row sm:items-center sm:justify-between">
              <span>REV. 2026.07 — SPEC SHEET FOR RATIO READER, MODEL RR-1</span>
              <span>TOLERANCE ±0.5% · CALIBRATED AGAINST SOURCE TEXT</span>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}
