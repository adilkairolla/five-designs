import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  FileText,
  Lightbulb,
  Quote,
  Sparkles,
  Target,
} from "lucide-react";
import { BrowserRouter, Link, Navigate, Route, Routes } from "react-router-dom";

const designs = [1, 2, 3, 4, 5];

function DesignSwitcher({
  className,
  linkClassName,
  labelClassName,
}: {
  className?: string;
  linkClassName?: string;
  labelClassName?: string;
}) {
  return (
    <div className={`flex items-center gap-2 text-xs uppercase ${className ?? ""}`}>
      <span className={labelClassName}>Designs</span>
      <div className="flex items-center gap-1">
        {designs.map((id) => (
          <Link key={id} to={`/${id}`} className={linkClassName}>
            {id}
          </Link>
        ))}
      </div>
    </div>
  );
}

function DesignOne() {
  const display = '"Bodoni Moda", serif';
  const body = '"Source Serif 4", serif';

  return (
    <div
      className="relative min-h-screen overflow-hidden bg-[#f7f4ee] text-[#1d1a17]"
      style={{ fontFamily: body }}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(178,132,79,0.18),transparent_60%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.05)_1px,transparent_1px)] bg-[length:110px_110px] opacity-40" />
      <div className="pointer-events-none absolute -right-24 top-32 h-72 w-72 rounded-full border border-[#1d1a17]/20 animate-[floaty_16s_ease-in-out_infinite]" />

      <header className="relative mx-auto flex max-w-6xl items-center justify-between border-b border-[#1d1a17]/20 px-6 py-6">
        <div className="flex items-center gap-4">
          <div className="flex h-10 w-10 items-center justify-center border border-[#1d1a17] text-sm font-semibold">
            RR
          </div>
          <div className="leading-tight">
            <p className="text-xs uppercase tracking-[0.4em] text-[#7a6a55]">Ratio Reader</p>
            <p className="text-sm">PDF intelligence studio</p>
          </div>
        </div>
        <nav className="hidden items-center gap-6 text-sm lg:flex">
          <a className="hover:text-[#7a6a55]" href="#features">
            Features
          </a>
          <a className="hover:text-[#7a6a55]" href="#workflow">
            Workflow
          </a>
          <a className="hover:text-[#7a6a55]" href="#insights">
            Insights
          </a>
          <button className="rounded-full border border-[#1d1a17] px-4 py-2 text-xs uppercase tracking-[0.3em]">
            Start Free
          </button>
        </nav>
        <DesignSwitcher
          className="hidden lg:flex"
          labelClassName="text-[#7a6a55]"
          linkClassName="rounded-full border border-[#1d1a17]/30 px-2 py-1 text-[#1d1a17] hover:border-[#1d1a17]"
        />
      </header>

      <main className="relative mx-auto max-w-6xl px-6 pb-16 pt-12">
        <section className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.6em] text-[#7a6a55]">New reading ritual</p>
            <h1
              className="mt-5 text-5xl font-semibold leading-[0.95] tracking-[-0.02em] text-[#171512] sm:text-6xl lg:text-7xl"
              style={{ fontFamily: display }}
            >
              Read less. Understand more.
            </h1>
            <p className="mt-6 text-lg text-[#3f372f]">
              Ratio Reader turns dense PDFs into crisp executive summaries, curated quote decks, and
              smart hints so you grasp the core ideas in minutes.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button className="flex items-center gap-2 rounded-full bg-[#1d1a17] px-6 py-3 text-sm uppercase tracking-[0.3em] text-[#f7f4ee]">
                Upload a PDF <ArrowRight className="h-4 w-4" />
              </button>
              <button className="rounded-full border border-[#1d1a17]/40 px-5 py-3 text-sm uppercase tracking-[0.3em]">
                Watch demo
              </button>
            </div>
            <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4">
              {[
                ["10x", "Faster comprehension"],
                ["45s", "Average first summary"],
                ["98%", "Signal retention"],
                ["24/7", "Always on"],
              ].map(([value, label]) => (
                <div key={label}>
                  <p className="text-2xl font-semibold" style={{ fontFamily: display }}>
                    {value}
                  </p>
                  <p className="text-xs uppercase tracking-[0.3em] text-[#7a6a55]">{label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative rounded-[28px] border border-[#1d1a17]/20 bg-white/70 p-6 shadow-[0_30px_80px_rgba(22,17,12,0.18)]">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.4em] text-[#7a6a55]">Inside a summary</p>
                <h2 className="mt-3 text-2xl font-semibold" style={{ fontFamily: display }}>
                  The signal pack
                </h2>
              </div>
              <span className="rounded-full border border-[#1d1a17]/30 px-3 py-1 text-xs uppercase tracking-[0.3em]">
                PDF
              </span>
            </div>
            <div className="mt-6 space-y-4 text-sm text-[#3f372f]">
              <div className="flex items-start gap-3">
                <FileText className="mt-0.5 h-4 w-4 text-[#7a6a55]" />
                <p>One-page executive brief with the 5 highest-impact takeaways.</p>
              </div>
              <div className="flex items-start gap-3">
                <Quote className="mt-0.5 h-4 w-4 text-[#7a6a55]" />
                <p>Pulls verbatim quotes you can reuse in reports or essays.</p>
              </div>
              <div className="flex items-start gap-3">
                <Lightbulb className="mt-0.5 h-4 w-4 text-[#7a6a55]" />
                <p>Contextual hints surface confusing sections with plain-language notes.</p>
              </div>
            </div>
            <div className="mt-6 rounded-2xl border border-[#1d1a17]/10 bg-[#f7f4ee] p-4">
              <p className="text-xs uppercase tracking-[0.3em] text-[#7a6a55]">Highlight</p>
              <p className="mt-2 text-sm text-[#2f2923]">
                “Ratio Reader found the three structural assumptions buried in chapter 6 and
                explained how they shaped the final model.”
              </p>
            </div>
          </div>
        </section>

        <section id="features" className="mt-20">
          <div className="flex items-end justify-between">
            <h2 className="text-3xl font-semibold" style={{ fontFamily: display }}>
              Built for serious readers
            </h2>
            <p className="max-w-md text-sm text-[#5b4f43]">
              Ratio Reader is more than a summary engine. It is a guided interpretation layer for
              complex documents.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              ["Signal summary", "Instantly see the 5-7 ideas the author builds everything on."],
              ["Quote library", "Swipe a clean bank of quotable evidence with page numbers."],
              ["Hint overlays", "Receive plain-language notes on dense or ambiguous sections."],
              ["Insight tags", "Theme clusters reveal patterns across chapters."],
              ["Focus mode", "Highlight only the sections that influence the main argument."],
              ["Exportable briefs", "Share a polished summary with your team in seconds."],
            ].map(([title, copy]) => (
              <div
                key={title}
                className="rounded-3xl border border-[#1d1a17]/15 bg-white/70 p-6 shadow-[0_20px_50px_rgba(29,26,23,0.08)]"
              >
                <h3 className="text-lg font-semibold" style={{ fontFamily: display }}>
                  {title}
                </h3>
                <p className="mt-3 text-sm text-[#4b4137]">{copy}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="workflow" className="mt-20 grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[32px] border border-[#1d1a17]/20 bg-[#1d1a17] p-8 text-[#f7f4ee]">
            <p className="text-xs uppercase tracking-[0.4em] text-[#c9b9a3]">Workflow</p>
            <h3 className="mt-4 text-3xl" style={{ fontFamily: display }}>
              From upload to understanding in minutes.
            </h3>
            <ul className="mt-6 space-y-4 text-sm text-[#e7dccf]">
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-[#c9b9a3]" />
                Drop your PDF. Ratio Reader scans for structure and argument flow.
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-[#c9b9a3]" />
                Receive the executive summary, quote pack, and hint overlays.
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-[#c9b9a3]" />
                Export a polished brief or keep exploring inside the reader.
              </li>
            </ul>
          </div>
          <div className="grid gap-6">
            {[
              ["01", "Upload", "Drag the PDF or connect your drive."],
              ["02", "Interpret", "AI extracts themes, hints, and supporting quotes."],
              ["03", "Apply", "Turn insights into decisions, notes, and briefs."],
            ].map(([step, title, copy]) => (
              <div
                key={step}
                className="flex items-start gap-6 rounded-[28px] border border-[#1d1a17]/20 bg-white/70 p-6"
              >
                <div className="text-3xl" style={{ fontFamily: display }}>
                  {step}
                </div>
                <div>
                  <h4 className="text-lg font-semibold" style={{ fontFamily: display }}>
                    {title}
                  </h4>
                  <p className="mt-2 text-sm text-[#4b4137]">{copy}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="insights" className="mt-20 rounded-[36px] border border-[#1d1a17]/20 bg-white/80 p-8">
          <div className="flex flex-wrap items-center justify-between gap-6">
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-[#7a6a55]">Insight mode</p>
              <h3 className="mt-3 text-3xl" style={{ fontFamily: display }}>
                A reader that teaches you how to read.
              </h3>
            </div>
            <button className="flex items-center gap-2 rounded-full bg-[#1d1a17] px-6 py-3 text-xs uppercase tracking-[0.3em] text-[#f7f4ee]">
              Request Access <ArrowRight className="h-4 w-4" />
            </button>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {[
              ["Hints", "Clarify jargon and dense passages instantly."],
              ["Quotes", "Extract evidence for papers and reports."],
              ["Signals", "Spot the thesis and supporting pillars."],
            ].map(([title, copy]) => (
              <div key={title} className="rounded-2xl border border-[#1d1a17]/15 p-5">
                <p className="text-sm uppercase tracking-[0.3em] text-[#7a6a55]">{title}</p>
                <p className="mt-3 text-sm text-[#4b4137]">{copy}</p>
              </div>
            ))}
          </div>
        </section>

        <footer className="mt-20 flex flex-wrap items-center justify-between gap-6 border-t border-[#1d1a17]/20 pt-8 text-sm text-[#5b4f43]">
          <div>
            <p className="font-semibold text-[#1d1a17]">Ratio Reader</p>
            <p>Built for researchers, founders, and students.</p>
          </div>
          <div className="flex items-center gap-6">
            <span>Privacy</span>
            <span>Security</span>
            <span>Support</span>
          </div>
        </footer>
      </main>
    </div>
  );
}

function DesignTwo() {
  const display = '"Chakra Petch", sans-serif';
  const body = '"IBM Plex Mono", monospace';

  return (
    <div
      className="relative min-h-screen overflow-hidden bg-[#05050c] text-white"
      style={{ fontFamily: body }}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,#2f6cff_0%,transparent_55%)] opacity-40" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom,#00f5c9_0%,transparent_50%)] opacity-30" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[length:90px_90px] opacity-20" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[length:90px_90px] opacity-20" />

      <header className="relative mx-auto flex max-w-6xl items-center justify-between px-6 py-8">
        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/20 bg-white/10 text-sm font-semibold">
            RR
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.5em] text-[#88d7ff]">Ratio Reader</p>
            <p className="text-sm text-white/70">Neural PDF engine</p>
          </div>
        </div>
        <DesignSwitcher
          className="hidden lg:flex"
          labelClassName="text-[#88d7ff]"
          linkClassName="rounded-full border border-white/20 px-3 py-1 text-white/80 hover:border-[#88d7ff] hover:text-white"
        />
      </header>

      <main className="relative mx-auto max-w-6xl px-6 pb-16">
        <section className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.5em] text-[#88d7ff]">Signal extraction</p>
            <h1
              className="mt-6 text-5xl font-semibold leading-[1.05] text-transparent sm:text-6xl"
              style={{
                fontFamily: display,
                backgroundImage: "linear-gradient(120deg,#ffffff 0%,#7fffd4 60%,#4f7cff 100%)",
                WebkitBackgroundClip: "text",
              }}
            >
              Turn any PDF into a guided intelligence stream.
            </h1>
            <p className="mt-6 text-base text-white/70">
              Ratio Reader fuses summaries, hints, and evidence quotes into a single cockpit. Know
              what to read, why it matters, and where to cite it.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button className="flex items-center gap-2 rounded-full bg-[#7fffd4] px-6 py-3 text-xs uppercase tracking-[0.3em] text-[#05050c]">
                Start scanning <ArrowRight className="h-4 w-4" />
              </button>
              <button className="rounded-full border border-white/20 px-5 py-3 text-xs uppercase tracking-[0.3em] text-white/80">
                View live demo
              </button>
            </div>
            <div className="mt-10 flex flex-wrap gap-4">
              {[
                ["Latency", "<45s"],
                ["Coverage", "92%"],
                ["Depth", "Hinted"],
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4"
                >
                  <p className="text-xs uppercase tracking-[0.4em] text-white/50">{label}</p>
                  <p className="mt-2 text-lg font-semibold" style={{ fontFamily: display }}>
                    {value}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-6 top-6 h-20 w-20 rounded-full bg-[#7fffd4] opacity-30 blur-2xl animate-[floaty_12s_ease-in-out_infinite]" />
            <div className="absolute -right-10 bottom-12 h-32 w-32 rounded-full bg-[#4f7cff] opacity-30 blur-3xl animate-[drift_14s_ease-in-out_infinite]" />
            <div className="rounded-[30px] border border-white/15 bg-white/5 p-6 shadow-[0_0_50px_rgba(79,124,255,0.3)]">
              <div className="flex items-center justify-between">
                <p className="text-xs uppercase tracking-[0.4em] text-white/60">Insight cockpit</p>
                <span className="rounded-full border border-white/20 px-3 py-1 text-xs uppercase tracking-[0.3em]">
                  Live
                </span>
              </div>
              <h2 className="mt-4 text-2xl" style={{ fontFamily: display }}>
                Quantum materials review.pdf
              </h2>
              <div className="mt-6 space-y-4 text-sm text-white/70">
                <div className="flex items-start gap-3">
                  <Target className="mt-0.5 h-4 w-4 text-[#7fffd4]" />
                  <p>Primary thesis: scalable composites reduce cost by 38%.</p>
                </div>
                <div className="flex items-start gap-3">
                  <Quote className="mt-0.5 h-4 w-4 text-[#7fffd4]" />
                  <p>“Thermal resilience doubles when alignment exceeds 0.8.”</p>
                </div>
                <div className="flex items-start gap-3">
                  <Lightbulb className="mt-0.5 h-4 w-4 text-[#7fffd4]" />
                  <p>Hint: Table 4 lists hidden assumptions about sample size.</p>
                </div>
              </div>
              <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-xs uppercase tracking-[0.4em] text-white/50">Scan timeline</p>
                <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-white/10">
                  <div className="h-full w-3/4 rounded-full bg-gradient-to-r from-[#7fffd4] to-[#4f7cff]" />
                </div>
              </div>
            </div>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {[
                ["Highlights", "18 pages tagged"],
                ["Hints", "31 clarifications"],
                ["Quotes", "12 verified"],
                ["Chapters", "6 clusters"],
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="rounded-2xl border border-white/10 bg-white/5 p-4"
                >
                  <p className="text-xs uppercase tracking-[0.4em] text-white/50">{label}</p>
                  <p className="mt-2 text-sm text-white" style={{ fontFamily: display }}>
                    {value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-20 grid gap-6 lg:grid-cols-3">
          {[
            [
              "Signal Summary",
              "Condense 80 pages into a structured overview with only the ideas that matter.",
            ],
            ["Quote Matrix", "Extract credible quotes with page numbers in seconds."],
            ["Hint Layer", "Short explanations sit beside complex paragraphs."],
          ].map(([title, copy]) => (
            <div
              key={title}
              className="rounded-[28px] border border-white/15 bg-gradient-to-br from-white/10 to-white/5 p-6"
            >
              <h3 className="text-lg" style={{ fontFamily: display }}>
                {title}
              </h3>
              <p className="mt-3 text-sm text-white/70">{copy}</p>
            </div>
          ))}
        </section>

        <section className="mt-20 rounded-[32px] border border-white/15 bg-white/5 p-8">
          <div className="flex flex-wrap items-center justify-between gap-6">
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-white/50">Workflow</p>
              <h3 className="mt-3 text-3xl" style={{ fontFamily: display }}>
                Scan, interpret, apply.
              </h3>
            </div>
            <button className="rounded-full border border-white/20 px-6 py-3 text-xs uppercase tracking-[0.3em]">
              Request access
            </button>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {[
              ["01", "Upload", "Drop the PDF and tag your focus areas."],
              ["02", "Process", "Ratio Reader extracts quotes, hints, and summaries."],
              ["03", "Navigate", "Use the cockpit to move through the document."],
            ].map(([step, title, copy]) => (
              <div key={step} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <p className="text-xs uppercase tracking-[0.4em] text-white/50">{step}</p>
                <p className="mt-3 text-lg" style={{ fontFamily: display }}>
                  {title}
                </p>
                <p className="mt-2 text-sm text-white/70">{copy}</p>
              </div>
            ))}
          </div>
        </section>

        <footer className="mt-20 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs uppercase tracking-[0.3em] text-white/40">
          <span>Ratio Reader</span>
          <span>Secure PDF intelligence</span>
          <span>Built for deep work</span>
        </footer>
      </main>
    </div>
  );
}

function DesignThree() {
  const display = '"Fraunces", serif';
  const body = '"Alegreya Sans", sans-serif';

  return (
    <div
      className="relative min-h-screen overflow-hidden bg-[#f6f1e7] text-[#2f2a24]"
      style={{ fontFamily: body }}
    >
      <div className="pointer-events-none absolute -left-32 top-24 h-72 w-72 rounded-full bg-[#f1d6b8] opacity-60 blur-3xl animate-[drift_18s_ease-in-out_infinite]" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-96 w-96 rounded-full bg-[#c8e2d0] opacity-50 blur-3xl animate-[floaty_20s_ease-in-out_infinite]" />
      <header className="relative mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-6 px-6 py-8">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#2f2a24]/20 bg-white/70 text-sm font-semibold">
            RR
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-[#6f5d4b]">Ratio Reader</p>
            <p className="text-sm text-[#5b4b3d]">Guided reading companion</p>
          </div>
        </div>
        <DesignSwitcher
          className="flex"
          labelClassName="text-[#6f5d4b]"
          linkClassName="rounded-full border border-[#2f2a24]/30 px-3 py-1 text-[#2f2a24] hover:border-[#2f2a24]"
        />
      </header>

      <main className="relative mx-auto max-w-6xl px-6 pb-16">
        <section className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-[#6f5d4b]">Slow down, learn more</p>
            <h1 className="mt-5 text-5xl leading-[1.02] sm:text-6xl" style={{ fontFamily: display }}>
              The co-reader that explains the text as you go.
            </h1>
            <p className="mt-6 text-lg text-[#4b4036]">
              Upload a PDF and receive a calm, guided reading experience: summaries, hints, and
              key quotes layered in a clean, study-friendly interface.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button className="rounded-full bg-[#c65d3a] px-6 py-3 text-xs uppercase tracking-[0.3em] text-white">
                Start reading
              </button>
              <button className="rounded-full border border-[#2f2a24]/30 px-6 py-3 text-xs uppercase tracking-[0.3em]">
                See sample
              </button>
            </div>
            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {[
                ["Gentle hints", "Clarify dense paragraphs"],
                ["Quote cards", "Collect evidence quickly"],
                ["Focus paths", "Skip to key sections"],
              ].map(([title, copy]) => (
                <div
                  key={title}
                  className="rounded-2xl border border-[#2f2a24]/10 bg-white/70 p-4 shadow-[0_20px_40px_rgba(47,42,36,0.08)]"
                >
                  <p className="text-sm font-semibold" style={{ fontFamily: display }}>
                    {title}
                  </p>
                  <p className="mt-2 text-sm text-[#5b4b3d]">{copy}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[32px] border border-[#2f2a24]/15 bg-white/80 p-6 shadow-[0_25px_60px_rgba(47,42,36,0.15)]">
            <div className="flex items-center justify-between">
              <p className="text-xs uppercase tracking-[0.4em] text-[#6f5d4b]">Reading view</p>
              <span className="rounded-full border border-[#2f2a24]/20 px-3 py-1 text-xs uppercase tracking-[0.3em]">
                Insight
              </span>
            </div>
            <h2 className="mt-4 text-2xl" style={{ fontFamily: display }}>
              Ratio Reader: The insight panel
            </h2>
            <div className="mt-6 space-y-4 text-sm text-[#4b4036]">
              <div className="flex items-start gap-3">
                <Sparkles className="mt-0.5 h-4 w-4 text-[#c65d3a]" />
                <p>Summary: The author argues for small, testable policy loops.</p>
              </div>
              <div className="flex items-start gap-3">
                <Quote className="mt-0.5 h-4 w-4 text-[#c65d3a]" />
                <p>“Incremental pilots create evidence that scales responsibly.”</p>
              </div>
              <div className="flex items-start gap-3">
                <Lightbulb className="mt-0.5 h-4 w-4 text-[#c65d3a]" />
                <p>Hint: Check appendix A for definitions of the pilot metrics.</p>
              </div>
            </div>
            <div className="mt-6 rounded-2xl border border-[#2f2a24]/10 bg-[#f6f1e7] p-4">
              <p className="text-xs uppercase tracking-[0.3em] text-[#6f5d4b]">Focus guide</p>
              <div className="mt-3 flex items-center justify-between text-sm text-[#4b4036]">
                <span>Chapters to review</span>
                <span>3 / 7</span>
              </div>
              <div className="mt-2 h-2 w-full rounded-full bg-white">
                <div className="h-full w-[45%] rounded-full bg-[#c65d3a]" />
              </div>
            </div>
          </div>
        </section>

        <section className="mt-20 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[28px] border border-[#2f2a24]/15 bg-[#fdfbf7] p-6">
            <h3 className="text-2xl" style={{ fontFamily: display }}>
              Designed for deep study
            </h3>
            <p className="mt-3 text-sm text-[#5b4b3d]">
              Ratio Reader layers guidance without distraction: a calm layout, soft colors, and
              just the right amount of help.
            </p>
            <div className="mt-6 space-y-3 text-sm text-[#4b4036]">
              {[
                "Outline map reveals structure before you read.",
                "Hints simplify technical language and jargon.",
                "Quotes are saved with context and page references.",
              ].map((copy) => (
                <div key={copy} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-[#6f5d4b]" />
                  <span>{copy}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-[28px] border border-[#2f2a24]/15 bg-[#c8e2d0]/40 p-6">
            <p className="text-xs uppercase tracking-[0.4em] text-[#4f6a5a]">Insight bundle</p>
            <h3 className="mt-3 text-2xl" style={{ fontFamily: display }}>
              Everything you need to explain the PDF to someone else.
            </h3>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {[
                ["Summary", "One-page brief"],
                ["Quotes", "Verified citations"],
                ["Hints", "Plain-language notes"],
                ["Themes", "Auto-grouped topics"],
              ].map(([title, copy]) => (
                <div key={title} className="rounded-2xl border border-[#2f2a24]/10 bg-white/70 p-4">
                  <p className="text-sm font-semibold" style={{ fontFamily: display }}>
                    {title}
                  </p>
                  <p className="mt-2 text-sm text-[#4b4036]">{copy}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <footer className="mt-20 flex flex-wrap items-center justify-between gap-4 border-t border-[#2f2a24]/15 pt-8 text-sm text-[#5b4b3d]">
          <span>Ratio Reader is the calm way to master dense reading.</span>
          <span>Secure upload · Private PDFs</span>
        </footer>
      </main>
    </div>
  );
}

function DesignFour() {
  const display = '"Bebas Neue", sans-serif';
  const body = '"Archivo", sans-serif';

  return (
    <div
      className="min-h-screen bg-[#f5f5f5] text-black"
      style={{ fontFamily: body }}
    >
      <header className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 border-b-4 border-black px-6 py-6">
        <div>
          <p className="text-xs uppercase tracking-[0.5em] text-black/60">Ratio Reader</p>
          <h1 className="text-4xl" style={{ fontFamily: display }}>
            Read the signal, cut the noise.
          </h1>
        </div>
        <DesignSwitcher
          className="flex"
          labelClassName="text-black/60"
          linkClassName="border-2 border-black px-3 py-1 text-black hover:bg-black hover:text-white"
        />
      </header>

      <main className="mx-auto max-w-6xl px-6 pb-16 pt-10">
        <section className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="border-4 border-black bg-white p-6">
            <p className="text-xs uppercase tracking-[0.5em]">What it does</p>
            <h2 className="mt-4 text-5xl leading-[0.95]" style={{ fontFamily: display }}>
              Upload a PDF. Get the exact insight you need.
            </h2>
            <p className="mt-4 text-base">
              Ratio Reader produces a structured summary, hint notes for difficult sections, and
              quote packs you can paste into your work.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <button className="border-4 border-black bg-black px-5 py-3 text-xs uppercase tracking-[0.4em] text-white">
                Start free
              </button>
              <button className="border-4 border-black px-5 py-3 text-xs uppercase tracking-[0.4em]">
                See sample
              </button>
            </div>
          </div>
          <div className="border-4 border-black bg-[#ffe04f] p-6">
            <p className="text-xs uppercase tracking-[0.5em]">Signal pack</p>
            <div className="mt-4 space-y-4 text-sm">
              <div className="flex items-start gap-3">
                <FileText className="mt-0.5 h-4 w-4" />
                <p>Executive summary with key claims and evidence.</p>
              </div>
              <div className="flex items-start gap-3">
                <Quote className="mt-0.5 h-4 w-4" />
                <p>Quote library tagged by chapter and theme.</p>
              </div>
              <div className="flex items-start gap-3">
                <Lightbulb className="mt-0.5 h-4 w-4" />
                <p>Hints that decode jargon and complex methodology.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-10 grid gap-6 lg:grid-cols-3">
          {[
            ["01", "Summarize", "Cut through 100 pages with one clean brief."],
            ["02", "Explain", "Hints and plain-language notes sit beside the text."],
            ["03", "Reuse", "Export quotes, insights, and citations in seconds."],
          ].map(([step, title, copy]) => (
            <div key={step} className="border-4 border-black bg-white p-6">
              <p className="text-xs uppercase tracking-[0.5em]">{step}</p>
              <h3 className="mt-4 text-3xl" style={{ fontFamily: display }}>
                {title}
              </h3>
              <p className="mt-3 text-sm">{copy}</p>
            </div>
          ))}
        </section>

        <section className="mt-10 border-4 border-black bg-black p-6 text-white">
          <div className="flex flex-wrap items-center justify-between gap-6">
            <div>
              <p className="text-xs uppercase tracking-[0.5em] text-white/60">Evidence</p>
              <h3 className="mt-3 text-4xl" style={{ fontFamily: display }}>
                Quote decks. Hint maps. Summary briefs.
              </h3>
            </div>
            <button className="border-4 border-white px-5 py-3 text-xs uppercase tracking-[0.4em]">
              Request access
            </button>
          </div>
        </section>

        <footer className="mt-10 border-t-4 border-black pt-6 text-xs uppercase tracking-[0.4em]">
          Built for analysts, students, and decision makers.
        </footer>
      </main>
    </div>
  );
}

function DesignFive() {
  const display = '"Poiret One", sans-serif';
  const body = '"Karla", sans-serif';

  return (
    <div
      className="relative min-h-screen overflow-hidden bg-[#0f1a1b] text-[#efe8d6]"
      style={{ fontFamily: body }}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,#1e3a3c_0%,transparent_60%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom,#4b2f1e_0%,transparent_60%)] opacity-60" />
      <div className="pointer-events-none absolute -left-20 top-10 h-48 w-48 rounded-full border border-[#d6b46a]/40 animate-[floaty_18s_ease-in-out_infinite]" />
      <div className="pointer-events-none absolute -right-10 bottom-10 h-64 w-64 rounded-full border border-[#d6b46a]/20 animate-[drift_22s_ease-in-out_infinite]" />

      <header className="relative mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-8">
        <div>
          <p className="text-xs uppercase tracking-[0.5em] text-[#d6b46a]">Ratio Reader</p>
          <h1 className="text-4xl" style={{ fontFamily: display }}>
            The art of understanding.
          </h1>
        </div>
        <DesignSwitcher
          className="flex"
          labelClassName="text-[#d6b46a]"
          linkClassName="rounded-full border border-[#d6b46a]/40 px-3 py-1 text-[#efe8d6] hover:border-[#d6b46a]"
        />
      </header>

      <main className="relative mx-auto max-w-6xl px-6 pb-16">
        <section className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="rounded-[36px] border border-[#d6b46a]/40 bg-[#152324]/80 p-8 shadow-[0_30px_80px_rgba(0,0,0,0.4)]">
            <p className="text-xs uppercase tracking-[0.5em] text-[#d6b46a]">Deco intelligence</p>
            <h2 className="mt-5 text-5xl leading-[1.05]" style={{ fontFamily: display }}>
              Translate complex PDFs into elegant, confident understanding.
            </h2>
            <p className="mt-6 text-base text-[#d8cbb5]">
              Ratio Reader layers summary, hints, and quotations into a luminous reading room.
              Every insight feels deliberate and easy to recall.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <button className="rounded-full bg-[#d6b46a] px-6 py-3 text-xs uppercase tracking-[0.3em] text-[#0f1a1b]">
                Begin a session
              </button>
              <button className="rounded-full border border-[#d6b46a]/50 px-6 py-3 text-xs uppercase tracking-[0.3em] text-[#efe8d6]">
                Explore sample
              </button>
            </div>
          </div>
          <div className="rounded-[36px] border border-[#d6b46a]/30 bg-[#1b2c2e]/80 p-6">
            <p className="text-xs uppercase tracking-[0.4em] text-[#d6b46a]">Feature set</p>
            <div className="mt-6 space-y-4 text-sm text-[#d8cbb5]">
              <div className="flex items-start gap-3">
                <BookOpen className="mt-0.5 h-4 w-4 text-[#d6b46a]" />
                <p>Concise summaries that map every section to its purpose.</p>
              </div>
              <div className="flex items-start gap-3">
                <Quote className="mt-0.5 h-4 w-4 text-[#d6b46a]" />
                <p>Quote cards curated for reports, briefs, and research notes.</p>
              </div>
              <div className="flex items-start gap-3">
                <Lightbulb className="mt-0.5 h-4 w-4 text-[#d6b46a]" />
                <p>Hints that demystify complex methodology and definitions.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-16 grid gap-6 md:grid-cols-3">
          {[
            ["Summaries", "Clean one-pagers that capture the argument."],
            ["Hints", "Plain-language guidance where it matters."],
            ["Quotes", "High-trust citations in one click."],
          ].map(([title, copy]) => (
            <div
              key={title}
              className="rounded-[28px] border border-[#d6b46a]/30 bg-[#152324]/70 p-6"
            >
              <h3 className="text-xl" style={{ fontFamily: display }}>
                {title}
              </h3>
              <p className="mt-3 text-sm text-[#d8cbb5]">{copy}</p>
            </div>
          ))}
        </section>

        <section className="mt-16 rounded-[36px] border border-[#d6b46a]/40 bg-gradient-to-r from-[#1a2b2d] via-[#142022] to-[#1a2b2d] p-8">
          <div className="flex flex-wrap items-center justify-between gap-6">
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-[#d6b46a]">Workflow</p>
              <h3 className="mt-3 text-3xl" style={{ fontFamily: display }}>
                Upload. Understand. Present.
              </h3>
            </div>
            <button className="rounded-full border border-[#d6b46a]/60 px-6 py-3 text-xs uppercase tracking-[0.3em] text-[#efe8d6]">
              Get early access
            </button>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {[
              ["01", "Upload", "Securely add any PDF, report, or paper."],
              ["02", "Digest", "Ratio Reader extracts hints, quotes, and summaries."],
              ["03", "Share", "Export a refined brief or deck."],
            ].map(([step, title, copy]) => (
              <div key={step} className="rounded-[24px] border border-[#d6b46a]/30 bg-[#0f1a1b] p-5">
                <p className="text-xs uppercase tracking-[0.4em] text-[#d6b46a]">{step}</p>
                <p className="mt-3 text-lg" style={{ fontFamily: display }}>
                  {title}
                </p>
                <p className="mt-2 text-sm text-[#d8cbb5]">{copy}</p>
              </div>
            ))}
          </div>
        </section>

        <footer className="mt-16 flex flex-wrap items-center justify-between gap-4 border-t border-[#d6b46a]/20 pt-8 text-xs uppercase tracking-[0.4em] text-[#d6b46a]/80">
          <span>Ratio Reader</span>
          <span>Designed for deep comprehension</span>
          <span>Secure by design</span>
        </footer>
      </main>
    </div>
  );
}

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/1" replace />} />
        <Route path="/1" element={<DesignOne />} />
        <Route path="/2" element={<DesignTwo />} />
        <Route path="/3" element={<DesignThree />} />
        <Route path="/4" element={<DesignFour />} />
        <Route path="/5" element={<DesignFive />} />
        <Route path="*" element={<Navigate to="/1" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
