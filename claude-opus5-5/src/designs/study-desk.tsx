import { useState, type CSSProperties, type ReactNode } from "react";
import { useReveal } from "@/lib/use-reveal";

const HL = {
  yellow: "#ffe45c",
  pink: "#ff9fcf",
  green: "#a6f28f",
  blue: "#94d7ff",
};

function Mark({ color, children, delay = 0 }: { color: string; children: ReactNode; delay?: number }) {
  return (
    <span
      className="swipe box-decoration-clone px-1"
      style={{
        backgroundImage: `linear-gradient(100deg, transparent 0.4em, ${color} 0.5em, ${color} calc(100% - 0.3em), transparent calc(100% - 0.2em))`,
        animationDelay: `${delay}ms`,
      }}
    >
      {children}
    </span>
  );
}

function Tape({ className = "" }: { className?: string }) {
  return (
    <span
      className={`absolute h-7 w-24 bg-[#f4ecd4]/80 shadow-sm backdrop-blur-[1px] ${className}`}
      style={{ clipPath: "polygon(3% 0, 97% 4%, 100% 50%, 96% 100%, 2% 96%, 0 50%)" }}
    />
  );
}

function Scribble({ className = "", d }: { className?: string; d: string }) {
  return (
    <svg viewBox="0 0 200 100" className={className} fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
      <path d={d} pathLength={1} className="draw" />
    </svg>
  );
}

const STICKIES = [
  {
    color: HL.yellow,
    rot: -3,
    title: "Summary",
    scrawl: "the gist!!",
    body: "The whole chapter on one note. Ratio keeps the author’s order so the argument still flows.",
  },
  {
    color: HL.pink,
    rot: 2.5,
    title: "Hints",
    scrawl: "read this first →",
    body: "Little nudges like “skip ahead to Fig. 4” or “this term means X here.” They cover the parts you’d otherwise ask a TA about.",
  },
  {
    color: HL.green,
    rot: -1.5,
    title: "Quotes",
    scrawl: "for the essay",
    body: "The exact sentences worth citing, clipped with their page numbers. No more hunting through 80 pages the night before.",
  },
  {
    color: HL.blue,
    rot: 3,
    title: "Insights",
    scrawl: "ohhh.",
    body: "The connections between chapters that make it click, including the ones the author assumes you already know.",
  },
];

const CARDS = [
  {
    q: "Why does the chapter keep bringing up water if photosynthesis is about light?",
    a: "Water is where the oxygen comes from. Once that clicks, the light reactions in §8.2 make sense.",
  },
  {
    q: "Lost in the Calvin cycle diagram?",
    a: "Follow only the carbon atoms. Skip the ATP arrows on your first read; they’re just bookkeeping.",
  },
  {
    q: "What’s the one thing the exam will ask?",
    a: "C3 vs. C4 plants. Three pages of detail, but only one idea: C4 plants avoid wasting energy in the heat.",
  },
];

const CLIPPINGS = [
  { text: "Light is not the fuel; it is the spark.", page: "p. 212", rot: -2 },
  { text: "Every breath you take was, a few weeks ago, part of a leaf.", page: "p. 219", rot: 1.5 },
  { text: "The Calvin cycle is patient; it does not need the sun to be watching.", page: "p. 231", rot: -1 },
];

