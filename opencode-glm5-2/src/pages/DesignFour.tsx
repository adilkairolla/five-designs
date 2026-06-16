import { motion } from "motion/react";

export function DesignFour() {
  return (
    <div
      className="min-h-screen bg-[#0a1208] text-[#7df05a] relative overflow-hidden"
      style={{ fontFamily: "'VT323', monospace" }}
    >
      {/* CRT scanlines + vignette */}
      <div
        className="pointer-events-none fixed inset-0 z-50"
        style={{
          background:
            "repeating-linear-gradient(to bottom, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 2px, rgba(0,0,0,0.18) 3px, rgba(0,0,0,0) 4px)",
        }}
      />
      <div
        className="pointer-events-none fixed inset-0 z-50"
        style={{ boxShadow: "inset 0 0 200px 40px rgba(0,0,0,0.8)" }}
      />
      {/* Moving scan beam */}
      <div
        className="pointer-events-none fixed left-0 right-0 h-24 z-40 opacity-20"
        style={{
          background: "linear-gradient(to bottom, transparent, rgba(125,240,90,0.4), transparent)",
          animation: "scan 6s linear infinite",
        }}
      />

      <div className="relative p-4 md:p-8 text-lg md:text-xl leading-relaxed">
        {/* Boot line */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-[#4a8a3a] text-sm"
        >
          <p>RATIO-READER v1.85 (c) 1985 SIGNAL SYSTEMS, INC.</p>
          <p>BOOT OK... MEMORY 64K... READY.</p>
          <p className="mt-2">----------------------------------------</p>
        </motion.div>

        {/* Prompt + hero */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-4"
        >
          <p className="text-[#d6f5b0]">&gt; RUN RATIO</p>
          <h1 className="mt-4 text-4xl md:text-7xl leading-none text-[#d6f5b0]" style={{ textShadow: "0 0 12px rgba(125,240,90,0.6)" }}>
            RATIO READER
            <span className="blink">_</span>
          </h1>
          <p className="mt-4 max-w-2xl">
            &gt; A TOOL THAT READS YOUR PDF AND GIVES BACK THE POINT.
            <br />
            &gt; SUMMARY. HINTS. QUOTES. NO FLUFF.
          </p>
          <p className="mt-2 text-[#4a8a3a]">&gt; PRESS [UPLOAD] TO BEGIN...</p>
          <button className="mt-4 border border-[#7df05a] px-4 py-1 hover:bg-[#7df05a] hover:text-[#0a1208] transition-colors">
            [ UPLOAD PDF.EXE ]
          </button>
        </motion.div>

        {/* ASCII box features */}
        <section className="mt-10">
          <p>&gt; LIST FEATURES</p>
          <div className="grid md:grid-cols-3 gap-4 mt-4">
            {[
              {
                t: "SUMMARY",
                b: "THE ARGUMENT, CONDENSED. NOT A HOLLOW ABSTRACT — THE ACTUAL SPINE.",
              },
              {
                t: "HINTS",
                b: "FLAGS THE LOAD-BEARING LINES, THE DEFINITIONS, THE TURNING POINTS.",
              },
              {
                t: "QUOTES",
                b: "THE SENTENCES WORTH KEEPING, PULLED FORWARD AND READY TO COPY.",
              },
            ].map((f, i) => (
              <motion.div
                key={f.t}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="border border-[#4a8a3a] p-4"
              >
                <p className="text-[#d6f5b0] text-2xl">┌─ {f.t} ─┐</p>
                <p className="mt-2 text-[#9fd87a]">{f.b}</p>
                <p className="mt-2 text-[#4a8a3a] text-sm">&gt; STATUS: ONLINE</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Process log */}
        <section className="mt-10">
          <p>&gt; TRACE PROCESS</p>
          <div className="mt-4 border border-[#4a8a3a] p-4 bg-[#0a1208]/60">
            <p><span className="text-[#4a8a3a]">[01]</span> ACCEPT INPUT..... PDF RECEIVED. OK.</p>
            <p><span className="text-[#4a8a3a]">[02]</span> PARSE DOC........ 42 PAGES. 18,304 WORDS.</p>
            <p><span className="text-[#4a8a3a]">[03]</span> RANK SENTENCES... SIGNAL/NOISE = 0.11. ADJUSTING.</p>
            <p><span className="text-[#4a8a3a]">[04]</span> WRITE SUMMARY..... DONE. 1 SCREEN.</p>
            <p><span className="text-[#4a8a3a]">[05]</span> EXTRACT QUOTES.... 7 FOUND. 3 KEPT.</p>
            <p className="text-[#d6f5b0] mt-1">&gt; OUTPUT READY. ELAPSED: 3.2 SEC.</p>
          </div>
        </section>

        {/* Stats */}
        <section className="mt-10">
          <p>&gt; STATISTICS</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
            {[
              { n: "10×", l: "FASTER READ" },
              { n: "3.2s", l: "AVG PROCESS" },
              { n: "0.11", l: "SIGNAL RATIO IN" },
              { n: "1.00", l: "SIGNAL RATIO OUT" },
            ].map((s) => (
              <div key={s.l} className="border border-[#4a8a3a] p-3">
                <div className="text-3xl md:text-5xl text-[#d6f5b0]">{s.n}</div>
                <div className="text-[#4a8a3a] text-sm mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Pull quote */}
        <section className="mt-10 border-l-2 border-[#7df05a] pl-4">
          <p className="text-2xl md:text-4xl text-[#d6f5b0]">
            &gt; "IT READ THE 40-PAGE REPORT AND HANDED ME THE ONE PARAGRAPH THAT MATTERED."
          </p>
          <p className="mt-2 text-[#4a8a3a]">&gt; — USER LOG, 03:14 AM</p>
        </section>

        {/* CTA */}
        <section className="mt-10">
          <p>&gt; READY?</p>
          <div className="mt-4 flex flex-col md:flex-row gap-4 items-start">
            <button className="border-2 border-[#7df05a] bg-[#7df05a] text-[#0a1208] px-8 py-2 text-2xl hover:bg-transparent hover:text-[#7df05a] transition-colors">
              &gt; UPLOAD PDF.EXE
            </button>
            <span className="text-[#4a8a3a] mt-2">&gt; NO LOGIN. NO SIGNUP. JUST DROP THE FILE.</span>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-12 pt-4 border-t border-[#4a8a3a] text-[#4a8a3a] text-sm flex flex-col md:flex-row justify-between gap-2">
          <span>RATIO-READER v1.85 · SIGNAL SYSTEMS</span>
          <span>EOF</span>
          <a href="/" className="hover:text-[#7df05a]">&gt; CD /INDEX</a>
        </footer>
      </div>
    </div>
  );
}
