import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import {
  ArrowLeft, ArrowRight, ArrowUpRight, BookOpenText, Feather, Highlighter,
  Quote, Lightbulb, FileUp, Scissors, Newspaper, Sparkles, Check, Star,
} from "lucide-react";

const fade = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.6 },
} as const;

function Masthead() {
  return (
    <header className="border-b-4 border-double border-[#1A1713]">
      <div className="mx-auto max-w-6xl px-5">
        <div className="flex items-center justify-between py-2 text-[11px] uppercase tracking-[0.22em] text-[#1A1713]/70 font-plex">
          <span>Vol. VII — No. 42</span>
          <span className="hidden sm:inline">Read less. Know more.</span>
          <span>Price: one skim</span>
        </div>
        <div className="flex items-center justify-between border-t border-[#1A1713]/30 py-4">
          <Link to="/" className="flex items-center gap-2 text-xs font-plex uppercase tracking-widest hover:text-[#D63A2F]">
            <ArrowLeft className="size-4" /> All editions
          </Link>
          <p className="font-fraunces text-4xl sm:text-6xl font-black tracking-tight">
            Ratio <span className="italic font-light">Reader</span>
          </p>
          <span className="hidden md:inline-flex items-center gap-2 rounded-full bg-[#1A1713] px-4 py-2 text-xs font-semibold uppercase tracking-widest text-[#FAF6EF]">
            <Newspaper className="size-3.5" /> Est. 2026
          </span>
        </div>
      </div>
    </header>
  );
}

function RatioSlider() {
  const [pages, setPages] = useState(212);
  const out = Math.max(1, Math.round(pages / 12));
  return (
    <div className="rounded-xl border-2 border-[#1A1713] bg-white/60 p-6 shadow-[6px_6px_0_#1A1713]">
      <p className="font-plex text-xs uppercase tracking-[0.25em] text-[#D63A2F]">Try the ratio — drag it</p>
      <div className="mt-4 flex items-end justify-between font-fraunces">
        <div>
          <p className="text-6xl font-black leading-none">{pages}<span className="text-xl font-light italic"> pgs</span></p>
          <p className="mt-1 text-sm italic text-[#1A1713]/60">the report you were assigned</p>
        </div>
        <ArrowRight className="mb-4 size-8 text-[#D63A2F]" />
        <div className="text-right">
          <p className="text-6xl font-black leading-none text-[#D63A2F]">{out}<span className="text-xl font-light italic"> min</span></p>
          <p className="mt-1 text-sm italic text-[#1A1713]/60">the brief you actually read</p>
        </div>
      </div>
      <input
        type="range" min={12} max={800} value={pages}
        onChange={(e) => setPages(Number(e.target.value))}
        className="mt-6 w-full accent-[#D63A2F]"
      />
      <p className="mt-2 font-plex text-xs text-[#1A1713]/60">≈ 12 pages distilled into 1 minute of reading. Updated live, like a good sub-editor.</p>
    </div>
  );
}

