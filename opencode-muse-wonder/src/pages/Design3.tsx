import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, BadgeHelp, Check, FileUp, Heart, Lightbulb, PartyPopper, Quote, Sparkles, Star, Sticker } from "lucide-react";

const tilt = ["-rotate-2","rotate-1","-rotate-1","rotate-2"];

export function Design3() {
  const [quiz, setQuiz] = useState<number | null>(null);
  return (
    <div className="min-h-screen bg-[#fff6d9] text-[#141414] font-[Archivo] overflow-x-clip" style={{backgroundImage:"radial-gradient(#14141414 1.2px, transparent 1.2px)",backgroundSize:"26px 26px"}}>
      {/* ticker */}
      <div className="bg-black text-[#ffe03d] overflow-hidden py-2 border-b-[3px] border-black"><div className="flex gap-8 whitespace-nowrap animate-[marquee_22s_linear_infinite] font-black text-sm tracking-wide w-max">{Array.from({length:2}).map((_,k)=><span key={k} className="flex gap-8">{["★ 200 PAGES? LOL. READ 9.","★ QUOTES WITH PAGE NUMBERS","★ HINTS THAT ACTUALLY HELP","★ FREE FOR 3 PDFS","★ HOMEWORK, BUT MAKE IT FUN"].map(t=><span key={t}>{t}</span>)}</span>)}</div><style>{`@keyframes marquee{to{transform:translateX(-50%)}}`}</style></div>

      <header className="max-w-7xl mx-auto px-5 md:px-8 py-5 flex items-center justify-between">
        <div className="flex items-center gap-2.5"><div className="w-11 h-11 bg-[#ff4d8d] border-[3px] border-black rounded-xl grid place-items-center font-black text-xl hard-shadow-sm rotate-[-4deg]">R:</div><p className="font-black text-2xl tracking-tight leading-none">Ratio<br className="sm:hidden"/> Reader</p><span className="hidden sm:inline bg-[#8be04e] border-2 border-black text-[10px] font-black px-2 py-0.5 rounded-full rotate-3 ml-1">BETA!</span></div>
        <nav className="hidden md:flex gap-2 font-bold text-sm">{["How it works","Goodies","Wall of love","Price"].map(l=><a key={l} href={`#${l.split(" ")[0].toLowerCase()}`} className="border-[3px] border-black bg-white px-4 py-2 rounded-full hard-shadow-sm hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition">{l}</a>)}</nav>
        <button className="bg-[#ffe03d] border-[3px] border-black font-black px-5 py-2.5 rounded-full hard-shadow hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none transition text-sm">TRY FREE →</button>
      </header>

      <main className="max-w-7xl mx-auto px-5 md:px-8">
        {/* hero */}
        <section className="pt-8 md:pt-14 grid lg:grid-cols-2 gap-10 items-center relative">
          <motion.span animate={{rotate:[0,10,0]}} transition={{repeat:Infinity,duration:3}} className="absolute -top-2 left-[42%] hidden lg:grid w-14 h-14 bg-[#4dc9ff] border-[3px] border-black rounded-full place-items-center hard-shadow-sm z-10"><Sparkles className="w-6 h-6"/></motion.span>
          <div>
            <span className="inline-block bg-white border-[3px] border-black rounded-full px-4 py-1.5 font-black text-xs rotate-[-1.5deg] hard-shadow-sm">📄➡️✨ PDF IN. POINT OUT.</span>
            <h1 className="mt-6 font-black tracking-tight leading-[0.88] text-[54px] md:text-[88px]">BIG PDF?<br/><span className="bg-[#ff4d8d] text-white px-3 inline-block rotate-[-1.5deg] border-[3px] border-black hard-shadow-sm my-1">TINY</span> <span className="text-stroke">READ.</span><br/>BIG BRAIN.</h1>
            <p className="mt-6 text-lg font-medium leading-relaxed max-w-md text-black/70">Upload the scary 200-page thing. Get back the good stuff: a friendly summary, the quotes worth stealing, and hints that un-stick your brain. 🧠</p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button className="bg-black text-white font-black text-lg px-7 py-4 rounded-2xl hard-shadow hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none transition flex items-center gap-2"><FileUp className="w-5 h-5"/> Drop my PDF!</button>
              <div className="flex -space-x-2">{["bg-[#ffe03d]","bg-[#4dc9ff]","bg-[#8be04e]","bg-[#ff9f43]"].map((c,i)=><span key={c} className={`w-10 h-10 rounded-full border-[3px] border-black ${c} grid place-items-center text-sm font-black ${tilt[i]}`}>{["A","J","P","M"][i]}</span>)}</div>
              <p className="text-sm font-bold leading-tight">12,000+ readers<br/><span className="text-black/50 font-medium">already skipped the boring parts</span></p>
            </div>
          </div>

          {/* demo card stack */}
          <div className="relative mx-auto w-full max-w-[520px]">
            <div className="absolute inset-0 bg-[#4dc9ff] border-[3px] border-black rounded-[28px] rotate-3"/>
            <div className="relative bg-white border-[3px] border-black rounded-[28px] hard-shadow-lg p-6 md:p-7 rotate-[-1deg]">
              <div className="flex items-center justify-between"><span className="bg-[#ffe03d] border-2 border-black text-[11px] font-black px-2.5 py-1 rounded-full">biology-ch12.pdf</span><span className="font-black text-sm bg-[#8be04e] border-2 border-black rounded-full px-2.5 py-1">DONE IN 31s ✓</span></div>
              <p className="font-black text-2xl mt-5 leading-tight">TL;DR — Photosynthesis, minus the textbook voice</p>
              <p className="mt-2 font-medium text-black/65 leading-relaxed">Plants turn light + water + CO₂ into sugar and oxygen. The light reactions make the energy; the Calvin cycle spends it. Everything else is details.</p>
              <div className="mt-5 bg-[#fff0f6] border-[3px] border-black rounded-2xl p-4 rotate-[0.7deg]"><p className="text-[11px] font-black flex items-center gap-1.5"><Quote className="w-4 h-4"/> STEAL THIS QUOTE</p><p className="font-bold mt-1.5 leading-snug">“Photosynthesis is the only process that matters at planetary scale.”</p><p className="text-xs font-bold text-black/45 mt-1">p. 214 — click to copy + cite 📎</p></div>
              <div className="mt-4 flex gap-3">
                <div className="flex-1 bg-[#eef7ff] border-[3px] border-black rounded-2xl p-3.5"><p className="text-[11px] font-black flex gap-1"><Lightbulb className="w-4 h-4"/> HINT</p><p className="text-sm font-semibold mt-1">Exam loves the Calvin cycle. Learn its 3 stages!</p></div>
                <div className="flex-1 bg-[#f3ffe8] border-[3px] border-black rounded-2xl p-3.5"><p className="text-[11px] font-black flex gap-1"><BadgeHelp className="w-4 h-4"/> QUICK CHECK</p><p className="text-sm font-semibold mt-1">Where does the O₂ come from — water or CO₂?</p></div>
              </div>
            </div>
            <motion.span animate={{y:[0,-8,0]}} transition={{repeat:Infinity,duration:2.4}} className="absolute -right-3 -bottom-5 bg-[#ffe03d] border-[3px] border-black rounded-full px-4 py-2 font-black text-sm hard-shadow-sm rotate-[-3deg]">200 pages → 9 ⭐</motion.span>
          </div>
        </section>

        {/* goodies */}
        <section id="goodies" className="py-20">
          <h2 className="font-black text-4xl md:text-6xl tracking-tight text-center">What’s in the <span className="bg-[#4dc9ff] border-[3px] border-black px-2 inline-block rotate-[-1deg] hard-shadow-sm">goodie bag?</span></h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-12">
            {[{c:"bg-[#ffe03d]",e:"⚡",t:"Speed summary",d:"The whole point, in words a human would use. Ordered by importance, not page order."},{c:"bg-[#ff9ec6]",e:"💬",t:"Quote cards",d:"The lines worth quoting, with the page number attached. Your bibliography says thanks."},{c:"bg-[#9be15d]",e:"💡",t:"Brain hints",d:"Little nudges exactly where everyone gets stuck. Like a friend who already read it."},{c:"bg-[#7fd8ff]",e:"🎯",t:"Prove-it quiz",d:"Three tiny questions at the end. Nail them = you actually know it. Confetti included."}].map((f,i)=>(
              <motion.div key={f.t} whileHover={{rotate:0,scale:1.03}} className={`${f.c} border-[3px] border-black rounded-[24px] p-6 hard-shadow ${tilt[i]}`}><span className="text-4xl">{f.e}</span><h3 className="font-black text-2xl mt-4">{f.t}</h3><p className="font-medium text-black/70 leading-relaxed mt-2 text-[15px]">{f.d}</p></motion.div>
            ))}
          </div>
        </section>

        {/* interactive quiz */}
        <section className="pb-20 grid lg:grid-cols-2 gap-6 items-stretch">
          <div className="bg-black text-white border-[3px] border-black rounded-[28px] p-8 hard-shadow-lg relative overflow-hidden">
            <PartyPopper className="absolute right-6 top-6 w-8 h-8 text-[#ffe03d]"/>
            <p className="font-black text-[#ffe03d] text-xs tracking-widest">TRY THE PROVE-IT QUIZ 👇</p>
            <h3 className="font-black text-3xl md:text-4xl mt-4 leading-tight">Where does the oxygen in photosynthesis come from?</h3>
            <div className="mt-7 space-y-3">
              {["Carbon dioxide (CO₂)","Water (H₂O)","Sunlight, obviously"].map((o,i)=>{
                const picked = quiz===i; const right = i===1;
                return <button key={o} onClick={()=>setQuiz(i)} className={`w-full text-left font-bold border-[3px] rounded-2xl px-5 py-4 transition ${picked ? (right ? "bg-[#8be04e] text-black border-[#8be04e]" : "bg-[#ff4d8d] text-white border-[#ff4d8d]") : "border-white/30 hover:border-[#ffe03d] hover:text-[#ffe03d]"}`}>{o} {picked && (right ? "✓ YES! +10 brain points" : "✗ Nope — it’s the water!")}</button>
              })}
            </div>
            <p className="text-white/50 font-medium text-sm mt-5">Every Ratio summary ends like this. Three questions. Instant feedback. Zero judgement.</p>
          </div>
          <div id="wall" className="grid gap-5">
            {[{q:"I read the summary on the bus and aced the seminar. My tutor thinks I’m gifted now.",a:"Sofia, 17 — Sixth form",c:"bg-white"},{q:"Our book club picks 300-page monsters. Ratio is our cheat code and we’re not sorry.",a:"The Page Turners Book Club",c:"bg-[#fff0f6]"}].map(x=>(
              <div key={x.a} className={`${x.c} border-[3px] border-black rounded-[24px] p-6 hard-shadow rotate-[0.5deg]`}><div className="flex gap-1">{Array.from({length:5}).map((_,i)=><Star key={i} className="w-4 h-4 fill-[#ffb800] text-black"/>)}</div><p className="font-bold text-lg leading-snug mt-3">“{x.q}”</p><p className="font-bold text-sm text-black/45 mt-2 flex items-center gap-1.5"><Heart className="w-4 h-4 text-[#ff4d8d] fill-[#ff4d8d]"/>{x.a}</p></div>
            ))}
            <div id="price" className="bg-[#ffe03d] border-[3px] border-black rounded-[24px] p-6 hard-shadow flex flex-wrap items-center justify-between gap-4 rotate-[-0.5deg]">
              <div><p className="font-black text-3xl">Free × 3 PDFs/mo</p><p className="font-bold text-black/60">then $8/mo for unlimited everything</p></div>
              <button className="bg-black text-white font-black px-6 py-3.5 rounded-full flex items-center gap-2 hover:scale-105 transition">Start free <ArrowRight className="w-4 h-4"/></button>
            </div>
          </div>
        </section>
        <footer className="border-t-[3px] border-black py-7 flex flex-col md:flex-row justify-between gap-2 font-bold text-sm text-black/60"><span className="flex items-center gap-2"><Sticker className="w-4 h-4"/> © 2026 Ratio Reader — made with ♥ and highlighters</span><span>No card. No catch. Just the good parts. <Check className="inline w-4 h-4"/></span></footer>
      </main>
    </div>
  );
}
