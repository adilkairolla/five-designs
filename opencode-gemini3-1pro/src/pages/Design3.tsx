import { motion } from "framer-motion";
import { Terminal, Cpu, Database, Network } from "lucide-react";

export default function Design3() {
  return (
    <div className="min-h-screen bg-zinc-950 text-emerald-400 font-['JetBrains_Mono'] overflow-hidden selection:bg-emerald-500 selection:text-black relative">
      {/* Grid Background Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.05)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none"></div>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10 min-h-screen flex flex-col justify-center">
        
        {/* Top Nav/Header */}
        <header className="flex justify-between items-center mb-24 border-b border-emerald-900/50 pb-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 border-2 border-emerald-500 rounded flex items-center justify-center relative shadow-[0_0_15px_rgba(16,185,129,0.3)]">
              <Terminal size={24} />
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-emerald-500 rounded-full animate-ping"></div>
            </div>
            <div>
              <h1 className="text-xl font-bold tracking-widest text-white">RATIO_READER</h1>
              <p className="text-xs text-emerald-700 uppercase">System v3.0 // Online</p>
            </div>
          </div>
          <button className="border border-emerald-500 text-emerald-400 px-6 py-2 uppercase tracking-widest text-sm hover:bg-emerald-500 hover:text-black transition-colors shadow-[0_0_10px_rgba(16,185,129,0.2)]">
            Initialize
          </button>
        </header>

        {/* Hero Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block px-3 py-1 bg-emerald-950 border border-emerald-800 text-xs mb-8">
              &gt; STATUS: AWAITING_INPUT
            </div>
            <h2 className="text-5xl lg:text-7xl font-['Outfit'] font-black text-white mb-6 leading-tight tracking-tight">
              Process data. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-500 drop-shadow-[0_0_10px_rgba(16,185,129,0.8)]">
                Bypass noise.
              </span>
            </h2>
            <p className="text-zinc-400 text-lg mb-10 max-w-xl leading-relaxed font-light">
              Upload dense PDF architecture. Our algorithms parse, summarize, and extract critical quotes in &lt; 0.4 seconds. Pure signal delivery.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-emerald-500 text-black font-bold uppercase tracking-widest px-8 py-4 flex items-center justify-center gap-3 hover:bg-emerald-400 transition-colors">
                <Database size={20} />
                Input Data File
              </button>
              <button className="border border-zinc-700 text-zinc-300 font-bold uppercase tracking-widest px-8 py-4 hover:border-emerald-500 hover:text-emerald-400 transition-colors">
                View Documentation
              </button>
            </div>
          </motion.div>

          {/* Terminal / Visualization */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-emerald-500/10 blur-3xl rounded-full"></div>
            
            <div className="bg-zinc-950 border border-emerald-800/50 rounded-lg overflow-hidden shadow-[0_0_30px_rgba(16,185,129,0.1)] relative z-10 backdrop-blur-sm">
              <div className="bg-zinc-900 border-b border-emerald-900/50 px-4 py-2 flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-emerald-500/50"></div>
                <div className="ml-4 text-xs text-zinc-500 flex-1 text-center font-mono">ratio_core_process.sh</div>
              </div>
              
              <div className="p-6 h-[400px] overflow-hidden text-sm flex flex-col justify-end relative">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-zinc-950 to-transparent z-10 pointer-events-none"></div>
                
                <motion.div 
                  animate={{ y: [0, -200] }}
                  transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                  className="space-y-2 opacity-80"
                >
                  {[...Array(20)].map((_, i) => (
                    <div key={i} className="flex gap-4">
                      <span className="text-zinc-600">0x{(1000 + i * 16).toString(16).toUpperCase()}</span>
                      <span className={i % 3 === 0 ? "text-cyan-400" : "text-emerald-500"}>
                        {i % 3 === 0 ? "EXTRACTING_HINTS..." : i % 2 === 0 ? "PARSING_QUOTES..." : "GENERATING_SUMMARY..."}
                      </span>
                      <span className="text-zinc-400">[OK]</span>
                    </div>
                  ))}
                </motion.div>
                
                {/* Overlay Scanning Line */}
                <motion.div 
                  animate={{ top: ["0%", "100%", "0%"] }}
                  transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
                  className="absolute left-0 w-full h-1 bg-emerald-400/50 shadow-[0_0_10px_rgba(16,185,129,1)] z-20"
                ></motion.div>
              </div>
            </div>
            
            {/* Floating feature badges */}
            <motion.div animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 4, delay: 0 }} className="absolute -left-12 top-20 bg-zinc-900 border border-emerald-800 px-4 py-3 rounded text-xs flex items-center gap-3 shadow-lg z-20">
              <Cpu className="text-emerald-400" size={16} /> Auto-Summary
            </motion.div>
            <motion.div animate={{ y: [0, 15, 0] }} transition={{ repeat: Infinity, duration: 5, delay: 1 }} className="absolute -right-8 bottom-32 bg-zinc-900 border border-cyan-800 px-4 py-3 rounded text-xs flex items-center gap-3 shadow-lg z-20 text-cyan-400">
              <Network size={16} /> Knowledge Graph
            </motion.div>
          </motion.div>
        </div>

      </div>
    </div>
  );
}
