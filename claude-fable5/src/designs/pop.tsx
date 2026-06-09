import type { CSSProperties } from "react";
import { ArrowRight, BookOpen, Lightbulb, Quote, Sparkles, Star, Upload, Zap } from "lucide-react";
import { Reveal } from "../components/reveal";

/*
 * Design 5 — "Pop Reader"
 * Sticker-bomb neo-brutalism. Thick borders, hard shadows, loud colors,
 * rotated everything. Bricolage Grotesque + Atkinson Hyperlegible.
 */

const CREAM = "#FFF6E3";
const PINK = "#FF5D8F";
const YELLOW = "#FFD93B";
const CYAN = "#53D8FF";
const LIME = "#B8F135";
const PURPLE = "#C5A8FF";

const card = "border-[3px] border-black shadow-[6px_6px_0_#000]";
const press =
  "transition-all duration-150 hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-[3px_3px_0_#000] active:translate-x-[6px] active:translate-y-[6px] active:shadow-none";

function Sticker({
  children,
  bg,
  rot = -6,
  delay = 0.8,
  className = "",
}: {
  children: React.ReactNode;
  bg: string;
  rot?: number;
  delay?: number;
  className?: string;
}) {
  return (
    <div
      className={`border-[3px] border-black px-4 py-2 font-bricolage text-sm font-bold shadow-[4px_4px_0_#000] ${className}`}
      style={
        {
          background: bg,
          "--final-rot": `${rot}deg`,
          animation: `pop-in 0.55s cubic-bezier(0.34,1.56,0.64,1) ${delay}s both`,
        } as CSSProperties
      }
    >
      {children}
    </div>
  );
}

function Squiggle({ color = PINK }: { color?: string }) {
  return (
    <svg viewBox="0 0 220 14" className="absolute -bottom-2 left-0 w-full" preserveAspectRatio="none" aria-hidden>
      <path d="M3 9c18-8 36 8 54 0s36-8 54 0 36 8 54 0 36-8 52 0" stroke={color} strokeWidth="5" fill="none" strokeLinecap="round" />
    </svg>
  );
}

function Burst({ children, bg = YELLOW, className = "" }: { children: React.ReactNode; bg?: string; className?: string }) {
  return (
    <div className={`relative grid h-24 w-24 place-items-center ${className}`}>
      <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full" aria-hidden>
        <polygon
          points="50,0 60,32 92,18 72,44 100,50 72,56 92,82 60,68 50,100 40,68 8,82 28,56 0,50 28,44 8,18 40,32"
          fill={bg}
          stroke="#000"
          strokeWidth="2.5"
        />
      </svg>
      <span className="relative font-bricolage text-lg font-extrabold">{children}</span>
    </div>
  );
}

