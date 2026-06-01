import "@fontsource/playfair-display/400.css";
import "@fontsource/playfair-display/700.css";
import "@fontsource/playfair-display/400-italic.css";
import "@fontsource/cormorant-garamond/300.css";
import "@fontsource/cormorant-garamond/400.css";
import "@fontsource/cormorant-garamond/600.css";
import { motion, useScroll, useTransform, type Variants } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const fade: Variants = {
  hidden: { opacity: 0, y: 32 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.8, ease: "easeOut" },
  }),
};

function useInView(ref: React.RefObject<Element>, threshold = 0.15) {
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref, threshold]);
  return inView;
}

function Section({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref as React.RefObject<Element>);
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
      variants={{ hidden: { opacity: 0, y: 40 }, show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: "easeOut" } } }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const quotes = [
  { text: "The ratio of what you read to what you retain defines your intellectual growth.", author: "Knowledge Principle" },
  { text: "A book summary is not a shortcut. It is a lighthouse before you sail.", author: "Ratio Philosophy" },
  { text: "Understanding accelerates when context precedes detail.", author: "Cognitive Science" },
];

const features = [
  { num: "01", title: "Intelligent Summaries", body: "Our system distills thousands of words into the essential ratio — the irreducible core of any text, without sacrificing nuance." },
  { num: "02", title: "Contextual Hints", body: "Precise annotations surface at exactly the right moments, illuminating connections you might otherwise spend years discovering." },
  { num: "03", title: "Curated Quotes", body: "The most resonant passages, extracted and presented so they breathe — each line given the space it deserves." },
  { num: "04", title: "Deep Insights", body: "Synthesized observations across the full text, revealing patterns and themes invisible at the level of individual chapters." },
];

