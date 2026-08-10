import {
  ArrowRight,
  BookOpen,
  Quote,
  Lightbulb,
  Layers,
  Feather,
  Ruler,
  FileUp,
  Sparkles,
} from "lucide-react";
import { Switcher } from "../components/Switcher";

function Cap({ children }: { children: string }) {
  return (
    <span className="float-left -mt-1 mr-3 font-editorial text-6xl font-semibold leading-[0.75] text-[#c35b3a]">
      {children}
    </span>
  );
}

function Num({ children }: { children: string }) {
  return (
    <span className="font-editorial text-sm italic text-[#c35b3a]">{children}</span>
  );
}

export function Design5() {
  return (
    <div className="min-h-screen bg-[#f7f2e8] font-sans text-[#2a251c] selection:bg-[#c35b3a]/25">
      <Switcher current={5} />

      {/* hairline top */}
      <div className="h-1.5 w-full bg-[#2a251c]" />

      {/* ============ NAV ============ */}
      <header className="sticky top-0 z-40 border-b border-[#2a251c]/15 bg-[#f7f2e8]/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <a href="/5" className="flex items-center gap-2.5">
            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#2a251c]">
              <Feather className="h-4 w-4" aria-hidden />
            </span>
            <span className="font-editorial text-xl font-semibold tracking-tight">
              Ratio Reader
            </span>
          </a>
          <nav className="hidden items-center gap-8 text-sm font-medium tracking-wide text-[#2a251c]/70 md:flex">
            {["Articles", "Method", "Readers"].map((l) => (
              <a key={l} href="#features" className="transition hover:text-[#2a251c]" onClick={(e) => { e.preventDefault(); document.querySelector("#features")?.scrollIntoView({ behavior: "smooth" }); }}>{l}</a>
            ))}
            <a href="#cta" onClick={(e) => e.preventDefault()} className="rounded-full bg-[#2a251c] px-5 py-2.5 text-sm font-semibold text-[#f7f2e8] transition hover:bg-[#c35b3a]">
              Begin free
            </a>
          </nav>
        </div>
      </header>

      {/* ============ HERO ============ */}
      <section className="border-b border-[#2a251c]/15 px-6 pb-20 pt-16 sm:pt-24">
        <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <div>
            <p className="mb-8 flex items-center gap-4 text-xs font-bold uppercase tracking-[0.3em] text-[#c35b3a]">
              <span className="h-px w-10 bg-[#c35b3a]" /> An essay reader, № 01
            </p>
            <h1 className="font-editorial text-5xl font-medium leading-[1.05] tracking-tight sm:text-7xl lg:text-8xl">
              Read the whole book.
              <br />
              <span className="italic text-[#c35b3a]">Keep the true part.</span>
            </h1>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-[#2a251c]/75">
              <Cap>A</Cap>pdf arrives. We read it — front matter to index,
              footnote to colophon. What returns to you is not an abridgement
              but an <em>essence</em>: the summary, the hints, the quoted
              lines, and the insights that turn information into understanding.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-6">
              <a href="#cta" onClick={(e) => e.preventDefault()} className="group inline-flex items-center gap-2 rounded-full bg-[#c35b3a] px-7 py-4 text-sm font-semibold text-white transition hover:bg-[#a94a2c]">
                Read your first document
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" aria-hidden />
              </a>
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#2a251c] font-editorial text-sm italic text-[#f7f2e8]">4.9</span>
                <span className="text-sm text-[#2a251c]/60">
                  from readers who <br className="hidden sm:block" /> finish their books now
                </span>
              </div>
            </div>
          </div>

          {/* colophon card */}
          <figure className="relative mx-auto w-full max-w-sm border border-[#2a251c]/20 bg-white p-8 shadow-[0_30px_70px_-30px_rgba(42,37,28,0.35)]">
            <div className="mb-6 flex items-center justify-between">
              <BookOpen className="h-5 w-5 text-[#c35b3a]" aria-hidden />
              <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#2a251c]/40">colophon 2026</span>
            </div>
            <dl className="space-y-5">
              {[
                ["Title", "Thinking, Fast and Slow"],
                ["Pages", "499"],
                ["Reading time", "≈ 14 hours"],
                ["With Ratio Reader", "≈ 28 minutes"],
                ["Ideas preserved", "9 of 9"],
              ].map(([k, v]) => (
                <div key={k} className="flex items-baseline justify-between gap-4 border-b border-[#2a251c]/10 pb-3 text-sm">
                  <dt className="text-[#2a251c]/50">{k}</dt>
                  <dd className={`text-right font-medium ${k === "With Ratio Reader" ? "font-editorial text-lg italic text-[#c35b3a]" : ""}`}>{v}</dd>
                </div>
              ))}
            </dl>
            <figcaption className="mt-6 font-editorial text-base italic text-[#2a251c]/70">
              “The marginal time saved is not hours — it is the rest of your life.”
            </figcaption>
          </figure>
        </div>

        {/* stat band */}
        <div className="mx-auto mt-20 grid max-w-6xl gap-px overflow-hidden border border-[#2a251c]/15 bg-[#2a251c]/20 sm:grid-cols-4">
          {[
            ["1,200,000", "pages distilled"],
            ["48,000", "hours returned"],
            ["9 in 10", "ideas retained"],
            ["90 sec", "average turnaround"],
          ].map(([n, l]) => (
            <div key={l} className="bg-[#f7f2e8] px-6 py-8 text-center sm:text-left">
              <p className="font-editorial text-3xl font-semibold text-[#2a251c] sm:text-4xl">{n}</p>
              <p className="mt-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#2a251c]/50">{l}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ============ FEATURES (essays) ============ */}
      <section id="features" className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 flex flex-col gap-6 border-l-4 border-[#c35b3a] pl-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#c35b3a]">four essays · four goods</p>
              <h2 className="mt-3 font-editorial text-4xl font-medium tracking-tight sm:text-5xl">
                What we return, <span className="italic">in order of consequence</span>
              </h2>
            </div>
            <p className="max-w-sm text-[#2a251c]/65">
              Four kinds of knowledge from one document. Each one fights a
              different failure of reading.
            </p>
          </div>

          <div className="grid gap-x-10 gap-y-16 md:grid-cols-2">
            {[
              {
                n: "I", icon: Layers, t: "The Summary",
                d: "Not a trailer — a faithful compression of the argument itself, in the author's own order of reasoning. Bullet points where bullets help, prose where the author's voice matters.",
                m: "fights: forgetting the spine",
              },
              {
                n: "II", icon: Lightbulb, t: "The Hints",
                d: "Any book is a code, and some of its signals are quiet: the caveat in the preface, the definition buried in note 41, the word the author repeats when proving something.",
                m: "fights: reading to fast",
              },
              {
                n: "III", icon: Quote, t: "The Quotations",
                d: "The sentences that carry the whole book, copied exactly, with the pages you can turn to yourself. Quotations are how a reader becomes a speaker.",
                m: "fights: losing the lines",
              },
              {
                n: "IV", icon: Sparkles, t: "The Insights",
                d: "A great idea demands a new habitat. We trace each one to neighbouring books and to your own work — so what you read becomes what you do.",
                m: "fights: idle knowledge",
              },
            ].map((f) => (
              <article key={f.t} className="group border-t-2 border-[#2a251c] pt-7">
                <div className="flex items-start justify-between">
                  <f.icon className="mt-1.5 h-6 w-6 text-[#c35b3a]" aria-hidden />
                  <Num>{["I", "II", "III", "IV"][Number(f.n) - 1]}</Num>
                </div>
                <h3 className="mt-6 font-editorial text-3xl font-medium tracking-tight">{f.t}</h3>
                <p className="mt-3 text-pretty leading-relaxed text-[#2a251c]/75">{f.d}</p>
                <p className="mt-5 font-editorial text-sm italic text-[#c35b3a]">{f.m}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ============ PRODUCT FOLIO ============ */}
      <section className="border-y border-[#2a251c]/15 bg-[#efe8d8] px-6 py-24">
        <div className="mx-auto max-w-4xl">
          <p className="mb-10 text-center text-xs font-bold uppercase tracking-[0.3em] text-[#c35b3a]">
            a page from the reading room
          </p>
          <figure className="relative border border-[#2a251c]/20 bg-[#fdfaf3] p-8 shadow-[0_40px_90px_-40px_rgba(42,37,28,0.5)] sm:p-14">
            <div className="mb-8 flex items-center justify-between">
              <span className="font-editorial text-lg font-semibold">The Essence</span>
              <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#2a251c]/40">folio · p. 01 / 04</span>
            </div>
            <h3 className="font-editorial text-3xl font-medium tracking-tight sm:text-4xl">
              On the two systems of thinking
            </h3>
            <div className="mt-6 columns-1 gap-8 text-[15px] leading-8 text-[#2a251c]/80 sm:columns-2">
              <p>
                <Cap>H</Cap>uman cognition is not one instrument but two. The
                first is fast, automatic and confident; the second is slow,
                deliberate and lazy. Almost every error in judgment — from the
                gambler's fallacy to the sunk-cost trap — is the first system
                answering a question the second was never asked.
              </p>
              <p className="mt-4">
                <mark className="bg-[#c35b3a]/20 px-0.5 text-[#2a251c]">The book's quiet claim: you do not often overrule your intuitions.</mark>
                You merely retell their conclusions. This, more than any single
                experiment, is why the work changed how economics understands
                people.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-3 border-t border-[#2a251c]/10 pt-6">
              {["hint · see p.19 on base-rate neglect", "quote · ‘What you see is all there is.’", "insight · connects to Loss Aversion, Ch. 27"].map((s) => (
                <span key={s} className="rounded-full border border-[#2a251c]/20 px-4 py-1.5 text-xs text-[#2a251c]/70">
                  {s}
                </span>
              ))}
            </div>
            <span className="absolute -bottom-4 left-10 h-4 w-2/3 bg-[#efe8d8]" aria-hidden />
          </figure>
        </div>
      </section>

      {/* ============ METHOD ============ */}
      <section id="method" className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-14 flex items-center gap-5">
            <Ruler className="h-6 w-6 text-[#c35b3a]" aria-hidden />
            <h2 className="font-editorial text-4xl font-medium tracking-tight sm:text-5xl">
              Ritual in three readings
            </h2>
          </div>
          <div className="grid gap-px overflow-hidden border border-[#2a251c]/15 bg-[#2a251c]/20 md:grid-cols-3">
            {[
              { n: "I", t: "Deposit", d: "Submit any PDF. A book, a report, a record — the binder does not care for its genre." },
              { n: "II", t: "Distillation", d: "Arguments traced to their load-bearing sentences. Weight precedes length in every judgement." },
              { n: "III", t: "Return", d: "A folio of essence, hints, quotations, insights — yours to keep, to quote, to pass on." },
            ].map((s) => (
              <div key={s.t} className="bg-[#f7f2e8] p-9">
                <Num>{s.n}</Num>
                <h3 className="mt-4 font-editorial text-2xl font-medium tracking-tight">{s.t}</h3>
                <p className="mt-3 leading-relaxed text-[#2a251c]/70">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ PULL QUOTE ============ */}
      <section className="border-y border-[#2a251c]/15 bg-[#2a251c] px-6 py-20 text-[#f7f2e8]">
        <blockquote className="mx-auto max-w-3xl text-center">
          <Quote className="mx-auto mb-8 h-8 w-8 text-[#c35b3a]" aria-hidden />
          <p className="font-editorial text-3xl font-medium italic leading-snug sm:text-5xl">
            “A book is a friend's hand reaching across time. Ratio Reader hands
            you the letters that matter most.”
          </p>
          <cite className="mt-8 block text-sm not-italic uppercase tracking-[0.25em] text-[#f7f2e8]/50">
            — A reader, after finishing her first distillation
          </cite>
        </blockquote>
      </section>

      {/* ============ READERS ============ */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-12 font-editorial text-4xl font-medium tracking-tight">
            In the margins, <span className="italic text-[#c35b3a]">our readers write back</span>
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              ["The researcher", "I handed it twenty papers and trust it more than my own marginalia now. The hints are eerily well-placed."],
              ["The editor", "I read hundreds of manuscripts a year. This found the thesis paragraph in minutes — a genuine editorial instinct."],
              ["The re-reader", "I use the summaries as prefaces. Then I read the book for real — and keep even more."],
            ].map(([by, q], i) => (
              <figure key={by} className={`border-t border-[#c35b3a] pt-6 ${i === 1 ? "md:translate-y-6" : ""}`}>
                <p className="font-editorial text-xl font-medium italic leading-relaxed text-[#2a251c]/85">
                  “{q}”
                </p>
                <figcaption className="mt-4 text-xs font-bold uppercase tracking-[0.25em] text-[#2a251c]/50">
                  {by}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CTA ============ */}
      <section id="cta" className="px-6 pb-24">
        <div className="mx-auto max-w-5xl border border-[#2a251c]/20 bg-[#efe8d8] p-10 text-center sm:p-16">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#c35b3a]">the last page</p>
          <h2 className="mx-auto mt-4 max-w-2xl text-balance font-editorial text-4xl font-medium tracking-tight sm:text-6xl">
            Your next book, distilled <span className="italic text-[#c35b3a]">before the week ends</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-[#2a251c]/70">
            The first reading is on us. Upload a document and receive its
            essence — or browse the library of already-distilled classics.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a href="#cta" onClick={(e) => e.preventDefault()} className="group inline-flex items-center gap-2 rounded-full bg-[#c35b3a] px-8 py-4 text-sm font-semibold text-white transition hover:bg-[#a94a2c]">
              <FileUp className="h-4 w-4" aria-hidden />
              Read a document free
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" aria-hidden />
            </a>
            <a href="#features" className="text-sm font-semibold text-[#2a251c]/70 underline decoration-[#c35b3a]/50 underline-offset-4 transition hover:text-[#2a251c]">
              Explore the library
            </a>
          </div>
        </div>
      </section>

      {/* ============ FOOTER ============ */}
      <footer className="border-t border-[#2a251c]/15 px-6 py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-sm text-[#2a251c]/60 sm:flex-row">
          <span className="flex items-center gap-2 font-editorial text-base font-semibold text-[#2a251c]">
            <Feather className="h-4 w-4 text-[#c35b3a]" aria-hidden /> Ratio Reader
          </span>
          <span className="italic">Set in Playfair &amp; Inter · printed for the curious</span>
          <span className="font-mono text-xs uppercase tracking-[0.2em]">© 2026 · vol. I</span>
        </div>
      </footer>
    </div>
  );
}
