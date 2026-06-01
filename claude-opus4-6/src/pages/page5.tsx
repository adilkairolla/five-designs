import { useRef, useState, useEffect } from "react";
import { motion, useInView, useScroll, useTransform } from "motion/react";
import {
  Terminal,
  Cpu,
  Scan,
  Braces,
  ArrowRight,
  ChevronRight,
  Shield,
  Zap,
  Database,
  Lock,
} from "lucide-react";

/*
 * DESIGN 5: "NEURAL LINK"
 * Futuristic cyberpunk / terminal aesthetic
 * Neon accents, dark backgrounds, scanlines, glitch effects, monospace type
 * Color palette: deep void black, electric cyan, hot magenta, acid green, amber warnings
 * Orbitron headings, JetBrains Mono body
 */

function CyberReveal({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30, filter: "blur(4px)" }}
      animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function GlitchText({ text, className = "" }: { text: string; className?: string }) {
  return (
    <span className={`relative inline-block ${className}`}>
      <span className="relative z-10">{text}</span>
      <span
        className="absolute top-0 left-0 text-cyan-400 opacity-70"
        style={{ animation: "glitch1 3s infinite linear" }}
        aria-hidden
      >
        {text}
      </span>
      <span
        className="absolute top-0 left-0 text-pink-500 opacity-70"
        style={{ animation: "glitch2 3s infinite linear" }}
        aria-hidden
      >
        {text}
      </span>
    </span>
  );
}

function ScanlineOverlay() {
  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {/* Subtle scanlines */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,255,255,0.03) 2px, rgba(0,255,255,0.03) 4px)",
        }}
      />
      {/* Moving scan beam */}
      <div
        className="absolute left-0 right-0 h-24 bg-gradient-to-b from-transparent via-cyan-500/[0.02] to-transparent"
        style={{ animation: "scanline 8s linear infinite" }}
      />
    </div>
  );
}

function CyberNav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled ? "bg-[#0a0a12]/90 backdrop-blur-md border-b border-cyan-500/10" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Terminal className="w-5 h-5 text-cyan-400" />
          <span className="font-orbitron text-cyan-400 text-sm tracking-wider">
            RATIO<span className="text-pink-500">::</span>READER
          </span>
        </div>

        <div className="hidden md:flex items-center gap-1">
          {[
            { label: "SYS.FEATURES", href: "#sys-features" },
            { label: "PROTOCOL", href: "#protocol" },
            { label: "ACCESS", href: "#access" },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="font-jetbrains text-[10px] text-cyan-400/40 px-3 py-2 rounded hover:text-cyan-400 hover:bg-cyan-400/5 transition-all tracking-wider"
            >
              [{item.label}]
            </a>
          ))}
          <button className="ml-3 font-jetbrains text-[10px] tracking-wider bg-cyan-400 text-[#0a0a12] px-4 py-2 rounded hover:bg-cyan-300 transition-colors font-bold">
            INITIALIZE &gt;
          </button>
        </div>
      </div>
    </motion.nav>
  );
}

