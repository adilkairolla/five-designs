import { motion } from "motion/react";

export function Design2() {
  return (
    <div className="min-h-screen bg-[#fff] text-[#000] overflow-x-hidden">
      <link href="https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&family=Bebas+Neue&family=IBM+Plex+Sans:wght@400;600;900&display=swap" rel="stylesheet" />
      
      <style>{`
        .font-mono { font-family: 'Space Mono', monospace; }
        .font-display { font-family: 'Bebas Neue', sans-serif; }
        .font-sans { font-family: 'IBM Plex Sans', sans-serif; }
      `}</style>

      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#000] text-[#fff] px-4 py-3 flex justify-between items-center">
        <div className="font-display text-3xl tracking-wider">RATIO</div>
        <div className="font-mono text-xs flex gap-6 items-center">
          <a href="#features" className="hover:line-through">[FEATURES]</a>
          <a href="#process" className="hover:line-through">[PROCESS]</a>
          <a href="#pricing" className="hover:line-through">[PRICING]</a>
          <button className="bg-[#fff] text-[#000] px-4 py-2 hover:bg-[#ff0] transition-colors">UPLOAD PDF</button>
        </div>
      </nav>

      <section className="min-h-screen bg-[#000] text-[#fff] flex items-center justify-center relative overflow-hidden">
        <motion.div 
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="absolute top-20 left-10 font-mono text-xs text-[#333] rotate-[-15deg]">PDF</div>
          <div className="absolute top-40 right-20 font-mono text-xs text-[#333] rotate-[10deg]">ANALYZE</div>
          <div className="absolute bottom-40 left-1/4 font-mono text-xs text-[#333] rotate-[5deg]">SUMMARY</div>
          <div className="absolute bottom-20 right-1/3 font-mono text-xs text-[#333] rotate-[-8deg]">INSIGHTS</div>
        </motion.div>
        
        <div className="text-center z-10 px-4">
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="font-mono text-sm tracking-widest mb-4 text-[#666]">
              ////////////////////////////////////////////////
            </div>
            <h1 className="font-display text-[20vw] leading-[0.8] tracking-wider mb-4">
              RATIO
            </h1>
            <div className="font-display text-[8vw] tracking-wider text-[#ff0] mb-8">
              READER
            </div>
            <div className="font-mono text-sm tracking-widest mb-4 text-[#666]">
              ////////////////////////////////////////////////
            </div>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="font-sans text-lg max-w-xl mx-auto mb-12 text-[#888]"
          >
            UPLOAD ANY DOCUMENT. RECEIVE INTELLIGENCE.
            <br />
            SUMMARIES. QUOTES. HINTS. UNDERSTANDING.
          </motion.p>
          
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex gap-4 justify-center"
          >
            <button className="font-sans bg-[#ff0] text-[#000] px-12 py-5 text-lg font-black hover:bg-[#fff] transition-colors">
              START NOW
            </button>
            <button className="font-sans border-4 border-[#fff] px-12 py-5 text-lg font-black hover:bg-[#fff] hover:text-[#000] transition-colors">
              LEARN MORE
            </button>
          </motion.div>
        </div>
      </section>

      <section id="features" className="py-24 border-b-4 border-[#000]">
        <div className="px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-display text-[10vw] tracking-wider text-center mb-16"
          >
            CAPABILITIES
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
            <motion.div 
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="border-r-4 border-[#000] p-8 min-h-[400px] flex flex-col justify-between"
            >
              <div>
                <div className="font-mono text-xs mb-4 text-[#888]">[01]</div>
                <h3 className="font-display text-5xl tracking-wide mb-4">SUMMARIZE</h3>
                <p className="font-sans text-base text-[#555] leading-relaxed">
                  AI extracts core meaning from any document. Get the essence without the noise.
                </p>
              </div>
              <div className="font-mono text-8xl font-bold text-[#eee]">S</div>
            </motion.div>
            
            <motion.div 
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="border-r-4 border-[#000] p-8 min-h-[400px] flex flex-col justify-between"
            >
              <div>
                <div className="font-mono text-xs mb-4 text-[#888]">[02]</div>
                <h3 className="font-display text-5xl tracking-wide mb-4">QUOTES</h3>
                <p className="font-sans text-base text-[#555] leading-relaxed">
                  Discover the most powerful passages. Automatically curated and cited.
                </p>
              </div>
              <div className="font-mono text-8xl font-bold text-[#eee]">Q</div>
            </motion.div>
            
            <motion.div 
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="p-8 min-h-[400px] flex flex-col justify-between"
            >
              <div>
                <div className="font-mono text-xs mb-4 text-[#888]">[03]</div>
                <h3 className="font-display text-5xl tracking-wide mb-4">HINTS</h3>
                <p className="font-sans text-base text-[#555] leading-relaxed">
                  Intelligent prompts guide understanding. Context without spoilers.
                </p>
              </div>
              <div className="font-mono text-8xl font-bold text-[#eee]">H</div>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="process" className="py-24 bg-[#ff0]">
        <div className="px-4">
          <div className="font-display text-[10vw] tracking-wider text-center mb-16">
            PROCESS
          </div>
          
          <div className="max-w-4xl mx-auto">
            {[
              { num: "01", title: "UPLOAD", desc: "Drop your PDF. Any size, any subject." },
              { num: "02", title: "ANALYZE", desc: "AI parses structure, themes, and key concepts." },
              { num: "03", title: "RECEIVE", desc: "Get summary, quotes, and contextual hints." },
            ].map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="border-t-4 border-[#000] py-8 flex items-center gap-8"
              >
                <div className="font-mono text-6xl font-bold">{step.num}</div>
                <div>
                  <h3 className="font-display text-4xl tracking-wide">{step.title}</h3>
                  <p className="font-sans text-lg">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="py-24 bg-[#000] text-[#fff]">
        <div className="px-4">
          <div className="font-display text-[10vw] tracking-wider text-center mb-16">
            PRICING
          </div>
          
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="border-4 border-[#fff] p-8"
            >
              <div className="font-mono text-xs mb-4 text-[#888]">FREE</div>
              <div className="font-display text-6xl tracking-wide mb-8">$0</div>
              <ul className="font-mono text-sm space-y-4 mb-8 text-[#888]">
                <li className="flex gap-2"><span className="text-[#ff0]">//</span> 5 documents/month</li>
                <li className="flex gap-2"><span className="text-[#ff0]">//</span> Basic summaries</li>
                <li className="flex gap-2"><span className="text-[#ff0]">//</span> 5 quote highlights</li>
              </ul>
              <button className="font-sans w-full py-4 border-2 border-[#fff] hover:bg-[#fff] hover:text-[#000] transition-colors font-bold">
                GET STARTED
              </button>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="bg-[#ff0] text-[#000] p-8"
            >
              <div className="font-mono text-xs mb-4">PRO</div>
              <div className="font-display text-6xl tracking-wide mb-8">$12</div>
              <ul className="font-mono text-sm space-y-4 mb-8">
                <li className="flex gap-2"><span>//</span> Unlimited documents</li>
                <li className="flex gap-2"><span>//</span> Advanced analysis</li>
                <li className="flex gap-2"><span>//</span> Unlimited highlights</li>
              </ul>
              <button className="font-sans w-full py-4 bg-[#000] text-[#fff] hover:bg-[#333] transition-colors font-bold">
                UPGRADE
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      <footer className="py-8 bg-[#000] text-[#fff] border-t-4 border-[#333]">
        <div className="px-4 flex justify-between items-center">
          <div className="font-display text-xl tracking-wider">RATIO READER</div>
          <div className="font-mono text-xs text-[#666]">© 2025 // ALL RIGHTS RESERVED</div>
        </div>
      </footer>
    </div>
  );
}
