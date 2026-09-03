import { Link } from "react-router-dom";
import { ArrowUpRight, BookOpenText, Layers } from "lucide-react";

const CARDS = [
  { n: "01", path: "/1", title: "The Sunday Edition", desc: "Editorial broadsheet — cream paper, ink serif, red pencil marks.", bg: "bg-[#FAF6EF] text-[#1A1713]", chip: "bg-[#D63A2F] text-[#FAF6EF]", font: "font-fraunces" },
  { n: "02", path: "/2", title: "Signal Lab", desc: "Dark terminal laboratory — obsidian, scanlines and lime signals.", bg: "bg-[#0B0D08] text-[#EAF5D6]", chip: "bg-[#C6FF4A] text-[#0B0D08]", font: "font-grotesk" },
  { n: "03", path: "/3", title: "Clay Library", desc: "Warm storybook afternoon — peach clay, coral, handwritten notes.", bg: "bg-[#FFF1E2] text-[#3B2A20]", chip: "bg-[#FF6B4A] text-white", font: "font-instrument" },
  { n: "04", path: "/4", title: "Swiss Precision", desc: "Ruthless grid minimalism — black on white, numbered, exact.", bg: "bg-white text-black", chip: "bg-[#2B4EFF] text-white", font: "font-inter" },
  { n: "05", path: "/5", title: "Carnival Print", desc: "Neo-brutalist poster riot — yellow, hard shadows, stickers.", bg: "bg-[#FFDE00] text-black", chip: "bg-black text-[#FFDE00]", font: "font-archivo" },
];

export function Home() {
  return (
    <div className="min-h-screen bg-[#111110] text-[#F2EFE6] font-inter">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="flex items-center gap-3">
          <span className="grid size-10 place-items-center rounded-xl bg-[#F2EFE6] text-black">
            <BookOpenText className="size-5" />
          </span>
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-white/50">Ratio Reader</p>
            <h1 className="font-fraunces text-3xl italic">Five covers, one reader.</h1>
          </div>
        </div>
        <p className="mt-4 max-w-2xl text-white/60">
          Upload a PDF, get the signal: summaries, key quotes, hints and insights. Pick a
          design direction below — each route is a complete, standalone landing page.
        </p>
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {CARDS.map((c) => (
            <Link
              key={c.path}
              to={c.path}
              className={`${c.bg} group rounded-2xl p-6 transition-transform duration-300 hover:-translate-y-1.5`}
            >
              <div className="flex items-center justify-between">
                <span className={`${c.chip} rounded-full px-3 py-1 text-xs font-bold tracking-widest`}>{c.n}</span>
                <ArrowUpRight className="size-5 transition-transform group-hover:rotate-45" />
              </div>
              <h2 className={`${c.font} mt-6 text-3xl leading-none`}>{c.title}</h2>
              <p className="mt-3 text-sm opacity-70">{c.desc}</p>
              <p className="mt-6 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] opacity-60">
                <Layers className="size-3.5" /> Open route {c.path}
              </p>
            </Link>
          ))}
          <div className="rounded-2xl border border-dashed border-white/25 p-6">
            <p className="text-xs uppercase tracking-[0.3em] text-white/40">Brief</p>
            <p className="mt-4 text-sm leading-relaxed text-white/65">
              Every page sells the same product: drop in a dense PDF, get back a tight
              summary plus the quotes, hints and insights worth remembering. Five moods,
              five layouts, zero shared components.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