export function Pop() {
  return (
    <main className="min-h-screen overflow-x-clip font-atkinson text-black antialiased selection:bg-black selection:text-[#FFD93B]" style={{ background: CREAM }}>
      {/* ── Nav ────────────────────────────────────────────────────── */}
      <header className="sticky top-0 z-40 border-b-[3px] border-black" style={{ background: CREAM }}>
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3.5">
          <a href="#" className={`${card} -rotate-2 px-3 py-1 font-bricolage text-xl font-extrabold`} style={{ background: YELLOW }}>
            RATIO!
          </a>
          <nav className="hidden items-center gap-3 font-bricolage text-sm font-bold md:flex">
            {[
              ["#mockup", "the goods"],
              ["#how", "how?!"],
              ["#fans", "fans"],
            ].map(([href, label]) => (
              <a key={label} href={href} className="rounded-full border-[3px] border-black px-4 py-1.5 transition-colors hover:bg-black hover:text-white">
                {label}
              </a>
            ))}
          </nav>
          <a href="#cta" className={`${card} ${press} flex items-center gap-2 px-4 py-2 font-bricolage text-sm font-extrabold`} style={{ background: PINK }}>
            <Upload size={16} strokeWidth={3} /> Upload a PDF
          </a>
        </div>
      </header>

      {/* ── Hero ───────────────────────────────────────────────────── */}
      <section className="relative mx-auto max-w-6xl px-5 pb-20 pt-16 md:pt-24">
        {/* floating stickers */}
        <div className="pointer-events-none absolute right-2 top-10 hidden lg:block">
          <Sticker bg={CYAN} rot={8} delay={1.0}>300 pages → 1 snack break</Sticker>
        </div>
        <div className="pointer-events-none absolute left-0 top-40 hidden lg:block">
          <Sticker bg={LIME} rot={-9} delay={1.2}>100% less skimming guilt</Sticker>
        </div>
        <div className="pointer-events-none absolute bottom-36 right-10 hidden lg:block">
          <Sticker bg={PURPLE} rot={5} delay={1.4}>
            <span className="flex items-center gap-1.5">
              <Star size={14} strokeWidth={3} /> quotes w/ page numbers
            </span>
          </Sticker>
        </div>

        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <p className={`${card} mx-auto w-max rotate-1 px-4 py-1.5 font-bricolage text-xs font-extrabold uppercase tracking-wider`} style={{ background: "white" }}>
              ⚡ the reading sidekick your PDFs fear
            </p>
            <h1 className="mt-8 font-bricolage text-[clamp(2.7rem,7.5vw,5.4rem)] font-extrabold leading-[1.0] tracking-tight">
              Your PDFs are{" "}
              <span className="relative inline-block -rotate-2 border-[3px] border-black px-3 shadow-[5px_5px_0_#000]" style={{ background: PINK }}>
                begging
              </span>{" "}
              to be{" "}
              <span className="relative inline-block">
                shorter
                <Squiggle color={CYAN} />
              </span>
              .
            </h1>
            <p className="mx-auto mt-8 max-w-xl text-lg leading-relaxed md:text-xl">
              Toss in any PDF. Ratio Reader squeezes out the summary, the killer quotes, the hints, and the
              insights — so you get the whole point without the whole 300 pages.
            </p>
          </div>
        </Reveal>

        <Reveal delay={250}>
          <div className="mt-10 flex flex-col items-center justify-center gap-5 sm:flex-row">
            <a href="#cta" className={`${card} ${press} flex items-center gap-3 px-8 py-4 font-bricolage text-xl font-extrabold`} style={{ background: YELLOW }}>
              Upload the beast <ArrowRight size={22} strokeWidth={3} />
            </a>
            <a href="#mockup" className={`${card} ${press} bg-white px-6 py-4 font-bricolage text-lg font-bold`}>
              peek at the goods 👀
            </a>
          </div>
          <p className="mt-6 text-center font-bold">
            First 3 PDFs free · zero credit cards · zero shame
          </p>
        </Reveal>
      </section>

      {/* ── Marquee ────────────────────────────────────────────────── */}
      <div className="overflow-hidden border-y-[3px] border-black bg-black py-3">
        <div className="flex w-max animate-[marquee_18s_linear_infinite] whitespace-nowrap font-bricolage text-lg font-extrabold uppercase tracking-wide text-white">
          {[0, 1].map((n) => (
            <span key={n}>
              {Array.from({ length: 4 }).map((_, i) => (
                <span key={i}>
                  &nbsp;read it faster <span style={{ color: YELLOW }}>★</span> quote it better{" "}
                  <span style={{ color: PINK }}>★</span> actually finish it <span style={{ color: CYAN }}>★</span>
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>

      {/* ── Mock reader UI ─────────────────────────────────────────── */}
      <section id="mockup" className="mx-auto max-w-6xl px-5 py-24">
        <Reveal>
          <h2 className="text-center font-bricolage text-4xl font-extrabold md:text-5xl">
            One PDF goes in.{" "}
            <span className="inline-block rotate-1 border-[3px] border-black px-3 shadow-[5px_5px_0_#000]" style={{ background: LIME }}>
              The good stuff
            </span>{" "}
            comes out.
          </h2>
        </Reveal>

        <Reveal delay={200}>
          <div className={`${card} mt-14 -rotate-1 bg-white`}>
            {/* window chrome */}
            <div className="flex items-center gap-2 border-b-[3px] border-black px-4 py-2.5" style={{ background: PURPLE }}>
              <span className="h-3.5 w-3.5 rounded-full border-2 border-black" style={{ background: PINK }} />
              <span className="h-3.5 w-3.5 rounded-full border-2 border-black" style={{ background: YELLOW }} />
              <span className="h-3.5 w-3.5 rounded-full border-2 border-black" style={{ background: LIME }} />
              <span className="ml-3 font-bricolage text-sm font-bold">ratio reader — quarterly_report_FINAL_v7.pdf</span>
            </div>
            <div className="grid md:grid-cols-[1fr_1.2fr]">
              {/* document side */}
              <div className="border-b-[3px] border-black p-6 md:border-b-0 md:border-r-[3px]">
                <p className="font-bricolage text-xs font-extrabold uppercase tracking-wider text-black/50">the beast · 247 pages</p>
                <div className="mt-4 space-y-2.5">
                  {[100, 92, 97, 88, 95, 60, 0, 98, 91, 96, 85, 94, 58].map((w, i) =>
                    w === 0 ? (
                      <div key={i} className="h-3" />
                    ) : (
                      <div key={i} className="h-3 rounded-sm bg-black/15" style={{ width: `${w}%` }} />
                    ),
                  )}
                </div>
                <p className="mt-5 rotate-1 font-bricolage font-bold text-black/40">…and 243 more pages of this ↑</p>
              </div>
              {/* sticky-note output side */}
              <div className="relative space-y-4 p-6" style={{ background: "#FBF2DC" }}>
                <p className="font-bricolage text-xs font-extrabold uppercase tracking-wider text-black/50">the good stuff · 90 seconds</p>
                <div className={`${card} rotate-1 p-4`} style={{ background: LIME }}>
                  <p className="font-bricolage text-sm font-extrabold uppercase">Summary</p>
                  <p className="mt-1 text-[15px] leading-snug">
                    Revenue's up 12%, but it's all from one region — and the report buries that on page 184.
                  </p>
                </div>
                <div className={`${card} -rotate-1 p-4`} style={{ background: PINK }}>
                  <p className="font-bricolage text-sm font-extrabold uppercase">Quote · p. 184</p>
                  <p className="mt-1 text-[15px] italic leading-snug">
                    "Growth excluding the APAC anomaly was effectively flat."
                  </p>
                </div>
                <div className={`${card} rotate-[0.5deg] p-4`} style={{ background: CYAN }}>
                  <p className="font-bricolage text-sm font-extrabold uppercase">Hint</p>
                  <p className="mt-1 text-[15px] leading-snug">
                    The appendix footnotes disagree with chapter 3. Ask about it in the meeting. Watch faces.
                  </p>
                </div>
                <div className={`${card} -rotate-[0.5deg] p-4`} style={{ background: YELLOW }}>
                  <p className="font-bricolage text-sm font-extrabold uppercase">Insight</p>
                  <p className="mt-1 text-[15px] leading-snug">
                    Nobody who wrote this thinks the Q4 target is real. The hedging language triples after page 200.
                  </p>
                </div>
                <Burst className="absolute -right-7 -top-8 rotate-12 max-md:hidden">POW!</Burst>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ── Features grid ──────────────────────────────────────────── */}
      <section className="mx-auto max-w-6xl px-5 pb-24">
        <Reveal>
          <h2 className="font-bricolage text-4xl font-extrabold md:text-5xl">
            The whole toolkit<span style={{ color: PINK }}>.</span>
          </h2>
        </Reveal>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: BookOpen, bg: LIME, rot: "-rotate-1", t: "Summaries", d: "The actual point of the document, minus the throat-clearing. Faithful, never fluffy." },
            { icon: Quote, bg: PINK, rot: "rotate-1", t: "Quotes", d: "Word-for-word bangers with page numbers. Drop them in essays, decks, or arguments." },
            { icon: Sparkles, bg: CYAN, rot: "-rotate-1", t: "Hints", d: "Where to slow down, what everyone misses, which chapter is secretly the boss fight." },
            { icon: Lightbulb, bg: YELLOW, rot: "rotate-1", t: "Insights", d: "The stuff between the lines. What the author meant but was too polite to say." },
          ].map((f, i) => (
            <Reveal key={f.t} delay={i * 120}>
              <div className={`${card} ${press} h-full ${f.rot} p-6`} style={{ background: f.bg }}>
                <div className="grid h-12 w-12 place-items-center border-[3px] border-black bg-white shadow-[3px_3px_0_#000]">
                  <f.icon size={24} strokeWidth={2.75} />
                </div>
                <h3 className="mt-4 font-bricolage text-2xl font-extrabold">{f.t}</h3>
                <p className="mt-2 leading-snug">{f.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── How it works: comic panels ─────────────────────────────── */}
      <section id="how" className="border-y-[3px] border-black py-24" style={{ background: PURPLE }}>
        <div className="mx-auto max-w-6xl px-5">
          <Reveal>
            <h2 className="text-center font-bricolage text-4xl font-extrabold md:text-5xl">
              How it works{" "}
              <span className="inline-block -rotate-2 border-[3px] border-black bg-white px-3 shadow-[5px_5px_0_#000]">in 3 panels</span>
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {[
              { n: "1", t: "YEET the PDF", d: "Drag. Drop. Done. Scanned, ancient, 400 pages of legalese — we eat it all.", icon: Upload, fx: "FWOOSH!" },
              { n: "2", t: "Ratio crunches", d: "Our reader chews through every page, ranks what matters, pins the receipts.", icon: Zap, fx: "CRUNCH!" },
              { n: "3", t: "You look smart", d: "Summary, quotes, hints, insights. Walk into class/the meeting like you wrote it.", icon: Sparkles, fx: "TA-DA!" },
            ].map((s, i) => (
              <Reveal key={s.n} delay={i * 150}>
                <div className={`${card} relative h-full bg-white p-7 ${i % 2 ? "rotate-1" : "-rotate-1"}`}>
                  <span className="absolute -left-4 -top-5 grid h-12 w-12 place-items-center rounded-full border-[3px] border-black font-bricolage text-xl font-extrabold shadow-[3px_3px_0_#000]" style={{ background: YELLOW }}>
                    {s.n}
                  </span>
                  <div className="flex items-start justify-between gap-3">
                    <s.icon size={36} strokeWidth={2.5} />
                    <span className="rotate-6 font-bricolage text-sm font-extrabold" style={{ color: PINK }}>
                      {s.fx}
                    </span>
                  </div>
                  <h3 className="mt-4 font-bricolage text-2xl font-extrabold">{s.t}</h3>
                  <p className="mt-2 leading-snug">{s.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Fans ───────────────────────────────────────────────────── */}
      <section id="fans" className="mx-auto max-w-6xl px-5 py-24">
        <Reveal>
          <h2 className="text-center font-bricolage text-4xl font-extrabold md:text-5xl">
            People are{" "}
            <span className="relative inline-block">
              yelling
              <Squiggle color={PINK} />
            </span>{" "}
            about it
          </h2>
        </Reveal>
        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {[
            { q: "Read 14 papers the week before my defense. MY DEFENSE.", who: "PhD survivor", bg: CYAN, rot: "-rotate-2" },
            { q: "I quoted page 184 in the meeting and my boss did a double take.", who: "junior analyst, now senior", bg: YELLOW, rot: "rotate-1" },
            { q: "My book club thinks I'm insufferable now. Worth it.", who: "competitive reader", bg: PINK, rot: "rotate-2" },
          ].map((t, i) => (
            <Reveal key={t.who} delay={i * 130}>
              <div className={`relative ${t.rot}`}>
                <div className={`${card} p-6`} style={{ background: t.bg }}>
                  <p className="font-bricolage text-xl font-bold leading-snug">"{t.q}"</p>
                  <p className="mt-3 font-bold">— {t.who}</p>
                </div>
                <div className="absolute -bottom-3 left-10 h-6 w-6 rotate-45 border-b-[3px] border-r-[3px] border-black" style={{ background: t.bg }} aria-hidden />
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── CTA ────────────────────────────────────────────────────── */}
      <section id="cta" className="border-t-[3px] border-black py-24" style={{ background: PINK }}>
        <div className="mx-auto max-w-4xl px-5 text-center">
          <Reveal>
            <Burst bg={YELLOW} className="mx-auto animate-[wiggle_3s_ease-in-out_infinite]">FREE!</Burst>
            <h2 className="mt-8 font-bricolage text-[clamp(2.4rem,6.5vw,4.5rem)] font-extrabold leading-[1.02]">
              Stop pretending you'll
              <br />
              "read it later."
            </h2>
            <p className="mx-auto mt-5 max-w-md text-lg font-bold">
              Later isn't coming. But the summary can be here in 90 seconds.
            </p>
            <a
              href="#"
              className={`${card} ${press} mt-10 inline-flex items-center gap-3 bg-white px-10 py-5 font-bricolage text-2xl font-extrabold`}
            >
              Feed Ratio a PDF <ArrowRight size={26} strokeWidth={3} />
            </a>
          </Reveal>
        </div>
      </section>

      {/* ── Footer ─────────────────────────────────────────────────── */}
      <footer className="border-t-[3px] border-black bg-black py-10 text-center text-white">
        <p className="font-bricolage text-xl font-extrabold">
          RATIO! <span style={{ color: YELLOW }}>★</span> READER
        </p>
        <p className="mt-2 text-sm text-white/70">
          made for people with 47 open tabs and zero finished PDFs · est. 2026
        </p>
      </footer>
    </main>
  );
}
