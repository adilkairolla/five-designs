import {
  ArrowRight,
  ArrowUpRight,
  FileUp,
  Quote,
  Lightbulb,
  ScanSearch,
  Layers,
  FlaskConical,
  UploadCloud,
  Sparkles,
  Check,
} from "lucide-react";
import { Switcher } from "../components/Switcher";

const SPIRAL =
  "M 0.00 0.00 A 197.77087639996634 197.77087639996634 0 0 0 0.00 197.77 A 122.22912360003365 122.22912360003365 0 0 1 197.77 0.00 A 75.5417527999327 75.5417527999327 0 0 1 273.31 122.23 A 46.687370800100965 46.687370800100965 0 0 1 320.00 151.08 A 28.854381999831723 28.854381999831723 0 0 0 302.17 122.23 A 17.83298880026924 17.83298880026924 0 0 0 320.00 122.23 A 11.021393199562482 11.021393199562482 0 0 1 313.19 140.06 A 6.8115956007067595 6.8115956007067595 0 0 1 320.00 144.27 A 4.209797598855722 4.209797598855722 0 0 0 317.40 140.06";

const TILES = [
  [0, 0, 197.8, 197.8],
  [197.8, 0, 122.2, 122.2],
  [197.8, 122.2, 75.5, 75.5],
  [273.3, 151.1, 46.7, 46.7],
  [273.3, 122.2, 28.9, 28.9],
  [302.2, 122.2, 17.8, 17.8],
  [302.2, 140.1, 11.0, 11.0],
  [313.2, 144.3, 6.8, 6.8],
  [313.2, 140.1, 4.2, 4.2],
];

function GoldenSpiral() {
  return (
    <svg viewBox="0 0 320 197.8" className="w-full" role="img" aria-label="Golden ratio spiral">
      <path
        d={SPIRAL}
        fill="none"
        stroke="url(#spiralGrad)"
        strokeWidth="2"
        strokeLinecap="round"
      />
      {TILES.map(([x, y, w, h], i) => (
        <rect
          key={i}
          x={x}
          y={y}
          width={w}
          height={h}
          fill="rgba(255,255,255,0.06)"
          stroke="rgba(255,255,255,0.22)"
          strokeWidth="1"
        />
      ))}
      <defs>
        <linearGradient id="spiralGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#7c6cff" />
          <stop offset="50%" stopColor="#ff7ad9" />
          <stop offset="100%" stopColor="#ffb86b" />
        </linearGradient>
      </defs>
    </svg>
  );
}

const quoteBank = [
  "Reading is the fastest route to borrowed wisdom.",
  "Don’t skim the whole. Keep the crucial part.",
  "A library is a sleeping mind. Reader, wake it.",
  "Knowledge is a ratio: what enters vs what stays.",
  "The best summary is the one that changes you.",
];

const features = [
  {
    icon: ScanSearch,
    tag: "01 · essence",
    title: "Signal, distilled",
    body: "We score every sentence by its weight in the argument. The load-bearing ideas rise; the filler falls away — a summary with a spine, not a synopsis.",
    accent: "from-violet-500/25 to-fuchsia-500/25 ring-violet-400/30",
  },
  {
    icon: Lightbulb,
    tag: "02 · hints",
    title: "Read between the lines",
    body: "Hints flag the quiet passages authors lean on but rarely announce — the caveat on page 12, the definition hidden in a footnote.",
    accent: "from-amber-400/25 to-orange-500/25 ring-amber-400/30",
  },
  {
    icon: Quote,
    tag: "03 · quotes",
    title: "Lines worth keeping",
    body: "Every memorable sentence, copied verbatim with source context. Quotes you can actually cite, because we keep receipts.",
    accent: "from-rose-400/25 to-pink-500/25 ring-rose-400/30",
  },
  {
    icon: FlaskConical,
    tag: "04 · insights",
    title: "Ideas that go further",
    body: "Bridges to adjacent concepts and your own work. We turn static text into this → therefore → next.",
    accent: "from-sky-400/25 to-cyan-400/25 ring-sky-400/30",
  },
];