export default function Design1() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <div style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", background: "#0d0c0b", color: "#e8e0d4", minHeight: "100vh", overflowX: "hidden" }}>
      <style>{`
        * { margin: 0; padding: 0; box-sizing: border-box; }
        ::selection { background: #c4a46b33; color: #e8e0d4; }
        ::-webkit-scrollbar { width: 3px; }
        ::-webkit-scrollbar-track { background: #0d0c0b; }
        ::-webkit-scrollbar-thumb { background: #c4a46b; }
        .playfair { font-family: 'Playfair Display', Georgia, serif; }
        .ornament { color: #c4a46b; }
        .rule { border: none; border-top: 1px solid #c4a46b44; }
        .rule-gold { border: none; border-top: 1px solid #c4a46b; }
      `}</style>

      {/* Nav */}
      <motion.nav
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.2 }}
        style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, padding: "1.5rem 3rem", display: "flex", justifyContent: "space-between", alignItems: "center", backdropFilter: "blur(12px)", borderBottom: "1px solid #c4a46b22", background: "rgba(13,12,11,0.7)" }}
      >
        <div className="playfair" style={{ fontSize: "1.1rem", letterSpacing: "0.08em", color: "#e8e0d4" }}>
          <span className="ornament">R</span>atio <span className="ornament">R</span>eader
        </div>
        <div style={{ display: "flex", gap: "2.5rem", fontSize: "0.8rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#9a8a7a" }}>
          {["Features", "Philosophy", "Pricing"].map((item) => (
            <a key={item} href="#" style={{ color: "#9a8a7a", textDecoration: "none", transition: "color 0.3s" }}
              onMouseEnter={e => (e.currentTarget.style.color = "#c4a46b")}
              onMouseLeave={e => (e.currentTarget.style.color = "#9a8a7a")}
            >{item}</a>
          ))}
        </div>
        <button style={{ background: "none", border: "1px solid #c4a46b66", color: "#c4a46b", padding: "0.5rem 1.4rem", fontSize: "0.75rem", letterSpacing: "0.2em", textTransform: "uppercase", cursor: "pointer", transition: "all 0.3s" }}
          onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.background = "#c4a46b"; (e.currentTarget as HTMLButtonElement).style.color = "#0d0c0b"; }}
          onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.background = "none"; (e.currentTarget as HTMLButtonElement).style.color = "#c4a46b"; }}
        >Begin</button>
      </motion.nav>

      {/* Hero */}
      <div ref={heroRef} style={{ position: "relative", height: "100vh", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
        {/* background texture */}
        <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(ellipse at 50% 50%, #1a1510 0%, #0d0c0b 70%)", zIndex: 0 }} />
        <div style={{ position: "absolute", inset: 0, backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23c4a46b' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")", zIndex: 1 }} />

        <motion.div style={{ y: heroY, opacity: heroOpacity, position: "relative", zIndex: 2, textAlign: "center", maxWidth: "900px", padding: "0 2rem" }}>
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            style={{ width: "60px", height: "1px", background: "#c4a46b", margin: "0 auto 2rem" }}
          />
          <motion.p
            custom={0} variants={fade} initial="hidden" animate="show"
            style={{ fontSize: "0.7rem", letterSpacing: "0.4em", textTransform: "uppercase", color: "#c4a46b", marginBottom: "2rem" }}
          >
            The Art of Intelligent Reading
          </motion.p>
          <motion.h1
            custom={1} variants={fade} initial="hidden" animate="show"
            className="playfair"
            style={{ fontSize: "clamp(3rem, 8vw, 7rem)", lineHeight: 1.05, fontWeight: 400, color: "#e8e0d4", marginBottom: "2rem", letterSpacing: "-0.02em" }}
          >
            Read Less.<br />
            <span style={{ fontStyle: "italic", color: "#c4a46b" }}>Understand</span> More.
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 1, delay: 0.9 }}
            style={{ width: "120px", height: "1px", background: "#c4a46b55", margin: "0 auto 2.5rem" }}
          />
          <motion.p
            custom={3} variants={fade} initial="hidden" animate="show"
            style={{ fontSize: "1.25rem", lineHeight: 1.7, color: "#9a8a7a", maxWidth: "560px", margin: "0 auto 3rem", fontWeight: 300 }}
          >
            Upload any PDF. Receive the essence — summaries, insights, and the passages that matter most, distilled with precision.
          </motion.p>
          <motion.div custom={4} variants={fade} initial="hidden" animate="show" style={{ display: "flex", gap: "1.5rem", justifyContent: "center", flexWrap: "wrap" }}>
            <button style={{ background: "#c4a46b", color: "#0d0c0b", border: "none", padding: "0.9rem 2.5rem", fontSize: "0.8rem", letterSpacing: "0.2em", textTransform: "uppercase", cursor: "pointer", fontFamily: "inherit", transition: "all 0.3s" }}
              onMouseEnter={e => (e.currentTarget.style.background = "#d4b47b")}
              onMouseLeave={e => (e.currentTarget.style.background = "#c4a46b")}
            >Upload a Document</button>
            <button style={{ background: "none", color: "#9a8a7a", border: "1px solid #9a8a7a44", padding: "0.9rem 2.5rem", fontSize: "0.8rem", letterSpacing: "0.2em", textTransform: "uppercase", cursor: "pointer", fontFamily: "inherit", transition: "all 0.3s" }}
              onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.borderColor = "#c4a46b66"; (e.currentTarget as HTMLButtonElement).style.color = "#c4a46b"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.borderColor = "#9a8a7a44"; (e.currentTarget as HTMLButtonElement).style.color = "#9a8a7a"; }}
            >See How It Works</button>
          </motion.div>
        </motion.div>

        {/* scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          style={{ position: "absolute", bottom: "2.5rem", left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: "0.5rem" }}
        >
          <span style={{ fontSize: "0.6rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "#5a5040" }}>Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
            style={{ width: "1px", height: "32px", background: "linear-gradient(to bottom, #c4a46b, transparent)" }}
          />
        </motion.div>
      </div>

      {/* Pull quote strip */}
      <div style={{ background: "#111008", borderTop: "1px solid #c4a46b22", borderBottom: "1px solid #c4a46b22", padding: "4rem 0", overflow: "hidden" }}>
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
          style={{ display: "flex", gap: "4rem", whiteSpace: "nowrap" }}
        >
          {[...Array(4)].flatMap(() => ["Summary", "◆", "Insights", "◆", "Key Quotes", "◆", "Hints", "◆", "Understanding", "◆"]).map((item, i) => (
            <span key={i} style={{ fontSize: item === "◆" ? "0.8rem" : "0.65rem", letterSpacing: item === "◆" ? "0" : "0.35em", textTransform: "uppercase", color: item === "◆" ? "#c4a46b" : "#4a3f30" }}>
              {item}
            </span>
          ))}
        </motion.div>
      </div>

      {/* Features */}
      <section style={{ maxWidth: "1100px", margin: "0 auto", padding: "8rem 3rem" }}>
        <Section>
          <p style={{ fontSize: "0.65rem", letterSpacing: "0.4em", textTransform: "uppercase", color: "#c4a46b", marginBottom: "1rem" }}>What We Offer</p>
          <hr className="rule" style={{ marginBottom: "4rem" }} />
        </Section>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "0" }}>
          {features.map((f, i) => (
            <Section key={f.num}>
              <div style={{
                padding: "3.5rem",
                borderRight: i % 2 === 0 ? "1px solid #c4a46b22" : "none",
                borderBottom: i < 2 ? "1px solid #c4a46b22" : "none",
              }}>
                <div className="playfair ornament" style={{ fontSize: "4rem", lineHeight: 1, marginBottom: "1.5rem", opacity: 0.4 }}>{f.num}</div>
                <h3 className="playfair" style={{ fontSize: "1.5rem", fontWeight: 400, marginBottom: "1rem", color: "#e8e0d4" }}>{f.title}</h3>
                <p style={{ fontSize: "1rem", lineHeight: 1.8, color: "#7a6a5a", fontWeight: 300 }}>{f.body}</p>
              </div>
            </Section>
          ))}
        </div>
      </section>

      {/* Quote carousel */}
      <section style={{ background: "#111008", padding: "8rem 3rem", textAlign: "center" }}>
        {quotes.map((q, i) => (
          <Section key={i}>
            <div style={{ maxWidth: "700px", margin: "0 auto 5rem" }}>
              <span className="ornament playfair" style={{ fontSize: "5rem", lineHeight: 0.5, display: "block", opacity: 0.3, marginBottom: "1.5rem" }}>"</span>
              <blockquote className="playfair" style={{ fontSize: "clamp(1.3rem, 2.5vw, 1.8rem)", fontStyle: "italic", lineHeight: 1.5, color: "#d0c4b0", fontWeight: 400, marginBottom: "1.5rem" }}>
                {q.text}
              </blockquote>
              <cite style={{ fontSize: "0.65rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "#c4a46b", fontStyle: "normal" }}>{q.author}</cite>
              {i < quotes.length - 1 && <hr className="rule" style={{ marginTop: "4rem", maxWidth: "120px", marginLeft: "auto", marginRight: "auto" }} />}
            </div>
          </Section>
        ))}
      </section>

      {/* How it works */}
      <section style={{ maxWidth: "900px", margin: "0 auto", padding: "8rem 3rem" }}>
        <Section>
          <div style={{ textAlign: "center", marginBottom: "5rem" }}>
            <p style={{ fontSize: "0.65rem", letterSpacing: "0.4em", textTransform: "uppercase", color: "#c4a46b", marginBottom: "1rem" }}>The Process</p>
            <h2 className="playfair" style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", fontWeight: 400, color: "#e8e0d4" }}>Three Steps to Mastery</h2>
          </div>
        </Section>
        {[
          { step: "I", title: "Upload", body: "Select any PDF — a research paper, a novel, a textbook. Ratio Reader accepts all forms of the written word." },
          { step: "II", title: "Analyze", body: "Our system reads with a depth that takes humans days. In moments, it maps the architecture of meaning within your document." },
          { step: "III", title: "Illuminate", body: "Receive a beautifully formatted reading guide: summary, key quotes, contextual hints, and thematic insights — ready to deepen your engagement." },
        ].map((item) => (
          <Section key={item.step}>
            <div style={{ display: "grid", gridTemplateColumns: "80px 1fr", gap: "2rem", marginBottom: "4rem", alignItems: "start" }}>
              <div className="playfair ornament" style={{ fontSize: "3rem", fontStyle: "italic", opacity: 0.5, textAlign: "right", paddingTop: "0.2rem" }}>{item.step}</div>
              <div>
                <h3 className="playfair" style={{ fontSize: "1.6rem", fontWeight: 400, color: "#e8e0d4", marginBottom: "0.75rem" }}>{item.title}</h3>
                <p style={{ fontSize: "1.05rem", lineHeight: 1.8, color: "#7a6a5a", fontWeight: 300 }}>{item.body}</p>
              </div>
            </div>
            <hr className="rule" style={{ marginBottom: "2rem" }} />
          </Section>
        ))}
      </section>

      {/* CTA */}
      <section style={{ background: "#111008", borderTop: "1px solid #c4a46b22", padding: "8rem 3rem", textAlign: "center" }}>
        <Section>
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{ width: "60px", height: "1px", background: "#c4a46b", margin: "0 auto 2.5rem" }}
          />
          <p className="ornament" style={{ fontSize: "0.65rem", letterSpacing: "0.4em", textTransform: "uppercase", marginBottom: "1.5rem" }}>Begin Your Journey</p>
          <h2 className="playfair" style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)", fontWeight: 400, color: "#e8e0d4", lineHeight: 1.1, marginBottom: "2rem" }}>
            The books that change you<br />
            <span style={{ fontStyle: "italic" }}>deserve your full attention.</span>
          </h2>
          <p style={{ fontSize: "1.1rem", color: "#7a6a5a", marginBottom: "3rem", fontWeight: 300 }}>Start for free. No credit card required.</p>
          <button style={{ background: "#c4a46b", color: "#0d0c0b", border: "none", padding: "1.1rem 3rem", fontSize: "0.8rem", letterSpacing: "0.25em", textTransform: "uppercase", cursor: "pointer", fontFamily: "inherit", transition: "all 0.3s" }}
            onMouseEnter={e => (e.currentTarget.style.background = "#d4b47b")}
            onMouseLeave={e => (e.currentTarget.style.background = "#c4a46b")}
          >Upload Your First Document</button>
        </Section>
      </section>

      {/* Footer */}
      <footer style={{ padding: "3rem", borderTop: "1px solid #c4a46b22", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem" }}>
        <div className="playfair" style={{ color: "#4a3f30", fontSize: "0.9rem" }}>
          <span className="ornament">R</span>atio <span className="ornament">R</span>eader
        </div>
        <p style={{ fontSize: "0.65rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#3a3028" }}>© 2025 Ratio Reader. All rights reserved.</p>
      </footer>
    </div>
  );
}
