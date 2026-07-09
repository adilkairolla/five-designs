import { useRef, useEffect, useState, type ReactNode, type CSSProperties } from "react";

/* ═══════════════════════════════════════════════════════════
   Design 4 — "Clay Reading Room"
   Soft organic warmth: terracotta, sage, cream. Fraunces +
   Outfit. Reading as a calm, room-like ritual.
═══════════════════════════════════════════════════════════ */

const C = {
  cream: "#F6EEE4",
  clay: "#C4785A",
  clayDeep: "#A45C42",
  sage: "#7D8F72",
  sageSoft: "#A8B59C",
  ink: "#3D2B22",
  inkSoft: "#6B5348",
  blush: "#E8C4B0",
  white: "#FFFBF7",
  leaf: "#5A6E52",
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
        transform: inView ? "none" : "translateY(22px)",
        transition: `opacity 0.9s cubic-bezier(0.22,1,0.36,1) ${delay}s, transform 0.9s cubic-bezier(0.22,1,0.36,1) ${delay}s`,
        ...style,
      }}
    >
      {children}
    </div>
  );
}

function Blob({
  color,
  style,
}: {
  color: string;
  style: CSSProperties;
}) {
  return (
    <div
      aria-hidden
      style={{
        position: "absolute",
        borderRadius: "60% 40% 55% 45% / 50% 60% 40% 50%",
        background: color,
        filter: "blur(2px)",
        ...style,
      }}
    />
  );
}

const gifts = [
  {
    emoji: "◎",
    title: "Gentle summaries",
    body: "A clear, warm reading of what the document actually says — without the bureaucratic fog.",
  },
  {
    emoji: "◐",
    title: "Soft hints",
    body: "Whispers in the margin when a term is new, a leap is bold, or a reread will repay you.",
  },
  {
    emoji: "❝",
    title: "Kept quotes",
    body: "The sentences that glow. Lifted carefully, with page numbers, ready for your notes.",
  },
  {
    emoji: "✧",
    title: "Quiet insights",
    body: "Connections and tensions named gently — the kind of clarity that stays after you close the tab.",
  },
];

