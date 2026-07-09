import { useRef, useEffect, useState, type ReactNode, type CSSProperties } from "react";

/* ═══════════════════════════════════════════════════════════
   Design 1 — "Parchment & Vermilion"
   Scholarly manuscript: cream paper, red-ink marginalia,
   Playfair Display + Literata. Reading as annotation.
═══════════════════════════════════════════════════════════ */

const C = {
  paper: "#F3ECDD",
  paperDeep: "#E8DFC8",
  ink: "#1A1612",
  inkSoft: "#4A433C",
  inkFaint: "#8A8178",
  vermilion: "#C23B22",
  vermilionSoft: "#D46552",
  rule: "#C9BFA8",
  margin: "#FBF7EF",
};

function useInView(threshold = 0.15) {
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
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  style?: CSSProperties;
  className?: string;
}) {
  const { ref, inView } = useInView(0.12);
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "none" : "translateY(18px)",
        transition: `opacity 0.8s cubic-bezier(0.22,1,0.36,1) ${delay}s, transform 0.8s cubic-bezier(0.22,1,0.36,1) ${delay}s`,
        ...style,
      }}
    >
      {children}
    </div>
  );
}

function Grain() {
  return (
    <div
      aria-hidden
      style={{
        pointerEvents: "none",
        position: "fixed",
        inset: 0,
        zIndex: 50,
        opacity: 0.045,
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        mixBlendMode: "multiply",
      }}
    />
  );
}

const features = [
  {
    mark: "§ I",
    title: "Illuminated Summaries",
    body: "Every dense PDF is distilled into a lucid précis — the argument core, mapped with clarity the original author may have buried under clauses.",
  },
  {
    mark: "§ II",
    title: "Marginal Hints",
    body: "Quiet nudges appear where comprehension usually falters: undefined terms, leaps of logic, or passages that repay a second reading.",
  },
  {
    mark: "§ III",
    title: "Extracted Quotes",
    body: "The sentences worth underlining are lifted whole — typed, cited, ready to carry into notes, essays, or memory.",
  },
  {
    mark: "§ IV",
    title: "Connected Insights",
    body: "Themes, contradictions, and cross-references are woven into a brief that reads like the conversation you wish the text had started.",
  },
];

const steps = [
  { n: "i.", label: "Upload the folio", desc: "Drop any PDF — papers, reports, books." },
  { n: "ii.", label: "Ratio reads", desc: "Pages are parsed for structure and sense." },
  { n: "iii.", label: "Receive the apparatus", desc: "Summary, hints, quotes, insights returned." },
];

