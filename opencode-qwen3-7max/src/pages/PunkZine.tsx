import { DesignSwitcher } from "@/components/DesignSwitcher";
import { motion } from "motion/react";

function XeroxGrain() {
  return (
    <div className="absolute inset-0 pointer-events-none z-30 opacity-[0.04] mix-blend-overlay" style={{
      backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
    }} />
  );
}

function TornEdge({ side = "bottom", color = "#fff" }: { side?: string; color?: string }) {
  return (
    <svg className={`absolute ${side === "bottom" ? "bottom-0" : "top-0"} left-0 w-full h-6 pointer-events-none`} viewBox="0 0 1200 24" preserveAspectRatio="none" style={{ transform: side === "top" ? "rotate(180deg)" : undefined }}>
      <path d="M0,12 Q30,0 60,15 T120,8 T180,18 T240,5 T300,14 T360,2 T420,16 T480,7 T540,19 T600,4 T660,17 T720,6 T780,15 T840,3 T900,18 T960,8 T1020,14 T1080,10 T1140,16 T1200,12 L1200,24 L0,24 Z" fill={color} />
    </svg>
  );
}

function StampText({ children, className = "", style }: { children: React.ReactNode; className?: string; style?: React.CSSProperties }) {
  return (
    <span className={`${className}`} style={{
      textShadow: "2px 2px 0 rgba(0,0,0,0.8), -1px -1px 0 rgba(0,0,0,0.5)",
      letterSpacing: "-0.02em",
      ...style,
    }}>
      {children}
    </span>
  );
}

