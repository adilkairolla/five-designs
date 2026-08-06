import { useState } from "react";
import { Link } from "react-router-dom";

export default function Design3() {
  const [file, setFile] = useState(false);

  return (
    <div className="min-h-screen bg-[#050507] text-[#EDEFF6] selection:bg-[#7C5CFF] selection:text-white overflow-x-hidden">
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@400;600;800&family=JetBrains+Mono:wght@400;600&family=Plus+Jakarta+Sans:wght@600;800&display=swap');`}</style>

      {/* ambient */}
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute -top-[30%] left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-[#7C5CFF]/30 blur-[120px] rounded-full" />
        <div className="absolute top-[20%] -right-40 w-[600px] h-[600px] bg-[#00E5FF]/16 blur-[110px] rounded-full" />
        <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`, backgroundSize: '40px 40px' }} />
      </div>

      {/* nav */}
      <nav className="sticky top-0 z-40 backdrop-blur-xl bg-[#050507]/60 border-b border-white/10">
        <div className="max-w-[1200px] mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-white text-black grid place-items-center font-black" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>R</div>
            <span className="font-bold tracking-tight">ratio</span>
            <span className="hidden md:inline text-xs px-2 py-1 rounded-full bg-white/10 border border-white/10">Beta · Lab Preview</span>
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm opacity-70">
            <a href="#lab" className="hover:opacity-100">Lab</a>
            <a href="#how" className="hover:opacity-100">Flow</a>
            <a href="#pricing" className="hover:opacity-100">Pricing</a>
            <Link to="/" className="opacity-100 border border-white/15 px-4 py-2 rounded-full hover:bg-white hover:text-black transition">Directory</Link>
          </div>
          <a href="#upload" className="md:hidden bg-white text-black px-4 py-2 rounded-full text-sm font-bold">Open Lab</a>
        </div>
      </nav>

      {/* hero */}
      <section className="relative max-w-[1200px] mx-auto px-6 pt-10 md:pt-16 pb-8 grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center">
        <div>
          <div className="inline-flex items-center gap-2 text-xs px-3 py-1 rounded-full bg-[#7C5CFF]/20 border border-[#7C5CFF]/30">
            <span className="w-2 h-2 rounded-full bg-[#7C5CFF] animate-pulse" /> New — Cited summaries, not vibes
          </div>
          <h1 className="mt-5 text-5xl md:text-7xl font-black leading-[0.9] tracking-[-0.04em]" style={{ fontFamily: 'Bricolage Grotesque, sans-serif' }}>
            Your PDFs,<br />
            <span className="bg-gradient-to-r from-[#7C5CFF] via-[#00E5FF] to-[#FF5C8A] bg-clip-text text-transparent">understood.</span><br />
            In one ratio.
          </h1>
          <p className="mt-4 text-lg opacity-70 max-w-xl">Drop any PDF. Get a cited summary, key quotes with page anchors, and hints that tell you what to do next — in about eleven seconds.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#upload" className="bg-white text-black px-6 py-3 rounded-full font-bold">Try the Lab — Free →</a>
            <a href="#how" className="border border-white/15 px-6 py-3 rounded-full font-semibold bg-white/5">Watch 20s demo</a>
          </div>
          <div className="mt-6 flex items-center gap-4 text-sm opacity-60">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map(i => <img key={i} src={`https://i.pravatar.cc/100?img=${10 + i}`} alt="" className="w-8 h-8 rounded-full border-2 border-[#050507] object-cover" />)}
            </div>
            <span>42k researchers · 4.9/5 (2.1k reviews)</span>
          </div>
        </div>

        {/* glass lab card */}
        <div id="upload" className="relative">
          <div className="absolute -inset-3 bg-gradient-to-br from-[#7C5CFF]/30 to-[#00E5FF]/20 blur-2xl rounded-[32px]" />
          <div className="relative rounded-[28px] bg-white/[0.07] border border-white/15 backdrop-blur-2xl p-6 shadow-[0_20px_80px_rgba(0,0,0,0.6)]">
            <div className="flex justify-between items-center">
              <span className="text-xs tracking-widest opacity-60" style={{ fontFamily: 'JetBrains Mono, monospace' }}>RATIO LAB — INTAKE</span>
              <span className="text-xs px-2 py-1 rounded-full bg-[#00FF94]/15 border border-[#00FF94]/30">● Live parsing</span>
            </div>

            <label
              onDragOver={e => e.preventDefault()}
              onDrop={e => { e.preventDefault(); setFile(true); }}
              className={`mt-4 block rounded-2xl border-2 border-dashed p-8 text-center cursor-pointer transition ${file ? "border-[#00FF94]/50 bg-[#00FF94]/10" : "border-white/15 hover:border-white/30 bg-white/[0.03] hover:bg-white/[0.06]"}`}
            >
              <input type="file" className="hidden" onChange={() => setFile(true)} />
              <div className="w-12 h-12 mx-auto rounded-xl bg-white text-black grid place-items-center text-xl">⬆</div>
              <div className="font-bold mt-3">{file ? "quantum-field-notes.pdf — 42 pages" : "Drop PDF or click to browse"}</div>
              <div className="text-sm opacity-60">Scanned PDFs OK · Up to 300 pages · Private</div>
              {file && <div className="mt-3 text-xs inline-flex gap-2"><span className="bg-[#00FF94] text-black px-2 py-1 rounded-full">✓ Parsed</span><span className="bg-white text-black px-2 py-1 rounded-full">View ratio →</span></div>}
            </label>

            {/* mini ratio preview */}
            <div className="mt-4 grid grid-cols-3 gap-3">
              {[
                { t: "TL;DR", v: "Ocean heat +34%" },
                { t: "Quotes", v: "12 sourced" },
                { t: "Hints", v: "7 next steps" },
              ].map(k => (
                <div key={k.t} className="rounded-2xl bg-black/40 border border-white/10 p-3">
                  <div className="text-[10px] tracking-widest opacity-60" style={{ fontFamily: 'JetBrains Mono, monospace' }}>{k.t}</div>
                  <div className="font-bold text-sm">{k.v}</div>
                </div>
              ))}
            </div>

            <div className="mt-4 rounded-2xl bg-black/50 border border-white/10 p-4">
              <div className="text-xs opacity-60" style={{ fontFamily: 'JetBrains Mono, monospace' }}>QUOTE — p.18 ¶2 · VERIFIED</div>
              <div className="text-sm mt-1 leading-relaxed">“Ocean heat content ... exceeding 2015–2023 avg by <span className="bg-[#7C5CFF] px-1 rounded">34%</span>.”</div>
              <div className="mt-2 text-xs inline-flex gap-2">
                <span className="bg-white text-black px-2 py-1 rounded-full text-[11px]">Copy citation</span>
                <span className="border border-white/15 px-2 py-1 rounded-full text-[11px]">Open at p.18 ↗</span>
              </div>
            </div>
          </div>
          <div className="mt-3 flex justify-center gap-2 text-xs opacity-60">
            <span>⚡ 11 sec avg</span><span>·</span><span>🔒 Not used for training</span><span>·</span><span>↗ Export to Notion</span>
          </div>
        </div>
      </section>

      {/* logos */}
      <div className="border-y border-white/10 bg-white/[0.03] backdrop-blur py-3">
        <div className="max-w-[1200px] mx-auto px-6 flex flex-wrap gap-6 justify-between items-center text-xs tracking-widest opacity-50">
          <span>TRUSTED AT</span>
          <span className="font-bold tracking-tight text-sm opacity-100">Stanford</span>
          <span className="font-bold tracking-tight text-sm opacity-100">ETH Zürich</span>
          <span className="font-bold tracking-tight text-sm opacity-100">MIT Media Lab</span>
          <span className="font-bold tracking-tight text-sm opacity-100">The Atlantic</span>
          <span className="font-bold tracking-tight text-sm opacity-100">Notion</span>
        </div>
      </div>

      {/* flow */}
      <section id="how" className="max-w-[1200px] mx-auto px-6 py-12">
        <div className="flex items-end justify-between">
          <h2 className="text-3xl font-black tracking-tight" style={{ fontFamily: 'Bricolage Grotesque, sans-serif' }}>From noise to ratio.</h2>
          <span className="hidden md:block text-sm opacity-60">4 steps · 11 seconds · fully cited</span>
        </div>
        <div className="mt-6 grid md:grid-cols-4 gap-4">
          {[
            { n: "01", t: "Ingest", d: "OCR + layout. Even photos of pages. We rebuild headings, tables, footnotes.", accent: "from-[#7C5CFF] to-[#4F3AFF]" },
            { n: "02", t: "Distill", d: "Keep the 8% that decides. Archive the rest as searchable appendix.", accent: "from-[#00E5FF] to-[#0AAFFF]" },
            { n: "03", t: "Prove", d: "Every bullet links to a verbatim quote and page. Click to verify.", accent: "from-[#FF5C8A] to-[#FF8A5C]" },
            { n: "04", t: "Act", d: "Hints + mental models tell you what this means for your next step.", accent: "from-[#00FF94] to-[#7CFF7C]" },
          ].map(s => (
            <div key={s.n} className="rounded-3xl bg-white/[0.06] border border-white/10 p-6 hover:bg-white/[0.08] transition">
              <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${s.accent} grid place-items-center text-black font-black text-sm`}>{s.n}</div>
              <div className="font-bold mt-4">{s.t}</div>
              <div className="text-sm opacity-60 mt-1 leading-relaxed">{s.d}</div>
            </div>
          ))}
        </div>
      </section>

      {/* bento: insight demo + quotes wall */}
      <section id="lab" className="max-w-[1200px] mx-auto px-6 grid lg:grid-cols-[1.2fr_0.8fr] gap-4">
        <div className="rounded-[28px] bg-white text-[#0A0A0E] p-6 md:p-8">
          <div className="text-xs tracking-widest opacity-60" style={{ fontFamily: 'JetBrains Mono, monospace' }}>LIVE EXAMPLE — 42-PP CLIMATE REPORT → 1-PAGE RATIO</div>
          <h3 className="text-3xl font-black leading-none mt-3" style={{ fontFamily: 'Bricolage Grotesque, sans-serif' }}>Ocean heat is<br />accelerating.</h3>
          <div className="mt-4 grid md:grid-cols-2 gap-4">
            <div className="bg-[#F6F5FF] border border-black/5 rounded-2xl p-4">
              <div className="text-xs font-bold">● The signal</div>
              <div className="text-sm mt-1">Ocean heat +34% above 2015–23 avg. Models lag reality.</div>
            </div>
            <div className="bg-[#FFF0F5] border border-black/5 rounded-2xl p-4">
              <div className="text-xs font-bold">◎ So what?</div>
              <div className="text-sm mt-1">Expect stronger, wetter hurricanes sooner than planned.</div>
            </div>
          </div>
          <div className="mt-4 rounded-2xl border border-black/10 p-4 bg-[#FFFDF0]">
            <div className="text-xs opacity-60">HINT — Why care?</div>
            <div className="text-sm mt-1">If oceans store more heat, storms get more fuel. This one number reframes the whole risk model. <span className="underline">See p.31 flood map</span>.</div>
          </div>
          <div className="mt-4 flex gap-2 text-xs">
            <span className="bg-black text-white px-3 py-1 rounded-full">2-min brief</span>
            <span className="border border-black/15 px-3 py-1 rounded-full">Export →</span>
            <span className="border border-black/15 px-3 py-1 rounded-full">Share →</span>
          </div>
        </div>

        <div className="rounded-[28px] bg-white/[0.06] border border-white/10 p-6 backdrop-blur">
          <div className="text-xs tracking-widest opacity-60" style={{ fontFamily: 'JetBrains Mono, monospace' }}>WALL OF QUOTES — CLICK TO SOURCE</div>
          <div className="mt-4 space-y-3">
            {[
              ["We are no longer on the median pathway.", "p.18"],
              ["Exceeding 2015–23 average by 34%.", "p.18 ¶2"],
              ["Flood exposure underestimated by factor 2.", "p.31"],
            ].map(([q, p]) => (
              <div key={q} className="bg-black/40 border border-white/10 rounded-2xl p-4 flex justify-between items-start gap-4">
                <div className="text-sm italic">“{q}”</div>
                <span className="shrink-0 text-xs bg-white text-black px-2 py-1 rounded-full">{p} ↗</span>
              </div>
            ))}
          </div>
          <div className="mt-4 text-xs opacity-60">Every quote is verbatim. Tap to open the exact page.</div>
        </div>
      </section>

      {/* pricing */}
      <section id="pricing" className="max-w-[1200px] mx-auto px-6 py-12">
        <div className="rounded-[28px] bg-white/[0.06] border border-white/10 p-6 md:p-8 grid lg:grid-cols-[0.9fr_1.1fr] gap-6">
          <div>
            <h3 className="text-3xl font-black" style={{ fontFamily: 'Bricolage Grotesque, sans-serif' }}>Pay for signal,<br />not storage.</h3>
            <p className="opacity-60 mt-2">Cancel anytime. Your ratios stay yours.</p>
            <div className="mt-6 flex items-center gap-3">
              <img src="https://i.pravatar.cc/100?img=15" alt="" className="w-10 h-10 rounded-full object-cover" />
              <div className="text-sm"><span className="font-bold">Lena, PhD</span> · “Journal club actually prepared now.”</div>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { name: "Free", price: "$0", feats: ["5 PDFs / mo", "Summary + quotes", "Page anchors"], cta: "Start free", dark: false },
              { name: "Pro", price: "$12", feats: ["Unlimited", "Hints & maps", "Notion export"], cta: "Go Pro", dark: true, badge: "Most picked" },
              { name: "Team", price: "$29", feats: ["Shared library", "API + SSO", "Audit log"], cta: "Talk to us", dark: false },
            ].map(p => (
              <div key={p.name} className={`rounded-3xl p-6 border flex flex-col ${p.dark ? "bg-white text-black border-white shadow-[0_12px_40px_rgba(124,92,255,0.35)] scale-[1.03]" : "bg-white/[0.06] border-white/10 text-white"}`}>
                {p.badge && <div className="text-[11px] tracking-widest bg-black text-white px-2 py-1 rounded-full w-fit">{p.badge}</div>}
                <div className="text-xs tracking-widest opacity-60 mt-2">{p.name}</div>
                <div className="text-3xl font-black mt-1">{p.price}<span className="text-sm font-normal opacity-60">/mo</span></div>
                <ul className="text-sm mt-4 space-y-1 opacity-80">{p.feats.map(f => <li key={f}>— {f}</li>)}</ul>
                <button className={`mt-6 rounded-full py-2.5 font-bold ${p.dark ? "bg-black text-white" : "bg-white text-black"}`}>{p.cta}</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 py-6">
        <div className="max-w-[1200px] mx-auto px-6 flex justify-between text-xs opacity-60" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
          <span>© 2026 Ratio — Not trained on your files</span>
          <Link to="/" className="underline">Directory →</Link>
        </div>
      </footer>
    </div>
  );
}
