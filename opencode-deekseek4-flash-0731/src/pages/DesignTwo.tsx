import { motion } from "motion/react";
import {
  ArrowRight,
  Cpu,
  FileInput,
  FileText,
  Layers,
  Lightbulb,
  Network,
  Quote,
  ScanLine,
  Zap,
} from "lucide-react";
import { DesignSwitcher } from "../components/DesignSwitcher";
import { Reveal } from "../components/Reveal";

const LIME = "#c9f24b";

const LINE_WIDTHS = [92, 100, 84, 96, 60, 100, 88, 72, 100, 92, 55, 96, 80, 100, 68, 90, 76, 100];
const HOT_LINES = new Set([2, 6, 10, 14]);

const SIGNALS = [
  "thesis located — p. 3",
  "14 key figures retained",
  "7 quotable passages lifted",
  "3 buried risks flagged",
];

const MODULES = [
  {
    code: "MOD-01",
    icon: ScanLine,
    name: "Distill",
    body: "Full-document summary with claims, evidence and conclusions ranked by signal weight.",
  },
  {
    code: "MOD-02",
    icon: Lightbulb,
    name: "Annotate",
    body: "Inline hints at the dense passages — definitions, context flags, suggested reading order.",
  },
  {
    code: "MOD-03",
    icon: Quote,
    name: "Quote",
    body: "High-signal passages extracted verbatim with page-level citations. Copy without guilt.",
  },
  {
    code: "MOD-04",
    icon: Network,
    name: "Connect",
    body: "Cross-references, counterpoints and further-reading paths the author never printed.",
  },
];

const PIPELINE = [
  { step: "01", icon: FileInput, name: "Input", note: "Drop any PDF. Scans welcome." },
  { step: "02", icon: Layers, name: "Parse", note: "Structure, figures and footnotes mapped." },
  { step: "03", icon: Cpu, name: "Distill", note: "Every page weighed. Padding discarded." },
  { step: "04", icon: Zap, name: "Deliver", note: "Digest + marginalia in ~30 seconds." },
];

const LOGS = [
  {
    id: "log 0417",
    text: "Cut a 90-page spec to one page. My standups are twenty minutes shorter.",
    from: "priya@platform-team",
  },
  {
    id: "log 0388",
    text: "The hints caught an assumption three reviewers missed.",
    from: "dr. chen — genomics lab",
  },
  {
    id: "log 0291",
    text: "Quotes with page numbers. My citations write themselves now.",
    from: "marco — phd candidate",
  },
];

