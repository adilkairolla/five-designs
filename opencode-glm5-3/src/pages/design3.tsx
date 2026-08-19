import { useState } from "react";
import { useCountUp, useInView } from "../lib/hooks";

const POP = {
  orange: "bg-[#FF5C00] text-white",
  blue: "bg-[#4D9DE0] text-black",
  green: "bg-[#3DDC97] text-black",
  pink: "bg-[#FF90E8] text-black",
  yellow: "bg-[#FFDE59] text-black",
  black: "bg-black text-[#FFDE59]",
};

function HardButton({
  children,
  href,
  className = "",
  bg = "bg-[#FFDE59]",
}: {
  children: React.ReactNode;
  href: string;
  className?: string;
  bg?: string;
}) {
  return (
    <a
      href={href}
      className={`inline-block border-[3px] border-black ${bg} px-7 py-3.5 font-grotesk text-base font-bold shadow-[6px_6px_0_#111] transition-all duration-150 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[8px_8px_0_#111] active:translate-x-1.5 active:translate-y-1.5 active:shadow-none ${className}`}
    >
      {children}
    </a>
  );
}

function StarBadge() {
  return (
    <div className="absolute -top-8 -right-4 hidden h-32 w-32 animate-spin-slow sm:block md:right-8">
      <div
        className="flex h-full w-full flex-col items-center justify-center bg-[#FF5C00] text-center text-black"
        style={{
          clipPath:
            "polygon(50% 0%, 61% 12%, 75% 5%, 77% 20%, 93% 18%, 88% 33%, 100% 42%, 88% 51%, 95% 66%, 79% 66%, 79% 82%, 64% 76%, 56% 91%, 44% 78%, 30% 87%, 27% 71%, 10% 72%, 16% 57%, 2% 48%, 15% 39%, 8% 24%, 24% 24%, 23% 8%, 38% 13%)",
        }}
      >
        <span className="rotate-[-12deg] font-archivo text-sm leading-tight tracking-tight">
          PDF IN
          <br />
          WISDOM
          <br />
          OUT!
        </span>
      </div>
    </div>
  );
}

function ShrinkOMeter() {
  const [pages, setPages] = useState(120);
  const saved = pages * 4.2;
  const brief = Math.max(1, Math.round(pages / 40));
  const { ref, inView } = useInView<HTMLDivElement>(0.3);
  const total = useCountUp(9_840_000, 2000, inView);

  return (
    <div ref={ref} className="border-[3px] border-black bg-white p-7 shadow-[10px_10px_0_#111] sm:p-10">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h3 className="font-archivo text-2xl tracking-tight sm:text-3xl">SHRINK-O-METER™</h3>
        <span className="border-2 border-black bg-[#FF90E8] px-3 py-1 font-grotesk text-xs font-bold tracking-widest">
          DRAG IT
        </span>
      </div>
      <div className="mt-8 grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
        <div>
          <div className="flex items-end gap-3">
            <span className="font-archivo text-6xl leading-none tracking-tighter sm:text-8xl">{pages}</span>
            <span className="pb-2 font-grotesk text-lg font-bold">pages</span>
          </div>
          <input
            type="range"
            min={10}
            max={500}
            step={10}
            value={pages}
            onChange={(e) => setPages(Number(e.target.value))}
            className="mt-6 h-4 w-full cursor-pointer appearance-none rounded-none border-[3px] border-black bg-[#E8E3D5] [&::-moz-range-thumb]:h-8 [&::-moz-range-thumb]:w-6 [&::-moz-range-thumb]:rounded-none [&::-moz-range-thumb]:border-[3px] [&::-moz-range-thumb]:border-black [&::-moz-range-thumb]:bg-[#FF5C00] [&::-webkit-slider-thumb]:h-8 [&::-webkit-slider-thumb]:w-6 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-none [&::-webkit-slider-thumb]:border-[3px] [&::-webkit-slider-thumb]:border-black [&::-webkit-slider-thumb]:bg-[#FF5C00]"
            style={{
              background: `linear-gradient(to right, #3DDC97 0%, #3DDC97 ${((pages - 10) / 490) * 100}%, #E8E3D5 ${((pages - 10) / 490) * 100}%, #E8E3D5 100%)`,
            }}
          />
          <div className="mt-2 flex justify-between font-grotesk text-xs font-bold text-black/50">
            <span>10 PAGES</span>
            <span>500 PAGES (WHY?)</span>
          </div>
        </div>
        <div className="flex items-center gap-4 md:flex-col md:gap-2">
          <span className="font-archivo text-3xl">→</span>
          <div className="border-[3px] border-black bg-[#3DDC97] px-6 py-4 text-center shadow-[5px_5px_0_#111]">
            <p className="font-archivo text-4xl leading-none tracking-tighter">{brief}</p>
            <p className="mt-1 font-grotesk text-xs font-bold tracking-widest">PAGE BRIEF</p>
          </div>
        </div>
      </div>
      <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t-[3px] border-black pt-6">
        <p className="font-grotesk text-sm font-bold sm:text-base">
          YOU JUST SAVED <span className="bg-black px-2 py-0.5 text-[#FFDE59]">{saved.toFixed(0)} MINUTES</span> OF
          YOUR LIFE
        </p>
        <p className="font-grotesk text-xs font-bold text-black/50">
          {Math.round(total).toLocaleString()} minutes saved by everyone else
        </p>
      </div>
    </div>
  );
}

