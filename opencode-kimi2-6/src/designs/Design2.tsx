import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { FileUp, Cpu, Zap, Eye, Terminal, Network, Shield, ChevronRight, Activity } from "lucide-react";

function GlitchText({ text, className = "" }: { text: string; className?: string }) {
  const [display, setDisplay] = useState(text);
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*";

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    let timeouts: ReturnType<typeof setTimeout>[] = [];

    const glitch = () => {
      let iterations = 0;
      interval = setInterval(() => {
        setDisplay(
          text
            .split("")
            .map((_char, idx) => {
              if (idx < iterations) return text[idx];
              return chars[Math.floor(Math.random() * chars.length)];
            })
            .join("")
        );
        if (iterations >= text.length) clearInterval(interval);
        iterations += 1 / 3;
      }, 30);
    };

    const scheduleGlitch = () => {
      const t = setTimeout(() => {
        glitch();
        scheduleGlitch();
      }, Math.random() * 4000 + 3000);
      timeouts.push(t);
    };

    glitch();
    scheduleGlitch();

    return () => {
      clearInterval(interval);
      timeouts.forEach(clearTimeout);
    };
  }, [text]);

  return <span className={className}>{display}</span>;
}

function HolographicCard({ icon, title, desc, delay }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay, duration: 0.6, type: "spring", stiffness: 100 }}
      whileHover={{ scale: 1.02 }}
      className="group relative p-6 overflow-hidden"
      style={{
        background: "linear-gradient(135deg, rgba(5, 15, 20, 0.9) 0%, rgba(5, 15, 20, 0.6) 100%)",
        border: "1px solid rgba(0, 255, 209, 0.1)",
        backdropFilter: "blur(10px)",
        fontFamily: "'Chakra Petch', sans-serif",
      }}
    >
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#00FFD1] to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#FF007F] to-transparent" />
      </div>
      <div className="relative z-10">
        <div className="w-10 h-10 mb-4 flex items-center justify-center text-[#00FFD1]">
          {icon}
        </div>
        <h3 className="text-lg font-bold text-white mb-2 uppercase tracking-wider">{title}</h3>
        <p className="text-sm text-[#7A8B94] leading-relaxed">{desc}</p>
      </div>
      <motion.div
        className="absolute -bottom-10 -right-10 w-20 h-20 rounded-full bg-[#00FFD1] opacity-5 blur-2xl group-hover:opacity-10 transition-opacity"
      />
    </motion.div>
  );
}

function ScanLine() {
  return (
    <motion.div
      className="absolute inset-0 pointer-events-none z-20"
      style={{ background: "linear-gradient(to bottom, transparent 0%, rgba(0,255,209,0.02) 50%, transparent 100%)" }}
      animate={{ y: ["0%", "100%"] }}
      transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
    />
  );
}

