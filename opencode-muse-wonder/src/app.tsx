import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router-dom";
import { ArrowUpRight, BookOpen, FileText, Quote, Sparkles } from "lucide-react";
import { Design1 } from "./pages/Design1";
import { Design2 } from "./pages/Design2";
import { Design3 } from "./pages/Design3";
import { Design4 } from "./pages/Design4";
import { Design5 } from "./pages/Design5";

const designs = [
  { id: 1, title: "The Daily Ratio", tag: "Editorial / Newspaper", desc: "Broadsheet typography, ruled columns, marginalia. Reading as ritual.", color: "bg-[#fffdf5] border-black", accent: "bg-red-600" },
  { id: 2, title: "Ratio OS", tag: "Terminal / AI Lab", desc: "Dark command-line lab. Watch a 47-page PDF collapse into signal.", color: "bg-zinc-950 text-white", accent: "bg-emerald-400" },
  { id: 3, title: "Sticker Book", tag: "Neo-Brutalist / Playful", desc: "Thick borders, hard shadows, confetti colour. Homework, but fun.", color: "bg-[#ffe03d]", accent: "bg-[#ff4d8d]" },
  { id: 4, title: "The Quiet Page", tag: "Zen / Minimal", desc: "Breathing whitespace, serif calm. A garden for dense documents.", color: "bg-[#f3efe6]", accent: "bg-[#7a8b6f]" },
  { id: 5, title: "Aurora", tag: "Glass / Premium SaaS", desc: "Aurora gradients, frosted glass, floating evidence. Product-led polish.", color: "bg-[#0b0714] text-white", accent: "bg-violet-500" },
];

function Home() {
  return (
    <div className="min-h-screen bg-[#111110] text-[#f5f0e6]">
      <div className="max-w-6xl mx-auto px-6 py-10 md:py-16">
        <div className="flex items-center justify-between border-b border-white/15 pb-6">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-[#ffe03d] text-black grid place-items-center font-black text-lg rounded-full border-2 border-black">R:</div>
            <div><p className="font-black tracking-tight leading-none text-xl">RATIO READER</p><p className="text-[11px] tracking-[0.2em] text-white/50">FIVE DIRECTIONS — ONE PRODUCT</p></div>
          </div>
          <p className="hidden md:block text-xs font-mono text-white/50">Upload PDF → Get the point</p>
        </div>

        <h1 className="mt-12 font-[Fraunces] text-[56px] leading-[0.9] md:text-[96px] font-black tracking-tight">Read less.<br/><span className="italic font-light text-[#ffe03d]">Understand more.</span></h1>
        <p className="mt-6 max-w-xl text-white/70 leading-relaxed">Ratio Reader turns dense PDFs into the 5% that matters — summaries, key quotes, hints and questions that check you actually got it. Pick a direction:</p>

        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {designs.map(d => (
            <Link key={d.id} to={`/${d.id}`} className={`group relative overflow-hidden rounded-2xl border-2 p-6 min-h-[240px] flex flex-col justify-between transition hover:-translate-y-1 ${d.color} ${d.id===2||d.id===5 ? 'border-white/20' : ''}`}>
              <div className="flex justify-between items-start"><span className={`text-[11px] font-bold tracking-widest px-2.5 py-1 rounded-full text-white ${d.accent}`}>0{d.id} — {d.tag.toUpperCase()}</span><ArrowUpRight className="w-5 h-5 opacity-40 group-hover:opacity-100 group-hover:rotate-45 transition" /></div>
              <div><h2 className="font-black text-3xl tracking-tight">{d.title}</h2><p className="mt-2 text-sm opacity-70 leading-relaxed">{d.desc}</p><span className="mt-4 inline-flex items-center gap-2 text-xs font-bold tracking-widest">OPEN DESIGN <span className="group-hover:translate-x-1 transition">→</span></span></div>
            </Link>
          ))}
          <div className="rounded-2xl border-2 border-dashed border-white/20 p-6 flex flex-col justify-center gap-3 text-white/60">
            <div className="flex gap-2"><BookOpen className="w-5 h-5"/><FileText className="w-5 h-5"/><Quote className="w-5 h-5"/><Sparkles className="w-5 h-5"/></div>
            <p className="text-sm leading-relaxed">Every page sells the same promise differently: <b className="text-white">summary + quotes + hints + quizzes</b> from any PDF, in under 60 seconds.</p>
            <p className="text-xs font-mono">Routes: /1 /2 /3 /4 /5</p>
          </div>
        </div>
        <p className="mt-10 text-center text-xs text-white/30 font-mono">All five are fully built landing pages — nav, hero, product demo, features, proof, pricing & footer.</p>
      </div>
    </div>
  );
}

function Shell({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <Link to="/" className="fixed bottom-5 left-5 z-[100] flex items-center gap-2 bg-black text-white text-xs font-bold pl-2 pr-3 py-2 rounded-full shadow-2xl border border-white/20 hover:scale-105 transition">
        <span className="w-6 h-6 bg-[#ffe03d] text-black grid place-items-center rounded-full font-black">R:</span> All designs <span className="opacity-50 font-mono">/ 1 2 3 4 5</span>
      </Link>
      <div className="fixed bottom-5 right-5 z-[100] hidden md:flex gap-1">
        {[1,2,3,4,5].map(n => <Link key={n} to={`/${n}`} className="w-8 h-8 grid place-items-center rounded-full bg-black/80 backdrop-blur text-white text-xs font-bold border border-white/20 hover:bg-[#ffe03d] hover:text-black transition">{n}</Link>)}
      </div>
    </>
  );
}

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/1" element={<Shell><Design1 /></Shell>} />
        <Route path="/2" element={<Shell><Design2 /></Shell>} />
        <Route path="/3" element={<Shell><Design3 /></Shell>} />
        <Route path="/4" element={<Shell><Design4 /></Shell>} />
        <Route path="/5" element={<Shell><Design5 /></Shell>} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
