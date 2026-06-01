import { motion } from "framer-motion";
import { FileText, Sparkles, BookOpen, Quote, ArrowRight, Upload, Eye, Layers, Star } from "lucide-react";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { delay, duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as const },
});

export function Design2() {
  return (
    <div className="min-h-screen bg-[#0A0A0C] text-[#E8E4DD] selection:bg-[#C9A96E] selection:text-[#0A0A0C] overflow-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;0,700;1,300;1,400&family=Inter:wght@300;400;500;600;700&display=swap');
        .font-display { font-family: 'Cormorant Garamond', serif; }
        .font-body { font-family: 'Inter', sans-serif; }
        .glass {
          background: rgba(255,255,255,0.03);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255,255,255,0.06);
        }
        .glass-strong {
          background: rgba(255,255,255,0.06);
          backdrop-filter: blur(40px);
          border: 1px solid rgba(255,255,255,0.1);
        }
        .gold-gradient {
          background: linear-gradient(135deg, #C9A96E 0%, #E8D5A3 50%, #C9A96E 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(100px);
          pointer-events: none;
        }
        .mesh-gradient {
          background:
            radial-gradient(ellipse at 20% 50%, rgba(201,169,110,0.08) 0%, transparent 50%),
            radial-gradient(ellipse at 80% 20%, rgba(201,169,110,0.05) 0%, transparent 50%),
            radial-gradient(ellipse at 50% 80%, rgba(100,80,50,0.06) 0%, transparent 50%);
        }
      `}</style>

      {/* Ambient light orbs */}
      <div className="orb w-[600px] h-[600px] bg-[#C9A96E]/10 top-[-200px] left-[-100px] fixed" />
      <div className="orb w-[400px] h-[400px] bg-[#8B7355]/8 bottom-[-100px] right-[-50px] fixed" />
      <div className="mesh-gradient fixed inset-0 pointer-events-none" />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50">
        <div className="max-w-[1300px] mx-auto px-8 py-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#C9A96E] to-[#8B7355] flex items-center justify-center">
              <span className="text-[#0A0A0C] font-bold text-sm font-body">R</span>
            </div>
            <span className="font-display text-2xl font-semibold gold-gradient">Ratio Reader</span>
          </div>
          <div className="hidden md:flex items-center gap-10">
            {["Features", "How it works", "Pricing"].map((link) => (
              <a key={link} href="#" className="font-body text-xs font-medium text-white/40 hover:text-[#C9A96E] transition-colors tracking-widest uppercase">
                {link}
              </a>
            ))}
          </div>
          <button className="font-body text-xs font-semibold tracking-widest uppercase px-6 py-3 rounded-xl glass hover:bg-[#C9A96E]/10 transition-colors text-[#C9A96E]">
            Get Started
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative pt-40 pb-32 px-8">
        <div className="max-w-[1300px] mx-auto">
          <motion.div {...fadeUp(0.1)} className="text-center mb-8">
            <span className="font-body text-xs font-semibold tracking-[0.4em] uppercase text-[#C9A96E]">
              Intelligent Reading
            </span>
          </motion.div>
          <motion.h1
            {...fadeUp(0.2)}
            className="font-display text-[clamp(3.5rem,7vw,8rem)] font-light text-center leading-[1] mb-8"
          >
            Read with
            <br />
            <span className="gold-gradient font-semibold">crystal clarity.</span>
          </motion.h1>
          <motion.p
            {...fadeUp(0.35)}
            className="font-body text-lg text-white/40 text-center max-w-lg mx-auto leading-relaxed mb-12"
          >
            Upload any PDF and instantly receive summaries, key quotes, and smart insights — all beautifully distilled.
          </motion.p>
          <motion.div {...fadeUp(0.5)} className="flex items-center justify-center gap-6 flex-wrap">
            <button className="font-body text-sm font-semibold tracking-wide px-8 py-4 rounded-2xl bg-gradient-to-r from-[#C9A96E] to-[#A08050] text-[#0A0A0C] flex items-center gap-3 hover:shadow-[0_0_40px_rgba(201,169,110,0.3)] transition-shadow group">
              <Upload size={16} />
              Upload Your PDF
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="font-body text-sm font-medium text-white/40 hover:text-[#C9A96E] transition-colors px-8 py-4 rounded-2xl glass">
              Watch Demo
            </button>
          </motion.div>

          {/* Hero Visual */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4 }}
            className="mt-20 max-w-3xl mx-auto"
          >
            <div className="glass-strong rounded-3xl p-1">
              <div className="bg-gradient-to-b from-[#121216] to-[#0A0A0C] rounded-[22px] p-8 relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A96E]/30 to-transparent" />
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-3 h-3 rounded-full bg-white/10" />
                  <div className="w-3 h-3 rounded-full bg-white/10" />
                  <div className="w-3 h-3 rounded-full bg-white/10" />
                  <span className="font-body text-[10px] text-white/20 ml-4 tracking-widest uppercase">document.pdf · 248 pages</span>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/[0.04]">
                    <Eye size={16} className="text-[#C9A96E] mt-0.5 shrink-0" />
                    <div>
                      <p className="font-body text-sm text-white/70 mb-1 font-medium">Key Summary</p>
                      <p className="font-body text-xs text-white/30 leading-relaxed">This document explores the intersection of behavioral economics and decision-making frameworks in organizational contexts...</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/[0.04]">
                    <Quote size={16} className="text-[#C9A96E] mt-0.5 shrink-0" />
                    <div>
                      <p className="font-body text-sm text-white/70 mb-1 font-medium">Notable Quote</p>
                      <p className="font-display text-sm text-white/40 italic leading-relaxed">"The most consequential decisions are rarely the most complex..."</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/[0.04]">
                    <Sparkles size={16} className="text-[#C9A96E] mt-0.5 shrink-0" />
                    <div>
                      <p className="font-body text-sm text-white/70 mb-1 font-medium">Insight</p>
                      <p className="font-body text-xs text-white/30 leading-relaxed">Chapters 3-5 form the core argument. The case studies in Chapter 7 provide the strongest evidence.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 px-8 relative">
        <div className="max-w-[1300px] mx-auto">
          <div className="text-center mb-20">
            <motion.span {...fadeUp()} className="font-body text-xs font-semibold tracking-[0.4em] uppercase text-[#C9A96E]">
              Features
            </motion.span>
            <motion.h2 {...fadeUp(0.1)} className="font-display text-5xl lg:text-6xl font-light mt-4">
              Everything at <span className="gold-gradient font-semibold">your fingertips.</span>
            </motion.h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: FileText, title: "Smart Summaries", desc: "Intelligent condensation that preserves the essence and nuance of the original content.", tag: "AI-Powered" },
              { icon: Quote, title: "Quote Extraction", desc: "The most impactful passages, identified and extracted for your reference.", tag: "Precision" },
              { icon: Sparkles, title: "Contextual Hints", desc: "Smart connections and insights that deepen your understanding of any material.", tag: "Intelligence" },
              { icon: BookOpen, title: "Theme Detection", desc: "Automatic identification of key themes, arguments, and narrative threads.", tag: "Analysis" },
              { icon: Layers, title: "Structure Mapping", desc: "Visual breakdown of document architecture — see how ideas connect.", tag: "Visualization" },
              { icon: Star, title: "Priority Ranking", desc: "Content ranked by importance so you read what matters first.", tag: "Efficiency" },
            ].map((f, i) => (
              <motion.div
                key={f.title}
                {...fadeUp(i * 0.1)}
                className="glass rounded-2xl p-8 hover:bg-white/[0.04] transition-all duration-500 group cursor-default"
              >
                <div className="flex items-center justify-between mb-6">
                  <f.icon size={22} className="text-[#C9A96E] group-hover:text-[#E8D5A3] transition-colors" />
                  <span className="font-body text-[10px] tracking-widest uppercase text-white/20 glass px-3 py-1 rounded-full">
                    {f.tag}
                  </span>
                </div>
                <h3 className="font-display text-2xl font-semibold mb-3 text-white/90">{f.title}</h3>
                <p className="font-body text-sm text-white/35 leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-24 px-8">
        <div className="max-w-[1300px] mx-auto">
          <div className="text-center mb-20">
            <span className="font-body text-xs font-semibold tracking-[0.4em] uppercase text-[#C9A96E]">
              Process
            </span>
            <h2 className="font-display text-5xl lg:text-6xl font-light mt-4">
              Effortless <span className="gold-gradient font-semibold">in three steps.</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { num: "01", title: "Upload", desc: "Drop your PDF into the reader. Any size, any subject." },
              { num: "02", title: "Analyze", desc: "Our AI reads, understands, and structures the document." },
              { num: "03", title: "Discover", desc: "Receive summaries, quotes, and insights instantly." },
            ].map((s, i) => (
              <motion.div
                key={s.num}
                {...fadeUp(i * 0.15)}
                className="glass rounded-2xl p-10 hover:glass-strong transition-all duration-500 text-center"
              >
                <span className="font-display text-5xl font-light gold-gradient block mb-4">{s.num}</span>
                <h3 className="font-display text-3xl font-semibold mb-3">{s.title}</h3>
                <p className="font-body text-sm text-white/35 leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-8">
        <div className="max-w-[1300px] mx-auto">
          <div className="text-center mb-16">
            <span className="font-body text-xs font-semibold tracking-[0.4em] uppercase text-[#C9A96E]">
              Testimonials
            </span>
            <h2 className="font-display text-5xl lg:text-6xl font-light mt-4">
              Trusted by <span className="gold-gradient font-semibold">thousands.</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { text: "Ratio Reader saved me 20 hours last month alone. The quote extraction is eerily accurate.", author: "Sarah K.", role: "Strategy Lead, Stripe" },
              { text: "It's like having a brilliant research assistant who's read everything and never gets tired.", author: "Marcus T.", role: "Founder, Tektos" },
              { text: "The insights feature alone is worth it. I discovered connections I would have missed entirely.", author: "Dr. Lina M.", role: "Research Director" },
            ].map((q, i) => (
              <motion.div
                key={i}
                {...fadeUp(i * 0.1)}
                className="glass rounded-2xl p-8 flex flex-col justify-between"
              >
                <div>
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} size={12} className="text-[#C9A96E] fill-[#C9A96E]" />
                    ))}
                  </div>
                  <p className="font-display text-lg italic text-white/60 leading-relaxed mb-6">"{q.text}"</p>
                </div>
                <div>
                  <p className="font-body text-sm font-medium text-white/50">{q.author}</p>
                  <p className="font-body text-xs text-white/25">{q.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-8">
        <motion.div
          {...fadeUp()}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="glass-strong rounded-3xl p-16 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A96E]/40 to-transparent" />
            <h2 className="font-display text-5xl lg:text-6xl font-light mb-6">
              Begin reading
              <br />
              <span className="gold-gradient font-semibold">intelligently.</span>
            </h2>
            <p className="font-body text-sm text-white/35 mb-10 max-w-md mx-auto">
              No credit card required. Upload your first PDF and experience the difference instantly.
            </p>
            <button className="font-body text-sm font-semibold tracking-wide px-10 py-4 rounded-2xl bg-gradient-to-r from-[#C9A96E] to-[#A08050] text-[#0A0A0C] hover:shadow-[0_0_60px_rgba(201,169,110,0.3)] transition-shadow">
              Start Free — Upload Your PDF
            </button>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-8 border-t border-white/[0.04]">
        <div className="max-w-[1300px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-[#C9A96E] to-[#8B7355] flex items-center justify-center">
              <span className="text-[#0A0A0C] font-bold text-xs font-body">R</span>
            </div>
            <span className="font-display text-lg gold-gradient font-semibold">Ratio Reader</span>
          </div>
          <p className="font-body text-xs text-white/20">© 2026 Ratio Reader. All rights reserved.</p>
          <div className="flex items-center gap-8">
            {["Privacy", "Terms", "Contact"].map((l) => (
              <a key={l} href="#" className="font-body text-xs text-white/20 hover:text-[#C9A96E] transition-colors tracking-wide">
                {l}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
