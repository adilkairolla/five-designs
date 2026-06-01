import { motion } from "motion/react";
import { Upload, Zap, Brain, FileText, ArrowRight, Play, Hexagon } from "lucide-react";

// Design 4: "Retro-Futurism" - 80s synthwave meets modern minimalism, neon gradients
export function Design4() {
  return (
    <div className="min-h-screen bg-[#0d0d1a] text-white overflow-hidden" style={{ fontFamily: "'Outfit', sans-serif" }}>
      {/* Gradient mesh background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a0a2e] via-[#0d0d1a] to-[#0d1a1a]" />
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[#ff00ff]/20 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#00ffff]/15 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#7b2dff]/10 rounded-full blur-[200px]" />
      </div>

      {/* Grid overlay */}
      <div
        className="fixed inset-0 pointer-events-none opacity-[0.08]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,0,255,0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,0,255,0.3) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
          perspective: "500px",
          transform: "rotateX(60deg)",
          transformOrigin: "center top",
        }}
      />

      {/* Scan lines */}
      <div
        className="fixed inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.03) 2px, rgba(255,255,255,0.03) 4px)",
        }}
      />

      {/* Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-[#0d0d1a]/50 border-b border-[#ff00ff]/10"
      >
        <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative">
              <Hexagon className="w-10 h-10 text-[#ff00ff]" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-xs font-black">R</span>
              </div>
            </div>
            <span className="text-xl font-bold tracking-wider">
              RATIO<span className="text-[#00ffff]">_</span>READER
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide">
            <a href="#" className="text-white/60 hover:text-[#ff00ff] transition-colors">FEATURES</a>
            <a href="#" className="text-white/60 hover:text-[#ff00ff] transition-colors">PRICING</a>
            <a href="#" className="text-white/60 hover:text-[#ff00ff] transition-colors">DOCS</a>
            <button className="relative group px-6 py-2">
              <div className="absolute inset-0 bg-gradient-to-r from-[#ff00ff] to-[#00ffff] rounded-lg opacity-80 group-hover:opacity-100 transition-opacity" />
              <div className="absolute inset-[2px] bg-[#0d0d1a] rounded-md" />
              <span className="relative z-10 font-bold">LAUNCH APP</span>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center pt-20 px-8">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#ff00ff]/30 bg-[#ff00ff]/5 mb-8"
              >
                <div className="w-2 h-2 rounded-full bg-[#00ff88] animate-pulse" />
                <span className="text-sm text-[#ff00ff] font-medium tracking-wide">NOW IN PUBLIC BETA</span>
              </motion.div>

              <h1 className="text-6xl lg:text-8xl font-black leading-[0.9] tracking-tight mb-8">
                <span className="block bg-gradient-to-r from-white via-[#ff00ff] to-white bg-clip-text text-transparent bg-[length:200%_auto] animate-[shimmer_3s_linear_infinite]">
                  DECODE
                </span>
                <span className="block">YOUR</span>
                <span className="block bg-gradient-to-r from-[#00ffff] to-[#ff00ff] bg-clip-text text-transparent">
                  DOCUMENTS
                </span>
              </h1>

              <p className="text-xl text-white/60 leading-relaxed mb-10 max-w-lg font-light">
                Upload any PDF. Our neural engine extracts summaries, key insights, quotes, and hidden patterns. The future of reading is here.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="group relative px-8 py-4 overflow-hidden rounded-lg"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-[#ff00ff] via-[#7b2dff] to-[#00ffff] animate-[gradient_3s_ease_infinite] bg-[length:200%_200%]" />
                  <span className="relative z-10 font-bold tracking-wide flex items-center gap-2">
                    <Upload className="w-5 h-5" />
                    UPLOAD PDF
                  </span>
                </motion.button>
                <button className="group flex items-center gap-3 px-6 py-4 text-white/70 hover:text-white transition-colors">
                  <div className="w-10 h-10 rounded-full border border-[#00ffff]/50 flex items-center justify-center group-hover:border-[#00ffff] group-hover:bg-[#00ffff]/10 transition-all">
                    <Play className="w-4 h-4 fill-current" />
                  </div>
                  <span className="font-medium tracking-wide">WATCH DEMO</span>
                </button>
              </div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="mt-16 grid grid-cols-3 gap-8"
              >
                {[
                  { value: "50K+", label: "ACTIVE USERS" },
                  { value: "<2s", label: "PROCESS TIME" },
                  { value: "99.7%", label: "ACCURACY" },
                ].map((stat, i) => (
                  <div key={i}>
                    <div className="text-3xl font-black bg-gradient-to-r from-[#ff00ff] to-[#00ffff] bg-clip-text text-transparent">
                      {stat.value}
                    </div>
                    <div className="text-xs text-white/40 tracking-wider mt-1">{stat.label}</div>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right - Holographic card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              <div className="relative aspect-square max-w-lg mx-auto">
                {/* Rotating border */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0"
                >
                  <div className="absolute inset-0 rounded-3xl border-2 border-transparent bg-gradient-to-r from-[#ff00ff] via-[#00ffff] to-[#ff00ff] bg-[length:200%_200%] animate-[gradient_3s_ease_infinite] opacity-50 [mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] [mask-composite:exclude] p-[2px]" />
                </motion.div>

                {/* Main card */}
                <div className="absolute inset-4 bg-[#0d0d1a]/90 backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden">
                  {/* Header */}
                  <div className="p-6 border-b border-white/10">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <FileText className="w-5 h-5 text-[#ff00ff]" />
                        <span className="text-sm font-medium text-white/80">research_paper.pdf</span>
                      </div>
                      <div className="flex gap-1">
                        <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                        <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
                        <div className="w-3 h-3 rounded-full bg-[#28c840]" />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 space-y-4">
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1 }}
                      className="p-4 rounded-lg bg-gradient-to-r from-[#ff00ff]/10 to-transparent border border-[#ff00ff]/20"
                    >
                      <div className="text-xs text-[#ff00ff] font-bold tracking-wider mb-2">KEY INSIGHT</div>
                      <div className="text-sm text-white/70 leading-relaxed">
                        The study reveals a 73% improvement in comprehension when using visual summaries...
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1.2 }}
                      className="p-4 rounded-lg bg-gradient-to-r from-[#00ffff]/10 to-transparent border border-[#00ffff]/20"
                    >
                      <div className="text-xs text-[#00ffff] font-bold tracking-wider mb-2">NOTABLE QUOTE</div>
                      <div className="text-sm text-white/70 italic leading-relaxed">
                        "Information without comprehension is mere noise..."
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1.4 }}
                      className="p-4 rounded-lg bg-gradient-to-r from-[#7b2dff]/10 to-transparent border border-[#7b2dff]/20"
                    >
                      <div className="text-xs text-[#7b2dff] font-bold tracking-wider mb-2">SUMMARY</div>
                      <div className="space-y-2">
                        <div className="h-2 bg-white/10 rounded-full w-full" />
                        <div className="h-2 bg-white/10 rounded-full w-4/5" />
                        <div className="h-2 bg-white/10 rounded-full w-3/5" />
                      </div>
                    </motion.div>
                  </div>
                </div>

                {/* Floating elements */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-4 -right-4 w-20 h-20 rounded-xl bg-gradient-to-br from-[#ff00ff] to-[#7b2dff] p-[1px]"
                >
                  <div className="w-full h-full rounded-xl bg-[#0d0d1a] flex items-center justify-center">
                    <Brain className="w-8 h-8 text-[#ff00ff]" />
                  </div>
                </motion.div>
                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  className="absolute -bottom-4 -left-4 w-16 h-16 rounded-xl bg-gradient-to-br from-[#00ffff] to-[#00ff88] p-[1px]"
                >
                  <div className="w-full h-full rounded-xl bg-[#0d0d1a] flex items-center justify-center">
                    <Zap className="w-6 h-6 text-[#00ffff]" />
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features - Neon cards */}
      <section className="py-32 px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <div className="text-sm text-[#00ffff] font-bold tracking-[0.3em] mb-4">FEATURES</div>
            <h2 className="text-5xl lg:text-6xl font-black tracking-tight">
              NEURAL <span className="bg-gradient-to-r from-[#ff00ff] to-[#00ffff] bg-clip-text text-transparent">PROCESSING</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Upload,
                title: "INSTANT UPLOAD",
                description: "Drop any PDF. Our system begins analysis in milliseconds.",
                gradient: "from-[#ff00ff] to-[#ff5500]",
              },
              {
                icon: Brain,
                title: "AI EXTRACTION",
                description: "Neural networks identify key concepts and connections.",
                gradient: "from-[#7b2dff] to-[#ff00ff]",
              },
              {
                icon: Zap,
                title: "SMART INSIGHTS",
                description: "Patterns emerge. Hidden meanings surface. Understanding deepens.",
                gradient: "from-[#00ffff] to-[#00ff88]",
              },
              {
                icon: FileText,
                title: "CLEAN OUTPUT",
                description: "Summaries, quotes, and hints delivered in perfect clarity.",
                gradient: "from-[#ff5500] to-[#ffaa00]",
              },
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-b opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: `linear-gradient(to bottom, rgba(255,0,255,0.1), transparent)` }} />
                <div className="relative p-8 rounded-2xl border border-white/10 bg-white/[0.02] hover:border-[#ff00ff]/30 transition-colors h-full">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.gradient} p-[1px] mb-6`}>
                    <div className="w-full h-full rounded-xl bg-[#0d0d1a] flex items-center justify-center">
                      <feature.icon className="w-6 h-6" style={{ color: feature.gradient.includes("ff00ff") ? "#ff00ff" : "#00ffff" }} />
                    </div>
                  </div>
                  <h3 className="text-lg font-bold tracking-wide mb-3">{feature.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works - Timeline */}
      <section className="py-32 px-8 relative">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <div className="text-sm text-[#ff00ff] font-bold tracking-[0.3em] mb-4">PROCESS</div>
            <h2 className="text-5xl lg:text-6xl font-black tracking-tight">
              HOW IT <span className="bg-gradient-to-r from-[#00ffff] to-[#ff00ff] bg-clip-text text-transparent">WORKS</span>
            </h2>
          </motion.div>

          <div className="relative">
            {/* Connecting line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#ff00ff] via-[#7b2dff] to-[#00ffff] hidden md:block" />

            {[
              { step: "01", title: "UPLOAD", description: "Drag your PDF into the neural interface. We accept any document, any size." },
              { step: "02", title: "ANALYZE", description: "Our AI deconstructs your document, mapping relationships and extracting essence." },
              { step: "03", title: "SYNTHESIZE", description: "Insights crystallize. Summaries form. The noise becomes signal." },
              { step: "04", title: "UNDERSTAND", description: "Access your personalized knowledge extraction. Ready for action." },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.15 }}
                viewport={{ once: true }}
                className={`relative grid md:grid-cols-2 gap-8 mb-16 last:mb-0 ${i % 2 === 0 ? "" : "md:text-right"}`}
              >
                <div className={`${i % 2 === 0 ? "md:pr-16" : "md:order-2 md:pl-16"}`}>
                  <div className={`inline-block px-4 py-2 rounded-full border border-[#ff00ff]/30 bg-[#ff00ff]/5 mb-4 ${i % 2 !== 0 ? "md:ml-auto" : ""}`}>
                    <span className="text-sm font-bold text-[#ff00ff] tracking-wider">{item.step}</span>
                  </div>
                  <h3 className="text-3xl font-black mb-4">{item.title}</h3>
                  <p className="text-white/50 leading-relaxed">{item.description}</p>
                </div>
                <div className={`hidden md:flex items-center ${i % 2 === 0 ? "justify-start md:order-2" : "justify-end"}`}>
                  <div className="w-4 h-4 rounded-full bg-gradient-to-r from-[#ff00ff] to-[#00ffff] relative z-10" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative rounded-3xl overflow-hidden">
            {/* Animated border */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#ff00ff] via-[#00ffff] to-[#ff00ff] animate-[gradient_3s_ease_infinite] bg-[length:200%_200%]" />
            <div className="absolute inset-[2px] bg-[#0d0d1a] rounded-3xl" />

            <div className="relative p-12 md:p-20 text-center">
              <h2 className="text-5xl md:text-6xl font-black tracking-tight mb-6">
                READY TO<br />
                <span className="bg-gradient-to-r from-[#ff00ff] to-[#00ffff] bg-clip-text text-transparent">DECODE?</span>
              </h2>
              <p className="text-xl text-white/60 mb-10 max-w-lg mx-auto">
                Join 50,000+ users who have already upgraded their reading experience. First 100 pages free.
              </p>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group relative px-10 py-5 overflow-hidden rounded-xl"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#ff00ff] to-[#00ffff]" />
                <span className="relative z-10 font-bold text-lg tracking-wide flex items-center gap-3">
                  START NOW
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </motion.button>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Hexagon className="w-8 h-8 text-[#ff00ff]" />
                <span className="text-lg font-bold tracking-wider">RATIO_READER</span>
              </div>
              <p className="text-sm text-white/40">
                The neural reading assistant for the modern age.
              </p>
            </div>
            {[
              { title: "PRODUCT", links: ["Features", "Pricing", "API", "Changelog"] },
              { title: "COMPANY", links: ["About", "Blog", "Careers"] },
              { title: "LEGAL", links: ["Privacy", "Terms", "Security"] },
            ].map((col) => (
              <div key={col.title}>
                <h4 className="font-bold text-sm text-[#ff00ff] tracking-wider mb-4">{col.title}</h4>
                <ul className="space-y-2">
                  {col.links.map((link) => (
                    <li key={link}>
                      <a href="#" className="text-sm text-white/40 hover:text-[#00ffff] transition-colors">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-12 pt-8 border-t border-white/10 text-center text-sm text-white/30">
            © 2024 RATIO_READER. ALL RIGHTS RESERVED. BUILT FOR THE FUTURE.
          </div>
        </div>
      </footer>

      {/* Global animations */}
      <style>{`
        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </div>
  );
}
