import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { ArrowRight, BookOpen, Lightbulb, Quote, Sparkles, Upload } from "lucide-react";

export function Design1() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.3], [1, 0.95]);

  return (
    <div ref={ref} className="bg-[#f5f0eb] font-['Cormorant_Garamond',serif] text-[#1a1a1a]">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap');
      `}</style>

      {/* Navigation */}
      <nav className="flex items-center justify-between px-10 py-6 font-['DM_Sans',sans-serif] text-sm tracking-widest uppercase">
        <span className="text-[#1a1a1a]/60">Ratio Reader</span>
        <div className="flex gap-8">
          <a href="#" className="hover:text-[#e63946] transition-colors">Features</a>
          <a href="#" className="hover:text-[#e63946] transition-colors">How It Works</a>
          <a href="#" className="hover:text-[#e63946] transition-colors">About</a>
        </div>
      </nav>

      {/* Hero */}
      <motion.section style={{ opacity: heroOpacity, scale: heroScale }} className="pt-24 pb-32 px-10 md:px-24">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ y: 60, opacity: 0 }}
            animate={mounted ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0, 1] }}
          >
            <span className="font-['DM_Sans',sans-serif] text-xs tracking-[0.3em] uppercase text-[#e63946] mb-6 block">
              The Intelligent Reading Companion
            </span>
            <h1 className="text-7xl md:text-[8rem] font-bold leading-[0.9] tracking-tight mb-8">
              Read less.<br />
              <span className="italic font-light">Understand</span>
              <br />
              <span className="text-[#e63946]">more.</span>
            </h1>
            <p className="font-['DM_Sans',sans-serif] text-xl text-[#1a1a1a]/50 max-w-lg mb-12 leading-relaxed">
              Upload any PDF and Ratio distills it into the essential knowledge — summaries, key quotes, and deep insights that make every page count.
            </p>
            <button className="font-['DM_Sans',sans-serif] bg-[#e63946] text-white px-10 py-5 text-sm tracking-widest uppercase hover:bg-[#c1121f] transition-colors">
              Start Reading <ArrowRight className="inline ml-2 w-4 h-4" />
            </button>
          </motion.div>
        </div>
      </motion.section>

      {/* Quote Section - asymmetric */}
      <section className="px-10 md:px-24 py-32 border-t border-[#1a1a1a]/10">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-7 gap-0">
            <div className="md:col-span-3" />
            <motion.div
              className="md:col-span-4"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
            >
              <blockquote className="text-4xl md:text-5xl leading-[1.15] font-light italic">
                "The art of reading is to skip judiciously."
              </blockquote>
              <cite className="font-['DM_Sans',sans-serif] text-sm text-[#1a1a1a]/40 block mt-6 not-italic tracking-wider uppercase">
                — Philip Gilbert Hamerton
              </cite>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Grid - magazine spread */}
      <section className="px-10 md:px-24 py-32 border-t border-[#1a1a1a]/10">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-5 gap-4">
            <div className="md:col-span-2">
              <h2 className="font-['DM_Sans',sans-serif] text-xs tracking-[0.3em] uppercase text-[#e63946] mb-4">
                How It Works
              </h2>
              <p className="text-4xl font-light leading-[1.15]">
                Turn any document into distilled wisdom.
              </p>
            </div>
            <div className="md:col-span-3 grid gap-6">
              {[
                { icon: <Upload className="w-5 h-5" />, title: "Upload. Any PDF.", desc: "Research papers, legal documents, business reports, or your favorite novels. Ratio handles them all." },
                { icon: <Sparkles className="w-5 h-5" />, title: "Instant Summaries", desc: "Our AI reads so you don't have to. Get the core arguments and conclusions in seconds, not hours." },
                { icon: <Quote className="w-5 h-5" />, title: "Key Quotes & Passages", desc: "Ratio surfaces the most important quotes from your document, with context on why they matter." },
                { icon: <Lightbulb className="w-5 h-5" />, title: "Deep Insights", desc: "Beyond summary — Ratio connects ideas, identifies patterns, and reveals the hidden architecture of the text." },
              ].map((f, i) => (
                <motion.div
                  key={i}
                  className="flex gap-6 py-6 border-b border-[#1a1a1a]/10 last:border-0"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                >
                  <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center border border-[#1a1a1a]/15 text-[#e63946]">
                    {f.icon}
                  </div>
                  <div>
                    <h3 className="font-['DM_Sans',sans-serif] text-sm font-medium tracking-wide mb-2">{f.title}</h3>
                    <p className="font-['DM_Sans',sans-serif] text-[#1a1a1a]/50 text-sm leading-relaxed">{f.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Visual feature - large pull */}
      <section className="bg-[#1a1a1a] text-[#f5f0eb] py-40 px-10 md:px-24 overflow-hidden">
        <motion.div
          className="max-w-6xl mx-auto relative"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="absolute -top-20 -left-20 text-[20rem] text-[#1a1a1a] leading-none font-bold select-none"
            style={{ WebkitTextStroke: '1px #e63946', color: 'transparent' }}>
            "
          </div>
          <div className="relative z-10 max-w-3xl ml-auto text-right">
            <h2 className="text-5xl md:text-6xl font-light italic leading-tight mb-10">
              "Hints that gently nudge your understanding in the right direction."
            </h2>
            <p className="font-['DM_Sans',sans-serif] text-lg text-[#f5f0eb]/50 leading-relaxed">
              Ratio doesn't just tell you what a document says — it helps you understand <em className="text-[#e63946] not-italic">why</em> it matters.
              Our hint system gives you the scaffolding to build your own comprehension.
            </p>
          </div>
        </motion.div>
      </section>

      {/* How it works - steps */}
      <section className="px-10 md:px-24 py-32 border-t border-[#1a1a1a]/10">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-baseline gap-4 mb-20">
            <span className="font-['DM_Sans',sans-serif] text-xs tracking-[0.3em] uppercase text-[#e63946]">The Process</span>
            <div className="flex-1 h-px bg-[#1a1a1a]/15" />
          </div>
          <div className="grid md:grid-cols-3 gap-16">
            {[
              { num: "01", title: "Upload", desc: "Drag and drop any PDF file. We handle formats up to complex academic papers with full structure preservation." },
              { num: "02", title: "Analyze", desc: "Our AI engine reads, comprehends, and maps your document's argument structure, key themes, and notable passages." },
              { num: "03", title: "Discover", desc: "Get a rich, interactive report with summaries, quotes, hints, and insights — all designed to deepen your understanding." },
            ].map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
              >
                <span className="font-['DM_Sans',sans-serif] text-8xl font-bold text-[#1a1a1a]/5 block leading-none mb-6">{s.num}</span>
                <h3 className="font-['DM_Sans',sans-serif] text-sm tracking-widest uppercase mb-4">{s.title}</h3>
                <p className="font-['DM_Sans',sans-serif] text-[#1a1a1a]/50 leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-10 md:px-24 py-40 bg-[#e63946] text-white text-center">
        <motion.div
          className="max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <BookOpen className="w-16 h-16 mx-auto mb-10 opacity-70" />
          <h2 className="text-5xl md:text-7xl font-bold leading-tight mb-8">
            Start reading<br />smarter today.
          </h2>
          <p className="font-['DM_Sans',sans-serif] text-white/70 text-lg mb-12 leading-relaxed">
            Join thousands who have transformed how they consume information.
          </p>
          <button className="bg-white text-[#e63946] px-12 py-5 font-['DM_Sans',sans-serif] text-sm tracking-widest uppercase hover:bg-[#f5f0eb] transition-colors">
            Get Early Access
          </button>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="px-10 md:px-24 py-12 font-['DM_Sans',sans-serif] text-xs text-[#1a1a1a]/30 tracking-wider uppercase flex justify-between">
        <span>Ratio Reader © 2026</span>
        <span>Made with intent</span>
      </footer>
    </div>
  );
}
