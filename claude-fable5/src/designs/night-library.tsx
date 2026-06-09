import { Reveal, useInView } from "../components/reveal";

/*
 * Design 4 — "Night Library"
 * Dark academia luxury. A private library after midnight, where the ideas
 * inside a book are charted as constellations. Cormorant Garamond + Spectral,
 * brass gold on midnight ink.
 */

const BG = "#0B1018";
const PANEL = "#0F1622";
const GOLD = "#C9A961";
const GOLD_DIM = "#8A7546";
const CREAM = "#EAE2CE";
const MUTED = "#97A0AE";

// deterministic star field: [x%, y%, r(px), delay(s), dur(s)]
const STARS: Array<[number, number, number, number, number]> = [
  [4, 12, 2, 0, 3.2], [11, 64, 1.5, 1.1, 4.1], [16, 28, 1, 0.4, 2.8], [22, 80, 2, 2.0, 3.6],
  [27, 9, 1.5, 0.8, 4.4], [33, 47, 1, 1.6, 3.0], [39, 18, 2, 0.2, 3.9], [44, 71, 1, 2.4, 2.7],
  [50, 5, 1.5, 1.3, 3.4], [56, 38, 1, 0.6, 4.2], [61, 86, 2, 1.9, 3.1], [67, 14, 1, 0.1, 3.7],
  [72, 55, 1.5, 2.2, 2.9], [78, 24, 2, 0.9, 4.0], [84, 68, 1, 1.5, 3.3], [89, 8, 1.5, 0.3, 3.8],
  [94, 44, 1, 2.1, 2.6], [8, 92, 1, 1.7, 3.5], [47, 94, 1.5, 0.5, 4.3], [97, 84, 2, 1.0, 3.2],
];

function StarField({ className = "" }: { className?: string }) {
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden>
      {STARS.map(([x, y, r, delay, dur], i) => (
        <span
          key={i}
          className="absolute rounded-full"
          style={{
            left: `${x}%`,
            top: `${y}%`,
            width: r * 2,
            height: r * 2,
            background: CREAM,
            opacity: 0.3,
            animation: `twinkle ${dur}s ease-in-out ${delay}s infinite`,
          }}
        />
      ))}
    </div>
  );
}

function Ornament() {
  return (
    <div className="flex items-center justify-center gap-4" aria-hidden>
      <span className="h-px w-16" style={{ background: GOLD_DIM }} />
      <span className="font-cormorant text-xl" style={{ color: GOLD }}>✦</span>
      <span className="h-px w-16" style={{ background: GOLD_DIM }} />
    </div>
  );
}

type Node = { x: number; y: number; r: number; tag?: string; label: string; sub?: string; anchor?: "start" | "middle" | "end"; dy?: number };

const NODES: Node[] = [
  { x: 400, y: 255, r: 6, label: "MEDITATIONS", sub: "Marcus Aurelius · 254 pp.", anchor: "middle", dy: 34 },
  { x: 175, y: 110, r: 4, tag: "insight", label: "a private journal —", sub: "every “you” means “I”", anchor: "start", dy: -40 },
  { x: 620, y: 92, r: 4, tag: "quote · p. 84", label: "“more often frightened", sub: "than hurt”", anchor: "start", dy: -40 },
  { x: 665, y: 372, r: 4, tag: "quote · p. 121", label: "“the obstacle on the path", sub: "becomes the way”", anchor: "end", dy: 30 },
  { x: 190, y: 390, r: 4, tag: "summary", label: "you rule judgments,", sub: "not events", anchor: "start", dy: 30 },
  { x: 360, y: 120, r: 3, tag: "hint", label: "Book V argues with itself —", sub: "slow down there", anchor: "start", dy: -36 },
];

const EDGES: Array<[number, number]> = [[0, 1], [0, 2], [0, 3], [0, 4], [2, 5]];

