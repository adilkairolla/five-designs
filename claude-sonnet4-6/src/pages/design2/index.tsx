import "@fontsource/archivo-black/400.css";
import "@fontsource/ibm-plex-mono/400.css";
import "@fontsource/ibm-plex-mono/700.css";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";

const MONO = "'IBM Plex Mono', 'Courier New', monospace";
const BLOCK = "'Archivo Black', Impact, sans-serif";

function Counter({ end, suffix = "" }: { end: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);
  const handleInView = () => {
    if (started.current) return;
    started.current = true;
    let start = 0;
    const duration = 1400;
    const step = (end / duration) * 16;
    const timer = setInterval(() => {
      start += step;
      if (start >= end) { setCount(end); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
  };

  return (
    <motion.div ref={ref} onViewportEnter={handleInView} viewport={{ once: true }}>
      <span style={{ fontFamily: BLOCK, fontSize: "clamp(3rem, 6vw, 5rem)", lineHeight: 1 }}>{count}{suffix}</span>
    </motion.div>
  );
}

export default function Design2() {
  const bannerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: bannerRef, offset: ["start start", "end start"] });
  const bannerX = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);

  return (
    <div style={{ fontFamily: MONO, background: "#f5f0e8", color: "#0a0a0a", minHeight: "100vh", overflowX: "hidden" }}>
      <style>{`
        * { margin: 0; padding: 0; box-sizing: border-box; }
        ::selection { background: #e63322; color: #f5f0e8; }
        .block { font-family: ${BLOCK}; }
        a { color: inherit; text-decoration: none; }
        button { cursor: pointer; font-family: ${MONO}; }
        .border-grid { border: 2px solid #0a0a0a; }
        .red { color: #e63322; }
        .bg-red { background: #e63322; }
        .bg-black { background: #0a0a0a; }
        .bg-yellow { background: #f5e642; }
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-thumb { background: #0a0a0a; }
      `}</style>

      {/* Navigation — newspaper masthead */}
      <motion.header
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        style={{ borderBottom: "4px solid #0a0a0a", background: "#f5f0e8" }}
      >
        <div style={{ borderBottom: "1px solid #0a0a0a", padding: "0.4rem 2rem", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span style={{ fontSize: "0.65rem", letterSpacing: "0.15em" }}>VOL. 1 — EST. 2025</span>
          <span style={{ fontSize: "0.65rem", letterSpacing: "0.15em" }}>PDF INTELLIGENCE PLATFORM</span>
          <span style={{ fontSize: "0.65rem", letterSpacing: "0.15em" }}>FREE TO START</span>
        </div>
        <div style={{ padding: "1rem 2rem", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div className="block" style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)", letterSpacing: "-0.03em", lineHeight: 1 }}>
            RATIO<span className="red">::</span>READER
          </div>
          <nav style={{ display: "flex", gap: "0", border: "2px solid #0a0a0a" }}>
            {["Features", "Pricing", "Login"].map((item, i) => (
              <a key={item} href="#" style={{
                padding: "0.5rem 1.2rem",
                fontSize: "0.7rem",
                letterSpacing: "0.1em",
                borderLeft: i > 0 ? "2px solid #0a0a0a" : "none",
                display: "block",
                transition: "all 0.15s"
              }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "#0a0a0a"; (e.currentTarget as HTMLElement).style.color = "#f5f0e8"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "transparent"; (e.currentTarget as HTMLElement).style.color = "#0a0a0a"; }}
              >{item}</a>
            ))}
          </nav>
        </div>
      </motion.header>

      {/* Scrolling ticker */}
      <div ref={bannerRef} style={{ background: "#e63322", color: "#f5f0e8", padding: "0.5rem 0", overflow: "hidden", borderBottom: "4px solid #0a0a0a" }}>
        <motion.div style={{ x: bannerX, display: "flex", gap: "3rem", whiteSpace: "nowrap" }}>
          {[...Array(3)].flatMap(() => [
            "UPLOAD PDF", "///", "GET SUMMARY", "///", "KEY QUOTES", "///", "SMART HINTS", "///", "DEEP INSIGHTS", "///", "UNDERSTAND FASTER", "///"
          ]).map((t, i) => (
            <span key={i} style={{ fontFamily: BLOCK, fontSize: "0.85rem", letterSpacing: "0.1em" }}>{t}</span>
          ))}
        </motion.div>
      </div>

      {/* Hero — newspaper front page */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 380px", gap: "0", borderBottom: "4px solid #0a0a0a", maxWidth: "1300px", margin: "0 auto" }}>
        {/* Main story */}
        <div style={{ padding: "3rem 3rem 3rem 2rem", borderRight: "4px solid #0a0a0a" }}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.5rem" }}>
              <span style={{ background: "#e63322", color: "#f5f0e8", padding: "0.2rem 0.6rem", fontSize: "0.65rem", fontFamily: BLOCK, letterSpacing: "0.1em" }}>BREAKING</span>
              <span style={{ fontSize: "0.65rem", letterSpacing: "0.1em", color: "#666" }}>READING INTELLIGENCE</span>
            </div>
            <motion.h1
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="block"
              style={{ fontSize: "clamp(3rem, 7vw, 6.5rem)", lineHeight: 0.9, letterSpacing: "-0.04em", marginBottom: "2rem" }}
            >
              STOP<br />
              READING<br />
              <span className="red">BLIND.</span>
            </motion.h1>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem" }}>
              <p style={{ fontSize: "1rem", lineHeight: 1.7, borderTop: "2px solid #0a0a0a", paddingTop: "1rem" }}>
                Ratio Reader transforms how you absorb written knowledge. Upload any PDF. Receive surgical precision: what matters, why it matters, and the lines that prove it.
              </p>
              <p style={{ fontSize: "1rem", lineHeight: 1.7, borderTop: "2px solid #e63322", paddingTop: "1rem" }}>
                No fluff. No padding. The essential ratio of meaning extracted from every document — served with context, insight, and the exact passages that carry weight.
              </p>
            </div>
            <div style={{ display: "flex", gap: "1rem", marginTop: "2.5rem", flexWrap: "wrap" }}>
              <button
                style={{ background: "#0a0a0a", color: "#f5f0e8", border: "2px solid #0a0a0a", padding: "0.9rem 2rem", fontSize: "0.8rem", letterSpacing: "0.15em", transition: "all 0.2s" }}
                onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.background = "#e63322"; (e.currentTarget as HTMLButtonElement).style.borderColor = "#e63322"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.background = "#0a0a0a"; (e.currentTarget as HTMLButtonElement).style.borderColor = "#0a0a0a"; }}
              >↑ UPLOAD PDF NOW</button>
              <button
                style={{ background: "transparent", color: "#0a0a0a", border: "2px solid #0a0a0a", padding: "0.9rem 2rem", fontSize: "0.8rem", letterSpacing: "0.15em", transition: "all 0.2s" }}
                onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.background = "#f5e642"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.background = "transparent"; }}
              >READ HOW IT WORKS →</button>
            </div>
          </motion.div>
        </div>

        {/* Sidebar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          style={{ padding: "3rem 2rem" }}
        >
          <div style={{ borderBottom: "2px solid #0a0a0a", paddingBottom: "1.5rem", marginBottom: "1.5rem" }}>
            <div style={{ fontSize: "0.6rem", letterSpacing: "0.2em", marginBottom: "0.5rem", color: "#888" }}>TODAY'S NUMBERS</div>
            <Counter end={94} suffix="%" /><div style={{ fontSize: "0.75rem", letterSpacing: "0.1em", marginTop: "0.3rem" }}>COMPREHENSION IMPROVEMENT</div>
          </div>
          <div style={{ borderBottom: "2px solid #0a0a0a", paddingBottom: "1.5rem", marginBottom: "1.5rem" }}>
            <Counter end={12} suffix="x" /><div style={{ fontSize: "0.75rem", letterSpacing: "0.1em", marginTop: "0.3rem" }}>FASTER THAN TAKING NOTES</div>
          </div>
          <div style={{ borderBottom: "2px solid #0a0a0a", paddingBottom: "1.5rem", marginBottom: "1.5rem" }}>
            <Counter end={50000} suffix="+" /><div style={{ fontSize: "0.75rem", letterSpacing: "0.1em", marginTop: "0.3rem" }}>DOCUMENTS ANALYZED</div>
          </div>
          <div style={{ background: "#f5e642", border: "2px solid #0a0a0a", padding: "1.5rem" }}>
            <div style={{ fontSize: "0.65rem", letterSpacing: "0.15em", marginBottom: "0.5rem", fontFamily: BLOCK }}>READER VERDICT</div>
            <p style={{ fontSize: "0.9rem", lineHeight: 1.6, fontStyle: "italic" }}>
              "I finished a 300-page research paper in 20 minutes and retained more than I ever had reading traditionally."
            </p>
            <div style={{ fontSize: "0.65rem", marginTop: "0.75rem", letterSpacing: "0.1em" }}>— VERIFIED USER</div>
          </div>
        </motion.div>
      </div>

      {/* Features grid */}
      <div style={{ maxWidth: "1300px", margin: "0 auto" }}>
        <div style={{ borderBottom: "4px solid #0a0a0a", padding: "1rem 2rem" }}>
          <span className="block" style={{ fontSize: "0.75rem", letterSpacing: "0.2em" }}>§ FEATURE INDEX</span>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)" }}>
          {[
            { icon: "▤", title: "SMART SUMMARY", body: "The core argument, distilled. No filler, no fat — pure signal extracted from the noise of every document." },
            { icon: "⟨⟩", title: "CONTEXT HINTS", body: "Precision annotations at exactly the right moments. The footnotes your professor wished they'd written." },
            { icon: "❝", title: "KEY QUOTES", body: "The sentences that carry the entire book. Surfaced, cited, and given room to breathe on their own." },
            { icon: "◎", title: "DEEP INSIGHTS", body: "Cross-document pattern recognition. Themes, contradictions, and the bigger picture — made explicit." },
          ].map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              style={{
                padding: "2.5rem 2rem",
                borderRight: i < 3 ? "4px solid #0a0a0a" : "none",
                borderBottom: "4px solid #0a0a0a",
                transition: "background 0.2s"
              }}
              whileHover={{ backgroundColor: "#f5e642" }}
            >
              <div className="block" style={{ fontSize: "2rem", marginBottom: "1rem" }}>{f.icon}</div>
              <h3 className="block" style={{ fontSize: "1rem", letterSpacing: "0.05em", marginBottom: "0.75rem" }}>{f.title}</h3>
              <p style={{ fontSize: "0.8rem", lineHeight: 1.7, color: "#444" }}>{f.body}</p>
            </motion.div>
          ))}
        </div>

        {/* Process */}
        <div style={{ borderBottom: "4px solid #0a0a0a", padding: "1rem 2rem", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span className="block" style={{ fontSize: "0.75rem", letterSpacing: "0.2em" }}>§ THE PROCESS</span>
          <span style={{ fontSize: "0.65rem", color: "#888" }}>THREE STEPS TO COMPREHENSION</span>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", borderBottom: "4px solid #0a0a0a" }}>
          {[
            { n: "01", title: "UPLOAD", body: "Drop your PDF. Any document. Any length. Research papers, books, reports, articles." },
            { n: "02", title: "ANALYZE", body: "Our system reads at machine speed with human depth. Seconds, not hours." },
            { n: "03", title: "UNDERSTAND", body: "Receive your complete reading guide. Summary, quotes, hints, insights — all structured." },
          ].map((step, i) => (
            <motion.div
              key={step.n}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              style={{
                padding: "3rem 2.5rem",
                borderRight: i < 2 ? "4px solid #0a0a0a" : "none",
                position: "relative",
              }}
            >
              <div className="block" style={{ fontSize: "5rem", lineHeight: 1, color: "#ddd", position: "absolute", top: "1.5rem", right: "1.5rem" }}>{step.n}</div>
              <h3 className="block" style={{ fontSize: "1.8rem", marginBottom: "1rem", position: "relative", zIndex: 1 }}>{step.title}</h3>
              <p style={{ fontSize: "0.9rem", lineHeight: 1.7, position: "relative", zIndex: 1 }}>{step.body}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA banner */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          style={{ display: "grid", gridTemplateColumns: "1fr auto", alignItems: "center", padding: "4rem 2rem", gap: "2rem", borderBottom: "4px solid #0a0a0a" }}
        >
          <div>
            <h2 className="block" style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", lineHeight: 0.95, letterSpacing: "-0.03em" }}>
              EVERY DOCUMENT<br />HAS A <span className="red">RATIO.</span><br />WE FIND IT.
            </h2>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem", minWidth: "240px" }}>
            <button style={{ background: "#e63322", color: "#f5f0e8", border: "2px solid #e63322", padding: "1rem 2rem", fontSize: "0.85rem", letterSpacing: "0.15em", fontFamily: BLOCK, transition: "all 0.2s" }}
              onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.background = "#0a0a0a"; (e.currentTarget as HTMLButtonElement).style.borderColor = "#0a0a0a"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.background = "#e63322"; (e.currentTarget as HTMLButtonElement).style.borderColor = "#e63322"; }}
            >START FREE — NOW</button>
            <div style={{ fontSize: "0.65rem", letterSpacing: "0.1em", color: "#888", textAlign: "center" }}>NO CREDIT CARD · NO SIGNUP FEE</div>
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <footer style={{ maxWidth: "1300px", margin: "0 auto", padding: "2rem", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem" }}>
        <div className="block" style={{ fontSize: "1.2rem", letterSpacing: "-0.02em" }}>RATIO<span className="red">::</span>READER</div>
        <div style={{ fontSize: "0.65rem", letterSpacing: "0.15em", color: "#888" }}>© 2025 — ALL RIGHTS RESERVED</div>
      </footer>
    </div>
  );
}
