import { motion } from "motion/react";

export function Design4() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white overflow-x-hidden">
      <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Rajdhani:wght@300;400;600;700&family=Oxanium:wght@300;400;600&display=swap" rel="stylesheet" />
      
      <style>{`
        .font-display { font-family: 'Orbitron', sans-serif; }
        .font-sans { font-family: 'Rajdhani', sans-serif; }
        .font-tech { font-family: 'Oxanium', sans-serif; }
        
        .neon-text {
          text-shadow: 0 0 10px #00f5ff, 0 0 20px #00f5ff, 0 0 40px #00f5ff;
        }
        .neon-pink {
          text-shadow: 0 0 10px #ff00ff, 0 0 20px #ff00ff, 0 0 40px #ff00ff;
        }
        .glow-box {
          box-shadow: 0 0 20px rgba(0, 245, 255, 0.3), inset 0 0 20px rgba(0, 245, 255, 0.1);
        }
        .glow-pink {
          box-shadow: 0 0 20px rgba(255, 0, 255, 0.3), inset 0 0 20px rgba(255, 0, 255, 0.1);
        }
        
        @keyframes scan {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100vh); }
        }
        .scan-line {
          animation: scan 8s linear infinite;
        }
        
        .grid-bg {
          background-image: 
            linear-gradient(rgba(0, 245, 255, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 245, 255, 0.03) 1px, transparent 1px);
          background-size: 50px 50px;
        }
      `}</style>

      <div className="fixed inset-0 grid-bg pointer-events-none" />
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="scan-line absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00f5ff]/30 to-transparent" />
      </div>

      <nav className="fixed top-0 left-0 right-0 z-50 px-8 py-5 flex justify-between items-center bg-[#0a0a0f]/80 backdrop-blur-md border-b border-[#00f5ff]/20">
        <div className="font-display text-2xl font-bold tracking-wider">
          <span className="neon-text">RATIO</span>
        </div>
        <div className="font-sans text-sm flex gap-8 items-center tracking-wide">
          <a href="#features" className="text-[#00f5ff]/70 hover:text-[#00f5ff] transition-colors">FEATURES</a>
          <a href="#process" className="text-[#00f5ff]/70 hover:text-[#00f5ff] transition-colors">PROCESS</a>
          <a href="#pricing" className="text-[#00f5ff]/70 hover:text-[#00f5ff] transition-colors">PRICING</a>
          <button className="font-tech bg-gradient-to-r from-[#00f5ff] to-[#ff00ff] text-[#0a0a0f] px-6 py-2 font-semibold hover:opacity-80 transition-opacity">
            INITIALIZE
          </button>
        </div>
      </nav>

      <section className="min-h-screen flex items-center justify-center px-8 pt-20 relative">
        <div className="absolute inset-0 overflow-hidden">
          <motion.div 
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00f5ff]/10 rounded-full blur-3xl"
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 6, repeat: Infinity }}
          />
          <motion.div 
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#ff00ff]/10 rounded-full blur-3xl"
            animate={{ scale: [1.2, 1, 1.2], opacity: [0.5, 0.3, 0.5] }}
            transition={{ duration: 6, repeat: Infinity }}
          />
        </div>
        
        <div className="max-w-5xl mx-auto text-center z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="font-tech text-xs tracking-[0.5em] text-[#00f5ff]/60 mb-8">
              [ DOCUMENT INTELLIGENCE SYSTEM ]
            </div>
            
            <h1 className="font-display text-[clamp(3rem,10vw,8rem)] font-black leading-none tracking-wider mb-6">
              <span className="neon-text">DECODE</span>
            </h1>
            <h2 className="font-display text-[clamp(2rem,6vw,5rem)] font-bold tracking-wider mb-10 neon-pink">
              YOUR DOCUMENTS
            </h2>
            
            <p className="font-sans text-xl text-[#8a8a9a] max-w-2xl mx-auto mb-14 leading-relaxed">
              Upload any PDF. Our AI extracts meaning, surfaces key insights, 
              and guides you through complex content with precision.
            </p>
            
            <div className="flex gap-6 justify-center">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="font-tech bg-gradient-to-r from-[#00f5ff] to-[#00d4aa] text-[#0a0a0f] px-10 py-5 text-lg font-bold glow-box"
              >
                UPLOAD PDF
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="font-tech border-2 border-[#ff00ff] text-[#ff00ff] px-10 py-5 text-lg font-bold glow-pink"
              >
                LEARN MORE
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="features" className="py-32 px-8 relative">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <div className="font-tech text-xs tracking-[0.3em] text-[#00f5ff]/60 mb-4">// SYSTEM CAPABILITIES</div>
            <h2 className="font-display text-5xl font-bold tracking-wider">
              <span className="neon-text">CORE</span> FUNCTIONS
            </h2>
          </motion.div>
          
          <div className="grid grid-cols-3 gap-8">
            {[
              { 
                title: "SUMMARY EXTRACTION", 
                desc: "AI parses document structure and distills essential meaning into clear summaries.",
                icon: "◈"
              },
              { 
                title: "QUOTE MINING", 
                desc: "Identify and preserve the most impactful passages with automatic citation.",
                icon: "◇"
              },
              { 
                title: "CONTEXT HINTS", 
                desc: "Receive intelligent prompts that illuminate themes without revealing spoilers.",
                icon: "◆"
              },
            ].map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15 }}
                viewport={{ once: true }}
                className="bg-[#0f0f18] border border-[#00f5ff]/20 p-8 glow-box"
              >
                <div className="text-4xl text-[#00f5ff] mb-6 font-display">{feature.icon}</div>
                <h3 className="font-display text-xl font-bold tracking-wide mb-4 text-[#00f5ff]">{feature.title}</h3>
                <p className="font-sans text-[#8a8a9a] leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="py-32 px-8 relative">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-20">
            <div className="font-tech text-xs tracking-[0.3em] text-[#ff00ff]/60 mb-4">// EXECUTION SEQUENCE</div>
            <h2 className="font-display text-5xl font-bold tracking-wider neon-pink">
              PROTOCOL
            </h2>
          </div>
          
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-[#00f5ff] via-[#ff00ff] to-[#00f5ff]" />
            
            {[
              { step: "01", title: "UPLOAD", desc: "Initialize by uploading any PDF document to the system." },
              { step: "02", title: "ANALYZE", desc: "AI processes structure, identifies themes, and extracts intelligence." },
              { step: "03", title: "RECEIVE", desc: "Access generated summaries, curated quotes, and contextual guidance." },
            ].map((item) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex items-start gap-12 mb-16 relative"
              >
                <div className="font-display text-6xl font-black text-[#00f5ff]/20 w-20">{item.step}</div>
                <div className="absolute left-7 top-6 w-3 h-3 bg-[#00f5ff] rotate-45" />
                <div className="flex-1 pt-2">
                  <h3 className="font-display text-2xl font-bold tracking-wider text-[#00f5ff] mb-3">{item.title}</h3>
                  <p className="font-sans text-lg text-[#8a8a9a]">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="py-32 px-8 relative">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="font-tech text-xs tracking-[0.3em] text-[#00f5ff]/60 mb-4">// ACCESS TIERS</div>
            <h2 className="font-display text-5xl font-bold tracking-wider">
              <span className="neon-text">SELECT</span> PLAN
            </h2>
          </div>
          
          <div className="grid grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="bg-[#0f0f18] border border-[#00f5ff]/30 p-10 glow-box"
            >
              <div className="font-tech text-xs tracking-wider text-[#00f5ff]/60 mb-2">TIER 1</div>
              <div className="font-display text-5xl font-bold tracking-wider mb-8 text-[#00f5ff]">$0</div>
              <ul className="font-sans text-sm text-[#8a8a9a] space-y-4 mb-10">
                <li className="flex gap-3"><span className="text-[#00f5ff]">▸</span> 5 documents/month</li>
                <li className="flex gap-3"><span className="text-[#00f5ff]">▸</span> Basic summaries</li>
                <li className="flex gap-3"><span className="text-[#00f5ff]">▸</span> 5 quote highlights</li>
              </ul>
              <button className="font-tech w-full py-4 border border-[#00f5ff]/50 text-[#00f5ff] hover:bg-[#00f5ff]/10 transition-colors">
                INITIALIZE FREE
              </button>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-[#1a0a1a] to-[#0a1a1a] border border-[#ff00ff]/50 p-10 glow-pink"
            >
              <div className="font-tech text-xs tracking-wider text-[#ff00ff] mb-2">TIER 2 // RECOMMENDED</div>
              <div className="font-display text-5xl font-bold tracking-wider mb-8 neon-pink">$12</div>
              <ul className="font-sans text-sm text-[#d4a4d4] space-y-4 mb-10">
                <li className="flex gap-3"><span className="text-[#ff00ff]">▸</span> Unlimited documents</li>
                <li className="flex gap-3"><span className="text-[#ff00ff]">▸</span> Advanced analysis</li>
                <li className="flex gap-3"><span className="text-[#ff00ff]">▸</span> Unlimited highlights</li>
              </ul>
              <button className="font-tech w-full py-4 bg-gradient-to-r from-[#ff00ff] to-[#00f5ff] text-[#0a0a0f] font-bold hover:opacity-80 transition-opacity">
                UPGRADE NOW
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      <footer className="py-10 px-8 border-t border-[#00f5ff]/20">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="font-display text-lg font-bold tracking-wider">
            <span className="neon-text">RATIO</span> <span className="text-[#8a8a9a]">READER</span>
          </div>
          <div className="font-tech text-xs text-[#00f5ff]/40">
            © 2025 // ALL SYSTEMS OPERATIONAL
          </div>
        </div>
      </footer>
    </div>
  );
}
