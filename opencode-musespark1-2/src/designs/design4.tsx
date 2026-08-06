import { useState } from "react";
import { Link } from "react-router-dom";

export default function Design4() {
  const [dropped, setDropped] = useState(false);
  return (
    <div className="min-h-screen bg-[#FFFBF0] text-[#3A2416] selection:bg-[#FF6B35] selection:text-white">
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,ital,soft,wght@9..144,0..1,50..100,400..900&family=Plus+Jakarta+Sans:wght@400;600&family=IBM+Plex+Mono:wght@400;500&display=swap');`}</style>

      {/* paper texture overlay */}
      <div className="pointer-events-none fixed inset-0 opacity-[0.04]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence baseFrequency='0.9'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.4'/%3E%3C/svg%3E")` }} />

      {/* nav */}
      <nav className="sticky top-0 z-30 bg-[#FFFBF0]/80 backdrop-blur border-b border-[#3A2416]/10">
        <div className="max-w-[1180px] mx-auto px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#3A2416] text-[#FFFBF0] grid place-items-center font-black" style={{ fontFamily: 'Fraunces, serif' }}>Rr</div>
            <span className="font-bold" style={{ fontFamily: 'Fraunces, serif' }}>ratio reader</span>
            <span className="hidden md:inline text-xs bg-[#FF6B35] text-white px-2 py-1 rounded-full font-medium">The cozy way to read</span>
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm">
            <a href="#stacks" className="hover:underline">Stacks</a>
            <a href="#how" className="hover:underline">How it shelves</a>
            <a href="#cards" className="hover:underline">Cards</a>
            <Link to="/" className="border border-[#3A2416] px-4 py-1.5 rounded-full hover:bg-[#3A2416] hover:text-white transition">Directory</Link>
          </div>
        </div>
      </nav>

      {/* hero */}
      <section className="max-w-[1180px] mx-auto px-6 pt-8 md:pt-12 grid lg:grid-cols-[1.05fr_0.95fr] gap-8 items-start">
        <div>
          <div className="inline-flex items-center gap-2 text-xs border border-[#3A2416]/15 rounded-full px-3 py-1 bg-white">
            <span>📚</span> Recommended by librarians, loved by crammers
          </div>
          <h1 className="mt-4 text-5xl md:text-[64px] leading-[0.9] tracking-[-0.03em]" style={{ fontFamily: 'Fraunces, serif' }}>
            Your PDFs,<br />
            <span className="italic font-light">finally on</span><br />
            the right shelf.
          </h1>
          <p className="mt-4 max-w-xl leading-relaxed opacity-70">Ratio Reader is a tiny librarian for your documents. Drop in a messy PDF — get a warm, human summary with quotes you can trust, hints that make it stick, and a shelf you’ll actually revisit.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#shelf" className="bg-[#3A2416] text-[#FFFBF0] px-6 py-3 rounded-full font-semibold">Shelve my PDF — it’s free →</a>
            <a href="#how" className="bg-white border border-[#3A2416]/15 px-6 py-3 rounded-full font-semibold">See a shelf</a>
          </div>
          <div className="mt-6 flex items-center gap-3 text-sm">
            <div className="flex -space-x-2">
              {[22, 23, 24].map(i => <img key={i} src={`https://i.pravatar.cc/100?img=${i}`} alt="" className="w-8 h-8 rounded-full border-2 border-[#FFFBF0] object-cover" />)}
            </div>
            <span className="opacity-60">4,200+ shelves created this week · Avg. 11 sec</span>
          </div>

          {/* dewey */}
          <div className="mt-8 grid grid-cols-3 gap-3">
            {[
              { n: "000", l: "Summaries", d: "2-min briefs" },
              { n: "100", l: "Quotes", d: "Citable lines" },
              { n: "200", l: "Hints", d: "Why it matters" },
            ].map(c => (
              <div key={c.n} className="bg-white border border-[#3A2416]/10 rounded-2xl p-4">
                <div className="text-xs font-mono opacity-50">{c.n}</div>
                <div className="font-bold" style={{ fontFamily: 'Fraunces, serif' }}>{c.l}</div>
                <div className="text-xs opacity-60">{c.d}</div>
              </div>
            ))}
          </div>
        </div>

        {/* check-in desk / upload */}
        <div id="shelf" className="relative">
          {/* tote bag + cards stack visual */}
          <div className="absolute -top-6 -right-4 hidden md:block">
            <div className="bg-[#FF6B35] text-white text-xs px-3 py-1 rounded-full rotate-6 shadow">STAFF PICK ★</div>
          </div>
          <div className="bg-white border border-[#3A2416]/10 rounded-[28px] p-6 shadow-[0_12px_40px_rgba(58,36,22,0.12)] relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#FF6B35] via-[#FFB627] to-[#7AC74F]" />
            <div className="flex justify-between items-start">
              <div>
                <div className="text-xs tracking-widest opacity-50" style={{ fontFamily: 'IBM Plex Mono, monospace' }}>CHECK-IN DESK — DROP HERE</div>
                <div className="font-bold mt-1" style={{ fontFamily: 'Fraunces, serif' }}>What are we shelving today?</div>
              </div>
              <div className="w-10 h-10 rounded-xl bg-[#FFF0DE] border border-[#3A2416]/10 grid place-items-center">📄</div>
            </div>

            <label
              onDragOver={e => e.preventDefault()}
              onDrop={e => { e.preventDefault(); setDropped(true); }}
              className={`mt-4 block rounded-2xl border-2 border-dashed p-6 text-center cursor-pointer ${dropped ? "bg-[#FFF0DE] border-[#FF6B35]/40" : "bg-[#FFFBF0] border-[#3A2416]/15 hover:bg-white"}`}
            >
              <input type="file" className="hidden" onChange={() => setDropped(true)} />
              <div className="w-14 h-14 mx-auto rounded-2xl bg-[#3A2416] text-white grid place-items-center text-xl">{dropped ? "✓" : "＋"}</div>
              <div className="font-bold mt-3" style={{ fontFamily: 'Fraunces, serif' }}>{dropped ? "quantum-field-notes.pdf shelved!" : "Drop your PDF here"}</div>
              <div className="text-sm opacity-60">{dropped ? "We made you a shelf with 7 hints and 12 quotes." : "Scanned? Photographed? We can read it. Up to 300 pages."}</div>
              {!dropped && <div className="mt-3 inline-block bg-white border border-[#3A2416]/15 rounded-full px-4 py-1.5 text-sm font-semibold">Browse files</div>}
            </label>

            {/* catalog cards */}
            <div className="mt-4 grid grid-cols-2 gap-3">
              <div className="rounded-2xl bg-[#FFF7E8] border border-[#3A2416]/10 p-4">
                <div className="text-xs font-mono opacity-50">DUE — TODAY</div>
                <div className="text-sm font-semibold leading-tight mt-1">Ocean heat +34% above avg — verify on p.18</div>
                <div className="text-xs opacity-60 mt-2">Hint: storms get more fuel → see p.31</div>
              </div>
              <div className="rounded-2xl bg-[#F0F7FF] border border-[#3A2416]/10 p-4">
                <div className="text-xs font-mono opacity-50">QUOTE CARD #4</div>
                <div className="text-sm italic leading-tight mt-1">“We are no longer on the median pathway.” — p.18</div>
                <div className="text-xs mt-2 underline">Open source →</div>
              </div>
            </div>

            <div className="mt-4 flex gap-2 text-xs">
              <span className="bg-[#3A2416] text-white px-3 py-1 rounded-full">Share shelf</span>
              <span className="bg-white border border-[#3A2416]/15 px-3 py-1 rounded-full">Export to Notion</span>
              <span className="opacity-50">🔒 Private</span>
            </div>
          </div>

          {/* little floor */}
          <div className="mt-3 text-center text-xs opacity-50">↳ Librarian’s note: every bullet links to a real page.</div>
        </div>
      </section>

      {/* how it shelves */}
      <section id="how" className="max-w-[1180px] mx-auto px-6 py-10">
        <div className="bg-[#3A2416] text-[#FFFBF0] rounded-[28px] p-6 md:p-8 grid md:grid-cols-4 gap-6">
          <div className="md:col-span-1">
            <div className="text-xs tracking-widest opacity-60" style={{ fontFamily: 'IBM Plex Mono, monospace' }}>HOW IT SHELVES</div>
            <h3 className="text-3xl leading-none mt-2" style={{ fontFamily: 'Fraunces, serif' }}>From pile<br />to shelf<br />in four moves.</h3>
          </div>
          {[
            { n: "01", t: "Check in", d: "Drop any PDF. We read handwriting, scans, footnotes — even coffee stains." },
            { n: "02", t: "Dewey it", d: "We sort by what matters: claims, numbers, definitions, caveats." },
            { n: "03", t: "Card it", d: "Each insight becomes a catalog card: summary + quote + page." },
            { n: "04", t: "Reshelve", d: "Hints tell you where this fits in your mental library." },
          ].map(s => (
            <div key={s.n} className="bg-white/10 rounded-2xl p-5 border border-white/10">
              <div className="text-3xl opacity-30" style={{ fontFamily: 'Fraunces, serif' }}>{s.n}</div>
              <div className="font-bold mt-1">{s.t}</div>
              <div className="text-sm opacity-70 mt-1 leading-relaxed">{s.d}</div>
            </div>
          ))}
        </div>
      </section>

      {/* stacks / use cases */}
      <section id="stacks" className="max-w-[1180px] mx-auto px-6 grid md:grid-cols-3 gap-4">
        {[
          { emoji: "🎓", title: "For students", desc: "Textbooks → exam cards. Definitions, examples, and the ‘will be on the test’ hints.", color: "bg-[#FFF0DE]" },
          { emoji: "⚖️", title: "For readers of fine print", desc: "Contracts → obligations. Dates, penalties, and the clause you can point to.", color: "bg-[#E8F5E9]" },
          { emoji: "🔬", title: "For the curious", desc: "Papers → clear stories. Methods, results, caveats, one quote per claim.", color: "bg-[#F3E8FF]" },
        ].map(c => (
          <div key={c.title} className={`${c.color} rounded-[24px] border border-[#3A2416]/10 p-6`}>
            <div className="w-10 h-10 rounded-xl bg-white border border-[#3A2416]/10 grid place-items-center text-lg">{c.emoji}</div>
            <div className="font-bold mt-3 text-lg" style={{ fontFamily: 'Fraunces, serif' }}>{c.title}</div>
            <div className="text-sm opacity-70 mt-1 leading-relaxed">{c.desc}</div>
            <div className="mt-4 text-sm font-semibold underline">Browse this stack →</div>
          </div>
        ))}
      </section>

      {/* library cards wall */}
      <section id="cards" className="max-w-[1180px] mx-auto px-6 py-10">
        <div className="flex items-baseline justify-between">
          <h3 className="text-2xl" style={{ fontFamily: 'Fraunces, serif' }}>Latest returns <span className="opacity-50 font-normal">— what readers kept</span></h3>
          <span className="hidden md:block text-xs opacity-50" style={{ fontFamily: 'IBM Plex Mono, monospace' }}>STAMPED & VERIFIED</span>
        </div>
        <div className="mt-6 grid md:grid-cols-3 gap-4">
          {[
            { name: "Maya — Policy analyst", text: "I used to highlight everything. Now I highlight nothing — Ratio does the discerning, and I can defend every bullet.", meta: "47 reports · saved 19h" },
            { name: "James — 2L", text: "Casebooks finally make sense. The hints are like a senior associate whispering ‘this is testable’.", meta: "212 cases shelved" },
            { name: "Dr. Chen — Lab PI", text: "My students arrive to journal club actually prepared. That hasn’t happened in 10 years.", meta: "Lab library: 340 ratios" },
          ].map(c => (
            <div key={c.name} className="bg-white border border-[#3A2416]/10 rounded-2xl p-6 shadow-[0_4px_20px_rgba(58,36,22,0.06)]">
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map(i => <span key={i} className="text-[#FFB627]">★</span>)}
              </div>
              <div className="text-sm italic mt-3 leading-relaxed">“{c.text}”</div>
              <div className="flex items-center gap-3 mt-4">
                <img src={`https://i.pravatar.cc/100?img=${33 + c.name.length}`} alt="" className="w-8 h-8 rounded-full object-cover" />
                <div><div className="text-sm font-semibold">{c.name}</div><div className="text-xs opacity-50">{c.meta}</div></div>
              </div>
              <div className="mt-4 border-t border-dashed pt-3 flex gap-2 text-[11px] font-mono opacity-50">
                <span>DUE: —</span><span>·</span><span>RENEW: ∞</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* pricing as library membership */}
      <section className="max-w-[1180px] mx-auto px-6 pb-10">
        <div className="grid md:grid-cols-[0.9fr_1.1fr] gap-4">
          <div className="bg-[#FFF0DE] border border-[#3A2416]/10 rounded-[28px] p-8">
            <div className="text-xs tracking-widest opacity-50" style={{ fontFamily: 'IBM Plex Mono, monospace' }}>MEMBERSHIP</div>
            <h3 className="text-3xl mt-2" style={{ fontFamily: 'Fraunces, serif' }}>A library card<br />for your brain.</h3>
            <p className="opacity-60 mt-2 text-sm">Cancel anytime. Your shelves stay yours. Team cards include SSO.</p>
            <div className="mt-6 p-4 bg-white rounded-2xl border border-[#3A2416]/10 flex items-center gap-3">
              <span className="text-2xl">🪪</span>
              <div className="text-sm"><span className="font-bold">RATIO CARD — #042281</span><br /><span className="opacity-60 font-mono text-xs">Valid: forever · Fines: never</span></div>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { name: "Visitor", price: "Free", feats: ["5 PDFs / mo", "Summaries + quotes", "Shelf history"], cta: "Get card", accent: "" },
              { name: "Reader", price: "$12", feats: ["Unlimited shelves", "Hints & maps", "Notion / Obsidian"], cta: "Become a Reader", accent: "bg-[#3A2416] text-[#FFFBF0] scale-[1.02] shadow-xl", badge: "Most loved" },
              { name: "Library", price: "$29", feats: ["Shared stacks", "API", "SSO & audit"], cta: "For teams", accent: "bg-white" },
            ].map(p => (
              <div key={p.name} className={`rounded-[24px] border border-[#3A2416]/10 p-6 flex flex-col ${p.accent || "bg-white"}`}>
                {p.badge && <div className="bg-[#FF6B35] text-white text-[11px] px-2 py-1 rounded-full w-fit mb-2">{p.badge}</div>}
                <div className="text-xs tracking-widest opacity-60">{p.name}</div>
                <div className="text-3xl font-black mt-1" style={{ fontFamily: 'Fraunces, serif' }}>{p.price}<span className="text-sm font-normal opacity-60">/mo</span></div>
                <ul className="text-sm mt-4 space-y-1 opacity-80">{p.feats.map(f => <li key={f}>— {f}</li>)}</ul>
                <button className={`mt-6 rounded-full py-2.5 font-bold border ${p.name === "Reader" ? "bg-[#FF6B35] border-[#FF6B35] text-white" : "bg-[#FFFBF0] border-[#3A2416]/15"}`}>{p.cta}</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-[#3A2416]/10 py-6">
        <div className="max-w-[1180px] mx-auto px-6 flex flex-wrap justify-between gap-4 text-sm opacity-60">
          <span>© 2026 Ratio Reader · Shelved with care · Your files are private</span>
          <Link to="/" className="underline">Back to directory →</Link>
        </div>
      </footer>
    </div>
  );
}
