import { motion } from "motion/react";

export function Design1() {
  return (
    <div
      className="min-h-screen text-[#1a1814] font-['EB_Garamond',Georgia,serif]"
      style={{
        background: "#f4ecd9",
        backgroundImage:
          "radial-gradient(ellipse at 20% 10%, rgba(139,111,71,0.06), transparent 50%), radial-gradient(ellipse at 80% 80%, rgba(139,111,71,0.05), transparent 50%)",
      }}
    >
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,500&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400&family=Inter:wght@300;400;500;600&display=swap"
      />

      <Nav />

      <Hero />

      <Marquee />

      <Features />

      <Demo />

      <Method />

      <Quote />

      <Pricing />

      <Footer />
    </div>
  );
}

function Nav() {
  return (
    <nav className="px-8 md:px-16 py-6 flex items-center justify-between border-b border-[#1a1814]/15 relative z-20">
      <a href="/" className="font-['Cormorant_Garamond'] text-[22px] font-600 tracking-tight flex items-center gap-2">
        <span className="inline-block w-2 h-2 rounded-full bg-[#8b6f47]" />
        Ratio Reader
      </a>
      <div className="hidden md:flex items-center gap-10 font-['Inter'] text-[12px] uppercase tracking-[0.18em]">
        <a href="#features" className="hover:text-[#8b6f47] transition">The Method</a>
        <a href="#demo" className="hover:text-[#8b6f47] transition">Sample</a>
        <a href="#pricing" className="hover:text-[#8b6f47] transition">Subscribe</a>
        <a
          href="#"
          className="px-5 py-2 border border-[#1a1814] hover:bg-[#1a1814] hover:text-[#f4ecd9] transition"
        >
          Begin Reading
        </a>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="px-8 md:px-16 pt-12 md:pt-20 pb-24 relative">
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 md:col-span-2 font-['Inter'] text-[11px] uppercase tracking-[0.25em] text-[#8b6f47]">
          <div>Vol. I</div>
          <div>No. 01</div>
          <div className="mt-2">—— 2026</div>
        </div>

        <div className="col-span-12 md:col-span-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-['Inter'] text-[11px] uppercase tracking-[0.3em] text-[#8b6f47] mb-6"
          >
            A new instrument for the patient reader
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1 }}
            className="font-['Cormorant_Garamond'] text-[clamp(56px,9vw,140px)] leading-[0.92] tracking-[-0.025em] font-500"
          >
            Read the book,
            <br />
            <em className="font-300 italic text-[#8b6f47]">not the </em>
            <span className="relative inline-block">
              bulk
              <svg
                className="absolute -bottom-2 left-0 w-full"
                viewBox="0 0 300 12"
                fill="none"
              >
                <path
                  d="M2 8 Q 75 2, 150 6 T 298 4"
                  stroke="#8b6f47"
                  strokeWidth="2"
                  fill="none"
                />
              </svg>
            </span>
            <em className="font-300 italic text-[#8b6f47]"> of it.</em>
          </motion.h1>

          <div className="grid grid-cols-12 gap-6 mt-16">
            <div className="col-span-12 md:col-span-5 md:col-start-3">
              <p className="text-[22px] md:text-[24px] leading-[1.4] font-400">
                <span className="font-['Cormorant_Garamond'] text-[72px] float-left leading-[0.8] mr-2 pt-2 font-600">R</span>
                atio Reader takes any PDF — a 400-page treatise, a stack of
                papers, a tired annual report — and returns the spine of the
                argument, the passages worth keeping, and the ideas that
                reward a second read.
              </p>
            </div>

            <div className="col-span-12 md:col-span-3 md:col-start-9 pt-2">
              <div className="border-l-2 border-[#1a1814] pl-5">
                <div className="font-['Inter'] text-[11px] uppercase tracking-[0.2em] text-[#8b6f47] mb-3">
                  In this edition
                </div>
                <ul className="space-y-2 text-[17px] leading-[1.4]">
                  <li>· A précis in plain language</li>
                  <li>· The argument, charted</li>
                  <li>· The quotes worth quoting</li>
                  <li>· Open questions, kept open</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-16 flex flex-col md:flex-row items-start md:items-center gap-6">
            <a
              href="#"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-[#1a1814] text-[#f4ecd9] font-['Inter'] text-[12px] uppercase tracking-[0.2em] hover:bg-[#8b6f47] transition"
            >
              Drop your first PDF
              <span className="group-hover:translate-x-1 transition">→</span>
            </a>
            <a
              href="#demo"
              className="font-['Inter'] text-[12px] uppercase tracking-[0.2em] underline underline-offset-4 decoration-1 hover:text-[#8b6f47]"
            >
              See a worked example
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Marquee() {
  const items = [
    "Faster comprehension",
    "The argument, in 200 words",
    "Key passages highlighted",
    "No information loss",
    "Source-locked",
    "Built for serious readers",
  ];
  return (
    <div className="border-y border-[#1a1814] py-5 overflow-hidden bg-[#1a1814] text-[#f4ecd9]">
      <div className="flex gap-12 animate-[scroll_30s_linear_infinite] whitespace-nowrap font-['Cormorant_Garamond'] text-[28px] md:text-[36px] font-500 italic">
        {[...items, ...items, ...items].map((t, i) => (
          <span key={i} className="flex items-center gap-12">
            {t}
            <span className="text-[#8b6f47]">✦</span>
          </span>
        ))}
      </div>
      <style>{`@keyframes scroll { from { transform: translateX(0); } to { transform: translateX(-33.33%); } }`}</style>
    </div>
  );
}

function Features() {
  const features = [
    {
      n: "I.",
      title: "The Précis",
      sub: "What the book is actually saying",
      body: "A 200-word distillation of the central argument, written in the author's register. Not a list of facts. The thesis, in your hand.",
    },
    {
      n: "II.",
      title: "The Charted Argument",
      sub: "How the book moves",
      body: "Each chapter broken into its claim, its evidence, and its concession. You see the architecture, not just the rooms.",
    },
    {
      n: "III.",
      title: "The Kept Quotes",
      sub: "Passages worth returning to",
      body: "Twelve to twenty sentences — extracted, not summarised — that the model judges will reward a second and third read.",
    },
    {
      n: "IV.",
      title: "The Open Threads",
      sub: "What the author left unresolved",
      body: "The questions the book raises but does not close. Useful for essays, talks, and arguments you have not yet had.",
    },
  ];

  return (
    <section id="features" className="px-8 md:px-16 py-24 md:py-32">
      <div className="grid grid-cols-12 gap-6 mb-20">
        <div className="col-span-12 md:col-span-2 font-['Inter'] text-[11px] uppercase tracking-[0.25em] text-[#8b6f47]">
          § Two
        </div>
        <div className="col-span-12 md:col-span-10">
          <h2 className="font-['Cormorant_Garamond'] text-[clamp(48px,6vw,88px)] leading-[0.95] font-500 max-w-[18ch]">
            Four instruments, <em className="italic text-[#8b6f47]">one book.</em>
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#1a1814]/20">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            onMouseEnter={() => {}}
            onMouseLeave={() => {}}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="relative bg-[#f4ecd9] p-10 md:p-14 group cursor-default min-h-[360px] flex flex-col"
          >
            <div className="font-['Cormorant_Garamond'] text-[120px] absolute -top-4 right-6 leading-none text-[#1a1814]/5 group-hover:text-[#8b6f47]/15 transition-colors font-500 italic">
              {f.n}
            </div>
            <div className="font-['Inter'] text-[11px] uppercase tracking-[0.25em] text-[#8b6f47] mb-3">
              {f.n} {f.sub}
            </div>
            <h3 className="font-['Cormorant_Garamond'] text-[44px] md:text-[52px] leading-[1] font-500 tracking-[-0.01em] mb-6">
              {f.title}
            </h3>
            <p className="text-[19px] leading-[1.5] max-w-[40ch] mt-auto">
              {f.body}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function Demo() {
  return (
    <section id="demo" className="px-8 md:px-16 py-24 md:py-32 bg-[#1a1814] text-[#f4ecd9] relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{ backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 39px, #f4ecd9 39px, #f4ecd9 40px)" }}
      />
      <div className="relative grid grid-cols-12 gap-6">
        <div className="col-span-12 md:col-span-2 font-['Inter'] text-[11px] uppercase tracking-[0.25em] text-[#8b6f47]">
          § Three
        </div>

        <div className="col-span-12 md:col-span-10">
          <h2 className="font-['Cormorant_Garamond'] text-[clamp(44px,5.5vw,80px)] leading-[0.95] font-500 mb-16 max-w-[16ch]">
            Worked example, <em className="italic text-[#8b6f47]">annotated.</em>
          </h2>

          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 md:col-span-5">
              <div className="font-['Inter'] text-[11px] uppercase tracking-[0.2em] text-[#8b6f47] mb-3">
                The book
              </div>
              <div className="font-['Cormorant_Garamond'] text-[32px] leading-[1.1] italic mb-4">
                Thinking, Fast and Slow
              </div>
              <div className="font-['Inter'] text-[14px] tracking-wider opacity-60">
                Daniel Kahneman · 2011 · 499 pages
              </div>

              <div className="mt-12 p-6 border border-[#f4ecd9]/20 bg-[#f4ecd9]/5">
                <div className="font-['Inter'] text-[10px] uppercase tracking-[0.25em] text-[#8b6f47] mb-3">
                  Reader's verdict
                </div>
                <div className="font-['Cormorant_Garamond'] text-[19px] italic leading-[1.45]">
                  "A foundational text on the two systems of cognition. Worth
                  the read. Ratio Reader returns the spine in under three
                  minutes."
                </div>
              </div>
            </div>

            <div className="col-span-12 md:col-span-7 md:col-start-7 space-y-10">
              <Block
                roman="I."
                label="The précis, in 200 words"
                body="Kahneman proposes that the mind operates through two systems. System 1 is fast, intuitive, and prone to error. System 2 is slow, deliberate, and lazy. The book is a catalogue of the errors System 1 makes when System 2 fails to intervene — anchoring, availability, framing, loss aversion — and a meditation on what it costs us to live so often on autopilot. The argument is not that intuition is bad. It is that we mistake it for reasoning more often than we should."
              />
              <Block
                roman="II."
                label="The kept quote"
                body={`"Nothing in life is as important as you think it is, while you are thinking about it."`}
                italic
              />
              <Block
                roman="III."
                label="The open thread"
                body="Kahneman admits he has no reliable method for training System 2 to be more vigilant. The book identifies the problem with extraordinary precision. The remedy remains, by his own admission, an open question."
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Block({ roman, label, body, italic }: { roman: string; label: string; body: string; italic?: boolean }) {
  return (
    <div>
      <div className="flex items-baseline gap-3 mb-3">
        <span className="font-['Cormorant_Garamond'] italic text-[#8b6f47] text-[20px]">{roman}</span>
        <div className="font-['Inter'] text-[11px] uppercase tracking-[0.2em] text-[#8b6f47]">
          {label}
        </div>
      </div>
      <p className={`${italic ? "font-['Cormorant_Garamond'] text-[32px] md:text-[38px] leading-[1.25] italic" : "text-[19px] leading-[1.6]"}`}>
        {body}
      </p>
    </div>
  );
}

function Method() {
  return (
    <section className="px-8 md:px-16 py-24 md:py-32">
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 md:col-span-2 font-['Inter'] text-[11px] uppercase tracking-[0.25em] text-[#8b6f47]">
          § Four
        </div>

        <div className="col-span-12 md:col-span-10">
          <h2 className="font-['Cormorant_Garamond'] text-[clamp(44px,5.5vw,80px)] leading-[0.95] font-500 mb-20 max-w-[18ch]">
            <em className="italic text-[#8b6f47]">How</em> it works.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-0 border-t border-[#1a1814]">
            {[
              { n: "01", t: "Upload", d: "Any PDF, any length. We don't touch the original." },
              { n: "02", t: "Read", d: "Our model reads it the way a careful reader would, in full." },
              { n: "03", t: "Distil", d: "The précis, the argument, the kept quotes, the open threads." },
              { n: "04", t: "Return", d: "A reading, not a report. Yours in under three minutes." },
            ].map((step, i) => (
              <div
                key={step.n}
                className={`pt-10 pb-10 ${i !== 0 ? "md:border-l md:border-[#1a1814]/30 md:pl-8" : "md:pr-8"} ${i !== 3 ? "md:pr-8" : ""}`}
              >
                <div className="font-['Cormorant_Garamond'] text-[64px] font-500 italic text-[#8b6f47] leading-none mb-4">
                  {step.n}
                </div>
                <div className="font-['Cormorant_Garamond'] text-[28px] font-500 mb-2">
                  {step.t}
                </div>
                <p className="text-[17px] leading-[1.45] opacity-80">
                  {step.d}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Quote() {
  return (
    <section className="px-8 md:px-16 py-24 md:py-32 border-t border-[#1a1814]/30">
      <div className="max-w-[1100px] mx-auto text-center">
        <div className="font-['Cormorant_Garamond'] text-[140px] leading-none text-[#8b6f47]/30 -mb-10">
          "
        </div>
        <blockquote className="font-['Cormorant_Garamond'] text-[clamp(36px,5vw,72px)] leading-[1.1] font-400 italic">
          I uploaded a 600-page book I had been <em className="not-italic text-[#8b6f47]">avoiding</em> for two years. Ratio Reader
          gave me the spine in three minutes. I read the rest in a week.
        </blockquote>
        <div className="mt-12 flex items-center justify-center gap-4">
          <div className="w-12 h-12 rounded-full bg-[#8b6f47]/20 flex items-center justify-center font-['Cormorant_Garamond'] italic text-[24px]">
            E
          </div>
          <div className="text-left">
            <div className="font-['Cormorant_Garamond'] text-[20px]">Elena Marsh</div>
            <div className="font-['Inter'] text-[11px] uppercase tracking-[0.2em] opacity-60">
              Editor, Paris Review
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  return (
    <section id="pricing" className="px-8 md:px-16 py-24 md:py-32 border-t border-[#1a1814]/30">
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 md:col-span-2 font-['Inter'] text-[11px] uppercase tracking-[0.25em] text-[#8b6f47]">
          § Five
        </div>
        <div className="col-span-12 md:col-span-10">
          <h2 className="font-['Cormorant_Garamond'] text-[clamp(44px,5.5vw,80px)] leading-[0.95] font-500 mb-20 max-w-[18ch]">
            Subscribe to <em className="italic text-[#8b6f47]">reading.</em>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#1a1814]/20">
            {[
              { name: "The Trial", price: "Free", per: "for 14 days", body: "Five full reads. No card required.", cta: "Begin" },
              { name: "The Quarterly", price: "$12", per: "/ month", body: "Twenty reads a month. Cancel anytime.", cta: "Subscribe", featured: true },
              { name: "The Annual", price: "$108", per: "/ year", body: "Unlimited reads. Two months free.", cta: "Subscribe" },
            ].map((p) => (
              <div
                key={p.name}
                className={`p-10 flex flex-col ${p.featured ? "bg-[#1a1814] text-[#f4ecd9]" : "bg-[#f4ecd9]"}`}
              >
                <div className="font-['Inter'] text-[11px] uppercase tracking-[0.2em] opacity-70 mb-8">
                  {p.name}
                </div>
                <div className="font-['Cormorant_Garamond'] text-[88px] leading-[0.9] font-500 tracking-[-0.02em] mb-1">
                  {p.price}
                </div>
                <div className="font-['Inter'] text-[13px] uppercase tracking-[0.15em] opacity-60 mb-8">
                  {p.per}
                </div>
                <p className="text-[17px] leading-[1.45] mb-12 min-h-[60px]">
                  {p.body}
                </p>
                <a
                  href="#"
                  className={`mt-auto text-center px-6 py-3 font-['Inter'] text-[12px] uppercase tracking-[0.2em] border transition ${
                    p.featured
                      ? "border-[#f4ecd9] hover:bg-[#f4ecd9] hover:text-[#1a1814]"
                      : "border-[#1a1814] hover:bg-[#1a1814] hover:text-[#f4ecd9]"
                  }`}
                >
                  {p.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="px-8 md:px-16 py-12 border-t border-[#1a1814]/30 flex flex-col md:flex-row items-center justify-between gap-4 font-['Inter'] text-[11px] uppercase tracking-[0.2em] opacity-60">
      <div>© 2026 Ratio Reader — An instrument for the patient reader.</div>
      <a href="/" className="hover:text-[#8b6f47]">← Back to the concept lab</a>
    </footer>
  );
}