export function Design2() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#f4f5fb] font-display text-[#17163a] selection:bg-[#7c6cff]/30">
      <Switcher current={2} />

      {/* aurora background */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[8%] top-[6%] h-[34rem] w-[34rem] animate-blob rounded-full bg-gradient-to-br from-[#7c6cff]/30 to-[#38bdf8]/20 blur-3xl" />
        <div className="absolute right-[4%] top-[24%] h-[30rem] w-[30rem] animate-blob rounded-full bg-gradient-to-br from-[#ff7ad9]/25 to-[#fbbf24]/20 blur-3xl [animation-delay:-5s]" />
        <div className="absolute bottom-[4%] left-[30%] h-[28rem] w-[28rem] animate-blob rounded-full bg-gradient-to-br from-[#34d399]/20 to-[#7c6cff]/20 blur-3xl [animation-delay:-9s]" />
        <div
          className="absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage:
              "radial-gradient(rgba(23,22,58,0.06) 1px, transparent 1px)",
            backgroundSize: "22px 22px",
          }}
        />
      </div>

      {/* ============ NAV ============ */}
      <header className="sticky top-0 z-40 px-6 py-5">
        <div className="mx-auto flex max-w-6xl items-center justify-between rounded-2xl border border-white/60 bg-white/50 px-5 py-3 shadow-[0_8px_40px_-12px_rgba(23,22,58,0.12)] backdrop-blur-xl">
          <a href="/2" className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-[#7c6cff] to-[#38bdf8] text-sm font-bold text-white shadow-lg shadow-[#7c6cff]/30">
              φ
            </span>
            <span className="text-lg font-semibold tracking-tight">
              ratio<span className="text-[#7c6cff]">.reader</span>
            </span>
          </a>
          <nav className="hidden items-center gap-8 text-sm font-medium text-[#4b4982] md:flex">
            {["Features", "Method", "Philosophy"].map((l) => (
              <a key={l} href="#" className="transition hover:text-[#17163a]" onClick={(e) => { e.preventDefault(); const map: Record<string, string> = { Features: "#features", Method: "#method", Philosophy: "#philosophy" }; document.querySelector(map[l])?.scrollIntoView({ behavior: "smooth" }); }}>{l}</a>
            ))}
            <a href="#cta" onClick={(e) => e.preventDefault()} className="group inline-flex items-center gap-1.5 rounded-full bg-[#17163a] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#2b2a5e]">
              Start free
              <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden />
            </a>
          </nav>
        </div>
      </header>

      {/* ============ HERO ============ */}
      <section className="relative px-6 pb-20 pt-14 sm:pt-20">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#7c6cff]/25 bg-white/60 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-[#7c6cff] backdrop-blur">
              <Sparkles className="h-3.5 w-3.5" aria-hidden />
              Phi-class reading
            </p>
            <h1 className="text-balance text-5xl font-semibold leading-[1.05] tracking-tight sm:text-7xl">
              The <span className="bg-gradient-to-r from-[#7c6cff] via-[#ff7ad9] to-[#fbbf24] bg-clip-text text-transparent">golden ratio</span> for your reading time.
            </h1>
            <p className="mt-7 max-w-xl text-pretty text-lg leading-relaxed text-[#5553a0]">
              Upload a PDF. We keep a golden proportion — the indispensable
              meaning — and return it as a razor-sharp summary, hints, quotes
              and insights. One fifth of the pages, one hundred percent of the
              signal.
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a href="#cta" onClick={(e) => e.preventDefault()} className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-[#7c6cff] to-[#5cb8ff] px-7 py-4 text-base font-semibold text-white shadow-xl shadow-[#7c6cff]/30 transition hover:shadow-2xl hover:shadow-[#7c6cff]/40">
                <UploadCloud className="h-5 w-5" aria-hidden />
                Upload your PDF
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" aria-hidden />
              </a>
              <a href="#features" className="inline-flex items-center justify-center gap-2 rounded-2xl border border-[#17163a]/15 bg-white/60 px-7 py-4 text-base font-semibold text-[#17163a] backdrop-blur transition hover:bg-white">
                Explore the output
              </a>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-[#5553a0]">
              {["No credit card", "Free first distillation", "Docs stay private"].map((t) => (
                <span key={t} className="inline-flex items-center gap-1.5">
                  <Check className="h-4 w-4 text-emerald-500" aria-hidden /> {t}
                </span>
              ))}
            </div>
          </div>

          {/* spiral visual */}
          <div className="relative">
            <div className="absolute right-8 top-0 -z-10 h-72 w-72 rounded-full bg-gradient-to-br from-[#7c6cff]/40 to-[#ff7ad9]/30 blur-2xl" />
            <div className="relative mx-auto max-w-md rounded-3xl border border-white/70 bg-white/45 p-6 shadow-[0_30px_80px_-20px_rgba(23,22,58,0.25)] backdrop-blur-xl sm:p-9">
              <div className="mb-1 flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#5553a0]">
                  the ratio
                </span>
                <span className="font-mono text-sm text-[#7c6cff]">φ = 1.618</span>
              </div>
              <GoldenSpiral />
              <div className="mt-6 grid grid-cols-4 gap-2 text-center">
                {[
                  ["412", "pages"],
                  ["2370", "sentences"],
                  ["47", "quotes"],
                  ["9", "big ideas"],
                ].map(([n, l]) => (
                  <div key={l} className="rounded-xl border border-white/70 bg-white/70 px-2 py-3 backdrop-blur">
                    <p className="text-lg font-bold text-[#17163a]">{n}</p>
                    <p className="text-[10px] uppercase tracking-wider text-[#5553a0]">{l}</p>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-center font-mono text-[11px] text-[#5553a0]">
                ↑ 17:1 compression · meaning preserved ↑
              </p>
            </div>
            {/* floating chips */}
            <div className="absolute -left-2 top-8 hidden animate-float rounded-2xl border border-white/70 bg-white/80 px-4 py-2.5 font-semibold text-sm shadow-lg backdrop-blur sm:block">
              🎯 key idea #4
            </div>
            <div className="absolute -right-1 bottom-10 hidden animate-float-slow rounded-2xl border border-white/70 bg-white/80 px-4 py-2.5 font-semibold text-sm shadow-lg backdrop-blur sm:block">
              “a beautiful thought” ✦
            </div>
          </div>
        </div>
      </section>

      {/* ============ MARQUEE ============ */}
      <div className="border-y border-[#17163a]/10 bg-white/40 py-4 backdrop-blur">
        <div className="mask-fade-x flex overflow-hidden">
          <div className="flex min-w-max animate-marquee items-center gap-10 pr-10">
            {[...quoteBank, ...quoteBank].map((q, i) => (
              <span key={i} className="flex items-center gap-10 whitespace-nowrap text-lg italic text-[#5553a0]">
                {q}
                <span className="h-1.5 w-1.5 rounded-full bg-[#ff7ad9]" />
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ============ FEATURES ============ */}
      <section id="features" className="px-6 py-24">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#7c6cff]">features</p>
          <h2 className="mt-4 text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
            Four lenses. One understanding.
          </h2>
          <p className="mt-5 text-pretty text-lg leading-relaxed text-[#5553a0]">
            A single document becomes a map with four layers of meaning — so
            nothing important is left to chance.
          </p>
        </div>

        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
          {features.map((f, i) => (
            <article
              key={f.title}
              className={`group relative overflow-hidden rounded-3xl border border-white/70 bg-white/45 p-7 ring-1 ring-transparent backdrop-blur-xl transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_24px_60px_-18px_rgba(124,108,255,0.4)] ${f.accent} ${i % 2 ? "md:translate-y-6" : ""}`}
              style={{ backgroundImage: "linear-gradient(135deg, rgba(255,255,255,0.65), rgba(255,255,255,0.25))" }}
            >
              <div className="flex items-center justify-between">
                <span className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br text-white shadow-lg ${i === 0 ? "from-violet-500 to-fuchsia-500" : i === 1 ? "from-amber-400 to-orange-500" : i === 2 ? "from-rose-400 to-pink-500" : "from-sky-400 to-cyan-500"}`}>
                  <f.icon className="h-6 w-6" aria-hidden />
                </span>
                <span className="font-mono text-xs text-[#5553a0]">{f.tag}</span>
              </div>
              <h3 className="mt-5 text-2xl font-semibold tracking-tight">{f.title}</h3>
              <p className="mt-2.5 leading-relaxed text-[#5553a0]">{f.body}</p>
              <a href="#cta" onClick={(e) => e.preventDefault()} className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-[#7c6cff]">
                See it in action <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" aria-hidden />
              </a>
            </article>
          ))}
        </div>
      </section>

      {/* ============ METHOD / GLASS APP PREVIEW ============ */}
      <section id="method" className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="grid items-center gap-14 lg:grid-cols-2">
            <div className="order-2 lg:order-1">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#7c6cff]">how it works</p>
              <h2 className="mt-4 text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
                Three steps to lightness.
              </h2>
              <p className="mt-5 max-w-lg text-pretty text-lg leading-relaxed text-[#5553a0]">
                We turn reading into a two-minute ritual. Drop a file, step
                away, return to the signal.
              </p>

              <ol className="mt-10 space-y-8">
                {[
                  { icon: FileUp, n: "Step 01", t: "Drop the PDF", d: "Books, papers, reports, even 800-page tomes. We chunk, read and index every page." },
                  { icon: Layers, n: "Step 02", t: "We weigh the meaning", d: "Every sentence is scored. Arguments are traced. Quotes flagged. Hints planted where a careful reader would pause." },
                  { icon: Sparkles, n: "Step 03", t: "Get your ratio", d: "A distilled essence you can read on the bus, quote in a meeting, or revisit forever." },
                ].map((s) => (
                  <li key={s.n} className="group flex gap-5">
                    <div className="flex flex-col items-center">
                      <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/70 bg-white/60 text-[#7c6cff] shadow-sm backdrop-blur transition group-hover:bg-white group-hover:shadow-lg">
                        <s.icon className="h-5 w-5" aria-hidden />
                      </span>
                      <span className="mt-3 h-full w-px bg-gradient-to-b from-[#7c6cff]/30 to-transparent" />
                    </div>
                    <div className="pb-2">
                      <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#7c6cff]">{s.n}</p>
                      <h3 className="mt-1 text-xl font-semibold tracking-tight">{s.t}</h3>
                      <p className="mt-1.5 leading-relaxed text-[#5553a0]">{s.d}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            {/* mini app preview */}
            <div className="order-1 lg:order-2">
              <div className="relative mx-auto max-w-md">
                <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-br from-[#7c6cff]/25 via-[#ff7ad9]/15 to-[#fbbf24]/20 blur-xl" />
                <div className="overflow-hidden rounded-3xl border border-white/70 bg-white/55 shadow-[0_40px_100px_-24px_rgba(23,22,58,0.35)] backdrop-blur-xl">
                  {/* window bar */}
                  <div className="flex items-center gap-2 border-b border-[#17163a]/10 bg-white/60 px-5 py-3.5">
                    <span className="h-3 w-3 rounded-full bg-rose-400" />
                    <span className="h-3 w-3 rounded-full bg-amber-400" />
                    <span className="h-3 w-3 rounded-full bg-emerald-400" />
                    <span className="ml-3 font-mono text-xs text-[#5553a0]">
                      ratio-reader — “Atomic Habits” — distilled
                    </span>
                  </div>
                  <div className="space-y-4 p-6">
                    <div className="rounded-2xl bg-gradient-to-br from-[#17163a] to-[#2b2a5e] p-5 text-white">
                      <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-white/60">essence</p>
                      <p className="mt-2 text-sm leading-relaxed text-white/90">
                        Systems beat goals. Identity drives habits: every action
                        is a vote for the person you want to become.
                      </p>
                      <div className="mt-3 flex gap-2">
                        <span className="rounded-full bg-white/15 px-3 py-1 text-[11px]">8 key ideas</span>
                        <span className="rounded-full bg-white/15 px-3 py-1 text-[11px]">2 min read</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 rounded-2xl border border-white/80 bg-white/70 p-4">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-amber-400/20 text-amber-600">
                        <Lightbulb className="h-4 w-4" aria-hidden />
                      </span>
                      <p className="text-sm leading-relaxed text-[#4b4982]">
                        <span className="font-semibold text-[#17163a]">Hint:</span> the 1% improvement rule appears on p.27 — it’s the real thesis.
                      </p>
                    </div>
                    <div className="flex items-start gap-3 rounded-2xl border border-white/80 bg-white/70 p-4">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-rose-400/20 text-rose-500">
                        <Quote className="h-4 w-4" aria-hidden />
                      </span>
                      <p className="text-sm leading-relaxed text-[#4b4982]">
                        <span className="font-semibold text-[#17163a]">Quote:</span> “You do not rise to the level of your goals. You fall to the level of your systems.”
                      </p>
                    </div>
                    <div className="flex items-start gap-3 rounded-2xl border border-white/80 bg-white/70 p-4">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-sky-400/20 text-sky-600">
                        <FlaskConical className="h-4 w-4" aria-hidden />
                      </span>
                      <p className="text-sm leading-relaxed text-[#4b4982]">
                        <span className="font-semibold text-[#17163a]">Insight:</span> pair this with “Deep Work” — environment design is the shared bridge.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ PHILOSOPHY / RATIO STATS ============ */}
      <section id="philosophy" className="px-6 py-24">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] border border-white/70 bg-gradient-to-br from-[#17163a] via-[#2b2a5e] to-[#4b4982] p-10 text-white shadow-[0_40px_100px_-30px_rgba(23,22,58,0.6)] sm:p-16">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#ff7ad9]">philosophy</p>
              <h2 className="mt-4 text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
                We don’t fight the noise. We refuse to let it in.
              </h2>
              <p className="mt-6 max-w-md text-pretty text-lg leading-relaxed text-white/75">
                Every document is mostly traversal — repetition, throat-clearing,
                optional detours. Ratio Reader extracts the linear distance from
                A to Z so your mind can walk it in one breath.
              </p>
              <a href="#cta" onClick={(e) => e.preventDefault()} className="group mt-8 inline-flex items-center gap-2 rounded-2xl bg-white px-7 py-3.5 text-base font-semibold text-[#17163a] transition hover:bg-white/90">
                Try the philosophy
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" aria-hidden />
              </a>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                ["17:1", "median time ratio"],
                ["94%", "information retained"],
                ["4 layers", "summary · hints · quotes · insights"],
                ["∞", "documents, one ratio"],
              ].map(([n, l], i) => (
                <div
                  key={l}
                  className={`rounded-2xl border border-white/15 bg-white/10 p-6 backdrop-blur ${i % 2 ? "translate-y-3" : ""}`}
                >
                  <p className="bg-gradient-to-r from-[#ffb86b] via-[#ff7ad9] to-[#7c6cff] bg-clip-text text-4xl font-bold text-transparent sm:text-5xl">
                    {n}
                  </p>
                  <p className="mt-2 text-sm text-white/70">{l}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============ CTA ============ */}
      <section id="cta" className="px-6 py-24">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-3xl bg-gradient-to-br from-[#7c6cff] to-[#38bdf8] text-2xl font-bold text-white shadow-2xl shadow-[#7c6cff]/40">
            φ
          </div>
          <h2 className="text-balance text-4xl font-semibold tracking-tight sm:text-6xl">
            Read at the speed of <span className="bg-gradient-to-r from-[#7c6cff] via-[#ff7ad9] to-[#fbbf24] bg-clip-text text-transparent">insight</span>.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-pretty text-lg leading-relaxed text-[#5553a0]">
            Your first PDF is distilled in about ninety seconds. No card, no
            friction — just the ratio.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a href="#cta" onClick={(e) => e.preventDefault()} className="group inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-[#7c6cff] to-[#5cb8ff] px-8 py-4 text-lg font-semibold text-white shadow-xl shadow-[#7c6cff]/30 transition hover:shadow-2xl">
              <UploadCloud className="h-5 w-5" aria-hidden />
              Start distilling — free
            </a>
          </div>
        </div>
      </section>

      {/* ============ FOOTER ============ */}
      <footer className="border-t border-[#17163a]/10 bg-white/40 px-6 py-10 backdrop-blur">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-sm text-[#5553a0] sm:flex-row">
          <span className="flex items-center gap-2 font-semibold text-[#17163a]">
            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-[#7c6cff] to-[#38bdf8] text-xs font-bold text-white">φ</span>
            ratio.reader
          </span>
          <span>Made for readers who value their time.</span>
          <span className="font-mono text-xs">© 2026 · φ-conscious</span>
        </div>
      </footer>
    </div>
  );
}
