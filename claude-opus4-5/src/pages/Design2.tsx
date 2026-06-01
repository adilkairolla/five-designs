import { motion } from "motion/react";
import { Upload, Zap, Brain, FileText, ChevronRight, X, Menu } from "lucide-react";
import { useState } from "react";

// Design 2: "Neo-Brutalist" - Raw, bold, unconventional layout with harsh colors and geometric shapes
export function Design2() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#f5f0e8] text-[#1a1a1a] overflow-hidden" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
      {/* Aggressive grid background */}
      <div className="fixed inset-0 pointer-events-none">
        <div
          className="w-full h-full opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(#1a1a1a 1px, transparent 1px),
              linear-gradient(90deg, #1a1a1a 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Floating geometric shapes */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="fixed top-20 right-20 w-64 h-64 border-4 border-[#ff5722] opacity-20 pointer-events-none"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
        className="fixed bottom-32 left-16 w-48 h-48 bg-[#2962ff] opacity-10 pointer-events-none"
      />

      {/* Navigation - Brutal style */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#1a1a1a] text-[#f5f0e8]">
        <div className="flex items-center justify-between px-4">
          <div className="py-4 px-6 border-r border-[#f5f0e8]/20">
            <span className="text-2xl font-black tracking-tighter">RATIO</span>
            <span className="text-xs ml-1 bg-[#ff5722] text-[#1a1a1a] px-2 py-0.5">READER</span>
          </div>
          <div className="hidden md:flex items-center">
            {["FEATURES", "PRICING", "DOCS", "BLOG"].map((item) => (
              <a
                key={item}
                href="#"
                className="py-4 px-6 border-l border-[#f5f0e8]/20 hover:bg-[#ff5722] hover:text-[#1a1a1a] transition-colors text-sm font-bold"
              >
                {item}
              </a>
            ))}
            <button className="py-4 px-8 bg-[#ff5722] text-[#1a1a1a] font-black text-sm border-l border-[#f5f0e8]/20 hover:bg-[#ffab91] transition-colors">
              TRY IT →
            </button>
          </div>
          <button
            className="md:hidden p-4"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed inset-0 z-40 bg-[#1a1a1a] text-[#f5f0e8] pt-20 md:hidden"
        >
          {["FEATURES", "PRICING", "DOCS", "BLOG", "TRY IT"].map((item) => (
            <a
              key={item}
              href="#"
              className="block py-6 px-8 border-b border-[#f5f0e8]/20 text-2xl font-black"
            >
              {item}
            </a>
          ))}
        </motion.div>
      )}

      {/* Hero Section - Brutalist asymmetry */}
      <section className="min-h-screen pt-32 pb-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Stacked headline */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-xs font-bold text-[#ff5722] mb-4 tracking-[0.5em]">
              [PDF ANALYSIS TOOL]
            </div>
            <h1 className="text-[clamp(3rem,15vw,12rem)] font-black leading-[0.85] tracking-tighter">
              <span className="block">STOP</span>
              <span className="block text-[#ff5722]">READING</span>
              <span className="block bg-[#1a1a1a] text-[#f5f0e8] inline-block px-4 -rotate-1">
                START
              </span>
              <span className="block">KNOWING</span>
            </h1>
          </motion.div>

          {/* Offset description box */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-12 md:mt-0 md:absolute md:right-8 md:top-1/2 md:-translate-y-1/2 max-w-md"
          >
            <div className="bg-[#2962ff] text-white p-8 rotate-1 shadow-[8px_8px_0_#1a1a1a]">
              <p className="text-lg leading-relaxed font-medium">
                Upload your PDFs. Get instant summaries, key insights, important quotes, and everything else your brain needs. No fluff. No BS.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {["SUMMARIES", "QUOTES", "INSIGHTS", "HINTS"].map((tag) => (
                  <span key={tag} className="bg-white/20 px-3 py-1 text-xs font-bold">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-16 flex flex-wrap gap-4"
          >
            <button className="group bg-[#1a1a1a] text-[#f5f0e8] px-8 py-5 font-black text-lg flex items-center gap-2 hover:bg-[#ff5722] transition-colors shadow-[4px_4px_0_#ff5722] hover:shadow-[4px_4px_0_#1a1a1a]">
              UPLOAD PDF
              <Upload className="w-5 h-5 group-hover:rotate-12 transition-transform" />
            </button>
            <button className="border-4 border-[#1a1a1a] px-8 py-5 font-black text-lg hover:bg-[#1a1a1a] hover:text-[#f5f0e8] transition-colors">
              SEE DEMO
            </button>
          </motion.div>

          {/* Stats bar */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-20 border-4 border-[#1a1a1a] bg-white"
          >
            <div className="grid grid-cols-2 md:grid-cols-4">
              {[
                { number: "1M+", label: "PDFS PROCESSED" },
                { number: "50K+", label: "ACTIVE USERS" },
                { number: "99.2%", label: "ACCURACY" },
                { number: "<3s", label: "AVG PROCESS TIME" },
              ].map((stat, i) => (
                <div
                  key={i}
                  className={`p-6 ${i < 3 ? "border-r-4 border-[#1a1a1a]" : ""} ${i < 2 ? "border-b-4 md:border-b-0 border-[#1a1a1a]" : ""}`}
                >
                  <div className="text-4xl md:text-5xl font-black text-[#ff5722]">{stat.number}</div>
                  <div className="text-xs font-bold text-[#1a1a1a]/60 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* How it works - Stacked cards */}
      <section className="py-20 px-4 md:px-8 bg-[#1a1a1a] text-[#f5f0e8]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <span className="text-xs font-bold text-[#ff5722] tracking-[0.5em]">[HOW IT WORKS]</span>
            <h2 className="text-6xl md:text-8xl font-black mt-4 tracking-tighter">
              THREE<br />STEPS
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Upload,
                step: "01",
                title: "DROP IT",
                description: "Drag and drop your PDF. Any size. Any topic. We don't judge.",
                color: "#ff5722",
              },
              {
                icon: Zap,
                step: "02",
                title: "CRUNCH IT",
                description: "Our AI tears through your document faster than you can blink.",
                color: "#2962ff",
              },
              {
                icon: Brain,
                step: "03",
                title: "GET IT",
                description: "Summaries, insights, quotes—everything served on a silver platter.",
                color: "#00c853",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15 }}
                viewport={{ once: true }}
                className="bg-[#f5f0e8] text-[#1a1a1a] p-8 relative group"
                style={{ transform: `rotate(${i % 2 === 0 ? -1 : 1}deg)` }}
              >
                <div
                  className="absolute -top-4 -left-4 w-16 h-16 flex items-center justify-center font-black text-2xl text-[#1a1a1a]"
                  style={{ backgroundColor: item.color }}
                >
                  {item.step}
                </div>
                <item.icon className="w-12 h-12 mt-8 mb-6" style={{ color: item.color }} />
                <h3 className="text-3xl font-black mb-4">{item.title}</h3>
                <p className="text-[#1a1a1a]/70 font-medium">{item.description}</p>
                <div className="mt-6">
                  <ChevronRight
                    className="w-8 h-8 group-hover:translate-x-2 transition-transform"
                    style={{ color: item.color }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features grid - Brutal boxes */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <span className="text-xs font-bold text-[#2962ff] tracking-[0.5em]">[FEATURES]</span>
            <h2 className="text-6xl md:text-8xl font-black mt-4 tracking-tighter">
              WHAT YOU GET
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: FileText,
                title: "SMART SUMMARIES",
                description: "Not just TL;DR. Actual intelligent compression that preserves meaning and context.",
                accent: "#ff5722",
              },
              {
                icon: Zap,
                title: "KEY INSIGHTS",
                description: "The stuff that matters. Pulled out and highlighted so you don't miss it.",
                accent: "#2962ff",
              },
              {
                icon: Brain,
                title: "READING HINTS",
                description: "Context clues and background info to help you understand complex topics.",
                accent: "#00c853",
              },
              {
                icon: FileText,
                title: "NOTABLE QUOTES",
                description: "The lines worth remembering. Automatically extracted and organized.",
                accent: "#ff9100",
              },
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="border-4 border-[#1a1a1a] p-8 bg-white hover:shadow-[8px_8px_0_#1a1a1a] transition-shadow group"
              >
                <div
                  className="w-16 h-16 flex items-center justify-center mb-6"
                  style={{ backgroundColor: feature.accent }}
                >
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-black mb-4 group-hover:text-[#ff5722] transition-colors">
                  {feature.title}
                </h3>
                <p className="text-[#1a1a1a]/70 font-medium leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial - Raw style */}
      <section className="py-20 px-4 md:px-8 bg-[#ff5722]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-[#1a1a1a]">
            <div className="text-9xl font-black leading-none opacity-20">"</div>
            <blockquote className="text-3xl md:text-5xl font-black leading-tight -mt-16 relative z-10">
              THIS THING SAVED MY THESIS. NOT EVEN JOKING.
            </blockquote>
            <div className="mt-12 flex items-center gap-4">
              <div className="w-16 h-16 bg-[#1a1a1a]" />
              <div>
                <div className="font-black text-xl">SARAH K.</div>
                <div className="font-bold opacity-70">PHD CANDIDATE, MIT</div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-6xl md:text-9xl font-black tracking-tighter leading-[0.9]">
            READY<br />
            <span className="text-[#ff5722]">TO START?</span>
          </h2>
          <p className="mt-8 text-xl text-[#1a1a1a]/70 font-medium max-w-lg mx-auto">
            First 10 documents free. No credit card. No tricks. Just upload and go.
          </p>
          <button className="mt-12 bg-[#1a1a1a] text-[#f5f0e8] px-12 py-6 font-black text-2xl hover:bg-[#ff5722] transition-colors shadow-[8px_8px_0_#ff5722] hover:shadow-[8px_8px_0_#1a1a1a]">
            START FOR FREE →
          </button>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1a1a1a] text-[#f5f0e8] py-12 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <span className="text-2xl font-black">RATIO</span>
              <span className="text-xs ml-1 bg-[#ff5722] text-[#1a1a1a] px-2 py-0.5">READER</span>
              <p className="mt-4 text-sm text-[#f5f0e8]/60 font-medium">
                Making reading actually manageable since 2024.
              </p>
            </div>
            {[
              { title: "PRODUCT", links: ["Features", "Pricing", "API", "Changelog"] },
              { title: "COMPANY", links: ["About", "Blog", "Careers", "Contact"] },
              { title: "LEGAL", links: ["Privacy", "Terms", "Security"] },
            ].map((col) => (
              <div key={col.title}>
                <h4 className="font-black text-sm text-[#ff5722] mb-4">{col.title}</h4>
                <ul className="space-y-2">
                  {col.links.map((link) => (
                    <li key={link}>
                      <a href="#" className="text-sm text-[#f5f0e8]/60 hover:text-[#ff5722] transition-colors font-medium">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-12 pt-8 border-t border-[#f5f0e8]/20 text-center text-sm text-[#f5f0e8]/40 font-bold">
            © 2024 RATIO READER. ALL RIGHTS RESERVED. NOW GO READ SOMETHING.
          </div>
        </div>
      </footer>
    </div>
  );
}
