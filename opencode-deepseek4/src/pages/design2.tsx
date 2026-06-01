import { useState, useEffect, useRef } from "react";
import { motion } from "motion/react";
import { ArrowRight, Upload, Zap, Eye, MessageSquare, FileText } from "lucide-react";

export function Design2() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  return (
    <div
      className="bg-black text-[#ccff00] font-['JetBrains_Mono',monospace] min-h-screen"
      onMouseMove={(e) => setMousePos({ x: e.clientX, y: e.clientY })}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,100..800;1,100..800&family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap');
        
        .glitch-text {
          text-shadow: 2px 2px 0 #ff00ff, -2px -2px 0 #00ffff;
          animation: glitch 0.3s infinite;
        }
        @keyframes glitch {
          0% { text-shadow: 2px 2px 0 #ff00ff, -2px -2px 0 #00ffff; }
          25% { text-shadow: -2px -2px 0 #ff00ff, 2px 2px 0 #00ffff; }
          50% { text-shadow: 2px -2px 0 #ff00ff, -2px 2px 0 #ffff00; }
          75% { text-shadow: -2px 2px 0 #ff00ff, 2px -2px 0 #00ffff; }
          100% { text-shadow: 2px 2px 0 #ff00ff, -2px -2px 0 #00ffff; }
        }
        .scanline::after {
          content: "";
          position: fixed;
          top: 0; left: 0; right: 0; bottom: 0;
          background: repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.15) 2px, rgba(0,0,0,0.15) 4px);
          pointer-events: none;
          z-index: 100;
        }
      `}</style>

      {/* Noise background */}
      <div className="fixed inset-0 pointer-events-none z-0" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E")`,
        backgroundSize: "256px",
      }} />

      <div className="scanline" />

      <div className="relative z-10">
        {/* Top bar */}
        <div className="border-b border-[#ccff00]/20 flex items-center justify-between px-6 py-4 text-xs tracking-widest">
          <span className="text-[#ccff00]/50">[RATIO_READER v2.6.4]</span>
          <div className="flex gap-6 text-[#ccff00]/30">
            <span>STATUS: ONLINE</span>
            <span>NODES: 3,241</span>
            <span className="text-[#ccff00]">█ UPLOAD</span>
          </div>
        </div>

        {/* Hero */}
        <section className="px-6 py-32 md:py-40 border-b border-[#ccff00]/20 relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 bottom-0" style={{
            backgroundImage: "radial-gradient(circle at 50% 50%, rgba(204,255,0,0.03) 0%, transparent 70%)",
          }} />
          <div className="max-w-5xl mx-auto relative">
            <motion.div
              initial={{ opacity: 0 }}
              animate={mounted ? { opacity: 1 } : {}}
              transition={{ duration: 0.1 }}
            >
              <div className="border border-[#ccff00]/30 p-1 inline-block mb-12">
                <div className="bg-[#ccff00]/5 px-4 py-2 text-xs">
                  &gt; CLASSIFIED::PUBLIC
                </div>
              </div>

              <h1 className="text-7xl md:text-[7rem] font-bold leading-[0.85] mb-2 tracking-tighter">
                RATIO_
              </h1>
              <h2 className="text-3xl md:text-5xl font-light text-[#ccff00]/40 mb-10 tracking-wide">
                READER.exe
              </h2>

              <div className="border-l-2 border-[#ccff00] pl-6 mb-12 max-w-xl">
                <p className="text-[#ccff00]/60 text-base leading-relaxed font-['Space_Mono',monospace]">
                  /* revolutionary document comprehension engine.
                     upload PDF → receive structured knowledge. no
                     fluff. no filler. just signal. */
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <button className="bg-[#ccff00] text-black px-8 py-4 font-bold text-sm tracking-widest hover:bg-[#ddff33] transition-colors flex items-center gap-2">
                  <Upload className="w-4 h-4" />
                  INIT_UPLOAD
                </button>
                <button className="border border-[#ccff00]/30 text-[#ccff00]/70 px-8 py-4 text-sm tracking-widest hover:border-[#ccff00] hover:text-[#ccff00] transition-all">
                  VIEW_SPECS →
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Stats bar */}
        <div className="border-b border-[#ccff00]/20 px-6 py-4 font-['Space_Mono',monospace] text-xs text-[#ccff00]/40 overflow-hidden">
          <div className="flex gap-12 whitespace-nowrap">
            <span>DOCUMENTS_PROCESSED: 2,847,391</span>
            <span>AVG_PROCESS_TIME: 3.2s</span>
            <span>ACCURACY: 99.7%</span>
            <span>UPTIME: 364d 12h</span>
          </div>
        </div>

        {/* Features grid - brutal */}
        <section className="px-6 py-32">
          <div className="max-w-5xl mx-auto">
            <div className="border border-[#ccff00]/20 mb-2 p-4">
              <h3 className="text-xs tracking-[0.5em] text-[#ccff00]/40 mb-16">FEATURES_MANIFEST</h3>
              <div className="grid md:grid-cols-2">
                {[
                  { icon: <FileText className="w-8 h-8" />, title: "STRUCTURAL_PARSE", desc: "Decomposes any PDF into its logical components. Chapters, sections, arguments, evidence — mapped and indexed." },
                  { icon: <Zap className="w-8 h-8" />, title: "SUMMARY_ENGINE", desc: "Generates hierarchical summaries at multiple depths. Skim the gist or dive into detailed synthesis." },
                  { icon: <Eye className="w-8 h-8" />, title: "INSIGHT_MINER", desc: "Identifies patterns, contradictions, and hidden connections across the document that human readers miss." },
                  { icon: <MessageSquare className="w-8 h-8" />, title: "HINT_SYSTEM", desc: "Contextual nudges that guide understanding without giving away answers. Learn, don't just consume." },
                ].map((f, i) => (
                  <motion.div
                    key={i}
                    className="border border-[#ccff00]/20 p-8 hover:bg-[#ccff00]/5 transition-colors"
                    initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <div className="text-[#ccff00] mb-6">{f.icon}</div>
                    <h3 className="text-base font-bold mb-4">{f.title}</h3>
                    <p className="text-[#ccff00]/40 font-['Space_Mono',monospace] text-sm leading-relaxed">{f.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* How it works - terminal style */}
        <section className="px-6 py-32 border-t border-[#ccff00]/20">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-3 mb-16">
              <div className="w-3 h-3 rounded-full bg-[#ccff00]" />
              <h3 className="text-xs tracking-[0.5em] text-[#ccff00]/40">PROCESS_PIPELINE</h3>
            </div>

            <div className="space-y-1 font-['Space_Mono',monospace]">
              {[
                { cmd: "INPUT", out: "user uploads PDF document → system validates format & integrity" },
                { cmd: "PARSE", out: "engine extracts text, structure, metadata, and visual elements from document" },
                { cmd: "ANALYZE", out: "NLP pipeline identifies key arguments, supporting evidence, and rhetorical patterns" },
                { cmd: "SYNTHESIZE", out: "cross-referencing engine connects themes and generates multi-level insights" },
                { cmd: "OUTPUT", out: "structured report with summaries, quotes, hints, and context delivered to user" },
              ].map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12 }}
                  className="flex gap-6 p-5 border border-[#ccff00]/10 hover:border-[#ccff00]/30 transition-colors"
                >
                  <span className="text-[#ccff00] font-bold w-20 flex-shrink-0 text-sm">[{step.cmd}]</span>
                  <span className="text-[#ccff00]/40 text-sm">{step.out}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Quotes block */}
        <section className="px-6 py-32 bg-[#ccff00]/5 border-t border-[#ccff00]/20">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-3 gap-1">
              {[
                { quote: "Ratio doesn't summarize. It illuminates.", author: "— TECHCRUNCH" },
                { quote: "Like having a PhD tutor who has already read the document.", author: "— THE VERGE" },
                { quote: "Finally, a tool that respects the reader's intelligence.", author: "— WIRED" },
              ].map((t, i) => (
                <motion.div
                  key={i}
                  className="border border-[#ccff00]/20 p-8"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                >
                  <div className="text-4xl font-bold text-[#ccff00]/20 mb-4">"</div>
                  <p className="text-[#ccff00]/70 text-lg leading-relaxed mb-6">{t.quote}</p>
                  <span className="text-[#ccff00]/30 text-xs tracking-widest">{t.author}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-6 py-40 text-center relative overflow-hidden">
          <div className="absolute inset-0" style={{
            backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 40px, rgba(204,255,0,0.03) 40px, rgba(204,255,0,0.03) 41px)",
          }} />
          <div className="max-w-2xl mx-auto relative">
            <h2 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
              STOP READING.<br />
              <span className="text-[#ccff00]/40">START UNDERSTANDING.</span>
            </h2>
            <p className="text-[#ccff00]/40 font-['Space_Mono',monospace] text-sm mb-12">
              {">"} ratio_reader --upload your_document.pdf --mode deep
            </p>
            <button className="bg-[#ccff00] text-black px-12 py-5 font-bold text-base tracking-widest hover:bg-[#ddff33] transition-colors flex items-center gap-2 mx-auto">
              DEPLOY_NOW
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </section>

        <footer className="border-t border-[#ccff00]/20 px-6 py-8 text-xs text-[#ccff00]/20 tracking-widest flex justify-between font-['Space_Mono',monospace]">
          <span>[RATIO_READER] @2026</span>
          <span>_sys/build_3a71f2</span>
          <span className="hidden md:block">NO_DATA_RETAINED</span>
        </footer>
      </div>
    </div>
  );
}
