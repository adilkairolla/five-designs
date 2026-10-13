import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Feather, Leaf, Moon, Quote } from "lucide-react";

const fade = { initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: "-60px" }, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] as const } };

export function Design4() {
  return (
    <div className="min-h-screen bg-[#f3efe6] text-[#2b2a26] font-[Inter] selection:bg-[#dfe5d2]">
      <header className="max-w-6xl mx-auto px-6 py-7 flex items-center justify-between">
        <div className="flex items-center gap-2.5"><span className="w-8 h-8 rounded-full border border-[#2b2a26]/25 grid place-items-center font-[Cormorant_Garamond] italic text-lg">r</span><span className="font-[Cormorant_Garamond] text-2xl tracking-wide">Ratio Reader</span></div>
        <nav className="hidden md:flex gap-9 text-[13px] text-[#2b2a26]/60"><a href="#practice" className="hover:text-black transition">The practice</a><a href="#page">A page</a><a href="#voices">Voices</a><a href="#begin">Begin</a></nav>
        <a href="#begin" className="text-[13px] border border-[#2b2a26]/25 rounded-full px-4 py-2 hover:bg-[#2b2a26] hover:text-[#f3efe6] transition">Begin free</a>
      </header>

      <main className="max-w-6xl mx-auto px-6">
        {/* hero */}
        <section className="pt-16 md:pt-28 pb-20 text-center relative">
          <motion.div animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.8, 0.5] }} transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }} className="absolute left-1/2 top-6 -translate-x-1/2 w-[420px] h-[420px] rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, #cdd8b8 0%, transparent 65%)" }} />
          <motion.p {...fade} className="relative text-[11px] tracking-[0.35em] text-[#7a8b6f] font-medium">A QUIETER WAY TO READ</motion.p>
          <motion.h1 {...fade} transition={{ ...fade.transition, delay: 0.1 }} className="relative font-[Cormorant_Garamond] font-medium text-[52px] leading-[1.02] md:text-[92px] tracking-tight mt-6">Dense documents,<br /><span className="italic text-[#5c6b52]">read gently.</span></motion.h1>
          <motion.p {...fade} transition={{ ...fade.transition, delay: 0.2 }} className="relative mt-7 max-w-xl mx-auto text-[#2b2a26]/65 leading-[1.9] text-[17px]">Upload a PDF. Ratio distils it to its essence — a calm summary, the sentences worth keeping, and quiet hints where the path gets steep. Four unhurried minutes, instead of forty restless ones.</motion.p>
          <motion.div {...fade} transition={{ ...fade.transition, delay: 0.3 }} className="relative mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
            <button className="bg-[#2b2a26] text-[#f3efe6] rounded-full px-8 py-4 text-sm flex items-center gap-2 hover:bg-[#5c6b52] transition">Upload a PDF <ArrowRight className="w-4 h-4" /></button>
            <a href="#page" className="text-sm text-[#2b2a26]/60 underline underline-offset-8 decoration-[#7a8b6f]/50 hover:text-black transition">or see a finished page</a>
          </motion.div>
          <motion.p {...fade} transition={{ ...fade.transition, delay: 0.4 }} className="relative mt-6 text-xs text-[#2b2a26]/40 tracking-wide">Three documents a month, free · Nothing is kept longer than you wish</motion.p>
        </section>

        <div className="flex items-center gap-4 text-[#7a8b6f]"><span className="h-px flex-1 bg-[#2b2a26]/10" /><Leaf className="w-4 h-4" /><span className="h-px flex-1 bg-[#2b2a26]/10" /></div>

        {/* practice */}
        <section id="practice" className="py-20 grid md:grid-cols-3 gap-10 md:gap-8">
          {[{ n: "一", t: "Arrive", d: "Drop in the document — a thesis, a paper, a manual. Scanned pages are read for you, patiently, by OCR." }, { n: "二", t: "Distil", d: "Ratio weighs every paragraph against everything that follows it, and keeps only what the whole depends on." }, { n: "三", t: "Dwell", d: "Read the essence first. Quotes and hints rest in the margin, there when you want them, silent when you don’t." }].map((s, i) => (
            <motion.div key={s.t} {...fade} transition={{ ...fade.transition, delay: i * 0.12 }} className="text-center md:text-left">
              <p className="font-[Cormorant_Garamond] italic text-3xl text-[#7a8b6f]">{s.n}</p>
              <h3 className="font-[Cormorant_Garamond] text-3xl mt-3">{s.t}</h3>
              <p className="text-[15px] leading-[1.85] text-[#2b2a26]/60 mt-2">{s.d}</p>
            </motion.div>
          ))}
        </section>

        {/* the page */}
        <motion.section id="page" {...fade} className="relative bg-[#fdfaf3] rounded-[32px] border border-[#2b2a26]/8 shadow-[0_40px_80px_-40px_rgba(60,70,50,0.25)] px-7 py-10 md:p-14 grid lg:grid-cols-[1.5fr_1fr] gap-10 overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, #e6ead6 0%, transparent 70%)" }} />
          <div className="relative">
            <p className="text-[10px] tracking-[0.3em] text-[#7a8b6f]">A FINISHED PAGE · “THE DESIGN OF EVERYDAY THINGS”, CH. 1</p>
            <h3 className="font-[Cormorant_Garamond] text-4xl md:text-[44px] leading-tight mt-4">When you push a door that should be pulled, the door is wrong — <span className="italic text-[#5c6b52]">not you.</span></h3>
            <p className="mt-5 leading-[1.95] text-[#2b2a26]/70">Norman’s argument is simple and radical: confusion is a design failure, not a user failure. Good objects explain themselves — handles invite pulling, plates invite pushing — so the mind never has to stop and translate.</p>
            <div className="mt-7 space-y-3">
              {["Affordances: what an object allows, at a glance", "Signifiers: the small clues that say where to act", "Feedback: the quiet confirmation that it worked"].map(t => <p key={t} className="flex gap-3 text-[15px] text-[#2b2a26]/75"><span className="w-1.5 h-1.5 rounded-full bg-[#7a8b6f] mt-2.5 shrink-0" />{t}</p>)}
            </div>
            <p className="mt-8 font-[Cormorant_Garamond] italic text-xl text-[#5c6b52]">Four minutes, at your pace. The other 196 pages will keep.</p>
          </div>
          <div className="relative space-y-5 lg:pt-14">
            <figure className="bg-[#f3efe6] rounded-3xl p-6 border border-[#2b2a26]/6 rotate-[0.5deg]">
              <Quote className="w-4 h-4 text-[#7a8b6f]" />
              <blockquote className="font-[Cormorant_Garamond] italic text-[22px] leading-snug mt-3">“Good design is actually a lot harder to notice than poor design.”</blockquote>
              <figcaption className="text-xs text-[#2b2a26]/45 mt-3 tracking-wide">p. 9 · saved to your commonplace book</figcaption>
            </figure>
            <aside className="rounded-3xl p-6 border border-dashed border-[#7a8b6f]/40">
              <p className="text-[10px] tracking-[0.25em] text-[#7a8b6f] flex items-center gap-2"><Feather className="w-3.5 h-3.5" /> A HINT, IN THE MARGIN</p>
              <p className="text-[15px] leading-relaxed mt-3 text-[#2b2a26]/70">If you remember one example, take the “Norman door”. It carries the whole chapter — examiners and interviewers both love it.</p>
            </aside>
            <aside className="rounded-3xl p-6 bg-[#2b2a26] text-[#f3efe6]">
              <p className="text-[10px] tracking-[0.25em] text-[#aebfa0] flex items-center gap-2"><Moon className="w-3.5 h-3.5" /> BEFORE YOU REST</p>
              <p className="font-[Cormorant_Garamond] text-xl mt-3 leading-snug">Can you explain, in one breath, why the door was never your fault?</p>
              <p className="text-xs text-white/45 mt-2">One of three gentle questions. No score — only knowing.</p>
            </aside>
          </div>
        </motion.section>

        {/* voices */}
        <section id="voices" className="py-24 grid md:grid-cols-2 gap-12">
          {[{ q: "It feels less like software and more like a tutor who respects my evening.", a: "Clara — historian, Berlin" }, { q: "I read the essence with tea. Then, often, I choose to read the whole — but now it is a choice.", a: "Kenji — doctoral researcher, Kyoto" }].map((x, i) => (
            <motion.blockquote key={x.a} {...fade} transition={{ ...fade.transition, delay: i * 0.15 }}>
              <p className="font-[Cormorant_Garamond] text-[28px] md:text-[32px] leading-[1.3]">“{x.q}”</p>
              <cite className="not-italic text-[13px] text-[#2b2a26]/45 block mt-4 tracking-wide">— {x.a}</cite>
            </motion.blockquote>
          ))}
        </section>

        {/* begin */}
        <motion.section id="begin" {...fade} className="mb-24 text-center bg-[#e9e4d3]/60 rounded-[32px] py-16 px-6 relative overflow-hidden">
          <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, duration: 9 }} className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[380px] h-[380px] rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, #d3ddc0 0%, transparent 65%)" }} />
          <p className="relative text-[11px] tracking-[0.35em] text-[#7a8b6f]">BEGIN, SIMPLY</p>
          <h3 className="relative font-[Cormorant_Garamond] text-4xl md:text-6xl mt-4">Free for three documents.<br /><span className="italic text-[#5c6b52]">$8 a month, unlimited, thereafter.</span></h3>
          <button className="relative mt-9 bg-[#2b2a26] text-[#f3efe6] rounded-full px-9 py-4 text-sm inline-flex items-center gap-2 hover:bg-[#5c6b52] transition">Read your first document <ArrowUpRight className="w-4 h-4" /></button>
          <p className="relative text-xs text-[#2b2a26]/40 mt-5">No card. No noise. Your files are deleted when you ask — or after thirty days, quietly.</p>
        </motion.section>

        <footer className="pb-10 flex flex-col md:flex-row justify-between gap-2 text-xs text-[#2b2a26]/40 tracking-wide border-t border-[#2b2a26]/8 pt-7">
          <span>© 2026 Ratio Reader — for people who would rather understand</span>
          <span>Privacy · Terms · Breathe in, breathe out</span>
        </footer>
      </main>
    </div>
  );
}
