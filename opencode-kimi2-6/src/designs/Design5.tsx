import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, BookMarked, Sparkles, Lightbulb, Feather } from "lucide-react";

function ParticleField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let w = canvas.width = window.innerWidth;
    let h = canvas.height = window.innerHeight;

    const particles: { x: number; y: number; vx: number; vy: number; size: number; alpha: number }[] = [];
    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 2 + 0.5,
        alpha: Math.random() * 0.5 + 0.1,
      });
    }

    let animationId: number;
    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = w;
        if (p.x > w) p.x = 0;
        if (p.y < 0) p.y = h;
        if (p.y > h) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(212, 192, 143, ${p.alpha})`;
        ctx.fill();
      });

      // Draw connections
      particles.forEach((p1, i) => {
        particles.slice(i + 1).forEach((p2) => {
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 200) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(212, 192, 143, ${0.08 * (1 - dist / 200)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });

      animationId = requestAnimationFrame(draw);
    };

    draw();

    const resize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none" style={{ zIndex: 1 }} />;
}

function FeatureBlock({ icon, title, desc, index }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ delay: index * 0.15, duration: 0.8, ease: "easeOut" }}
      className="group relative py-16 border-t border-[#D4C08F]/10"
    >
      <div className="flex flex-col md:flex-row md:items-start gap-8 md:gap-16">
        <div className="flex-shrink-0">
          <div className="w-12 h-12 rounded-full border border-[#D4C08F]/20 flex items-center justify-center text-[#D4C08F] group-hover:border-[#D4C08F]/50 group-hover:bg-[#D4C08F]/5 transition-all duration-500">
            {icon}
          </div>
        </div>
        <div>
          <div className="flex items-baseline gap-4 mb-3">
            <span className="text-xs font-bold tracking-[0.3em] text-[#D4C08F]/40 uppercase">{String(index + 1).padStart(2, "0")}</span>
            <h3 className="text-2xl md:text-3xl font-bold tracking-tight" style={{ fontFamily: "'Cinzel', serif", color: "#E8E4DC" }}>
              {title}
            </h3>
          </div>
          <p className="text-base md:text-lg leading-relaxed max-w-lg" style={{ color: "#888888", fontFamily: "'EB Garamond', serif" }}>
            {desc}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export function Design5() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef });
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.8], [1, 0.95]);
  const [navVisible, setNavVisible] = useState(false);

  useEffect(() => {
    document.body.style.backgroundColor = "#0C0C10";
    const handleScroll = () => setNavVisible(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll);
    return () => {
      document.body.style.backgroundColor = "";
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const features = [
    {
      icon: <BookMarked size={20} />,
      title: "Essence Extraction",
      desc: "Our algorithms read between the lines, capturing not just what was written, but what was meant. Every nuance, every subtext, every whisper of insight is distilled into pure clarity.",
    },
    {
      icon: <Sparkles size={20} />,
      title: "Luminous Summaries",
      desc: "Beautifully crafted summaries that honor the original author's voice. Not robotic reduction — poetic condensation that preserves the soul of the text while revealing its architecture.",
    },
    {
      icon: <Lightbulb size={20} />,
      title: "Insight Illumination",
      desc: "Hidden connections surface like stars appearing at dusk. Cross-document patterns, thematic echoes, and conceptual resonances emerge from the darkness into view.",
    },
    {
      icon: <Feather size={20} />,
      title: "Weightless Library",
      desc: "A curated space where every document finds its place. Browse, revisit, and discover anew. Your knowledge base becomes a library of light.",
    },
  ];

  return (
    <div className="w-full relative" style={{ backgroundColor: "#0C0C10", color: "#E8E4DC" }}>
      <ParticleField />

      {/* Fixed Navigation */}
      <motion.nav
        animate={{
          y: navVisible ? 0 : -100,
          opacity: navVisible ? 1 : 0,
        }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="fixed top-0 left-0 right-0 z-50 px-8 py-6 flex items-center justify-between"
        style={{
          backgroundColor: "rgba(12, 12, 16, 0.9)",
          backdropFilter: "blur(20px)",
          borderBottom: "1px solid rgba(212, 192, 143, 0.1)",
        }}
      >
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full border border-[#D4C08F]/30 flex items-center justify-center">
            <span className="text-sm font-bold" style={{ fontFamily: "'Cinzel', serif", color: "#D4C08F" }}>R</span>
          </div>
          <span className="text-sm font-bold tracking-[0.2em] uppercase" style={{ fontFamily: "'Cinzel', serif", color: "#E8E4DC" }}>
            Ratio Reader
          </span>
        </div>
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="px-6 py-2.5 border border-[#D4C08F]/30 text-[#D4C08F] text-xs font-bold uppercase tracking-widest hover:bg-[#D4C08F]/10 transition-all duration-500"
        >
          Enter
        </motion.button>
      </motion.nav>

      {/* Hero Section */}
      <motion.section
        ref={heroRef}
        style={{ opacity: heroOpacity, scale: heroScale }}
        className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 text-center"
      >
        {/* Central glowing orb */}
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(212,192,143,0.08) 0%, transparent 70%)",
            filter: "blur(40px)",
          }}
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
          className="relative z-10"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mb-10"
          >
            <div className="w-20 h-[1px] bg-[#D4C08F] mx-auto mb-8" />
            <p className="text-xs font-bold tracking-[0.4em] uppercase" style={{ color: "#D4C08F", fontFamily: "'Cinzel', serif" }}>
              The Art of Understanding
            </p>
          </motion.div>

          <h1
            className="text-5xl md:text-7xl lg:text-9xl font-bold leading-[0.9] mb-10 tracking-tight"
            style={{ fontFamily: "'Bodoni Moda', serif", color: "#E8E4DC" }}
          >
            <motion.span
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="block"
            >
              Read
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.7 }}
              className="block italic"
              style={{ color: "#D4C08F" }}
            >
              Deeper
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="text-lg md:text-xl leading-relaxed max-w-md mx-auto mb-12"
            style={{ color: "#888888", fontFamily: "'EB Garamond', serif" }}
          >
            Upload any PDF and watch as its essence emerges from the page — clear, luminous, and profoundly understood.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 60px rgba(212, 192, 143, 0.2)" }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-10 py-4 overflow-hidden transition-all duration-500"
              style={{
                border: "1px solid rgba(212, 192, 143, 0.3)",
                fontFamily: "'Cinzel', serif",
              }}
            >
              <span className="relative z-10 text-sm font-bold uppercase tracking-[0.3em] text-[#D4C08F] group-hover:text-[#0C0C10] transition-colors duration-500">
                Begin the Journey
              </span>
              <motion.div
                className="absolute inset-0 bg-[#D4C08F]"
                initial={{ y: "100%" }}
                whileHover={{ y: 0 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              />
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-12 flex flex-col items-center gap-3"
        >
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#888888]">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown size={14} className="text-[#D4C08F]" />
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Manifesto */}
      <section className="relative z-10 py-40 px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="text-center"
          >
            <div className="w-16 h-[1px] bg-[#D4C08F]/30 mx-auto mb-12" />
            <blockquote
              className="text-3xl md:text-5xl lg:text-6xl leading-tight mb-12"
              style={{ fontFamily: "'Bodoni Moda', serif", color: "#E8E4DC" }}
            >
              "In the space between<br />
              <span className="italic" style={{ color: "#D4C08F" }}>the words</span>,<br />
              meaning waits<br />
              to be <span className="italic" style={{ color: "#D4C08F" }}>found.</span>"
            </blockquote>
            <div className="w-16 h-[1px] bg-[#D4C08F]/30 mx-auto" />
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="relative z-10 py-24 px-8">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <div className="flex items-center gap-6 mb-6">
              <div className="w-12 h-[1px] bg-[#D4C08F]/30" />
              <span className="text-xs font-bold tracking-[0.3em] uppercase" style={{ color: "#D4C08F", fontFamily: "'Cinzel', serif" }}>
                Capabilities
              </span>
            </div>
            <h2
              className="text-4xl md:text-6xl font-bold tracking-tight"
              style={{ fontFamily: "'Bodoni Moda', serif", color: "#E8E4DC" }}
            >
              What Emerges
            </h2>
          </motion.div>

          <div>
            {features.map((feature, i) => (
              <FeatureBlock key={i} {...feature} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Stats - Minimal */}
      <section className="relative z-10 py-32 px-8 border-t border-[#D4C08F]/5">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {[
              { value: "2.4M", label: "Documents" },
              { value: "94%", label: "Precision" },
              { value: "< 3s", label: "Latency" },
              { value: "∞", label: "Potential" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.8 }}
                className="text-center"
              >
                <div
                  className="text-5xl md:text-6xl font-bold mb-2"
                  style={{ fontFamily: "'Bodoni Moda', serif", color: "#D4C08F" }}
                >
                  {stat.value}
                </div>
                <div className="text-xs font-bold uppercase tracking-[0.3em]" style={{ color: "#888888", fontFamily: "'Cinzel', serif" }}>
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative z-10 py-40 px-8">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <div className="w-24 h-[1px] bg-[#D4C08F] mx-auto mb-12" />
            <h2
              className="text-4xl md:text-6xl font-bold mb-8 leading-tight"
              style={{ fontFamily: "'Bodoni Moda', serif", color: "#E8E4DC" }}
            >
              Step Into<br />
              <span className="italic" style={{ color: "#D4C08F" }}>the Light</span>
            </h2>
            <p
              className="text-lg mb-12 max-w-lg mx-auto"
              style={{ color: "#888888", fontFamily: "'EB Garamond', serif" }}
            >
              Your documents hold more than information. They hold meaning. Let us help you see it.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-5 text-sm font-bold uppercase tracking-[0.3em] transition-all duration-500"
              style={{
                backgroundColor: "#D4C08F",
                color: "#0C0C10",
                fontFamily: "'Cinzel', serif",
              }}
            >
              Illuminate Your Library
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-16 px-8 border-t border-[#D4C08F]/5" style={{ backgroundColor: "#08080A" }}>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full border border-[#D4C08F]/20 flex items-center justify-center">
              <span className="text-xs font-bold" style={{ fontFamily: "'Cinzel', serif", color: "#D4C08F" }}>R</span>
            </div>
            <span className="text-sm font-bold tracking-[0.2em] uppercase" style={{ fontFamily: "'Cinzel', serif", color: "#E8E4DC" }}>
              Ratio Reader
            </span>
          </div>
          <div className="flex gap-12 text-xs font-bold uppercase tracking-[0.2em]" style={{ color: "#888888", fontFamily: "'Cinzel', serif" }}>
            <a href="#" className="hover:text-[#D4C08F] transition-colors duration-300">Privacy</a>
            <a href="#" className="hover:text-[#D4C08F] transition-colors duration-300">Terms</a>
            <a href="#" className="hover:text-[#D4C08F] transition-colors duration-300">Contact</a>
          </div>
          <p className="text-xs" style={{ color: "#555", fontFamily: "'EB Garamond', serif" }}>
            © 2026 Ratio Reader
          </p>
        </div>
      </footer>
    </div>
  );
}
