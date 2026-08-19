import { useRef, useState } from "react";
import { useCountUp, useInView, useScrollProgress } from "../lib/hooks";

function Rule({ label }: { label?: string }) {
  return (
    <div className="my-14 flex items-center gap-4 sm:my-20">
      <div className="h-px flex-1 bg-stone-300/80" />
      {label && <span className="font-newsreader text-sm tracking-[0.35em] text-stone-500 uppercase">{label}</span>}
      <div className="h-px flex-1 bg-stone-300/80" />
    </div>
  );
}

function PaperLines({ count = 14, tone = "dark" }: { count?: number; tone?: "dark" | "light" }) {
  const widths = [92, 78, 88, 64, 95, 71, 83, 58, 90, 76, 86, 69, 94, 61, 87, 73];
  return (
    <div className="flex flex-col gap-[7px]">
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          className={`h-[3px] rounded-full ${tone === "dark" ? "bg-stone-400/50" : "bg-stone-300/60"}`}
          style={{ width: `${widths[i % widths.length]}%` }}
        />
      ))}
    </div>
  );
}

function HeroPapers() {
  return (
    <div className="relative mx-auto aspect-[4/5] w-full max-w-md">
      <div className="absolute top-10 left-0 h-[86%] w-[74%] rotate-[-8deg] rounded-sm bg-white shadow-[0_24px_60px_-20px_rgba(28,25,23,0.35)] ring-1 ring-stone-200">
        <div className="border-b border-stone-100 px-5 py-3">
          <p className="font-newsreader text-[10px] tracking-[0.3em] text-stone-400 uppercase">Annual Report — 2025</p>
        </div>
        <div className="space-y-4 px-5 py-5">
          <div className="flex items-center gap-2">
            <span className="rounded-full bg-orange-900/10 px-2 py-0.5 font-newsreader text-[10px] tracking-widest text-orange-900 uppercase">
              120 pages
            </span>
            <span className="font-newsreader text-[10px] text-stone-400 italic">the noise</span>
          </div>
          <PaperLines count={16} />
          <div className="rounded-sm bg-orange-100/50 px-3 py-2">
            <p className="font-newsreader text-[11px] leading-snug text-orange-950/60 italic">
              Revenue grew 23% YoY, driven primarily by subscription expansion in the EMEA region…
            </p>
          </div>
          <PaperLines count={8} />
        </div>
        <div className="absolute right-3 bottom-3 font-newsreader text-[10px] text-stone-300 italic">p. 112</div>
      </div>

      <div className="absolute top-0 right-0 h-[70%] w-[62%] rotate-[6deg] rounded-sm bg-[#FFFDF8] shadow-[0_30px_70px_-18px_rgba(28,25,23,0.4)] ring-1 ring-stone-200 transition-transform duration-500 hover:rotate-[3deg]">
        <div className="bg-orange-900 px-5 py-2">
          <p className="font-newsreader text-[10px] tracking-[0.35em] text-orange-50 uppercase">The Brief — 3 min</p>
        </div>
        <div className="space-y-3 px-5 py-4">
          <p className="font-newsreader text-xl leading-tight font-medium text-stone-900">
            The year of quiet <span className="text-orange-800 italic">expansion.</span>
          </p>
          <div className="space-y-2">
            <div className="flex gap-2">
              <span className="mt-1 h-3 w-3 shrink-0 rounded-full bg-orange-700/80" />
              <p className="font-newsreader text-[11px] leading-snug text-stone-700">
                Revenue +23% — subscriptions lead (p. 34)
              </p>
            </div>
            <div className="flex gap-2">
              <span className="mt-1 h-3 w-3 shrink-0 rounded-full bg-orange-700/50" />
              <p className="font-newsreader text-[11px] leading-snug text-stone-700">
                EMEA now 41% of total revenue (p. 58)
              </p>
            </div>
            <div className="flex gap-2">
              <span className="mt-1 h-3 w-3 shrink-0 rounded-full bg-orange-700/30" />
              <p className="font-newsreader text-[11px] leading-snug text-stone-700">
                Churn risk flagged in Q4 data (p. 97)
              </p>
            </div>
          </div>
          <div className="border-t border-dashed border-stone-200 pt-2">
            <p className="font-newsreader text-[10px] text-stone-500 italic">
              Hint: skim §4 first — it reframes the EMEA story.
            </p>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 left-6 animate-ribbon rotate-[-3deg] rounded-sm bg-orange-700 px-3 py-1.5 shadow-lg">
        <p className="font-newsreader text-[10px] tracking-[0.2em] text-orange-50 uppercase">40 : 1 compression</p>
      </div>
    </div>
  );
}

