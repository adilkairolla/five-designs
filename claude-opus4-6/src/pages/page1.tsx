import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useInView } from "motion/react";
import { FileText, BookOpen, Quote, Lightbulb, ArrowRight, Sparkles } from "lucide-react";

/*
 * DESIGN 1: "THE EVENING GAZETTE"
 * Dark editorial / newspaper aesthetic
 * Serif typography, ink textures, column layouts, dramatic reveals
 * Color palette: near-black, warm cream, muted gold, ink red
 */

function InkReveal({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function GrainOverlay() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-50 opacity-[0.03]"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
        animation: "grain 8s steps(10) infinite",
      }}
    />
  );
}

function NavigationBar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        scrolled ? "bg-[#0a0908]/95 backdrop-blur-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 border border-[#c9a84c] flex items-center justify-center">
            <span className="font-playfair text-[#c9a84c] text-sm font-bold">R</span>
          </div>
          <span className="font-playfair text-[#e8dcc4] text-lg tracking-wide">Ratio Reader</span>
        </div>
        <div className="hidden md:flex items-center gap-8 font-source-serif text-[#8a8070] text-sm">
          <a href="#features" className="hover:text-[#c9a84c] transition-colors">Features</a>
          <a href="#how-it-works" className="hover:text-[#c9a84c] transition-colors">Method</a>
          <a href="#testimonials" className="hover:text-[#c9a84c] transition-colors">Praise</a>
          <button className="border border-[#c9a84c] text-[#c9a84c] px-5 py-2 hover:bg-[#c9a84c] hover:text-[#0a0908] transition-all duration-300 tracking-widest uppercase text-xs">
            Begin Reading
          </button>
        </div>
      </div>
    </motion.nav>
  );
}

