import { useState } from "react";
import { useReveal } from "@/lib/use-reveal";

const INK = "#2a2118";
const RUBRIC = "#a4262c";

const SPIRAL =
  "M0,377 A377,377 0 0 1 377,0 A233,233 0 0 1 610,233 A144,144 0 0 1 466,377 A89,89 0 0 1 377,288 A55,55 0 0 1 432,233 A34,34 0 0 1 466,267 A21,21 0 0 1 445,288 A13,13 0 0 1 432,275";

const SQUARES = [
  { x: 0, y: 0, s: 377, label: "377 pages", sub: "what you uploaded" },
  { x: 377, y: 0, s: 233, label: "233", sub: "worth skimming" },
  { x: 466, y: 233, s: 144, label: "144", sub: "worth reading" },
  { x: 377, y: 288, s: 89, label: "89", sub: "" },
  { x: 377, y: 233, s: 55, label: "55", sub: "" },
];

type Kind = "sententia" | "glossa" | "nota";

const NOTES: Record<string, { kind: Kind; mark: string; title: string; body: string }> = {
  a: {
    kind: "sententia",
    mark: "❧",
    title: "Sententia · the thesis",
    body: "“We are not given a short life; we make it short.” Ratio flagged this as the line the other 40 pages defend.",
  },
  b: {
    kind: "glossa",
    mark: "☞",
    title: "Glossa · a hint",
    body: "Keep an eye on “worthy.” Seneca doesn’t define it until chapter XIV, where it turns out to mean time spent with thinkers of the past.",
  },
  c: {
    kind: "nota",
    mark: "✠",
    title: "Nota bene · an insight",
    body: "He repeats himself on purpose, and the repetition is the rhetoric. Seneca wants you to feel accused before he offers a way out.",
  },
  d: {
    kind: "glossa",
    mark: "☞",
    title: "Glossa · a hint",
    body: "The inheritance metaphor treats time as capital rather than income. Hold onto that. Chapter VIII builds its whole argument on it.",
  },
};

type Part = string | { id: keyof typeof NOTES; text: string };

const PASSAGE: Part[] = [
  { id: "a", text: "We are not given a short life; we make it short." },
  " The span we receive is generous enough for great work, if only it is spent with care. But when it drains away through luxury and neglect, when it is given to ",
  { id: "b", text: "no worthy aim" },
  ", we notice it passing only once it has passed. So it is: ",
  { id: "c", text: "we do not receive a brief life, we shorten it ourselves" },
  ", and we are not poor in days but wasteful of them. ",
  { id: "d", text: "As a great fortune scatters in the hands of a careless heir, while a modest one grows under a prudent keeper" },
  ", so our years stretch for whoever sets them in order.",
];

const TABS = [
  {
    key: "Summa",
    en: "Summary",
    lines: [
      "Life only feels short because we spend it carelessly: on busyness, ambition, and other people’s demands.",
      "Time is the one possession we hand out freely, and it’s the one we can never get back.",
      "The remedy is leisure given to philosophy, which lets one life borrow from every age before it.",
    ],
  },
  {
    key: "Glossa",
    en: "Hints",
    lines: [
      "Chapters I–VII diagnose the problem and VIII–XX prescribe the cure. Read them as two halves.",
      "Paulinus, the addressee, runs Rome’s grain supply. Keep that in mind: the essay is also a resignation letter he hasn’t written yet.",
      "When Seneca lists “the preoccupied,” he is describing his own class, and himself.",
    ],
  },
  {
    key: "Sententiae",
    en: "Quotes",
    lines: [
      "“Life is long if you know how to use it.” — ch. II",
      "“No one hands back your years; no one restores you to yourself.” — ch. VIII",
      "“Learning how to live takes a whole life.” — ch. VII",
    ],
  },
  {
    key: "Nota bene",
    en: "Insights",
    lines: [
      "The essay reads as a modern attention-economy critique, except the distractions are banquets instead of feeds.",
      "Seneca never says to work less. He says to own the hours you work.",
      "Tension to notice: Seneca was one of the richest men in Rome while he wrote this.",
    ],
  },
];

