import {
  ArrowDownRight,
  ArrowRight,
  FileUp,
  Quote,
  Lightbulb,
  ListChecks,
  Zap,
  PenLine,
  Scissors,
  PartyPopper,
} from "lucide-react";
import { Switcher } from "../components/Switcher";

function Tm({ v, dir = -2 }: { v: string; dir?: number }) {
  return (
    <span
      className={`relative inline-block whitespace-nowrap px-1 text-neutral-900 ${dir >= 0 ? "rotate-2" : "-rotate-1"}`}
      style={{ backgroundColor: "#ffe14d" }}
    >
      {v}
    </span>
  );
}

function Tape({ className = "" }: { className?: string }) {
  return (
    <span
      aria-hidden
      className={`absolute h-6 w-24 bg-yellow-200/80 opacity-80 shadow-sm ${className}`}
    />
  );
}

function Stamp({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <span
      className={`inline-flex -rotate-6 items-center justify-center rounded border-[3px] border-dashed border-pink-500 px-3 py-1 text-lg font-bold uppercase tracking-widest text-pink-500 ${className}`}
    >
      {children}
    </span>
  );
}

const cards = [
  {
    icon: ListChecks,
    color: "bg-lime-300",
    title: "THE GIST",
    body: "Everything that matters, in plain language. No fluff, no 400-word intro paragraphs. Read it in 2 minutes.",
    sticker: "★ core",
    rot: "-rotate-1",
  },
  {
    icon: Lightbulb,
    color: "bg-cyan-300",
    title: "HINTS",
    body: "The sneaky details. The caveats, the footnotes, the 'by the way' that is actually the whole point.",
    sticker: "▲ catch-this",
    rot: "rotate-1",
  },
  {
    icon: Quote,
    color: "bg-pink-300",
    title: "QUOTES",
    body: "The money lines. Exported verbatim with page numbers, ready for your thesis / tweet / essay.",
    sticker: "★ quote-me",
    rot: "-rotate-1",
  },
  {
    icon: Zap,
    color: "bg-yellow-300",
    title: "INSIGHTS",
    body: "Where the idea bites. Connected to other books and to your actual life, not stored in a drawer.",
    sticker: "▲ boom",
    rot: "rotate-1",
  },
];

