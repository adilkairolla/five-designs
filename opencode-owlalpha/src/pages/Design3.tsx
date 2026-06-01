import { motion } from "framer-motion";
import { FileText, Sparkles, BookOpen, Quote, ArrowRight, Upload, Lightbulb, Target, TrendingUp, Heart, Zap } from "lucide-react";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { delay, duration: 0.6, ease: [0.34, 1.56, 0.64, 1] as const },
});

export function Design3() {
  return (
    <div className="min-h-screen bg-[#FFF9F0] text-[#2D2B3D] selection:bg-[#FFE66D] overflow-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Caveat:wght@400;700&display=swap');
        .font-main { font-family: 'Space Grotesk', sans-serif; }
        .font-hand { font-family: 'Caveat', cursive; }
        .blob { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
        .blob-2 { border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%; }
        .blob-3 { border-radius: 70% 30% 30% 70% / 70% 70% 30% 30%; }
        .dots-bg { background-image: radial-gradient(circle, #2D2B3D 1px, transparent 1px); background-size: 24px 24px; opacity: 0.08; }
        .float { animation: float 4s ease-in-out infinite alternate; }
        .squeeze { animation: squeeze 3s ease-in-out infinite; }
        @keyframes float { from { transform: translateY(0px) rotate(0deg); } to { transform: translateY(-15px) rotate(3deg); } }
        @keyframes squeeze { 0%, 100% { transform: scaleX(1) scaleY(1); } 50% { transform: scaleX(1.05) scaleY(0.95); } }
      `}</style>

      {/* Floating blobs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute w-72 h-72 blob bg-[#FF6B6B] opacity-20 top-20 -left-20 float" />
        <div className="absolute w-48 h-48 blob-2 bg-[#4ECDC4] opacity-15 top-[40%] -right-10 squeeze" />
        <div className="absolute w-64 h-64 blob-3 bg-[#FFE66D] opacity-15 bottom-20 left-[20%] float" />
        <div className="absolute w-36 h-36 blob bg-[#FF8B94] opacity-10 top-[60%] right-[30%] squeeze" />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#FFF9F0]/90 backdrop-blur-md border-b-3 border-[#2D2B3D]">
        <div className="max-w-[1300px] mx-auto px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#2D2B3D] rounded-2xl flex items-center justify-center rotate-3">
              <span className="text-[#FFE66D] font-hand text-2xl font-bold">R</span>
            </div>
            <span className="font-main text-xl font-bold">Ratio Reader</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            {["Features", "How it works", "Pricing"].map((link) => (
              <a key={link} href="#" className="font-main text-sm font-semibold text-[#2D2B3D]/60 hover:text-[#FF6B6B] transition-colors relative group">
                {link}
                <span className="absolute -bottom-1 left-0 w-0 h-1 bg-[#FF6B6B] group-hover:w-full transition-all duration-300 rounded-full" />
              </a>
            ))}
          </div>
          <button className="font-main text-sm font-bold bg-[#2D2B3D] text-white px-6 py-3 rounded-2xl hover:bg-[#FF6B6B] transition-colors -rotate-1 hover:rotate-0">
            Try Free →
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-36 pb-20 px-8 relative z-10">
        <div className="dots-bg fixed inset-0" />
        <div className="max-w-[1300px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} className="inline-flex items-center gap-2 bg-[#FFE66D] px-4 py-2 rounded-full mb-6 rotate-[-2deg]">
                <Zap size={14} className="text-[#2D2B3D]" />
                <span className="font-main text-xs font-bold">Upload · Understand · Excel</span>
              </motion.div>
              <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }} className="font-main text-[clamp(3rem,6vw,5.5rem)] font-bold leading-[1.05] mb-6">
                Read less,<br />
                <span className="relative inline-block">
                  <span className="relative z-10 text-[#FF6B6B]">know more</span>
                  <span className="absolute bottom-2 left-0 right-0 h-4 bg-[#FFE66D] -rotate-1 -z-0" />
                </span>
                <span className="font-hand text-5xl text-[#4ECDC4] ml-3">!</span>
              </motion.h1>
              <motion.p {...fadeUp(0.2)} className="font-main text-lg text-[#2D2B3D]/60 max-w-md leading-relaxed mb-8">
                Pop in a PDF and get smart summaries, key quotes, and insightful hints. Reading, but make it magical.
              </motion.p>
              <motion.div {...fadeUp(0.35)} className="flex items-center gap-4 flex-wrap">
                <button className="font-main font-bold bg-[#FF6B6B] text-white px-8 py-4 rounded-2xl hover:bg-[#2D2B3D] transition-colors flex items-center gap-3 hover:-rotate-1 shadow-[4px_4px_0px_#2D2B3D] hover:shadow-[2px_2px_0px_#2D2B3D]">
                  <Upload size={18} />
                  Upload PDF
                  <ArrowRight size={18} />
                </button>
                <button className="font-main font-semibold text-[#2D2B3D]/60 hover:text-[#FF6B6B] transition-colors underline decoration-2 underline-offset-4 decoration-[#FFE66D]">
                  See how it works →
                </button>
              </motion.div>
            </div>

            {/* Hero Visual */}
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }} className="relative">
              <div className="bg-white rounded-[2rem] border-3 border-[#2D2B3D] p-8 shadow-[8px_8px_0px_#2D2B3D] rotate-1 relative">
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-3 h-3 rounded-full bg-[#FF6B6B]" />
                  <div className="w-3 h-3 rounded-full bg-[#FFE66D]" />
                  <div className="w-3 h-3 rounded-full bg-[#4ECDC4]" />
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3 bg-[#FFF0F0] p-4 rounded-xl border-2 border-[#FF6B6B]/30">
                    <Target size={18} className="text-[#FF6B6B] mt-0.5 shrink-0" />
                    <p className="font-main text-sm text-[#2D2B3D]/70"><strong>Summary:</strong> This 300-page report argues that remote work increases productivity by 23% when...</p>
                  </div>
                  <div className="flex items-start gap-3 bg-[#FFFFF0] p-4 rounded-xl border-2 border-[#FFE66D]/50">
                    <Quote size={18} className="text-[#E6B800] mt-0.5 shrink-0" />
                    <p className="font-main text-sm text-[#2D2B3D]/70 italic">"The future of work isn't about where you sit — it's about what you deliver."</p>
                  </div>
                  <div className="flex items-start gap-3 bg-[#F0FFF4] p-4 rounded-xl border-2 border-[#4ECDC4]/30">
                    <Lightbulb size={18} className="text-[#4ECDC4] mt-0.5 shrink-0" />
                    <p className="font-main text-sm text-[#2D2B3D]/70"><strong>Hint:</strong> Pay attention to the methodology section — it's referenced throughout the conclusions.</p>
                  </div>
                </div>
              </div>
              <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 3, repeat: Infinity }} className="absolute -top-6 -right-6 bg-[#4ECDC4] text-white font-main font-bold text-xs px-4 py-2 rounded-full border-2 border-[#2D2B3D] shadow-[3px_3px_0px_#2D2B3D]">
                ✓ Analyzed!
              </motion.div>
              <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2.5, repeat: Infinity }} className="absolute -bottom-4 -left-4 bg-[#FFE66D] text-[#2D2B3D] font-main font-bold text-xs px-4 py-2 rounded-full border-2 border-[#2D2B3D] shadow-[3px_3px_0px_#2D2B3D]">
                ⚡ 10 seconds
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 px-8 relative z-10">
        <div className="max-w-[1300px] mx-auto">
          <div className="text-center mb-20">
            <motion.div {...fadeUp()} className="inline-block bg-[#4ECDC4] text-white font-main font-bold text-xs px-6 py-2 rounded-full mb-4 rotate-[-1deg]">WHAT YOU GET</motion.div>
            <motion.h2 {...fadeUp(0.1)} className="font-main text-5xl lg:text-6xl font-bold">
              Superpowers for{" "}
              <span className="relative inline-block">
                <span className="text-[#FF6B6B]">your brain</span>
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none">
                  <path d="M2 8 C50 2, 150 2, 198 8" stroke="#FFE66D" strokeWidth="4" strokeLinecap="round" />
                </svg>
              </span>
              {" "}<span className="font-hand text-4xl text-[#4ECDC4]">✨</span>
            </motion.h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: FileText, title: "Smart Summaries", desc: "Get the gist of any PDF without reading every word. We find what matters.", color: "#FF6B6B" },
              { icon: Quote, title: "Key Quotes", desc: "The most powerful passages, pulled out and ready for you to use.", color: "#E6B800" },
              { icon: Lightbulb, title: "Smart Hints", desc: "Like a helpful friend who read it first and is sharing the cheat sheet.", color: "#4ECDC4" },
              { icon: BookOpen, title: "Deep Dives", desc: "Understand themes, arguments, and how ideas connect across the document.", color: "#B8A9C9" },
              { icon: Target, title: "Priority Marks", desc: "We rank content by importance. Read the crucial parts first.", color: "#FF8B94" },
              { icon: TrendingUp, title: "Quick Insights", desc: "See patterns and takeaways you'd miss on your own.", color: "#A8E6CF" },
            ].map((f, i) => (
              <motion.div key={f.title} {...fadeUp(i * 0.1)} className="group">
                <div className="bg-white rounded-[2rem] border-3 border-[#2D2B3D] p-8 shadow-[6px_6px_0px_#2D2B3D] hover:shadow-[3px_3px_0px_#2D2B3D] hover:translate-x-[3px] hover:translate-y-[3px] transition-all cursor-default">
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 border-2 border-[#2D2B3D] group-hover:rotate-6 transition-transform" style={{ backgroundColor: f.color + "30" }}>
                    <f.icon size={24} style={{ color: f.color }} />
                  </div>
                  <h3 className="font-main text-xl font-bold mb-3">{f.title}</h3>
                  <p className="font-main text-sm text-[#2D2B3D]/50 leading-relaxed">{f.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-24 px-8 bg-[#2D2B3D] text-white relative z-10 overflow-hidden">
        <div className="absolute inset-0 dots-bg" />
        <div className="max-w-[1300px] mx-auto relative">
          <div className="text-center mb-20">
            <span className="font-main text-xs font-bold tracking-widest uppercase text-[#FFE66D]">How it works</span>
            <h2 className="font-main text-5xl lg:text-6xl font-bold mt-4">Easy as <span className="text-[#FFE66D]">1-2-3</span> <span className="font-hand text-4xl text-[#4ECDC4]">🎉</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { num: "01", title: "Upload", desc: "Drag & drop your PDF. Any length, any topic, any language.", emoji: "📄", bg: "#FF6B6B" },
              { num: "02", title: "Analyze", desc: "Our AI reads, understands, and maps out the entire document.", emoji: "🧠", bg: "#FFE66D" },
              { num: "03", title: "Discover", desc: "Get summaries, quotes, hints, and insights in seconds.", emoji: "✨", bg: "#4ECDC4" },
            ].map((s, i) => (
              <motion.div key={s.num} {...fadeUp(i * 0.15)} className="relative">
                <div className="rounded-[2rem] p-10 border-3 border-white/10 hover:border-white/20 transition-colors relative overflow-hidden" style={{ backgroundColor: s.bg + "15" }}>
                  <span className="text-6xl mb-4 block">{s.emoji}</span>
                  <div className="font-hand text-6xl font-bold mb-2" style={{ color: s.bg }}>{s.num}</div>
                  <h3 className="font-main text-3xl font-bold mb-3">{s.title}</h3>
                  <p className="font-main text-sm text-white/50 leading-relaxed">{s.desc}</p>
                  {i < 2 && (<div className="hidden md:block absolute top-1/2 -right-4 text-2xl">→</div>)}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-8 relative z-10">
        <div className="max-w-[1300px] mx-auto">
          <div className="text-center mb-16">
            <span className="font-main text-xs font-bold tracking-widest uppercase text-[#FF6B6B]">Love letters</span>
            <h2 className="font-main text-5xl lg:text-6xl font-bold mt-4">People <span className="text-[#4ECDC4]">love</span> it <span className="font-hand text-4xl text-[#FFE66D]">💕</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { text: "I went from dreading long reports to actually looking forward to them. The summaries are incredibly accurate.", author: "Sarah K.", role: "Strategy Lead", color: "#FF6B6B" },
              { text: "I saved my entire thesis. Ratio Reader helped me parse 150+ research papers in a fraction of the time.", author: "Marcus T.", role: "PhD Candidate", color: "#4ECDC4" },
              { text: "The quote extraction is my favorite feature. It finds passages I would have skimmed right over.", author: "Dr. Lina M.", role: "Research Director", color: "#FFE66D" },
            ].map((q, i) => (
              <motion.div key={i} {...fadeUp(i * 0.1)} className="bg-white rounded-[2rem] border-3 border-[#2D2B3D] p-8 shadow-[6px_6px_0px_#2D2B3D] hover:rotate-[1deg] transition-transform relative">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Heart key={j} size={14} style={{ color: q.color, fill: q.color }} />
                  ))}
                </div>
                <p className="font-main text-sm leading-relaxed mb-6 text-[#2D2B3D]/70">"{q.text}"</p>
                <p className="font-main text-sm font-bold">{q.author}</p>
                <p className="font-main text-xs text-[#2D2B3D]/40">{q.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div {...fadeUp()} className="relative">
            <h2 className="font-main text-5xl lg:text-7xl font-bold leading-[1.1] mb-6">
              Stop reading{" "}
              <span className="inline-block bg-[#FFE66D] text-[#2D2B3D] px-4 py-1 rotate-[-2deg]">boring</span>
              <br />PDFs forever{" "}
              <span className="font-hand text-5xl text-[#FF6B6B]">🚀</span>
            </h2>
            <p className="font-main text-lg text-[#2D2B3D]/50 mb-10 max-w-md mx-auto">Upload your first PDF free. No credit card. No catch.</p>
            <button className="font-main font-bold bg-[#FF6B6B] text-white px-12 py-5 rounded-2xl text-lg hover:bg-[#2D2B3D] transition-colors shadow-[6px_6px_0px_#2D2B3D] hover:shadow-[3px_3px_0px_#2D2B3D] hover:translate-x-[3px] hover:translate-y-[3px]">
              Try Ratio Reader Free →
            </button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 px-8 bg-[#2D2B3D] text-white relative z-10">
        <div className="max-w-[1300px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-white rounded-xl flex items-center justify-center">
              <span className="text-[#FFE66D] font-hand text-xl font-bold">R</span>
            </div>
            <span className="font-main text-lg font-bold">Ratio Reader</span>
          </div>
          <p className="font-main text-xs text-white/30">© 2026 Ratio Reader. Made with 💛</p>
          <div className="flex items-center gap-6">
            {["Privacy", "Terms", "Contact"].map((l) => (
              <a key={l} href="#" className="font-main text-xs text-white/30 hover:text-[#FFE66D] transition-colors font-medium">{l}</a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
