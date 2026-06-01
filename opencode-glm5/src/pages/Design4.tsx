import { motion } from "motion/react";
import { Zap, FileSearch, Brain, ChevronRight, Terminal, Cpu, Sparkles } from "lucide-react";

export default function Design4() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-[#e0e0e0] overflow-hidden relative">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700;800;900&family=Share+Tech+Mono&display=swap');
        
        .font-cyber { font-family: 'Orbitron', sans-serif; }
        .font-mono-tech { font-family: 'Share Tech Mono', monospace; }
        
        @keyframes neon-pulse {
          0%, 100% { 
            text-shadow: 0 0 10px #00f0ff, 0 0 20px #00f0ff, 0 0 40px #00f0ff;
            box-shadow: 0 0 10px #00f0ff, 0 0 20px #00f0ff;
          }
          50% { 
            text-shadow: 0 0 5px #00f0ff, 0 0 10px #00f0ff;
            box-shadow: 0 0 5px #00f0ff;
          }
        }
        
        @keyframes glitch {
          0%, 100% { clip-path: inset(0 0 0 0); transform: translate(0); }
          5% { clip-path: inset(10% 0 60% 0); transform: translate(-2px, 2px); }
          10% { clip-path: inset(40% 0 30% 0); transform: translate(2px, -2px); }
          15% { clip-path: inset(80% 0 5% 0); transform: translate(-2px, 2px); }
          20%, 100% { clip-path: inset(0 0 0 0); transform: translate(0); }
        }
        
        @keyframes scanline {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100vh); }
        }
        
        @keyframes hologram {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.8; }
        }
        
        .neon-text { 
          color: #00f0ff;
          text-shadow: 0 0 10px #00f0ff, 0 0 20px #00f0ff, 0 0 40px #00f0ff;
        }
        
        .neon-pink { 
          color: #ff00aa;
          text-shadow: 0 0 10px #ff00aa, 0 0 20px #ff00aa, 0 0 40px #ff00aa;
        }
        
        .neon-box-cyan {
          box-shadow: 0 0 10px #00f0ff, 0 0 20px #00f0ff, inset 0 0 10px rgba(0, 240, 255, 0.1);
        }
        
        .neon-box-pink {
          box-shadow: 0 0 10px #ff00aa, 0 0 20px #ff00aa, inset 0 0 10px rgba(255, 0, 170, 0.1);
        }
        
        .glitch-text {
          position: relative;
        }
        
        .glitch-text::before,
        .glitch-text::after {
          content: attr(data-text);
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }
        
        .glitch-text::before {
          color: #ff00aa;
          animation: glitch 3s infinite;
          z-index: -1;
        }
        
        .glitch-text::after {
          color: #00f0ff;
          animation: glitch 3s infinite reverse;
          z-index: -1;
        }
        
        .hologram {
          animation: hologram 2s ease-in-out infinite;
        }
        
        .cyber-grid {
          background-image: 
            linear-gradient(rgba(0, 240, 255, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 240, 255, 0.03) 1px, transparent 1px);
          background-size: 50px 50px;
        }
        
        .scanline::after {
          content: '';
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(to bottom, transparent, rgba(0, 240, 255, 0.15), transparent);
          animation: scanline 6s linear infinite;
          pointer-events: none;
          z-index: 1000;
        }
      `}</style>
      
      <div className="fixed inset-0 cyber-grid pointer-events-none" />
      <div className="scanline" />
      
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.15 }}
          transition={{ duration: 2 }}
          className="absolute top-1/4 -right-32 w-[600px] h-[600px] rounded-full bg-[#00f0ff] blur-[150px]"
        />
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 2, delay: 0.5 }}
          className="absolute bottom-1/4 -left-32 w-[500px] h-[500px] rounded-full bg-[#ff00aa] blur-[150px]"
        />
      </div>

      <nav className="fixed top-0 left-0 right-0 z-50 px-8 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center border-b border-[#00f0ff]/30 pb-4">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3"
          >
            <div className="w-10 h-10 border-2 border-[#00f0ff] neon-box-cyan flex items-center justify-center">
              <Zap className="w-5 h-5 text-[#00f0ff]" />
            </div>
            <span className="font-cyber text-xl font-bold tracking-wider">
              RATIO<span className="neon-text">_</span>READER
            </span>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="hidden md:flex gap-10 items-center"
          >
            <a href="#" className="font-mono-tech text-[#00f0ff]/70 hover:text-[#00f0ff] transition-colors text-sm tracking-wide">DOCS</a>
            <a href="#" className="font-mono-tech text-[#00f0ff]/70 hover:text-[#00f0ff] transition-colors text-sm tracking-wide">PRICING</a>
            <a href="#" className="font-mono-tech text-[#00f0ff]/70 hover:text-[#00f0ff] transition-colors text-sm tracking-wide">ABOUT</a>
            <button className="font-cyber text-sm px-6 py-2 border border-[#00f0ff] neon-box-cyan text-[#00f0ff] hover:bg-[#00f0ff]/10 transition-all">
              INITIALIZE
            </button>
          </motion.div>
        </div>
      </nav>

      <section className="relative pt-32 pb-20 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="font-mono-tech text-sm text-[#ff00aa] mb-6 flex items-center gap-2"
              >
                <Terminal className="w-4 h-4" />
                <span>{">"} SYSTEM.READY // AI_READER_V2.0</span>
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="font-cyber text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-tight"
              >
                <span className="glitch-text" data-text="DECODE">DECODE</span>
                <br />
                <span className="neon-text">YOUR</span>
                <br />
                <span className="neon-pink">DOCUMENTS</span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="font-mono-tech text-lg text-[#8a8a9a] leading-relaxed mb-10 max-w-lg"
              >
                Advanced neural processing extracts key intelligence from any PDF. 
                Summaries, quotes, and insights synthesized at quantum speed.
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-wrap gap-4"
              >
                <button className="group font-cyber text-sm px-8 py-4 bg-gradient-to-r from-[#00f0ff] to-[#0080ff] text-[#0a0a0f] font-bold tracking-wider hover:shadow-lg hover:shadow-[#00f0ff]/30 transition-all flex items-center gap-3">
                  <Zap className="w-4 h-4" />
                  UPLOAD PDF
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="font-cyber text-sm px-8 py-4 border border-[#ff00aa] neon-box-pink text-[#ff00aa] hover:bg-[#ff00aa]/10 transition-all">
                  DEMO
                </button>
              </motion.div>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, rotateY: -10 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="relative hologram"
            >
              <div className="absolute inset-0 border border-[#00f0ff]/30 rounded-lg transform rotate-1" />
              <div className="relative bg-[#0a0a0f]/80 backdrop-blur-sm border border-[#00f0ff]/50 rounded-lg p-6 neon-box-cyan">
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#00f0ff]/30">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-[#00f0ff] animate-pulse" />
                    <span className="font-mono-tech text-sm text-[#00f0ff]">DOCUMENT.SYS</span>
                  </div>
                  <div className="font-mono-tech text-xs text-[#8a8a9a]">v2.0.4</div>
                </div>
                
                <div className="space-y-4 mb-6">
                  {[
                    { width: "100%", delay: 0 },
                    { width: "80%", delay: 0.1 },
                    { width: "90%", delay: 0.2 },
                    { width: "70%", delay: 0.3 },
                    { width: "85%", delay: 0.4 },
                  ].map((line, i) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, scaleX: 0 }}
                      animate={{ opacity: 1, scaleX: 1 }}
                      transition={{ duration: 0.8, delay: 0.8 + line.delay }}
                      style={{ width: line.width }}
                      className="h-2 bg-gradient-to-r from-[#00f0ff]/50 to-[#00f0ff]/20 origin-left"
                    />
                  ))}
                </div>
                
                <div className="border-t border-[#00f0ff]/30 pt-4">
                  <div className="font-mono-tech text-xs text-[#ff00aa] mb-2">&gt; ANALYSIS_OUTPUT:</div>
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5 }}
                    className="font-mono-tech text-sm text-[#00f0ff]"
                  >
                    {`> Summary extracted... ✓`}
                    <br />
                    {`> Quotes identified: 23 ✓`}
                    <br />
                    {`> Insights generated ✓`}
                  </motion.div>
                </div>
                
                <div className="absolute -bottom-4 -right-4 w-24 h-24 border border-[#ff00aa] rounded flex items-center justify-center neon-box-pink">
                  <div className="text-center">
                    <div className="font-cyber text-2xl font-bold neon-pink">99%</div>
                    <div className="font-mono-tech text-xs text-[#ff00aa]/70">ACCURACY</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 px-8 relative">
        <div className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00f0ff]/50 to-transparent" />
        
        <div className="max-w-7xl mx-auto pt-16">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="font-mono-tech text-sm text-[#ff00aa] mb-4">// CORE_MODULES</div>
            <h2 className="font-cyber text-4xl md:text-5xl font-bold">
              <span className="neon-text">NEURAL</span> ARCHITECTURE
            </h2>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: FileSearch, title: "EXTRACT.SYS", desc: "Neural extraction of core concepts from any document format", color: "cyan" },
              { icon: Brain, title: "ANALYZE.AI", desc: "Deep learning analysis identifies hidden patterns and connections", color: "pink" },
              { icon: Sparkles, title: "SYNTHESIZE.NET", desc: "Synthesize insights into actionable intelligence reports", color: "cyan" }
            ].map((module, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                whileHover={{ scale: 1.02 }}
                className={`relative group ${module.color === 'cyan' ? 'border-[#00f0ff]/30 hover:border-[#00f0ff]/60' : 'border-[#ff00aa]/30 hover:border-[#ff00aa]/60'} border bg-[#0a0a0f]/50 backdrop-blur-sm p-8 rounded-lg transition-all duration-300`}
              >
                <div className={`absolute top-0 left-0 right-0 h-px ${module.color === 'cyan' ? 'bg-gradient-to-r from-transparent via-[#00f0ff]/50 to-transparent' : 'bg-gradient-to-r from-transparent via-[#ff00aa]/50 to-transparent'}`} />
                <module.icon className={`w-12 h-12 mb-6 ${module.color === 'cyan' ? 'text-[#00f0ff]' : 'text-[#ff00aa]'}`} strokeWidth={1.5} />
                <h3 className={`font-cyber text-xl font-bold mb-4 ${module.color === 'cyan' ? 'neon-text' : 'neon-pink'}`}>
                  {module.title}
                </h3>
                <p className="font-mono-tech text-[#8a8a9a] text-sm leading-relaxed">
                  {module.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute inset-0 border border-[#00f0ff]/20 rounded-lg transform -rotate-2" />
              <div className="relative bg-[#0a0a0f]/80 border border-[#00f0ff]/30 rounded-lg p-8 neon-box-cyan">
                <div className="font-mono-tech text-sm text-[#ff00aa] mb-6">// USER_FEEDBACK</div>
                <blockquote className="font-mono-tech text-xl text-[#e0e0e0] leading-relaxed mb-8">
                  "Ratio Reader processes complex research papers in seconds. 
                  The neural analysis is unlike anything I've used before."
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 border border-[#00f0ff] rounded flex items-center justify-center">
                    <Cpu className="w-6 h-6 text-[#00f0ff]" />
                  </div>
                  <div>
                    <div className="font-cyber text-sm text-[#00f0ff]">DR. ALEX CHEN</div>
                    <div className="font-mono-tech text-xs text-[#8a8a9a]">QUANTUM RESEARCH LAB</div>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { value: "10K+", label: "ACTIVE USERS", color: "cyan" },
                { value: "2.5M", label: "DOCS PROCESSED", color: "pink" },
                { value: "0.3s", label: "AVG RESPONSE", color: "cyan" },
                { value: "99.9%", label: "UPTIME", color: "pink" }
              ].map((stat, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className={`border ${stat.color === 'cyan' ? 'border-[#00f0ff]/30' : 'border-[#ff00aa]/30'} bg-[#0a0a0f]/50 p-6 rounded-lg text-center`}
                >
                  <div className={`font-cyber text-3xl font-bold ${stat.color === 'cyan' ? 'neon-text' : 'neon-pink'}`}>
                    {stat.value}
                  </div>
                  <div className="font-mono-tech text-xs text-[#8a8a9a] mt-2">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 px-8 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#00f0ff]/5 to-transparent" />
        
        <div className="max-w-4xl mx-auto text-center relative">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="font-mono-tech text-sm text-[#ff00aa] mb-6">// INITIALIZE_SEQUENCE</div>
            <h2 className="font-cyber text-5xl md:text-7xl font-bold mb-8">
              <span className="neon-text">BEGIN</span>
              <br />
              <span className="neon-pink">TRANSMISSION</span>
            </h2>
            <p className="font-mono-tech text-lg text-[#8a8a9a] mb-12 max-w-xl mx-auto">
              No registration required. Upload your first document and witness the neural extraction in real-time.
            </p>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="font-cyber text-lg px-12 py-5 bg-gradient-to-r from-[#00f0ff] to-[#ff00aa] text-[#0a0a0f] font-bold tracking-wider hover:shadow-xl hover:shadow-[#00f0ff]/30 transition-all"
            >
              UPLOAD PDF →
            </motion.button>
          </motion.div>
        </div>
      </section>

      <footer className="py-8 px-8 border-t border-[#00f0ff]/20">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-6">
          <div className="font-cyber text-sm text-[#8a8a9a]">
            RATIO_READER © 2024 // ALL_RIGHTS_RESERVED
          </div>
          <div className="flex gap-8 font-mono-tech text-xs text-[#8a8a9a]">
            <a href="#" className="hover:text-[#00f0ff] transition-colors">TERMS</a>
            <a href="#" className="hover:text-[#00f0ff] transition-colors">PRIVACY</a>
            <a href="#" className="hover:text-[#00f0ff] transition-colors">CONTACT</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
