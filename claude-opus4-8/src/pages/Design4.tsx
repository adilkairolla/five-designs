import { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "motion/react";
import { Upload, ArrowUpRight } from "lucide-react";

/* ─────────────────────────────────────────────
   DESIGN 4 — "LESS / MORE"
   Brutalist / Swiss-Maximalist
   Paper #f2f0ea · Ink #0a0a0a · Acid lime #d8f000
   Fonts: Anton (display) · Archivo (UI) · Space Mono (labels)
───────────────────────────────────────────── */

const LIME = "#d8f000";
const INK = "#0a0a0a";
const PAPER = "#f2f0ea";
const HOT = "#ff3b1d";

const MARQUEE_TEXT =
  "READ LESS · KNOW MORE · 180,000+ PAGES DISTILLED · EVERY PDF DECODED · RATIO READER · READ LESS · KNOW MORE · 180,000+ PAGES DISTILLED · EVERY PDF DECODED · RATIO READER · ";

const PILLARS = [
  {
    num: "01",
    name: "SMART SUMMARY",
    desc: "Distills any PDF to its most important points — structured, scannable, and immediately useful.",
    bg: INK,
    fg: LIME,
    labelFg: LIME,
    numFg: "#2a2a2a",
  },
  {
    num: "02",
    name: "MARGIN HINTS",
    desc: "Contextual hints that unlock difficult passages exactly where you need them, as you read.",
    bg: LIME,
    fg: INK,
    labelFg: INK,
    numFg: "#8a9c00",
  },
  {
    num: "03",
    name: "KEY QUOTES",
    desc: "The most important verbatim lines surfaced with page references — no more re-reading the whole thing.",
    bg: PAPER,
    fg: INK,
    labelFg: INK,
    numFg: "#c8c4b8",
  },
  {
    num: "04",
    name: "INSIGHTS",
    desc: "Connections, takeaways, and 'why it matters' that go beyond the text — the layer the document never shows you.",
    bg: INK,
    fg: PAPER,
    labelFg: LIME,
    numFg: "#2a2a2a",
  },
];

const STEPS = [
  { num: "1", title: "DROP IN YOUR PDF", desc: "Drag and drop or click to upload. Any PDF up to 500 pages." },
  { num: "2", title: "RATIO READS EVERY PAGE", desc: "Our engine analyses structure, language, and meaning across the full document." },
  { num: "3", title: "GET YOUR FULL BRIEFING", desc: "Summary, hints, key quotes, and insights — delivered in under 30 seconds." },
];

const PROOF = [
  { label: "Pages distilled", value: "180k+" },
  { label: "Hours saved / week", value: "~4hrs" },
  { label: "Avg. summarize time", value: "<30s" },
  { label: "Document types", value: "Any PDF" },
];

const TESTIMONIALS = [
  {
    quote: "I processed a 200-page regulation document in 28 seconds. Got straight to the three clauses that actually mattered.",
    name: "Maya Chen",
    role: "POLICY RESEARCHER, BROOKINGS",
  },
  {
    quote: "Every week I'd waste hours in dense reports. Ratio killed that habit. My annotations are sharper, my writing is faster.",
    name: "Tom Baxter",
    role: "PHD CANDIDATE, OXFORD",
  },
];

/* ── Sub-components (hooks used cleanly inside each) ── */

function HeroWord({ word, delay, lime = false }: { word: string; delay: number; lime?: boolean }) {
  const shouldReduce = useReducedMotion();
  return (
    <span style={{ display: "block", overflow: "hidden" }}>
      <motion.span
        style={{ display: "block", color: lime ? LIME : INK }}
        initial={shouldReduce ? false : { y: "110%", skewY: 3 }}
        animate={{ y: 0, skewY: 0 }}
        transition={{ duration: 0.72, delay, ease: [0.16, 1, 0.3, 1] }}
      >
        {word}
      </motion.span>
    </span>
  );
}

function AcidHighlight({ children }: { children: React.ReactNode }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });
  const shouldReduce = useReducedMotion();
  return (
    <span ref={ref} style={{ position: "relative", display: "inline" }}>
      <motion.span
        aria-hidden="true"
        style={{
          position: "absolute",
          left: "-2px",
          right: "-2px",
          top: "8%",
          bottom: "8%",
          backgroundColor: LIME,
          transformOrigin: "left center",
          zIndex: 0,
          pointerEvents: "none",
          display: "block",
        }}
        initial={{ scaleX: 0 }}
        animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
        transition={shouldReduce ? { duration: 0 } : { duration: 0.55, ease: [0.77, 0, 0.18, 1] }}
      />
      <span style={{ position: "relative", zIndex: 1 }}>{children}</span>
    </span>
  );
}