const STEPS = [
  {
    n: "I",
    latin: "Lectio",
    title: "Lay down the manuscript",
    body: "Drop in any PDF: a 400-page thesis, a scanned contract, a textbook chapter. Ratio reads every page, including tables, footnotes, and figures.",
  },
  {
    n: "II",
    latin: "Meditatio",
    title: "Let it be distilled",
    body: "Ratio weighs every passage against the rest of the book. It keeps the argument’s spine, sets aside the scaffolding, and marks what you’re likely to miss.",
  },
  {
    n: "III",
    latin: "Contemplatio",
    title: "Understand, then return",
    body: "Start with the summary, follow the hints into the text, and keep the quotes. Every claim links back to its page, so you can verify it.",
  },
];

const EDITIONS = [
  {
    name: "Pamphlet",
    price: "0",
    note: "for the curious",
    items: ["3 manuscripts a month", "Summa & Sententiae", "Up to 60 pages each"],
  },
  {
    name: "Octavo",
    price: "8",
    note: "for the devoted reader",
    items: ["Unlimited manuscripts", "All four returns, incl. Glossa & Nota bene", "Up to 1,000 pages each", "Export to Markdown & Notion"],
    featured: true,
  },
  {
    name: "Folio",
    price: "24",
    note: "per seat · for scriptoria",
    items: ["Shared libraries", "Cross-document insights", "Annotations your team can see", "Priority distillation"],
  },
];

function Ornament() {
  return (
    <div className="flex items-center justify-center gap-5 py-4 text-[#b08d3c]">
      <span className="h-px w-24 bg-current opacity-60" />
      <span className="font-cormorant text-2xl">❦</span>
      <span className="h-px w-24 bg-current opacity-60" />
    </div>
  );
}

function GoldenSpiral() {
  return (
    <svg viewBox="-4 -4 618 385" className="w-full" aria-label="A golden spiral, labeled from 377 pages down to the 13 lines that matter">
      {SQUARES.map((sq) => (
        <rect key={sq.label} x={sq.x} y={sq.y} width={sq.s} height={sq.s} fill="none" stroke={INK} strokeOpacity={0.35} strokeWidth={1} />
      ))}
      <rect x={432} y={233} width={34} height={34} fill="none" stroke={INK} strokeOpacity={0.3} />
      <rect x={445} y={267} width={21} height={21} fill="none" stroke={INK} strokeOpacity={0.3} />
      <rect x={432} y={275} width={13} height={13} fill={RUBRIC} />
      <path d={SPIRAL} fill="none" stroke={RUBRIC} strokeWidth={2.2} pathLength={1} className="draw" />
      <g fontFamily="Cormorant Garamond" fill={INK}>
        <text x={30} y={70} fontSize={54} fontStyle="italic" fontWeight={500}>377 pages</text>
        <text x={32} y={100} fontSize={17} letterSpacing={3} opacity={0.6}>WHAT YOU UPLOADED</text>
        <text x={400} y={60} fontSize={34} fontStyle="italic">233</text>
        <text x={400} y={82} fontSize={12} letterSpacing={2} opacity={0.6}>WORTH SKIMMING</text>
        <text x={486} y={290} fontSize={26} fontStyle="italic">144</text>
        <text x={486} y={308} fontSize={10} letterSpacing={1.5} opacity={0.6}>WORTH READING</text>
        <text x={388} y={352} fontSize={18} fontStyle="italic">89</text>
        <text x={384} y={262} fontSize={13} fontStyle="italic">55</text>
      </g>
      <g fontFamily="Cormorant Garamond" fill={RUBRIC}>
        <line x1={438} y1={282} x2={250} y2={330} stroke={RUBRIC} strokeWidth={0.8} />
        <text x={36} y={338} fontSize={22} fontStyle="italic">the 13 lines that matter</text>
      </g>
    </svg>
  );
}