function Tabs() {
  const [tab, setTab] = useState<"hints" | "quotes" | "insights">("quotes");
  const body = {
    hints: { icon: Lightbulb, k: "Marginal hint", t: "“The methodology on p. 41 limits the claim — flag it before you cite this.”", s: "Hints appear where a tired reader would miss the catch." },
    quotes: { icon: Quote, k: "Pulled quote", t: "“Attention is the last scarce resource; summarization is triage.”", s: "Every quote links back to its page, so you can verify in one click." },
    insights: { icon: Sparkles, k: "Insight card", t: "3 findings support remote async work; 1 contradicts it. Thesis: autonomy beats presence.", s: "Insights connect dots across chapters instead of listing them." },
  }[tab];
  return (
    <div className="grid gap-6 lg:grid-cols-[220px_1fr]">
      <div className="flex lg:flex-col gap-2">
        {(["hints", "quotes", "insights"] as const).map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`rounded-lg border-2 border-[#1A1713] px-4 py-3 font-plex text-xs uppercase tracking-[0.2em] transition-all ${
              tab === t ? "bg-[#1A1713] text-[#FAF6EF]" : "bg-transparent hover:bg-[#1A1713]/5"
            }`}
          >
            {t}
          </button>
        ))}
      </div>
      <motion.div
        key={tab}
        initial={{ opacity: 0, x: 18 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.35 }}
        className="relative rounded-xl border-2 border-[#1A1713] bg-white/70 p-8"
      >
        <body.icon className="size-7 text-[#D63A2F]" />
        <p className="mt-3 font-plex text-[11px] uppercase tracking-[0.25em] text-[#D63A2F]">{body.k}</p>
        <p className="mt-3 font-fraunces text-2xl sm:text-3xl italic leading-snug">{body.t}</p>
        <p className="mt-4 text-sm text-[#1A1713]/65">{body.s}</p>
        <span className="absolute -top-4 right-6 rotate-3 bg-[#D63A2F] px-3 py-1 font-hand text-xl text-white shadow">editor's pick!</span>
      </motion.div>
    </div>
  );
}

