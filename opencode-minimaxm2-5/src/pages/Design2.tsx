import { motion } from "motion/react";
import { Sparkles, Quote, Lightbulb, Zap, ChevronRight, Cpu, Layers, Brain, FileUp } from "lucide-react";

export default function Design2() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white font-mono overflow-x-hidden">
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#1a0a2e] via-[#0a0a0f] to-[#0a0a0f]]" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#00ffff]/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#ff00ff]/10 rounded-full blur-[100px]" />
      </div>

      <header className="relative z-10 py-6 px-8 flex justify-between items-center border-b border-white/10">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-r from-[#00ffff] to-[#ff00ff] flex items-center justify-center">
            <Zap className="text-black" size={20} />
          </div>
          <span className="text-2xl font-bold tracking-wider">RATIO</span>
        </div>
        <nav className="hidden md:flex gap-8 text-sm">
          <a href="#features" className="text-[#00ffff] hover:text-white transition-colors">// FEATURES</a>
          <a href="#demo" className="hover:text-[#00ffff] transition-colors">// DEMO</a>
          <a href="#pricing" className="hover:text-[#00ffff] transition-colors">// PRICING</a>
        </nav>
        <button className="bg-gradient-to-r from-[#00ffff] to-[#00ffff]/80 text-black px-6 py-2 font-bold text-sm hover:shadow-[0_0_20px_rgba(0,255,255,0.5)] transition-shadow">
          LAUNCH
        </button>
      </header>

      <section className="relative z-10 py-32 px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <div className="inline-block px-4 py-1 border border-[#00ffff]/30 bg-[#00ffff]/10 text-[#00ffff] text-xs tracking-[0.3em] mb-8">
              /// SYSTEM READY
            </div>
            <h1 className="text-6xl md:text-8xl font-black mb-6 leading-tight">
              <span className="bg-gradient-to-r from-white via-[#00ffff] to-[#ff00ff] bg-clip-text text-transparent">
                DECODE
              </span>
              <br />
              <span className="text-white">ANY DOCUMENT</span>
            </h1>
            <p className="text-[#888] text-lg max-w-2xl mx-auto mb-12">
              Neural-powered PDF analysis. Extract summaries, quotes, and insights in milliseconds. 
              The future of document understanding is here.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#00ffff] text-black px-8 py-4 font-bold text-lg flex items-center gap-3 mx-auto sm:mx-0"
              >
                <FileUp size={20} />
                UPLOAD PDF
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-white/30 px-8 py-4 font-bold text-lg hover:bg-white/10 transition-colors"
              >
                WATCH DEMO
              </motion.button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="relative mt-20"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-[#00ffff] via-[#ff00ff] to-[#00ffff] blur-[30px] opacity-30" />
            <div className="relative bg-[#0f0f1a] border border-white/20 p-8 rounded-lg">
              <div className="flex gap-2 mb-6">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-[#1a1a2e] p-6 rounded border border-[#00ffff]/20">
                  <Sparkles className="text-[#00ffff] mb-4" size={24} />
                  <h4 className="text-[#00ffff] font-bold mb-2">// SUMMARY</h4>
                  <p className="text-sm text-[#888]">AI-generated overview capturing key concepts and main arguments...</p>
                </div>
                <div className="bg-[#1a1a2e] p-6 rounded border border-[#ff00ff]/20">
                  <Quote className="text-[#ff00ff] mb-4" size={24} />
                  <h4 className="text-[#ff00ff] font-bold mb-2">// QUOTES</h4>
                  <p className="text-sm text-[#888]">Extracted passages that define the document's core message...</p>
                </div>
                <div className="bg-[#1a1a2e] p-6 rounded border border-[#00ffff]/20">
                  <Lightbulb className="text-[#00ffff] mb-4" size={24} />
                  <h4 className="text-[#00ffff] font-bold mb-2">// HINTS</h4>
                  <p className="text-sm text-[#888]">Contextual insights connecting concepts to real-world applications...</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="features" className="relative z-10 py-24 px-8 bg-[#0f0f1a]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              <span className="text-[#00ffff]">///</span> CAPABILITIES
            </h2>
            <p className="text-[#666]">Next-generation document intelligence</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Brain, title: "NEURAL PROCESSING", desc: "Deep learning models trained on millions of documents" },
              { icon: Layers, title: "MULTI-LAYER", desc: "Extracts semantic meaning, context, and relationships" },
              { icon: Cpu, title: "INSTANT", desc: "Process documents in milliseconds, not minutes" },
              { icon: Zap, title: "ACCURATE", desc: "99.2% accuracy on key information extraction" },
            ].map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="group bg-[#1a1a2e] p-6 border border-white/10 hover:border-[#00ffff]/50 transition-colors"
              >
                <feature.icon className="text-[#00ffff] mb-4 group-hover:scale-110 transition-transform" size={32} />
                <h4 className="font-bold mb-2">{feature.title}</h4>
                <p className="text-sm text-[#666]">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 py-24 px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-[#1a1a2e] to-[#0f0f1a] border border-white/10 p-12 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#ff00ff]/20 blur-[80px]" />
            <div className="relative z-10">
              <h3 className="text-3xl font-black mb-6">READY TO UPGRADE?</h3>
              <p className="text-[#888] mb-8">Join 10,000+ users who've already transitioned to intelligent reading.</p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-[#00ffff] text-black px-8 py-3 font-bold hover:shadow-[0_0_30px_rgba(0,255,255,0.5)] transition-shadow">
                  START FREE
                </button>
                <button className="border border-white/30 px-8 py-3 font-bold hover:bg-white/10 transition-colors">
                  VIEW DOCS
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <footer className="relative z-10 py-12 px-8 border-t border-white/10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-r from-[#00ffff] to-[#ff00ff] flex items-center justify-center">
              <Zap className="text-black" size={16} />
            </div>
            <span className="font-bold tracking-wider">RATIO</span>
          </div>
          <p className="text-[#666] text-sm">© 2025 RATIO SYSTEMS. ALL RIGHTS RESERVED.</p>
        </div>
      </footer>
    </div>
  );
}
