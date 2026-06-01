import { motion } from "framer-motion";
import { Sparkles, Quote, Lightbulb, Upload, ArrowRight, BookOpen, FileUp, Brain, Eye } from "lucide-react";

export default function Design2Glassmorphism() {
  return (
    <div className="design-2 min-h-screen bg-[#0a0a1a] text-[#e8e8f0] overflow-x-hidden relative">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-gradient-to-br from-[#00d4ff]/30 to-transparent rounded-full blur-[120px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-gradient-to-tl from-[#ff00a0]/30 to-transparent rounded-full blur-[120px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 4 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-[#7000ff]/20 to-transparent rounded-full blur-[150px]"
        />
      </div>

      {/* Glass Header */}
      <motion.header
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="fixed top-0 left-0 right-0 z-40 px-6 py-4"
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-3 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#00d4ff] to-[#ff00a0] flex items-center justify-center shadow-lg shadow-[#00d4ff]/20">
              <span className="text-white font-bold text-lg">R</span>
            </div>
            <span className="font-semibold text-lg tracking-wide" style={{ fontFamily: "var(--font-dm-sans)" }}>
              Ratio Reader
            </span>
          </div>
          <nav className="hidden md:flex gap-8">
            {["Features", "How it Works", "Pricing"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-sm text-white/60 hover:text-white transition-colors relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-gradient-to-r from-[#00d4ff] to-[#ff00a0] group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </nav>
          <button className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#00d4ff] to-[#7000ff] text-white text-sm font-medium hover:opacity-90 transition-opacity shadow-lg shadow-[#00d4ff]/25">
            Get Started
          </button>
        </div>
      </motion.header>

      {/* Hero Section */}
      <section className="relative pt-40 pb-32 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-[#00d4ff] animate-pulse" />
            <span className="text-sm text-white/70">Now with GPT-4 Integration</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight"
            style={{ fontFamily: "var(--font-dm-sans)" }}
          >
            Transform Your
            <br />
            <span className="bg-gradient-to-r from-[#00d4ff] via-[#7000ff] to-[#ff00a0] bg-clip-text text-transparent">
              Reading Experience
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-12"
          >
            Upload any PDF and watch as AI distills complex documents into 
            beautiful, digestible insights with intelligent summaries and contextual guidance.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <button className="group flex items-center gap-3 px-8 py-4 rounded-2xl bg-white text-[#0a0a1a] font-semibold hover:bg-white/90 transition-all shadow-2xl shadow-white/10">
              <Upload className="w-5 h-5" />
              Upload PDF
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="flex items-center gap-3 px-8 py-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 text-white font-semibold hover:bg-white/10 transition-all">
              <BookOpen className="w-5 h-5" />
              Watch Demo
            </button>
          </motion.div>
        </div>
      </section>

      {/* Floating Features Cards */}
      <section className="relative py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Sparkles,
                title: "AI Summaries",
                desc: "Intelligent condensation preserving nuance",
                gradient: "from-[#00d4ff] to-[#0099cc]",
              },
              {
                icon: Quote,
                title: "Smart Quotes",
                desc: "Extract impactful statements automatically",
                gradient: "from-[#ff00a0] to-[#cc007a]",
              },
              {
                icon: Lightbulb,
                title: "Context Hints",
                desc: "Background info for complex concepts",
                gradient: "from-[#7000ff] to-[#5200bd]",
              },
              {
                icon: Eye,
                title: "Visual Insights",
                desc: "See connections with mind maps",
                gradient: "from-[#00ff88] to-[#00cc6a]",
              },
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative p-8 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-300"
              >
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 shadow-lg`}>
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{feature.desc}</p>
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Demo Section */}
      <section className="relative py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">See It In Action</h2>
            <p className="text-white/60">Watch how Ratio Reader transforms your documents</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/10 p-2"
          >
            <div className="rounded-2xl bg-[#0d0d1f] p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center">
                      <FileUp className="w-6 h-6 text-[#00d4ff]" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Upload Document</h3>
                      <p className="text-sm text-white/50">PDF, DOCX, or TXT files</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center">
                      <Brain className="w-6 h-6 text-[#ff00a0]" />
                    </div>
                    <div>
                      <h3 className="font-semibold">AI Analysis</h3>
                      <p className="text-sm text-white/50">Deep content understanding</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center">
                      <Sparkles className="w-6 h-6 text-[#7000ff]" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Get Insights</h3>
                      <p className="text-sm text-white/50">Summaries, quotes & hints</p>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#00d4ff]/20 to-[#ff00a0]/20 rounded-2xl blur-2xl" />
                  <div className="relative rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 p-6 space-y-4">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                      <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
                      <div className="w-3 h-3 rounded-full bg-[#28c840]" />
                    </div>
                    <div className="space-y-3">
                      <div className="h-4 w-3/4 bg-white/10 rounded" />
                      <div className="h-4 w-full bg-white/10 rounded" />
                      <div className="h-4 w-5/6 bg-white/10 rounded" />
                      <div className="h-4 w-full bg-white/10 rounded" />
                      <div className="h-4 w-2/3 bg-white/10 rounded" />
                    </div>
                    <div className="pt-4 border-t border-white/10">
                      <div className="flex items-center gap-2 text-sm text-[#00d4ff]">
                        <Sparkles className="w-4 h-4" />
                        <span>Key Insight Generated</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="relative p-12 md:p-16 rounded-[2.5rem] bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/10 overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-b from-[#00d4ff]/30 to-transparent blur-[100px]" />
            <div className="relative">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to Read
                <span className="block bg-gradient-to-r from-[#00d4ff] to-[#ff00a0] bg-clip-text text-transparent">
                  Differently?
                </span>
              </h2>
              <p className="text-lg text-white/60 mb-8 max-w-xl mx-auto">
                Join 50,000+ readers who have transformed how they consume information.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button className="px-8 py-4 rounded-2xl bg-gradient-to-r from-[#00d4ff] to-[#7000ff] text-white font-semibold hover:opacity-90 transition-opacity shadow-lg shadow-[#00d4ff]/25">
                  Start Free Trial
                </button>
                <button className="px-8 py-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 text-white font-semibold hover:bg-white/10 transition-all">
                  View Pricing
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="relative py-12 px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#00d4ff] to-[#ff00a0] flex items-center justify-center">
              <span className="text-white font-bold text-lg">R</span>
            </div>
            <span className="font-semibold text-lg">Ratio Reader</span>
          </div>
          <div className="text-sm text-white/40">
            © 2024 Ratio Reader. All rights reserved.
          </div>
          <div className="flex gap-8 text-sm">
            {["Privacy", "Terms", "Contact"].map((item) => (
              <a key={item} href="#" className="text-white/60 hover:text-white transition-colors">
                {item}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}