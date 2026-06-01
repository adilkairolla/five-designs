import {
  ArrowRight,
  Brain,
  FileText,
  Quote,
  ShieldCheck,
  Sparkles,
  Upload,
} from "lucide-react";
import { VariantSwitcher } from "../components/VariantSwitcher";

const highlights = [
  {
    title: "Precision Summary",
    text: "Receive a distilled view of the author’s strongest claims, assumptions, and takeaways.",
    icon: Brain,
  },
  {
    title: "Insight Thread",
    text: "Ratio Reader surfaces cross-section hints so difficult passages become connected, not isolated.",
    icon: Sparkles,
  },
  {
    title: "Quote Vault",
    text: "Save exact citations with context notes for presentations, essays, and strategic reviews.",
    icon: Quote,
  },
];

export function PageFive() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#04050d] text-[#ece9ff]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_12%,rgba(63,86,219,0.45),transparent_38%),radial-gradient(circle_at_84%_18%,rgba(130,84,204,0.38),transparent_45%),linear-gradient(135deg,#050613_0%,#090a1f_45%,#03030a_100%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-40 [background:linear-gradient(transparent_97%,rgba(255,255,255,0.08)_100%)] [background-size:100%_4px]" />

      <div className="relative mx-auto max-w-6xl px-6 pb-16 pt-8 md:px-10">
        <header className="flex flex-wrap items-center justify-between gap-4">
          <div className="rounded-full border border-white/25 bg-white/10 px-4 py-2 font-luxe text-xs tracking-[0.22em]">
            RATIO READER SIGNATURE
          </div>
          <VariantSwitcher tone="dark" className="font-body" />
        </header>

        <section className="mt-12 rounded-[2rem] border border-white/15 bg-white/5 p-7 shadow-[0_25px_80px_rgba(11,14,40,0.6)] backdrop-blur md:p-10">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <h1 className="font-luxe text-5xl leading-[0.9] md:text-7xl">
                Premium clarity for every complex document.
              </h1>
              <p className="mt-6 max-w-xl font-body text-lg leading-relaxed text-[#c8c7e8]">
                Upload a PDF and receive strategic summaries, quote-worthy
                evidence, and comprehension hints tailored to where most readers
                get stuck.
              </p>
              <div className="mt-8 flex flex-wrap gap-3 font-body">
                <button className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#0a0a16] transition hover:-translate-y-0.5">
                  Start with a PDF
                  <ArrowRight size={16} />
                </button>
                <button className="rounded-full border border-white/35 bg-white/10 px-6 py-3 text-sm font-semibold text-white">
                  Request live demo
                </button>
              </div>
            </div>

            <article className="relative overflow-hidden rounded-[1.5rem] border border-white/15 bg-[#0d1026]/75 p-6">
              <div className="absolute -right-10 -top-12 h-32 w-32 rounded-full bg-[#6573ff]/35 blur-2xl" />
              <p className="font-body text-xs font-semibold tracking-[0.16em] text-[#a6b2ff]">
                EXECUTIVE PREVIEW
              </p>
              <h2 className="mt-3 font-luxe text-3xl leading-tight text-white">
                Core insight
              </h2>
              <p className="mt-2 font-body text-sm leading-6 text-[#cbcef0]">
                The paper concludes that spaced retrieval with fast corrective
                feedback doubles recall consistency over pure rereading.
              </p>
              <div className="mt-5 space-y-3 font-body text-sm">
                <div className="rounded-2xl border border-[#8792ff]/30 bg-[#8792ff]/12 p-3 text-[#dbe0ff]">
                  <span className="block text-xs font-semibold tracking-[0.14em] text-[#a8b2ff]">
                    HINT
                  </span>
                  Use appendix B to evaluate which participant group was
                  overrepresented.
                </div>
                <div className="rounded-2xl border border-[#f0a7ff]/30 bg-[#f0a7ff]/12 p-3 text-[#ffdff6]">
                  <span className="inline-flex items-center gap-1 text-xs font-semibold tracking-[0.14em] text-[#ffc9f4]">
                    <Quote size={13} />
                    QUOTE
                  </span>
                  “Repetition without retrieval showed the weakest retention
                  stability.”
                </div>
              </div>
            </article>
          </div>
        </section>

        <section className="mt-10 grid gap-4 md:grid-cols-3">
          {highlights.map(({ icon: Icon, title, text }) => (
            <article
              key={title}
              className="rounded-3xl border border-white/15 bg-white/5 p-6 backdrop-blur"
            >
              <Icon size={20} className="text-[#b3bcff]" />
              <h3 className="mt-4 font-luxe text-2xl text-white">{title}</h3>
              <p className="mt-2 font-body text-sm leading-relaxed text-[#cbcce6]">
                {text}
              </p>
            </article>
          ))}
        </section>

        <footer className="mt-10 flex flex-wrap items-center gap-3 font-body text-xs font-semibold tracking-[0.14em] text-[#bcc0ef]">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2">
            <Upload size={14} />
            1-click upload
          </span>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2">
            <FileText size={14} />
            structured summaries
          </span>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2">
            <ShieldCheck size={14} />
            dependable comprehension
          </span>
        </footer>
      </div>
    </main>
  );
}
