import { motion } from "framer-motion";
import { FileText, Sparkles, BookOpen, Quote, ArrowRight, Upload, Scan, Cpu, Radio } from "lucide-react";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { delay, duration: 0.6 },
});

export function Design5() {
  return (
    <div className="min-h-screen bg-[#08080E] text-[#E0E0E0] selection:bg-[#00F0FF]/30 selection:text-[#00F0FF] overflow-x-hidden">
                <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700;800;900&family=JetBrains+Mono:wght@300;400;500;600;700&display=swap');
        .font-display { font-family: 'Orbitron', sans-serif; }
        .font-mono { font-family: 'JetBrains Mono', monospace; }
        .neon-cyan { text-shadow: 0 0 10px rgba(0,240,255,0.5), 0 0 40px rgba(0,240,255,0.2); }
        .neon-magenta { text-shadow: 0 0 10px rgba(255,0,255,0.5), 0 0 40px rgba(255,0,255,0.2); }
        .neon-box-cyan { box-shadow: 0 0 15px rgba(0,240,255,0.15), inset 0 0 15px rgba(0,240,255,0.05); border: 1px solid rgba(0,240,255,0.3); }
        .neon-box-magenta { box-shadow: 0 0 15px rgba(255,0,255,0.15), inset 0 0 15px rgba(255,0,255,0.05); border: 1px solid rgba(255,0,255,0.3); }
        .scanline {
          background: repeating-linear-gradient(
            0deg,
            transparent,
            transparent 2px,
            rgba(0,240,255,0.015) 2px,
            rgba(0,240,255,0.015) 4px
          );
        }
        .glow-line {
          background: linear-gradient(90deg, transparent, rgba(0,240,255,0.5), transparent);
          height: 1px;
        }
        .glow-line-magenta {
          background: linear-gradient(90deg, transparent, rgba(255,0,255,0.5), transparent);
          height: 1px;
        }
        .grid-cyber {
          background-image:
            linear-gradient(rgba(0,240,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,240,255,0.03) 1px, transparent 1px);
          background-size: 60px 60px;
        }
        .pulse-glow { animation: pulseGlow 2s ease-in-out infinite; }
        @keyframes pulseGlow { 0%, 100% { opacity: 0.5; } 50% { opacity: 1; } }
        .typing-bar { animation: blink 1s step-end infinite; }
        @keyframes blink { 50% { opacity: 0; } }
        .data-stream {
          background: linear-gradient(180deg, transparent 0%, rgba(0,240,255,0.02) 50%, transparent 100%);
          animation: dataStream 8s linear infinite;
        }
        @keyframes dataStream { 0% { transform: translateY(-100%); } 100% { transform: translateY(100%); } ` }} />

      {/* Scanline overlay */}
      <div className="fixed inset-0 scanline pointer-events-none z-50" />
      <div className="grid-cyber fixed inset-0 pointer-events-none" />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-[#08080E]/80 backdrop-blur-md border-b border-[#00F0FF]/10">
        <div className="max-w-[1300px] mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 neon-box-cyan flex items-center justify-center">
              <span className="text-[#00F0FF] font-display font-black text-sm">R</span>
            </div>
            <div>
              <span className="font-display text-sm font-bold tracking-[0.2em] text-[#00F0FF]">RATIO</span>
              <span className="font-display text-sm font-bold tracking-[0.2em] text-[#FF00FF] ml-1">READER</span>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-10">
            {["Features", "Process", "Pricing"].map((link) => (
              <a key={link} href="#" className="font-mono text-[11px] text-white/30 hover:text-[#00F0FF] transition-colors tracking-[0.15em] uppercase">
                [{link}]
              </a>
            ))}
          </div>
          <button className="font-mono text-[11px] font-semibold tracking-wider px-5 py-2.5 neon-box-cyan text-[#00F0FF] hover:bg-[#00F0FF]/10 transition-colors">
            CONNECT_→
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative pt-32 pb-20 px-6">
        <div className="max-w-[1300px] mx-auto">
          {/* Status bar */}
          <motion.div {...fadeUp(0.1)} className="flex items-center gap-4 mb-16">
            <div className="flex items-center gap-2">
              <Radio size={12} className="text-[#00F0FF] pulse-glow" />
              <span className="font-mono text-[10px] text-[#00F0FF]/70 tracking-widest">SYSTEM ONLINE</span>
            </div>
            <div className="glow-line flex-1 max-w-xs" />
            <span className="font-mono text-[10px] text-white/20">v3.7.2</span>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-7">
              <motion.span {...fadeUp(0.2)} className="font-mono text-[11px] text-[#FF00FF] tracking-[0.3em] block mb-6">
                // INTELLIGENT DOCUMENT PROCESSING
              </motion.span>
              <motion.h1
                {...fadeUp(0.3)}
                className="font-display text-[clamp(2.5rem,6vw,6rem)] font-black leading-[1.05] tracking-tight mb-6"
              >
                <span className="text-white">UPLOAD.</span><br />
                <span className="text-[#00F0FF] neon-cyan">ANALYZE.</span><br />
                <span className="text-[#FF00FF] neon-magenta">UNDERSTAND.</span>
              </motion.h1>
              <motion.p
                {...fadeUp(0.4)}
                className="font-mono text-sm text-white/30 max-w-md leading-relaxed mb-10"
              >
                {">"} Upload any PDF and extract summaries, key quotes, and AI-powered insights in seconds. Dense data, decoded.
              </motion.p>
              <motion.div {...fadeUp(0.5)} className="flex items-center gap-6 flex-wrap">
                <button className="font-mono text-[12px] font-semibold tracking-wider px-8 py-4 bg-[#00F0FF]/10 neon-box-cyan text-[#00F0FF] hover:bg-[#00F0FF]/20 transition-all flex items-center gap-3 group">
                  <Upload size={16} />
                  UPLOAD_PDF
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="font-mono text-[11px] text-white/30 hover:text-[#FF00FF] transition-colors tracking-wider">[VIEW_DEMO] →</button>
              </motion.div>
            </div>

            {/* Terminal visual */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="lg:col-span-5"
            >
              <div className="relative">
                <div className="bg-[#0A0A14] border border-[#00F0FF]/20 p-6 relative overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00F0FF]/50 to-transparent" />
                  {/* Data stream effect */}
                  <div className="absolute inset-0 data-stream pointer-events-none" />

                  <div className="flex items-center gap-2 mb-6">
                    <div className="w-2 h-2 rounded-full bg-[#00F0FF] pulse-glow" />
                    <div className="w-2 h-2 rounded-full bg-[#FF00FF]/50" />
                    <div className="w-2 h-2 rounded-full bg-white/10" />
                    <span className="font-mono text-[9px] text-white/20 ml-4 tracking-widest">ratio_engine.exe</span>
                  </div>

                  <div className="space-y-4 font-mono text-[11px] relative">
                    <div className="flex items-start gap-2">
                      <span className="text-[#00F0FF]">{">"}_</span>
                      <span className="text-white/40">Analyzing document structure...</span>
                      <span className="text-[#00F0FF] typing-bar">█</span>
                    </div>
                    <div className="pl-4 border-l border-[#00F0FF]/20 space-y-3 ml-1">
                      <div className="flex items-center gap-2">
                        <span className="text-[#FF00FF]">[SUMMARY]</span>
                        <span className="text-white/30">Core thesis identified — 847 words</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-[#FF00FF]">[QUOTES]</span>
                        <span className="text-white/30">12 key passages extracted</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-[#FF00FF]">[INSIGHTS]</span>
                        <span className="text-white/30">3 cross-references detected</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-[#FF00FF]">[THEMES]</span>
                        <span className="text-white/30">Behavioral patterns, decision frameworks</span>
                      </div>
                    </div>
                    <div className="glow-line-magenta my-3" />
                    <div className="flex items-center gap-2">
                      <span className="text-[#00F0FF]">{">"}_</span>
                      <span className="text-[#00F0FF]/70">Analysis complete. 2.4s elapsed.</span>
                    </div>
                  </div>

                  <div className="mt-4 flex items-center gap-3">
                    <Scan size={12} className="text-[#00F0FF]/40" />
                    <div className="flex-1 h-1 bg-white/[0.03] rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "100%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 2, delay: 0.5 }}
                        className="h-full bg-gradient-to-r from-[#00F0FF] to-[#FF00FF] rounded-full"
                      />
                    </div>
                    <span className="font-mono text-[9px] text-[#00F0FF]/50">100%</span>
                  </div>
                </div>
                {/* Corner accents */}
                <div className="absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 border-[#00F0FF]/50" />
                <div className="absolute -top-1 -right-1 w-4 h-4 border-t-2 border-r-2 border-[#00F0FF]/50" />
                <div className="absolute -bottom-1 -left-1 w-4 h-4 border-b-2 border-l-2 border-[#FF00FF]/50" />
                <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2 border-[#FF00FF]/50" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Glow divider */}
      <div className="glow-line mx-auto max-w-[1300px]" />

      {/* Features */}
      <section className="py-24 px-6">
        <div className="max-w-[1300px] mx-auto">
          <div className="mb-20">
            <motion.span {...fadeUp()} className="font-mono text-[11px] text-[#FF00FF] tracking-[0.3em] block mb-4">
              // CORE_MODULES
            </motion.span>
            <motion.h2 {...fadeUp(0.1)} className="font-display text-4xl md:text-5xl font-black tracking-tight">
              Built for <span className="text-[#00F0FF] neon-cyan">speed.</span>
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { icon: FileText, title: "Smart Summaries", desc: "Neural distillation engine condenses any document into its essential information. Signal, not noise.", id: "MOD_01", color: "cyan" },
              { icon: Quote, title: "Quote Extraction", desc: "Precision-targets the most impactful passages. Every quote ranked by contextual significance.", id: "MOD_02", color: "magenta" },
              { icon: Sparkles, title: "AI Insights", desc: "Discovers connections and patterns invisible to the unaugmented reader. See what others miss.", id: "MOD_03", color: "cyan" },
              { icon: Scan, title: "Structure Scanner", desc: "Maps document architecture — themes, arguments, evidence chains — in real-time.", id: "MOD_04", color: "magenta" },
              { icon: Cpu, title: "Processing Core", desc: "Multi-threaded analysis pipeline. Handles 500+ page documents in under 5 seconds.", id: "MOD_05", color: "cyan" },
              { icon: BookOpen, title: "Deep Context", desc: "Understands relationships across chapters, sections, and referenced materials.", id: "MOD_06", color: "magenta" },
            ].map((f, i) => (
              <motion.div
                key={f.title}
                {...fadeUp(i * 0.1)}
                className={`bg-[#0A0A14] p-8 group hover:bg-[#0D0A1A] transition-all duration-300 cursor-default ${f.color === "cyan" ? "border border-[#00F0FF]/15 hover:border-[#00F0FF]/30" : "border border-[#FF00FF]/15 hover:border-[#FF00FF]/30"} relative overflow-hidden`}
              >
                <div className={`absolute top-0 left-0 right-0 h-px ${f.color === "cyan" ? "bg-gradient-to-r from-transparent via-[#00F0FF]/40 to-transparent" : "bg-gradient-to-r from-transparent via-[#FF00FF]/40 to-transparent"}`} />
                <div className="flex items-center justify-between mb-6">
                  <f.icon size={20} className={f.color === "cyan" ? "text-[#00F0FF]/60" : "text-[#FF00FF]/60"} />
                  <span className="font-mono text-[9px] text-white/15 tracking-widest">{f.id}</span>
                </div>
                <h3 className={`font-display text-lg font-bold mb-3 ${f.color === "cyan" ? "text-[#00F0FF]" : "text-[#FF00FF]"}`}>{f.title}</h3>
                <p className="font-mono text-xs text-white/25 leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 px-6 relative">
        <div className="absolute inset-0 data-stream pointer-events-none opacity-30" />
        <div className="max-w-[1300px] mx-auto relative">
          <div className="mb-20">
            <span className="font-mono text-[11px] text-[#00F0FF] tracking-[0.3em] block mb-4">// EXECUTION_PIPELINE</span>
            <h2 className="font-display text-4xl md:text-5xl font-black tracking-tight">
              Three <span className="text-[#FF00FF] neon-magenta">cycles.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
            {[
              { num: "01", cmd: "UPLOAD", title: "Input", desc: "Drop your PDF. Accepts any format, any length. Encrypted transmission.", color: "#00F0FF" },
              { num: "02", cmd: "PROCESS", title: "Analyze", desc: "Neural engine reads, parses, and maps the entire document structure.", color: "#FF00FF" },
              { num: "03", cmd: "OUTPUT", title: "Extract", desc: "Summaries, quotes, insights — delivered in seconds.", color: "#00F0FF" },
            ].map((s, i) => (
              <motion.div
                key={s.num}
                {...fadeUp(i * 0.15)}
                className={`p-10 ${i > 0 ? "md:border-l border-white/5" : ""} relative`}
              >
                <div className="font-mono text-[9px] mb-2 tracking-widest" style={{ color: s.color + "60" }}>$ {s.cmd}</div>
                <div className="font-display text-5xl font-black mb-4" style={{ color: s.color + "30" }}>{s.num}</div>
                <h3 className="font-display text-xl font-bold mb-3" style={{ color: s.color }}>{s.title}</h3>
                <p className="font-mono text-xs text-white/25 leading-relaxed">{s.desc}</p>
                {i < 2 && <div className="hidden md:block absolute top-1/2 right-0 text-[#00F0FF]/30 text-lg translate-x-1/2">→</div>}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6">
        <div className="max-w-[1300px] mx-auto">
          <div className="mb-16">
            <span className="font-mono text-[11px] text-[#FF00FF] tracking-[0.3em] block mb-4">// USER_FEEDBACK</span>
            <h2 className="font-display text-4xl md:text-5xl font-black tracking-tight">
              Verified <span className="text-[#00F0FF] neon-cyan">users.</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { text: "Ratio Reader saved me 20 hours last month. The quote extraction is eerily precise.", author: "S.K.", role: "Strategy Lead — Stripe", rating: 5 },
              { text: "Like having a brilliant research assistant who's read everything and never gets tired.", author: "M.T.", role: "Founder — Tektos", rating: 5 },
              { text: "The insights feature alone is worth it. I discovered connections I would have missed entirely.", author: "L.M.", role: "Research Director", rating: 5 },
            ].map((q, i) => (
              <motion.div
                key={i}
                {...fadeUp(i * 0.1)}
                className={`bg-[#0A0A14] p-8 border border-[#00F0FF]/10 hover:border-[#00F0FF]/25 transition-colors ${i === 1 ? "!border-[#FF00FF]/10 hover:!border-[#FF00FF]/25" : ""}`}
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(q.rating)].map((_, j) => (
                    <div key={j} className="w-3 h-3 border border-[#00F0FF]/50" style={{ backgroundColor: (i === 1 ? "#FF00FF" : "#00F0FF") + "40" }} />
                  ))}
                </div>
                <p className="font-mono text-xs text-white/40 leading-relaxed mb-6">"{q.text}"</p>
                <div className="glow-line mb-4 opacity-30" />
                <p className="font-mono text-[11px] text-[#00F0FF]/70">{q.author}</p>
                <p className="font-mono text-[9px] text-white/20 mt-1">{q.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-6">
        <motion.div {...fadeUp()} className="max-w-3xl mx-auto text-center relative">
          <div className="glow-line-magenta mb-12" />
          <span className="font-mono text-[11px] text-[#00F0FF]/50 tracking-[0.4em] block mb-6">// BEGIN_SESSION</span>
          <h2 className="font-display text-5xl md:text-7xl font-black leading-[1] mb-8">
            <span className="text-white">JOIN</span>{" "}
            <span className="text-[#00F0FF] neon-cyan">THE</span>{" "}
            <span className="text-[#FF00FF] neon-magenta">GRID.</span>
          </h2>
          <p className="font-mono text-sm text-white/25 mb-12 max-w-md mx-auto">
            {">"} Upload your first PDF free. No credit card required.
          </p>
          <button className="font-mono text-[13px] font-bold tracking-wider px-12 py-5 bg-[#00F0FF]/10 neon-box-cyan text-[#00F0FF] hover:bg-[#00F0FF]/20 transition-all inline-flex items-center gap-4">
            <Upload size={18} />
            START_FOR_FREE
            <ArrowRight size={16} />
          </button>
          <div className="glow-line mt-12" />
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-white/5">
        <div className="max-w-[1300px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 neon-box-cyan flex items-center justify-center">
              <span className="text-[#00F0FF] font-display font-black text-xs">R</span>
            </div>
            <span className="font-display text-xs font-bold tracking-[0.15em] text-white/30">RATIO READER</span>
          </div>
          <p className="font-mono text-[9px] text-white/15 tracking-widest">© 2026 // ALL SYSTEMS OPERATIONAL</p>
          <div className="flex items-center gap-8">
            {["[PRIVACY]", "[TERMS]", "[CONTACT]"].map((l) => (
              <a key={l} href="#" className="font-mono text-[9px] text-white/15 hover:text-[#00F0FF] transition-colors tracking-widest">{l}</a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
