import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Brain, Check, ChevronRight, FileText, Lightbulb, Quote, Terminal, Zap } from "lucide-react";

const logs = [
  "$ ratio ingest research-paper.pdf",
  "→ parsing layout ............ 214 pages, 61,204 tokens",
  "→ building argument graph .... 1,842 nodes, 3,109 edges",
  "→ ranking by dependency ...... top 5.1% carries 83% of meaning",
  "→ extracting quotables ....... 14 quotes, page-anchored",
  "→ generating hints ........... 9 hints, calibrated to B2",
  "✓ done in 41.2s — output: 6 min read",
];

export function Design2() {
  const [step, setStep] = useState(0);
  const [playing, setPlaying] = useState(true);
  useEffect(() => {
    if (!playing) return;
    const t = setInterval(() => setStep(s => (s + 1) % (logs.length + 4)), 950);
    return () => clearInterval(t);
  }, [playing]);
  const visible = logs.slice(0, Math.min(step, logs.length));
  const done = step >= logs.length;

  return (
    <div className="min-h-screen bg-[#060807] text-zinc-200 font-[Space_Grotesk] relative overflow-hidden noise">
      <div className="absolute inset-0 pointer-events-none" style={{background:"radial-gradient(600px 300px at 75% 0%, #10b98122, transparent 60%), radial-gradient(500px 300px at 10% 90%, #0ea5e912, transparent 60%)"}}/>
      <div className="absolute inset-0 opacity-[0.13] pointer-events-none" style={{backgroundImage:"linear-gradient(#ffffff14 1px,transparent 1px),linear-gradient(90deg,#ffffff14 1px,transparent 1px)",backgroundSize:"44px 44px"}}/>

      <header className="relative max-w-7xl mx-auto px-5 md:px-8 py-5 flex items-center justify-between">
        <div className="flex items-center gap-3"><div className="w-9 h-9 rounded-lg bg-emerald-400 text-black grid place-items-center font-[JetBrains_Mono] font-black">R:</div><div className="leading-none"><p className="font-bold tracking-tight">ratio<span className="text-emerald-400">_</span>reader</p><p className="font-[JetBrains_Mono] text-[10px] text-zinc-500 mt-1">v2.4 // signal extraction engine</p></div></div>
        <nav className="hidden md:flex gap-7 font-[JetBrains_Mono] text-xs text-zinc-400"><a href="#engine" className="hover:text-emerald-300">./engine</a><a href="#output">./output</a><a href="#proof">./proof</a><a href="#pricing">./pricing</a></nav>
        <button className="font-[JetBrains_Mono] text-xs bg-white text-black font-bold px-4 py-2.5 rounded-full hover:bg-emerald-300 transition">run --free</button>
      </header>

      <main className="relative max-w-7xl mx-auto px-5 md:px-8">
        <div className="pt-10 md:pt-16 grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <div className="inline-flex items-center gap-2 border border-emerald-400/30 bg-emerald-400/10 text-emerald-300 rounded-full px-3 py-1.5 font-[JetBrains_Mono] text-[11px]"><span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"/> ENGINE ONLINE — 38s AVG PER PDF</div>
            <h1 className="mt-6 text-[52px] leading-[0.92] md:text-[84px] font-bold tracking-tight">Most PDFs<br/>are <span className="text-zinc-600 line-through decoration-emerald-400 decoration-4">95% noise.</span><br/><span className="text-emerald-400">We ship the 5%.</span></h1>
            <p className="mt-6 text-zinc-400 text-lg leading-relaxed max-w-lg">Drop in a paper, textbook or report. Ratio builds its argument graph, ranks every paragraph by what depends on it, and returns a summary you can defend — with quotes, hints and a self-check.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <button className="bg-emerald-400 text-black font-bold px-6 py-3.5 rounded-full flex items-center gap-2 hover:bg-white transition">Upload PDF <ArrowRight className="w-4 h-4"/></button>
              <a href="#output" className="border border-white/20 px-6 py-3.5 rounded-full font-[JetBrains_Mono] text-sm hover:border-emerald-400/60 hover:text-emerald-300 transition">inspect output ↓</a>
            </div>
            <div className="mt-10 grid grid-cols-3 max-w-md divide-x divide-white/10 border border-white/10 rounded-2xl overflow-hidden bg-white/[0.02]">
              {[["83%","meaning in top 5%"],["14","quotes / doc avg."],["3","questions to prove it"]].map(([v,l])=><div key={l} className="p-4"><p className="font-[JetBrains_Mono] font-bold text-xl text-white">{v}</p><p className="text-[11px] text-zinc-500 mt-1 leading-tight">{l}</p></div>)}
            </div>
          </div>

          {/* terminal */}
          <div id="engine">
            <div className="rounded-2xl border border-white/12 bg-black/70 backdrop-blur shadow-[0_30px_80px_-20px_#10b98133] overflow-hidden">
              <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-white/[0.03]"><div className="flex gap-1.5"><span className="w-3 h-3 rounded-full bg-[#ff5f57]"/><span className="w-3 h-3 rounded-full bg-[#febc2e]"/><span className="w-3 h-3 rounded-full bg-[#28c840]"/></div><span className="font-[JetBrains_Mono] text-[11px] text-zinc-500 flex items-center gap-2"><Terminal className="w-3.5 h-3.5"/> ratio — zsh</span><button onClick={()=>{setStep(0);setPlaying(true)}} className="font-[JetBrains_Mono] text-[11px] text-emerald-300 border border-emerald-400/30 rounded-full px-2.5 py-1 hover:bg-emerald-400 hover:text-black transition">↻ replay</button></div>
              <div className="p-5 font-[JetBrains_Mono] text-[12.5px] leading-[1.9] min-h-[280px]">
                <AnimatePresence>{visible.map((l,i)=><motion.p key={l} initial={{opacity:0,x:-6}} animate={{opacity:1,x:0}} className={i===0?"text-white":l.startsWith("✓")?"text-emerald-300 font-bold":"text-zinc-400"}>{l}</motion.p>)}</AnimatePresence>
                {!done && <span className="inline-block w-2 h-4 bg-emerald-400 animate-pulse mt-1"/>}
                {done && <motion.div initial={{opacity:0,y:8}} animate={{opacity:1,y:0}} className="mt-4 border border-emerald-400/25 bg-emerald-400/[0.07] rounded-xl p-4 not-italic"><p className="text-emerald-300 text-[10px] tracking-widest font-bold">OUTPUT PREVIEW</p><p className="text-zinc-200 mt-2 leading-relaxed font-[Space_Grotesk] text-sm">“Attention isn’t a spotlight you control — it’s a budget the paper spends. The method section earns 62% of the conclusions.”</p></motion.div>}
              </div>
              <div className="px-5 py-3 border-t border-white/10 flex justify-between font-[JetBrains_Mono] text-[10px] text-zinc-500"><span>tokens saved: <b className="text-emerald-300">58,110</b></span><span>confidence: <b className="text-white">0.94</b></span><span className="hidden sm:inline">pages cited: 9 / 214</span></div>
            </div>
            <p className="text-center font-[JetBrains_Mono] text-[11px] text-zinc-600 mt-3">live simulation — your file never leaves the browser until you say so</p>
          </div>
        </div>

        {/* output cards */}
        <section id="output" className="py-20">
          <p className="font-[JetBrains_Mono] text-xs text-emerald-300 tracking-widest">// WHAT COMES OUT</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mt-3">Four artefacts. <span className="text-zinc-500">Zero fluff.</span></h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
            {[{i:Zap,c:"text-amber-300 border-amber-300/20 bg-amber-300/[0.06]",t:"summary.md",d:"The whole argument in 300 words, ordered by importance — not by page number.",m:"300 words • 2 min"},{i:Quote,c:"text-sky-300 border-sky-300/20 bg-sky-300/[0.06]",t:"quotes.json",d:"Sentences worth citing, each pinned to its page and paragraph. Copy = citation included.",m:"14 quotes • p.anchored"},{i:Lightbulb,c:"text-violet-300 border-violet-300/20 bg-violet-300/[0.06]",t:"hints[]",d:"Marginal nudges where readers usually get stuck. Tuned to your level, never condescending.",m:"9 hints • adaptive"},{i:Brain,c:"text-emerald-300 border-emerald-300/20 bg-emerald-300/[0.06]",t:"check.exe",d:"Three questions generated from the claims. Pass them and the reading actually stuck.",m:"3 questions • scored"}].map(f=>(
              <div key={f.t} className={`border rounded-2xl p-6 ${f.c} bg-opacity-100 backdrop-blur hover:-translate-y-1 transition`}><f.i className="w-6 h-6"/><p className="font-[JetBrains_Mono] font-bold text-white mt-5">{f.t}</p><p className="text-sm text-zinc-400 leading-relaxed mt-2">{f.d}</p><p className="font-[JetBrains_Mono] text-[11px] mt-4 opacity-70">{f.m}</p></div>
            ))}
          </div>
        </section>

        {/* proof + pricing */}
        <section id="proof" className="grid lg:grid-cols-5 gap-4 pb-20">
          <div className="lg:col-span-3 border border-white/10 rounded-3xl p-8 bg-white/[0.02]">
            <p className="font-[JetBrains_Mono] text-xs text-zinc-500 tracking-widest">STDOUT FROM HUMANS</p>
            <div className="mt-6 space-y-7">
              {[{q:"It ranked my own thesis better than I could. Slightly rude. Completely correct.",a:"lena@uni — PhD candidate",s:"214p → 6 min"},{q:"We run every competitor whitepaper through it before standup. The quotes alone pay for it.",a:"marc — product lead",s:"38 reports / mo"}].map(x=>(
                <div key={x.a} className="flex gap-4"><ChevronRight className="w-5 h-5 text-emerald-400 shrink-0 mt-1"/><div><p className="text-lg leading-snug">“{x.q}”</p><p className="font-[JetBrains_Mono] text-[11px] text-zinc-500 mt-2">{x.a} &nbsp;•&nbsp; <span className="text-emerald-300">{x.s}</span></p></div></div>
              ))}
            </div>
            <div className="flex flex-wrap gap-2 mt-8">{["SOC2-ready","GDPR delete","No training on your files","500-page limit","OCR included"].map(t=><span key={t} className="font-[JetBrains_Mono] text-[11px] border border-white/15 rounded-full px-3 py-1.5 text-zinc-400 flex items-center gap-1.5"><Check className="w-3 h-3 text-emerald-400"/>{t}</span>)}
            </div>
          </div>
          <div id="pricing" className="lg:col-span-2 rounded-3xl p-8 bg-emerald-400 text-black relative overflow-hidden">
            <FileText className="absolute -right-6 -bottom-6 w-40 h-40 text-black/10 rotate-12"/>
            <p className="font-[JetBrains_Mono] text-xs font-bold tracking-widest">PRICING — FLAT, LIKE IT SHOULD BE</p>
            <p className="mt-6 text-5xl font-bold tracking-tight">$0 <span className="text-lg font-normal opacity-60">to start</span></p>
            <ul className="mt-5 space-y-2 text-sm font-medium">{["3 PDFs every month, forever","Full summary + quotes","Hints & self-check included"].map(t=><li key={t} className="flex gap-2"><Check className="w-4 h-4 mt-0.5"/>{t}</li>)}</ul>
            <div className="border-t border-black/20 mt-6 pt-5"><p className="text-3xl font-bold">$8/mo <span className="text-sm font-normal opacity-60">unlimited, when you’re ready</span></p></div>
            <button className="mt-6 w-full bg-black text-white font-bold py-3.5 rounded-full hover:scale-[1.02] transition relative">Run your first PDF →</button>
          </div>
        </section>
        <footer className="border-t border-white/10 py-7 flex flex-col md:flex-row justify-between gap-2 font-[JetBrains_Mono] text-[11px] text-zinc-600"><span>ratio_reader © 2026 — built for people with too much to read</span><span>exit code: understood ✓</span></footer>
      </main>
    </div>
  );
}