function FlipCard({ q, a, i }: { q: string; a: string; i: number }) {
  const [flipped, setFlipped] = useState(false);
  return (
    <button
      onClick={() => setFlipped((f) => !f)}
      className="reveal group h-72 w-full text-left [perspective:1200px]"
      style={{ transitionDelay: `${i * 120}ms` }}
      aria-label={flipped ? "Show hint question" : "Reveal hint"}
    >
      <div
        className="relative h-full w-full transition-transform duration-700 [transform-style:preserve-3d]"
        style={{ transform: `rotate(${(i - 1) * 2}deg) ${flipped ? "rotateY(180deg)" : ""}` }}
      >
        <div
          className="absolute inset-0 flex flex-col justify-between rounded-sm bg-white p-7 shadow-[0_14px_30px_-12px_rgba(40,30,10,0.35)] [backface-visibility:hidden]"
          style={{ backgroundImage: "repeating-linear-gradient(transparent 0 31px, #cfe3f5 31px 32px)", backgroundPositionY: "56px" }}
        >
          <div className="flex items-center justify-between">
            <span className="font-courier text-xs tracking-widest text-[#e0412c] uppercase">Hint card #{i + 1}</span>
            <span className="font-caveat text-lg text-[#1d2b53]/60">tap to flip ↻</span>
          </div>
          <p className="font-caveat text-[1.9rem] leading-[1.05] text-[#1d2b53]">{q}</p>
          <span className="h-1 w-10 bg-[#e0412c]" />
        </div>
        <div className="absolute inset-0 flex flex-col justify-between rounded-sm bg-[#1d2b53] p-7 text-[#f6f1e4] shadow-[0_14px_30px_-12px_rgba(40,30,10,0.35)] [backface-visibility:hidden] [transform:rotateY(180deg)]">
          <span className="font-courier text-xs tracking-widest text-[#ffe45c] uppercase">Ratio says</span>
          <p className="font-instrument text-2xl leading-snug">{a}</p>
          <span className="font-caveat text-lg text-[#ffe45c]">→ Biology, ch. 8</span>
        </div>
      </div>
    </button>
  );
}

