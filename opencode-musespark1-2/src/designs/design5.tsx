import { useState } from "react";
import { Link } from "react-router-dom";

export default function Design5() {
  const [tab, setTab] = useState<"summary" | "quotes" | "hints">("summary");

  return (
    <div className="min-h-screen bg-[#F6F5FF] text-[#0F0F14] selection:bg-[#5B3CFF] selection:text-white">
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=IBM+Plex+Mono:wght@400;600&family=Plus+Jakarta+Sans:wght@600;800&display=swap');`}</style>

      {/* top ticker */}
      <div className="bg-[#0F0F14] text-white text-xs flex overflow-hidden border-b border-black">
        <div className="flex gap-6 py-2 animate-[marquee_18s_linear_infinite] whitespace-nowrap">
          {Array.from({ length: 10 }).map((_, i) => (
            <span key={i} className="opacity-80">RATIO READER TELEMETRY — PDF IN → INSIGHT OUT — 4.2M PAGES DISTILLED — 94% RECALL — 11s AVG —</span>
          ))}
        </div>
      </div>

      {/* nav */}
      <nav className="sticky top-0 z-30 bg-[#F6F5FF]/80 backdrop-blur border-b border-black/10">
        <div className="max-w-[1240px] mx-auto px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#0F0F14] text-white grid place-items-center font-black text-xs">◈</div>
            <span className="font-black tracking-tight">RATIO</span><span className="font-light">TELEMETRY</span>
            <span className="hidden md:inline ml-2 text-xs border border-black/15 px-2 py-1 rounded-full bg-white">Index No. 05 — Data Edition</span>
          </div>
          <div className="hidden md:flex items-center gap-5 text-sm">
            <a href="#dash" className="hover:underline">Dashboard</a>
            <a href="#evidence" className="hover:underline">Evidence</a>
            <a href="#pricing" className="hover:underline">Pricing</a>
            <Link to="/" className="bg-[#0F0F14] text-white px-4 py-1.5 rounded-full">Directory</Link>
          </div>
        </div>
      </nav>

      {/* hero dashboard */}
      <section id="dash" className="max-w-[1240px] mx-auto px-6 pt-6 grid lg:grid-cols-[1.15fr_0.85fr] gap-6">
        <div className="bg-white border border-black/10 rounded-[20px] p-6 md:p-8 shadow-[0_8px_30px_rgba(0,0,0,0.06)]">
          <div className="flex flex-wrap gap-2 text-[11px] font-mono">
            <span className="bg-[#5B3CFF] text-white px-2 py-1 rounded-full">● LIVE TELEMETRY</span>
            <span className="border border-black/10 px-2 py-1 rounded-full bg-[#F6F5FF]">INPUT: ANY PDF</span>
            <span className="border border-black/10 px-2 py-1 rounded-full bg-white">OUTPUT: RATIO 1:12</span>
          </div>
          <h1 className="mt-4 text-4xl md:text-5xl leading-none tracking-[-0.03em]" style={{ fontFamily: 'Instrument Serif, serif' }}>
            We measured<br />
            reading. <span className="bg-[#FFD600] px-2">Then fixed it.</span>
          </h1>
          <p className="mt-3 text-sm opacity-60 max-w-xl">Every PDF is 87% filler by weight. Ratio Reader keeps the 13% you’ll actually use — with proof attached. Here’s the data.</p>

          {/* kpi row */}
          <div className="mt-6 grid grid-cols-3 gap-3">
            {[
              { v: "1:12", l: "Signal ratio", sub: "kept vs. archived" },
              { v: "11s", l: "To first insight", sub: "median" },
              { v: "100%", l: "Cited", sub: "every bullet → page" },
            ].map(k => (
              <div key={k.l} className="bg-[#0F0F14] text-white rounded-2xl p-4">
                <div className="text-2xl font-black" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>{k.v}</div>
                <div className="text-xs font-mono opacity-70">{k.l}</div>
                <div className="text-[11px] opacity-50">{k.sub}</div>
              </div>
            ))}
          </div>

          {/* bar: before/after */}
          <div className="mt-6 border border-black/10 rounded-2xl p-4 bg-[#F6F5FF]">
            <div className="flex justify-between text-xs font-mono">
              <span>TIME TO UNDERSTAND A 40-PP REPORT</span><span>MINUTES</span>
            </div>
            <div className="mt-3 space-y-2 font-mono text-xs">
              <div className="flex items-center gap-3">
                <span className="w-24">Without Ratio</span>
                <div className="flex-1 h-6 bg-white border border-black/10 rounded-full overflow-hidden">
                  <div className="h-full bg-[#FF3B30] w-[85%] grid place-items-center text-white text-[11px]">~68 min</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-24">With Ratio</span>
                <div className="flex-1 h-6 bg-white border border-black/10 rounded-full overflow-hidden">
                  <div className="h-full bg-[#5B3CFF] w-[18%] grid place-items-center text-white text-[11px]">~9 min</div>
                </div>
              </div>
            </div>
            <div className="mt-2 text-xs opacity-60">Measured across 1,200 reports. Time to confident summary. <span className="underline">Methodology →</span></div>
          </div>
        </div>

        {/* intake chart card */}
        <div className="bg-[#0F0F14] text-white rounded-[20px] p-6 relative overflow-hidden">
          <div className="absolute -top-20 -right-20 w-72 h-72 bg-[#5B3CFF]/30 blur-[50px] rounded-full" />
          <div className="relative">
            <div className="text-xs tracking-widest opacity-60" style={{ fontFamily: 'IBM Plex Mono, monospace' }}>INTAKE CONSOLE — DROP TO PARSE</div>

            <label
              onDragOver={e => e.preventDefault()}
              onDrop={e => e.preventDefault()}
              className="mt-4 block bg-white text-[#0F0F14] rounded-2xl p-5 cursor-pointer hover:scale-[1.01] transition"
            >
              <input type="file" className="hidden" />
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#0F0F14] text-white grid place-items-center">⬆</div>
                <div>
                  <div className="font-bold">Drop PDF here</div>
                  <div className="text-xs opacity-60">Scanned, photographed, 300 pages — we read it.</div>
                </div>
                <div className="ml-auto text-xs bg-[#FFD600] px-3 py-1 rounded-full font-bold">No account</div>
              </div>
              <div className="mt-4 h-2 bg-black/10 rounded-full overflow-hidden flex">
                <div className="h-full bg-[#5B3CFF] w-[42%]" /><div className="h-full bg-[#FFD600] w-[18%]" /><div className="h-full bg-[#00E5A0] w-[25%]" />
              </div>
              <div className="mt-2 flex gap-3 text-[11px] font-mono">
                <span className="flex items-center gap-1"><span className="w-2 h-2 bg-[#5B3CFF] rounded-full" />Summary</span>
                <span className="flex items-center gap-1"><span className="w-2 h-2 bg-[#FFD600] rounded-full" />Quotes</span>
                <span className="flex items-center gap-1"><span className="w-2 h-2 bg-[#00E5A0] rounded-full" />Hints</span>
              </div>
            </label>

            {/* donut + legend */}
            <div className="mt-4 grid grid-cols-[120px_1fr] gap-4 items-center bg-white/10 border border-white/10 rounded-2xl p-4">
              <div className="w-[100px] h-[100px] rounded-full grid place-items-center relative" style={{ background: `conic-gradient(#5B3CFF 0 42%, #FFD600 42% 60%, #00E5A0 60% 85%, #ffffff22 85% 100%)` }}>
                <div className="w-[64px] h-[64px] bg-[#0F0F14] rounded-full grid place-items-center text-xs font-mono">1:12<br /><span className="opacity-60">ratio</span></div>
              </div>
              <div className="text-sm space-y-1">
                <div className="flex justify-between"><span>● Kept (signal)</span><span className="font-mono">42%</span></div>
                <div className="flex justify-between opacity-70"><span>○ Quotes</span><span>18%</span></div>
                <div className="flex justify-between opacity-70"><span>○ Hints & map</span><span>25%</span></div>
                <div className="flex justify-between opacity-40"><span>○ Archived filler</span><span>—</span></div>
              </div>
            </div>

            <div className="mt-4 flex gap-2 text-xs">
              <span className="bg-white text-black px-3 py-1 rounded-full font-bold">View sample ratio →</span>
              <span className="border border-white/20 px-3 py-1 rounded-full">How we calculate ratio</span>
            </div>
          </div>
        </div>
      </section>

      {/* evidence tabs like data explorer */}
      <section id="evidence" className="max-w-[1240px] mx-auto px-6 py-6">
        <div className="bg-white border border-black/10 rounded-[20px] overflow-hidden">
          <div className="flex flex-wrap justify-between items-center px-6 py-4 border-b border-black/10 gap-3">
            <div className="text-sm font-mono">EVIDENCE EXPLORER — 42-PP CLIMATE REPORT</div>
            <div className="flex gap-2 text-xs font-bold">
              {(["summary", "quotes", "hints"] as const).map(t => (
                <button key={t} onClick={() => setTab(t)} className={`px-4 py-1.5 rounded-full border ${tab === t ? "bg-[#0F0F14] text-white border-black" : "bg-white border-black/15"}`}>{t.toUpperCase()}</button>
              ))}
            </div>
          </div>

          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-0">
            <div className="p-6 border-r border-black/10">
              {tab === "summary" && (
                <>
                  <div className="inline-block bg-[#FFD600] text-xs font-mono px-2 py-1 rounded-full">SUMMARY — 2-MIN BRIEF · 4 BULLETS · ALL CITED</div>
                  <ul className="mt-4 space-y-3 text-sm">
                    <li className="flex gap-3"><span className="w-6 h-6 rounded-full bg-black text-white grid place-items-center text-xs shrink-0">1</span><span><b>Ocean heat +34%</b> above 2015–23 avg — models underestimate. <span className="bg-[#F6F5FF] border px-1 rounded text-xs">p.18 ¶2</span></span></li>
                    <li className="flex gap-3"><span className="w-6 h-6 rounded-full bg-black text-white grid place-items-center text-xs shrink-0">2</span><span><b>Flood exposure ×2</b> vs. prior estimates. City maps outdated. <span className="bg-[#F6F5FF] border px-1 rounded text-xs">p.31</span></span></li>
                    <li className="flex gap-3"><span className="w-6 h-6 rounded-full bg-black text-white grid place-items-center text-xs shrink-0">3</span><span><b>“No longer median pathway.”</b> Tail risk now central. <span className="bg-[#F6F5FF] border px-1 rounded text-xs">p.18</span></span></li>
                    <li className="flex gap-3"><span className="w-6 h-6 rounded-full bg-black text-white grid place-items-center text-xs shrink-0">4</span><span><b>Action:</b> cross-check flood map vs. 2024 data this week. <span className="bg-[#F6F5FF] border px-1 rounded text-xs">p.31 Fig.4</span></span></li>
                  </ul>
                </>
              )}
              {tab === "quotes" && (
                <div className="space-y-3">
                  {[
                    ["Ocean heat content in the upper 2000m increased by 15 ZJ in 2024 alone — exceeding the 2015–2023 average by 34%.", "p.18 ¶2 · verified"],
                    ["We are no longer on the median pathway.", "p.18 · verified"],
                    ["Flood exposure is underestimated by a factor of two under current zoning.", "p.31 · verified"],
                  ].map(([q, meta]) => (
                    <div key={q} className="bg-[#F6F5FF] border border-black/10 rounded-xl p-4">
                      <div className="text-sm italic">“{q}”</div>
                      <div className="text-xs font-mono opacity-60 mt-1">{meta} — click to open page</div>
                    </div>
                  ))}
                </div>
              )}
              {tab === "hints" && (
                <div className="space-y-3">
                  {[
                    ["Why this matters", "If oceans store more heat, storms get more fuel. This one number reframes your risk model."],
                    ["Mental model", "Think ‘heat is debt’ — it compounds and pays out as weather."],
                    ["Next step", "Open p.31 Fig.4 and compare to your city’s flood map. Takes 3 minutes."],
                  ].map(([k, v]) => (
                    <div key={k} className="border border-black/10 rounded-xl p-4 bg-[#FFFBF0]">
                      <div className="text-xs font-mono tracking-widest opacity-60">{k.toUpperCase()}</div>
                      <div className="text-sm mt-1">{v}</div>
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div className="p-6 bg-[#F6F5FF]">
              <div className="text-xs font-mono opacity-60">METHOD — HOW WE AVOID HALLUCINATIONS</div>
              <div className="mt-3 space-y-3 text-sm">
                <div className="bg-white border border-black/10 rounded-xl p-4 flex gap-3">
                  <span className="w-8 h-8 rounded-lg bg-[#5B3CFF] text-white grid place-items-center shrink-0">✓</span>
                  <div><div className="font-bold">Quote-anchored</div><div className="opacity-60">Every claim links to verbatim text + page. No paraphrase without source.</div></div>
                </div>
                <div className="bg-white border border-black/10 rounded-xl p-4 flex gap-3">
                  <span className="w-8 h-8 rounded-lg bg-[#FFD600] grid place-items-center shrink-0">◈</span>
                  <div><div className="font-bold">Measured, not guessed</div><div className="opacity-60">We show compression ratio, coverage, and provenance for every ratio.</div></div>
                </div>
                <div className="bg-[#0F0F14] text-white rounded-xl p-4">
                  <div className="text-xs opacity-60 font-mono">TRY IT</div>
                  <div className="font-bold">Drop a PDF and watch the telemetry fill in live.</div>
                  <button className="mt-2 bg-white text-black px-4 py-1.5 rounded-full text-sm font-bold">Open intake →</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* logos + stats */}
      <section className="max-w-[1240px] mx-auto px-6 grid md:grid-cols-3 gap-4">
        <div className="bg-white border border-black/10 rounded-2xl p-6">
          <div className="text-xs font-mono opacity-60">ADOPTION — WEEKLY ACTIVE SHELVES</div>
          <div className="mt-3 flex items-end gap-1 h-16">
            {[30, 45, 38, 60, 52, 78, 66, 90].map((h, i) => (
              <div key={i} className={`flex-1 rounded-t-lg ${i === 7 ? "bg-[#5B3CFF]" : "bg-black/10"}`} style={{ height: `${h}%` }} />
            ))}
          </div>
          <div className="text-xs font-mono mt-2">+34% vs last month · 42k readers</div>
        </div>
        <div className="bg-[#0F0F14] text-white rounded-2xl p-6">
          <div className="text-xs font-mono opacity-60">TRUST — NOT TRAINED ON YOUR FILES</div>
          <div className="text-2xl font-black mt-2" style={{ fontFamily: 'Instrument Serif, serif' }}>Private by default.</div>
          <div className="text-sm opacity-60 mt-1">Processed, returned, deleted. Enterprise can keep an encrypted archive if you ask.</div>
        </div>
        <div className="bg-[#FFD600] border border-black/10 rounded-2xl p-6">
          <div className="text-xs font-mono opacity-60">LOVED BY</div>
          <div className="flex flex-wrap gap-3 mt-3 text-sm font-black">
            <span className="bg-white px-3 py-1 rounded-full border border-black/10">Stanford</span>
            <span className="bg-white px-3 py-1 rounded-full border border-black/10">ETH</span>
            <span className="bg-white px-3 py-1 rounded-full border border-black/10">MIT</span>
            <span className="bg-white px-3 py-1 rounded-full border border-black/10">Notion</span>
          </div>
        </div>
      </section>

      {/* pricing */}
      <section id="pricing" className="max-w-[1240px] mx-auto px-6 py-6 grid lg:grid-cols-[0.9fr_1.1fr] gap-4">
        <div className="bg-white border border-black/10 rounded-[20px] p-6">
          <h3 className="text-3xl" style={{ fontFamily: 'Instrument Serif, serif' }}>Pay for signal,<br />not storage.</h3>
          <p className="opacity-60 text-sm mt-2">Cancel anytime. Your ratios stay yours.</p>
          <div className="mt-6 flex gap-2 text-xs font-mono">
            <span className="bg-[#0F0F14] text-white px-3 py-1 rounded-full">Free forever</span>
            <span className="border border-black/10 px-3 py-1 rounded-full">Team SSO</span>
            <span className="border border-black/10 px-3 py-1 rounded-full">API</span>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          {[
            { name: "Starter", price: "$0", feats: ["5 PDFs / mo", "Summary + quotes", "Page anchors"], cta: "Start free" },
            { name: "Pro", price: "$12", feats: ["Unlimited", "Hints & maps", "Notion export"], cta: "Go Pro", featured: true },
            { name: "Team", price: "$29", feats: ["Shared library", "API", "SSO & audit"], cta: "Talk to us" },
          ].map(p => (
            <div key={p.name} className={`rounded-[20px] border p-6 flex flex-col ${p.featured ? "bg-[#0F0F14] text-white border-black scale-[1.02] shadow-xl" : "bg-white border-black/10"}`}>
              <div className="text-xs font-mono opacity-60">{p.name.toUpperCase()}</div>
              <div className="text-3xl font-black mt-1">{p.price}<span className="text-sm font-normal opacity-60">/mo</span></div>
              <ul className="text-sm mt-4 space-y-1 opacity-80">{p.feats.map(f => <li key={f}>— {f}</li>)}</ul>
              <button className={`mt-6 rounded-full py-2.5 font-bold ${p.featured ? "bg-[#FFD600] text-black" : "bg-[#0F0F14] text-white"}`}>{p.cta}</button>
            </div>
          ))}
        </div>
      </section>

      {/* footer */}
      <footer className="border-t border-black/10 py-6">
        <div className="max-w-[1240px] mx-auto px-6 flex justify-between text-xs font-mono opacity-60">
          <span>© 2026 Ratio Telemetry — Built for readers who treat attention as finite</span>
          <Link to="/" className="underline">Directory →</Link>
        </div>
      </footer>

      <style>{`@keyframes marquee { 0%{transform:translateX(0)} 100%{transform:translateX(-50%)} }`}</style>
    </div>
  );
}
