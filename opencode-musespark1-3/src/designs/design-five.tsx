import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowLeft, BadgeCheck, Bomb, FileUp, Flame, Lightbulb, Megaphone, Quote, Scissors, Sparkles, Star, Zap, Check } from "lucide-react";

const HARD = "shadow-[6px_6px_0_#000]";
const HARD_SM = "shadow-[4px_4px_0_#000]";

function Crusher() {
  const [smashed, setSmashed] = useState(0);
  const [file, setFile] = useState<string | null>(null);
  return (
    <div className={`rounded-3xl border-4 border-black bg-white p-6 ${HARD}`}>
      <label className="block cursor-pointer rounded-2xl border-[3px] border-dashed border-black bg-[#FFDE00] p-6 text-center transition-transform hover:-rotate-1">
        <FileUp className="mx-auto size-8" strokeWidth={2.5} />
        <p className="font-archivo mt-2 text-lg uppercase leading-tight">{file ?? "Drop PDF here. We dare you."}</p>
        <p className="font-plex text-xs font-bold">212 pages? Cute. Watch this.</p>
        <input type="file" accept="application/pdf" className="hidden" onChange={(e) => { setFile(e.target.files?.[0]?.name ?? null); setSmashed(0); }} />
      </label>
      <button
        onClick={() => setSmashed((s) => Math.min(100, s + 25))}
        className={`mt-4 w-full rounded-2xl border-[3px] border-black bg-[#FF4D00] py-4 font-archivo text-xl uppercase text-white transition-transform hover:-translate-y-1 active:translate-y-0 ${HARD_SM}`}
      >
        {smashed >= 100 ? "★ Obliterated ★" : "💥 Smash the filler"}
      </button>
      <div className="mt-4 h-4 overflow-hidden rounded-full border-[3px] border-black bg-white">
        <motion.div animate={{ width: `${smashed}%` }} className="h-full bg-black" />
      </div>
      <div className="mt-3 flex justify-between font-plex text-xs font-bold uppercase">
        <span>{smashed}% smashed</span><span>{smashed >= 100 ? "12 min left. You're welcome." : "filler screams at 0%"}</span>
      </div>
    </div>
  );
}

