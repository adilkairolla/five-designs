import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Command, Cpu } from 'lucide-react';

export default function Design5() {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-pink-500 overflow-hidden relative">
      {/* Dynamic Background */}
      <div className="fixed inset-0 z-0">
         <div className="absolute top-[-20%] left-[-10%] w-[80vw] h-[80vw] bg-blue-600/30 rounded-full blur-[100px] animate-pulse" style={{animationDuration: '10s'}} />
         <div className="absolute bottom-[-20%] right-[-10%] w-[60vw] h-[60vw] bg-pink-600/20 rounded-full blur-[100px] animate-pulse" style={{animationDuration: '15s'}} />
      </div>

      <div className="relative z-10">
        <nav className="flex justify-between items-center px-8 py-6 max-w-7xl mx-auto">
            <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-pink-400">Ratio.</div>
            <div className="flex gap-4">
                <button className="px-4 py-2 text-sm font-medium text-white/70 hover:text-white transition-colors">Sign In</button>
                <button className="px-5 py-2 text-sm font-medium bg-white text-black rounded-full hover:bg-white/90 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                    Get Started
                </button>
            </div>
        </nav>

        <main className="max-w-7xl mx-auto px-6 pt-20 pb-32 flex flex-col items-center text-center">
             <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8"
             >
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-xs font-medium text-white/80">Ratio Reader 2.0 is live</span>
             </motion.div>

             <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-8 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60">
                Unlock the <br/> unseen.
             </h1>
             
             <p className="max-w-xl text-lg md:text-xl text-white/60 leading-relaxed mb-12">
                Experience a new way to interact with documents. Ratio isolates the signal from the noise, delivering pure insight.
             </p>

             <div className="flex gap-4">
                <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-pink-600 rounded-full font-bold text-lg hover:shadow-[0_0_40px_rgba(79,70,229,0.4)] transition-all transform hover:scale-105">
                    Start Reading Free
                </button>
             </div>
        </main>

        <section className="max-w-7xl mx-auto px-6 pb-32">
            <div className="grid md:grid-cols-3 gap-6">
                <GlassCard 
                    icon={<Layers className="text-blue-400" />}
                    title="Structure Analysis"
                    desc="Automatically detects and organizes the logical flow of your documents."
                />
                <GlassCard 
                    icon={<Command className="text-pink-400" />}
                    title="Command Control"
                    desc="Use natural language to query your PDF. Just ask, and Ratio answers."
                />
                <GlassCard 
                    icon={<Cpu className="text-purple-400" />}
                    title="Neural Processing"
                    desc="Powered by advanced LLMs to provide context that goes beyond the text."
                />
            </div>
        </section>
        
        {/* Floating UI Mockup */}
        <section className="max-w-5xl mx-auto px-6 pb-20">
            <motion.div 
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="relative rounded-2xl border border-white/20 bg-black/40 backdrop-blur-xl overflow-hidden aspect-video shadow-2xl"
            >
                {/* Fake UI Header */}
                <div className="h-12 border-b border-white/10 flex items-center px-4 gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/20" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/20" />
                    <div className="w-3 h-3 rounded-full bg-green-500/20" />
                    <div className="ml-4 w-64 h-6 rounded-full bg-white/5" />
                </div>
                {/* Fake UI Body */}
                <div className="p-8 flex gap-8 h-full">
                    <div className="w-1/3 space-y-4">
                        <div className="h-4 w-3/4 bg-white/10 rounded" />
                        <div className="h-4 w-full bg-white/10 rounded" />
                        <div className="h-4 w-5/6 bg-white/10 rounded" />
                        <div className="h-32 w-full bg-blue-500/10 rounded border border-blue-500/30 mt-8 p-4">
                            <div className="text-blue-300 text-xs mb-2">AI SUMMARY</div>
                            <div className="h-2 w-full bg-blue-400/20 rounded mb-2" />
                            <div className="h-2 w-5/6 bg-blue-400/20 rounded" />
                        </div>
                    </div>
                    <div className="w-2/3 bg-white/5 rounded-lg border border-white/5 p-6 relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-pink-500/10 pointer-events-none" />
                        <div className="space-y-3">
                            {[...Array(12)].map((_, i) => (
                                <div key={i} className="h-2 bg-white/10 rounded" style={{ width: `${Math.random() * 40 + 60}%`}} />
                            ))}
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
      </div>
    </div>
  );
}

function GlassCard({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
    return (
        <motion.div 
            whileHover={{ y: -5 }}
            className="p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/10 transition-colors"
        >
            <div className="bg-white/10 w-12 h-12 rounded-xl flex items-center justify-center mb-6 backdrop-blur-xl border border-white/20">
                {icon}
            </div>
            <h3 className="text-xl font-bold mb-3">{title}</h3>
            <p className="text-white/60 leading-relaxed">{desc}</p>
        </motion.div>
    );
}
