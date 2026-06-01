import { motion } from "motion/react";
import { FileUp, Zap, Target, ChevronRight, X, Menu } from "lucide-react";
import { useState } from "react";

export default function Design2() {
  const [menuOpen, setMenuOpen] = useState(false);
  
  return (
    <div className="min-h-screen bg-[#FFFF00] text-black font-mono overflow-x-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;400;500;600;700;800&family=Space+Mono:wght@400;700&display=swap');
        
        .font-brutal { font-family: 'JetBrains Mono', monospace; }
        .font-mono-alt { font-family: 'Space Mono', monospace; }
        
        @keyframes glitch {
          0%, 100% { transform: translate(0); }
          20% { transform: translate(-2px, 2px); }
          40% { transform: translate(-2px, -2px); }
          60% { transform: translate(2px, 2px); }
          80% { transform: translate(2px, -2px); }
        }
        
        @keyframes scan {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100vh); }
        }
        
        .glitch:hover { animation: glitch 0.3s infinite; }
        .scan-line {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: black;
          animation: scan 8s linear infinite;
          pointer-events: none;
          z-index: 100;
          opacity: 0.1;
        }
      `}</style>
      
      <div className="scan-line" />
      
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#FFFF00] border-b-4 border-black">
        <div className="flex justify-between items-center px-6 py-4">
          <motion.div 
            initial={{ x: -100 }}
            animate={{ x: 0 }}
            transition={{ type: "spring", stiffness: 100 }}
            className="font-brutal text-2xl font-bold tracking-tighter"
          >
            RATIO[READER]
          </motion.div>
          
          <div className="hidden md:flex gap-8 items-center font-brutal text-sm font-medium">
            <a href="#" className="hover:bg-black hover:text-[#FFFF00] px-4 py-2 transition-all">DOCS</a>
            <a href="#" className="hover:bg-black hover:text-[#FFFF00] px-4 py-2 transition-all">PRICING</a>
            <a href="#" className="hover:bg-black hover:text-[#FFFF00] px-4 py-2 transition-all">ABOUT</a>
            <button className="bg-black text-[#FFFF00] px-6 py-2 hover:bg-white hover:text-black border-2 border-black transition-all font-bold">
              UPLOAD
            </button>
          </div>
          
          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden">
            {menuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </nav>

      <section className="pt-32 pb-16 px-6 relative">
        <div className="absolute top-20 right-0 w-1/2 h-[600px] border-l-4 border-black bg-white opacity-20" />
        <div className="absolute bottom-0 left-1/4 w-1/4 h-[400px] border-t-4 border-black bg-white opacity-20" />
        
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-block bg-black text-[#FFFF00] px-4 py-2 font-brutal text-sm font-bold mb-8"
          >
            // PDF INTELLIGENCE SYSTEM v2.0
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <motion.h1 
                initial={{ x: -200, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="font-brutal text-[8vw] md:text-[6vw] leading-[0.85] font-bold tracking-tighter"
              >
                YOUR<br />
                <span className="bg-black text-[#FFFF00] px-2">PDF</span>S<br />
                DECODED
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="font-mono-alt text-lg mt-8 max-w-md leading-relaxed"
              >
                Upload. Extract. Understand. 
                <br /><br />
                Ratio Reader tears through documents to find what matters—summaries, quotes, insights delivered at machine speed.
              </motion.p>
              
              <motion.div 
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="flex gap-4 mt-12"
              >
                <button className="group bg-black text-[#FFFF00] px-8 py-4 font-brutal font-bold text-lg hover:bg-white hover:text-black border-4 border-black transition-all flex items-center gap-2 glitch">
                  UPLOAD NOW
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </button>
                <button className="bg-[#FFFF00] text-black px-8 py-4 font-brutal font-bold text-lg border-4 border-black hover:bg-black hover:text-[#FFFF00] transition-all">
                  DEMO
                </button>
              </motion.div>
            </div>
            
            <motion.div 
              initial={{ x: 200, opacity: 0, rotate: 3 }}
              animate={{ x: 0, opacity: 1, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              <div className="absolute -top-4 -left-4 w-full h-full border-4 border-black" />
              <div className="relative bg-white border-4 border-black p-6">
                <div className="flex items-center justify-between border-b-4 border-black pb-4 mb-6">
                  <div className="font-brutal font-bold">INPUT.DOC</div>
                  <div className="flex gap-2">
                    <div className="w-4 h-4 bg-black" />
                    <div className="w-4 h-4 border-2 border-black" />
                    <div className="w-4 h-4 border-2 border-black" />
                  </div>
                </div>
                
                <div className="space-y-3 mb-6">
                  {[
                    { width: "100%", delay: 0 },
                    { width: "85%", delay: 0.1 },
                    { width: "92%", delay: 0.2 },
                    { width: "78%", delay: 0.3 },
                    { width: "95%", delay: 0.4 },
                  ].map((line, i) => (
                    <motion.div 
                      key={i}
                      initial={{ width: 0 }}
                      animate={{ width: line.width }}
                      transition={{ duration: 0.8, delay: 1 + line.delay }}
                      className="h-3 bg-black"
                    />
                  ))}
                </div>
                
                <div className="border-t-4 border-black pt-4">
                  <div className="font-brutal text-sm text-black/50 mb-2">OUTPUT:</div>
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.8 }}
                    className="bg-[#FFFF00] p-4 border-2 border-black"
                  >
                    <div className="font-mono-alt text-sm">
                      &gt; Summary: Key concepts extracted...<br />
                      &gt; Quotes: 23 highlights found...<br />
                      &gt; Insights: Analysis complete ✓
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-black text-[#FFFF00] border-t-4 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-brutal text-sm mb-16 opacity-50"
          >
            // CORE FUNCTIONS
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-0 border-4 border-[#FFFF00]">
            {[
              { icon: FileUp, title: "UPLOAD", desc: "Drop any PDF. We handle the rest. No format too complex." },
              { icon: Zap, title: "EXTRACT", desc: "Core concepts pulled automatically. Zero manual work." },
              { icon: Target, title: "TARGET", desc: "Find exactly what matters. Skip the noise." }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className={`p-8 ${i < 2 ? 'border-r-4 border-[#FFFF00]' : ''}`}
              >
                <item.icon className="w-16 h-16 mb-6" strokeWidth={1.5} />
                <h3 className="font-brutal text-3xl font-bold mb-4">{item.title}</h3>
                <p className="font-mono-alt text-[#FFFF00]/70">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 grid grid-cols-8 h-full">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="border-l border-black/20 h-full" />
          ))}
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-black text-[#FFFF00] px-4 py-2 font-brutal text-sm inline-block mb-6">
                // HOW IT WORKS
              </div>
              <h2 className="font-brutal text-5xl font-bold mb-8">
                THREE STEPS.<br />
                <span className="bg-black text-[#FFFF00] px-2">ZERO</span> HASSLE.
              </h2>
              <div className="space-y-6">
                {["Upload your PDF document", "AI processes and extracts key info", "Get summary, quotes & insights"].map((step, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.2 }}
                    className="flex items-center gap-4"
                  >
                    <div className="w-12 h-12 bg-black text-[#FFFF00] flex items-center justify-center font-brutal text-xl font-bold">
                      {i + 1}
                    </div>
                    <div className="font-mono-alt text-lg">{step}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative"
            >
              <div className="bg-white border-4 border-black p-1">
                <div className="grid grid-cols-2 gap-1">
                  {[
                    { value: "10K+", label: "USERS" },
                    { value: "1M+", label: "DOCS" },
                    { value: "99%", label: "ACCURACY" },
                    { value: "0.3s", label: "AVG TIME" }
                  ].map((stat, i) => (
                    <div key={i} className="bg-black text-[#FFFF00] p-8 text-center">
                      <div className="font-brutal text-4xl font-bold">{stat.value}</div>
                      <div className="font-mono-alt text-sm opacity-70">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-black text-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="font-brutal text-sm text-[#FFFF00] mb-6">// READY?</div>
            <h2 className="font-brutal text-6xl md:text-8xl font-bold mb-8">
              START<span className="text-[#FFFF00]">.</span>NOW<span className="text-[#FFFF00]">.</span>
            </h2>
            <p className="font-mono-alt text-xl text-white/60 mb-12 max-w-xl mx-auto">
              No signup required. Upload your first PDF and see results instantly.
            </p>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#FFFF00] text-black px-16 py-6 font-brutal text-2xl font-bold border-4 border-[#FFFF00] hover:bg-black hover:text-[#FFFF00] transition-all glitch"
            >
              UPLOAD YOUR PDF →
            </motion.button>
          </motion.div>
        </div>
      </section>

      <section className="py-12 border-t-4 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-between items-center gap-8">
            <div className="font-brutal text-xl font-bold">
              RATIO[READER] © 2024
            </div>
            <div className="flex gap-8 font-mono-alt text-sm">
              <a href="#" className="hover:bg-black hover:text-[#FFFF00] px-2 py-1 transition-all">TERMS</a>
              <a href="#" className="hover:bg-black hover:text-[#FFFF00] px-2 py-1 transition-all">PRIVACY</a>
              <a href="#" className="hover:bg-black hover:text-[#FFFF00] px-2 py-1 transition-all">CONTACT</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
