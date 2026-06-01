import { useRef } from "react";
import { motion, useInView } from "motion/react";
import {
  Sparkles,
  BookOpen,
  Quote,
  Lightbulb,
  Upload,
  ArrowRight,
  ChevronRight,
} from "lucide-react";

/* ── Botanical SVG ornaments ── */
function LeafSprig({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M20 58 C20 58 20 10 20 4"
        stroke="#7c8a6b"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <path
        d="M20 40 C12 34 6 24 10 14 C14 4 20 4 20 4 C20 4 26 4 30 14 C34 24 28 34 20 40Z"
        fill="#7c8a6b"
        fillOpacity="0.28"
        stroke="#7c8a6b"
        strokeWidth="0.8"
        strokeLinejoin="round"
      />
      <path
        d="M20 30 C16 26 15 20 16 16"
        stroke="#7c8a6b"
        strokeWidth="0.7"
        strokeLinecap="round"
        opacity="0.6"
      />
      <path
        d="M20 30 C24 26 25 20 24 16"
        stroke="#7c8a6b"
        strokeWidth="0.7"
        strokeLinecap="round"
        opacity="0.6"
      />
    </svg>
  );
}

function SunOrnament({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <circle cx="24" cy="24" r="8" fill="#c97f5a" fillOpacity="0.35" stroke="#c97f5a" strokeWidth="1" />
      {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
        <line
          key={i}
          x1={24 + 11 * Math.cos((angle * Math.PI) / 180)}
          y1={24 + 11 * Math.sin((angle * Math.PI) / 180)}
          x2={24 + 18 * Math.cos((angle * Math.PI) / 180)}
          y2={24 + 18 * Math.sin((angle * Math.PI) / 180)}
          stroke="#c97f5a"
          strokeWidth="1.2"
          strokeLinecap="round"
          opacity="0.55"
        />
      ))}
    </svg>
  );
}

function BranchOrnament({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 80 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M8 42 C20 38 32 28 40 20 C48 12 60 8 72 10"
        stroke="#7c8a6b"
        strokeWidth="1.3"
        strokeLinecap="round"
        opacity="0.6"
      />
      <path
        d="M28 30 C24 22 18 16 14 10"
        stroke="#7c8a6b"
        strokeWidth="1"
        strokeLinecap="round"
        opacity="0.5"
      />
      <ellipse cx="14" cy="10" rx="5" ry="7" transform="rotate(-30 14 10)" fill="#7c8a6b" fillOpacity="0.25" stroke="#7c8a6b" strokeWidth="0.7" />
      <path
        d="M48 18 C52 12 54 6 52 2"
        stroke="#7c8a6b"
        strokeWidth="1"
        strokeLinecap="round"
        opacity="0.5"
      />
      <ellipse cx="52" cy="2" rx="4" ry="6" transform="rotate(15 52 2)" fill="#7c8a6b" fillOpacity="0.25" stroke="#7c8a6b" strokeWidth="0.7" />
      <ellipse cx="26" cy="36" rx="3.5" ry="5" transform="rotate(-10 26 36)" fill="#7c8a6b" fillOpacity="0.2" stroke="#7c8a6b" strokeWidth="0.6" />
    </svg>
  );
}

