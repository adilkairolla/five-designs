import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useInView,
} from "motion/react";
import {
  Upload,
  Sparkles,
  Quote,
  Lightbulb,
  BookOpen,
  ChevronRight,
  Play,
  ArrowRight,
} from "lucide-react";

/* ─────────────────────────────────────────────
   DESIGN 5 — AURELIA (Luxury / Aurora / Cinematic)
   Ratio Reader landing page
───────────────────────────────────────────── */

/* ── Reusable motion variants ── */
const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] as [number, number, number, number], delay },
  }),
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: (delay = 0) => ({
    opacity: 1,
    transition: { duration: 1.1, ease: "easeOut" as const, delay },
  }),
};

/* ── Scroll-reveal wrapper ── */
function Reveal({
  children,
  delay = 0,
  className = "",
  style = {},
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  style?: React.CSSProperties;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      className={className}
      style={style}
      variants={fadeUp}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      custom={delay}
    >
      {children}
    </motion.div>
  );
}

/* ── Glass panel ── */
function GlassPanel({
  children,
  className = "",
  style = {},
}: {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <div
      className={className}
      style={{
        background:
          "linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        border: "1px solid rgba(228,193,121,0.18)",
        boxShadow:
          "inset 0 1px 0 rgba(228,193,121,0.12), 0 32px 64px rgba(0,0,0,0.4)",
        ...style,
      }}
    >
      {children}
    </div>
  );
}