export function DesignOne() {
  const [file, setFile] = useState<string | null>(null);
  return (
    <div className="min-h-screen bg-[#FAF6EF] text-[#1A1713] font-inter paper-grain">
      <Masthead />

      {/* HERO — front page story */}
      <main className="mx-auto max-w-6xl px-5 pt-10">
        <motion.div {...fade}>
          <p className="flex items-center gap-2 font-plex text-xs uppercase tracking-[0.3em] text-[#D63A2F]">
            <span className="inline-block size-2 animate-blink rounded-full bg-[#D63A2F]" /> Front page — the only story that matters
          </p>
          <h1 className="mt-4 font-fraunces text-5xl sm:text-7xl lg:text-8xl font-black leading-[0.95] tracking-tight">
            Your 200-page PDF, <span className="italic font-light">read in the time</span> it takes to{" "}
            <span className="relative inline-block text-[#D63A2F]">drink coffee.
              <svg viewBox="0 0 300 14" className="absolute -bottom-1 left-0 w-full"><path d="M4 10 C 80 2, 220 2, 296 8" stroke="#D63A2F" strokeWidth="5" fill="none" strokeLinecap="round" /></svg>
            </span>
          </h1>
          <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_380px]">
            <div className="columns-1 sm:columns-2 gap-8 text-[15px] leading-relaxed text-[#1A1713]/85">
              <p><span className="float-left mr-2 font-fraunces text-6xl font-black leading-[0.8]">R</span>atio Reader takes the document you keep avoiding — the research report, the contract, the 90-slide deck exported as PDF — and returns the signal: a tight summary of the most important information, plus the quotes worth citing, the hints that explain the hard parts, and the insights hiding between chapters.</p>
              <p className="mt-4">Drop in a file. Get back a brief you can actually finish, with every claim pinned to its page number so you never have to take the machine's word for it.</p>
            </div>
            <div className="space-y-4">
              <label className="block cursor-pointer rounded-xl border-2 border-dashed border-[#1A1713]/40 bg-white/50 p-6 text-center transition-colors hover:border-[#D63A2F] hover:bg-white">
                <FileUp className="mx-auto size-7 text-[#D63A2F]" />
                <p className="mt-2 font-fraunces text-xl italic">{file ? file : "Drop your PDF here"}</p>
                <p className="mt-1 font-plex text-xs text-[#1A1713]/55">{file ? "Filed with the night editor ✓" : "or click to browse — 212 pages welcome"}</p>
                <input type="file" accept="application/pdf" className="hidden" onChange={(e) => setFile(e.target.files?.[0]?.name ?? null)} />
              </label>
              <div className="flex gap-3">
                <a href="#pricing-1" className="flex-1 rounded-lg bg-[#D63A2F] px-5 py-3.5 text-center text-sm font-bold uppercase tracking-widest text-white shadow-[4px_4px_0_#1A1713] transition-transform hover:-translate-y-0.5">Start reading — free</a>
                <a href="#how-1" className="flex-1 rounded-lg border-2 border-[#1A1713] px-5 py-3.5 text-center text-sm font-bold uppercase tracking-widest transition-colors hover:bg-[#1A1713] hover:text-[#FAF6EF]">See how</a>
              </div>
              <p className="flex items-center justify-center gap-1 text-xs text-[#1A1713]/60"><Star className="size-3.5 fill-[#D63A2F] text-[#D63A2F]" /> Loved by 40,000 skimmers, scholars & skeptics</p>
            </div>
          </div>
        </motion.div>

        {/* ticker */}
        <div className="mt-10 overflow-hidden border-y-2 border-[#1A1713] bg-[#1A1713] py-2 text-[#FAF6EF]">
          <div className="animate-marquee flex w-max gap-10 whitespace-nowrap font-plex text-xs uppercase tracking-[0.25em]">
            {Array(2).fill(["Summaries", "Key quotes", "Margin hints", "Cross-chapter insights", "Page-pinned claims", "212 → 12 minutes"]).flat().map((t, i) => (
              <span key={i} className="flex items-center gap-10">{t} <span className="text-[#D63A2F]">✳</span></span>
            ))}
          </div>
        </div>

        {/* how it works */}
        <section id="how-1" className="mt-16 grid gap-10 lg:grid-cols-[1fr_1.2fr]">
          <motion.div {...fade}>
            <p className="font-plex text-xs uppercase tracking-[0.3em] text-[#D63A2F]">§ How it works</p>
            <h2 className="mt-3 font-fraunces text-4xl sm:text-5xl font-black leading-tight">Three steps, <span className="italic font-light">zero</span> all-nighters.</h2>
            <div className="mt-6"><RatioSlider /></div>
          </motion.div>
          <div className="divide-y divide-[#1A1713]/20 border-y-2 border-[#1A1713]">
            {[
              { n: "01", icon: FileUp, h: "File the story", p: "Upload any PDF up to 1,000 pages. Scanned docs get OCR; tables and figures are read, not skipped. Your file is encrypted and never used for training." },
              { n: "02", icon: Scissors, h: "We cut the filler", p: "Ratio finds the thesis, the evidence, and the exceptions — then compresses at your chosen ratio: a 2-minute skim, a 10-minute brief, or a full study guide." },
              { n: "03", icon: Highlighter, h: "Read the annotated edition", p: "Get the summary plus margin hints that decode jargon, pulled quotes ready to cite, and insight cards linking ideas across chapters." },
            ].map((s, i) => (
              <motion.div key={s.n} {...fade} transition={{ duration: 0.5, delay: i * 0.08 }} className="group flex gap-5 py-7">
                <span className="font-fraunces text-5xl font-black text-[#1A1713]/15 transition-colors group-hover:text-[#D63A2F]">{s.n}</span>
                <div>
                  <h3 className="flex items-center gap-2 font-fraunces text-2xl font-bold"><s.icon className="size-5 text-[#D63A2F]" />{s.h}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-[#1A1713]/75">{s.p}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* specimen */}
        <section className="mt-16">
          <motion.div {...fade} className="flex items-end justify-between">
            <h2 className="font-fraunces text-4xl sm:text-5xl font-black">Inside <span className="italic font-light">the annotated edition</span></h2>
            <p className="hidden sm:block font-hand text-2xl text-[#D63A2F] -rotate-3">← click the tabs, dear reader</p>
          </motion.div>
          <div className="mt-6"><Tabs /></div>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {[
              { icon: BookOpenText, h: "Chapter briefs", p: "Every chapter compressed to 5 bullets. Finish the whole arc without losing the plot." },
              { icon: Feather, h: "Jargon decoder", p: "Hover any term for a plain-English gloss written at your level — undergrad to expert." },
              { icon: Quote, h: "Citation pack", p: "APA, MLA, Chicago exports of every pulled quote, with page numbers attached." },
            ].map((f, i) => (
              <motion.div key={f.h} {...fade} transition={{ duration: 0.5, delay: i * 0.08 }} className="rounded-xl border-2 border-[#1A1713] bg-white/60 p-6 transition-all hover:-translate-y-1 hover:shadow-[6px_6px_0_#1A1713]">
                <f.icon className="size-6 text-[#D63A2F]" />
                <h3 className="mt-3 font-fraunces text-xl font-bold">{f.h}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#1A1713]/70">{f.p}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* pull quote */}
        <motion.figure {...fade} className="mx-auto mt-16 max-w-3xl text-center">
          <Quote className="mx-auto size-8 text-[#D63A2F]" />
          <blockquote className="mt-4 font-fraunces text-3xl sm:text-4xl italic leading-snug">“I cited a 300-page climate report in my thesis having read twelve brilliant minutes of it — then verified every quote in one click.”</blockquote>
          <figcaption className="mt-4 font-plex text-xs uppercase tracking-[0.25em] text-[#1A1713]/60">— Mara J., grad student · verified reader</figcaption>
        </motion.figure>

        {/* classifieds pricing */}
        <section id="pricing-1" className="mt-16">
          <div className="text-center">
            <p className="font-plex text-xs uppercase tracking-[0.3em] text-[#D63A2F]">❦ Classifieds ❦</p>
            <h2 className="mt-2 font-fraunces text-4xl sm:text-5xl font-black">Small prices, <span className="italic font-light">tall</span> stacks of reading.</h2>
          </div>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {[
              { n: "The Skimmer", p: "$0", f: ["3 PDFs / month", "5-min summaries", "Key quotes + pages", "Jargon decoder"], hot: false },
              { n: "The Subscriber", p: "$12", f: ["Unlimited PDFs", "Adjustable ratios", "Hints + insight cards", "Citation exports", "Audio briefs"], hot: true },
              { n: "The Newsroom", p: "$39", f: ["5 seats + shared shelf", "API + bulk upload", "SSO & audit trail", "Priority processing"], hot: false },
            ].map((t) => (
              <div key={t.n} className={`relative rounded-xl border-2 border-[#1A1713] p-7 ${t.hot ? "bg-[#1A1713] text-[#FAF6EF] shadow-[8px_8px_0_#D63A2F]" : "bg-white/60"}`}>
                {t.hot && <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 whitespace-nowrap bg-[#D63A2F] px-4 py-1 font-plex text-[11px] font-bold uppercase tracking-widest text-white">Most clipped</span>}
                <p className="font-fraunces text-xl italic">{t.n}</p>
                <p className="mt-2 font-fraunces text-5xl font-black">{t.p}<span className="text-base font-light italic">/mo</span></p>
                <ul className="mt-5 space-y-2.5 text-sm">
                  {t.f.map((x) => <li key={x} className="flex items-center gap-2"><Check className="size-4 text-[#D63A2F]" />{x}</li>)}
                </ul>
                <button className={`mt-6 w-full rounded-lg py-3 text-sm font-bold uppercase tracking-widest transition-transform hover:-translate-y-0.5 ${t.hot ? "bg-[#D63A2F] text-white" : "border-2 border-[#1A1713] hover:bg-[#1A1713] hover:text-[#FAF6EF]"}`}>Choose {t.n.split(" ")[1]}</button>
              </div>
            ))}
          </div>
        </section>

        {/* footer */}
        <footer className="mt-16 border-t-4 border-double border-[#1A1713] py-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="font-fraunces text-2xl font-black">Ratio <span className="italic font-light">Reader</span></p>
            <p className="font-plex text-xs text-[#1A1713]/60">Set in Fraunces & Inter · Printed on 100% recycled pixels</p>
            <Link to="/" className="flex items-center gap-1 font-plex text-xs uppercase tracking-widest hover:text-[#D63A2F]">Back to newsstand <ArrowUpRight className="size-4" /></Link>
          </div>
        </footer>
      </main>
    </div>
  );
}