function PillarCard({ pillar, index }: { pillar: typeof PILLARS[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-5% 0px" });
  const shouldReduce = useReducedMotion();
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      ref={ref}
      style={{
        backgroundColor: pillar.bg,
        color: pillar.fg,
        border: `3px solid ${INK}`,
        padding: "clamp(1.5rem, 4vw, 2.5rem)",
        display: "flex",
        flexDirection: "column" as const,
        gap: "1rem",
        minHeight: "clamp(200px, 28vw, 340px)",
        cursor: "default",
        transform: hovered && !shouldReduce ? "translate(-4px, -4px)" : "translate(0,0)",
        boxShadow: hovered && !shouldReduce ? `6px 6px 0 ${INK}` : "none",
        transition: "transform 0.15s ease, box-shadow 0.15s ease",
      }}
      initial={shouldReduce ? false : { opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Big number */}
      <div
        style={{
          fontFamily: "Anton, Impact, sans-serif",
          fontSize: "clamp(3.5rem, 8vw, 6.5rem)",
          lineHeight: 1,
          letterSpacing: "-0.02em",
          color: pillar.numFg,
        }}
      >
        {pillar.num}
      </div>
      {/* Body */}
      <div style={{ display: "flex", flexDirection: "column", gap: "0.25rem", marginTop: "auto" }}>
        <div
          style={{
            fontFamily: "Space Mono, monospace",
            fontSize: "clamp(0.6rem, 1.1vw, 0.72rem)",
            letterSpacing: "0.15em",
            textTransform: "uppercase" as const,
            fontWeight: 700,
            color: pillar.labelFg,
            marginBottom: "0.3rem",
          }}
        >
          {pillar.name}
        </div>
        <p
          style={{
            fontFamily: "Archivo, sans-serif",
            fontSize: "clamp(0.85rem, 1.4vw, 0.95rem)",
            lineHeight: 1.55,
            fontWeight: 400,
            margin: 0,
            color: pillar.fg,
          }}
        >
          {pillar.desc}
        </p>
      </div>
    </motion.div>
  );
}

function StepRow({ step, index }: { step: typeof STEPS[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-5% 0px" });
  const shouldReduce = useReducedMotion();
  return (
    <motion.div
      ref={ref}
      style={{
        display: "flex",
        alignItems: "flex-start",
        gap: "clamp(1rem, 3vw, 2.5rem)",
        padding: "clamp(1.5rem, 3vw, 2rem) 0",
        borderBottom: `3px solid ${INK}`,
        borderTop: index === 0 ? `3px solid ${INK}` : "none",
      }}
      initial={shouldReduce ? false : { opacity: 0, x: -30 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
    >
      <div
        style={{
          fontFamily: "Anton, Impact, sans-serif",
          fontSize: "clamp(3.5rem, 8vw, 6rem)",
          lineHeight: 1,
          color: LIME,
          WebkitTextStroke: `2px ${INK}`,
          flexShrink: 0,
          width: "clamp(4rem, 9vw, 7rem)",
        }}
      >
        {step.num}
      </div>
      <div>
        <div
          style={{
            fontFamily: "Archivo, sans-serif",
            fontWeight: 900,
            fontSize: "clamp(1rem, 2.2vw, 1.5rem)",
            letterSpacing: "-0.01em",
            textTransform: "uppercase" as const,
            lineHeight: 1.1,
            marginBottom: "0.5rem",
          }}
        >
          {step.title}
        </div>
        <p
          style={{
            fontFamily: "Archivo, sans-serif",
            fontSize: "clamp(0.85rem, 1.4vw, 0.95rem)",
            fontWeight: 400,
            lineHeight: 1.6,
            color: "#333",
            margin: 0,
          }}
        >
          {step.desc}
        </p>
      </div>
    </motion.div>
  );
}

function TestiCard({ t, index }: { t: typeof TESTIMONIALS[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const shouldReduce = useReducedMotion();
  return (
    <motion.div
      ref={ref}
      style={{
        borderRight: `3px solid ${INK}`,
        borderBottom: `3px solid ${INK}`,
        padding: "clamp(1.5rem, 3vw, 2rem)",
      }}
      initial={shouldReduce ? false : { opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.45, delay: index * 0.1 }}
    >
      <div
        aria-hidden="true"
        style={{
          fontFamily: "Anton, Impact, sans-serif",
          fontSize: "4rem",
          lineHeight: 1,
          color: LIME,
          marginBottom: "0.25rem",
          display: "block",
          letterSpacing: "-0.02em",
        }}
      >
        &ldquo;
      </div>
      <p
        style={{
          fontFamily: "Archivo, sans-serif",
          fontSize: "clamp(0.9rem, 1.6vw, 1.05rem)",
          fontWeight: 700,
          lineHeight: 1.5,
          margin: "0 0 1rem",
        }}
      >
        &ldquo;{t.quote}&rdquo;
      </p>
      <span
        style={{
          fontFamily: "Archivo, sans-serif",
          fontSize: "0.9rem",
          fontWeight: 900,
          textTransform: "uppercase" as const,
          display: "block",
          letterSpacing: "-0.01em",
        }}
      >
        {t.name}
      </span>
      <span
        style={{
          fontFamily: "Space Mono, monospace",
          fontSize: "0.6rem",
          letterSpacing: "0.1em",
          color: "#666",
          display: "block",
          marginTop: "0.2rem",
        }}
      >
        {t.role}
      </span>
    </motion.div>
  );
}

function ProductMock() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-5% 0px" });
  const shouldReduce = useReducedMotion();

  return (
    <motion.div
      ref={ref}
      style={{ maxWidth: "900px", margin: "0 auto" }}
      initial={shouldReduce ? false : { opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
    >
      <div
        style={{
          border: `3px solid ${INK}`,
          background: INK,
          boxShadow: `8px 8px 0 ${INK}`,
        }}
      >
        {/* Topbar */}
        <div
          style={{
            background: "#111",
            borderBottom: "2px solid #2a2a2a",
            padding: "0.6rem 1rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <span
            style={{
              fontFamily: "Space Mono, monospace",
              fontSize: "0.62rem",
              color: "#777",
              letterSpacing: "0.08em",
            }}
          >
            IPCC_Climate_Report_2024.pdf
          </span>
          <span
            style={{
              fontFamily: "Space Mono, monospace",
              fontSize: "0.58rem",
              letterSpacing: "0.15em",
              padding: "0.15rem 0.5rem",
              fontWeight: 700,
              backgroundColor: LIME,
              color: INK,
            }}
          >
            ANALYZED
          </span>
        </div>

        {/* Body */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            minHeight: "340px",
          }}
          className="d4-mock-body"
        >
          {/* Left: source doc */}
          <div
            style={{
              borderRight: "2px solid #2a2a2a",
              padding: "1.25rem",
            }}
          >
            <div
              style={{
                fontFamily: "Space Mono, monospace",
                fontSize: "0.52rem",
                letterSpacing: "0.18em",
                textTransform: "uppercase" as const,
                color: "#4a4a4a",
                marginBottom: "0.75rem",
              }}
            >
              SOURCE DOCUMENT
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.45rem" }}>
              {[
                { w: "70%", h: "12px", bg: "#3a3a3a" },
                { w: "72%", h: "8px", bg: "#2a2a2a" },
                { w: "100%", h: "8px", bg: "#2a2a2a" },
                { w: "88%", h: "8px", bg: "#2a2a2a" },
                { w: "55%", h: "8px", bg: "#2a2a2a" },
                { w: "100%", h: "8px", bg: "#2a2a2a" },
                { w: "100%", h: "8px", bg: "#2a2a2a" },
                { w: "72%", h: "8px", bg: "#2a2a2a" },
              ].map((ln, i) => (
                <div
                  key={i}
                  style={{ width: ln.w, height: ln.h, backgroundColor: ln.bg, borderRadius: "1px" }}
                />
              ))}
              {/* hint row */}
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginTop: "0.1rem" }}>
                <div style={{ flex: 1, height: "8px", backgroundColor: "#1e1e1e", borderRadius: "1px" }} />
                <span
                  style={{
                    fontFamily: "Space Mono, monospace",
                    fontSize: "0.46rem",
                    letterSpacing: "0.1em",
                    backgroundColor: LIME,
                    color: INK,
                    padding: "1px 5px",
                    whiteSpace: "nowrap" as const,
                    flexShrink: 0,
                  }}
                >
                  HINT
                </span>
              </div>
              {[
                { w: "55%", h: "8px", bg: "#1a1a1a" },
                { w: "100%", h: "8px", bg: "#1a1a1a" },
              ].map((ln, i) => (
                <div
                  key={i}
                  style={{ width: ln.w, height: ln.h, backgroundColor: ln.bg, borderRadius: "1px" }}
                />
              ))}
            </div>
          </div>

          {/* Right: output */}
          <div
            style={{
              padding: "1.25rem",
              display: "flex",
              flexDirection: "column",
              gap: "0.75rem",
            }}
          >
            <div
              style={{
                fontFamily: "Space Mono, monospace",
                fontSize: "0.52rem",
                letterSpacing: "0.18em",
                textTransform: "uppercase" as const,
                color: "#4a4a4a",
                marginBottom: "0.25rem",
              }}
            >
              RATIO OUTPUT
            </div>

            {/* Summary card */}
            <div style={{ border: `2px solid ${LIME}`, overflow: "hidden" }}>
              <div
                style={{
                  fontFamily: "Space Mono, monospace",
                  fontSize: "0.52rem",
                  letterSpacing: "0.14em",
                  padding: "0.3rem 0.6rem",
                  fontWeight: 700,
                  backgroundColor: INK,
                  color: LIME,
                }}
              >
                SMART SUMMARY
              </div>
              <div
                style={{
                  padding: "0.6rem",
                  backgroundColor: INK,
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.4rem",
                }}
              >
                {/* Highlighted summary line */}
                <div
                  style={{
                    backgroundColor: LIME,
                    color: INK,
                    height: "20px",
                    display: "flex",
                    alignItems: "center",
                    padding: "0 6px",
                    fontFamily: "Space Mono, monospace",
                    fontSize: "0.52rem",
                    fontWeight: 700,
                    letterSpacing: "0.04em",
                    overflow: "hidden",
                    whiteSpace: "nowrap" as const,
                    textOverflow: "ellipsis",
                  }}
                >
                  Global surface temps have risen 1.1°C above pre-industrial levels.
                </div>
                <div style={{ height: "8px", backgroundColor: "#222", borderRadius: "1px" }} />
                <div style={{ height: "8px", backgroundColor: "#222", borderRadius: "1px", width: "65%" }} />
              </div>
            </div>

            {/* Key quote card */}
            <div style={{ border: `2px solid #333`, overflow: "hidden" }}>
              <div
                style={{
                  fontFamily: "Space Mono, monospace",
                  fontSize: "0.52rem",
                  letterSpacing: "0.14em",
                  padding: "0.3rem 0.6rem",
                  fontWeight: 700,
                  backgroundColor: PAPER,
                  color: INK,
                }}
              >
                KEY QUOTE — P.47
              </div>
              <div
                style={{
                  padding: "0.6rem",
                  backgroundColor: PAPER,
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.4rem",
                }}
              >
                <div style={{ height: "8px", backgroundColor: "#bbb", borderRadius: "1px" }} />
                <div style={{ height: "8px", backgroundColor: "#bbb", borderRadius: "1px", width: "65%" }} />
              </div>
            </div>

            {/* Insight card */}
            <div style={{ border: `2px solid #333`, overflow: "hidden" }}>
              <div
                style={{
                  fontFamily: "Space Mono, monospace",
                  fontSize: "0.52rem",
                  letterSpacing: "0.14em",
                  padding: "0.3rem 0.6rem",
                  fontWeight: 700,
                  backgroundColor: "#1a1a1a",
                  color: PAPER,
                }}
              >
                INSIGHT
              </div>
              <div
                style={{
                  padding: "0.6rem",
                  backgroundColor: "#1a1a1a",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.4rem",
                }}
              >
                <div style={{ height: "8px", backgroundColor: "#333", borderRadius: "1px" }} />
                <div style={{ height: "8px", backgroundColor: "#333", borderRadius: "1px", width: "80%" }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* ── Main page component ──────────────────────────────── */
export function Design4() {
  const shouldReduce = useReducedMotion();
  const marqueeRef = useRef<HTMLDivElement>(null);

  // Clean up: nothing to teardown for CSS animation, but respect the pattern
  useEffect(() => {
    return () => {};
  }, []);

  return (
    <div
      style={{
        backgroundColor: PAPER,
        color: INK,
        fontFamily: "Archivo, sans-serif",
        overflowX: "hidden",
        minHeight: "100vh",
      }}
    >
      {/* ── Scoped styles ─────────────────────────── */}
      <style>{`
        .d4-root-inner *, .d4-root-inner *::before, .d4-root-inner *::after {
          box-sizing: border-box;
        }

        @keyframes d4-marquee-scroll {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        .d4-marquee-inner {
          display: flex;
          width: max-content;
          animation: d4-marquee-scroll 20s linear infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .d4-marquee-inner { animation-play-state: paused; }
        }

        .d4-mock-body {
          display: grid;
          grid-template-columns: 1fr 1fr;
          min-height: 340px;
        }
        @media (max-width: 600px) {
          .d4-mock-body { grid-template-columns: 1fr; }
        }

        .d4-pillars-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
        }
        @media (max-width: 640px) {
          .d4-pillars-grid { grid-template-columns: 1fr; }
        }

        .d4-proof-row {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          border-left: 3px solid ${INK};
          border-top: 3px solid ${INK};
        }
        @media (max-width: 640px) {
          .d4-proof-row { grid-template-columns: 1fr 1fr; }
        }

        .d4-testi-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          border-top: 3px solid ${INK};
          border-left: 3px solid ${INK};
        }
        @media (max-width: 640px) {
          .d4-testi-grid { grid-template-columns: 1fr; }
        }

        .d4-hero-grid {
          display: grid;
          grid-template-columns: 1fr max-content;
          align-items: end;
          gap: 2rem;
          padding-bottom: clamp(2rem, 4vw, 3rem);
          border-bottom: 3px solid ${INK};
        }
        @media (max-width: 700px) {
          .d4-hero-grid { grid-template-columns: 1fr; }
          .d4-hero-side { display: none; }
        }

        .d4-nav { display: flex; align-items: center; gap: clamp(1rem, 2.5vw, 2rem); }
        @media (max-width: 640px) { .d4-nav { display: none; } }

        .d4-footer-row {
          border-top: 3px solid ${INK};
          padding: 1.5rem clamp(1.25rem, 5vw, 4rem);
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 0.75rem;
        }

        .d4-btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: ${LIME};
          color: ${INK};
          font-family: Archivo, sans-serif;
          font-weight: 900;
          font-size: 0.7rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          padding: 0.6rem 1.2rem;
          border: 3px solid ${INK};
          cursor: pointer;
          transition: background 0.15s, color 0.15s, transform 0.12s, box-shadow 0.12s;
          text-decoration: none;
        }
        .d4-btn-primary:hover {
          background: ${INK};
          color: ${LIME};
          transform: translate(-3px, -3px);
          box-shadow: 4px 4px 0 ${LIME};
        }

        .d4-btn-secondary {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: transparent;
          color: ${INK};
          font-family: Archivo, sans-serif;
          font-weight: 900;
          font-size: 0.8rem;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          padding: 0.75rem 1.5rem;
          border: 3px solid ${INK};
          cursor: pointer;
          transition: background 0.15s, color 0.15s;
          text-decoration: none;
        }
        .d4-btn-secondary:hover {
          background: ${INK};
          color: ${PAPER};
        }

        .d4-btn-hero {
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          background: ${LIME};
          color: ${INK};
          font-family: Archivo, sans-serif;
          font-weight: 900;
          font-size: clamp(1rem, 2vw, 1.15rem);
          text-transform: uppercase;
          letter-spacing: 0.1em;
          padding: 1.1rem 2.2rem;
          border: 3px solid ${INK};
          cursor: pointer;
          transition: background 0.15s, color 0.15s, transform 0.12s, box-shadow 0.12s;
          text-decoration: none;
        }
        .d4-btn-hero:hover {
          background: ${INK};
          color: ${LIME};
          transform: translate(-4px, -4px);
          box-shadow: 6px 6px 0 ${LIME};
        }

        .d4-btn-cta {
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          background: ${LIME};
          color: ${INK};
          font-family: Archivo, sans-serif;
          font-weight: 900;
          font-size: clamp(1.1rem, 2.5vw, 1.45rem);
          text-transform: uppercase;
          letter-spacing: 0.1em;
          padding: clamp(1rem, 2.5vw, 1.4rem) clamp(2rem, 5vw, 3.5rem);
          border: 4px solid ${LIME};
          cursor: pointer;
          transition: background 0.15s, color 0.15s, border-color 0.15s, transform 0.12s, box-shadow 0.12s;
          text-decoration: none;
        }
        .d4-btn-cta:hover {
          background: transparent;
          color: ${LIME};
          transform: translate(-5px, -5px);
          box-shadow: 8px 8px 0 ${LIME};
        }

        .d4-nav-link {
          font-family: Space Mono, monospace;
          font-size: 0.65rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: ${INK};
          text-decoration: none;
          font-weight: 700;
          transition: color 0.12s;
        }
        .d4-nav-link:hover { color: ${HOT}; }

        .d4-footer-link {
          font-family: Space Mono, monospace;
          font-size: 0.6rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #888;
          text-decoration: none;
        }
        .d4-footer-link:hover { color: ${INK}; }
      `}</style>

      <div className="d4-root-inner">

        {/* ── Top bar ─────────────────────────────── */}
        <header
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "1rem clamp(1.25rem, 5vw, 4rem)",
            borderBottom: `3px solid ${INK}`,
            position: "sticky",
            top: 0,
            zIndex: 50,
            backgroundColor: PAPER,
          }}
        >
          <div
            style={{
              fontFamily: "Anton, Impact, sans-serif",
              fontSize: "clamp(1.4rem, 3vw, 1.8rem)",
              letterSpacing: "-0.01em",
              lineHeight: 1,
            }}
          >
            RATIO
            <span style={{ color: LIME, WebkitTextStroke: `1px ${INK}` }}>_</span>
            READER
          </div>
          <nav className="d4-nav">
            <a href="#how" className="d4-nav-link">How It Works</a>
            <a href="#features" className="d4-nav-link">Features</a>
            <a href="#preview" className="d4-nav-link">Preview</a>
          </nav>
          <a href="#upload" className="d4-btn-primary">
            <Upload size={13} />
            Upload PDF
          </a>
        </header>

        {/* ── Hero ────────────────────────────────── */}
        <section
          style={{
            padding: "clamp(2.5rem, 5vw, 4.5rem) clamp(1.25rem, 5vw, 4rem)",
            borderBottom: `3px solid ${INK}`,
          }}
        >
          {/* Section tag */}
          <div
            style={{
              fontFamily: "Space Mono, monospace",
              fontSize: "0.6rem",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "#777",
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              marginBottom: "1.5rem",
            }}
          >
            <span
              style={{
                display: "inline-block",
                width: "24px",
                height: "2px",
                backgroundColor: INK,
              }}
            />
            RATIO READER — PDF INTELLIGENCE
          </div>

          <div className="d4-hero-grid">
            {/* Giant headline */}
            <div>
              <h1
                aria-label="Read less. Know more."
                style={{
                  fontFamily: "Anton, Impact, sans-serif",
                  fontSize: "clamp(4.5rem, 14vw, 11rem)",
                  lineHeight: 0.92,
                  letterSpacing: "-0.02em",
                  textTransform: "uppercase",
                  margin: 0,
                }}
              >
                <HeroWord word="READ" delay={0.05} />
                <HeroWord word="LESS." delay={0.15} />
                <HeroWord word="KNOW" delay={0.25} />
                <HeroWord word="MORE." delay={0.35} lime />
              </h1>
            </div>

            {/* Side panel */}
            <div
              className="d4-hero-side"
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                alignItems: "flex-end",
                paddingBottom: "0.25rem",
                minWidth: "200px",
              }}
            >
              <p
                style={{
                  fontFamily: "Archivo, sans-serif",
                  fontSize: "clamp(0.8rem, 1.3vw, 0.9rem)",
                  fontWeight: 400,
                  lineHeight: 1.6,
                  color: "#444",
                  textAlign: "right",
                  maxWidth: "230px",
                  margin: 0,
                }}
              >
                Drop in any PDF. Ratio reads every page, then hands you a distilled briefing — summary, hints, quotes, and insights — in under 30 seconds.
              </p>
              <a href="#upload" className="d4-btn-hero">
                <Upload size={17} />
                Upload a PDF
              </a>
              <a href="#preview" className="d4-btn-secondary">
                See a Sample <ArrowUpRight size={13} />
              </a>
            </div>
          </div>

          {/* Proof strip */}
          <motion.div
            className="d4-proof-row"
            style={{ marginTop: "2.5rem", border: `3px solid ${INK}` }}
            initial={shouldReduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.75 }}
          >
            {PROOF.map((p) => (
              <div
                key={p.label}
                style={{
                  borderRight: `3px solid ${INK}`,
                  borderBottom: `3px solid ${INK}`,
                  padding: "clamp(0.9rem, 2vw, 1.5rem)",
                }}
              >
                <span
                  style={{
                    fontFamily: "Anton, Impact, sans-serif",
                    fontSize: "clamp(1.8rem, 4.5vw, 3rem)",
                    lineHeight: 1,
                    letterSpacing: "-0.02em",
                    display: "block",
                  }}
                >
                  {p.value}
                </span>
                <span
                  style={{
                    fontFamily: "Space Mono, monospace",
                    fontSize: "clamp(0.55rem, 0.9vw, 0.68rem)",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "#555",
                    display: "block",
                    marginTop: "0.35rem",
                  }}
                >
                  {p.label}
                </span>
              </div>
            ))}
          </motion.div>
        </section>

        {/* ── Marquee ──────────────────────────────── */}
        <div
          aria-hidden="true"
          style={{
            borderTop: `3px solid ${INK}`,
            borderBottom: `3px solid ${INK}`,
            backgroundColor: LIME,
            overflow: "hidden",
            padding: "0.8rem 0",
          }}
        >
          <div className="d4-marquee-inner" ref={marqueeRef}>
            <span
              style={{
                fontFamily: "Anton, Impact, sans-serif",
                fontSize: "clamp(1.5rem, 3.5vw, 2.2rem)",
                letterSpacing: "0.03em",
                color: INK,
                whiteSpace: "nowrap",
              }}
            >
              {MARQUEE_TEXT}
            </span>
            <span
              style={{
                fontFamily: "Anton, Impact, sans-serif",
                fontSize: "clamp(1.5rem, 3.5vw, 2.2rem)",
                letterSpacing: "0.03em",
                color: INK,
                whiteSpace: "nowrap",
              }}
            >
              {MARQUEE_TEXT}
            </span>
          </div>
        </div>

        {/* ── How It Works ─────────────────────────── */}
        <section
          id="how"
          style={{
            padding: "clamp(3rem, 6vw, 5rem) clamp(1.25rem, 5vw, 4rem)",
            borderBottom: `3px solid ${INK}`,
          }}
        >
          {/* Section tag */}
          <div
            style={{
              fontFamily: "Space Mono, monospace",
              fontSize: "0.6rem",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "#777",
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              marginBottom: "1.5rem",
            }}
          >
            <span style={{ display: "inline-block", width: "24px", height: "2px", backgroundColor: INK }} />
            HOW IT WORKS — 3 STEPS
          </div>

          <h2
            style={{
              fontFamily: "Anton, Impact, sans-serif",
              fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
              lineHeight: 0.95,
              letterSpacing: "-0.02em",
              textTransform: "uppercase",
              margin: "0 0 2.5rem",
            }}
          >
            EVERY PDF,{" "}
            <br />
            <AcidHighlight>DISTILLED.</AcidHighlight>
          </h2>

          <div>
            {STEPS.map((s, i) => (
              <StepRow key={s.num} step={s} index={i} />
            ))}
          </div>
        </section>

        {/* ── 4 Pillars ────────────────────────────── */}
        <section
          id="features"
          style={{ borderTop: `3px solid ${INK}`, borderBottom: `3px solid ${INK}` }}
        >
          <div
            style={{
              padding: "clamp(2rem, 4vw, 3.5rem) clamp(1.25rem, 5vw, 4rem)",
              borderBottom: `3px solid ${INK}`,
            }}
          >
            <div
              style={{
                fontFamily: "Space Mono, monospace",
                fontSize: "0.6rem",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "#777",
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                marginBottom: "1.5rem",
              }}
            >
              <span style={{ display: "inline-block", width: "24px", height: "2px", backgroundColor: INK }} />
              FOUR PILLARS — WHAT YOU GET
            </div>
            <h2
              style={{
                fontFamily: "Anton, Impact, sans-serif",
                fontSize: "clamp(2rem, 5.5vw, 4rem)",
                letterSpacing: "-0.02em",
                textTransform: "uppercase",
                lineHeight: 0.95,
                margin: 0,
              }}
            >
              EVERYTHING THE
              <br />
              <AcidHighlight>DOCUMENT HIDES.</AcidHighlight>
            </h2>
          </div>
          <div className="d4-pillars-grid">
            {PILLARS.map((p, i) => (
              <PillarCard key={p.num} pillar={p} index={i} />
            ))}
          </div>
        </section>

        {/* ── Product Preview ──────────────────────── */}
        <section
          id="preview"
          style={{
            padding: "clamp(3rem, 6vw, 5rem) clamp(1.25rem, 5vw, 4rem)",
            borderBottom: `3px solid ${INK}`,
          }}
        >
          <div
            style={{
              fontFamily: "Space Mono, monospace",
              fontSize: "0.6rem",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "#777",
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              marginBottom: "1.5rem",
            }}
          >
            <span style={{ display: "inline-block", width: "24px", height: "2px", backgroundColor: INK }} />
            PRODUCT PREVIEW — WHAT YOU SEE
          </div>
          <h2
            style={{
              fontFamily: "Anton, Impact, sans-serif",
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              letterSpacing: "-0.02em",
              textTransform: "uppercase",
              lineHeight: 0.95,
              margin: "0 0 2.5rem",
            }}
          >
            THE FULL <AcidHighlight>BRIEFING.</AcidHighlight>
          </h2>
          <ProductMock />
          <p
            style={{
              fontFamily: "Space Mono, monospace",
              fontSize: "0.62rem",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "#888",
              marginTop: "1.5rem",
              textAlign: "center",
            }}
          >
            Actual output from IPCC Climate Report 2024 (206 pages) — analyzed in 22 seconds
          </p>
        </section>

        {/* ── Testimonials ─────────────────────────── */}
        <section style={{ borderBottom: `3px solid ${INK}` }}>
          <div
            style={{
              padding: "clamp(2rem, 4vw, 3rem) clamp(1.25rem, 5vw, 4rem)",
              borderBottom: `3px solid ${INK}`,
            }}
          >
            <div
              style={{
                fontFamily: "Space Mono, monospace",
                fontSize: "0.6rem",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "#777",
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
              }}
            >
              <span style={{ display: "inline-block", width: "24px", height: "2px", backgroundColor: INK }} />
              TRUSTED BY READERS WHO HAVE TOO MUCH TO READ
            </div>
          </div>
          <div className="d4-testi-grid">
            {TESTIMONIALS.map((t, i) => (
              <TestiCard key={t.name} t={t} index={i} />
            ))}
          </div>
        </section>

        {/* ── CTA Section (inverted) ───────────────── */}
        <section
          id="upload"
          style={{
            backgroundColor: INK,
            color: PAPER,
            padding: "clamp(3rem, 6vw, 5.5rem) clamp(1.25rem, 5vw, 4rem)",
          }}
        >
          <div style={{ maxWidth: "900px" }}>
            <div
              style={{
                fontFamily: "Space Mono, monospace",
                fontSize: "0.6rem",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "#555",
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                marginBottom: "1.5rem",
              }}
            >
              <span style={{ display: "inline-block", width: "24px", height: "2px", backgroundColor: "#555" }} />
              START NOW — NO ACCOUNT REQUIRED
            </div>
            <h2
              style={{
                fontFamily: "Anton, Impact, sans-serif",
                fontSize: "clamp(3rem, 9vw, 7rem)",
                lineHeight: 0.92,
                letterSpacing: "-0.02em",
                textTransform: "uppercase",
                color: PAPER,
                margin: "0 0 clamp(1.5rem, 3vw, 2.5rem)",
              }}
            >
              DENSE DOCS.
              <br />
              <span style={{ color: LIME }}>CLEAR THINKING.</span>
            </h2>
            <p
              style={{
                fontFamily: "Space Mono, monospace",
                fontSize: "clamp(0.62rem, 1.2vw, 0.78rem)",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "#888",
                marginBottom: "clamp(2rem, 4vw, 3rem)",
              }}
            >
              Drop a PDF. Get your briefing in under 30 seconds.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", alignItems: "center" }}>
              <a href="#upload" className="d4-btn-cta">
                <Upload size={21} />
                UPLOAD A PDF
              </a>
              <a
                href="#preview"
                style={{
                  fontFamily: "Space Mono, monospace",
                  fontSize: "0.68rem",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "#666",
                  textDecoration: "none",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.4rem",
                  transition: "color 0.12s",
                }}
                onMouseEnter={(e) => ((e.target as HTMLElement).style.color = LIME)}
                onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "#666")}
              >
                See a sample first <ArrowUpRight size={12} />
              </a>
            </div>

            {/* Small proof footer */}
            <div
              style={{
                display: "flex",
                gap: "2rem",
                marginTop: "3rem",
                flexWrap: "wrap",
                borderTop: "1px solid #222",
                paddingTop: "1.5rem",
              }}
            >
              {[
                "180,000+ pages distilled",
                "~4 hours saved per week",
                "Any PDF — any size",
              ].map((item) => (
                <span
                  key={item}
                  style={{
                    fontFamily: "Space Mono, monospace",
                    fontSize: "0.58rem",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "#444",
                  }}
                >
                  ✓ {item}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ── Footer ───────────────────────────────── */}
        <footer className="d4-footer-row">
          <span
            style={{
              fontFamily: "Space Mono, monospace",
              fontSize: "0.6rem",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "#888",
            }}
          >
            © 2025 Ratio Reader — Dense docs, clear thinking.
          </span>
          <div style={{ display: "flex", gap: "1.5rem" }}>
            {["Privacy", "Terms", "Contact"].map((l) => (
              <a key={l} href="#" className="d4-footer-link">
                {l}
              </a>
            ))}
          </div>
        </footer>
      </div>
    </div>
  );
}
