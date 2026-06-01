import { useState, useEffect, useRef } from "react";
import { motion } from "motion/react";
import { ArrowRight, Upload, Sparkles, Quote, Lightbulb, BookOpen, Star } from "lucide-react";

export function Design5() {
  const [mounted, setMounted] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const cursorRef = useRef<HTMLDivElement>(null);
  useEffect(() => { setMounted(true); }, []);

  return (
    <div
      className="bg-[#fafaf7] font-['Cormorant_Garamond',serif] text-[#1c1c1c] min-h-screen overflow-x-hidden"
      onMouseMove={(e) => setMousePos({ x: e.clientX, y: e.clientY })}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=Inter+Tight:ital,wght@0,100..900;1,100..900&family=Mrs+Saint+Delafield&display=swap');

        .marble-texture {
          position: fixed;
          inset: 0;
          pointer-events: none;
          z-index: 0;
          opacity: 0.02;
          background: 
            radial-gradient(ellipse at 20% 50%, #d4a853 0%, transparent 50%),
            radial-gradient(ellipse at 80% 50%, #1c1c1c 0%, transparent 50%);
        }

        .luxury-cursor {
          width: 40px;
          height: 40px;
          border: 1px solid #d4a853;
          border-radius: 50%;
          pointer-events: none;
          position: fixed;
          z-index: 100;
          transition: width 0.3s, height 0.3s, transform 0.05s;
          mix-blend-mode: difference;
        }
        .luxury-cursor-dot {
          width: 4px;
          height: 4px;
          background: #d4a853;
          border-radius: 50%;
          position: fixed;
          pointer-events: none;
          z-index: 101;
          transition: transform 0.02s;
        }

        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        .gold-shimmer {
          background: linear-gradient(90deg, #d4a853 0%, #e8c97a 25%, #f0d58c 50%, #e8c97a 75%, #d4a853 100%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmer 4s linear infinite;
        }

        .line-reveal {
          position: relative;
        }
        .line-reveal::after {
          content: '';
          position: absolute;
          bottom: -8px;
          left: 0;
          width: 0;
          height: 1px;
          background: #d4a853;
          transition: width 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .line-reveal:hover::after {
          width: 100%;
        }
      `}</style>

      <div className="marble-texture" />
      <div className="luxury-cursor" style={{ left: mousePos.x - 20, top: mousePos.y - 20, transform: `translate(${mousePos.x}px, ${mousePos.y}px)` }} />
      <div className="luxury-cursor-dot" style={{ left: mousePos.x - 2, top: mousePos.y - 2 }} />

      <div className="relative z-10">
        {/* Top bar */}
        <div className="flex items-center justify-between px-12 py-8 border-b border-[#1c1c1c]/5">
          <div className="flex items-center gap-3">
            <Star className="w-5 h-5 text-[#d4a853] fill-[#d4a853]" />
            <span className="text-sm tracking-[0.3em] font-['Inter_Tight',sans-serif] text-[#1c1c1c]/30 uppercase">Ratio</span>
          </div>
          <div className="flex gap-10 font-['Inter_Tight',sans-serif] text-xs tracking-[0.2em] text-[#1c1c1c]/25 uppercase">
            <a href="#" className="hover:text-[#d4a853] transition-colors">Philosophy</a>
            <a href="#" className="hover:text-[#d4a853] transition-colors">Craft</a>
            <a href="#" className="hover:text-[#d4a853] transition-colors">Concierge</a>
          </div>
        </div>

        {/* Hero */}
        <section className="px-12 pt-32 pb-48">
          <div className="max-w-6xl mx-auto grid md:grid-cols-12 gap-8">
            <motion.div
              className="md:col-span-7"
              initial={{ opacity: 0, y: 60 }}
              animate={mounted ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex items-center gap-4 mb-16">
                <div className="w-12 h-px bg-[#d4a853]" />
                <span className="font-['Inter_Tight',sans-serif] text-[10px] tracking-[0.4em] text-[#d4a853] uppercase">
                  The Art of Reading
                </span>
              </div>

              <h1 className="text-7xl md:text-8xl font-light leading-[0.92] tracking-tight mb-1">
                Ratio
              </h1>
              <h2 className="text-4xl md:text-5xl font-light italic text-[#d4a853] mb-16 tracking-tight">
                Reader
              </h2>

              <p className="font-['Inter_Tight',sans-serif] text-lg text-[#1c1c1c]/35 leading-relaxed max-w-md mb-16">
                A quiet revolution in how you encounter ideas. Upload a document and experience reading as it was always meant to be — clear, considered, and illuminating.
              </p>

              <div className="flex gap-6">
                <button className="bg-[#1c1c1c] text-[#fafaf7] px-10 py-4 font-['Inter_Tight',sans-serif] text-xs tracking-[0.25em] uppercase hover:bg-[#2c2c2c] transition-colors flex items-center gap-3">
                  <Upload className="w-3.5 h-3.5" />
                  Begin
                </button>
                <button className="border border-[#1c1c1c]/10 px-10 py-4 font-['Inter_Tight',sans-serif] text-xs tracking-[0.25em] uppercase text-[#1c1c1c]/30 hover:border-[#d4a853]/50 hover:text-[#d4a853] transition-all">
                  Learn More
                </button>
              </div>
            </motion.div>

            <motion.div
              className="md:col-span-5 hidden md:flex items-end justify-end"
              initial={{ opacity: 0 }}
              animate={mounted ? { opacity: 1 } : {}}
              transition={{ delay: 0.4, duration: 1 }}
            >
              <div className="relative">
                <div className="w-64 h-80 border border-[#1c1c1c]/5 flex flex-col items-center justify-center gap-6 p-10">
                  <div className="w-20 h-px bg-[#d4a853]/30" />
                  <BookOpen className="w-10 h-10 text-[#d4a853]/40" />
                  <p className="font-['Inter_Tight',sans-serif] text-[10px] tracking-[0.3em] text-[#1c1c1c]/15 uppercase text-center">
                    Upload any<br />document
                  </p>
                  <div className="w-20 h-px bg-[#d4a853]/30" />
                </div>
                <div className="absolute -top-4 -right-4 text-7xl font-['Mrs_Saint_Delafield',cursive] text-[#d4a853]/20 select-none">
                  &
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Feature line */}
        <div className="border-t border-[#1c1c1c]/5 px-12 py-12 overflow-hidden">
          <div className="flex gap-16 font-['Inter_Tight',sans-serif] text-xs tracking-[0.25em] text-[#1c1c1c]/15 uppercase whitespace-nowrap">
            <span>✦ Summarization</span>
            <span>✦ Quote Extraction</span>
            <span>✦ Contextual Hints</span>
            <span>✦ Deep Insights</span>
            <span>✦ Pattern Recognition</span>
            <span>✦ Argument Mapping</span>
          </div>
        </div>

        {/* Features - refined grid */}
        <section className="px-12 py-40">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-6 mb-24">
              <div className="w-16 h-px bg-[#d4a853]/40" />
              <span className="font-['Inter_Tight',sans-serif] text-[10px] tracking-[0.4em] text-[#d4a853] uppercase">Capabilities</span>
            </div>

            <div className="grid md:grid-cols-2 gap-y-24 gap-x-20">
              {[
                { num: "I", title: "Intelligent Summaries", desc: "Not mere truncation. Every summary is a careful distillation that preserves the author's voice, the argument's architecture, and the nuance that makes ideas worth engaging with." },
                { num: "II", title: "Curated Quotations", desc: "Like a literary sommelier selecting the finest vintage, Ratio identifies the passages that carry the weight of meaning — the lines that define a work." },
                { num: "III", title: "Graceful Guidance", desc: "Hints that illuminate without over-revealing. Like a tutor who asks the right question at precisely the right moment, guiding you toward your own understanding." },
                { num: "IV", title: "Profound Connections", desc: "Beyond the obvious. Ratio maps the invisible architecture of ideas — themes that echo across chapters, arguments that build on each other, patterns of thought." },
              ].map((f, i) => (
                <motion.div
                  key={i}
                  className="group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: i * 0.1, duration: 0.7 }}
                >
                  <span className="text-5xl font-light italic text-[#d4a853]/20 block mb-6">{f.num}</span>
                  <h3 className="text-2xl font-medium mb-4 text-[#1c1c1c]">{f.title}</h3>
                  <p className="font-['Inter_Tight',sans-serif] text-sm text-[#1c1c1c]/35 leading-relaxed">{f.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonial - single elegant one */}
        <section className="px-12 py-40 border-y border-[#1c1c1c]/5">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="text-8xl font-['Mrs_Saint_Delafield',cursive] text-[#d4a853]/30 mb-8 leading-none">&ldquo;</div>
              <blockquote className="text-3xl md:text-4xl leading-relaxed font-light italic mb-12">
                Ratio doesn't tell you what to think. It shows you how to think about what you've read.
              </blockquote>
              <div className="flex items-center justify-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#1c1c1c]/3 flex items-center justify-center">
                  <Star className="w-5 h-5 text-[#d4a853]/50" />
                </div>
                <div className="text-left">
                  <p className="font-['Inter_Tight',sans-serif] text-sm font-medium text-[#1c1c1c]">Elena Vasquez</p>
                  <p className="font-['Inter_Tight',sans-serif] text-xs text-[#1c1c1c]/25 tracking-wider">Literary Editor, The Atlantic</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* How it works - minimal elegance */}
        <section className="px-12 py-40">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-6 mb-24">
              <div className="w-16 h-px bg-[#d4a853]/40" />
              <span className="font-['Inter_Tight',sans-serif] text-[10px] tracking-[0.4em] text-[#d4a853] uppercase">The Experience</span>
            </div>

            <div className="grid md:grid-cols-3 gap-2">
              {[
                { title: "Upload", desc: "Your document becomes our canvas. No format too complex, no text too dense.", icon: <Upload className="w-4 h-4" /> },
                { title: "Reflect", desc: "Ratio reads with care, mapping the terrain of your document with patience and precision.", icon: <Sparkles className="w-4 h-4" /> },
                { title: "Discover", desc: "What emerges is a portrait of understanding — clear, deep, and entirely yours to explore.", icon: <Lightbulb className="w-4 h-4" /> },
              ].map((s, i) => (
                <motion.div
                  key={i}
                  className="p-12 border border-[#1c1c1c]/5 hover:border-[#d4a853]/20 transition-all duration-700 group"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2, duration: 0.6 }}
                >
                  <div className="w-10 h-10 rounded-full border border-[#1c1c1c]/10 flex items-center justify-center mb-12 text-[#d4a853] group-hover:bg-[#d4a853] group-hover:text-white group-hover:border-[#d4a853] transition-all duration-500">
                    {s.icon}
                  </div>
                  <h3 className="text-xl font-medium mb-4">{s.title}</h3>
                  <p className="font-['Inter_Tight',sans-serif] text-sm text-[#1c1c1c]/30 leading-relaxed">{s.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-12 py-48 bg-[#1c1c1c] text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-[#1c1c1c] via-[#252525] to-[#1c1c1c]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full"
            style={{
              background: "radial-gradient(circle, rgba(212,168,83,0.06) 0%, transparent 70%)",
            }}
          />
          <motion.div
            className="max-w-2xl mx-auto relative"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Star className="w-12 h-12 mx-auto mb-10 text-[#d4a853]/50" />
            <h2 className="text-4xl md:text-6xl font-light mb-8 text-[#fafaf7] leading-tight">
              Reading
              <br />
              <span className="gold-shimmer">reimagined.</span>
            </h2>
            <p className="font-['Inter_Tight',sans-serif] text-[#fafaf7]/30 text-lg mb-14 leading-relaxed">
              Experience the difference that thoughtful design makes. Ratio elevates reading from consumption to understanding.
            </p>
            <button className="bg-[#d4a853] text-[#1c1c1c] px-12 py-5 font-['Inter_Tight',sans-serif] text-xs tracking-[0.3em] uppercase hover:bg-[#e8c97a] transition-colors flex items-center gap-3 mx-auto">
              Begin Your Journey
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </motion.div>
        </section>

        <footer className="px-12 py-12 border-t border-[#1c1c1c]/5">
          <div className="max-w-6xl mx-auto flex justify-between items-center font-['Inter_Tight',sans-serif] text-[10px] tracking-[0.2em] text-[#1c1c1c]/15 uppercase">
            <span>Ratio Reader — Est. 2026</span>
            <span>Made with care</span>
          </div>
        </footer>
      </div>
    </div>
  );
}
