import { motion } from "motion/react";

export function DesignFive() {
  return (
    <div
      className="min-h-screen bg-[#0e0a06] text-[#e8d9b0] relative overflow-hidden"
      style={{ fontFamily: "'Cormorant Garamond', serif" }}
    >
      {/* Radial gold glow */}
      <div
        className="pointer-events-none fixed inset-0"
        style={{
          background:
            "radial-gradient(ellipse at top, rgba(201,162,75,0.18), transparent 60%)",
        }}
      />
      {/* Geometric deco border frame */}
      <div className="pointer-events-none fixed inset-4 border border-[#c9a24b]/30 z-0" />
      <div className="pointer-events-none fixed inset-6 border border-[#c9a24b]/15 z-0" />

      <div className="relative z-10">
        {/* Header */}
        <header className="px-8 md:px-20 pt-12 pb-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center gap-4 mb-4"
          >
            <DecoLine />
            <span className="text-[10px] uppercase tracking-[0.6em] text-[#c9a24b]">
              Est. MMXXV
            </span>
            <DecoLine />
          </motion.div>
          <p
            className="text-2xl md:text-3xl italic text-[#c9a24b]"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            The Ratio Reader
          </p>
          <h1
            className="text-6xl md:text-[9rem] leading-[0.9] mt-2"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 }}
          >
            <span className="block">The Art of</span>
            <span className="block italic text-[#e8d9b0]">Reading Well</span>
          </h1>
          <div className="flex items-center justify-center gap-4 mt-6">
            <DecoLine />
            <Diamond />
            <DecoLine />
          </div>
        </header>

        {/* Hero */}
        <section className="px-8 md:px-20 py-12 max-w-5xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-xl md:text-3xl leading-relaxed italic"
          >
            A PDF enters. A distillation emerges — <span className="text-[#c9a24b]">summary, hints, and quotes</span>, arranged with the care of a fine edition. Reading, refined.
          </motion.p>
          <div className="mt-10 flex flex-col items-center gap-4">
            <button
              className="border border-[#c9a24b] text-[#e8d9b0] px-12 py-3 uppercase tracking-[0.3em] text-xs hover:bg-[#c9a24b] hover:text-[#0e0a06] transition-colors"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Upload a PDF
            </button>
            <span className="text-[#9a8a5a] text-sm italic">— complimentary to begin —</span>
          </div>
        </section>

        {/* Divider ornament */}
        <div className="flex items-center justify-center py-6">
          <DecoLine wide />
          <Diamond />
          <DecoLine wide />
        </div>

        {/* Three graces */}
        <section className="px-8 md:px-20 py-12 grid md:grid-cols-3 gap-px bg-[#c9a24b]/15">
          {[
            {
              n: "I",
              t: "The Summary",
              b: "The argument, rendered in its essentials — never hollow, always whole.",
            },
            {
              n: "II",
              t: "The Hints",
              b: "Marginalia of the finest kind, flagging where the weight of the text rests.",
            },
            {
              n: "III",
              t: "The Quotes",
              b: "Lines selected as a curator selects — only those worthy of the keeping.",
            },
          ].map((f, i) => (
            <motion.div
              key={f.n}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="bg-[#0e0a06] p-10 text-center"
            >
              <div className="text-5xl text-[#c9a24b] italic mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                {f.n}
              </div>
              <h3 className="text-2xl md:text-3xl mb-3" style={{ fontWeight: 500 }}>{f.t}</h3>
              <p className="text-[#9a8a5a] italic leading-relaxed">{f.b}</p>
            </motion.div>
          ))}
        </section>

        {/* Pull quote */}
        <section className="px-8 md:px-20 py-20 text-center max-w-4xl mx-auto">
          <Diamond />
          <blockquote
            className="text-3xl md:text-5xl italic leading-tight mt-6"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            “To read well is to read little, and read deeply.”
          </blockquote>
          <p className="mt-6 text-[10px] uppercase tracking-[0.5em] text-[#c9a24b]">
            — A Sentiment We Share
          </p>
        </section>

        {/* Method */}
        <section className="px-8 md:px-20 py-12 max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-[10px] uppercase tracking-[0.5em] text-[#c9a24b]">The Method</span>
            <h2 className="text-4xl md:text-6xl italic mt-2" style={{ fontWeight: 400 }}>
              Three movements.
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-10 text-center">
            {[
              { n: "Première", t: "Upload", b: "Present your PDF. Any document, however dense." },
              { n: "Deuxième", t: "Distill", b: "Ratio reads, and writes back the essentials." },
              { n: "Troisième", t: "Understand", b: "Summary, hints, and quotes — set in order." },
            ].map((s) => (
              <div key={s.n}>
                <p className="text-[#c9a24b] italic text-lg">{s.n}</p>
                <h4 className="text-2xl mt-2" style={{ fontWeight: 500 }}>{s.t}</h4>
                <p className="text-[#9a8a5a] italic mt-2 leading-relaxed">{s.b}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <section className="px-8 md:px-20 py-24 text-center">
          <div className="flex items-center justify-center gap-4 mb-8">
            <DecoLine wide />
            <Diamond />
            <DecoLine wide />
          </div>
          <h2 className="text-5xl md:text-8xl italic leading-tight" style={{ fontWeight: 300 }}>
            Read <span className="text-[#c9a24b]">less.</span>
            <br />
            Understand <span className="text-[#c9a24b]">more.</span>
          </h2>
          <button
            className="mt-10 border border-[#c9a24b] text-[#e8d9b0] px-14 py-4 uppercase tracking-[0.3em] text-xs hover:bg-[#c9a24b] hover:text-[#0e0a06] transition-colors"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Begin
          </button>
        </section>

        <footer className="px-8 md:px-20 py-10 border-t border-[#c9a24b]/20 flex flex-col md:flex-row justify-between items-center gap-3 text-[#9a8a5a] text-sm">
          <span className="italic">The Ratio Reader · An Edition for Readers</span>
          <span className="text-[10px] uppercase tracking-[0.4em] text-[#c9a24b]">MMXXV</span>
          <a href="/" className="italic hover:text-[#c9a24b]">← Return to the gallery</a>
        </footer>
      </div>
    </div>
  );
}

function DecoLine({ wide = false }: { wide?: boolean }) {
  return (
    <div
      className={`h-px ${wide ? "w-24 md:w-40" : "w-16"} bg-gradient-to-r from-transparent via-[#c9a24b] to-transparent`}
    />
  );
}

function Diamond() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" className="text-[#c9a24b]">
      <path d="M7 0 L14 7 L7 14 L0 7 Z" fill="currentColor" />
    </svg>
  );
}
