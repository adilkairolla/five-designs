import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Check, FileText, Highlighter, Layers, Lightbulb, Quote, Sparkles, UploadCloud } from "lucide-react";

const tabs = [
  { id: "Summary", icon: Sparkles, title: "The argument, distilled", body: "Remote work didn’t reduce collaboration — it relocated it. The paper shows output rose 13% while meeting time fell, because written, asynchronous updates replaced status theatre. The gains concentrate in teams that documented decisions; teams that didn’t lost them to chat scroll.", meta: "312 words · ranked by dependency, not page order" },
  { id: "Quotes", icon: Quote, title: "Lines worth citing", body: "“Asynchronous writing is not a communication preference; it is an organisational memory.” — p. 23 · “The meeting did not die. It was finally made optional, and revealed as mostly habit.” — p. 41 · “Output rose 13% (95% CI 9–17) in documented-decision teams.” — p. 58", meta: "14 quotes · every one pinned to its page" },
  { id: "Hints", icon: Lightbulb, title: "Where readers get stuck", body: "The regression in Table 3 looks like it contradicts Chapter 2 — it doesn’t. It controls for team size, which is exactly the variable Chapter 2 says drives the effect. Read the footnote on p. 47 and the two chapters click together.", meta: "9 hints · calibrated to your level" },
  { id: "Check", icon: Layers, title: "Prove it stuck", body: "1) Why did documented teams gain more than chat-first teams?  2) What would falsify the 13% claim?  3) Explain ‘organisational memory’ to a new hire in one sentence. Answer in your own words — Ratio checks the reasoning, not the wording.", meta: "3 questions · instant, kind feedback" },
] as const;

