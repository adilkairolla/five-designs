import { motion, useScroll, useTransform } from "framer-motion";
import { FileText, Sparkles, BookOpen, Quote, ArrowRight, Upload, CheckCircle2 } from "lucide-react";
import { useRef } from "react";

export function Design4() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  const barWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div ref={containerRef} className="min-h-screen bg-[#F5F5F0] text-[#111111] selection:bg-[#111] selection:text-[#F5F5F0]">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Mono:wght@300;400;500&family=Manrope:wght@300;400;500;600;700;800&display=swap');
        .font-mono { font-family: 'DM Mono', monospace; }
        .font-body { font-family: 'Manrope', sans-serif; }
        .grid-lines {
          background-image:
            linear-gradient(to right, rgba(0,0,0,0.03) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0,0,0,0.03) 1px, transparent 1px);
          background-size: 80px 80px;
        }
        .progress-bar {
          position: fixed;
          top: 0;
          left: 0;
          height: 3px;
          background: #111;
          z-index: 100;
          transform-origin: left;
        }
      `}</style>

      {/* Progress bar */}
      <motion.div style={{ width: barWidth }} className="progress-bar" />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#F5F5F0]/90 backdrop-blur-sm border-b border-[#111]/5">
        <div className="max-w-[1200px] mx-auto px-6 h-14 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 bg-[#111] rounded-none" />
            <span className="font-mono text-xs font-medium tracking-tight">RATIO READER</span>
          </div>
          <div className="hidden md:flex items-center gap-10">
            {["01 Features", "02 Process", "03 Pricing"].map((link) => (
              <a key={link} href="#" className="font-mono text-[11px] font-medium text-[#111]/40 hover:text-[#111] tracking-wider transition-colors">
                {link}
              </a>
            ))}
          </div>
          <button className="font-mono text-[11px] font-medium bg-[#111] text-[#F5F5F0] px-4 py-2 hover:bg-[#333] transition-colors tracking-wider">
            START →
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="grid-lines min-h-screen flex items-center px-6 pt-14">
        <div className="max-w-[1200px] mx-auto w-full">
          <div className="grid grid-cols-12 gap-4">
            {/* Counter */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="col-span-12 mb-8"
            >
              <span className="font-mono text-[10px] text-[#111]/30 tracking-widest">/001</span>
            </motion.div>

            {/* Main heading */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] as const }}
              className="col-span-12 lg:col-span-8"
            >
              <h1 className="font-body text-[clamp(3.5rem,8vw,9rem)] font-extrabold leading-[0.9] tracking-[-0.04em]">
                Read
                <br />
                Smarter.
              </h1>
            </motion.div>

            {/* Right side content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="col-span-12 lg:col-span-4 flex flex-col justify-end"
            >
              <div className="border-t border-[#111]/10 pt-6 mb-6">
                <p className="font-body text-base text-[#111]/50 leading-relaxed max-w-xs">
                  Upload a PDF. Get summaries, quotes, and insights in seconds. No fluff — just the information that matters.
                </p>
              </div>
              <div className="flex items-center gap-4">
                <button className="font-mono text-[12px] font-medium bg-[#111] text-[#F5F5F0] px-6 py-3 hover:bg-[#333] transition-colors tracking-wider flex items-center gap-3">
                  UPLOAD PDF <ArrowRight size={14} />
                </button>
                <span className="font-mono text-[10px] text-[#111]/30">FREE</span>
              </div>
            </motion.div>

            {/* Bottom stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="col-span-12 mt-20 border-t border-[#111]/10 pt-8"
            >
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {[
                  { val: "10x", label: "Faster reading" },
                  { val: "2M+", label: "PDFs analyzed" },
                  { val: "99%", label: "Accuracy rate" },
                  { val: "4.9", label: "User rating" },
                ].map((s, i) => (
                  <div key={i}>
                    <span className="font-body text-3xl md:text-4xl font-extrabold tracking-tight">{s.val}</span>
                    <span className="font-mono text-[10px] text-[#111]/40 block mt-1 tracking-wider uppercase">{s.label}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="border-t border-dashed border-[#111]/10" />
      </div>

      {/* Features */}
      <section className="py-24 px-6">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-12 gap-4 mb-16">
            <div className="col-span-12 md:col-span-2">
              <span className="font-mono text-[10px] text-[#111]/30 tracking-widest">/002</span>
            </div>
            <div className="col-span-12 md:col-span-10">
              <h2 className="font-body text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
                Every feature<br />with purpose.
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#111]/5 border border-[#111]/5">
            {[
              { icon: FileText, title: "Summaries", desc: "Distilled breakdowns of the most critical information. Dense content made digestible." },
              { icon: Quote, title: "Key Quotes", desc: "Impactful passages identified and extracted. Reference the exact words that matter." },
              { icon: Sparkles, title: "Smart Hints", desc: "Contextual insights you'd miss on your own. Connections made visible." },
              { icon: BookOpen, title: "Themes", desc: "Automatic identification of key themes, arguments, and narrative structures." },
              { icon: CheckCircle2, title: "Priorities", desc: "Content ranked by importance. Always know what to read first." },
              { icon: Upload, title: "Any Format", desc: "Academic papers, reports, books, manuals — any PDF, any length." },
            ].map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-[#F5F5F0] p-8 md:p-10 group hover:bg-[#111] hover:text-[#F5F5F0] transition-colors duration-300 cursor-default"
              >
                <f.icon size={20} className="text-[#111]/20 group-hover:text-[#F5F5F0]/40 transition-colors mb-6" />
                <h3 className="font-body text-lg font-bold mb-3">{f.title}</h3>
                <p className="font-body text-sm text-[#111]/40 group-hover:text-[#F5F5F0]/50 leading-relaxed transition-colors">{f.desc}</p>
                <span className="font-mono text-[9px] text-[#111]/15 group-hover:text-[#F5F5F0]/20 mt-6 block tracking-widest">0{i + 1}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-24 px-6">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-12 gap-4 mb-16">
            <div className="col-span-12 md:col-span-2">
              <span className="font-mono text-[10px] text-[#111]/30 tracking-widest">/003</span>
            </div>
            <div className="col-span-12 md:col-span-10">
              <h2 className="font-body text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
                Three steps.<br />Nothing more.
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-b border-[#111]/10">
            {[
              { step: "I", title: "Upload", desc: "Drop your PDF. Any length, any topic, any language." },
              { step: "II", title: "Analyze", desc: "Our engine reads, distills, and structures the content." },
              { step: "III", title: "Discover", desc: "Get summaries, quotes, hints, and insights." },
            ].map((s, i) => (
              <motion.div
                key={s.step}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`py-12 px-8 ${i > 0 ? "md:border-l border-[#111]/10" : ""}`}
              >
                <span className="font-mono text-[10px] text-[#111]/20 tracking-widest block mb-4">STEP {s.step}</span>
                <h3 className="font-body text-2xl font-bold mb-3">{s.title}</h3>
                <p className="font-body text-sm text-[#111]/40 leading-relaxed max-w-xs">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6 border-t border-[#111]/5">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-12 gap-4">
            {[
              { text: "Ratio Reader turned a 400-page report into a 10-minute read without losing nuance.", author: "S.K.", role: "Strategy" },
              { text: "Like having a PhD friend who's read everything and explains it perfectly.", author: "M.T.", role: "Founder" },
              { text: "Indispensable for every research paper I need to review.", author: "L.M.", role: "Researcher" },
            ].map((q, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`col-span-12 md:col-span-4 ${i > 0 ? "md:border-l border-[#111]/5" : ""} py-8 md:px-8`}
              >
                <span className="font-mono text-[9px] text-[#111]/20 tracking-widest block mb-4">/00{i + 4}</span>
                <p className="font-body text-sm leading-relaxed mb-6 text-[#111]/60">"{q.text}"</p>
                <p className="font-mono text-[10px] text-[#111]/40 tracking-wider">{q.author}, {q.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-6 border-t border-[#111]/5">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-12 gap-4 items-end">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="col-span-12 lg:col-span-6"
            >
              <span className="font-mono text-[10px] text-[#111]/30 tracking-widest block mb-6">/CTA</span>
              <h2 className="font-body text-5xl md:text-7xl font-extrabold leading-[0.9] tracking-tight">
                Start
                <br />
                Now.
              </h2>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="col-span-12 lg:col-span-6 lg:text-right"
            >
              <p className="font-body text-base text-[#111]/40 max-w-sm mb-8 lg:ml-auto">
                Upload your first PDF free. No credit card. No limits on first 3 uploads.
              </p>
              <button className="font-mono text-[12px] font-medium bg-[#111] text-[#F5F5F0] px-8 py-4 hover:bg-[#333] transition-colors tracking-wider">
                UPLOAD →
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 px-6 border-t border-[#111]/5">
        <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="font-mono text-[10px] text-[#111]/25 tracking-widest">© 2026 RATIO READER</span>
          <div className="flex items-center gap-8">
            {["PRIVACY", "TERMS", "CONTACT"].map((l) => (
              <a key={l} href="#" className="font-mono text-[10px] text-[#111]/25 hover:text-[#111] transition-colors tracking-widest">{l}</a>
            ))}
          </div>
          <span className="font-mono text-[10px] text-[#111]/25 tracking-widest">v2.4.0</span>
        </div>
      </footer>
    </div>
  );
}