function ScanDemo() {
  return (
    <div className="relative overflow-hidden rounded-xl border border-[#1c242e] bg-[#0c1016] shadow-[0_0_90px_-25px_rgba(201,242,75,0.35)]">
      <div className="flex items-center justify-between border-b border-[#1c242e] px-4 py-3">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-[#c9f24b]/90" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        </div>
        <p className="font-mono text-[11px] text-white/50">annual-report.pdf — 64 pages</p>
        <p className="animate-blink font-mono text-[11px] font-semibold text-[#c9f24b]">
          ● SCANNING
        </p>
      </div>
      <div className="grid sm:grid-cols-[1fr_230px]">
        <div className="relative p-6">
          <div className="space-y-2.5">
            {LINE_WIDTHS.map((w, i) => (
              <div
                key={i}
                style={{ width: `${w}%` }}
                className={
                  HOT_LINES.has(i)
                    ? "h-2 rounded-sm bg-[#c9f24b]/90 shadow-[0_0_14px_rgba(201,242,75,0.45)]"
                    : "h-2 rounded-sm bg-white/10"
                }
              />
            ))}
          </div>
          <div className="pointer-events-none absolute inset-x-0 h-14 animate-scan bg-gradient-to-b from-transparent via-[#c9f24b]/12 to-transparent">
            <div className="absolute inset-x-0 bottom-0 h-px bg-[#c9f24b]" />
          </div>
        </div>
        <aside className="border-t border-[#1c242e] p-5 sm:border-l sm:border-t-0">
          <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-white/40">
            Extracted signals
          </p>
          <ul className="mt-4 space-y-3">
            {SIGNALS.map((s, i) => (
              <li key={s} className="flex items-start gap-2.5 font-mono text-[11px] leading-relaxed">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[#c9f24b]" />
                <span className={i === 0 ? "text-[#c9f24b]" : "text-white/70"}>{s}</span>
              </li>
            ))}
          </ul>
          <div className="mt-6 border-t border-[#1c242e] pt-4">
            <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-white/40">
              Compression
            </p>
            <p className="mt-1 font-grotesk text-3xl font-bold text-white">
              64<span className="text-white/30">:</span>
              <span className="text-[#c9f24b]">1</span>
            </p>
          </div>
        </aside>
      </div>
    </div>
  );
}

export function DesignTwo() {
  return (
    <div className="min-h-screen bg-[#07090d] text-white antialiased">
      <header className="sticky top-0 z-40 border-b border-[#1c242e] bg-[#07090d]/85 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          <p className="font-mono text-sm font-bold tracking-tight">
            RATIO<span className="text-[#c9f24b]">//</span>READER
          </p>
          <nav className="hidden items-center gap-8 font-mono text-xs uppercase tracking-[0.18em] text-white/50 md:flex">
            <a href="#modules" className="transition-colors hover:text-[#c9f24b]">
              Modules
            </a>
            <a href="#pipeline" className="transition-colors hover:text-[#c9f24b]">
              Pipeline
            </a>
            <a href="#logs" className="transition-colors hover:text-[#c9f24b]">
              Logs
            </a>
          </nav>
          <a
            href="#launch"
            className="rounded-md bg-[#c9f24b] px-4 py-2 font-mono text-xs font-bold uppercase tracking-[0.15em] text-black transition-colors hover:bg-white"
          >
            Launch console
          </a>
        </div>
      </header>

      <section className="relative overflow-hidden bg-grid-glow">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(55%_45%_at_70%_0%,rgba(201,242,75,0.09),transparent)]" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-4 py-20 lg:grid-cols-2 lg:py-28">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-[#c9f24b]/30 bg-[#c9f24b]/5 px-3.5 py-1.5 font-mono text-[11px] uppercase tracking-[0.2em] text-[#c9f24b]">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#c9f24b]" />
              System online — document intelligence v2.4
            </p>
            <h1 className="mt-6 font-grotesk text-5xl font-bold leading-[0.98] tracking-tight md:text-7xl">
              X-ray any
              <br />
              document<span className="text-[#c9f24b]">.</span>
            </h1>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-white/60">
              Ratio reader scans dense PDFs and extracts what matters — a clean summary, sharp
              hints, and the quotes that carry the argument.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#launch"
                className="inline-flex items-center gap-2 rounded-md bg-[#c9f24b] px-6 py-3.5 font-mono text-sm font-bold text-black transition-all hover:gap-3 hover:bg-white"
              >
                Upload a PDF <ArrowRight size={16} />
              </a>
              <a
                href="#modules"
                className="inline-flex items-center gap-2 rounded-md border border-white/20 px-6 py-3.5 font-mono text-sm text-white/80 transition-colors hover:border-[#c9f24b]/60 hover:text-[#c9f24b]"
              >
                Watch a scan
              </a>
            </div>
            <p className="mt-5 font-mono text-[11px] uppercase tracking-[0.18em] text-white/35">
              No signup for the first 10 scans
            </p>
          </div>
          <Reveal delay={0.1}>
            <ScanDemo />
          </Reveal>
        </div>
      </section>

      <div className="overflow-hidden border-y border-[#1c242e] bg-[#0c1016] py-3">
        <div className="flex w-max animate-marquee">
          {[0, 1].map((half) => (
            <div key={half} className="flex shrink-0 items-center">
              {[
                "10:1 compression ratio",
                "38s average digest",
                "99.2% key-point recall",
                "0 jargon survives",
                "page-exact citations",
                "hints at every dense passage",
              ].map((item) => (
                <span
                  key={item}
                  className="flex items-center gap-8 whitespace-nowrap px-8 font-mono text-xs uppercase tracking-[0.25em] text-white/45"
                >
                  {item} <span className="text-[#c9f24b]">✦</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <section id="modules" className="mx-auto max-w-6xl px-4 py-20">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2 className="font-grotesk text-3xl font-bold tracking-tight md:text-5xl">
            Four modules.
            <br />
            <span className="text-white/40">One clean read.</span>
          </h2>
          <p className="max-w-xs font-mono text-xs leading-relaxed text-white/40">
            Each module runs on every document. Toggle the output you want; keep all four — most
            readers do.
          </p>
        </div>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {MODULES.map((m, i) => (
            <Reveal key={m.code} delay={i * 0.08} className="h-full">
              <article className="group flex h-full flex-col rounded-xl border border-[#1c242e] bg-[#0c1016] p-6 transition-colors hover:border-[#c9f24b]/50">
                <div className="flex items-center justify-between">
                  <m.icon size={22} strokeWidth={1.75} className="text-[#c9f24b]" />
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/30">
                    {m.code}
                  </span>
                </div>
                <h3 className="mt-5 font-grotesk text-xl font-bold">{m.name}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-white/55">{m.body}</p>
                <p className="mt-5 font-mono text-[10px] uppercase tracking-[0.2em] text-[#c9f24b]/0 transition-colors group-hover:text-[#c9f24b]">
                  → active on all documents
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="pipeline" className="border-y border-[#1c242e] bg-[#0c1016]">
        <div className="mx-auto max-w-6xl px-4 py-20">
          <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-[#c9f24b]">
            The pipeline
          </p>
          <h2 className="mt-3 font-grotesk text-3xl font-bold tracking-tight md:text-4xl">
            From drop to digest in four moves.
          </h2>
          <div className="mt-12 grid gap-8 md:grid-cols-4 md:gap-4">
            {PIPELINE.map((p, i) => (
              <Reveal key={p.step} delay={i * 0.1}>
                <div className="relative">
                  {i < PIPELINE.length - 1 && (
                    <div className="absolute left-[calc(50%+36px)] right-[calc(-50%+36px)] top-6 hidden border-t border-dashed border-[#c9f24b]/30 md:block" />
                  )}
                  <div className="flex flex-col items-center text-center">
                    <div className="grid h-12 w-12 place-items-center rounded-full border border-[#c9f24b]/40 bg-[#c9f24b]/10">
                      <p.icon size={20} className="text-[#c9f24b]" />
                    </div>
                    <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.25em] text-white/35">
                      {p.step}
                    </p>
                    <h3 className="mt-1 font-grotesk text-xl font-bold">{p.name}</h3>
                    <p className="mt-2 max-w-[220px] text-sm leading-relaxed text-white/50">
                      {p.note}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="logs" className="mx-auto max-w-4xl px-4 py-20">
        <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-[#c9f24b]">
          Field logs
        </p>
        <h2 className="mt-3 font-grotesk text-3xl font-bold tracking-tight md:text-4xl">
          Operators report back.
        </h2>
        <div className="mt-10 space-y-3">
          {LOGS.map((log, i) => (
            <Reveal key={log.id} delay={i * 0.08}>
              <div className="rounded-lg border border-[#1c242e] bg-[#0c1016] px-5 py-4 font-mono text-sm">
                <span className="text-white/30">[{log.id}]</span>{" "}
                <span className="text-white/85">“{log.text}”</span>{" "}
                <span className="text-[#c9f24b]">— {log.from}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="launch" className="border-t border-[#1c242e]">
        <div className="mx-auto max-w-6xl px-4 py-24 text-center">
          <FileText size={30} strokeWidth={1.5} className="mx-auto text-[#c9f24b]" />
          <h2 className="mt-6 font-grotesk text-4xl font-bold tracking-tight md:text-6xl">
            Feed the machine a PDF.
          </h2>
          <p className="mx-auto mt-4 max-w-md text-white/55">
            Thirty seconds later you'll have a digest, hints, quotes and insights — and your
            evening back.
          </p>
          <motion.a
            href="#"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="mt-9 inline-flex items-center gap-2 rounded-md px-8 py-4 font-mono text-sm font-bold text-black"
            style={{ backgroundColor: LIME }}
          >
            Start scanning — free <ArrowRight size={16} />
          </motion.a>
        </div>
      </section>

      <footer className="border-t border-[#1c242e]">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-4 py-6 font-mono text-[11px] text-white/35">
          <span>
            RATIO<span className="text-[#c9f24b]">//</span>READER — document intelligence
          </span>
          <span>© 2026 · built for readers with deadlines</span>
        </div>
      </footer>

      <DesignSwitcher />
    </div>
  );
}
