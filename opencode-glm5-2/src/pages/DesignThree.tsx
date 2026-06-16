import { motion } from "motion/react";

export function DesignThree() {
  return (
    <div
      className="min-h-screen bg-[#faf6ee] text-[#2b2620] relative overflow-hidden"
      style={{ fontFamily: "'Fraunces', serif" }}
    >
      {/* Paper texture overlay */}
      <div className="grain absolute inset-0 opacity-[0.06] pointer-events-none" />

      {/* Handwritten nav */}
      <nav className="relative px-6 md:px-12 py-6 flex justify-between items-center">
        <span
          className="text-2xl"
          style={{ fontFamily: "'Caveat', cursive", fontWeight: 700 }}
        >
          ratio<span className="text-[#b8472a]">.</span>reader
        </span>
        <div className="flex gap-6 text-sm" style={{ fontFamily: "'Caveat', cursive" }}>
          <a href="#how" className="hover:text-[#b8472a]">how it works</a>
          <a href="#why" className="hover:text-[#b8472a]">why</a>
          <a href="#try" className="hover:text-[#b8472a]">try it</a>
        </div>
      </nav>

      {/* Hero */}
      <header className="relative px-6 md:px-12 pt-8 md:pt-16 pb-20 grid md:grid-cols-12 gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:col-span-7"
        >
          <span
            className="block text-[#b8472a] text-xl mb-4 -rotate-2"
            style={{ fontFamily: "'Caveat', cursive" }}
          >
            a reading companion —
          </span>
          <h1 className="text-5xl md:text-8xl leading-[0.95] tracking-tight" style={{ fontWeight: 400 }}>
            Read less,
            <br />
            <em className="italic text-[#b8472a]">understand more.</em>
          </h1>
          <p className="mt-8 text-lg md:text-xl max-w-lg leading-relaxed text-[#5a4f42]">
            Upload a PDF. Ratio Reader reads it like a careful student — underlining the load-bearing lines, scribbling hints in the margins, and copying out the quotes you’ll come back to.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <button
              className="bg-[#2b2620] text-[#faf6ee] px-8 py-4 rounded-full text-sm uppercase tracking-widest hover:bg-[#b8472a] transition-colors"
              style={{ fontFamily: "'Fraunces', serif" }}
            >
              Upload your PDF
            </button>
            <span
              className="text-2xl text-[#b8472a] rotate-3"
              style={{ fontFamily: "'Caveat', cursive" }}
            >
              no account needed ↗
            </span>
          </div>
        </motion.div>

        {/* Paper card stack */}
        <motion.div
          initial={{ opacity: 0, rotate: 8 }}
          animate={{ opacity: 1, rotate: 0 }}
          transition={{ delay: 0.3 }}
          className="md:col-span-5 relative h-[420px]"
        >
          <div className="absolute top-8 left-4 w-64 h-80 bg-white shadow-xl rotate-[-6deg] rounded-sm p-5 border border-[#e4dcc8]">
            <div className="h-2 w-16 bg-[#b8472a]/30 rounded mb-3" />
            <div className="space-y-2">
              <div className="h-2 bg-[#2b2620]/15 rounded w-full" />
              <div className="h-2 bg-[#2b2620]/15 rounded w-5/6" />
              <div className="h-2 bg-[#2b472a]/40 rounded w-2/3" />
              <div className="h-2 bg-[#2b2620]/15 rounded w-full" />
              <div className="h-2 bg-[#2b2620]/15 rounded w-4/5" />
            </div>
          </div>
          <div className="absolute top-4 right-2 w-64 h-80 bg-[#fffdf6] shadow-2xl rotate-[4deg] rounded-sm p-5 border border-[#e4dcc8] z-10">
            <span className="text-[10px] uppercase tracking-widest text-[#b8472a]">Summary</span>
            <h3 className="text-lg mt-2 leading-snug" style={{ fontWeight: 500 }}>
              The author argues that attention, not intelligence, is the scarce resource of our age.
            </h3>
            <div className="mt-4 pt-3 border-t border-dashed border-[#b8472a]/40">
              <span
                className="text-[#b8472a] text-xl"
                style={{ fontFamily: "'Caveat', cursive" }}
              >
                hint: this is the thesis —
              </span>
            </div>
          </div>
          <div
            className="absolute bottom-0 left-12 bg-[#fff3d6] shadow-lg rotate-[-2deg] rounded-sm px-5 py-3 z-20"
            style={{ fontFamily: "'Caveat', cursive" }}
          >
            <span className="text-lg text-[#2b2620]">
              “Attention is the rarest <br /> and purest form of generosity.”
            </span>
          </div>
        </motion.div>
      </header>

      {/* Wavy divider */}
      <div className="px-6 md:px-12">
        <svg viewBox="0 0 1200 40" className="w-full h-8" preserveAspectRatio="none">
          <path d="M0,20 C150,5 300,35 450,20 C600,5 750,35 900,20 C1050,5 1200,30 1200,20" stroke="#b8472a" strokeWidth="2" fill="none" strokeLinecap="round" />
        </svg>
      </div>

      {/* Why section */}
      <section id="why" className="px-6 md:px-12 py-20 grid md:grid-cols-12 gap-12">
        <div className="md:col-span-4">
          <span className="text-[#b8472a] text-xl -rotate-1 block mb-2" style={{ fontFamily: "'Caveat', cursive" }}>
            why —
          </span>
          <h2 className="text-4xl md:text-5xl leading-tight">
            Most of a document is <em className="italic">scaffolding.</em>
          </h2>
        </div>
        <div className="md:col-span-8 space-y-6 text-lg leading-relaxed text-[#5a4f42]">
          <p>
            A chapter spends twenty pages building to a paragraph. A report buries its finding under methodology. Ratio Reader treats every PDF like a manuscript in need of an editor — it finds the spine and walks you along it.
          </p>
          <div className="bg-[#fff3d6] border-l-4 border-[#b8472a] pl-5 py-3 -rotate-1">
            <span style={{ fontFamily: "'Caveat', cursive" }} className="text-xl text-[#b8472a]">
              think of it as a very fast, very patient tutor.
            </span>
          </div>
        </div>
      </section>

      {/* Features as margin annotations */}
      <section className="px-6 md:px-12 py-16 bg-[#f3ead4]">
        <div className="grid md:grid-cols-3 gap-10">
          {[
            { icon: "✎", t: "Summaries", b: "The argument, condensed without losing its bones.", a: "the whole point →" },
            { icon: "✦", t: "Hints", b: "Margin flags on the lines that carry the weight.", a: "read with a guide →" },
            { icon: "❝", t: "Quotes", b: "The sentences worth copying into your own notebook.", a: "keep the best →" },
          ].map((f, i) => (
            <motion.div
              key={f.t}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              className="relative bg-[#fffdf6] p-8 rounded-sm shadow-md border border-[#e4dcc8]"
              style={{ transform: `rotate(${i % 2 === 0 ? -1 : 1}deg)` }}
            >
              <span className="text-3xl text-[#b8472a]">{f.icon}</span>
              <h3 className="text-2xl mt-3" style={{ fontWeight: 500 }}>{f.t}</h3>
              <p className="mt-2 text-[#5a4f42] leading-relaxed">{f.b}</p>
              <span
                className="mt-4 block text-lg text-[#b8472a]"
                style={{ fontFamily: "'Caveat', cursive" }}
              >
                {f.a}
              </span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="px-6 md:px-12 py-20">
        <span className="text-[#b8472a] text-xl block mb-2" style={{ fontFamily: "'Caveat', cursive" }}>
          how it works —
        </span>
        <h2 className="text-4xl md:text-6xl mb-12">Three small steps.</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { n: "one", t: "Upload", b: "Drop in any PDF — a paper, a chapter, a report." },
            { n: "two", t: "Distill", b: "Ratio reads it through and writes back the essentials." },
            { n: "three", t: "Read", b: "Summary, hints, quotes — like notes from a friend." },
          ].map((s, i) => (
            <div key={s.n} className="relative">
              <span
                className="text-3xl text-[#b8472a] block mb-2"
                style={{ fontFamily: "'Caveat', cursive" }}
              >
                {s.n}.
              </span>
              <h3 className="text-2xl mb-2">{s.t}</h3>
              <p className="text-[#5a4f42]">{s.b}</p>
              {i < 2 && (
                <span className="hidden md:block absolute top-6 -right-2 text-[#b8472a] text-2xl" style={{ fontFamily: "'Caveat', cursive" }}>
                  →
                </span>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section id="try" className="px-6 md:px-12 py-20 bg-[#2b2620] text-[#faf6ee] text-center">
        <h2 className="text-4xl md:text-7xl leading-tight" style={{ fontWeight: 400 }}>
          Bring a PDF.
          <br />
          <em className="italic text-[#e9a06a]">Leave with the point.</em>
        </h2>
        <button className="mt-10 bg-[#e9a06a] text-[#2b2620] px-10 py-4 rounded-full text-sm uppercase tracking-widest hover:bg-[#faf6ee] transition-colors">
          Upload your PDF
        </button>
      </section>

      <footer className="px-6 md:px-12 py-8 flex flex-col md:flex-row justify-between items-center gap-2 text-sm text-[#5a4f42]">
        <span style={{ fontFamily: "'Caveat', cursive" }} className="text-xl">ratio.reader</span>
        <span>made for slow readers in a hurry</span>
        <a href="/" className="hover:text-[#b8472a]">← back</a>
      </footer>
    </div>
  );
}
