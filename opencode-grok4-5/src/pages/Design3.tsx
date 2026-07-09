import { useRef, useEffect, useState, type ReactNode, type CSSProperties } from "react";

/* ═══════════════════════════════════════════════════════════
   Design 3 — "Power Ratio"
   Swiss brutalist: white/black/signal yellow, Archivo Black
   + DM Sans. Reading as pure proportion. No ornament.
═══════════════════════════════════════════════════════════ */

const C = {
  paper: "#F5F5F0",
  black: "#0A0A0A",
  yellow: "#FFE500",
  gray: "#6E6E6A",
  line: "#0A0A0A",
  soft: "#E8E8E2",
};

function useInView(threshold = 0.12) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { threshold },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);
  return { ref, inView };
}

function Reveal({
  children,
  delay = 0,
  style,
}: {
  children: ReactNode;
  delay?: number;
  style?: CSSProperties;
}) {
  const { ref, inView } = useInView();
  return (
    <div
      ref={ref}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "none" : "translateY(20px)",
        transition: `opacity 0.65s cubic-bezier(0.2,0.8,0.2,1) ${delay}s, transform 0.65s cubic-bezier(0.2,0.8,0.2,1) ${delay}s`,
        ...style,
      }}
    >
      {children}
    </div>
  );
}

const features = [
  {
    n: "01",
    title: "Summary",
    ratio: "1:10",
    body: "Compress any document to its structural truth. Ratio keeps the argument, discards the padding.",
  },
  {
    n: "02",
    title: "Hints",
    ratio: "Δx",
    body: "Pointed nudges at friction points — jargon, jumps, missing prior knowledge.",
  },
  {
    n: "03",
    title: "Quotes",
    ratio: "Q→",
    body: "The sentences that carry weight, extracted with page precision.",
  },
  {
    n: "04",
    title: "Insights",
    ratio: "Σ",
    body: "Patterns, tensions, and takeaways arranged for reuse — not for decoration.",
  },
];

