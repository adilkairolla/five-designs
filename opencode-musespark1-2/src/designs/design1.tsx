import { useState } from "react";
import { Link } from "react-router-dom";

export default function Design1() {
  const [drag, setDrag] = useState(false);
  const [uploaded, setUploaded] = useState(false);

  return (
    <div className="min-h-screen bg-[#FDF6EC] text-[#1A1A18] selection:bg-[#FF3B30] selection:text-white">
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Newsreader:opsz,ital,wght@6..72,0..1,300;400;600&family=JetBrains+Mono:wght@400&display=swap');`}</style>

      {/* top bar */}
      <div className="border-y border-[#1A1A18] text-[11px] tracking-widest uppercase font-medium flex justify-between px-6 py-2 bg-[#FDF6EC] sticky top-0 z-50">
        <span className="hidden md:inline">Vol. XII — No. 04 · Printed for readers, not scrollers</span>
        <span className="md:hidden">Vol. XII — No. 04</span>
        <span>New York · London · Tokyo — Aug 6, 2026</span>
        <Link to="/" className="underline decoration-dotted hidden md:block">← Directory</Link>
      </div>

      {/* masthead */}
      <header className="border-b border-[#1A1A18] px-6 md:px-10 pt-6 pb-4">
        <div className="flex items-baseline justify-between">
          <span className="text-[10px] tracking-[0.2em] uppercase">Est. 2026 — The sensible way to read</span>
          <span className="text-[10px] tracking-[0.2em] uppercase hidden md:block">Price: One upload</span>
        </div>
        <h1 className="text-[13vw] leading-none tracking-[-0.04em] text-center" style={{ fontFamily: 'Instrument Serif, serif' }}>
          RATIO READER
        </h1>
        <div className="flex justify-center gap-6 text-[11px] tracking-widest uppercase border-t border-[#1A1A18] mt-3 pt-3 flex-wrap">
          <a href="#intake" className="hover:text-[#FF3B30]">The Intake</a>
          <span>·</span>
          <a href="#how" className="hover:text-[#FF3B30]">How It Reads</a>
          <span>·</span>
          <a href="#marginalia" className="hover:text-[#FF3B30]">Marginalia</a>
          <span>·</span>
          <a href="#letters" className="hover:text-[#FF3B30]">Letters</a>
          <span>·</span>
          <a href="#subscribe" className="hover:text-[#FF3B30]">Subscribe</a>
        </div>
      </header>

      {/* front page grid */}
      <section id="intake" className="grid lg:grid-cols-[1.35fr_0.85fr] border-b border-[#1A1A18]">
        {/* left story */}
        <div className="border-r border-[#1A1A18] p-6 md:p-10">
          <div className="inline-flex items-center gap-2 border border-[#1A1A18] px-3 py-1 text-[11px] tracking-widest uppercase bg-white">
            <span className="w-2 h-2 bg-[#FF3B30] rounded-full animate-pulse" /> Breaking · Most PDFs are 87% filler
          </div>
          <h2 className="mt-6 text-5xl md:text-[62px] leading-[0.9] tracking-[-0.03em]" style={{ fontFamily: 'Instrument Serif, serif' }}>
            Stop reading<br />
            <span className="italic font-normal">everything.</span><br />
            Start understanding<br />
            anything.
          </h2>
          <div className="mt-6 flex gap-6 text-[13px] leading-relaxed" style={{ fontFamily: 'Newsreader, serif' }}>
            <p className="first-letter:text-5xl first-letter:font-bold first-letter:float-left first-letter:mr-2 first-letter:mt-1 first-letter:leading-none" style={{ fontFamily: 'Instrument Serif, serif' }}>
              Ratio Reader distills any PDF — research, contracts, manuals, novels — into a sharp, structured digest. Not a shallow summary: a ratio. The essential signal, extracted and explained with hints, sourced quotes, and the context you actually need to act.
            </p>
          </div>
          <div className="mt-6 grid grid-cols-3 gap-4 border-y border-[#1A1A18] py-4 text-center">
            <div><div className="text-2xl" style={{ fontFamily: 'Instrument Serif, serif' }}>4.2m</div><div className="text-[10px] tracking-widest uppercase opacity-60">Pages distilled</div></div>
            <div className="border-x border-[#1A1A18]"><div className="text-2xl" style={{ fontFamily: 'Instrument Serif, serif' }}>11 sec</div><div className="text-[10px] tracking-widest uppercase opacity-60">Avg. time to clarity</div></div>
            <div><div className="text-2xl" style={{ fontFamily: 'Instrument Serif, serif' }}>94%</div><div className="text-[10px] tracking-widest uppercase opacity-60">Say they recall more</div></div>
          </div>
          <div className="mt-6 flex gap-3">
            <a href="#upload" className="bg-[#1A1A18] text-[#FDF6EC] px-6 py-3 text-xs tracking-widest uppercase">Try with your PDF — Free</a>
            <a href="#how" className="border border-[#1A1A18] px-6 py-3 text-xs tracking-widest uppercase bg-white">See an example →</a>
          </div>
          <p className="mt-3 text-[11px] opacity-60 font-mono">No account. No watermark. Your file stays private.</p>
        </div>

        {/* right upload as newspaper clipping */}
        <div className="bg-[#F0E8D8] p-6 md:p-8 flex flex-col">
          <div className="flex justify-between text-[10px] tracking-widest uppercase opacity-60">
            <span>Exhibit A · The intake desk</span><span>Filed 08:41</span>
          </div>

          <div
            id="upload"
            onDragOver={(e) => { e.preventDefault(); setDrag(true); }}
            onDragLeave={() => setDrag(false)}
            onDrop={(e) => { e.preventDefault(); setDrag(false); setUploaded(true); }}
            className={`mt-4 bg-white border border-[#1A1A18] p-6 shadow-[6px_6px_0_#1A1A18] relative ${drag ? "bg-[#FFF2CC]" : ""}`}
          >
            <div className="absolute -top-2 -right-2 bg-[#FF3B30] text-white text-[10px] tracking-widest uppercase px-2 py-1 rotate-2">TOP SECRET → NOT ANYMORE</div>
            <div className="w-10 h-10 border border-[#1A1A18] grid place-items-center bg-[#FDF6EC]">◧</div>
            <h3 className="mt-4 text-xl" style={{ fontFamily: 'Instrument Serif, serif' }}>{uploaded ? "Done. Your ratio is ready." : "Drop your PDF here"}</h3>
            <p className="text-sm opacity-60 mt-1" style={{ fontFamily: 'Newsreader, serif' }}>{uploaded ? "We pulled 7 key insights, 12 sourced quotes, and a 2-minute brief." : "Or click to browse. Works with scanned PDFs too."}</p>

            {!uploaded ? (
              <label className="mt-5 block border border-dashed border-[#1A1A18] py-3 text-center text-xs tracking-widest uppercase cursor-pointer hover:bg-[#F0E8D8]">
                <input type="file" className="hidden" onChange={() => setUploaded(true)} />
                Choose file — PDF, up to 300 pp
              </label>
            ) : (
              <div className="mt-4 space-y-2 text-sm">
                <div className="flex justify-between border-b border-dotted py-2"><span>📄 quantum-field-notes.pdf</span><span className="text-[#0A7A42]">✓ Parsed</span></div>
                <button onClick={() => setUploaded(false)} className="text-xs tracking-widest uppercase underline">Process another</button>
              </div>
            )}

            <div className="mt-6 border-t border-[#1A1A18] pt-4 grid grid-cols-3 text-center text-[11px] leading-tight">
              <div><div className="font-bold">Summary</div><div className="opacity-60">TL;DR you trust</div></div>
              <div className="border-x border-[#1A1A18]"><div className="font-bold">Quotes</div><div className="opacity-60">Click to source</div></div>
              <div><div className="font-bold">Hints</div><div className="opacity-60">Why it matters</div></div>
            </div>
            <div className="mt-3 text-[10px] opacity-50 font-mono">— Stamped by Ratio, verified against source pages</div>
          </div>

          <div className="mt-4 bg-white border border-[#1A1A18] p-4 flex gap-3 items-start">
            <img src="https://i.pravatar.cc/100?img=33" alt="" className="w-10 h-10 rounded-full border border-[#1A1A18] object-cover" />
            <div className="text-sm leading-tight" style={{ fontFamily: 'Newsreader, serif' }}>
              <span className="font-semibold">“I read 3 papers before breakfast now.”</span> — Prof. Alisha K., Systems Bio
              <div className="text-xs opacity-60">Used Ratio for 47 grant reviews. Saved 19 hours last month.</div>
            </div>
          </div>
          <div className="mt-auto pt-4 text-[11px] opacity-60">↳ Scan the margin notes — they’re where the real insight lives.</div>
        </div>
      </section>

      {/* how it reads - 3 columns like newspaper articles */}
      <section id="how" className="border-b border-[#1A1A18] grid md:grid-cols-3">
        {[
          { k: "01 / Intake", t: "Drop. Don't prep.", d: "Upload any PDF. Scanned, messy, 300 pages — Ratio OCRs and structures it in seconds. No formatting required.", line: "By the intake editors" },
          { k: "02 / Ratio", t: "The proportion that matters.", d: "We keep the 8% you’ll quote, decide, and remember. Everything else becomes appendix, not burden.", line: "By the ratio desk" },
          { k: "03 / Insight", t: "Hints + Quotes + Map.", d: "Each point comes with a why-it-matters hint, a verbatim quote linked to page, and a mental model to carry it.", line: "By marginalia" },
        ].map((a) => (
          <div key={a.k} className="border-r last:border-r-0 border-[#1A1A18] p-6 md:p-8">
            <div className="text-[10px] tracking-[0.2em] uppercase opacity-60">{a.k}</div>
            <h3 className="text-2xl mt-2 leading-none" style={{ fontFamily: 'Instrument Serif, serif' }}>{a.t}</h3>
            <p className="text-sm mt-3 opacity-80" style={{ fontFamily: 'Newsreader, serif' }}>{a.d}</p>
            <div className="text-[11px] italic mt-4 opacity-60">— {a.line}</div>
          </div>
        ))}
      </section>

      {/* annotated preview */}
      <section id="marginalia" className="grid lg:grid-cols-[1.15fr_0.85fr] border-b border-[#1A1A18]">
        <div className="p-6 md:p-10 border-r border-[#1A1A18]">
          <div className="text-[11px] tracking-widest uppercase opacity-60">Case study · 42-page climate report → 1-page ratio</div>
          <div className="mt-4 bg-white border border-[#1A1A18] p-6 md:p-8 relative">
            <div className="absolute -top-3 left-6 bg-[#1A1A18] text-white text-[10px] tracking-widest uppercase px-3 py-1">ORIGINAL p. 18 — Annotations by Ratio</div>
            <h4 className="text-3xl leading-none" style={{ fontFamily: 'Instrument Serif, serif' }}>Ocean heat is accelerating<br /><span className="italic font-normal">faster than models predicted.</span></h4>
            <p className="mt-4 text-sm leading-relaxed border-l-2 border-[#FF3B30] pl-4" style={{ fontFamily: 'Newsreader, serif' }}>
              “Ocean heat content in the upper 2000m increased by 15 ZJ in 2024 alone — exceeding the 2015–2023 average by 34%. This divergence suggests current CMIP6 projections underestimate…” <span className="bg-[#FFEFCC] px-1">[p.18 ¶2]</span>
            </p>
            {/* marginalia notes */}
            <div className="mt-6 grid md:grid-cols-2 gap-4">
              <div className="bg-[#FFF7CC] border border-[#1A1A18] p-3 rotate-[-0.5deg]">
                <div className="text-[10px] tracking-widest uppercase">✦ Hint — Why care?</div>
                <div className="text-sm mt-1" style={{ fontFamily: 'Newsreader, serif' }}>If oceans store more heat, storms get more fuel. This one number reframes the whole risk model.</div>
              </div>
              <div className="bg-[#F0E8D8] border border-[#1A1A18] p-3 rotate-[0.5deg]">
                <div className="text-[10px] tracking-widest uppercase">❝ Source quote</div>
                <div className="text-sm mt-1 italic" style={{ fontFamily: 'Newsreader, serif' }}>"We are no longer on the median pathway." — p.18</div>
              </div>
            </div>
            <div className="mt-6 flex flex-wrap gap-2 text-xs">
              {["Key takeaway", "Caveat", "Actionable", "Numbers"].map(t => (
                <span key={t} className="border border-[#1A1A18] px-3 py-1 bg-[#FDF6EC]">{t}</span>
              ))}
            </div>
          </div>
        </div>
        <div className="p-6 md:p-8 bg-[#1A1A18] text-[#FDF6EC]">
          <div className="text-[11px] tracking-widest uppercase opacity-60">The ratio — what you actually keep</div>
          <ul className="mt-6 space-y-4">
            {[
              { n: "01", t: "The signal", d: "Ocean heat +34% above baseline. Models lag reality." },
              { n: "02", t: "So what?", d: "Expect stronger, wetter hurricanes sooner than planned for." },
              { n: "03", t: "Quote to use", d: "\"Exceeding 2015–23 avg by 34%\" — p.18, verified." },
              { n: "04", t: "Next step", d: "Cross-check your city’s flood map vs. 2024 data (p.31)." },
            ].map(i => (
              <li key={i.n} className="flex gap-4 border-b border-white/10 pb-4">
                <span className="text-sm font-mono opacity-40">{i.n}</span>
                <div><div className="font-semibold" style={{ fontFamily: 'Instrument Serif, serif' }}>{i.t}</div><div className="text-sm opacity-70">{i.d}</div></div>
              </li>
            ))}
          </ul>
          <button className="mt-6 w-full bg-[#FF3B30] text-white py-3 text-xs tracking-widest uppercase">Read your own PDF this way →</button>
        </div>
      </section>

      {/* testimonials as letters to the editor */}
      <section id="letters" className="border-b border-[#1A1A18] px-6 md:px-10 py-10">
        <div className="flex items-baseline justify-between">
          <h3 className="text-3xl" style={{ fontFamily: 'Instrument Serif, serif' }}>Letters to the editor</h3>
          <span className="text-[11px] tracking-widest uppercase opacity-60">Selected correspondence</span>
        </div>
        <div className="mt-6 grid md:grid-cols-3 gap-6">
          {[
            { name: "Maya L., Policy Analyst", text: "I used to highlight everything. Now I highlight nothing — Ratio does the discerning for me, and I can defend every bullet with a page number." },
            { name: "James T., 2L", text: "Casebooks finally make sense. The hints are like having a senior associate whispering ‘this is the testable part’." },
            { name: "Dr. Chen, Lab PI", text: "My students arrive to journal club actually prepared. That hasn’t happened in ten years." },
          ].map(l => (
            <div key={l.name} className="bg-white border border-[#1A1A18] p-6">
              <div className="text-sm italic" style={{ fontFamily: 'Newsreader, serif' }}>“{l.text}”</div>
              <div className="mt-4 text-xs tracking-widest uppercase opacity-60">— {l.name}</div>
            </div>
          ))}
        </div>
      </section>

      {/* pricing as classifieds */}
      <section id="subscribe" className="grid md:grid-cols-3 border-b border-[#1A1A18]">
        <div className="p-8 border-r border-[#1A1A18]">
          <div className="text-[11px] tracking-widest uppercase">Classifieds · Plans</div>
          <h4 className="text-3xl mt-2" style={{ fontFamily: 'Instrument Serif, serif' }}>Choose your<br />circulation.</h4>
          <p className="text-sm opacity-60 mt-2" style={{ fontFamily: 'Newsreader, serif' }}>Cancel anytime. Your ratios stay yours.</p>
        </div>
        {[
          { name: "Weekly", price: "Free", per: "", feats: ["5 PDFs / month", "Summaries + quotes", "Email support"], cta: "Start free" },
          { name: "Daily", price: "$12", per: "/mo", feats: ["Unlimited PDFs", "Hints & mental models", "Export to Notion / Obsidian", "Priority intake"], cta: "Go Daily", featured: true },
          { name: "Press Run", price: "$29", per: "/mo", feats: ["For teams", "Shared library", "API & SSO", "Custom prompts"], cta: "For teams" },
        ].map(p => (
          <div key={p.name} className={`p-8 border-r last:border-r-0 border-[#1A1A18] ${p.featured ? "bg-[#1A1A18] text-[#FDF6EC]" : "bg-white"}`}>
            <div className="text-[11px] tracking-widest uppercase opacity-60">{p.name}</div>
            <div className="mt-2 flex items-baseline gap-1"><span className="text-4xl" style={{ fontFamily: 'Instrument Serif, serif' }}>{p.price}</span><span className="text-sm opacity-60">{p.per}</span></div>
            <ul className="mt-4 space-y-2 text-sm opacity-80">{p.feats.map(f => <li key={f}>— {f}</li>)}</ul>
            <button className={`mt-6 w-full py-3 text-xs tracking-widest uppercase border ${p.featured ? "bg-[#FF3B30] border-[#FF3B30] text-white" : "border-[#1A1A18] bg-[#FDF6EC]"}`}>{p.cta}</button>
          </div>
        ))}
      </section>

      {/* faq + footer */}
      <section className="grid md:grid-cols-2 border-b border-[#1A1A18]">
        <div className="p-8 border-r border-[#1A1A18]">
          <h4 className="text-xl" style={{ fontFamily: 'Instrument Serif, serif' }}>Frequently asked at the news desk</h4>
          <div className="mt-4 divide-y divide-[#1A1A18]/20 text-sm" style={{ fontFamily: 'Newsreader, serif' }}>
            {[
              ["Does it replace reading?", "No. It tells you where reading pays most. Think table of contents for meaning."],
              ["Is my PDF stored?", "Processed and deleted. Enterprise keeps an encrypted archive if you ask."],
              ["Scanned PDFs?", "Yes. OCR + layout detection. Even rotated photos."],
            ].map(([q, a]) => (
              <details key={q} className="py-3">
                <summary className="cursor-pointer font-semibold list-none flex justify-between">{q}<span>+</span></summary>
                <p className="opacity-70 mt-2">{a}</p>
              </details>
            ))}
          </div>
        </div>
        <div className="p-8 bg-[#F0E8D8] flex flex-col justify-center">
          <div className="text-4xl leading-none" style={{ fontFamily: 'Instrument Serif, serif' }}>Read less.<br />Know more.</div>
          <p className="text-sm opacity-60 mt-2" style={{ fontFamily: 'Newsreader, serif' }}>Join 42,000 readers who treat attention as a finite resource.</p>
          <div className="mt-4 flex gap-2">
            <input placeholder="you@university.edu" className="flex-1 bg-white border border-[#1A1A18] px-4 py-3 text-sm outline-none" />
            <button className="bg-[#1A1A18] text-white px-6 text-xs tracking-widest uppercase">Join</button>
          </div>
        </div>
      </section>

      <footer className="px-6 py-6 text-[11px] tracking-widest uppercase flex justify-between opacity-60">
        <span>© 2026 Ratio Reader · Printed on recycled attention</span>
        <Link to="/" className="underline">Back to directory</Link>
      </footer>
    </div>
  );
}