function CyberHero() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 0.3], [0, -80]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <section className="relative min-h-screen flex items-center bg-[#0a0a12] overflow-hidden">
      {/* Grid background */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,255,255,0.15) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,255,255,0.15) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      />

      {/* Radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-500/5 rounded-full blur-[200px]" />
      <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-pink-500/5 rounded-full blur-[150px]" />

      <motion.div style={{ y, opacity }} className="relative z-10 max-w-6xl mx-auto px-6 pt-20">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-2 mb-6"
            >
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="font-jetbrains text-green-400 text-[10px] tracking-wider">
                SYSTEM ONLINE — v4.2.1
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-orbitron text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6"
            >
              <span className="text-white">DECODE</span>
              <br />
              <span className="text-white">ANY </span>
              <GlitchText text="DOCUMENT" className="text-cyan-400" />
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="font-jetbrains text-white/40 text-sm leading-relaxed max-w-lg mb-10"
            >
              {">"} Upload PDF → Neural analysis engine extracts summaries,
              critical quotes, and deep insights in seconds.
              <br />
              {">"} No noise. Pure signal.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button className="group font-orbitron text-sm tracking-wider bg-cyan-400 text-[#0a0a12] px-8 py-4 hover:bg-cyan-300 transition-all duration-300 flex items-center justify-center gap-2 font-bold hover:shadow-lg hover:shadow-cyan-400/20">
                UPLOAD PDF
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="group font-jetbrains text-xs tracking-wider text-cyan-400/60 border border-cyan-400/20 px-8 py-4 hover:border-cyan-400/50 hover:text-cyan-400 transition-all duration-300 flex items-center justify-center gap-2">
                <Terminal className="w-3.5 h-3.5" />
                VIEW DEMO
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="flex items-center gap-6 mt-10"
            >
              {[
                { label: "PDFs Processed", value: "2.4M+" },
                { label: "Insights Found", value: "47M+" },
                { label: "Uptime", value: "99.97%" },
              ].map((stat) => (
                <div key={stat.label} className="border-l border-cyan-400/10 pl-4">
                  <span className="font-orbitron text-cyan-400 text-lg font-bold block">{stat.value}</span>
                  <span className="font-jetbrains text-white/20 text-[9px] tracking-wider">{stat.label}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Terminal mockup */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex-1 relative hidden lg:block"
          >
            <div className="bg-[#0d0d18] border border-cyan-400/10 rounded-lg overflow-hidden shadow-2xl shadow-cyan-400/5">
              {/* Title bar */}
              <div className="flex items-center justify-between px-4 py-2.5 bg-[#0f0f1a] border-b border-cyan-400/10">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-pink-500/60" />
                  <div className="w-3 h-3 rounded-full bg-amber-400/60" />
                  <div className="w-3 h-3 rounded-full bg-green-400/60" />
                </div>
                <span className="font-jetbrains text-cyan-400/30 text-[9px] tracking-wider">
                  ratio-reader@terminal
                </span>
              </div>

              {/* Terminal content */}
              <div className="p-5 font-jetbrains text-xs leading-relaxed space-y-1.5">
                <div className="text-cyan-400/50">
                  $ ratio analyze --file="deep_learning.pdf"
                </div>
                <div className="text-green-400/60">
                  [OK] File loaded (342 pages, 128,491 tokens)
                </div>
                <div className="text-green-400/60">
                  [OK] Neural parse complete
                </div>
                <div className="text-amber-400/60">
                  [INFO] Extracting summaries...
                </div>
                <div className="text-white/30 mt-3 border-l-2 border-cyan-400/30 pl-3">
                  <span className="text-cyan-400/60">SUMMARY:</span> This paper introduces a novel
                  transformer architecture that reduces computational
                  complexity from O(n²) to O(n·log n)...
                </div>
                <div className="text-white/30 mt-2 border-l-2 border-pink-500/30 pl-3">
                  <span className="text-pink-500/60">QUOTE:</span> "The attention mechanism, when
                  properly constrained, exhibits emergent properties..."
                </div>
                <div className="text-white/30 mt-2 border-l-2 border-green-400/30 pl-3">
                  <span className="text-green-400/60">INSIGHT:</span> Cross-references findings from
                  Section 3 with contradicting evidence in Section 7...
                </div>
                <div className="text-green-400/60 mt-3">
                  [DONE] 23 summaries | 47 quotes | 12 insights
                </div>
                <div className="text-cyan-400/50">
                  $ <span className="inline-block w-2 h-3 bg-cyan-400 ml-0.5 align-middle" style={{ animation: "blink 1s step-end infinite" }} />
                </div>
              </div>
            </div>

            {/* Floating status badge */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -left-6 bottom-1/4 bg-[#0d0d18] border border-green-400/20 rounded px-3 py-2 flex items-center gap-2"
            >
              <Shield className="w-3.5 h-3.5 text-green-400" />
              <span className="font-jetbrains text-green-400 text-[9px] tracking-wider">ENCRYPTED</span>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

function CyberFeatures() {
  const features = [
    {
      icon: Cpu,
      title: "NEURAL SUMMARIES",
      desc: "Advanced NLP engine decomposes documents into structured argument maps and weighted importance scores.",
      tag: "CORE",
      color: "cyan",
    },
    {
      icon: Scan,
      title: "QUOTE SCANNER",
      desc: "Semantic analysis identifies the most impactful passages — ranked by novelty, insight density, and rhetorical weight.",
      tag: "EXTRACT",
      color: "pink",
    },
    {
      icon: Braces,
      title: "INSIGHT ENGINE",
      desc: "Cross-reference analysis reveals hidden connections, contradictions, and implications across document sections.",
      tag: "ANALYZE",
      color: "green",
    },
    {
      icon: Database,
      title: "READING PROTOCOLS",
      desc: "Contextual scaffolding generates pre-reading briefs, vocabulary aids, and conceptual primers for complex texts.",
      tag: "PREPARE",
      color: "amber",
    },
  ];

  return (
    <section id="sys-features" className="relative bg-[#08080f] py-32 overflow-hidden">
      {/* Grid fade */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `linear-gradient(rgba(0,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,255,0.1) 1px, transparent 1px)`,
        backgroundSize: "40px 40px",
      }} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <CyberReveal className="text-center mb-16">
          <span className="font-jetbrains text-cyan-400/40 text-[10px] tracking-[0.4em]">
            // SYSTEM CAPABILITIES
          </span>
          <h2 className="font-orbitron text-white text-3xl md:text-5xl font-bold mt-4">
            CORE <span className="text-cyan-400">MODULES</span>
          </h2>
        </CyberReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {features.map((f, i) => (
            <CyberReveal key={f.title} delay={i * 0.1}>
              <div className={`group relative bg-[#0c0c16] border border-${f.color === "cyan" ? "cyan" : f.color === "pink" ? "pink" : f.color === "green" ? "green" : "amber"}-400/10 p-7 hover:border-${f.color}-400/30 transition-all duration-500 overflow-hidden`}
                style={{ borderColor: `color-mix(in srgb, ${f.color === "cyan" ? "#22d3ee" : f.color === "pink" ? "#ec4899" : f.color === "green" ? "#4ade80" : "#fbbf24"} 10%, transparent)` }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = `color-mix(in srgb, ${f.color === "cyan" ? "#22d3ee" : f.color === "pink" ? "#ec4899" : f.color === "green" ? "#4ade80" : "#fbbf24"} 30%, transparent)`;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = `color-mix(in srgb, ${f.color === "cyan" ? "#22d3ee" : f.color === "pink" ? "#ec4899" : f.color === "green" ? "#4ade80" : "#fbbf24"} 10%, transparent)`;
                }}
              >
                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-16 h-16">
                  <div
                    className="absolute top-0 right-0 w-px h-8"
                    style={{ backgroundColor: f.color === "cyan" ? "#22d3ee33" : f.color === "pink" ? "#ec489933" : f.color === "green" ? "#4ade8033" : "#fbbf2433" }}
                  />
                  <div
                    className="absolute top-0 right-0 h-px w-8"
                    style={{ backgroundColor: f.color === "cyan" ? "#22d3ee33" : f.color === "pink" ? "#ec489933" : f.color === "green" ? "#4ade8033" : "#fbbf2433" }}
                  />
                </div>

                <div className="flex items-start gap-5">
                  <div
                    className="w-10 h-10 rounded flex items-center justify-center shrink-0"
                    style={{ backgroundColor: `color-mix(in srgb, ${f.color === "cyan" ? "#22d3ee" : f.color === "pink" ? "#ec4899" : f.color === "green" ? "#4ade80" : "#fbbf24"} 10%, transparent)` }}
                  >
                    <f.icon
                      className="w-5 h-5"
                      style={{ color: f.color === "cyan" ? "#22d3ee" : f.color === "pink" ? "#ec4899" : f.color === "green" ? "#4ade80" : "#fbbf24" }}
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="font-orbitron text-white text-sm font-bold tracking-wider">{f.title}</h3>
                      <span
                        className="font-jetbrains text-[8px] tracking-wider px-2 py-0.5 rounded-sm"
                        style={{
                          color: f.color === "cyan" ? "#22d3ee" : f.color === "pink" ? "#ec4899" : f.color === "green" ? "#4ade80" : "#fbbf24",
                          backgroundColor: `color-mix(in srgb, ${f.color === "cyan" ? "#22d3ee" : f.color === "pink" ? "#ec4899" : f.color === "green" ? "#4ade80" : "#fbbf24"} 10%, transparent)`,
                        }}
                      >
                        {f.tag}
                      </span>
                    </div>
                    <p className="font-jetbrains text-white/30 text-xs leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              </div>
            </CyberReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function CyberProtocol() {
  const steps = [
    { cmd: "ratio --upload", label: "UPLOAD", desc: "Inject any PDF into the neural pipeline", status: "ready" },
    { cmd: "ratio --parse", label: "PARSE", desc: "Tokenize, structure-map, and semantic analysis", status: "processing" },
    { cmd: "ratio --extract", label: "EXTRACT", desc: "Summaries, quotes, insights — distilled from noise", status: "complete" },
  ];

  return (
    <section id="protocol" className="relative bg-[#0a0a12] py-32">
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <CyberReveal className="text-center mb-16">
          <span className="font-jetbrains text-pink-500/40 text-[10px] tracking-[0.4em]">
            // EXECUTION PROTOCOL
          </span>
          <h2 className="font-orbitron text-white text-3xl md:text-5xl font-bold mt-4">
            HOW IT <span className="text-pink-500">WORKS</span>
          </h2>
        </CyberReveal>

        <div className="space-y-4">
          {steps.map((step, i) => (
            <CyberReveal key={step.label} delay={i * 0.15}>
              <div className="bg-[#0c0c16] border border-white/5 p-6 flex flex-col md:flex-row items-start md:items-center gap-4">
                <div className="flex items-center gap-3 shrink-0">
                  <span className="font-orbitron text-white/10 text-2xl font-bold w-10">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <ChevronRight className="w-4 h-4 text-cyan-400/30 hidden md:block" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-1">
                    <h3 className="font-orbitron text-white text-sm font-bold tracking-wider">{step.label}</h3>
                    <code className="font-jetbrains text-cyan-400/30 text-[9px]">{step.cmd}</code>
                  </div>
                  <p className="font-jetbrains text-white/30 text-xs">{step.desc}</p>
                </div>
                <div className={`flex items-center gap-1.5 shrink-0 ${
                  step.status === "ready" ? "text-cyan-400/50" :
                  step.status === "processing" ? "text-amber-400/50" :
                  "text-green-400/50"
                }`}>
                  <div className={`w-1.5 h-1.5 rounded-full ${
                    step.status === "ready" ? "bg-cyan-400" :
                    step.status === "processing" ? "bg-amber-400 animate-pulse" :
                    "bg-green-400"
                  }`} />
                  <span className="font-jetbrains text-[9px] tracking-wider uppercase">{step.status}</span>
                </div>
              </div>
            </CyberReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function CyberStats() {
  const stats = [
    { value: "0.3s", label: "AVG PARSE TIME / PAGE", icon: Zap },
    { value: "94.7%", label: "INSIGHT ACCURACY", icon: Cpu },
    { value: "256", label: "LANGUAGE MODELS", icon: Database },
    { value: "AES-256", label: "ENCRYPTION STANDARD", icon: Lock },
  ];

  return (
    <section className="relative bg-[#08080f] py-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, i) => (
            <CyberReveal key={stat.label} delay={i * 0.1}>
              <div className="bg-[#0c0c16] border border-cyan-400/5 p-6 text-center">
                <stat.icon className="w-5 h-5 text-cyan-400/30 mx-auto mb-3" />
                <span className="font-orbitron text-cyan-400 text-2xl md:text-3xl font-bold block mb-1">{stat.value}</span>
                <span className="font-jetbrains text-white/20 text-[8px] tracking-[0.2em]">{stat.label}</span>
              </div>
            </CyberReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function CyberAccess() {
  const tiers = [
    {
      name: "BASIC",
      price: "FREE",
      sub: "FOREVER",
      features: ["5 PDFs / month", "Standard summaries", "Top quotes extraction"],
      color: "cyan",
      cta: "INITIALIZE",
    },
    {
      name: "PRO",
      price: "$14",
      sub: "/ MONTH",
      features: ["Unlimited PDFs", "Deep analysis mode", "Full insight engine", "Priority queue", "API access"],
      color: "pink",
      cta: "UPGRADE",
      featured: true,
    },
    {
      name: "ENTERPRISE",
      price: "CUSTOM",
      sub: "CONTACT",
      features: ["Everything in Pro", "Team workspace", "SSO + RBAC", "SLA guarantee", "Dedicated support"],
      color: "amber",
      cta: "CONTACT",
    },
  ];

  return (
    <section id="access" className="relative bg-[#0a0a12] py-32">
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <CyberReveal className="text-center mb-16">
          <span className="font-jetbrains text-green-400/40 text-[10px] tracking-[0.4em]">
            // ACCESS TIERS
          </span>
          <h2 className="font-orbitron text-white text-3xl md:text-5xl font-bold mt-4">
            CHOOSE YOUR <span className="text-green-400">TIER</span>
          </h2>
        </CyberReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {tiers.map((tier, i) => (
            <CyberReveal key={tier.name} delay={i * 0.1}>
              <div className={`relative bg-[#0c0c16] border p-7 h-full flex flex-col ${
                tier.featured ? "border-pink-500/30" : "border-white/5"
              }`}>
                {tier.featured && (
                  <div className="absolute -top-px left-0 right-0 h-px bg-gradient-to-r from-transparent via-pink-500 to-transparent" />
                )}
                <div className="mb-6">
                  <span
                    className="font-jetbrains text-[9px] tracking-[0.3em]"
                    style={{ color: tier.color === "cyan" ? "#22d3ee" : tier.color === "pink" ? "#ec4899" : "#fbbf24" }}
                  >
                    {tier.name}
                  </span>
                  <div className="mt-2">
                    <span className="font-orbitron text-white text-3xl font-bold">{tier.price}</span>
                    <span className="font-jetbrains text-white/20 text-[9px] ml-2 tracking-wider">{tier.sub}</span>
                  </div>
                </div>

                <ul className="space-y-2.5 mb-8 flex-1">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-center gap-2">
                      <ChevronRight className="w-3 h-3 text-green-400/50 shrink-0" />
                      <span className="font-jetbrains text-white/40 text-xs">{f}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-3 font-orbitron text-xs tracking-wider font-bold transition-all duration-300 ${
                    tier.featured
                      ? "bg-pink-500 text-white hover:bg-pink-400 hover:shadow-lg hover:shadow-pink-500/20"
                      : "bg-white/5 text-white/60 border border-white/10 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {tier.cta} &gt;
                </button>
              </div>
            </CyberReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function CyberCTA() {
  return (
    <section className="relative bg-[#08080f] py-32 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-[200px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-pink-500/5 rounded-full blur-[150px]" />
      </div>

      <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
        <CyberReveal>
          <Terminal className="w-8 h-8 text-cyan-400/40 mx-auto mb-6" />
          <h2 className="font-orbitron text-white text-3xl md:text-5xl font-bold mb-5">
            READY TO <GlitchText text="DECODE" className="text-cyan-400" />?
          </h2>
          <p className="font-jetbrains text-white/30 text-sm max-w-lg mx-auto mb-10 leading-relaxed">
            {">"} Initialize the neural reader. Upload your first document.
            <br />
            {">"} No credit card. No setup. Just signal.
          </p>
          <button className="group font-orbitron text-sm tracking-wider bg-cyan-400 text-[#0a0a12] px-10 py-4 font-bold hover:bg-cyan-300 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/20 inline-flex items-center gap-2">
            LAUNCH READER
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </CyberReveal>
      </div>
    </section>
  );
}

function CyberFooter() {
  return (
    <footer className="bg-[#06060e] border-t border-white/5 py-8">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <Terminal className="w-4 h-4 text-cyan-400/30" />
          <span className="font-jetbrains text-white/20 text-[10px] tracking-wider">
            RATIO::READER © 2025
          </span>
        </div>
        <div className="flex items-center gap-6">
          {["PRIVACY", "TERMS", "STATUS"].map((item) => (
            <a key={item} href="#" className="font-jetbrains text-white/15 text-[9px] tracking-wider hover:text-cyan-400/40 transition-colors">
              {item}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default function Page5() {
  return (
    <div className="bg-[#0a0a12] min-h-screen">
      <ScanlineOverlay />
      <CyberNav />
      <CyberHero />
      <CyberFeatures />
      <CyberProtocol />
      <CyberStats />
      <CyberAccess />
      <CyberCTA />
      <CyberFooter />
    </div>
  );
}
