import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const designs = [
  { n: 1, to: "/1", name: "Manuscript Noir", tag: "dark · literary · marginalia", desc: "A candlelit reading room. Ink, gold, and handwritten-style notes bring the tool's 'marginalia' spirit to life.", swatch: "bg-[#15100a]" },
  { n: 2, to: "/2", name: "Ratio Glass", tag: "glassmorphism · aurora · φ spiral", desc: "The golden ratio as a mathematical truth — a real computed Fibonacci spiral inside frosted glass on an aurora field.", swatch: "bg-gradient-to-br from-[#7c6cff] via-[#ff7ad9] to-[#fbbf24]" },
  { n: 3, to: "/3", name: "Zine Brut", tag: "brutalism · stickers · stamps", desc: "A maximalist zine: tape, highlighter, rubber stamps and hard offset shadows. Reads like a fanzine that owns the library.", swatch: "bg-[#ffe14d]" },
  { n: 4, to: "/4", name: "Terminal Decode", tag: "CRT · monospace · hacker", desc: "Reading as a terminal session. Scanlines, blinking carets and an honest analysis log compile the book's diff.", swatch: "bg-[#0a0e0a]" },
  { n: 5, to: "/5", name: "New Editorial", tag: "paper · serif · colophon", desc: "A quiet, elegant folio. Warm paper, Playfair caps and hairline rules present distillation as high editorial craft.", swatch: "bg-[#efe8d8]" },
];

export function Home() {
  return (
    <div className="min-h-screen bg-[#f4f1ea] text-[#1c1a15]">
      <main className="mx-auto max-w-5xl px-6 py-16">
        <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-[#c35b3a]">
          marketing landing pages · v1
        </p>
        <h1 className="font-serif text-5xl font-semibold tracking-tight sm:text-6xl">
          Ratio <span className="italic text-[#c35b3a]">Reader</span>
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-neutral-600">
          Five different creative directions for the “upload a PDF → get summary,
          hints, quotes &amp; insights” landing page. Each lives on its own route
          and owns a completely different visual language.
        </p>

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {designs.map((d) => (
            <Link
              key={d.n}
              to={d.to}
              className="group flex flex-col overflow-hidden rounded-xl border border-black/10 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className={`relative h-28 ${d.swatch}`}>
                <span className="absolute left-4 top-4 font-mono text-sm font-bold text-white/90">
                  /{d.n}
                </span>
                <span className="absolute bottom-3 right-4 rounded-full bg-white/85 px-3 py-1 font-mono text-[11px] font-semibold text-black backdrop-blur">
                  {d.tag}
                </span>
              </div>
              <div className="flex flex-1 items-start justify-between gap-4 p-5">
                <div>
                  <h2 className="text-lg font-bold">{d.name}</h2>
                  <p className="mt-1.5 text-sm leading-relaxed text-neutral-600">{d.desc}</p>
                </div>
                <ArrowRight className="mt-1 h-5 w-5 shrink-0 text-neutral-400 transition group-hover:translate-x-1 group-hover:text-black" aria-hidden />
              </div>
            </Link>
          ))}
        </div>

        <p className="mt-10 flex items-center gap-2 text-sm text-neutral-500">
          <span className="inline-block h-2 w-2 rounded-full bg-emerald-500" />
          Ready to explore — every page is fully styled and responsive. Open one and scroll.
        </p>
      </main>
    </div>
  );
}