function HeroSection() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 0.3], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.25], [1, 0]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0908]">
      {/* Decorative ink blots */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-[#1a1510] rounded-full blur-[100px] opacity-60" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#1a1208] rounded-full blur-[120px] opacity-40" />

      {/* Horizontal rules */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.5, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="absolute top-1/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c9a84c]/20 to-transparent origin-center"
      />
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.5, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="absolute bottom-1/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c9a84c]/20 to-transparent origin-center"
      />

      <motion.div style={{ y, opacity }} className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="inline-block mb-8"
        >
          <span className="font-source-serif text-[#c9a84c] text-xs tracking-[0.4em] uppercase border border-[#c9a84c]/30 px-6 py-2 inline-block">
            Est. 2025 &mdash; A New Chapter in Reading
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="font-playfair text-[#e8dcc4] text-5xl md:text-7xl lg:text-8xl leading-[0.95] mb-8"
        >
          Every Great Book
          <br />
          <span className="italic text-[#c9a84c]">Deserves</span> to be
          <br />
          Understood
        </motion.h1>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="w-24 h-px bg-[#c9a84c] mx-auto mb-8 origin-left"
        />

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="font-source-serif text-[#8a8070] text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-12"
        >
          Upload any PDF. Ratio Reader distills the essence—summaries, key quotes,
          hidden insights—so you absorb what matters, nothing more.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button className="group bg-[#c9a84c] text-[#0a0908] px-8 py-4 font-playfair text-lg tracking-wider hover:bg-[#d4b85c] transition-all duration-300 flex items-center justify-center gap-3">
            Upload Your First PDF
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="border border-[#3a3530] text-[#8a8070] px-8 py-4 font-source-serif text-lg hover:border-[#c9a84c] hover:text-[#c9a84c] transition-all duration-300">
            See How It Works
          </button>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-source-serif text-[#5a5040] text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-px h-8 bg-gradient-to-b from-[#c9a84c] to-transparent"
        />
      </motion.div>
    </section>
  );
}

function FeaturesSection() {
  const features = [
    {
      icon: FileText,
      title: "Intelligent Summaries",
      description: "Our engine reads between the lines, extracting the argument structure and core thesis from any document.",
      detail: "Chapter-by-chapter breakdowns with weighted importance scoring",
    },
    {
      icon: Quote,
      title: "Key Quotations",
      description: "The most pivotal passages, surfaced and annotated, so you never miss the sentences that carry the weight.",
      detail: "Contextual annotations explain why each quote matters",
    },
    {
      icon: Lightbulb,
      title: "Hidden Insights",
      description: "Connections, implications, and subtext that even careful readers might overlook on a first pass.",
      detail: "Cross-reference analysis reveals patterns across sections",
    },
    {
      icon: BookOpen,
      title: "Reading Hints",
      description: "Guided cues that prime your understanding before you dive into complex or dense material.",
      detail: "Vocabulary aids, context frames, and conceptual scaffolding",
    },
  ];

  return (
    <section id="features" className="relative bg-[#0a0908] py-32 overflow-hidden">
      {/* Column dividers */}
      <div className="absolute top-0 bottom-0 left-1/4 w-px bg-[#1a1815] hidden lg:block" />
      <div className="absolute top-0 bottom-0 left-2/4 w-px bg-[#1a1815] hidden lg:block" />
      <div className="absolute top-0 bottom-0 left-3/4 w-px bg-[#1a1815] hidden lg:block" />

      <div className="max-w-7xl mx-auto px-6">
        <InkReveal className="text-center mb-20">
          <span className="font-source-serif text-[#c9a84c] text-xs tracking-[0.4em] uppercase">
            The Method
          </span>
          <h2 className="font-playfair text-[#e8dcc4] text-4xl md:text-6xl mt-4 mb-6">
            Four Pillars of<br /><span className="italic">Comprehension</span>
          </h2>
          <div className="w-16 h-px bg-[#c9a84c]/50 mx-auto" />
        </InkReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
          {features.map((feature, i) => (
            <InkReveal key={feature.title} delay={i * 0.15} className="group">
              <div className="p-8 lg:px-6 border-t border-[#1a1815] lg:border-t-0 lg:border-l lg:first:border-l-0 hover:bg-[#0f0d0a] transition-colors duration-500 h-full">
                <feature.icon className="w-6 h-6 text-[#c9a84c] mb-6 group-hover:scale-110 transition-transform duration-300" strokeWidth={1.5} />
                <h3 className="font-playfair text-[#e8dcc4] text-xl mb-4">{feature.title}</h3>
                <p className="font-source-serif text-[#6a6050] text-sm leading-relaxed mb-4">
                  {feature.description}
                </p>
                <p className="font-source-serif text-[#c9a84c]/60 text-xs italic leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {feature.detail}
                </p>
              </div>
            </InkReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorksSection() {
  const steps = [
    { num: "I", title: "Upload", desc: "Drop your PDF into Ratio Reader. Any length, any subject, any language." },
    { num: "II", title: "Analysis", desc: "Our engine parses structure, identifies arguments, and maps the intellectual terrain." },
    { num: "III", title: "Distillation", desc: "Key summaries, quotes, and insights are extracted and organized by importance." },
    { num: "IV", title: "Comprehension", desc: "Read with clarity. Every insight is annotated, every connection revealed." },
  ];

  return (
    <section id="how-it-works" className="relative bg-[#0d0b08] py-32">
      <div className="max-w-5xl mx-auto px-6">
        <InkReveal className="text-center mb-20">
          <span className="font-source-serif text-[#c9a84c] text-xs tracking-[0.4em] uppercase">
            The Process
          </span>
          <h2 className="font-playfair text-[#e8dcc4] text-4xl md:text-6xl mt-4">
            From Upload to <span className="italic">Understanding</span>
          </h2>
        </InkReveal>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-[#1a1815]" />

          {steps.map((step, i) => (
            <InkReveal key={step.num} delay={i * 0.2}>
              <div className={`relative flex items-start gap-8 mb-16 last:mb-0 ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}>
                <div className={`flex-1 ${i % 2 === 0 ? "md:text-right" : "md:text-left"} hidden md:block`}>
                  <div className="inline-block">
                    <span className="font-playfair text-[#c9a84c] text-6xl opacity-20">{step.num}</span>
                    <h3 className="font-playfair text-[#e8dcc4] text-2xl mt-2">{step.title}</h3>
                    <p className="font-source-serif text-[#6a6050] text-sm mt-2 max-w-xs inline-block leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>

                {/* Center dot */}
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-[#c9a84c] border-2 border-[#0d0b08] z-10 mt-2" />

                {/* Mobile text */}
                <div className="flex-1 ml-16 md:hidden">
                  <span className="font-playfair text-[#c9a84c] text-3xl opacity-30">{step.num}</span>
                  <h3 className="font-playfair text-[#e8dcc4] text-xl mt-1">{step.title}</h3>
                  <p className="font-source-serif text-[#6a6050] text-sm mt-2 leading-relaxed">{step.desc}</p>
                </div>

                <div className="flex-1 hidden md:block" />
              </div>
            </InkReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function QuoteShowcase() {
  return (
    <section className="relative bg-[#0a0908] py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0d0b08] via-[#0a0908] to-[#0d0b08]" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <InkReveal>
          <div className="relative border border-[#1a1815] p-12 md:p-16">
            {/* Corner ornaments */}
            <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-[#c9a84c] -translate-x-px -translate-y-px" />
            <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-[#c9a84c] translate-x-px -translate-y-px" />
            <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-[#c9a84c] -translate-x-px translate-y-px" />
            <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-[#c9a84c] translate-x-px translate-y-px" />

            <Quote className="w-10 h-10 text-[#c9a84c]/30 mb-6" />
            <blockquote className="font-playfair text-[#e8dcc4] text-2xl md:text-3xl leading-relaxed italic mb-8">
              A reader lives a thousand lives before he dies. The man who never reads lives only one.
              Ratio Reader ensures none of those lives are wasted on misunderstanding.
            </blockquote>
            <div className="flex items-center gap-4">
              <div className="w-12 h-px bg-[#c9a84c]" />
              <span className="font-source-serif text-[#8a8070] text-sm">
                Inspired by George R.R. Martin
              </span>
            </div>
          </div>
        </InkReveal>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  const testimonials = [
    {
      text: "Ratio Reader transformed how I approach academic papers. What took hours now takes minutes, with deeper comprehension.",
      author: "Dr. Elena Voss",
      role: "Research Fellow, Oxford",
    },
    {
      text: "I've tried every summarizer on the market. This is the first one that actually understands nuance and argument structure.",
      author: "Marcus Chen",
      role: "Philosophy Professor",
    },
    {
      text: "The quote extraction alone is worth it. It surfaces passages I would have highlighted myself, and some I would have missed entirely.",
      author: "Sophia Laurent",
      role: "Literary Critic",
    },
  ];

  return (
    <section id="testimonials" className="bg-[#0d0b08] py-32">
      <div className="max-w-7xl mx-auto px-6">
        <InkReveal className="text-center mb-16">
          <span className="font-source-serif text-[#c9a84c] text-xs tracking-[0.4em] uppercase">
            Praise
          </span>
          <h2 className="font-playfair text-[#e8dcc4] text-4xl md:text-5xl mt-4">
            Words From <span className="italic">Readers</span>
          </h2>
        </InkReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
          {testimonials.map((t, i) => (
            <InkReveal key={t.author} delay={i * 0.15}>
              <div className="p-8 border-l border-[#1a1815] first:border-l-0">
                <div className="font-playfair text-[#c9a84c]/20 text-5xl mb-4">&ldquo;</div>
                <p className="font-source-serif text-[#8a8070] text-sm leading-relaxed mb-6 italic">
                  {t.text}
                </p>
                <div>
                  <p className="font-playfair text-[#e8dcc4] text-sm">{t.author}</p>
                  <p className="font-source-serif text-[#5a5040] text-xs mt-1">{t.role}</p>
                </div>
              </div>
            </InkReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="relative bg-[#0a0908] py-32 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#c9a84c]/5 rounded-full blur-[150px]" />
      </div>

      <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
        <InkReveal>
          <Sparkles className="w-8 h-8 text-[#c9a84c] mx-auto mb-8" strokeWidth={1} />
          <h2 className="font-playfair text-[#e8dcc4] text-4xl md:text-6xl mb-6 leading-tight">
            Your Next Read,<br />
            <span className="italic text-[#c9a84c]">Illuminated</span>
          </h2>
          <p className="font-source-serif text-[#8a8070] text-lg mb-12 max-w-xl mx-auto leading-relaxed">
            Upload your first PDF today. No subscription required for your initial reading.
            Discover what you&rsquo;ve been missing.
          </p>
          <button className="group bg-[#c9a84c] text-[#0a0908] px-12 py-5 font-playfair text-lg tracking-wider hover:bg-[#d4b85c] transition-all duration-300 flex items-center gap-3 mx-auto">
            Start Reading Now
            <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
          </button>
        </InkReveal>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[#0a0908] border-t border-[#1a1815] py-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <div className="w-6 h-6 border border-[#c9a84c]/50 flex items-center justify-center">
            <span className="font-playfair text-[#c9a84c]/50 text-xs font-bold">R</span>
          </div>
          <span className="font-source-serif text-[#5a5040] text-sm">
            &copy; 2025 Ratio Reader. All rights reserved.
          </span>
        </div>
        <div className="flex items-center gap-6 font-source-serif text-[#5a5040] text-xs">
          <a href="#" className="hover:text-[#c9a84c] transition-colors">Privacy</a>
          <a href="#" className="hover:text-[#c9a84c] transition-colors">Terms</a>
          <a href="#" className="hover:text-[#c9a84c] transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  );
}

export default function Page1() {
  return (
    <div className="bg-[#0a0908] min-h-screen">
      <GrainOverlay />
      <NavigationBar />
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <QuoteShowcase />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </div>
  );
}