const steps = [
  {
    n: "01",
    title: "DROP THE PDF",
    body: "Any PDF. Reports, papers, contracts, that 300-page strategy deck. We've seen worse.",
    color: POP.blue,
    rotate: "md:-rotate-2",
  },
  {
    n: "02",
    title: "WE CRUSH IT",
    body: "Our engine ranks every paragraph by importance and squeezes out the fluff. 200 pages → 5.",
    color: POP.orange,
    rotate: "md:rotate-1 md:translate-y-6",
  },
  {
    n: "03",
    title: "YOU GET WISE",
    body: "A brief with the key stuff, quotes with page numbers, hints, and insights that connect the dots.",
    color: POP.green,
    rotate: "md:-rotate-1",
  },
];

const features = [
  { t: "INSTANT SUMMARY", d: "The whole argument in one paragraph. Actually one paragraph.", c: POP.yellow, r: "rotate-0" },
  { t: "QUOTES + PAGE CITES", d: "Pull the best lines without reading the book. Cite like you did.", c: POP.pink, r: "-rotate-1" },
  { t: "READING HINTS", d: "Start here, skip that. Your professor's margins, minus the professor.", c: POP.black, r: "rotate-1" },
  { t: "DEEP INSIGHTS", d: "Tensions, assumptions, contradictions — stuff the author didn't spell out.", c: POP.blue, r: "-rotate-1" },
  { t: "ANY PDF", d: "Scans, tables, footnotes, weird fonts. Bring your worst-behaved file.", c: POP.green, r: "rotate-1" },
  { t: "ZERO STORAGE", d: "Your file gets distilled and deleted. We keep the ratio, not the report.", c: POP.orange, r: "rotate-0" },
];

const testimonials = [
  { q: "I 'read' a 214-page annual report during my coffee. Cited it twice.", n: "DANA K.", role: "Analyst", r: "-rotate-2", c: "bg-[#FFDE59]" },
  { q: "The hints told me the appendix contradicted the body. THE APPENDIX.", n: "MARCUS T.", role: "PhD candidate", r: "rotate-1", c: "bg-[#3DDC97]" },
  { q: "My lawyer sends 90-page contracts. Now they're 2 pages. We both win.", n: "PRIYA S.", role: "Founder", r: "rotate-2", c: "bg-[#FF90E8]" },
];