const tickerQuotes = [
  "“The report is 90 pages. Your brief took 90 seconds.”",
  "“It quotes the pages I actually needed.”",
  "“Hints that read like a professor's margins.”",
  "“I stopped dreading PDFs.”",
];

function QuoteTicker() {
  const row = [...tickerQuotes, ...tickerQuotes];
  return (
    <div className="overflow-hidden border-y border-stone-200 bg-orange-950 py-4">
      <div className="flex w-max animate-marquee items-center gap-12 pr-12">
        {row.concat(row).map((q, i) => (
          <span key={i} className="flex items-center gap-12 whitespace-nowrap">
            <span className="font-newsreader text-lg text-orange-100 italic">{q}</span>
            <span className="text-orange-400">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}

const methods = [
  {
    numeral: "I.",
    title: "Upload",
    body: "Drop in any PDF — a 400-page annual report, a dense thesis, a legal filing. Ratio Reader accepts it without ceremony.",
    note: "no account needed for your first brief",
  },
  {
    numeral: "II.",
    title: "Distill",
    body: "The engine reads like an editor does: ranking every passage by importance, separating the signal from two hundred pages of noise.",
    note: "importance scoring on every paragraph",
  },
  {
    numeral: "III.",
    title: "Understand",
    body: "You receive a brief you can finish in minutes — with key quotes cited to the page, hints for where to look next, and insights that connect the dots.",
    note: "quotes keep their page numbers",
  },
];

function Stat({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const { ref, inView } = useInView(0.6);
  const n = useCountUp(value, 1400, inView);
  return (
    <div ref={ref} className="text-center">
      <p className="font-newsreader text-5xl font-light text-stone-900 sm:text-6xl">
        {Math.round(n)}
        <span className="text-orange-800">{suffix}</span>
      </p>
      <p className="mt-2 font-newsreader text-sm tracking-[0.2em] text-stone-500 uppercase">{label}</p>
    </div>
  );
}

function FeaturedBrief() {
  const [hovered, setHovered] = useState<number | null>(null);
  const highlights = [
    { text: "The market is not saturating — it is consolidating around platforms with proprietary data.", page: 12 },
    { text: "Customer acquisition cost tripled between 2021 and 2024, while lifetime value grew only 40%.", page: 47 },
    { text: "The authors' optimism about Q4 assumes supply chains that the report's own appendix calls fragile.", page: 83 },
  ];
  return (
    <div className="relative grid gap-8 lg:grid-cols-5">
      <div className="relative lg:col-span-3">
        <div className="rounded-sm bg-white p-7 shadow-[0_30px_80px_-30px_rgba(28,25,23,0.35)] ring-1 ring-stone-200 sm:p-10">
          <p className="font-newsreader text-xs tracking-[0.35em] text-orange-800 uppercase">A brief, in the wild</p>
          <h4 className="mt-3 font-newsreader text-3xl leading-tight font-medium text-stone-900 sm:text-4xl">
            The State of <span className="italic">Logistics</span>, 2025 — distilled
          </h4>
          <p className="mt-6 font-newsreader text-[15px] leading-7 text-stone-700 sm:text-base sm:leading-8">
            <span className="float-left mt-1 mr-3 font-newsreader text-6xl leading-[0.8] font-medium text-orange-800">
              T
            </span>
            he 214-page report's real argument fits in a paragraph: logistics is becoming a software business. Margins
            are migrating from fleets to orchestration layers, and the winners are quietly buying data, not trucks.
            Everything else — the charts, the regional breakdowns, the methodology — supports these three moves.
          </p>
          <div className="mt-7 space-y-3">
            <p className="font-newsreader text-xs tracking-[0.25em] text-stone-400 uppercase">Key quotes, cited</p>
            {highlights.map((h, i) => (
              <button
                key={i}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                className={`block w-full rounded-sm border-l-2 px-4 py-3 text-left transition-all duration-300 ${
                  hovered === i
                    ? "border-orange-700 bg-orange-50 translate-x-1"
                    : "border-stone-200 bg-stone-50/60"
                }`}
              >
                <p className="font-newsreader text-[15px] leading-relaxed text-stone-800 italic">“{h.text}”</p>
                <p className="mt-1.5 font-newsreader text-xs text-orange-800">— p. {h.page}</p>
              </button>
            ))}
          </div>
        </div>
        <div className="absolute -top-5 -right-3 hidden rotate-[4deg] rounded-sm bg-yellow-100 px-4 py-2 shadow-md ring-1 ring-yellow-200 sm:block">
          <p className="font-newsreader text-xs text-yellow-900 italic">hint: appendix B contradicts §3 — start there</p>
        </div>
      </div>
      <div className="space-y-6 lg:col-span-2">
        <div className="rounded-sm bg-orange-950 p-7 text-orange-50">
          <p className="font-newsreader text-xs tracking-[0.35em] text-orange-300 uppercase">The ratio</p>
          <p className="mt-4 font-newsreader text-7xl font-light">
            214<span className="text-orange-400">→</span>5
          </p>
          <p className="mt-3 font-newsreader text-sm leading-relaxed text-orange-100/80 italic">
            pages read : pages worth reading. Ratio Reader keeps the five that carry the argument and tells you why.
          </p>
        </div>
        <div className="rounded-sm border border-stone-200 bg-[#FAF6EE] p-7">
          <p className="font-newsreader text-xs tracking-[0.35em] text-stone-500 uppercase">Insights</p>
          <ul className="mt-4 space-y-3">
            {[
              "Report leans on 2022 data — treat growth claims with care.",
              "§3 and appendix B disagree; the appendix is more honest.",
              "The one chart that matters is on page 96.",
            ].map((s) => (
              <li key={s} className="flex gap-3 font-newsreader text-[15px] leading-snug text-stone-700">
                <span className="mt-0.5 font-newsreader text-orange-800">→</span>
                {s}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export function Design1() {
  const progress = useScrollProgress();
  const ctaRef = useRef<HTMLDivElement>(null);

  return (
    <div className="paper-grain min-h-screen bg-[#FAF6EE] font-newsreader text-stone-900 antialiased">
      <div className="fixed top-0 right-0 left-0 z-50 h-1 bg-transparent">
        <div
          className="h-full bg-orange-800 transition-[width] duration-150 ease-out"
          style={{ width: `${progress * 100}%` }}
        />
      </div>

      <header className="sticky top-0 z-40 border-b border-stone-200/80 bg-[#FAF6EE]/90 backdrop-blur-sm">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
          <a href="#" className="flex items-baseline gap-2">
            <span className="text-xl font-medium tracking-tight">Ratio Reader</span>
            <span className="hidden font-newsreader text-xs text-stone-400 italic sm:inline">
              a journal of compressed knowledge
            </span>
          </a>
          <nav className="hidden items-center gap-8 text-sm text-stone-600 md:flex">
            {["Method", "The Brief", "Figures", "Colophon"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(" ", "-")}`}
                className="group relative tracking-wide"
              >
                {item}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-orange-800 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>
          <a
            href="#colophon"
            className="rounded-full bg-stone-900 px-5 py-2 text-sm text-orange-50 transition-all duration-300 hover:bg-orange-800 hover:shadow-lg"
          >
            Start reading
          </a>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-5 pt-16 pb-8 sm:px-8 sm:pt-24">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <div>
            <p className="flex items-center gap-3 text-xs tracking-[0.4em] text-orange-800 uppercase">
              <span className="inline-block h-px w-10 bg-orange-800" />
              Vol. 01 — On Reading Well
            </p>
            <h1 className="mt-6 text-5xl leading-[1.04] font-light tracking-tight sm:text-7xl lg:text-[5.2rem]">
              All signal.
              <br />
              <span className="font-medium italic">No noise.</span>
            </h1>
            <p className="mt-7 max-w-md text-lg leading-relaxed text-stone-600">
              Upload a PDF. Receive its essence — a brief of the most important information, key quotes cited to the
              page, hints for where to look, and insights that make the argument click.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a
                href="#colophon"
                className="group inline-flex items-center gap-3 rounded-full bg-orange-800 px-7 py-3.5 text-base text-orange-50 transition-all duration-300 hover:bg-stone-900 hover:shadow-xl"
              >
                Upload your first PDF
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </a>
              <p className="text-sm text-stone-500 italic">free · no account · ~30 seconds</p>
            </div>
            <p className="mt-8 border-l-2 border-orange-200 pl-4 text-sm leading-relaxed text-stone-500 italic">
              “Reading, done well, is a ratio: the few pages that matter against the many that don't. We compute it for
              you.”
            </p>
          </div>
          <HeroPapers />
        </div>
      </section>

      <QuoteTicker />

      <section id="method" className="mx-auto max-w-6xl px-5 py-6 sm:px-8">
        <Rule label="The Method" />
        <div className="grid gap-10 md:grid-cols-3">
          {methods.map((m) => (
            <div key={m.numeral} className="group relative">
              <p className="font-newsreader text-6xl font-light text-stone-300 transition-colors duration-500 group-hover:text-orange-300">
                {m.numeral}
              </p>
              <h3 className="mt-4 text-2xl font-medium italic">{m.title}</h3>
              <p className="mt-3 leading-relaxed text-stone-600">{m.body}</p>
              <p className="mt-4 border-t border-dashed border-stone-300 pt-3 text-xs tracking-widest text-orange-800 uppercase">
                {m.note}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 sm:px-8">
        <Rule label="The Brief" />
        <FeaturedBrief />
      </section>

      <section className="mx-auto max-w-6xl px-5 sm:px-8">
        <Rule label="Figures" />
        <div id="figures" className="grid gap-12 py-4 sm:grid-cols-3">
          <Stat value={40} suffix=":1" label="median compression" />
          <Stat value={3} suffix=" min" label="median brief length" />
          <Stat value={97} suffix="%" label="keep the argument" />
        </div>
        <p className="mx-auto mt-12 max-w-xl text-center text-sm leading-relaxed text-stone-500 italic">
          Figures from our own reading: 12,000+ PDFs distilled — annual reports, academic papers, legal filings, product
          specs, and one 800-page novel (we tried).
        </p>
      </section>

      <section id="colophon" className="mx-auto max-w-6xl px-5 pb-10 sm:px-8">
        <Rule label="Colophon" />
        <div
          ref={ctaRef}
          className="relative overflow-hidden rounded-sm bg-orange-950 px-7 py-14 text-center text-orange-50 sm:px-14 sm:py-20"
        >
          <p className="font-newsreader text-xs tracking-[0.4em] text-orange-300 uppercase">Begin reading</p>
          <h2 className="mx-auto mt-5 max-w-2xl text-4xl leading-tight font-light sm:text-6xl">
            Your reading list is <span className="italic">not</span> the problem.
          </h2>
          <p className="mx-auto mt-5 max-w-md text-orange-100/80">
            The ratio is. Let Ratio Reader hold the noise so you can hold the argument.
          </p>
          <a
            href="#"
            className="mt-9 inline-flex items-center gap-3 rounded-full bg-[#FAF6EE] px-8 py-4 text-base text-orange-950 transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl"
          >
            Upload a PDF — it's free <span>→</span>
          </a>
          <p className="mt-6 text-xs tracking-widest text-orange-300/70 uppercase">
            PDF in · essence out · nothing stored
          </p>
        </div>
      </section>

      <footer className="border-t border-stone-200 bg-[#F4EDE0]">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 py-10 text-sm text-stone-500 sm:flex-row sm:px-8">
          <p className="font-newsreader italic">Ratio Reader — set in Newsreader, printed on no trees.</p>
          <div className="flex gap-6">
            <a href="#" className="transition-colors hover:text-orange-800">Method</a>
            <a href="#" className="transition-colors hover:text-orange-800">Privacy</a>
            <a href="#" className="transition-colors hover:text-orange-800">Letters</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
