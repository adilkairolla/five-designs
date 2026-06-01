import { useEffect, useState, useMemo, useCallback } from "react";

interface Node {
  id: string;
  x: number;
  y: number;
  size: number;
  phase: number;
}

interface Connection {
  from: string;
  to: string;
  pulse: number;
}

function useNeuralNetwork(count: number) {
  const [nodes] = useState<Node[]>(() =>
    Array.from({ length: count }, (_, i) => ({
      id: `n${i}`,
      x: Math.random(),
      y: Math.random(),
      size: Math.random() * 2 + 1,
      phase: Math.random() * Math.PI * 2,
    }))
  );

  const connections = useMemo(() => {
    const conns: Connection[] = [];
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dx = nodes[i].x - nodes[j].x;
        const dy = nodes[i].y - nodes[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 0.35) {
          conns.push({
            from: nodes[i].id,
            to: nodes[j].id,
            pulse: Math.random(),
          });
        }
      }
    }
    return conns.sort(() => Math.random() - 0.5).slice(0, Math.floor(conns.length * 0.6));
  }, [nodes]);

  return { nodes, connections };
}

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
}

function useParticles(count: number) {
  const [particles] = useState<Particle[]>(() =>
    Array.from({ length: count }, () => ({
      x: Math.random(),
      y: Math.random(),
      vx: (Math.random() - 0.5) * 0.001,
      vy: (Math.random() - 0.5) * 0.001,
      life: Math.random(),
      maxLife: Math.random() * 3 + 2,
    }))
  );
  return particles;
}

