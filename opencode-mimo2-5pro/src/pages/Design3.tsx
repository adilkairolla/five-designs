import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  Upload,
  Cpu,
  FileText,
  Quote,
  Lightbulb,
  Zap,
  ArrowUpRight,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.08 } },
};

function MarqueeBanner() {
  return (
    <div className="d3-marquee border-y-2 border-[#e8190c] py-2 overflow-hidden">
      <div className="d3-marquee-inner flex gap-8 whitespace-nowrap">
        {Array.from({ length: 12 }).map((_, i) => (
          <span
            key={i}
            className="font-['Space_Mono'] text-xs tracking-widest uppercase text-[#e8190c]"
          >
            Read Smarter ● Upload PDF ● Get Insights ●
          </span>
        ))}
      </div>
    </div>
  );
}

function GlitchText({ children }: { children: React.ReactNode }) {
  return (
    <span className="d3-glitch relative inline-block">
      {children}
    </span>
  );
}

export default function Design3() {
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);
  const [time, setTime] = useState("");

  useEffect(() => {
    const update = () => {
      const now = new Date();
      setTime(
        `${String(now.getHours()).padStart(2, "0")}:${String(now.getMinutes()).padStart(2, "0")}:${String(now.getSeconds()).padStart(2, "0")}`
      );
    };
    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="d3-root min-h-screen bg-[#0c0c0c] text-[#f0efe9] overflow-hidden">
      {/* Nav */}
      <nav className="border-b-2 border-[#f0efe9] sticky top-0 z-50 bg-[#0c0c0c]">
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-[#e8190c] flex items-center justify-center">
              <span className="font-['Space_Mono'] text-xs font-bold text-[#0c0c0c]">
                R
              </span>
            </div>
            <span className="font-['Space_Mono'] text-sm font-bold uppercase tracking-wider">
              Ratio Reader
            </span>
          </div>
          <div className="flex items-center gap-6">
            <span className="font-['Space_Mono'] text-xs text-[#f0efe9]/40 hidden sm:inline">
              {time}
            </span>
            <Link
              to="/4"
              className="font-['Space_Mono'] text-xs uppercase tracking-wider border-2 border-[#f0efe9] px-4 py-2 hover:bg-[#f0efe9] hover:text-[#0c0c0c] transition-all"
            >
              Next →
            </Link>
          </div>
        </div>
      </nav>

      <MarqueeBanner />

      {/* Hero */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={stagger}
        className="min-h-[90vh] flex flex-col justify-center px-6 max-w-7xl mx-auto relative"
      >
        <motion.div variants={fadeUp} className="mb-8">
          <span className="font-['Space_Mono'] text-xs text-[#e8190c] uppercase tracking-widest">
            [tool_v2.0]
          </span>
        </motion.div>

        <motion.h1
          variants={fadeUp}
          className="font-['Space_Mono'] text-[clamp(2.5rem,8vw,7rem)] leading-[0.9] font-bold uppercase"
        >
          <GlitchText>Stop</GlitchText>
          <br />
          <span className="text-[#e8190c]">Reading</span>
          <br />
          <GlitchText>Everything</GlitchText>
        </motion.h1>

        <motion.div
          variants={fadeUp}
          className="mt-10 max-w-md border-l-4 border-[#e8190c] pl-4"
        >
          <p className="font-['DM_Sans'] text-[#f0efe9]/60 leading-relaxed">
            Upload PDF → AI reads it → You get the good stuff. Summaries, quotes,
            insights. No fluff. No filler. Just signal.
          </p>
        </motion.div>

        <motion.div variants={fadeUp} className="mt-10 flex flex-wrap gap-4">
          <button className="group bg-[#e8190c] text-[#0c0c0c] px-8 py-4 font-['Space_Mono'] text-sm font-bold uppercase tracking-wider hover:bg-[#f0efe9] transition-colors flex items-center gap-3">
            <Upload className="w-4 h-4" />
            Drop File Here
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
          <button className="border-2 border-[#f0efe9]/20 px-8 py-4 font-['Space_Mono'] text-sm uppercase tracking-wider hover:border-[#f0efe9] transition-colors">
            See Demo ↓
          </button>
        </motion.div>

        {/* Grid decoration */}
        <div className="absolute top-0 right-0 w-[300px] h-[300px] opacity-[0.03] hidden lg:block">
          <div className="d3-grid-pattern w-full h-full" />
        </div>
      </motion.section>

      {/* Process - Brutalist blocks */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={stagger}
        className="py-24 px-6 max-w-7xl mx-auto"
      >
        <motion.div variants={fadeUp} className="mb-16">
          <span className="font-['Space_Mono'] text-xs text-[#e8190c] uppercase tracking-widest">
            [process]
          </span>
          <h2 className="font-['Space_Mono'] text-3xl md:text-4xl font-bold uppercase mt-3">
            How It Works
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-0">
          {[
            {
              num: "01",
              icon: Upload,
              title: "Upload",
              desc: "Drag. Drop. Done. Any PDF. Any size. We don't judge.",
            },
            {
              num: "02",
              icon: Cpu,
              title: "Process",
              desc: "AI tears through your doc at machine speed. Extracting signal from noise.",
            },
            {
              num: "03",
              icon: FileText,
              title: "Output",
              desc: "Clean summary. Key quotes. Hidden insights. Ready to consume.",
            },
          ].map((step, i) => (
            <motion.div
              key={step.num}
              variants={fadeUp}
              className={`p-8 border-2 border-[#f0efe9]/10 ${i === 1 ? "bg-[#e8190c] text-[#0c0c0c]" : ""} hover:bg-[#f0efe9] hover:text-[#0c0c0c] transition-all duration-300 group cursor-pointer`}
            >
              <div className="font-['Space_Mono'] text-5xl font-bold opacity-20 mb-6 group-hover:opacity-40 transition-opacity">
                {step.num}
              </div>
              <step.icon className="w-6 h-6 mb-4" />
              <h3 className="font-['Space_Mono'] text-lg font-bold uppercase mb-3">
                {step.title}
              </h3>
              <p className="font-['DM_Sans'] text-sm opacity-70 leading-relaxed">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Features - Hover reveal */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={stagger}
        className="py-24 px-6 max-w-7xl mx-auto"
      >
        <motion.div variants={fadeUp} className="mb-16">
          <span className="font-['Space_Mono'] text-xs text-[#e8190c] uppercase tracking-widest">
            [features]
          </span>
          <h2 className="font-['Space_Mono'] text-3xl md:text-4xl font-bold uppercase mt-3">
            What You Get
          </h2>
        </motion.div>

        <div className="border-t-2 border-[#f0efe9]/10">
          {[
            {
              icon: FileText,
              title: "Intelligent Summaries",
              desc: "Not just word extraction. Real understanding of arguments, evidence, and conclusions.",
              tag: "CORE",
            },
            {
              icon: Quote,
              title: "Contextual Quotes",
              desc: "The exact sentences that carry the most weight. Perfect for citations.",
              tag: "EXTRACT",
            },
            {
              icon: Lightbulb,
              title: "Reading Hints",
              desc: "Pre-load your brain with what to watch for. Read with purpose, not confusion.",
              tag: "PREP",
            },
            {
              icon: Zap,
              title: "Deep Insights",
              desc: "Cross-references, patterns, and connections that took the AI milliseconds to find.",
              tag: "PRO",
            },
          ].map((f, i) => (
            <motion.div
              key={f.title}
              variants={fadeUp}
              onMouseEnter={() => setHoveredFeature(i)}
              onMouseLeave={() => setHoveredFeature(null)}
              className="group py-6 border-b-2 border-[#f0efe9]/10 flex items-start gap-6 cursor-pointer hover:pl-4 transition-all duration-300"
            >
              <div className="font-['Space_Mono'] text-xs text-[#e8190c] w-16 shrink-0 pt-1">
                {f.tag}
              </div>
              <f.icon
                className={`w-5 h-5 shrink-0 mt-0.5 transition-colors duration-300 ${hoveredFeature === i ? "text-[#e8190c]" : "text-[#f0efe9]/30"}`}
              />
              <div className="flex-1">
                <h3 className="font-['Space_Mono'] text-base font-bold uppercase mb-1">
                  {f.title}
                </h3>
                <p className="font-['DM_Sans'] text-sm text-[#f0efe9]/50 leading-relaxed max-w-lg">
                  {f.desc}
                </p>
              </div>
              <ArrowUpRight
                className={`w-5 h-5 shrink-0 transition-all duration-300 ${hoveredFeature === i ? "opacity-100 translate-x-0 -translate-y-0.5" : "opacity-0 translate-x-2"}`}
              />
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Big number section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={stagger}
        className="py-24 px-6"
      >
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-0">
          {[
            { value: "3min", label: "AVG. PROCESS TIME" },
            { value: "94%", label: "COMPREHENSION RATE" },
            { value: "50K+", label: "DOCS PROCESSED" },
          ].map((s) => (
            <motion.div
              key={s.label}
              variants={fadeUp}
              className="p-8 border-2 border-[#f0efe9]/10 text-center hover:bg-[#e8190c] hover:text-[#0c0c0c] transition-all duration-300 group cursor-default"
            >
              <div className="font-['Space_Mono'] text-5xl md:text-6xl font-bold mb-3">
                {s.value}
              </div>
              <p className="font-['Space_Mono'] text-xs tracking-widest opacity-50 group-hover:opacity-80">
                {s.label}
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
        className="py-32 px-6"
      >
        <div className="max-w-7xl mx-auto text-center">
          <motion.h2
            variants={fadeUp}
            className="font-['Space_Mono'] text-4xl md:text-6xl font-bold uppercase mb-8"
          >
            <span className="text-[#e8190c]">Start</span> Reading
            <br />
            Smarter <span className="text-[#e8190c]">Now</span>
          </motion.h2>
          <motion.div variants={fadeUp}>
            <button className="group bg-[#e8190c] text-[#0c0c0c] px-10 py-5 font-['Space_Mono'] text-sm font-bold uppercase tracking-wider hover:bg-[#f0efe9] transition-colors inline-flex items-center gap-3">
              <Upload className="w-5 h-5" />
              Upload Your PDF
              <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </motion.div>
        </div>
      </motion.section>

      <MarqueeBanner />

      {/* Footer */}
      <footer className="py-8 px-6 border-t-2 border-[#f0efe9]/10">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <span className="font-['Space_Mono'] text-xs text-[#f0efe9]/30 uppercase">
            Ratio Reader © 2026
          </span>
          <div className="flex gap-4">
            {[1, 2, 3, 4, 5].map((n) => (
              <Link
                key={n}
                to={`/${n}`}
                className={`font-['Space_Mono'] text-xs ${n === 3 ? "text-[#e8190c]" : "text-[#f0efe9]/30 hover:text-[#f0efe9]"} transition-colors`}
              >
                [{n}]
              </Link>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
