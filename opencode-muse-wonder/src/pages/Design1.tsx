import { ArrowRight, ArrowUpRight, BookOpen, Bookmark, Check, FileText, Highlighter, Lightbulb, Quote, Search } from "lucide-react";

export function Design1() {
  return (
    <div className="min-h-screen bg-[#fffdf5] text-[#14120f] paper-grain font-[Inter]">
      {/* masthead */}
      <header className="border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="flex justify-between py-2 text-[10px] md:text-[11px] font-mono tracking-[0.18em] border-b border-black/15">
            <span>VOL. 01 — THE READING ISSUE</span><span className="hidden md:inline">EST. 2026 • FOR STUDENTS, RESEARCHERS & THE CURIOUS</span><span>TUESDAY EDITION</span>
          </div>
          <div className="flex items-end justify-between py-5 gap-4">
            <p className="hidden lg:block text-xs leading-relaxed max-w-[180px] text-black/60">All the signal.<br/>None of the slog.<br/><span className="font-bold text-black">47 pages → 4 minutes.</span></p>
            <div className="text-center flex-1">
              <h1 className="font-[Playfair_Display] font-black tracking-tight leading-none text-[42px] md:text-[72px]">The Ratio <span className="italic font-medium">Reader</span></h1>
              <p className="mt-2 text-[11px] tracking-[0.3em] font-bold">READ LESS. &nbsp;UNDERSTAND MORE.</p>
            </div>
            <div className="hidden lg:flex flex-col items-end gap-2"><span className="text-xs font-mono border border-black px-2 py-1">№ 001 — FREE TO START</span><button className="bg-black text-white text-xs font-bold px-4 py-2.5 tracking-widest hover:bg-red-700 transition">START READING →</button></div>
          </div>
          <nav className="flex justify-center gap-6 md:gap-10 border-t border-black py-3 text-[11px] font-bold tracking-[0.2em] overflow-x-auto whitespace-nowrap">
            <a href="#story" className="hover:text-red-700">THE STORY</a><a href="#how">HOW IT WORKS</a><a href="#evidence">EVIDENCE</a><a href="#voices">READERS</a><a href="#price" className="text-red-700">SUBSCRIBE ↓</a>
          </nav>
        </div>
      </header>

      {/* hero */}
      <main id="story" className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="grid lg:grid-cols-12 gap-0 border-x border-black/10">
          <div className="lg:col-span-8 p-6 md:p-10 lg:border-r border-black/10">
            <div className="flex items-center gap-3"><span className="bg-red-700 text-white text-[10px] font-black tracking-widest px-2 py-1">FRONT PAGE</span><span className="text-xs font-mono text-black/50">BY THE EDITORS — 4 MIN READ (OBVIOUSLY)</span></div>
            <h2 className="mt-6 font-[Playfair_Display] text-[44px] leading-[0.95] md:text-[76px] font-black tracking-tight">Your PDF has<br/>200 pages.<br/><span className="italic font-medium text-red-700">You need 9 of them.</span></h2>
            <p className="mt-6 text-lg md:text-xl leading-relaxed max-w-2xl text-black/75"><span className="font-[Playfair_Display] text-5xl float-left leading-[0.8] mr-2 mt-1 font-black">U</span>pload any textbook, paper or report. Ratio finds the argument, pulls the quotes worth citing, and leaves hints in the margins — so you walk away knowing it, not just having “read” it.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <button className="bg-red-700 text-white font-bold px-6 py-3.5 text-sm tracking-wide flex items-center gap-2 hover:bg-black transition">Upload your first PDF <ArrowRight className="w-4 h-4"/></button>
              <button className="border-2 border-black font-bold px-6 py-3.5 text-sm bg-white hover:bg-[#ffeec2] transition">See a sample summary ↓</button>
            </div>
            <div className="mt-8 flex gap-6 text-xs font-mono text-black/60"><span>✓ NO CARD REQUIRED</span><span>✓ 3 PDFS FREE</span><span>✓ DELETES AFTER 30 DAYS</span></div>

            {/* summary artefact */}
            <article className="mt-10 border-2 border-black bg-white p-6 md:p-8 shadow-[8px_8px_0_#14120f] rotate-[-0.3deg]">
              <div className="flex justify-between items-start border-b-2 border-black pb-4"><div><p className="text-[10px] tracking-[0.25em] font-black text-red-700">EXHIBIT A — ACTUAL OUTPUT</p><h3 className="font-[Playfair_Display] font-black text-2xl mt-1">Thinking, Fast and Slow — Ch. 4–9</h3><p className="text-xs font-mono text-black/50 mt-1">kahneman.pdf • 47 pages • processed in 38s</p></div><span className="font-[Playfair_Display] italic text-4xl leading-none">95<span className="text-base">/5</span></span></div>
              <div className="grid md:grid-cols-[1.4fr_1fr] gap-6 mt-5">
                <div>
                  <p className="text-[10px] font-black tracking-widest flex items-center gap-2"><BookOpen className="w-3.5 h-3.5"/> THE SUMMARY — IN PLAIN ENGLISH</p>
                  <p className="mt-3 leading-relaxed text-[15px]">Your brain runs two systems: a fast, intuitive one and a slow, deliberate one. Most errors happen when System 1 answers a hard question with an easy one — and you never notice the swap.</p>
                  <ul className="mt-4 space-y-2 text-sm">{["Substitution: we answer an easier question instead","WYSIATI: we judge from whatever happens to be visible","Anchoring: the first number drags every estimate after it"].map(t=><li key={t} className="flex gap-2"><Check className="w-4 h-4 text-red-700 shrink-0 mt-0.5"/><span>{t}</span></li>)}</ul>
                </div>
                <div className="space-y-4">
                  <div className="bg-[#fff3c4] border border-black/70 p-4 rotate-[0.6deg]"><p className="text-[10px] font-black tracking-widest flex gap-1.5"><Quote className="w-3.5 h-3.5"/> QUOTE WORTH KEEPING</p><p className="font-[Playfair_Display] italic mt-2 leading-snug">“Nothing in life is as important as you think it is, while you are thinking about it.”</p><p className="text-[11px] font-mono mt-2 text-black/50">— p. 112 • tap to copy citation</p></div>
                  <div className="bg-white border border-dashed border-black/60 p-4"><p className="text-[10px] font-black tracking-widest flex gap-1.5"><Lightbulb className="w-3.5 h-3.5"/> MARGIN HINT</p><p className="text-sm mt-2 leading-relaxed">If an exam asks about <b>anchoring</b>, use the wheel-of-fortune experiment. It’s the cleanest example in the chapter.</p></div>
                </div>
              </div>
            </article>
          </div>

          {/* sidebar */}
          <aside className="lg:col-span-4 p-6 md:p-8 bg-[#f7f0dc]/60">
            <p className="text-[10px] font-black tracking-[0.25em] border-b border-black pb-3">INSIDE THIS ISSUE</p>
            {[{n:"01",t:"The 5% Rule",d:"Most documents repeat themselves. Ratio ranks every paragraph by how much the rest depends on it."},{n:"02",t:"Quotes, with receipts",d:"Every quote links back to its page. Cite it without re-opening the PDF."},{n:"03",t:"Hints, not answers",d:"Stuck on a concept? Get a nudge written for your level — not a lecture."},{n:"04",t:"Prove you got it",d:"Three questions at the end. If you can answer them, you actually know it."}].map(f=>(
              <div key={f.n} className="py-5 border-b border-black/15 group cursor-pointer"><div className="flex justify-between"><span className="font-[Playfair_Display] italic text-2xl text-red-700">{f.n}</span><ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition"/></div><h3 className="font-[Playfair_Display] font-bold text-xl mt-1">{f.t}</h3><p className="text-sm text-black/65 leading-relaxed mt-1">{f.d}</p></div>
            ))}
            <div className="mt-6 bg-black text-white p-5"><p className="font-[Playfair_Display] italic text-xl leading-snug">“I stopped highlighting everything. Now I highlight what matters.”</p><p className="text-[11px] font-mono tracking-widest mt-3 text-white/60">— AMINA, MED STUDENT, LAGOS</p></div>
            <div className="mt-5 grid grid-cols-3 text-center divide-x divide-black/15 border border-black/20 bg-white py-4"><div><p className="font-black text-xl">12k+</p><p className="text-[10px] tracking-widest text-black/50">READERS</p></div><div><p className="font-black text-xl">4.9★</p><p className="text-[10px] tracking-widest text-black/50">RATING</p></div><div><p className="font-black text-xl">38s</p><p className="text-[10px] tracking-widest text-black/50">AVG. PDF</p></div></div>
          </aside>
        </div>

        {/* how */}
        <section id="how" className="border-x border-t border-black/10 grid md:grid-cols-3">
          {[{i:FileText,t:"1. Drop the PDF",d:"Textbook, paper, contract, manual. Up to 500 pages — scanned pages get OCR automatically."},{i:Search,t:"2. Ratio reads the structure",d:"It maps arguments, definitions and evidence — then ranks what everything else depends on."},{i:Highlighter,t:"3. You read the ratio",d:"Summary first. Quotes and hints in the margins. Questions at the end to lock it in."}].map((s,i)=>(
            <div key={s.t} className={`p-8 ${i<2?'md:border-r':''} border-black/10`}><s.i className="w-7 h-7"/><h3 className="font-[Playfair_Display] font-black text-2xl mt-4">{s.t}</h3><p className="text-sm leading-relaxed text-black/65 mt-2">{s.d}</p></div>
          ))}
        </section>

        {/* voices + price */}
        <section id="voices" className="border border-black/10 grid lg:grid-cols-2">
          <div className="p-8 md:p-10 lg:border-r border-black/10">
            <p className="text-[10px] font-black tracking-[0.25em] text-red-700">LETTERS FROM READERS</p>
            <div className="mt-6 space-y-6">
              {[{q:"My lecturer asked where I found the Kahneman quote. It was page 112. I’d never opened page 112.",a:"Jonas — Psychology undergrad"},{q:"I prep for client meetings with annual reports I used to skim and pray about. Not anymore.",a:"Priya — Consultant, Mumbai"}].map(x=><blockquote key={x.a} className="border-l-4 border-red-700 pl-5"><p className="font-[Playfair_Display] text-xl leading-snug italic">“{x.q}”</p><cite className="text-xs font-mono not-italic text-black/50 block mt-2">— {x.a}</cite></blockquote>)}
            </div>
          </div>
          <div id="price" className="p-8 md:p-10 bg-black text-white relative overflow-hidden">
            <Bookmark className="absolute -right-4 -top-4 w-32 h-32 text-white/5 rotate-12"/>
            <p className="text-[10px] font-black tracking-[0.25em] text-[#ffe03d]">SUBSCRIPTION — SIMPLE AS PRINT</p>
            <div className="mt-6 flex items-end gap-6"><div><p className="text-sm text-white/60">Free</p><p className="font-[Playfair_Display] font-black text-4xl">$0</p><p className="text-xs text-white/50 mt-1">3 PDFs / month</p></div><div className="border-l border-white/20 pl-6"><p className="text-sm text-[#ffe03d]">Reader ★</p><p className="font-[Playfair_Display] font-black text-4xl">$8<span className="text-base font-normal">/mo</span></p><p className="text-xs text-white/50 mt-1">Unlimited • hints • quizzes • export</p></div></div>
            <button className="mt-8 w-full bg-[#ffe03d] text-black font-black py-3.5 tracking-wide hover:bg-white transition">START FREE — NO CARD →</button>
            <p className="text-center text-[11px] text-white/40 mt-3 font-mono">Cancel anytime. Your PDFs stay yours.</p>
          </div>
        </section>
        <footer className="py-8 flex flex-col md:flex-row justify-between gap-3 text-[11px] font-mono tracking-widest text-black/50 border-x border-b border-black/10 px-6"><span>© 2026 RATIO READER — PRINTED ON PIXELS</span><span>PRIVACY • TERMS • MADE FOR READERS</span></footer>
      </main>
    </div>
  );
}