/* ── Product preview object ── */
function ProductObject() {
  return (
    <div style={{ position: "relative", width: "100%", maxWidth: 680, margin: "0 auto" }}>
      {/* Glow beneath */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: -40,
          background:
            "radial-gradient(ellipse at center, rgba(123,107,216,0.25) 0%, rgba(75,214,194,0.1) 40%, transparent 70%)",
          filter: "blur(30px)",
          pointerEvents: "none",
        }}
      />

      {/* Main document card */}
      <div className="d5-float" style={{
        position: "relative",
        borderRadius: 12,
        overflow: "hidden",
        background: "linear-gradient(145deg, rgba(30,26,50,0.95) 0%, rgba(18,15,35,0.98) 100%)",
        border: "1px solid rgba(228,193,121,0.2)",
        boxShadow:
          "inset 0 1px 0 rgba(228,193,121,0.15), 0 4px 30px rgba(0,0,0,0.5), 0 60px 120px rgba(0,0,0,0.5), 0 0 0 1px rgba(123,107,216,0.08)",
        transformStyle: "preserve-3d",
      }}>
        {/* Document header */}
        <div style={{
          display: "flex",
          alignItems: "center",
          gap: 6,
          padding: "12px 16px",
          borderBottom: "1px solid rgba(228,193,121,0.1)",
          background: "rgba(255,255,255,0.02)",
        }}>
          <div style={{ width: 8, height: 8, borderRadius: "50%", background: "rgba(228,193,121,0.6)" }} />
          <div style={{ width: 8, height: 8, borderRadius: "50%", background: "rgba(123,107,216,0.5)" }} />
          <div style={{ width: 8, height: 8, borderRadius: "50%", background: "rgba(75,214,194,0.4)" }} />
          <div style={{ flex: 1, height: 1, background: "rgba(228,193,121,0.12)", marginLeft: 8 }} />
          <span style={{ fontSize: 9, color: "rgba(228,193,121,0.5)", fontFamily: "var(--font-manrope)", letterSpacing: "0.12em", textTransform: "uppercase" }}>ratio reader</span>
        </div>

        {/* Document content area */}
        <div style={{ display: "flex", gap: 0, minHeight: 280 }}>
          {/* Left: document lines */}
          <div style={{ flex: 1, padding: "20px 20px", borderRight: "1px solid rgba(228,193,121,0.08)" }}>
            <div style={{ marginBottom: 16 }}>
              <div style={{ height: 9, width: "60%", background: "rgba(239,233,245,0.2)", borderRadius: 9999, marginBottom: 8 }} />
            </div>
            {[95, 88, 92, 75].map((w, i) => (
              <div key={i} style={{ height: 6, width: `${w}%`, background: "rgba(239,233,245,0.12)", borderRadius: 9999, marginBottom: 8 }} />
            ))}
            <div style={{ height: 10 }} />
            {[90, 85, 97, 60].map((w, i) => (
              <div key={i} style={{ height: 6, width: `${w}%`, background: "rgba(239,233,245,0.12)", borderRadius: 9999, marginBottom: 8 }} />
            ))}

            {/* Margin hint */}
            <div style={{
              display: "flex",
              gap: 10,
              marginTop: 20,
              padding: 10,
              background: "rgba(123,107,216,0.08)",
              borderRadius: 6,
              border: "1px solid rgba(123,107,216,0.2)",
            }}>
              <div style={{ width: 2, flexShrink: 0, borderRadius: 9999, background: "linear-gradient(to bottom, #e4c179, #7b6bd8)" }} />
              <div>
                <div style={{ fontSize: 8, color: "#e4c179", fontFamily: "var(--font-manrope)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 3 }}>Hint</div>
                <div style={{ fontSize: 9, color: "rgba(239,233,245,0.7)", fontFamily: "var(--font-manrope)", lineHeight: 1.5 }}>This passage references Kahneman's dual-process theory — fast intuition vs. slow deliberation.</div>
              </div>
            </div>
          </div>

          {/* Right: summary panel */}
          <div style={{ width: 220, flexShrink: 0, padding: "20px 16px", display: "flex", flexDirection: "column", background: "rgba(255,255,255,0.015)" }}>
            <div style={{ fontSize: 8, color: "#e4c179", fontFamily: "var(--font-manrope)", letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: 10, display: "flex", alignItems: "center", gap: 5 }}>
              <span style={{ display: "inline-block", width: 14, height: 1, background: "#e4c179" }} />
              Smart Summary
            </div>
            <div style={{ fontSize: 10, color: "rgba(239,233,245,0.9)", fontFamily: "var(--font-cormorant)", lineHeight: 1.7, marginBottom: 12 }}>
              The paper argues that cognitive biases are not errors but evolutionary heuristics that misfire in modern environments.
            </div>
            <div style={{ height: 1, background: "rgba(228,193,121,0.12)", marginBottom: 12 }} />

            {/* Key quote */}
            <div style={{ fontSize: 7, color: "rgba(228,193,121,0.7)", fontFamily: "var(--font-manrope)", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 6 }}>Key Quote · p.34</div>
            <div style={{ fontSize: 9.5, color: "rgba(239,233,245,0.75)", fontFamily: "var(--font-cormorant)", fontStyle: "italic", lineHeight: 1.6, borderLeft: "1px solid rgba(228,193,121,0.3)", paddingLeft: 8 }}>
              &ldquo;The mind is not a logic engine. It is a survival machine wearing reason&rsquo;s clothes.&rdquo;
            </div>
            <div style={{ height: 1, background: "rgba(228,193,121,0.12)", margin: "12px 0" }} />

            {/* Insight */}
            <div style={{ fontSize: 7, color: "rgba(75,214,194,0.8)", fontFamily: "var(--font-manrope)", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 6 }}>Insight</div>
            <div style={{ fontSize: 8.5, color: "rgba(239,233,245,0.65)", fontFamily: "var(--font-manrope)", lineHeight: 1.6 }}>
              Connects to behavioral economics — explains why policy nudges outperform pure information.
            </div>

            {/* Progress indicator */}
            <div style={{ marginTop: "auto", paddingTop: 14 }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 4 }}>
                <span style={{ fontSize: 7, color: "rgba(228,193,121,0.5)", fontFamily: "var(--font-manrope)", letterSpacing: "0.08em" }}>12 pages analyzed</span>
                <span style={{ fontSize: 7, color: "rgba(228,193,121,0.7)", fontFamily: "var(--font-manrope)" }}>100%</span>
              </div>
              <div style={{ height: 1.5, background: "rgba(228,193,121,0.15)", borderRadius: 9999 }}>
                <div style={{ height: "100%", width: "100%", background: "linear-gradient(90deg, #e4c179, #f0d8a8)", borderRadius: 9999 }} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Reflection */}
      <div
        aria-hidden="true"
        style={{
          height: 40,
          marginTop: 1,
          background: "linear-gradient(to bottom, rgba(30,26,50,0.3), transparent)",
          filter: "blur(4px)",
          transform: "scaleY(-1) translateY(-1px)",
          opacity: 0.25,
          pointerEvents: "none",
          borderRadius: "0 0 12px 12px",
          maskImage: "linear-gradient(to bottom, rgba(0,0,0,0.4), transparent)",
          WebkitMaskImage: "linear-gradient(to bottom, rgba(0,0,0,0.4), transparent)",
        }}
      />
    </div>
  );
}

