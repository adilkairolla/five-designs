import {
  ArrowRight,
  Brain,
  Leaf,
  Quote,
  Sparkles,
  Sprout,
  Upload,
} from "lucide-react";
import { VariantSwitcher } from "../components/VariantSwitcher";

const steps = [
  {
    title: "Plant the PDF",
    text: "Upload any document and Ratio Reader maps chapters, hierarchy, and argument flow.",
    icon: Upload,
  },
  {
    title: "Grow understanding",
    text: "Receive concise summaries, side hints, and conceptual bridges for dense sections.",
    icon: Brain,
  },
  {
    title: "Harvest clarity",
    text: "Save standout quotes and insight cards for faster review before class or meetings.",
    icon: Quote,
  },
];

export function PageThree() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#eef4e7] text-[#18281e]">
      <div className="pointer-events-none absolute left-[-9rem] top-10 h-64 w-64 rounded-full bg-[#98d48f]/50 blur-3xl" />
      <div className="pointer-events-none absolute right-[-7rem] top-1/3 h-72 w-72 rounded-full bg-[#dfc884]/45 blur-3xl" />
      <div className="pointer-events-none absolute bottom-[-10rem] left-1/3 h-72 w-72 rounded-full bg-[#9ec6d0]/35 blur-3xl" />

      <div className="mx-auto max-w-6xl px-6 pb-16 pt-8 md:px-10">
        <header className="flex flex-wrap items-center justify-between gap-4">
          <div className="rounded-full border border-[#365e3f]/25 bg-[#f7fbf2]/90 px-4 py-2 font-body text-xs font-semibold tracking-[0.15em] text-[#365e3f]">
            RATIO READER GREENHOUSE
          </div>
          <VariantSwitcher className="font-body" />
        </header>

        <section className="mt-12 grid gap-9 lg:grid-cols-[1fr_1fr]">
          <div>
            <h1 className="font-serif-soft text-5xl leading-[0.95] md:text-7xl">
              Reading support
              <br />
              that feels
              <br />
              calm and human.
            </h1>
            <p className="mt-6 max-w-lg font-body text-lg leading-relaxed text-[#2f4836]">
              Ratio Reader helps you understand complicated PDFs without
              cognitive overload. It combines precision summaries with hints
              that gently guide attention to what matters most.
            </p>
            <div className="mt-8 flex flex-wrap gap-3 font-body">
              <button className="inline-flex items-center gap-2 rounded-full bg-[#244634] px-6 py-3 text-sm font-semibold text-[#edf4e8] transition hover:bg-[#1b3628]">
                Try with your PDF
                <ArrowRight size={16} />
              </button>
              <button className="rounded-full border border-[#244634]/30 px-6 py-3 text-sm font-semibold text-[#244634] transition hover:border-[#244634]">
                Explore examples
              </button>
            </div>
          </div>

          <article className="relative overflow-hidden rounded-[2.5rem] border border-[#264732]/20 bg-[#f7fbf2]/90 p-7">
            <div className="pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full border-8 border-[#89c078]/35" />
            <p className="font-body text-xs font-semibold tracking-[0.18em] text-[#55725b]">
              INSIGHT SNAPSHOT
            </p>
            <h2 className="mt-3 font-serif-soft text-3xl leading-tight">
              Main argument at a glance
            </h2>
            <p className="mt-3 font-body leading-relaxed text-[#35503d]">
              The article finds that spaced review, not volume of reading,
              determines retention in high-workload learning environments.
            </p>
            <div className="mt-5 space-y-3">
              <div className="rounded-2xl bg-[#ddeed4] p-4 font-body text-sm text-[#264732]">
                <p className="font-semibold tracking-[0.12em] text-[#55725b]">
                  HINT
                </p>
                Focus on the timeline chart. It explains why week-two outcomes
                improve even when total study time drops.
              </div>
              <div className="rounded-2xl bg-[#e8dfbf] p-4 font-body text-sm text-[#3f3a27]">
                <p className="inline-flex items-center gap-1 font-semibold tracking-[0.12em] text-[#6f6240]">
                  <Quote size={14} />
                  QUOTE
                </p>
                “Retention depends more on retrieval rhythm than reading
                duration.”
              </div>
            </div>
          </article>
        </section>

        <section className="mt-12 grid gap-4 md:grid-cols-3">
          {steps.map(({ icon: Icon, title, text }) => (
            <article
              key={title}
              className="rounded-3xl border border-[#244634]/15 bg-[#f7fbf2]/90 p-6"
            >
              <Icon size={20} className="text-[#2e5a3d]" />
              <h3 className="mt-4 font-serif-soft text-2xl">{title}</h3>
              <p className="mt-2 font-body text-sm leading-relaxed text-[#35503d]">
                {text}
              </p>
            </article>
          ))}
        </section>

        <footer className="mt-12 flex flex-wrap items-center gap-3 font-body text-xs font-semibold tracking-[0.14em] text-[#44644b]">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#44644b]/25 bg-[#f7fbf2] px-4 py-2">
            <Leaf size={14} />
            LESS OVERWHELM
          </span>
          <span className="inline-flex items-center gap-2 rounded-full border border-[#44644b]/25 bg-[#f7fbf2] px-4 py-2">
            <Sprout size={14} />
            DEEPER COMPREHENSION
          </span>
          <span className="inline-flex items-center gap-2 rounded-full border border-[#44644b]/25 bg-[#f7fbf2] px-4 py-2">
            <Sparkles size={14} />
            BETTER RECALL
          </span>
        </footer>
      </div>
    </main>
  );
}
