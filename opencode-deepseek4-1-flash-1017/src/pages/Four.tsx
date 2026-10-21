import { useEffect, useState, type ReactNode } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Check, Scissors, Sparkles, Upload } from "lucide-react";

const panels = [
  {
    caption: "TUESDAY, 11:47 PM. THE READING LIST HAS GROWN TEETH.",
    art: "stack",
    sfx: "GULP.",
  },
  {
    caption: "YOU FEED THE PDF TO THE MACHINE. IT DOES NOT COMPLAIN.",
    art: "machine",
    sfx: "THUNK!",
  },
  {
    caption: "FOUR MINUTES LATER. YOU KNOW THE POINT. THE POINT KNOWS YOU.",
    art: "done",
    sfx: "AHA!",
  },
];

const features = [
  {
    letter: "S",
    name: "The Gist",
    kicker: "Summary",
    body: "A summary that fits in a coffee break. Main claim first, evidence second, filler composted.",
    stat: "1 PAGE",
    color: "bg-[#ffd43b]",
  },
  {
    letter: "H",
    name: "Margin Notes",
    kicker: "Hints",
    body: "Help exactly where the text gets weird. Definitions, context, and the bit the exam will ask about.",
    stat: "BY THE PAGE",
    color: "bg-[#2fc6d6]",
  },
  {
    letter: "Q",
    name: "The Receipts",
    kicker: "Quotes",
    body: "Lines you can copy, cite, and defend. Page number included. Obviously.",
    stat: "VERBATIM",
    color: "bg-[#f1447e]",
  },
  {
    letter: "I",
    name: "Plot Twists",
    kicker: "Insights",
    body: "What the document assumes, where it contradicts itself, and what to read next. The director's commentary.",
    stat: "WIDER FRAME",
    color: "bg-[#f5f1e6]",
  },
];

function Burst({ children, className = "" }: { children: ReactNode; className?: string }) {
  const star = "polygon(50% 0%, 59% 22%, 79% 8%, 78% 32%, 100% 30%, 85% 49%, 98% 65%, 75% 67%, 80% 92%, 58% 78%, 50% 100%, 42% 78%, 20% 92%, 25% 67%, 2% 65%, 15% 49%, 0% 30%, 22% 32%, 21% 8%, 41% 22%)";
  return (
    <div className={`relative ${className}`}>
      <div className="absolute inset-0 bg-[#17110f]" style={{ clipPath: star }} aria-hidden="true" />
      <div className="absolute inset-[3px] bg-[#ffd43b]" style={{ clipPath: star }} aria-hidden="true" />
      <div className="relative flex h-full w-full items-center justify-center p-4 text-center">{children}</div>
    </div>
  );
}

function Bubble({ children, tail = "left", className = "" }: { children: ReactNode; tail?: "left" | "right"; className?: string }) {
  return (
    <div className={`relative border-[3px] border-[#17110f] bg-white px-4 py-3 font-dm text-sm font-semibold leading-snug ${className}`}>
      {children}
      <span
        className={`absolute -bottom-3 size-4 rotate-45 border-b-[3px] border-r-[3px] border-[#17110f] bg-white ${tail === "left" ? "left-7" : "right-7"}`}
        aria-hidden="true"
      />
    </div>
  );
}

