import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Brain,
  Compass,
  Feather,
  Flower2,
  Gauge,
  Highlighter,
  Layers,
  Leaf,
  Lightbulb,
  Moon,
  Quote,
  ScanLine,
  Sparkle,
  Sparkles,
  Sprout,
  Star,
  Sun,
  Telescope,
  Terminal,
  UploadCloud,
  Zap,
} from "lucide-react";
import type { ComponentType } from "react";
import {
  BrowserRouter,
  Link,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";

type Icon = ComponentType<{ className?: string }>;

const PAGES = [1, 2, 3, 4, 5] as const;
const LABELS = ["Editorial", "Terminal", "Botanical", "Brutalist", "Cosmic"];

function PageNav({ tone }: { tone: "light" | "dark" }) {
  const { pathname } = useLocation();
  const base =
    tone === "dark"
      ? "border-white/15 text-white/55 hover:bg-white hover:text-black"
      : "border-black/15 text-black/55 hover:bg-black hover:text-white";
  const active =
    tone === "dark" ? "bg-white text-black" : "bg-black text-white";
  return (
    <div className="fixed bottom-5 left-1/2 z-50 flex -translate-x-1/2 items-center gap-1.5 rounded-full border border-white/15 bg-black/55 p-1.5 backdrop-blur-md">
      {PAGES.map((p) => {
        const is = pathname === `/${p}`;
        return (
          <Link
            key={p}
            to={`/${p}`}
            title={LABELS[p - 1]}
            className={`flex h-9 w-9 items-center justify-center rounded-full border text-sm font-bold transition ${
              is ? active : base
            }`}
          >
            {p}
          </Link>
        );
      })}
    </div>
  );
}

function DesignEditorial() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#f3ece0] font-editorial text-[#1c1813] selection:bg-[#bb3b1d] selection:text-[#f3ece0]">
      <div className="pointer-events-none absolute inset-0 opacity-[0.5] [background-image:radial-gradient(#1c181311_1px,transparent_1px)] [background-size:22px_22px]" />
      <PageNav tone="light" />

      <header className="relative z-10 mx-auto flex max-w-6xl items-center justify-between border-b border-[#1c1813]/25 px-6 py-5">
        <span className="font-impact text-2xl uppercase tracking-tight">Ratio</span>
        <nav className="hidden gap-8 font-mono text-[11px] uppercase tracking-[0.3em] md:flex">
          <span>Vol. 01</span>
          <span>The Reading Issue</span>
          <span>Est. 2026</span>
        </nav>
        <a
          href="#upload"
          className="rounded-full border border-[#1c1813] px-4 py-1.5 font-mono text-[11px] uppercase tracking-[0.2em] transition hover:bg-[#1c1813] hover:text-[#f3ece0]"
        >
          Upload
        </a>
      </header>

      <section className="relative z-10 mx-auto max-w-6xl px-6 pt-12">
        <p className="animate-fade-up font-mono text-xs uppercase tracking-[0.45em] text-[#bb3b1d]">
          The art of reading less, understanding more
        </p>
        <h1 className="mt-6 max-w-5xl font-serifDisplay text-[clamp(3.4rem,11vw,9.5rem)] font-black leading-[0.82] tracking-[-0.03em]">
          <span className="animate-fade-up block" style={{ animationDelay: "0.05s" }}>
            Every page,
          </span>
          <span
            className="animate-fade-up block italic text-[#bb3b1d]"
            style={{ animationDelay: "0.18s" }}
          >
            distilled.
          </span>
        </h1>

        <div className="mt-12 grid gap-10 border-t border-[#1c1813]/25 pt-10 md:grid-cols-[1.4fr_1fr]">
          <p
            className="animate-fade-up text-2xl leading-relaxed md:columns-2 md:gap-10 md:[column-rule:1px_solid_#1c181333]"
            style={{ animationDelay: "0.3s" }}
          >
            <span className="float-left mr-3 mt-1 font-serifDisplay text-7xl font-black leading-[0.7] text-[#bb3b1d]">
              U
            </span>
            pload any PDF and Ratio reader returns the essence — a precise
            summary of what matters, the quotes worth remembering, and gentle
            hints that explain the hard parts before they trip you up. Reading
            becomes a conversation, not a chore.
          </p>
          <div
            className="animate-fade-up space-y-4"
            style={{ animationDelay: "0.42s" }}
          >
            {[
              [BookOpen, "Summary", "The whole document, told in a few honest paragraphs."],
              [Quote, "Quotes", "Sentences worth keeping, with their source intact."],
              [Lightbulb, "Hints", "Context delivered the moment confusion begins."],
            ].map(([I, t, d]) => {
              const Glyph = I as Icon;
              return (
                <div
                  key={t as string}
                  className="flex items-start gap-4 border-b border-[#1c1813]/20 pb-4"
                >
                  <Glyph className="mt-1 h-5 w-5 shrink-0 text-[#bb3b1d]" />
                  <div>
                    <h3 className="font-mono text-xs uppercase tracking-[0.25em]">
                      {t as string}
                    </h3>
                    <p className="mt-1 text-lg leading-snug text-[#1c1813]/75">
                      {d as string}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative z-10 mx-auto mt-16 max-w-6xl px-6">
        <div className="overflow-hidden whitespace-nowrap border-y-2 border-[#1c1813] py-3">
          <div className="animate-marquee inline-block font-impact text-3xl uppercase tracking-tight">
            {Array.from({ length: 2 }).map((_, i) => (
              <span key={i}>
                Read faster <span className="text-[#bb3b1d]">✦</span> retain more{" "}
                <span className="text-[#bb3b1d]">✦</span> skim never{" "}
                <span className="text-[#bb3b1d]">✦</span> understand always{" "}
                <span className="text-[#bb3b1d]">✦</span>{" "}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section
        id="upload"
        className="relative z-10 mx-auto my-16 max-w-6xl px-6"
      >
        <div className="grid items-center gap-8 rounded-sm border-2 border-[#1c1813] bg-[#1c1813] p-8 text-[#f3ece0] md:grid-cols-[1fr_auto] md:p-12">
          <div>
            <h2 className="font-serifDisplay text-5xl font-black leading-none md:text-6xl">
              Begin the read.
            </h2>
            <p className="mt-4 max-w-md text-xl text-[#f3ece0]/70">
              Drop a document below. Your briefing arrives in under a minute.
            </p>
          </div>
          <a
            href="#"
            className="group inline-flex items-center gap-3 rounded-full bg-[#bb3b1d] px-8 py-4 font-mono text-sm uppercase tracking-[0.2em] transition hover:gap-5"
          >
            <UploadCloud className="h-5 w-5" /> Upload PDF
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
          </a>
        </div>
        <p className="mt-6 text-center font-mono text-[11px] uppercase tracking-[0.3em] text-[#1c1813]/50">
          Ratio Reader — printed in pixels, 2026
        </p>
      </section>
    </main>
  );
}

function DesignTerminal() {
  const nodes = [
    { l: "abstract", x: 18, y: 20 },
    { l: "claim_01", x: 64, y: 14 },
    { l: "evidence", x: 40, y: 44 },
    { l: "quote", x: 76, y: 52 },
    { l: "hint", x: 22, y: 64 },
    { l: "insight", x: 58, y: 76 },
  ];
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#03060a] font-mono text-[#c9fff1] selection:bg-[#1affd5] selection:text-black">
      <div className="pointer-events-none absolute inset-0 [background-image:linear-gradient(rgba(26,255,213,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(26,255,213,0.06)_1px,transparent_1px)] [background-size:46px_46px]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(26,255,213,0.18),transparent_45%),radial-gradient(circle_at_100%_100%,rgba(255,42,109,0.16),transparent_40%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.25] [background-image:repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(0,0,0,0.5)_3px)]" />
      <PageNav tone="dark" />

      <header className="relative z-10 mx-auto flex max-w-6xl items-center justify-between px-6 py-6 text-xs uppercase tracking-[0.3em]">
        <span className="flex items-center gap-2 text-[#1affd5]">
          <Terminal className="h-4 w-4" /> ratio://reader
        </span>
        <span className="text-[#ff2a6d]">● rec</span>
      </header>

      <section className="relative z-10 mx-auto grid max-w-6xl gap-12 px-6 pt-8 lg:grid-cols-[1fr_1fr]">
        <div className="animate-fade-up">
          <div className="inline-flex items-center gap-2 border border-[#1affd5]/40 bg-[#1affd5]/10 px-3 py-1.5 text-[11px] uppercase tracking-[0.3em] text-[#1affd5]">
            <Brain className="h-3.5 w-3.5" /> comprehension engine v2.6
          </div>
          <h1 className="mt-8 font-cyber text-[clamp(2.8rem,7vw,6.2rem)] font-black uppercase leading-[0.92] tracking-[-0.04em] text-white">
            decode the
            <br />
            <span className="text-[#1affd5] [text-shadow:0_0_24px_rgba(26,255,213,0.6)]">
              document
            </span>
            <span className="animate-blink text-[#ff2a6d]">_</span>
          </h1>
          <p className="mt-7 max-w-md text-sm leading-7 text-[#c9fff1]/70">
            {">"} upload a PDF. Ratio scans every line, maps the ideas, and pipes
            back a brief, the key quotes, and hints exactly where you stall.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="#"
              className="group inline-flex items-center gap-2 bg-[#1affd5] px-6 py-3 text-xs font-bold uppercase tracking-[0.2em] text-black transition hover:bg-[#ff2a6d] hover:text-white"
            >
              <UploadCloud className="h-4 w-4" /> ./run scan
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </a>
            <a
              href="#stat"
              className="inline-flex items-center border border-[#1affd5]/40 px-6 py-3 text-xs font-bold uppercase tracking-[0.2em] text-[#1affd5] transition hover:bg-[#1affd5]/10"
            >
              read logs
            </a>
          </div>
          <div className="mt-10 grid grid-cols-3 gap-3" id="stat">
            {[
              ["340", "pages/sec"],
              ["18", "quotes found"],
              ["92%", "signal"],
            ].map(([n, l], i) => (
              <div
                key={l}
                className="animate-fade-up border border-[#1affd5]/20 bg-[#1affd5]/[0.04] p-3"
                style={{ animationDelay: `${0.3 + i * 0.1}s` }}
              >
                <div className="text-2xl font-bold text-[#1affd5]">{n}</div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-[#c9fff1]/50">
                  {l}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="animate-fade-in relative min-h-[460px] border border-[#1affd5]/25 bg-black/40 p-4 backdrop-blur">
          <div className="flex items-center justify-between border-b border-[#1affd5]/20 pb-3 text-[10px] uppercase tracking-[0.25em] text-[#1affd5]">
            <span>knowledge_map.exe</span>
            <span className="flex gap-1.5">
              <i className="h-2.5 w-2.5 rounded-full bg-[#ff2a6d]" />
              <i className="h-2.5 w-2.5 rounded-full bg-[#1affd5]" />
            </span>
          </div>
          <div className="relative mt-4 h-[400px]">
            <svg className="absolute inset-0 h-full w-full">
              {nodes.map((n, i) => (
                <line
                  key={i}
                  x1="50%"
                  y1="50%"
                  x2={`${n.x}%`}
                  y2={`${n.y}%`}
                  stroke="rgba(26,255,213,0.35)"
                  strokeWidth="1"
                  strokeDasharray="4 4"
                />
              ))}
            </svg>
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="animate-pulse-ring absolute inset-0 rounded-full border border-[#1affd5]" />
              <div className="flex h-16 w-16 items-center justify-center rounded-full border border-[#1affd5] bg-[#1affd5]/15 text-[10px] font-bold uppercase tracking-widest text-[#1affd5]">
                core
              </div>
            </div>
            {nodes.map((n, i) => (
              <div
                key={n.l}
                className="animate-fade-up absolute -translate-x-1/2 -translate-y-1/2 border border-[#1affd5]/40 bg-black/70 px-3 py-1.5 text-[10px] uppercase tracking-[0.15em] text-[#c9fff1]"
                style={{
                  left: `${n.x}%`,
                  top: `${n.y}%`,
                  animationDelay: `${0.4 + i * 0.12}s`,
                }}
              >
                {n.l}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 mx-auto mt-16 max-w-6xl px-6 pb-20">
        <div className="grid gap-px overflow-hidden border border-[#1affd5]/20 md:grid-cols-3">
          {[
            [ScanLine, "scan", "every line parsed for signal vs. noise"],
            [Quote, "extract", "key quotes pulled with their coordinates"],
            [Lightbulb, "assist", "hints injected where readers stall out"],
          ].map(([I, t, d]) => {
            const Glyph = I as Icon;
            return (
              <div
                key={t as string}
                className="group bg-[#1affd5]/[0.03] p-6 transition hover:bg-[#1affd5]/10"
              >
                <Glyph className="h-6 w-6 text-[#ff2a6d] transition group-hover:text-[#1affd5]" />
                <h3 className="mt-4 text-lg font-bold uppercase tracking-[0.15em] text-white">
                  {t as string}
                </h3>
                <p className="mt-2 text-xs leading-6 text-[#c9fff1]/60">
                  {d as string}
                </p>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}

function DesignBotanical() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#f4f1e3] font-botanic text-[#2c3a22] selection:bg-[#5b7d3a] selection:text-[#f4f1e3]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(91,125,58,0.18),transparent_30%),radial-gradient(circle_at_85%_75%,rgba(214,158,73,0.18),transparent_32%)]" />
      <Leaf className="animate-float-slow pointer-events-none absolute left-[8%] top-[18%] h-10 w-10 text-[#5b7d3a]/40" />
      <Sprout className="animate-float pointer-events-none absolute right-[12%] top-[30%] h-12 w-12 text-[#5b7d3a]/40" />
      <Flower2 className="animate-float-slow pointer-events-none absolute bottom-[12%] left-[16%] h-9 w-9 text-[#d69e49]/50" />
      <PageNav tone="light" />

      <header className="relative z-10 mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <span className="flex items-center gap-2 text-xl font-black">
          <Sprout className="h-5 w-5 text-[#5b7d3a]" /> Ratio
        </span>
        <a
          href="#plant"
          className="rounded-full bg-[#2c3a22] px-5 py-2 text-sm font-semibold text-[#f4f1e3] transition hover:bg-[#5b7d3a]"
        >
          Plant a PDF
        </a>
      </header>

      <section className="relative z-10 mx-auto max-w-5xl px-6 pt-14 text-center">
        <p
          className="animate-fade-up font-mono text-xs uppercase tracking-[0.4em] text-[#5b7d3a]"
        >
          a calmer way through dense reading
        </p>
        <h1 className="animate-fade-up mt-7 text-[clamp(3rem,9vw,8rem)] font-black leading-[0.86] tracking-[-0.02em]" style={{ animationDelay: "0.1s" }}>
          Let understanding{" "}
          <span className="italic text-[#5b7d3a]">grow</span> from the margins.
        </h1>
        <p
          className="animate-fade-up mx-auto mt-8 max-w-2xl text-2xl leading-relaxed text-[#2c3a22]/75"
          style={{ animationDelay: "0.2s" }}
        >
          Ratio reader tends every document like a garden — summaries prune the
          overgrowth, quotes anchor the roots, and hints unfurl exactly where
          comprehension needs light.
        </p>
        <div
          className="animate-fade-up mt-10 flex flex-wrap justify-center gap-4"
          style={{ animationDelay: "0.3s" }}
        >
          <a
            href="#plant"
            className="group inline-flex items-center gap-3 rounded-full bg-[#2c3a22] px-7 py-4 text-base font-semibold text-[#f4f1e3] transition hover:bg-[#5b7d3a]"
          >
            <UploadCloud className="h-5 w-5" /> Upload to grow
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
          </a>
          <a
            href="#stages"
            className="inline-flex items-center gap-2 rounded-full border border-[#2c3a22]/30 px-7 py-4 text-base font-semibold transition hover:bg-[#2c3a22]/5"
          >
            <Compass className="h-4 w-4" /> Tour the garden
          </a>
        </div>
      </section>

      <section
        id="stages"
        className="relative z-10 mx-auto mt-20 max-w-6xl px-6"
      >
        <div className="grid gap-5 md:grid-cols-4">
          {[
            [BookOpen, "Canopy", "The main argument becomes a clear reading path."],
            [Quote, "Roots", "Key sentences stay attached to their source."],
            [Highlighter, "Leaves", "Hints explain references, terms, and context."],
            [Sun, "Fruit", "Insights and patterns ripen once the core is clear."],
          ].map(([I, t, d], i) => {
            const Glyph = I as Icon;
            return (
              <div
                key={t as string}
                className="animate-fade-up group rounded-[2rem] border border-[#2c3a22]/15 bg-white/55 p-7 backdrop-blur transition hover:-translate-y-2 hover:bg-white/80"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#5b7d3a]/15">
                  <Glyph className="h-6 w-6 text-[#5b7d3a]" />
                </div>
                <h3 className="mt-5 text-2xl font-black">{t as string}</h3>
                <p className="mt-2 text-lg leading-snug text-[#2c3a22]/70">
                  {d as string}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      <section id="plant" className="relative z-10 mx-auto my-20 max-w-3xl px-6">
        <div className="rounded-[3rem] border border-[#2c3a22]/20 bg-[#2c3a22] p-10 text-center text-[#f4f1e3] md:p-14">
          <Feather className="mx-auto h-10 w-10 text-[#d69e49]" />
          <h2 className="mt-6 text-5xl font-black leading-none">
            Ready to read with ease?
          </h2>
          <p className="mx-auto mt-4 max-w-md text-xl text-[#f4f1e3]/70">
            Drop a PDF and watch a tangled document bloom into something
            beautifully readable.
          </p>
          <a
            href="#"
            className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#d69e49] px-8 py-4 text-base font-bold text-[#2c3a22] transition hover:gap-5"
          >
            Begin <ArrowRight className="h-5 w-5" />
          </a>
        </div>
      </section>
    </main>
  );
}

function DesignBrutalist() {
  return (
    <main className="relative min-h-screen bg-[#ffe600] font-space text-black selection:bg-black selection:text-[#ffe600]">
      <PageNav tone="light" />
      <header className="flex items-center justify-between border-b-4 border-black px-6 py-4">
        <span className="font-impact text-3xl uppercase">RATIO//READER</span>
        <a
          href="#out"
          className="border-4 border-black bg-white px-4 py-2 text-sm font-bold uppercase shadow-[5px_5px_0_#000] transition hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
        >
          Upload
        </a>
      </header>

      <section className="grid border-b-4 border-black lg:grid-cols-[1.2fr_0.8fr]">
        <div className="relative border-black p-6 md:p-10 lg:border-r-4">
          <span className="inline-block rotate-[-2deg] border-4 border-black bg-[#ff5252] px-4 py-2 font-mono text-sm font-bold uppercase text-white shadow-[6px_6px_0_#000]">
            no-fluff reading machine
          </span>
          <h1 className="mt-8 font-impact text-[clamp(3.6rem,13vw,11rem)] uppercase leading-[0.78] tracking-[-0.02em]">
            <span className="animate-fade-up block">STOP</span>
            <span
              className="animate-fade-up block text-[#ff5252]"
              style={{ animationDelay: "0.1s" }}
            >
              DROWNING
            </span>
            <span
              className="animate-fade-up block"
              style={{ animationDelay: "0.2s" }}
            >
              IN PDFs.
            </span>
          </h1>
          <div className="mt-8 grid max-w-3xl gap-4 md:grid-cols-3">
            {[
              ["01", "COMPRESS", "Pages cut down to load-bearing ideas."],
              ["02", "PROVE", "Quotes show where claims actually live."],
              ["03", "DECODE", "Hints translate jargon and assumptions."],
            ].map(([n, t, d], i) => (
              <div
                key={t}
                className="animate-fade-up border-4 border-black bg-white p-5 shadow-[7px_7px_0_#000]"
                style={{ animationDelay: `${0.2 + i * 0.1}s` }}
              >
                <p className="font-mono text-sm font-bold">{n}</p>
                <h3 className="mt-3 font-impact text-3xl uppercase">{t}</h3>
                <p className="mt-2 text-sm font-medium leading-5 text-black/70">
                  {d}
                </p>
              </div>
            ))}
          </div>
          <a
            href="#out"
            className="group mt-10 inline-flex items-center gap-3 border-4 border-black bg-black px-8 py-4 font-impact text-2xl uppercase text-[#ffe600] shadow-[7px_7px_0_#ff5252] transition hover:translate-x-1 hover:translate-y-1 hover:shadow-[3px_3px_0_#ff5252]"
          >
            <UploadCloud className="h-7 w-7" /> UPLOAD NOW
            <ArrowDownRight className="h-7 w-7 transition group-hover:translate-x-1 group-hover:translate-y-1" />
          </a>
        </div>

        <div id="out" className="bg-black p-6 text-white md:p-8">
          <div className="border-4 border-white bg-[#ff5252] p-6 text-black shadow-[8px_8px_0_#ffe600]">
            <Gauge className="h-10 w-10" />
            <p className="mt-5 font-impact text-6xl uppercase leading-[0.85]">
              84% LESS READING TIME
            </p>
          </div>
          <div className="mt-6 border-4 border-white bg-white p-6 text-black shadow-[8px_8px_0_#ff5252]">
            <p className="font-mono text-xs font-bold uppercase tracking-[0.2em]">
              Generated brief
            </p>
            <h2 className="mt-3 font-impact text-4xl uppercase leading-[0.9]">
              Claim. Proof. Context. Next.
            </h2>
            <div className="mt-5 space-y-2">
              {[
                "Key idea ranked first",
                "Quote kept with source",
                "Hint explains gaps",
                "Insight links sections",
              ].map((l) => (
                <div
                  key={l}
                  className="flex items-center gap-3 border-y-2 border-black py-2 font-bold uppercase"
                >
                  <Zap className="h-5 w-5 text-[#ff5252]" /> {l}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="overflow-hidden whitespace-nowrap border-b-4 border-black bg-black py-3">
        <div className="animate-marquee inline-block font-impact text-2xl uppercase text-[#ffe600]">
          {Array.from({ length: 2 }).map((_, i) => (
            <span key={i}>
              UPLOAD ▸ SUMMARIZE ▸ QUOTE ▸ HINT ▸ UNDERSTAND ▸{" "}
            </span>
          ))}
        </div>
      </div>
    </main>
  );
}

function DesignCosmic() {
  const orbit = [
    { I: BookOpen, t: "Summary", a: 0 },
    { I: Quote, t: "Quotes", a: 72 },
    { I: Lightbulb, t: "Hints", a: 144 },
    { I: Sparkles, t: "Insights", a: 216 },
    { I: Layers, t: "Structure", a: 288 },
  ];
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#0a0e1f] font-oracle text-[#ecdcb6] selection:bg-[#d4af37] selection:text-[#0a0e1f]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_25%,rgba(212,175,55,0.18),transparent_45%),radial-gradient(circle_at_15%_85%,rgba(83,109,254,0.14),transparent_40%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-60 [background-image:radial-gradient(#ecdcb633_1px,transparent_1px)] [background-size:40px_40px]" />
      <PageNav tone="dark" />

      <header className="relative z-10 mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <span className="flex items-center gap-2 text-xl font-bold uppercase tracking-[0.25em]">
          <Star className="h-4 w-4 text-[#d4af37]" /> Ratio
        </span>
        <span className="hidden font-mono text-[11px] uppercase tracking-[0.35em] text-[#ecdcb6]/50 md:block">
          the reading astrolabe
        </span>
      </header>

      <section className="relative z-10 mx-auto grid max-w-6xl items-center gap-10 px-6 pt-10 lg:grid-cols-[1fr_1fr]">
        <div className="animate-fade-up text-center lg:text-left">
          <p className="font-mono text-xs uppercase tracking-[0.4em] text-[#d4af37]">
            chart the meaning of any document
          </p>
          <h1 className="mt-7 text-[clamp(3rem,8vw,7rem)] font-black uppercase leading-[0.9] tracking-[0.01em]">
            Navigate the
            <br />
            <span className="bg-gradient-to-r from-[#d4af37] via-[#f5e6a8] to-[#d4af37] bg-[length:200%_auto] bg-clip-text text-transparent [animation:sheen_5s_ease-in-out_infinite]">
              universe
            </span>
            <br />
            inside a PDF.
          </h1>
          <p className="mx-auto mt-7 max-w-md font-space text-lg leading-relaxed text-[#ecdcb6]/70 lg:mx-0">
            Upload a document and receive its summary stars, quote coordinates,
            and hint moons — everything that makes a hard text easy to travel.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-4 lg:justify-start">
            <a
              href="#"
              className="group inline-flex items-center gap-3 rounded-full bg-[#d4af37] px-8 py-4 font-space text-sm font-bold uppercase tracking-[0.15em] text-[#0a0e1f] transition hover:gap-5"
            >
              <Telescope className="h-5 w-5" /> Open the portal
              <ArrowUpRight className="h-4 w-4" />
            </a>
            <a
              href="#orbit"
              className="inline-flex items-center gap-2 rounded-full border border-[#d4af37]/40 px-8 py-4 font-space text-sm font-bold uppercase tracking-[0.15em] text-[#d4af37] transition hover:bg-[#d4af37]/10"
            >
              <Moon className="h-4 w-4" /> Read atlas
            </a>
          </div>
        </div>

        <div
          id="orbit"
          className="animate-fade-in relative mx-auto aspect-square w-full max-w-[460px]"
        >
          <div className="animate-spin-slow absolute inset-0 rounded-full border border-[#d4af37]/30" />
          <div className="animate-spin-rev absolute inset-[14%] rounded-full border border-dashed border-[#d4af37]/25" />
          <div className="absolute inset-[30%] rounded-full border border-[#536dfe]/25" />
          <div className="absolute left-1/2 top-1/2 flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-gradient-to-br from-[#d4af37] to-[#a9842a] shadow-[0_0_70px_rgba(212,175,55,0.6)]">
            <span className="font-oracle text-4xl font-black text-[#0a0e1f]">
              R
            </span>
          </div>
          {orbit.map(({ I, t, a }, i) => {
            const rad = (a * Math.PI) / 180;
            const r = 44;
            const left = 50 + r * Math.cos(rad);
            const top = 50 + r * Math.sin(rad);
            return (
              <div
                key={t}
                className="animate-fade-up absolute flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-1"
                style={{
                  left: `${left}%`,
                  top: `${top}%`,
                  animationDelay: `${0.3 + i * 0.12}s`,
                }}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#d4af37]/50 bg-[#0a0e1f]/80 backdrop-blur">
                  <I className="h-5 w-5 text-[#d4af37]" />
                </div>
                <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#ecdcb6]/60">
                  {t}
                </span>
              </div>
            );
          })}
        </div>
      </section>

      <section className="relative z-10 mx-auto mt-16 max-w-6xl px-6 pb-20">
        <div className="grid gap-5 md:grid-cols-3">
          {[
            [Sparkle, "Summary stars", "The essential argument, visible at first glance."],
            [Compass, "Quote coordinates", "Evidence stays located and easy to trust."],
            [Moon, "Hint moons", "Gentle context before a paragraph becomes a wall."],
          ].map(([I, t, d], i) => {
            const Glyph = I as Icon;
            return (
              <div
                key={t as string}
                className="animate-fade-up rounded-2xl border border-[#d4af37]/25 bg-[#ecdcb6]/[0.04] p-7 backdrop-blur transition hover:-translate-y-2 hover:border-[#d4af37]/60"
                style={{ animationDelay: `${i * 0.12}s` }}
              >
                <Glyph className="h-7 w-7 text-[#d4af37]" />
                <h3 className="mt-5 text-2xl font-bold uppercase tracking-wide">
                  {t as string}
                </h3>
                <p className="mt-3 font-space text-base leading-relaxed text-[#ecdcb6]/65">
                  {d as string}
                </p>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}

function Home() {
  const cards = [
    ["Editorial", "Literary magazine", "bg-[#f3ece0] text-[#1c1813]", "font-serifDisplay"],
    ["Terminal", "Cyberpunk console", "bg-[#03060a] text-[#1affd5]", "font-cyber"],
    ["Botanical", "Organic & calm", "bg-[#f4f1e3] text-[#2c3a22]", "font-botanic"],
    ["Brutalist", "Raw & loud", "bg-[#ffe600] text-black", "font-impact"],
    ["Cosmic", "Art-deco astrolabe", "bg-[#0a0e1f] text-[#d4af37]", "font-oracle"],
  ];
  return (
    <main className="min-h-screen bg-neutral-950 px-6 py-16 font-space text-white">
      <div className="mx-auto max-w-6xl">
        <p className="font-mono text-xs uppercase tracking-[0.4em] text-white/40">
          Ratio Reader — landing concepts
        </p>
        <h1 className="mt-5 font-display text-5xl font-black tracking-tight md:text-7xl">
          Five takes on one idea.
        </h1>
        <p className="mt-4 max-w-xl text-lg text-white/55">
          Each route below is a fully distinct landing page for Ratio reader —
          different typography, palette, layout, and motion.
        </p>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map(([t, d, cls, font], i) => (
            <Link
              key={t}
              to={`/${i + 1}`}
              className={`group relative flex h-56 flex-col justify-between overflow-hidden rounded-3xl p-7 transition hover:scale-[1.02] ${cls}`}
            >
              <span className="font-mono text-xs uppercase tracking-[0.25em] opacity-60">
                /{i + 1}
              </span>
              <div>
                <h2 className={`text-4xl font-black ${font}`}>{t}</h2>
                <p className="mt-1 text-sm opacity-70">{d}</p>
              </div>
              <ArrowUpRight className="absolute right-6 top-6 h-6 w-6 opacity-0 transition group-hover:opacity-100" />
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/1" element={<DesignEditorial />} />
        <Route path="/2" element={<DesignTerminal />} />
        <Route path="/3" element={<DesignBotanical />} />
        <Route path="/4" element={<DesignBrutalist />} />
        <Route path="/5" element={<DesignCosmic />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
