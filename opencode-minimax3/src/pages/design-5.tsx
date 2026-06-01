import { motion } from "motion/react";

export function Design5() {
  return (
    <div
      className="min-h-screen text-[#f4ead5] font-['Cormorant_Garamond',serif] relative overflow-x-hidden"
      style={{
        background: "#0d0a08",
        backgroundImage:
          "radial-gradient(ellipse at 50% 0%, #1a1410 0%, #0d0a08 50%), repeating-linear-gradient(45deg, transparent 0, transparent 2px, rgba(212,168,73,0.015) 2px, rgba(212,168,73,0.015) 3px)",
      }}
    >
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500&family=Cinzel:wght@400;500;600;700;800;900&family=Cinzel+Decorative:wght@400;700;900&family=Bodoni+Moda:ital,opsz,wght@0,6..96,400;0,6..96,500;0,6..96,600;0,6..96,700;0,6..96,800;0,6..96,900;1,6..96,400&family=Italiana&family=Inter:wght@300;400;500&display=swap"
      />

      <MarbleOverlay />
      <Sunburst />

      <Nav />
      <Hero />
      <Divider />
      <Features />
      <Divider />
      <Demo />
      <Divider />
      <Voices />
      <Divider />
      <Pricing />
      <Footer />
    </div>
  );
}

function MarbleOverlay() {
  return (
    <div
      className="fixed inset-0 pointer-events-none z-0 opacity-[0.06]"
      style={{
        backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")",
      }}
    />
  );
}

function Sunburst() {
  return (
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[1200px] pointer-events-none z-0 opacity-30">
      <svg viewBox="0 0 1200 1200" className="w-full h-full">
        {Array.from({ length: 36 }).map((_, i) => (
          <line
            key={i}
            x1="600"
            y1="600"
            x2="600"
            y2="0"
            stroke="#d4a849"
            strokeWidth="0.5"
            transform={`rotate(${i * 10} 600 600)`}
            opacity={i % 2 === 0 ? 0.6 : 0.2}
          />
        ))}
        {Array.from({ length: 3 }).map((_, i) => (
          <circle
            key={i}
            cx="600"
            cy="600"
            r={150 + i * 100}
            fill="none"
            stroke="#d4a849"
            strokeWidth="0.5"
            opacity={0.3 - i * 0.08}
          />
        ))}
      </svg>
    </div>
  );
}

function Divider() {
  return (
    <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12 py-6">
      <div className="flex items-center gap-6">
        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#d4a849] to-transparent" />
        <div className="w-3 h-3 rotate-45 border border-[#d4a849]" />
        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#d4a849] to-transparent" />
      </div>
    </div>
  );
}

function Nav() {
  return (
    <nav className="relative z-20 px-6 md:px-12 py-6 max-w-[1400px] mx-auto">
      <div className="flex items-center justify-between border-y border-[#d4a849]/40 py-4">
        <a href="/" className="flex items-center gap-3">
          <DecoMonogram />
          <div>
            <div className="font-['Cinzel'] text-[12px] tracking-[0.4em] text-[#d4a849]">EST. MMXXVI</div>
            <div className="font-['Cinzel'] text-[20px] tracking-[0.2em] font-500">RATIO READER</div>
          </div>
        </a>
        <div className="hidden md:flex items-center gap-10 font-['Cinzel'] text-[12px] tracking-[0.3em]">
          <a href="#features" className="hover:text-[#d4a849] transition">METHOD</a>
          <a href="#demo" className="hover:text-[#d4a849] transition">SAMPLE</a>
          <a href="#voices" className="hover:text-[#d4a849] transition">TESTIMONY</a>
          <a href="#pricing" className="hover:text-[#d4a849] transition">SUBSCRIBE</a>
        </div>
        <a
          href="#"
          className="font-['Cinzel'] text-[11px] tracking-[0.3em] px-6 py-3 border border-[#d4a849] text-[#d4a849] hover:bg-[#d4a849] hover:text-[#0d0a08] transition"
        >
          ◇ BEGIN READING
        </a>
      </div>
    </nav>
  );
}

function DecoMonogram() {
  return (
    <div className="w-14 h-14 relative">
      <svg viewBox="0 0 56 56" className="w-full h-full">
        <circle cx="28" cy="28" r="26" fill="none" stroke="#d4a849" strokeWidth="1" />
        <circle cx="28" cy="28" r="20" fill="none" stroke="#d4a849" strokeWidth="0.5" />
        <text x="28" y="36" textAnchor="middle" fontFamily="Cinzel" fontSize="22" fill="#d4a849" fontWeight="600">R</text>
      </svg>
    </div>
  );
}