export default function Design2() {
  const [time, setTime] = useState(0);
  const [visible, setVisible] = useState(false);
  const { nodes, connections } = useNeuralNetwork(60);
  const particles = useParticles(40);

  useEffect(() => {
    setVisible(true);
    const interval = setInterval(() => setTime((t) => t + 1), 50);
    return () => clearInterval(interval);
  }, []);

  const now = time * 0.01;

  const floatingCards = [
    {
      title: "Instant Summary",
      desc: "Distill 100 pages into what matters most.",
      icon: "⚡",
      delay: 0,
      color: "#00e5ff",
    },
    {
      title: "Smart Highlights",
      desc: "AI-curated key passages and quotes.",
      icon: "💎",
      delay: 0.15,
      color: "#ff2d95",
    },
    {
      title: "Context Hints",
      desc: "Understand complex topics with guided hints.",
      icon: "🧠",
      delay: 0.3,
      color: "#7c5cbf",
    },
    {
      title: "Cross-reference",
      desc: "Connect ideas across multiple documents.",
      icon: "🔗",
      delay: 0.45,
      color: "#4cd964",
    },
  ];

  return (
    <div className="min-h-screen bg-[#06081a] text-white overflow-hidden relative">
      {/* Neural network canvas background */}
      <svg
        className="absolute inset-0 w-full h-full opacity-30"
        style={{ filter: "blur(1px)" }}
      >
        <defs>
          <linearGradient id="neuralGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00e5ff" stopOpacity="0.6" />
            <stop offset="50%" stopColor="#ff2d95" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#7c5cbf" stopOpacity="0.6" />
          </linearGradient>
          <filter id="neuralGlow">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        {connections.map((conn, i) => {
          const from = nodes.find((n) => n.id === conn.from)!;
          const to = nodes.find((n) => n.id === conn.to)!;
          const pulse = Math.sin(now + conn.pulse * Math.PI * 2) * 0.5 + 0.5;
          const opacity = pulse * 0.3;
          return (
            <line
              key={i}
              x1={from.x * 100 + "%"}
              y1={from.y * 100 + "%"}
              x2={to.x * 100 + "%"}
              y2={to.y * 100 + "%"}
              stroke={`rgba(0,229,255,${opacity})`}
              strokeWidth="0.5"
              className="animate-neural-drift"
              style={{ animationDelay: `${i * 0.02}s` }}
            />
          );
        })}
        {nodes.map((node, i) => {
          const pulse = Math.sin(now + node.phase) * 0.5 + 0.5;
          const r = node.size + pulse * 1.5;
          return (
            <circle
              key={node.id}
              cx={node.x * 100 + "%"}
              cy={node.y * 100 + "%"}
              r={r}
              fill={pulse > 0.7 ? "#00e5ff" : "#1a3a5c"}
              className="animate-glow-pulse"
              style={{ animationDelay: `${i * 0.03}s` }}
            />
          );
        })}
      </svg>

      {/* Floating particles */}
      {particles.map((p, i) => {
        const px = (p.x + p.vx * time) % 1;
        const py = (p.y + p.vy * time) % 1;
        const opacity = Math.sin(now + p.life) * 0.3 + 0.3;
        return (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-cyan-400"
            style={{
              left: `${px * 100}%`,
              top: `${py * 100}%`,
              opacity,
              boxShadow: "0 0 6px #00e5ff, 0 0 12px #00e5ff",
            }}
          />
        );
      })}

      {/* Ambient orbs */}
      <div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-cyan-500/5 blur-[80px]"
        style={{ animation: "float-slow 10s ease-in-out infinite" }}
      />
      <div
        className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-magenta-500/5 blur-[60px]"
        style={{ animation: "float-slow 12s ease-in-out infinite reverse" }}
      />

      {/* Content */}
      <div className="relative z-10">
        {/* Nav bar */}
        <nav className="flex items-center justify-between px-6 py-5">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded bg-gradient-to-br from-cyan-400 to-magenta-500 animate-glow-pulse" />
            <span className="text-xl font-bold tracking-tight">RATIO</span>
          </div>
          <div className="hidden md:flex gap-8 text-sm text-white/50">
            <a href="#">Product</a>
            <a href="#">How It Works</a>
            <a href="#">Pricing</a>
            <a href="#">About</a>
          </div>
          <button className="bg-white/10 backdrop-blur-sm border border-white/20 px-5 py-2 rounded-full text-sm hover:bg-white/20 transition">
            Get Started
          </button>
        </nav>

        {/* Hero */}
        <section className="px-6 lg:px-20 pt-24 pb-32 text-center">
          <span
            className={`inline-block px-3 py-1 rounded-full border border-cyan-500/30 text-cyan-400 text-xs tracking-[0.3em] mb-8 font-mono ${
              visible ? "animate-fade-up" : "opacity-0"
            }`}
            style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}
          >
            AI-POWERED READING
          </span>
          <h1
            className={`font-display text-[clamp(2.5rem,7vw,5rem)] leading-[1.05] tracking-tighter font-black ${
              visible ? "animate-fade-up" : "opacity-0"
            }`}
            style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}
          >
            Read <span className="bg-gradient-to-r from-cyan-400 via-magenta-400 to-purple-400 bg-clip-text text-transparent">Smarter</span>
            <br />
            Not Harder
          </h1>
          <p
            className={`mt-6 text-lg text-white/50 max-w-2xl mx-auto leading-relaxed ${
              visible ? "animate-fade-up" : "opacity-0"
            }`}
            style={{ animationDelay: "0.6s", animationFillMode: "forwards" }}
          >
            Transform dense PDFs into crystal-clear understanding.
            Neural analysis maps concepts, extracts insights, and delivers
            the knowledge you need in seconds.
          </p>
          <div
            className={`mt-10 flex flex-col sm:flex-row gap-4 justify-center ${
              visible ? "animate-fade-up" : "opacity-0"
            }`}
            style={{ animationDelay: "0.8s", animationFillMode: "forwards" }}
          >
            <button className="bg-gradient-to-r from-cyan-500 to-magenta-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg hover:shadow-cyan-500/30 transition-all">
              Start Free Trial →
            </button>
            <button className="border border-white/20 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/5 transition">
              See How It Works
            </button>
          </div>
        </section>

        {/* Floating feature cards */}
        <section className="px-6 lg:px-20 pb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {floatingCards.map((card, i) => (
              <div
                key={i}
                className={`bg-white/5 backdrop-blur-sm border border-white/10 rounded-none p-8 hover:border-cyan-500/30 transition-all hover:-translate-y-1 ${
                  visible ? "animate-fade-up" : "opacity-0"
                }`}
                style={{
                  animationDelay: `${0.8 + i * 0.15}s`,
                  animationFillMode: "forwards",
                  borderLeft: `2px solid ${card.color}`,
                }}
              >
                <div className="text-3xl mb-4">{card.icon}</div>
                <h3
                  className="text-lg font-bold mb-2"
                  style={{ color: card.color }}
                >
                  {card.title}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Process flow with animated connections */}
        <section className="px-6 lg:px-20 pb-32 relative">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-xs tracking-[0.3em] uppercase text-white/40 mb-4 block">
              How It Works
            </span>
            <h2 className="font-display text-4xl font-bold mb-16">
              From Upload to
              <br />
              <span className="text-cyan-400">Understanding</span>
            </h2>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 max-w-5xl mx-auto">
            {[
              "📄 Upload PDF",
              "🧠 Neural Analysis",
              "📊 Extract Insights",
              "✨ Summarize & Deliver",
            ].map((step, i) => (
              <div key={i} className="flex items-center">
                <div
                  className={`bg-white/5 backdrop-blur-sm border border-white/10 rounded-none p-6 text-center min-w-[140px] ${
                    visible ? "animate-fade-up" : "opacity-0"
                  }`}
                  style={{ animationDelay: `${1.2 + i * 0.2}s`, animationFillMode: "forwards" }}
                >
                  <div className="text-2xl mb-2">{step.split(" ")[0]}</div>
                  <div className="text-sm text-white/60">
                    {step.split(" ").slice(1).join(" ")}
                  </div>
                </div>
                {i < 3 && (
                  <div
                    className="hidden md:block text-cyan-400/50 text-2xl animate-pulse"
                    style={{ animationDelay: `${1.5 + i * 0.2}s` }}
                  >
                    →
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="relative px-6 lg:px-20 py-24 bg-[#0a0e1a]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(ellipse at 50% 0%, rgba(0,229,255,0.1) 0%, transparent 60%)`,
            }}
          />
          <div className="relative max-w-3xl mx-auto text-center">
            <h2 className="font-display text-[clamp(2rem,5vw,3.5rem)] font-black text-white mb-6">
              Ready to Decode Your
              <br />
              <span className="bg-gradient-to-r from-cyan-400 to-magenta-400 bg-clip-text text-transparent">
                Next Document?
              </span>
            </h2>
            <p className="text-white/40 max-w-lg mx-auto mb-10 leading-relaxed">
              Start your free trial today. No credit card required.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-magenta-500 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-cyan-500/30 transition">
                Begin Free Trial
              </button>
              <button className="text-white/60 hover:text-white px-8 py-3 rounded-full font-semibold transition">
                Contact Sales
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}