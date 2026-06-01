import { useEffect, useRef } from "react";
import { DesignSwitcher } from "@/components/DesignSwitcher";
import { motion } from "motion/react";
import { Cpu, Zap, Eye, Brain, Sparkles, ArrowRight } from "lucide-react";

function NeuralCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;
    let animId: number;
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const nodes: { x: number; y: number; vx: number; vy: number; radius: number; color: string }[] = [];
    const colors = ["#00f5ff", "#ff00ff", "#7b2fff", "#00ff88"];
    for (let i = 0; i < 60; i++) {
      nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        radius: Math.random() * 2 + 1,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (const node of nodes) {
        node.x += node.vx;
        node.y += node.vy;
        if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1;

        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = node.color;
        ctx.shadowBlur = 15;
        ctx.shadowColor = node.color;
        ctx.fill();
      }

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 150) {
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = nodes[i].color;
            ctx.globalAlpha = (1 - dist / 150) * 0.3;
            ctx.lineWidth = 0.5;
            ctx.shadowBlur = 8;
            ctx.shadowColor = nodes[i].color;
            ctx.stroke();
            ctx.globalAlpha = 1;
          }
        }
      }
      animId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />;
}

function GlowText({ children, color = "#00f5ff", className = "" }: { children: React.ReactNode; color?: string; className?: string }) {
  return (
    <span className={className} style={{ color, textShadow: `0 0 30px ${color}, 0 0 60px ${color}40, 0 0 120px ${color}20` }}>
      {children}
    </span>
  );
}

function Scanline() {
  return (
    <div className="absolute inset-0 pointer-events-none z-10" style={{
      backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.08) 2px, rgba(0,0,0,0.08) 4px)",
    }} />
  );
}

function FeatureCard({ icon: Icon, title, desc, delay }: { icon: React.ReactNode; title: string; desc: string; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.6 }}
      className="relative group"
    >
      <div className="absolute -inset-px rounded-sm opacity-40 group-hover:opacity-100 transition-opacity" style={{
        background: "linear-gradient(135deg, #00f5ff20, #ff00ff20, #7b2fff20)",
      }} />
      <div className="relative bg-[#0a0a1a]/90 backdrop-blur-sm border border-white/5 rounded-sm p-6 hover:border-[#00f5ff]/30 transition-all duration-500">
        <div className="mb-4 text-[#00f5ff] group-hover:text-[#ff00ff] transition-colors">
          {Icon}
        </div>
        <h3 className="text-lg font-bold mb-2 text-white" style={{ fontFamily: "'Syne', sans-serif" }}>{title}</h3>
        <p className="text-white/50 text-sm leading-relaxed" style={{ fontFamily: "'Space Mono', monospace" }}>{desc}</p>
      </div>
    </motion.div>
  );
}

