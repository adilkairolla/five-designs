import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  BookOpen,
  Sparkles,
  ArrowRight,
  Quote,
  FileText,
  Lightbulb,
  Zap,
  ChevronRight,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.15 } },
};

export default function Design1() {
  return (
    <div className="d1-root min-h-screen bg-[#0a0a0a] text-[#f5f0e8] overflow-hidden">
      {/* Nav */}
      <nav className="fixed top-0 w-full z-50 d1-nav">
        <div className="max-w-7xl mx-auto px-8 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-[#f5f0e8] rounded-sm flex items-center justify-center">
              <BookOpen className="w-4 h-4 text-[#0a0a0a]" />
            </div>
            <span className="font-['Playfair_Display'] text-lg font-semibold tracking-tight">
              Ratio Reader
            </span>
          </div>
          <div className="flex items-center gap-6">
            <span className="text-sm text-[#f5f0e8]/50 font-['Source_Serif_4']">Vol. I</span>
            <Link
              to="/2"
              className="text-sm text-[#f5f0e8]/40 hover:text-[#f5f0e8] transition-colors"
            >
              Next Design →
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={stagger}
        className="min-h-screen flex flex-col justify-center px-8 max-w-7xl mx-auto relative"
      >
        {/* Decorative lines */}
        <div className="absolute top-1/4 right-0 w-[40vw] h-px bg-gradient-to-r from-transparent via-[#f5f0e8]/10 to-transparent" />
        <div className="absolute top-2/3 right-0 w-[25vw] h-px bg-gradient-to-r from-transparent via-[#f5f0e8]/5 to-transparent" />

        <motion.div variants={fadeUp} className="mb-6">
          <span className="text-xs tracking-[0.4em] uppercase text-[#f5f0e8]/40 font-['Source_Serif_4']">
            Introducing
          </span>
        </motion.div>

        <motion.h1
          variants={fadeUp}
          className="font-['Playfair_Display'] text-[clamp(3.5rem,10vw,9rem)] leading-[0.85] font-bold tracking-tight mb-8"
        >
          Read
          <br />
          <span className="italic font-normal text-[#f5f0e8]/70">Smarter,</span>
          <br />
          Not Harder
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="font-['Source_Serif_4'] text-lg md:text-xl text-[#f5f0e8]/60 max-w-xl leading-relaxed mb-12"
        >
          Drop any PDF. Get the essence — distilled into summaries, key quotes,
          and insights that make complex ideas feel effortless.
        </motion.p>

        <motion.div variants={fadeUp} className="flex items-center gap-6">
          <button className="group bg-[#f5f0e8] text-[#0a0a0a] px-8 py-4 font-['Source_Serif_4'] text-sm tracking-wide hover:bg-[#e8e0d0] transition-colors flex items-center gap-3">
            Start Reading
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
          <span className="text-[#f5f0e8]/30 text-xs font-['Source_Serif_4']">
            No account required
          </span>
        </motion.div>

        {/* Issue number */}
        <motion.div
          variants={fadeUp}
          className="absolute bottom-12 right-8 text-right hidden lg:block"
        >
          <div className="font-['Playfair_Display'] text-7xl font-bold text-[#f5f0e8]/5">
            01
          </div>
        </motion.div>
      </motion.section>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-8">
        <div className="h-px bg-[#f5f0e8]/10" />
      </div>

      {/* How It Works */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={stagger}
        className="py-32 px-8 max-w-7xl mx-auto"
      >
        <motion.div variants={fadeUp} className="mb-20">
          <span className="text-xs tracking-[0.4em] uppercase text-[#f5f0e8]/30 font-['Source_Serif_4']">
            The Process
          </span>
          <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl font-bold mt-4">
            Three Acts
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-16">
          {[
            {
              num: "I",
              title: "Upload",
              desc: "Drag your PDF onto the stage. Any document, any length, any complexity.",
              icon: FileText,
            },
            {
              num: "II",
              title: "Distill",
              desc: "Our AI reads between the lines — extracting meaning, not just words.",
              icon: Sparkles,
            },
            {
              num: "III",
              title: "Absorb",
              desc: "Receive a structured brief: summaries, quotes, and aha-moments.",
              icon: Lightbulb,
            },
          ].map((step) => (
            <motion.div key={step.num} variants={fadeUp} className="group">
              <div className="font-['Playfair_Display'] text-6xl font-bold text-[#f5f0e8]/5 mb-6">
                {step.num}
              </div>
              <div className="w-10 h-10 border border-[#f5f0e8]/20 flex items-center justify-center mb-6 group-hover:bg-[#f5f0e8] group-hover:text-[#0a0a0a] transition-all duration-500">
                <step.icon className="w-4 h-4" />
              </div>
              <h3 className="font-['Playfair_Display'] text-2xl font-semibold mb-3">
                {step.title}
              </h3>
              <p className="font-['Source_Serif_4'] text-[#f5f0e8]/50 leading-relaxed">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Pull Quote */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={stagger}
        className="py-24 px-8"
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.div variants={fadeUp}>
            <Quote className="w-8 h-8 text-[#f5f0e8]/10 mx-auto mb-8" />
          </motion.div>
          <motion.blockquote
            variants={fadeUp}
            className="font-['Playfair_Display'] text-3xl md:text-4xl italic text-[#f5f0e8]/80 leading-relaxed mb-8"
          >
            "I used to spend hours parsing research papers. Now I get the core
            ideas in minutes. It changed how I learn."
          </motion.blockquote>
          <motion.div variants={fadeUp}>
            <p className="font-['Source_Serif_4'] text-[#f5f0e8]/40 text-sm">
              — Sarah Chen, PhD Candidate at MIT
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Features */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={stagger}
        className="py-32 px-8 max-w-7xl mx-auto"
      >
        <motion.div variants={fadeUp} className="mb-20">
          <span className="text-xs tracking-[0.4em] uppercase text-[#f5f0e8]/30 font-['Source_Serif_4']">
            Capabilities
          </span>
          <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl font-bold mt-4">
            Beyond Summarization
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-x-20 gap-y-16">
          {[
            {
              title: "Intelligent Summaries",
              desc: "Not just extraction — true understanding. Get summaries that capture arguments, nuance, and intent.",
              icon: FileText,
            },
            {
              title: "Contextual Quotes",
              desc: "The sentences that matter most, pulled from the noise. Perfect for citations and deep dives.",
              icon: Quote,
            },
            {
              title: "Reading Hints",
              desc: "Before you dive in, know what to look for. Our hints prime your mind for deeper comprehension.",
              icon: Lightbulb,
            },
            {
              title: "Instant Insights",
              desc: "Connections and patterns you might miss on your own. See the forest, not just the trees.",
              icon: Zap,
            },
          ].map((feature) => (
            <motion.div
              key={feature.title}
              variants={fadeUp}
              className="group border-t border-[#f5f0e8]/10 pt-6"
            >
              <feature.icon className="w-5 h-5 text-[#f5f0e8]/30 mb-4 group-hover:text-[#f5f0e8] transition-colors duration-500" />
              <h3 className="font-['Playfair_Display'] text-xl font-semibold mb-3">
                {feature.title}
              </h3>
              <p className="font-['Source_Serif_4'] text-[#f5f0e8]/50 leading-relaxed">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Stats */}
      <div className="max-w-7xl mx-auto px-8">
        <div className="h-px bg-[#f5f0e8]/10" />
      </div>
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={stagger}
        className="py-24 px-8 max-w-7xl mx-auto"
      >
        <div className="grid md:grid-cols-3 gap-12 text-center">
          {[
            { value: "3min", label: "Average summary time" },
            { value: "94%", label: "Comprehension retention" },
            { value: "50K+", label: "Documents processed" },
          ].map((stat) => (
            <motion.div key={stat.label} variants={fadeUp}>
              <div className="font-['Playfair_Display'] text-5xl font-bold mb-2">
                {stat.value}
              </div>
              <p className="font-['Source_Serif_4'] text-[#f5f0e8]/40 text-sm">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* CTA */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={stagger}
        className="py-32 px-8 text-center"
      >
        <motion.div variants={fadeUp}>
          <span className="text-xs tracking-[0.4em] uppercase text-[#f5f0e8]/30 font-['Source_Serif_4']">
            Begin
          </span>
        </motion.div>
        <motion.h2
          variants={fadeUp}
          className="font-['Playfair_Display'] text-5xl md:text-7xl font-bold mt-6 mb-10"
        >
          Your Next Chapter
          <br />
          <span className="italic font-normal text-[#f5f0e8]/60">Starts Here</span>
        </motion.h2>
        <motion.div variants={fadeUp}>
          <button className="group bg-[#f5f0e8] text-[#0a0a0a] px-10 py-5 font-['Source_Serif_4'] tracking-wide hover:bg-[#e8e0d0] transition-colors flex items-center gap-3 mx-auto">
            Upload Your First PDF
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </motion.section>

      {/* Footer */}
      <footer className="py-12 px-8 border-t border-[#f5f0e8]/5">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <span className="font-['Playfair_Display'] text-sm text-[#f5f0e8]/30">
            Ratio Reader © 2026
          </span>
          <div className="flex gap-6">
            {[1, 2, 3, 4, 5].map((n) => (
              <Link
                key={n}
                to={`/${n}`}
                className={`text-xs ${n === 1 ? "text-[#f5f0e8]" : "text-[#f5f0e8]/30 hover:text-[#f5f0e8]/60"} transition-colors`}
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
