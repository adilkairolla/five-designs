import "@fontsource/ibm-plex-mono/400.css";
import "@fontsource/ibm-plex-mono/700.css";
import "@fontsource/space-mono/400.css";
import "@fontsource/space-mono/700.css";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const MONO = "'Space Mono', 'IBM Plex Mono', monospace";

function GlitchText({ text, className = "", style = {} }: { text: string; className?: string; style?: React.CSSProperties }) {
  const [glitch, setGlitch] = useState(false);
  useEffect(() => {
    const interval = setInterval(() => {
      setGlitch(true);
      setTimeout(() => setGlitch(false), 150);
    }, 4000 + Math.random() * 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <span className={className} style={{ position: "relative", display: "inline-block", ...style }}>
      {text}
      {glitch && (
        <>
          <span style={{ position: "absolute", top: 0, left: "2px", color: "#ff006e", opacity: 0.8, clipPath: "inset(30% 0 50% 0)", mixBlendMode: "screen" }} aria-hidden>{text}</span>
          <span style={{ position: "absolute", top: 0, left: "-2px", color: "#00f5d4", opacity: 0.8, clipPath: "inset(60% 0 10% 0)", mixBlendMode: "screen" }} aria-hidden>{text}</span>
        </>
      )}
    </span>
  );
}

function TypewriterText({ text, delay = 0, speed = 40 }: { text: string; delay?: number; speed?: number }) {
  const [displayed, setDisplayed] = useState("");
  const [started, setStarted] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(t);
  }, [delay]);
  useEffect(() => {
    if (!started) return;
    let i = 0;
    const timer = setInterval(() => {
      if (i < text.length) {
        setDisplayed(text.slice(0, i + 1));
        i++;
      } else {
        clearInterval(timer);
      }
    }, speed);
    return () => clearInterval(timer);
  }, [started, text, speed]);
  return <span>{displayed}{started && displayed.length < text.length && <span style={{ animation: "blink 0.7s step-end infinite" }}>_</span>}</span>;
}

function ScanLine() {
  return (
    <motion.div
      animate={{ top: ["0%", "100%"] }}
      transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      style={{ position: "fixed", top: 0, left: 0, right: 0, height: "2px", background: "linear-gradient(to right, transparent, #00f5d4, transparent)", opacity: 0.15, zIndex: 9999, pointerEvents: "none" }}
    />
  );
}

function TerminalWindow({ title, children, delay = 0 }: { title: string; children: React.ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      style={{ border: "1px solid #00f5d422", borderRadius: "8px", overflow: "hidden", background: "#060d12" }}
    >
      <div style={{ background: "#0d1a20", padding: "0.6rem 1rem", display: "flex", gap: "0.5rem", alignItems: "center", borderBottom: "1px solid #00f5d422" }}>
        <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#ff5f57" }} />
        <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#ffbd2e" }} />
        <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#28c840" }} />
        <span style={{ marginLeft: "0.5rem", fontSize: "0.7rem", color: "#4a8a8a", letterSpacing: "0.1em" }}>{title}</span>
      </div>
      <div style={{ padding: "1.5rem" }}>{children}</div>
    </motion.div>
  );
}

function DataBar({ label, value, color = "#00f5d4" }: { label: string; value: number; color?: string }) {
  return (
    <div style={{ marginBottom: "0.75rem" }}>
      <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.7rem", marginBottom: "0.3rem", color: "#4a8a8a" }}>
        <span>{label}</span><span style={{ color }}>{value}%</span>
      </div>
      <div style={{ height: "2px", background: "#0d1a20", borderRadius: "1px" }}>
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${value}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          style={{ height: "100%", background: color, borderRadius: "1px", boxShadow: `0 0 8px ${color}` }}
        />
      </div>
    </div>
  );
}

