import { useState } from "react";
import { Link } from "react-router-dom";

export default function Design2() {
  const [progress, setProgress] = useState(62);
  return (
    <div className="min-h-screen bg-[#F2F0EB] text-[#0A0A0A] selection:bg-[#FF3B30] selection:text-white">
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&family=Syne:wght@700;800&display=swap');`}</style>

      {/* top utility bar */}
      <div className="grid grid-cols-12 border-b-[3px] border-black text-[11px] font-mono">
        <div className="col-span-5 md:col-span-3 border-r-[3px] border-black px-4 py-2 flex items-center gap-2">
          <span className="w-2 h-2 bg-[#FF3B30] rounded-full" /> SYSTEM STATUS: OPERATIONAL
        </div>
        <div className="hidden md:flex col-span-6 border-r-[3px] border-black px-4 py-2 justify-between">
          <span>RATIO READER — MODULE 02</span><span>PDF → RATIO</span><span>EST 2026</span>
        </div>
        <Link to="/" className="col-span-7 md:col-span-3 px-4 py-2 text-right hover:bg-black hover:text-white transition">DIRECTORY ↑</Link>
      </div>

      {/* header */}
      <header className="border-b-[3px] border-black px-4 md:px-6 py-6 grid md:grid-cols-12 gap-6 items-end">
        <div className="md:col-span-7">
          <div className="inline-flex border-[2px] border-black px-3 py-1 text-xs font-mono bg-[#FFE600]">● NEW — SCANNED PDF SUPPORT</div>
          <h1 className="mt-4 leading-[0.85] tracking-[-0.05em] font-black" style={{ fontFamily: 'Syne, sans-serif' }}>
            <span className="block text-[16vw] md:text-[9vw]">READ</span>
            <span className="block text-[16vw] md:text-[9vw] flex items-center gap-3">
              LESS<span className="text-[10px] font-mono font-normal border-[2px] border-black px-2 py-1 leading-none bg-white">RATIO 1:12</span>
            </span>
            <span className="block text-[16vw] md:text-[9vw] text-white" style={{ WebkitTextStroke: '2px black', paintOrder: 'stroke fill' }}>LEARN MORE.</span>
          </h1>
        </div>
        <div className="md:col-span-5 flex flex-col gap-4">
          <div className="border-[3px] border-black bg-white p-5">
            <div className="text-[11px] font-mono tracking-widest">MANIFESTO — 03 POINTS</div>
            <div className="mt-3 space-y-3 text-sm font-mono leading-tight">
              <div className="flex gap-3"><span className="font-bold">01</span><span>Every PDF contains 8% signal. The rest is scaffolding.</span></div>
              <div className="flex gap-3"><span className="font-bold">02</span><span>Ratio extracts signal + proves it with quotes + page numbers.</span></div>
              <div className="flex gap-3"><span className="font-bold">03</span><span>Hints tell you why it matters so you act, not just archive.</span></div>
            </div>
            <a href="#upload" className="mt-4 block bg-black text-white text-center py-3 text-sm font-bold tracking-widest">UPLOAD PDF — FREE →</a>
            <div className="text-[10px] font-mono text-center mt-2 opacity-60">No account · 11 sec avg · Private by default</div>
          </div>
          <div className="grid grid-cols-3 border-[3px] border-black text-center font-mono text-xs divide-x-[3px] divide-black bg-white">
            <div className="py-3"><div className="text-xl font-black">4.2M</div>pages</div>
            <div className="py-3"><div className="text-xl font-black">94%</div>recall</div>
            <div className="py-3"><div className="text-xl font-black">11s</div>to ratio</div>
          </div>
        </div>
      </header>

      {/* marquee */}
      <div className="border-y-[3px] border-black bg-[#FFE600] overflow-hidden whitespace-nowrap py-2 font-mono text-xs font-bold">
        <div className="animate-[marquee_12s_linear_infinite] inline-flex gap-8">
          {Array.from({ length: 12 }).map((_, i) => (
            <span key={i}>PDF → SUMMARY + QUOTES + HINTS + MAP — RATIO READER —</span>
          ))}
        </div>
      </div>

      {/* upload module */}
      <section id="upload" className="grid md:grid-cols-12 border-b-[3px] border-black">
        <div className="md:col-span-7 border-r-[3px] border-black p-4 md:p-6 bg-white">
          <div className="border-[3px] border-black p-4 md:p-6 bg-[#F2F0EB] relative">
            <div className="flex justify-between text-[11px] font-mono">
              <span>MODULE: INTAKE / DROP ZONE</span><span>[ 01 / 04 ]</span>
            </div>
            <div
              onClick={() => setProgress(p => Math.min(100, p + 8))}
              className="mt-4 border-[3px] border-black bg-white h-[220px] grid place-items-center cursor-pointer hover:bg-[#FFE600]/20 border-dashed"
            >
              <div className="text-center">
                <div className="w-16 h-16 mx-auto border-[3px] border-black grid place-items-center bg-black text-white text-2xl">+</div>
                <div className="font-black mt-3 tracking-tight" style={{ fontFamily: 'Syne, sans-serif' }}>DROP PDF HERE</div>
                <div className="font-mono text-xs opacity-60">or click to browse · up to 600 pages</div>
              </div>
            </div>
            <div className="mt-4">
              <div className="flex justify-between font-mono text-xs"><span>parsing… quantum-field-notes.pdf</span><span>{progress}%</span></div>
              <div className="h-3 border-[2px] border-black mt-1 bg-white p-0.5">
                <div className="h-full bg-black transition-all" style={{ width: `${progress}%` }} />
              </div>
              <div className="mt-2 flex gap-2 font-mono text-[11px]">
                <span className="border border-black px-2 py-1 bg-[#FFE600]">SUMMARY</span>
                <span className="border border-black px-2 py-1 bg-white">QUOTES × 12</span>
                <span className="border border-black px-2 py-1 bg-white">HINTS × 7</span>
              </div>
            </div>
          </div>
        </div>
        <div className="md:col-span-5 p-4 md:p-6 space-y-4">
          {[
            { k: "01", title: "SUMMARY", desc: "2-minute brief you can forward. No hallucinations — every bullet tied to a page.", color: "bg-[#FF3B30]" },
            { k: "02", title: "QUOTES", desc: "Verbatim, citable, click-to-source. Keep receipts for every claim.", color: "bg-[#FFE600]" },
            { k: "03", title: "HINTS", desc: "The ‘so what’ whisper track. Why this paragraph changes your decision.", color: "bg-black text-white" },
          ].map(f => (
            <div key={f.k} className="border-[3px] border-black p-4 bg-white flex gap-4">
              <div className={`w-9 h-9 border-[2px] border-black grid place-items-center font-mono font-bold shrink-0 ${f.color}`}>{f.k}</div>
              <div>
                <div className="font-black tracking-tight" style={{ fontFamily: 'Syne, sans-serif' }}>{f.title}</div>
                <div className="font-mono text-xs leading-tight opacity-70">{f.desc}</div>
              </div>
            </div>
          ))}
          <div className="border-[3px] border-black bg-black text-white p-4 font-mono text-xs">
            <div className="opacity-60">QUOTE PREVIEW — p.18 ¶2</div>
            <div className="mt-2 text-sm leading-tight">“Ocean heat content ... exceeding the 2015–2023 average by 34%.” <span className="bg-[#FFE600] text-black px-1">verified</span></div>
          </div>
        </div>
      </section>

      {/* how it works as assembly line */}
      <section className="border-b-[3px] border-black grid md:grid-cols-4 divide-y-[3px] md:divide-y-0 md:divide-x-[3px] divide-black bg-white">
        {[
          { n: "01", t: "INTAKE", d: "Drag any PDF. Scanned, photographed, footnoted. We OCR & rebuild structure." },
          { n: "02", t: "DISTILL", d: "Identify the 1:12 ratio. Keep claims, numbers, definitions. Archive filler." },
          { n: "03", t: "EVIDENCE", d: "Attach verbatim quotes + page anchors. Every insight is auditable." },
          { n: "04", t: "CONTEXT", d: "Add hints & maps so you know what to do next. Export to Notion / MD." },
        ].map(s => (
          <div key={s.n} className="p-6">
            <div className="text-5xl font-black opacity-10" style={{ fontFamily: 'Syne, sans-serif' }}>{s.n}</div>
            <div className="font-black mt-1" style={{ fontFamily: 'Syne, sans-serif' }}>{s.t}</div>
            <div className="font-mono text-xs mt-2 opacity-70 leading-tight">{s.d}</div>
          </div>
        ))}
      </section>

      {/* use cases grid */}
      <section className="grid md:grid-cols-3 border-b-[3px] border-black">
        <div className="md:col-span-1 p-6 border-r-[3px] border-black bg-[#FFE600]">
          <div className="font-mono text-xs tracking-widest">USE CASES — SELECT ONE</div>
          <h3 className="text-4xl font-black leading-none mt-3" style={{ fontFamily: 'Syne, sans-serif' }}>WHO<br />IS IT<br />FOR?</h3>
          <div className="mt-4 font-mono text-xs opacity-70">All outputs keep page-level citation. Academic integrity intact.</div>
        </div>
        <div className="md:col-span-2 grid md:grid-cols-2 divide-x-[3px] divide-y-[3px] md:divide-y-0 divide-black bg-white">
          {[
            { tag: "RESEARCH", t: "Papers → ratios", b: "Journal club in 6 minutes. Methods, results, caveats, one quote per claim." },
            { tag: "LEGAL", t: "Contracts → obligations", b: "Obligations, dates, penalties. Every line points to clause & page." },
            { tag: "STUDY", t: "Textbooks → exam maps", b: "Definitions → examples → testable hints. Built for recall." },
            { tag: "OPS", t: "Manuals → do-this-now", b: "Procedures distilled to checklists with source diagrams." },
          ].map(u => (
            <div key={u.tag} className="p-6 hover:bg-[#F2F0EB]">
              <div className="inline-block border-[2px] border-black px-2 py-0.5 font-mono text-[10px] font-bold">{u.tag}</div>
              <div className="font-black mt-2" style={{ fontFamily: 'Syne, sans-serif' }}>{u.t}</div>
              <div className="font-mono text-xs opacity-60 mt-1">{u.b}</div>
            </div>
          ))}
        </div>
      </section>

      {/* pricing as spec sheet */}
      <section className="grid md:grid-cols-12 border-b-[3px] border-black">
        <div className="md:col-span-4 p-6 border-r-[3px] border-black bg-white">
          <div className="font-mono text-xs">PRICING — SPEC SHEET</div>
          <h3 className="text-3xl font-black leading-none mt-2" style={{ fontFamily: 'Syne, sans-serif' }}>PAY FOR<br />SIGNAL, NOT<br />STORAGE.</h3>
          <p className="font-mono text-xs opacity-60 mt-3">Cancel anytime. Ratios stay yours. Team SSO on Pro.</p>
        </div>
        {[
          { name: "FREE", price: "$0", list: ["5 PDFs / mo", "Summary + quotes", "Page anchors"], cta: "START" },
          { name: "PRO", price: "$12", list: ["Unlimited", "Hints & maps", "Notion / Obsidian export"], cta: "GO PRO", featured: true },
          { name: "TEAM", price: "$29", list: ["Shared library", "API", "SSO + audit"], cta: "TALK TO US" },
        ].map(p => (
          <div key={p.name} className={`md:col-span-[2.66] p-6 border-r last:border-r-0 border-black flex flex-col ${p.featured ? "bg-black text-white" : "bg-white"}`}>
            <div className="font-mono text-xs tracking-widest">{p.name}</div>
            <div className="text-4xl font-black mt-1" style={{ fontFamily: 'Syne, sans-serif' }}>{p.price}<span className="text-sm font-mono font-normal opacity-60">/mo</span></div>
            <ul className="font-mono text-xs mt-4 space-y-1 opacity-80">{p.list.map(l => <li key={l}>— {l}</li>)}</ul>
            <button className={`mt-6 border-[2px] py-2 font-mono text-xs font-bold ${p.featured ? "bg-[#FFE600] text-black border-[#FFE600]" : "border-black bg-white text-black"}`}>{p.cta} →</button>
          </div>
        ))}
      </section>

      {/* footer */}
      <footer className="grid md:grid-cols-12 border-b-[3px] border-black font-mono text-xs">
        <div className="md:col-span-6 p-4 border-r-[3px] border-black flex justify-between">
          <span>© 2026 RATIO READER — BUILT FOR READERS</span><span className="hidden md:inline">PRIVACY FIRST · NO TRAINING ON YOUR FILES</span>
        </div>
        <div className="md:col-span-6 p-4 flex gap-6 justify-end">
          <a href="#" className="underline">Privacy</a><a href="#" className="underline">Terms</a><a href="#" className="underline">API</a>
        </div>
      </footer>

      <style>{`@keyframes marquee { 0%{transform:translateX(0)} 100%{transform:translateX(-50%)} }`}</style>
    </div>
  );
}
