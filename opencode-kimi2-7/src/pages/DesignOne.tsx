import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  FileText,
  Quote,
  Feather,
  Layers,
  Sparkles,
  ArrowRight,
  Highlighter,
  BookOpen,
  Menu,
} from "lucide-react";

const features = [
  {
    icon: Layers,
    title: "Executive Summaries",
    body: "Distill hundred-page reports into a few essential paragraphs without losing the argument.",
  },
  {
    icon: Highlighter,
    title: "Key Quotes",
    body: "Surface the sentences that matter, with page references and surrounding context.",
  },
  {
    icon: Feather,
    title: "Smart Hints",
    body: "Clarify jargon, connect ideas, and explain background concepts as you read.",
  },
  {
    icon: Sparkles,
    title: "Insight Cards",
    body: "Draw out themes, counter-arguments, and implications you might have missed.",
  },
];

export function DesignOne() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-[#F7F3EE] text-[#1A1816] font-(--font-editorial-body) overflow-x-hidden selection:bg-[#C23B22] selection:text-white"
    >
      {/* Decorative top rule */}
      <div className="h-2 bg-[#1A1816]" />

      {/* Masthead */}
      <header className="px-6 md:px-12 lg:px-20 py-6 border-b border-[#1A1816]/15">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-[#C23B22] flex items-center justify-center">
              <FileText className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-black font-(--font-editorial-display) leading-none tracking-tight">
                Ratio Reader
              </h1>
              <p className="text-xs uppercase tracking-[0.25em] text-[#1A1816]/60 mt-1">
                The Sunday Edition, Every Day
              </p>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm font-semibold tracking-wide">
            <a href="#features" className="hover:text-[#C23B22] transition-colors">Features</a>
            <a href="#quotes" className="hover:text-[#C23B22] transition-colors">Quotes</a>
            <a href="#pricing" className="hover:text-[#C23B22] transition-colors">Pricing</a>
            <button className="px-5 py-2 bg-[#1A1816] text-[#F7F3EE] hover:bg-[#C23B22] transition-colors">
              Start Reading
            </button>
          </nav>
          <button className="md:hidden">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      {/* Hero / Magazine Spread */}
      <section className="px-6 md:px-12 lg:px-20 pt-16 md:pt-24 pb-20">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left column: headline */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#C23B22] mb-6">
              Volume I — The Reading Issue
            </p>
            <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black font-(--font-editorial-display) leading-[0.9] mb-8">
              Read Less.
              <br />
              <span className="italic font-medium">Understand Everything.</span>
            </h2>
            <p className="text-lg md:text-xl text-[#1A1816]/80 leading-relaxed max-w-xl mb-10">
              Upload a PDF and Ratio Reader returns a carefully edited summary,
              the sharpest quotes, and quiet hints that help the text make
              sense — like a great editor sitting beside you.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <button className="group px-8 py-4 bg-[#1A1816] text-[#F7F3EE] font-semibold tracking-wide hover:bg-[#C23B22] transition-colors flex items-center gap-3">
                Upload a PDF
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 border-2 border-[#1A1816] font-semibold tracking-wide hover:bg-[#1A1816] hover:text-[#F7F3EE] transition-colors">
                See an Example
              </button>
            </div>
          </motion.div>

          {/* Right column: visual composition */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 relative"
          >
            <div className="relative aspect-[4/5] bg-[#EADFD2] border border-[#1A1816]/10 p-6 md:p-8">
              <motion.div style={{ y }} className="absolute inset-0 flex items-center justify-center">
                <div className="w-[72%] h-[78%] bg-white shadow-2xl rotate-2 p-6 flex flex-col">
                  <div className="h-3 w-24 bg-[#C23B22] mb-6" />
                  <div className="space-y-3 flex-1">
                    <div className="h-2 bg-[#1A1816]/10 rounded-full w-full" />
                    <div className="h-2 bg-[#1A1816]/10 rounded-full w-[92%]" />
                    <div className="h-2 bg-[#1A1816]/10 rounded-full w-[96%]" />
                    <div className="h-2 bg-[#1A1816]/10 rounded-full w-[88%]" />
                    <div className="h-2 bg-[#1A1816]/10 rounded-full w-[94%]" />
                    <div className="h-2 bg-[#C23B22]/30 rounded-full w-[40%]" />
                    <div className="h-2 bg-[#1A1816]/10 rounded-full w-[91%]" />
                    <div className="h-2 bg-[#1A1816]/10 rounded-full w-[85%]" />
                  </div>
                  <div className="mt-6 pt-4 border-t border-[#1A1816]/10 flex items-center justify-between text-[10px] uppercase tracking-widest text-[#1A1816]/50">
                    <span>Summary</span>
                    <span>Page 4 of 12</span>
                  </div>
                </div>
              </motion.div>
              {/* Floating cards */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="absolute -right-4 top-12 bg-white border border-[#1A1816]/10 shadow-lg p-4 max-w-[180px]"
              >
                <Quote className="w-5 h-5 text-[#C23B22] mb-2" />
                <p className="text-sm italic leading-snug font-(--font-editorial-display)">
                  "The central claim rests on three overlooked assumptions..."
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="absolute -left-4 bottom-16 bg-[#1A1816] text-[#F7F3EE] p-4 shadow-lg max-w-[200px]"
              >
                <p className="text-xs uppercase tracking-widest text-[#C23B22] mb-1">Hint</p>
                <p className="text-sm leading-snug">
                  Compare this paragraph with the author’s earlier definition of “agency.”
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pull Quote Band */}
      <section id="quotes" className="bg-[#1A1816] text-[#F7F3EE] py-20 px-6 md:px-12 lg:px-20">
        <div className="max-w-5xl mx-auto grid md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-1 flex justify-center">
            <Quote className="w-12 h-12 text-[#C23B22]" />
          </div>
          <blockquote className="md:col-span-11">
            <p className="text-3xl md:text-5xl font-(--font-editorial-display) font-medium leading-tight">
              "A good summary doesn't replace the book. It teaches you how to read it."
            </p>
            <footer className="mt-6 text-[#F7F3EE]/60 uppercase tracking-widest text-sm">
              — The Ratio Reader Manifesto
            </footer>
          </blockquote>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="px-6 md:px-12 lg:px-20 py-24">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#C23B22] mb-3">
                The Toolkit
              </p>
              <h3 className="text-4xl md:text-6xl font-black font-(--font-editorial-display)">
                What You Get
              </h3>
            </div>
            <p className="text-[#1A1816]/70 max-w-md text-lg">
              Every upload becomes a curated reading experience — edited, annotated, and illuminated.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-px bg-[#1A1816]/10 border border-[#1A1816]/10">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: i * 0.1, duration: 0.7 }}
                className="bg-[#F7F3EE] p-8 md:p-12 hover:bg-[#EADFD2] transition-colors group"
              >
                <feature.icon className="w-10 h-10 text-[#C23B22] mb-6 group-hover:scale-110 transition-transform" />
                <h4 className="text-2xl font-bold font-(--font-editorial-display) mb-3">
                  {feature.title}
                </h4>
                <p className="text-[#1A1816]/75 leading-relaxed">{feature.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works — Editorial spread */}
      <section className="px-6 md:px-12 lg:px-20 py-24 bg-[#EADFD2]">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#C23B22] mb-4">
              The Process
            </p>
            <h3 className="text-4xl md:text-6xl font-black font-(--font-editorial-display) mb-8 leading-[0.95]">
              Three Steps to Clarity
            </h3>
            <div className="space-y-8">
              {[
                { step: "01", title: "Upload", body: "Drop any PDF. We handle research papers, reports, essays, and books." },
                { step: "02", title: "Analyze", body: "Ratio Reader reads, structures, and identifies the core arguments." },
                { step: "03", title: "Absorb", body: "Return to the text with summaries, quotes, and hints at your side." },
              ].map((item) => (
                <div key={item.step} className="flex gap-6">
                  <span className="text-3xl font-black font-(--font-editorial-display) text-[#C23B22]">
                    {item.step}
                  </span>
                  <div>
                    <h4 className="text-xl font-bold font-(--font-editorial-display) mb-1">{item.title}</h4>
                    <p className="text-[#1A1816]/70 leading-relaxed">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square bg-[#F7F3EE] border border-[#1A1816]/10 p-8 grid grid-cols-2 gap-4">
              {[BookOpen, Quote, Highlighter, Sparkles].map((Icon, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-[#EADFD2] border border-[#1A1816]/10 flex flex-col items-center justify-center gap-3 hover:bg-[#C23B22] hover:text-white transition-colors"
                >
                  <Icon className="w-8 h-8" />
                  <span className="text-xs uppercase tracking-widest">Layer {i + 1}</span>
                </motion.div>
              ))}
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#C23B22] -z-10" />
          </div>
        </div>
      </section>

      {/* CTA / Footer */}
      <section id="pricing" className="px-6 md:px-12 lg:px-20 py-24 border-t border-[#1A1816]/10">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-4xl md:text-6xl font-black font-(--font-editorial-display) mb-6">
            Start Reading Smarter
          </h3>
          <p className="text-lg text-[#1A1816]/70 mb-10 max-w-2xl mx-auto">
            Join the readers who use Ratio Reader to cut through the noise and find what matters.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-10 py-4 bg-[#C23B22] text-white font-bold tracking-wide hover:bg-[#a12e1a] transition-colors">
              Try It Free
            </button>
            <button className="px-10 py-4 border-2 border-[#1A1816] font-bold tracking-wide hover:bg-[#1A1816] hover:text-[#F7F3EE] transition-colors">
              View Pricing
            </button>
          </div>
        </div>
      </section>

      <footer className="bg-[#1A1816] text-[#F7F3EE]/60 px-6 md:px-12 lg:px-20 py-10 text-sm">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <span className="font-(--font-editorial-display) text-lg text-[#F7F3EE]">Ratio Reader</span>
          <span>© 2026 Ratio Reader. All rights reserved.</span>
        </div>
      </footer>
    </div>
  );
}
