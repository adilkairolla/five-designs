import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Hexagon, Search, FileText, ArrowRight } from 'lucide-react';

export default function Design2() {
  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-purple-500 selection:text-white font-mono overflow-x-hidden">
      {/* Background Ambience */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[50vw] h-[50vw] bg-purple-900/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[50vw] h-[50vw] bg-cyan-900/20 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10">
        {/* Navbar */}
        <nav className="flex justify-between items-center px-8 py-6 border-b border-white/10 backdrop-blur-md">
          <div className="text-2xl font-bold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
            RATIO_READER
          </div>
          <button className="px-6 py-2 border border-purple-500/50 text-purple-400 hover:bg-purple-500/10 hover:shadow-[0_0_15px_rgba(168,85,247,0.5)] transition-all duration-300 rounded-none uppercase text-xs tracking-widest">
            Execute_Upload
          </button>
        </nav>

        {/* Hero */}
        <header className="container mx-auto px-4 pt-32 pb-20 text-center">
            <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="inline-block mb-4 px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-cyan-400 uppercase tracking-[0.2em]"
            >
                / System Online / Ready for Input
            </motion.div>
            
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-8 leading-none">
                DECODE <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-cyan-400 to-purple-500 animate-gradient-x bg-[length:200%_auto]">THE SIGNAL</span>
            </h1>
            
            <p className="max-w-xl mx-auto text-gray-400 text-lg mb-12">
                Bypass the noise. Ratio Reader utilizes advanced neural networks to extract critical data from your PDF documents instantly.
            </p>

            <button className="group relative px-8 py-4 bg-white text-black font-bold uppercase tracking-widest hover:pl-10 transition-all">
                <span className="relative z-10 flex items-center gap-2">
                    Initialize Protocol <ArrowRight size={18} />
                </span>
                <div className="absolute inset-0 bg-cyan-400 blur-lg opacity-50 group-hover:opacity-100 transition-opacity" />
            </button>
        </header>

        {/* HUD Elements / Grid */}
        <section className="container mx-auto px-4 py-20">
            <div className="grid md:grid-cols-3 gap-6">
                <CyberCard 
                    icon={<Zap className="text-yellow-400" />}
                    title="Rapid_Synthesis"
                    desc="Latency-free summarizing engine designed for high-throughput information consumption."
                />
                <CyberCard 
                    icon={<Hexagon className="text-purple-400" />}
                    title="Data_Extraction"
                    desc="Identify and isolate key quotations and metrics with surgical precision."
                />
                <CyberCard 
                    icon={<Search className="text-cyan-400" />}
                    title="Context_Aware"
                    desc="Adaptive hinsts that provide background intelligence on source probability."
                />
            </div>
        </section>

        {/* Interactive Viewer Demo */}
        <section className="py-20 border-t border-white/10 bg-black/50">
            <div className="container mx-auto px-4 flex flex-col items-center">
                <h2 className="text-3xl font-bold mb-12 tracking-widest uppercase text-center">
                    <span className="text-purple-500">Target</span> Acquired
                </h2>
                
                <div className="relative w-full max-w-4xl aspect-video bg-neutral-900 border border-white/20 rounded-lg overflow-hidden flex items-center justify-center group">
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(18,18,18,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-10 pointer-events-none bg-[length:100%_4px,3px_100%]"/>
                    
                    <FileText size={48} className="text-white/20" />
                    
                    <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-black to-transparent">
                        <div className="font-mono text-xs text-cyan-500 mb-2">SCANNING...</div>
                        <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
                            <motion.div 
                                className="h-full bg-cyan-500 shadow-[0_0_10px_#22d3ee]"
                                animate={{ width: ["0%", "100%"] }}
                                transition={{ duration: 4, repeat: Infinity }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
      </div>
    </div>
  );
}

function CyberCard({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
    return (
        <div className="relative p-1 group">
            {/* Border Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-50 group-hover:opacity-100 transition-opacity clip-path-polygon" />
            <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-white/40" />
            <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-white/40" />
            
            <div className="bg-black/80 h-full p-8 border border-white/5 backdrop-blur-sm relative z-10 hover:bg-white/5 transition-colors">
                <div className="mb-6 p-3 bg-white/5 w-fit rounded border border-white/10 shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                    {icon}
                </div>
                <h3 className="text-xl font-bold mb-3 tracking-wider">{title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
            </div>
        </div>
    );
}
