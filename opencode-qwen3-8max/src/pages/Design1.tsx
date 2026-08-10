import {
  ArrowRight,
  Quote,
  Lightbulb,
  BookOpenText,
  ListChecks,
  Sparkles,
  ScanLine,
  FileUp,
  Wand2,
  Library,
} from "lucide-react";
import { Switcher } from "../components/Switcher";

/* ————— decorative helpers ————— */

function DropCap({ children }: { children: string }) {
  return (
    <span className="float-left mr-3 mt-1 font-serif text-6xl font-semibold leading-[0.8] text-[#d8a34c]">
      {children}
    </span>
  );
}

function Rule() {
  return (
    <div className="mx-auto flex max-w-xs items-center gap-3 text-[#8a6d3b]">
      <span className="h-px flex-1 bg-gradient-to-r from-transparent via-[#8a6d3b]/60 to-transparent" />
      <span className="text-[10px] tracking-[0.3em]">✦</span>
      <span className="h-px flex-1 bg-gradient-to-r from-transparent via-[#8a6d3b]/60 to-transparent" />
    </div>
  );
}

/* An excerpt of a "document" rendered like the product's output */
function ReaderPanel() {
  const doc =
    "The availability heuristic describes the tendency of the human mind to judge the likelihood of an event by how easily examples come to mind. Introduced by psychologists Daniel Kahneman and Amos Tversky in 1973, it explains why dramatic, vivid events feel more probable than they are. News coverage of plane crashes, for instance, makes flying appear riskier than driving — although statistically far safer. While useful as a mental shortcut, the heuristic frequently distorts decisions in finance, medicine and policy. Awareness of the bias is the first step toward mitigating it, a theme central to modern behavioral economics.";

  return (
    <div className="perspective-1200">
      <div
        className="relative mx-auto w-full max-w-3xl bg-[#211a10] p-6 shadow-[0_40px_120px_-30px_rgba(0,0,0,0.9)] ring-1 ring-[#d8a34c]/20 sm:p-10"
        style={{ transform: "rotateX(2deg)" }}
      >
        {/* page header */}
        <header className="mb-6 flex items-center justify-between border-b border-[#d8a34c]/25 pb-4">
          <div className="flex items-center gap-3">
            <Library className="h-5 w-5 text-[#d8a34c]" aria-hidden />
            <div>
              <p className="font-serif text-sm italic text-[#e9d9b8]">
                Thinking, Fast and Slow — distilled
              </p>
              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#8a6d3b]">
                ratio reader · 412 pages → 3 min
              </p>
            </div>
          </div>
          <span className="hidden rounded-full border border-[#d8a34c]/40 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-[#d8a34c] sm:block">
            key ideas · 9
          </span>
        </header>

        {/* body */}
        <div className="relative">
          <h3 className="mb-4 font-serif text-2xl font-semibold text-[#f4e8cf]">
            The Availability Heuristic &amp; why drama beats data
          </h3>

          <p className="text-[15px] leading-8 text-[#cdbfa3]">
            <DropCap>A</DropCap>
            {doc.slice(1, 285)}
            <mark className="bg-[#d8a34c]/30 px-1 text-[#f4e8cf]">
              how easily examples come to mind
            </mark>
            {doc.slice(285, 470)}
            <mark className="bg-[#8f74d0]/30 px-1 text-[#e8defb]">
              awareness of the bias is the first step toward mitigating it
            </mark>
            {doc.slice(470)}
          </p>

          {/* marginalia — hint */}
          <aside className="absolute -right-5 top-24 hidden w-44 rotate-2 border border-[#d8a34c]/40 bg-[#2a2112] p-3 shadow-xl lg:block">
            <div className="mb-1 flex items-center gap-1.5 text-[#d8a34c]">
              <Lightbulb className="h-3.5 w-3.5" aria-hidden />
              <span className="font-mono text-[9px] uppercase tracking-[0.2em]">hint</span>
            </div>
            <p className="font-serif text-[12px] italic leading-5 text-[#e9d9b8]">
              Remember the plane crash example — vivid skips the evidence.
            </p>
            <span className="absolute -bottom-3 left-6 h-6 w-px bg-[#d8a34c]/60" />
          </aside>

          {/* marginalia — quote */}
          <aside className="absolute -left-8 top-56 hidden -rotate-3 border border-[#d8a34c]/40 bg-[#2a2112] p-3 shadow-xl lg:block">
            <div className="mb-1 flex items-center gap-1.5 text-[#d8a34c]">
              <Quote className="h-3.5 w-3.5" aria-hidden />
              <span className="font-mono text-[9px] uppercase tracking-[0.2em]">quote</span>
            </div>
            <p className="font-serif text-[12px] italic leading-5 text-[#e9d9b8]">
              “Nothing in life is as important as you think it is — while you are
              thinking about it.”
            </p>
          </aside>
        </div>

        {/* insight strip */}
        <div className="mt-8 grid gap-3 sm:grid-cols-3">
          <div className="border border-[#d8a34c]/25 bg-[#2a2112]/60 p-4">
            <p className="mb-1 font-mono text-[9px] uppercase tracking-[0.25em] text-[#8a6d3b]">
              insight
            </p>
            <p className="font-serif text-[13px] leading-5 text-[#e9d9b8]">
              We judge risk by memory, not math. Meta-cognition is the antidote.
            </p>
          </div>
          <div className="border border-[#d8a34c]/25 bg-[#2a2112]/60 p-4">
            <p className="mb-1 font-mono text-[9px] uppercase tracking-[0.25em] text-[#8a6d3b]">
              applied to
            </p>
            <p className="font-serif text-[13px] leading-5 text-[#e9d9b8]">
              Investing, medical diagnosis, hiring, and everyday decision logic.
            </p>
          </div>
          <div className="border border-[#d8a34c]/25 bg-[#2a2112]/60 p-4">
            <p className="mb-1 font-mono text-[9px] uppercase tracking-[0.25em] text-[#8a6d3b]">
              next idea
            </p>
            <p className="font-serif text-[13px] leading-5 text-[#e9d9b8]">
              Loss aversion — why losing sh240 hurts more than winning gratifies.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ————— main page ————— */

export function Design1() {
  return (
    <div className="min-h-screen bg-[#15100a] font-serif text-[#cdbfa3] selection:bg-[#d8a34c]/40">
      <Switcher current={1} />

      {/* top linen */}
      <div className="absolute inset-x-0 top-0 mx-auto h-px max-w-5xl bg-gradient-to-r from-transparent via-[#d8a34c]/60 to-transparent" />

      {/* ================= NAV ================= */}
      <header className="sticky top-0 z-40 border-b border-[#d8a34c]/15 bg-[#15100a]/85 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="/1" className="group flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded bg-[#d8a34c] text-[#15100a]">
              <BookOpenText className="h-4 w-4" aria-hidden />
            </span>
            <span className="font-serif text-lg tracking-tight text-[#f4e8cf]">
              Ratio<span className="italic text-[#d8a34c]">Reader</span>
            </span>
          </a>
          <nav className="hidden items-center gap-7 text-sm md:flex">
            {["Essence", "Method", "Notes"].map((l) => (
              <a key={l} href="#name" className="italic text-[#cdbfa3] transition hover:text-[#d8a34c]" onClick={(e) => { e.preventDefault(); const map: Record<string, string> = { Essence: "#feature", Method: "#method", Notes: "#notes" }; document.querySelector(map[l])?.scrollIntoView({ behavior: "smooth" }); }}>{l}</a>
            ))}
            <a href="#cta" className="rounded-full bg-[#d8a34c] px-5 py-2 font-sans text-sm font-medium text-[#15100a] transition hover:bg-[#e6b860]">
              Begin reading
            </a>
          </nav>
        </div>
      </header>

      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden px-6 pb-24 pt-20 text-center sm:pt-28">
        {/* soft candle glow */}
        <div className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[900px] -translate-x-1/2 rounded-full bg-[#d8a34c]/[0.07] blur-3xl" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#15100a] to-transparent" />

        <p className="mx-auto mb-8 inline-flex items-center gap-2 rounded-full border border-[#d8a34c]/30 bg-[#d8a34c]/5 px-4 py-1.5 font-mono text-[11px] uppercase tracking-[0.3em] text-[#d8a34c]">
          <Sparkles className="h-3.5 w-3.5" aria-hidden />
          read less · understand more
        </p>

        <h1 className="mx-auto max-w-4xl text-balance font-serif text-5xl font-semibold leading-[1.02] text-[#f4e8cf] sm:text-7xl">
          Every book is a thousand pages.
          <br />
          <span className="italic text-[#d8a34c]">Keep the hundred that matter.</span>
        </h1>

        <p className="mx-auto mt-8 max-w-2xl text-pretty text-lg leading-8 text-[#b6a683]">
          Upload any PDF. Ratio Reader reads it cover to cover, then hands you
          the essence — a distilled summary, pointed hints, the quotes worth
          framing, and insights that connect the idea to your life.
        </p>

        {/* CTA row */}
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a href="#cta" className="group inline-flex items-center gap-2 rounded-full bg-[#d8a34c] px-8 py-4 font-sans text-sm font-semibold text-[#15100a] transition hover:bg-[#e6b860]">
            Upload your first PDF
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" aria-hidden />
          </a>
          <a href="#feature" className="inline-flex items-center gap-2 rounded-full border border-[#d8a34c]/40 px-8 py-4 font-sans text-sm text-[#e9d9b8] transition hover:bg-[#d8a34c]/10">
            See what you get
          </a>
        </div>

        {/* stat line */}
        <div className="mx-auto mt-14 grid max-w-3xl grid-cols-3 divide-x divide-[#d8a34c]/15 text-center">
          {[
            ["12k+", "books distilled"],
            ["97%", "key ideas kept"],
            ["3 min", "average readback"],
          ].map(([n, l]) => (
            <div key={l} className="px-4">
              <p className="font-serif text-3xl font-semibold text-[#f4e8cf] sm:text-4xl">{n}</p>
              <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.2em] text-[#8a6d3b]">{l}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= PRODUCT MOCK ================= */}
      <section className="relative px-6 py-16">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#d8a34c]/20 to-transparent" />
        <ReaderPanel />
        <div className="mt-10 text-center">
          <Rule />
          <p className="mt-5 font-serif text-sm italic text-[#8a6d3b]">
            “The summary alone was worth more than my two-hour skim.” — M. Okafor
          </p>
        </div>
      </section>

      {/* ================= FEATURES ================= */}
      <section id="feature" className="px-6 py-20">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-[#d8a34c]">chapter i — the essence</p>
          <h2 className="mt-4 font-serif text-4xl font-semibold text-[#f4e8cf] sm:text-5xl">
            A faithful abridgement, <span className="italic text-[#d8a34c]">not a cheap summary</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-pretty leading-7 text-[#b6a683]">
            Summaries flatten meaning. We preserve arguments, evidence and tone —
            then mark what a careful reader would underline.
          </p>
        </div>

        <div className="mx-auto grid max-w-5xl gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              icon: ListChecks,
              title: "The Essence",
              body: "A structured summary of the load-bearing ideas, ordered by how much they change the way you think.",
              sig: "what matters",
            },
            {
              icon: Lightbulb,
              title: "Hints",
              body: "Nudges that point to the passages readers skim past but authors quietly rely on.",
              sig: "what to notice",
            },
            {
              icon: Quote,
              title: "Quotes",
              body: "The lines worth framing, copied verbatim, with page numbers and context intact.",
              sig: "what to remember",
            },
            {
              icon: Wand2,
              title: "Insights",
              body: "Connections to adjacent ideas and your own life, so knowledge stops being inert.",
              sig: "what connects",
            },
          ].map((f, i) => (
            <article
              key={f.title}
              className={`group relative border border-[#d8a34c]/20 bg-[#1d1610] p-6 transition hover:border-[#d8a34c]/50 hover:bg-[#221a11] ${i % 2 ? "sm:translate-y-6" : ""}`}
            >
              <span className="absolute -top-3 left-5 bg-[#15100a] px-2 font-mono text-[10px] uppercase tracking-[0.2em] text-[#8a6d3b]">
                {String(i + 1).padStart(2, "0")}
              </span>
              <f.icon className="mb-4 h-7 w-7 text-[#d8a34c]" aria-hidden />
              <h3 className="font-serif text-xl text-[#f4e8cf]">{f.title}</h3>
              <p className="mt-2 text-[14px] leading-6 text-[#b6a683]">{f.body}</p>
              <p className="mt-5 border-t border-[#d8a34c]/15 pt-3 font-mono text-[10px] uppercase tracking-[0.25em] text-[#8a6d3b]">
                ← {f.sig}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* ================= METHOD / PROCESS ================= */}
      <section id="method" className="relative px-6 py-20">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#d8a34c]/20 to-transparent" />
        <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-[#d8a34c]">chapter ii — the method</p>
            <h2 className="mt-4 font-serif text-4xl font-semibold text-[#f4e8cf]">
              Three movements, <span className="italic text-[#d8a34c]">like good prose</span>
            </h2>
            <p className="mt-5 max-w-md text-pretty leading-7 text-[#b6a683]">
              We don’t merely compress the text — we read it. Every argument is
              traced, weighed, and filed under one of four kinds of knowledge.
            </p>

            <ol className="mt-10 space-y-6">
              {[
                { icon: FileUp, n: "I", t: "The intake", d: "Drop a PDF — a paper, a book, a contract, anything. We build a reading list of every idea inside." },
                { icon: ScanLine, n: "II", t: "The distillation", d: "Sentences are ranked by their weight. Weak links fall away; the skeleton of the argument remains." },
                { icon: BookOpenText, n: "III", t: "The illumination", d: "Hints, quotes and insights are attached to the skeleton like a reader’s marginalia." },
              ].map((s) => (
                <li key={s.n} className="flex gap-5">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#d8a34c]/40 font-serif text-lg italic text-[#d8a34c]">
                    {s.n}
                  </span>
                  <div>
                    <h3 className="font-serif text-lg text-[#f4e8cf]">{s.t}</h3>
                    <p className="mt-1 text-[14px] leading-6 text-[#b6a683]">{s.d}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          {/* side: the ratio scale */}
          <div className="flex flex-col justify-center">
            <div className="relative rounded border border-[#d8a34c]/25 bg-[#1d1610] p-8">
              <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.25em] text-[#8a6d3b]">the ratio, demonstrated</p>
              <p className="font-serif text-2xl italic text-[#f4e8cf]">Your reading time, before…</p>

              <div className="mt-6 space-y-4">
                <div>
                  <div className="mb-1 flex justify-between font-mono text-[11px] text-[#8a6d3b]">
                    <span>Other readers</span><span>9 h 40 m</span>
                  </div>
                  <div className="h-4 rounded-sm bg-[#2a2112]">
                    <div className="h-full w-[94%] rounded-sm bg-[#5b4a2a]" />
                  </div>
                </div>
                <div>
                  <div className="mb-1 flex justify-between font-mono text-[11px] text-[#d8a34c]">
                    <span>With Ratio Reader</span><span>34 m</span>
                  </div>
                  <div className="h-4 rounded-sm bg-[#2a2112]">
                    <div className="h-full w-[6%] rounded-sm bg-gradient-to-r from-[#d8a34c] to-[#e6b860]" />
                  </div>
                </div>
              </div>

              <p className="mt-6 font-serif text-lg italic text-[#e9d9b8]">
                “A ratio of roughly 17 to 1 — and the 1 keeps the ideas, not the filler.”
              </p>
            </div>

            <div className="mt-6 flex items-start gap-4 border-l-2 border-[#d8a34c] pl-5">
              <Quote className="mt-1 h-5 w-5 shrink-0 text-[#d8a34c]" aria-hidden />
              <p className="font-serif text-lg italic leading-7 text-[#e9d9b8]">
                Intelligence is not how much you read — it is the ratio of what
                you keep to what passes through.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= NOTES / SOCIAL ================= */}
      <section id="notes" className="px-6 py-20">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#d8a34c]/20 to-transparent" />
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <Rule />
            <h2 className="mt-6 font-serif text-3xl font-medium italic text-[#f4e8cf]">Notes from readers</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              ["A grad student’s friend", "I distilled 14 papers for my thesis in one weekend. The hints saved me from three rabbit holes."],
              ["A busy founder", "I finally read the books everyone quotes. The quotes section is why I still do."],
              ["A curious skeptic", "I assumed it would flatten the nuance. It didn’t. The citations are accurate."],
            ].map(([by, q], i) => (
              <figure key={by} className={`border border-[#d8a34c]/20 bg-[#1d1610] p-6 ${i === 1 ? "md:-translate-y-4" : ""}`}>
                <Quote className="mb-3 h-5 w-5 text-[#d8a34c]" aria-hidden />
                <blockquote className="font-serif text-[15px] italic leading-7 text-[#e9d9b8]">“{q}”</blockquote>
                <figcaption className="mt-4 font-mono text-[10px] uppercase tracking-[0.25em] text-[#8a6d3b]">— {by}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section id="cta" className="relative overflow-hidden px-6 py-24">
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[380px] w-[760px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#d8a34c]/[0.08] blur-3xl" />
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-[#d8a34c]">final page</p>
          <h2 className="mt-4 text-balance font-serif text-5xl font-semibold leading-tight text-[#f4e8cf] sm:text-6xl">
            Close the book.
            <br />
            <span className="italic text-[#d8a34c]">Open the knowledge.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-pretty leading-7 text-[#b6a683]">
            Your first distillation is free, and it takes less time than reading
            the table of contents.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a href="#cta" className="group inline-flex items-center gap-2 rounded-full bg-[#d8a34c] px-9 py-4 font-sans text-sm font-semibold text-[#15100a] transition hover:bg-[#e6b860]" onClick={(e) => e.preventDefault()}>
              <FileUp className="h-4 w-4" aria-hidden /> Upload a PDF — free
            </a>
            <a href="#cta" onClick={(e) => e.preventDefault()} className="font-serif italic text-[#e9d9b8] underline decoration-[#d8a34c]/50 underline-offset-4">
              or browse the sample library →
            </a>
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="border-t border-[#d8a34c]/15 px-6 py-12">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 text-center sm:flex-row sm:text-left">
          <div className="flex items-center gap-2">
            <span className="flex h-7 w-7 items-center justify-center rounded bg-[#d8a34c] text-[#15100a]">
              <BookOpenText className="h-3.5 w-3.5" aria-hidden />
            </span>
            <span className="font-serif text-[#f4e8cf]">Ratio<span className="italic text-[#d8a34c]">Reader</span></span>
          </div>
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#8a6d3b]">
            © MMXXVI · made for curious minds
          </p>
        </div>
      </footer>
    </div>
  );
}