function Manuscript() {
  const [active, setActive] = useState<string | null>(null);
  const [tab, setTab] = useState(0);

  return (
    <div className="reveal relative mx-auto max-w-6xl border border-[#2a2118]/25 bg-[#f7f0e1] shadow-[0_40px_80px_-40px_rgba(60,40,10,0.45)]">
      <div className="flex items-center justify-between border-b border-[#2a2118]/20 px-6 py-3 font-garamond text-xs tracking-[0.25em] text-[#2a2118]/60 uppercase md:px-10">
        <span>De Brevitate Vitae · Seneca</span>
        <span className="hidden sm:inline">41 pp. · distilled in 6 s</span>
        <span className="text-[#a4262c]">fol. 1r</span>
      </div>

      <div className="grid gap-10 px-6 py-10 md:grid-cols-[1.618fr_1fr] md:px-10 md:py-14">
        <div>
          <p className="font-garamond text-[1.32rem] leading-[1.75] text-[#2a2118]">
            <span className="float-left mt-2 mr-3 font-cormorant text-[5.4rem] leading-[0.75] text-[#a4262c]">W</span>
            {PASSAGE.map((part, i) => {
              if (typeof part === "string") return <span key={i}>{part}</span>;
              const note = NOTES[part.id];
              const on = active === part.id;
              const text = i === 0 ? part.text.slice(1) : part.text;
              return (
                <span
                  key={i}
                  onMouseEnter={() => setActive(part.id)}
                  onMouseLeave={() => setActive(null)}
                  className={`cursor-help transition-colors duration-300 ${
                    note.kind === "sententia"
                      ? "text-[#a4262c] italic"
                      : "underline decoration-[#b08d3c] decoration-1 underline-offset-[6px]"
                  } ${on ? "bg-[#b08d3c]/20" : ""}`}
                >
                  {text}
                  <sup className="ml-0.5 font-cormorant text-sm text-[#a4262c] not-italic">{note.mark}</sup>
                </span>
              );
            })}
          </p>
          <p className="mt-6 font-garamond text-sm text-[#2a2118]/55 italic">
            Hover the marked passages. Ratio writes in the margin the way a good teacher would.
          </p>
        </div>

        <aside className="space-y-5 border-t border-[#2a2118]/15 pt-6 md:border-t-0 md:border-l md:pt-0 md:pl-8">
          {Object.entries(NOTES).map(([id, note]) => (
            <div
              key={id}
              onMouseEnter={() => setActive(id)}
              onMouseLeave={() => setActive(null)}
              className={`transition-all duration-300 ${active && active !== id ? "opacity-30" : "opacity-100"} ${
                active === id ? "translate-x-1" : ""
              }`}
            >
              <div className="flex items-baseline gap-2 font-cormorant text-[0.8rem] tracking-[0.2em] text-[#a4262c] uppercase">
                <span className="text-lg">{note.mark}</span>
                {note.title}
              </div>
              <p className="mt-1 font-cormorant text-[1.08rem] leading-snug text-[#2a2118]/85 italic">{note.body}</p>
            </div>
          ))}
        </aside>
      </div>

      <div className="border-t border-[#2a2118]/20 bg-[#efe5d0] px-6 py-8 md:px-10">
        <div className="flex flex-wrap gap-x-8 gap-y-3" role="tablist">
          {TABS.map((t, i) => (
            <button
              key={t.key}
              role="tab"
              aria-selected={tab === i}
              onClick={() => setTab(i)}
              className={`group font-cormorant text-2xl transition-colors ${tab === i ? "text-[#a4262c]" : "text-[#2a2118]/45 hover:text-[#2a2118]"}`}
            >
              <span className="italic">{t.key}</span>
              <span className="ml-2 font-garamond text-[0.65rem] tracking-[0.25em] uppercase not-italic">{t.en}</span>
              <span className={`block h-px bg-current transition-all duration-500 ${tab === i ? "w-full" : "w-0"}`} />
            </button>
          ))}
        </div>
        <ol key={tab} className="mt-6 grid gap-6 md:grid-cols-3">
          {TABS[tab].lines.map((line, i) => (
            <li
              key={line}
              className="animate-in fade-in slide-in-from-bottom-2 fill-mode-both font-garamond text-lg leading-relaxed text-[#2a2118]"
              style={{ animationDelay: `${i * 120}ms`, animationDuration: "600ms" }}
            >
              <span className="mr-2 font-cormorant text-[#a4262c]">{["i.", "ii.", "iii."][i]}</span>
              {line}
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default function Folio() {
  useReveal();

  return (
    <div className="grain min-h-screen overflow-x-hidden bg-[#f3ead8] text-[#2a2118] selection:bg-[#a4262c] selection:text-[#f3ead8]">
      <div
        className="pointer-events-none fixed inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 20% 0%, rgba(255,250,235,0.9), transparent 60%), radial-gradient(ellipse at 100% 100%, rgba(176,141,60,0.18), transparent 55%)",
        }}
      />

      <header className="relative mx-auto flex max-w-7xl items-center justify-between px-6 pt-8 md:px-10">
        <a href="#" className="flex items-baseline gap-2">
          <span className="font-cormorant text-3xl text-[#a4262c] italic">φ</span>
          <span className="font-cormorant text-2xl font-semibold tracking-wide">Ratio Reader</span>
        </a>
        <nav className="hidden gap-10 font-garamond text-sm tracking-[0.2em] uppercase md:flex">
          <a href="#returns" className="hover:text-[#a4262c]">The Returns</a>
          <a href="#folio" className="hover:text-[#a4262c]">A Folio</a>
          <a href="#editions" className="hover:text-[#a4262c]">Editions</a>
        </nav>
        <a
          href="#begin"
          className="border border-[#2a2118] px-5 py-2 font-garamond text-sm tracking-[0.18em] uppercase transition-colors hover:bg-[#2a2118] hover:text-[#f3ead8]"
        >
          Begin
        </a>
      </header>

      <section className="relative mx-auto grid max-w-7xl items-center gap-14 px-6 pt-16 pb-20 md:grid-cols-[1fr_1.618fr] md:px-10 md:pt-24">
        <div>
          <p className="font-garamond text-xs tracking-[0.35em] text-[#a4262c] uppercase">Liber primus · On reading well</p>
          <h1 className="mt-6 font-cormorant text-[4.2rem] leading-[0.88] font-light sm:text-[6rem] lg:text-[7.4rem]">
            Read in <em className="font-medium text-[#a4262c]">proportion.</em>
          </h1>
          <p className="mt-8 max-w-md font-garamond text-xl leading-relaxed text-[#2a2118]/80">
            Upload any PDF. Ratio distills it to the part that matters, then adds hints in the margin, quotes worth keeping,
            and insights that tie the ideas together.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-6">
            <a
              href="#begin"
              className="bg-[#a4262c] px-8 py-4 font-garamond text-sm tracking-[0.22em] text-[#f3ead8] uppercase shadow-[4px_4px_0_#2a2118] transition-transform hover:-translate-y-0.5"
            >
              Bring a manuscript
            </a>
            <a href="#folio" className="font-cormorant text-xl italic underline decoration-[#b08d3c] underline-offset-4">
              or read a sample folio
            </a>
          </div>
        </div>
        <div className="relative">
          <GoldenSpiral />
          <p className="mt-4 text-right font-garamond text-xs tracking-[0.3em] text-[#2a2118]/50 uppercase">
            Fig. 1 — every book reduces at 1 : 1.618
          </p>
        </div>
      </section>

      <Ornament />

      <section id="returns" className="relative mx-auto max-w-7xl px-6 py-20 md:px-10">
        <div className="reveal grid gap-6 md:grid-cols-[1fr_1.618fr]">
          <h2 className="font-cormorant text-5xl leading-tight font-light md:text-6xl">
            Of what Ratio <em className="text-[#a4262c]">returns</em> to you
          </h2>
          <p className="self-end font-garamond text-xl leading-relaxed text-[#2a2118]/75">
            Medieval scholars didn’t just copy books. They surrounded them with glosses, summaries, and pointing hands
            so the next reader wouldn’t get lost. Ratio does the same for every PDF you give it, in four forms.
          </p>
        </div>

        <div className="mt-16 grid border-t border-[#2a2118]/25 md:grid-cols-4">
          {[
            ["I", "Summa", "The summary", "The argument’s spine, in the author’s order, at whatever length you choose: one line, one page, or one page per chapter."],
            ["II", "Glossa", "Hints", "Notes in the margin that explain the jargon, the context, and the step you were about to miss."],
            ["III", "Sententiae", "Quotes", "The lines worth copying out, each cited to its page and ready to paste into your notes."],
            ["IV", "Nota bene", "Insights", "Connections, tensions, and implications the author never states outright."],
          ].map(([n, latin, en, body], i) => (
            <div
              key={latin}
              className="reveal border-b border-[#2a2118]/25 py-10 md:border-r md:border-b-0 md:px-8 md:first:pl-0 md:last:border-r-0"
              style={{ transitionDelay: `${i * 110}ms` }}
            >
              <div className="font-cormorant text-7xl leading-none text-[#b08d3c]">{n}</div>
              <h3 className="mt-6 font-cormorant text-3xl italic">{latin}</h3>
              <p className="font-garamond text-[0.7rem] tracking-[0.3em] text-[#a4262c] uppercase">{en}</p>
              <p className="mt-4 font-garamond text-lg leading-relaxed text-[#2a2118]/80">{body}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="folio" className="relative px-4 py-20 md:px-10">
        <div className="reveal mx-auto mb-12 max-w-3xl text-center">
          <p className="font-garamond text-xs tracking-[0.35em] text-[#a4262c] uppercase">A folio, annotated</p>
          <h2 className="mt-4 font-cormorant text-5xl font-light md:text-6xl">
            Seneca, <em>read by Ratio</em>
          </h2>
        </div>
        <Manuscript />
      </section>

      <section className="relative mx-auto max-w-7xl px-6 py-24 md:px-10">
        <div className="reveal text-center">
          <p className="font-garamond text-xs tracking-[0.35em] text-[#a4262c] uppercase">The method</p>
          <h2 className="mt-4 font-cormorant text-5xl font-light md:text-6xl">Three movements</h2>
        </div>
        <div className="mt-16 grid gap-12 md:grid-cols-3">
          {STEPS.map((s, i) => (
            <div key={s.n} className="reveal relative" style={{ transitionDelay: `${i * 140}ms` }}>
              <div className="flex items-baseline gap-4">
                <span className="font-cormorant text-6xl text-[#a4262c]">{s.n}</span>
                <span className="font-cormorant text-2xl text-[#2a2118]/50 italic">{s.latin}</span>
              </div>
              <h3 className="mt-4 font-cormorant text-3xl">{s.title}</h3>
              <p className="mt-3 font-garamond text-lg leading-relaxed text-[#2a2118]/75">{s.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="relative bg-[#2a2118] px-6 py-28 text-[#f3ead8] md:px-10">
        <div className="reveal mx-auto max-w-4xl text-center">
          <span className="font-cormorant text-7xl text-[#b08d3c]">“</span>
          <blockquote className="-mt-6 font-cormorant text-4xl leading-tight font-light italic md:text-5xl">
            I read the whole of Rawls in a weekend and understood it on Monday. The margin notes felt like having a tutor who’d
            already read the book twice.
          </blockquote>
          <p className="mt-8 font-garamond text-sm tracking-[0.3em] text-[#b08d3c] uppercase">Ines M. — philosophy, second year</p>
        </div>
        <div className="mx-auto mt-20 grid max-w-6xl gap-10 border-t border-[#f3ead8]/15 pt-12 text-center md:grid-cols-3">
          {[
            ["6.18×", "faster to the core argument"],
            ["1,000", "pages per manuscript"],
            ["¶ 1:1", "every claim linked to its page"],
          ].map(([big, small]) => (
            <div key={small} className="reveal">
              <div className="font-cormorant text-6xl italic">{big}</div>
              <div className="mt-2 font-garamond text-xs tracking-[0.3em] text-[#f3ead8]/60 uppercase">{small}</div>
            </div>
          ))}
        </div>
      </section>

      <section id="editions" className="relative mx-auto max-w-7xl px-6 py-24 md:px-10">
        <div className="reveal text-center">
          <p className="font-garamond text-xs tracking-[0.35em] text-[#a4262c] uppercase">Editions</p>
          <h2 className="mt-4 font-cormorant text-5xl font-light md:text-6xl">Choose your binding</h2>
        </div>
        <div className="mt-16 grid items-stretch gap-8 md:grid-cols-3">
          {EDITIONS.map((e, i) => (
            <div
              key={e.name}
              className={`reveal relative flex flex-col border p-10 ${
                e.featured ? "border-[#a4262c] bg-[#f7f0e1] shadow-[8px_8px_0_#a4262c]" : "border-[#2a2118]/30"
              }`}
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              {e.featured && (
                <span className="absolute -top-3 left-10 bg-[#a4262c] px-3 py-0.5 font-garamond text-[0.65rem] tracking-[0.3em] text-[#f3ead8] uppercase">
                  Most bound
                </span>
              )}
              <h3 className="font-cormorant text-4xl italic">{e.name}</h3>
              <p className="font-garamond text-sm text-[#2a2118]/60 italic">{e.note}</p>
              <div className="mt-6 flex items-baseline gap-1">
                <span className="font-cormorant text-2xl">$</span>
                <span className="font-cormorant text-7xl leading-none">{e.price}</span>
                <span className="font-garamond text-sm text-[#2a2118]/60">/ month</span>
              </div>
              <ul className="mt-8 flex-1 space-y-3 font-garamond text-lg">
                {e.items.map((it) => (
                  <li key={it} className="flex gap-3">
                    <span className="text-[#a4262c]">❧</span>
                    {it}
                  </li>
                ))}
              </ul>
              <a
                href="#begin"
                className={`mt-10 block py-3 text-center font-garamond text-sm tracking-[0.22em] uppercase transition-colors ${
                  e.featured ? "bg-[#a4262c] text-[#f3ead8] hover:bg-[#2a2118]" : "border border-[#2a2118] hover:bg-[#2a2118] hover:text-[#f3ead8]"
                }`}
              >
                Take the {e.name}
              </a>
            </div>
          ))}
        </div>
      </section>

      <Ornament />

      <footer id="begin" className="relative mx-auto max-w-4xl px-6 pt-16 pb-24 text-center">
        <h2 className="reveal font-cormorant text-6xl leading-[0.95] font-light md:text-8xl">
          The whole book, <br />
          <em className="text-[#a4262c]">in its right measure.</em>
        </h2>
        <label className="reveal mx-auto mt-12 flex max-w-xl cursor-pointer flex-col items-center gap-3 border border-dashed border-[#2a2118]/50 px-8 py-10 transition-colors hover:border-[#a4262c] hover:bg-[#f7f0e1]">
          <input type="file" accept="application/pdf" className="sr-only" />
          <span className="font-cormorant text-5xl text-[#a4262c]">☞</span>
          <span className="font-cormorant text-2xl italic">Lay a PDF here</span>
          <span className="font-garamond text-xs tracking-[0.3em] text-[#2a2118]/55 uppercase">free for your first three manuscripts</span>
        </label>
        <div className="mt-20 font-garamond text-xs leading-loose tracking-[0.25em] text-[#2a2118]/50 uppercase">
          <p>Colophon</p>
          <p className="mt-2 normal-case tracking-normal italic">
            Set in Cormorant Garamond & EB Garamond. Proportioned throughout at 1 : 1.618. © MMXXVI Ratio Reader.
          </p>
        </div>
      </footer>
    </div>
  );
}
