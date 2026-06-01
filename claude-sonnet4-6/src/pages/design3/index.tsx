import "@fontsource/dm-serif-display/400.css";
import "@fontsource/dm-serif-display/400-italic.css";
import "@fontsource/cormorant-garamond/300.css";
import "@fontsource/cormorant-garamond/400.css";
import "@fontsource/cormorant-garamond/400-italic.css";
import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";

function useInView(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold });
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

function Reveal({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const { ref, visible } = useInView();
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 24 }} animate={visible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 1, delay, ease: "easeOut" }} className={className}>
      {children}
    </motion.div>
  );
}

// Leaf SVG
function Leaf({ style }: { style?: React.CSSProperties }) {
  return (
    <svg viewBox="0 0 80 120" style={{ width: 80, height: 120, ...style }} fill="none">
      <path d="M40 110 C40 110 10 80 10 45 C10 20 25 5 40 5 C55 5 70 20 70 45 C70 80 40 110 40 110Z" fill="currentColor" opacity="0.15" />
      <path d="M40 110 L40 5" stroke="currentColor" strokeWidth="1" opacity="0.3" />
      <path d="M40 40 Q55 30 65 35" stroke="currentColor" strokeWidth="0.8" opacity="0.2" fill="none" />
      <path d="M40 55 Q25 45 18 50" stroke="currentColor" strokeWidth="0.8" opacity="0.2" fill="none" />
      <path d="M40 70 Q55 60 62 65" stroke="currentColor" strokeWidth="0.8" opacity="0.2" fill="none" />
    </svg>
  );
}