export function Design3() {
  return (
    <div
      style={{
        background: C.paper,
        color: C.black,
        fontFamily: "'DM Sans', system-ui, sans-serif",
        minHeight: "100vh",
      }}
    >
      <style>{`
        .d3-btn {
          transition: background 0.15s ease, color 0.15s ease, transform 0.15s ease;
        }
        .d3-btn:hover {
          background: ${C.yellow} !important;
          color: ${C.black} !important;
          transform: translate(-2px, -2px);
          box-shadow: 4px 4px 0 ${C.black};
        }
        .d3-row:hover .d3-num {
          background: ${C.yellow};
        }
        .d3-link:hover {
          text-decoration: underline;
          text-underline-offset: 4px;
        }
      `}</style>

      {/* Top strip */}
      <div
        style={{
          background: C.black,
          color: C.paper,
          fontSize: 11,
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          padding: "8px 4vw",
          display: "flex",
          justifyContent: "space-between",
          fontWeight: 500,
        }}
      >
        <span>Ratio Reader</span>
        <span>Reading Systems / 2026</span>
      </div>

      {/* Nav */}
      <nav
        style={{
          display: "grid",
          gridTemplateColumns: "1fr auto auto auto",
          gap: 24,
          alignItems: "center",
          padding: "1.1rem 4vw",
          borderBottom: `3px solid ${C.black}`,
        }}
      >
        <span
          style={{
            fontFamily: "'Archivo Black', sans-serif",
            fontSize: 22,
            letterSpacing: "-0.03em",
          }}
        >
          RATIO
        </span>
        {["Features", "Process", "Proof"].map((l) => (
          <a
            key={l}
            href={`#${l.toLowerCase()}`}
            className="d3-link"
            style={{
              color: C.black,
              textDecoration: "none",
              fontSize: 13,
              fontWeight: 600,
              letterSpacing: "0.04em",
              textTransform: "uppercase",
            }}
          >
            {l}
          </a>
        ))}
      </nav>

      {/* Hero — split */}
      <header
        style={{
          display: "grid",
          gridTemplateColumns: "1.2fr 0.8fr",
          borderBottom: `3px solid ${C.black}`,
          minHeight: "min(78vh, 720px)",
        }}
      >
        <div
          style={{
            padding: "clamp(2.5rem, 7vw, 5rem) 4vw",
            borderRight: `3px solid ${C.black}`,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Reveal>
            <p
              style={{
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                marginBottom: 20,
              }}
            >
              Document apparatus · PDF → mind
            </p>
            <h1
              style={{
                fontFamily: "'Archivo Black', sans-serif",
                fontSize: "clamp(3rem, 9vw, 6.5rem)",
                lineHeight: 0.9,
                letterSpacing: "-0.04em",
                margin: 0,
                textTransform: "uppercase",
              }}
            >
              Cut the
              <br />
              noise.
              <br />
              <span
                style={{
                  background: C.yellow,
                  padding: "0 0.1em",
                  boxDecorationBreak: "clone",
                  WebkitBoxDecorationBreak: "clone",
                }}
              >
                Keep the
              </span>
              <br />
              ratio.
            </h1>
          </Reveal>
          <Reveal delay={0.12}>
            <div
              style={{
                display: "flex",
                gap: 16,
                alignItems: "flex-end",
                flexWrap: "wrap",
                marginTop: 40,
              }}
            >
              <a
                href="#start"
                className="d3-btn"
                style={{
                  background: C.black,
                  color: C.paper,
                  textDecoration: "none",
                  padding: "1.05rem 1.6rem",
                  fontSize: 13,
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  border: `3px solid ${C.black}`,
                }}
              >
                Upload PDF
              </a>
              <p
                style={{
                  margin: 0,
                  maxWidth: 280,
                  fontSize: 14,
                  lineHeight: 1.5,
                  color: C.gray,
                  fontWeight: 500,
                }}
              >
                Summaries. Hints. Quotes. Insights. Nothing decorative.
              </p>
            </div>
          </Reveal>
        </div>

        {/* Right block — giant number */}
        <div
          style={{
            background: C.black,
            color: C.paper,
            padding: "clamp(2rem, 5vw, 3.5rem) 4vw",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Reveal delay={0.1}>
            <div
              style={{
                fontFamily: "'Archivo Black', sans-serif",
                fontSize: "clamp(5rem, 14vw, 10rem)",
                lineHeight: 0.85,
                letterSpacing: "-0.05em",
                color: C.yellow,
              }}
            >
              4×
            </div>
            <p
              style={{
                fontSize: 14,
                fontWeight: 600,
                marginTop: 12,
                maxWidth: 220,
                lineHeight: 1.4,
              }}
            >
              Output layers from every document you feed the system.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <div
              style={{
                borderTop: `2px solid ${C.paper}`,
                paddingTop: 16,
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 12,
                fontSize: 12,
                fontWeight: 600,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
              }}
            >
              <div>
                <div style={{ color: C.yellow, marginBottom: 4 }}>47m</div>
                <div style={{ opacity: 0.55 }}>avg time saved</div>
              </div>
              <div>
                <div style={{ color: C.yellow, marginBottom: 4 }}>PDF</div>
                <div style={{ opacity: 0.55 }}>only format</div>
              </div>
            </div>
          </Reveal>
        </div>
      </header>

      {/* Features — numbered rows */}
      <section id="features" style={{ borderBottom: `3px solid ${C.black}` }}>
        <div
          style={{
            padding: "1.5rem 4vw",
            borderBottom: `3px solid ${C.black}`,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "baseline",
            background: C.soft,
          }}
        >
          <h2
            style={{
              fontFamily: "'Archivo Black', sans-serif",
              fontSize: "clamp(1.4rem, 3vw, 1.8rem)",
              margin: 0,
              letterSpacing: "-0.02em",
              textTransform: "uppercase",
            }}
          >
            What you get
          </h2>
          <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.14em" }}>004 UNITS</span>
        </div>
        {features.map((f, i) => (
          <Reveal key={f.n} delay={i * 0.05}>
            <div
              className="d3-row"
              style={{
                display: "grid",
                gridTemplateColumns: "80px 1fr 100px 2fr",
                gap: 16,
                alignItems: "center",
                padding: "1.6rem 4vw",
                borderBottom: i < features.length - 1 ? `2px solid ${C.black}` : undefined,
                cursor: "default",
              }}
            >
              <span
                className="d3-num"
                style={{
                  fontFamily: "'Archivo Black', sans-serif",
                  fontSize: 28,
                  letterSpacing: "-0.03em",
                  transition: "background 0.15s",
                  display: "inline-block",
                  padding: "0 4px",
                }}
              >
                {f.n}
              </span>
              <h3
                style={{
                  fontFamily: "'Archivo Black', sans-serif",
                  fontSize: "clamp(1.3rem, 2.5vw, 1.75rem)",
                  margin: 0,
                  letterSpacing: "-0.02em",
                  textTransform: "uppercase",
                }}
              >
                {f.title}
              </h3>
              <span
                style={{
                  fontFamily: "'Archivo Black', sans-serif",
                  fontSize: 20,
                  color: C.gray,
                }}
              >
                {f.ratio}
              </span>
              <p style={{ margin: 0, fontSize: 15, lineHeight: 1.5, color: C.gray, fontWeight: 500 }}>
                {f.body}
              </p>
            </div>
          </Reveal>
        ))}
      </section>

      {/* Process */}
      <section
        id="process"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          borderBottom: `3px solid ${C.black}`,
        }}
      >
        {[
          { n: "A", t: "Drop", d: "Upload any PDF. Entire document. No cagey sampling." },
          { n: "B", t: "Compute", d: "Ratio maps structure, claims, and friction points." },
          { n: "C", t: "Receive", d: "Four-layer apparatus. Ready in roughly one breath." },
        ].map((s, i) => (
          <Reveal key={s.n} delay={i * 0.08}>
            <div
              style={{
                padding: "3rem 4vw",
                borderRight: i < 2 ? `3px solid ${C.black}` : undefined,
                minHeight: 240,
              }}
            >
              <div
                style={{
                  width: 48,
                  height: 48,
                  background: i === 1 ? C.yellow : C.black,
                  color: i === 1 ? C.black : C.paper,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontFamily: "'Archivo Black', sans-serif",
                  fontSize: 20,
                  marginBottom: 20,
                }}
              >
                {s.n}
              </div>
              <h3
                style={{
                  fontFamily: "'Archivo Black', sans-serif",
                  fontSize: 28,
                  margin: "0 0 10px",
                  textTransform: "uppercase",
                  letterSpacing: "-0.02em",
                }}
              >
                {s.t}
              </h3>
              <p style={{ margin: 0, fontSize: 15, lineHeight: 1.55, color: C.gray, fontWeight: 500 }}>
                {s.d}
              </p>
            </div>
          </Reveal>
        ))}
      </section>

      {/* Proof / specimen */}
      <section
        id="proof"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1.4fr",
          borderBottom: `3px solid ${C.black}`,
        }}
      >
        <div
          style={{
            background: C.yellow,
            padding: "clamp(2.5rem, 5vw, 4rem) 4vw",
            borderRight: `3px solid ${C.black}`,
          }}
        >
          <Reveal>
            <h2
              style={{
                fontFamily: "'Archivo Black', sans-serif",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                lineHeight: 0.95,
                margin: "0 0 1rem",
                textTransform: "uppercase",
                letterSpacing: "-0.03em",
              }}
            >
              Specimen
              <br />
              output
            </h2>
            <p style={{ margin: 0, fontSize: 14, fontWeight: 600, lineHeight: 1.5, maxWidth: 260 }}>
              From a 52-page cognition paper. Edited for display. Structure preserved.
            </p>
          </Reveal>
        </div>
        <div style={{ padding: "clamp(2rem, 4vw, 3rem) 4vw", background: C.paper }}>
          <Reveal delay={0.08}>
            <div style={{ border: `3px solid ${C.black}`, padding: "1.5rem" }}>
              <div
                style={{
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  marginBottom: 12,
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <span>Summary</span>
                <span style={{ background: C.yellow, padding: "0 6px" }}>CORE</span>
              </div>
              <p style={{ margin: "0 0 1.25rem", fontSize: 15, lineHeight: 1.6, fontWeight: 500 }}>
                Comprehension collapses after ~20 minutes of unannotated reading.
                Intervention: forced synthesis. Evidence base: 840 subjects, three labs.
              </p>
              <div
                style={{
                  borderTop: `2px solid ${C.black}`,
                  paddingTop: 12,
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: 16,
                }}
              >
                <div>
                  <div
                    style={{
                      fontSize: 10,
                      fontWeight: 700,
                      letterSpacing: "0.12em",
                      marginBottom: 6,
                      textTransform: "uppercase",
                    }}
                  >
                    Quote
                  </div>
                  <p style={{ margin: 0, fontSize: 14, fontWeight: 600, lineHeight: 1.45 }}>
                    “Understanding requires extraction, connection, and reflection.”
                  </p>
                </div>
                <div>
                  <div
                    style={{
                      fontSize: 10,
                      fontWeight: 700,
                      letterSpacing: "0.12em",
                      marginBottom: 6,
                      textTransform: "uppercase",
                    }}
                  >
                    Hint
                  </div>
                  <p style={{ margin: 0, fontSize: 14, fontWeight: 500, lineHeight: 1.45, color: C.gray }}>
                    Figure 3 disagrees with the prose claim on p. 41 — resolve before citing.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section
        id="start"
        style={{
          background: C.black,
          color: C.paper,
          padding: "5rem 4vw",
          textAlign: "center",
        }}
      >
        <Reveal>
          <h2
            style={{
              fontFamily: "'Archivo Black', sans-serif",
              fontSize: "clamp(2.2rem, 6vw, 4rem)",
              margin: "0 0 1rem",
              letterSpacing: "-0.03em",
              textTransform: "uppercase",
              lineHeight: 0.95,
            }}
          >
            Start with one
            <br />
            <span style={{ color: C.yellow }}>hard PDF.</span>
          </h2>
          <p style={{ color: "#999", fontSize: 15, marginBottom: 28, fontWeight: 500 }}>
            Free first document. No theater.
          </p>
          <a
            href="#"
            className="d3-btn"
            onClick={(e) => e.preventDefault()}
            style={{
              display: "inline-block",
              background: C.yellow,
              color: C.black,
              textDecoration: "none",
              padding: "1.1rem 2rem",
              fontSize: 14,
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              border: `3px solid ${C.yellow}`,
            }}
          >
            Begin reading →
          </a>
        </Reveal>
      </section>

      <footer
        style={{
          padding: "1.25rem 4vw",
          display: "flex",
          justifyContent: "space-between",
          fontSize: 11,
          fontWeight: 700,
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          borderTop: `3px solid ${C.black}`,
          background: C.paper,
        }}
      >
        <span>Ratio Reader</span>
        <span>03 · Power Ratio</span>
      </footer>

      {/* Responsive collapse for grids */}
      <style>{`
        @media (max-width: 860px) {
          header[style] { grid-template-columns: 1fr !important; }
          #process { grid-template-columns: 1fr !important; }
          #proof { grid-template-columns: 1fr !important; }
          .d3-row {
            grid-template-columns: 60px 1fr !important;
          }
          .d3-row > :nth-child(3),
          .d3-row > :nth-child(4) {
            grid-column: 2;
          }
        }
      `}</style>
    </div>
  );
}