/* ── Pillar card ── */
function PillarCard({
  icon,
  label,
  title,
  body,
  accent,
  delay,
  offsetTop = 0,
}: {
  icon: React.ReactNode;
  label: string;
  title: string;
  body: string;
  accent: string;
  delay: number;
  offsetTop?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      variants={fadeUp}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      custom={delay}
      style={{ borderRadius: 10, overflow: "hidden", marginTop: offsetTop }}
      whileHover={{ y: -4, transition: { duration: 0.3, ease: "easeOut" } }}
    >
      <GlassPanel style={{
        padding: "40px 36px",
        height: "100%",
        borderRadius: 10,
        display: "flex",
        flexDirection: "column",
      }}>
        <div style={{
          width: 44, height: 44,
          display: "flex", alignItems: "center", justifyContent: "center",
          borderRadius: 8,
          background: "rgba(255,255,255,0.04)",
          border: "1px solid rgba(228,193,121,0.12)",
          marginBottom: 20,
          color: accent,
        }}>
          {icon}
        </div>
        <div style={{ fontSize: 9, color: "#e4c179", fontFamily: "var(--font-manrope)", letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: 12, display: "flex", alignItems: "center", gap: 8 }}>
          <span style={{ display: "inline-block", width: 18, height: 0.75, background: "#e4c179", opacity: 0.7 }} />
          {label}
        </div>
        <h3 style={{ fontFamily: "var(--font-cormorant)", fontSize: 26, fontWeight: 300, color: "#efe9f5", lineHeight: 1.2, marginBottom: 12, letterSpacing: "0.01em" }}>
          {title}
        </h3>
        <p style={{ fontFamily: "var(--font-manrope)", fontSize: 13.5, color: "rgba(163,157,180,0.9)", lineHeight: 1.75 }}>
          {body}
        </p>
        <div style={{
          display: "flex",
          alignItems: "center",
          gap: 6,
          marginTop: 28,
          paddingTop: 20,
          borderTop: "1px solid rgba(228,193,121,0.08)",
        }}>
          <span style={{ fontFamily: "var(--font-manrope)", fontSize: 11, color: "rgba(228,193,121,0.6)", letterSpacing: "0.06em" }}>
            Learn more
          </span>
          <ArrowRight size={11} style={{ color: "rgba(228,193,121,0.5)" }} />
        </div>
      </GlassPanel>
    </motion.div>
  );
}

/* ── Step ── */
function Step({
  num,
  title,
  body,
  delay,
}: {
  num: string;
  title: string;
  body: string;
  delay: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      variants={fadeUp}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      custom={delay}
      style={{ position: "relative" }}
    >
      <div style={{
        fontFamily: "var(--font-cormorant)",
        fontSize: "clamp(64px, 8vw, 96px)",
        fontWeight: 300,
        color: "rgba(228,193,121,0.12)",
        lineHeight: 1,
        marginBottom: 16,
        letterSpacing: "-0.02em",
      }}>{num}</div>
      <div style={{ width: 28, height: 1, background: "linear-gradient(to right, #e4c179, transparent)", marginBottom: 20 }} />
      <h3 style={{
        fontFamily: "var(--font-cormorant)",
        fontSize: 28,
        fontWeight: 300,
        color: "#efe9f5",
        lineHeight: 1.2,
        marginBottom: 14,
        letterSpacing: "0.01em",
      }}>{title}</h3>
      <p style={{
        fontFamily: "var(--font-manrope)",
        fontSize: 13.5,
        color: "rgba(163,157,180,0.8)",
        lineHeight: 1.8,
      }}>{body}</p>
    </motion.div>
  );
}