function ConstellationChart() {
  const { ref, inView } = useInView<HTMLDivElement>(0.35);
  return (
    <div ref={ref} className="relative">
      <svg viewBox="0 0 800 470" className="w-full" role="img" aria-label="A constellation chart of the ideas in Meditations">
        {EDGES.map(([a, b], i) => {
          const A = NODES[a];
          const B = NODES[b];
          const len = Math.hypot(B.x - A.x, B.y - A.y);
          return (
            <line
              key={i}
              x1={A.x}
              y1={A.y}
              x2={B.x}
              y2={B.y}
              stroke={GOLD}
              strokeWidth="1"
              strokeOpacity="0.5"
              strokeDasharray={`${len}`}
              strokeDashoffset={inView ? 0 : len}
              style={{ transition: `stroke-dashoffset 1.6s cubic-bezier(0.65,0,0.35,1) ${0.35 + i * 0.28}s` }}
            />
          );
        })}
        {NODES.map((n, i) => (
          <g key={i} style={{ opacity: inView ? 1 : 0, transition: `opacity 0.9s ease ${0.2 + i * 0.22}s` }}>
            <circle cx={n.x} cy={n.y} r={n.r + 7} fill={GOLD} opacity="0.12">
              <animate attributeName="opacity" values="0.12;0.3;0.12" dur="3.4s" begin={`${i * 0.6}s`} repeatCount="indefinite" />
            </circle>
            <circle cx={n.x} cy={n.y} r={n.r} fill={i === 0 ? GOLD : CREAM} />
            {n.tag && (
              <text x={n.x} y={n.y + (n.dy ?? -14) - 16} textAnchor={n.anchor} fontSize="11" letterSpacing="2.5" fill={GOLD} fontFamily="Spectral, serif" style={{ textTransform: "uppercase" }}>
                {n.tag.toUpperCase()}
              </text>
            )}
            <text x={n.x} y={n.y + (n.dy ?? -14)} textAnchor={n.anchor} fontSize={i === 0 ? 17 : 15} fill={CREAM} fontFamily="'Cormorant Garamond', serif" fontStyle={i === 0 ? "normal" : "italic"} letterSpacing={i === 0 ? "3" : "0.5"}>
              {n.label}
            </text>
            {n.sub && (
              <text x={n.x} y={n.y + (n.dy ?? -14) + 17} textAnchor={n.anchor} fontSize={i === 0 ? 12 : 15} fill={i === 0 ? MUTED : CREAM} fontFamily={i === 0 ? "Spectral, serif" : "'Cormorant Garamond', serif"} fontStyle={i === 0 ? "normal" : "italic"}>
                {n.sub}
              </text>
            )}
          </g>
        ))}
      </svg>
    </div>
  );
}

