import {
  FileUp,
  TerminalSquare,
  Quote,
  Lightbulb,
  Braces,
  GitBranch,
  ChevronRight,
  CheckCircle2,
  Cpu,
  ShieldAlert,
} from "lucide-react";
import { Switcher } from "../components/Switcher";

const BOOK_ART = String.raw`       ______
   .-"      "-.
  /            \
 |   [==] ==[==]|
 |   RATIO REA-D|
 |    ~.~.~.~   |
  \            /
   '-.__..__.-'`;

function Line({ cmd }: { cmd: string }) {
  return (
    <div className="flex flex-wrap items-baseline gap-x-2">
      <span className="text-emerald-400">user@ratio</span>
      <span className="text-neutral-400">:</span>
      <span className="text-sky-400">~/pdfs</span>
      <span className="text-neutral-400">$</span>
      <span className="text-[#3bff6e]">{cmd}</span>
      <span className="inline-block h-4 w-2 animate-caret bg-[#3bff6e]" />
    </div>
  );
}

const analysisLog = [
  { t: "indexing 412 pages...", s: "ok", latency: "0.4s" },
  { t: "scoring 12,480 sentences by argument weight", s: "ok", latency: "1.2s" },
  { t: "extracting key ideas → 9 found", s: "ok", latency: "0.9s" },
  { t: "flagging hints & caveats → 14", s: "ok", latency: "0.6s" },
  { t: "collecting quotable lines → 47", s: "ok", latency: "0.3s" },
  { t: "linking insights across 4 adjacent books", s: "ok", latency: "1.1s" },
  { t: "writing digest → ratio 17:1", s: "ok", latency: "0.2s" },
];

