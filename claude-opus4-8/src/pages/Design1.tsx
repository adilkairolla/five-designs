import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { Upload, BookOpen, Lightbulb, Quote, FileText } from "lucide-react";

/* ─────────────────────────────────────────────
   Paper-grain SVG noise (inline, scoped)
───────────────────────────────────────────── */
const GrainOverlay = () => (
  <svg
    className="d1-grain"
    xmlns="http://www.w3.org/2000/svg"
    width="200"
    height="200"
    aria-hidden="true"
  >
    <filter id="d1-noise">
      <feTurbulence
        type="fractalNoise"
        baseFrequency="0.85"
        numOctaves="4"
        stitchTiles="stitch"
      />
      <feColorMatrix type="saturate" values="0" />
    </filter>
    <rect width="200" height="200" filter="url(#d1-noise)" opacity="0.04" />
  </svg>
);

/* ─────────────────────────────────────────────
   Animated hairline rule
───────────────────────────────────────────── */
function HairlineRule({
  className = "",
  style,
}: {
  className?: string;
  style?: React.CSSProperties;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      className={`d1-rule ${className}`}
      style={style}
      initial={{ scaleX: 0, originX: 0 }}
      animate={inView ? { scaleX: 1 } : {}}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
    />
  );
}

/* ─────────────────────────────────────────────
   Fade-up reveal wrapper
───────────────────────────────────────────── */
function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 22 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