export function NightLibrary() {
  return (
    <main className="min-h-screen font-spectral antialiased selection:bg-[#C9A961] selection:text-[#0B1018]" style={{ background: BG, color: CREAM }}>
      {/* ── Nav ────────────────────────────────────────────────────── */}
      <header className="sticky top-0 z-40 border-b backdrop-blur-md" style={{ borderColor: `${GOLD}33`, background: "rgba(11,16,24,0.88)" }}>
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#" className="flex items-baseline gap-2">
            <span className="font-cormorant text-2xl italic" style={{ color: GOLD }}>Ratio</span>
            <span className="text-[11px] uppercase tracking-[0.45em]" style={{ color: MUTED }}>Reader</span>
          </a>
          <nav className="hidden gap-10 text-[12px] uppercase tracking-[0.3em] md:flex" style={{ color: MUTED }}>
            <a href="#charting" className="transition-colors hover:text-[#C9A961]">The Charting</a>
            <a href="#chart" className="transition-colors hover:text-[#C9A961]">One Book</a>
            <a href="#collection" className="transition-colors hover:text-[#C9A961]">The Collection</a>
          </nav>
          <a
            href="#enter"
            className="border px-5 py-2 text-[11px] uppercase tracking-[0.3em] transition-all hover:bg-[#C9A961] hover:text-[#0B1018]"
            style={{ borderColor: GOLD, color: GOLD }}
          >
            Enter
          </a>
        </div>
      </header>

      {/* ── Hero ───────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden">
        <StarField />
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-[420px]"
          style={{ background: `radial-gradient(60% 100% at 50% 100%, ${GOLD}1C, transparent 70%)` }}
          aria-hidden
        />
        <div className="relative mx-auto max-w-5xl px-6 pb-28 pt-24 text-center md:pt-32">
          <Reveal>
            <Ornament />
            <p className="mt-6 text-[12px] uppercase tracking-[0.5em]" style={{ color: MUTED }}>
              The night library is open
            </p>
          </Reveal>
          <Reveal delay={150}>
            <h1 className="mx-auto mt-8 max-w-4xl font-cormorant text-[clamp(2.9rem,7vw,5.8rem)] font-light leading-[1.05]">
              Every book is a sky
              <br />
              full of <em style={{ color: GOLD }}>stars</em>.
              <br />
              <span className="font-normal">We chart them.</span>
            </h1>
          </Reveal>
          <Reveal delay={300}>
            <p className="mx-auto mt-8 max-w-xl text-lg leading-relaxed" style={{ color: MUTED }}>
              Give Ratio Reader any PDF and it returns the constellation within: the summary that holds the shape,
              the quotes that burn brightest, the hints and insights that connect them.
            </p>
          </Reveal>
          <Reveal delay={450}>
            <div className="mt-12 flex flex-col items-center justify-center gap-5 sm:flex-row">
              <a
                href="#enter"
                className="px-9 py-4 text-[12px] font-semibold uppercase tracking-[0.3em] text-[#0B1018] transition-all hover:shadow-[0_0_36px_rgba(201,169,97,0.45)]"
                style={{ background: GOLD }}
              >
                Enter the library
              </a>
              <a href="#chart" className="text-[13px] uppercase tracking-[0.25em] underline-offset-8 hover:underline" style={{ color: GOLD }}>
                Watch a book be charted ↓
              </a>
            </div>
            <p className="mt-8 font-cormorant text-lg italic" style={{ color: MUTED }}>
              Three volumes free · no card required
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── The Charting (process) ─────────────────────────────────── */}
      <section id="charting" className="border-t" style={{ borderColor: `${GOLD}26` }}>
        <div className="mx-auto max-w-6xl px-6 py-24">
          <Reveal>
            <p className="text-center text-[12px] uppercase tracking-[0.5em]" style={{ color: GOLD }}>
              The charting
            </p>
            <h2 className="mt-4 text-center font-cormorant text-4xl font-light md:text-5xl">
              Three movements, one evening
            </h2>
          </Reveal>
          <div className="mt-16 grid gap-12 md:grid-cols-3 md:gap-8">
            {[
              { n: "I", t: "Shelve", d: "Place a PDF in the collection. A paper, a contract, a 600-page biography — the library does not judge." },
              { n: "II", t: "Chart", d: "Ratio reads in the dark so you don't have to: mapping arguments, fixing quotes to their pages, tracing the lines between ideas." },
              { n: "III", t: "Behold", d: "A brief like a star chart — the whole sky of the book, legible at a glance, with bearings for the night you read it in full." },
            ].map((s, i) => (
              <Reveal key={s.n} delay={i * 150}>
                <div className="relative border-t pt-8 text-center md:text-left" style={{ borderColor: `${GOLD}40` }}>
                  <span className="absolute -top-[13px] left-1/2 -translate-x-1/2 px-3 font-cormorant text-xl italic md:left-0 md:translate-x-0" style={{ background: BG, color: GOLD }}>
                    {s.n}
                  </span>
                  <h3 className="font-cormorant text-3xl font-normal" style={{ color: CREAM }}>
                    {s.t}
                  </h3>
                  <p className="mt-3 leading-relaxed" style={{ color: MUTED }}>
                    {s.d}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Constellation centerpiece ──────────────────────────────── */}
      <section id="chart" className="border-t" style={{ borderColor: `${GOLD}26` }}>
        <div className="mx-auto max-w-6xl px-6 py-24">
          <Reveal>
            <div className="flex flex-col items-center text-center">
              <Ornament />
              <h2 className="mt-6 font-cormorant text-4xl font-light md:text-5xl">One book, charted</h2>
              <p className="mt-3 max-w-lg text-base" style={{ color: MUTED }}>
                The actual output for <em>Meditations</em> — summary, pinned quotes with pages, a hint, an insight —
                drawn as the constellation it is.
              </p>
            </div>
          </Reveal>
          <Reveal delay={200}>
            <div
              className="relative mt-14 overflow-hidden rounded-sm border p-4 md:p-10"
              style={{ borderColor: `${GOLD}40`, background: `radial-gradient(80% 90% at 50% 40%, ${PANEL}, ${BG})` }}
            >
              <StarField className="opacity-50" />
              <ConstellationChart />
              <p className="relative mt-4 text-center font-cormorant text-base italic" style={{ color: GOLD_DIM }}>
                fig. i — the sky inside 254 pages, charted in 41 seconds
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── The Collection (features) ──────────────────────────────── */}
      <section id="collection" className="border-t" style={{ borderColor: `${GOLD}26` }}>
        <div className="mx-auto max-w-6xl px-6 py-24">
          <Reveal>
            <p className="text-[12px] uppercase tracking-[0.5em]" style={{ color: GOLD }}>
              The collection
            </p>
            <h2 className="mt-4 max-w-xl font-cormorant text-4xl font-light leading-tight md:text-5xl">
              What the library returns with each volume
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-px md:grid-cols-2" style={{ background: `${GOLD}26` }}>
            {[
              { n: "I", t: "The Summary", d: "The argument held in miniature — faithful to the author's proportions, free of the author's padding." },
              { n: "II", t: "The Quotes", d: "Verbatim passages fixed to their page numbers, like stars to coordinates. Ready for citation, seminar, or scripture." },
              { n: "III", t: "The Hints", d: "Bearings for the deep read: where to slow, what the abstract conceals, which chapter everyone misreads." },
              { n: "IV", t: "The Insights", d: "The lines between the stars — what the author implies across chapters but never states on any single page." },
            ].map((f, i) => (
              <Reveal key={f.n} delay={i * 120}>
                <div className="group h-full p-8 transition-colors duration-500 md:p-12" style={{ background: BG }}>
                  <div className="flex items-baseline gap-5">
                    <span className="font-cormorant text-2xl italic transition-transform duration-300 group-hover:-translate-y-1" style={{ color: GOLD }}>
                      {f.n}.
                    </span>
                    <h3 className="font-cormorant text-3xl" style={{ color: CREAM }}>
                      {f.t}
                    </h3>
                  </div>
                  <p className="mt-4 leading-relaxed" style={{ color: MUTED }}>
                    {f.d}
                  </p>
                  <span className="mt-6 block h-px w-10 transition-all duration-500 group-hover:w-24" style={{ background: GOLD }} aria-hidden />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Pull quote ─────────────────────────────────────────────── */}
      <section className="relative overflow-hidden border-t" style={{ borderColor: `${GOLD}26` }}>
        <StarField className="opacity-40" />
        <div className="relative mx-auto max-w-4xl px-6 py-28 text-center">
          <Reveal>
            <span className="font-cormorant text-7xl leading-none" style={{ color: GOLD }} aria-hidden>
              “
            </span>
            <blockquote className="mt-2 font-cormorant text-[clamp(1.8rem,4.5vw,3rem)] font-light italic leading-snug">
              I used to underline everything, which is to say nothing. Now each book ends as a chart I can navigate
              by, months later.
            </blockquote>
            <p className="mt-8 text-[12px] uppercase tracking-[0.4em]" style={{ color: MUTED }}>
              — A doctoral reader, two chapters from done
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── CTA ────────────────────────────────────────────────────── */}
      <section id="enter" className="border-t" style={{ borderColor: `${GOLD}26` }}>
        <div className="relative mx-auto max-w-6xl overflow-hidden px-6 py-28 text-center">
          <div
            className="pointer-events-none absolute inset-x-0 top-0 h-full"
            style={{ background: `radial-gradient(50% 60% at 50% 0%, ${GOLD}14, transparent 70%)` }}
            aria-hidden
          />
          <Reveal>
            <Ornament />
            <h2 className="mt-8 font-cormorant text-[clamp(2.6rem,6vw,4.8rem)] font-light leading-tight">
              Your library awaits.
            </h2>
            <p className="mx-auto mt-5 max-w-md text-lg" style={{ color: MUTED }}>
              Three volumes charted free. Thereafter, $9 a month — less than one hardcover you won't finish.
            </p>
            <a
              href="#"
              className="mt-10 inline-block px-10 py-4 text-[12px] font-semibold uppercase tracking-[0.3em] text-[#0B1018] transition-all hover:shadow-[0_0_40px_rgba(201,169,97,0.5)]"
              style={{ background: GOLD }}
            >
              Begin the first volume
            </a>
          </Reveal>
        </div>
      </section>

      {/* ── Footer ─────────────────────────────────────────────────── */}
      <footer className="border-t py-10 text-center" style={{ borderColor: `${GOLD}26` }}>
        <p className="font-cormorant text-xl italic" style={{ color: GOLD }}>
          Ratio Reader
        </p>
        <p className="mt-2 text-[11px] uppercase tracking-[0.4em]" style={{ color: MUTED }}>
          The night library is always open · MMXXVI
        </p>
      </footer>
    </main>
  );
}
