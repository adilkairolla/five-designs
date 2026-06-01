import {
  ArrowRight,
  BookOpen,
  Brain,
  FileText,
  Quote,
  Sparkles,
  Upload,
} from "lucide-react";
import { VariantSwitcher } from "../components/VariantSwitcher";

const pillars = [
  {
    icon: Upload,
    title: "Drop Any PDF",
    copy: "Course notes, research papers, policy docs, contracts. Ratio Reader ingests structure before generating output.",
  },
  {
    icon: Brain,
    title: "Core Idea Summary",
    copy: "A fast brief that separates central claims, supporting evidence, and what to remember after one read.",
  },
  {
    icon: Quote,
    title: "High-Signal Quotes",
    copy: "Auto-curated passages with context labels so you can cite and revisit meaning without scanning pages again.",
  },
];

export function PageOne() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#f6efe4] text-[#1f1a17]">
      <div className="pointer-events-none absolute -left-24 top-16 h-72 w-72 rounded-full bg-[#dfb776]/50 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-[#db8f67]/35 blur-3xl" />

      <div className="mx-auto max-w-6xl px-6 pb-20 pt-8 md:px-10">
        <header className="flex flex-wrap items-center justify-between gap-4">
          <p className="font-body text-xs font-bold tracking-[0.28em] text-[#6c5446]">
            RATIO READER
          </p>
          <VariantSwitcher className="font-body" />
        </header>

        <section className="mt-14 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="font-body text-sm tracking-[0.12em] text-[#6c5446]">
              Editorial Concept
            </p>
            <h1 className="mt-4 font-editorial text-5xl leading-[0.92] md:text-7xl">
              Understand dense PDFs in one intentional reading pass.
            </h1>
            <p className="mt-6 max-w-xl font-body text-lg leading-relaxed text-[#3b2f28]">
              Ratio Reader converts long documents into clear summaries,
              margin-style hints, and quotable highlights so knowledge sticks
              after your first session.
            </p>
            <div className="mt-8 flex flex-wrap gap-3 font-body">
              <button className="inline-flex items-center gap-2 rounded-full bg-[#1f1a17] px-6 py-3 text-sm font-semibold text-[#f6efe4] transition hover:-translate-y-0.5">
                Upload a PDF
                <ArrowRight size={16} />
              </button>
              <button className="rounded-full border border-[#1f1a17]/30 px-6 py-3 text-sm font-semibold text-[#1f1a17] transition hover:border-[#1f1a17]">
                See sample output
              </button>
            </div>
          </div>

          <article className="relative overflow-hidden rounded-[2rem] border border-[#1f1a17]/20 bg-[#fffaf2]/90 p-7 shadow-[0_20px_50px_rgba(72,49,35,0.15)]">
            <span className="font-body text-xs font-semibold tracking-[0.2em] text-[#8f6d5b]">
              LIVE PREVIEW
            </span>
            <h2 className="mt-3 font-editorial text-3xl leading-tight">
              Why this paper matters
            </h2>
            <p className="mt-3 font-body leading-relaxed text-[#483a31]">
              This report argues that student retention improves when revision
              schedules are adaptive and short, not long and rigid.
            </p>
            <div className="mt-6 space-y-3 font-body">
              <div className="rounded-2xl bg-[#f5e9d6] p-4">
                <p className="text-xs font-bold tracking-[0.16em] text-[#8f6d5b]">
                  HINT
                </p>
                <p className="mt-1 text-sm text-[#3c2f29]">
                  Track how evidence shifts between sections 2 and 4. That is
                  the author’s main turning point.
                </p>
              </div>
              <div className="rounded-2xl bg-[#fbe7d4] p-4">
                <p className="text-xs font-bold tracking-[0.16em] text-[#8f6d5b]">
                  QUOTE
                </p>
                <p className="mt-1 text-sm text-[#3c2f29]">
                  “The strongest gains emerged when recall sessions were
                  frequent, brief, and feedback-rich.”
                </p>
              </div>
            </div>
          </article>
        </section>

        <section className="mt-14 grid gap-5 md:grid-cols-3">
          {pillars.map(({ icon: Icon, title, copy }) => (
            <article
              key={title}
              className="rounded-3xl border border-[#1f1a17]/15 bg-[#fff8ef]/80 p-6"
            >
              <Icon size={22} className="text-[#8f5f42]" />
              <h3 className="mt-4 font-editorial text-2xl">{title}</h3>
              <p className="mt-2 font-body text-sm leading-relaxed text-[#4c4038]">
                {copy}
              </p>
            </article>
          ))}
        </section>

        <footer className="mt-14 flex flex-wrap items-center justify-between gap-4 rounded-3xl border border-[#1f1a17]/15 bg-[#fffaf2]/90 p-6">
          <div className="flex items-center gap-3">
            <Sparkles className="text-[#8f5f42]" />
            <p className="font-body text-sm text-[#4c4038]">
              Built for students, analysts, legal teams, and any heavy reader.
            </p>
          </div>
          <div className="flex gap-2 font-body text-xs font-semibold tracking-[0.14em] text-[#6c5446]">
            <span className="inline-flex items-center gap-1 rounded-full border border-[#1f1a17]/20 px-3 py-1">
              <BookOpen size={14} />
              SUMMARY
            </span>
            <span className="inline-flex items-center gap-1 rounded-full border border-[#1f1a17]/20 px-3 py-1">
              <FileText size={14} />
              INSIGHTS
            </span>
          </div>
        </footer>
      </div>
    </main>
  );
}
