import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";

const BLACK = "#141414";
const PINK = "#ff6b9d";
const BLUE = "#4d96ff";
const LIME = "#a8e10c";
const CREAM = "#fff3df";

function Sticker({
  children,
  color,
  rotate = "-6deg",
  className = "",
}: {
  children: React.ReactNode;
  color: string;
  rotate?: string;
  className?: string;
}) {
  return (
    <span
      className={`inline-block border-4 px-3 py-1.5 font-archivo text-xs tracking-wide uppercase shadow-[4px_4px_0_#141414] ${className}`}
      style={{ background: color, color: BLACK, rotate, borderColor: BLACK }}
    >
      {children}
    </span>
  );
}

function ChunkyButton({
  children,
  bg = PINK,
  onClick,
  type = "button",
}: {
  children: React.ReactNode;
  bg?: string;
  onClick?: () => void;
  type?: "button" | "submit";
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      className="border-4 px-7 py-4 font-archivo text-sm tracking-wide uppercase transition-all duration-100 hover:-translate-y-1 hover:shadow-[8px_8px_0_#141414] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none"
      style={{ background: bg, color: BLACK, borderColor: BLACK, boxShadow: "5px 5px 0 #141414" }}
    >
      {children}
    </button>
  );
}

function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b-4" style={{ borderColor: BLACK, background: CREAM }}>
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4 sm:px-8">
        <Link to="/4" className="flex items-center gap-2.5">
          <span
            className="flex h-10 w-10 items-center justify-center border-4 font-archivo text-lg shadow-[3px_3px_0_#141414]"
            style={{ background: LIME, borderColor: BLACK }}
          >
            ¼
          </span>
          <span className="font-archivo text-xl tracking-tight sm:text-2xl">RATIO READER</span>
        </Link>
        <div className="hidden items-center gap-6 font-space-mono text-sm font-bold md:flex">
          <a href="#why" className="underline decoration-4 underline-offset-4 hover:bg-[#a8e10c]">WHY</a>
          <a href="#demo" className="underline decoration-4 underline-offset-4 hover:bg-[#4d96ff] hover:text-white">DEMO</a>
          <a href="#yells" className="underline decoration-4 underline-offset-4 hover:bg-[#ff6b9d]">YELLS</a>
        </div>
        <a
          href="#get"
          className="border-4 px-4 py-2.5 font-archivo text-xs uppercase shadow-[4px_4px_0_#141414] transition-all hover:-translate-y-0.5 hover:shadow-[6px_6px_0_#141414] active:translate-x-[3px] active:translate-y-[3px] active:shadow-none sm:text-sm"
          style={{ background: BLUE, borderColor: BLACK }}
        >
          GET IT FREE
        </a>
      </nav>
    </header>
  );
}