function Hero() {
  return (
    <section className="relative z-10 px-6 md:px-12 py-20 md:py-32 max-w-[1400px] mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="font-['Cinzel'] text-[11px] tracking-[0.5em] text-[#d4a849] mb-8"
      >
        ✦  THE FINER ART OF READING  ✦
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.1 }}
        className="font-['Italiana'] text-[clamp(60px,11vw,180px)] leading-[0.85] tracking-[-0.01em] text-[#f4ead5]"
      >
        <div className="italic">the</div>
        <div className="text-[#d4a849]">Golden</div>
        <div>Ratio</div>
      </motion.h1>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="flex items-center justify-center gap-6 my-12"
      >
        <div className="w-16 h-px bg-[#d4a849]" />
        <DecoDiamond />
        <div className="w-16 h-px bg-[#d4a849]" />
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="max-w-[60ch] mx-auto text-[22px] md:text-[26px] leading-[1.5] font-300 italic text-[#f4ead5]/80"
      >
        A reading instrument for the discriminating reader. Upload any PDF;
        receive, in three minutes, the thesis, the architecture, the
        unforgettable passages, and the unfinished business.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-6"
      >
        <a
          href="#"
          className="group inline-flex items-center gap-4 px-10 py-4 bg-[#d4a849] text-[#0d0a08] font-['Cinzel'] text-[12px] tracking-[0.3em] font-600 hover:bg-[#f4ead5] transition"
        >
          ✦ UPLOAD YOUR FIRST VOLUME
        </a>
        <a href="#demo" className="font-['Cinzel'] text-[11px] tracking-[0.3em] text-[#d4a849] hover:text-[#f4ead5] transition">
          ▸ EXAMINE A SAMPLE
        </a>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.4 }}
        className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-0 max-w-[900px] mx-auto"
      >
        {[
          ["3", "MINUTES", "TO A READING"],
          ["100", "PER CENT", "QUOTE FIDELITY"],
          ["0", "HALLUCINATIONS", "GUARANTEED"],
          ["φ", "THE RATIO", "1.618..."],
        ].map(([v, l, sub], i) => (
          <div
            key={i}
            className={`p-6 ${i !== 0 ? "md:border-l border-[#d4a849]/30" : ""} ${i !== 3 ? "md:border-r border-[#d4a849]/30" : ""}`}
          >
            <div className="font-['Italiana'] text-[56px] md:text-[72px] leading-none text-[#d4a849]">{v}</div>
            <div className="font-['Cinzel'] text-[10px] tracking-[0.3em] mt-2">{l}</div>
            <div className="font-['Cormorant_Garamond'] italic text-[14px] text-[#f4ead5]/50 mt-1">{sub}</div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}

function DecoDiamond() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32">
      <path d="M16 0 L32 16 L16 32 L0 16 Z" fill="none" stroke="#d4a849" strokeWidth="1" />
      <path d="M16 8 L24 16 L16 24 L8 16 Z" fill="#d4a849" />
    </svg>
  );
}

