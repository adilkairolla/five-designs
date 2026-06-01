import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { useRef } from "react";
import {
  BookOpen,
  FileText,
  Quote,
  Lightbulb,
  Zap,
  ArrowRight,
  Star,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.12 } },
};

function GoldenLine() {
  return (
    <div className="flex items-center gap-4 my-16 max-w-4xl mx-auto px-8">
      <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#c9a84c]/30 to-transparent" />
      <svg width="12" height="12" viewBox="0 0 12 12" className="text-[#c9a84c]/50">
        <path d="M6 0L7.5 4.5L12 6L7.5 7.5L6 12L4.5 7.5L0 6L4.5 4.5Z" fill="currentColor" />
      </svg>
      <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#c9a84c]/30 to-transparent" />
    </div>
  );
}

export default function Design4() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);

  return (
    <div className="d4-root min-h-screen bg-[#0b1121] text-[#e8e2d4] overflow-hidden">
      {/* Subtle radial glow */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[radial-gradient(ellipse,rgba(201,168,76,0.06),transparent_70%)]" />
      </div>

      {/* Nav */}
      <nav className="fixed top-0 w-full z-50 d4-nav">
        <div className="max-w-6xl mx-auto px-8 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 border border-[#c9a84c]/40 flex items-center justify-center rotate-45">
              <BookOpen className="w-3.5 h-3.5 text-[#c9a84c] -rotate-45" />
            </div>
            <span className="font-['Cormorant_Garamond'] text-xl font-medium tracking-wide">
              Ratio Reader
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <span className="text-xs text-[#e8e2d4]/30 tracking-[0.3em] uppercase font-['Outfit']">
              Features
            </span>
            <span className="text-xs text-[#e8e2d4]/30 tracking-[0.3em] uppercase font-['Outfit']">
              Process
            </span>
            <span className="text-xs text-[#e8e2d4]/30 tracking-[0.3em] uppercase font-['Outfit']">
              Testimonials
            </span>
          </div>
          <Link
            to="/5"
            className="text-xs text-[#e8e2d4]/40 hover:text-[#c9a84c] transition-colors font-['Outfit'] tracking-widest uppercase"
          >
            Next →
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <motion.section
        ref={heroRef}
        style={{ opacity: heroOpacity, scale: heroScale }}
        initial="hidden"
        animate="visible"
        variants={stagger}
        className="min-h-screen flex flex-col items-center justify-center text-center px-8 relative"
      >
        {/* Decorative ratio lines */}
        <svg
          className="absolute inset-0 w-full h-full opacity-[0.03] hidden lg:block"
          viewBox="0 0 1200 800"
          preserveAspectRatio="xMidYMid slice"
        >
          <line x1="0" y1="300" x2="1200" y2="300" stroke="#c9a84c" strokeWidth="0.5" />
          <line x1="0" y1="500" x2="1200" y2="500" stroke="#c9a84c" strokeWidth="0.5" />
          <line x1="400" y1="0" x2="400" y2="800" stroke="#c9a84c" strokeWidth="0.5" />
          <line x1="800" y1="0" x2="800" y2="800" stroke="#c9a84c" strokeWidth="0.5" />
          <circle cx="600" cy="400" r="200" fill="none" stroke="#c9a84c" strokeWidth="0.3" />
          <circle cx="600" cy="400" r="120" fill="none" stroke="#c9a84c" strokeWidth="0.3" />
        </svg>

        <motion.div variants={fadeUp} className="mb-8">
          <div className="inline-flex items-center gap-3 border border-[#c9a84c]/20 px-5 py-2.5">
            <Star className="w-3 h-3 text-[#c9a84c]" />
            <span className="text-xs tracking-[0.3em] uppercase text-[#c9a84c]/80 font-['Outfit']">
              Precision Reading Tool
            </span>
            <Star className="w-3 h-3 text-[#c9a84c]" />
          </div>
        </motion.div>

        <motion.h1
          variants={fadeUp}
          className="font-['Cormorant_Garamond'] text-[clamp(3rem,9vw,8rem)] leading-[0.85] font-light mb-8"
        >
          The{" "}
          <span className="italic text-[#c9a84c]">Golden Ratio</span>
          <br />
          of Reading
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="font-['Outfit'] text-[#e8e2d4]/50 max-w-lg leading-relaxed mb-12 text-base"
        >
          Upload any document and receive a perfectly balanced distillation —
          summaries, quotes, and insights in ideal proportion.
        </motion.p>

        <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-5 justify-center">
          <button className="group bg-[#c9a84c] text-[#0b1121] px-8 py-4 font-['Outfit'] text-sm tracking-widest uppercase hover:bg-[#d4b35a] transition-colors flex items-center gap-3">
            Begin
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="border border-[#e8e2d4]/15 px-8 py-4 font-['Outfit'] text-sm tracking-widest uppercase text-[#e8e2d4]/60 hover:border-[#c9a84c]/40 hover:text-[#c9a84c] transition-all">
            Learn More
          </button>
        </motion.div>
      </motion.section>

      <GoldenLine />

      {/* How It Works */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={stagger}
        className="py-24 px-8 max-w-6xl mx-auto"
      >
        <motion.div variants={fadeUp} className="text-center mb-20">
          <span className="font-['Outfit'] text-xs tracking-[0.4em] uppercase text-[#c9a84c]/60">
            The Process
          </span>
          <h2 className="font-['Cormorant_Garamond'] text-4xl md:text-5xl font-light mt-4">
            Effortless <span className="italic text-[#c9a84c]">Elegance</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-12">
          {[
            {
              num: "I",
              title: "Present",
              desc: "Offer your document. We accept any format, any length, any language.",
              icon: FileText,
            },
            {
              num: "II",
              title: "Refine",
              desc: "Our algorithms extract meaning with surgical precision — no detail too small, no insight too subtle.",
              icon: Zap,
            },
            {
              num: "III",
              title: "Reveal",
              desc: "Receive a curated collection of knowledge — beautifully structured, immediately useful.",
              icon: Star,
            },
          ].map((step) => (
            <motion.div
              key={step.num}
              variants={fadeUp}
              className="text-center group"
            >
              <div className="font-['Cormorant_Garamond'] text-6xl font-light text-[#c9a84c]/15 mb-6">
                {step.num}
              </div>
              <div className="w-14 h-14 border border-[#c9a84c]/20 flex items-center justify-center mx-auto mb-6 group-hover:bg-[#c9a84c]/10 transition-all duration-500 rotate-45">
                <step.icon className="w-5 h-5 text-[#c9a84c] -rotate-45" />
              </div>
              <h3 className="font-['Cormorant_Garamond'] text-2xl font-medium mb-3">
                {step.title}
              </h3>
              <p className="font-['Outfit'] text-sm text-[#e8e2d4]/45 leading-relaxed max-w-xs mx-auto">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <GoldenLine />

      {/* Features */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={stagger}
        className="py-24 px-8 max-w-6xl mx-auto"
      >
        <motion.div variants={fadeUp} className="text-center mb-20">
          <span className="font-['Outfit'] text-xs tracking-[0.4em] uppercase text-[#c9a84c]/60">
            Capabilities
          </span>
          <h2 className="font-['Cormorant_Garamond'] text-4xl md:text-5xl font-light mt-4">
            Refined <span className="italic text-[#c9a84c]">Instruments</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              icon: FileText,
              title: "Executive Summaries",
              desc: "Distilled overviews that capture the heart of any document with crystalline clarity.",
            },
            {
              icon: Quote,
              title: "Curated Citations",
              desc: "The most significant passages, extracted and formatted for immediate use.",
            },
            {
              icon: Lightbulb,
              title: "Strategic Hints",
              desc: "Guidance that primes your understanding before you engage with the full text.",
            },
            {
              icon: Zap,
              title: "Analytical Insights",
              desc: "Patterns, connections, and implications that elevate comprehension beyond the surface.",
            },
          ].map((f) => (
            <motion.div
              key={f.title}
              variants={fadeUp}
              className="group p-8 border border-[#c9a84c]/10 hover:border-[#c9a84c]/30 transition-all duration-500 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[radial-gradient(circle,rgba(201,168,76,0.05),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="w-10 h-10 border border-[#c9a84c]/20 flex items-center justify-center mb-6 rotate-45 group-hover:border-[#c9a84c]/40 transition-colors duration-500">
                <f.icon className="w-4 h-4 text-[#c9a84c] -rotate-45" />
              </div>
              <h3 className="font-['Cormorant_Garamond'] text-xl font-medium mb-3">
                {f.title}
              </h3>
              <p className="font-['Outfit'] text-sm text-[#e8e2d4]/45 leading-relaxed">
                {f.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <GoldenLine />

      {/* Testimonial */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={stagger}
        className="py-28 px-8"
      >
        <div className="max-w-3xl mx-auto text-center">
          <motion.div variants={fadeUp} className="mb-8">
            {[1, 2, 3, 4, 5].map((i) => (
              <Star
                key={i}
                className="w-4 h-4 text-[#c9a84c] inline-block mx-0.5"
                fill="currentColor"
              />
            ))}
          </motion.div>
          <motion.blockquote
            variants={fadeUp}
            className="font-['Cormorant_Garamond'] text-3xl md:text-4xl font-light italic leading-relaxed text-[#e8e2d4]/80 mb-10"
          >
            "Ratio Reader transformed my research workflow. What used to take
            an entire afternoon now takes minutes — with better comprehension."
          </motion.blockquote>
          <motion.div variants={fadeUp}>
            <p className="font-['Outfit'] text-[#c9a84c]/70 text-sm tracking-wider">
              Dr. Elena Vasquez
            </p>
            <p className="font-['Outfit'] text-[#e8e2d4]/30 text-xs mt-1">
              Senior Researcher, Oxford University
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Stats */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={stagger}
        className="py-20 px-8 max-w-5xl mx-auto"
      >
        <div className="grid md:grid-cols-3 gap-12 text-center">
          {[
            { value: "3min", label: "Average processing" },
            { value: "94%", label: "Retention rate" },
            { value: "50K+", label: "Documents refined" },
          ].map((s) => (
            <motion.div key={s.label} variants={fadeUp}>
              <div className="font-['Cormorant_Garamond'] text-5xl font-light text-[#c9a84c]">
                {s.value}
              </div>
              <p className="font-['Outfit'] text-xs text-[#e8e2d4]/30 mt-2 tracking-widest uppercase">
                {s.label}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <GoldenLine />

      {/* CTA */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={stagger}
        className="py-32 px-8 text-center"
      >
        <motion.h2
          variants={fadeUp}
          className="font-['Cormorant_Garamond'] text-5xl md:text-6xl font-light mb-6"
        >
          Elevate Your <span className="italic text-[#c9a84c]">Reading</span>
        </motion.h2>
        <motion.p
          variants={fadeUp}
          className="font-['Outfit'] text-[#e8e2d4]/40 mb-12 max-w-md mx-auto"
        >
          Join discerning readers who demand more from their documents.
        </motion.p>
        <motion.div variants={fadeUp}>
          <button className="group bg-[#c9a84c] text-[#0b1121] px-10 py-5 font-['Outfit'] text-sm tracking-widest uppercase hover:bg-[#d4b35a] transition-colors inline-flex items-center gap-3">
            Experience Ratio Reader
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </motion.section>

      {/* Footer */}
      <footer className="py-12 px-8 border-t border-[#c9a84c]/10">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <span className="font-['Cormorant_Garamond'] text-sm text-[#e8e2d4]/20">
            Ratio Reader © MMXXVI
          </span>
          <div className="flex gap-6">
            {[1, 2, 3, 4, 5].map((n) => (
              <Link
                key={n}
                to={`/${n}`}
                className={`font-['Outfit'] text-xs tracking-wider ${n === 4 ? "text-[#c9a84c]" : "text-[#e8e2d4]/20 hover:text-[#e8e2d4]/50"} transition-colors`}
              >
                {n}
              </Link>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
