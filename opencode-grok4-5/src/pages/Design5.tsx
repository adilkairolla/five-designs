import { useRef, useEffect, useState, type ReactNode, type CSSProperties } from "react";

/* ═══════════════════════════════════════════════════════════
   Design 5 — "Gilded Vault"
   Art deco archive: midnight navy, champagne gold, ivory.
   Cinzel + Cormorant Garamond. Reading as ritual enrollment.
═══════════════════════════════════════════════════════════ */

const C = {
  navy: "#0A1628",
  navyMid: "#12233A",
  navyPanel: "#152A45",
  gold: "#D4AF37",
  goldSoft: "#E8D48B",
  goldDim: "#8A7340",
  ivory: "#E8DFC8",
  ivoryDim: "#B8AD90",
  line: "#2A3F5C",
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
        transform: inView ? "none" : "translateY(16px)",
        transition: `opacity 1s cubic-bezier(0.22,1,0.36,1) ${delay}s, transform 1s cubic-bezier(0.22,1,0.36,1) ${delay}s`,
        ...style,
      }}
    >
      {children}
    </div>
  );
}

function DecoRule({ wide = false }: { wide?: boolean }) {
  return (
    <div
      aria-hidden
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 12,
        margin: "0 auto",
        width: wide ? "100%" : 200,
      }}
    >
      <span style={{ flex: 1, height: 1, background: `linear-gradient(90deg, transparent, ${C.goldDim})` }} />
      <span
        style={{
          width: 8,
          height: 8,
          border: `1px solid ${C.gold}`,
          transform: "rotate(45deg)",
          flexShrink: 0,
        }}
      />
      <span style={{ flex: 1, height: 1, background: `linear-gradient(90deg, ${C.goldDim}, transparent)` }} />
    </div>
  );
}

function FanOrnament() {
  return (
    <svg
      width="120"
      height="60"
      viewBox="0 0 120 60"
      aria-hidden
      style={{ opacity: 0.7 }}
    >
      {[15, 30, 45, 60, 75, 90, 105].map((a) => {
        const rad = ((a - 90) * Math.PI) / 180;
        const x = 60 + Math.cos(rad) * 50;
        const y = 58 + Math.sin(rad) * 50;
        return (
          <line
            key={a}
            x1="60"
            y1="58"
            x2={x}
            y2={y}
            stroke={C.gold}
            strokeWidth="0.8"
            opacity="0.55"
          />
        );
      })}
      <circle cx="60" cy="58" r="3" fill="none" stroke={C.gold} strokeWidth="1" />
    </svg>
  );
}

const chambers = [
  {
    roman: "I",
    title: "The Summary Chamber",
    body: "Every argument distilled to its luminous core — a brief worthy of the minutes it saves.",
  },
  {
    roman: "II",
    title: "The Hint Gallery",
    body: "Subtle guideposts at every point of friction: terms, leaps, and passages that demand return.",
  },
  {
    roman: "III",
    title: "The Quote Vault",
    body: "Sentences of permanent value, extracted with ceremony and preserved with citation.",
  },
  {
    roman: "IV",
    title: "The Insight Archive",
    body: "Tensions, patterns, and usable conclusions — arranged as permanent intellectual property.",
  },
];

