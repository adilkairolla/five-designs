import { Link } from "react-router-dom";

const designs = [
  {
    path: "/1",
    n: "01",
    title: "Parchment & Vermilion",
    subtitle: "Annotated manuscript",
    tone: "Scholarly editorial · cream paper · red-ink marginalia",
    bg: "#F3ECDD",
    fg: "#1A1612",
    accent: "#C23B22",
  },
  {
    path: "/2",
    n: "02",
    title: "Phosphor Desk",
    subtitle: "Research terminal",
    tone: "Signal-green lab · CRT glow · pipeline readout",
    bg: "#050806",
    fg: "#9AFF9A",
    accent: "#F0B429",
  },
  {
    path: "/3",
    n: "03",
    title: "Power Ratio",
    subtitle: "Swiss brutalist grid",
    tone: "Black · yellow · massive type · no ornament",
    bg: "#F5F5F0",
    fg: "#0A0A0A",
    accent: "#FFE500",
  },
  {
    path: "/4",
    n: "04",
    title: "Clay Reading Room",
    subtitle: "Soft organic warmth",
    tone: "Terracotta · sage · rounded forms · quiet focus",
    bg: "#F6EEE4",
    fg: "#3D2B22",
    accent: "#C4785A",
  },
  {
    path: "/5",
    n: "05",
    title: "Gilded Vault",
    subtitle: "Art deco archive",
    tone: "Midnight navy · champagne gold · geometric ritual",
    bg: "#0A1628",
    fg: "#E8DFC8",
    accent: "#D4AF37",
  },
];

export function Gallery() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#0c0c0e",
        color: "#e8e6e3",
        fontFamily: "'DM Sans', system-ui, sans-serif",
      }}
    >
      <div style={{ maxWidth: 920, margin: "0 auto", padding: "4rem 1.5rem 6rem" }}>
        <p
          style={{
            fontSize: 11,
            letterSpacing: "0.28em",
            textTransform: "uppercase",
            color: "#7a7874",
            marginBottom: 16,
          }}
        >
          Ratio Reader · Design Experiments
        </p>
        <h1
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontWeight: 500,
            fontSize: "clamp(2.4rem, 6vw, 3.6rem)",
            lineHeight: 1.05,
            margin: "0 0 1rem",
            letterSpacing: "-0.02em",
          }}
        >
          Five ways to sell
          <br />
          deeper reading.
        </h1>
        <p style={{ maxWidth: 480, color: "#9b9892", lineHeight: 1.6, marginBottom: 48 }}>
          Upload a PDF. Receive summaries, hints, quotes, and insights that make
          understanding effortless. Each surface below interprets the same product
          through a radical, self-contained aesthetic.
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {designs.map((d) => (
            <Link
              key={d.path}
              to={d.path}
              style={{
                display: "grid",
                gridTemplateColumns: "auto 1fr auto",
                gap: 20,
                alignItems: "center",
                padding: "1.25rem 1.4rem",
                borderRadius: 14,
                textDecoration: "none",
                color: d.fg,
                background: d.bg,
                border: "1px solid transparent",
                transition: "transform 0.2s ease, box-shadow 0.2s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow = `0 12px 40px ${d.accent}33`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "none";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <span
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 12,
                  fontWeight: 600,
                  color: d.accent,
                  minWidth: 28,
                }}
              >
                {d.n}
              </span>
              <div>
                <div style={{ fontWeight: 600, fontSize: 17, marginBottom: 2 }}>
                  {d.title}
                </div>
                <div style={{ fontSize: 13, opacity: 0.72 }}>{d.tone}</div>
              </div>
              <span style={{ fontSize: 13, opacity: 0.55, fontWeight: 500 }}>
                Open →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
