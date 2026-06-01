import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ScrollText,
  Lightbulb,
  Quote,
  Sparkles,
  ChevronDown,
  Upload,
  ArrowRight,
  Check,
} from "lucide-react";
import type { Feature, Plan, Faq } from "@/content";
import {
  brand,
  features,
  steps,
  stats,
  testimonials,
  faqs,
  plans,
  cta,
} from "@/content";

const iconMap: Record<string, React.ReactNode> = {
  ScrollText: <ScrollText size={22} />,
  Lightbulb: <Lightbulb size={22} />,
  Quote: <Quote size={22} />,
  Sparkles: <Sparkles size={22} />,
};

function AuroraOrbs() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Primary violet orb */}
      <div
        className="absolute rounded-full animate-rr-float-slow"
        style={{
          width: "700px",
          height: "700px",
          top: "-200px",
          left: "-200px",
          background: "radial-gradient(circle, rgba(124,92,255,0.25) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />
      {/* Cyan orb */}
      <div
        className="absolute rounded-full animate-rr-aurora"
        style={{
          width: "600px",
          height: "600px",
          top: "20%",
          right: "-150px",
          background: "radial-gradient(circle, rgba(34,211,238,0.2) 0%, transparent 70%)",
          filter: "blur(100px)",
          animationDelay: "2s",
        }}
      />
      {/* Fuchsia orb */}
      <div
        className="absolute rounded-full animate-rr-float"
        style={{
          width: "500px",
          height: "500px",
          bottom: "10%",
          left: "30%",
          background: "radial-gradient(circle, rgba(240,171,252,0.18) 0%, transparent 70%)",
          filter: "blur(90px)",
          animationDelay: "1s",
        }}
      />
      {/* Dot grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
      {/* Grain overlay */}
      <div className="rr-grain absolute inset-0 opacity-20" />
    </div>
  );
}

function GradientGlyph({ size = 28 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="glyph-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#7C5CFF" />
          <stop offset="50%" stopColor="#22D3EE" />
          <stop offset="100%" stopColor="#F0ABFC" />
        </linearGradient>
      </defs>
      <rect x="2" y="2" width="24" height="24" rx="6" fill="url(#glyph-grad)" opacity="0.15" />
      <rect x="2" y="2" width="24" height="24" rx="6" stroke="url(#glyph-grad)" strokeWidth="1.5" fill="none" />
      <path d="M9 8h10M9 13h6M9 18h8" stroke="url(#glyph-grad)" strokeWidth="2" strokeLinecap="round" />
      <circle cx="20" cy="18" r="2.5" fill="url(#glyph-grad)" />
    </svg>
  );
}

function Nav() {
  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 border-b border-white/8"
      style={{ background: "rgba(7,7,19,0.75)", backdropFilter: "blur(20px)" }}
      aria-label="Main navigation"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <Link to="/" className="text-zinc-400 font-space-mono text-xs hover:text-violet-400 transition-colors mr-6 hidden sm:block">
          ← all designs
        </Link>
        <div className="flex items-center gap-2.5 flex-1">
          <GradientGlyph size={26} />
          <span className="font-sora font-semibold text-white text-base tracking-tight">
            {brand.name}
          </span>
        </div>
        <div className="flex items-center gap-3">
          <a
            href="#pricing"
            className="hidden sm:block font-inter text-sm text-zinc-400 hover:text-white transition-colors px-3 py-1"
          >
            Pricing
          </a>
          <GlowButton size="sm">{cta.primaryShort}</GlowButton>
        </div>
      </div>
    </nav>
  );
}

