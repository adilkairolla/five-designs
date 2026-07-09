import { useRef, useEffect, useState, type ReactNode, type CSSProperties } from "react";

/* ═══════════════════════════════════════════════════════════
   Design 2 — "Phosphor Desk"
   Research terminal: near-black CRT, phosphor green + amber,
   JetBrains Mono + Syne. Reading as signal extraction.
═══════════════════════════════════════════════════════════ */

const C = {
  void: "#050806",
  panel: "#0A110C",
  panel2: "#0E1710",
  green: "#3DFF7A",
  greenDim: "#1A9A44",
  amber: "#F0B429",
  amberDim: "#A07A1A",
  mist: "#8AB898",
  white: "#D8F5E0",
};

const LINE = "#163D24";

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
        transform: inView ? "none" : "translateY(14px)",
        transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`,
        ...style,
      }}
    >
      {children}
    </div>
  );
}

function Scanlines() {
  return (
    <div
      aria-hidden
      style={{
        pointerEvents: "none",
        position: "fixed",
        inset: 0,
        zIndex: 60,
        background:
          "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.12) 2px, rgba(0,0,0,0.12) 4px)",
        opacity: 0.4,
      }}
    />
  );
}

function Vignette() {
  return (
    <div
      aria-hidden
      style={{
        pointerEvents: "none",
        position: "fixed",
        inset: 0,
        zIndex: 55,
        background:
          "radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.55) 100%)",
      }}
    />
  );
}

const pipeline = [
  { code: "01", label: "INGEST", desc: "PDF bytes → structured text graph" },
  { code: "02", label: "EXTRACT", desc: "Claims, entities, threats to understanding" },
  { code: "03", label: "SYNTH", desc: "Summary · hints · quotes · insights" },
  { code: "04", label: "EMIT", desc: "Readable apparatus, ready for action" },
];

const modules = [
  {
    id: "SUM.MOD",
    title: "Signal Summary",
    body: "Collapses hundred-page noise into a high-signal brief. Arguments ranked by structural weight, not page order.",
  },
  {
    id: "HNT.MOD",
    title: "Context Hints",
    body: "Flags assumptions, jargon dens, and logical leaps before they derail you mid-paragraph.",
  },
  {
    id: "QTE.MOD",
    title: "Quote Buffer",
    body: "Caches the lines that carry the thesis — formatted, paginated, copy-ready.",
  },
  {
    id: "INS.MOD",
    title: "Insight Engine",
    body: "Surfaces contradictions, patterns, and wartime-useful takeaways the original buried.",
  },
];

const teletype = [
  "> ratio init --doc research_paper_v3.pdf",
  "> parsing 47 pages · 12k tokens",
  "> extract: 23 claims · 8 key entities",
  "> synth complete · latency 1.2s",
  "> ready // open apparatus",
];

export function Design2() {
  return (
    <div
      style={{
        background: C.void,
        color: C.white,
        fontFamily: "'JetBrains Mono', ui-monospace, monospace",
        minHeight: "100vh",
        position: "relative",
        overflowX: "hidden",
      }}
    >
      <Scanlines />
      <Vignette />
      <style>{`
        @keyframes d2-blink {
          0%, 49% { opacity: 1; }
          50%, 100% { opacity: 0; }
        }
        @keyframes d2-pulse {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 1; }
        }
        @keyframes d2-glow {
          0%, 100% { text-shadow: 0 0 8px ${C.green}55; }
          50% { text-shadow: 0 0 18px ${C.green}aa, 0 0 40px ${C.green}33; }
        }
        .d2-link:hover { color: ${C.green} !important; }
        .d2-btn {
          transition: background 0.2s, box-shadow 0.2s, color 0.2s;
        }
        .d2-btn:hover {
          background: ${C.green} !important;
          color: ${C.void} !important;
          box-shadow: 0 0 24px ${C.green}66;
        }
        .d2-mod:hover {
          border-color: ${C.green} !important;
          box-shadow: inset 0 0 40px ${C.green}0d;
        }
      `}</style>

      {/* ambient glow orbs */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          top: -120,
          left: "20%",
          width: 400,
          height: 400,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${C.green}14, transparent 70%)`,
          pointerEvents: "none",
        }}
      />

      {/* ── Top bar ── */}
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "0.9rem 4vw",
          borderBottom: `1px solid ${LINE}`,
          background: C.panel,
          position: "sticky",
          top: 0,
          zIndex: 40,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <span
            style={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              background: C.green,
              boxShadow: `0 0 10px ${C.green}`,
              animation: "d2-pulse 2s infinite",
            }}
          />
          <span
            style={{
              fontFamily: "'Syne', sans-serif",
              fontWeight: 700,
              fontSize: 15,
              letterSpacing: "0.08em",
              color: C.green,
            }}
          >
            RATIO://READER
          </span>
          <span style={{ fontSize: 11, color: C.greenDim }}>v2.4.1-lab</span>
        </div>
        <nav style={{ display: "flex", gap: "1.5rem", fontSize: 11, color: C.mist }}>
          {[
            ["#pipeline", "PIPELINE"],
            ["#modules", "MODULES"],
            ["#console", "CONSOLE"],
          ].map(([href, label]) => (
            <a
              key={label}
              href={href}
              className="d2-link"
              style={{ color: C.mist, textDecoration: "none", letterSpacing: "0.1em" }}
            >
              {label}
            </a>
          ))}
        </nav>
        <a
          href="#boot"
          className="d2-btn"
          style={{
            fontSize: 11,
            letterSpacing: "0.12em",
            textDecoration: "none",
            color: C.void,
            background: C.green,
            padding: "0.5rem 0.9rem",
            fontWeight: 600,
          }}
        >
          BOOT_SESSION
        </a>
      </header>

      {/* ── Hero ── */}
      <section style={{ padding: "clamp(3rem, 8vw, 5.5rem) 4vw 3rem", maxWidth: 1200, margin: "0 auto" }}>
        <Reveal>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              fontSize: 11,
              color: C.amber,
              letterSpacing: "0.14em",
              marginBottom: 20,
              border: `1px solid ${C.amberDim}`,
              padding: "4px 10px",
              background: `${C.amber}0d`,
            }}
          >
            <span style={{ animation: "d2-blink 1s step-end infinite" }}>▌</span>
            STATUS: READY · PDF INTAKE LIVE
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <h1
            style={{
              fontFamily: "'Syne', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(2.6rem, 7.5vw, 5.5rem)",
              lineHeight: 0.95,
              letterSpacing: "-0.03em",
              margin: "0 0 1.5rem",
              color: C.white,
              animation: "d2-glow 4s ease-in-out infinite",
            }}
          >
            EXTRACT THE
            <br />
            <span style={{ color: C.green }}>SIGNAL</span>
            <br />
            FROM THE PDF.
          </h1>
        </Reveal>
        <Reveal delay={0.14}>
          <p
            style={{
              maxWidth: 520,
              fontSize: 14,
              lineHeight: 1.75,
              color: C.mist,
              marginBottom: 28,
            }}
          >
            Ratio Reader is a research terminal for dense documents. Upload a PDF.
            Receive a high-fidelity summary, directional hints, quoted payloads, and
            insight packets — format: human-readable.
          </p>
        </Reveal>
        <Reveal delay={0.2}>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <a
              href="#boot"
              className="d2-btn"
              style={{
                background: C.green,
                color: C.void,
                textDecoration: "none",
                padding: "0.85rem 1.4rem",
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: "0.1em",
              }}
            >
              UPLOAD_PDF →
            </a>
            <a
              href="#console"
              style={{
                border: `1px solid ${LINE}`,
                color: C.mist,
                textDecoration: "none",
                padding: "0.85rem 1.4rem",
                fontSize: 12,
                letterSpacing: "0.1em",
              }}
            >
              VIEW_SAMPLE
            </a>
          </div>
        </Reveal>

        {/* Spec strip */}
        <Reveal delay={0.28}>
          <div
            style={{
              marginTop: 48,
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
              gap: 1,
              background: LINE,
              border: `1px solid ${LINE}`,
            }}
          >
            {[
              ["LATENCY", "1.2s median"],
              ["FORMAT", "PDF · DL"],
              ["OUTPUT", "4 modules"],
              ["USERS", "research labs"],
            ].map(([k, v]) => (
              <div
                key={k}
                style={{
                  background: C.panel,
                  padding: "14px 16px",
                }}
              >
                <div style={{ fontSize: 10, color: C.greenDim, letterSpacing: "0.16em", marginBottom: 4 }}>
                  {k}
                </div>
                <div style={{ fontSize: 13, color: C.green }}>{v}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* ── Pipeline ── */}
      <section id="pipeline" style={{ padding: "3rem 4vw 5rem", maxWidth: 1200, margin: "0 auto" }}>
        <Reveal>
          <div style={{ marginBottom: 28 }}>
            <span style={{ fontSize: 11, color: C.amber, letterSpacing: "0.2em" }}>// PIPELINE</span>
            <h2
              style={{
                fontFamily: "'Syne', sans-serif",
                fontWeight: 700,
                fontSize: "clamp(1.6rem, 3.5vw, 2.2rem)",
                margin: "8px 0 0",
                letterSpacing: "-0.02em",
              }}
            >
              Document → Apparatus
            </h2>
          </div>
        </Reveal>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: 12,
          }}
        >
          {pipeline.map((p, i) => (
            <Reveal key={p.code} delay={i * 0.08}>
              <div
                style={{
                  border: `1px solid ${LINE}`,
                  background: C.panel2,
                  padding: "1.25rem",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: 2,
                    background: `linear-gradient(90deg, ${C.green}, transparent)`,
                    opacity: 0.7,
                  }}
                />
                <div style={{ fontSize: 11, color: C.greenDim, marginBottom: 8 }}>{p.code}</div>
                <div
                  style={{
                    fontFamily: "'Syne', sans-serif",
                    fontWeight: 700,
                    fontSize: 16,
                    color: C.green,
                    letterSpacing: "0.08em",
                    marginBottom: 8,
                  }}
                >
                  {p.label}
                </div>
                <p style={{ margin: 0, fontSize: 12, lineHeight: 1.55, color: C.mist }}>{p.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── Modules ── */}
      <section
        id="modules"
        style={{
          background: C.panel,
          borderTop: `1px solid ${LINE}`,
          borderBottom: `1px solid ${LINE}`,
          padding: "4.5rem 4vw",
        }}
      >
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <Reveal>
            <span style={{ fontSize: 11, color: C.amber, letterSpacing: "0.2em" }}>// MODULES</span>
            <h2
              style={{
                fontFamily: "'Syne', sans-serif",
                fontWeight: 700,
                fontSize: "clamp(1.6rem, 3.5vw, 2.2rem)",
                margin: "8px 0 2rem",
              }}
            >
              Four active instruments
            </h2>
          </Reveal>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: 1,
              background: LINE,
              border: `1px solid ${LINE}`,
            }}
          >
            {modules.map((m, i) => (
              <Reveal key={m.id} delay={i * 0.06}>
                <article
                  className="d2-mod"
                  style={{
                    background: C.void,
                    padding: "1.5rem",
                    minHeight: 180,
                    border: "1px solid transparent",
                    transition: "border-color 0.25s, box-shadow 0.25s",
                  }}
                >
                  <div
                    style={{
                      fontSize: 10,
                      color: C.amber,
                      letterSpacing: "0.14em",
                      marginBottom: 10,
                    }}
                  >
                    {m.id}
                  </div>
                  <h3
                    style={{
                      fontFamily: "'Syne', sans-serif",
                      fontWeight: 700,
                      fontSize: 18,
                      margin: "0 0 10px",
                      color: C.green,
                    }}
                  >
                    {m.title}
                  </h3>
                  <p style={{ margin: 0, fontSize: 13, lineHeight: 1.65, color: C.mist }}>{m.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Console sample ── */}
      <section id="console" style={{ padding: "5rem 4vw", maxWidth: 800, margin: "0 auto" }}>
        <Reveal>
          <span style={{ fontSize: 11, color: C.amber, letterSpacing: "0.2em" }}>// CONSOLE SAMPLE</span>
          <h2
            style={{
              fontFamily: "'Syne', sans-serif",
              fontWeight: 700,
              fontSize: "clamp(1.5rem, 3vw, 2rem)",
              margin: "8px 0 1.5rem",
            }}
          >
            Live session log
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <div
            style={{
              background: C.panel2,
              border: `1px solid ${LINE}`,
              boxShadow: `0 0 60px ${C.green}12`,
              overflow: "hidden",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                padding: "10px 14px",
                borderBottom: `1px solid ${LINE}`,
                background: C.panel,
              }}
            >
              {["#ff5f57", "#febc2e", "#28c840"].map((c) => (
                <span key={c} style={{ width: 10, height: 10, borderRadius: "50%", background: c, opacity: 0.85 }} />
              ))}
              <span style={{ marginLeft: 8, fontSize: 11, color: C.greenDim }}>ratio@desk — zsh</span>
            </div>
            <div style={{ padding: "1.25rem 1.4rem", fontSize: 13, lineHeight: 1.9 }}>
              {teletype.map((line, i) => (
                <div
                  key={i}
                  style={{
                    color: i === teletype.length - 1 ? C.green : C.mist,
                    animation: `d2-pulse 0.01s`,
                  }}
                >
                  <span style={{ color: C.greenDim, marginRight: 8 }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {line}
                </div>
              ))}
              <div style={{ color: C.green, marginTop: 4 }}>
                <span style={{ color: C.greenDim, marginRight: 8 }}>06</span>
                {"> "}
                <span style={{ animation: "d2-blink 1s step-end infinite" }}>█</span>
              </div>
            </div>

            {/* Output card inside console */}
            <div
              style={{
                margin: "0 1.25rem 1.25rem",
                border: `1px solid ${LINE}`,
                padding: "1rem 1.1rem",
                background: `${C.green}08`,
              }}
            >
              <div style={{ fontSize: 10, color: C.amber, letterSpacing: "0.14em", marginBottom: 8 }}>
                OUTPUT · SUMMARY_PACKET
              </div>
              <p style={{ margin: 0, fontSize: 12.5, lineHeight: 1.65, color: C.white }}>
                Thesis: comprehension drops after ~20 min without synthesis. Primary
                mechanism = working-memory saturation. Authors propose structured
                extraction as intervention. Confidence: high (n=840).
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ── CTA ── */}
      <section
        id="boot"
        style={{
          borderTop: `1px solid ${LINE}`,
          padding: "5rem 4vw",
          textAlign: "center",
          background: `linear-gradient(180deg, ${C.void}, ${C.panel})`,
        }}
      >
        <Reveal>
          <h2
            style={{
              fontFamily: "'Syne', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(1.8rem, 4.5vw, 3rem)",
              letterSpacing: "-0.02em",
              margin: "0 0 1rem",
              color: C.green,
            }}
          >
            INIT YOUR NEXT READ
          </h2>
          <p style={{ color: C.mist, fontSize: 13, maxWidth: 420, margin: "0 auto 1.75rem", lineHeight: 1.65 }}>
            Drop a PDF. Get the apparatus. Keep your attention for work that
            deserves it.
          </p>
          <a
            href="#"
            className="d2-btn"
            onClick={(e) => e.preventDefault()}
            style={{
              display: "inline-block",
              background: C.amber,
              color: C.void,
              textDecoration: "none",
              padding: "0.95rem 1.8rem",
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: "0.14em",
            }}
          >
            START_FREE_SESSION
          </a>
        </Reveal>
      </section>

      <footer
        style={{
          borderTop: `1px solid ${LINE}`,
          padding: "1.25rem 4vw",
          display: "flex",
          justifyContent: "space-between",
          fontSize: 10,
          color: C.greenDim,
          letterSpacing: "0.12em",
        }}
      >
        <span>RATIO://READER</span>
        <span>DESIGN_02 · PHOSPHOR_DESK</span>
      </footer>
    </div>
  );
}
