import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState, useEffect, useCallback } from "react";
import { Upload, FileText, BookOpen } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

function TypeWriter({ text, delay = 0 }: { text: string; delay?: number }) {
  const [displayed, setDisplayed] = useState("");
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const startTimer = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(startTimer);
  }, [delay]);

  useEffect(() => {
    if (!started) return;
    let i = 0;
    const interval = setInterval(() => {
      if (i < text.length) {
        setDisplayed(text.slice(0, i + 1));
        i++;
      } else {
        clearInterval(interval);
      }
    }, 30);
    return () => clearInterval(interval);
  }, [text, started]);

  return (
    <span>
      {displayed}
      {started && displayed.length < text.length && (
        <span className="d5-cursor">█</span>
      )}
    </span>
  );
}

function TerminalPrompt({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-start gap-2 mb-1">
      <span className="text-[#3cff8f] shrink-0 select-none">$&gt;</span>
      <span className="text-[#3cff8f]/70">{children}</span>
    </div>
  );
}

function AsciiLogo() {
  const lines = [
    "  ██████╗  █████╗ ████████╗██╗ ██████╗ ",
    "  ██╔══██╗██╔══██╗╚══██╔══╝██║██╔═══██╗",
    "  ██████╔╝███████║   ██║   ██║██║   ██║",
    "  ██╔══██╗██╔══██║   ██║   ██║██║   ██║",
    "  ██║  ██║██║  ██║   ██║   ██║╚██████╔╝",
    "  ╚═╝  ╚═╝╚═╝  ╚═╝   ╚═╝   ╚═╝ ╚═════╝ ",
    "      ██████╗ ███████╗ █████╗ ██████╗ ███████╗██████╗  ",
    "      ██╔══██╗██╔════╝██╔══██╗██╔══██╗██╔════╝██╔══██╗",
    "      ██████╔╝█████╗  ███████║██║  ██║█████╗  ██████╔╝",
    "      ██╔══██╗██╔══╝  ██╔══██║██║  ██║██╔══╝  ██╔══██╗",
    "      ██║  ██║███████╗██║  ██║██████╔╝███████╗██║  ██║",
    "      ╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝╚═════╝ ╚══════╝╚═╝  ╚═╝",
  ];

  return (
    <pre className="font-['JetBrains_Mono'] text-[clamp(0.35rem,1.2vw,0.7rem)] leading-tight text-[#3cff8f]/60 select-none overflow-x-auto">
      {lines.join("\n")}
    </pre>
  );
}

function ScanLines() {
  return <div className="d5-scanlines fixed inset-0 pointer-events-none z-50" />;
}

