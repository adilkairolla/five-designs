import { useCountUp, useInView } from "../lib/hooks";

function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const { ref, inView } = useInView<HTMLDivElement>(0.15);
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out ${
        inView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      } ${className}`}
    >
      {children}
    </div>
  );
}

function Orb() {
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <div className="absolute top-1/2 left-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 animate-pulse-glow rounded-full bg-gradient-to-tr from-violet-600/60 via-fuchsia-500/40 to-cyan-400/50 blur-3xl" />
      <div className="relative flex h-24 w-24 items-center justify-center rounded-full border border-white/20 bg-white/[0.06] shadow-[0_0_80px_rgba(167,139,250,0.45)] backdrop-blur-xl">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-violet-400 via-fuchsia-400 to-cyan-300 text-sm font-semibold text-indigo-950">
          5p
        </div>
      </div>
      <p className="mt-5 text-center text-xs tracking-[0.3em] text-white/40 uppercase">the brief</p>
    </div>
  );
}

function ConvergingCards() {
  const cards = [
    { label: "annual_report.pdf", meta: "214 pages", pos: "top-0 left-2 sm:left-10", r: "-8deg", cx: "9rem", cy: "7rem", dur: "5s", delay: "0s" },
    { label: "thesis_final_v9.pdf", meta: "387 pages", pos: "top-4 right-2 sm:right-8", r: "7deg", cx: "-9rem", cy: "6rem", dur: "6s", delay: "0.8s" },
    { label: "contract_2026.pdf", meta: "94 pages", pos: "bottom-8 left-6 sm:left-16", r: "5deg", cx: "8rem", cy: "-6rem", dur: "5.6s", delay: "0.4s" },
    { label: "research_meta.pdf", meta: "156 pages", pos: "bottom-4 right-4 sm:right-14", r: "-6deg", cx: "-8rem", cy: "-7rem", dur: "6.4s", delay: "1.2s" },
  ];
  return (
    <div className="relative mx-auto h-[380px] max-w-2xl sm:h-[420px]">
      <div className="pointer-events-none absolute inset-0">
        {Array.from({ length: 14 }).map((_, i) => (
          <span
            key={i}
            className="absolute h-1 w-1 animate-float-y rounded-full bg-white/50"
            style={{
              left: `${(i * 37) % 90 + 5}%`,
              top: `${(i * 53) % 80 + 10}%`,
              animationDelay: `${i * 0.6}s`,
              animationDuration: `${5 + (i % 4)}s`,
            }}
          />
        ))}
      </div>
      {cards.map((c) => (
        <div
          key={c.label}
          className={`absolute ${c.pos}`}
          style={
            {
              "--r": c.r,
              "--cx": c.cx,
              "--cy": c.cy,
              animation: `converge ${c.dur} ease-in-out ${c.delay} infinite`,
            } as React.CSSProperties
          }
        >
          <div className="rounded-xl border border-white/10 bg-white/[0.05] px-4 py-3 shadow-2xl backdrop-blur-xl">
            <div className="flex items-center gap-2.5">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-violet-500/40 to-cyan-400/30 text-xs">
                PDF
              </span>
              <div>
                <p className="text-xs font-medium text-white/90">{c.label}</p>
                <p className="text-[10px] text-white/40">{c.meta}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
      <Orb />
    </div>
  );
}

const bento = [
  {
    span: "md:col-span-2",
    tag: "mod · summary",
    title: "The whole argument, distilled",
    body: "Every brief opens with the one paragraph the author spent two hundred pages building — then unfolds into the essentials, ranked by importance.",
    visual: (
      <div className="mt-6 rounded-xl border border-white/10 bg-black/30 p-5 text-sm leading-relaxed text-white/70">
        <span className="rounded bg-gradient-to-r from-violet-500/40 to-fuchsia-500/40 px-1.5 py-0.5 text-white">
          Key insight:
        </span>{" "}
        Logistics is becoming a software business. Margins are migrating from fleets to orchestration layers —{" "}
        <span className="text-cyan-300">the winners are buying data, not trucks.</span>
      </div>
    ),
  },
  {
    span: "",
    tag: "mod · quotes",
    title: "Quotes with page numbers",
    body: "Key passages lifted verbatim and cited. Quote the report without reading the report.",
    visual: (
      <div className="mt-6 space-y-2">
        <div className="rounded-lg border border-white/10 bg-white/[0.04] p-3 text-xs text-white/70 italic">
          "The market is not saturating — it is consolidating."{" "}
          <span className="ml-1 rounded bg-cyan-400/20 px-1.5 py-0.5 font-mono text-[10px] text-cyan-300 not-italic">p.12</span>
        </div>
        <div className="rounded-lg border border-white/10 bg-white/[0.04] p-3 text-xs text-white/70 italic">
          "CAC tripled while LTV grew 40%."{" "}
          <span className="ml-1 rounded bg-fuchsia-400/20 px-1.5 py-0.5 font-mono text-[10px] text-fuchsia-300 not-italic">p.47</span>
        </div>
      </div>
    ),
  },
  {
    span: "",
    tag: "mod · hints",
    title: "Read with a map",
    body: "Hints tell you where to start, what to skip, and which appendix contradicts the body.",
    visual: (
      <div className="mt-6 space-y-2 text-xs">
        <p className="flex items-center gap-2 text-white/70"><span className="h-1.5 w-1.5 rounded-full bg-violet-400" /> Start with §4 — it reframes everything</p>
        <p className="flex items-center gap-2 text-white/70"><span className="h-1.5 w-1.5 rounded-full bg-cyan-300" /> Skip §5: methodology only</p>
        <p className="flex items-center gap-2 text-white/70"><span className="h-1.5 w-1.5 rounded-full bg-fuchsia-400" /> One chart matters: p.96</p>
      </div>
    ),
  },
  {
    span: "",
    tag: "mod · insights",
    title: "What the author didn't say",
    body: "Tensions in the data, shaky assumptions, the subtext. Insights connect dots across pages.",
    visual: null,
  },
  {
    span: "",
    tag: "core",
    title: "Any PDF, ~30 seconds",
    body: "Scans, tables, footnotes, brutalist font choices — up to 2,000 pages. Deleted after distilling.",
    visual: null,
  },
  {
    span: "",
    tag: "privacy",
    title: "Nothing stored",
    body: "Your file is processed and destroyed. We keep the ratio, never the report.",
    visual: null,
  },
];

const steps = [
  { n: "01", t: "Upload", d: "Drop any PDF into the field. No account, no ceremony." },
  { n: "02", t: "Distill", d: "The engine ranks every passage and computes the ratio." },
  { n: "03", t: "Understand", d: "Read your brief. Follow the hints if you want the depths." },
];

function Stat({ target, suffix, label, decimals = 0 }: { target: number; suffix: string; label: string; decimals?: number }) {
  const { ref, inView } = useInView<HTMLDivElement>(0.5);
  const v = useCountUp(target, 1800, inView, decimals);
  return (
    <div ref={ref} className="text-center">
      <p className="bg-gradient-to-r from-violet-300 via-fuchsia-300 to-cyan-300 bg-clip-text text-4xl font-semibold text-transparent sm:text-5xl">
        {decimals ? v.toFixed(decimals) : Math.round(v)}
        <span>{suffix}</span>
      </p>
      <p className="mt-2 text-xs tracking-[0.25em] text-white/40 uppercase">{label}</p>
    </div>
  );
}

export function Design4() {
  return (
    <div className="relative min-h-screen overflow-x-clip bg-[#05060F] font-inter text-white antialiased selection:bg-fuchsia-500/40">
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute -top-40 left-1/4 h-[36rem] w-[36rem] animate-blob-drift-a rounded-full bg-violet-700/25 blur-[120px]" />
        <div className="absolute top-1/3 -right-40 h-[32rem] w-[32rem] animate-blob-drift-b rounded-full bg-cyan-500/15 blur-[120px]" />
        <div className="absolute bottom-0 left-0 h-[28rem] w-[28rem] animate-blob-drift-a rounded-full bg-fuchsia-600/15 blur-[120px]" />
      </div>
      <div className="noise-overlay pointer-events-none fixed inset-0 opacity-[0.035]" />

      <header className="sticky top-0 z-50 px-4 pt-4 sm:px-8">
        <nav className="mx-auto flex max-w-4xl items-center justify-between rounded-full border border-white/10 bg-white/[0.04] px-5 py-3 shadow-2xl backdrop-blur-xl">
          <a href="#" className="flex items-center gap-2.5">
            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-violet-400 via-fuchsia-400 to-cyan-300 text-xs font-bold text-indigo-950">
              R
            </span>
            <span className="text-sm font-semibold tracking-wide">Ratio Reader</span>
          </a>
          <div className="hidden items-center gap-7 text-sm text-white/60 md:flex">
            {["Product", "How it works", "Pricing"].map((i) => (
              <a key={i} href={`#${i.toLowerCase().replace(/ /g, "-")}`} className="transition-colors hover:text-white">
                {i}
              </a>
            ))}
          </div>
          <a
            href="#pricing"
            className="rounded-full bg-white px-4 py-1.5 text-sm font-semibold text-indigo-950 transition-all hover:shadow-[0_0_30px_rgba(255,255,255,0.4)]"
          >
            Try free
          </a>
        </nav>
      </header>

      <section className="relative mx-auto max-w-6xl px-5 pt-20 sm:px-8 lg:pt-28">
        <Reveal className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 text-xs tracking-widest text-white/60 uppercase backdrop-blur-xl">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-cyan-300" />
            pdf in · essence out
          </div>
          <h1 className="mx-auto mt-7 max-w-4xl text-5xl leading-[1.05] font-semibold tracking-tight sm:text-7xl">
            Every document has an{" "}
            <span className="font-instrument bg-gradient-to-r from-violet-300 via-fuchsia-300 to-cyan-300 bg-clip-text pr-2 text-transparent italic">
              essence.
            </span>
            <br />
            We find it.
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-white/55">
            Upload a PDF and receive its brief — the summary of what matters, key quotes cited to the page, reading
            hints, and insights that make the argument click.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#pricing"
              className="group relative rounded-full bg-gradient-to-r from-violet-500 via-fuchsia-500 to-cyan-400 p-[1.5px]"
            >
              <span className="relative flex items-center gap-2 rounded-full bg-[#0B0D1F]/80 px-8 py-3.5 text-sm font-semibold backdrop-blur-xl transition-colors group-hover:bg-transparent group-hover:text-indigo-950">
                Upload your first PDF
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </span>
            </a>
            <a
              href="#product"
              className="rounded-full border border-white/15 bg-white/[0.04] px-8 py-3.5 text-sm font-medium text-white/80 backdrop-blur-xl transition-all hover:border-white/30 hover:text-white"
            >
              See a brief
            </a>
          </div>
          <p className="mt-5 text-xs text-white/35">free · no account · ~30 seconds · nothing stored</p>
        </Reveal>

        <Reveal delay={200} className="mt-16 lg:mt-20">
          <ConvergingCards />
        </Reveal>

        <Reveal delay={100} className="mt-14">
          <p className="text-center text-xs tracking-[0.3em] text-white/30 uppercase">
            trusted by readers at
          </p>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-x-10 gap-y-3 text-sm font-medium text-white/35">
            {["Northwind", "Meridian Labs", "Halcyon", "Ostwald & Co", "Ferrostack"].map((l) => (
              <span key={l} className="transition-colors hover:text-white/60">{l}</span>
            ))}
          </div>
        </Reveal>
      </section>

      <section id="product" className="mx-auto max-w-6xl px-5 py-24 sm:px-8 lg:py-32">
        <Reveal>
          <p className="text-xs tracking-[0.3em] text-fuchsia-300/80 uppercase">the product</p>
          <h2 className="mt-4 max-w-2xl text-3xl leading-tight font-semibold tracking-tight sm:text-5xl">
            One brief.{" "}
            <span className="font-instrument text-white/60 italic">Everything that matters.</span>
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {bento.map((b, i) => (
            <Reveal key={b.title} delay={i * 80} className={b.span}>
              <div className="group h-full rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl transition-all duration-300 hover:border-white/20 hover:bg-white/[0.06] hover:shadow-[0_20px_60px_-20px_rgba(139,92,246,0.35)] sm:p-7">
                <p className="font-mono text-[10px] tracking-[0.25em] text-white/35 uppercase">{b.tag}</p>
                <h3 className="mt-3 text-xl font-semibold tracking-tight">{b.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-white/55">{b.body}</p>
                {b.visual}
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="how-it-works" className="relative">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
          <Reveal>
            <h2 className="text-center text-3xl font-semibold tracking-tight sm:text-4xl">
              Three moves, <span className="font-instrument text-white/60 italic">thirty seconds.</span>
            </h2>
          </Reveal>
          <div className="relative mt-14 grid gap-10 md:grid-cols-3">
            <div className="absolute top-5 right-[16%] left-[16%] hidden h-px bg-gradient-to-r from-violet-500/50 via-fuchsia-400/50 to-cyan-300/50 md:block" />
            {steps.map((s, i) => (
              <Reveal key={s.n} delay={i * 120}>
                <div className="relative text-center">
                  <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-[#0B0D1F] font-mono text-xs text-white/70">
                    {s.n}
                  </div>
                  <h3 className="mt-5 text-lg font-semibold">{s.t}</h3>
                  <p className="mx-auto mt-2 max-w-[240px] text-sm leading-relaxed text-white/50">{s.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/5 bg-white/[0.02]">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:grid-cols-2 sm:px-8 lg:grid-cols-4">
          <Stat target={40} suffix=":1" label="median compression" />
          <Stat target={30} suffix="s" label="to distill 200 pages" />
          <Stat target={12} suffix="k+" label="pdfs distilled" />
          <Stat target={97} suffix="%" label="argument retention" />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
        <Reveal>
          <figure className="relative mx-auto max-w-3xl rounded-2xl border border-white/10 bg-white/[0.04] p-8 text-center backdrop-blur-xl sm:p-12">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full border border-white/15 bg-[#0B0D1F] px-4 py-1.5 text-xs tracking-widest text-white/50 uppercase">
              from a reader
            </div>
            <blockquote className="font-instrument text-2xl leading-snug text-white/90 italic sm:text-3xl">
              "It quoted the exact pages I needed before I knew I needed them. My reading pile went from a threat to a
              habit."
            </blockquote>
            <figcaption className="mt-6 text-sm text-white/40">
              <span className="font-medium text-white/70">Dana K.</span> — Equity Analyst, Meridian
            </figcaption>
          </figure>
        </Reveal>
      </section>

      <section id="pricing" className="mx-auto max-w-6xl px-5 pb-28 sm:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-transparent px-6 py-16 text-center sm:py-24">
            <div className="pointer-events-none absolute -top-32 left-1/2 h-64 w-[36rem] -translate-x-1/2 animate-pulse-glow rounded-full bg-gradient-to-r from-violet-600/40 via-fuchsia-500/30 to-cyan-400/40 blur-3xl" />
            <h2 className="relative mx-auto max-w-2xl text-4xl leading-tight font-semibold tracking-tight sm:text-6xl">
              Stop reading everything.{" "}
              <span className="font-instrument text-white/60 italic">Start understanding it.</span>
            </h2>
            <p className="relative mx-auto mt-5 max-w-md text-white/55">
              Your first three briefs are free. After that, it's $8/month — less than the coffee you'll drink while
              reading less.
            </p>
            <div className="relative mt-10">
              <a
                href="#"
                className="group relative inline-flex rounded-full bg-gradient-to-r from-violet-500 via-fuchsia-500 to-cyan-400 p-[1.5px] shadow-[0_0_50px_-10px_rgba(192,132,252,0.6)]"
              >
                <span className="flex items-center gap-2 rounded-full bg-[#0B0D1F]/90 px-10 py-4 font-semibold backdrop-blur-xl transition-colors group-hover:bg-transparent group-hover:text-indigo-950">
                  Distill something
                  <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                </span>
              </a>
            </div>
            <p className="relative mt-6 font-mono text-xs text-white/30">ratio reader — keep the ratio, not the report</p>
          </div>
        </Reveal>
      </section>

      <footer className="border-t border-white/5">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 py-10 text-sm text-white/35 sm:flex-row sm:px-8">
          <p>© 2026 Ratio Reader</p>
          <div className="flex gap-7">
            {["Privacy", "Terms", "Contact"].map((l) => (
              <a key={l} href="#" className="transition-colors hover:text-white/70">
                {l}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