export function Synaptic() {
  return (
    <div className="relative min-h-screen bg-[#050510] text-white overflow-hidden" style={{ fontFamily: "'Syne', sans-serif" }}>
      <NeuralCanvas />
      <Scanline />
      <DesignSwitcher />

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full pointer-events-none" style={{
        background: "radial-gradient(circle, #7b2fff15 0%, #ff00ff08 40%, transparent 70%)",
      }} />

      <section className="relative z-20 max-w-6xl mx-auto px-6 pt-32 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="flex items-center gap-3 mb-8"
        >
          <div className="h-px flex-1 max-w-20" style={{ background: "linear-gradient(to right, #00f5ff, transparent)" }} />
          <span className="text-xs tracking-[0.3em] uppercase text-[#00f5ff]/70" style={{ fontFamily: "'Space Mono', monospace" }}>
            neural reading interface v2.4
          </span>
          <div className="h-px flex-1 max-w-20" style={{ background: "linear-gradient(to left, #00f5ff, transparent)" }} />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="text-5xl md:text-8xl font-bold leading-[0.9] mb-8"
        >
          Your <GlowText color="#00f5ff">brain</GlowText>
          <br />
          on <GlowText color="#ff00ff">reading</GlowText>
          <br />
          <span className="text-white/20">is about to</span>
          <br />
          <GlowText color="#7b2fff">evolve.</GlowText>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 1 }}
          className="max-w-lg text-white/40 text-lg leading-relaxed mb-12"
          style={{ fontFamily: "'Space Mono', monospace" }}
        >
          Ratio Reader doesn't summarize — it <span className="text-[#00f5ff]">synthesizes</span>. AI extracts patterns, surfaces connections, and delivers insights your neurons would take hours to form.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="flex gap-4 flex-wrap"
        >
          <button className="group relative overflow-hidden px-8 py-4 text-sm tracking-wider uppercase border border-[#00f5ff] text-[#00f5ff] hover:text-black transition-colors duration-300" style={{ fontFamily: "'Space Mono', monospace" }}>
            <span className="absolute inset-0 bg-[#00f5ff] translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            <span className="relative flex items-center gap-2">
              <Cpu className="w-4 h-4" />
              initiate scan
            </span>
          </button>
          <button className="px-8 py-4 text-sm tracking-wider uppercase text-white/30 hover:text-white/60 transition-colors" style={{ fontFamily: "'Space Mono', monospace" }}>
            watch demo →
          </button>
        </motion.div>
      </section>

      <section className="relative z-20 max-w-6xl mx-auto px-6 py-24">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="text-xs tracking-[0.3em] uppercase text-[#ff00ff]/70" style={{ fontFamily: "'Space Mono', monospace" }}>
            // core.modules
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 leading-tight">
            Four <GlowText color="#ff00ff">neural modules</GlowText>
            <br />
            <span className="text-white/20">one powerful mind</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-4">
          <FeatureCard
            icon={<Eye className="w-6 h-6" />}
            title="INSIGHT EXTRACTION"
            desc="Maps document topology, identifies thesis clusters, surfaces the 20% that contains 80% of the value."
            delay={0}
          />
          <FeatureCard
            icon={<Zap className="w-6 h-6" />}
            title="QUOTE SYNTHESIS"
            desc="Locates high-signal passages. The sentences that rewire your thinking. Presented with full contextual weight."
            delay={0.15}
          />
          <FeatureCard
            icon={<Brain className="w-6 h-6" />}
            title="CONTEXT MAPPING"
            desc="Builds a knowledge graph around your document. Hints that connect new ideas to what you already know."
            delay={0.3}
          />
          <FeatureCard
            icon={<Sparkles className="w-6 h-6" />}
            title="MEMORY ANCHORS"
            desc="Generates spaced-repetition prompts from key concepts. Your reading becomes permanent, not ephemeral."
            delay={0.45}
          />
        </div>
      </section>

      <section className="relative z-20 max-w-6xl mx-auto px-6 py-24">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="relative overflow-hidden border border-white/5 bg-[#0a0a1a]/60 backdrop-blur-sm p-8 md:p-16"
        >
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full pointer-events-none" style={{
            background: "radial-gradient(circle, #ff00ff15, transparent 70%)",
          }} />

          <span className="text-xs tracking-[0.3em] uppercase text-[#7b2fff]/70" style={{ fontFamily: "'Space Mono', monospace" }}>
            // processing.cycle
          </span>
          <div className="mt-8 grid md:grid-cols-3 gap-8">
            {[
              { step: "01", label: "UPLOAD", desc: "Drop your PDF. Any length. Any complexity." },
              { step: "02", label: "ANALYZE", desc: "Neural parsing in ~30 seconds. Full semantic mapping." },
              { step: "03", label: "ABSORB", desc: "Read the distilled essence. Retain 10x more." },
            ].map((item, i) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
              >
                <div className="text-5xl font-bold mb-4" style={{
                  color: ["#00f5ff", "#ff00ff", "#7b2fff"][i],
                  textShadow: `0 0 20px ${["#00f5ff", "#ff00ff", "#7b2fff"][i]}40`,
                  fontFamily: "'Space Mono', monospace",
                }}>
                  {item.step}
                </div>
                <div className="text-lg font-bold mb-2 tracking-wider" style={{ fontFamily: "'Syne', sans-serif" }}>
                  {item.label}
                </div>
                <p className="text-white/40 text-sm" style={{ fontFamily: "'Space Mono', monospace" }}>
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <section className="relative z-20 max-w-6xl mx-auto px-6 py-24 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-8">
            <GlowText color="#00f5ff">Upload</GlowText>.{" "}
            <GlowText color="#ff00ff">Process</GlowText>.{" "}
            <GlowText color="#7b2fff">Transcend</GlowText>.
          </h2>
          <button className="group relative overflow-hidden px-12 py-5 text-sm tracking-wider uppercase bg-[#00f5ff] text-black font-bold hover:shadow-[0_0_40px_#00f5ff80] transition-shadow duration-500" style={{ fontFamily: "'Space Mono', monospace" }}>
            <span className="flex items-center gap-2">
              <ArrowRight className="w-4 h-4" />
              begin neural reading
            </span>
          </button>
        </motion.div>
      </section>

      <footer className="relative z-20 py-8 text-center text-white/20 text-xs tracking-wider uppercase" style={{ fontFamily: "'Space Mono', monospace" }}>
        ratio reader // neural interface // v2.4.1
      </footer>
    </div>
  );
}