export function Design3() {
  return (
    <div className="min-h-screen bg-[#FFDE59] font-grotesk text-black antialiased selection:bg-black selection:text-[#FFDE59]">
      <header className="sticky top-0 z-50 border-b-[3px] border-black bg-[#FFDE59]">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3.5 sm:px-8">
          <a href="#" className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center border-[3px] border-black bg-black font-archivo text-lg text-[#FFDE59]">
              R
            </span>
            <span className="font-archivo text-xl tracking-tight">
              RATIO<span className="text-[#FF5C00]">READER</span>
            </span>
          </a>
          <nav className="hidden items-center gap-1 font-bold md:flex">
            {["HOW", "METER", "STUFF", "PEOPLE"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="border-[3px] border-transparent px-4 py-1.5 text-sm transition-all hover:border-black hover:bg-white hover:shadow-[3px_3px_0_#111]"
              >
                {item}
              </a>
            ))}
          </nav>
          <HardButton href="#get" bg="bg-black text-[#FFDE59]" className="!px-5 !py-2 text-sm">
            START FREE →
          </HardButton>
        </div>
      </header>

      <section className="relative overflow-hidden border-b-[3px] border-black">
        <StarBadge />
        <div className="dot-grid pointer-events-none absolute inset-0 opacity-40" />
        <div className="relative mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24 lg:py-32">
          <div className="inline-block -rotate-2 border-[3px] border-black bg-[#3DDC97] px-4 py-1.5 text-sm font-bold tracking-widest shadow-[4px_4px_0_#111]">
            PDF → SUMMARY → SMART
          </div>
          <h1 className="mt-8 font-archivo text-[clamp(3.2rem,11vw,8.5rem)] leading-[0.9] tracking-tighter">
            READ
            <span className="relative inline-block">
              <span className="relative z-10">LESS.</span>
              <span className="absolute inset-x-[-4px] top-[55%] z-0 h-[0.28em] -rotate-1 bg-[#FF5C00]" />
            </span>
            <br />
            KNOW
            <span className="ml-3 inline-block -rotate-3 border-[3px] border-black bg-[#4D9DE0] px-4 shadow-[6px_6px_0_#111]">
              MORE.
            </span>
          </h1>
          <p className="mt-8 max-w-xl text-lg font-medium leading-snug sm:text-xl">
            Upload any PDF. Get the summary of what actually matters — plus key quotes, hints and insights — in about
            thirty seconds. <span className="bg-black px-1.5 py-0.5 text-[#FFDE59]">40:1 compression, guaranteed*</span>
          </p>
          <p className="mt-2 text-xs font-bold text-black/40">*not an actual guarantee. but close.</p>
          <div className="mt-10 flex flex-wrap items-center gap-5">
            <HardButton href="#get" bg="bg-black text-[#FFDE59] !text-lg !px-9 !py-4">
              UPLOAD A PDF →
            </HardButton>
            <HardButton href="#how" bg="bg-white">
              SEE HOW
            </HardButton>
          </div>
        </div>
      </section>

      <div className="overflow-hidden border-b-[3px] border-black bg-black py-3.5">
        <div className="flex w-max animate-marquee-fast items-center gap-8 pr-8">
          {Array.from({ length: 12 }).map((_, i) => (
            <span key={i} className="flex items-center gap-8 whitespace-nowrap font-archivo text-lg text-[#FFDE59]">
              SUMMARIES <span className="text-[#FF5C00]">✦</span> KEY QUOTES{" "}
              <span className="text-[#4D9DE0]">✦</span> READING HINTS{" "}
              <span className="text-[#3DDC97]">✦</span> INSIGHTS <span className="text-[#FF90E8]">✦</span>
            </span>
          ))}
        </div>
      </div>

      <section id="how" className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
        <h2 className="font-archivo text-4xl tracking-tighter sm:text-6xl">HOW IT WORKS:</h2>
        <p className="mt-3 max-w-md font-bold text-black/50">(IT'S THREE STEPS. EVEN YOUR BOSS CAN DO IT.)</p>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {steps.map((s) => (
            <div
              key={s.n}
              className={`group border-[3px] border-black bg-white p-7 shadow-[8px_8px_0_#111] transition-all duration-200 hover:-translate-y-2 hover:rotate-0 hover:shadow-[12px_12px_0_#111] ${s.rotate}`}
            >
              <div className={`inline-block border-[3px] border-black px-3 py-1 font-archivo text-xl ${s.color}`}>
                {s.n}
              </div>
              <h3 className="mt-5 font-archivo text-2xl leading-tight tracking-tight">{s.title}</h3>
              <p className="mt-3 font-medium leading-snug text-black/70">{s.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="meter" className="mx-auto max-w-6xl px-5 pb-20 sm:px-8">
        <ShrinkOMeter />
      </section>

      <section id="stuff" className="border-y-[3px] border-black bg-[#FFF8E7]">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="font-archivo text-4xl tracking-tighter sm:text-6xl">
              THE GOOD <span className="text-[#FF5C00]">STUFF</span>
            </h2>
            <p className="max-w-xs text-sm font-bold text-black/50">EVERYTHING YOU GET IN EVERY BRIEF. NO FILLER. WE
              HATE FILLER.</p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <div
                key={f.t}
                className={`group border-[3px] border-black p-6 shadow-[6px_6px_0_#111] transition-all duration-200 hover:-translate-y-1.5 hover:shadow-[9px_9px_0_#111] ${f.c} ${f.r}`}
              >
                <h3 className="font-archivo text-lg leading-tight tracking-tight">{f.t}</h3>
                <p className="mt-2.5 text-sm font-medium leading-snug opacity-80">{f.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="people" className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
        <h2 className="font-archivo text-4xl tracking-tighter sm:text-6xl">PEOPLE <span className="text-[#4D9DE0]">❤</span> IT</h2>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.n}
              className={`relative border-[3px] border-black ${t.c} p-7 pt-9 shadow-[8px_8px_0_#111] transition-all duration-200 hover:rotate-0 hover:shadow-[12px_12px_0_#111] ${t.r}`}
            >
              <div className="absolute -top-3 left-1/2 h-6 w-20 -translate-x-1/2 rotate-2 border-2 border-black bg-white/90" />
              <blockquote className="font-archivo text-lg leading-snug tracking-tight">"{t.q}"</blockquote>
              <figcaption className="mt-5 border-t-[3px] border-black pt-3 text-sm font-bold">
                {t.n} <span className="font-medium opacity-60">— {t.role}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section id="get" className="relative overflow-hidden border-t-[3px] border-black bg-[#FF5C00]">
        <div className="mx-auto max-w-6xl px-5 py-20 text-center sm:px-8 sm:py-28">
          <h2 className="mx-auto max-w-4xl font-archivo text-[clamp(2.6rem,8vw,6rem)] leading-[0.95] tracking-tighter">
            YOUR READING LIST ISN'T SCARY. IT'S JUST
            <span className="ml-3 inline-block rotate-[-2deg] border-[3px] border-black bg-[#FFDE59] px-4 shadow-[8px_8px_0_#111]">
              UNCRUSHED.
            </span>
          </h2>
          <p className="mx-auto mt-6 max-w-lg text-lg font-bold text-black/70">
            First 3 briefs free. No account. Your PDF gets deleted after distilling — we promise on the yellow.
          </p>
          <div className="mt-10">
            <HardButton href="#" bg="bg-black text-[#FFDE59] !text-xl !px-12 !py-5 !shadow-[8px_8px_0_rgba(0,0,0,0.35)] hover:!shadow-[10px_10px_0_rgba(0,0,0,0.35)]">
              CRUSH MY FIRST PDF →
            </HardButton>
          </div>
        </div>
      </section>

      <footer className="border-t-[3px] border-black bg-black">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 py-10 sm:flex-row sm:px-8">
          <p className="font-archivo text-xl text-[#FFDE59]">RATIO<span className="text-[#FF5C00]">READER</span></p>
          <div className="flex gap-6 font-grotesk text-sm font-bold text-white/60">
            <a href="#" className="hover:text-[#FFDE59]">HOW</a>
            <a href="#" className="hover:text-[#FFDE59]">PRIVACY</a>
            <a href="#" className="hover:text-[#FFDE59]">CONTACT</a>
          </div>
          <p className="font-grotesk text-xs font-bold text-white/30">© 2026 — MADE WITH LESS READING</p>
        </div>
      </footer>
    </div>
  );
}