function Marquee({ bg, text }: { bg: string; text: string }) {
  return (
    <div className="overflow-hidden border-y-4 py-3" style={{ borderColor: BLACK, background: bg }}>
      <div className="d4-marquee-track flex w-max whitespace-nowrap font-archivo text-lg tracking-wide uppercase">
        {[0, 1].map((n) => (
          <span key={n} className="pr-2">
            {` ${text} ✦`.repeat(6)}
          </span>
        ))}
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden px-5 pt-14 pb-20 sm:px-8 sm:pt-20">
      <div
        className="pointer-events-none absolute inset-0 opacity-100"
        style={{
          backgroundImage: "radial-gradient(#14141422 2.5px, transparent 2.5px)",
          backgroundSize: "34px 34px",
        }}
      />
      <div className="relative mx-auto max-w-6xl">
        <div className="flex flex-wrap items-start justify-between gap-6">
          <motion.div
            initial={{ opacity: 0, y: -20, rotate: -8 }}
            animate={{ opacity: 1, y: 0, rotate: -4 }}
            transition={{ type: "spring", stiffness: 200, damping: 12 }}
          >
            <Sticker color={LIME} rotate="-4deg">NO FLUFF ZONE</Sticker>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -20, rotate: 10 }}
            animate={{ opacity: 1, y: 0, rotate: 5 }}
            transition={{ type: "spring", stiffness: 200, damping: 12, delay: 0.1 }}
          >
            <Sticker color={PINK} rotate="3deg">300-PAGE PDFs WELCOME</Sticker>
          </motion.div>
        </div>

        <h1 className="mt-10 font-archivo leading-[0.92] tracking-tight uppercase">
          <motion.span
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="block text-[13vw] sm:text-8xl lg:text-[7.5rem]"
          >
            READ LESS.
          </motion.span>
          <motion.span
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.28 }}
            className="mt-2 block"
          >
            <span
              className="inline-block border-4 px-4 text-[13vw] shadow-[8px_8px_0_#141414] sm:text-8xl lg:text-[7.5rem]"
              style={{ background: BLUE, color: "white", borderColor: BLACK }}
            >
              KNOW MORE.
            </span>
          </motion.span>
        </h1>

        <div className="mt-12 grid items-end gap-10 lg:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="lg:col-span-6"
          >
            <p className="max-w-md font-space-mono text-lg leading-relaxed font-bold">
              Upload a PDF. Get the summary, the killer quotes, the sneaky hints
              and the big-brain insights.{" "}
              <mark style={{ background: LIME }} className="px-1">
                You pick how much to read — 10% or 50%.
              </mark>{" "}
              We make every percent count.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-5">
              <ChunkyButton bg={PINK}>START FREE →</ChunkyButton>
              <a
                href="#demo"
                className="border-b-4 font-space-mono text-sm font-bold underline decoration-4 underline-offset-8 hover:bg-[#4d96ff] hover:text-white"
              >
                watch it smash a PDF ↓
              </a>
            </div>
            <p className="mt-5 font-space-mono text-xs font-bold uppercase opacity-60">
              * free forever for 3 docs/mo. no card. no nonsense.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: 6 }}
            animate={{ opacity: 1, scale: 1, rotate: 3 }}
            transition={{ type: "spring", stiffness: 160, damping: 14, delay: 0.5 }}
            className="relative mx-auto w-full max-w-sm lg:col-span-6"
          >
            <div
              className="absolute -top-10 -left-6 hidden h-24 w-24 sm:block"
              style={{ animation: "spin-slow 14s linear infinite" }}
            >
              <svg viewBox="0 0 100 100" className="h-full w-full">
                <defs>
                  <path id="circ" d="M 50,50 m -36,0 a 36,36 0 1,1 72,0 a 36,36 0 1,1 -72,0" />
                </defs>
                <text className="font-archivo" fontSize="13.5" fill={BLACK} letterSpacing="2">
                  <textPath href="#circ">READ LESS · KNOW MORE · READ LESS ·</textPath>
                </text>
                <polygon points="50,38 56,48 67,50 59,58 61,69 50,64 39,69 41,58 33,50 44,48" fill={PINK} stroke={BLACK} strokeWidth="2.5" />
              </svg>
            </div>
            <div
              className="border-4 p-6 shadow-[10px_10px_0_#141414]"
              style={{ background: "white", borderColor: BLACK }}
            >
              <div className="flex items-center justify-between border-b-4 pb-3" style={{ borderColor: BLACK }}>
                <p className="font-archivo text-sm uppercase">your_brief.txt</p>
                <span className="border-2 px-2 py-0.5 font-space-mono text-[11px] font-bold" style={{ borderColor: BLACK, background: LIME }}>
                  RATIO: 10%
                </span>
              </div>
              <ul className="mt-4 space-y-3 font-space-mono text-sm font-bold">
                <li className="flex gap-2"><span>✅</span> SUMMARY — 3 min read</li>
                <li className="flex gap-2"><span>💬</span> 12 QUOTES — verbatim</li>
                <li className="flex gap-2"><span>💡</span> 5 HINTS — where to dig</li>
                <li className="flex gap-2"><span>🧠</span> 3 INSIGHTS — cross-linked</li>
              </ul>
              <div className="mt-5 border-t-4 pt-4" style={{ borderColor: BLACK }}>
                <p className="font-space-mono text-xs font-bold uppercase opacity-70">
                  time saved: 5 h 57 m 🎉
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Why() {
  const cards = [
    { n: "01", t: "SUMMARIES THAT KEEP THE POINT", b: "Not a mush of 'key takeaways'. A structured brief with the actual argument intact.", c: PINK },
    { n: "02", t: "QUOTES YOU CAN CITATE", b: "Verbatim lines with page numbers. For essays, decks, and winning arguments at dinner.", c: BLUE },
    { n: "03", t: "HINTS THAT MAKE YOU SMARTER", b: "Flags on weak methodology, buried assumptions, and parts worth your real attention.", c: LIME },
    { n: "04", t: "INSIGHTS ACROSS YOUR LIBRARY", b: "It remembers what you've read and connects the dots between documents. Spooky. Useful.", c: "#ffd23f" },
  ];
  return (
    <section id="why" className="px-5 py-16 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <h2 className="font-archivo text-4xl uppercase sm:text-6xl">WHY BOTHER?</h2>
          <Sticker color="#ffd23f" rotate="2deg">4 REASONS, NO FILLER</Sticker>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {cards.map((c, i) => (
            <motion.div
              key={c.n}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              whileHover={{ rotate: i % 2 === 0 ? -1 : 1 }}
              className="group border-4 p-7 shadow-[8px_8px_0_#141414] transition-shadow hover:shadow-[12px_12px_0_#141414]"
              style={{ background: "white", borderColor: BLACK }}
            >
              <div className="flex items-center justify-between">
                <span
                  className="flex h-12 w-12 items-center justify-center border-4 font-archivo text-xl shadow-[3px_3px_0_#141414]"
                  style={{ background: c.c, borderColor: BLACK }}
                >
                  {c.n}
                </span>
                <span className="font-archivo text-4xl opacity-10 transition-opacity group-hover:opacity-25">✦</span>
              </div>
              <h3 className="mt-5 font-archivo text-xl leading-snug uppercase">{c.t}</h3>
              <p className="mt-2.5 font-space-mono text-sm leading-relaxed font-bold opacity-75">{c.b}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Demo() {
  const [smashed, setSmashed] = useState(false);
  return (
    <section id="demo" className="px-5 py-16 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <h2 className="font-archivo text-4xl uppercase sm:text-6xl">SEE IT SMASH</h2>
          <Sticker color={BLUE} rotate="-2deg" className="text-white">LIVE-ish DEMO</Sticker>
        </div>

        <div className="mt-10 grid items-center gap-8 lg:grid-cols-2">
          {/* fat PDF */}
          <motion.div
            animate={smashed ? { rotate: -2, scale: 0.94 } : { rotate: 0, scale: 1 }}
            className="border-4 p-6 shadow-[10px_10px_0_#141414]"
            style={{ background: "#e9e4da", borderColor: BLACK }}
          >
            <p className="font-archivo text-sm uppercase opacity-60">INBOUND DOCUMENT</p>
            <p className="mt-2 font-archivo text-2xl uppercase">Q4-Market-Research-FINAL-v12(3).pdf</p>
            <div className="mt-5 space-y-2.5">
              {[100, 96, 100, 88, 97, 74, 99, 91].map((w, i) => (
                <div key={i} className="h-3.5 border-2" style={{ width: `${w}%`, borderColor: `${BLACK}55`, background: `${BLACK}18` }} />
              ))}
            </div>
            <p className="mt-5 font-space-mono text-sm font-bold uppercase opacity-70">
              312 pages · 148k words · ~6 hrs of your life
            </p>
          </motion.div>

          {/* arrow + button */}
          <div className="flex flex-col items-center gap-4">
            <svg viewBox="0 0 120 60" className={`w-40 ${smashed ? "rotate-12" : ""} transition-transform`} fill="none">
              <path d="M6 30 H95 M95 30 l-18 -14 M95 30 l-18 14" stroke={BLACK} strokeWidth="7" strokeLinecap="square" />
            </svg>
            {!smashed ? (
              <ChunkyButton bg={LIME} onClick={() => setSmashed(true)}>
                SMASH IT → SUMMARY
              </ChunkyButton>
            ) : (
              <button
                onClick={() => setSmashed(false)}
                className="font-space-mono text-sm font-bold underline decoration-4 underline-offset-4 hover:bg-[#ff6b9d]"
              >
                ← reset, do it again (satisfying)
              </button>
            )}
          </div>

          {/* result */}
          <motion.div
            animate={smashed ? { scale: 1, rotate: 1 } : { scale: 0.92, rotate: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 16 }}
            className="border-4 p-6 shadow-[10px_10px_0_#141414] lg:col-span-2 lg:col-start-1"
            style={{ background: smashed ? "white" : "#f3efe6", borderColor: BLACK, opacity: smashed ? 1 : 0.55 }}
          >
            <div className="flex flex-wrap items-center justify-between gap-3 border-b-4 pb-3" style={{ borderColor: BLACK }}>
              <p className="font-archivo text-sm uppercase">OUTPUT: THE GOOD STUFF</p>
              <span className="border-2 px-2 py-0.5 font-space-mono text-[11px] font-bold" style={{ borderColor: BLACK, background: PINK }}>
                RATIO 10% · 3 MIN READ
              </span>
            </div>
            <div className="mt-5 grid gap-5 md:grid-cols-2">
              <div>
                <p className="font-archivo text-xs uppercase opacity-60">SUMMARY</p>
                <p className="mt-1.5 font-space-mono text-sm leading-relaxed font-bold">
                  {smashed
                    ? "Market grows 14%/yr. Three players hold 71%. Your differentiator (speed) is #1 buying factor in EU, #3 in US. Recommendation: double down on onboarding speed."
                    : "████ ████ ███████ ██ ████. █████ ██████ ██/yr. ██████ ███████ ████ 71%..."}
                </p>
              </div>
              <div>
                <p className="font-archivo text-xs uppercase opacity-60">KEY QUOTE</p>
                <p className="mt-1.5 font-space-mono text-sm leading-relaxed font-bold">
                  {smashed
                    ? "“Speed-to-value is the new moat.” — p.87"
                    : "“██████-██-█████ ██ ███ ███ ████.” — p.██"}
                </p>
                <p className="mt-4 font-archivo text-xs uppercase opacity-60">HINT</p>
                <p className="mt-1.5 font-space-mono text-sm leading-relaxed font-bold">
                  {smashed
                    ? "US data is 2024-only. The 2025 survey is cited but missing from the appendix."
                    : "██ ████ ██ █████████-████. ███ █████ ████..."}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Yells() {
  const shouts = [
    { q: "I FINISHED MY READING LIST FOR THE FIRST TIME SINCE 2019.", w: "SAM T., GRAD STUDENT", c: PINK },
    { q: "FOUND A HIDDEN TERMINATION CLAUSE IN 4 MINUTES. LAWYERS HATE THIS TRICK (THEY USE IT NOW).", w: "PRIYA M., FOUNDER", c: BLUE },
    { q: "IT'S LIKE CLIFFSNOTES BUT FOR EVERYTHING AND IT DOESN'T JUDGE ME.", w: "JORDAN B., PM", c: LIME },
  ];
  return (
    <section id="yells" className="px-5 py-16 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <h2 className="font-archivo text-4xl uppercase sm:text-6xl">PEOPLE ARE YELLING</h2>
        <p className="mt-2 font-space-mono text-sm font-bold uppercase opacity-60">(nicely) about it:</p>
        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {shouts.map((s, i) => (
            <motion.figure
              key={s.w}
              initial={{ opacity: 0, y: 40, rotate: i % 2 === 0 ? -2 : 2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ type: "spring", stiffness: 180, damping: 15, delay: i * 0.1 }}
              className="relative border-4 p-6 pt-8 shadow-[8px_8px_0_#141414]"
              style={{ background: s.c, borderColor: BLACK }}
            >
              <span
                className="absolute -top-4 left-6 border-4 px-2 py-0.5 font-archivo text-[10px] uppercase"
                style={{ background: "white", borderColor: BLACK }}
              >
                VERIFIED READER
              </span>
              <blockquote className="font-archivo text-lg leading-snug uppercase">{s.q}</blockquote>
              <figcaption className="mt-4 font-space-mono text-xs font-bold uppercase">— {s.w}</figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function Get() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);
  return (
    <section id="get" className="px-5 py-16 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <div
          className="relative overflow-hidden border-4 p-8 text-center shadow-[14px_14px_0_#141414] sm:p-14"
          style={{ background: BLACK, borderColor: BLACK }}
        >
          <div
            className="pointer-events-none absolute inset-0 opacity-20"
            style={{
              backgroundImage: "radial-gradient(#ffffff44 2px, transparent 2px)",
              backgroundSize: "26px 26px",
            }}
          />
          <h2 className="relative font-archivo text-4xl text-white uppercase sm:text-6xl">
            STOP DROWNING
            <br />
            <span style={{ color: LIME }}>IN PDFs.</span>
          </h2>
          <p className="relative mx-auto mt-4 max-w-md font-space-mono text-sm font-bold text-white/80">
            3 documents a month, free forever. Upgrade when your reading list
            gets scary again.
          </p>
          {done ? (
            <p className="relative mt-8 inline-block border-4 px-6 py-4 font-archivo text-lg uppercase shadow-[6px_6px_0_#a8e10c]" style={{ background: LIME }}>
              YOU'RE IN. GO UPLOAD SOMETHING HUGE. ✦
            </p>
          ) : (
            <form
              className="relative mx-auto mt-8 flex max-w-lg flex-col gap-4 sm:flex-row"
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
                placeholder="you@drowning-in-pdfs.com"
                className="flex-1 border-4 bg-white px-4 py-4 font-space-mono text-sm font-bold outline-none placeholder:opacity-40"
                style={{ borderColor: BLACK }}
              />
              <button
                type="submit"
                className="border-4 px-6 py-4 font-archivo text-sm uppercase shadow-[5px_5px_0_#a8e10c] transition-all hover:-translate-y-1 hover:shadow-[7px_7px_0_#a8e10c] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none"
                style={{ background: PINK, borderColor: BLACK }}
              >
                UNDROWN ME
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

export function DesignFour() {
  useEffect(() => {
    document.title = "RATIO READER — READ LESS. KNOW MORE.";
  }, []);
  return (
    <div className="min-h-screen antialiased" style={{ background: CREAM, color: BLACK }}>
      <Nav />
      <Hero />
      <Marquee bg={BLACK} text="UPLOAD ✦ DISTILL ✦ UNDERSTAND ✦ REPEAT" />
      <Why />
      <Marquee bg={PINK} text="SUMMARY ✦ QUOTES ✦ HINTS ✦ INSIGHTS" />
      <Demo />
      <Yells />
      <Get />
      <footer className="border-t-4 px-5 py-8 sm:px-8" style={{ borderColor: BLACK }}>
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="font-archivo text-lg uppercase">RATIO READER © 2026</p>
          <p className="font-space-mono text-xs font-bold uppercase opacity-60">
            made with 90% less reading
          </p>
          <Link
            to="/5"
            className="border-4 px-4 py-2 font-archivo text-xs uppercase shadow-[4px_4px_0_#141414] transition-all hover:-translate-y-0.5 active:translate-x-[3px] active:translate-y-[3px] active:shadow-none"
            style={{ background: "#ffd23f", borderColor: BLACK }}
          >
            NEXT DESIGN →
          </Link>
        </div>
      </footer>
    </div>
  );
}