export function Design5() {
  const [active, setActive] = useState<(typeof tabs)[number]>(tabs[0]);
  const [drag, setDrag] = useState(false);
  return (
    <div className="min-h-screen bg-[#0b0714] text-white font-[Inter] overflow-x-clip relative">
      {/* aurora bg */}
      <div className="fixed inset-0 pointer-events-none">
        <motion.div animate={{ x: [0, 60, 0], y: [0, -30, 0] }} transition={{ repeat: Infinity, duration: 18 }} className="absolute -top-40 left-[8%] w-[560px] h-[560px] rounded-full opacity-35" style={{ background: "radial-gradient(circle,#7c3aed 0%,transparent 65%)", filter: "blur(50px)" }} />
        <motion.div animate={{ x: [0, -50, 0], y: [0, 40, 0] }} transition={{ repeat: Infinity, duration: 22 }} className="absolute top-[30%] right-[-8%] w-[620px] h-[620px] rounded-full opacity-30" style={{ background: "radial-gradient(circle,#06b6d4 0%,transparent 65%)", filter: "blur(55px)" }} />
        <motion.div animate={{ x: [0, 40, 0] }} transition={{ repeat: Infinity, duration: 26 }} className="absolute bottom-[-20%] left-[28%] w-[520px] h-[520px] rounded-full opacity-25" style={{ background: "radial-gradient(circle,#f472b6 0%,transparent 65%)", filter: "blur(60px)" }} />
        <div className="absolute inset-0 opacity-[0.35]" style={{ backgroundImage: "radial-gradient(#ffffff14 1px, transparent 1px)", backgroundSize: "30px 30px" }} />
      </div>

      <header className="relative max-w-7xl mx-auto px-5 md:px-8 py-5">
        <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-xl px-4 py-3 shadow-2xl">
          <div className="flex items-center gap-2.5"><div className="w-9 h-9 rounded-xl bg-gradient-to-br from-violet-500 via-fuchsia-500 to-cyan-400 grid place-items-center font-black shadow-lg shadow-fuchsia-500/30">R:</div><span className="font-bold tracking-tight text-lg">Ratio Reader</span><span className="hidden sm:inline text-[10px] font-bold tracking-widest bg-white/10 border border-white/10 rounded-full px-2 py-0.5 text-white/70">AI · 2.0</span></div>
          <nav className="hidden md:flex gap-7 text-sm text-white/60"><a href="#product" className="hover:text-white transition">Product</a><a href="#proof">Proof</a><a href="#pricing">Pricing</a></nav>
          <div className="flex items-center gap-2"><span className="hidden sm:block text-sm text-white/60 mr-1">Sign in</span><button className="bg-white text-black text-sm font-bold px-4 py-2.5 rounded-full hover:bg-cyan-200 transition">Start free</button></div>
        </div>
      </header>

      <main className="relative max-w-7xl mx-auto px-5 md:px-8">
        <section className="pt-12 md:pt-20 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.05] backdrop-blur px-4 py-1.5 text-xs text-white/75"><Sparkles className="w-3.5 h-3.5 text-fuchsia-300" /> New — hints that adapt to your level <span className="text-white/35">·</span> <span className="text-cyan-300 font-semibold">See how →</span></motion.div>
          <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.08 }} className="mt-7 font-[Space_Grotesk] font-bold tracking-tight leading-[0.95] text-[52px] md:text-[92px]">Read the <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-300 via-fuchsia-300 to-cyan-300">5% that</span><br />carries the other 95%.</motion.h1>
          <motion.p initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.16 }} className="mt-6 max-w-2xl mx-auto text-white/60 text-lg leading-relaxed">Upload any PDF and get a ranked summary, page-anchored quotes, adaptive hints and a three-question check — in about 40 seconds. Built for students, researchers and teams who read for decisions.</motion.p>
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.24 }} className="mt-9 flex flex-col sm:flex-row justify-center gap-3">
            <button className="bg-gradient-to-r from-violet-500 to-fuchsia-500 font-bold px-7 py-4 rounded-full flex items-center justify-center gap-2 shadow-xl shadow-fuchsia-500/25 hover:scale-[1.03] transition">Upload your PDF <ArrowRight className="w-4 h-4" /></button>
            <a href="#product" className="border border-white/15 bg-white/[0.04] backdrop-blur px-7 py-4 rounded-full font-semibold hover:bg-white/10 transition text-center">Watch it think ↓</a>
          </motion.div>
          <p className="mt-5 text-xs text-white/35">Free for 3 PDFs a month · No card · Files deleted in 30 days</p>
        </section>

        {/* product window */}
        <motion.section id="product" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="mt-16 md:mt-20 relative">
          <div className="absolute -inset-3 bg-gradient-to-r from-violet-500/25 via-fuchsia-500/15 to-cyan-400/25 rounded-[36px] blur-2xl pointer-events-none" />
          <div className="relative rounded-[28px] border border-white/12 bg-[#120a24]/85 backdrop-blur-2xl shadow-2xl overflow-hidden">
            <div className="flex flex-wrap items-center gap-3 px-5 py-4 border-b border-white/8 bg-white/[0.02]">
              <div className="flex gap-1.5"><span className="w-3 h-3 rounded-full bg-white/15" /><span className="w-3 h-3 rounded-full bg-white/15" /><span className="w-3 h-3 rounded-full bg-white/15" /></div>
              <div onDragOver={e => { e.preventDefault(); setDrag(true); }} onDragLeave={() => setDrag(false)} className={`flex items-center gap-2.5 rounded-full border px-3.5 py-1.5 text-xs transition ${drag ? "border-cyan-300 bg-cyan-300/10 text-cyan-200" : "border-white/10 bg-white/[0.04] text-white/70"}`}><FileText className="w-3.5 h-3.5" /> async-work-study.pdf <span className="text-white/35">· 86 pages</span><span className="bg-emerald-400/15 text-emerald-300 border border-emerald-400/20 rounded-full px-2 py-0.5 font-bold text-[10px]">✓ DONE · 41s</span></div>
              <span className="ml-auto hidden md:flex items-center gap-2 text-xs text-white/40"><UploadCloud className="w-4 h-4" /> Drop another PDF anywhere</span>
            </div>
            <div className="grid lg:grid-cols-[230px_1fr]">
              <div className="flex lg:flex-col gap-2 p-4 overflow-x-auto lg:border-r border-white/8">
                {tabs.map(t => <button key={t.id} onClick={() => setActive(t)} className={`flex items-center gap-2.5 rounded-xl px-4 py-3 text-sm font-semibold whitespace-nowrap transition text-left ${active.id === t.id ? "bg-gradient-to-r from-violet-500/30 to-fuchsia-500/20 border border-fuchsia-400/30 text-white" : "text-white/50 hover:text-white hover:bg-white/[0.04] border border-transparent"}`}><t.icon className="w-4 h-4 shrink-0" />{t.id}<span className="ml-auto hidden lg:inline text-[10px] text-white/30">{t.id === "Summary" ? "312w" : t.id === "Quotes" ? "14" : t.id === "Hints" ? "9" : "3"}</span></button>)}
                <div className="hidden lg:block mt-auto rounded-2xl border border-white/10 bg-white/[0.03] p-4"><p className="text-[11px] text-white/45 leading-relaxed">Reading time</p><p className="font-[Space_Grotesk] font-bold text-2xl mt-1">86p → 6<span className="text-sm text-white/50"> min</span></p><div className="h-1.5 rounded-full bg-white/10 mt-3 overflow-hidden"><motion.div animate={{ width: "93%" }} className="h-full rounded-full bg-gradient-to-r from-violet-400 to-cyan-300" /></div><p className="text-[11px] text-cyan-300 mt-2 font-semibold">93% shorter. 100% defensible.</p></div>
              </div>
              <motion.div key={active.id} initial={{ opacity: 0, x: 14 }} animate={{ opacity: 1, x: 0 }} className="p-6 md:p-9 min-h-[300px]">
                <p className="text-[11px] tracking-[0.25em] text-fuchsia-300 font-bold">{active.id.toUpperCase()}</p>
                <h3 className="font-[Space_Grotesk] text-3xl md:text-4xl font-bold tracking-tight mt-3">{active.title}</h3>
                <p className="mt-4 text-white/65 leading-[1.85] text-[16px] max-w-2xl">{active.body}</p>
                <p className="mt-6 inline-flex items-center gap-2 text-xs text-white/45 border border-white/10 bg-white/[0.03] rounded-full px-3 py-1.5"><Highlighter className="w-3.5 h-3.5 text-cyan-300" />{active.meta}</p>
              </motion.div>
            </div>
          </div>
          {/* floating chips */}
          <motion.div animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 5 }} className="absolute -left-3 md:-left-8 top-24 hidden sm:block rounded-2xl border border-white/12 bg-white/[0.07] backdrop-blur-xl px-4 py-3 shadow-2xl rotate-[-4deg]"><p className="text-[10px] tracking-widest text-white/45 font-bold">TOP QUOTE</p><p className="font-[Space_Grotesk] font-semibold text-sm mt-1">“…an organisational memory.”</p><p className="text-[11px] text-cyan-300 mt-0.5">p. 23 · tap to cite</p></motion.div>
          <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 6 }} className="absolute -right-2 md:-right-6 bottom-16 hidden sm:block rounded-2xl border border-white/12 bg-white/[0.07] backdrop-blur-xl px-4 py-3 shadow-2xl rotate-[3deg]"><p className="text-[10px] tracking-widest text-white/45 font-bold">TIME SAVED</p><p className="font-[Space_Grotesk] font-bold text-xl mt-0.5">3h 12m <span className="text-emerald-300 text-sm">this week</span></p></motion.div>
        </motion.section>

        {/* proof */}
        <section id="proof" className="py-20">
          <div className="flex flex-wrap items-end justify-between gap-4"><div><p className="text-[11px] tracking-[0.25em] text-cyan-300 font-bold">WHY READERS STAY</p><h2 className="font-[Space_Grotesk] text-4xl md:text-5xl font-bold tracking-tight mt-3">Not a shorter PDF.<br /><span className="text-white/40">A stronger reader.</span></h2></div><div className="flex gap-8">{[["12,400+", "active readers"], ["1.9M", "pages distilled"], ["4.9 / 5", "reader rating"]].map(([v, l]) => <div key={l}><p className="font-[Space_Grotesk] font-bold text-2xl md:text-3xl">{v}</p><p className="text-xs text-white/40 mt-1">{l}</p></div>)}</div></div>
          <div className="grid md:grid-cols-3 gap-4 mt-10">
            {[{ q: "I cite Ratio quotes in board decks. Every one checks out against the source — that’s the whole game.", a: "Dana · Strategy lead, fintech", g: "from-cyan-400 to-sky-500" }, { q: "The hints feel like a senior colleague leaning over: ‘read the footnote, trust me.’ They were right.", a: "Omar · PhD, machine learning", g: "from-violet-400 to-fuchsia-500" }, { q: "Our onboarding reading list went from two weeks to two days. Retention checks went up, not down.", a: "Marta · Head of Enablement", g: "from-fuchsia-400 to-amber-400" }].map(x => (
              <figure key={x.a} className="rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-xl p-7 hover:bg-white/[0.06] hover:-translate-y-1 transition"><div className={`w-10 h-10 rounded-full bg-gradient-to-br ${x.g} grid place-items-center font-black text-sm`}>{x.a[0]}</div><blockquote className="mt-5 leading-relaxed text-white/75">“{x.q}”</blockquote><figcaption className="text-xs text-white/40 mt-4">{x.a}</figcaption></figure>
            ))}
          </div>
        </section>

        {/* pricing */}
        <section id="pricing" className="pb-24 grid lg:grid-cols-2 gap-4">
          <div className="rounded-[28px] border border-white/10 bg-white/[0.04] backdrop-blur-xl p-8 md:p-10">
            <p className="font-bold">Starter</p><p className="font-[Space_Grotesk] text-5xl font-bold mt-4">$0</p><p className="text-white/45 text-sm mt-2">For trying it on the PDF that’s been open in a tab for a month.</p>
            <ul className="mt-7 space-y-3 text-sm text-white/70">{["3 PDFs a month", "Summary + page-anchored quotes", "Hints & 3-question check"].map(t => <li key={t} className="flex gap-2.5"><Check className="w-4 h-4 text-cyan-300 mt-0.5 shrink-0" />{t}</li>)}</ul>
            <button className="mt-8 w-full border border-white/20 rounded-full py-3.5 font-bold hover:bg-white hover:text-black transition">Start free</button>
          </div>
          <div className="relative rounded-[28px] p-[1.5px] bg-gradient-to-br from-violet-400 via-fuchsia-400 to-cyan-300 shadow-2xl shadow-fuchsia-500/20">
            <div className="rounded-[27px] bg-[#150b28] p-8 md:p-10 h-full">
              <div className="flex justify-between items-center"><p className="font-bold">Reader Pro</p><span className="text-[10px] font-black tracking-widest bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-full px-2.5 py-1">MOST CHOSEN</span></div>
              <p className="font-[Space_Grotesk] text-5xl font-bold mt-4">$8<span className="text-lg text-white/40 font-normal"> / month</span></p>
              <p className="text-white/45 text-sm mt-2">For people whose reading list grows faster than their calendar.</p>
              <ul className="mt-7 space-y-3 text-sm text-white/80">{["Unlimited PDFs, up to 500 pages", "Adaptive hints tuned to your level", "Export to Notion, Obsidian & Anki", "Team libraries & shared quotes"].map(t => <li key={t} className="flex gap-2.5"><Check className="w-4 h-4 text-fuchsia-300 mt-0.5 shrink-0" />{t}</li>)}</ul>
              <button className="mt-8 w-full bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-full py-3.5 font-bold shadow-lg shadow-fuchsia-500/30 hover:scale-[1.02] transition">Go Pro — read everything</button>
            </div>
          </div>
        </section>
        <footer className="border-t border-white/8 py-8 flex flex-col md:flex-row justify-between gap-2 text-xs text-white/35"><span>© 2026 Ratio Reader — upload a PDF, keep the point.</span><span>Privacy · Terms · SOC2-ready · No training on your files</span></footer>
      </main>
    </div>
  );
}