/* ── Fade-up animation wrapper ── */
function FadeUp({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ── Step numeral with botanical icon ── */
function StepNumeral({
  num,
  icon,
}: {
  num: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="d3-step-numeral relative flex h-14 w-14 items-center justify-center">
      <div
        className="absolute inset-0 rounded-full"
        style={{ background: "rgba(124,138,107,0.13)", border: "1.5px solid rgba(124,138,107,0.25)" }}
      />
      <span className="font-instrument text-xl italic" style={{ color: "#55624a" }}>
        {num}
      </span>
      <span className="absolute -top-2 -right-2 text-[#7c8a6b]">{icon}</span>
    </div>
  );
}

/* ── Pill chip ── */
function Chip({ children, color = "sage" }: { children: React.ReactNode; color?: "sage" | "clay" | "butter" }) {
  const styles = {
    sage: { background: "rgba(124,138,107,0.14)", color: "#55624a", border: "1px solid rgba(124,138,107,0.25)" },
    clay: { background: "rgba(201,127,90,0.12)", color: "#a05f38", border: "1px solid rgba(201,127,90,0.25)" },
    butter: { background: "rgba(233,217,168,0.5)", color: "#7a6a3a", border: "1px solid rgba(201,175,100,0.3)" },
  };
  return (
    <span
      className="inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-hanken font-medium tracking-wide"
      style={styles[color]}
    >
      {children}
    </span>
  );
}

/* ── Product preview ── */
function ProductPreview() {
  return (
    <div
      className="relative w-full max-w-md rounded-[2rem] p-1"
      style={{
        background: "linear-gradient(145deg, rgba(233,217,168,0.4) 0%, rgba(243,237,225,0.8) 100%)",
        boxShadow: "0 24px 80px rgba(85,98,74,0.14), 0 4px 20px rgba(85,98,74,0.08)",
        border: "1px solid rgba(200,188,160,0.4)",
      }}
    >
      {/* Window chrome */}
      <div
        className="rounded-[1.75rem] overflow-hidden"
        style={{ background: "#f8f4ec" }}
      >
        <div className="flex items-center gap-2 px-5 py-3" style={{ borderBottom: "1px solid rgba(200,188,160,0.3)" }}>
          <span className="h-2.5 w-2.5 rounded-full" style={{ background: "#c97f5a", opacity: 0.7 }} />
          <span className="h-2.5 w-2.5 rounded-full" style={{ background: "#e9d9a8", opacity: 0.9 }} />
          <span className="h-2.5 w-2.5 rounded-full" style={{ background: "#7c8a6b", opacity: 0.7 }} />
          <span
            className="ml-3 rounded-full px-4 py-1 text-xs font-hanken"
            style={{ background: "rgba(124,138,107,0.12)", color: "#7c8a6b" }}
          >
            Working Capital in the Modern Era.pdf
          </span>
        </div>

        <div className="p-5 space-y-4">
          {/* Summary section */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Chip color="sage">
                <Sparkles size={10} />
                Smart Summary
              </Chip>
            </div>
            <div
              className="rounded-xl p-4 space-y-2"
              style={{ background: "rgba(233,217,168,0.35)", border: "1px solid rgba(200,180,120,0.25)" }}
            >
              <p className="font-hanken text-sm leading-relaxed" style={{ color: "#36352f" }}>
                This report argues that traditional working capital metrics have become unreliable predictors of corporate health due to supply-chain fragmentation and just-in-time inventory shifts after 2020.
              </p>
              <div className="flex gap-1.5 flex-wrap">
                {["Supply Chain", "Cash Flow", "Post-Pandemic", "CFO Insight"].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full px-2 py-0.5 text-[10px] font-hanken"
                    style={{ background: "rgba(124,138,107,0.15)", color: "#55624a" }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Margin hint */}
          <div className="flex gap-3">
            <div
              className="w-1 rounded-full flex-shrink-0"
              style={{ background: "#c97f5a", opacity: 0.5 }}
            />
            <div>
              <p className="font-hanken text-[11px] font-semibold uppercase tracking-widest mb-1" style={{ color: "#c97f5a" }}>
                Margin Hint
              </p>
              <p className="font-hanken text-xs leading-relaxed" style={{ color: "#5a5040" }}>
                "Days Sales Outstanding" here means the average time to collect payment — a rising DSO signals customers are paying slower, straining liquidity.
              </p>
            </div>
          </div>

          {/* Key quote */}
          <div
            className="rounded-xl px-4 py-3"
            style={{ background: "rgba(85,98,74,0.07)", border: "1px solid rgba(85,98,74,0.1)" }}
          >
            <p className="font-instrument italic text-sm leading-relaxed" style={{ color: "#36352f" }}>
              "The companies that survived the 2022 liquidity crunch were not the most profitable — they were the most liquid."
            </p>
            <p className="font-hanken text-[10px] mt-2" style={{ color: "#7c8a6b" }}>
              — p. 47, emphasis added
            </p>
          </div>

          {/* Insight chip */}
          <div
            className="flex items-start gap-3 rounded-xl p-3"
            style={{ background: "rgba(201,127,90,0.08)", border: "1px solid rgba(201,127,90,0.15)" }}
          >
            <Lightbulb size={14} className="mt-0.5 flex-shrink-0" style={{ color: "#c97f5a" }} />
            <p className="font-hanken text-xs leading-relaxed" style={{ color: "#5a3e2a" }}>
              <strong>Why it matters:</strong> As rates stay elevated, cash-conversion efficiency — not revenue — may become the defining metric for creditworthiness.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Main component ── */
export function Design3() {
  return (
    <div
      className="relative min-h-screen overflow-x-hidden font-hanken"
      style={{ background: "#f3ede1", color: "#36352f" }}
    >
      {/* ── Scoped styles ── */}
      <style>{`
        @media (prefers-reduced-motion: no-preference) {
          .d3-blob-1 {
            animation: d3-drift1 18s ease-in-out infinite;
          }
          .d3-blob-2 {
            animation: d3-drift2 22s ease-in-out infinite;
          }
          .d3-blob-3 {
            animation: d3-drift3 26s ease-in-out infinite;
          }
          .d3-hero-breathe {
            animation: d3-breathe 7s ease-in-out infinite;
          }
        }

        @keyframes d3-drift1 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33%       { transform: translate(30px, -20px) scale(1.03); }
          66%       { transform: translate(-15px, 25px) scale(0.97); }
        }
        @keyframes d3-drift2 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          40%       { transform: translate(-25px, 18px) scale(1.04); }
          70%       { transform: translate(20px, -12px) scale(0.98); }
        }
        @keyframes d3-drift3 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50%       { transform: translate(18px, 22px) scale(1.02); }
        }
        @keyframes d3-breathe {
          0%, 100% { transform: scale(1) rotate(0deg); }
          50%       { transform: scale(1.04) rotate(1.5deg); }
        }

        .d3-card-hover {
          transition: transform 0.4s cubic-bezier(0.22,1,0.36,1), box-shadow 0.4s ease;
        }
        .d3-card-hover:hover {
          transform: translateY(-6px);
          box-shadow: 0 28px 60px rgba(85,98,74,0.14), 0 4px 16px rgba(85,98,74,0.07);
        }
      `}</style>

      {/* ── Background blobs & light ── */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden" aria-hidden="true">
        {/* sunlight glow */}
        <div
          className="absolute -top-32 -right-32 h-[650px] w-[650px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(233,217,168,0.55) 0%, transparent 70%)",
          }}
        />
        {/* blob 1 — sage */}
        <div
          className="d3-blob-1 absolute top-[15%] left-[-12%] h-[500px] w-[500px] opacity-40"
          style={{
            background: "radial-gradient(ellipse, rgba(124,138,107,0.45) 0%, transparent 70%)",
            borderRadius: "60% 40% 70% 30% / 50% 60% 40% 50%",
          }}
        />
        {/* blob 2 — cream warm */}
        <div
          className="d3-blob-2 absolute top-[50%] right-[-10%] h-[600px] w-[560px] opacity-35"
          style={{
            background: "radial-gradient(ellipse, rgba(201,127,90,0.25) 0%, transparent 65%)",
            borderRadius: "40% 60% 30% 70% / 60% 40% 50% 50%",
          }}
        />
        {/* blob 3 — butter */}
        <div
          className="d3-blob-3 absolute bottom-[10%] left-[20%] h-[400px] w-[480px] opacity-30"
          style={{
            background: "radial-gradient(ellipse, rgba(233,217,168,0.6) 0%, transparent 70%)",
            borderRadius: "70% 30% 50% 50% / 40% 60% 40% 60%",
          }}
        />
      </div>

      {/* ── Nav ── */}
      <header className="relative z-10">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6 md:px-10">
          <div className="flex items-center gap-2.5">
            <span
              className="flex h-8 w-8 items-center justify-center rounded-full"
              style={{ background: "#55624a" }}
            >
              <BookOpen size={14} className="text-[#f3ede1]" />
            </span>
            <span className="font-instrument text-xl" style={{ color: "#36352f" }}>
              Ratio <em className="italic">Reader</em>
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {["Features", "How it works", "Examples"].map((link) => (
              <a
                key={link}
                href="#"
                className="font-hanken text-sm transition-colors"
                style={{ color: "#7c8a6b" }}
                onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#36352f")}
                onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "#7c8a6b")}
              >
                {link}
              </a>
            ))}
          </div>

          <a
            href="#"
            className="rounded-full px-5 py-2.5 text-sm font-medium transition-all font-hanken"
            style={{
              background: "#55624a",
              color: "#f3ede1",
              boxShadow: "0 2px 12px rgba(85,98,74,0.25)",
            }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "#3f4a37"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "#55624a"; }}
          >
            Begin reading
          </a>
        </nav>
      </header>

      {/* ── Hero ── */}
      <section className="relative z-10 mx-auto max-w-6xl px-6 pt-10 pb-24 md:px-10 md:pt-16 md:pb-32">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:items-center">
          {/* Left copy */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <Chip color="clay">
                <SunOrnament className="h-3 w-3" />
                Dense documents, distilled calmly
              </Chip>
            </motion.div>

            <motion.h1
              className="font-instrument mt-6 text-5xl leading-[1.1] md:text-6xl lg:text-7xl"
              style={{ color: "#36352f" }}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            >
              Read less,
              <br />
              <em className="italic" style={{ color: "#55624a" }}>understand</em>
              <br />
              more.
            </motion.h1>

            <motion.p
              className="mt-6 max-w-md text-lg leading-relaxed font-hanken"
              style={{ color: "#6a6050" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            >
              Upload any PDF and Ratio distills it into a clear summary, contextual hints,
              key quotes, and insights — so you absorb what matters without the noise.
            </motion.p>

            <motion.div
              className="mt-9 flex flex-wrap gap-3"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
            >
              <a
                href="#"
                className="group flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium font-hanken transition-all"
                style={{ background: "#c97f5a", color: "#fff", boxShadow: "0 4px 20px rgba(201,127,90,0.3)" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "#b06b44"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "#c97f5a"; }}
              >
                <Upload size={15} />
                Begin reading — free
                <ChevronRight size={14} className="transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href="#"
                className="flex items-center gap-2 rounded-full border px-6 py-3.5 text-sm font-medium font-hanken transition-all"
                style={{ borderColor: "rgba(85,98,74,0.35)", color: "#55624a" }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "#55624a";
                  (e.currentTarget as HTMLElement).style.background = "rgba(85,98,74,0.06)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(85,98,74,0.35)";
                  (e.currentTarget as HTMLElement).style.background = "transparent";
                }}
              >
                See a sample summary
                <ArrowRight size={14} />
              </a>
            </motion.div>

            {/* Social proof bar */}
            <motion.div
              className="mt-10 flex flex-wrap gap-x-6 gap-y-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              {[
                "180,000+ pages distilled",
                "~4 hrs saved weekly",
                "Under 30 sec per doc",
              ].map((stat) => (
                <span key={stat} className="flex items-center gap-1.5 text-xs font-hanken" style={{ color: "#7c8a6b" }}>
                  <LeafSprig className="h-4 w-4" />
                  {stat}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Right preview */}
          <motion.div
            className="d3-hero-breathe flex justify-center md:justify-end"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          >
            <ProductPreview />
          </motion.div>
        </div>
      </section>

      {/* ── How it works ── */}
      <section className="relative z-10 mx-auto max-w-5xl px-6 py-20 md:px-10 md:py-28">
        <FadeUp className="mb-14 text-center">
          <Chip color="sage">
            <LeafSprig className="h-3 w-3" />
            Simple process
          </Chip>
          <h2
            className="font-instrument mt-4 text-4xl md:text-5xl"
            style={{ color: "#36352f" }}
          >
            Three quiet steps
          </h2>
          <p
            className="mx-auto mt-3 max-w-sm text-base leading-relaxed font-hanken"
            style={{ color: "#7c8a6b" }}
          >
            No setup, no subscriptions. Just your document and the understanding that follows.
          </p>
        </FadeUp>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {[
            {
              num: "01",
              icon: <LeafSprig className="h-5 w-5" />,
              title: "Drop in your PDF",
              body: "Upload any document — a research paper, a legal brief, a business report. Ratio accepts them all, however dense.",
            },
            {
              num: "02",
              icon: <SunOrnament className="h-5 w-5" />,
              title: "Ratio reads every page",
              body: "In under 30 seconds, Ratio analyses the full document — structure, arguments, evidence and tone — with care.",
            },
            {
              num: "03",
              icon: <BranchOrnament className="h-6 w-6" />,
              title: "Receive your digest",
              body: "A structured summary, margin hints for hard passages, key quotes with page refs, and insights you can act on.",
            },
          ].map((step, i) => (
            <FadeUp key={step.num} delay={i * 0.12}>
              <div
                className="d3-card-hover h-full rounded-3xl p-8"
                style={{
                  background: "rgba(255,252,245,0.7)",
                  border: "1px solid rgba(200,188,160,0.35)",
                  boxShadow: "0 4px 24px rgba(85,98,74,0.07)",
                  backdropFilter: "blur(8px)",
                }}
              >
                <StepNumeral num={step.num} icon={step.icon} />
                <h3 className="font-instrument mt-5 text-xl" style={{ color: "#36352f" }}>
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed font-hanken" style={{ color: "#7c8a6b" }}>
                  {step.body}
                </p>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* ── Four Pillars ── */}
      <section className="relative z-10 mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-24">
        <FadeUp className="mb-16 text-center">
          <Chip color="butter">What Ratio gives you</Chip>
          <h2 className="font-instrument mt-4 text-4xl md:text-5xl" style={{ color: "#36352f" }}>
            Four pillars of <em className="italic">clear</em> reading
          </h2>
        </FadeUp>

        <div className="space-y-10">
          {/* Pillar 1 — Smart Summary */}
          <FadeUp>
            <div
              className="d3-card-hover grid grid-cols-1 gap-8 rounded-3xl p-8 md:grid-cols-2 md:p-12"
              style={{
                background: "rgba(255,252,245,0.75)",
                border: "1px solid rgba(200,188,160,0.35)",
                boxShadow: "0 6px 30px rgba(85,98,74,0.08)",
              }}
            >
              <div className="flex flex-col justify-center">
                <Chip color="sage">
                  <Sparkles size={11} />
                  Smart Summary
                </Chip>
                <h3 className="font-instrument mt-4 text-3xl" style={{ color: "#36352f" }}>
                  The whole argument,
                  <br />
                  <em className="italic">in minutes.</em>
                </h3>
                <p className="mt-3 text-sm leading-relaxed font-hanken" style={{ color: "#6a6050" }}>
                  Ratio reads your document's full structure — not just the abstract — and builds a scannable, hierarchical summary that respects the author's intent while surfacing what you actually need to know.
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {["Hierarchical", "Scannable", "Structure-aware"].map((tag) => (
                    <Chip key={tag} color="sage">{tag}</Chip>
                  ))}
                </div>
              </div>
              <div className="flex items-center justify-center">
                {/* Summary illustration */}
                <div
                  className="w-full max-w-xs rounded-2xl p-5 space-y-3"
                  style={{ background: "rgba(233,217,168,0.3)", border: "1px solid rgba(200,180,120,0.25)" }}
                >
                  {[
                    { w: "w-full", opacity: "opacity-100", size: "h-3", bg: "#55624a" },
                    { w: "w-5/6", opacity: "opacity-75", size: "h-2.5", bg: "#7c8a6b" },
                    { w: "w-4/5", opacity: "opacity-65", size: "h-2.5", bg: "#7c8a6b" },
                    { w: "w-full", opacity: "opacity-100", size: "h-3 mt-3", bg: "#55624a" },
                    { w: "w-3/4", opacity: "opacity-75", size: "h-2.5", bg: "#7c8a6b" },
                    { w: "w-5/6", opacity: "opacity-60", size: "h-2", bg: "#9aa888" },
                  ].map((line, i) => (
                    <div key={i} className={`${line.w} ${line.size} rounded-full`} style={{ background: line.bg, opacity: parseFloat(line.opacity.replace("opacity-", "")) / 100 }} />
                  ))}
                </div>
              </div>
            </div>
          </FadeUp>

          {/* Pillar 2 — Margin Hints */}
          <FadeUp delay={0.05}>
            <div
              className="d3-card-hover grid grid-cols-1 gap-8 rounded-3xl p-8 md:grid-cols-2 md:p-12"
              style={{
                background: "rgba(255,252,245,0.75)",
                border: "1px solid rgba(200,188,160,0.35)",
                boxShadow: "0 6px 30px rgba(85,98,74,0.08)",
              }}
            >
              <div className="order-2 flex items-center justify-center md:order-1">
                {/* Margin hint illustration */}
                <div className="w-full max-w-xs space-y-3">
                  <div
                    className="rounded-xl p-4"
                    style={{ background: "rgba(255,252,245,0.9)", border: "1px solid rgba(200,188,160,0.3)" }}
                  >
                    <div className="space-y-1.5">
                      {[100, 90, 80, 95].map((w, i) => (
                        <div key={i} className="h-2 rounded-full" style={{ width: `${w}%`, background: "#d8d0bc", opacity: 0.6 }} />
                      ))}
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <div
                      className="w-1 rounded-full flex-shrink-0"
                      style={{ background: "#c97f5a", minHeight: "100%" }}
                    />
                    <div
                      className="flex-1 rounded-xl p-3"
                      style={{ background: "rgba(201,127,90,0.1)", border: "1px solid rgba(201,127,90,0.2)" }}
                    >
                      <p className="font-hanken text-[11px] font-semibold uppercase tracking-wider mb-1" style={{ color: "#c97f5a" }}>Margin Hint</p>
                      <div className="space-y-1">
                        {[85, 70].map((w, i) => (
                          <div key={i} className="h-1.5 rounded-full" style={{ width: `${w}%`, background: "#c97f5a", opacity: 0.35 }} />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="order-1 flex flex-col justify-center md:order-2">
                <Chip color="clay">
                  <BookOpen size={11} />
                  Margin Hints
                </Chip>
                <h3 className="font-instrument mt-4 text-3xl" style={{ color: "#36352f" }}>
                  The expert at your
                  <br />
                  <em className="italic">elbow.</em>
                </h3>
                <p className="mt-3 text-sm leading-relaxed font-hanken" style={{ color: "#6a6050" }}>
                  Dense jargon, buried assumptions, technical digressions — Ratio places gentle contextual notes exactly where you need them, so no difficult passage slows you down.
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {["Contextual", "Jargon decoded", "Always relevant"].map((tag) => (
                    <Chip key={tag} color="clay">{tag}</Chip>
                  ))}
                </div>
              </div>
            </div>
          </FadeUp>

          {/* Pillar 3 — Key Quotes */}
          <FadeUp delay={0.05}>
            <div
              className="d3-card-hover grid grid-cols-1 gap-8 rounded-3xl p-8 md:grid-cols-2 md:p-12"
              style={{
                background: "rgba(255,252,245,0.75)",
                border: "1px solid rgba(200,188,160,0.35)",
                boxShadow: "0 6px 30px rgba(85,98,74,0.08)",
              }}
            >
              <div className="flex flex-col justify-center">
                <Chip color="butter">
                  <Quote size={11} />
                  Key Quotes
                </Chip>
                <h3 className="font-instrument mt-4 text-3xl" style={{ color: "#36352f" }}>
                  The lines that
                  <br />
                  <em className="italic">carry the weight.</em>
                </h3>
                <p className="mt-3 text-sm leading-relaxed font-hanken" style={{ color: "#6a6050" }}>
                  Ratio identifies the sentences your author most intended you to remember — pulled verbatim, with precise page references, ready to cite, share, or return to.
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {["Verbatim", "Citable", "Page-referenced"].map((tag) => (
                    <Chip key={tag} color="butter">{tag}</Chip>
                  ))}
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="w-full max-w-xs space-y-3">
                  {[
                    '"The margin of safety is the difference between price and value — nothing more, nothing less."',
                    '"Every risk model is wrong. Some are useful."',
                  ].map((q, i) => (
                    <div
                      key={i}
                      className="rounded-2xl px-4 py-3"
                      style={{
                        background: i === 0 ? "rgba(85,98,74,0.07)" : "rgba(233,217,168,0.35)",
                        border: `1px solid ${i === 0 ? "rgba(85,98,74,0.12)" : "rgba(200,180,120,0.3)"}`,
                      }}
                    >
                      <p className="font-instrument italic text-sm leading-snug" style={{ color: "#36352f" }}>
                        {q}
                      </p>
                      <p className="font-hanken text-[10px] mt-2" style={{ color: "#7c8a6b" }}>
                        — p. {i === 0 ? "12" : "38"}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </FadeUp>

          {/* Pillar 4 — Insights */}
          <FadeUp delay={0.05}>
            <div
              className="d3-card-hover grid grid-cols-1 gap-8 rounded-3xl p-8 md:grid-cols-2 md:p-12"
              style={{
                background: "rgba(255,252,245,0.75)",
                border: "1px solid rgba(200,188,160,0.35)",
                boxShadow: "0 6px 30px rgba(85,98,74,0.08)",
              }}
            >
              <div className="order-2 flex items-center justify-center md:order-1">
                <div className="w-full max-w-xs space-y-2.5">
                  {[
                    { label: "Connection", text: "Links the author's liquidity thesis to Buffett's margin of safety principle", color: "sage" as const },
                    { label: "Takeaway", text: "Cash conversion efficiency is the new creditworthiness metric", color: "clay" as const },
                    { label: "Why it matters", text: "Elevated rates make this analysis actionable for CFOs in Q3 planning", color: "butter" as const },
                  ].map((insight) => (
                    <div
                      key={insight.label}
                      className="flex items-start gap-3 rounded-2xl p-3.5"
                      style={{
                        background: insight.color === "sage" ? "rgba(85,98,74,0.07)" : insight.color === "clay" ? "rgba(201,127,90,0.08)" : "rgba(233,217,168,0.4)",
                        border: `1px solid ${insight.color === "sage" ? "rgba(85,98,74,0.12)" : insight.color === "clay" ? "rgba(201,127,90,0.15)" : "rgba(200,180,120,0.3)"}`,
                      }}
                    >
                      <Lightbulb size={13} className="mt-0.5 flex-shrink-0" style={{ color: insight.color === "sage" ? "#55624a" : insight.color === "clay" ? "#c97f5a" : "#a08030" }} />
                      <div>
                        <p className="font-hanken text-[10px] font-semibold uppercase tracking-wider mb-0.5" style={{ color: insight.color === "sage" ? "#55624a" : insight.color === "clay" ? "#c97f5a" : "#a08030" }}>
                          {insight.label}
                        </p>
                        <p className="font-hanken text-xs leading-relaxed" style={{ color: "#36352f" }}>{insight.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="order-1 flex flex-col justify-center md:order-2">
                <Chip color="sage">
                  <Lightbulb size={11} />
                  Insights
                </Chip>
                <h3 className="font-instrument mt-4 text-3xl" style={{ color: "#36352f" }}>
                  Beyond the page,
                  <br />
                  <em className="italic">toward meaning.</em>
                </h3>
                <p className="mt-3 text-sm leading-relaxed font-hanken" style={{ color: "#6a6050" }}>
                  Connections to adjacent ideas, takeaways worth remembering, and honest "why it matters" notes — Ratio thinks alongside you, not just for you.
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {["Connections", "Takeaways", "Perspective"].map((tag) => (
                    <Chip key={tag} color="sage">{tag}</Chip>
                  ))}
                </div>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── Testimonial panel ── */}
      <section className="relative z-10 mx-auto max-w-6xl px-6 py-16 md:px-10">
        <FadeUp>
          <div
            className="relative overflow-hidden rounded-3xl p-10 md:p-16"
            style={{
              background: "linear-gradient(135deg, #55624a 0%, #3f4a37 100%)",
              boxShadow: "0 20px 60px rgba(55,70,42,0.25)",
            }}
          >
            {/* Decorative branch */}
            <BranchOrnament className="absolute top-6 right-8 h-16 w-20 opacity-20" />
            <LeafSprig className="absolute bottom-8 left-10 h-16 w-10 opacity-15" />

            <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
              <div
                className="rounded-2xl p-6"
                style={{ background: "rgba(255,252,245,0.08)", border: "1px solid rgba(255,252,245,0.12)" }}
              >
                <div className="flex mb-4 gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} viewBox="0 0 12 12" className="h-3 w-3" fill="#e9d9a8" aria-hidden="true">
                      <polygon points="6,1 7.5,4.5 11,5 8.5,7.5 9,11 6,9.5 3,11 3.5,7.5 1,5 4.5,4.5" />
                    </svg>
                  ))}
                </div>
                <p
                  className="font-instrument italic text-lg leading-relaxed"
                  style={{ color: "#f3ede1" }}
                >
                  "I used to spend half my Sunday catching up on papers. Now Ratio gives me the signal and I read what actually matters. It's changed how I prepare for board meetings."
                </p>
                <div className="mt-5 flex items-center gap-3">
                  <div
                    className="h-9 w-9 rounded-full flex items-center justify-center font-instrument text-sm"
                    style={{ background: "rgba(233,217,168,0.2)", color: "#e9d9a8" }}
                  >
                    MH
                  </div>
                  <div>
                    <p className="font-hanken text-sm font-medium" style={{ color: "#e9d9a8" }}>
                      Margaret Hollis
                    </p>
                    <p className="font-hanken text-xs" style={{ color: "rgba(233,217,168,0.6)" }}>
                      Partner, Infrastructure Finance
                    </p>
                  </div>
                </div>
              </div>

              <div
                className="rounded-2xl p-6"
                style={{ background: "rgba(255,252,245,0.08)", border: "1px solid rgba(255,252,245,0.12)" }}
              >
                <div className="flex mb-4 gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} viewBox="0 0 12 12" className="h-3 w-3" fill="#e9d9a8" aria-hidden="true">
                      <polygon points="6,1 7.5,4.5 11,5 8.5,7.5 9,11 6,9.5 3,11 3.5,7.5 1,5 4.5,4.5" />
                    </svg>
                  ))}
                </div>
                <p
                  className="font-instrument italic text-lg leading-relaxed"
                  style={{ color: "#f3ede1" }}
                >
                  "As a PhD student I'm reading constantly. Ratio's margin hints are like having a senior researcher annotate each paper before I dive in — they make the hard parts land."
                </p>
                <div className="mt-5 flex items-center gap-3">
                  <div
                    className="h-9 w-9 rounded-full flex items-center justify-center font-instrument text-sm"
                    style={{ background: "rgba(233,217,168,0.2)", color: "#e9d9a8" }}
                  >
                    OR
                  </div>
                  <div>
                    <p className="font-hanken text-sm font-medium" style={{ color: "#e9d9a8" }}>
                      Omar Ranjit
                    </p>
                    <p className="font-hanken text-xs" style={{ color: "rgba(233,217,168,0.6)" }}>
                      Doctoral Researcher, Computational Biology
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </FadeUp>
      </section>

      {/* ── Proof points ── */}
      <section className="relative z-10 mx-auto max-w-5xl px-6 py-16 md:px-10 md:py-20">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {[
            { value: "180K+", label: "Pages distilled", ornament: <LeafSprig className="h-8 w-6 mx-auto mb-2" /> },
            { value: "~4 hrs", label: "Saved each week", ornament: <SunOrnament className="h-8 w-8 mx-auto mb-2" /> },
            { value: "<30 s", label: "Per document", ornament: <BranchOrnament className="h-6 w-10 mx-auto mb-2" /> },
            { value: "Trusted", label: "By students, researchers & professionals", ornament: <LeafSprig className="h-8 w-6 mx-auto mb-2" /> },
          ].map((stat, i) => (
            <FadeUp key={stat.value} delay={i * 0.08}>
              <div
                className="d3-card-hover rounded-3xl p-6 text-center"
                style={{
                  background: "rgba(255,252,245,0.7)",
                  border: "1px solid rgba(200,188,160,0.3)",
                  boxShadow: "0 4px 20px rgba(85,98,74,0.06)",
                }}
              >
                {stat.ornament}
                <p
                  className="font-instrument text-3xl md:text-4xl"
                  style={{ color: "#36352f" }}
                >
                  {stat.value}
                </p>
                <p
                  className="font-hanken mt-1 text-xs leading-snug"
                  style={{ color: "#7c8a6b" }}
                >
                  {stat.label}
                </p>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="relative z-10 mx-auto max-w-4xl px-6 py-16 pb-28 text-center md:px-10 md:py-24 md:pb-36">
        <FadeUp>
          <div className="relative">
            <SunOrnament className="mx-auto h-12 w-12 mb-6" />
            <h2
              className="font-instrument text-4xl leading-tight md:text-5xl lg:text-6xl"
              style={{ color: "#36352f" }}
            >
              Make space to
              <br />
              <em className="italic" style={{ color: "#55624a" }}>understand.</em>
            </h2>
            <p
              className="mx-auto mt-5 max-w-md text-base leading-relaxed font-hanken"
              style={{ color: "#7c8a6b" }}
            >
              Dense documents were never meant to be obstacles. Ratio clears the path —
              so you can spend your reading time on thinking, not decoding.
            </p>
            <div className="mt-9 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <a
                href="#"
                className="group flex items-center gap-2 rounded-full px-9 py-4 text-base font-medium font-hanken transition-all"
                style={{
                  background: "#55624a",
                  color: "#f3ede1",
                  boxShadow: "0 6px 28px rgba(85,98,74,0.28)",
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "#3f4a37"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "#55624a"; }}
              >
                <Upload size={16} />
                Begin reading — free
                <ChevronRight size={15} className="transition-transform group-hover:translate-x-0.5" />
              </a>
              <p className="font-hanken text-xs" style={{ color: "#9aa888" }}>
                No account required. Your first summary is free.
              </p>
            </div>
          </div>
        </FadeUp>
      </section>

      {/* ── Footer ── */}
      <footer
        className="relative z-10 border-t"
        style={{ borderColor: "rgba(200,188,160,0.35)" }}
      >
        <div className="mx-auto max-w-6xl px-6 py-8 md:px-10">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="flex items-center gap-2">
              <span
                className="flex h-6 w-6 items-center justify-center rounded-full"
                style={{ background: "#55624a" }}
              >
                <BookOpen size={11} className="text-[#f3ede1]" />
              </span>
              <span className="font-instrument text-base" style={{ color: "#36352f" }}>
                Ratio <em className="italic">Reader</em>
              </span>
            </div>
            <div className="flex gap-6">
              {["Privacy", "Terms", "Contact"].map((link) => (
                <a
                  key={link}
                  href="#"
                  className="font-hanken text-xs transition-colors"
                  style={{ color: "#9aa888" }}
                  onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#55624a")}
                  onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "#9aa888")}
                >
                  {link}
                </a>
              ))}
            </div>
            <p className="font-hanken text-xs" style={{ color: "#b8b0a0" }}>
              © 2026 Ratio Reader
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
