import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowLeft, BookOpen, Bookmark, Coffee, FileUp, Glasses, Heart, Lamp, Lightbulb, Quote, Sparkles, Check, Star } from "lucide-react";

const soft = "shadow-[0_20px_50px_-20px_rgba(59,42,32,0.35)]";

function Shelf() {
  const [level, setLevel] = useState(1);
  const data = [
    { l: "A light bedtime skim", t: "~5 min", d: "The gist, three takeaways, one quote to remember." },
    { l: "A proper afternoon read", t: "~12 min", d: "Chapter-by-chapter brief with hints in the margins." },
    { l: "The full study session", t: "~30 min", d: "Deep brief, insight maps, citation pack, audio version." },
  ];
  return (
    <div className={`rounded-[28px] border-2 border-[#3B2A20]/10 bg-white/70 p-7 ${soft}`}>
      <p className="font-hand text-2xl text-[#FF6B4A]">pick your reading mood…</p>
      <div className="mt-4 grid grid-cols-3 gap-2 rounded-full bg-[#3B2A20]/5 p-1.5">
        {["Cozy", "Curious", "Scholar"].map((m, i) => (
          <button key={m} onClick={() => setLevel(i)}
            className={`rounded-full py-2.5 text-sm font-bold transition-all ${level === i ? "bg-[#3B2A20] text-[#FFF1E2]" : "text-[#3B2A20]/60 hover:text-[#3B2A20]"}`}>{m}</button>
        ))}
      </div>
      <motion.div key={level} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mt-5 rounded-2xl bg-[#FFF1E2] p-6 text-center">
        <p className="font-instrument text-3xl italic">{data[level].l}</p>
        <p className="mt-1 font-grotesk text-sm font-bold uppercase tracking-[0.25em] text-[#FF6B4A]">{data[level].t}</p>
        <p className="mt-2 text-sm text-[#3B2A20]/70">{data[level].d}</p>
      </motion.div>
    </div>
  );
}

export function DesignThree() {
  const [file, setFile] = useState<string | null>(null);
  return (
    <div className="min-h-screen bg-[#FFF1E2] font-inter text-[#3B2A20]">
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -left-24 top-24 size-96 rounded-full bg-[#FFD9C2] blur-3xl" />
        <div className="absolute -right-24 bottom-24 size-96 rounded-full bg-[#FFE9B8] blur-3xl" />
      </div>
      <div className="relative">
        <header className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5">
          <Link to="/" className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#3B2A20]/60 hover:text-[#FF6B4A]"><ArrowLeft className="size-4" /> Home</Link>
          <p className="flex items-center gap-2 font-instrument text-2xl italic"><span className="grid size-9 place-items-center rounded-2xl bg-[#FF6B4A] text-white"><BookOpen className="size-4" /></span> Ratio Reader</p>
          <a href="#pricing-3" className="rounded-full bg-[#3B2A20] px-5 py-2.5 text-xs font-bold uppercase tracking-widest text-[#FFF1E2] transition-transform hover:scale-105">Start free</a>
        </header>

        <main className="mx-auto max-w-6xl px-5 pb-20">
          <div className="grid items-center gap-12 pt-6 lg:grid-cols-2">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <p className="inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#FF6B4A]"><Coffee className="size-3.5" /> Your cozy reading nook awaits</p>
              <h1 className="mt-5 font-instrument text-6xl leading-[0.95] sm:text-7xl">Big books,<br /><span className="italic text-[#FF6B4A]">small</span> afternoons.</h1>
              <p className="mt-5 max-w-md leading-relaxed text-[#3B2A20]/70">Upload the PDF you've been avoiding. Ratio Reader turns it into a warm little brief — the important ideas, the loveliest quotes, gentle hints where it gets tricky, and insights that tie it all together.</p>
              <label className={`mt-7 block cursor-pointer rounded-[24px] border-2 border-dashed border-[#FF6B4A]/50 bg-white/70 p-6 text-center transition-all hover:border-[#FF6B4A] ${soft}`}>
                <FileUp className="mx-auto size-7 text-[#FF6B4A]" />
                <p className="mt-2 font-instrument text-2xl italic">{file ?? "Tuck your PDF in here…"}</p>
                <p className="text-xs text-[#3B2A20]/55">{file ? "It's on the shelf, bookmarked ✓" : "we'll keep it safe, warm & private"}</p>
                <input type="file" accept="application/pdf" className="hidden" onChange={(e) => setFile(e.target.files?.[0]?.name ?? null)} />
              </label>
              <div className="mt-4 flex items-center gap-3">
                <div className="flex -space-x-2">{["MJ", "PS", "AK", "LT"].map((n) => <span key={n} className="grid size-9 place-items-center rounded-full border-2 border-[#FFF1E2] bg-[#3B2A20] text-[10px] font-bold text-white">{n}</span>)}</div>
                <p className="flex items-center gap-1 text-sm text-[#3B2A20]/70"><span className="flex">{Array(5).fill(0).map((_, i) => <Star key={i} className="size-3.5 fill-[#FF6B4A] text-[#FF6B4A]" />)}</span> 40,000 happy readers</p>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.15 }} className="relative">
              <div className={`rounded-[32px] border-2 border-[#3B2A20]/10 bg-[#FFFBF3] p-7 ${soft}`}>
                <div className="flex items-center justify-between">
                  <p className="font-plex text-xs uppercase tracking-[0.25em] text-[#3B2A20]/50">Now condensing…</p>
                  <Bookmark className="size-5 fill-[#FF6B4A] text-[#FF6B4A]" />
                </div>
                <p className="mt-3 font-instrument text-3xl italic leading-snug">“The Design of Everyday Things” — in 12 gentle minutes</p>
                <div className="mt-5 space-y-3">
                  {[["Summary", "w-11/12", "Good design is invisible; it maps to how humans actually think."], ["Quote · p.87", "w-9/12", "“A brilliant solution to the wrong problem is worse than no solution.”"], ["Hint", "w-10/12", "Norman's 'affordance' = what a thing invites you to do. Door handles lie!"]].map(([k, w, t]) => (
                    <div key={k} className={`rounded-2xl bg-white p-4 ${w}`}>
                      <p className="font-grotesk text-[11px] font-bold uppercase tracking-[0.2em] text-[#FF6B4A]">{k}</p>
                      <p className="mt-1 text-sm italic">{t}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-5 flex items-center gap-2">
                  <div className="h-2.5 flex-1 overflow-hidden rounded-full bg-[#3B2A20]/10"><motion.div initial={{ width: "8%" }} animate={{ width: "86%" }} transition={{ duration: 2, ease: "easeOut" }} className="h-full rounded-full bg-gradient-to-r from-[#FF6B4A] to-[#FFB03A]" /></div>
                  <span className="font-plex text-xs">86%</span>
                </div>
              </div>
              <span className="animate-floaty absolute -left-4 -top-5 -rotate-6 rounded-2xl bg-[#3B2A20] px-4 py-2 font-hand text-xl text-[#FFE9B8]">so cozy!</span>
              <span className="animate-floaty absolute -bottom-5 -right-3 rotate-3 rounded-2xl bg-white px-4 py-2 font-hand text-xl text-[#FF6B4A]" style={{ animationDelay: "1.2s" }}>12 min, not 212 pgs ✓</span>
            </motion.div>
          </div>

          <div className="mt-14 overflow-hidden rounded-full bg-[#3B2A20] py-3 text-[#FFF1E2]">
            <div className="animate-marquee flex w-max gap-10 whitespace-nowrap font-hand text-2xl">
              {Array(2).fill(["summaries ☕", "lovely quotes ✿", "gentle hints ♡", "warm insights ✦", "audio bedtime briefs ☾"]).flat().map((t, i) => <span key={i}>{t}</span>)}
            </div>
          </div>

          <section className="mt-16 grid items-start gap-10 lg:grid-cols-2">
            <div>
              <p className="font-grotesk text-xs font-bold uppercase tracking-[0.3em] text-[#FF6B4A]">How it works</p>
              <h2 className="mt-2 font-instrument text-5xl leading-tight">Three little steps to <span className="italic text-[#FF6B4A]">finished.</span></h2>
              <div className="mt-6 space-y-4">
                {[
                  { icon: FileUp, h: "1 · Drop it on the shelf", p: "Any PDF up to 1,000 pages. Scans get OCR; tables and charts are read with care." },
                  { icon: Sparkles, h: "2 · We do the highlighting", p: "The thesis, the evidence, the exceptions — pressed like flowers into a short brief." },
                  { icon: Glasses, h: "3 · Read in your armchair", p: "Summary plus margin hints, quotable quotes, and insight cards that connect chapters." },
                ].map((s, i) => (
                  <motion.div key={s.h} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className={`flex gap-4 rounded-3xl border-2 border-[#3B2A20]/10 bg-white/70 p-5 ${soft}`}>
                    <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-[#FF6B4A]/15"><s.icon className="size-5 text-[#FF6B4A]" /></span>
                    <div><h3 className="font-bold">{s.h}</h3><p className="mt-1 text-sm text-[#3B2A20]/65">{s.p}</p></div>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="lg:sticky lg:top-6"><Shelf />
              <div className="mt-4 grid grid-cols-3 gap-3">
                {[["212→12", "pages to min"], ["8", "quotes kept"], ["100%", "citable"]].map(([v, l]) => (
                  <div key={l} className="rounded-3xl bg-[#3B2A20] p-4 text-center text-[#FFF1E2]"><p className="font-instrument text-2xl italic">{v}</p><p className="text-[11px] uppercase tracking-widest opacity-60">{l}</p></div>
                ))}
              </div>
            </div>
          </section>

          <section className="mt-16">
            <h2 className="text-center font-instrument text-5xl">Everything tucked <span className="italic text-[#FF6B4A]">inside</span></h2>
            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { icon: BookOpen, h: "Chapter bedtime stories", p: "Each chapter as five gentle bullets. The whole arc, none of the slog." },
                { icon: Quote, h: "Quotes worth framing", p: "The lines worth citing, each pinned to its page for one-click proof." },
                { icon: Lightbulb, h: "Hints in the margin", p: "Jargon decoded, tricky methods flagged — like a clever friend's notes." },
                { icon: Lamp, h: "Late-night insights", p: "Ideas connected across chapters into 'ohh, that's the point' cards." },
              ].map((f, i) => (
                <motion.div key={f.h} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }} className={`rounded-[26px] border-2 border-[#3B2A20]/10 p-6 transition-transform hover:-translate-y-1.5 ${i % 2 ? "bg-[#3B2A20] text-[#FFF1E2]" : "bg-white/80"}`}>
                  <f.icon className={`size-6 ${i % 2 ? "text-[#FFB03A]" : "text-[#FF6B4A]"}`} />
                  <h3 className="mt-3 font-instrument text-2xl italic">{f.h}</h3>
                  <p className={`mt-2 text-sm ${i % 2 ? "text-white/70" : "text-[#3B2A20]/65"}`}>{f.p}</p>
                </motion.div>
              ))}
            </div>
          </section>

          <motion.figure initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className={`mx-auto mt-16 max-w-2xl rounded-[28px] bg-white/80 p-10 text-center ${soft}`}>
            <Heart className="mx-auto size-6 fill-[#FF6B4A] text-[#FF6B4A]" />
            <blockquote className="mt-4 font-instrument text-3xl italic leading-snug">“My textbook finally feels like stories, not chores. I read the brief with tea, then aced the seminar.”</blockquote>
            <figcaption className="mt-4 text-xs font-bold uppercase tracking-[0.25em] text-[#3B2A20]/50">— Lena K., literature student</figcaption>
          </motion.figure>

          <section id="pricing-3" className="mt-16">
            <h2 className="text-center font-instrument text-5xl">Pick your <span className="italic text-[#FF6B4A]">armchair</span></h2>
            <div className="mt-8 grid gap-5 md:grid-cols-3">
              {[
                { n: "Teacup", p: "$0", d: "for weekend skimmers", f: ["3 PDFs a month", "5-minute summaries", "Quotes + pages"] },
                { n: "Armchair", p: "$12", d: "for daily readers", f: ["Unlimited PDFs", "Hints + insight cards", "Audio bedtime briefs", "Citation exports"], hot: true },
                { n: "Library", p: "$39", d: "for book clubs & teams", f: ["5 cozy seats", "Shared shelves", "API + bulk upload"] },
              ].map((t) => (
                <div key={t.n} className={`rounded-[28px] p-7 ${t.hot ? `bg-[#3B2A20] text-[#FFF1E2] ${soft}` : "border-2 border-[#3B2A20]/10 bg-white/70"}`}>
                  {t.hot && <span className="rounded-full bg-[#FF6B4A] px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-white">Most loved ♥</span>}
                  <p className="mt-2 font-instrument text-3xl italic">{t.n}</p>
                  <p className="text-xs uppercase tracking-widest opacity-60">{t.d}</p>
                  <p className="mt-2 font-instrument text-5xl italic">{t.p}<span className="text-base not-italic">/mo</span></p>
                  <ul className="mt-4 space-y-2 text-sm">{t.f.map((x) => <li key={x} className="flex items-center gap-2"><Check className="size-4 text-[#FF6B4A]" />{x}</li>)}</ul>
                  <button className={`mt-6 w-full rounded-full py-3 text-sm font-bold ${t.hot ? "bg-[#FF6B4A] text-white hover:bg-[#ff7f63]" : "bg-[#3B2A20]/5 hover:bg-[#3B2A20] hover:text-white"}`}>Curl up with {t.n}</button>
                </div>
              ))}
            </div>
          </section>

          <footer className="mt-16 flex items-center justify-between border-t-2 border-[#3B2A20]/10 py-6 text-xs text-[#3B2A20]/50">
            <p className="font-instrument text-xl italic text-[#3B2A20]">Ratio Reader ☕ est. 2026</p>
            <Link to="/" className="font-bold uppercase tracking-widest hover:text-[#FF6B4A]">← all designs</Link>
          </footer>
        </main>
      </div>
    </div>
  );
}
