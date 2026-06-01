import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { Upload, Leaf, Sparkles, Quote, Lightbulb, ArrowRight, Flower2 } from "lucide-react";

export function Design3() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  return (
    <div className="bg-[#f5f0e8] font-['Lora',serif] text-[#2d4a22] min-h-screen overflow-x-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400..700;1,400..700&family=Caveat:wght@400..700&family=Nunito+Sans:ital,opsz,wght@0,6..12,200..1000;1,6..12,200..1000&display=swap');
        
        @keyframes float-leaf {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          25% { transform: translateY(-20px) rotate(5deg); }
          75% { transform: translateY(10px) rotate(-3deg); }
        }
        .float-leaf { animation: float-leaf 8s ease-in-out infinite; }
        .float-leaf-delayed { animation: float-leaf 10s ease-in-out 2s infinite; }
        .float-leaf-slow { animation: float-leaf 12s ease-in-out 4s infinite; }
        
        .grain-overlay {
          position: fixed;
          inset: 0;
          pointer-events: none;
          z-index: 50;
          opacity: 0.03;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
        }
        
        .inky-underline {
          position: relative;
        }
        .inky-underline::after {
          content: '';
          position: absolute;
          left: -4px;
          right: -4px;
          bottom: -4px;
          height: 6px;
          background: rgba(196, 163, 90, 0.3);
          border-radius: 3px;
        }
      `}</style>

      <div className="grain-overlay" />

      {/* Decorative leaves */}
      <div className="fixed top-20 right-10 text-[#c4a35a]/20 float-leaf pointer-events-none z-0">
        <Flower2 className="w-24 h-24" />
      </div>
      <div className="fixed bottom-20 left-10 text-[#c4a35a]/15 float-leaf-delayed pointer-events-none z-0">
        <Flower2 className="w-16 h-16" />
      </div>
      <div className="fixed top-1/2 left-5 text-[#c4a35a]/10 float-leaf-slow pointer-events-none z-0">
        <Leaf className="w-12 h-12" />
      </div>

      <div className="relative z-10">
        {/* Nav */}
        <nav className="flex items-center justify-between px-8 py-6 font-['Nunito_Sans',sans-serif] text-sm">
          <span className="text-[#c4a35a] text-lg tracking-wider italic">Ratio Reader</span>
          <div className="flex gap-8 text-[#2d4a22]/50">
            <a href="#" className="hover:text-[#c4a35a] transition-colors">About</a>
            <a href="#" className="hover:text-[#c4a35a] transition-colors">Features</a>
            <a href="#" className="hover:text-[#c4a35a] transition-colors">Stories</a>
          </div>
        </nav>

        {/* Hero */}
        <section className="px-8 pt-20 pb-40 text-center">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={mounted ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, ease: [0.25, 0.1, 0, 1] }}
            >
              <div className="inline-flex items-center gap-3 mb-10 px-6 py-2 rounded-full border border-[#c4a35a]/30 bg-[#f5f0e8]/80 backdrop-blur-sm">
                <span className="w-2 h-2 rounded-full bg-[#c4a35a] animate-pulse" />
                <span className="font-['Nunito_Sans',sans-serif] text-xs tracking-widest uppercase text-[#c4a35a]">
                  Now in Public Beta
                </span>
              </div>

              <h1 className="text-6xl md:text-7xl font-bold leading-[1.05] mb-8 text-[#2d4a22]">
                Let the words
                <br />
                <span className="italic text-[#c4a35a] font-normal font-['Caveat',cursive] text-7xl md:text-8xl block mt-2">
                  bloom into meaning.
                </span>
              </h1>

              <p className="font-['Nunito_Sans',sans-serif] text-xl text-[#2d4a22]/50 max-w-xl mx-auto mb-12 leading-relaxed">
                Upload any PDF and watch as Ratio gently unfolds its wisdom — summaries, hints, and insights that nurture deep understanding.
              </p>

              <div className="flex justify-center gap-4 flex-wrap">
                <button className="bg-[#2d4a22] text-[#f5f0e8] px-10 py-4 font-['Nunito_Sans',sans-serif] text-sm tracking-wider hover:bg-[#3d5a32] transition-colors flex items-center gap-2 rounded-full">
                  <Upload className="w-4 h-4" />
                  Upload Your First PDF
                </button>
                <button className="border border-[#2d4a22]/20 px-10 py-4 font-['Nunito_Sans',sans-serif] text-sm tracking-wider text-[#2d4a22]/60 hover:border-[#c4a35a] hover:text-[#c4a35a] transition-all rounded-full">
                  See It In Action
                </button>
              </div>
            </motion.div>
          </div>

          {/* Swoosh divider */}
          <svg className="w-full mt-20" viewBox="0 0 1200 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 30 Q300 0 600 30 Q900 60 1200 30" stroke="#c4a35a" strokeWidth="1" fill="none" opacity="0.3" />
          </svg>
        </section>

        {/* Story / vision */}
        <section className="px-8 py-32">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="font-['Caveat',cursive] text-3xl text-[#c4a35a] block mb-6">
                Reading shouldn't feel like work.
              </span>
              <p className="font-['Nunito_Sans',sans-serif] text-lg text-[#2d4a22]/50 leading-relaxed">
                In a world drowning in documents, Ratio is your quiet garden of understanding. We don't just summarize — we cultivate curiosity. Every PDF becomes a conversation. Every insight, a seed planted for deeper growth.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Features - organic cards */}
        <section className="px-8 py-32 bg-[#f0ebe0]">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#2d4a22]">
                What grows from your pages
              </h2>
              <div className="w-16 h-0.5 bg-[#c4a35a] mx-auto" />
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: <Sparkles className="w-5 h-5" />, title: "Nourishing Summaries", desc: "Gentle distillations that give you the essence without stripping away the beauty of the original." },
                { icon: <Quote className="w-5 h-5" />, title: "Gleaned Quotes", desc: "The most resonant passages, carefully selected like ripe fruit from the vine." },
                { icon: <Lightbulb className="w-5 h-5" />, title: "Guiding Hints", desc: "Soft nudges that lead you toward understanding, like sunlight guiding a seedling." },
                { icon: <Leaf className="w-5 h-5" />, title: "Deep Roots Insight", desc: "Uncover the hidden connections that bind ideas together beneath the surface." },
              ].map((f, i) => (
                <motion.div
                  key={i}
                  className="bg-[#f5f0e8] p-8 rounded-3xl border border-[#c4a35a]/15 hover:border-[#c4a35a]/40 hover:shadow-lg hover:shadow-[#c4a35a]/5 transition-all duration-500 group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.6 }}
                >
                  <div className="w-14 h-14 rounded-2xl bg-[#c4a35a]/10 flex items-center justify-center text-[#c4a35a] mb-6 group-hover:bg-[#c4a35a] group-hover:text-[#f5f0e8] transition-all duration-500">
                    {f.icon}
                  </div>
                  <h3 className="font-['Nunito_Sans',sans-serif] font-semibold text-lg mb-3 text-[#2d4a22]">{f.title}</h3>
                  <p className="font-['Nunito_Sans',sans-serif] text-[#2d4a22]/50 text-sm leading-relaxed">{f.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Quote - centerpiece */}
        <section className="px-8 py-40 relative">
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-5">
            <Flower2 className="w-96 h-96 text-[#c4a35a]" />
          </div>
          <div className="max-w-3xl mx-auto text-center relative">
            <motion.blockquote
              className="text-3xl md:text-4xl leading-relaxed italic mb-8"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              "The best readers are not those who read the most, but those who understand the deepest."
            </motion.blockquote>
            <cite className="font-['Nunito_Sans',sans-serif] text-sm text-[#2d4a22]/40 not-italic tracking-wider">
              — A Ratio Reader
            </cite>
          </div>
        </section>

        {/* How it works - horizontal */}
        <section className="px-8 py-32">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#2d4a22]">
                Your path to clarity
              </h2>
              <p className="font-['Nunito_Sans',sans-serif] text-[#2d4a22]/40 text-lg">
                Three gentle steps from document to discovery
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { step: "1", title: "Drop Your PDF", desc: "Like planting a seed in rich soil. Any document, any format — Ratio welcomes it all with care.", icon: "🌱" },
                { step: "2", title: "Let It Grow", desc: "Our AI tends to your document, nurturing understanding through careful analysis and synthesis.", icon: "🌿" },
                { step: "3", title: "Harvest Wisdom", desc: "Reap the knowledge that blooms — summaries, quotes, hints, and insights ready for you to explore.", icon: "🌻" },
              ].map((s, i) => (
                <motion.div
                  key={i}
                  className="text-center p-10 rounded-3xl bg-[#f5f0e8] border border-[#c4a35a]/10"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2, duration: 0.6 }}
                >
                  <div className="text-5xl mb-6">{s.icon}</div>
                  <div className="w-10 h-10 rounded-full bg-[#c4a35a]/20 flex items-center justify-center mx-auto mb-4">
                    <span className="font-['Nunito_Sans',sans-serif] text-sm font-bold text-[#c4a35a]">{s.step}</span>
                  </div>
                  <h3 className="font-['Nunito_Sans',sans-serif] font-semibold text-lg mb-3">{s.title}</h3>
                  <p className="font-['Nunito_Sans',sans-serif] text-[#2d4a22]/50 text-sm leading-relaxed">{s.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-8 py-40 bg-[#2d4a22] text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 text-[#c4a35a]">
              <Flower2 className="w-32 h-32" />
            </div>
            <div className="absolute bottom-10 right-10 text-[#c4a35a]">
              <Leaf className="w-24 h-24" />
            </div>
          </div>
          <div className="max-w-2xl mx-auto relative">
            <Leaf className="w-16 h-16 mx-auto mb-8 text-[#c4a35a]/50" />
            <h2 className="text-4xl md:text-6xl font-bold mb-8 text-[#f5f0e8]">
              Ready to read
              <br />
              <span className="italic text-[#c4a35a] font-['Caveat',cursive] text-5xl md:text-7xl">
                differently
              </span>
              <span className="text-[#f5f0e8]">?</span>
            </h2>
            <p className="font-['Nunito_Sans',sans-serif] text-[#f5f0e8]/50 mb-12 text-lg">
              Join the garden of curious minds who have transformed their reading experience.
            </p>
            <button className="bg-[#c4a35a] text-[#2d4a22] px-12 py-5 font-['Nunito_Sans',sans-serif] font-semibold text-sm tracking-wider hover:bg-[#d4b56a] transition-colors rounded-full flex items-center gap-2 mx-auto">
              Start Your Journey
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </section>

        <footer className="px-8 py-12 text-center font-['Nunito_Sans',sans-serif] text-sm text-[#2d4a22]/30">
          <p>Ratio Reader — Cultivating understanding, one page at a time.</p>
        </footer>
      </div>
    </div>
  );
}
