import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useSpring } from "motion/react";

const INK = "#1a1712";
const PAPER = "#f6f1e7";
const RED = "#b32821";

function useReadingProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });
  return scaleX;
}

function Ticker() {
  const items = [
    "EXTRA · EXTRA · READ ALL ABOUT IT",
    "THE AVERAGE KNOWLEDGE WORKER SKIMS 74 PAGES A DAY",
    "RATIO READER DISTILLS 300-PAGE PDFs INTO 3-MINUTE BRIEFS",
    "KEY QUOTES · HINTS · INSIGHTS — DELVED, NOT SKIMMED",
    "CANCEL THE GUILT OF THE UNREAD STACK",
  ];
  const line = items.join("　　✦　　") + "　　✦　　";
  return (
    <div
      className="overflow-hidden border-b py-2 text-[11px] font-semibold tracking-[0.22em] uppercase"
      style={{ borderColor: INK, color: INK }}
    >
      <div className="d1-marquee-track flex w-max whitespace-nowrap">
        <span className="pr-8">{line}</span>
        <span className="pr-8">{line}</span>
      </div>
    </div>
  );
}

function Masthead() {
  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  return (
    <header className="px-5 pt-6 sm:px-10">
      <div
        className="flex items-center justify-between border-y py-1.5 text-[10px] font-semibold tracking-[0.25em] uppercase sm:text-[11px]"
        style={{ borderColor: INK }}
      >
        <span>Vol. I — No. 001</span>
        <span className="hidden sm:inline">{today}</span>
        <span>Late Edition</span>
      </div>

      <div className="py-6 text-center sm:py-9">
        <Link to="/1" className="inline-block">
          <h1
            className="font-fraunces text-[13vw] leading-[0.9] font-black tracking-tight sm:text-7xl md:text-8xl"
            style={{ color: INK }}
          >
            Ratio&nbsp;Reader
          </h1>
        </Link>
        <p
          className="mt-4 font-fraunces text-sm italic sm:text-base"
          style={{ color: "#6d6353" }}
        >
          “All the signal, none of the padding.” — every reader who tried it
        </p>
      </div>

      <nav
        className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 border-y py-2.5 text-[11px] font-bold tracking-[0.18em] uppercase"
        style={{ borderColor: INK, color: INK }}
      >
        {["The Pitch", "The Method", "Exhibits", "Letters", "Subscribe"].map(
          (item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/\s/g, "-")}`}
              className="transition-colors hover:text-[#b32821]"
            >
              {item}
            </a>
          ),
        )}
      </nav>
    </header>
  );
}

function Headline() {
  return (
    <section id="the-pitch" className="px-5 pt-12 pb-14 sm:px-10 sm:pt-16">
      <div className="mx-auto max-w-6xl">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-5 inline-block border px-3 py-1 text-[10px] font-bold tracking-[0.25em] uppercase"
          style={{ borderColor: RED, color: RED }}
        >
          Special Report · The Attention Crisis
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="font-fraunces text-[9.5vw] leading-[0.98] font-medium tracking-tight sm:text-6xl md:text-7xl lg:text-[84px]"
          style={{ color: INK }}
        >
          Read <em className="italic" style={{ color: RED }}>10%</em> of the
          book. Understand{" "}
          <span className="relative whitespace-nowrap">
            100%
            <svg
              viewBox="0 0 220 24"
              className="absolute -bottom-2 left-0 w-full"
              fill="none"
            >
              <path
                d="M4 18 C 60 6, 150 6, 216 14"
                stroke={RED}
                strokeWidth="5"
                strokeLinecap="round"
              />
            </svg>
          </span>{" "}
          of it.
        </motion.h2>

        <div className="mt-12 grid gap-10 md:grid-cols-12">
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="md:col-span-7"
          >
            <div
              className="space-y-5 font-fraunces text-lg leading-relaxed"
              style={{ color: "#33302a" }}
            >
              <p className="first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:text-7xl first-letter:leading-[0.75] first-letter:font-black first-letter:text-[#b32821]">
                Somewhere on your desk — or in the far sadder recesses of your
                downloads folder — sits a PDF you swear you will read. It has
                280 pages. You need maybe 20 of them.
              </p>
              <p>
                Ratio Reader is a small instrument with a simple promise: drop
                in any document and receive its essence back as a brief you can
                actually finish. The summary keeps the argument. The quotes
                keep the voice. The hints keep you honest about what you did
                not understand.
              </p>
              <p>
                No skimming. No highlighter archaeology at midnight. Just the
                ratio you choose — ten percent of the pages, all of the point.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#subscribe"
                className="group inline-flex items-center gap-2 px-6 py-3 text-sm font-bold tracking-wide text-white transition-transform hover:-translate-y-0.5"
                style={{ background: INK }}
              >
                Start reading less
                <span className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </a>
              <span
                className="text-xs tracking-[0.15em] uppercase"
                style={{ color: "#8a7f6d" }}
              >
                Free for your first three documents
              </span>
            </div>
          </motion.article>

          <motion.aside
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:col-span-5"
          >
            <div className="border p-6" style={{ borderColor: INK }}>
              <p
                className="border-b pb-2 text-[11px] font-bold tracking-[0.25em] uppercase"
                style={{ borderColor: INK }}
              >
                In this issue
              </p>
              <ul className="mt-4 space-y-4">
                {[
                  ["A.", "The Method", "How a 300-page PDF becomes a 3-minute brief"],
                  ["B.", "Exhibits", "Before & after — see the distillation live"],
                  ["C.", "The Numbers", "Hours returned to readers, by the thousands"],
                  ["D.", "Letters", "Readers write in; skeptics convert"],
                ].map(([letter, title, desc]) => (
                  <li key={letter} className="flex gap-4">
                    <span
                      className="font-fraunces text-2xl leading-none font-black"
                      style={{ color: RED }}
                    >
                      {letter}
                    </span>
                    <div>
                      <p
                        className="text-sm font-bold tracking-wide uppercase"
                        style={{ color: INK }}
                      >
                        {title}
                      </p>
                      <p className="mt-0.5 text-sm" style={{ color: "#6d6353" }}>
                        {desc}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
              <div
                className="mt-6 border-t pt-4"
                style={{ borderColor: INK }}
              >
                <p className="text-xs leading-relaxed italic" style={{ color: "#8a7f6d" }}>
                  Weather inside: 100% chance of clarity, scattered summaries
                  clearing by afternoon.
                </p>
              </div>
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}

function Method() {
  const steps = [
    {
      n: "01",
      kicker: "Upload",
      title: "Feed it the beast.",
      body: "Any PDF — textbooks, whitepapers, that 90-page lease agreement. Drag, drop, done. 400-page limit because even we have standards.",
    },
    {
      n: "02",
      kicker: "Choose your ratio",
      title: "Decide how much you want back.",
      body: "Ten percent for the gist. Twenty-five for the meeting. Fifty when it is your job to know. The reader adapts the brief to the ratio you set.",
    },
    {
      n: "03",
      kicker: "Receive the essence",
      title: "Summary, quotes, hints, insights.",
      body: "A structured brief with the argument intact, the quotable lines preserved verbatim, and gentle hints pointing at what deserves a second look.",
    },
  ];
  return (
    <section id="the-method" className="px-5 py-16 sm:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-end justify-between border-b-2 pb-4" style={{ borderColor: INK }}>
          <h3
            className="font-fraunces text-4xl font-black tracking-tight sm:text-5xl"
            style={{ color: INK }}
          >
            The Method
          </h3>
          <p className="hidden text-xs tracking-[0.2em] uppercase sm:block" style={{ color: "#8a7f6d" }}>
            Three steps, no ceremony
          </p>
        </div>
        <div className="grid gap-px md:grid-cols-3" style={{ background: INK }}>
          {steps.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.12 }}
              className="group p-8 transition-colors duration-300"
              style={{ background: PAPER }}
            >
              <div className="flex items-baseline justify-between">
                <span
                  className="font-fraunces text-5xl font-black transition-colors group-hover:text-[#b32821]"
                  style={{ color: "#d8cfbe" }}
                >
                  {s.n}
                </span>
                <span
                  className="text-[10px] font-bold tracking-[0.25em] uppercase"
                  style={{ color: RED }}
                >
                  {s.kicker}
                </span>
              </div>
              <h4
                className="mt-6 font-fraunces text-2xl leading-snug font-bold"
                style={{ color: INK }}
              >
                {s.title}
              </h4>
              <p className="mt-3 text-[15px] leading-relaxed" style={{ color: "#5c554a" }}>
                {s.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Exhibit() {
  const dense = [
    "The proliferation of asynchronous distributed workflows has engendered a paradigmatic shift in organizational knowledge transfer mechanisms, necessitating comprehensive reevaluation...",
    "Furthermore, empirical analyses conducted across heterogeneous cohorts demonstrate statistically significant correlations between information density and attenuation of reader comprehension...",
    "It is therefore incumbent upon practitioners to synthesize methodological frameworks capable of distilling voluminous documentation into actionable intelligence artifacts...",
  ];
  const distilled = [
    { t: "SUMMARY", c: "Remote work changed how knowledge spreads. Dense docs now bury the point — teams need distilled briefs, not more pages." },
    { t: "KEY QUOTE", c: "“Information density correlates with the attenuation of comprehension.” — p.41" },
    { t: "HINT", c: "The methodology in §3 is weak (n=42). Cite with caution." },
    { t: "INSIGHT", c: "This paper's conclusion supports your Q3 proposal almost word-for-word." },
  ];
  return (
    <section id="exhibits" className="px-5 py-16 sm:px-10" style={{ background: "#efe8da" }}>
      <div className="mx-auto max-w-6xl">
        <div className="flex items-end justify-between border-b-2 pb-4" style={{ borderColor: INK }}>
          <h3 className="font-fraunces text-4xl font-black tracking-tight sm:text-5xl" style={{ color: INK }}>
            Exhibit A
          </h3>
          <p className="hidden text-xs tracking-[0.2em] uppercase sm:block" style={{ color: "#8a7f6d" }}>
            Before &amp; after, unabridged vs. essential
          </p>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <div className="flex h-full flex-col border bg-white/60 p-6 shadow-[6px_6px_0_rgba(26,23,18,0.08)]" style={{ borderColor: "#cfc4ae" }}>
              <div className="flex items-center justify-between">
                <p className="text-[11px] font-bold tracking-[0.25em] uppercase" style={{ color: "#8a7f6d" }}>
                  input.pdf — 312 pages
                </p>
                <span className="text-[11px] font-bold tracking-widest uppercase" style={{ color: "#8a7f6d" }}>
                  ~6 hrs
                </span>
              </div>
              <div className="mt-5 space-y-4">
                {dense.map((p, i) => (
                  <p key={i} className="text-[13px] leading-relaxed line-clamp-3 blur-[0.6px]" style={{ color: "#7a7264" }}>
                    {p}
                  </p>
                ))}
                <div className="space-y-2 pt-2">
                  {[92, 100, 78, 96, 64].map((w, i) => (
                    <div key={i} className="h-2 rounded-sm" style={{ width: `${w}%`, background: "#ddd3bf" }} />
                  ))}
                </div>
              </div>
              <p className="mt-auto pt-6 font-fraunces text-xl italic" style={{ color: "#8a7f6d" }}>
                …and not a single memorable sentence.
              </p>
            </div>
          </motion.div>

          <div className="flex items-center justify-center lg:col-span-2">
            <motion.div
              initial={{ scale: 0.6, opacity: 0, rotate: -12 }}
              whileInView={{ scale: 1, opacity: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 200, damping: 14 }}
              className="flex h-16 w-16 items-center justify-center rounded-full border-2 font-fraunces text-2xl font-black"
              style={{ borderColor: INK, color: RED, background: PAPER }}
            >
              →
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-5"
          >
            <div className="flex h-full flex-col border-2 p-6 shadow-[8px_8px_0_#1a1712]" style={{ borderColor: INK, background: "#fffdf7" }}>
              <div className="flex items-center justify-between">
                <p className="text-[11px] font-bold tracking-[0.25em] uppercase" style={{ color: RED }}>
                  The Brief — ratio 10%
                </p>
                <span className="text-[11px] font-bold tracking-widest uppercase" style={{ color: INK }}>
                  ~3 min
                </span>
              </div>
              <div className="mt-5 space-y-4">
                {distilled.map((d) => (
                  <div key={d.t} className="border-l-2 pl-4" style={{ borderColor: d.t === "KEY QUOTE" ? RED : "#cfc4ae" }}>
                    <p className="text-[10px] font-bold tracking-[0.25em] uppercase" style={{ color: d.t === "KEY QUOTE" ? RED : "#8a7f6d" }}>
                      {d.t}
                    </p>
                    <p className="mt-1 font-fraunces text-[15px] leading-relaxed" style={{ color: INK }}>
                      {d.c}
                    </p>
                  </div>
                ))}
              </div>
              <p className="mt-auto pt-6 font-fraunces text-xl italic" style={{ color: INK }}>
                Every argument kept. Every page count halved. And halved again.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function PullQuote() {
  return (
    <section className="px-5 py-20 sm:px-10">
      <motion.blockquote
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7 }}
        className="mx-auto max-w-4xl text-center"
      >
        <div className="mb-6 flex items-center justify-center gap-3" style={{ color: RED }}>
          <span className="h-px w-12" style={{ background: RED }} />
          <span className="text-xs font-bold tracking-[0.3em] uppercase">A word from our readers</span>
          <span className="h-px w-12" style={{ background: RED }} />
        </div>
        <p className="font-fraunces text-3xl leading-snug font-medium tracking-tight sm:text-5xl" style={{ color: INK }}>
          “I read my dissertation’s{" "}
          <em className="italic" style={{ color: RED }}>entire field</em> over
          one weekend. My advisor thinks I don’t sleep.”
        </p>
        <footer className="mt-6 text-xs font-bold tracking-[0.25em] uppercase" style={{ color: "#8a7f6d" }}>
          — M. Okafor, PhD candidate &amp; reformed skimmer
        </footer>
      </motion.blockquote>
    </section>
  );
}

function Classifieds() {
  const ads = [
    { h: "87%", b: "of a typical business book is repetition, preamble, and anecdotes about one (1) shark." },
    { h: "6.2 hrs", b: "average time Ratio Reader gives back per document processed. Per document." },
    { h: "1.4M", b: "pages distilled since launch. Laid end to end, a very long walk we spared you." },
    { h: "0", b: "guilt remaining from the unread stack. Results may vary; guilt rarely returns." },
  ];
  return (
    <section id="the-numbers" className="px-5 py-16 sm:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-end justify-between border-b-2 pb-4" style={{ borderColor: INK }}>
          <h3 className="font-fraunces text-4xl font-black tracking-tight sm:text-5xl" style={{ color: INK }}>
            The Numbers
          </h3>
          <p className="hidden text-xs tracking-[0.2em] uppercase sm:block" style={{ color: "#8a7f6d" }}>
            As reported by the department of statistics
          </p>
        </div>
        <div className="mt-8 grid gap-px sm:grid-cols-2 lg:grid-cols-4" style={{ background: INK }}>
          {ads.map((ad, i) => (
            <motion.div
              key={ad.h}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="p-6"
              style={{ background: PAPER }}
            >
              <p className="font-fraunces text-5xl font-black tracking-tight" style={{ color: RED }}>
                {ad.h}
              </p>
              <div className="my-3 h-px w-10" style={{ background: INK }} />
              <p className="text-sm leading-relaxed" style={{ color: "#5c554a" }}>
                {ad.b}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Letters() {
  const letters = [
    {
      q: "Dear Editor: I was prepared to hate this. I have now read eleven annual reports before breakfast and I feel superhuman.",
      a: "— R. VANCE, CFO (RELUCTANT)",
    },
    {
      q: "The hints are the killer feature. It doesn’t just summarize — it tells me which parts of the original deserve my actual eyes.",
      a: "— PROF. E. LINDQVIST, LITERATURE",
    },
    {
      q: "I fed it my wedding venue contracts (all 94 pages). It found the cancellation clause. It may have saved my marriage.",
      a: "— NAME WITHHELD, BRIDE",
    },
  ];
  return (
    <section id="letters" className="px-5 py-16 sm:px-10" style={{ background: "#efe8da" }}>
      <div className="mx-auto max-w-6xl">
        <div className="flex items-end justify-between border-b-2 pb-4" style={{ borderColor: INK }}>
          <h3 className="font-fraunces text-4xl font-black tracking-tight sm:text-5xl" style={{ color: INK }}>
            Letters to the Editor
          </h3>
          <p className="hidden text-xs tracking-[0.2em] uppercase sm:block" style={{ color: "#8a7f6d" }}>
            Published verbatim, lightly abridged
          </p>
        </div>
        <div className="mt-8 grid gap-8 md:grid-cols-3">
          {letters.map((l, i) => (
            <motion.figure
              key={l.a}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              className="flex flex-col border bg-white/50 p-6"
              style={{ borderColor: "#cfc4ae" }}
            >
              <span className="font-fraunces text-6xl leading-none" style={{ color: RED }}>
                “
              </span>
              <blockquote className="-mt-4 font-fraunces text-lg leading-relaxed" style={{ color: "#33302a" }}>
                {l.q}
              </blockquote>
              <figcaption className="mt-auto pt-5 text-[11px] font-bold tracking-[0.2em] uppercase" style={{ color: "#8a7f6d" }}>
                {l.a}
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function Subscribe() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);
  return (
    <section id="subscribe" className="px-5 py-20 sm:px-10">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-3xl border-2 p-8 text-center shadow-[10px_10px_0_#1a1712] sm:p-12"
        style={{ borderColor: INK, background: "#fffdf7" }}
      >
        <p className="text-[11px] font-bold tracking-[0.3em] uppercase" style={{ color: RED }}>
          Limited circulation
        </p>
        <h3 className="mt-3 font-fraunces text-4xl font-black tracking-tight sm:text-5xl" style={{ color: INK }}>
          Subscribe to your own attention.
        </h3>
        <p className="mx-auto mt-4 max-w-md font-fraunces text-lg italic" style={{ color: "#6d6353" }}>
          Three documents free. Then less than the cost of the books you won’t
          finish this month.
        </p>
        {done ? (
          <p className="mt-8 font-fraunces text-2xl font-bold" style={{ color: RED }}>
            Welcome aboard, reader of less. ✦
          </p>
        ) : (
          <form
            className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row"
            onSubmit={(e) => {
              e.preventDefault();
              if (email.trim()) setDone(true);
            }}
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@finally-reading.com"
              className="flex-1 border bg-transparent px-4 py-3 text-sm outline-none placeholder:text-[#b3a892]"
              style={{ borderColor: INK, color: INK }}
            />
            <button
              type="submit"
              className="px-6 py-3 text-sm font-bold tracking-wide text-white transition-transform hover:-translate-y-0.5"
              style={{ background: RED }}
            >
              Claim my briefs
            </button>
          </form>
        )}
        <p className="mt-6 text-[11px] tracking-[0.15em] uppercase" style={{ color: "#8a7f6d" }}>
          No spam. We summarize those too — they’re mostly padding.
        </p>
      </motion.div>
    </section>
  );
}

function Colophon() {
  return (
    <footer className="px-5 pt-10 pb-8 sm:px-10" style={{ borderTop: `2px solid ${INK}` }}>
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 sm:flex-row">
        <p className="font-fraunces text-2xl font-black" style={{ color: INK }}>
          Ratio Reader
        </p>
        <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-[11px] font-bold tracking-[0.2em] uppercase" style={{ color: "#6d6353" }}>
          <a href="#the-pitch" className="hover:text-[#b32821]">Pitch</a>
          <a href="#the-method" className="hover:text-[#b32821]">Method</a>
          <a href="#exhibits" className="hover:text-[#b32821]">Exhibits</a>
          <a href="#letters" className="hover:text-[#b32821]">Letters</a>
          <Link to="/2" className="hover:text-[#b32821]" title="Next design">Next edition →</Link>
        </nav>
        <p className="text-[11px] tracking-[0.15em] uppercase" style={{ color: "#8a7f6d" }}>
          © 2026 · Printed on recycled pixels
        </p>
      </div>
    </footer>
  );
}

export function DesignOne() {
  const progress = useReadingProgress();
  useEffect(() => {
    document.title = "Ratio Reader — The Broadsheet Edition";
  }, []);
  return (
    <div className="min-h-screen antialiased" style={{ background: PAPER, color: INK }}>
      <motion.div
        className="fixed top-0 right-0 left-0 z-50 h-1 origin-left"
        style={{ scaleX: progress, background: RED }}
      />
      <Ticker />
      <Masthead />
      <Headline />
      <Method />
      <Exhibit />
      <PullQuote />
      <Classifieds />
      <Letters />
      <Subscribe />
      <Colophon />
    </div>
  );
}