export function Design4() {
  return (
    <div
      style={{
        background: C.cream,
        color: C.ink,
        fontFamily: "'Outfit', system-ui, sans-serif",
        minHeight: "100vh",
        position: "relative",
        overflowX: "hidden",
      }}
    >
      <style>{`
        @keyframes d4-float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-12px) rotate(2deg); }
        }
        @keyframes d4-breathe {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.04); }
        }
        .d4-btn {
          transition: transform 0.25s ease, box-shadow 0.25s ease, background 0.25s ease;
        }
        .d4-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 14px 32px ${C.clay}40;
        }
        .d4-card {
          transition: transform 0.35s ease, box-shadow 0.35s ease;
        }
        .d4-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 48px ${C.ink}12;
        }
        .d4-nav a:hover { color: ${C.clayDeep}; }
      `}</style>

      {/* Ambient blobs */}
      <Blob color={`${C.blush}88`} style={{ width: 340, height: 340, top: -80, right: -60, animation: "d4-float 14s ease-in-out infinite" }} />
      <Blob color={`${C.sageSoft}55`} style={{ width: 280, height: 280, top: 200, left: -100, animation: "d4-float 18s ease-in-out infinite reverse" }} />
      <Blob color={`${C.clay}18`} style={{ width: 200, height: 200, bottom: 400, right: "15%", animation: "d4-breathe 10s ease-in-out infinite" }} />

      {/* Nav */}
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "1.35rem 5vw",
          position: "relative",
          zIndex: 10,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <span
            style={{
              width: 32,
              height: 32,
              borderRadius: "50%",
              background: `linear-gradient(135deg, ${C.clay}, ${C.blush})`,
              display: "inline-block",
            }}
          />
          <span
            style={{
              fontFamily: "'Fraunces', Georgia, serif",
              fontWeight: 600,
              fontSize: 20,
              letterSpacing: "-0.02em",
            }}
          >
            Ratio
          </span>
        </div>
        <div className="d4-nav" style={{ display: "flex", gap: "1.75rem", fontSize: 14, color: C.inkSoft, fontWeight: 500 }}>
          <a href="#gifts" style={{ color: "inherit", textDecoration: "none" }}>What you receive</a>
          <a href="#ritual" style={{ color: "inherit", textDecoration: "none" }}>How it feels</a>
          <a href="#room" style={{ color: "inherit", textDecoration: "none" }}>The room</a>
        </div>
        <a
          href="#begin"
          className="d4-btn"
          style={{
            background: C.ink,
            color: C.cream,
            textDecoration: "none",
            padding: "0.65rem 1.2rem",
            borderRadius: 999,
            fontSize: 13,
            fontWeight: 600,
          }}
        >
          Open the room
        </a>
      </nav>

      {/* Hero */}
      <header
        style={{
          padding: "clamp(2rem, 6vw, 4rem) 5vw 3rem",
          maxWidth: 1100,
          margin: "0 auto",
          textAlign: "center",
          position: "relative",
          zIndex: 2,
        }}
      >
        <Reveal>
          <p
            style={{
              display: "inline-block",
              fontSize: 13,
              fontWeight: 500,
              color: C.clayDeep,
              background: `${C.blush}66`,
              padding: "6px 16px",
              borderRadius: 999,
              marginBottom: 24,
            }}
          >
            A quieter way to finish hard PDFs
          </p>
        </Reveal>
        <Reveal delay={0.08}>
          <h1
            style={{
              fontFamily: "'Fraunces', Georgia, serif",
              fontWeight: 500,
              fontSize: "clamp(2.6rem, 7vw, 4.8rem)",
              lineHeight: 1.08,
              letterSpacing: "-0.03em",
              margin: "0 auto 1.25rem",
              maxWidth: 780,
            }}
          >
            Make space to{" "}
            <em style={{ fontStyle: "italic", color: C.clayDeep }}>actually</em>{" "}
            understand
          </h1>
        </Reveal>
        <Reveal delay={0.14}>
          <p
            style={{
              fontSize: 18,
              lineHeight: 1.65,
              color: C.inkSoft,
              maxWidth: 480,
              margin: "0 auto 2rem",
              fontWeight: 400,
            }}
          >
            Upload a document. Ratio Reader gathers the summary, the gentle hints,
            the quotes worth keeping, and the insights that make the reading settle.
          </p>
        </Reveal>
        <Reveal delay={0.2}>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <a
              href="#begin"
              className="d4-btn"
              style={{
                background: C.clay,
                color: C.white,
                textDecoration: "none",
                padding: "1rem 1.8rem",
                borderRadius: 999,
                fontSize: 15,
                fontWeight: 600,
              }}
            >
              Bring a PDF inside →
            </a>
            <a
              href="#room"
              style={{
                background: C.white,
                color: C.ink,
                textDecoration: "none",
                padding: "1rem 1.8rem",
                borderRadius: 999,
                fontSize: 15,
                fontWeight: 500,
                border: `1.5px solid ${C.blush}`,
              }}
            >
              Peek at a page
            </a>
          </div>
        </Reveal>

        {/* Floating product card */}
        <Reveal delay={0.28}>
          <div
            style={{
              marginTop: 56,
              maxWidth: 640,
              marginLeft: "auto",
              marginRight: "auto",
              background: C.white,
              borderRadius: 28,
              padding: "1.75rem 2rem",
              boxShadow: `0 30px 70px ${C.ink}12, 0 0 0 1px ${C.blush}55`,
              textAlign: "left",
              position: "relative",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: -14,
                left: 32,
                background: C.sage,
                color: C.white,
                fontSize: 12,
                fontWeight: 600,
                padding: "4px 14px",
                borderRadius: 999,
              }}
            >
              Today's document
            </div>
            <div style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
              <div
                style={{
                  width: 48,
                  height: 60,
                  borderRadius: 8,
                  background: `linear-gradient(160deg, ${C.clay}, ${C.clayDeep})`,
                  flexShrink: 0,
                  boxShadow: `4px 6px 0 ${C.blush}`,
                }}
              />
              <div>
                <div
                  style={{
                    fontFamily: "'Fraunces', serif",
                    fontWeight: 600,
                    fontSize: 17,
                    marginBottom: 6,
                  }}
                >
                  On Reading & Retention.pdf
                </div>
                <p style={{ margin: "0 0 12px", fontSize: 14, color: C.inkSoft, lineHeight: 1.55 }}>
                  Summary ready · 4 hints · 6 quotes · 3 insights ready for notes.
                </p>
                <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                  {["Summary", "Hints", "Quotes", "Insights"].map((t) => (
                    <span
                      key={t}
                      style={{
                        fontSize: 12,
                        fontWeight: 500,
                        padding: "4px 12px",
                        borderRadius: 999,
                        background: t === "Summary" ? `${C.clay}18` : `${C.sage}18`,
                        color: t === "Summary" ? C.clayDeep : C.leaf,
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </header>

      {/* Gifts */}
      <section id="gifts" style={{ padding: "5rem 5vw", maxWidth: 1100, margin: "0 auto", position: "relative", zIndex: 2 }}>
        <Reveal>
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <p style={{ fontSize: 13, fontWeight: 600, color: C.sage, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 10 }}>
              What the room offers
            </p>
            <h2
              style={{
                fontFamily: "'Fraunces', serif",
                fontWeight: 500,
                fontSize: "clamp(1.9rem, 4vw, 2.8rem)",
                margin: 0,
                letterSpacing: "-0.02em",
              }}
            >
              Four soft instruments
            </h2>
          </div>
        </Reveal>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))",
            gap: 18,
          }}
        >
          {gifts.map((g, i) => (
            <Reveal key={g.title} delay={i * 0.08}>
              <article
                className="d4-card"
                style={{
                  background: C.white,
                  borderRadius: 24,
                  padding: "1.6rem 1.5rem 1.75rem",
                  boxShadow: `0 4px 24px ${C.ink}08`,
                  border: `1px solid ${C.blush}66`,
                  height: "100%",
                }}
              >
                <div
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: 14,
                    background: i % 2 === 0 ? `${C.clay}18` : `${C.sage}18`,
                    color: i % 2 === 0 ? C.clayDeep : C.leaf,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 20,
                    marginBottom: 16,
                  }}
                >
                  {g.emoji}
                </div>
                <h3
                  style={{
                    fontFamily: "'Fraunces', serif",
                    fontWeight: 600,
                    fontSize: 19,
                    margin: "0 0 8px",
                  }}
                >
                  {g.title}
                </h3>
                <p style={{ margin: 0, fontSize: 14.5, lineHeight: 1.6, color: C.inkSoft }}>{g.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Ritual */}
      <section
        id="ritual"
        style={{
          background: C.ink,
          color: C.cream,
          padding: "5rem 5vw",
          borderRadius: "48px 48px 0 0",
          position: "relative",
          zIndex: 2,
        }}
      >
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <Reveal>
            <p style={{ fontSize: 13, fontWeight: 600, color: C.blush, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 10 }}>
              The ritual
            </p>
            <h2
              style={{
                fontFamily: "'Fraunces', serif",
                fontWeight: 500,
                fontSize: "clamp(1.9rem, 4vw, 2.6rem)",
                margin: "0 0 2.5rem",
                maxWidth: 420,
              }}
            >
              Three unhurried steps
            </h2>
          </Reveal>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: 28,
            }}
          >
            {[
              { n: "01", t: "Place the PDF", d: "Drag it in. Long reports beloved. Books welcome." },
              { n: "02", t: "Let Ratio read", d: "While you pour tea, structure and sense are gathered." },
              { n: "03", t: "Sit with the notes", d: "Summary, hints, quotes, insights — arranged for ease." },
            ].map((s, i) => (
              <Reveal key={s.n} delay={i * 0.1}>
                <div>
                  <div
                    style={{
                      fontFamily: "'Fraunces', serif",
                      fontSize: 40,
                      fontWeight: 300,
                      color: C.clay,
                      marginBottom: 8,
                      lineHeight: 1,
                    }}
                  >
                    {s.n}
                  </div>
                  <h3 style={{ fontFamily: "'Fraunces', serif", fontWeight: 600, fontSize: 20, margin: "0 0 8px" }}>
                    {s.t}
                  </h3>
                  <p style={{ margin: 0, color: `${C.cream}bb`, fontSize: 14.5, lineHeight: 1.55 }}>{s.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Room specimen */}
      <section id="room" style={{ background: C.ink, padding: "0 5vw 5rem" }}>
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <Reveal>
            <div
              style={{
                background: C.cream,
                color: C.ink,
                borderRadius: 28,
                padding: "2rem clamp(1.25rem, 4vw, 2.5rem)",
                boxShadow: `0 40px 80px rgba(0,0,0,0.3)`,
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: 20,
                }}
              >
                <span
                  style={{
                    fontFamily: "'Fraunces', serif",
                    fontWeight: 600,
                    fontSize: 16,
                  }}
                >
                  Reading notes
                </span>
                <span style={{ fontSize: 12, color: C.inkSoft, fontWeight: 500 }}>Page composite</span>
              </div>
              <div
                style={{
                  background: C.white,
                  borderRadius: 18,
                  padding: "1.25rem 1.4rem",
                  marginBottom: 14,
                  border: `1px solid ${C.blush}`,
                }}
              >
                <div style={{ fontSize: 11, fontWeight: 600, color: C.clay, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 8 }}>
                  Summary
                </div>
                <p style={{ margin: 0, fontSize: 14.5, lineHeight: 1.65, color: C.inkSoft }}>
                  After twenty unpunctuated minutes, comprehension softens. The
                  writers show that structured extraction — summary, annotation,
                  reflection — restores retention with surprising reliability.
                </p>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                <div
                  style={{
                    background: `${C.sage}14`,
                    borderRadius: 16,
                    padding: "1rem 1.1rem",
                  }}
                >
                  <div style={{ fontSize: 11, fontWeight: 600, color: C.leaf, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 6 }}>
                    Hint
                  </div>
                  <p style={{ margin: 0, fontSize: 13, lineHeight: 1.5, color: C.inkSoft }}>
                    Linger on section 2 — the definition of “synthesis” is quieter than it looks.
                  </p>
                </div>
                <div
                  style={{
                    background: `${C.clay}14`,
                    borderRadius: 16,
                    padding: "1rem 1.1rem",
                  }}
                >
                  <div style={{ fontSize: 11, fontWeight: 600, color: C.clayDeep, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 6 }}>
                    Quote
                  </div>
                  <p style={{ margin: 0, fontSize: 13, lineHeight: 1.5, fontFamily: "'Fraunces', serif", fontStyle: "italic" }}>
                    “Reading without synthesis is merely scanning.”
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section
        id="begin"
        style={{
          padding: "5.5rem 5vw",
          textAlign: "center",
          background: C.cream,
          position: "relative",
          zIndex: 2,
        }}
      >
        <Reveal>
          <h2
            style={{
              fontFamily: "'Fraunces', serif",
              fontWeight: 500,
              fontSize: "clamp(2rem, 4.5vw, 3rem)",
              margin: "0 0 1rem",
              letterSpacing: "-0.02em",
            }}
          >
            Your densest PDF
            <br />
            <em style={{ color: C.clayDeep }}>deserves</em> a calmer room
          </h2>
          <p style={{ color: C.inkSoft, fontSize: 16, marginBottom: 28, maxWidth: 400, marginLeft: "auto", marginRight: "auto", lineHeight: 1.6 }}>
            First document free. Soft exit anytime. No noise.
          </p>
          <a
            href="#"
            className="d4-btn"
            onClick={(e) => e.preventDefault()}
            style={{
              display: "inline-block",
              background: C.clay,
              color: C.white,
              textDecoration: "none",
              padding: "1.05rem 2rem",
              borderRadius: 999,
              fontSize: 15,
              fontWeight: 600,
            }}
          >
            Start free with a PDF
          </a>
        </Reveal>
      </section>

      <footer
        style={{
          padding: "1.5rem 5vw",
          display: "flex",
          justifyContent: "space-between",
          fontSize: 13,
          color: C.inkSoft,
          borderTop: `1px solid ${C.blush}`,
        }}
      >
        <span style={{ fontFamily: "'Fraunces', serif", fontWeight: 600 }}>Ratio Reader</span>
        <span>04 · Clay Reading Room</span>
      </footer>
    </div>
  );
}
