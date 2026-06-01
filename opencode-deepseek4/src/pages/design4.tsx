import { useState, useEffect, useRef, useCallback } from "react";
import { motion } from "motion/react";
import { Upload, Sparkles, Quote, Lightbulb, Zap, ArrowRight, FileText } from "lucide-react";

export function Design4() {
  const [mounted, setMounted] = useState(false);
  const [glitch, setGlitch] = useState(false);
  useEffect(() => { setMounted(true); }, []);
  useEffect(() => {
    const t = setInterval(() => {
      setGlitch(true);
      setTimeout(() => setGlitch(false), 150);
    }, 4000);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="bg-[#0d0221] text-white font-['Orbitron',sans-serif] min-h-screen overflow-x-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400..900&family=Rajdhani:wght@300;400;500;600;700&family=Righteous&display=swap');
        
        @keyframes scan {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100vh); }
        }
        .scan-line {
          position: fixed;
          top: 0; left: 0; right: 0;
          height: 4px;
          background: linear-gradient(to bottom, transparent, rgba(5,217,232,0.15), transparent);
          animation: scan 4s linear infinite;
          pointer-events: none;
          z-index: 100;
        }
        
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(255,42,109,0.3), 0 0 60px rgba(5,217,232,0.1); }
          50% { box-shadow: 0 0 40px rgba(255,42,109,0.5), 0 0 80px rgba(5,217,232,0.2); }
        }
        .pulse-glow { animation: pulse-glow 3s ease-in-out infinite; }
        
        @keyframes flicker {
          0%, 100% { opacity: 1; }
          41% { opacity: 1; }
          42% { opacity: 0.8; }
          43% { opacity: 1; }
          45% { opacity: 0.3; }
          46% { opacity: 1; }
        }
        .flicker { animation: flicker 5s linear infinite; }
        
        .grid-bg {
          background-image: 
            linear-gradient(rgba(5,217,232,0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(5,217,232,0.05) 1px, transparent 1px);
          background-size: 60px 60px;
        }
        
        .glitch-effect {
          text-shadow: 
            3px 0 0 rgba(255,42,109,0.7),
            -3px 0 0 rgba(5,217,232,0.7);
          animation: flicker 3s linear infinite;
        }
        
        @keyframes neon-border {
          0%, 100% { border-color: rgba(255,42,109,0.3); }
          50% { border-color: rgba(5,217,232,0.3); }
        }
        .neon-border { animation: neon-border 4s ease-in-out infinite; }
      `}</style>

      <div className="scan-line" />

      {/* Header */}
      <header className="relative z-20 border-b border-[#ff2a6d]/20 px-6 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className={`w-3 h-3 rounded-full bg-[#ff2a6d] ${glitch ? 'scale-150' : ''} transition-transform`} />
            <span className="font-['Righteous',cursive] text-xl tracking-wider text-[#05d9e8]">
              RATIO<span className="text-[#ff2a6d]">_</span>
            </span>
          </div>
          <div className="flex gap-6 font-['Rajdhani',sans-serif] text-sm tracking-wider text-[#05d9e8]/60">
            <a href="#" className="hover:text-[#ff2a6d] transition-colors">SYSTEM</a>
            <a href="#" className="hover:text-[#ff2a6d] transition-colors">FEATURES</a>
            <a href="#" className="hover:text-[#ff2a6d] transition-colors">CONNECT</a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative px-6 py-32 md:py-44 text-center grid-bg overflow-hidden">
        {/* Sun element */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-t-full"
          style={{
            background: "linear-gradient(to top, rgba(255,42,109,0.15) 0%, rgba(255,42,109,0.05) 40%, transparent 70%)",
            boxShadow: "0 -50px 200px rgba(255,42,109,0.1)",
          }}
        />

        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, filter: "blur(20px)" }}
            animate={mounted ? { opacity: 1, filter: "blur(0px)" } : {}}
            transition={{ duration: 1 }}
          >
            <div className="inline-block border border-[#ff2a6d]/40 px-6 py-2 mb-10 font-['Rajdhani',sans-serif] text-xs tracking-[0.4em] text-[#ff2a6d]">
              ⚡ SYSTEM ONLINE v4.2.0
            </div>

            <h1 className="text-6xl md:text-[7rem] font-['Righteous',cursive] leading-[0.9] mb-6 tracking-wide">
              <span className="text-[#05d9e8] glitch-effect">RATIO</span>
              <br />
              <span className="text-white">READER</span>
            </h1>

            <div className="w-32 h-1 mx-auto mb-10"
              style={{
                background: "linear-gradient(90deg, #ff2a6d, #05d9e8)",
                boxShadow: "0 0 20px rgba(255,42,109,0.5), 0 0 40px rgba(5,217,232,0.3)",
              }}
            />

            <p className="font-['Rajdhani',sans-serif] text-xl text-white/50 max-w-xl mx-auto mb-12 leading-relaxed">
              The neural interface for your documents. Upload PDFs and unlock summaries, hints, and insights — at the speed of thought.
            </p>

            <div className="flex justify-center gap-4 flex-wrap">
              <button className="bg-[#ff2a6d] text-white px-10 py-4 font-['Rajdhani',sans-serif] text-lg font-semibold tracking-wider hover:bg-[#ff4d82] transition-colors flex items-center gap-2 pulse-glow"
                style={{ boxShadow: "0 0 30px rgba(255,42,109,0.4)" }}>
                <Upload className="w-5 h-5" />
                UPLOAD DOCUMENT
              </button>
              <button className="border border-[#05d9e8]/40 text-[#05d9e8] px-10 py-4 font-['Rajdhani',sans-serif] text-lg tracking-wider hover:bg-[#05d9e8]/10 transition-all">
                EXPLORE SYSTEM
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats ticker */}
      <div className="border-y border-[#ff2a6d]/10 px-6 py-4 overflow-hidden">
        <div className="flex gap-16 font-['Rajdhani',sans-serif] text-sm text-[#05d9e8]/40 tracking-widest">
          <span>⬤ DOCS_PROCESSED: 5.2M+</span>
          <span>⬤ AVG_LATENCY: 1.4s</span>
          <span>⬤ INSIGHT_RATE: 99.2%</span>
          <span>⬤ NODES_ACTIVE: 12,847</span>
          <span>⬤ ENCRYPTION: AES-256</span>
        </div>
      </div>

      {/* Features */}
      <section className="px-6 py-32">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-20">
            <div className="flex-1 h-px bg-[#ff2a6d]/20" />
            <span className="font-['Rajdhani',sans-serif] text-sm tracking-[0.4em] text-[#ff2a6d]">SYSTEM CAPABILITIES</span>
            <div className="flex-1 h-px bg-[#05d9e8]/20" />
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {[
              {
                icon: <Sparkles className="w-6 h-6" />,
                title: "Instant Summarization",
                desc: "Neural processing engine distills any document into its essential atoms — key arguments, findings, and conclusions.",
                tags: ["AI-POWERED", "MULTI-LEVEL"],
              },
              {
                icon: <Quote className="w-6 h-6" />,
                title: "Smart Quote Detection",
                desc: "Automatically surfaces the most impactful passages with contextual analysis of why each quote matters.",
                tags: ["CONTEXT-AWARE", "PRIORITIZED"],
              },
              {
                icon: <Lightbulb className="w-6 h-6" />,
                title: "Guided Hints",
                desc: "Adaptive nudges that deepen comprehension without spoon-feeding answers. Build knowledge, not dependency.",
                tags: ["ADAPTIVE", "SOCRATIC"],
              },
              {
                icon: <Zap className="w-6 h-6" />,
                title: "Pattern Recognition",
                desc: "Identifies thematic patterns, argument structures, and hidden connections across your entire document.",
                tags: ["CROSS-REF", "DEEP LEARN"],
              },
            ].map((f, i) => (
              <motion.div
                key={i}
                className="border border-[#05d9e8]/10 p-8 hover:border-[#ff2a6d]/40 transition-all duration-500 group bg-[#0d0221]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="text-[#ff2a6d] mb-6 group-hover:text-[#05d9e8] transition-colors duration-500">
                  {f.icon}
                </div>
                <h3 className="font-['Rajdhani',sans-serif] text-2xl font-semibold mb-4">{f.title}</h3>
                <p className="font-['Rajdhani',sans-serif] text-white/40 text-base leading-relaxed mb-6">{f.desc}</p>
                <div className="flex gap-2">
                  {f.tags.map((tag) => (
                    <span key={tag} className="border border-[#05d9e8]/20 px-3 py-1 text-xs font-['Rajdhani',sans-serif] text-[#05d9e8]/60 tracking-wider">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process - neon pipeline */}
      <section className="px-6 py-32 relative">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="max-w-5xl mx-auto relative">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-['Righteous',cursive] tracking-wide mb-4">
              PROCESS <span className="text-[#ff2a6d]">//</span> PIPELINE
            </h2>
            <div className="w-24 h-0.5 mx-auto" style={{ background: "linear-gradient(90deg, #ff2a6d, #05d9e8)" }} />
          </div>

          <div className="space-y-6">
            {[
              { phase: "PHASE 01", title: "Document Ingestion", desc: "Advanced parser captures text structure, headings, metadata, and semantic relationships at 99.8% accuracy." },
              { phase: "PHASE 02", title: "Neural Analysis", desc: "Transformer-based models map argument structure, identify key themes, and extract salient quotes in real-time." },
              { phase: "PHASE 03", title: "Insight Synthesis", desc: "Cross-referencing engine connects disparate ideas, revealing patterns and contradictions you'd otherwise miss." },
              { phase: "PHASE 04", title: "Knowledge Delivery", desc: "Beautiful, interactive report with tiered summaries, annotated quotes, and contextual hints delivered instantly." },
            ].map((p, i) => (
              <motion.div
                key={i}
                className="flex gap-8 items-start p-6 border border-[#05d9e8]/10 hover:border-[#ff2a6d]/30 transition-all duration-300 group"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
              >
                <span className="font-['Orbitron',sans-serif] text-sm text-[#ff2a6d] tracking-widest w-28 flex-shrink-0 pt-1 group-hover:text-[#05d9e8] transition-colors">
                  {p.phase}
                </span>
                <div className="flex-1">
                  <h3 className="font-['Rajdhani',sans-serif] text-2xl font-semibold mb-2">{p.title}</h3>
                  <p className="font-['Rajdhani',sans-serif] text-white/40 leading-relaxed">{p.desc}</p>
                </div>
                <ArrowRight className="w-5 h-5 text-[#05d9e8]/20 group-hover:text-[#ff2a6d] group-hover:translate-x-1 transition-all flex-shrink-0 mt-2" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-6 py-32 border-t border-[#ff2a6d]/10">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { text: "It's like having a supercomputer that actually understands nuance.", author: "DR. SARAH CHEN", role: "NEUROSCIENTIST" },
              { text: "Ratio turned my 200-page report into a 10-minute insight session. Unreal.", author: "MARCUS WEBB", role: "STRATEGY CONSULTANT" },
              { text: "The hint system is brilliant — guides you without giving answers. Perfect for learning.", author: "ALEX KIM", role: "GRAD RESEARCHER" },
            ].map((t, i) => (
              <motion.div
                key={i}
                className="border border-[#05d9e8]/10 p-8 text-center hover:border-[#05d9e8]/40 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
              >
                <div className="text-4xl text-[#ff2a6d]/30 mb-6 font-['Righteous',cursive]">"</div>
                <p className="font-['Rajdhani',sans-serif] text-white/60 text-base leading-relaxed mb-8 italic">
                  {t.text}
                </p>
                <div className="font-['Rajdhani',sans-serif] text-sm">
                  <div className="text-white font-semibold tracking-wider">{t.author}</div>
                  <div className="text-[#ff2a6d]/50 text-xs tracking-widest mt-1">{t.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-40 text-center relative overflow-hidden">
        <div className="absolute inset-0"
          style={{
            background: "radial-gradient(ellipse at center, rgba(255,42,109,0.1) 0%, transparent 70%)",
          }}
        />
        <div className="max-w-2xl mx-auto relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <Zap className="w-16 h-16 mx-auto mb-10 text-[#05d9e8]"
              style={{ filter: "drop-shadow(0 0 20px rgba(5,217,232,0.5))" }}
            />
            <h2 className="text-5xl md:text-7xl font-['Righteous',cursive] leading-tight mb-8">
              READY TO<br />
              <span className="text-[#ff2a6d]">UPGRADE</span> YOUR<br />
              <span className="text-[#05d9e8]">READING?</span>
            </h2>
            <p className="font-['Rajdhani',sans-serif] text-white/40 text-lg mb-12">
              Join thousands who've already made the jump to lightspeed.
            </p>
            <button className="bg-transparent border-2 border-[#05d9e8] text-[#05d9e8] px-12 py-5 font-['Rajdhani',sans-serif] text-xl font-semibold tracking-wider hover:bg-[#05d9e8]/10 transition-all"
              style={{ boxShadow: "0 0 30px rgba(5,217,232,0.2)" }}>
              INITIATE PROTOCOL
              <ArrowRight className="inline ml-3 w-5 h-5" />
            </button>
          </motion.div>
        </div>
      </section>

      <footer className="border-t border-[#ff2a6d]/10 px-6 py-8">
        <div className="max-w-6xl mx-auto flex justify-between items-center font-['Rajdhani',sans-serif] text-xs text-white/20 tracking-widest">
          <span>© 2026 RATIO SYSTEMS</span>
          <div className="flex gap-6">
            <span>SYS_ID: RX-4.2.0</span>
            <span className="text-[#05d9e8]/30">ALL SYSTEMS NOMINAL</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