export default function Design3() {
  return (
    <div style={{
      fontFamily: "'Cormorant Garamond', Georgia, serif",
      background: "#faf6ef",
      color: "#2c2416",
      minHeight: "100vh",
      overflowX: "hidden"
    }}>
      <style>{`
        * { margin: 0; padding: 0; box-sizing: border-box; }
        ::selection { background: #c8a96e44; }
        .display { font-family: 'DM Serif Display', Georgia, serif; }
        .warm-gold { color: #b8854a; }
        .warm-sage { color: #6b7c5a; }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-thumb { background: #c8a96e; border-radius: 2px; }
        .tag { background: #e8dcc8; color: #7a5e3a; font-size: 0.65rem; letter-spacing: 0.2em; text-transform: uppercase; padding: 0.3rem 0.8rem; border-radius: 100px; display: inline-block; }
        @keyframes float { 0%, 100% { transform: translateY(0px) rotate(0deg); } 50% { transform: translateY(-12px) rotate(3deg); } }
        @keyframes sway { 0%, 100% { transform: rotate(-5deg); } 50% { transform: rotate(5deg); } }
      `}</style>

      {/* Nav */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{ padding: "1.8rem 3rem", display: "flex", justifyContent: "space-between", alignItems: "center", position: "sticky", top: 0, zIndex: 100, background: "rgba(250,246,239,0.88)", backdropFilter: "blur(16px)", borderBottom: "1px solid #e8dcc844" }}
      >
        <div className="display" style={{ fontSize: "1.3rem", color: "#2c2416" }}>
          Ratio <span className="warm-gold" style={{ fontStyle: "italic" }}>Reader</span>
        </div>
        <div style={{ display: "flex", gap: "2.5rem", fontSize: "0.85rem", letterSpacing: "0.05em" }}>
          {["Features", "About", "Pricing"].map(item => (
            <a key={item} href="#" style={{ color: "#8a7060", textDecoration: "none", transition: "color 0.3s" }}
              onMouseEnter={e => (e.currentTarget.style.color = "#b8854a")}
              onMouseLeave={e => (e.currentTarget.style.color = "#8a7060")}
            >{item}</a>
          ))}
        </div>
        <button style={{ background: "#2c2416", color: "#faf6ef", border: "none", padding: "0.7rem 1.8rem", borderRadius: "100px", fontSize: "0.8rem", cursor: "pointer", transition: "all 0.3s", letterSpacing: "0.05em" }}
          onMouseEnter={e => (e.currentTarget.style.background = "#b8854a")}
          onMouseLeave={e => (e.currentTarget.style.background = "#2c2416")}
        >Try Free</button>
      </motion.nav>

      {/* Hero */}
      <section style={{ position: "relative", minHeight: "92vh", display: "flex", alignItems: "center", padding: "4rem 3rem", overflow: "hidden" }}>
        {/* Background botanical elements */}
        <div style={{ position: "absolute", top: 0, right: 0, width: "45%", height: "100%", background: "linear-gradient(135deg, #e8dcc8 0%, #d4c4a8 100%)", borderBottomLeftRadius: "60% 40%", zIndex: 0 }} />

        {/* Floating leaves */}
        {[
          { top: "8%", right: "8%", color: "#6b7c5a", delay: 0, size: 1.3 },
          { top: "25%", right: "28%", color: "#b8854a", delay: 1, size: 0.7 },
          { top: "60%", right: "5%", color: "#8a7060", delay: 2, size: 1 },
          { top: "15%", right: "42%", color: "#6b7c5a", delay: 0.5, size: 0.6 },
          { top: "72%", right: "32%", color: "#b8854a", delay: 1.5, size: 0.9 },
        ].map((l, i) => (
          <div key={i} style={{
            position: "absolute",
            top: l.top,
            right: l.right,
            color: l.color,
            animation: `float ${4 + i * 0.7}s ease-in-out infinite`,
            animationDelay: `${l.delay}s`,
            transform: `scale(${l.size})`,
            zIndex: 1,
          }}>
            <Leaf />
          </div>
        ))}

        {/* Content */}
        <div style={{ maxWidth: "1100px", margin: "0 auto", width: "100%", position: "relative", zIndex: 2 }}>
          <div style={{ maxWidth: "580px" }}>
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
              <span className="tag">Thoughtful Reading</span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
              className="display"
              style={{ fontSize: "clamp(3.2rem, 6vw, 5.5rem)", lineHeight: 1.08, marginTop: "1.5rem", marginBottom: "1.5rem", color: "#2c2416" }}
            >
              Reading that<br />
              <span className="warm-gold" style={{ fontStyle: "italic" }}>nourishes</span><br />
              the mind.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              style={{ fontSize: "1.2rem", lineHeight: 1.75, color: "#7a6450", fontWeight: 300, marginBottom: "2.5rem", maxWidth: "460px" }}
            >
              Upload any PDF and receive a thoughtfully crafted reading companion — summaries, key quotes, and insights designed to deepen your understanding.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.7 }}
              style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}
            >
              <button style={{ background: "#b8854a", color: "#faf6ef", border: "none", padding: "1rem 2.2rem", borderRadius: "100px", fontSize: "0.95rem", cursor: "pointer", transition: "all 0.3s", fontFamily: "'Cormorant Garamond', serif", letterSpacing: "0.03em" }}
                onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.background = "#9a6e3a"; (e.currentTarget as HTMLButtonElement).style.transform = "scale(1.02)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.background = "#b8854a"; (e.currentTarget as HTMLButtonElement).style.transform = "scale(1)"; }}
              >Upload Your First Book</button>
              <button style={{ background: "transparent", color: "#2c2416", border: "1.5px solid #c8a96e", padding: "1rem 2.2rem", borderRadius: "100px", fontSize: "0.95rem", cursor: "pointer", transition: "all 0.3s", fontFamily: "'Cormorant Garamond', serif" }}
                onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.background = "#e8dcc8"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.background = "transparent"; }}
              >See an Example</button>
            </motion.div>
          </div>

          {/* Floating card */}
          <motion.div
            initial={{ opacity: 0, x: 60, rotate: 3 }}
            animate={{ opacity: 1, x: 0, rotate: 3 }}
            transition={{ duration: 1, delay: 0.9, ease: "easeOut" }}
            style={{
              position: "absolute",
              right: "0",
              top: "50%",
              transform: "translateY(-50%) rotate(3deg)",
              background: "#fff",
              borderRadius: "16px",
              padding: "2rem",
              maxWidth: "300px",
              boxShadow: "0 24px 60px #2c241622, 0 4px 16px #2c241612",
              border: "1px solid #e8dcc8",
            }}
          >
            <div style={{ fontSize: "0.6rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#b8854a", marginBottom: "1rem" }}>Summary Preview</div>
            <p style={{ fontSize: "0.95rem", lineHeight: 1.7, color: "#4a3828", fontStyle: "italic", marginBottom: "1.5rem" }}>
              "The central thesis emerges in chapter three: sustainable focus requires deliberate friction against the current of distraction..."
            </p>
            <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
              {["#focus", "#productivity", "#deep-work"].map(t => (
                <span key={t} style={{ background: "#f5f0e8", color: "#8a7060", fontSize: "0.65rem", padding: "0.2rem 0.6rem", borderRadius: "100px", border: "1px solid #e8dcc8" }}>{t}</span>
              ))}
            </div>
            <div style={{ borderTop: "1px solid #e8dcc8", marginTop: "1.5rem", paddingTop: "1rem", display: "flex", gap: "0.5rem" }}>
              {["Summary", "Quotes", "Hints", "Insights"].map((label, i) => (
                <div key={label} style={{ flex: 1, textAlign: "center", background: i === 0 ? "#e8dcc8" : "transparent", borderRadius: "8px", padding: "0.4rem 0.2rem", fontSize: "0.6rem", letterSpacing: "0.1em", color: i === 0 ? "#7a5e3a" : "#aaa" }}>
                  {label}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section style={{ background: "#f0ebe0", padding: "7rem 3rem" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <Reveal>
            <div style={{ textAlign: "center", marginBottom: "5rem" }}>
              <span className="tag">What's Inside</span>
              <h2 className="display" style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)", marginTop: "1rem", color: "#2c2416" }}>
                Your reading, <span className="warm-gold" style={{ fontStyle: "italic" }}>beautifully distilled</span>
              </h2>
            </div>
          </Reveal>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "2rem" }}>
            {[
              { icon: "✦", color: "#b8854a", bg: "#e8dcc8", title: "Core Summary", body: "The essential argument of any document, written with care and precision. No noise, only meaning." },
              { icon: "❧", color: "#6b7c5a", bg: "#dce4d4", title: "Contextual Hints", body: "Gentle annotations that illuminate difficult passages, providing the context you need exactly when you need it." },
              { icon: "❝", color: "#8a6060", bg: "#e4d8d8", title: "Key Quotes", body: "The most resonant passages, selected with an eye for both importance and beauty. Given space to breathe." },
              { icon: "◈", color: "#60788a", bg: "#d8e0e8", title: "Deep Insights", body: "Thematic analysis across the whole document — the patterns and ideas that tie everything together." },
            ].map((f, i) => (
              <Reveal key={f.title} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -6, boxShadow: "0 20px 40px #2c241618" }}
                  transition={{ duration: 0.3 }}
                  style={{ background: "#fff", borderRadius: "20px", padding: "2.5rem", border: "1px solid #e8dcc8" }}
                >
                  <div style={{ width: "56px", height: "56px", background: f.bg, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.5rem", color: f.color, marginBottom: "1.5rem" }}>
                    {f.icon}
                  </div>
                  <h3 className="display" style={{ fontSize: "1.3rem", color: "#2c2416", marginBottom: "0.75rem" }}>{f.title}</h3>
                  <p style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#7a6450", fontWeight: 300 }}>{f.body}</p>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Quote section */}
      <section style={{ padding: "8rem 3rem", background: "#2c2416", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: "-50px", left: "-50px", color: "#b8854a", opacity: 0.06, fontSize: "400px", lineHeight: 1, fontFamily: "Georgia, serif", userSelect: "none", pointerEvents: "none" }}>"</div>
        <Reveal>
          <div style={{ maxWidth: "780px", margin: "0 auto", textAlign: "center" }}>
            <blockquote className="display" style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.8rem)", color: "#e8dcc8", lineHeight: 1.35, fontStyle: "italic", marginBottom: "2rem" }}>
              "The ratio of understanding to time spent is the true measure of how well you read."
            </blockquote>
            <cite style={{ fontSize: "0.75rem", letterSpacing: "0.25em", textTransform: "uppercase", color: "#b8854a", fontStyle: "normal" }}>— Ratio Reader Philosophy</cite>
          </div>
        </Reveal>
      </section>

      {/* How it works — organic timeline */}
      <section style={{ padding: "8rem 3rem", background: "#faf6ef" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <Reveal>
            <div style={{ textAlign: "center", marginBottom: "5rem" }}>
              <span className="tag">The Process</span>
              <h2 className="display" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", marginTop: "1rem", color: "#2c2416" }}>
                Simple as <span className="warm-gold" style={{ fontStyle: "italic" }}>turning a page</span>
              </h2>
            </div>
          </Reveal>
          {[
            { step: "01", title: "Choose Your Text", body: "Upload any PDF — books, papers, articles, reports. If it's written, Ratio Reader can illuminate it.", color: "#b8854a" },
            { step: "02", title: "Let it Breathe", body: "Our system reads with patience and depth. Within seconds, it understands not just the words but the ideas they carry.", color: "#6b7c5a" },
            { step: "03", title: "Receive Your Guide", body: "A beautifully formatted reading companion awaits — your map through any text, no matter how complex.", color: "#60788a" },
          ].map((item, i) => (
            <Reveal key={item.step} delay={i * 0.15}>
              <div style={{ display: "flex", gap: "2rem", marginBottom: "4rem", alignItems: "flex-start" }}>
                <div style={{ flexShrink: 0, width: "56px", height: "56px", background: item.color, color: "#fff", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.75rem", letterSpacing: "0.1em", fontFamily: "'IBM Plex Mono', monospace" }}>
                  {item.step}
                </div>
                <div>
                  <h3 className="display" style={{ fontSize: "1.5rem", color: "#2c2416", marginBottom: "0.5rem" }}>{item.title}</h3>
                  <p style={{ fontSize: "1rem", lineHeight: 1.8, color: "#7a6450", fontWeight: 300 }}>{item.body}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "linear-gradient(135deg, #d4c4a8, #c8b090)", padding: "8rem 3rem", textAlign: "center" }}>
        <Reveal>
          <div style={{ maxWidth: "600px", margin: "0 auto" }}>
            <Leaf style={{ margin: "0 auto 2rem", opacity: 0.4, color: "#2c2416" }} />
            <h2 className="display" style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", color: "#2c2416", lineHeight: 1.1, marginBottom: "1.5rem" }}>
              Begin reading with intention.
            </h2>
            <p style={{ fontSize: "1.1rem", color: "#5a4430", lineHeight: 1.7, marginBottom: "2.5rem", fontWeight: 300 }}>
              Your first document is free. No rush, no pressure — just better understanding.
            </p>
            <button style={{ background: "#2c2416", color: "#faf6ef", border: "none", padding: "1.1rem 3rem", borderRadius: "100px", fontSize: "1.1rem", cursor: "pointer", transition: "all 0.3s", fontFamily: "'Cormorant Garamond', serif", letterSpacing: "0.05em" }}
              onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.background = "#b8854a"; (e.currentTarget as HTMLButtonElement).style.transform = "scale(1.03)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.background = "#2c2416"; (e.currentTarget as HTMLButtonElement).style.transform = "scale(1)"; }}
            >Upload Your First Document</button>
          </div>
        </Reveal>
      </section>

      {/* Footer */}
      <footer style={{ background: "#2c2416", color: "#7a6450", padding: "3rem", textAlign: "center" }}>
        <div className="display" style={{ fontSize: "1.2rem", color: "#c8a96e", marginBottom: "0.5rem" }}>Ratio Reader</div>
        <p style={{ fontSize: "0.75rem", letterSpacing: "0.1em" }}>© 2025 · Made with care for readers everywhere</p>
      </footer>
    </div>
  );
}