function BeforeAfter() {
  const [after, setAfter] = useState(true);
  return (
    <div className="reveal mx-auto max-w-5xl">
      <div className="mb-10 flex items-center justify-center gap-5 font-caveat text-3xl">
        <button onClick={() => setAfter(false)} className={after ? "text-[#1d2b53]/40" : "text-[#e0412c]"}>
          without Ratio
        </button>
        <button
          onClick={() => setAfter((v) => !v)}
          role="switch"
          aria-checked={after}
          aria-label="Toggle between without Ratio and with Ratio"
          className="relative h-10 w-20 rounded-full border-[3px] border-[#1d2b53] bg-white"
        >
          <span
            className="absolute top-1 h-6 w-6 rounded-full transition-all duration-500"
            style={{ left: after ? "calc(100% - 1.75rem)" : "0.25rem", background: after ? HL.green : "#e0412c" }}
          />
        </button>
        <button onClick={() => setAfter(true)} className={after ? "text-[#1d2b53]" : "text-[#1d2b53]/40"}>
          with Ratio
        </button>
      </div>

      <div className="relative h-[420px]">
        <div className={`absolute inset-0 transition-all duration-700 ${after ? "pointer-events-none scale-95 opacity-0" : "opacity-100"}`}>
          {[
            ["Ch8_photosynthesis_FINAL(2).pdf", "left-[2%] top-[4%]", -8],
            ["lecture_slides_wk6.pdf", "left-[30%] top-[16%]", 5],
            ["reddit: calvin cycle ELI5??", "left-[55%] top-[2%]", -4],
            ["youtube — 47 min", "left-[8%] top-[48%]", 6],
            ["my_notes (unreadable).jpg", "left-[40%] top-[52%]", -6],
            ["wikipedia: C4 carbon fixation", "left-[64%] top-[38%]", 9],
          ].map(([t, pos, r]) => (
            <div
              key={t as string}
              className={`absolute ${pos} w-60 bg-white p-4 font-courier text-sm text-[#1d2b53] shadow-lg`}
              style={{ transform: `rotate(${r}deg)` }}
            >
              <div className="mb-3 h-2 w-3/4 bg-[#1d2b53]/15" />
              <div className="mb-2 h-2 w-full bg-[#1d2b53]/10" />
              <div className="mb-4 h-2 w-2/3 bg-[#1d2b53]/10" />
              {t}
            </div>
          ))}
          <div className="absolute right-[6%] bottom-[6%] -rotate-6 font-caveat text-4xl text-[#e0412c]">3 hrs later… still confused</div>
        </div>

        <div className={`absolute inset-0 flex items-center justify-center transition-all duration-700 ${after ? "opacity-100" : "pointer-events-none scale-105 opacity-0"}`}>
          <div className="relative w-full max-w-xl -rotate-1 bg-white p-8 shadow-[0_24px_50px_-20px_rgba(40,30,10,0.45)] md:p-10">
            <Tape className="-top-3 left-1/2 -translate-x-1/2 rotate-2" />
            <div className="border-b-2 border-[#e0412c] pb-2 font-courier text-xs tracking-widest text-[#e0412c] uppercase">Ch. 8 — Photosynthesis · 38 pp → 1 card</div>
            <ul className="mt-5 space-y-3 font-instrument text-xl leading-snug text-[#1d2b53]">
              <li>
                <Mark color={HL.yellow}>Light</Mark> splits water, releasing O₂ and charging ATP/NADPH.
              </li>
              <li>
                The <Mark color={HL.pink}>Calvin cycle</Mark> spends that charge to build sugar from CO₂.
              </li>
              <li>
                <Mark color={HL.green}>C4 plants</Mark> add a CO₂ pump so they don’t waste energy in heat.
              </li>
            </ul>
            <div className="mt-6 font-caveat text-2xl text-[#1d2b53]/70">+ 6 hint cards · 4 quotes · 2 insights</div>
            <div className="absolute -right-4 -bottom-6 rotate-12 font-caveat text-4xl text-[#e0412c]">9 sec ✓</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function StudyDesk() {
  useReveal();

  const paper: CSSProperties = {
    backgroundColor: "#f6f1e4",
    backgroundImage: "linear-gradient(#e5dcc6 1px, transparent 1px), linear-gradient(90deg, #e5dcc6 1px, transparent 1px)",
    backgroundSize: "28px 28px",
  };

  return (
    <div className="min-h-screen overflow-x-hidden font-instrument text-[#1d2b53] selection:bg-[#ffe45c]" style={paper}>
      <header className="mx-auto flex max-w-7xl items-center justify-between px-5 py-6 md:px-10">
        <a href="#" className="flex items-center gap-2">
          <span className="grid h-10 w-10 -rotate-6 place-items-center bg-[#ffe45c] font-caveat text-2xl font-bold shadow-sm">R</span>
          <span className="font-instrument text-2xl">
            Ratio <em>Reader</em>
          </span>
        </a>
        <nav className="hidden gap-8 font-caveat text-2xl md:flex">
          <a href="#pile" className="hover:text-[#e0412c]">what you get</a>
          <a href="#cards" className="hover:text-[#e0412c]">hint cards</a>
          <a href="#tags" className="hover:text-[#e0412c]">price</a>
        </nav>
        <a href="#start" className="rotate-2 border-2 border-[#1d2b53] bg-white px-4 py-1.5 font-caveat text-xl shadow-[3px_3px_0_#1d2b53] transition-transform hover:rotate-0">
          try it free
        </a>
      </header>

      <section className="mx-auto grid max-w-7xl items-center gap-16 px-5 pt-10 pb-24 md:px-10 lg:grid-cols-[1.1fr_1fr]">
        <div className="relative">
          <p className="font-courier text-sm tracking-[0.2em] text-[#e0412c] uppercase">For students, researchers & the chronically behind</p>
          <h1 className="mt-5 text-[3.8rem] leading-[0.95] sm:text-7xl lg:text-[6.2rem]">
            Your reading,
            <br />
            <em>
              <Mark color={HL.yellow} delay={500}>
                already
              </Mark>{" "}
              <Mark color={HL.yellow} delay={900}>
                highlighted.
              </Mark>
            </em>
          </h1>
          <div className="pointer-events-none absolute top-[62%] -right-2 hidden w-44 rotate-6 text-[#e0412c] sm:block lg:-right-10">
            <p className="font-caveat text-3xl leading-none">took 9 seconds!</p>
            <Scribble className="-mt-2 h-16 w-32 -scale-x-100" d="M10,20 C60,10 120,30 150,70 M150,70 L130,62 M150,70 L152,50" />
          </div>
          <p className="mt-8 max-w-lg font-instrument text-2xl leading-snug text-[#1d2b53]/80">
            Drop in any PDF and Ratio gives it back annotated, the way your smartest classmate would: a summary, hints
            where you’d get stuck, quotes worth citing, and insights that make it click.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-6">
            <a
              href="#start"
              className="-rotate-2 bg-[#1d2b53] px-8 py-4 font-caveat text-3xl text-[#f6f1e4] shadow-[5px_5px_0_#ffe45c] transition-transform hover:rotate-0"
            >
              Drop in a PDF →
            </a>
            <span className="font-caveat text-2xl text-[#1d2b53]/60">no card, no catch</span>
          </div>
        </div>

        <div className="relative mx-auto h-[520px] w-full max-w-[480px]">
          <div className="absolute inset-x-6 top-6 bottom-0 rotate-6 bg-white/70 shadow-md" />
          <div className="absolute inset-x-3 top-3 bottom-3 -rotate-3 bg-white/85 shadow-md" />
          <div className="absolute inset-0 rotate-1 bg-white p-8 shadow-[0_30px_60px_-25px_rgba(40,30,10,0.5)]">
            <div className="flex justify-between font-courier text-[0.65rem] tracking-widest text-[#1d2b53]/50 uppercase">
              <span>Biology 101 · ch. 8</span>
              <span>p. 212</span>
            </div>
            <h3 className="mt-4 font-instrument text-3xl">8.1 Capturing light</h3>
            <div className="mt-4 space-y-2 font-instrument text-[0.95rem] leading-relaxed text-[#1d2b53]/75">
              <p>
                In the thylakoid membranes, pigment complexes absorb photons across the visible spectrum.{" "}
                <Mark color={HL.yellow} delay={1400}>
                  The absorbed energy is used to split water
                </Mark>
                , which releases oxygen as a by-product and supplies electrons to the transport chain.
              </p>
              <p>
                Much of the historical debate concerned the source of that oxygen. Isotope-labeling experiments in 1941
                settled it:{" "}
                <Mark color={HL.pink} delay={1900}>
                  the oxygen comes from water, not CO₂
                </Mark>
                .
              </p>
              <p className="opacity-60">
                The chemiosmotic gradient then drives ATP synthase, a rotary enzyme whose mechanism is discussed in
                Appendix C…
              </p>
            </div>
            <div className="mt-5 space-y-2">
              {[92, 80, 88, 60].map((w) => (
                <div key={w} className="h-2 bg-[#1d2b53]/10" style={{ width: `${w}%` }} />
              ))}
            </div>
          </div>

          <div
            className="absolute -top-6 -right-4 w-52 p-4 shadow-[0_12px_24px_-10px_rgba(40,30,10,0.45)] sm:-right-12"
            style={{ background: HL.pink, transform: "rotate(7deg)", animation: "float-slow 6s ease-in-out infinite", ["--r" as string]: "7deg" }}
          >
            <p className="font-courier text-[0.6rem] tracking-widest uppercase">Hint</p>
            <p className="mt-1 font-caveat text-2xl leading-none">This 1941 bit is on every exam. Know it cold.</p>
          </div>
          <div
            className="absolute -bottom-10 -left-4 w-60 p-4 shadow-[0_12px_24px_-10px_rgba(40,30,10,0.45)] sm:-left-14"
            style={{ background: HL.yellow, transform: "rotate(-5deg)", animation: "float-slow 7s ease-in-out infinite 1s", ["--r" as string]: "-5deg" }}
          >
            <p className="font-courier text-[0.6rem] tracking-widest uppercase">Summary</p>
            <p className="mt-1 font-caveat text-2xl leading-none">Light splits water → O₂ out, energy stored for the Calvin cycle.</p>
          </div>
          <div className="absolute top-20 -left-3 h-16 w-5 rounded-full border-[3px] border-[#8a8f99]" />
        </div>
      </section>

      <section id="pile" className="mx-auto max-w-7xl px-5 py-24 md:px-10">
        <div className="reveal mb-16 max-w-2xl">
          <p className="font-caveat text-3xl text-[#e0412c]">what lands on your desk:</p>
          <h2 className="mt-2 text-5xl leading-none md:text-7xl">
            Four notes you’d have <em>written yourself,</em> if you had the time.
          </h2>
        </div>
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {STICKIES.map((s, i) => (
            <div
              key={s.title}
              className="reveal relative aspect-square rotate-(--rot) p-6 shadow-[0_18px_30px_-16px_rgba(40,30,10,0.55)] transition-[opacity,transform,rotate,scale] duration-300 hover:z-10 hover:rotate-0 hover:scale-105"
              style={{ background: s.color, ["--rot" as string]: `${s.rot}deg`, transitionDelay: `${i * 90}ms` }}
            >
              <Tape className="-top-3 left-1/2 -translate-x-1/2 -rotate-3" />
              <div className="flex items-baseline justify-between">
                <h3 className="font-instrument text-4xl">{s.title}</h3>
                <span className="font-courier text-xs">0{i + 1}</span>
              </div>
              <p className="mt-4 font-courier text-[0.92rem] leading-snug">{s.body}</p>
              <p className="absolute right-5 bottom-4 -rotate-3 font-caveat text-2xl text-[#e0412c]">{s.scrawl}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="cards" className="border-y-2 border-dashed border-[#1d2b53]/25 bg-[#efe6cf]/70 px-5 py-24 md:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="reveal mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <h2 className="max-w-2xl text-5xl leading-none md:text-7xl">
              Hints that make you <Mark color={HL.pink}>think</Mark>, not just skim.
            </h2>
            <p className="max-w-sm font-courier text-sm leading-relaxed">
              Ratio turns the hard parts into hint cards. Try answering first, then flip. Retrieval beats rereading, and
              the research on that is solid.
            </p>
          </div>
          <div className="grid gap-10 md:grid-cols-3">
            {CARDS.map((c, i) => (
              <FlipCard key={c.q} q={c.q} a={c.a} i={i} />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-24 md:px-10">
        <div className="reveal mb-16 text-center">
          <p className="font-caveat text-3xl text-[#e0412c]">clipped for your essay</p>
          <h2 className="mt-2 text-5xl md:text-7xl">
            Quotes, <em>with the page number.</em>
          </h2>
        </div>
        <div className="grid gap-10 md:grid-cols-3">
          {CLIPPINGS.map((c, i) => (
            <figure
              key={c.page}
              className="reveal relative bg-[#fbf8ef] px-8 pt-10 pb-8 shadow-[0_16px_30px_-18px_rgba(40,30,10,0.6)]"
              style={{
                rotate: `${c.rot}deg`,
                clipPath: "polygon(0 2%, 6% 0, 14% 3%, 25% 0, 38% 2%, 52% 0, 66% 3%, 80% 0, 92% 2%, 100% 0, 99% 50%, 100% 98%, 88% 100%, 72% 97%, 55% 100%, 40% 98%, 24% 100%, 10% 97%, 0 100%, 1% 50%)",
                transitionDelay: `${i * 100}ms`,
              }}
            >
              <span className="absolute top-3 left-1/2 h-4 w-4 -translate-x-1/2 rounded-full bg-[#e0412c] shadow-[0_2px_0_rgba(0,0,0,0.25)]" />
              <blockquote className="font-instrument text-3xl leading-tight italic">“{c.text}”</blockquote>
              <figcaption className="mt-5 flex justify-between font-courier text-xs tracking-widest uppercase">
                <span>Biology 101</span>
                <span className="font-caveat text-2xl tracking-normal text-[#e0412c] normal-case">{c.page}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="px-5 py-24 md:px-10">
        <div className="reveal mb-6 text-center">
          <h2 className="text-5xl md:text-7xl">
            The same chapter, <em>twice.</em>
          </h2>
        </div>
        <BeforeAfter />
      </section>

      <section className="mx-auto max-w-5xl px-5 py-24 md:px-10">
        <div
          className="reveal relative bg-white px-8 py-12 shadow-[0_24px_50px_-28px_rgba(40,30,10,0.5)] md:px-20"
          style={{ backgroundImage: "repeating-linear-gradient(transparent 0 43px, #cfe3f5 43px 44px)", backgroundPositionY: "90px" }}
        >
          <span className="absolute top-0 bottom-0 left-6 w-px bg-[#e0412c]/60 md:left-14" />
          <h2 className="font-caveat text-5xl">How it works (it’s 3 steps, promise)</h2>
          <ol className="mt-8 space-y-[1.1rem] font-caveat text-[1.9rem] leading-[44px]">
            <li>
              <span className="text-[#e0412c]">1.</span> Drag in a PDF: textbook, paper, contract, scanned notes, anything.
            </li>
            <li>
              <span className="text-[#e0412c]">2.</span> Ratio reads every page, charts and footnotes included, in seconds.
            </li>
            <li>
              <span className="text-[#e0412c]">3.</span> Get your summary, hint cards, quotes & insights, all linked to the page.
            </li>
          </ol>
          <p className="mt-6 text-right font-caveat text-2xl text-[#1d2b53]/60">— then go outside. you earned it.</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 md:px-10">
        <div className="grid gap-8 md:grid-cols-3">
          {[
            ["“Went from dreading 60-page readings to actually looking forward to the hint cards.”", "Priya, 2nd-yr med", -2],
            ["“It found the one footnote my professor built the entire exam around.”", "Jonah, law school", 1.5],
            ["“I use it for vendor contracts. The ‘red flags’ insight alone paid for the year.”", "Mara, ops lead", -1],
          ].map(([q, who, r], i) => (
            <div
              key={who as string}
              className="reveal bg-white p-7 shadow-[0_14px_26px_-16px_rgba(40,30,10,0.55)]"
              style={{ rotate: `${r}deg`, transitionDelay: `${i * 100}ms` }}
            >
              <p className="font-caveat text-[1.75rem] leading-tight">{q}</p>
              <p className="mt-4 font-courier text-xs tracking-widest text-[#e0412c] uppercase">— {who}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="tags" className="mx-auto max-w-6xl px-5 py-24 md:px-10">
        <div className="reveal mb-16 text-center">
          <h2 className="text-5xl md:text-7xl">
            Priced like <em>pocket money.</em>
          </h2>
        </div>
        <div className="grid gap-12 md:grid-cols-3">
          {[
            ["Free", "$0", "5 PDFs a month, summary + quotes", "#fff"],
            ["Student", "$5", "Unlimited PDFs, hint cards, insights, and exports", HL.yellow],
            ["Pro", "$12", "Everything, plus shared folders & 1,000-page PDFs", "#fff"],
          ].map(([name, price, desc, bg], i) => (
            <div key={name} className="reveal relative mx-auto w-full max-w-xs" style={{ transitionDelay: `${i * 110}ms` }}>
              <div className="absolute -top-12 left-1/2 h-14 w-px origin-bottom -translate-x-1/2 rotate-12 bg-[#1d2b53]/50" />
              <div
                className="relative rotate-(--rot) px-8 pt-14 pb-10 text-center shadow-[0_18px_30px_-18px_rgba(40,30,10,0.55)] transition-[rotate] duration-300 hover:-rotate-2"
                style={{ background: bg, clipPath: "polygon(50% 0, 100% 16%, 100% 100%, 0 100%, 0 16%)", ["--rot" as string]: `${(i - 1) * 3}deg` }}
              >
                <span className="absolute top-7 left-1/2 h-4 w-4 -translate-x-1/2 rounded-full border-2 border-[#1d2b53]/50 bg-[#f6f1e4]" />
                <p className="font-courier text-xs tracking-[0.3em] uppercase">{name}</p>
                <p className="mt-2 font-instrument text-7xl">{price}</p>
                <p className="font-caveat text-xl">per month</p>
                <p className="mt-5 font-courier text-sm leading-snug">{desc}</p>
                {i === 1 && <p className="mt-4 rotate-[-4deg] font-caveat text-2xl text-[#e0412c]">← most people pick this</p>}
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer id="start" className="px-5 pt-16 pb-20 text-center md:px-10">
        <h2 className="reveal mx-auto max-w-4xl text-6xl leading-[0.95] md:text-8xl">
          Close the 40 tabs.
          <br />
          <em>
            <Mark color={HL.green}>Open one summary.</Mark>
          </em>
        </h2>
        <label className="reveal mx-auto mt-14 flex max-w-lg cursor-pointer flex-col items-center gap-2 border-[3px] border-dashed border-[#1d2b53]/60 bg-white/60 px-8 py-10 transition-all hover:-rotate-1 hover:bg-white">
          <input type="file" accept="application/pdf" className="sr-only" />
          <span className="font-caveat text-4xl">drop your PDF on the pile</span>
          <span className="font-courier text-xs tracking-widest text-[#1d2b53]/60 uppercase">or click to choose a file</span>
        </label>
        <p className="mt-20 font-courier text-xs tracking-widest text-[#1d2b53]/50 uppercase">© 2026 Ratio Reader · made for people with too much to read</p>
      </footer>
    </div>
  );
}
