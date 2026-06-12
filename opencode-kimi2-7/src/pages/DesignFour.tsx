import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FileText,
  Terminal,
  Cpu,
  ScanLine,
  Zap,
  Quote,
  Lightbulb,
  Radio,
  ArrowRight,
  Power,
} from "lucide-react";

const bootLines = [
  "> RATIO_READER_OS v9.2.1 boot sequence initiated...",
  "> loading semantic_parser.dll .............. [OK]",
  "> loading quote_extractor.dll .............. [OK]",
  "> loading hint_generator.dll ............... [OK]",
  "> loading insight_synth.dll ................ [OK]",
  "> establishing secure document channel ..... [OK]",
  "> system ready.",
];

const modules = [
  { code: "SMR", name: "SUMMARY", desc: "Condensed signal from dense input." },
  { code: "QOT", name: "QUOTES", desc: "Timestamped, contextualized excerpts." },
  { code: "HNT", name: "HINTS", desc: "Real-time comprehension assistance." },
  { code: "INS", name: "INSIGHTS", desc: "Cross-reference pattern detection." },
];

export function DesignFour() {
  const [booted, setBooted] = useState(false);
  const [lines, setLines] = useState<string[]>([]);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i < bootLines.length) {
        setLines((prev) => [...prev, bootLines[i]]);
        i++;
      } else {
        clearInterval(interval);
        setTimeout(() => setBooted(true), 400);
      }
    }, 180);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#FFB000] font-(--font-terminal-body) overflow-x-hidden selection:bg-[#FFB000] selection:text-black">
      {/* CRT scanline overlay */}
      <div
        className="fixed inset-0 pointer-events-none z-50 opacity-[0.08]"
        style={{
          background:
            "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.4) 3px)",
          backgroundSize: "100% 4px",
        }}
      />
      {/* CRT vignette */}
      <div
        className="fixed inset-0 pointer-events-none z-40"
        style={{
          background:
            "radial-gradient(circle at center, transparent 40%, rgba(0,0,0,0.6) 100%)",
        }}
      />
      {/* Subtle flicker */}
      <div className="fixed inset-0 pointer-events-none z-30 bg-[#FFB000]/[0.015] animate-[pulse_4s_infinite]" />

      {/* Header */}
      <header className="relative z-20 border-b border-[#FFB000]/30 px-4 md:px-8 py-4 bg-[#0A0A0A]/90 backdrop-blur">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 border border-[#FFB000] flex items-center justify-center animate-pulse">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xl md:text-2xl tracking-widest font-(--font-terminal-display)">
                RATIO_READER
              </span>
              <span className="hidden md:inline text-xs ml-3 text-[#FFB000]/50">:: TERMINAL EDITION</span>
            </div>
          </div>
          <div className="flex items-center gap-4 text-xs md:text-sm">
            <span className="text-[#33FF00]">● ONLINE</span>
            <Power className="w-5 h-5 text-[#FFB000] hover:text-red-500 cursor-pointer transition-colors" />
          </div>
        </div>
      </header>

      <main className="relative z-20 px-4 md:px-8 py-12 md:py-20">
        <div className="max-w-6xl mx-auto">
          {/* Boot sequence */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mb-12 border border-[#FFB000]/30 bg-black/50 p-4 md:p-6 font-(--font-terminal-body) text-sm md:text-base min-h-[180px]"
          >
            {lines.map((line, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className="mb-1"
              >
                {line}
              </motion.div>
            ))}
            {!booted && lines.length === bootLines.length && (
              <span className="animate-pulse">_</span>
            )}
          </motion.div>

          {/* Hero */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: booted ? 1 : 0 }}
            transition={{ duration: 0.8 }}
            className="grid lg:grid-cols-2 gap-12 items-center mb-20"
          >
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Radio className="w-5 h-5 text-[#33FF00] animate-pulse" />
                <span className="text-xs uppercase tracking-[0.3em] text-[#FFB000]/70">
                  Document Processing Unit
                </span>
              </div>
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-(--font-terminal-display) leading-[0.9] mb-8 text-[#33FF00] drop-shadow-[0_0_12px_rgba(51,255,0,0.5)]">
                READING
                <br />
                <span className="text-[#FFB000]">MACHINE</span>
              </h1>
              <p className="text-lg md:text-xl text-[#FFB000]/80 leading-relaxed mb-8 max-w-lg">
                Upload any PDF. Ratio Reader runs semantic extraction, quote indexing, and insight synthesis — then beams the results to your screen.
              </p>
              <button className="group px-8 py-4 border border-[#33FF00] text-[#33FF00] hover:bg-[#33FF00] hover:text-black transition-colors flex items-center gap-3 uppercase tracking-widest">
                <Terminal className="w-5 h-5" />
                Initialize Upload
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Terminal window mock */}
            <div className="border border-[#FFB000]/40 bg-black p-1 shadow-[0_0_40px_rgba(255,176,0,0.1)]">
              <div className="border border-[#FFB000]/30 p-4 md:p-6">
                <div className="flex items-center gap-2 mb-4 border-b border-[#FFB000]/20 pb-2">
                  <span className="text-xs uppercase tracking-widest text-[#FFB000]/50">ratio_reader.exe</span>
                </div>
                <div className="space-y-3 text-sm md:text-base">
                  <p>
                    <span className="text-[#33FF00]">$</span> ratio --upload thesis.pdf
                  </p>
                  <p className="text-[#FFB000]/70">[LOADING] 128 pages scanned</p>
                  <p className="text-[#FFB000]/70">[ANALYZE] thesis statement isolated</p>
                  <p className="text-[#33FF00]">[OK] summary generated (342 words)</p>
                  <p className="text-[#33FF00]">[OK] 14 key quotes indexed</p>
                  <p className="text-[#FFB000]">[HINT] 3 terms require context</p>
                  <p className="text-[#33FF00]">[READY] reading guide deployed</p>
                  <p className="animate-pulse mt-4">{`>_`}</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Modules */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-20"
          >
            <div className="flex items-center gap-3 mb-8 border-b border-[#FFB000]/30 pb-4">
              <Cpu className="w-5 h-5" />
              <span className="text-lg tracking-widest uppercase">Active Modules</span>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {modules.map((mod, i) => (
                <motion.div
                  key={mod.code}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="border border-[#FFB000]/30 bg-black/40 p-5 hover:border-[#33FF00] hover:shadow-[0_0_20px_rgba(51,255,0,0.15)] transition-all group"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-(--font-terminal-display)">{mod.code}</span>
                    <ScanLine className="w-4 h-4 text-[#FFB000]/50 group-hover:text-[#33FF00] transition-colors" />
                  </div>
                  <h3 className="text-lg uppercase tracking-widest mb-2 text-[#33FF00]">{mod.name}</h3>
                  <p className="text-sm text-[#FFB000]/70">{mod.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Quote / insight strip */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="grid lg:grid-cols-2 gap-6 mb-20"
          >
            <div className="border border-[#33FF00]/40 bg-black/40 p-6 md:p-8">
              <Quote className="w-8 h-8 text-[#33FF00] mb-4" />
              <p className="text-xl md:text-2xl font-(--font-terminal-display) leading-snug mb-4">
                "The machine does not replace the reader. It removes the fog between the reader and the idea."
              </p>
              <span className="text-xs uppercase tracking-widest text-[#FFB000]/50">— Archive Entry #7734</span>
            </div>
            <div className="border border-[#FFB000]/30 bg-black/40 p-6 md:p-8">
              <Lightbulb className="w-8 h-8 text-[#FFB000] mb-4" />
              <h3 className="text-xl uppercase tracking-widest mb-4">System Directive</h3>
              <ul className="space-y-3 text-[#FFB000]/80">
                <li className="flex items-start gap-2">
                  <span className="text-[#33FF00]">»</span>
                  Preserve the author's original argument structure.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#33FF00]">»</span>
                  Highlight only the passages that carry the most signal.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#33FF00]">»</span>
                  Explain complexity without flattening meaning.
                </li>
              </ul>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center border border-[#FFB000]/30 bg-black/40 p-12 md:p-16"
          >
            <Zap className="w-10 h-10 text-[#33FF00] mx-auto mb-6 animate-pulse" />
            <h2 className="text-3xl md:text-5xl font-(--font-terminal-display) mb-6 text-[#33FF00] drop-shadow-[0_0_10px_rgba(51,255,0,0.4)]">
              ESTABLISH UPLINK
            </h2>
            <p className="text-[#FFB000]/70 mb-8 max-w-xl mx-auto">
              Connect your first document and receive a fully processed reading guide in seconds.
            </p>
            <button className="px-10 py-4 bg-[#FFB000] text-black font-bold uppercase tracking-widest hover:bg-[#33FF00] transition-colors">
              Upload PDF
            </button>
          </motion.div>
        </div>
      </main>

      <footer className="relative z-20 border-t border-[#FFB000]/30 px-4 md:px-8 py-6 text-xs text-[#FFB000]/50">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-3">
          <span>RATIO_READER // TERMINAL EDITION // © 2026</span>
          <span>ALL SYSTEMS NOMINAL</span>
        </div>
      </footer>
    </div>
  );
}