/* ──────────────────────────────────────────────────────────
   MAIN COMPONENT
────────────────────────────────────────────────────────── */
export function Design5() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const heroGlowY = useTransform(scrollYProgress, [0, 0.3], [0, -60]);
  const heroGlowScale = useTransform(scrollYProgress, [0, 0.3], [1, 1.15]);

  return (
    <div
      ref={containerRef}
      style={{
        background: "#0a0913",
        color: "#efe9f5",
        fontFamily: "var(--font-manrope)",
        overflowX: "hidden",
        minHeight: "100vh",
        position: "relative",
      }}
    >
      {/* ── Scoped styles ── */}
      <style>{`
        @media (prefers-reduced-motion: reduce) {
          .d5-aurora-l1, .d5-aurora-l2, .d5-aurora-l3, .d5-float, .d5-shimmer { animation: none !important; }
        }

        @keyframes d5-drift1 {
          0%   { transform: translate(0%, 0%) scale(1) rotate(0deg); opacity: 0.55; }
          33%  { transform: translate(4%, -3%) scale(1.08) rotate(3deg); opacity: 0.45; }
          66%  { transform: translate(-3%, 5%) scale(0.95) rotate(-2deg); opacity: 0.6; }
          100% { transform: translate(0%, 0%) scale(1) rotate(0deg); opacity: 0.55; }
        }
        @keyframes d5-drift2 {
          0%   { transform: translate(0%, 0%) scale(1) rotate(0deg); opacity: 0.4; }
          50%  { transform: translate(-5%, 3%) scale(1.1) rotate(-4deg); opacity: 0.5; }
          100% { transform: translate(0%, 0%) scale(1) rotate(0deg); opacity: 0.4; }
        }
        @keyframes d5-drift3 {
          0%   { transform: translate(0%, 0%) scale(1); opacity: 0.3; }
          40%  { transform: translate(3%, -4%) scale(1.06); opacity: 0.45; }
          100% { transform: translate(0%, 0%) scale(1); opacity: 0.3; }
        }
        .d5-aurora-l1 { animation: d5-drift1 22s ease-in-out infinite; }
        .d5-aurora-l2 { animation: d5-drift2 28s ease-in-out infinite; }
        .d5-aurora-l3 { animation: d5-drift3 18s ease-in-out infinite; }

        @keyframes d5-float {
          0%   { transform: perspective(1200px) rotateX(4deg) rotateY(-6deg) translateY(0px); }
          50%  { transform: perspective(1200px) rotateX(3deg) rotateY(-5deg) translateY(-10px); }
          100% { transform: perspective(1200px) rotateX(4deg) rotateY(-6deg) translateY(0px); }
        }
        .d5-float { animation: d5-float 6s ease-in-out infinite; }

        @keyframes d5-shimmer {
          0%   { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        .d5-shimmer-text {
          background: linear-gradient(90deg, #e4c179 0%, #f0d8a8 30%, #fffbe8 50%, #f0d8a8 70%, #e4c179 100%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: d5-shimmer 4s linear infinite;
        }

        .d5-nav-link-item {
          font-family: var(--font-manrope);
          font-size: 12px;
          color: rgba(163,157,180,0.8);
          letter-spacing: 0.08em;
          text-transform: uppercase;
          cursor: pointer;
          transition: color 0.25s;
          text-decoration: none;
        }
        .d5-nav-link-item:hover { color: #e4c179; }

        .d5-cta-pri {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-family: var(--font-manrope);
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #07060d;
          background: linear-gradient(135deg, #e4c179 0%, #f0d8a8 100%);
          padding: 16px 34px;
          border-radius: 2px;
          border: none;
          cursor: pointer;
          transition: opacity 0.25s, transform 0.25s;
        }
        .d5-cta-pri:hover { opacity: 0.9; transform: translateY(-1px); }

        .d5-cta-sec {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-family: var(--font-manrope);
          font-size: 13px;
          font-weight: 500;
          letter-spacing: 0.06em;
          color: rgba(239,233,245,0.7);
          background: transparent;
          border: none;
          cursor: pointer;
          transition: color 0.25s;
          padding: 16px 0;
        }
        .d5-cta-sec:hover { color: #efe9f5; }
        .d5-play-ring {
          width: 36px; height: 36px;
          border-radius: 50%;
          border: 1px solid rgba(239,233,245,0.25);
          display: flex; align-items: center; justify-content: center;
          transition: border-color 0.25s;
        }
        .d5-cta-sec:hover .d5-play-ring { border-color: rgba(239,233,245,0.6); }

        .d5-upload-zone {
          border: 1px dashed rgba(228,193,121,0.3);
          border-radius: 8px;
          padding: 36px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
          cursor: pointer;
          transition: border-color 0.25s, background 0.25s;
          background: rgba(255,255,255,0.02);
          margin-bottom: 28px;
        }
        .d5-upload-zone:hover {
          border-color: rgba(228,193,121,0.6);
          background: rgba(228,193,121,0.04);
        }

        .d5-footer-lnk {
          font-family: var(--font-manrope);
          font-size: 11px;
          color: rgba(163,157,180,0.4);
          letter-spacing: 0.06em;
          text-transform: uppercase;
          text-decoration: none;
          transition: color 0.2s;
        }
        .d5-footer-lnk:hover { color: rgba(228,193,121,0.6); }

        .d5-stat-row {
          display: flex;
          align-items: stretch;
          justify-content: center;
          flex-wrap: wrap;
        }
        .d5-stat-item {
          flex: 1;
          min-width: 160px;
          text-align: center;
          padding: 28px 40px;
          position: relative;
        }
        .d5-stat-item + .d5-stat-item::before {
          content: "";
          position: absolute;
          left: 0; top: 50%; transform: translateY(-50%);
          width: 1px; height: 40px;
          background: linear-gradient(to bottom, transparent, rgba(228,193,121,0.3), transparent);
        }

        .d5-pillars-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
          margin-top: 64px;
        }
        .d5-steps-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 60px;
          margin-top: 80px;
        }

        @media (max-width: 900px) {
          .d5-nav-desktop { display: none !important; }
          .d5-pillars-grid { grid-template-columns: 1fr !important; }
          .d5-steps-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
          .d5-summary-panel-hide { display: none !important; }
          .d5-stat-row { flex-direction: column; }
          .d5-stat-item + .d5-stat-item::before { display: none; }
        }
      `}</style>

      {/* ── Aurora background (fixed) ── */}
      <div
        aria-hidden="true"
        style={{
          position: "fixed",
          inset: 0,
          pointerEvents: "none",
          zIndex: 0,
          overflow: "hidden",
        }}
      >
        <motion.div
          className="d5-aurora-l1"
          style={{ y: heroGlowY, scale: heroGlowScale, position: "relative" }}
        >
          <div style={{
            position: "absolute",
            width: "70vw", height: "70vw",
            top: "-20vw", left: "-10vw",
            borderRadius: "50%",
            filter: "blur(80px)",
            background: "radial-gradient(ellipse, rgba(123,107,216,0.28) 0%, rgba(75,214,194,0.08) 50%, transparent 70%)",
          }} />
        </motion.div>
        <motion.div className="d5-aurora-l2" style={{ y: heroGlowY, position: "relative" }}>
          <div style={{
            position: "absolute",
            width: "60vw", height: "60vw",
            top: "5vw", right: "-15vw",
            borderRadius: "50%",
            filter: "blur(80px)",
            background: "radial-gradient(ellipse, rgba(75,214,194,0.18) 0%, rgba(123,107,216,0.08) 50%, transparent 70%)",
          }} />
        </motion.div>
        <div className="d5-aurora-l3" style={{ position: "relative" }}>
          <div style={{
            position: "absolute",
            width: "40vw", height: "40vw",
            top: "25vw", left: "30vw",
            borderRadius: "50%",
            filter: "blur(80px)",
            background: "radial-gradient(ellipse, rgba(228,193,121,0.06) 0%, transparent 70%)",
          }} />
        </div>
      </div>

      {/* ── Navigation ── */}
      <motion.nav
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        custom={0}
        style={{
          position: "fixed",
          top: 0, left: 0, right: 0,
          zIndex: 100,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "22px 48px",
          borderBottom: "1px solid rgba(228,193,121,0.08)",
          background: "rgba(10,9,19,0.7)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
        }}
      >
        <div style={{
          fontFamily: "var(--font-cormorant)",
          fontSize: 22,
          fontWeight: 300,
          letterSpacing: "0.08em",
          color: "#efe9f5",
        }}>
          Ratio <em style={{ color: "#e4c179", fontStyle: "italic" }}>Reader</em>
        </div>
        <div className="d5-nav-desktop" style={{ display: "flex", alignItems: "center", gap: 36 }}>
          <a href="#pillars" className="d5-nav-link-item">Features</a>
          <a href="#how" className="d5-nav-link-item">How it works</a>
          <a href="#" className="d5-nav-link-item">About</a>
        </div>
        <button style={{
          fontFamily: "var(--font-manrope)",
          fontSize: 11.5,
          fontWeight: 500,
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          color: "#e4c179",
          border: "1px solid rgba(228,193,121,0.4)",
          padding: "9px 22px",
          borderRadius: 2,
          cursor: "pointer",
          background: "transparent",
          transition: "border-color 0.25s, background 0.25s",
        }}>
          Begin reading
        </button>
      </motion.nav>

      {/* ── Hero ── */}
      <section style={{
        position: "relative",
        zIndex: 1,
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "140px 48px 80px",
        textAlign: "center",
      }}>
        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          custom={0.15}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 10,
            fontFamily: "var(--font-manrope)",
            fontSize: 10,
            fontWeight: 600,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "#e4c179",
            marginBottom: 32,
          }}
        >
          <span style={{ display: "inline-block", width: 28, height: 1, background: "#e4c179", opacity: 0.6 }} />
          Intelligence · distilled
          <span style={{ display: "inline-block", width: 28, height: 1, background: "#e4c179", opacity: 0.6 }} />
        </motion.div>

        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.28}
          style={{
            fontFamily: "var(--font-cormorant)",
            fontSize: "clamp(52px, 8vw, 96px)",
            fontWeight: 300,
            lineHeight: 1.06,
            letterSpacing: "-0.01em",
            color: "#efe9f5",
            maxWidth: 820,
            marginBottom: 28,
          }}
        >
          Dense documents,<br />
          <em style={{ fontStyle: "italic", color: "#e4c179" }}>distilled</em> understanding
        </motion.h1>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.42}
          style={{
            fontFamily: "var(--font-manrope)",
            fontSize: 16,
            fontWeight: 400,
            lineHeight: 1.8,
            color: "rgba(163,157,180,0.85)",
            maxWidth: 480,
            marginBottom: 48,
          }}
        >
          Upload any PDF. Ratio reads every page and returns a structured summary,
          margin hints, key quotes and insights — so you absorb more in far less time.
        </motion.p>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.55}
          style={{ display: "flex", alignItems: "center", gap: 20, marginBottom: 80, flexWrap: "wrap", justifyContent: "center" }}
        >
          <button className="d5-cta-pri">
            <Upload size={15} />
            Begin reading beautifully
          </button>
          <button className="d5-cta-sec">
            <div className="d5-play-ring">
              <Play size={12} fill="currentColor" />
            </div>
            Watch how it works
          </button>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.72}
          style={{ width: "100%", maxWidth: 720 }}
        >
          <ProductObject />
        </motion.div>
      </section>

      {/* ── Stats strip ── */}
      <div style={{
        position: "relative",
        zIndex: 1,
        borderTop: "1px solid rgba(228,193,121,0.08)",
        borderBottom: "1px solid rgba(228,193,121,0.08)",
        padding: "0 48px",
      }}>
        <div className="d5-stat-row">
          {[
            { value: "180K", unit: "+", label: "Pages distilled" },
            { value: "4 hrs", unit: "", label: "Saved per reader weekly" },
            { value: "<30s", unit: "", label: "Average analysis time" },
            { value: "98%", unit: "", label: "Reader satisfaction" },
          ].map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08} className="d5-stat-item">
              <div style={{
                fontFamily: "var(--font-cormorant)",
                fontSize: "clamp(32px, 4vw, 48px)",
                fontWeight: 300,
                color: "#efe9f5",
                lineHeight: 1,
                marginBottom: 8,
              }}>
                <span className="d5-shimmer-text">{s.value}</span>
                <span style={{ color: "#e4c179" }}>{s.unit}</span>
              </div>
              <div style={{ fontFamily: "var(--font-manrope)", fontSize: 11, color: "rgba(163,157,180,0.7)", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                {s.label}
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* ── Pillars ── */}
      <section id="pillars" style={{ position: "relative", zIndex: 1, padding: "120px 48px", maxWidth: 1200, margin: "0 auto" }}>
        <Reveal>
          <div style={{ fontSize: 9.5, fontFamily: "var(--font-manrope)", fontWeight: 600, letterSpacing: "0.22em", textTransform: "uppercase", color: "#e4c179", marginBottom: 20, display: "flex", alignItems: "center", gap: 12 }}>
            <span style={{ display: "inline-block", width: 22, height: 1, background: "#e4c179", opacity: 0.5 }} />
            Four pillars of understanding
          </div>
          <h2 style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(38px, 5vw, 60px)", fontWeight: 300, color: "#efe9f5", lineHeight: 1.1, letterSpacing: "-0.01em", marginBottom: 16 }}>
            Every dimension of<br />
            <em style={{ fontStyle: "italic", color: "#e4c179" }}>reading, mastered</em>
          </h2>
          <p style={{ fontFamily: "var(--font-manrope)", fontSize: 14, color: "rgba(163,157,180,0.75)", lineHeight: 1.75, maxWidth: 440 }}>
            Ratio goes beyond simple summarization. It layers four kinds of intelligence over your document.
          </p>
        </Reveal>

        <div className="d5-pillars-grid">
          <PillarCard
            delay={0.05}
            icon={<BookOpen size={20} />}
            label="Smart Summary"
            accent="#e4c179"
            title="The whole document, distilled"
            body="Every key point, argument and conclusion extracted and restructured so you can scan the core of a 60-page paper in under two minutes — without missing what matters."
            offsetTop={0}
          />
          <PillarCard
            delay={0.15}
            icon={<ChevronRight size={20} />}
            label="Margin Hints"
            accent="#a99de8"
            title="A brilliant annotator in the margin"
            body="Contextual hints unlock dense passages in real time — referencing related theories, defining jargon, and surfacing the author's assumptions before they trip you up."
            offsetTop={40}
          />
          <PillarCard
            delay={0.25}
            icon={<Quote size={20} />}
            label="Key Quotes"
            accent="#f0d8a8"
            title="The sentences worth remembering"
            body="Ratio surfaces the most powerful verbatim lines from the source — ranked by significance, pinned to exact page numbers, ready to cite or share."
            offsetTop={0}
          />
          <PillarCard
            delay={0.35}
            icon={<Lightbulb size={20} />}
            label="Insights"
            accent="#4bd6c2"
            title="Beyond the page"
            body="Connections to broader ideas, disciplines and implications the author hints at but never states — the 'why this matters' layer that turns reading into genuine understanding."
            offsetTop={-40}
          />
        </div>
      </section>

      {/* ── How it works ── */}
      <section id="how" style={{ position: "relative", zIndex: 1, padding: "120px 48px", background: "rgba(7,6,13,0.6)" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <Reveal>
            <div style={{ fontSize: 9.5, fontFamily: "var(--font-manrope)", fontWeight: 600, letterSpacing: "0.22em", textTransform: "uppercase", color: "#e4c179", marginBottom: 20, display: "flex", alignItems: "center", gap: 12 }}>
              <span style={{ display: "inline-block", width: 22, height: 1, background: "#e4c179", opacity: 0.5 }} />
              The process
            </div>
            <h2 style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(38px, 5vw, 60px)", fontWeight: 300, color: "#efe9f5", lineHeight: 1.1, letterSpacing: "-0.01em" }}>
              Three steps to<br />
              <em style={{ fontStyle: "italic", color: "#e4c179" }}>genuine clarity</em>
            </h2>
          </Reveal>

          <div className="d5-steps-grid">
            <Step
              num="01"
              title="Drop in your PDF"
              body="Upload any document — research papers, legal briefs, reports, textbooks, contracts. Ratio accepts them all, up to 500 pages."
              delay={0.05}
            />
            <Step
              num="02"
              title="Ratio reads every page"
              body="Our engine processes structure, semantics and context simultaneously — not just keywords, but meaning. Average analysis: under 30 seconds."
              delay={0.18}
            />
            <Step
              num="03"
              title="Receive your understanding"
              body="A clean, structured reading companion arrives: summary, hints, quotes and insights — organized, cross-referenced and ready to use."
              delay={0.31}
            />
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section style={{ position: "relative", zIndex: 1, padding: "100px 48px", maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
        <Reveal>
          <div style={{ marginBottom: 32, display: "flex", justifyContent: "center", alignItems: "center" }}>
            <div style={{ width: 36, height: 1, background: "linear-gradient(to right, transparent, rgba(228,193,121,0.5))" }} />
            <div style={{ width: 8, height: 8, borderRadius: "50%", background: "rgba(228,193,121,0.4)", margin: "0 10px" }} />
            <div style={{ width: 36, height: 1, background: "linear-gradient(to left, transparent, rgba(228,193,121,0.5))" }} />
          </div>
          <blockquote style={{
            fontFamily: "var(--font-cormorant)",
            fontSize: "clamp(22px, 3.5vw, 36px)",
            fontWeight: 300,
            fontStyle: "italic",
            color: "rgba(239,233,245,0.88)",
            lineHeight: 1.5,
            marginBottom: 28,
          }}>
            &ldquo;I finished a 90-page academic paper in forty minutes and walked away
            understanding it better than papers I&rsquo;ve spent hours on. Ratio is the
            reading tool I didn&rsquo;t know I was missing.&rdquo;
          </blockquote>
          <div style={{ fontFamily: "var(--font-manrope)", fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(228,193,121,0.7)" }}>
            Dr. Layla Okonkwo &nbsp;&middot;&nbsp; Cognitive Scientist, University of Edinburgh
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div style={{ marginTop: 72, paddingTop: 60, borderTop: "1px solid rgba(228,193,121,0.08)" }}>
            <blockquote style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "clamp(18px, 2.5vw, 26px)",
              fontWeight: 300,
              fontStyle: "italic",
              color: "rgba(239,233,245,0.6)",
              lineHeight: 1.6,
              marginBottom: 24,
            }}>
              &ldquo;I dropped a 200-page due-diligence report in. Ratio gave me exactly
              what I needed to present to the board — in twelve minutes.&rdquo;
            </blockquote>
            <div style={{ fontFamily: "var(--font-manrope)", fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(228,193,121,0.5)" }}>
              Marcus Vael &nbsp;&middot;&nbsp; Partner, Vael Capital
            </div>
          </div>
        </Reveal>
      </section>

      {/* ── Grand CTA ── */}
      <section style={{ position: "relative", zIndex: 1, padding: "120px 48px", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <Reveal style={{ width: "100%", display: "flex", justifyContent: "center" }}>
          <GlassPanel style={{ width: "100%", maxWidth: 680, borderRadius: 16, padding: "72px 60px", textAlign: "center", position: "relative", overflow: "hidden" }}>
            {/* Panel glow */}
            <div
              aria-hidden="true"
              style={{
                position: "absolute",
                inset: -60,
                background: "radial-gradient(ellipse at 50% 0%, rgba(123,107,216,0.3) 0%, rgba(75,214,194,0.1) 50%, transparent 70%)",
                filter: "blur(40px)",
                pointerEvents: "none",
              }}
            />
            <div style={{ position: "relative", zIndex: 1 }}>
              <div style={{ fontSize: 9.5, fontFamily: "var(--font-manrope)", fontWeight: 600, letterSpacing: "0.22em", textTransform: "uppercase", color: "#e4c179", marginBottom: 20, display: "flex", alignItems: "center", justifyContent: "center", gap: 12 }}>
                <span style={{ display: "inline-block", width: 22, height: 1, background: "#e4c179", opacity: 0.5 }} />
                Begin your reading
              </div>
              <h2 style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(36px, 5vw, 58px)", fontWeight: 300, lineHeight: 1.1, color: "#efe9f5", marginBottom: 20 }}>
                Begin reading<br />
                <em style={{ fontStyle: "italic", color: "#e4c179" }}>beautifully</em>
              </h2>
              <p style={{ fontFamily: "var(--font-manrope)", fontSize: 14, color: "rgba(163,157,180,0.8)", lineHeight: 1.75, marginBottom: 44 }}>
                Drop in a PDF and experience what it feels like to truly understand
                a document — not just skim it. Free for your first three reads.
              </p>

              <div className="d5-upload-zone" role="button" tabIndex={0} aria-label="Upload PDF to begin">
                <div style={{
                  width: 48, height: 48,
                  borderRadius: "50%",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  background: "rgba(228,193,121,0.1)",
                  border: "1px solid rgba(228,193,121,0.2)",
                  color: "#e4c179",
                }}>
                  <Upload size={20} />
                </div>
                <div style={{ fontFamily: "var(--font-manrope)", fontSize: 14, fontWeight: 500, color: "rgba(239,233,245,0.8)" }}>
                  Drop your PDF here
                </div>
                <div style={{ fontFamily: "var(--font-manrope)", fontSize: 11, color: "rgba(163,157,180,0.5)", letterSpacing: "0.04em" }}>
                  or click to browse · up to 500 pages
                </div>
              </div>

              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 6, marginBottom: 24 }}>
                <Sparkles size={12} style={{ color: "rgba(228,193,121,0.5)" }} />
                <span style={{ fontFamily: "var(--font-manrope)", fontSize: 11, color: "rgba(163,157,180,0.6)", letterSpacing: "0.06em" }}>
                  Trusted by 12,000+ students, researchers &amp; professionals
                </span>
              </div>

              <div style={{ display: "flex", justifyContent: "center", gap: 20, flexWrap: "wrap" }}>
                {["No account required", "Results in seconds", "Private & secure"].map((t, i) => (
                  <span key={i} style={{ fontFamily: "var(--font-manrope)", fontSize: 10, color: "rgba(163,157,180,0.45)", letterSpacing: "0.06em" }}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </GlassPanel>
        </Reveal>
      </section>

      {/* ── Footer ── */}
      <footer style={{
        position: "relative",
        zIndex: 1,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "36px 48px",
        borderTop: "1px solid rgba(228,193,121,0.08)",
        flexWrap: "wrap",
        gap: 16,
      }}>
        <div style={{ fontFamily: "var(--font-cormorant)", fontSize: 18, fontWeight: 300, color: "rgba(239,233,245,0.4)", letterSpacing: "0.08em" }}>
          Ratio <em style={{ color: "rgba(228,193,121,0.5)", fontStyle: "italic" }}>Reader</em>
        </div>
        <div style={{ display: "flex", gap: 28 }}>
          <a href="#" className="d5-footer-lnk">Privacy</a>
          <a href="#" className="d5-footer-lnk">Terms</a>
          <a href="#" className="d5-footer-lnk">Contact</a>
        </div>
        <div style={{ fontFamily: "var(--font-manrope)", fontSize: 11, color: "rgba(163,157,180,0.3)", letterSpacing: "0.04em" }}>
          &copy; 2026 Ratio Reader. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
