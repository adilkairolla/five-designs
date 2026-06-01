import {
  ArrowRight,
  BadgeCheck,
  BookOpen,
  FileText,
  Quote,
  Upload,
  Zap,
} from "lucide-react";
import { VariantSwitcher } from "../components/VariantSwitcher";

export function PageFour() {
  return (
    <main className="min-h-screen bg-[#fff24b] text-black">
      <div className="mx-auto max-w-6xl px-6 pb-16 pt-8 md:px-10">
        <header className="flex flex-wrap items-center justify-between gap-4 border-4 border-black bg-white p-3">
          <span className="font-poster text-2xl leading-none tracking-[0.04em]">
            RATIO READER // ISSUE 01
          </span>
          <VariantSwitcher className="font-sans-alt" />
        </header>

        <section className="mt-8 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <article className="border-4 border-black bg-white p-6">
            <p className="font-sans-alt text-xs font-black tracking-[0.2em]">
              READ SHARPER
            </p>
            <h1 className="mt-4 font-poster text-6xl uppercase leading-[0.88] md:text-8xl">
              Upload PDF.
              <br />
              Get the point.
              <br />
              Fast.
            </h1>
            <p className="mt-6 max-w-xl font-sans-alt text-base leading-relaxed">
              Ratio Reader breaks dense documents into summaries, high-value
              quotes, and understanding hints. Ideal for students, researchers,
              founders, and teams who cannot waste reading time.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <button className="inline-flex items-center gap-2 border-4 border-black bg-black px-6 py-3 font-sans-alt text-sm font-black uppercase tracking-[0.12em] text-[#fff24b] transition hover:-translate-y-0.5">
                Analyze my PDF
                <ArrowRight size={16} />
              </button>
              <button className="border-4 border-black bg-[#ff7e3f] px-6 py-3 font-sans-alt text-sm font-black uppercase tracking-[0.12em]">
                Show sample
              </button>
            </div>
          </article>

          <article className="grid gap-4">
            <div className="-rotate-1 border-4 border-black bg-[#8ce1ff] p-5">
              <p className="font-sans-alt text-xs font-black tracking-[0.18em]">
                SUMMARY CARD
              </p>
              <p className="mt-2 font-sans-alt text-sm leading-6">
                The report says shorter, spaced retrieval sessions outperform
                long re-reading blocks for retention.
              </p>
            </div>
            <div className="rotate-1 border-4 border-black bg-[#ffa4d4] p-5">
              <p className="inline-flex items-center gap-1 font-sans-alt text-xs font-black tracking-[0.18em]">
                <Quote size={14} />
                QUOTE CARD
              </p>
              <p className="mt-2 font-sans-alt text-sm leading-6">
                “Feedback-rich quizzes produced stronger recall than passive
                review.”
              </p>
            </div>
            <div className="-rotate-1 border-4 border-black bg-[#c2ff8a] p-5">
              <p className="font-sans-alt text-xs font-black tracking-[0.18em]">
                HINT CARD
              </p>
              <p className="mt-2 font-sans-alt text-sm leading-6">
                Re-check section 4 before drawing conclusions. That section
                limits the claim scope.
              </p>
            </div>
          </article>
        </section>

        <section className="mt-10 grid gap-4 md:grid-cols-4">
          <div className="border-4 border-black bg-white p-4">
            <Upload size={18} />
            <p className="mt-3 font-sans-alt text-xs font-black uppercase tracking-[0.14em]">
              Upload any PDF
            </p>
          </div>
          <div className="border-4 border-black bg-white p-4">
            <BookOpen size={18} />
            <p className="mt-3 font-sans-alt text-xs font-black uppercase tracking-[0.14em]">
              Extract core ideas
            </p>
          </div>
          <div className="border-4 border-black bg-white p-4">
            <FileText size={18} />
            <p className="mt-3 font-sans-alt text-xs font-black uppercase tracking-[0.14em]">
              Capture quote cards
            </p>
          </div>
          <div className="border-4 border-black bg-white p-4">
            <BadgeCheck size={18} />
            <p className="mt-3 font-sans-alt text-xs font-black uppercase tracking-[0.14em]">
              Understand faster
            </p>
          </div>
        </section>

        <footer className="mt-10 border-4 border-black bg-black px-4 py-3 font-sans-alt text-xs font-black uppercase tracking-[0.16em] text-[#fff24b]">
          <span className="inline-flex items-center gap-2">
            <Zap size={14} />
            Ratio Reader converts document overload into useful knowledge.
          </span>
        </footer>
      </div>
    </main>
  );
}
