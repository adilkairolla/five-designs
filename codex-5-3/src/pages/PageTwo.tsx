import {
  ArrowRight,
  Bot,
  Cpu,
  Quote,
  ScanLine,
  Terminal,
  Upload,
  Zap,
} from "lucide-react";
import { VariantSwitcher } from "../components/VariantSwitcher";

const modules = [
  {
    label: "INGESTION",
    metric: "14.2s",
    text: "PDF mapped into sections, figures, and references.",
    icon: Upload,
  },
  {
    label: "SYNTHESIS",
    metric: "93%",
    text: "Main arguments ranked by explanatory weight.",
    icon: Cpu,
  },
  {
    label: "GUIDANCE",
    metric: "47",
    text: "Hints generated for difficult passages and jargon.",
    icon: Bot,
  },
];

export function PageTwo() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#070b14] text-[#d7e5ff]">
      <div className="scanlines pointer-events-none absolute inset-0 opacity-20" />
      <div className="pointer-events-none absolute left-1/2 top-[-16rem] h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-[#2d9bf0]/25 blur-3xl" />
      <div className="pointer-events-none absolute bottom-[-16rem] right-0 h-[28rem] w-[28rem] rounded-full bg-[#00ffae]/15 blur-3xl" />

      <div className="relative mx-auto flex min-h-screen max-w-6xl flex-col px-6 pb-14 pt-8 md:px-10">
        <header className="flex flex-wrap items-center justify-between gap-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#8bc2ff]/25 bg-[#0b1323] px-4 py-2 font-mono text-xs tracking-[0.2em] text-[#8bc2ff]">
            <Terminal size={14} />
            RATIO//SYSTEM
          </div>
          <VariantSwitcher tone="dark" className="font-mono" />
        </header>

        <section className="mt-12 grid items-end gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <h1 className="font-tech text-5xl uppercase leading-[0.88] text-white md:text-7xl">
              Parse
              <br />
              complexity,
              <br />
              keep meaning.
            </h1>
            <p className="mt-6 max-w-xl font-mono text-sm leading-7 text-[#b5cbf2]">
              Ratio Reader transforms noisy PDFs into concise summaries, smart
              prompts, and quote cards. It behaves like a reading copilot that
              spots weak understanding before it slows you down.
            </p>
            <div className="mt-8 flex flex-wrap gap-3 font-mono text-xs tracking-[0.15em]">
              <button className="group inline-flex items-center gap-2 rounded-none border border-[#7ad1ff] bg-[#7ad1ff]/15 px-5 py-3 text-[#cbe8ff] transition hover:bg-[#7ad1ff]/30">
                START ANALYSIS
                <ArrowRight
                  size={14}
                  className="transition group-hover:translate-x-1"
                />
              </button>
              <span className="inline-flex items-center gap-2 border border-[#00ffae]/30 bg-[#00ffae]/10 px-4 py-3 text-[#8bffd6]">
                <Zap size={14} />
                NO TRAINING REQUIRED
              </span>
            </div>
          </div>

          <article className="relative overflow-hidden border border-[#7ad1ff]/35 bg-[#081121] p-6">
            <div className="absolute right-3 top-3 h-2 w-2 rounded-full bg-[#00ffae] shadow-[0_0_20px_4px_rgba(0,255,174,0.6)]" />
            <p className="font-mono text-[11px] tracking-[0.2em] text-[#7ad1ff]">
              OUTPUT BLOCK
            </p>
            <h2 className="mt-4 font-tech text-3xl uppercase text-white">
              Key thesis
            </h2>
            <p className="mt-3 font-mono text-sm leading-6 text-[#b5cbf2]">
              The document claims that frequent retrieval practice produces
              higher long-term retention than massed re-reading.
            </p>
            <div className="mt-5 space-y-3">
              <div className="border border-[#7ad1ff]/30 bg-[#7ad1ff]/10 p-3 font-mono text-xs leading-5 text-[#d2eaff]">
                <span className="block text-[#7ad1ff]">HINT_02</span>
                Compare evidence quality in table 3 before accepting the
                conclusion.
              </div>
              <div className="border border-[#00ffae]/30 bg-[#00ffae]/10 p-3 font-mono text-xs leading-5 text-[#d6ffef]">
                <span className="mb-1 inline-flex items-center gap-1 text-[#84ffcf]">
                  <Quote size={12} />
                  QUOTE
                </span>
                “Retention rose most when quizzes were short, frequent, and
                corrective.”
              </div>
            </div>
          </article>
        </section>

        <section className="mt-10 grid gap-4 md:grid-cols-3">
          {modules.map(({ label, metric, text, icon: Icon }) => (
            <article
              key={label}
              className="border border-[#8bc2ff]/25 bg-[#091426] p-5"
            >
              <div className="flex items-center justify-between font-mono text-xs tracking-[0.18em] text-[#89c8ff]">
                <span>{label}</span>
                <Icon size={14} />
              </div>
              <p className="mt-4 font-tech text-3xl text-white">{metric}</p>
              <p className="mt-2 font-mono text-xs leading-5 text-[#adc5e9]">
                {text}
              </p>
            </article>
          ))}
        </section>

        <footer className="mt-auto pt-10 font-mono text-[11px] tracking-[0.2em] text-[#7f96bb]">
          <span className="inline-flex items-center gap-2 border border-[#7f96bb]/40 px-3 py-2">
            <ScanLine size={12} />
            SCAN. SUMMARIZE. UNDERSTAND.
          </span>
        </footer>
      </div>
    </main>
  );
}
