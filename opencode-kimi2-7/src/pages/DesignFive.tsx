import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  FileText,
  Crown,
  Gem,
  Quote,
  Sparkles,
  ArrowRight,
  Menu,
  Feather,
  Eye,
  Star,
} from "lucide-react";

const features = [
  {
    icon: Crown,
    title: "Regal Summaries",
    body: "A concise account of the text's highest arguments, prepared with precision.",
  },
  {
    icon: Gem,
    title: "Curated Quotes",
    body: "The most brilliant passages, polished and set for easy reference.",
  },
  {
    icon: Eye,
    title: "Discreet Hints",
    body: "Elegant annotations that reveal meaning without disturbing the prose.",
  },
  {
    icon: Star,
    title: "Refined Insights",
    body: "Connections and conclusions drawn with the care of a master critic.",
  },
];

export function DesignFive() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const decoY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <div
      ref={heroRef}
      className="min-h-screen bg-[#0A1628] text-[#F4E4BC] font-(--font-deco-body) overflow-x-hidden selection:bg-[#D4AF37] selection:text-[#0A1628]"
    >
      {/* Gold gradient ambient */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120vw] h-[80vh] bg-[radial-gradient(ellipse_at_top,rgba(212,175,55,0.12),transparent_70%)]" />
      </div>

      {/* Decorative top border */}
      <div className="relative z-10 h-2 bg-gradient-to-r from-[#D4AF37] via-[#F4E4BC] to-[#D4AF37]" />

      {/* Header */}
      <header className="relative z-10 px-6 md:px-12 lg:px-20 py-6 border-b border-[#D4AF37]/20">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 border border-[#D4AF37] flex items-center justify-center bg-[#D4AF37]/10">
              <FileText className="w-6 h-6 text-[#D4AF37]" />
            </div>
            <div>
              <span className="text-2xl md:text-3xl font-(--font-deco-display) tracking-widest text-[#F4E4BC]">
                RATIO
              </span>
              <span className="block text-[10px] uppercase tracking-[0.4em] text-[#D4AF37]/70">Reader</span>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-10 text-sm uppercase tracking-[0.2em]">
            <a href="#features" className="hover:text-[#D4AF37] transition-colors">Features</a>
            <a href="#craft" className="hover:text-[#D4AF37] transition-colors">Craft</a>
            <a href="#membership" className="hover:text-[#D4AF37] transition-colors">Membership</a>
            <button className="px-6 py-2 border border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#0A1628] transition-colors uppercase tracking-widest">
              Enter
            </button>
          </nav>
          <button className="md:hidden text-[#D4AF37]">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      {/* Hero */}
      <section className="relative z-10 px-6 md:px-12 lg:px-20 pt-20 md:pt-32 pb-24">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />
              <span className="text-xs uppercase tracking-[0.4em] text-[#D4AF37]">Est. 2026</span>
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />
            </div>
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-(--font-deco-display) leading-[0.95] mb-8 text-center lg:text-left">
              The Art of
              <br />
              <span className="text-[#D4AF37]">Understanding</span>
            </h1>
            <p className="text-lg md:text-xl text-[#F4E4BC]/70 leading-relaxed max-w-xl mb-10 text-center lg:text-left">
              Ratio Reader elevates the humble PDF into a curated reading experience —
              complete with summaries, precious quotes, and refined hints.
            </p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              <button className="group px-10 py-4 bg-gradient-to-r from-[#D4AF37] to-[#F4E4BC] text-[#0A1628] font-bold uppercase tracking-[0.2em] hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] transition-shadow flex items-center gap-3">
                Upload PDF
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-10 py-4 border border-[#F4E4BC]/30 uppercase tracking-[0.2em] hover:border-[#D4AF37] hover:text-[#D4AF37] transition-colors">
                Discover
              </button>
            </div>
          </motion.div>

          {/* Decorative hero visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 relative"
          >
            <motion.div style={{ y: decoY }} className="relative">
              {/* Sunburst */}
              <svg viewBox="0 0 400 400" className="w-full h-auto text-[#D4AF37]/10">
                {[...Array(24)].map((_, i) => (
                  <line
                    key={i}
                    x1="200"
                    y1="200"
                    x2={200 + 180 * Math.cos((i * 15 * Math.PI) / 180)}
                    y2={200 + 180 * Math.sin((i * 15 * Math.PI) / 180)}
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                ))}
                <circle cx="200" cy="200" r="80" fill="none" stroke="currentColor" strokeWidth="2" />
                <circle cx="200" cy="200" r="120" fill="none" stroke="currentColor" strokeWidth="1" />
              </svg>
              {/* Floating document card */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-2/3 bg-[#0F1E35] border border-[#D4AF37]/40 p-6 shadow-2xl">
                  <div className="flex items-center justify-between mb-4 border-b border-[#D4AF37]/20 pb-3">
                    <span className="text-xs uppercase tracking-[0.3em] text-[#D4AF37]">Document</span>
                    <Sparkles className="w-4 h-4 text-[#D4AF37]" />
                  </div>
                  <div className="space-y-2 mb-4">
                    <div className="h-1 bg-[#F4E4BC]/10 rounded-full w-full" />
                    <div className="h-1 bg-[#F4E4BC]/10 rounded-full w-[92%]" />
                    <div className="h-1 bg-[#D4AF37]/40 rounded-full w-[55%]" />
                    <div className="h-1 bg-[#F4E4BC]/10 rounded-full w-[88%]" />
                  </div>
                  <div className="text-xs text-[#D4AF37] uppercase tracking-widest text-right">
                    Summary · 4 min read
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Divider */}
      <div className="relative z-10 flex items-center justify-center py-8">
        <div className="w-2 h-2 rotate-45 bg-[#D4AF37]" />
        <div className="h-px w-24 bg-gradient-to-r from-[#D4AF37] to-transparent mx-2" />
        <div className="w-2 h-2 rotate-45 bg-[#D4AF37]" />
        <div className="h-px w-24 bg-gradient-to-l from-[#D4AF37] to-transparent mx-2" />
      </div>

      {/* Features */}
      <section id="features" className="relative z-10 px-6 md:px-12 lg:px-20 py-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs uppercase tracking-[0.4em] text-[#D4AF37] mb-4">The Collection</p>
            <h2 className="text-4xl md:text-6xl font-(--font-deco-display)">Four Pillars of Clarity</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ delay: i * 0.12, duration: 0.8 }}
                className="group relative bg-[#0F1E35] border border-[#D4AF37]/20 p-8 md:p-10 hover:border-[#D4AF37] transition-colors overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#D4AF37]/5 rotate-45 translate-x-12 -translate-y-12 group-hover:bg-[#D4AF37]/10 transition-colors" />
                <feature.icon className="w-10 h-10 text-[#D4AF37] mb-6" />
                <h3 className="text-2xl font-(--font-deco-display) mb-3">{feature.title}</h3>
                <p className="text-[#F4E4BC]/60 leading-relaxed">{feature.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Craft section */}
      <section id="craft" className="relative z-10 px-6 md:px-12 lg:px-20 py-24 bg-[#0F1E35]/50">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-[#D4AF37] mb-4">The Process</p>
            <h2 className="text-4xl md:text-6xl font-(--font-deco-display) mb-8">Forged in Precision</h2>
            <div className="space-y-8">
              {[
                { num: "I", title: "Receive", body: "Your PDF enters a private, secure chamber for analysis." },
                { num: "II", title: "Refine", body: "Every argument is weighed, every quote is polished." },
                { num: "III", title: "Present", body: "A reading guide worthy of the text is delivered to you." },
              ].map((step) => (
                <div key={step.num} className="flex gap-6">
                  <span className="text-3xl font-(--font-deco-display) text-[#D4AF37]">{step.num}</span>
                  <div>
                    <h4 className="text-xl font-(--font-deco-display) mb-1">{step.title}</h4>
                    <p className="text-[#F4E4BC]/60 leading-relaxed">{step.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/5] border border-[#D4AF37]/30 bg-[#0A1628] p-8 flex flex-col items-center justify-center">
              <Feather className="w-16 h-16 text-[#D4AF37] mb-8" />
              <div className="w-full space-y-3">
                <div className="h-px bg-[#D4AF37]/30 w-full" />
                <div className="h-px bg-[#D4AF37]/30 w-[90%] mx-auto" />
                <div className="h-px bg-[#D4AF37]/30 w-[80%] mx-auto" />
                <div className="h-px bg-[#D4AF37]/30 w-[95%] mx-auto" />
                <div className="h-px bg-[#D4AF37]/30 w-[70%] mx-auto" />
              </div>
              <p className="mt-8 text-center text-[#F4E4BC]/50 text-sm uppercase tracking-widest">
                A page distilled to its essence
              </p>
            </div>
            <div className="absolute -bottom-4 -right-4 w-full h-full border border-[#D4AF37]/20 -z-10" />
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="relative z-10 px-6 md:px-12 lg:px-20 py-24">
        <div className="max-w-4xl mx-auto text-center">
          <Quote className="w-12 h-12 text-[#D4AF37] mx-auto mb-6" />
          <blockquote className="text-3xl md:text-5xl font-(--font-deco-display) leading-[1.15] mb-8">
            "True luxury is not excess. It is the grace of knowing exactly what matters."
          </blockquote>
          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-12 bg-[#D4AF37]/30" />
            <span className="text-xs uppercase tracking-[0.4em] text-[#D4AF37]/70">The Ratio Reader Creed</span>
            <div className="h-px w-12 bg-[#D4AF37]/30" />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="membership" className="relative z-10 px-6 md:px-12 lg:px-20 py-24">
        <div className="max-w-5xl mx-auto border border-[#D4AF37]/40 bg-gradient-to-b from-[#0F1E35] to-[#0A1628] p-10 md:p-16 text-center relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[200%] h-px bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />
          <Crown className="w-12 h-12 text-[#D4AF37] mx-auto mb-6" />
          <h2 className="text-4xl md:text-6xl font-(--font-deco-display) mb-6">
            Join the Inner Circle
          </h2>
          <p className="text-lg text-[#F4E4BC]/70 mb-10 max-w-2xl mx-auto">
            Become a member and transform every document into a refined companion for thought.
          </p>
          <button className="px-12 py-4 bg-[#D4AF37] text-[#0A1628] font-bold uppercase tracking-[0.2em] hover:bg-[#F4E4BC] transition-colors shadow-[0_0_30px_rgba(212,175,55,0.25)]">
            Begin Membership
          </button>
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[200%] h-px bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />
        </div>
      </section>

      <footer className="relative z-10 border-t border-[#D4AF37]/20 px-6 md:px-12 lg:px-20 py-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <span className="font-(--font-deco-display) text-2xl tracking-widest">RATIO READER</span>
          <span className="text-xs uppercase tracking-[0.3em] text-[#F4E4BC]/40">
            © 2026 · Reserved for the Discerning Reader
          </span>
        </div>
      </footer>
    </div>
  );
}