function DocMonster() {
  return (
    <div className="relative mx-auto w-full max-w-[300px]">
      <div className="relative rotate-[-3deg] border-[4px] border-[#17110f] bg-[#fffaf0] p-4 shadow-[10px_10px_0_#17110f]">
        <div className="flex items-center justify-between border-b-[3px] border-[#17110f] pb-2 font-dm text-[8px] font-black uppercase tracking-[0.14em]">
          <span>Annual report</span>
          <span>74 pp</span>
        </div>
        <div className="flex items-center justify-center gap-3 py-7">
          <div className="flex size-12 items-center justify-center rounded-full border-[3px] border-[#17110f] bg-white">
            <div className="size-5 rounded-full bg-[#17110f]">
              <div className="ml-1 mt-1 size-1.5 rounded-full bg-white" />
            </div>
          </div>
          <div className="flex size-12 items-center justify-center rounded-full border-[3px] border-[#17110f] bg-white">
            <div className="size-5 rounded-full bg-[#17110f]">
              <div className="ml-1 mt-1 size-1.5 rounded-full bg-white" />
            </div>
          </div>
        </div>
        <svg viewBox="0 0 120 30" className="mx-auto h-8 w-32" aria-hidden="true">
          <path d="M8 8l12 12 12-12 12 12 12-12 12 12 12-12 12 12" fill="none" stroke="#17110f" strokeWidth="4" strokeLinejoin="round" />
        </svg>
        <div className="mt-6 space-y-1.5" aria-hidden="true">
          <div className="h-2 w-full bg-[#17110f]/15" />
          <div className="h-2 w-5/6 bg-[#17110f]/15" />
          <div className="h-2 w-full bg-[#17110f]/15" />
          <div className="h-2 w-2/3 bg-[#17110f]/15" />
        </div>
      </div>
      <div className="absolute -left-10 top-1/2 hidden h-16 w-10 border-y-[3px] border-l-[3px] border-[#17110f] sm:block" />
      <div className="absolute -right-10 top-1/2 hidden h-16 w-10 border-y-[3px] border-r-[3px] border-[#17110f] sm:block" />
      <div className="absolute -right-5 -top-6 rotate-12 border-[3px] border-[#17110f] bg-[#f1447e] px-3 py-1 font-lilita text-sm uppercase text-white shadow-[3px_3px_0_#17110f]">
        74 pages?!
      </div>
    </div>
  );
}

function StoryPanel({ panel }: { panel: (typeof panels)[number] }) {
  return (
    <article className="relative border-[4px] border-[#17110f] bg-[#fff6de] shadow-[6px_6px_0_#17110f]">
      <div className="relative h-52 overflow-hidden border-b-[4px] border-[#17110f] halftone-ink bg-[#2fc6d6]/25">
        {panel.art === "stack" && (
          <div className="absolute inset-0 flex items-end justify-center pb-4">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="absolute w-28 border-[3px] border-[#17110f] bg-[#fffaf0]"
                style={{ height: 120 - i * 8, bottom: 26 + i * 6, transform: `rotate(${(i - 1) * 5}deg)` }}
              >
                <div className="p-2" aria-hidden="true">
                  <div className="h-1.5 w-3/4 bg-[#17110f]/20" />
                  <div className="mt-1 h-1.5 w-1/2 bg-[#17110f]/20" />
                </div>
              </div>
            ))}
            <div className="absolute right-4 top-4 rotate-6 border-[3px] border-[#17110f] bg-[#ffd43b] px-2 py-1 font-lilita text-xs uppercase">
              overdue
            </div>
          </div>
        )}
        {panel.art === "machine" && (
          <div className="absolute inset-0 flex items-center justify-center gap-3 p-5">
            <div className="border-[3px] border-dashed border-[#17110f] bg-white px-4 py-8 text-center font-dm text-[9px] font-bold uppercase tracking-[0.12em]">
              <Upload className="mx-auto mb-1 size-5" strokeWidth={2.5} />
              drop PDF
            </div>
            <div className="font-lilita text-3xl">→</div>
            <div className="flex h-28 w-24 flex-col items-center justify-center border-[3px] border-[#17110f] bg-[#f1447e] text-white">
              <span className="font-lilita text-2xl">RR</span>
              <span className="mt-1 font-dm text-[7px] font-black uppercase tracking-[0.1em]">crunch</span>
              <span className="mt-1 h-1 w-10 bg-white/40" />
              <span className="mt-1 h-1 w-6 bg-white/40" />
            </div>
          </div>
        )}
        {panel.art === "done" && (
          <div className="absolute inset-0 flex items-center justify-center p-5">
            <div className="w-full max-w-[200px] rotate-2 border-[3px] border-[#17110f] bg-white p-3 shadow-[4px_4px_0_#17110f]">
              <div className="flex items-center justify-between border-b-2 border-[#17110f] pb-1 font-dm text-[7px] font-black uppercase tracking-[0.12em]">
                <span>Ratio output</span>
                <Check className="size-3" strokeWidth={3} />
              </div>
              <p className="mt-2 font-dm text-[10px] font-bold leading-snug">
                The report is mostly one number and a disclaimer.
              </p>
              <div className="mt-2 space-y-1" aria-hidden="true">
                <div className="h-1 w-full bg-[#17110f]/15" />
                <div className="h-1 w-4/5 bg-[#17110f]/15" />
              </div>
              <div className="mt-2 bg-[#ffd43b] px-1 py-0.5 font-dm text-[7px] font-black uppercase">4 min · 74 pages</div>
            </div>
            <div className="absolute right-3 top-3 rounded-full border-[3px] border-[#17110f] bg-white px-2 py-1 font-lilita text-[10px] uppercase">
              no cape needed
            </div>
          </div>
        )}
        <span className="absolute left-3 top-3 font-lilita text-2xl uppercase tracking-tight text-[#17110f]">
          {panel.sfx}
        </span>
      </div>
      <p className="p-4 font-dm text-[10px] font-black uppercase leading-relaxed tracking-[0.08em]">{panel.caption}</p>
    </article>
  );
}