export function PunkZine() {
  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      <XeroxGrain />
      <DesignSwitcher />

      <div className="absolute inset-0 pointer-events-none" style={{
        background: "repeating-linear-gradient(90deg, rgba(255,0,128,0.03) 0px, transparent 2px, transparent 4px)",
      }} />

      <div className="absolute inset-0 pointer-events-none opacity-[0.06]" style={{
        backgroundImage: "linear-gradient(rgba(255,0,128,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,255,0.1) 1px, transparent 1px)",
        backgroundSize: "80px 80px",
      }} />

      <section className="relative z-10 px-4 md:px-8 pt-16 pb-24 overflow-hidden">
        <div className="absolute top-8 right-4 md:right-8" style={{ transform: "rotate(4deg)" }}>
          <div className="border-4 border-[#ff0080] px-4 py-2 text-[#ff0080] font-bold text-sm md:text-base" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
            ISSUE #001 — FREE
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <div className="relative inline-block" style={{ transform: "rotate(-2deg)" }}>
            <h1 className="text-7xl md:text-[10rem] font-black leading-[0.75] tracking-[-0.04em]" style={{ fontFamily: "'Archivo Black', sans-serif" }}>
              <StampText className="text-white">
                READ
              </StampText>
              <br />
              <StampText className="text-[#ff0080]" style={{ WebkitTextStroke: "2px #ff0080", color: "transparent" }}>
                LESS
              </StampText>
            </h1>
          </div>

          <div className="relative mt-8 md:mt-12 ml-4 md:ml-16" style={{ transform: "rotate(1deg)" }}>
            <div className="inline-block bg-[#00ffff] text-black px-6 py-3 text-2xl md:text-4xl font-black" style={{ fontFamily: "'Archivo Black', sans-serif" }}>
              UNDERSTAND MORE
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-12 ml-2 md:ml-8 max-w-xl"
            style={{ transform: "rotate(-0.5deg)" }}
          >
            <p className="text-lg md:text-xl leading-relaxed" style={{ fontFamily: "'Bricolage Grotesque', sans-serif", color: "#ddd" }}>
              Upload a PDF. Ratio rips out the noise and hands you the{" "}
              <span className="bg-[#ff0080] text-white px-1 font-bold">good stuff</span>.
              {" "}<span className="text-[#00ffff]">That's it.</span> That's the product.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-10 ml-2 md:ml-8"
            style={{ transform: "rotate(-1deg)" }}
          >
            <button
              className="relative inline-block bg-[#ff0080] text-white px-10 py-5 text-2xl md:text-3xl font-black border-b-[6px] border-r-[6px] border-[#ff0080]/50 hover:translate-x-1 hover:translate-y-1 hover:border-b-[4px] hover:border-r-[4px] transition-all"
              style={{ fontFamily: "'Archivo Black', sans-serif" }}
            >
              → TRY IT. NOW.
            </button>
            <div className="mt-3 text-sm text-[#00ffff]" style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.1em" }}>
              (FREE. NO SIGNUP. WE'RE NOT EVIL.)
            </div>
          </motion.div>
        </motion.div>

        <div className="absolute -bottom-4 -left-8 w-48 h-48 bg-[#ff0080] rounded-full opacity-20 blur-3xl pointer-events-none" />
        <div className="absolute top-1/3 -right-20 w-64 h-64 bg-[#00ffff] rounded-full opacity-10 blur-3xl pointer-events-none" />
      </section>

      <section className="relative z-10 bg-white text-black py-16 md:py-24" style={{ transform: "rotate(-0.5deg)", marginTop: "-2rem", marginBottom: "-2rem" }}>
        <TornEdge side="top" color="#000" />
        <TornEdge side="bottom" color="#000" />

        <div className="max-w-6xl mx-auto px-4 md:px-8 relative">
          <div className="absolute top-4 right-4 md:right-0 text-[#ff0080] font-black text-xs md:text-sm" style={{ fontFamily: "'Bebas Neue', sans-serif", transform: "rotate(3deg)", letterSpacing: "0.2em" }}>
            ★ WHAT YOU GET ★
          </div>

          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-5xl md:text-8xl font-black leading-[0.85] mb-12"
            style={{ fontFamily: "'Archivo Black', sans-serif" }}
          >
            THE<br />
            <span className="text-[#ff0080]">FEATURES</span>
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                num: "01",
                title: "SUMMARIES\nTHAT DON'T\nSUCK",
                desc: "Not 'the author discusses X.' Actual insights. The stuff that makes you go 'ohhh.'",
                accent: "#ff0080",
                rotate: -2,
              },
              {
                num: "02",
                title: "QUOTES\nWORTH\nSTEALING",
                desc: "The sentences you'd highlight if you weren't too busy. We found them for you.",
                accent: "#00ffff",
                rotate: 1,
              },
              {
                num: "03",
                title: "HINTS\nTHAT MAKE\nYOU SMART",
                desc: "Context, connections, background. Stuff they don't teach in the PDF. We do.",
                accent: "#ff0080",
                rotate: -1,
              },
            ].map((item, i) => (
              <motion.div
                key={item.num}
                initial={{ opacity: 0, y: 40, rotate: 0 }}
                whileInView={{ opacity: 1, y: 0, rotate: item.rotate }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="relative bg-black text-white p-6 md:p-8"
              >
                <div className="absolute -top-3 -left-3 w-12 h-12 flex items-center justify-center text-xl font-black" style={{ background: item.accent, fontFamily: "'Archivo Black', sans-serif", color: "#000" }}>
                  {item.num}
                </div>
                <h3 className="text-xl md:text-2xl font-black mb-4 whitespace-pre-line" style={{ fontFamily: "'Archivo Black', sans-serif", lineHeight: "1.1" }}>
                  {item.title}
                </h3>
                <p className="text-sm md:text-base leading-relaxed" style={{ fontFamily: "'Bricolage Grotesque', sans-serif", color: "#bbb" }}>
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 py-20 md:py-32 px-4 md:px-8 overflow-hidden">
        <div className="max-w-6xl mx-auto relative">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -top-4 -left-4 md:-left-8 text-[#00ffff] font-black text-[8rem] md:text-[14rem] leading-none opacity-10 pointer-events-none" style={{ fontFamily: "'Archivo Black', sans-serif" }}>
              "
            </div>

            <blockquote className="relative z-10 ml-4 md:ml-16 max-w-4xl">
              <p className="text-2xl md:text-5xl font-black leading-tight" style={{ fontFamily: "'Archivo Black', sans-serif" }}>
                I used to spend
                <span className="text-[#ff0080]"> 3 hours </span>
                on a research paper.
                <br />
                Now it takes
                <span className="text-[#00ffff]"> 15 minutes.</span>
                <br />
                <span style={{ WebkitTextStroke: "2px white", color: "transparent" }}>
                  I am unwell.
                </span>
              </p>
              <div className="mt-6 text-[#00ffff] text-lg" style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.15em" }}>
                — SATISFIED USER (PARAPHRASED, PROBABLY)
              </div>
            </blockquote>
          </motion.div>

          <div className="mt-16 ml-4 md:ml-16 flex flex-wrap gap-3">
            {["RESEARCH PAPERS", "ESSAYS", "REPORTS", "BOOKS", "MANUALS", "THESIS", "ARTICLES", "DOCS THAT SCARE YOU"].map((tag, i) => (
              <motion.span
                key={tag}
                initial={{ opacity: 0, scale: 0.8, rotate: (i % 2 === 0 ? -3 : 3) }}
                whileInView={{ opacity: 1, scale: 1, rotate: (i % 2 === 0 ? -3 : 3) }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="px-4 py-2 text-sm md:text-base font-bold border-2"
                style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  letterSpacing: "0.1em",
                  borderColor: i % 2 === 0 ? "#ff0080" : "#00ffff",
                  color: i % 2 === 0 ? "#ff0080" : "#00ffff",
                  transform: `rotate(${i % 2 === 0 ? -3 : 3}deg)`,
                }}
              >
                {tag}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 bg-[#ff0080] text-white py-16 md:py-24" style={{ transform: "rotate(0.5deg)", marginTop: "-2rem", marginBottom: "-2rem" }}>
        <TornEdge side="top" color="#000" />
        <TornEdge side="bottom" color="#000" />

        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-9xl font-black leading-[0.8] text-center"
            style={{ fontFamily: "'Archivo Black', sans-serif" }}
          >
            HOW<br />
            IT<br />
            <span className="text-black">WORKS</span>
          </motion.h2>

          <div className="mt-12 grid md:grid-cols-3 gap-8 text-center">
            {[
              { step: "1", title: "UPLOAD", desc: "Drop your PDF. Any size. We don't judge." },
              { step: "2", title: "WAIT", desc: "~30 seconds. Go grab a snack. We got this." },
              { step: "3", title: "READ", desc: "The good stuff, distilled. You're welcome." },
            ].map((item, i) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
              >
                <div className="text-7xl md:text-8xl font-black mb-2 text-black" style={{ fontFamily: "'Archivo Black', sans-serif" }}>
                  {item.step}
                </div>
                <div className="text-2xl font-black mb-2" style={{ fontFamily: "'Archivo Black', sans-serif" }}>
                  {item.title}
                </div>
                <p className="text-base" style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}>
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 py-24 md:py-32 px-4 md:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-5xl md:text-[8rem] font-black leading-[0.8] mb-8" style={{ fontFamily: "'Archivo Black', sans-serif" }}>
            STOP
            <br />
            <span style={{ WebkitTextStroke: "3px #ff0080", color: "transparent" }}>
              SCROLLING
            </span>
            <br />
            <span className="text-[#00ffff]">START</span>
            <br />
            READING
          </h2>
          <motion.button
            whileHover={{ scale: 1.05, rotate: -1 }}
            whileTap={{ scale: 0.98 }}
            className="inline-block bg-[#00ffff] text-black px-12 py-6 text-3xl md:text-4xl font-black border-b-[6px] border-r-[6px] border-[#00ffff]/50 hover:border-b-[3px] hover:border-r-[3px] transition-all"
            style={{ fontFamily: "'Archivo Black', sans-serif" }}
          >
            → UPLOAD A PDF
          </motion.button>
          <div className="mt-6 text-[#ff0080] text-xl" style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.2em" }}>
            IT'S FREE. WE MEAN IT.
          </div>
        </motion.div>
      </section>

      <footer className="relative z-10 py-6 text-center">
        <div className="text-xs md:text-sm text-white/30" style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.3em" }}>
          RATIO READER — PRINTED WITH TONER AND SPITE
        </div>
      </footer>
    </div>
  );
}