export function Design1() {
  return (
    <div
      style={{
        background: C.paper,
        color: C.ink,
        fontFamily: "'Literata', Georgia, serif",
        minHeight: "100vh",
        position: "relative",
      }}
    >
      <Grain />
      <style>{`
        @keyframes d1-ink {
          from { opacity: 0; transform: translateX(-6px); }
          to { opacity: 1; transform: none; }
        }
        .d1-nav a:hover { color: ${C.vermilion}; }
        .d1-btn {
          transition: background 0.25s ease, color 0.25s ease, transform 0.2s ease;
        }
        .d1-btn:hover {
          background: ${C.vermilion} !important;
          color: ${C.paper} !important;
          transform: translateY(-1px);
        }
        .d1-card:hover {
          border-color: ${C.vermilion}55 !important;
        }
      `}</style>

      {/* ── Nav ── */}
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "1.4rem 5vw",
          borderBottom: `1px solid ${C.rule}`,
          position: "sticky",
          top: 0,
          background: `${C.paper}ee`,
          backdropFilter: "blur(8px)",
          zIndex: 40,
        }}
      >
        <div style={{ display: "flex", alignItems: "baseline", gap: 10 }}>
          <span
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontWeight: 600,
              fontSize: 20,
              letterSpacing: "-0.02em",
            }}
          >
            Ratio
          </span>
          <span
            style={{
              fontSize: 11,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: C.inkFaint,
            }}
          >
            Reader
          </span>
        </div>
        <div
          className="d1-nav"
          style={{
            display: "flex",
            gap: "1.75rem",
            fontSize: 13,
            color: C.inkSoft,
          }}
        >
          <a href="#apparatus" style={{ color: "inherit", textDecoration: "none" }}>
            Apparatus
          </a>
          <a href="#method" style={{ color: "inherit", textDecoration: "none" }}>
            Method
          </a>
          <a href="#folio" style={{ color: "inherit", textDecoration: "none" }}>
            Specimen
          </a>
        </div>
        <a
          href="#cta"
          className="d1-btn"
          style={{
            fontSize: 12,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            textDecoration: "none",
            color: C.ink,
            border: `1px solid ${C.ink}`,
            padding: "0.55rem 1rem",
            fontFamily: "'Literata', serif",
          }}
        >
          Begin
        </a>
      </nav>

      {/* ── Hero ── */}
      <header
        style={{
          display: "grid",
          gridTemplateColumns: "minmax(0, 1fr) minmax(0, 0.85fr)",
          gap: "3vw",
          padding: "clamp(3rem, 8vw, 6.5rem) 5vw 4rem",
          maxWidth: 1280,
          margin: "0 auto",
        }}
      >
        <div>
          <Reveal>
            <p
              style={{
                fontFamily: "'Playfair Display', serif",
                fontStyle: "italic",
                color: C.vermilion,
                fontSize: 15,
                marginBottom: 20,
              }}
            >
              A reading instrument for dense documents
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <h1
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontWeight: 500,
                fontSize: "clamp(2.8rem, 7vw, 5.2rem)",
                lineHeight: 1.02,
                letterSpacing: "-0.03em",
                margin: "0 0 1.5rem",
              }}
            >
              Read less
              <br />
              of what{" "}
              <em style={{ color: C.vermilion, fontWeight: 500 }}>muddies</em>
              <br />
              the mind.
            </h1>
          </Reveal>
          <Reveal delay={0.15}>
            <p
              style={{
                fontSize: "1.125rem",
                lineHeight: 1.7,
                color: C.inkSoft,
                maxWidth: 440,
                marginBottom: 28,
              }}
            >
              Ratio Reader turns any PDF into a scholarly apparatus: a lucid
              summary, margin-side hints, pull-quotes, and the insights that make
              understanding stick.
            </p>
          </Reveal>
          <Reveal delay={0.22}>
            <div style={{ display: "flex", gap: 14, flexWrap: "wrap", alignItems: "center" }}>
              <a
                href="#cta"
                className="d1-btn"
                style={{
                  background: C.ink,
                  color: C.paper,
                  textDecoration: "none",
                  padding: "0.95rem 1.6rem",
                  fontSize: 14,
                  letterSpacing: "0.04em",
                }}
              >
                Illuminate a PDF →
              </a>
              <span style={{ fontSize: 13, color: C.inkFaint, fontStyle: "italic" }}>
                No credit card · free first document
              </span>
            </div>
          </Reveal>
        </div>

        {/* Marginal annotation column */}
        <Reveal delay={0.18}>
          <aside
            style={{
              borderLeft: `1px solid ${C.rule}`,
              paddingLeft: "clamp(1.2rem, 3vw, 2rem)",
              paddingTop: "0.5rem",
              position: "relative",
              minHeight: 320,
            }}
          >
            <div
              style={{
                position: "absolute",
                left: -5,
                top: 12,
                width: 9,
                height: 9,
                borderRadius: "50%",
                background: C.vermilion,
              }}
            />
            <p
              style={{
                fontSize: 11,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: C.vermilion,
                marginBottom: 14,
                fontFamily: "'Playfair Display', serif",
              }}
            >
              Margin note · p. 1
            </p>
            <blockquote
              style={{
                margin: "0 0 1.75rem",
                fontFamily: "'Playfair Display', serif",
                fontStyle: "italic",
                fontSize: "clamp(1.15rem, 2.2vw, 1.45rem)",
                lineHeight: 1.45,
                color: C.ink,
              }}
            >
              “Most readers drown in pages. Few keep the argument.”
            </blockquote>
            <div
              style={{
                fontSize: 13,
                lineHeight: 1.65,
                color: C.inkSoft,
                borderTop: `1px dashed ${C.rule}`,
                paddingTop: 16,
              }}
            >
              <p style={{ margin: "0 0 10px" }}>
                <strong style={{ color: C.vermilion, fontWeight: 600 }}>Hint —</strong>{" "}
                Chapter 3 assumes familiarity with Bayesian priors; Ratio flags
                this before you lose the thread.
              </p>
              <p style={{ margin: 0 }}>
                <strong style={{ color: C.vermilion, fontWeight: 600 }}>Quote —</strong>{" "}
                “Understanding requires extraction, connection, and reflection.”
                <span style={{ color: C.inkFaint }}> — §2.4</span>
              </p>
            </div>
            <div
              style={{
                marginTop: 28,
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 12,
              }}
            >
              {[
                ["47 min", "avg. reading saved"],
                ["12k+", "documents read"],
              ].map(([v, l]) => (
                <div
                  key={l}
                  style={{
                    border: `1px solid ${C.rule}`,
                    padding: "12px 14px",
                    background: C.margin,
                  }}
                >
                  <div
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: 22,
                      fontWeight: 600,
                    }}
                  >
                    {v}
                  </div>
                  <div style={{ fontSize: 11, color: C.inkFaint, marginTop: 2 }}>{l}</div>
                </div>
              ))}
            </div>
          </aside>
        </Reveal>
      </header>

      {/* ── Decorative rule ── */}
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 5vw" }}>
        <div
          style={{
            height: 1,
            background: C.rule,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
          }}
        >
          <span
            style={{
              background: C.paper,
              padding: "0 16px",
              fontSize: 12,
              color: C.inkFaint,
              letterSpacing: "0.25em",
              textTransform: "uppercase",
            }}
          >
            · · ·
          </span>
        </div>
      </div>

      {/* ── Features ── */}
      <section id="apparatus" style={{ padding: "5rem 5vw", maxWidth: 1280, margin: "0 auto" }}>
        <Reveal>
          <div style={{ marginBottom: 40 }}>
            <p
              style={{
                fontSize: 11,
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                color: C.vermilion,
                marginBottom: 10,
              }}
            >
              The Apparatus
            </p>
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontWeight: 500,
                fontSize: "clamp(1.9rem, 4vw, 2.8rem)",
                letterSpacing: "-0.02em",
                margin: 0,
                maxWidth: 520,
              }}
            >
              Four instruments for every text
            </h2>
          </div>
        </Reveal>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: 0,
            borderTop: `1px solid ${C.rule}`,
          }}
        >
          {features.map((f, i) => (
            <Reveal key={f.title} delay={i * 0.07}>
              <article
                className="d1-card"
                style={{
                  padding: "1.75rem 1.5rem 2rem",
                  borderBottom: `1px solid ${C.rule}`,
                  borderRight: i % 2 === 0 ? `1px solid ${C.rule}` : undefined,
                  minHeight: 220,
                  transition: "border-color 0.3s ease",
                }}
              >
                <span
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontStyle: "italic",
                    color: C.vermilion,
                    fontSize: 14,
                  }}
                >
                  {f.mark}
                </span>
                <h3
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontWeight: 600,
                    fontSize: 20,
                    margin: "10px 0 12px",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {f.title}
                </h3>
                <p style={{ margin: 0, fontSize: 14.5, lineHeight: 1.65, color: C.inkSoft }}>
                  {f.body}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── Method ── */}
      <section
        id="method"
        style={{
          background: C.ink,
          color: C.paper,
          padding: "5rem 5vw",
        }}
      >
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <Reveal>
            <p
              style={{
                fontSize: 11,
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                color: C.vermilionSoft,
                marginBottom: 10,
              }}
            >
              The Method
            </p>
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontWeight: 500,
                fontSize: "clamp(1.9rem, 4vw, 2.8rem)",
                margin: "0 0 2.5rem",
                letterSpacing: "-0.02em",
              }}
            >
              Three steps. No fluff.
            </h2>
          </Reveal>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "2rem",
            }}
          >
            {steps.map((s, i) => (
              <Reveal key={s.n} delay={i * 0.1}>
                <div>
                  <div
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontStyle: "italic",
                      fontSize: 28,
                      color: C.vermilionSoft,
                      marginBottom: 8,
                    }}
                  >
                    {s.n}
                  </div>
                  <h3
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontWeight: 600,
                      fontSize: 18,
                      margin: "0 0 8px",
                    }}
                  >
                    {s.label}
                  </h3>
                  <p style={{ margin: 0, color: "#B8AFA0", fontSize: 14.5, lineHeight: 1.55 }}>
                    {s.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Specimen folio ── */}
      <section id="folio" style={{ padding: "5.5rem 5vw", maxWidth: 900, margin: "0 auto" }}>
        <Reveal>
          <p
            style={{
              fontSize: 11,
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              color: C.vermilion,
              marginBottom: 10,
              textAlign: "center",
            }}
          >
            Specimen Folio
          </p>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontWeight: 500,
              fontSize: "clamp(1.7rem, 3.5vw, 2.4rem)",
              textAlign: "center",
              margin: "0 0 2.5rem",
              letterSpacing: "-0.02em",
            }}
          >
            What Ratio returns
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <div
            style={{
              background: C.margin,
              border: `1px solid ${C.rule}`,
              boxShadow: "0 24px 60px rgba(26,22,18,0.08)",
              padding: "2rem clamp(1.25rem, 4vw, 2.75rem) 2.5rem",
              position: "relative",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                fontSize: 11,
                color: C.inkFaint,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                marginBottom: 12,
                borderBottom: `1px solid ${C.rule}`,
                paddingBottom: 10,
              }}
            >
              <span>Ratio Reader · Summary View</span>
              <span>p. 1 of 3</span>
            </div>

            <div style={{ marginBottom: 20 }}>
              <div
                style={{
                  fontSize: 10,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: C.vermilion,
                  marginBottom: 8,
                }}
              >
                Smart Summary
              </div>
              <p style={{ margin: 0, fontSize: 15, lineHeight: 1.7, color: C.inkSoft }}>
                The paper argues that sustained reading comprehension declines
                sharply after twenty minutes without structured synthesis. Key
                mechanisms: working-memory saturation and loss of connective
                context between passages.
              </p>
            </div>

            <div
              style={{
                borderLeft: `3px solid ${C.vermilion}`,
                padding: "4px 0 4px 16px",
                margin: "1.5rem 0",
              }}
            >
              <p
                style={{
                  margin: 0,
                  fontFamily: "'Playfair Display', serif",
                  fontStyle: "italic",
                  fontSize: 17,
                  lineHeight: 1.5,
                }}
              >
                “Reading without synthesis is merely scanning.”
              </p>
              <p style={{ margin: "6px 0 0", fontSize: 12, color: C.inkFaint }}>— p. 47</p>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 16,
                marginTop: 20,
                paddingTop: 16,
                borderTop: `1px dashed ${C.rule}`,
              }}
            >
              <div>
                <div style={{ fontSize: 10, letterSpacing: "0.15em", textTransform: "uppercase", color: C.vermilion, marginBottom: 6 }}>
                  Hint
                </div>
                <p style={{ margin: 0, fontSize: 13.5, lineHeight: 1.55, color: C.inkSoft }}>
                  Section 4.2 jumps mid-argument — re-read the prior paragraph’s
                  last sentence for the missing premise.
                </p>
              </div>
              <div>
                <div style={{ fontSize: 10, letterSpacing: "0.15em", textTransform: "uppercase", color: C.vermilion, marginBottom: 6 }}>
                  Insight
                </div>
                <p style={{ margin: 0, fontSize: 13.5, lineHeight: 1.55, color: C.inkSoft }}>
                  The conclusion quietly contradicts Figure 3; Ratio flags this as a
                  tension worth resolving before citation.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ── CTA ── */}
      <section
        id="cta"
        style={{
          borderTop: `1px solid ${C.rule}`,
          padding: "5rem 5vw 4rem",
          textAlign: "center",
          maxWidth: 720,
          margin: "0 auto",
        }}
      >
        <Reveal>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontWeight: 500,
              fontSize: "clamp(2rem, 4.5vw, 3rem)",
              letterSpacing: "-0.02em",
              margin: "0 0 1rem",
            }}
          >
            For the reader who
            <br />
            <em style={{ color: C.vermilion }}>refuses</em> to skim.
          </h2>
          <p style={{ color: C.inkSoft, fontSize: 16, lineHeight: 1.6, marginBottom: 28 }}>
            Bring your densest PDF. Leave with an apparatus you can actually use.
          </p>
          <a
            href="#"
            className="d1-btn"
            style={{
              display: "inline-block",
              background: C.vermilion,
              color: C.paper,
              textDecoration: "none",
              padding: "1rem 2rem",
              fontSize: 14,
              letterSpacing: "0.06em",
            }}
            onClick={(e) => e.preventDefault()}
          >
            Upload your first document
          </a>
        </Reveal>
      </section>

      {/* ── Footer ── */}
      <footer
        style={{
          borderTop: `1px solid ${C.rule}`,
          padding: "1.5rem 5vw",
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 12,
          fontSize: 12,
          color: C.inkFaint,
        }}
      >
        <span style={{ fontFamily: "'Playfair Display', serif" }}>Ratio Reader</span>
        <span>Design 01 · Parchment & Vermilion</span>
      </footer>
    </div>
  );
}