function GlowButton({
  children,
  size = "md",
  className = "",
  onClick,
}: {
  children: React.ReactNode;
  size?: "sm" | "md" | "lg";
  className?: string;
  onClick?: () => void;
}) {
  const sizeClasses =
    size === "sm"
      ? "px-4 py-2 text-sm"
      : size === "lg"
      ? "px-8 py-4 text-base"
      : "px-6 py-3 text-sm";

  return (
    <button
      onClick={onClick}
      className={`relative font-sora font-semibold text-white rounded-full transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent overflow-hidden group ${sizeClasses} ${className}`}
      style={{
        background: "linear-gradient(135deg, #7C5CFF 0%, #F0ABFC 100%)",
        boxShadow: "0 0 30px rgba(124,92,255,0.4), 0 0 60px rgba(124,92,255,0.15)",
      }}
    >
      <span className="relative z-10 flex items-center gap-2">{children}</span>
      <span className="animate-rr-pulse-ring absolute inset-0 rounded-full border border-violet-400/40" />
      <span
        className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: "linear-gradient(135deg, #9B7DFF 0%, #F5C6FF 100%)" }}
      />
    </button>
  );
}

function ProductMockup() {
  return (
    <div className="relative w-full max-w-2xl mx-auto animate-rr-float">
      {/* Glow behind window */}
      <div
        className="absolute inset-0 rounded-2xl"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(124,92,255,0.35) 0%, rgba(34,211,238,0.15) 50%, transparent 80%)",
          filter: "blur(40px)",
          transform: "scale(1.15)",
        }}
      />
      {/* Glass window */}
      <div
        className="relative rounded-2xl border border-white/12 overflow-hidden"
        style={{
          background: "rgba(255,255,255,0.04)",
          backdropFilter: "blur(24px)",
          boxShadow:
            "0 32px 80px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.08)",
        }}
      >
        {/* Top bar */}
        <div
          className="flex items-center gap-1.5 px-4 py-3 border-b border-white/8"
          style={{ background: "rgba(255,255,255,0.03)" }}
        >
          <span className="w-3 h-3 rounded-full bg-rose-400/70" />
          <span className="w-3 h-3 rounded-full bg-amber-400/70" />
          <span className="w-3 h-3 rounded-full bg-emerald-400/70" />
          <span className="flex-1 mx-4 h-5 rounded bg-white/5 border border-white/6 text-center" />
          <span className="font-space-mono text-xs text-zinc-500">ratioreader.com</span>
        </div>

        {/* Two-panel content */}
        <div className="grid grid-cols-2 gap-0 min-h-[340px]">
          {/* Left: PDF page simulation */}
          <div
            className="p-5 border-r border-white/8"
            style={{ background: "rgba(255,255,255,0.02)" }}
          >
            <div className="font-space-mono text-xs text-zinc-500 mb-3 uppercase tracking-widest">
              Source · Page 4
            </div>
            <div className="space-y-1.5">
              {[100, 92, 85, 100, 78, 95, 88, 100].map((w, i) => (
                <div
                  key={i}
                  className={`h-2 rounded-sm ${i === 3 ? "bg-violet-400/60 shadow-sm shadow-violet-400/30" : "bg-white/10"}`}
                  style={{ width: `${w}%` }}
                />
              ))}
              <div className="h-2 rounded-sm bg-white/10" style={{ width: "62%" }} />
            </div>
            {/* Highlighted section */}
            <div
              className="mt-4 p-2 rounded border border-violet-400/30"
              style={{ background: "rgba(124,92,255,0.08)" }}
            >
              {[100, 88, 95, 72].map((w, i) => (
                <div
                  key={i}
                  className="h-2 rounded-sm bg-violet-300/40 mb-1.5 last:mb-0"
                  style={{ width: `${w}%` }}
                />
              ))}
            </div>
            <div className="mt-4 space-y-1.5">
              {[96, 100, 83, 90, 75].map((w, i) => (
                <div
                  key={i}
                  className="h-2 rounded-sm bg-white/10"
                  style={{ width: `${w}%` }}
                />
              ))}
            </div>
          </div>

          {/* Right: Ratio output */}
          <div className="p-5 space-y-4">
            <div>
              <div className="font-space-mono text-xs text-cyan-400/80 uppercase tracking-widest mb-2">
                Summary
              </div>
              {[
                "Core argument identified across 3 sections",
                "Key methodology: longitudinal cohort study",
                "Principal finding: 47% variance explained",
              ].map((txt, i) => (
                <div key={i} className="flex items-start gap-2 mb-1.5">
                  <span
                    className="mt-1 w-1.5 h-1.5 rounded-full flex-shrink-0"
                    style={{ background: "linear-gradient(135deg, #7C5CFF, #22D3EE)" }}
                  />
                  <span className="font-inter text-xs text-zinc-300 leading-relaxed">{txt}</span>
                </div>
              ))}
            </div>

            {/* Key quote card */}
            <div
              className="rounded-lg p-3 border border-cyan-400/20"
              style={{
                background: "rgba(34,211,238,0.06)",
                boxShadow: "0 0 20px rgba(34,211,238,0.05)",
              }}
            >
              <div className="font-space-mono text-xs text-cyan-400/70 uppercase tracking-widest mb-1.5">
                Key Quote
              </div>
              <p className="font-newsreader italic text-zinc-200 text-xs leading-relaxed">
                "The evidence consistently points to intervention timing as the decisive variable."
              </p>
              <div className="mt-1.5 font-space-mono text-xs text-zinc-500">— p. 4</div>
            </div>

            {/* Insight chip */}
            <div
              className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 border border-fuchsia-400/25"
              style={{ background: "rgba(240,171,252,0.08)" }}
            >
              <Sparkles size={12} className="text-fuchsia-300" />
              <span className="font-space-mono text-xs text-fuchsia-300 uppercase tracking-wide">
                Insight
              </span>
              <span className="font-inter text-xs text-zinc-300 ml-1">
                Contradicts prior meta-analysis
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function FeatureCard({ feature, delay }: { feature: Feature; delay: number }) {
  return (
    <div
      className="group p-6 rounded-2xl border border-white/8 transition-all duration-500 hover:border-violet-400/30 hover:shadow-lg animate-rr-fade-up"
      style={{
        background: "rgba(255,255,255,0.03)",
        backdropFilter: "blur(16px)",
        boxShadow: "inset 0 1px 0 rgba(255,255,255,0.05)",
        animationDelay: `${delay}ms`,
        transitionProperty: "border-color, box-shadow, transform",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
        (e.currentTarget as HTMLElement).style.boxShadow =
          "0 20px 60px rgba(124,92,255,0.15), inset 0 1px 0 rgba(255,255,255,0.07)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
        (e.currentTarget as HTMLElement).style.boxShadow =
          "inset 0 1px 0 rgba(255,255,255,0.05)";
      }}
    >
      <div
        className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 text-white"
        style={{
          background: "linear-gradient(135deg, rgba(124,92,255,0.4) 0%, rgba(34,211,238,0.3) 100%)",
          boxShadow: "0 4px 16px rgba(124,92,255,0.2)",
          border: "1px solid rgba(124,92,255,0.2)",
        }}
      >
        {iconMap[feature.icon] ?? <Sparkles size={22} />}
      </div>
      <h3 className="font-sora font-semibold text-white text-base mb-2">{feature.title}</h3>
      <p className="font-inter text-zinc-400 text-sm leading-relaxed">{feature.blurb}</p>
    </div>
  );
}

