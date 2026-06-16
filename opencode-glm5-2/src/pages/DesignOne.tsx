import { motion } from "motion/react";

export function DesignOne() {
  return (
    <div
      className="min-h-screen bg-[#f1e9d8] text-[#1a140d] noise"
      style={{ fontFamily: "'Spectral', serif" }}
    >
      {/* Masthead */}
      <header className="border-b-[3px] border-double border-[#1a140d] px-6 md:px-12 pt-6">
        <div className="flex justify-between items-center text-[10px] uppercase tracking-[0.3em] pb-3 border-b border-[#1a140d]/40">
          <span>Vol. I · No. 1</span>
          <span>The Ratio Reader Broadsheet</span>
          <span>{new Date().getFullYear()}</span>
        </div>
        <motion.h1
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center py-6 md:py-10"
          style={{ fontFamily: "'Playfair Display', serif", fontWeight: 900 }}
        >
          <span className="block text-[14vw] md:text-[10rem] leading-[0.8] tracking-tight">
            RATIO
          </span>
          <span className="block text-[6vw] md:text-[3.5rem] italic font-normal -mt-2 text-[#7a1a1a]">
            reader
          </span>
        </motion.h1>
        <div className="flex justify-between text-[10px] uppercase tracking-[0.25em] pb-2 border-t border-[#1a140d]/40 pt-2">
          <span>Upload · Distill · Understand</span>
          <span className="hidden md:inline">“The shortest distance between a page and a mind.”</span>
          <span>Price: Free</span>
        </div>
      </header>

      {/* Hero lede */}
      <section className="px-6 md:px-12 py-12 grid md:grid-cols-12 gap-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="md:col-span-8"
        >
          <p className="text-[11px] uppercase tracking-[0.3em] text-[#7a1a1a] mb-4">
            Front Page · Lead Story
          </p>
          <h2
            className="text-4xl md:text-6xl leading-[1.05] mb-6"
            style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }}
          >
            Read the whole book in the time it takes to pour a coffee.
          </h2>
          <p className="first-letter:float-left first-letter:text-7xl first-letter:mr-2 first-letter:leading-[0.8] first-letter:font-bold first-letter:text-[#7a1a1a] text-lg leading-relaxed text-[#3a2f22] md:columns-2 md:gap-8">
            Drop a PDF into Ratio Reader and the fog lifts. What was a hundred
            pages becomes a single screen of essentials — summaries that hold the
            argument, hints that flag what matters, and quotes worth keeping. It
            is reading, made legible. No more drowning in margins; only the
            signal, set in plain type.
          </p>
        </motion.div>

        <motion.aside
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="md:col-span-4 border-l-2 border-[#1a140d] pl-6"
        >
          <p className="text-[10px] uppercase tracking-[0.3em] mb-3">In this issue</p>
          <ul className="space-y-2 text-sm">
            <li className="flex justify-between border-b border-dashed border-[#1a140d]/30 pb-1">
              <span>The Summary Engine</span>
              <span className="text-[#7a1a1a]">A1</span>
            </li>
            <li className="flex justify-between border-b border-dashed border-[#1a140d]/30 pb-1">
              <span>Hints &amp; Marginalia</span>
              <span className="text-[#7a1a1a]">A3</span>
            </li>
            <li className="flex justify-between border-b border-dashed border-[#1a140d]/30 pb-1">
              <span>Quotes Worth Keeping</span>
              <span className="text-[#7a1a1a]">A5</span>
            </li>
            <li className="flex justify-between">
              <span>How to Begin</span>
              <span className="text-[#7a1a1a]">A7</span>
            </li>
          </ul>
          <button className="mt-6 w-full bg-[#1a140d] text-[#f1e9d8] py-3 text-sm uppercase tracking-[0.25em] hover:bg-[#7a1a1a] transition-colors">
            Upload a PDF →
          </button>
        </motion.aside>
      </section>

      <div className="px-6 md:px-12">
        <div className="border-t-[3px] border-double border-[#1a140d]" />
      </div>

      {/* Three columns of features */}
      <section className="px-6 md:px-12 py-12 grid md:grid-cols-3 gap-10">
        {[
          {
            k: "§ I",
            t: "Summaries that hold the argument",
            b: "Not a hollow abstract. Ratio Reader preserves the spine of the reasoning, so you leave with the why, not just the what.",
          },
          {
            k: "§ II",
            t: "Hints where the weight is",
            b: "Soft marginalia flags the load-bearing sentences, the definitions, the turning points. Read with a guide, not alone.",
          },
          {
            k: "§ III",
            t: "Quotes worth keeping",
            b: "The lines that earn a place in your notes are pulled forward, typeset, and ready to carry elsewhere.",
          },
        ].map((f, i) => (
          <motion.article
            key={f.k}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
          >
            <p className="text-[#7a1a1a] text-sm italic mb-2">{f.k}</p>
            <h3 className="text-2xl mb-3" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }}>
              {f.t}
            </h3>
            <p className="text-[#3a2f22] leading-relaxed">{f.b}</p>
          </motion.article>
        ))}
      </section>

      {/* Pull quote */}
      <section className="px-6 md:px-12 py-16 border-y border-[#1a140d]/30 bg-[#e8dec6]">
        <blockquote
          className="text-center max-w-3xl mx-auto"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          <p className="text-3xl md:text-5xl italic leading-tight">
            “I finished the chapter before the kettle boiled. I think I understood it better than the first time.”
          </p>
          <footer className="mt-6 text-xs uppercase tracking-[0.3em] text-[#7a1a1a]">
            — A reader, formerly behind
          </footer>
        </blockquote>
      </section>

      {/* How it works */}
      <section className="px-6 md:px-12 py-14">
        <p className="text-[11px] uppercase tracking-[0.3em] text-[#7a1a1a] mb-2">The Method</p>
        <h2 className="text-3xl md:text-5xl mb-10" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }}>
          Three steps, set in order.
        </h2>
        <div className="grid md:grid-cols-3 gap-8 border-t border-[#1a140d]/30 pt-8">
          {[
            { n: "01", t: "Upload", b: "Any PDF — paper, chapter, report. Drag it onto the page." },
            { n: "02", t: "Distill", b: "Ratio Reader reads it through and writes you the essentials." },
            { n: "03", t: "Understand", b: "Summary, hints, and quotes — laid out like a front page." },
          ].map((s) => (
            <div key={s.n}>
              <span className="text-5xl text-[#7a1a1a] block mb-3" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 900 }}>
                {s.n}
              </span>
              <h4 className="text-xl mb-2">{s.t}</h4>
              <p className="text-[#3a2f22]">{s.b}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="px-6 md:px-12 py-8 border-t-[3px] border-double border-[#1a140d] text-[10px] uppercase tracking-[0.3em] flex flex-col md:flex-row justify-between gap-2">
        <span>© {new Date().getFullYear()} The Ratio Reader Broadsheet</span>
        <span>Printed digitally · All rights reserved</span>
        <a href="/" className="hover:text-[#7a1a1a]">← Back to all designs</a>
      </footer>
    </div>
  );
}
