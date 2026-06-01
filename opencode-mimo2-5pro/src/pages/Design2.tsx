import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  BookOpen,
  Upload,
  Cpu,
  BookMarked,
  FileText,
  Quote,
  Lightbulb,
  Zap,
  ArrowRight,
  Check,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.12 } },
};

export default function Design2() {
  return (
    <div className="d2-root min-h-screen bg-[#faf6f0] text-[#2d2a26] overflow-hidden">
      {/* Paper texture overlay */}
      <div className="d2-paper-texture fixed inset-0 pointer-events-none z-50" />

      {/* Nav */}
      <nav className="sticky top-0 z-40 bg-[#faf6f0]/80 backdrop-blur-md border-b border-[#2d2a26]/5">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 bg-[#2d2a26] rounded-full flex items-center justify-center">
              <BookOpen className="w-4 h-4 text-[#faf6f0]" />
            </div>
            <span className="font-['Newsreader'] text-lg font-medium">
              Ratio Reader
            </span>
          </div>
          <div className="flex items-center gap-8">
            <span className="text-sm text-[#2d2a26]/40 font-['Lora'] italic hidden sm:inline">
              A gentler way to read
            </span>
            <Link
              to="/3"
              className="text-sm text-[#2d2a26]/50 hover:text-[#2d2a26] transition-colors font-['Lora']"
            >
              Next →
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={stagger}
        className="pt-32 pb-20 px-6 max-w-6xl mx-auto"
      >
        <div className="max-w-3xl">
          <motion.div
            variants={fadeUp}
            className="inline-flex items-center gap-2 bg-[#e8dfd3] px-4 py-2 rounded-full mb-8"
          >
            <div className="w-2 h-2 rounded-full bg-[#c47d5a]" />
            <span className="text-xs font-['Lora'] text-[#2d2a26]/70">
              Now with AI-powered insights
            </span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="font-['Newsreader'] text-[clamp(2.8rem,7vw,5.5rem)] leading-[1] font-light mb-8"
          >
            The stories inside
            <br />
            <span className="font-['Lora'] italic font-normal text-[#c47d5a]">
              your documents
            </span>
            <br />
            deserve to be heard
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="font-['Lora'] text-lg text-[#2d2a26]/60 max-w-lg leading-relaxed mb-10"
          >
            Upload a PDF and we'll gently extract its essence — summaries that
            feel human, quotes that resonate, and insights that illuminate.
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-4">
            <button className="group bg-[#2d2a26] text-[#faf6f0] px-7 py-3.5 rounded-full font-['Lora'] text-sm hover:bg-[#2d2a26]/90 transition-colors flex items-center gap-2.5">
              <Upload className="w-4 h-4" />
              Upload PDF
            </button>
            <button className="px-7 py-3.5 rounded-full font-['Lora'] text-sm text-[#2d2a26]/70 hover:text-[#2d2a26] transition-colors flex items-center gap-2 border border-[#2d2a26]/10 hover:border-[#2d2a26]/25">
              See how it works
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </motion.div>
        </div>

        {/* Floating illustration mockup */}
        <motion.div
          variants={fadeUp}
          className="mt-16 relative max-w-2xl"
        >
          <div className="bg-white rounded-2xl shadow-[0_20px_80px_rgba(0,0,0,0.06)] border border-[#2d2a26]/5 p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-3 h-3 rounded-full bg-[#e8c4a0]" />
              <div className="w-3 h-3 rounded-full bg-[#e8d5c0]" />
              <div className="w-3 h-3 rounded-full bg-[#e8e0d5]" />
            </div>
            <div className="space-y-3">
              <div className="h-3 bg-[#2d2a26]/5 rounded-full w-3/4" />
              <div className="h-3 bg-[#2d2a26]/5 rounded-full w-full" />
              <div className="h-3 bg-[#2d2a26]/5 rounded-full w-5/6" />
              <div className="h-8" />
              <div className="flex gap-3">
                <div className="w-1/3 bg-[#c47d5a]/10 rounded-xl p-4">
                  <div className="w-6 h-6 rounded-full bg-[#c47d5a]/20 mb-3" />
                  <div className="h-2 bg-[#c47d5a]/15 rounded-full w-full mb-2" />
                  <div className="h-2 bg-[#c47d5a]/15 rounded-full w-3/4" />
                </div>
                <div className="w-1/3 bg-[#8ba88e]/10 rounded-xl p-4">
                  <div className="w-6 h-6 rounded-full bg-[#8ba88e]/20 mb-3" />
                  <div className="h-2 bg-[#8ba88e]/15 rounded-full w-full mb-2" />
                  <div className="h-2 bg-[#8ba88e]/15 rounded-full w-2/3" />
                </div>
                <div className="w-1/3 bg-[#7a8fb5]/10 rounded-xl p-4">
                  <div className="w-6 h-6 rounded-full bg-[#7a8fb5]/20 mb-3" />
                  <div className="h-2 bg-[#7a8fb5]/15 rounded-full w-full mb-2" />
                  <div className="h-2 bg-[#7a8fb5]/15 rounded-full w-4/5" />
                </div>
              </div>
            </div>
          </div>
          {/* Decorative blob */}
          <div className="d2-blob absolute -top-10 -right-10 w-40 h-40 rounded-full opacity-30" />
        </motion.div>
      </motion.section>

      {/* How It Works - Vertical Timeline */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={stagger}
        className="py-28 px-6 max-w-6xl mx-auto"
      >
        <motion.div variants={fadeUp} className="text-center mb-20">
          <span className="font-['Lora'] italic text-[#c47d5a] text-sm">
            How it works
          </span>
          <h2 className="font-['Newsreader'] text-4xl md:text-5xl font-light mt-3">
            From document to understanding
          </h2>
        </motion.div>

        <div className="relative max-w-xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-[#2d2a26]/8" />

          {[
            {
              icon: Upload,
              title: "Drop your PDF",
              desc: "Any document works — research papers, books, reports, manuals. We handle them all with care.",
              color: "bg-[#c47d5a]/15 text-[#c47d5a]",
            },
            {
              icon: Cpu,
              title: "We read deeply",
              desc: "Our AI doesn't skim. It reads your document like a thoughtful colleague would, understanding context and nuance.",
              color: "bg-[#8ba88e]/15 text-[#8ba88e]",
            },
            {
              icon: BookMarked,
              title: "Receive your brief",
              desc: "A beautifully structured summary with key quotes, reading hints, and insights that make the complex feel approachable.",
              color: "bg-[#7a8fb5]/15 text-[#7a8fb5]",
            },
          ].map((step) => (
            <motion.div
              key={step.title}
              variants={fadeUp}
              className="relative pl-16 pb-14 last:pb-0"
            >
              <div
                className={`absolute left-0 w-12 h-12 rounded-full ${step.color} flex items-center justify-center`}
              >
                <step.icon className="w-5 h-5" />
              </div>
              <h3 className="font-['Newsreader'] text-xl font-medium mb-2">
                {step.title}
              </h3>
              <p className="font-['Lora'] text-[#2d2a26]/55 leading-relaxed text-sm">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Features - Card Grid */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={stagger}
        className="py-28 px-6"
      >
        <div className="max-w-6xl mx-auto">
          <motion.div variants={fadeUp} className="mb-16">
            <span className="font-['Lora'] italic text-[#c47d5a] text-sm">
              Features
            </span>
            <h2 className="font-['Newsreader'] text-4xl md:text-5xl font-light mt-3">
              Everything you need to
              <br />
              <span className="font-['Lora'] italic">truly understand</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                icon: FileText,
                title: "Smart Summaries",
                desc: "Captures arguments, nuance, and the author's true intent.",
                color: "#c47d5a",
              },
              {
                icon: Quote,
                title: "Key Quotes",
                desc: "The passages that matter most, ready for citation.",
                color: "#8ba88e",
              },
              {
                icon: Lightbulb,
                title: "Reading Hints",
                desc: "Know what to look for before you start reading.",
                color: "#7a8fb5",
              },
              {
                icon: Zap,
                title: "Deep Insights",
                desc: "Connections and patterns that enrich understanding.",
                color: "#b58a7a",
              },
            ].map((f) => (
              <motion.div
                key={f.title}
                variants={fadeUp}
                className="bg-white rounded-2xl p-6 border border-[#2d2a26]/5 hover:shadow-[0_10px_40px_rgba(0,0,0,0.04)] transition-shadow duration-500"
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-5"
                  style={{ backgroundColor: `${f.color}15` }}
                >
                  <f.icon className="w-5 h-5" style={{ color: f.color }} />
                </div>
                <h3 className="font-['Newsreader'] text-lg font-medium mb-2">
                  {f.title}
                </h3>
                <p className="font-['Lora'] text-sm text-[#2d2a26]/50 leading-relaxed">
                  {f.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Testimonial */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={stagger}
        className="py-24 px-6"
      >
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            variants={fadeUp}
            className="bg-[#e8dfd3]/40 rounded-3xl p-10 md:p-16"
          >
            <p className="font-['Newsreader'] text-2xl md:text-3xl font-light leading-relaxed text-[#2d2a26]/80 mb-8">
              "It's like having a brilliant friend who reads everything first
              and tells you exactly what you need to know."
            </p>
            <div className="flex items-center justify-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#c47d5a]/20 flex items-center justify-center">
                <span className="font-['Lora'] text-sm font-medium text-[#c47d5a]">
                  JM
                </span>
              </div>
              <div className="text-left">
                <p className="font-['Lora'] text-sm font-medium">
                  James Morales
                </p>
                <p className="font-['Lora'] text-xs text-[#2d2a26]/40">
                  Product Designer at Stripe
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Social Proof */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={stagger}
        className="py-16 px-6"
      >
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-3 gap-8 text-center">
            {[
              { value: "3 min", label: "Average read time" },
              { value: "50K+", label: "Happy readers" },
              { value: "98%", label: "Satisfaction rate" },
            ].map((s) => (
              <motion.div key={s.label} variants={fadeUp}>
                <div className="font-['Newsreader'] text-3xl md:text-4xl font-light text-[#c47d5a]">
                  {s.value}
                </div>
                <p className="font-['Lora'] text-xs text-[#2d2a26]/40 mt-1">
                  {s.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={stagger}
        className="py-32 px-6"
      >
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2
            variants={fadeUp}
            className="font-['Newsreader'] text-4xl md:text-5xl font-light mb-6"
          >
            Ready to read
            <span className="font-['Lora'] italic text-[#c47d5a]"> differently?</span>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="font-['Lora'] text-[#2d2a26]/50 mb-10 max-w-md mx-auto"
          >
            Join thousands of curious minds who've transformed how they consume
            information.
          </motion.p>
          <motion.div variants={fadeUp}>
            <button className="group bg-[#2d2a26] text-[#faf6f0] px-8 py-4 rounded-full font-['Lora'] text-sm hover:bg-[#2d2a26]/90 transition-colors flex items-center gap-2.5 mx-auto">
              <Check className="w-4 h-4" />
              Get Started — It's Free
            </button>
          </motion.div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="py-10 px-6 border-t border-[#2d2a26]/5">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <span className="font-['Newsreader'] text-sm text-[#2d2a26]/30">
            Ratio Reader © 2026
          </span>
          <div className="flex gap-5">
            {[1, 2, 3, 4, 5].map((n) => (
              <Link
                key={n}
                to={`/${n}`}
                className={`text-xs ${n === 2 ? "text-[#c47d5a]" : "text-[#2d2a26]/30 hover:text-[#2d2a26]/60"} transition-colors`}
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