export function Design3() {
  return (
    <div className="min-h-screen bg-[#fbf5e8] font-sans text-neutral-900 selection:bg-pink-300">
      <Switcher current={3} />
      {/* paper dots */}
      <div
        className="pointer-events-none fixed inset-0 -z-10 opacity-60"
        style={{ backgroundImage: "radial-gradient(rgba(0,0,0,0.06) 1px, transparent 1px)", backgroundSize: "20px 20px" }}
      />

      {/* ============ NAV ============ */}
      <header className="sticky top-0 z-40 border-b-4 border-black bg-[#fbf5e8]/90 px-5 py-4 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <a href="/3" className="flex items-center gap-2 font-archivo text-xl tracking-tight">
            <span className="flex h-10 w-10 items-center justify-center rounded-lg border-4 border-black bg-yellow-300 shadow-[4px_4px_0_#000]">
              R
            </span>
            RATIO<span className="text-pink-500">READER</span>
          </a>
          <nav className="hidden items-center gap-3 md:flex">
            {["gist", "method", "receipts"].map((l) => (
              <a key={l} href="#" onClick={(e) => { e.preventDefault(); const map: Record<string, string> = { gist: "#gist", method: "#method", receipts: "#receipts" }; document.querySelector(map[l])?.scrollIntoView({ behavior: "smooth" }); }} className="rounded-md border-2 border-black bg-white px-4 py-2 text-sm font-bold uppercase tracking-wide shadow-[3px_3px_0_#000] transition hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none">
                {l}
              </a>
            ))}
            <a href="#cta" onClick={(e) => e.preventDefault()} className="rounded-md border-2 border-black bg-pink-400 px-4 py-2 text-sm font-bold uppercase tracking-wide text-white shadow-[3px_3px_0_#000] transition hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none">
              try it →
            </a>
          </nav>
        </div>
      </header>

      {/* ============ HERO ============ */}
      <section className="px-5 pb-16 pt-14 sm:pt-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 flex flex-wrap items-center gap-4">
            <Stamp className="text-lg">#1 reading hacks</Stamp>
            <span className="inline-flex -rotate-2 items-center gap-1 rounded-md border-2 border-black bg-cyan-300 px-3 py-1 text-xs font-bold uppercase shadow-[3px_3px_0_#000]">
              <PartyPopper className="h-3.5 w-3.5" aria-hidden /> new · pdf only
            </span>
          </div>

          <h1 className="max-w-5xl font-archivo text-6xl uppercase leading-[0.95] tracking-tight sm:text-8xl md:text-9xl">
            Read the book.
            <br />
            <Tm v="Skip the bloat." dir={1} />
          </h1>

          <div className="mt-8 flex flex-col gap-6 md:flex-row md:items-end">
            <p className="max-w-xl text-lg font-medium leading-relaxed">
              Drop any PDF on Ratio Reader. We chew through the whole thing and
              hand you back{" "}
              <Tm v="the good parts" />
              : a no-nonsense summary, the tricky hints, the killer quotes and
              insights that actually stick.
            </p>
            <div className="flex shrink-0 gap-4">
              <a href="#cta" onClick={(e) => e.preventDefault()} className="group inline-flex items-center gap-2 rounded-md border-4 border-black bg-lime-400 px-7 py-4 text-lg font-black uppercase tracking-wide shadow-[6px_6px_0_#000] transition hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none">
                <FileUp className="h-5 w-5" aria-hidden />
                Upload the PDF
                <ArrowDownRight className="h-5 w-5 transition group-hover:rotate-45" aria-hidden />
              </a>
            </div>
          </div>

          {/* big visual board */}
          <div className="relative mt-16">
            <Tape className="-top-3 left-10 -rotate-3" />
            <div className="rotate-1 rounded-xl border-4 border-black bg-white p-6 shadow-[8px_8px_0_#000] sm:p-10">
              <div className="flex flex-wrap items-start justify-between gap-6">
                <div>
                  <p className="font-mono text-sm uppercase tracking-widest text-neutral-500">
                    sample · “Atomic Habits” · 320 pages
                  </p>
                  <h3 className="mt-2 font-archivo text-3xl uppercase text-neutral-900 sm:text-4xl">
                    Systems &gt; goals. Identity &gt; outcomes.
                  </h3>
                  <p className="mt-4 max-w-xl leading-relaxed">
                    Habits are the compound interest of self-improvement. Four
                    laws: make it obvious, attractive, easy, satisfying.{" "}
                    <span className="bg-[#a3e635]/60 px-1">A 1% daily improvement compounds to 37x over a year.</span>
                  </p>
                </div>
                <div className="rounded-md border-2 border-black bg-pink-200 px-5 py-3 text-center">
                  <p className="font-archivo text-4xl">17:1</p>
                  <p className="text-xs font-bold uppercase">time ratio</p>
                </div>
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                <div className="-rotate-1 rounded-md border-2 border-black bg-cyan-200 p-4">
                  <div className="mb-1 flex items-center gap-1 text-xs font-black uppercase">
                    <Lightbulb className="h-3.5 w-3.5" aria-hidden /> hint
                  </div>
                  <p className="text-sm font-semibold leading-snug">p.27 — “repeat the behavior” is the whole secret, not the rewards.</p>
                </div>
                <div className="rotate-1 rounded-md border-2 border-black bg-yellow-200 p-4">
                  <div className="mb-1 flex items-center gap-1 text-xs font-black uppercase">
                    <Quote className="h-3.5 w-3.5" aria-hidden /> quote
                  </div>
                  <p className="text-sm font-semibold leading-snug">“You do not rise to the level of your goals. You fall to the level of your systems.” — p.31</p>
                </div>
                <div className="rotate-1 rounded-md border-2 border-black bg-lime-200 p-4">
                  <div className="mb-1 flex items-center gap-1 text-xs font-black uppercase">
                    <Zap className="h-3.5 w-3.5" aria-hidden /> insight
                  </div>
                  <p className="text-sm font-semibold leading-snug">Pairs with “Deep Work”: make the desired action the easiest option in the room.</p>
                </div>
              </div>

              <div className="mt-8 flex items-center justify-between border-t-4 border-dashed border-black pt-4">
                <div className="flex gap-3">
                  <Stamp className="rotate-3 text-xs">AI distilled</Stamp>
                  <Stamp className="-rotate-3 text-xs border-cyan-500 text-cyan-600">97% kept</Stamp>
                </div>
                <span className="font-mono text-xs uppercase text-neutral-500">412 → 9 key ideas</span>
              </div>
            </div>

            <Tape className="-right-6 top-20 rotate-45" />
            <span className="absolute -bottom-5 right-8 rotate-3 rounded-md border-2 border-black bg-pink-400 px-3 py-1 font-mono text-xs font-bold uppercase text-white shadow-[3px_3px_0_#000]">
              scanned in 90s
            </span>
          </div>
        </div>
      </section>

      {/* ============ TICKER ============ */}
      <div className="border-y-4 border-black bg-yellow-300 py-3">
        <div className="flex overflow-hidden">
          <div className="flex min-w-max animate-marquee items-center gap-6 pr-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <span key={i} className="flex items-center gap-6 whitespace-nowrap font-archivo text-lg uppercase tracking-wide">
                read less · understand more <span className="text-pink-500">✶</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ============ THE GIST (features) ============ */}
      <section id="gist" className="px-5 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <Stamp className="mb-4 -rotate-3 text-sm">what you get</Stamp>
              <h2 className="font-archivo text-5xl uppercase leading-none tracking-tight sm:text-7xl">
                four pages
                <br />
                <span className="text-pink-500">of receipts</span>
              </h2>
            </div>
            <p className="max-w-sm text-lg font-medium leading-relaxed">
              Every document returns the same four goods — folded into one
              clean digest you can skim drunk.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {cards.map((c) => (
              <article
                key={c.title}
                className={`relative rounded-xl border-4 border-black bg-white p-7 shadow-[7px_7px_0_#000] transition hover:rotate-0 hover:shadow-[3px_3px_0_#000] ${c.rot}`}
              >
                <Tape className={`-top-3 left-8 ${c.color === "bg-cyan-300" || c.color === "bg-pink-300" ? "rotate-3" : "-rotate-3"}`} />
                <div className="flex items-start justify-between">
                  <span className={`flex h-14 w-14 items-center justify-center rounded-lg border-2 border-black ${c.color} shadow-[3px_3px_0_#000]`}>
                    <c.icon className="h-7 w-7" aria-hidden />
                  </span>
                  <span className="rounded border-2 border-black bg-white px-2 py-0.5 font-mono text-[10px] font-bold uppercase tracking-widest">
                    {c.sticker}
                  </span>
                </div>
                <h3 className="mt-5 font-archivo text-3xl uppercase tracking-tight">{c.title}</h3>
                <p className="mt-2 text-lg leading-relaxed">{c.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ============ METHOD ============ */}
      <section id="method" className="px-5 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 flex flex-wrap items-center gap-4">
            <Scissors className="h-8 w-8" aria-hidden />
            <h2 className="font-archivo text-5xl uppercase leading-none tracking-tight sm:text-6xl">
              the cut
            </h2>
            <span className="rounded-md border-2 border-black bg-white px-3 py-1 font-mono text-xs font-bold uppercase shadow-[3px_3px_0_#000]">
              how it works
            </span>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              { n: "01", t: "you drop it", d: "PDF in. Book, paper, manifesto, whatever. No size limits, no 'sorry, this is too complex'.", color: "bg-yellow-300" },
              { n: "02", t: "we gut it", d: "Every sentence scored, every argument weighed. Fluff gets thrown in the bin, diamonds get picked out.", color: "bg-cyan-300" },
              { n: "03", t: "you get the gist", d: "Summary + hints + quotes + insights, in one go. Steal the ideas, save the years.", color: "bg-pink-300" },
            ].map((s) => (
              <div key={s.n} className="relative rounded-xl border-4 border-black bg-white p-7 shadow-[7px_7px_0_#000]">
                <span className={`inline-block rounded-md border-2 border-black px-3 py-1 font-archivo text-2xl ${s.color} shadow-[3px_3px_0_#000]`}>
                  {s.n}
                </span>
                <h3 className="mt-5 font-archivo text-2xl uppercase">{s.t}</h3>
                <p className="mt-2 leading-relaxed">{s.d}</p>
                <ArrowRight className="mt-5 h-5 w-5 text-neutral-400" aria-hidden />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ RECEIPTS (testimonials) ============ */}
      <section id="receipts" className="px-5 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <PenLine className="mx-auto mb-4 h-8 w-8" aria-hidden />
            <h2 className="font-archivo text-5xl uppercase tracking-tight sm:text-6xl">
              reader receipts
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              ["grad school save", "19 papers distilled in a weekend. The hints stopped me chasing three dead-end theories.", "— Amara, PhD candidate"],
              ["CEO book club", "Finally quoting the books everyone assumes I've read. The receipts section is scary good.", "— D. R., founder"],
              ["reading = my hobby", "I read 3x more… wait, no. I UNDERSTAND 3x more. And I keep the good parts.", "— Luis, lives at the library"],
            ].map(([t, q, by], i) => (
              <figure key={by} className={`relative rounded-xl border-4 border-black bg-white p-6 shadow-[6px_6px_0_#000] ${i === 1 ? "md:-rotate-1" : i === 0 ? "md:rotate-1" : ""}`}>
                <Tape className={`-top-3 ${i % 2 ? "left-1/2 rotate-3" : "left-8 -rotate-3"}`} />
                <span className="mb-3 inline-block rounded border-2 border-black bg-lime-300 px-2 py-0.5 font-mono text-[10px] font-bold uppercase">
                  {t}
                </span>
                <blockquote className="text-lg font-semibold leading-snug">“{q}”</blockquote>
                <figcaption className="mt-4 font-mono text-xs uppercase tracking-wide text-neutral-500">{by}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CTA ============ */}
      <section id="cta" className="px-5 py-24">
        <div className="mx-auto max-w-5xl">
          <div className="relative overflow-hidden rounded-2xl border-4 border-black bg-[#1c1c1c] p-10 shadow-[10px_10px_0_#000] sm:p-16">
            <div className="absolute -right-10 -top-10 h-44 w-44 rounded-full border-4 border-dashed border-yellow-300/40" />
            <Stamp className="absolute right-10 top-8 rotate-6 border-yellow-300 text-yellow-300">free*</Stamp>
            <p className="font-mono text-sm uppercase tracking-widest text-yellow-300">your move ·*first one's free</p>
            <h2 className="mt-4 max-w-2xl font-archivo text-5xl uppercase leading-[0.95] text-white sm:text-7xl">
              Don't read the whole thing.
              <br />
              <span className="text-pink-400">Read the right thing.</span>
            </h2>
            <p className="mt-6 max-w-xl text-lg font-medium text-neutral-300">
              Drag a PDF in. Ninety seconds later, you own the idea. That's the
              whole deal.
            </p>
            <a href="#cta" onClick={(e) => e.preventDefault()} className="group mt-9 inline-flex items-center gap-3 rounded-md border-4 border-black bg-lime-400 px-8 py-4 text-xl font-black uppercase tracking-wide shadow-[6px_6px_0_0_rgba(255,255,255,1)] transition hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none">
              <FileUp className="h-6 w-6" aria-hidden />
              Drop your first PDF
            </a>
          </div>
        </div>
      </section>

      {/* ============ FOOTER ============ */}
      <footer className="border-t-4 border-black bg-yellow-300 px-5 py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 font-mono text-xs font-bold uppercase tracking-widest sm:flex-row">
          <span className="font-archivo text-lg normal-case tracking-tight">RATIOREADER ✸</span>
          <span>made for people who finish their books</span>
          <span>© 2026 · no fine print, it's fine</span>
        </div>
      </footer>
    </div>
  );
}