export function Design4() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#0a0e0a] font-mono text-[#3bff6e] selection:bg-[#3bff6e]/30">
      <Switcher current={4} />

      {/* CRT scanlines + vignette */}
      <div className="pointer-events-none fixed inset-0 z-[150]">
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{ backgroundImage: "repeating-linear-gradient(0deg, #000 0px, #000 2px, transparent 2px, transparent 4px)" }}
        />
        <div className="absolute inset-0" style={{ boxShadow: "inset 0 0 220px rgba(0,0,0,0.9)" }} />
      </div>

      {/* header bar */}
      <header className="sticky top-0 z-40 border-b border-[#3bff6e]/30 bg-[#0a0e0a]/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center gap-3 px-4 py-3">
          <div className="flex gap-2">
            <span className="h-3 w-3 rounded-full bg-[#ff5f56]" />
            <span className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
            <span className="h-3 w-3 rounded-full bg-[#27c93f]" />
          </div>
          <span className="ml-3 text-sm text-neutral-400">ratio-reader — zsh — 80×24</span>
          <nav className="ml-auto hidden items-center gap-6 text-sm md:flex">
            {["--gist", "--method", "--exit-code"].map((l) => (
              <a
                key={l}
                href="#"
                onClick={(e) => { e.preventDefault(); const map: Record<string, string> = { "--gist": "#gist", "--method": "#method", "--exit-code": "#exit" }; document.querySelector(map[l])?.scrollIntoView({ behavior: "smooth" }); }}
                className="text-[#3bff6e]/70 transition hover:text-[#3bff6e]"
              >
                $ {l}
              </a>
            ))}
          </nav>
        </div>
      </header>

      {/* ============ HERO ============ */}
      <section className="px-4 pb-16 pt-12">
        <div className="mx-auto max-w-6xl">
          <pre className="mx-auto mb-8 w-fit animate-flicker text-left text-[10px] leading-[1.15] text-[#3bff6e]/90 sm:text-sm">
            {BOOK_ART}
          </pre>

          <div className="mx-auto max-w-4xl text-center">
            <p className="mb-4 text-sm text-[#3bff6e]/60">
              <span className="text-emerald-400">▲</span> est. to decode any pdf in &lt; 90 seconds
            </p>
            <h1 className="text-balance text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">
              <span className="text-neutral-500">// RATIO:// </span>
              <br className="sm:hidden" />
              READ THE <span className="text-white">COMMIT</span>,
              <br />
              NOT THE <span className="text-[#ff5f56]">REPO LOG</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-pretty text-sm leading-6 text-[#3bff6e]/70 sm:text-base">
              $ ratio ./atomic-habits.pdf --distill<span className="animate-caret text-[#3bff6e]">▍</span>
              <br />
              Output: the essential diff of a 320-page book. Summary, hints,
              quotes and insights — compiled, deduplicated, and humanized.
            </p>

            {/* input row */}
            <div className="mx-auto mt-10 max-w-2xl overflow-hidden rounded border border-[#3bff6e]/40 bg-[#0d120d] text-left shadow-[0_0_40px_-10px_rgba(59,255,110,0.35)]">
              <div className="flex items-center gap-2 border-b border-[#3bff6e]/30 px-4 py-2 text-xs text-neutral-400">
                <TerminalSquare className="h-4 w-4 text-[#3bff6e]" aria-hidden />
                ratio-reader
                <span className="ml-auto hidden sm:inline">input ∕</span>
              </div>
              <div className="flex flex-col gap-3 p-4 sm:flex-row sm:items-center">
                <div className="flex flex-1 items-center gap-2">
                  <FileUp className="h-5 w-5 text-[#3bff6e]" aria-hidden />
                  <span className="text-sm text-neutral-300">drop your pdf here</span>
                </div>
                <a href="#exit" onClick={(e) => e.preventDefault()} className="inline-flex items-center justify-center gap-2 rounded bg-[#3bff6e] px-5 py-2.5 text-sm font-bold text-black transition hover:bg-[#6bff9a]">
                  $ run --distill <ChevronRight className="h-4 w-4" aria-hidden />
                </a>
              </div>
            </div>

            {/* trust flags */}
            <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-[#3bff6e]/60">
              <span className="flex items-center gap-1.5"><ShieldAlert className="h-3.5 w-3.5" aria-hidden /> local processing · nothing leaves your disk</span>
              <span className="flex items-center gap-1.5"><CheckCircle2 className="h-3.5 w-3.5" aria-hidden /> 97% signal retention</span>
              <span className="flex items-center gap-1.5">exit code 0 · every time</span>
            </div>
          </div>

          {/* analysis console */}
          <div className="mx-auto mt-16 max-w-3xl rounded border border-[#3bff6e]/40 bg-[#0d120d]">
            <div className="flex items-center gap-2 border-b border-[#3bff6e]/30 px-4 py-2 text-xs text-neutral-400">
              <Cpu className="h-4 w-4 text-[#3bff6e]" aria-hidden />
              session.log — atomic_habits.pdf
            </div>
            <div className="space-y-1.5 p-4 text-sm">
              <Line cmd="ratio ./atomic-habits.pdf --distill" />
              <div className="pt-2">
                {analysisLog.map((l) => (
                  <div key={l.t} className="flex items-center gap-3 py-1">
                    <span className="text-[#3bff6e]/50">→</span>
                    <span className="flex-1 text-[#3bff6e]/80">{l.t}</span>
                    <span className="text-neutral-500">[{l.latency}]</span>
                    <span className="font-bold text-[#3bff6e]">✓ ok</span>
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-2 border-t border-dashed border-[#3bff6e]/30 pt-3 text-emerald-300">
                <CheckCircle2 className="h-4 w-4" aria-hidden />
                digest ready → ratio 17:1 · 9 key ideas · 47 quotes
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ MARQUEE OF CODE QUOTES ============ */}
      <div className="overflow-hidden border-y border-[#3bff6e]/30 py-3">
        <div className="flex min-w-max animate-marquee items-center gap-10 pr-10">
          {Array.from({ length: 8 }).map((_, i) => (
            <span key={i} className="whitespace-nowrap text-sm text-[#3bff6e]/60">
              <span className="text-neutral-500">grep</span> meaning book.pdf | <span className="text-neutral-500">keep</span> --vital <span className="text-neutral-500">//</span> done
            </span>
          ))}
        </div>
      </div>

      {/* ============ GIST / FEATURES ============ */}
      <section id="gist" className="px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <p className="mb-8 text-[#3bff6e]/50">
            <span className="text-neutral-500">$ ls ./gist --all</span>
          </p>
          <h2 className="mb-14 text-3xl font-semibold text-white sm:text-5xl">
            <span className="text-[#3bff6e]">4</span> objects in the output
          </h2>

          <div className="grid gap-5 md:grid-cols-2">
            {[
              { icon: TerminalSquare, name: "summary.digest", desc: "The essential diff — a structured summary of load-bearing ideas, ordered by impact, free of throat-clearing.", tag: "[essence]", colour: "text-[#3bff6e]" },
              { icon: Lightbulb, name: "hints.log", desc: "Every caveat, footnote and 'by the way' that is secretly the point. The stuff readers are supposed to notice.", tag: "[edge-cases]", colour: "text-[#ffbd2e]" },
              { icon: Quote, name: "quotes.txt", desc: "Verbatim money-lines with source context and page numbers. Ready to paste, safe to cite.", tag: "[verbatim]", colour: "text-[#ff5f56]" },
              { icon: GitBranch, name: "insights.branch", desc: "Where the idea forks into adjacent books and your own life — so knowledge doesn’t just sit in a buffer.", tag: "[links]", colour: "text-[#4db8ff]" },
            ].map((f) => (
              <article key={f.name} className="group rounded border border-[#3bff6e]/40 bg-[#0d120d] p-6 transition hover:border-[#3bff6e] hover:shadow-[0_0_30px_-8px_rgba(59,255,110,0.5)]">
                <div className="flex items-center gap-3">
                  <f.icon className={`h-6 w-6 ${f.colour}`} aria-hidden />
                  <h3 className={`text-lg font-semibold ${f.colour}`}>{f.name}</h3>
                  <span className="ml-auto rounded border border-[#3bff6e]/30 px-2 py-0.5 text-[10px] text-neutral-400">{f.tag}</span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-[#3bff6e]/70">{f.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ============ METHOD (pipeline) ============ */}
      <section id="method" className="px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <p className="mb-8 text-[#3bff6e]/50">
            <span className="text-neutral-500">$ man ratio-reader | grep -A5 METHOD</span>
          </p>
          <h2 className="mb-12 text-3xl font-semibold text-white sm:text-5xl">the pipeline</h2>

          <div className="space-y-0">
            {[
              { n: "01", icon: FileUp, t: "ingest", d: "We rgb-images, OCR and chunk every page. Bookmarks, footnotes and references all survive the trip." },
              { n: "02", icon: Braces, t: "reason", d: "Each sentence is scored twice — once for claim-weight, once for novelty. Arguments are traced to a skeleton." },
              { n: "03", icon: TerminalSquare, t: "export", d: "Four clean files written to disk: summary, hints, quotes, insights. One digest, zero filler." },
            ].map((s, i) => (
              <div key={s.n} className="relative flex gap-5 pb-8">
                {i < 2 && <span className="absolute left-[26px] top-14 h-[calc(100%-3.5rem)] border-l-2 border-dashed border-[#3bff6e]/25" />}
                <div className="z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded border-2 border-[#3bff6e] bg-[#0a0e0a] text-lg font-bold text-[#3bff6e] shadow-[0_0_18px_-4px_rgba(59,255,110,0.6)]">
                  <s.icon className="h-6 w-6" aria-hidden />
                </div>
                <div className="pt-1.5">
                  <p className="font-bold text-[#3bff6e]">
                    <span className="text-neutral-500">./{s.n}</span> {s.t}
                  </p>
                  <p className="mt-2 max-w-2xl text-sm leading-relaxed text-[#3bff6e]/70">{s.d}</p>
                </div>
              </div>
            ))}
          </div>

          {/* status strip */}
          <div className="mt-6 flex flex-wrap gap-2 font-mono text-xs">
            {["--booktok", "--thesis", "--SEC-filing", "--novel ×2", "--white-paper", "--手册 too"].map((t) => (
              <span key={t} className="rounded border border-[#3bff6e]/30 px-2.5 py-1 text-[#3bff6e]/70">
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ============ EXIT CODE / CTA ============ */}
      <section id="exit" className="px-4 py-24">
        <div className="mx-auto max-w-4xl overflow-hidden rounded border border-[#3bff6e]/40 bg-[#0d120d]">
          <div className="flex items-center justify-between border-b border-[#3bff6e]/30 px-5 py-3 text-xs text-neutral-400">
            <span>final output</span>
            <span className="font-bold text-[#3bff6e]">exit code: 0</span>
          </div>
          <div className="p-6 sm:p-10">
            <pre className="text-xs leading-6 sm:text-sm">{`$ ratio ./anything.pdf --distill
  ✓  412 pages indexed
  ✓  digest generated
  ✓  ratio 17:1

  > summary    → the 9 ideas that matter
  > hints      → 14 things easy to miss
  > quotes     → 47 lines worth keeping
  > insights   → forks into your world

  [ OK ] knowledge acquired. well read.`}</pre>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <a href="#exit" onClick={(e) => e.preventDefault()} className="inline-flex items-center justify-center gap-2 rounded bg-[#3bff6e] px-7 py-3.5 font-bold text-black transition hover:bg-[#6bff9a]">
                <FileUp className="h-5 w-5" aria-hidden /> upload &amp; run — free
              </a>
              <p className="text-xs text-[#3bff6e]/50">no account. no waitlist. just the diff.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ============ FOOTER ============ */}
      <footer className="border-t border-[#3bff6e]/30 px-4 py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 text-xs text-[#3bff6e]/60 sm:flex-row">
          <span>ratio://reader — v1.618</span>
          <span>made with &gt;_ and the good parts of books</span>
          <span className="flex items-center gap-2">
            <span className="inline-block h-2 w-2 animate-pulse-ring rounded-full bg-[#3bff6e]" />
            status: reads fine
          </span>
        </div>
      </footer>
    </div>
  );
}
