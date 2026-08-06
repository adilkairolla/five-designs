import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Design1 from "./designs/design1";
import Design2 from "./designs/design2";
import Design3 from "./designs/design3";
import Design4 from "./designs/design4";
import Design5 from "./designs/design5";

function Hub() {
  return (
    <div className="min-h-screen bg-[#0B0B0E] text-white flex flex-col items-center justify-center p-8">
      <div className="max-w-5xl w-full">
        <p className="text-[11px] tracking-[0.3em] uppercase text-white/40 mb-4">Ratio Reader — Five Interpretations</p>
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-none mb-3" style={{fontFamily:'Syne, sans-serif'}}>Choose your<br /><span className="text-white/20">perspective.</span></h1>
        <p className="text-white/60 max-w-xl mb-12">Same tool. Five completely different ways to tell its story. Each route is a full landing page — editorial, brutalist, nocturne, archive, and telemetry.</p>
        <div className="grid md:grid-cols-5 gap-4">
          {[
            { n: "01", title: "The Digest", sub: "Editorial Broadsheet", href: "/1", bg: "bg-[#FDF6EC] text-[#1A1A18]" },
            { n: "02", title: "SYSTEM", sub: "Swiss Brutalist", href: "/2", bg: "bg-white text-black border border-white" },
            { n: "03", title: "Nocturne", sub: "Dark Glass Lab", href: "/3", bg: "bg-[#111118] text-white border border-white/10" },
            { n: "04", title: "Stacks", sub: "Cozy Archive", href: "/4", bg: "bg-[#FFF7ED] text-[#3A2A18]" },
            { n: "05", title: "Telemetry", sub: "Data & Charts", href: "/5", bg: "bg-[#F6F5FF] text-[#0F0F14]" },
          ].map(c => (
            <Link key={c.href} to={c.href} className={`group p-6 rounded-2xl ${c.bg} hover:scale-[1.02] transition-all`}>
              <div className="text-xs opacity-40 mb-8 font-mono">{c.n} →</div>
              <div className="font-black tracking-tight text-xl leading-none">{c.title}</div>
              <div className="text-xs opacity-60 mt-1">{c.sub}</div>
              <div className="mt-6 text-xs font-bold opacity-0 group-hover:opacity-100 transition">Enter →</div>
            </Link>
          ))}
        </div>
        <div className="mt-12 text-white/30 text-xs font-mono">Built with React + Tailwind · Bunny · muse-spark · /1 /2 /3 /4 /5</div>
      </div>
    </div>
  );
}

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Hub />} />
        <Route path="/1" element={<Design1 />} />
        <Route path="/2" element={<Design2 />} />
        <Route path="/3" element={<Design3 />} />
        <Route path="/4" element={<Design4 />} />
        <Route path="/5" element={<Design5 />} />
      </Routes>
    </BrowserRouter>
  );
}