export default function Design4() {
  const [activeFeature, setActiveFeature] = useState(0);
  const features = [
    { id: "sum", label: "SUMMARY", icon: "▊", color: "#00f5d4", content: "Core argument extracted. Key thesis isolated. Full document mapped to essential signal. Zero noise, maximum clarity." },
    { id: "hint", label: "HINTS", icon: "◈", color: "#7b2fff", content: "Contextual annotations injected at critical nodes. Background knowledge surfaced on demand. Gaps filled automatically." },
    { id: "quot", label: "QUOTES", icon: "❝", color: "#ff006e", content: "High-signal passages extracted. Resonance score calculated. Each quote ranked by conceptual density and impact." },
    { id: "ins", label: "INSIGHTS", icon: "◎", color: "#ffe600", content: "Cross-document pattern analysis. Theme clustering enabled. Contradiction detection active. Synthesis complete." },
  ];

  return (
    <div style={{ fontFamily: MONO, background: "#020810", color: "#a0c4c4", minHeight: "100vh", overflowX: "hidden", cursor: "default" }}>
      <ScanLine />
      <style>{`
        * { margin: 0; padding: 0; box-sizing: border-box; }
        ::selection { background: #00f5d422; color: #00f5d4; }
        @keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }
        @keyframes pulse-glow { 0%, 100% { box-shadow: 0 0 5px #00f5d4; } 50% { box-shadow: 0 0 20px #00f5d4, 0 0 40px #00f5d422; } }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-thumb { background: #00f5d444; }
        .neon { color: #00f5d4; }
        .neon-pink { color: #ff006e; }
        .neon-purple { color: #7b2fff; }
        .neon-yellow { color: #ffe600; }
      `}</style>

      {/* Grid overlay */}
      <div style={{ position: "fixed", inset: 0, backgroundImage: "linear-gradient(#00f5d408 1px, transparent 1px), linear-gradient(90deg, #00f5d408 1px, transparent 1px)", backgroundSize: "40px 40px", pointerEvents: "none", zIndex: 0 }} />

      {/* Noise overlay */}
      <div style={{ position: "fixed", inset: 0, opacity: 0.03, backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")", pointerEvents: "none", zIndex: 0 }} />

      <div style={{ position: "relative", zIndex: 1 }}>
        {/* Nav */}
        <motion.nav
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          style={{ padding: "1.2rem 3rem", display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid #00f5d418", position: "sticky", top: 0, zIndex: 100, background: "rgba(2,8,16,0.9)", backdropFilter: "blur(20px)" }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
            <motion.div animate={{ opacity: [1, 0.3, 1] }} transition={{ repeat: Infinity, duration: 2 }} style={{ width: 8, height: 8, background: "#00f5d4", borderRadius: "50%" }} />
            <span className="neon" style={{ fontSize: "1.1rem", letterSpacing: "0.15em", fontWeight: 700 }}>RATIO_READER</span>
            <span style={{ fontSize: "0.6rem", color: "#4a8a8a", letterSpacing: "0.1em" }}>v2.4.1</span>
          </div>
          <div style={{ display: "flex", gap: "2rem", fontSize: "0.7rem", letterSpacing: "0.15em" }}>
            {["./features", "./docs", "./pricing"].map(item => (
              <a key={item} href="#" style={{ color: "#4a8a8a", textDecoration: "none", transition: "color 0.2s" }}
                onMouseEnter={e => (e.currentTarget.style.color = "#00f5d4")}
                onMouseLeave={e => (e.currentTarget.style.color = "#4a8a8a")}
              >{item}</a>
            ))}
          </div>
          <button style={{ background: "transparent", color: "#00f5d4", border: "1px solid #00f5d4", padding: "0.5rem 1.4rem", fontSize: "0.7rem", letterSpacing: "0.15em", cursor: "pointer", transition: "all 0.2s", animation: "pulse-glow 3s ease-in-out infinite" }}
            onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.background = "#00f5d4"; (e.currentTarget as HTMLButtonElement).style.color = "#020810"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.background = "transparent"; (e.currentTarget as HTMLButtonElement).style.color = "#00f5d4"; }}
          >[ CONNECT ]</button>
        </motion.nav>

        {/* Hero */}
        <section style={{ minHeight: "90vh", display: "flex", alignItems: "center", padding: "4rem 3rem", maxWidth: "1300px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 420px", gap: "4rem", width: "100%", alignItems: "center" }}>
            <div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                style={{ fontSize: "0.65rem", letterSpacing: "0.3em", color: "#4a8a8a", marginBottom: "1.5rem" }}
              >
                <span className="neon">▶</span> INITIALIZING DOCUMENT INTELLIGENCE SYSTEM...
              </motion.div>
              <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                style={{ fontSize: "clamp(3rem, 7vw, 6rem)", lineHeight: 0.95, letterSpacing: "-0.04em", fontWeight: 700, marginBottom: "2rem" }}
              >
                <GlitchText text="READ" style={{ color: "#00f5d4", display: "block", textShadow: "0 0 40px #00f5d444" }} />
                <GlitchText text="SMARTER." style={{ color: "#e0f0f0", display: "block" }} />
                <GlitchText text="THINK" style={{ color: "#7b2fff", display: "block", textShadow: "0 0 40px #7b2fff44" }} />
                <GlitchText text="FASTER." style={{ color: "#e0f0f0", display: "block" }} />
              </motion.h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                style={{ fontSize: "0.9rem", lineHeight: 1.8, color: "#4a8a8a", maxWidth: "480px", marginBottom: "2.5rem" }}
              >
                <TypewriterText text="Deploy any PDF to the analysis engine. Receive: structured summary, contextual annotations, high-signal quotes, and synthesized insights. Time to insight: under 30 seconds." delay={800} />
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5 }}
                style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}
              >
                <button style={{ background: "#00f5d4", color: "#020810", border: "none", padding: "0.9rem 2rem", fontSize: "0.75rem", letterSpacing: "0.15em", cursor: "pointer", fontFamily: MONO, fontWeight: 700, transition: "all 0.2s" }}
                  onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.background = "#00d4b4"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.background = "#00f5d4"; }}
                >⚡ UPLOAD_DOCUMENT()</button>
                <button style={{ background: "transparent", color: "#7b2fff", border: "1px solid #7b2fff44", padding: "0.9rem 2rem", fontSize: "0.75rem", letterSpacing: "0.15em", cursor: "pointer", fontFamily: MONO, transition: "all 0.2s" }}
                  onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.borderColor = "#7b2fff"; (e.currentTarget as HTMLButtonElement).style.background = "#7b2fff11"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.borderColor = "#7b2fff44"; (e.currentTarget as HTMLButtonElement).style.background = "transparent"; }}
                >◈ VIEW_DEMO()</button>
              </motion.div>
            </div>

            {/* Terminal panel */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <TerminalWindow title="ratio_reader — analysis output">
                <div style={{ fontSize: "0.72rem", lineHeight: 1.8 }}>
                  <div style={{ color: "#4a8a8a" }}><span className="neon">$</span> reader.analyze("deep_work.pdf")</div>
                  <div style={{ color: "#4a8a8a", margin: "0.3rem 0" }}>⟩ scanning 312 pages...</div>
                  <div style={{ color: "#4a8a8a" }}>⟩ extracting key concepts...</div>
                  <div style={{ color: "#ffe60088", marginTop: "0.5rem" }}>⟩ confidence: 98.7%</div>
                  <div style={{ border: "1px solid #00f5d422", padding: "1rem", marginTop: "1rem", borderRadius: "4px" }}>
                    <div className="neon" style={{ fontSize: "0.6rem", letterSpacing: "0.2em", marginBottom: "0.75rem" }}>■ SUMMARY_OUTPUT:</div>
                    <p style={{ color: "#8ab4b4", fontSize: "0.72rem", lineHeight: 1.7 }}>
                      Core thesis: deep, focused work is the key competitive advantage in the knowledge economy. Shallow work — fragmented, distracted effort — produces diminishing returns...
                    </p>
                  </div>
                  <DataBar label="COMPREHENSION_DEPTH" value={94} />
                  <DataBar label="KEY_CONCEPTS_MAPPED" value={87} color="#7b2fff" />
                  <DataBar label="INSIGHT_QUALITY" value={96} color="#ff006e" />
                  <div className="neon" style={{ fontSize: "0.65rem", marginTop: "1rem" }}>
                    <motion.span animate={{ opacity: [1, 0, 1] }} transition={{ repeat: Infinity, duration: 1 }}>█</motion.span>
                    {" "}analysis complete
                  </div>
                </div>
              </TerminalWindow>
            </motion.div>
          </div>
        </section>

        {/* Feature selector */}
        <section style={{ padding: "6rem 3rem", maxWidth: "1300px", margin: "0 auto" }}>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            style={{ fontSize: "0.65rem", letterSpacing: "0.3em", color: "#4a8a8a", marginBottom: "3rem" }}
          >
            <span className="neon">◉</span> FEATURE_MODULES — SELECT TO INSPECT
          </motion.div>
          <div style={{ display: "grid", gridTemplateColumns: "200px 1fr", gap: "2rem" }}>
            <div>
              {features.map((f, i) => (
                <button
                  key={f.id}
                  onClick={() => setActiveFeature(i)}
                  style={{
                    display: "block",
                    width: "100%",
                    background: activeFeature === i ? `${f.color}11` : "transparent",
                    border: activeFeature === i ? `1px solid ${f.color}44` : "1px solid transparent",
                    borderLeft: activeFeature === i ? `2px solid ${f.color}` : "2px solid transparent",
                    color: activeFeature === i ? f.color : "#4a8a8a",
                    padding: "0.75rem 1rem",
                    fontSize: "0.7rem",
                    letterSpacing: "0.15em",
                    cursor: "pointer",
                    fontFamily: MONO,
                    textAlign: "left",
                    marginBottom: "0.5rem",
                    transition: "all 0.2s",
                  }}
                >
                  {f.icon} {f.label}
                </button>
              ))}
            </div>
            <TerminalWindow title={`module — ${features[activeFeature].id}`}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeFeature}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <div style={{ fontSize: "0.6rem", letterSpacing: "0.2em", color: "#4a8a8a", marginBottom: "1rem" }}>
                    <span style={{ color: features[activeFeature].color }}>■</span> {features[activeFeature].label}_MODULE v2.4
                  </div>
                  <div style={{ fontSize: "2rem", color: features[activeFeature].color, textShadow: `0 0 20px ${features[activeFeature].color}`, marginBottom: "1.5rem" }}>
                    {features[activeFeature].icon}
                  </div>
                  <p style={{ fontSize: "0.85rem", lineHeight: 1.9, color: "#8ab4b4" }}>
                    {features[activeFeature].content}
                  </p>
                  <div style={{ marginTop: "2rem", display: "flex", gap: "1rem" }}>
                    <DataBar label="ACCURACY" value={95} color={features[activeFeature].color} />
                  </div>
                </motion.div>
              </AnimatePresence>
            </TerminalWindow>
          </div>
        </section>

        {/* Stats */}
        <section style={{ background: "#060d12", borderTop: "1px solid #00f5d418", borderBottom: "1px solid #00f5d418", padding: "5rem 3rem" }}>
          <div style={{ maxWidth: "1100px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "2rem" }}>
            {[
              { val: "50K+", label: "DOCS ANALYZED", color: "#00f5d4" },
              { val: "98.7%", label: "ACCURACY RATE", color: "#7b2fff" },
              { val: "<30s", label: "PROCESSING TIME", color: "#ff006e" },
              { val: "12x", label: "FASTER LEARNING", color: "#ffe600" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                style={{ textAlign: "center" }}
              >
                <div style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", fontWeight: 700, color: stat.color, textShadow: `0 0 30px ${stat.color}66`, letterSpacing: "-0.03em" }}>
                  {stat.val}
                </div>
                <div style={{ fontSize: "0.6rem", letterSpacing: "0.2em", color: "#4a8a8a", marginTop: "0.5rem" }}>{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section style={{ padding: "8rem 3rem", maxWidth: "900px", margin: "0 auto", textAlign: "center" }}>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <div style={{ border: "1px solid #00f5d422", padding: "4rem", background: "#060d12", position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at center, #00f5d408, transparent 70%)", pointerEvents: "none" }} />
              <div style={{ fontSize: "0.65rem", letterSpacing: "0.3em", color: "#4a8a8a", marginBottom: "2rem" }}>
                <span className="neon">▶</span> INITIALIZE YOUR SESSION
              </div>
              <h2 style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", color: "#e0f0f0", fontWeight: 700, letterSpacing: "-0.03em", lineHeight: 0.95, marginBottom: "1.5rem" }}>
                DEPLOY_<span className="neon">INTELLIGENCE</span>
              </h2>
              <p style={{ fontSize: "0.85rem", color: "#4a8a8a", lineHeight: 1.8, marginBottom: "3rem", maxWidth: "500px", margin: "0 auto 3rem" }}>
                First document free. No authentication required. Full analysis pipeline: summary, hints, quotes, insights.
              </p>
              <button style={{ background: "#00f5d4", color: "#020810", border: "none", padding: "1rem 2.5rem", fontSize: "0.8rem", letterSpacing: "0.2em", cursor: "pointer", fontFamily: MONO, fontWeight: 700, transition: "all 0.2s", boxShadow: "0 0 30px #00f5d444" }}
                onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 0 50px #00f5d4"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 0 30px #00f5d444"; }}
              >⚡ EXECUTE_FREE_TRIAL()</button>
            </div>
          </motion.div>
        </section>

        {/* Footer */}
        <footer style={{ borderTop: "1px solid #00f5d418", padding: "2rem 3rem", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span className="neon" style={{ fontSize: "0.9rem", letterSpacing: "0.2em" }}>RATIO_READER</span>
          <span style={{ fontSize: "0.65rem", letterSpacing: "0.1em", color: "#4a8a8a" }}>© 2025 · ALL SYSTEMS NOMINAL</span>
        </footer>
      </div>
    </div>
  );
}