export function Design5() {
  return (
    <div
      style={{
        background: C.navy,
        color: C.ivory,
        fontFamily: "'Cormorant Garamond', Georgia, serif",
        minHeight: "100vh",
        position: "relative",
      }}
    >
      <style>{`
        @keyframes d5-shimmer {
          0% { background-position: 0% 50%; }
          100% { background-position: 200% 50%; }
        }
        .d5-btn {
          transition: background 0.3s ease, color 0.3s ease, box-shadow 0.3s ease;
        }
        .d5-btn:hover {
          background: ${C.gold} !important;
          color: ${C.navy} !important;
          box-shadow: 0 0 40px ${C.gold}44;
        }
        .d5-chamber:hover {
          border-color: ${C.gold} !important;
          background: ${C.navyPanel} !important;
        }
        .d5-nav a:hover { color: ${C.gold}; }
      `}</style>

      {/* Radial gold wash */}
      <div
        aria-hidden
        style={{
          pointerEvents: "none",
          position: "absolute",
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "120%",
          height: 560,
          background:
            "radial-gradient(ellipse at 50% 0%, rgba(212,175,55,0.12), transparent 65%)",
        }}
      />

      {/* Nav */}
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "1.5rem 5vw",
          borderBottom: `1px solid ${C.line}`,
          position: "relative",
          zIndex: 10,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <span
            style={{
              width: 28,
              height: 28,
              border: `1.5px solid ${C.gold}`,
              transform: "rotate(45deg)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span
              style={{
                width: 10,
                height: 10,
                background: C.gold,
                transform: "rotate(0deg)",
              }}
            />
          </span>
          <span
            style={{
              fontFamily: "'Cinzel', serif",
              fontWeight: 600,
              fontSize: 14,
              letterSpacing: "0.28em",
              textTransform: "uppercase",
              color: C.gold,
            }}
          >
            Ratio
          </span>
        </div>
        <div
          className="d5-nav"
          style={{
            display: "flex",
            gap: "2rem",
            fontSize: 13,
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            color: C.ivoryDim,
          }}
        >
          <a href="#chambers" style={{ color: "inherit", textDecoration: "none" }}>
            Chambers
          </a>
          <a href="#rite" style={{ color: "inherit", textDecoration: "none" }}>
            Rite
          </a>
          <a href="#folio" style={{ color: "inherit", textDecoration: "none" }}>
            Folio
          </a>
        </div>
        <a
          href="#enroll"
          className="d5-btn"
          style={{
            fontFamily: "'Cinzel', serif",
            fontSize: 11,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            textDecoration: "none",
            color: C.gold,
            border: `1px solid ${C.gold}`,
            padding: "0.6rem 1.1rem",
          }}
        >
          Enroll
        </a>
      </nav>

      {/* Hero */}
      <header
        style={{
          textAlign: "center",
          padding: "clamp(3.5rem, 10vw, 7rem) 5vw 4rem",
          position: "relative",
          zIndex: 2,
        }}
      >
        <Reveal>
          <div style={{ display: "flex", justifyContent: "center", marginBottom: 20 }}>
            <FanOrnament />
          </div>
        </Reveal>
        <Reveal delay={0.06}>
          <p
            style={{
              fontFamily: "'Cinzel', serif",
              fontSize: 11,
              letterSpacing: "0.32em",
              textTransform: "uppercase",
              color: C.gold,
              marginBottom: 22,
            }}
          >
            The private archive for serious reading
          </p>
        </Reveal>
        <Reveal delay={0.12}>
          <h1
            style={{
              fontFamily: "'Cinzel', serif",
              fontWeight: 500,
              fontSize: "clamp(2.4rem, 6.5vw, 4.4rem)",
              lineHeight: 1.15,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              margin: "0 auto 1.5rem",
              maxWidth: 820,
              background: `linear-gradient(90deg, ${C.ivory}, ${C.goldSoft}, ${C.ivory})`,
              backgroundSize: "200% auto",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              animation: "d5-shimmer 8s linear infinite",
            }}
          >
            Preserve what
            <br />
            the page conceals
          </h1>
        </Reveal>
        <Reveal delay={0.18}>
          <div style={{ marginBottom: 28 }}>
            <DecoRule />
          </div>
        </Reveal>
        <Reveal delay={0.22}>
          <p
            style={{
              fontSize: 20,
              fontWeight: 400,
              lineHeight: 1.65,
              color: C.ivoryDim,
              maxWidth: 480,
              margin: "0 auto 2rem",
              fontStyle: "italic",
            }}
          >
            Ratio Reader receives your PDF and returns a vulgarity-free apparatus:
            summary, hints, quotes, and insights — curated as if by a private librarian.
          </p>
        </Reveal>
        <Reveal delay={0.28}>
          <a
            href="#enroll"
            className="d5-btn"
            style={{
              display: "inline-block",
              fontFamily: "'Cinzel', serif",
              fontSize: 12,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              textDecoration: "none",
              color: C.navy,
              background: C.gold,
              padding: "1rem 2.2rem",
            }}
          >
            Submit a Document
          </a>
        </Reveal>
      </header>

      {/* Stats band */}
      <section
        style={{
          borderTop: `1px solid ${C.line}`,
          borderBottom: `1px solid ${C.line}`,
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          maxWidth: 900,
          margin: "0 auto 2rem",
        }}
      >
        {[
          ["XII", "Thousand texts archived"],
          ["XLVII", "Minutes returned, avg."],
          ["IV", "Chambers per document"],
        ].map(([n, l], i) => (
          <Reveal key={n} delay={i * 0.08}>
            <div
              style={{
                padding: "1.75rem 1rem",
                textAlign: "center",
                borderRight: i < 2 ? `1px solid ${C.line}` : undefined,
              }}
            >
              <div
                style={{
                  fontFamily: "'Cinzel', serif",
                  fontSize: 28,
                  color: C.gold,
                  letterSpacing: "0.08em",
                  marginBottom: 6,
                }}
              >
                {n}
              </div>
              <div
                style={{
                  color: C.ivoryDim,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  fontFamily: "'Cinzel', serif",
                  fontSize: 10,
                }}
              >
                {l}
              </div>
            </div>
          </Reveal>
        ))}
      </section>

      {/* Chambers */}
      <section id="chambers" style={{ padding: "4.5rem 5vw", maxWidth: 1100, margin: "0 auto" }}>
        <Reveal>
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <p
              style={{
                fontFamily: "'Cinzel', serif",
                fontSize: 11,
                letterSpacing: "0.28em",
                textTransform: "uppercase",
                color: C.gold,
                marginBottom: 14,
              }}
            >
              The Four Chambers
            </p>
            <h2
              style={{
                fontFamily: "'Cinzel', serif",
                fontWeight: 500,
                fontSize: "clamp(1.6rem, 3.5vw, 2.2rem)",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                margin: "0 0 20px",
              }}
            >
              Instruments of comprehension
            </h2>
            <DecoRule />
          </div>
        </Reveal>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: 16,
          }}
        >
          {chambers.map((c, i) => (
            <Reveal key={c.roman} delay={i * 0.08}>
              <article
                className="d5-chamber"
                style={{
                  border: `1px solid ${C.line}`,
                  padding: "1.75rem 1.5rem",
                  background: C.navyMid,
                  minHeight: 200,
                  transition: "border-color 0.3s, background 0.3s",
                  position: "relative",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 16,
                    right: 16,
                    height: 1,
                    background: `linear-gradient(90deg, transparent, ${C.gold}55, transparent)`,
                  }}
                />
                <div
                  style={{
                    fontFamily: "'Cinzel', serif",
                    fontSize: 22,
                    color: C.gold,
                    marginBottom: 12,
                    letterSpacing: "0.1em",
                  }}
                >
                  {c.roman}
                </div>
                <h3
                  style={{
                    fontFamily: "'Cinzel', serif",
                    fontWeight: 500,
                    fontSize: 14,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    margin: "0 0 12px",
                    color: C.ivory,
                  }}
                >
                  {c.title}
                </h3>
                <p
                  style={{
                    margin: 0,
                    fontSize: 16,
                    lineHeight: 1.6,
                    color: C.ivoryDim,
                    fontStyle: "italic",
                  }}
                >
                  {c.body}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Rite */}
      <section
        id="rite"
        style={{
          background: C.navyMid,
          borderTop: `1px solid ${C.line}`,
          borderBottom: `1px solid ${C.line}`,
          padding: "4.5rem 5vw",
        }}
      >
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <Reveal>
            <div style={{ textAlign: "center", marginBottom: 36 }}>
              <p
                style={{
                  fontFamily: "'Cinzel', serif",
                  fontSize: 11,
                  letterSpacing: "0.28em",
                  textTransform: "uppercase",
                  color: C.gold,
                  marginBottom: 12,
                }}
              >
                The Rite of Admission
              </p>
              <h2
                style={{
                  fontFamily: "'Cinzel', serif",
                  fontWeight: 500,
                  fontSize: "clamp(1.5rem, 3vw, 2rem)",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  margin: 0,
                }}
              >
                Three movements
              </h2>
            </div>
          </Reveal>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: 0,
            }}
          >
            {[
              { n: "01", t: "Present", d: "Offer any PDF to the vault. Documents large and small receive equal ceremony." },
              { n: "02", t: "Illuminate", d: "Ratio traverses structure and sense, lighting every chamber for your review." },
              { n: "03", t: "Receive", d: "A complete reading apparatus: summary, hints, quotes, and lasting insights." },
            ].map((s, i) => (
              <Reveal key={s.n} delay={i * 0.1}>
                <div
                  style={{
                    padding: "1.5rem 1.75rem",
                    borderLeft: i === 0 ? undefined : `1px solid ${C.line}`,
                    textAlign: "center",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "'Cinzel', serif",
                      fontSize: 11,
                      letterSpacing: "0.2em",
                      color: C.gold,
                      marginBottom: 14,
                    }}
                  >
                    {s.n}
                  </div>
                  <h3
                    style={{
                      fontFamily: "'Cinzel', serif",
                      fontWeight: 600,
                      fontSize: 18,
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      margin: "0 0 10px",
                    }}
                  >
                    {s.t}
                  </h3>
                  <p style={{ margin: 0, fontSize: 16, lineHeight: 1.55, color: C.ivoryDim, fontStyle: "italic" }}>
                    {s.d}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Folio specimen */}
      <section id="folio" style={{ padding: "5rem 5vw", maxWidth: 760, margin: "0 auto" }}>
        <Reveal>
          <div style={{ textAlign: "center", marginBottom: 32 }}>
            <p
              style={{
                fontFamily: "'Cinzel', serif",
                fontSize: 11,
                letterSpacing: "0.28em",
                textTransform: "uppercase",
                color: C.gold,
                marginBottom: 12,
              }}
            >
              Specimen Folio
            </p>
            <h2
              style={{
                fontFamily: "'Cinzel', serif",
                fontWeight: 500,
                fontSize: "clamp(1.5rem, 3vw, 2rem)",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                margin: "0 0 18px",
              }}
            >
              As returned from the vault
            </h2>
            <DecoRule />
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div
            style={{
              border: `1px solid ${C.goldDim}`,
              background: C.navyPanel,
              padding: "2rem clamp(1.25rem, 4vw, 2.5rem)",
              position: "relative",
              boxShadow: `0 0 80px ${C.gold}10`,
            }}
          >
            {/* Corner ornaments */}
            {(["topLeft", "topRight", "bottomLeft", "bottomRight"] as const).map((pos) => {
              const styles: CSSProperties = {
                position: "absolute",
                width: 16,
                height: 16,
                borderColor: C.gold,
                borderStyle: "solid",
                borderWidth: 0,
              };
              if (pos === "topLeft") Object.assign(styles, { top: 8, left: 8, borderTopWidth: 1, borderLeftWidth: 1 });
              if (pos === "topRight") Object.assign(styles, { top: 8, right: 8, borderTopWidth: 1, borderRightWidth: 1 });
              if (pos === "bottomLeft") Object.assign(styles, { bottom: 8, left: 8, borderBottomWidth: 1, borderLeftWidth: 1 });
              if (pos === "bottomRight") Object.assign(styles, { bottom: 8, right: 8, borderBottomWidth: 1, borderRightWidth: 1 });
              return <span key={pos} aria-hidden style={styles} />;
            })}

            <div
              style={{
                fontFamily: "'Cinzel', serif",
                fontSize: 10,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: C.gold,
                textAlign: "center",
                marginBottom: 18,
              }}
            >
              Ratio Reader · Chamber I — Summary
            </div>
            <p
              style={{
                margin: "0 0 1.5rem",
                fontSize: 17,
                lineHeight: 1.7,
                color: C.ivory,
                textAlign: "center",
                fontStyle: "italic",
              }}
            >
              The treatise establishes that comprehension without structured
              synthesis decays swiftly; extraction, connection, and reflection
              restore what mere page-turning abandons.
            </p>
            <DecoRule wide />
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 24,
                marginTop: 20,
              }}
            >
              <div>
                <div
                  style={{
                    fontFamily: "'Cinzel', serif",
                    fontSize: 10,
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    color: C.gold,
                    marginBottom: 8,
                  }}
                >
                  Chamber II · Hint
                </div>
                <p style={{ margin: 0, fontSize: 15, lineHeight: 1.55, color: C.ivoryDim, fontStyle: "italic" }}>
                  Revisit the premise stated on page nineteen before accepting the leap in Chapter Four.
                </p>
              </div>
              <div>
                <div
                  style={{
                    fontFamily: "'Cinzel', serif",
                    fontSize: 10,
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    color: C.gold,
                    marginBottom: 8,
                  }}
                >
                  Chamber III · Quote
                </div>
                <p style={{ margin: 0, fontSize: 15, lineHeight: 1.55, color: C.ivory, fontStyle: "italic" }}>
                  “Understanding requires extraction, connection, and reflection.”
                  <span style={{ color: C.goldDim }}> — p. 47</span>
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* CTA */}
      <section
        id="enroll"
        style={{
          textAlign: "center",
          padding: "5rem 5vw 4.5rem",
          borderTop: `1px solid ${C.line}`,
          background: `linear-gradient(180deg, ${C.navy}, ${C.navyMid})`,
        }}
      >
        <Reveal>
          <div style={{ display: "flex", justifyContent: "center", marginBottom: 16 }}>
            <FanOrnament />
          </div>
          <h2
            style={{
              fontFamily: "'Cinzel', serif",
              fontWeight: 500,
              fontSize: "clamp(1.7rem, 4vw, 2.6rem)",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              margin: "0 0 1rem",
              color: C.goldSoft,
            }}
          >
            Request admission
          </h2>
          <p
            style={{
              fontSize: 18,
              fontStyle: "italic",
              color: C.ivoryDim,
              maxWidth: 400,
              margin: "0 auto 2rem",
              lineHeight: 1.55,
            }}
          >
            First document without tariff. Thereafter, membership as befits the work.
          </p>
          <a
            href="#"
            className="d5-btn"
            onClick={(e) => e.preventDefault()}
            style={{
              display: "inline-block",
              fontFamily: "'Cinzel', serif",
              fontSize: 12,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              textDecoration: "none",
              color: C.navy,
              background: C.gold,
              padding: "1.05rem 2.4rem",
            }}
          >
            Open the Vault
          </a>
        </Reveal>
      </section>

      <footer
        style={{
          borderTop: `1px solid ${C.line}`,
          padding: "1.4rem 5vw",
          display: "flex",
          justifyContent: "space-between",
          fontFamily: "'Cinzel', serif",
          fontSize: 10,
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          color: C.goldDim,
        }}
      >
        <span>Ratio Reader</span>
        <span>05 · Gilded Vault</span>
      </footer>
    </div>
  );
}