export function DesignFive() {
  return (
    <div className="min-h-screen bg-[#FFDE00] font-inter text-black dot-grid">
      {/* top strip */}
      <div className="overflow-hidden border-b-4 border-black bg-black py-1.5 text-[#FFDE00]">
        <div className="animate-marquee-fast flex w-max gap-8 whitespace-nowrap font-plex text-xs font-bold uppercase tracking-[0.25em]">
          {Array(2).fill(["★ No filler survived", "★ 212 pages → 12 min", "★ Quotes with receipts", "★ Free to start"]).flat().map((t, i) => <span key={i}>{t}</span>)}
        </div>
      </div>

      <header className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <Link to="/" className={`flex items-center gap-2 rounded-full border-[3px] border-black bg-white px-4 py-2 font-archivo text-xs uppercase ${HARD_SM}`}><ArrowLeft className="size-4" /> Gallery</Link>
        <p className="font-archivo text-xl uppercase tracking-tight">Ratio<span className="bg-black px-1 text-[#FFDE00]">Reader</span></p>
        <a href="#pricing-5" className={`rounded-full border-[3px] border-black bg-black px-5 py-2 font-archivo text-xs uppercase text-[#FFDE00] ${HARD_SM}`}>Get it free</a>
      </header>

      <main className="mx-auto max-w-6xl px-5 pb-16">
        {/* HERO */}
        <section className="grid items-center gap-10 pt-6 lg:grid-cols-2">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <div className="flex flex-wrap gap-2">
              {[["★ New", "bg-[#7CFC00] -rotate-3"], ["PDF destroyer", "bg-white rotate-2"], ["40k readers", "bg-[#FF4D00] text-white -rotate-2"]].map(([t, c]) => (
                <span key={t} className={`rounded-full border-[3px] border-black px-4 py-1.5 font-archivo text-xs uppercase ${c} ${HARD_SM}`}>{t}</span>
              ))}
            </div>
            <h1 className="font-archivo mt-5 text-6xl uppercase leading-[0.9] sm:text-8xl">
              Boring<br />PDFs<br /><span className="bg-black px-3 text-[#FFDE00]">go boom.</span>
            </h1>
            <p className="mt-5 max-w-md border-l-8 border-black bg-white/60 pl-4 text-lg font-medium leading-snug">
              Upload the monster doc. Get back the <u>good stuff</u>: a razor summary, killer quotes, cheat-code hints & big-brain insights. Done before your coffee cools.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#crush-5" className={`rounded-2xl border-4 border-black bg-black px-7 py-4 font-archivo uppercase text-[#FFDE00] ${HARD}`}>Start smashing — free</a>
              <a href="#how-5" className={`rounded-2xl border-4 border-black bg-white px-7 py-4 font-archivo uppercase ${HARD}`}>How it slaps ↓</a>
            </div>
            <p className="mt-4 flex items-center gap-2 font-plex text-xs font-bold uppercase"><span className="flex">{Array(5).fill(0).map((_, i) => <Star key={i} className="size-4 fill-black" />)}</span> 4.9/5 from chronic skimmers</p>
          </motion.div>
          <motion.div id="crush-5" initial={{ opacity: 0, rotate: 2 }} animate={{ opacity: 1, rotate: 0 }} transition={{ delay: 0.15 }} className="relative">
            <Crusher />
            <span className="absolute -top-6 -right-2 rotate-6 rounded-2xl border-[3px] border-black bg-[#7CFC00] px-4 py-2 font-archivo text-sm uppercase animate-floaty">100% citable!</span>
            <span className="absolute -bottom-5 -left-3 -rotate-3 rounded-2xl border-[3px] border-black bg-black px-4 py-2 font-archivo text-sm uppercase text-[#FFDE00] animate-floaty" style={{ animationDelay: "1s" }}>Zero homework!</span>
          </motion.div>
        </section>

        {/* marquee divider */}
        <div className="mt-12 -rotate-1 overflow-hidden rounded-2xl border-4 border-black bg-[#FF4D00] py-3 text-white">
          <div className="animate-marquee flex w-max gap-10 whitespace-nowrap font-archivo text-xl uppercase">
            {Array(2).fill(["Summaries", "✂", "Quotes", "✂", "Hints", "✂", "Insights", "✂", "Audio briefs", "✂"]).flat().map((t, i) => <span key={i}>{t}</span>)}
          </div>
        </div>

        {/* HOW */}
        <section id="how-5" className="mt-14">
          <h2 className="font-archivo text-5xl uppercase sm:text-6xl">How it <span className="bg-black px-2 text-[#FFDE00]">slaps</span></h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {[
              { icon: FileUp, c: "bg-[#7CFC00]", r: "-rotate-1", h: "1. Yeet the PDF", p: "Any PDF up to 1,000 pages. Scans, decks, contracts. Encrypted, never trained on, auto-deleted." },
              { icon: Bomb, c: "bg-[#FF4D00] text-white", r: "rotate-1", h: "2. Filler explodes", p: "Pick your ratio: 2-min skim, 12-min brief, or full study guide. Thesis + evidence only." },
              { icon: BadgeCheck, c: "bg-white", r: "-rotate-1", h: "3. Keep receipts", p: "Every claim pinned to a page. Quotes export to APA/MLA/Chicago. Argue with confidence." },
            ].map((s, i) => (
              <motion.div key={s.h} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className={`rounded-3xl border-4 border-black ${s.c} p-7 ${s.r} transition-transform hover:rotate-0 hover:scale-[1.02] ${HARD}`}>
                <s.icon className="size-8" strokeWidth={2.5} />
                <h3 className="font-archivo mt-4 text-2xl uppercase">{s.h}</h3>
                <p className="mt-2 font-medium">{s.p}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* STICKER FEATURES */}
        <section className="mt-14 rounded-3xl border-4 border-black bg-black p-8 text-[#FFDE00] sm:p-12">
          <p className="font-plex text-xs font-bold uppercase tracking-[0.3em] text-[#7CFC00]">★ What's in the loot box</p>
          <h2 className="font-archivo mt-2 text-4xl uppercase text-white sm:text-5xl">Everything a skim leaves behind</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              { icon: Scissors, h: "Razor summaries", p: "Chapters crushed to 5 bullets each. Whole plot, none of the slog.", c: "bg-[#FFDE00] text-black rotate-1" },
              { icon: Quote, h: "Quotes w/ receipts", p: "The lines worth stealing, each stamped with a page number.", c: "bg-white text-black -rotate-1" },
              { icon: Lightbulb, h: "Cheat-code hints", p: "Jargon decoded, shady methods flagged. Like a smart friend's margin notes.", c: "bg-[#7CFC00] text-black rotate-1" },
              { icon: Sparkles, h: "Big-brain insights", p: "Ideas linked across chapters: supports, contradicts, implies. Mind = blown.", c: "bg-[#FF4D00] text-white -rotate-1" },
            ].map((f) => (
              <div key={f.h} className={`rounded-2xl border-[3px] border-[#FFDE00]/0 p-6 ${f.c} border-black transition-transform hover:scale-[1.02]`} style={{ borderColor: "#000" }}>
                <f.icon className="size-7" strokeWidth={2.5} />
                <h3 className="font-archivo mt-3 text-xl uppercase">{f.h}</h3>
                <p className="mt-1.5 text-sm font-medium">{f.p}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-4 rounded-2xl bg-[#FFDE00] p-5 text-black">
            <Megaphone className="size-7" />
            <p className="font-archivo uppercase">Audio briefs included — listen at 2× while you do literally anything else.</p>
          </div>
        </section>

        {/* WALL OF LOVE */}
        <section className="mt-14">
          <h2 className="font-archivo flex items-center gap-3 text-4xl uppercase sm:text-5xl"><Flame className="size-10" /> Wall of love</h2>
          <div className="mt-6 grid gap-5 md:grid-cols-3">
            {[
              { q: "Fed it my 300-page thesis reading list. Defended like I'd read every word. (I verified the quotes, obviously.)", n: "Mara J. — grad student", c: "rotate-1 bg-white" },
              { q: "Due diligence Friday → two-page brief Monday. Partners thought I'd hired an analyst.", n: "Priya S. — ops lead", c: "-rotate-1 bg-[#7CFC00]" },
              { q: "My textbook finally slaps. Brief + audio on the bus = A in the seminar.", n: "Lena K. — undergrad", c: "rotate-1 bg-black text-[#FFDE00]" },
            ].map((t) => (
              <figure key={t.n} className={`rounded-3xl border-4 border-black p-6 ${t.c} ${HARD}`}>
                <div className="flex">{Array(5).fill(0).map((_, i) => <Star key={i} className="size-4 fill-current" />)}</div>
                <blockquote className="mt-3 font-bold leading-snug">“{t.q}”</blockquote>
                <figcaption className="mt-3 font-plex text-xs font-bold uppercase opacity-70">— {t.n} ✓ verified</figcaption>
              </figure>
            ))}
          </div>
        </section>

        {/* PRICING */}
        <section id="pricing-5" className="mt-14">
          <h2 className="font-archivo text-center text-5xl uppercase sm:text-6xl">Pick your <span className="bg-black px-2 text-[#FFDE00]">fighter</span></h2>
          <div className="mt-8 grid items-stretch gap-5 md:grid-cols-3">
            {[
              { n: "Freeloader", p: "$0", c: "bg-white", f: ["3 PDFs / month", "5-min summaries", "Quotes + pages"], btn: "Claim free stuff" },
              { n: "Pro Smasher", p: "$12", c: "bg-black text-[#FFDE00]", hot: true, f: ["Unlimited PDFs", "Hints + insight maps", "Audio briefs", "Citation exports"], btn: "Smash like a pro" },
              { n: "Whole Crew", p: "$39", c: "bg-[#7CFC00]", f: ["5 seats", "Shared shelves", "API + bulk upload"], btn: "Bring the crew" },
            ].map((t) => (
              <div key={t.n} className={`relative rounded-3xl border-4 border-black p-7 ${t.c} ${HARD} ${t.hot ? "md:-translate-y-3 md:rotate-1" : ""}`}>
                {t.hot && <span className="absolute -top-4 left-1/2 -translate-x-1/2 -rotate-2 whitespace-nowrap rounded-full border-[3px] border-black bg-[#FF4D00] px-4 py-1 font-archivo text-xs uppercase text-white">★ Most smashed ★</span>}
                <p className="font-archivo text-xl uppercase">{t.n}</p>
                <p className="font-archivo mt-1 text-6xl">{t.p}<span className="text-lg">/mo</span></p>
                <ul className="mt-5 space-y-2 font-medium">{t.f.map((x) => <li key={x} className="flex items-center gap-2"><span className="grid size-5 place-items-center rounded-full border-2 border-current"><Check className="size-3" strokeWidth={3} /></span>{x}</li>)}</ul>
                <button className={`mt-6 w-full rounded-xl border-[3px] border-black py-3.5 font-archivo uppercase ${t.hot ? "bg-[#FFDE00] text-black" : "bg-black text-[#FFDE00]"} transition-transform hover:-translate-y-0.5`}><span className="flex items-center justify-center gap-2"><Zap className="size-4" />{t.btn}</span></button>
              </div>
            ))}
          </div>
        </section>

        <footer className="mt-14 flex flex-col items-center justify-between gap-4 rounded-3xl border-4 border-black bg-white p-6 sm:flex-row">
          <p className="font-archivo uppercase">Ratio<span className="bg-black px-1 text-[#FFDE00]">Reader</span> © 2026 — no filler harmed*</p>
          <p className="font-plex text-xs">*tons of filler harmed</p>
          <Link to="/" className="font-archivo rounded-full border-[3px] border-black bg-[#FFDE00] px-5 py-2 text-xs uppercase">← All designs</Link>
        </footer>
      </main>
    </div>
  );
}
