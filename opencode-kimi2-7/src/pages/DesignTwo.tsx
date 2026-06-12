import { useState } from "react";
import { motion } from "framer-motion";
import {
  FileText,
  Upload,
  Quote,
  Binary,
  Zap,
  ArrowRight,
  Menu,
  X,
  Hash,
  Terminal,
} from "lucide-react";

const features = [
  { id: "SUM", label: "SUMMARY", desc: "THE WHOLE THING, SHORTENED." },
  { id: "QTE", label: "QUOTES", desc: "THE LINES WORTH REMEMBERING." },
  { id: "HNT", label: "HINTS", desc: "CONTEXT WITHOUT THE FLUFF." },
  { id: "INS", label: "INSIGHTS", desc: "PATTERNS THE AUTHOR HID." },
];

export function DesignTwo() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-black font-(--font-brutalist-body) selection:bg-[#00FF41] selection:text-black overflow-x-hidden">
      {/* Grid overlay */}
      <div
        className="fixed inset-0 pointer-events-none z-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Header */}
      <header className="relative z-10 border-b-4 border-black">
        <div className="max-w-[1600px] mx-auto px-4 md:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-black text-[#00FF41] flex items-center justify-center border-2 border-black">
              <FileText className="w-6 h-6" />
            </div>
            <span className="text-2xl md:text-4xl font-black font-(--font-brutalist-display) tracking-tighter uppercase">
              RATIO
            </span>
          </div>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="w-12 h-12 border-2 border-black flex items-center justify-center hover:bg-[#00FF41] transition-colors"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Marquee */}
        <div className="border-t-2 border-black bg-[#00FF41] text-black py-2 overflow-hidden whitespace-nowrap">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
            className="inline-flex gap-8 font-bold uppercase tracking-widest"
          >
            {Array.from({ length: 8 }).map((_, i) => (
              <span key={i} className="flex items-center gap-3">
                <Zap className="w-4 h-4" /> READ LESS / UNDERSTAND MORE / UPLOAD PDF
              </span>
            ))}
          </motion.div>
        </div>
      </header>

      {/* Mobile menu */}
      {menuOpen && (
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: "auto" }}
          className="relative z-20 border-b-4 border-black bg-black text-white"
        >
          <nav className="max-w-[1600px] mx-auto px-4 md:px-8 py-8 flex flex-col gap-4 text-2xl font-bold uppercase">
            <a href="#" className="hover:text-[#00FF41]">Features</a>
            <a href="#" className="hover:text-[#00FF41]">Upload</a>
            <a href="#" className="hover:text-[#00FF41]">Pricing</a>
          </nav>
        </motion.div>
      )}

      {/* Hero */}
      <section className="relative z-10 px-4 md:px-8 pt-16 md:pt-24 pb-12 border-b-4 border-black">
        <div className="max-w-[1600px] mx-auto grid lg:grid-cols-12 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-8"
          >
            <h1 className="text-[12vw] lg:text-[9vw] font-black font-(--font-brutalist-display) leading-[0.85] uppercase tracking-tighter">
              DON'T
              <br />
              READ THE
              <br />
              <span className="text-[#00FF41]" style={{ WebkitTextStroke: "3px black" }}>
                WHOLE THING
              </span>
            </h1>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-4 flex flex-col justify-end"
          >
            <div className="border-4 border-black p-6 bg-black text-white">
              <p className="text-lg md:text-xl leading-snug mb-6 uppercase">
                Ratio Reader compresses PDFs into brutal summaries, loud quotes, and useful hints.
              </p>
              <button className="w-full py-4 bg-[#00FF41] text-black font-black uppercase tracking-widest hover:bg-white border-2 border-[#00FF41] transition-colors flex items-center justify-center gap-3">
                <Upload className="w-5 h-5" /> Upload PDF
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats / Data strip */}
      <section className="relative z-10 border-b-4 border-black">
        <div className="max-w-[1600px] mx-auto grid grid-cols-2 md:grid-cols-4">
          {[
            { value: "80%", label: "LESS TIME READING" },
            { value: "∞", label: "PDFS ACCEPTED" },
            { value: "4", label: "OUTPUT LAYERS" },
            { value: "0", label: "BULLSHIT ALLOWED" },
          ].map((stat, i) => (
            <div
              key={stat.label}
              className={`p-6 md:p-8 ${i < 3 ? "border-r-2 md:border-r-4" : ""} ${i < 2 ? "border-b-4 md:border-b-0" : ""} md:border-b-0 border-black hover:bg-[#00FF41] transition-colors`}
            >
              <div className="text-5xl md:text-7xl font-black font-(--font-brutalist-display)">{stat.value}</div>
              <div className="text-sm font-bold uppercase tracking-widest mt-2">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="relative z-10 px-4 md:px-8 py-16 md:py-24">
        <div className="max-w-[1600px] mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 border-b-4 border-black pb-6">
            <h2 className="text-4xl md:text-6xl font-black font-(--font-brutalist-display) uppercase">
              WHAT IT DOES
            </h2>
            <span className="text-sm font-bold uppercase tracking-widest text-black/60">
              [FOUR CORE FUNCTIONS]
            </span>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {features.map((feature, i) => (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group border-4 border-black p-6 md:p-8 hover:bg-black hover:text-white transition-colors"
              >
                <div className="flex items-start justify-between mb-6">
                  <span className="text-5xl font-black font-(--font-brutalist-display)">{feature.id}</span>
                  <Hash className="w-6 h-6 text-[#00FF41] group-hover:text-black" />
                </div>
                <h3 className="text-2xl md:text-3xl font-black uppercase mb-3">{feature.label}</h3>
                <p className="text-lg opacity-80 font-medium">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works — terminal style */}
      <section className="relative z-10 px-4 md:px-8 py-16 md:py-24 bg-black text-white border-y-4 border-black">
        <div className="max-w-[1600px] mx-auto grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-4xl md:text-6xl font-black font-(--font-brutalist-display) uppercase mb-8">
              HOW IT WORKS
            </h2>
            <div className="space-y-6">
              {[
                { cmd: "ratio --upload document.pdf", out: "FILE RECEIVED. PARSING..." },
                { cmd: "ratio --analyze --depth=core", out: "STRUCTURE EXTRACTED. ARGUMENTS MAPPED." },
                { cmd: "ratio --output summary,quotes,hints", out: "READY FOR HUMAN CONSUMPTION." },
              ].map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="border-2 border-white/20 p-4 hover:border-[#00FF41] transition-colors"
                >
                  <div className="flex items-center gap-2 text-[#00FF41] mb-2 font-bold">
                    <Terminal className="w-4 h-4" />
                    <span className="uppercase text-sm tracking-widest">Step 0{i + 1}</span>
                  </div>
                  <code className="block text-lg md:text-xl mb-2">$ {step.cmd}</code>
                  <p className="text-white/60 uppercase text-sm tracking-wide">{step.out}</p>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="border-4 border-[#00FF41] p-4 md:p-6 bg-[#0a0a0a]">
            <div className="flex items-center gap-2 mb-4 border-b border-white/10 pb-2">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-[#00FF41]" />
              <span className="ml-4 text-xs uppercase tracking-widest text-white/50">ratio_reader.exe</span>
            </div>
            <div className="font-(--font-terminal-body) text-[#00FF41] text-sm md:text-base space-y-2">
              <p>{`> initializing parse_engine... OK`}</p>
              <p>{`> extracting thesis statements... 4 FOUND`}</p>
              <p>{`> indexing key quotes... 12 MARKED`}</p>
              <p>{`> generating hints... DONE`}</p>
              <p className="text-white">{`> summary ready. reading_time_estimate: 3m 12s`}</p>
              <p className="animate-pulse">{`> _`}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quote block */}
      <section className="relative z-10 px-4 md:px-8 py-24">
        <div className="max-w-[1600px] mx-auto">
          <div className="border-4 border-black p-8 md:p-16 relative">
            <Quote className="absolute top-6 left-6 w-12 h-12 text-[#00FF41]" />
            <blockquote className="text-3xl md:text-5xl font-black font-(--font-brutalist-display) uppercase leading-[1] pl-12 md:pl-20">
              "Information density is a problem. Ratio Reader is the solution."
            </blockquote>
            <div className="mt-8 pl-12 md:pl-20 flex items-center gap-3">
              <Binary className="w-5 h-5" />
              <span className="font-bold uppercase tracking-widest">— SYSTEM LOG #042</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative z-10 px-4 md:px-8 py-16 bg-[#00FF41] border-t-4 border-black">
        <div className="max-w-[1600px] mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <h2 className="text-3xl md:text-5xl font-black font-(--font-brutalist-display) uppercase text-center md:text-left">
            STOP READING.
            <br />
            START UNDERSTANDING.
          </h2>
          <button className="px-10 py-5 bg-black text-white font-black uppercase tracking-widest border-4 border-black hover:bg-white hover:text-black transition-colors flex items-center gap-3">
            Get Started <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      <footer className="relative z-10 bg-black text-white px-4 md:px-8 py-8 border-t-4 border-black">
        <div className="max-w-[1600px] mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-sm font-bold uppercase tracking-widest">
          <span className="text-[#00FF41]">Ratio Reader</span>
          <span className="text-white/50">NO FLUFF. NO FILLER. JUST RATIO.</span>
        </div>
      </footer>
    </div>
  );
}