function FaqItem({ faq }: { faq: Faq }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="border border-white/8 rounded-xl overflow-hidden transition-all duration-300"
      style={{ background: open ? "rgba(124,92,255,0.05)" : "rgba(255,255,255,0.02)" }}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-5 py-4 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 focus-visible:ring-inset"
        aria-expanded={open}
      >
        <span className="font-sora font-medium text-white text-sm">{faq.q}</span>
        <ChevronDown
          size={18}
          className="text-zinc-400 flex-shrink-0 transition-transform duration-300"
          style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
        />
      </button>
      {open && (
        <div className="px-5 pb-4">
          <p className="font-inter text-zinc-400 text-sm leading-relaxed">{faq.a}</p>
        </div>
      )}
    </div>
  );
}

function PricingCard({ plan }: { plan: Plan }) {
  return (
    <div
      className="relative p-6 rounded-2xl flex flex-col gap-5 transition-all duration-300"
      style={
        plan.featured
          ? {
              background: "rgba(255,255,255,0.05)",
              backdropFilter: "blur(20px)",
              border: "1px solid transparent",
              backgroundClip: "padding-box",
              boxShadow:
                "0 0 0 1px rgba(124,92,255,0.5), 0 0 60px rgba(124,92,255,0.2), inset 0 1px 0 rgba(255,255,255,0.08)",
            }
          : {
              background: "rgba(255,255,255,0.03)",
              backdropFilter: "blur(16px)",
              border: "1px solid rgba(255,255,255,0.07)",
              boxShadow: "inset 0 1px 0 rgba(255,255,255,0.04)",
            }
      }
    >
      {plan.featured && (
        <div
          className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full font-space-mono text-xs uppercase tracking-widest text-white"
          style={{
            background: "linear-gradient(135deg, #7C5CFF, #F0ABFC)",
            boxShadow: "0 4px 16px rgba(124,92,255,0.4)",
          }}
        >
          Most popular
        </div>
      )}
      <div>
        <div className="font-space-mono text-xs uppercase tracking-widest text-zinc-500 mb-1">
          {plan.name}
        </div>
        <div className="flex items-baseline gap-1.5 mb-1">
          <span
            className="font-sora font-bold text-4xl"
            style={{
              background: "linear-gradient(135deg, #7C5CFF, #22D3EE)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            {plan.price}
          </span>
          <span className="font-inter text-sm text-zinc-500">{plan.cadence}</span>
        </div>
        <p className="font-inter text-sm text-zinc-400">{plan.blurb}</p>
      </div>
      <ul className="space-y-2.5 flex-1">
        {plan.features.map((f) => (
          <li key={f} className="flex items-start gap-2.5">
            <Check
              size={15}
              className="flex-shrink-0 mt-0.5"
              style={{ color: plan.featured ? "#7C5CFF" : "#22D3EE" }}
            />
            <span className="font-inter text-sm text-zinc-300">{f}</span>
          </li>
        ))}
      </ul>
      {plan.featured ? (
        <GlowButton className="w-full justify-center">{plan.cta}</GlowButton>
      ) : (
        <button
          className="w-full py-3 rounded-full font-sora font-semibold text-sm text-zinc-200 border border-white/12 hover:border-violet-400/40 hover:text-white transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-400"
          style={{ background: "rgba(255,255,255,0.04)" }}
        >
          {plan.cta}
        </button>
      )}
    </div>
  );
}

export default function Design3() {
  return (
    <div
      className="relative min-h-screen font-inter text-white overflow-x-hidden"
      style={{ background: "#070713" }}
    >
      <AuroraOrbs />

      <Nav />

      {/* ─── HERO ─────────────────────────────────────────────── */}
      <section
        className="relative z-10 pt-32 pb-20 px-4 sm:px-6 max-w-6xl mx-auto"
        aria-label="Hero"
      >
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: copy */}
          <div className="animate-rr-fade-up">
            {/* Kicker pill */}
            <div
              className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 rounded-full border border-violet-400/20"
              style={{ background: "rgba(124,92,255,0.08)" }}
            >
              <span className="font-space-mono text-xs uppercase tracking-widest text-violet-300">
                ◆ {brand.kicker}
              </span>
            </div>

            <h1 className="font-sora font-bold text-5xl sm:text-6xl leading-[1.08] tracking-tight mb-6">
              <span className="text-white">Read less.</span>
              <br />
              <span
                className="animate-rr-gradient"
                style={{
                  background:
                    "linear-gradient(135deg, #7C5CFF 0%, #22D3EE 45%, #F0ABFC 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundSize: "200% 200%",
                }}
              >
                Understand more.
              </span>
            </h1>

            <p className="font-inter text-zinc-400 text-lg leading-relaxed mb-8 max-w-lg">
              {brand.subhead}
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <GlowButton size="lg">
                <Upload size={18} />
                {cta.primary}
              </GlowButton>
              <button
                className="flex items-center justify-center gap-2 px-7 py-4 rounded-full font-sora font-semibold text-base text-zinc-300 border border-white/12 hover:border-white/25 hover:text-white transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400"
                style={{ background: "rgba(255,255,255,0.03)" }}
              >
                {cta.secondary}
                <ArrowRight size={16} />
              </button>
            </div>

            {/* Social proof strip */}
            <div className="mt-8 flex items-center gap-4">
              <div className="flex -space-x-2">
                {["#7C5CFF", "#22D3EE", "#F0ABFC", "#a78bfa"].map((c, i) => (
                  <div
                    key={i}
                    className="w-7 h-7 rounded-full border-2 border-[#070713] flex items-center justify-center text-xs font-bold text-white"
                    style={{ background: c, zIndex: 4 - i }}
                  >
                    {["L", "M", "P", "+"][i]}
                  </div>
                ))}
              </div>
              <span className="font-inter text-xs text-zinc-500">
                Trusted by 12,000+ researchers, lawyers, and students
              </span>
            </div>
          </div>

          {/* Right: Product mockup */}
          <div className="animate-rr-fade-up" style={{ animationDelay: "200ms" }}>
            <ProductMockup />
          </div>
        </div>
      </section>

      {/* ─── FEATURES ─────────────────────────────────────────── */}
      <section
        className="relative z-10 py-20 px-4 sm:px-6 max-w-6xl mx-auto"
        aria-label="Features"
        id="features"
      >
        <div className="text-center mb-12 animate-rr-fade-up">
          <div className="font-space-mono text-xs uppercase tracking-widest text-violet-400/70 mb-3">
            What you get
          </div>
          <h2 className="font-sora font-bold text-3xl sm:text-4xl text-white tracking-tight">
            Everything you need to{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #7C5CFF, #22D3EE)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              read smarter
            </span>
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((f, i) => (
            <FeatureCard key={f.id} feature={f} delay={i * 80} />
          ))}
        </div>
      </section>

      {/* ─── HOW IT WORKS ─────────────────────────────────────── */}
      <section
        className="relative z-10 py-20 px-4 sm:px-6 max-w-5xl mx-auto"
        aria-label="How it works"
        id="how-it-works"
      >
        <div className="text-center mb-14 animate-rr-fade-up">
          <div className="font-space-mono text-xs uppercase tracking-widest text-cyan-400/70 mb-3">
            How it works
          </div>
          <h2 className="font-sora font-bold text-3xl sm:text-4xl text-white tracking-tight">
            Three steps to clarity
          </h2>
        </div>

        <div className="relative grid md:grid-cols-3 gap-6">
          {/* Connecting line (desktop) */}
          <div
            className="hidden md:block absolute top-8 left-[calc(16.67%+1rem)] right-[calc(16.67%+1rem)] h-px"
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(124,92,255,0.5) 20%, rgba(34,211,238,0.5) 50%, rgba(240,171,252,0.5) 80%, transparent)",
            }}
          />

          {steps.map((step, i) => (
            <div
              key={step.n}
              className="relative flex flex-col items-center text-center p-6 rounded-2xl border border-white/8 animate-rr-fade-up"
              style={{
                background: "rgba(255,255,255,0.03)",
                backdropFilter: "blur(16px)",
                boxShadow: "inset 0 1px 0 rgba(255,255,255,0.05)",
                animationDelay: `${i * 120}ms`,
              }}
            >
              {/* Glowing node */}
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center mb-5 font-sora font-bold text-lg text-white relative z-10"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(124,92,255,0.6), rgba(34,211,238,0.4))",
                  boxShadow:
                    "0 0 30px rgba(124,92,255,0.4), inset 0 1px 0 rgba(255,255,255,0.15)",
                  border: "1px solid rgba(124,92,255,0.4)",
                }}
              >
                {step.n}
              </div>
              <h3 className="font-sora font-semibold text-white text-base mb-2">{step.title}</h3>
              <p className="font-inter text-zinc-400 text-sm leading-relaxed">{step.blurb}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── STATS ────────────────────────────────────────────── */}
      <section
        className="relative z-10 py-16 px-4 sm:px-6 max-w-6xl mx-auto"
        aria-label="Statistics"
      >
        <div
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px rounded-2xl overflow-hidden border border-white/8 animate-rr-fade-up"
          style={{ background: "rgba(124,92,255,0.15)" }}
        >
          {stats.map((stat, i) => (
            <div
              key={i}
              className="flex flex-col items-center text-center p-8"
              style={{
                background: "rgba(7,7,19,0.9)",
                backdropFilter: "blur(20px)",
              }}
            >
              <div
                className="font-sora font-bold text-4xl sm:text-5xl mb-2 animate-rr-gradient"
                style={{
                  background: "linear-gradient(135deg, #7C5CFF 0%, #22D3EE 50%, #F0ABFC 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundSize: "200% 200%",
                  animationDelay: `${i * 150}ms`,
                }}
              >
                {stat.value}
              </div>
              <div className="font-space-mono text-xs uppercase tracking-widest text-zinc-500 leading-relaxed">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── TESTIMONIALS ─────────────────────────────────────── */}
      <section
        className="relative z-10 py-20 px-4 sm:px-6 max-w-6xl mx-auto"
        aria-label="Testimonials"
      >
        <div className="text-center mb-12 animate-rr-fade-up">
          <div className="font-space-mono text-xs uppercase tracking-widest text-fuchsia-400/70 mb-3">
            What people say
          </div>
          <h2 className="font-sora font-bold text-3xl sm:text-4xl text-white tracking-tight">
            Loved by deep readers
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <blockquote
              key={i}
              className="flex flex-col gap-4 p-6 rounded-2xl border border-white/8 animate-rr-fade-up"
              style={{
                background: "rgba(255,255,255,0.03)",
                backdropFilter: "blur(16px)",
                boxShadow: "inset 0 1px 0 rgba(255,255,255,0.05)",
                animationDelay: `${i * 100}ms`,
              }}
            >
              <p className="font-newsreader italic text-zinc-200 text-base leading-relaxed flex-1">
                &ldquo;{t.quote}&rdquo;
              </p>
              <footer className="flex items-center gap-3">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center font-sora font-bold text-sm text-white flex-shrink-0"
                  style={{
                    background: `linear-gradient(135deg, ${["#7C5CFF,#22D3EE", "#22D3EE,#F0ABFC", "#F0ABFC,#7C5CFF"][i]})`,
                  }}
                >
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div className="font-sora font-medium text-white text-sm">{t.name}</div>
                  <div className="font-inter text-zinc-500 text-xs">{t.role}</div>
                </div>
              </footer>
            </blockquote>
          ))}
        </div>
      </section>

      {/* ─── PRICING + FAQ ────────────────────────────────────── */}
      <section
        className="relative z-10 py-20 px-4 sm:px-6 max-w-6xl mx-auto"
        aria-label="Pricing"
        id="pricing"
      >
        <div className="text-center mb-12 animate-rr-fade-up">
          <div className="font-space-mono text-xs uppercase tracking-widest text-violet-400/70 mb-3">
            Pricing
          </div>
          <h2 className="font-sora font-bold text-3xl sm:text-4xl text-white tracking-tight">
            Start free, grow as you read
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {plans.map((plan) => (
            <PricingCard key={plan.name} plan={plan} />
          ))}
        </div>

        {/* FAQ */}
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8 animate-rr-fade-up">
            <div className="font-space-mono text-xs uppercase tracking-widest text-cyan-400/70 mb-3">
              FAQ
            </div>
            <h2 className="font-sora font-bold text-2xl sm:text-3xl text-white tracking-tight">
              Common questions
            </h2>
          </div>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <FaqItem key={i} faq={faq} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── FINAL CTA ────────────────────────────────────────── */}
      <section
        className="relative z-10 py-20 px-4 sm:px-6 max-w-5xl mx-auto"
        aria-label="Call to action"
      >
        <div
          className="relative rounded-3xl p-10 sm:p-16 text-center overflow-hidden border border-violet-400/20"
          style={{
            background: "rgba(255,255,255,0.03)",
            backdropFilter: "blur(24px)",
            boxShadow: "inset 0 1px 0 rgba(255,255,255,0.07)",
          }}
        >
          {/* Central glow */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 70% 50% at 50% 50%, rgba(124,92,255,0.2) 0%, rgba(34,211,238,0.08) 50%, transparent 75%)",
            }}
          />
          <div className="relative z-10">
            <div className="font-space-mono text-xs uppercase tracking-widest text-violet-400/70 mb-4">
              Get started today
            </div>
            <h2 className="font-sora font-bold text-3xl sm:text-5xl tracking-tight mb-4">
              <span className="text-white">{brand.taglineAlt2}</span>
              <br />
              <span
                className="animate-rr-gradient"
                style={{
                  background:
                    "linear-gradient(135deg, #7C5CFF 0%, #22D3EE 45%, #F0ABFC 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundSize: "200% 200%",
                }}
              >
                Start reading smarter.
              </span>
            </h2>
            <p className="font-inter text-zinc-400 text-lg mb-8 max-w-xl mx-auto">
              Upload your first PDF free — no credit card required. Join 12,000+ readers who save
              hours every week.
            </p>
            <GlowButton size="lg">
              <Upload size={18} />
              {cta.primary}
            </GlowButton>
          </div>
        </div>
      </section>

      {/* ─── FOOTER ───────────────────────────────────────────── */}
      <footer
        className="relative z-10 border-t border-white/8 py-10 px-4 sm:px-6"
        aria-label="Footer"
        style={{ background: "rgba(7,7,19,0.9)" }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid sm:grid-cols-4 gap-8 mb-8">
            <div className="sm:col-span-1">
              <div className="flex items-center gap-2 mb-3">
                <GradientGlyph size={22} />
                <span className="font-sora font-semibold text-white text-sm">{brand.name}</span>
              </div>
              <p className="font-inter text-xs text-zinc-500 leading-relaxed">
                {brand.tagline}
              </p>
            </div>
            {[
              { heading: "Product", links: ["Features", "How it works", "Pricing", "Changelog"] },
              { heading: "Company", links: ["About", "Blog", "Careers", "Press"] },
              { heading: "Legal", links: ["Privacy", "Terms", "Security", "Cookies"] },
            ].map((col) => (
              <div key={col.heading}>
                <div className="font-space-mono text-xs uppercase tracking-widest text-zinc-500 mb-3">
                  {col.heading}
                </div>
                <ul className="space-y-2">
                  {col.links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="font-inter text-xs text-zinc-400 hover:text-white transition-colors"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="pt-6 border-t border-white/6 flex flex-col sm:flex-row items-center justify-between gap-3">
            <span className="font-space-mono text-xs text-zinc-600">
              © 2026 Ratio Reader. All rights reserved.
            </span>
            <a
              href={`https://${brand.domain}`}
              className="font-space-mono text-xs text-zinc-600 hover:text-zinc-400 transition-colors"
            >
              {brand.domain}
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
