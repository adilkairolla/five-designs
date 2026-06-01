import { motion } from "framer-motion";
import { FileText, Sparkles, Quote, Lightbulb, Upload, ArrowRight, BookOpen, Highlighter } from "lucide-react";

export default function Design1Brutalist() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <div className="design-1 min-h-screen bg-[#f5f5f0] text-[#1a1a1a] overflow-x-hidden">
      {/* Header */}
      <motion.header
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="fixed top-0 left-0 right-0 z-40 flex justify-between items-center px-6 py-4 border-b-2 border-[#1a1a1a] bg-[#f5f5f0]"
      >
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-[#ff3333] flex items-center justify-center">
            <span className="text-white font-bold text-sm">R</span>
          </div>
          <span className="font-bold text-sm tracking-widest">RATIO READER</span>
        </div>
        <nav className="hidden md:flex gap-8 text-xs tracking-widest">
          <a href="#features" className="hover:text-[#ff3333] transition-colors">FEATURES</a>
          <a href="#how" className="hover:text-[#ff3333] transition-colors">HOW IT WORKS</a>
          <a href="#pricing" className="hover:text-[#ff3333] transition-colors">PRICING</a>
        </nav>
        <button className="px-4 py-2 bg-[#1a1a1a] text-white text-xs font-bold tracking-widest hover:bg-[#ff3333] transition-colors">
          GET STARTED
        </button>
      </motion.header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 md:px-12 lg:px-24">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-7xl mx-auto"
        >
          <motion.div variants={itemVariants} className="mb-6">
            <span className="inline-block px-3 py-1 bg-[#1a1a1a] text-white text-xs font-bold tracking-widest">
              NEW RELEASE v2.0
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.9] tracking-tight mb-8"
            style={{ fontFamily: "var(--font-space-mono)" }}
          >
            READ LESS.<br />
            <span className="text-[#ff3333]">UNDERSTAND</span><br />
            EVERYTHING.
          </motion.h1>

          <motion.div variants={itemVariants} className="max-w-2xl mb-12">
            <p className="text-lg md:text-xl leading-relaxed border-l-4 border-[#ff3333] pl-6">
              Upload any PDF. Get intelligent summaries, key insights, quotes, and contextual hints. 
              Transform dense documents into digestible knowledge.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
            <button className="group flex items-center gap-3 px-8 py-4 bg-[#1a1a1a] text-white font-bold tracking-widest hover:bg-[#ff3333] transition-all">
              UPLOAD PDF
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 border-2 border-[#1a1a1a] font-bold tracking-widest hover:bg-[#1a1a1a] hover:text-white transition-all">
              VIEW DEMO
            </button>
          </motion.div>
        </motion.div>
      </section>

      {/* Stats Bar */}
      <section className="border-y-2 border-[#1a1a1a] bg-[#1a1a1a] text-white">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {[
            { value: "50K+", label: "DOCUMENTS PROCESSED" },
            { value: "2M+", label: "INSIGHTS GENERATED" },
            { value: "99%", label: "ACCURACY RATE" },
            { value: "3s", label: "AVG PROCESSING TIME" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className={`px-6 py-8 ${i < 3 ? "border-r-2 border-white/20" : ""}`}
            >
              <div className="text-3xl md:text-4xl font-bold text-[#ff3333] mb-2">{stat.value}</div>
              <div className="text-xs tracking-widest opacity-60">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-24 px-6 md:px-12 lg:px-24">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto"
        >
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">FEATURES</h2>
            <div className="w-24 h-1 bg-[#ff3333]"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-px bg-[#1a1a1a]">
            {[
              {
                icon: Sparkles,
                title: "INTELLIGENT SUMMARIES",
                desc: "AI-powered condensation that captures the essence without losing nuance. Every summary preserves the author's intent.",
              },
              {
                icon: Quote,
                title: "KEY QUOTES EXTRACTION",
                desc: "Automatically identify and extract the most impactful statements. Build your personal quote library from every document.",
              },
              {
                icon: Lightbulb,
                title: "CONTEXTUAL HINTS",
                desc: "Get background information, definitions, and explanations for complex concepts. Never miss the subtext again.",
              },
              {
                icon: Highlighter,
                title: "SMART HIGHLIGHTING",
                desc: "Visual emphasis on critical passages with color-coded importance levels. See what matters at a glance.",
              },
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-[#f5f5f0] p-8 md:p-12 group hover:bg-[#1a1a1a] hover:text-white transition-all duration-300"
              >
                <feature.icon className="w-8 h-8 mb-6 text-[#ff3333] group-hover:text-[#ff3333]" />
                <h3 className="text-xl font-bold mb-4 tracking-wide">{feature.title}</h3>
                <p className="text-sm leading-relaxed opacity-70 group-hover:opacity-90">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* How It Works */}
      <section id="how" className="py-24 px-6 md:px-12 lg:px-24 bg-[#1a1a1a] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">HOW IT WORKS</h2>
            <div className="w-24 h-1 bg-[#ff3333]"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "UPLOAD",
                desc: "Drag and drop your PDF or select from your device. We support all PDF formats up to 100MB.",
                icon: Upload,
              },
              {
                step: "02",
                title: "PROCESS",
                desc: "Our AI analyzes the document structure, extracts key information, and generates insights.",
                icon: FileText,
              },
              {
                step: "03",
                title: "LEARN",
                desc: "Review your personalized summary with quotes, hints, and visual highlights. Export or save.",
                icon: BookOpen,
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="text-6xl font-bold text-[#ff3333] opacity-30 mb-4">{item.step}</div>
                <item.icon className="w-6 h-6 mb-4 text-white/60" />
                <h3 className="text-xl font-bold mb-4 tracking-widest">{item.title}</h3>
                <p className="text-sm leading-relaxed text-white/60">{item.desc}</p>
                {i < 2 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-px bg-white/20"></div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 md:px-12 lg:px-24">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center border-4 border-[#1a1a1a] p-12 md:p-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            START READING<br />
            <span className="text-[#ff3333]">SMARTER TODAY</span>
          </h2>
          <p className="text-lg mb-8 opacity-70">
            Join thousands of researchers, students, and professionals who read faster and understand more.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-8 py-4 bg-[#ff3333] text-white font-bold tracking-widest hover:bg-[#1a1a1a] transition-colors">
              FREE TRIAL
            </button>
            <button className="px-8 py-4 border-2 border-[#1a1a1a] font-bold tracking-widest hover:bg-[#1a1a1a] hover:text-white transition-all">
              SEE PLANS
            </button>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="border-t-2 border-[#1a1a1a] py-12 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-[#1a1a1a] flex items-center justify-center">
              <span className="text-white font-bold text-sm">R</span>
            </div>
            <span className="font-bold text-sm tracking-widest">RATIO READER</span>
          </div>
          <div className="text-xs tracking-widest opacity-60">
            © 2024 RATIO READER. ALL RIGHTS RESERVED.
          </div>
          <div className="flex gap-6 text-xs tracking-widest">
            <a href="#" className="hover:text-[#ff3333] transition-colors">PRIVACY</a>
            <a href="#" className="hover:text-[#ff3333] transition-colors">TERMS</a>
            <a href="#" className="hover:text-[#ff3333] transition-colors">CONTACT</a>
          </div>
        </div>
      </footer>
    </div>
  );
}