/* ─────────────────────────────────────────────
   Product Preview — printed-page facsimile
───────────────────────────────────────────── */
function ProductPreview() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      className="d1-preview-wrap"
      initial={{ opacity: 0, y: 36 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Page shadow */}
      <div className="d1-preview-page">
        {/* Page header */}
        <div className="d1-preview-header">
          <span className="d1-preview-kicker">Ratio Reader · Summary View</span>
          <span className="d1-preview-folio">p. 1</span>
        </div>
        <div className="d1-preview-rule" />

        <div className="d1-preview-columns">
          {/* Left: document body */}
          <div className="d1-preview-body-col">
            {/* Smart Summary block */}
            <div className="d1-preview-summary-block">
              <div className="d1-preview-summary-label">
                <BookOpen size={10} strokeWidth={1.5} />
                Smart Summary
              </div>
              <p className="d1-preview-summary-text">
                The paper argues that sustained reading comprehension declines
                sharply after 20 minutes without structured synthesis. Key
                mechanisms: working memory saturation and loss of connective
                context between passages.
              </p>
            </div>

            {/* Body text lines */}
            <div className="d1-preview-body-text">
              <p>
                In a series of controlled experiments, participants who read
                dense academic texts without annotation retained only 23% of key
                arguments after 48 hours. The study — spanning three
                universities and 840 participants — confirms what many educators
                have long suspected: reading volume alone is a poor proxy for
                comprehension.
              </p>
              <p style={{ marginTop: "0.65rem" }}>
                The implications for professional reading are significant.
                Researchers, lawyers, and policymakers who routinely process
                hundreds of pages per week are particularly vulnerable to what
                the authors term "accumulation without assimilation" — a state
                in which documents are processed but not truly understood.
              </p>
            </div>

            {/* Pull quote */}
            <div className="d1-preview-pullquote">
              <div className="d1-preview-pullquote-mark">"</div>
              <p>
                Reading without synthesis is merely scanning. Understanding
                requires extraction, connection, and reflection.
              </p>
              <div className="d1-preview-pullquote-source">— p. 47</div>
            </div>
          </div>

          {/* Right: margin column */}
          <div className="d1-preview-margin-col">
            {/* Margin hint */}
            <div className="d1-preview-margin-hint">
              <div className="d1-preview-margin-hint-label">
                <Lightbulb size={9} strokeWidth={1.5} />
                Margin Hint
              </div>
              <p>
                "Working memory saturation" — the brain's short-term store
                filling up faster than it can be offloaded to long-term memory.
              </p>
            </div>

            {/* Key quote chip */}
            <div className="d1-preview-key-quote">
              <div className="d1-preview-margin-hint-label">
                <Quote size={9} strokeWidth={1.5} />
                Key Quote · p. 47
              </div>
              <p>"Reading without synthesis is merely scanning."</p>
            </div>

            {/* Insight */}
            <div className="d1-preview-insight">
              <div className="d1-preview-margin-hint-label">
                <FileText size={9} strokeWidth={1.5} />
                Insight
              </div>
              <p>
                This links to Bloom's taxonomy — comprehension sits two levels
                above mere recall. Most speed-reading techniques skip it
                entirely.
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────
   Main Component
───────────────────────────────────────────── */
export function Design1() {
  const heroRef = useRef<HTMLDivElement>(null);

  return (
    <>
      {/* Scoped styles */}
      <style>{`
        /* ── Reset & Base ── */
        .d1-root {
          background-color: #f4ecdc;
          color: #1c1813;
          min-height: 100vh;
          font-family: "Newsreader", Georgia, serif;
          position: relative;
          overflow-x: hidden;
        }

        /* Paper grain overlay */
        .d1-grain {
          position: fixed;
          top: 0; left: 0;
          width: 100%; height: 100%;
          pointer-events: none;
          z-index: 100;
          opacity: 1;
          mix-blend-mode: multiply;
        }
        .d1-grain rect {
          width: 100%;
          height: 100%;
        }

        /* ── Typography tokens ── */
        .d1-fraunces { font-family: "Fraunces", "Times New Roman", serif; }
        .d1-newsreader { font-family: "Newsreader", Georgia, serif; }

        /* ── Hairline rule ── */
        .d1-rule {
          width: 100%;
          height: 1px;
          background: #1c1813;
          transform-origin: left;
        }
        .d1-rule-oxblood {
          background: #b23a26;
        }
        .d1-rule-thin {
          opacity: 0.25;
        }

        /* ── Layout containers ── */
        .d1-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
        }
        @media (min-width: 768px) {
          .d1-container { padding: 0 3.5rem; }
        }
        @media (min-width: 1200px) {
          .d1-container { padding: 0 5rem; }
        }

        /* ── Masthead ── */
        .d1-masthead {
          padding: 2rem 0 0;
        }
        .d1-masthead-top {
          display: flex;
          align-items: baseline;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 0.75rem;
        }
        .d1-wordmark {
          font-family: "Fraunces", "Times New Roman", serif;
          font-size: clamp(1.6rem, 4vw, 2.4rem);
          font-weight: 300;
          letter-spacing: -0.02em;
          color: #1c1813;
          line-height: 1;
        }
        .d1-wordmark em {
          font-style: italic;
          color: #b23a26;
        }
        .d1-issue-line {
          font-family: "Newsreader", Georgia, serif;
          font-size: 0.65rem;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #5b5345;
        }
        .d1-nav-links {
          display: flex;
          gap: 1.5rem;
          align-items: center;
        }
        .d1-nav-link {
          font-family: "Newsreader", Georgia, serif;
          font-size: 0.65rem;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: #5b5345;
          text-decoration: none;
          transition: color 0.2s;
        }
        .d1-nav-link:hover { color: #1c1813; }

        /* ── Hero Section ── */
        .d1-hero {
          padding: 3.5rem 0 4rem;
        }
        .d1-hero-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 3rem;
        }
        @media (min-width: 900px) {
          .d1-hero-grid {
            grid-template-columns: 3fr 1fr;
            gap: 4rem;
          }
        }
        .d1-kicker {
          font-family: "Newsreader", Georgia, serif;
          font-size: 0.62rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #b23a26;
          display: inline-block;
          margin-bottom: 1.25rem;
        }
        .d1-hero-headline {
          font-family: "Fraunces", "Times New Roman", serif;
          font-size: clamp(2.6rem, 7vw, 5.5rem);
          font-weight: 300;
          line-height: 1.04;
          letter-spacing: -0.025em;
          color: #1c1813;
          margin: 0 0 1.5rem;
        }
        .d1-hero-headline em {
          font-style: italic;
          font-weight: 300;
        }
        .d1-standfirst {
          font-family: "Newsreader", Georgia, serif;
          font-size: clamp(1rem, 2vw, 1.2rem);
          line-height: 1.6;
          color: #3a3028;
          max-width: 38em;
          margin-bottom: 2.5rem;
        }

        /* Drop cap */
        .d1-opening-graf {
          font-family: "Newsreader", Georgia, serif;
          font-size: 1.0rem;
          line-height: 1.75;
          color: #2e271f;
          position: relative;
        }
        .d1-drop-cap::first-letter {
          font-family: "Fraunces", "Times New Roman", serif;
          font-size: 4.8em;
          font-weight: 300;
          float: left;
          line-height: 0.82;
          margin-right: 0.1em;
          margin-top: 0.05em;
          color: #b23a26;
        }

        /* Hero margin note */
        .d1-hero-margin {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          padding-top: 6rem;
        }
        @media (max-width: 899px) {
          .d1-hero-margin { padding-top: 0; border-left: 1px solid rgba(28,24,19,0.15); padding-left: 1.5rem; }
        }
        .d1-margin-note {
          border-left: 2px solid #b23a26;
          padding-left: 0.85rem;
        }
        .d1-margin-note-label {
          font-family: "Newsreader", Georgia, serif;
          font-size: 0.58rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #b23a26;
          display: block;
          margin-bottom: 0.35rem;
        }
        .d1-margin-note p {
          font-family: "Newsreader", Georgia, serif;
          font-size: 0.82rem;
          font-style: italic;
          line-height: 1.55;
          color: #5b5345;
          margin: 0;
        }

        /* ── CTA buttons ── */
        .d1-cta-row {
          display: flex;
          align-items: center;
          gap: 1.25rem;
          flex-wrap: wrap;
          margin-top: 2rem;
        }
        .d1-btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 0.55rem;
          background: #1c1813;
          color: #f4ecdc;
          font-family: "Newsreader", Georgia, serif;
          font-size: 0.78rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          padding: 0.85rem 1.6rem;
          border: none;
          cursor: pointer;
          text-decoration: none;
          transition: background 0.22s, color 0.22s;
        }
        .d1-btn-primary:hover {
          background: #b23a26;
        }
        .d1-btn-secondary {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          background: transparent;
          color: #1c1813;
          font-family: "Newsreader", Georgia, serif;
          font-size: 0.78rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          padding: 0.85rem 0;
          border: none;
          border-bottom: 1px solid #1c1813;
          cursor: pointer;
          text-decoration: none;
          transition: color 0.2s, border-color 0.2s;
        }
        .d1-btn-secondary:hover {
          color: #b23a26;
          border-color: #b23a26;
        }

        /* ── How It Works ── */
        .d1-how {
          padding: 4rem 0;
          background: #efe4cf;
        }
        .d1-how-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
        }
        @media (min-width: 768px) { .d1-how-inner { padding: 0 3.5rem; } }
        @media (min-width: 1200px) { .d1-how-inner { padding: 0 5rem; } }

        .d1-section-kicker {
          font-family: "Newsreader", Georgia, serif;
          font-size: 0.62rem;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: #5b5345;
          display: block;
          margin-bottom: 1rem;
        }
        .d1-how-headline {
          font-family: "Fraunces", "Times New Roman", serif;
          font-size: clamp(1.5rem, 3.5vw, 2.4rem);
          font-weight: 300;
          line-height: 1.15;
          letter-spacing: -0.02em;
          margin: 0 0 2.5rem;
        }
        .d1-how-headline em { font-style: italic; }

        .d1-how-steps {
          display: grid;
          grid-template-columns: 1fr;
          gap: 0;
        }
        @media (min-width: 700px) {
          .d1-how-steps { grid-template-columns: repeat(3, 1fr); }
        }
        .d1-how-step {
          padding: 1.5rem 0;
          border-top: 1px solid rgba(28,24,19,0.2);
        }
        @media (min-width: 700px) {
          .d1-how-step { padding: 0 2rem; border-top: none; border-left: 1px solid rgba(28,24,19,0.2); }
          .d1-how-step:first-child { padding-left: 0; border-left: none; }
        }
        .d1-how-step-num {
          font-family: "Fraunces", "Times New Roman", serif;
          font-size: 2.2rem;
          font-weight: 300;
          color: #b23a26;
          line-height: 1;
          margin-bottom: 0.75rem;
          display: block;
        }
        .d1-how-step-title {
          font-family: "Fraunces", "Times New Roman", serif;
          font-size: 1.1rem;
          font-weight: 400;
          margin: 0 0 0.5rem;
        }
        .d1-how-step-body {
          font-family: "Newsreader", Georgia, serif;
          font-size: 0.9rem;
          line-height: 1.65;
          color: #5b5345;
          margin: 0;
        }

        /* ── Contents / 4 Pillars ── */
        .d1-contents {
          padding: 4.5rem 0;
        }
        .d1-contents-header {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1rem;
          margin-bottom: 2rem;
        }
        @media (min-width: 768px) {
          .d1-contents-header {
            grid-template-columns: 1fr 1fr;
            align-items: end;
          }
        }
        .d1-contents-headline {
          font-family: "Fraunces", "Times New Roman", serif;
          font-size: clamp(1.5rem, 3.5vw, 2.4rem);
          font-weight: 300;
          line-height: 1.15;
          letter-spacing: -0.02em;
          margin: 0;
        }
        .d1-contents-headline em { font-style: italic; }
        .d1-contents-intro {
          font-family: "Newsreader", Georgia, serif;
          font-size: 0.9rem;
          line-height: 1.65;
          color: #5b5345;
          margin: 0;
          max-width: 36em;
        }

        .d1-pillar-row {
          display: grid;
          grid-template-columns: 2.5rem 1fr auto;
          gap: 1.25rem;
          align-items: center;
          padding: 1.25rem 0;
          border-top: 1px solid rgba(28,24,19,0.18);
        }
        .d1-pillar-row:last-child {
          border-bottom: 1px solid rgba(28,24,19,0.18);
        }
        .d1-pillar-num {
          font-family: "Fraunces", "Times New Roman", serif;
          font-size: 0.75rem;
          font-weight: 300;
          color: #b23a26;
          letter-spacing: 0.08em;
          align-self: start;
          padding-top: 0.15rem;
        }
        .d1-pillar-content { }
        .d1-pillar-title {
          font-family: "Fraunces", "Times New Roman", serif;
          font-size: 1.1rem;
          font-weight: 400;
          margin: 0 0 0.2rem;
          letter-spacing: -0.01em;
        }
        .d1-pillar-desc {
          font-family: "Newsreader", Georgia, serif;
          font-size: 0.85rem;
          color: #5b5345;
          margin: 0;
          line-height: 1.5;
        }
        .d1-pillar-icon {
          color: #b23a26;
          opacity: 0.7;
        }

        /* ── Product Preview ── */
        .d1-preview-section {
          padding: 4rem 0 5rem;
          background: #f6efe1;
        }
        .d1-preview-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
        }
        @media (min-width: 768px) { .d1-preview-inner { padding: 0 3.5rem; } }
        @media (min-width: 1200px) { .d1-preview-inner { padding: 0 5rem; } }

        .d1-preview-wrap {
          margin-top: 2.5rem;
        }
        .d1-preview-page {
          background: #faf6ed;
          border: 1px solid rgba(28,24,19,0.12);
          box-shadow: 0 8px 48px rgba(28,24,19,0.12), 0 2px 8px rgba(28,24,19,0.06);
          padding: 2rem;
          max-width: 880px;
          margin: 0 auto;
          position: relative;
        }
        @media (min-width: 640px) { .d1-preview-page { padding: 2.5rem 3rem; } }

        .d1-preview-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 0.75rem;
        }
        .d1-preview-kicker {
          font-family: "Newsreader", Georgia, serif;
          font-size: 0.58rem;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #5b5345;
        }
        .d1-preview-folio {
          font-family: "Newsreader", Georgia, serif;
          font-size: 0.58rem;
          letter-spacing: 0.14em;
          color: #b23a26;
        }
        .d1-preview-rule {
          height: 1px;
          background: #1c1813;
          margin-bottom: 1.5rem;
          opacity: 0.35;
        }

        .d1-preview-columns {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
        }
        @media (min-width: 600px) {
          .d1-preview-columns {
            grid-template-columns: 3fr 1fr;
            gap: 2rem;
          }
        }

        .d1-preview-summary-block {
          background: rgba(178,58,38,0.07);
          border-left: 2px solid #b23a26;
          padding: 0.75rem 1rem;
          margin-bottom: 1rem;
        }
        .d1-preview-summary-label {
          font-family: "Newsreader", Georgia, serif;
          font-size: 0.58rem;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #b23a26;
          display: flex;
          align-items: center;
          gap: 0.35rem;
          margin-bottom: 0.4rem;
        }
        .d1-preview-summary-text {
          font-family: "Newsreader", Georgia, serif;
          font-size: 0.82rem;
          line-height: 1.6;
          color: #2e271f;
          margin: 0;
        }

        .d1-preview-body-text {
          font-family: "Newsreader", Georgia, serif;
          font-size: 0.82rem;
          line-height: 1.7;
          color: #2e271f;
          margin-bottom: 1rem;
        }
        .d1-preview-body-text p { margin: 0; }

        .d1-preview-pullquote {
          border-top: 1px solid rgba(28,24,19,0.2);
          border-bottom: 1px solid rgba(28,24,19,0.2);
          padding: 0.75rem 0;
          position: relative;
        }
        .d1-preview-pullquote-mark {
          font-family: "Fraunces", "Times New Roman", serif;
          font-size: 2.5rem;
          color: #b23a26;
          line-height: 1;
          margin-bottom: -0.5rem;
          opacity: 0.5;
        }
        .d1-preview-pullquote p {
          font-family: "Fraunces", "Times New Roman", serif;
          font-style: italic;
          font-size: 0.95rem;
          line-height: 1.45;
          color: #1c1813;
          margin: 0 0 0.35rem;
        }
        .d1-preview-pullquote-source {
          font-family: "Newsreader", Georgia, serif;
          font-size: 0.62rem;
          letter-spacing: 0.1em;
          color: #5b5345;
        }

        /* Margin column of preview */
        .d1-preview-margin-col {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          border-left: 1px solid rgba(28,24,19,0.15);
          padding-left: 1rem;
        }
        @media (max-width: 599px) {
          .d1-preview-margin-col { border-left: none; border-top: 1px solid rgba(28,24,19,0.15); padding-left: 0; padding-top: 1rem; }
        }
        .d1-preview-margin-hint,
        .d1-preview-key-quote,
        .d1-preview-insight {
          font-family: "Newsreader", Georgia, serif;
          font-size: 0.73rem;
          line-height: 1.55;
          color: #5b5345;
        }
        .d1-preview-margin-hint p,
        .d1-preview-key-quote p,
        .d1-preview-insight p {
          margin: 0;
          font-style: italic;
        }
        .d1-preview-margin-hint-label {
          font-family: "Newsreader", Georgia, serif;
          font-size: 0.54rem;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #b23a26;
          display: flex;
          align-items: center;
          gap: 0.3rem;
          margin-bottom: 0.3rem;
        }
        .d1-preview-key-quote {
          background: rgba(91,83,69,0.07);
          padding: 0.5rem;
          border-radius: 0;
        }
        .d1-preview-insight {
          border-top: 1px solid rgba(28,24,19,0.15);
          padding-top: 0.75rem;
        }

        /* ── Pull-quote section ── */
        .d1-pullquote-section {
          padding: 5rem 0;
          background: #1c1813;
          text-align: center;
        }
        .d1-pullquote-text {
          font-family: "Fraunces", "Times New Roman", serif;
          font-size: clamp(1.6rem, 4.5vw, 3rem);
          font-weight: 300;
          font-style: italic;
          line-height: 1.25;
          color: #f4ecdc;
          max-width: 820px;
          margin: 0 auto 1.25rem;
          letter-spacing: -0.01em;
        }
        .d1-pullquote-text em {
          color: #b23a26;
          font-style: italic;
        }
        .d1-pullquote-source {
          font-family: "Newsreader", Georgia, serif;
          font-size: 0.72rem;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: rgba(244,236,220,0.55);
        }
        .d1-pullquote-accent {
          font-size: 4rem;
          color: #b23a26;
          font-family: "Fraunces", "Times New Roman", serif;
          font-style: italic;
          font-weight: 300;
          line-height: 1;
          opacity: 0.4;
          margin-bottom: -1rem;
          display: block;
        }

        /* ── Proof points / stats ── */
        .d1-stats {
          padding: 4rem 0;
        }
        .d1-stats-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 0;
        }
        @media (min-width: 768px) {
          .d1-stats-grid { grid-template-columns: repeat(4, 1fr); }
        }
        .d1-stat {
          padding: 1.75rem 1.5rem;
          border-left: 1px solid rgba(28,24,19,0.15);
        }
        .d1-stat:first-child { border-left: none; }
        @media (max-width: 767px) {
          .d1-stat:nth-child(1), .d1-stat:nth-child(2) { border-bottom: 1px solid rgba(28,24,19,0.15); }
          .d1-stat:nth-child(3) { border-left: none; }
        }
        .d1-stat-num {
          font-family: "Fraunces", "Times New Roman", serif;
          font-size: clamp(1.8rem, 4vw, 2.8rem);
          font-weight: 300;
          color: #1c1813;
          line-height: 1;
          display: block;
          margin-bottom: 0.35rem;
          letter-spacing: -0.02em;
        }
        .d1-stat-num em { color: #b23a26; font-style: normal; }
        .d1-stat-label {
          font-family: "Newsreader", Georgia, serif;
          font-size: 0.78rem;
          line-height: 1.45;
          color: #5b5345;
          display: block;
        }

        /* ── Testimonials ── */
        .d1-testimonials {
          padding: 0 0 4.5rem;
        }
        .d1-testimonial-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
          margin-top: 2rem;
        }
        @media (min-width: 640px) {
          .d1-testimonial-grid { grid-template-columns: 1fr 1fr; }
        }
        .d1-testimonial {
          border-top: 1px solid rgba(28,24,19,0.18);
          padding-top: 1.25rem;
        }
        .d1-testimonial-quote {
          font-family: "Newsreader", Georgia, serif;
          font-style: italic;
          font-size: 0.95rem;
          line-height: 1.65;
          color: #2e271f;
          margin: 0 0 0.9rem;
        }
        .d1-testimonial-attr {
          font-family: "Newsreader", Georgia, serif;
          font-size: 0.65rem;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #5b5345;
        }
        .d1-testimonial-attr strong {
          color: #1c1813;
          font-weight: 600;
          letter-spacing: 0.1em;
        }

        /* ── Subscribe / CTA block ── */
        .d1-subscribe {
          padding: 5rem 0;
          background: #f6efe1;
          border-top: 1px solid rgba(28,24,19,0.15);
          border-bottom: 1px solid rgba(28,24,19,0.15);
        }
        .d1-subscribe-inner {
          max-width: 680px;
        }
        .d1-subscribe-headline {
          font-family: "Fraunces", "Times New Roman", serif;
          font-size: clamp(2rem, 5vw, 3.5rem);
          font-weight: 300;
          line-height: 1.1;
          letter-spacing: -0.025em;
          margin: 0 0 1rem;
        }
        .d1-subscribe-headline em {
          font-style: italic;
          color: #b23a26;
        }
        .d1-subscribe-body {
          font-family: "Newsreader", Georgia, serif;
          font-size: 1rem;
          line-height: 1.65;
          color: #5b5345;
          margin: 0 0 2rem;
          max-width: 36em;
        }

        /* ── Footer colophon ── */
        .d1-footer {
          padding: 2.5rem 0;
          background: #1c1813;
        }
        .d1-footer-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 1rem;
        }
        @media (min-width: 768px) { .d1-footer-inner { padding: 0 3.5rem; } }
        @media (min-width: 1200px) { .d1-footer-inner { padding: 0 5rem; } }

        .d1-colophon {
          font-family: "Newsreader", Georgia, serif;
          font-size: 0.6rem;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: rgba(244,236,220,0.4);
          line-height: 1.7;
        }
        .d1-colophon a {
          color: rgba(244,236,220,0.55);
          text-decoration: none;
          transition: color 0.2s;
        }
        .d1-colophon a:hover { color: #b23a26; }
        .d1-colophon-wordmark {
          font-family: "Fraunces", "Times New Roman", serif;
          font-size: 0.95rem;
          font-weight: 300;
          color: rgba(244,236,220,0.7);
          letter-spacing: -0.01em;
        }
        .d1-colophon-wordmark em {
          font-style: italic;
          color: #b23a26;
        }

        /* ── Prefers reduced motion ── */
        @media (prefers-reduced-motion: reduce) {
          * { animation-duration: 0.01ms !important; transition-duration: 0.01ms !important; }
        }
      `}</style>

      <div className="d1-root">
        {/* Paper grain texture */}
        <GrainOverlay />

        {/* ═══════════════════════════════
            MASTHEAD
        ═══════════════════════════════ */}
        <header className="d1-container d1-masthead">
          <motion.div
            className="d1-masthead-top"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <div>
              <div className="d1-wordmark">
                Ratio <em>Reader</em>
              </div>
              <div className="d1-issue-line" style={{ marginTop: "0.25rem" }}>
                No. 01 — The Reading Issue · Summer
              </div>
            </div>
            <nav className="d1-nav-links">
              <a href="#" className="d1-nav-link">Features</a>
              <a href="#" className="d1-nav-link">Sample</a>
              <a href="#" className="d1-nav-link" style={{ color: "#b23a26" }}>Start Free</a>
            </nav>
          </motion.div>
          <HairlineRule />
        </header>

        {/* ═══════════════════════════════
            HERO — feature article opener
        ═══════════════════════════════ */}
        <section ref={heroRef} className="d1-container d1-hero">
          <div className="d1-hero-grid">
            {/* Main column */}
            <div>
              <motion.span
                className="d1-kicker"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              >
                Feature Essay · Understanding & Comprehension
              </motion.span>

              <motion.h1
                className="d1-hero-headline"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
              >
                Dense pages,{" "}
                <em>distilled</em>{" "}
                to what matters most.
              </motion.h1>

              <motion.p
                className="d1-standfirst"
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.42, ease: [0.22, 1, 0.36, 1] }}
              >
                Ratio Reader transforms any PDF into structured understanding
                — a smart summary, contextual hints, key quotes, and insights
                that go beyond what's written on the page.
              </motion.p>

              <motion.div
                className="d1-opening-graf d1-drop-cap"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.6 }}
              >
                Every document you've ever opened with good intentions and closed
                with a vague sense of what it contained — Ratio Reader was built
                for those moments. Not to replace reading, but to make it
                count. Upload a paper, a report, a thesis, a contract. Within
                thirty seconds, you'll understand it.
              </motion.div>

              <motion.div
                className="d1-cta-row"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
              >
                <a href="#" className="d1-btn-primary">
                  <Upload size={14} strokeWidth={1.5} />
                  Start reading — free
                </a>
                <a href="#" className="d1-btn-secondary">
                  See a sample summary
                </a>
              </motion.div>
            </div>

            {/* Margin column — shows the product's margin hint feature */}
            <motion.aside
              className="d1-hero-margin"
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="d1-margin-note">
                <span className="d1-margin-note-label">Margin Hint</span>
                <p>
                  "Distilled understanding" — not just a summary, but
                  a map of what you need to know and why it matters.
                </p>
              </div>
              <div className="d1-margin-note">
                <span className="d1-margin-note-label">Key Quote</span>
                <p style={{ color: "#1c1813" }}>
                  "Within thirty seconds, you'll understand it."
                </p>
              </div>
            </motion.aside>
          </div>
        </section>

        {/* ═══════════════════════════════
            HOW IT WORKS — 3 steps
        ═══════════════════════════════ */}
        <section className="d1-how">
          <div className="d1-how-inner">
            <HairlineRule />
            <div style={{ height: "2.5rem" }} />
            <Reveal>
              <span className="d1-section-kicker">Process · How it works</span>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="d1-how-headline">
                Three steps to <em>true comprehension</em>.
              </h2>
            </Reveal>
            <div className="d1-how-steps">
              {[
                {
                  num: "01",
                  title: "Drop in your PDF",
                  body: "Upload any PDF — research paper, book chapter, legal document, technical report. Ratio handles it all.",
                },
                {
                  num: "02",
                  title: "Ratio reads every page",
                  body: "Our system reads and analyzes the full document, building a semantic map of arguments, structure, and meaning.",
                },
                {
                  num: "03",
                  title: "Get your full reading kit",
                  body: "Summary, margin hints, key quotes, and insights arrive together. Dense text becomes clear thought.",
                },
              ].map((step, i) => (
                <Reveal key={step.num} delay={i * 0.12}>
                  <div className="d1-how-step">
                    <span className="d1-how-step-num">{step.num}</span>
                    <h3 className="d1-how-step-title">{step.title}</h3>
                    <p className="d1-how-step-body">{step.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>
            <div style={{ height: "2.5rem" }} />
            <HairlineRule className="d1-rule-thin" />
          </div>
        </section>

        {/* ═══════════════════════════════
            CONTENTS — 4 pillars
        ═══════════════════════════════ */}
        <section className="d1-container d1-contents">
          <HairlineRule />
          <div style={{ height: "2.5rem" }} />
          <Reveal>
            <span className="d1-section-kicker">In this issue · Four features</span>
          </Reveal>
          <div className="d1-contents-header">
            <Reveal delay={0.08}>
              <h2 className="d1-contents-headline">
                What <em>Ratio</em> brings<br />to every document.
              </h2>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="d1-contents-intro">
                Four distinct lenses on any text. Together they turn passive reading
                into active understanding — the kind that sticks.
              </p>
            </Reveal>
          </div>

          {[
            {
              num: "I",
              title: "Smart Summary",
              desc: "Distills any PDF to its most important points, structured and scannable — the essence of a document in a single view.",
              icon: <FileText size={18} strokeWidth={1.25} />,
            },
            {
              num: "II",
              title: "Margin Hints",
              desc: "Contextual annotations that unlock difficult passages as you read, without interrupting the flow of the text.",
              icon: <Lightbulb size={18} strokeWidth={1.25} />,
            },
            {
              num: "III",
              title: "Key Quotes",
              desc: "The most important verbatim lines, surfaced with page references — the sentences worth remembering, found for you.",
              icon: <Quote size={18} strokeWidth={1.25} />,
            },
            {
              num: "IV",
              title: "Insights",
              desc: "Connections, takeaways, and 'why it matters' — the layer of understanding that goes beyond what's written on the page.",
              icon: <BookOpen size={18} strokeWidth={1.25} />,
            },
          ].map((pillar, i) => (
            <Reveal key={pillar.num} delay={i * 0.08}>
              <div className="d1-pillar-row">
                <span className="d1-pillar-num">{pillar.num}</span>
                <div className="d1-pillar-content">
                  <h3 className="d1-pillar-title">{pillar.title}</h3>
                  <p className="d1-pillar-desc">{pillar.desc}</p>
                </div>
                <div className="d1-pillar-icon">{pillar.icon}</div>
              </div>
            </Reveal>
          ))}
        </section>

        {/* ═══════════════════════════════
            PRODUCT PREVIEW
        ═══════════════════════════════ */}
        <section className="d1-preview-section">
          <div className="d1-preview-inner">
            <HairlineRule />
            <div style={{ height: "2.5rem" }} />
            <Reveal>
              <span className="d1-section-kicker">Interface · Reading view</span>
            </Reveal>
            <Reveal delay={0.1}>
              <h2
                className="d1-contents-headline"
                style={{ marginBottom: "0.5rem" }}
              >
                A reading room designed for the <em>serious</em> reader.
              </h2>
            </Reveal>
            <Reveal delay={0.18}>
              <p
                className="d1-contents-intro"
                style={{ marginBottom: 0 }}
              >
                Every element visible in the interface serves comprehension.
                Nothing decorative. Nothing superfluous.
              </p>
            </Reveal>
            <ProductPreview />
          </div>
        </section>

        {/* ═══════════════════════════════
            BIG PULL-QUOTE / TESTIMONIAL
        ═══════════════════════════════ */}
        <section className="d1-pullquote-section">
          <div className="d1-container">
            <Reveal>
              <span className="d1-pullquote-accent">"</span>
              <blockquote
                className="d1-pullquote-text"
                style={{ margin: "0 auto 1.25rem" }}
              >
                I used to spend four hours on a single paper.
                Now I spend forty minutes and I actually{" "}
                <em>understand</em> what I've read.
              </blockquote>
              <p className="d1-pullquote-source">
                — Dr. Mina Osei · Research Lead, UCL Institute of Education
              </p>
            </Reveal>
          </div>
        </section>

        {/* ═══════════════════════════════
            PROOF POINTS / STATS
        ═══════════════════════════════ */}
        <section className="d1-stats">
          <div className="d1-container">
            <HairlineRule className="d1-rule-thin" />
            <div className="d1-stats-grid" style={{ marginTop: "0" }}>
              {[
                { num: "180", unit: "k+", label: "Pages distilled" },
                { num: "4", unit: " hrs", label: "Saved per reader, per week" },
                { num: "30", unit: "s", label: "Average document analysis" },
                { num: "98", unit: "%", label: "Of users report better comprehension" },
              ].map((stat, i) => (
                <Reveal key={i} delay={i * 0.08}>
                  <div className="d1-stat">
                    <span className="d1-stat-num">
                      {stat.num}<em>{stat.unit}</em>
                    </span>
                    <span className="d1-stat-label">{stat.label}</span>
                  </div>
                </Reveal>
              ))}
            </div>
            <HairlineRule className="d1-rule-thin" style={{ marginTop: 0 }} />
          </div>
        </section>

        {/* ═══════════════════════════════
            TESTIMONIALS
        ═══════════════════════════════ */}
        <section className="d1-container d1-testimonials">
          <Reveal>
            <span className="d1-section-kicker">Readers · In their own words</span>
          </Reveal>
          <div className="d1-testimonial-grid">
            <Reveal delay={0.1}>
              <div className="d1-testimonial">
                <p className="d1-testimonial-quote">
                  "As a PhD student reading three to five papers a day, Ratio
                  has become indispensable. The margin hints alone save me an
                  hour every morning — I can actually follow an argument across
                  a dense methodology section without losing the thread."
                </p>
                <span className="d1-testimonial-attr">
                  <strong>Tariq Mansour</strong> · PhD Candidate, Computational Linguistics, Cambridge
                </span>
              </div>
            </Reveal>
            <Reveal delay={0.18}>
              <div className="d1-testimonial">
                <p className="d1-testimonial-quote">
                  "We use Ratio across our entire policy team. Forty-page
                  briefing documents become fifteen minutes of genuinely useful
                  reading. The key quotes feature means we can cite accurately
                  without re-reading the whole thing every time."
                </p>
                <span className="d1-testimonial-attr">
                  <strong>Elena Voronova</strong> · Senior Policy Analyst, Brookings Institution
                </span>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ═══════════════════════════════
            SUBSCRIBE / CTA
        ═══════════════════════════════ */}
        <section className="d1-subscribe">
          <div className="d1-container">
            <div className="d1-subscribe-inner">
              <Reveal>
                <span className="d1-section-kicker">Begin · Your first document is free</span>
              </Reveal>
              <Reveal delay={0.1}>
                <h2 className="d1-subscribe-headline">
                  Start reading with <em>clarity</em>.
                </h2>
              </Reveal>
              <Reveal delay={0.18}>
                <p className="d1-subscribe-body">
                  Upload your first PDF and receive your full reading kit —
                  smart summary, margin hints, key quotes, and insights —
                  in under thirty seconds. No sign-up required to begin.
                </p>
              </Reveal>
              <Reveal delay={0.25}>
                <div className="d1-cta-row" style={{ marginTop: 0 }}>
                  <a href="#" className="d1-btn-primary">
                    <Upload size={14} strokeWidth={1.5} />
                    Start reading — free
                  </a>
                  <a href="#" className="d1-btn-secondary">
                    See a sample summary
                  </a>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════
            FOOTER / COLOPHON
        ═══════════════════════════════ */}
        <footer className="d1-footer">
          <div className="d1-footer-inner">
            <div>
              <div className="d1-colophon-wordmark">
                Ratio <em>Reader</em>
              </div>
              <div className="d1-colophon" style={{ marginTop: "0.4rem" }}>
                No. 01 · The Reading Issue · Summer Edition
              </div>
            </div>
            <div className="d1-colophon" style={{ textAlign: "right" }}>
              <div>Set in Fraunces &amp; Newsreader</div>
              <div style={{ marginTop: "0.25rem" }}>
                <a href="#">Privacy</a>
                {" · "}
                <a href="#">Terms</a>
                {" · "}
                <a href="#">Contact</a>
              </div>
              <div style={{ marginTop: "0.25rem", opacity: 0.5 }}>
                © 2024 Ratio Reader. All rights reserved.
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