function Machine() {
  const [stage, setStage] = useState<"idle" | "working" | "done">("idle");

  useEffect(() => {
    if (stage !== "working") return;
    const timer = setTimeout(() => setStage("done"), 1500);
    return () => clearTimeout(timer);
  }, [stage]);

  return (
    <div className="border-[4px] border-[#17110f] bg-[#17110f] p-3 shadow-[8px_8px_0_#f1447e] sm:p-5">
      <div className="relative overflow-hidden border-[4px] border-[#17110f] bg-[#f5f1e6] p-5 sm:p-7">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b-[3px] border-[#17110f] pb-3">
          <p className="font-lilita text-xl uppercase leading-none">The clarity-o-matic 3000</p>
          <span className="border-[3px] border-[#17110f] bg-[#ffd43b] px-2 py-1 font-dm text-[8px] font-black uppercase tracking-[0.14em]">
            Patent pending, probably
          </span>
        </div>

        {stage !== "done" ? (
          <div className="grid gap-5 pt-5 sm:grid-cols-[1fr_auto_1.1fr] sm:items-center">
            <div className="relative mx-auto w-full max-w-[260px] -rotate-2 border-[3px] border-[#17110f] bg-white p-3">
              <div className="flex items-center justify-between border-b-2 border-[#17110f] pb-1 font-dm text-[7px] font-black uppercase tracking-[0.12em]">
                <span>Strategy deck</span>
                <span>64 pp</span>
              </div>
              <div className="mt-3 space-y-1.5" aria-hidden="true">
                {[100, 92, 100, 78, 95, 84, 100, 60].map((w) => (
                  <div key={w} className="h-2 bg-[#17110f]/15" style={{ width: `${w}%` }} />
                ))}
              </div>
              <div className="mt-3 flex items-center justify-between">
                <span className="font-dm text-[7px] font-black uppercase tracking-[0.1em]">Mostly filler</span>
                <span className="rotate-3 border-2 border-[#17110f] bg-[#f1447e] px-1.5 py-0.5 font-dm text-[7px] font-black uppercase text-white">PLEASE READ</span>
              </div>
              {stage === "working" && (
                <div className="absolute inset-0 overflow-hidden bg-[#17110f]/10">
                  <div className="crunch-bar h-full bg-[#2fc6d6]/60" />
                  <span className="absolute inset-0 flex items-center justify-center font-lilita text-2xl uppercase">Crunching…</span>
                </div>
              )}
            </div>

            <div className="hidden flex-col items-center gap-2 sm:flex">
              <span className="font-lilita text-3xl">→</span>
              <span className="font-dm text-[8px] font-black uppercase tracking-[0.1em]">30 sec</span>
            </div>

            <div className="text-center sm:text-left">
              <p className="font-dm text-[10px] font-black uppercase tracking-[0.12em]">One push. No settings.</p>
              <p className="mt-2 font-dm text-base leading-snug">
                Feed it the document you have been avoiding. The machine reads every page, finds the
                load-bearing parts, and prints the useful bit on the other side.
              </p>
              <button
                type="button"
                onClick={() => setStage("working")}
                disabled={stage === "working"}
                className="mt-4 inline-flex items-center gap-2 border-[3px] border-[#17110f] bg-[#f1447e] px-5 py-3 font-lilita text-sm uppercase tracking-wide text-white shadow-[4px_4px_0_#17110f] transition-transform hover:-translate-y-0.5 hover:shadow-[6px_6px_0_#17110f] disabled:cursor-wait disabled:opacity-70"
              >
                {stage === "working" ? "Crunching…" : "Distill this PDF"}
                <Sparkles className="size-4" strokeWidth={2.5} />
              </button>
              <p className="mt-2 font-dm text-[8px] font-bold uppercase tracking-[0.1em] text-[#17110f]/50">Demo only. Your real PDF stays yours.</p>
            </div>
          </div>
        ) : (
          <div className="anim-rise pt-5">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b-[3px] border-[#17110f] pb-2">
              <p className="font-lilita text-xl uppercase">Ka-pow. The point:</p>
              <span className="bg-[#ffd43b] px-2 py-0.5 font-dm text-[8px] font-black uppercase tracking-[0.1em]">64 pages → 4 minutes</span>
            </div>
            <p className="mt-4 max-w-2xl font-lilita text-2xl uppercase leading-tight">
              The strategy is three bets in a trench coat. Only one is funded.
            </p>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {[
                ["Summary", "Three bets, one budget. The middle bet is the only one with a named owner and a deadline. The other two are wishes with slides."],
                ["Hints", "“Phase 2” appears 14 times and is never defined. Treat it as a placeholder, not a plan."],
                ["Quote", "“We will revisit resourcing in Q3.” — p. 41. Q3 is not mentioned again."],
                ["Insight", "The deck argues for focus while funding three things. That tension is the actual decision."],
              ].map(([t, b]) => (
                <div key={t} className="border-[2px] border-[#17110f] bg-white p-3">
                  <p className="font-dm text-[8px] font-black uppercase tracking-[0.14em] text-[#f1447e]">{t}</p>
                  <p className="mt-1 font-dm text-xs leading-snug">{b}</p>
                </div>
              ))}
            </div>
            <button
              type="button"
              onClick={() => setStage("idle")}
              className="mt-4 font-dm text-[8px] font-black uppercase tracking-[0.12em] underline underline-offset-4 hover:no-underline"
            >
              Run it again
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export function Four() {
  return (
    <div className="grain min-h-screen overflow-x-clip bg-[#fff6de] font-dm text-[#17110f]">
      <header className="border-b-[4px] border-[#17110f] bg-[#17110f] text-[#fff6de]">
        <div className="mx-auto flex max-w-[1240px] flex-wrap items-center justify-between gap-3 px-4 py-2.5 sm:px-8">
          <Link to="/" className="flex items-center gap-2">
            <span className="flex size-7 items-center justify-center border-2 border-[#ffd43b] bg-[#f1447e] font-lilita text-sm text-white">
              RR
            </span>
            <span className="font-lilita text-lg uppercase tracking-wide">Ratio Reader</span>
          </Link>
          <div className="hidden items-center gap-5 font-dm text-[8px] font-black uppercase tracking-[0.14em] sm:flex">
            <span>Issue #01</span>
            <span className="text-[#ffd43b]">Five editions</span>
            <span>Price: your attention</span>
          </div>
          <div className="flex items-center gap-3">
            <Link to="/5" className="hidden font-dm text-[8px] font-black uppercase tracking-[0.12em] text-[#fff6de]/70 hover:text-[#ffd43b] md:block">
              Next: edition 05 →
            </Link>
            <a href="#coupon" className="border-2 border-[#fff6de] bg-[#ffd43b] px-3 py-1.5 font-dm text-[8px] font-black uppercase tracking-[0.12em] text-[#17110f] shadow-[3px_3px_0_#f1447e] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0_#f1447e]">
              Start free
            </a>
          </div>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden border-b-[4px] border-[#17110f]">
          <div className="pointer-events-none absolute inset-0 halftone text-[#17110f]/[0.07]" aria-hidden="true" />
          <div className="relative mx-auto grid max-w-[1240px] gap-10 px-4 pb-16 pt-10 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:pb-24 lg:pt-16">
            <div className="relative z-10">
              <div className="flex flex-wrap items-center gap-3">
                <span className="border-[3px] border-[#17110f] bg-[#2fc6d6] px-2.5 py-1 font-dm text-[9px] font-black uppercase tracking-[0.14em] shadow-[3px_3px_0_#17110f]">
                  New series!
                </span>
                <span className="font-dm text-[9px] font-black uppercase tracking-[0.14em] text-[#17110f]/55">
                  The anti-skimming reading machine
                </span>
              </div>
              <h1 className="mt-6 font-lilita text-[clamp(3.6rem,8.6vw,7.6rem)] uppercase leading-[0.82] tracking-[-0.015em]">
                Your reading
                <br />
                list is the
                <br />
                <span className="relative inline-block">
                  <span className="absolute inset-x-0 bottom-1 -z-10 h-[0.42em] -rotate-1 bg-[#f1447e]" aria-hidden="true" />
                  villain.
                </span>
              </h1>
              <p className="mt-7 max-w-[48ch] font-dm text-lg font-medium leading-snug">
                Drop any PDF into Ratio Reader. It reads all 74 pages, punches out the boring parts,
                and hands you the summary, hints, quotes and insights worth keeping.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href="#coupon"
                  className="group flex items-center gap-3 border-[4px] border-[#17110f] bg-[#f1447e] px-6 py-3.5 font-lilita text-base uppercase tracking-wide text-white shadow-[6px_6px_0_#17110f] transition-transform hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[8px_8px_0_#17110f]"
                >
                  Distill a PDF — free
                  <ArrowUpRight className="size-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={3} />
                </a>
                <a href="#story" className="border-b-[3px] border-[#17110f] pb-0.5 font-dm text-[10px] font-black uppercase tracking-[0.12em] hover:bg-[#ffd43b]">
                  See the story
                </a>
              </div>
              <p className="mt-4 font-dm text-[9px] font-bold uppercase tracking-[0.1em] text-[#17110f]/50">
                No cape required · 30 seconds, tops · first 3 documents free
              </p>
            </div>

            <div className="relative z-10 flex items-center justify-center">
              <div className="relative w-full max-w-[420px] border-[4px] border-[#17110f] bg-[#ffd43b] p-4 shadow-[12px_12px_0_#17110f] sm:p-6">
                <div className="absolute -left-3 -top-4 z-20 rotate-[-6deg] border-[3px] border-[#17110f] bg-white px-2.5 py-1 font-dm text-[8px] font-black uppercase tracking-[0.12em] shadow-[3px_3px_0_#17110f]">
                  This month&apos;s menace
                </div>
                <div className="overflow-hidden border-[3px] border-[#17110f] bg-[#2fc6d6]/30 halftone-ink">
                  <div className="relative p-5 sm:p-7">
                    <DocMonster />
                    <Bubble className="absolute -right-2 bottom-2 z-20 max-w-[150px] rotate-2 bg-white text-[10px]">
                      I only needed 4 pages?!
                    </Bubble>
                    <Burst className="absolute -left-4 -top-4 z-20 size-24 rotate-[-10deg]">
                      <span className="font-lilita text-[11px] uppercase leading-tight">74 pages<br />4 minutes</span>
                    </Burst>
                  </div>
                </div>
                <div className="mt-3 flex items-center justify-between gap-2">
                  <div className="flex h-7 items-end gap-[2px]" aria-hidden="true">
                    {[3, 7, 4, 8, 2, 6, 9, 3, 7, 4, 8, 2, 5, 9, 3, 6, 8, 2, 7, 4, 9, 3].map((h, i) => (
                      <span key={i} className="w-[2px] bg-[#17110f]" style={{ height: `${h * 3}px` }} />
                    ))}
                  </div>
                  <span className="font-dm text-[7px] font-black uppercase tracking-[0.14em]">No. 01 · $0.00</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="overflow-hidden border-b-[4px] border-[#17110f] bg-[#17110f] py-2 text-[#ffd43b]">
          <div className="marquee-track marquee-track--fast items-center gap-8 font-lilita text-lg uppercase tracking-wide">
            {[...Array(2)].map((_, half) => (
              <div key={half} className="flex items-center gap-8">
                {["POW!", "SUMMARY!", "HINTS!", "QUOTES!", "INSIGHTS!", "NO FILLER!", "READ LESS!", "KEEP MORE!"].map((w, i) => (
                  <span key={`${half}-${i}`} className="flex items-center gap-8 whitespace-nowrap">
                    {w}
                    <Sparkles className="size-4 text-[#f1447e]" strokeWidth={3} aria-hidden="true" />
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>

        <section id="story" className="border-b-[4px] border-[#17110f]">
          <div className="mx-auto max-w-[1240px] px-4 py-14 sm:px-8 lg:py-20">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <h2 className="font-lilita text-[clamp(2.2rem,4.4vw,3.8rem)] uppercase leading-none tracking-tight">
                Meanwhile, in your downloads folder…
              </h2>
              <span className="border-[3px] border-[#17110f] bg-[#2fc6d6] px-3 py-1.5 font-dm text-[8px] font-black uppercase tracking-[0.14em] shadow-[3px_3px_0_#17110f]">
                A three-panel origin story
              </span>
            </div>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {panels.map((p) => (
                <StoryPanel key={p.caption} panel={p} />
              ))}
            </div>
            <p className="mt-6 text-center font-dm text-[10px] font-black uppercase tracking-[0.14em] text-[#17110f]/50">
              Reader discretion advised. The document does not survive intact.
            </p>
          </div>
        </section>

        <section className="border-b-[4px] border-[#17110f] bg-[#2fc6d6]">
          <div className="mx-auto max-w-[1240px] px-4 py-14 sm:px-8 lg:py-20">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="font-dm text-[9px] font-black uppercase tracking-[0.18em]">Inside this issue</p>
                <h2 className="mt-2 font-lilita text-[clamp(2.2rem,4.4vw,3.8rem)] uppercase leading-none tracking-tight">
                  Four superpowers. One PDF.
                </h2>
              </div>
              <p className="max-w-xs font-dm text-sm font-medium leading-snug">
                Every upload comes back with the whole kit. Turn off what you do not need. Keep what
                you do.
              </p>
            </div>
            <div className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {features.map((f, i) => (
                <article
                  key={f.name}
                  className={`${f.color} relative border-[4px] border-[#17110f] p-4 shadow-[6px_6px_0_#17110f] transition-transform hover:-translate-y-1 hover:rotate-[-1deg] ${
                    i % 2 === 0 ? "rotate-[0.7deg]" : "rotate-[-0.7deg]"
                  }`}
                >
                  <div className="flex items-start justify-between gap-2">
                    <span className="flex size-10 items-center justify-center border-[3px] border-[#17110f] bg-white font-lilita text-xl">
                      {f.letter}
                    </span>
                    <span className="border-2 border-[#17110f] bg-white px-1.5 py-0.5 font-dm text-[7px] font-black uppercase tracking-[0.1em]">
                      {f.stat}
                    </span>
                  </div>
                  <p className="mt-6 font-dm text-[8px] font-black uppercase tracking-[0.16em]">{f.kicker}</p>
                  <h3 className="mt-1 font-lilita text-2xl uppercase leading-none">{f.name}</h3>
                  <p className="mt-3 font-dm text-[12px] font-medium leading-snug">{f.body}</p>
                  <div className="mt-5 flex items-center justify-between border-t-2 border-[#17110f]/30 pt-2">
                    <span className="font-dm text-[7px] font-black uppercase tracking-[0.1em]">POWER: 100</span>
                    <span className="font-lilita text-xs">#{i + 1}</span>
                  </div>
                </article>
              ))}
            </div>
            <p className="mt-6 font-dm text-[9px] font-black uppercase tracking-[0.12em] text-[#17110f]/60">
              * Collect all four layers. No trading required.
            </p>
          </div>
        </section>

        <section className="border-b-[4px] border-[#17110f]">
          <div className="mx-auto grid max-w-[1240px] gap-10 px-4 py-14 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:py-20">
            <div>
              <p className="font-dm text-[9px] font-black uppercase tracking-[0.18em]">Spoiler alert</p>
              <h2 className="mt-2 font-lilita text-[clamp(2.4rem,4.8vw,4rem)] uppercase leading-[0.88] tracking-tight">
                The machine,
                <br />
                in action.
              </h2>
              <p className="mt-5 max-w-sm font-dm text-base font-medium leading-snug">
                This is the part where the 64-slide deck becomes a paragraph you can repeat at
                dinner. Push the big pink button. That is the whole tutorial.
              </p>
              <div className="mt-6 flex items-center gap-3">
                <Burst className="size-20 shrink-0">
                  <span className="font-lilita text-[10px] uppercase leading-tight">Try it<br />now!</span>
                </Burst>
                <p className="font-dm text-[9px] font-black uppercase leading-relaxed tracking-[0.1em] text-[#17110f]/55">
                  An interactive demo,
                  <br />
                  shockingly interactive.
                </p>
              </div>
            </div>
            <Machine />
          </div>
        </section>

        <section className="border-b-[4px] border-[#17110f] bg-[#f1447e]">
          <div className="mx-auto max-w-[1240px] px-4 py-14 sm:px-8 lg:py-20">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <h2 className="font-lilita text-[clamp(2.2rem,4.4vw,3.8rem)] uppercase leading-none tracking-tight text-white">
                Letters to the editor
              </h2>
              <span className="border-[3px] border-[#17110f] bg-white px-3 py-1.5 font-dm text-[8px] font-black uppercase tracking-[0.12em]">
                Unsolicited. Unpaid. Unusually honest.
              </span>
            </div>
            <div className="mt-9 grid gap-6 md:grid-cols-3">
              {[
                {
                  q: "I stopped pretending I would read the whole thing. Now I read the useful part and get on with my life.",
                  who: "Maya, grad student",
                },
                {
                  q: "Every quote has a page number. It is the first summary tool I trust in a meeting.",
                  who: "Dev, product manager",
                },
                {
                  q: "The hints are like a friend whispering the answer during the exam, except the exam is a contract.",
                  who: "Noor, freelance designer",
                },
              ].map((t, i) => (
                <div key={t.who} className="relative">
                  <Bubble className={`${i === 1 ? "rotate-1" : "-rotate-1"} bg-white`}>
                    <p className="text-sm font-semibold leading-snug">&ldquo;{t.q}&rdquo;</p>
                    <p className="mt-2 text-[8px] font-black uppercase tracking-[0.1em] text-[#17110f]/50">{t.who}</p>
                  </Bubble>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="coupon" className="relative overflow-hidden border-b-[4px] border-[#17110f]">
          <div className="pointer-events-none absolute inset-0 halftone text-[#17110f]/[0.06]" aria-hidden="true" />
          <div className="relative mx-auto max-w-[1240px] px-4 py-14 sm:px-8 lg:py-20">
            <div className="mx-auto max-w-3xl">
              <div className="relative border-[4px] border-dashed border-[#17110f] bg-white p-6 shadow-[10px_10px_0_#17110f] sm:p-10">
                <div className="absolute -left-5 top-1/2 hidden -translate-y-1/2 sm:block">
                  <Scissors className="size-8 rotate-90 text-[#17110f]" strokeWidth={2.5} />
                </div>
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rotate-[-2deg] border-[3px] border-[#17110f] bg-[#ffd43b] px-4 py-1 font-dm text-[9px] font-black uppercase tracking-[0.16em]">
                  Official subscription coupon
                </div>
                <div className="grid gap-6 pt-3 sm:grid-cols-[1.2fr_1fr] sm:items-center">
                  <div>
                    <p className="font-dm text-[9px] font-black uppercase tracking-[0.16em] text-[#f1447e]">Redeem immediately</p>
                    <h2 className="mt-2 font-lilita text-4xl uppercase leading-[0.9] sm:text-5xl">
                      Read more.
                      <br />
                      Pay less.
                    </h2>
                    <p className="mt-4 max-w-sm font-dm text-sm font-medium leading-snug">
                      Three documents free, no account. Then $8 a month for all the reading you can
                      honestly fit in. Cancel whenever.
                    </p>
                  </div>
                  <div className="border-[3px] border-[#17110f] bg-[#fff6de] p-5">
                    <div className="flex items-end justify-between border-b-2 border-[#17110f] pb-2">
                      <span className="font-lilita text-xl uppercase">Reader Club</span>
                      <span className="font-lilita text-3xl">$8<span className="text-sm">/mo</span></span>
                    </div>
                    <ul className="mt-3 space-y-1.5 font-dm text-[10px] font-bold uppercase tracking-[0.06em]">
                      {["Unlimited PDFs", "All four layers", "50-page starter, 500-page max", "Cancel in one click"].map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <Check className="mt-0.5 size-3 shrink-0 text-[#f1447e]" strokeWidth={4} />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <a
                      href="#coupon"
                      className="mt-4 flex items-center justify-center gap-2 border-[3px] border-[#17110f] bg-[#ffd43b] px-4 py-2.5 font-lilita text-sm uppercase shadow-[3px_3px_0_#17110f] transition-transform hover:-translate-y-0.5"
                    >
                      Start free
                      <ArrowUpRight className="size-4" strokeWidth={3} />
                    </a>
                  </div>
                </div>
                <p className="mt-6 border-t-2 border-dashed border-[#17110f]/30 pt-3 font-dm text-[7px] font-bold uppercase leading-relaxed tracking-[0.08em] text-[#17110f]/45">
                  No fine print, except this sentence. Ratio Reader is a fictional product. The pages
                  are fake. The reading fatigue is real.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#17110f]">
          <div className="mx-auto max-w-[1240px] px-4 py-16 text-center sm:px-8 lg:py-24">
            <p className="font-dm text-[9px] font-black uppercase tracking-[0.18em] text-[#2fc6d6]">To be continued…</p>
            <h2 className="mx-auto mt-4 max-w-4xl font-lilita text-[clamp(2.8rem,6.4vw,5.6rem)] uppercase leading-[0.86] text-[#fff6de]">
              The reading list
              <br />
              never sleeps.
              <br />
              <span className="text-[#ffd43b]">Neither do we.</span>
            </h2>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="#coupon"
                className="flex items-center gap-3 border-[4px] border-[#fff6de] bg-[#f1447e] px-7 py-4 font-lilita text-base uppercase tracking-wide text-white shadow-[6px_6px_0_#ffd43b] transition-transform hover:-translate-y-1"
              >
                Upload your villain
                <ArrowUpRight className="size-5" strokeWidth={3} />
              </a>
              <span className="font-dm text-[9px] font-black uppercase tracking-[0.12em] text-[#fff6de]/50">Free for your first three issues</span>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t-[4px] border-[#fff6de]/20 bg-[#17110f] text-[#fff6de]">
        <div className="mx-auto flex max-w-[1240px] flex-col gap-5 px-4 py-6 sm:px-8 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <span className="flex size-8 items-center justify-center border-2 border-[#ffd43b] bg-[#f1447e] font-lilita text-sm text-white">RR</span>
            <div>
              <p className="font-lilita text-base uppercase">Ratio Reader Comics Group</p>
              <p className="font-dm text-[7px] font-black uppercase tracking-[0.14em] text-[#fff6de]/40">Read less. Keep more. Fight noise.</p>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 font-dm text-[8px] font-black uppercase tracking-[0.12em] text-[#fff6de]/60">
            <span className="text-[#fff6de]/30">Editions</span>
            {["1", "2", "3", "4", "5"].map((n) => (
              <Link key={n} to={`/${n}`} className={n === "4" ? "text-[#ffd43b]" : "hover:text-[#ffd43b]"}>
                {n.padStart(2, "0")}
              </Link>
            ))}
            <Link to="/" className="underline underline-offset-4 hover:text-[#ffd43b]">Index</Link>
          </div>
          <p className="font-dm text-[7px] font-black uppercase tracking-[0.12em] text-[#fff6de]/25">Issue #01 · Printed on the internet</p>
        </div>
      </footer>
    </div>
  );
}
