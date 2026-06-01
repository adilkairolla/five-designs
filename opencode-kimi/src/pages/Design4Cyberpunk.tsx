import { motion } from "framer-motion";
import { Sparkles, Quote, Lightbulb, Upload, ArrowRight, Terminal, Cpu, Zap, Lock } from "lucide-react";

export default function Design4Cyberpunk() {
  return (
    <div className="design-4 min-h-screen bg-[#050505] text-[#00ff41] overflow-x-hidden relative" style={{ fontFamily: "var(--font-space-mono)" }}>
      {/* Scanline Effect */}
      <div className="fixed inset-0 pointer-events-none z-50 opacity-[0.03]" style={{
        background: "repeating-linear-gradient(0deg, transparent, transparent 2px, #00ff41 2px, #00ff41 4px)"
      }} />
      
      {/* Grid Background */}
      <div className="fixed inset-0 pointer-events-none opacity-10" style={{
        backgroundImage: "linear-gradient(#00ff41 1px, transparent 1px), linear-gradient(90deg, #00ff41 1px, transparent 1px)",
        backgroundSize: "50px 50px"
      }} />

      {/* Animated Glitch Background */}
      <motion.div
        animate={{
          opacity: [0.1, 0.3, 0.1],
        }}
        transition={{ duration: 3, repeat: Infinity }}
        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#ff0080]/20 blur-[150px] pointer-events-none"
      />

      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="fixed top-0 left-0 right-0 z-40 border-b border-[#00ff41]/30 bg-[#050505]/90 backdrop-blur-sm"
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <Terminal className="w-6 h-6" />
            <span className="text-lg font-bold tracking-wider">RATIO_READER.exe</span>
          </div>
          <nav className="hidden md:flex gap-8 text-sm">
            {["[FEATURES]", "[SYSTEM]", "[CONNECT]"].map((item) => (
              <a
                key={item}
                href="#"
                className="hover:text-[#ff0080] transition-colors relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-full h-px bg-[#00ff41] scale-x-0 group-hover:scale-x-100 transition-transform" />
              </a>
            ))}
          </nav>
          <button className="px-4 py-2 border border-[#00ff41] text-[#00ff41] text-sm hover:bg-[#00ff41] hover:text-[#050505] transition-all">
            [INITIATE]
          </button>
        </div>
      </motion.header>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <span className="text-[#ff0080]">&gt;</span> SYSTEM_STATUS: <span className="animate-pulse">ONLINE</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight"
          >
            <span className="text-[#ff0080]">&gt;</span> NEURAL_DOCUMENT
            <br />
            <span className="text-[#00ffff]">_PROCESSING</span>
            <br />
            <span className="text-white/50">_SYSTEM_v2.0</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="max-w-2xl mb-12 space-y-2 text-sm"
          >
            <div><span className="text-[#00ffff]">&gt;&gt;</span> Initializing document analysis protocols...</div>
            <div><span className="text-[#00ffff]">&gt;&gt;</span> Extracting key insights and semantic structures...</div>
            <div><span className="text-[#00ffff]">&gt;&gt;</span> Compiling summary with 99.7% accuracy...</div>
            <div className="text-[#ff0080]">&gt;&gt; READY_FOR_UPLOAD</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="flex flex-wrap gap-4"
          >
            <button className="group flex items-center gap-3 px-6 py-3 bg-[#00ff41] text-[#050505] font-bold hover:bg-[#00ffff] transition-colors">
              <Upload className="w-4 h-4" />
              [UPLOAD_PDF]
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-6 py-3 border border-[#ff0080] text-[#ff0080] font-bold hover:bg-[#ff0080] hover:text-[#050505] transition-colors">
              [VIEW_DEMO]
            </button>
          </motion.div>
        </div>
      </section>

      {/* System Stats */}
      <section className="border-y border-[#00ff41]/30 bg-[#00ff41]/5">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4">
          {[
            { label: "DOCS_PROCESSED", value: "50,000+" },
            { label: "INSIGHTS_GEN", value: "2M+" },
            { label: "ACCURACY", value: "99.9%" },
            { label: "UPTIME", value: "99.99%" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className={`p-6 ${i < 3 ? "border-r border-[#00ff41]/30" : ""}`}
            >
              <div className="text-xs text-[#00ffff] mb-2">{stat.label}</div>
              <div className="text-2xl font-bold text-[#00ff41]">{stat.value}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <span className="text-[#ff0080]">&gt;</span> MODULE_FEATURES
            <div className="h-px bg-[#00ff41]/30 mt-4" />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-px bg-[#00ff41]/20">
            {[
              {
                icon: Sparkles,
                code: "AI_SUM.v2",
                title: "NEURAL_SUMMARIZATION",
                desc: "Advanced AI algorithms compress documents while preserving semantic integrity and contextual relevance.",
              },
              {
                icon: Quote,
                code: "QTE_EXT.v1",
                title: "QUOTE_EXTRACTION",
                desc: "Automated identification and extraction of high-impact statements with sentiment analysis.",
              },
              {
                icon: Lightbulb,
                code: "CTX_HNT.v3",
                title: "CONTEXT_HINTS",
                desc: "Real-time background information injection for enhanced comprehension of complex concepts.",
              },
              {
                icon: Lock,
                code: "ENC_SEC.v4",
                title: "SECURE_PROCESSING",
                desc: "End-to-end encryption with zero-knowledge architecture. Your data remains yours alone.",
              },
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-[#050505] p-8 group hover:bg-[#00ff41]/5 transition-colors border border-[#00ff41]/20"
              >
                <div className="flex items-center gap-3 mb-4">
                  <feature.icon className="w-5 h-5 text-[#ff0080]" />
                  <span className="text-xs text-[#00ffff]">{feature.code}</span>
                </div>
                <h3 className="text-lg font-bold mb-3 text-white">{feature.title}</h3>
                <p className="text-sm text-[#00ff41]/70 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Flow */}
      <section className="py-24 px-6 border-y border-[#00ff41]/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <span className="text-[#ff0080]">&gt;</span> EXECUTION_PROTOCOL
            <div className="h-px bg-[#00ff41]/30 mt-4" />
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: "01", title: "UPLOAD", desc: "Initialize file transfer. Supported formats: PDF, DOCX, TXT", icon: Upload },
              { step: "02", title: "PROCESS", desc: "Neural networks analyze content structure and semantic meaning", icon: Cpu },
              { step: "03", title: "OUTPUT", desc: "Receive structured insights, summaries, and actionable data", icon: Zap },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="text-5xl font-bold text-[#00ff41]/10 mb-4">{item.step}</div>
                <div className="flex items-center gap-3 mb-4">
                  <item.icon className="w-5 h-5 text-[#ff0080]" />
                  <h3 className="text-lg font-bold text-white">{item.title}</h3>
                </div>
                <p className="text-sm text-[#00ff41]/70 leading-relaxed">{item.desc}</p>
                {i < 2 && (
                  <div className="hidden md:block absolute top-8 right-0 w-full h-px bg-gradient-to-r from-[#00ff41] to-transparent opacity-30" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Terminal CTA */}
      <section className="py-24 px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <div className="border border-[#00ff41]/30 bg-[#050505] p-8">
            <div className="flex items-center gap-2 mb-6 pb-4 border-b border-[#00ff41]/20">
              <div className="w-3 h-3 rounded-full bg-[#ff0080]" />
              <div className="w-3 h-3 rounded-full bg-[#00ffff]" />
              <div className="w-3 h-3 rounded-full bg-[#00ff41]" />
              <span className="ml-4 text-xs text-[#00ff41]/50">ratio_reader_init.sh</span>
            </div>
            <div className="space-y-3 text-sm mb-8">
              <div><span className="text-[#00ffff]">user@ratio:~$</span> ./start_reading.sh</div>
              <div className="text-[#00ff41]/70">Initializing Ratio Reader Protocol...</div>
              <div className="text-[#00ff41]/70">Loading neural networks...</div>
              <div className="text-[#ff0080]">READY TO TRANSFORM YOUR READING EXPERIENCE</div>
              <div><span className="text-[#00ffff]">user@ratio:~$</span> <span className="animate-pulse">_</span></div>
            </div>
            <div className="flex flex-wrap gap-4">
              <button className="px-6 py-3 bg-[#00ff41] text-[#050505] font-bold hover:bg-[#00ffff] transition-colors">
                [EXECUTE_FREE_TRIAL]
              </button>
              <button className="px-6 py-3 border border-[#ff0080] text-[#ff0080] font-bold hover:bg-[#ff0080] hover:text-[#050505] transition-colors">
                [VIEW_SYSTEM_SPECS]
              </button>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#00ff41]/30 py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <Terminal className="w-5 h-5" />
            <span className="font-bold tracking-wider">RATIO_READER.exe</span>
          </div>
          <div className="text-xs text-[#00ff41]/50">
            © 2024_RATIO_READER // ALL_SYSTEMS_OPERATIONAL
          </div>
          <div className="flex gap-6 text-xs">
            {["[PRIVACY]", "[TERMS]", "[CONTACT]"].map((item) => (
              <a key={item} href="#" className="text-[#00ff41]/70 hover:text-[#ff0080] transition-colors">
                {item}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}