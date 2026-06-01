import { useEffect, useRef, useState, useCallback } from "react";
import { motion, useInView, useMotionValue, animate } from "motion/react";
import {
  FileText,
  Cpu,
  MessageSquareQuote,
  Lightbulb,
  BookMarked,
  ChevronRight,
  Upload,
  ArrowRight,
  Terminal,
  Activity,
  Zap,
  Circle,
} from "lucide-react";

// ─── Utility: respect prefers-reduced-motion ───────────────────────────────
function useReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReduced(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);
  return reduced;
}

// ─── Live Clock ─────────────────────────────────────────────────────────────
function LiveClock() {
  const [time, setTime] = useState(() => {
    const d = new Date();
    return d.toISOString().replace("T", " ").slice(0, 19) + "Z";
  });
  useEffect(() => {
    const id = setInterval(() => {
      const d = new Date();
      setTime(d.toISOString().replace("T", " ").slice(0, 19) + "Z");
    }, 1000);
    return () => clearInterval(id);
  }, []);
  return <span>{time}</span>;
}

// ─── Count-Up Number ────────────────────────────────────────────────────────
function CountUp({
  target,
  suffix = "",
  prefix = "",
  decimals = 0,
}: {
  target: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const value = useMotionValue(0);
  const reduced = useReducedMotion();
  const [display, setDisplay] = useState(
    prefix + (0).toFixed(decimals) + suffix
  );

  useEffect(() => {
    if (!inView) return;
    if (reduced) {
      setDisplay(prefix + target.toFixed(decimals) + suffix);
      return;
    }
    const controls = animate(value, target, {
      duration: 2.2,
      ease: "easeOut",
      onUpdate: (v) => {
        setDisplay(prefix + v.toFixed(decimals) + suffix);
      },
    });
    return () => controls.stop();
  }, [inView, target, suffix, prefix, decimals, value, reduced]);

  return <span ref={ref}>{display}</span>;
}

// ─── Terminal Typewriter ─────────────────────────────────────────────────────
const BOOT_LINES = [
  "$ ratio-engine --init",
  "  loading parser modules..............OK",
  "  semantic index:            [████████] 100%",
  "  NLP pipeline:              [████████] 100%",
  "  quote extractor:           [████████] 100%",
  "  insight synthesizer:       [████████] 100%",
  "",
  "$ ratio-engine --parse annual-report-2024.pdf",
  "  pages detected:            312",
  "  pass 1 — structure map:    complete",
  "  pass 2 — key passages:     47 extracted",
  "  pass 3 — insight graph:    32 connections",
  "  pass 4 — quote harvest:    19 quotes",
  "",
  "  ✓ SUMMARY         ready  [0.8s]",
  "  ✓ MARGIN HINTS    ready  [1.2s]",
  "  ✓ KEY QUOTES      ready  [1.4s]",
  "  ✓ INSIGHTS        ready  [1.9s]",
  "",
  "  total elapsed: 24.3s",
  "$ _",
];

function TerminalWindow({ reduced }: { reduced: boolean }) {
  const [visibleLines, setVisibleLines] = useState<string[]>([]);
  const [cursor, setCursor] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
  const lineIndexRef = useRef(0);

  useEffect(() => {
    if (reduced) {
      setVisibleLines(BOOT_LINES);
      return;
    }

    setVisibleLines([]);
    lineIndexRef.current = 0;

    const advance = () => {
      if (lineIndexRef.current >= BOOT_LINES.length) return;
      const idx = lineIndexRef.current;
      setVisibleLines((prev) => [...prev, BOOT_LINES[idx]]);
      lineIndexRef.current += 1;
      if (containerRef.current) {
        containerRef.current.scrollTop = containerRef.current.scrollHeight;
      }
    };

    // Stagger line reveals with variable timing
    const delays: number[] = [];
    let accumulated = 200;
    for (let i = 0; i < BOOT_LINES.length; i++) {
      delays.push(accumulated);
      accumulated += BOOT_LINES[i] === "" ? 120 : 280;
    }

    const timeouts = delays.map((delay, i) =>
      setTimeout(() => {
        lineIndexRef.current = i;
        advance();
      }, delay)
    );

    return () => timeouts.forEach(clearTimeout);
  }, [reduced]);

  // Blinking cursor
  useEffect(() => {
    const id = setInterval(() => setCursor((c) => !c), 530);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="d2-terminal-window">
      <div className="d2-terminal-chrome">
        <span className="d2-dot d2-dot-red" />
        <span className="d2-dot d2-dot-yellow" />
        <span className="d2-dot d2-dot-green" />
        <span className="d2-terminal-title">ratio-engine v2.4.1 — bash</span>
      </div>
      <div ref={containerRef} className="d2-terminal-body">
        {visibleLines.map((line, i) => {
          const isCmd = line.startsWith("$");
          const isOk = line.includes("✓");
          const isEmpty = line === "";
          return (
            <div
              key={i}
              className={`d2-terminal-line ${isCmd ? "d2-cmd" : ""} ${isOk ? "d2-ok" : ""} ${isEmpty ? "d2-empty" : ""}`}
            >
              {line || " "}
            </div>
          );
        })}
        {!reduced && (
          <span
            className="d2-cursor-block"
            style={{ opacity: cursor ? 1 : 0 }}
          />
        )}
      </div>
    </div>
  );
}

// ─── Parse Panel ─────────────────────────────────────────────────────────────
function ParsePanel() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });
  const reduced = useReducedMotion();

  const bars = [
    { label: "PAGES SCANNED", value: 312, max: 400, unit: "pg" },
    { label: "KEY PASSAGES", value: 47, max: 80, unit: "pt" },
    { label: "CONNECTIONS", value: 32, max: 60, unit: "cn" },
    { label: "QUOTES HARVESTED", value: 19, max: 40, unit: "qt" },
  ];

  return (
    <div ref={ref} className="d2-parse-panel">
      <div className="d2-parse-header">
        <span className="d2-label">PARSE STATUS</span>
        <span className="d2-badge-green">COMPLETE</span>
      </div>
      {bars.map((bar, i) => {
        const pct = Math.round((bar.value / bar.max) * 100);
        return (
          <div key={bar.label} className="d2-bar-row">
            <div className="d2-bar-meta">
              <span className="d2-bar-label">{bar.label}</span>
              <span className="d2-bar-val">
                {bar.value}
                <span className="d2-bar-unit"> {bar.unit}</span>
              </span>
            </div>
            <div className="d2-bar-track">
              <motion.div
                className="d2-bar-fill"
                initial={{ width: "0%" }}
                animate={inView ? { width: `${pct}%` } : { width: "0%" }}
                transition={{
                  duration: reduced ? 0 : 1.4,
                  delay: reduced ? 0 : i * 0.18,
                  ease: "easeOut",
                }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}

// ─── Module Card (Pillar) ────────────────────────────────────────────────────
function ModuleCard({
  icon,
  title,
  status,
  readout,
  body,
  delay = 0,
}: {
  icon: React.ReactNode;
  title: string;
  status: string;
  readout: string;
  body: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const reduced = useReducedMotion();

  return (
    <motion.div
      ref={ref}
      className="d2-module-card"
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: reduced ? 0 : 0.5, delay: reduced ? 0 : delay }}
    >
      {/* Corner registration ticks */}
      <span className="d2-tick d2-tick-tl" />
      <span className="d2-tick d2-tick-tr" />
      <span className="d2-tick d2-tick-bl" />
      <span className="d2-tick d2-tick-br" />

      <div className="d2-module-top">
        <div className="d2-module-icon">{icon}</div>
        <span className="d2-badge-green">{status}</span>
      </div>
      <h3 className="d2-module-title">{title}</h3>
      <div className="d2-module-readout">{readout}</div>
      <p className="d2-module-body">{body}</p>
    </motion.div>
  );
}

// ─── Dashboard Preview ───────────────────────────────────────────────────────
function DashboardPreview() {
  const [blink, setBlink] = useState(true);
  useEffect(() => {
    const id = setInterval(() => setBlink((b) => !b), 700);
    return () => clearInterval(id);
  }, []);

  const sections = [
    {
      key: "SUMMARY",
      color: "#5ef39b",
      lines: [
        "The report outlines a 34% increase in operating margin",
        "driven by supply-chain restructuring in Q3. R&D spend",
        "rose 18% YoY with three new product lines entering beta.",
      ],
    },
    {
      key: "MARGIN HINTS",
      color: "#1fd8c5",
      lines: [
        "p.14 — 'adjusted EBITDA' excludes one-time restructure",
        "p.31 — Figure 4 footnote: FX-neutral basis only",
      ],
    },
    {
      key: "KEY QUOTES",
      color: "#ffb454",
      lines: [
        '"We expect sustainable double-digit growth..." — CEO, p.7',
        '"Pipeline conversion improved 22 points YoY." — p.44',
      ],
    },
    {
      key: "INSIGHTS",
      color: "#5ef39b",
      lines: [
        "Supply-chain savings directly fund R&D acceleration →",
        "product pipeline expansion → long-run margin defense.",
      ],
    },
  ];

  return (
    <div className="d2-dashboard">
      <div className="d2-dashboard-header">
        <div className="d2-dashboard-title-row">
          <Terminal size={14} className="d2-icon-accent" />
          <span className="d2-label">DOCUMENT READOUT — annual-report-2024.pdf</span>
        </div>
        <div className="d2-dashboard-meta">
          <span
            className="d2-blink-dot"
            style={{ background: "#5ef39b", opacity: blink ? 1 : 0.2 }}
          />
          <span className="d2-dim">LIVE OUTPUT</span>
        </div>
      </div>
      <div className="d2-dashboard-grid">
        {sections.map((s) => (
          <div key={s.key} className="d2-dash-section">
            <div
              className="d2-dash-section-label"
              style={{ color: s.color, borderColor: s.color + "44" }}
            >
              <Circle
                size={6}
                style={{ fill: s.color, color: s.color }}
                className="d2-inline-dot"
              />
              {s.key}
            </div>
            {s.lines.map((l, i) => (
              <div key={i} className="d2-dash-line">
                {l}
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className="d2-dashboard-footer">
        <span className="d2-dim">
          processed in 24.3s &bull; 312 pages &bull; ratio-engine v2.4.1
        </span>
        <span className="d2-dim">output.ratio</span>
      </div>
    </div>
  );
}

// ─── Pipeline Node ───────────────────────────────────────────────────────────
function PipelineStep({
  step,
  label,
  sub,
  delay,
}: {
  step: string;
  label: string;
  sub: string;
  delay: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const reduced = useReducedMotion();
  return (
    <motion.div
      ref={ref}
      className="d2-pipeline-node"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: reduced ? 0 : 0.45, delay: reduced ? 0 : delay }}
    >
      <div className="d2-pipeline-step">{step}</div>
      <div className="d2-pipeline-label">{label}</div>
      <div className="d2-pipeline-sub">{sub}</div>
    </motion.div>
  );
}

// ─── Main Component ──────────────────────────────────────────────────────────
export function Design2() {
  const reduced = useReducedMotion();

  // Upload drag-over state
  const [dragging, setDragging] = useState(false);
  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setDragging(true);
  }, []);
  const handleDragLeave = useCallback(() => setDragging(false), []);
  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setDragging(false);
  }, []);

  return (
    <>
      {/* ── Scoped Styles ─────────────────────────────────────────────────── */}
      <style>{`
        /* ── Design tokens ── */
        .d2-root {
          --d2-bg: #07090b;
          --d2-panel: #0d1117;
          --d2-border: rgba(94,243,155,0.18);
          --d2-border-dim: rgba(94,243,155,0.10);
          --d2-green: #5ef39b;
          --d2-cyan: #1fd8c5;
          --d2-amber: #ffb454;
          --d2-text: #c8d3cc;
          --d2-dim: #6b7a72;
          --d2-glow: 0 0 12px rgba(94,243,155,0.45);
          --d2-glow-sm: 0 0 6px rgba(94,243,155,0.3);
        }

        /* ── Base page ── */
        .d2-root {
          background: var(--d2-bg);
          color: var(--d2-text);
          min-height: 100vh;
          font-family: "IBM Plex Sans", ui-sans-serif, sans-serif;
          position: relative;
          overflow-x: hidden;
        }

        /* ── Grid background ── */
        .d2-root::before {
          content: "";
          position: fixed;
          inset: 0;
          pointer-events: none;
          z-index: 0;
          background-image:
            linear-gradient(var(--d2-border-dim) 1px, transparent 1px),
            linear-gradient(90deg, var(--d2-border-dim) 1px, transparent 1px);
          background-size: 48px 48px;
        }

        /* ── CRT scanlines overlay ── */
        .d2-root::after {
          content: "";
          position: fixed;
          inset: 0;
          pointer-events: none;
          z-index: 1;
          background: repeating-linear-gradient(
            0deg,
            transparent,
            transparent 2px,
            rgba(0,0,0,0.055) 2px,
            rgba(0,0,0,0.055) 4px
          );
          animation: ${reduced ? "none" : "d2-scanlines 8s linear infinite"};
        }

        @keyframes d2-scanlines {
          0% { background-position: 0 0; }
          100% { background-position: 0 100px; }
        }

        /* ── Z ordering wrapper ── */
        .d2-content {
          position: relative;
          z-index: 2;
        }

        /* ── Status bar ── */
        .d2-statusbar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 1.5rem;
          height: 36px;
          background: rgba(13,17,23,0.95);
          border-bottom: 1px solid var(--d2-border);
          font-family: "JetBrains Mono", ui-monospace, monospace;
          font-size: 0.68rem;
          letter-spacing: 0.08em;
          position: sticky;
          top: 0;
          z-index: 100;
          backdrop-filter: blur(8px);
        }
        .d2-statusbar-left { display: flex; align-items: center; gap: 1.25rem; }
        .d2-statusbar-right { display: flex; align-items: center; gap: 1.25rem; }
        .d2-status-online {
          color: var(--d2-green);
          text-shadow: var(--d2-glow-sm);
          display: flex; align-items: center; gap: 0.4rem;
        }
        .d2-status-online::before {
          content: "";
          width: 6px; height: 6px;
          border-radius: 50%;
          background: var(--d2-green);
          box-shadow: var(--d2-glow);
          display: inline-block;
          animation: ${reduced ? "none" : "d2-pulse 2s ease-in-out infinite"};
        }
        @keyframes d2-pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
        .d2-version { color: var(--d2-dim); }
        .d2-clock { color: var(--d2-cyan); }
        .d2-nav-link {
          color: var(--d2-dim);
          text-decoration: none;
          cursor: pointer;
          transition: color 0.2s;
        }
        .d2-nav-link:hover { color: var(--d2-green); }

        /* ── Section wrapper ── */
        .d2-section {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 2rem;
        }

        /* ── Hero ── */
        .d2-hero {
          padding: 6rem 2rem 4rem;
          max-width: 1280px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
          align-items: start;
        }
        @media (max-width: 900px) {
          .d2-hero { grid-template-columns: 1fr; padding: 3rem 1.25rem 2rem; }
        }

        .d2-eyebrow {
          font-family: "JetBrains Mono", ui-monospace, monospace;
          font-size: 0.7rem;
          letter-spacing: 0.2em;
          color: var(--d2-green);
          text-shadow: var(--d2-glow-sm);
          text-transform: uppercase;
          margin-bottom: 1rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        .d2-eyebrow::before {
          content: "//";
          color: var(--d2-dim);
        }

        .d2-hero-headline {
          font-family: "Chakra Petch", ui-sans-serif, sans-serif;
          font-size: clamp(2.8rem, 5vw, 4.5rem);
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: -0.01em;
          line-height: 1.0;
          color: #e8f0ec;
          margin: 0 0 1.25rem;
        }
        .d2-headline-accent {
          color: var(--d2-green);
          text-shadow: 0 0 24px rgba(94,243,155,0.5), 0 0 48px rgba(94,243,155,0.2);
          display: block;
        }

        .d2-hero-sub {
          font-size: 1.05rem;
          color: var(--d2-dim);
          line-height: 1.65;
          max-width: 480px;
          margin-bottom: 2.5rem;
        }

        .d2-cta-group { display: flex; flex-direction: column; gap: 0.75rem; }

        .d2-cta-primary {
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          font-family: "JetBrains Mono", ui-monospace, monospace;
          font-size: 0.85rem;
          letter-spacing: 0.06em;
          color: var(--d2-bg);
          background: var(--d2-green);
          border: none;
          padding: 0.85rem 1.75rem;
          cursor: pointer;
          font-weight: 700;
          text-transform: uppercase;
          box-shadow: 0 0 20px rgba(94,243,155,0.35);
          transition: box-shadow 0.2s, transform 0.15s;
          width: fit-content;
          clip-path: polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px));
        }
        .d2-cta-primary:hover {
          box-shadow: 0 0 32px rgba(94,243,155,0.6);
          transform: translateY(-1px);
        }

        .d2-cta-secondary {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-family: "JetBrains Mono", ui-monospace, monospace;
          font-size: 0.78rem;
          letter-spacing: 0.08em;
          color: var(--d2-cyan);
          background: none;
          border: none;
          padding: 0;
          cursor: pointer;
          text-transform: uppercase;
          transition: color 0.2s;
          width: fit-content;
        }
        .d2-cta-secondary:hover { color: var(--d2-green); }

        .d2-command-line {
          font-family: "JetBrains Mono", ui-monospace, monospace;
          font-size: 0.75rem;
          color: var(--d2-dim);
          margin-bottom: 1.5rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        .d2-command-line span:first-child { color: var(--d2-green); }

        /* ── Upload drop zone ── */
        .d2-upload-zone {
          border: 1px dashed var(--d2-border);
          padding: 1.25rem 1.5rem;
          display: flex;
          align-items: center;
          gap: 1rem;
          cursor: pointer;
          transition: border-color 0.2s, background 0.2s;
          margin-bottom: 1.5rem;
        }
        .d2-upload-zone:hover,
        .d2-upload-zone.active {
          border-color: var(--d2-green);
          background: rgba(94,243,155,0.05);
        }
        .d2-upload-label {
          font-family: "JetBrains Mono", ui-monospace, monospace;
          font-size: 0.72rem;
          color: var(--d2-dim);
          letter-spacing: 0.06em;
        }
        .d2-upload-label strong { color: var(--d2-green); display: block; }

        /* ── Terminal window ── */
        .d2-terminal-window {
          background: rgba(7,9,11,0.95);
          border: 1px solid var(--d2-border);
          font-family: "JetBrains Mono", ui-monospace, monospace;
          font-size: 0.72rem;
          line-height: 1.6;
          overflow: hidden;
        }
        .d2-terminal-chrome {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          padding: 0.5rem 0.75rem;
          background: rgba(13,17,23,0.9);
          border-bottom: 1px solid var(--d2-border-dim);
        }
        .d2-dot {
          width: 10px; height: 10px;
          border-radius: 50%;
          flex-shrink: 0;
        }
        .d2-dot-red { background: #ff5f56; }
        .d2-dot-yellow { background: #ffbd2e; }
        .d2-dot-green { background: #27c93f; }
        .d2-terminal-title {
          color: var(--d2-dim);
          font-size: 0.65rem;
          margin-left: 0.5rem;
          letter-spacing: 0.05em;
        }
        .d2-terminal-body {
          padding: 1rem 1rem;
          max-height: 320px;
          overflow-y: auto;
          scrollbar-width: thin;
          scrollbar-color: var(--d2-border) transparent;
        }
        .d2-terminal-line { color: var(--d2-dim); white-space: pre; }
        .d2-terminal-line.d2-cmd { color: #e8f0ec; }
        .d2-terminal-line.d2-ok { color: var(--d2-green); }
        .d2-terminal-line.d2-empty { line-height: 0.8; }
        .d2-cursor-block {
          display: inline-block;
          width: 8px; height: 13px;
          background: var(--d2-green);
          box-shadow: var(--d2-glow-sm);
          vertical-align: text-bottom;
          margin-left: 1px;
          transition: opacity 0.1s;
        }

        /* ── Parse panel ── */
        .d2-parse-panel {
          background: var(--d2-panel);
          border: 1px solid var(--d2-border);
          padding: 1.25rem 1.25rem;
          margin-top: 1rem;
        }
        .d2-parse-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 1rem;
        }
        .d2-bar-row { margin-bottom: 0.85rem; }
        .d2-bar-meta {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
          margin-bottom: 0.3rem;
        }
        .d2-bar-label {
          font-family: "JetBrains Mono", ui-monospace, monospace;
          font-size: 0.62rem;
          letter-spacing: 0.1em;
          color: var(--d2-dim);
        }
        .d2-bar-val {
          font-family: "JetBrains Mono", ui-monospace, monospace;
          font-size: 0.72rem;
          color: var(--d2-green);
        }
        .d2-bar-unit { color: var(--d2-dim); font-size: 0.6rem; }
        .d2-bar-track {
          height: 3px;
          background: rgba(94,243,155,0.12);
          position: relative;
          overflow: hidden;
        }
        .d2-bar-fill {
          position: absolute;
          left: 0; top: 0; bottom: 0;
          background: var(--d2-green);
          box-shadow: 0 0 8px rgba(94,243,155,0.6);
        }

        /* ── Label / badge ── */
        .d2-label {
          font-family: "JetBrains Mono", ui-monospace, monospace;
          font-size: 0.62rem;
          letter-spacing: 0.14em;
          color: var(--d2-dim);
          text-transform: uppercase;
        }
        .d2-badge-green {
          font-family: "JetBrains Mono", ui-monospace, monospace;
          font-size: 0.58rem;
          letter-spacing: 0.12em;
          color: var(--d2-green);
          border: 1px solid rgba(94,243,155,0.4);
          padding: 0.15rem 0.5rem;
          text-transform: uppercase;
        }
        .d2-dim { color: var(--d2-dim); }
        .d2-icon-accent { color: var(--d2-green); }

        /* ── Metrics strip ── */
        .d2-metrics {
          border-top: 1px solid var(--d2-border-dim);
          border-bottom: 1px solid var(--d2-border-dim);
          background: var(--d2-panel);
          padding: 2.5rem 2rem;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 0;
        }
        @media (max-width: 700px) {
          .d2-metrics { grid-template-columns: repeat(2, 1fr); }
        }
        .d2-metric-item {
          padding: 0.75rem 1.5rem;
          border-right: 1px solid var(--d2-border-dim);
          text-align: center;
        }
        .d2-metric-item:last-child { border-right: none; }
        .d2-metric-number {
          font-family: "Chakra Petch", ui-sans-serif, sans-serif;
          font-size: clamp(1.8rem, 3vw, 2.6rem);
          font-weight: 700;
          color: var(--d2-green);
          text-shadow: var(--d2-glow);
          line-height: 1.1;
          display: block;
          margin-bottom: 0.25rem;
        }
        .d2-metric-number.amber { color: var(--d2-amber); text-shadow: 0 0 12px rgba(255,180,84,0.4); }
        .d2-metric-desc {
          font-family: "JetBrains Mono", ui-monospace, monospace;
          font-size: 0.65rem;
          letter-spacing: 0.1em;
          color: var(--d2-dim);
          text-transform: uppercase;
        }

        /* ── Modules grid ── */
        .d2-modules-section { padding: 5rem 2rem; max-width: 1280px; margin: 0 auto; }
        .d2-section-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 2.5rem;
        }
        .d2-section-title {
          font-family: "Chakra Petch", ui-sans-serif, sans-serif;
          font-size: 0.8rem;
          text-transform: uppercase;
          letter-spacing: 0.25em;
          color: var(--d2-green);
          text-shadow: var(--d2-glow-sm);
        }
        .d2-section-line {
          flex: 1;
          height: 1px;
          background: var(--d2-border-dim);
        }

        .d2-modules-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1px;
          background: var(--d2-border-dim);
          border: 1px solid var(--d2-border-dim);
        }
        @media (max-width: 900px) {
          .d2-modules-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 520px) {
          .d2-modules-grid { grid-template-columns: 1fr; }
        }

        .d2-module-card {
          background: var(--d2-panel);
          padding: 1.75rem 1.5rem;
          position: relative;
          transition: background 0.2s;
        }
        .d2-module-card:hover { background: rgba(13,23,18,0.95); }

        /* Registration ticks */
        .d2-tick {
          position: absolute;
          width: 8px; height: 8px;
          border-color: rgba(94,243,155,0.35);
          border-style: solid;
        }
        .d2-tick-tl { top: 6px; left: 6px; border-width: 1px 0 0 1px; }
        .d2-tick-tr { top: 6px; right: 6px; border-width: 1px 1px 0 0; }
        .d2-tick-bl { bottom: 6px; left: 6px; border-width: 0 0 1px 1px; }
        .d2-tick-br { bottom: 6px; right: 6px; border-width: 0 1px 1px 0; }

        .d2-module-top {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          margin-bottom: 1rem;
        }
        .d2-module-icon {
          color: var(--d2-green);
          opacity: 0.85;
        }
        .d2-module-title {
          font-family: "Chakra Petch", ui-sans-serif, sans-serif;
          font-size: 0.95rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          color: #e8f0ec;
          margin: 0 0 0.5rem;
        }
        .d2-module-readout {
          font-family: "JetBrains Mono", ui-monospace, monospace;
          font-size: 0.63rem;
          color: var(--d2-cyan);
          letter-spacing: 0.08em;
          margin-bottom: 0.9rem;
          opacity: 0.8;
        }
        .d2-module-body {
          font-size: 0.85rem;
          color: var(--d2-dim);
          line-height: 1.6;
          margin: 0;
        }

        /* ── Pipeline ── */
        .d2-pipeline-section { padding: 5rem 2rem; max-width: 1280px; margin: 0 auto; }
        .d2-pipeline-row {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0;
          flex-wrap: wrap;
        }
        .d2-pipeline-node {
          background: var(--d2-panel);
          border: 1px solid var(--d2-border);
          padding: 1.75rem 2.5rem;
          text-align: center;
          position: relative;
          flex: 1;
          min-width: 180px;
        }
        .d2-pipeline-connector {
          width: 60px;
          height: 1px;
          background: var(--d2-border);
          position: relative;
          flex-shrink: 0;
        }
        .d2-pipeline-connector::after {
          content: "→";
          position: absolute;
          right: -8px;
          top: 50%;
          transform: translateY(-50%);
          color: var(--d2-green);
          font-size: 1rem;
          text-shadow: var(--d2-glow-sm);
        }
        @media (max-width: 700px) {
          .d2-pipeline-row { flex-direction: column; }
          .d2-pipeline-connector { width: 1px; height: 40px; }
          .d2-pipeline-connector::after { content: "↓"; right: auto; left: 50%; transform: translate(-50%, 0); bottom: -8px; top: auto; }
        }
        .d2-pipeline-step {
          font-family: "JetBrains Mono", ui-monospace, monospace;
          font-size: 0.62rem;
          letter-spacing: 0.16em;
          color: var(--d2-dim);
          text-transform: uppercase;
          margin-bottom: 0.5rem;
        }
        .d2-pipeline-label {
          font-family: "Chakra Petch", ui-sans-serif, sans-serif;
          font-size: 1.1rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: var(--d2-green);
          text-shadow: var(--d2-glow-sm);
          margin-bottom: 0.4rem;
        }
        .d2-pipeline-sub {
          font-size: 0.78rem;
          color: var(--d2-dim);
          line-height: 1.5;
        }

        /* ── Dashboard preview ── */
        .d2-preview-section { padding: 5rem 2rem; max-width: 1280px; margin: 0 auto; }
        .d2-dashboard {
          background: var(--d2-panel);
          border: 1px solid var(--d2-border);
          overflow: hidden;
        }
        .d2-dashboard-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0.75rem 1.25rem;
          background: rgba(7,9,11,0.7);
          border-bottom: 1px solid var(--d2-border-dim);
        }
        .d2-dashboard-title-row {
          display: flex; align-items: center; gap: 0.5rem;
        }
        .d2-dashboard-meta {
          display: flex; align-items: center; gap: 0.5rem;
        }
        .d2-blink-dot {
          width: 6px; height: 6px;
          border-radius: 50%;
          display: inline-block;
          transition: opacity 0.15s;
        }
        .d2-dashboard-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 0;
        }
        @media (max-width: 700px) {
          .d2-dashboard-grid { grid-template-columns: 1fr; }
        }
        .d2-dash-section {
          padding: 1.5rem 1.5rem;
          border-right: 1px solid var(--d2-border-dim);
          border-bottom: 1px solid var(--d2-border-dim);
        }
        .d2-dash-section:nth-child(2n) { border-right: none; }
        .d2-dash-section-label {
          font-family: "JetBrains Mono", ui-monospace, monospace;
          font-size: 0.62rem;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          border-left: 2px solid;
          padding-left: 0.6rem;
          margin-bottom: 0.75rem;
          display: flex;
          align-items: center;
          gap: 0.4rem;
        }
        .d2-inline-dot { flex-shrink: 0; }
        .d2-dash-line {
          font-family: "IBM Plex Sans", ui-sans-serif, sans-serif;
          font-size: 0.82rem;
          color: var(--d2-text);
          line-height: 1.65;
          opacity: 0.85;
        }
        .d2-dashboard-footer {
          display: flex;
          justify-content: space-between;
          padding: 0.65rem 1.25rem;
          border-top: 1px solid var(--d2-border-dim);
          font-family: "JetBrains Mono", ui-monospace, monospace;
          font-size: 0.6rem;
          letter-spacing: 0.07em;
        }

        /* ── Testimonials ── */
        .d2-testimonials-section { padding: 5rem 2rem; max-width: 1280px; margin: 0 auto; }
        .d2-terminal-block {
          background: rgba(7,9,11,0.8);
          border: 1px solid var(--d2-border-dim);
          padding: 1.5rem 1.75rem;
          font-family: "JetBrains Mono", ui-monospace, monospace;
          font-size: 0.75rem;
          line-height: 1.8;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
        }
        @media (max-width: 700px) {
          .d2-terminal-block { grid-template-columns: 1fr; }
        }
        .d2-testimony-prompt { color: var(--d2-green); margin-bottom: 0.25rem; }
        .d2-testimony-text {
          color: var(--d2-text);
          margin-left: 0.75rem;
          font-style: italic;
          margin-bottom: 0.5rem;
        }
        .d2-testimony-author { color: var(--d2-dim); margin-left: 0.75rem; }

        /* ── CTA section ── */
        .d2-cta-section {
          padding: 6rem 2rem;
          max-width: 1280px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
        }
        @media (max-width: 800px) {
          .d2-cta-section { grid-template-columns: 1fr; padding: 4rem 1.25rem; gap: 2rem; }
        }
        .d2-cta-headline {
          font-family: "Chakra Petch", ui-sans-serif, sans-serif;
          font-size: clamp(1.8rem, 3.5vw, 3rem);
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: -0.01em;
          line-height: 1.1;
          color: #e8f0ec;
          margin-bottom: 1rem;
        }
        .d2-cta-sub {
          font-size: 0.95rem;
          color: var(--d2-dim);
          line-height: 1.65;
        }

        /* ── Footer ── */
        .d2-footer {
          border-top: 1px solid var(--d2-border-dim);
          background: var(--d2-panel);
          padding: 2rem 2rem;
        }
        .d2-footer-inner {
          max-width: 1280px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 1rem;
          font-family: "JetBrains Mono", ui-monospace, monospace;
          font-size: 0.62rem;
          letter-spacing: 0.09em;
          color: var(--d2-dim);
        }
        .d2-footer-logo {
          font-family: "Chakra Petch", ui-sans-serif, sans-serif;
          font-size: 0.9rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--d2-green);
          text-shadow: var(--d2-glow-sm);
        }
        .d2-footer-meta { display: flex; gap: 2rem; flex-wrap: wrap; }
        .d2-footer-sys { text-align: right; }

        /* ── Glow flicker on section labels ── */
        @keyframes d2-flicker {
          0%, 96%, 100% { opacity: 1; }
          97% { opacity: 0.7; }
          98% { opacity: 1; }
          99% { opacity: 0.6; }
        }
        .d2-section-title {
          animation: ${reduced ? "none" : "d2-flicker 7s ease-in-out infinite"};
        }
      `}</style>

      <div className="d2-root">
        <div className="d2-content">

          {/* ── STATUS BAR ── */}
          <div className="d2-statusbar">
            <div className="d2-statusbar-left">
              <span className="d2-status-online">SYSTEM: ONLINE</span>
              <span className="d2-version">ratio-engine v2.4.1</span>
              <span className="d2-version d2-nav-link" style={{ display: "flex", alignItems: "center", gap: "0.3rem" }}>
                <Activity size={10} /> ENGINE: ACTIVE
              </span>
            </div>
            <div className="d2-statusbar-right">
              <span className="d2-clock font-jetbrains">
                <LiveClock />
              </span>
              <span className="d2-version">UTC</span>
            </div>
          </div>

          {/* ── HERO ── */}
          <div className="d2-hero">
            {/* Left: headline + CTA */}
            <div>
              <motion.div
                className="d2-eyebrow"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: reduced ? 0 : 0.5, delay: reduced ? 0 : 0.1 }}
              >
                RATIO READER — READING ENGINE
              </motion.div>

              <motion.h1
                className="d2-hero-headline"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: reduced ? 0 : 0.6, delay: reduced ? 0 : 0.2 }}
              >
                Dense docs.
                <span className="d2-headline-accent">Distilled</span>
                Intelligence.
              </motion.h1>

              <motion.p
                className="d2-hero-sub"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: reduced ? 0 : 0.5, delay: reduced ? 0 : 0.35 }}
              >
                Upload any PDF. Ratio's reading engine parses every page,
                extracts what matters, and surfaces structured summaries,
                margin hints, key quotes, and deep insights — in under 30 seconds.
              </motion.p>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: reduced ? 0 : 0.5, delay: reduced ? 0 : 0.5 }}
              >
                <div className="d2-command-line">
                  <span>$</span>
                  <span>ratio --parse your-document.pdf</span>
                </div>

                <div
                  className={`d2-upload-zone ${dragging ? "active" : ""}`}
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  onDrop={handleDrop}
                >
                  <Upload size={20} color="var(--d2-green)" />
                  <div className="d2-upload-label">
                    <strong>DROP PDF HERE OR CLICK TO BROWSE</strong>
                    supports pdf · max 200mb · encrypted in transit
                  </div>
                </div>

                <div className="d2-cta-group">
                  <button className="d2-cta-primary">
                    <ChevronRight size={14} />
                    Run your first document
                  </button>
                  <button className="d2-cta-secondary">
                    <ArrowRight size={12} />
                    View a sample output
                  </button>
                </div>
              </motion.div>
            </div>

            {/* Right: terminal + parse panel */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: reduced ? 0 : 0.65, delay: reduced ? 0 : 0.3 }}
            >
              <TerminalWindow reduced={reduced} />
              <ParsePanel />
            </motion.div>
          </div>

          {/* ── METRICS STRIP ── */}
          <div className="d2-metrics">
            <div className="d2-metric-item">
              <span className="d2-metric-number">
                <CountUp target={180} suffix="K+" />
              </span>
              <span className="d2-metric-desc">Pages distilled</span>
            </div>
            <div className="d2-metric-item">
              <span className="d2-metric-number amber">
                <CountUp target={4} suffix=" hrs" />
              </span>
              <span className="d2-metric-desc">Saved per reader / week</span>
            </div>
            <div className="d2-metric-item">
              <span className="d2-metric-number">
                <CountUp target={30} suffix="s" />
              </span>
              <span className="d2-metric-desc">Avg. doc processing time</span>
            </div>
            <div className="d2-metric-item">
              <span className="d2-metric-number">
                <CountUp target={99.7} suffix="%" decimals={1} />
              </span>
              <span className="d2-metric-desc">Parse accuracy rate</span>
            </div>
          </div>

          {/* ── MODULES ── */}
          <div className="d2-modules-section">
            <div className="d2-section-header">
              <span className="d2-section-title">// ACTIVE MODULES</span>
              <span className="d2-section-line" />
              <span className="d2-badge-green">4 / 4 ONLINE</span>
            </div>

            <div className="d2-modules-grid">
              <ModuleCard
                icon={<FileText size={20} />}
                title="Smart Summary"
                status="ACTIVE"
                readout="output: structured · scannable · hierarchical"
                body="Ratio distills any PDF to its most important points — organized, ranked, and instantly navigable. No noise. Just signal."
                delay={0}
              />
              <ModuleCard
                icon={<BookMarked size={20} />}
                title="Margin Hints"
                status="ACTIVE"
                readout="mode: contextual · inline · passage-aware"
                body="Contextual explanations that unlock dense passages as you read. Jargon decoded, references resolved, context added."
                delay={0.08}
              />
              <ModuleCard
                icon={<MessageSquareQuote size={20} />}
                title="Key Quotes"
                status="ACTIVE"
                readout="index: verbatim · page-referenced · ranked"
                body="The most important verbatim lines, surfaced with page references. Cite accurately. Miss nothing that matters."
                delay={0.16}
              />
              <ModuleCard
                icon={<Lightbulb size={20} />}
                title="Insights"
                status="ACTIVE"
                readout="engine: cross-doc · causal · forward-looking"
                body="Connections, takeaways, and 'why it matters' — the synthesis that goes beyond the page and changes how you think about the material."
                delay={0.24}
              />
            </div>
          </div>

          {/* ── PIPELINE ── */}
          <div className="d2-pipeline-section">
            <div className="d2-section-header">
              <span className="d2-section-title">// HOW IT WORKS</span>
              <span className="d2-section-line" />
            </div>

            <div className="d2-pipeline-row">
              <PipelineStep
                step="01 — INGEST"
                label="Drop your PDF"
                sub="Any document. Up to 200 MB. Encrypted on upload."
                delay={0}
              />
              <div className="d2-pipeline-connector" />
              <PipelineStep
                step="02 — ANALYZE"
                label="Engine reads every page"
                sub="Structure map, semantic index, passage scoring, quote harvest."
                delay={0.18}
              />
              <div className="d2-pipeline-connector" />
              <PipelineStep
                step="03 — SYNTHESIZE"
                label="Get your readout"
                sub="Summary · Hints · Quotes · Insights — structured and ready."
                delay={0.36}
              />
            </div>
          </div>

          {/* ── PRODUCT PREVIEW / DASHBOARD ── */}
          <div className="d2-preview-section">
            <div className="d2-section-header">
              <span className="d2-section-title">// LIVE READOUT PREVIEW</span>
              <span className="d2-section-line" />
              <span className="d2-badge-green">SAMPLE OUTPUT</span>
            </div>
            <DashboardPreview />
          </div>

          {/* ── TESTIMONIALS ── */}
          <div className="d2-testimonials-section">
            <div className="d2-section-header">
              <span className="d2-section-title">// USER LOGS</span>
              <span className="d2-section-line" />
            </div>

            <div className="d2-terminal-block">
              <div>
                <div className="d2-testimony-prompt">
                  &gt; query --user "Mara Santos, PhD Candidate"
                </div>
                <div className="d2-testimony-text">
                  "I used to spend a full afternoon on each paper. Ratio cuts that
                  to 20 minutes — and the margin hints are like having a supervisor
                  sitting next to me. I've recommended it to my entire cohort."
                </div>
                <div className="d2-testimony-author">
                  — Mara Santos, Computational Biology PhD · Stanford
                </div>
              </div>
              <div>
                <div className="d2-testimony-prompt">
                  &gt; query --user "Daniel Obi, Investment Analyst"
                </div>
                <div className="d2-testimony-text">
                  "We process 40–60 earnings documents a week. Ratio halved our
                  prep time and the Key Quotes feature alone saves us from
                  misquoting management commentary in our models."
                </div>
                <div className="d2-testimony-author">
                  — Daniel Obi, Analyst · Meridian Capital Partners
                </div>
              </div>
            </div>
          </div>

          {/* ── BOTTOM CTA ── */}
          <div className="d2-cta-section">
            <div>
              <div className="d2-eyebrow">INITIALIZE ENGINE</div>
              <h2 className="d2-cta-headline">
                Your next document,<br />
                <span style={{ color: "var(--d2-green)", textShadow: "var(--d2-glow)" }}>
                  understood in minutes.
                </span>
              </h2>
              <p className="d2-cta-sub">
                Join students, researchers, and professionals who read less
                and understand more. No subscription required to start.
              </p>
            </div>
            <div>
              <div className="d2-command-line" style={{ marginBottom: "1.25rem" }}>
                <span>$</span>
                <span>ratio --init --no-account-required</span>
              </div>
              <div
                className="d2-upload-zone"
                style={{ marginBottom: "1.5rem" }}
              >
                <Cpu size={20} color="var(--d2-green)" />
                <div className="d2-upload-label">
                  <strong>READY TO PARSE — DROP PDF OR CLICK</strong>
                  free first document · no credit card
                </div>
              </div>
              <div className="d2-cta-group">
                <button className="d2-cta-primary">
                  <Zap size={14} />
                  Run your first document
                </button>
                <button className="d2-cta-secondary">
                  <ArrowRight size={12} />
                  View a sample output
                </button>
              </div>
            </div>
          </div>

          {/* ── FOOTER ── */}
          <footer className="d2-footer">
            <div className="d2-footer-inner">
              <span className="d2-footer-logo">Ratio</span>
              <div className="d2-footer-meta">
                <span>engine: v2.4.1</span>
                <span>parser: nlp-core-7</span>
                <span>uptime: 99.98%</span>
                <span>region: us-east-1</span>
              </div>
              <div className="d2-footer-sys">
                <div>© 2025 Ratio. All rights reserved.</div>
                <div style={{ marginTop: "0.25rem" }}>
                  SYS:OK · PARSER:OK · INDEX:OK
                </div>
              </div>
            </div>
          </footer>

        </div>
      </div>
    </>
  );
}