export function Design2() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    document.body.style.backgroundColor = "#050F14";
    return () => { document.body.style.backgroundColor = ""; };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const gridSize = 40;
    let time = 0;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      time += 0.005;

      // Grid
      ctx.strokeStyle = "rgba(0, 255, 209, 0.03)";
      ctx.lineWidth = 0.5;

      for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }
      for (let y = 0; y < canvas.height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      // Floating data particles
      for (let i = 0; i < 30; i++) {
        const px = (Math.sin(time + i * 1.5) * 0.5 + 0.5) * canvas.width;
        const py = (Math.cos(time * 0.7 + i * 2.3) * 0.5 + 0.5) * canvas.height;
        ctx.fillStyle = i % 2 === 0 ? "rgba(0, 255, 209, 0.6)" : "rgba(255, 0, 127, 0.6)";
        ctx.beginPath();
        ctx.arc(px, py, 1.5, 0, Math.PI * 2);
        ctx.fill();
      }

      requestAnimationFrame(draw);
    };

    draw();
    return () => window.removeEventListener("resize", resize);
  }, []);

  const terminalLines = [
    "> INITIALIZING NEURAL_UPLINK...",
    "> PDF_ANALYZER_V3.2 LOADED",
    "> EXTRACTING KEY_ENTITIES... 47%",
    "> CROSS_REFERENCING_DATABASE...",
    "> SUMMARY_GENERATION: COMPLETE",
    "> READY_FOR_INPUT",
  ];

  const features = [
    { icon: <FileUp size={24} />, title: "Neural Upload", desc: "Drag-and-drop PDF processing with zero-latency ingestion and real-time parsing" },
    { icon: <Cpu size={24} />, title: "Quantum Summary", desc: "Multi-dimensional content analysis preserving semantic relationships and intent" },
    { icon: <Zap size={24} />, title: "Accelerated Insight", desc: "Sub-3-second processing using distributed GPU clusters and optimized pipelines" },
    { icon: <Eye size={24} />, title: "Holographic View", desc: "Interactive 3D knowledge graphs rendered directly in your browser viewport" },
    { icon: <Terminal size={24} />, title: "Command Line", desc: "Query your documents using natural language with 94.3% semantic accuracy" },
    { icon: <Network size={24} />, title: "Neural Mesh", desc: "Connect concepts across your entire document library via AI-generated links" },
    { icon: <Shield size={24} />, title: "Encryption Core", desc: "End-to-end AES-256 encryption for all document processing and storage" },
    { icon: <Activity size={24} />, title: "Live Telemetry", desc: "Real-time processing metrics and document health scores displayed instantly" },
  ];

  return (
    <div
      className="min-h-screen w-full relative overflow-hidden"
      style={{ backgroundColor: "#050F14", color: "#E0E5E8", fontFamily: "'Chakra Petch', sans-serif" }}
      onMouseMove={(e) => setMousePos({ x: e.clientX, y: e.clientY })}
    >
      <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none" style={{ zIndex: 0 }} />
      <ScanLine />

      {/* Mouse glow */}
      <div
        className="fixed pointer-events-none z-10"
        style={{
          left: mousePos.x - 200,
          top: mousePos.y - 200,
          width: 400,
          height: 400,
          background: "radial-gradient(circle, rgba(0,255,209,0.04) 0%, transparent 70%)",
        }}
      />

      {/* Navigation */}
      <nav className="relative z-30 px-8 py-6 flex items-center justify-between border-b border-[#00FFD1]/10">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 border border-[#00FFD1] flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[#00FFD1] opacity-10" />
            <Cpu size={16} className="text-[#00FFD1]" />
          </div>
          <span className="text-lg font-bold tracking-[0.2em] uppercase">
            Ratio<span className="text-[#00FFD1]">Reader</span>
          </span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-xs font-semibold uppercase tracking-widest text-[#7A8B94]">
          <a href="#" className="hover:text-[#00FFD1] transition-colors">Protocol</a>
          <a href="#" className="hover:text-[#00FFD1] transition-colors">Features</a>
          <a href="#" className="hover:text-[#00FFD1] transition-colors">Specs</a>
        </div>
        <button className="px-5 py-2 border border-[#FF007F] text-[#FF007F] text-xs font-bold uppercase tracking-widest hover:bg-[#FF007F] hover:text-black transition-all duration-300">
          Initialize
        </button>
      </nav>

      {/* Hero */}
      <section className="relative z-20 min-h-screen flex items-center px-8 lg:px-20 py-20">
        <div className="grid lg:grid-cols-2 gap-16 max-w-7xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center"
          >
            <div className="inline-flex items-center gap-3 mb-8">
              <div className="w-2 h-2 bg-[#00FFD1] animate-pulse shadow-[0_0_10px_#00FFD1]" />
              <span className="text-xs font-mono text-[#00FFD1] uppercase tracking-[0.3em]">System Online v3.2</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold leading-[0.95] mb-8 tracking-tight">
              <span className="block">DECODE</span>
              <span className="block text-[#FF007F]">
                <GlitchText text="REALITY" />
              </span>
              <span className="block">FROM TEXT</span>
            </h1>

            <p className="text-lg text-[#7A8B94] mb-10 max-w-md leading-relaxed font-mono text-sm">
              Upload PDFs to our neural grid. Extract meaning, decode patterns, and construct knowledge architectures in real-time.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                whileHover={{ scale: 1.02, boxShadow: "0 0 30px rgba(0, 255, 209, 0.3)" }}
                whileTap={{ scale: 0.98 }}
                className="group px-8 py-4 bg-[#00FFD1] text-black font-bold text-sm uppercase tracking-widest flex items-center gap-3 hover:bg-white transition-colors"
              >
                Begin Transmission
                <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </motion.button>
              <button className="px-8 py-4 border border-[#7A8B94]/30 text-[#7A8B94] font-bold text-sm uppercase tracking-widest hover:border-[#00FFD1] hover:text-[#00FFD1] transition-colors">
                View Specs
              </button>
            </div>

            <div className="mt-12 grid grid-cols-3 gap-8">
              {[
                { value: "<3.2s", label: "Latency" },
                { value: "94.3%", label: "Accuracy" },
                { value: "2.4M", label: "Processed" },
              ].map((stat, i) => (
                <div key={i}>
                  <div className="text-2xl font-bold text-[#00FFD1] font-mono">{stat.value}</div>
                  <div className="text-xs text-[#7A8B94] mt-1 uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Terminal Panel */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div
              className="relative p-6 overflow-hidden"
              style={{
                background: "linear-gradient(180deg, rgba(0,255,209,0.05) 0%, rgba(5,15,20,0.8) 100%)",
                border: "1px solid rgba(0, 255, 209, 0.2)",
              }}
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#FF007F] via-[#00FFD1] to-[#FF007F] opacity-60" />
              <div className="flex items-center gap-2 mb-6">
                <div className="w-3 h-3 rounded-full bg-[#FF007F]" />
                <div className="w-3 h-3 rounded-full bg-[#FF8C00]" />
                <div className="w-3 h-3 rounded-full bg-[#00FFD1]" />
                <span className="ml-2 text-xs text-[#7A8B94] font-mono">neural_uplink.exe</span>
              </div>
              <div className="space-y-3 font-mono text-sm">
                {terminalLines.map((line, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + i * 0.3, duration: 0.5 }}
                    className="flex items-start gap-2"
                  >
                    <span className="text-[#FF007F]">❯</span>
                    <span className={line.includes("COMPLETE") ? "text-[#00FFD1]" : line.includes("ERROR") ? "text-red-500" : "text-[#7A8B94]"}>
                      {line}
                    </span>
                  </motion.div>
                ))}
                <motion.div
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                  className="w-3 h-5 bg-[#00FFD1] ml-5"
                />
              </div>
            </div>

            {/* Decorative circles */}
            <div className="absolute -top-10 -right-10 w-40 h-40 border border-[#00FFD1]/10 rounded-full" />
            <div className="absolute -bottom-5 -left-5 w-24 h-24 border border-[#FF007F]/10 rounded-full" />
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="relative z-20 py-24 px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="text-xs font-mono text-[#00FFD1] uppercase tracking-[0.3em] mb-4">Module Registry</div>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
              ACTIVE <span className="text-[#FF007F]">PROTOCOLS</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {features.map((f, i) => (
              <HolographicCard key={i} {...f} delay={i * 0.1} />
            ))}
          </div>
        </div>
      </section>

      {/* Data Flow Visualization */}
      <section className="relative z-20 py-24 px-8 border-t border-[#00FFD1]/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="text-xs font-mono text-[#FF007F] uppercase tracking-[0.3em]">Core Technology</div>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                NEURAL <span className="text-[#00FFD1]">EXTRACTION</span> ENGINE
              </h2>
              <p className="text-[#7A8B94] leading-relaxed">
                Our proprietary NLP stack processes 2.4 million documents using transformer-based attention mechanisms.
                Every PDF is parsed through 7 layers of semantic analysis, relationship mapping, and intent classification.
              </p>
              <div className="flex gap-4 pt-4">
                {["PDF", "EPUB", "DOCX", "TXT"].map((format, i) => (
                  <div
                    key={i}
                    className="px-4 py-2 border border-[#00FFD1]/20 text-[#00FFD1] text-xs font-mono uppercase tracking-wider"
                  >
                    {format}
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Animated diagram */}
              <div className="relative aspect-square max-w-lg mx-auto">
                <svg viewBox="0 0 400 400" className="w-full h-full">
                  {/* Center circle */}
                  <circle cx="200" cy="200" r="40" fill="none" stroke="#00FFD1" strokeWidth="1" opacity="0.6">
                    <animate attributeName="r" values="40;45;40" dur="3s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0.6;0.3;0.6" dur="3s" repeatCount="indefinite" />
                  </circle>
                  <circle cx="200" cy="200" r="15" fill="#00FFD1" opacity="0.8">
                    <animate attributeName="r" values="15;18;15" dur="2s" repeatCount="indefinite" />
                  </circle>

                  {/* Orbiting nodes */}
                  {[0, 90, 180, 270].map((angle, i) => (
                    <g key={i}>
                      <line
                        x1="200"
                        y1="200"
                        x2={200 + Math.cos((angle * Math.PI) / 180) * 120}
                        y2={200 + Math.sin((angle * Math.PI) / 180) * 120}
                        stroke="#00FFD1"
                        strokeWidth="0.5"
                        opacity="0.3"
                      >
                        <animate attributeName="opacity" values="0.3;0.1;0.3" dur={`${3 + i}s`} repeatCount="indefinite" />
                      </line>
                      <circle
                        cx={200 + Math.cos((angle * Math.PI) / 180) * 120}
                        cy={200 + Math.sin((angle * Math.PI) / 180) * 120}
                        r="8"
                        fill={i % 2 === 0 ? "#00FFD1" : "#FF007F"}
                        opacity="0.7"
                      >
                        <animateTransform
                          attributeName="transform"
                          type="rotate"
                          from={`${angle} 200 200`}
                          to={`${angle + 360} 200 200`}
                          dur="20s"
                          repeatCount="indefinite"
                        />
                      </circle>
                    </g>
                  ))}

                  {/* Outer ring */}
                  <circle cx="200" cy="200" r="120" fill="none" stroke="#FF007F" strokeWidth="0.5" opacity="0.2">
                    <animate attributeName="r" values="120;125;120" dur="4s" repeatCount="indefinite" />
                  </circle>
                  <circle cx="200" cy="200" r="160" fill="none" stroke="#00FFD1" strokeWidth="0.3" opacity="0.1">
                    <animate attributeName="r" values="160;165;160" dur="5s" repeatCount="indefinite" />
                  </circle>
                </svg>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-20 py-32 px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center relative"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-[#00FFD1]/5 to-transparent pointer-events-none" />
          <div className="relative z-10">
            <div className="text-xs font-mono text-[#FF007F] uppercase tracking-[0.3em] mb-6">Final Stage</div>
            <h2 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              SYNC <span className="text-[#00FFD1]">NEURAL</span><br />
              UPLINK NOW
            </h2>
            <p className="text-[#7A8B94] mb-12 max-w-xl mx-auto leading-relaxed">
              Initialize your reading evolution. No latency. No limits. Pure knowledge extraction.
            </p>

            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(0, 255, 209, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-5 bg-transparent border-2 border-[#00FFD1] text-[#00FFD1] font-bold text-lg uppercase tracking-widest hover:bg-[#00FFD1] hover:text-black transition-all duration-500"
            >
              Establish Connection
            </motion.button>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="relative z-20 py-12 px-8 border-t border-[#00FFD1]/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <Cpu size={18} className="text-[#00FFD1]" />
            <span className="font-bold tracking-widest uppercase text-sm">RatioReader::v3.2</span>
          </div>
          <div className="flex gap-8 text-xs font-mono text-[#7A8B94] uppercase tracking-wider">
            {["Encryption", "Protocol", "Uplink"].map((item, i) => (
              <a key={i} href="#" className="hover:text-[#00FFD1] transition-colors">{item}</a>
            ))}
          </div>
          <div className="text-xs font-mono text-[#7A8B94]">
            © 2026_RATIO_READER // ALL_SYSTEMSOperational
          </div>
        </div>
      </footer>
    </div>
  );
}