function Features() {
  const items = [
    {
      n: "I",
      t: "The Précis",
      sub: "DICTUM",
      d: "A two-hundred word distillation of the central thesis, composed in the register of the author. Not a list of facts. The spine, in your hand.",
    },
    {
      n: "II",
      t: "The Chart",
      sub: "TABULA",
      d: "Each chapter, broken into its claim, its evidence, and its concession. The architecture of the argument, made visible.",
    },
    {
      n: "III",
      t: "The Quotes",
      sub: "FLOSCULI",
      d: "Twelve to twenty sentences, extracted verbatim, page-numbered. The passages the model judges will reward a second reading.",
    },
    {
      n: "IV",
      t: "The Threads",
      sub: "NODUS",
      d: "The questions the volume raises but does not close. Useful for essays, lectures, and arguments yet to be had.",
    },
  ];

  return (
    <section id="features" className="relative z-10 px-6 md:px-12 py-20 max-w-[1400px] mx-auto">
      <div className="text-center mb-20">
        <div className="font-['Cinzel'] text-[11px] tracking-[0.5em] text-[#d4a849] mb-4">— THE METHOD —</div>
        <h2 className="font-['Italiana'] text-[clamp(48px,7vw,100px)] leading-[0.95] tracking-[-0.01em] max-w-[16ch] mx-auto">
          Four instruments,<br /><em className="italic text-[#d4a849]">one volume.</em>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-[#d4a849]/40">
        {items.map((it, i) => (
          <div
            key={it.t}
            className={`relative p-12 md:p-16 group cursor-default min-h-[400px] flex flex-col ${
              i === 0 ? "border-r border-b border-[#d4a849]/40" : ""
            } ${i === 1 ? "border-b border-[#d4a849]/40" : ""
            } ${i === 2 ? "border-r border-[#d4a849]/40" : ""}`}
          >
            <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#d4a849]" />
            <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#d4a849]" />
            <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-[#d4a849]" />
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#d4a849]" />

            <div className="flex items-baseline justify-between mb-8">
              <div className="font-['Cinzel'] text-[12px] tracking-[0.4em] text-[#d4a849]">— {it.sub} —</div>
              <div className="font-['Italiana'] text-[120px] leading-none text-[#d4a849]/15 group-hover:text-[#d4a849]/30 transition-colors absolute right-8 top-6">
                {it.n}
              </div>
            </div>

            <h3 className="font-['Italiana'] text-[56px] md:text-[64px] leading-[0.95] tracking-[-0.01em] mb-8">
              {it.t}
            </h3>

            <p className="font-['Cormorant_Garamond'] italic text-[20px] leading-[1.5] text-[#f4ead5]/80 mt-auto max-w-[42ch]">
              {it.d}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Demo() {
  return (
    <section id="demo" className="relative z-10 px-6 md:px-12 py-20 max-w-[1200px] mx-auto">
      <div className="text-center mb-16">
        <div className="font-['Cinzel'] text-[11px] tracking-[0.5em] text-[#d4a849] mb-4">— A WORKED EXAMPLE —</div>
        <h2 className="font-['Italiana'] text-[clamp(48px,7vw,100px)] leading-[0.95] tracking-[-0.01em]">
          <em className="italic text-[#d4a849]">On</em> the desk.
        </h2>
      </div>

      <div className="border-2 border-[#d4a849]/60 bg-gradient-to-br from-[#1a1410] to-[#0d0a08] p-10 md:p-16 relative">
        <div className="absolute top-0 left-0 right-0 h-2 bg-[#d4a849]" />
        <div className="absolute bottom-0 left-0 right-0 h-2 bg-[#d4a849]" />

        <div className="grid grid-cols-12 gap-8 items-center pb-8 mb-8 border-b border-[#d4a849]/30">
          <div className="col-span-12 md:col-span-7">
            <div className="font-['Cinzel'] text-[11px] tracking-[0.4em] text-[#d4a849] mb-3">THE VOLUME</div>
            <div className="font-['Italiana'] text-[44px] md:text-[56px] leading-[1] tracking-[-0.01em] italic">
              Thinking, Fast and Slow
            </div>
            <div className="font-['Cinzel'] text-[12px] tracking-[0.3em] text-[#f4ead5]/60 mt-3">
              DANIEL KAHNEMAN · 2011 · 499 PAGES
            </div>
          </div>
          <div className="col-span-12 md:col-span-5 md:border-l md:border-[#d4a849]/30 md:pl-8">
            <div className="font-['Cinzel'] text-[11px] tracking-[0.4em] text-[#d4a849] mb-2">READER'S VERDICT</div>
            <div className="font-['Cormorant_Garamond'] italic text-[19px] leading-[1.45] text-[#f4ead5]/85">
              A foundational text on the two systems of cognition. Worth the
              read. Ratio Reader returns the spine in under three minutes.
            </div>
          </div>
        </div>

        <div className="space-y-12">
          <DemoBlock
            label="I. — THE PRÉCIS"
            body="Kahneman proposes that the mind operates through two systems. System 1 is fast, intuitive, prone to error. System 2 is slow, deliberate, lazy. The book is a catalogue of the errors System 1 makes when System 2 fails to intervene — anchoring, availability, framing, loss aversion — and a meditation on what it costs us to live on autopilot."
          />
          <DemoBlock
            label="II. — A KEPT QUOTE"
            body={`"Nothing in life is as important as you think it is, while you are thinking about it."`}
            italic
            page="p. 187"
          />
          <DemoBlock
            label="III. — AN OPEN THREAD"
            body="Kahneman admits he has no reliable method for training System 2 to be more vigilant. The book identifies the problem with extraordinary precision. The remedy remains, by his own admission, an open question."
          />
        </div>
      </div>
    </section>
  );
}

function DemoBlock({ label, body, italic, page }: { label: string; body: string; italic?: boolean; page?: string }) {
  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <div className="font-['Cinzel'] text-[11px] tracking-[0.4em] text-[#d4a849]">{label}</div>
        {page && <div className="font-['Cinzel'] text-[10px] tracking-[0.3em] text-[#f4ead5]/40">— {page} —</div>}
      </div>
      <p
        className={`font-['Cormorant_Garamond'] ${
          italic
            ? "italic text-[36px] md:text-[44px] leading-[1.25] text-[#d4a849]"
            : "text-[22px] leading-[1.55] text-[#f4ead5]/90"
        }`}
      >
        {body}
      </p>
    </div>
  );
}

function Voices() {
  return (
    <section id="voices" className="relative z-10 px-6 md:px-12 py-20 max-w-[1400px] mx-auto">
      <div className="text-center mb-16">
        <div className="font-['Cinzel'] text-[11px] tracking-[0.5em] text-[#d4a849] mb-4">— TESTIMONY —</div>
        <h2 className="font-['Italiana'] text-[clamp(48px,7vw,100px)] leading-[0.95] tracking-[-0.01em]">
          In <em className="italic text-[#d4a849]">their</em> words.
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { q: "I uploaded a six-hundred page book I had been avoiding for two years. Got the spine in three minutes. Read the rest in a week.", n: "Elena Marsh", r: "Editor, Paris Review" },
          { q: "The only AI tool I actually use weekly. It reads the way a careful friend would.", n: "James Tate", r: "Doctoral Candidate, MIT" },
          { q: "The open-threads section alone is worth the subscription. I start more essays from those than from the books themselves.", n: "Sofia Reyes", r: "Writer, Brooklyn" },
        ].map((v) => (
          <div
            key={v.n}
            className="border border-[#d4a849]/40 p-8 relative bg-gradient-to-b from-[#1a1410] to-[#0d0a08]"
          >
            <div className="font-['Italiana'] text-[100px] leading-none text-[#d4a849]/30 -mb-6">"</div>
            <p className="font-['Cormorant_Garamond'] italic text-[22px] leading-[1.4] text-[#f4ead5]/90 mb-8">
              {v.q}
            </p>
            <div className="pt-6 border-t border-[#d4a849]/30">
              <div className="font-['Italiana'] text-[22px] text-[#d4a849]">{v.n}</div>
              <div className="font-['Cinzel'] text-[10px] tracking-[0.3em] text-[#f4ead5]/50 mt-1">{v.r}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Pricing() {
  return (
    <section id="pricing" className="relative z-10 px-6 md:px-12 py-20 max-w-[1200px] mx-auto">
      <div className="text-center mb-16">
        <div className="font-['Cinzel'] text-[11px] tracking-[0.5em] text-[#d4a849] mb-4">— SUBSCRIPTIONS —</div>
        <h2 className="font-['Italiana'] text-[clamp(48px,7vw,100px)] leading-[0.95] tracking-[-0.01em]">
          <em className="italic text-[#d4a849]">Choose</em> your term.
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { t: "The Trial", p: "$0", per: "for fourteen days", b: "Five full readings. No card required.", c: "BEGIN" },
          { t: "The Quarterly", p: "$12", per: "a month", b: "Twenty readings a month. Cancel anytime.", c: "SUBSCRIBE", featured: true },
          { t: "The Annual", p: "$108", per: "a year", b: "Unlimited readings. Two months complimentary.", c: "SUBSCRIBE" },
        ].map((p) => (
          <div
            key={p.t}
            className={`relative p-10 border ${
              p.featured
                ? "border-[#d4a849] bg-gradient-to-b from-[#1a1410] to-[#0d0a08]"
                : "border-[#d4a849]/40 bg-[#0d0a08]"
            }`}
          >
            {p.featured && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-[#d4a849] text-[#0d0a08] font-['Cinzel'] text-[10px] tracking-[0.3em] font-600">
                ✦ RECOMMENDED ✦
              </div>
            )}
            <div className="font-['Cinzel'] text-[11px] tracking-[0.4em] text-[#d4a849] mb-6 text-center">
              — {p.t.toUpperCase()} —
            </div>
            <div className="font-['Italiana'] text-[96px] leading-none text-center tracking-[-0.02em]">
              {p.p}
            </div>
            <div className="font-['Cormorant_Garamond'] italic text-center text-[15px] text-[#f4ead5]/60 mb-8 mt-2">
              {p.per}
            </div>
            <p className="font-['Cormorant_Garamond'] italic text-[18px] leading-[1.5] text-center text-[#f4ead5]/80 mb-10 min-h-[80px]">
              {p.b}
            </p>
            <a
              href="#"
              className={`block text-center px-6 py-4 font-['Cinzel'] text-[11px] tracking-[0.3em] font-600 transition ${
                p.featured
                  ? "bg-[#d4a849] text-[#0d0a08] hover:bg-[#f4ead5]"
                  : "border border-[#d4a849] text-[#d4a849] hover:bg-[#d4a849] hover:text-[#0d0a08]"
              }`}
            >
              ✦ {p.c} ✦
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="relative z-10 px-6 md:px-12 py-12 max-w-[1400px] mx-auto">
      <div className="border-t-2 border-[#d4a849]/40 pt-10 flex flex-col md:flex-row items-center justify-between gap-6 font-['Cinzel'] text-[11px] tracking-[0.3em] text-[#f4ead5]/50">
        <div>© MMXXVI — RATIO READER · A FINER READING INSTRUMENT</div>
        <a href="/" className="hover:text-[#d4a849] transition">← RETURN TO THE CONCEPT LAB</a>
      </div>
    </footer>
  );
}