export default function Design5() {
  const [bootComplete, setBootComplete] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setBootComplete(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  const features = useCallback(
    () => [
      {
        cmd: "ratio --feature=summarize",
        desc: "AI-powered document summarization. Extracts key arguments, evidence, and conclusions in seconds.",
      },
      {
        cmd: "ratio --feature=quotes",
        desc: "Intelligent quote extraction. Pulls the most significant passages from any document.",
      },
      {
        cmd: "ratio --feature=hints",
        desc: "Pre-reading analysis. Generates contextual hints for deeper comprehension.",
      },
      {
        cmd: "ratio --feature=insights",
        desc: "Cross-reference detection. Finds patterns and connections humans typically miss.",
      },
    ],
    []
  );

  return (
    <div className="d5-root min-h-screen bg-[#0d1117] text-[#3cff8f] overflow-hidden font-['JetBrains_Mono'] relative">
      <ScanLines />

      {/* CRT glow effect */}
      <div className="fixed inset-0 pointer-events-none d5-crt-glow" />

      {/* Nav */}
      <nav className="border-b border-[#3cff8f]/10 sticky top-0 z-40 bg-[#0d1117]/95 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <BookOpen className="w-4 h-4 text-[#3cff8f]" />
            <span className="text-sm text-[#3cff8f]">
              ratio-reader
            </span>
            <span className="text-xs text-[#3cff8f]/30">v2.1.0</span>
          </div>
          <div className="flex items-center gap-6">
            <span className="text-xs text-[#3cff8f]/30 hidden sm:inline">
              uptime: 99.97%
            </span>
            <Link
              to="/1"
              className="text-xs text-[#3cff8f]/40 hover:text-[#3cff8f] transition-colors"
            >
              [back to start]
            </Link>
          </div>
        </div>
      </nav>

      {/* Boot sequence */}
      {!bootComplete && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="min-h-[80vh] flex flex-col justify-center px-6 max-w-4xl mx-auto"
        >
          <div className="space-y-1 text-sm text-[#3cff8f]/70">
            <p>[boot] Initializing Ratio Reader v2.1.0...</p>
            <p>[boot] Loading AI models... OK</p>
            <p>[boot] Mounting PDF parser... OK</p>
            <p>[boot] Neural engine ready</p>
            <p className="text-[#3cff8f] mt-4">
              [boot] System ready. Welcome.
            </p>
          </div>
        </motion.div>
      )}

      {/* Main content */}
      {bootComplete && (
        <>
          {/* Hero Terminal */}
          <motion.section
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="pt-20 pb-16 px-6 max-w-5xl mx-auto"
          >
            <motion.div variants={fadeUp}>
              <AsciiLogo />
            </motion.div>

            <motion.div variants={fadeUp} className="mt-12 space-y-2 text-sm">
              <TerminalPrompt>
                <TypeWriter
                  text="ratio --analyze ~/documents/research-paper.pdf"
                  delay={300}
                />
              </TerminalPrompt>
              <div className="pl-6 text-[#3cff8f]/50 mt-4 space-y-1">
                <p>
                  <TypeWriter
                    text="[✓] Document loaded: research-paper.pdf (42 pages)"
                    delay={1200}
                  />
                </p>
                <p>
                  <TypeWriter
                    text="[✓] Neural analysis complete"
                    delay={2000}
                  />
                </p>
                <p>
                  <TypeWriter
                    text="[✓] Generated: summary, 12 quotes, 8 hints, 5 insights"
                    delay={2800}
                  />
                </p>
                <p className="text-[#3cff8f] mt-3">
                  <TypeWriter
                    text="Output ready. Time elapsed: 2.8s"
                    delay={3600}
                  />
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="mt-12 flex flex-wrap gap-4"
            >
              <button className="group bg-[#3cff8f] text-[#0d1117] px-6 py-3 text-xs font-bold uppercase tracking-wider hover:bg-[#3cff8f]/90 transition-colors flex items-center gap-2">
                <Upload className="w-3.5 h-3.5" />
                ratio --upload
              </button>
              <button className="border border-[#3cff8f]/30 px-6 py-3 text-xs uppercase tracking-wider hover:border-[#3cff8f] hover:bg-[#3cff8f]/5 transition-all">
                ratio --demo
              </button>
            </motion.div>
          </motion.section>

          {/* Output section */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
            className="py-20 px-6 max-w-5xl mx-auto"
          >
            <motion.div variants={fadeUp} className="mb-12">
              <p className="text-xs text-[#3cff8f]/40 mb-2">
                # HOW IT WORKS
              </p>
              <div className="h-px bg-[#3cff8f]/10" />
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  step: "01",
                  cmd: "upload",
                  desc: "Drag your PDF into the terminal. We accept any document, any size.",
                  icon: Upload,
                },
                {
                  step: "02",
                  cmd: "process",
                  desc: "Our neural engine reads every page, extracting meaning at machine speed.",
                  icon: FileText,
                },
                {
                  step: "03",
                  cmd: "output",
                  desc: "Receive structured output: summary, quotes, hints, and deep insights.",
                  icon: BookOpen,
                },
              ].map((s) => (
                <motion.div
                  key={s.step}
                  variants={fadeUp}
                  className="border border-[#3cff8f]/10 p-6 hover:border-[#3cff8f]/30 hover:bg-[#3cff8f]/[0.02] transition-all duration-300 group"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-xs text-[#3cff8f]/30">
                      [{s.step}]
                    </span>
                    <span className="text-xs text-[#3cff8f]">
                      ratio --{s.cmd}
                    </span>
                  </div>
                  <s.icon className="w-5 h-5 text-[#3cff8f]/40 mb-4 group-hover:text-[#3cff8f] transition-colors duration-500" />
                  <p className="text-xs text-[#3cff8f]/50 leading-relaxed">
                    {s.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Features as terminal output */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
            className="py-20 px-6 max-w-5xl mx-auto"
          >
            <motion.div variants={fadeUp} className="mb-12">
              <p className="text-xs text-[#3cff8f]/40 mb-2">
                # FEATURES
              </p>
              <div className="h-px bg-[#3cff8f]/10" />
            </motion.div>

            <div className="space-y-4">
              {features().map((f) => (
                <motion.div
                  key={f.cmd}
                  variants={fadeUp}
                  className="border border-[#3cff8f]/5 p-5 hover:border-[#3cff8f]/20 hover:bg-[#3cff8f]/[0.02] transition-all duration-300 group"
                >
                  <div className="flex items-start gap-4">
                    <code className="text-xs text-[#3cff8f] shrink-0 bg-[#3cff8f]/5 px-2 py-1">
                      {f.cmd}
                    </code>
                    <p className="text-xs text-[#3cff8f]/45 leading-relaxed group-hover:text-[#3cff8f]/60 transition-colors duration-300">
                      {f.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Stats */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="py-20 px-6 max-w-5xl mx-auto"
          >
            <motion.div variants={fadeUp} className="mb-12">
              <p className="text-xs text-[#3cff8f]/40 mb-2">
                # METRICS
              </p>
              <div className="h-px bg-[#3cff8f]/10" />
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                { value: "2.8s", label: "avg_process_time" },
                { value: "94%", label: "comprehension_rate" },
                { value: "50247", label: "documents_processed" },
              ].map((s) => (
                <motion.div
                  key={s.label}
                  variants={fadeUp}
                  className="text-center p-6 border border-[#3cff8f]/10 hover:bg-[#3cff8f]/[0.03] transition-colors duration-300"
                >
                  <div className="text-4xl font-bold text-[#3cff8f] mb-2">
                    {s.value}
                  </div>
                  <p className="text-[10px] text-[#3cff8f]/30 uppercase tracking-wider">
                    {s.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Testimonial */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="py-20 px-6 max-w-4xl mx-auto"
          >
            <motion.div variants={fadeUp} className="mb-8">
              <p className="text-xs text-[#3cff8f]/40 mb-2">
                # USER_FEEDBACK
              </p>
              <div className="h-px bg-[#3cff8f]/10" />
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="border border-[#3cff8f]/10 p-8 hover:border-[#3cff8f]/20 transition-colors duration-300"
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xs text-[#3cff8f]/30">
                  feedback_id: 0x7a3f
                </span>
                <span className="text-xs text-[#3cff8f]/20">|</span>
                <span className="text-xs text-[#3cff8f]/30">
                  rating: ★★★★★
                </span>
              </div>
              <p className="text-sm text-[#3cff8f]/70 leading-relaxed mb-6">
                "I process 200+ research papers a month. Ratio Reader cut my
                reading time by 80% while improving my comprehension. It's not
                just a tool — it's a paradigm shift."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-[#3cff8f]/10 flex items-center justify-center text-[10px]">
                  AK
                </div>
                <div>
                  <p className="text-xs text-[#3cff8f]/60">
                    Dr. Amir Khan
                  </p>
                  <p className="text-[10px] text-[#3cff8f]/25">
                    Lead Researcher @ DeepMind
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.section>

          {/* CTA */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="py-28 px-6 text-center"
          >
            <motion.div variants={fadeUp}>
              <p className="text-xs text-[#3cff8f]/30 mb-6">
                # READY?
              </p>
            </motion.div>
            <motion.h2
              variants={fadeUp}
              className="text-3xl md:text-5xl font-bold mb-8"
            >
              <span className="text-[#3cff8f]/40">$&gt;</span> ratio --start
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-xs text-[#3cff8f]/40 mb-10 max-w-md mx-auto"
            >
              Upload your first document. Get results in seconds. No signup
              required.
            </motion.p>
            <motion.div variants={fadeUp}>
              <button className="group bg-[#3cff8f] text-[#0d1117] px-8 py-4 text-xs font-bold uppercase tracking-wider hover:bg-[#3cff8f]/90 transition-colors inline-flex items-center gap-2">
                <Upload className="w-4 h-4" />
                ratio --upload ~/document.pdf
              </button>
            </motion.div>
          </motion.section>

          {/* Footer */}
          <footer className="py-8 px-6 border-t border-[#3cff8f]/5">
            <div className="max-w-6xl mx-auto flex items-center justify-between">
              <span className="text-[10px] text-[#3cff8f]/20">
                ratio-reader v2.1.0 © 2026
              </span>
              <div className="flex gap-4">
                {[1, 2, 3, 4, 5].map((n) => (
                  <Link
                    key={n}
                    to={`/${n}`}
                    className={`text-[10px] ${n === 5 ? "text-[#3cff8f]" : "text-[#3cff8f]/20 hover:text-[#3cff8f]/50"} transition-colors`}
                  >
                    [{n}]
                  </Link>
                ))}
              </div>
            </div>
          </footer>
        </>
      )}
    </div>
  );
}
