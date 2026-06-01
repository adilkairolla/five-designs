import "@fontsource/archivo-black/400.css";
import "@fontsource/cormorant-garamond/400-italic.css";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const BLOCK = "'Archivo Black', Impact, sans-serif";
const ITALIC = "'Cormorant Garamond', Georgia, serif";

const PALETTE = {
  lime: "#c8f536",
  coral: "#ff4d2e",
  sky: "#38bdf8",
  cream: "#fef9ee",
  dark: "#0f0f0f",
  violet: "#8b5cf6",
  orange: "#ff8c00",
  pink: "#ff2d78",
};

function MarqueeStrip({ items, bg, color, reverse = false }: { items: string[]; bg: string; color: string; reverse?: boolean }) {
  return (
    <div style={{ background: bg, overflow: "hidden", padding: "0.8rem 0", borderTop: "2px solid #0f0f0f", borderBottom: "2px solid #0f0f0f" }}>
      <motion.div
        animate={{ x: reverse ? ["0%", "50%"] : ["0%", "-50%"] }}
        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        style={{ display: "flex", gap: "2rem", whiteSpace: "nowrap" }}
      >
        {[...items, ...items].map((item, i) => (
          <span key={i} style={{ fontFamily: BLOCK, fontSize: "0.85rem", letterSpacing: "0.05em", color, textTransform: "uppercase" }}>{item}</span>
        ))}
      </motion.div>
    </div>
  );
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function FloatingCard({ children, style = {}, animate }: { children: React.ReactNode; style?: React.CSSProperties; animate?: any }) {
  return (
    <motion.div
      animate={animate}
      transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
      style={{
        border: "2px solid #0f0f0f",
        padding: "1.5rem",
        background: PALETTE.cream,
        ...style,
      }}
    >
      {children}
    </motion.div>
  );
}

function BigNumber({ n }: { n: string }) {
  return (
    <span style={{ fontFamily: BLOCK, fontSize: "clamp(3rem, 8vw, 7rem)", lineHeight: 1, letterSpacing: "-0.04em" }}>{n}</span>
  );
}

export default function Design5() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const [hovered, setHovered] = useState<number | null>(null);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => setCursor({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  const features = [
    { bg: PALETTE.lime, title: "Summary", emoji: "📖", body: "Core ideas extracted. Every document reduced to its irreducible essence. No filler." },
    { bg: PALETTE.sky, title: "Hints", emoji: "💡", body: "Context injected where you need it. Annotations that illuminate, not overwhelm." },
    { bg: PALETTE.coral, title: "Quotes", emoji: "❝", body: "The sentences that carry the whole. Extracted and presented with intention." },
    { bg: "#f0c4ff", title: "Insights", emoji: "✨", body: "Patterns across the entire text. The big picture made unmissably clear." },
  ];

  return (
    <div ref={containerRef} style={{ fontFamily: BLOCK, background: PALETTE.cream, color: PALETTE.dark, minHeight: "100vh", overflowX: "hidden" }}>
      {/* Custom cursor */}
      <motion.div
        style={{ position: "fixed", left: cursor.x - 12, top: cursor.y - 12, width: 24, height: 24, background: PALETTE.lime, borderRadius: "50%", zIndex: 9999, pointerEvents: "none", mixBlendMode: "multiply" }}
        animate={{ left: cursor.x - 12, top: cursor.y - 12 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      />

      <style>{`
        * { margin: 0; padding: 0; box-sizing: border-box; }
        ::selection { background: ${PALETTE.lime}; color: ${PALETTE.dark}; }
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-thumb { background: ${PALETTE.dark}; }
        a, button { cursor: none; }
        .italic { font-family: ${ITALIC}; font-style: italic; font-weight: 400; }
        @keyframes wiggle { 0%, 100% { transform: rotate(-3deg); } 50% { transform: rotate(3deg); } }
        @keyframes bounce { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-8px); } }
      `}</style>

      {/* Nav */}
      <motion.nav
        initial={{ y: -60 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        style={{ position: "sticky", top: 0, zIndex: 100, background: PALETTE.dark, color: PALETTE.cream, padding: "1.2rem 2rem", display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "3px solid " + PALETTE.lime }}
      >
        <div style={{ fontFamily: BLOCK, fontSize: "1.3rem", letterSpacing: "-0.02em" }}>
          RATIO<span style={{ color: PALETTE.lime }}>.</span>READER
        </div>
        <div style={{ display: "flex", gap: "0.5rem" }}>
          {["Features", "Pricing", "Login"].map((item, i) => (
            <button key={item} style={{
              background: i === 2 ? PALETTE.lime : "transparent",
              color: i === 2 ? PALETTE.dark : PALETTE.cream,
              border: "2px solid " + (i === 2 ? PALETTE.lime : "#ffffff33"),
              padding: "0.5rem 1.2rem",
              fontSize: "0.75rem",
              letterSpacing: "0.05em",
              fontFamily: BLOCK,
              transition: "all 0.2s",
            }}
              onMouseEnter={e => { if (i !== 2) { (e.currentTarget as HTMLButtonElement).style.borderColor = PALETTE.lime; (e.currentTarget as HTMLButtonElement).style.color = PALETTE.lime; } }}
              onMouseLeave={e => { if (i !== 2) { (e.currentTarget as HTMLButtonElement).style.borderColor = "#ffffff33"; (e.currentTarget as HTMLButtonElement).style.color = PALETTE.cream; } }}
            >{item}</button>
          ))}
        </div>
      </motion.nav>

      {/* Hero */}
      <section style={{ minHeight: "92vh", padding: "0", position: "relative", display: "grid", gridTemplateRows: "1fr auto" }}>
        {/* Big colored blocks */}
        <div style={{ position: "absolute", top: 0, right: 0, width: "42%", height: "60%", background: PALETTE.lime, zIndex: 0 }} />
        <div style={{ position: "absolute", bottom: 0, left: "30%", width: "30%", height: "35%", background: PALETTE.coral, zIndex: 0 }} />

        <div style={{ position: "relative", zIndex: 2, padding: "5rem 3rem 3rem", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem", alignItems: "start" }}>
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <h1 style={{ fontFamily: BLOCK, fontSize: "clamp(4rem, 10vw, 9rem)", lineHeight: 0.88, letterSpacing: "-0.05em", color: PALETTE.dark, marginBottom: "2rem" }}>
              RATIO<br />
              <span style={{ color: PALETTE.coral }}>REA</span>
              <span style={{ fontFamily: ITALIC, fontStyle: "italic", fontWeight: 400, fontSize: "0.9em" }}>der</span>
            </h1>
            <p style={{ fontFamily: ITALIC, fontStyle: "italic", fontSize: "1.5rem", lineHeight: 1.5, color: "#333", maxWidth: "420px", marginBottom: "2.5rem", fontWeight: 400 }}>
              Upload any PDF. Get the summary, the quotes, the hints, the insights — everything you need, nothing you don't.
            </p>
            <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
              <motion.button
                whileHover={{ scale: 1.05, rotate: -1 }}
                whileTap={{ scale: 0.97 }}
                style={{ background: PALETTE.dark, color: PALETTE.lime, border: "2px solid " + PALETTE.dark, padding: "1rem 2rem", fontSize: "0.9rem", letterSpacing: "0.05em", fontFamily: BLOCK, transition: "all 0.15s" }}
              >↑ UPLOAD PDF</motion.button>
              <motion.button
                whileHover={{ scale: 1.05, rotate: 1 }}
                whileTap={{ scale: 0.97 }}
                style={{ background: "transparent", color: PALETTE.dark, border: "2px solid " + PALETTE.dark, padding: "1rem 2rem", fontSize: "0.9rem", letterSpacing: "0.05em", fontFamily: BLOCK, transition: "all 0.15s" }}
              >SEE DEMO →</motion.button>
            </div>
          </motion.div>

          {/* Right — floating cards */}
          <div style={{ position: "relative", height: "420px" }}>
            <FloatingCard
              animate={{ y: [0, -10, 0], rotate: [-2, -1, -2] }}
              style={{ position: "absolute", top: "0%", right: "10%", width: "260px", background: PALETTE.lime, zIndex: 3 }}
            >
              <div style={{ fontSize: "0.65rem", letterSpacing: "0.2em", marginBottom: "0.5rem", textTransform: "uppercase" }}>Summary</div>
              <p style={{ fontFamily: ITALIC, fontStyle: "italic", fontSize: "1rem", lineHeight: 1.6 }}>
                "The core argument, in 3 paragraphs. Every chapter's key takeaway, clearly stated..."
              </p>
            </FloatingCard>
            <FloatingCard
              animate={{ y: [0, 8, 0], rotate: [3, 4, 3] }}
              style={{ position: "absolute", top: "30%", left: "5%", width: "220px", background: PALETTE.sky, zIndex: 4 }}
            >
              <div style={{ fontSize: "0.65rem", letterSpacing: "0.2em", marginBottom: "0.5rem" }}>KEY QUOTE</div>
              <p style={{ fontFamily: ITALIC, fontStyle: "italic", fontSize: "0.95rem", lineHeight: 1.6, fontWeight: 400 }}>
                "The most important sentence in the book — surfaced automatically."
              </p>
            </FloatingCard>
            <FloatingCard
              animate={{ y: [0, -6, 0], rotate: [1, -1, 1] }}
              style={{ position: "absolute", bottom: "5%", right: "5%", width: "200px", background: "#f0c4ff", zIndex: 3 }}
            >
              <div style={{ fontSize: "0.65rem", letterSpacing: "0.2em", marginBottom: "0.5rem" }}>INSIGHT</div>
              <p style={{ fontFamily: ITALIC, fontStyle: "italic", fontSize: "0.9rem", lineHeight: 1.6, fontWeight: 400 }}>
                "Chapter 3 and 7 share a hidden contradiction the author never resolves."
              </p>
            </FloatingCard>
            {/* Rotating badge */}
            <motion.div style={{ position: "absolute", top: "15%", left: "35%", rotate, width: 90, height: 90, zIndex: 5 }}>
              <div style={{ width: "100%", height: "100%", border: "2px solid " + PALETTE.dark, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", background: PALETTE.orange, fontSize: "0.5rem", letterSpacing: "0.15em", textAlign: "center", lineHeight: 1.3 }}>
                FREE TO<br />START
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom strip */}
        <div style={{ position: "relative", zIndex: 2 }}>
          <MarqueeStrip items={["Upload PDF", "★", "Get Summary", "★", "Key Quotes", "★", "Smart Hints", "★", "Deep Insights", "★", "Read Better", "★"]} bg={PALETTE.dark} color={PALETTE.lime} />
        </div>
      </section>

      {/* Features */}
      <section style={{ padding: "6rem 3rem" }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ marginBottom: "3rem" }}
        >
          <h2 style={{ fontFamily: BLOCK, fontSize: "clamp(2.5rem, 6vw, 5rem)", letterSpacing: "-0.04em", lineHeight: 0.95, marginBottom: "0.5rem" }}>
            FOUR TOOLS.<br /><span className="italic" style={{ fontSize: "0.85em" }}>one upload.</span>
          </h2>
        </motion.div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "1.5rem" }}>
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              onHoverStart={() => setHovered(i)}
              onHoverEnd={() => setHovered(null)}
              style={{
                background: hovered === i ? f.bg : PALETTE.cream,
                border: "2px solid " + PALETTE.dark,
                padding: "2.5rem",
                transition: "background 0.25s",
                cursor: "none",
              }}
            >
              <div style={{ fontSize: "2.5rem", marginBottom: "1rem", display: "inline-block", animation: hovered === i ? "wiggle 0.5s ease-in-out infinite" : "none" }}>
                {f.emoji}
              </div>
              <h3 style={{ fontFamily: BLOCK, fontSize: "clamp(1.5rem, 3vw, 2.5rem)", letterSpacing: "-0.03em", marginBottom: "0.75rem" }}>
                {f.title.toUpperCase()}
              </h3>
              <p style={{ fontFamily: ITALIC, fontStyle: "italic", fontSize: "1.05rem", lineHeight: 1.7, color: "#333", fontWeight: 400 }}>{f.body}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Stats */}
      <MarqueeStrip items={["94% comprehension boost", "●", "12x faster", "●", "50,000+ docs", "●", "30s per doc", "●"]} bg={PALETTE.coral} color={PALETTE.cream} reverse />

      <section style={{ padding: "6rem 3rem", background: PALETTE.dark, color: PALETTE.cream }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "0", borderTop: "2px solid #333", borderLeft: "2px solid #333" }}>
          {[
            { n: "94%", label: "Better Comprehension" },
            { n: "12×", label: "Speed vs. Notes" },
            { n: "30s", label: "To Full Insight" },
          ].map((stat, i) => (
            <motion.div
              key={stat.n}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              whileHover={{ background: PALETTE.lime, color: PALETTE.dark }}
              style={{ padding: "3rem 2rem", borderRight: "2px solid #333", borderBottom: "2px solid #333", transition: "all 0.25s" }}
            >
              <BigNumber n={stat.n} />
              <div style={{ fontFamily: ITALIC, fontStyle: "italic", fontSize: "1.1rem", marginTop: "0.5rem", fontWeight: 400, opacity: 0.7 }}>{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section style={{ padding: "7rem 3rem" }}>
        <motion.h2
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          style={{ fontFamily: BLOCK, fontSize: "clamp(2rem, 5vw, 4rem)", letterSpacing: "-0.04em", marginBottom: "4rem" }}
        >
          HOW IT WORKS<br />
          <span style={{ fontFamily: ITALIC, fontStyle: "italic", fontSize: "0.65em", color: "#888", fontWeight: 400 }}>(it's embarrassingly simple)</span>
        </motion.h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "0", border: "2px solid " + PALETTE.dark }}>
          {[
            { n: "1", color: PALETTE.lime, title: "Upload", body: "Any PDF. Seriously, any of them. Textbook, novel, whitepaper, manual — drop it in." },
            { n: "2", color: PALETTE.sky, title: "Analyze", body: "30 seconds. We read the whole thing. Every chapter. Every claim. Every footnote." },
            { n: "3", color: PALETTE.coral, title: "Understand", body: "Your complete reading guide arrives. Open it. Amaze yourself at how much you just learned." },
          ].map((step, i) => (
            <motion.div
              key={step.n}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              style={{ padding: "3rem 2rem", borderRight: i < 2 ? "2px solid " + PALETTE.dark : "none", position: "relative" }}
            >
              <div style={{ fontFamily: BLOCK, fontSize: "5rem", color: step.color, lineHeight: 1, marginBottom: "1rem", opacity: 0.9 }}>{step.n}</div>
              <h3 style={{ fontFamily: BLOCK, fontSize: "1.8rem", letterSpacing: "-0.03em", marginBottom: "0.75rem" }}>{step.title.toUpperCase()}</h3>
              <p style={{ fontFamily: ITALIC, fontStyle: "italic", fontSize: "1rem", lineHeight: 1.7, color: "#444", fontWeight: 400 }}>{step.body}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonial */}
      <section style={{ background: PALETTE.violet, padding: "6rem 3rem", color: PALETTE.cream }}>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          style={{ maxWidth: "900px", margin: "0 auto", textAlign: "center" }}
        >
          <div style={{ fontFamily: BLOCK, fontSize: "6rem", lineHeight: 0.7, color: PALETTE.lime, marginBottom: "1.5rem" }}>"</div>
          <p style={{ fontFamily: ITALIC, fontStyle: "italic", fontSize: "clamp(1.5rem, 3vw, 2.5rem)", lineHeight: 1.3, marginBottom: "2rem", fontWeight: 400 }}>
            I read a 400-page book in 40 minutes and understood it better than I ever had from cover-to-cover reads.
          </p>
          <div style={{ fontFamily: BLOCK, fontSize: "0.8rem", letterSpacing: "0.15em", color: PALETTE.lime }}>— VERIFIED USER</div>
        </motion.div>
      </section>

      {/* CTA */}
      <section style={{ padding: "8rem 3rem", background: PALETTE.lime }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr auto", alignItems: "center", gap: "3rem", maxWidth: "1100px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: BLOCK, fontSize: "clamp(3rem, 7vw, 6rem)", lineHeight: 0.9, letterSpacing: "-0.05em" }}>
            START<br />
            READING<br />
            <span className="italic" style={{ fontSize: "0.85em", color: "#333" }}>smarter.</span>
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem", minWidth: "260px" }}>
            <motion.button
              whileHover={{ scale: 1.04, rotate: -1 }}
              whileTap={{ scale: 0.97 }}
              style={{ background: PALETTE.dark, color: PALETTE.lime, border: "2px solid " + PALETTE.dark, padding: "1.2rem 2rem", fontSize: "1rem", letterSpacing: "0.05em", fontFamily: BLOCK }}
            >↑ UPLOAD PDF FREE</motion.button>
            <div style={{ fontFamily: ITALIC, fontStyle: "italic", textAlign: "center", fontSize: "0.9rem", color: "#333" }}>
              No credit card. No nonsense.
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ background: PALETTE.dark, color: "#666", padding: "2rem 3rem", display: "flex", justifyContent: "space-between", borderTop: "2px solid " + PALETTE.lime }}>
        <div style={{ fontFamily: BLOCK, color: PALETTE.lime, fontSize: "1rem", letterSpacing: "-0.01em" }}>RATIO.READER</div>
        <div style={{ fontSize: "0.75rem", letterSpacing: "0.1em" }}>© 2025</div>
      </footer>
    </div>
  );
}
