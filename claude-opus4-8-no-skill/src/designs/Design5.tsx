import { useState } from "react";
import type { ComponentType } from "react";
import { Link } from "react-router-dom";
import { ScrollText, Lightbulb, Quote, Sparkles } from "lucide-react";
import { brand, features, steps, stats, testimonials, faqs, plans, cta } from "@/content";

type IconName = "ScrollText" | "Lightbulb" | "Quote" | "Sparkles";
const iconMap: Record<IconName, ComponentType<{ size?: number; className?: string }>> = {
  ScrollText,
  Lightbulb,
  Quote,
  Sparkles,
};

const featurePalette = [
  { bg: "#FFF0E8", icon: "#FF8A5B", iconBg: "#FFD8C5" },
  { bg: "#EEF0FF", icon: "#7C6CF0", iconBg: "#D4D0FF" },
  { bg: "#E6FAF5", icon: "#37C8A8", iconBg: "#B3EDE2" },
  { bg: "#FFFAE8", icon: "#E8A020", iconBg: "#FFE9A0" },
];

export default function Design5() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen overflow-x-hidden" style={{ backgroundColor: "#FFF4EC", fontFamily: "var(--font-jakarta, sans-serif)" }}>

      {/* ── FLOATING NAV ── */}
      <div className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4">
        <nav
          className="flex items-center justify-between gap-6 px-5 py-3 rounded-full shadow-[0_8px_32px_-6px_rgba(124,108,240,0.18)] w-full max-w-3xl"
          style={{ backgroundColor: "rgba(255,255,255,0.92)", backdropFilter: "blur(12px)" }}
          aria-label="Main navigation"
        >
          <Link to="/" className="flex items-center gap-2 no-underline group" aria-label="Back to all designs">
            <span className="flex items-center justify-center w-8 h-8 rounded-full text-white text-sm font-bold animate-rr-bob" style={{ background: "linear-gradient(135deg,#FF8A5B,#7C6CF0)" }}>R</span>
            <span className="font-fredoka font-bold text-lg" style={{ color: "#2D1B69" }}>{brand.name}</span>
          </Link>
          <div className="hidden sm:flex items-center gap-1 text-sm font-medium" style={{ color: "#6B6B8A" }}>
            <Link to="/" className="px-3 py-1 rounded-full hover:bg-[#F0EEff] transition-colors no-underline" style={{ color: "#6B6B8A" }}>← All designs</Link>
          </div>
          <a
            href="#get-started"
            className="px-5 py-2 rounded-full text-sm font-bold text-white shadow-[0_4px_14px_-2px_rgba(255,138,91,0.5)] hover:scale-105 active:scale-95 transition-transform focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF8A5B]"
            style={{ background: "linear-gradient(135deg,#FF8A5B,#FF6B35)" }}
          >
            {cta.primaryShort}
          </a>
        </nav>
      </div>

      {/* ── BLOBS LAYER ── */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
        <div className="absolute -top-32 -left-32 w-[520px] h-[520px] rounded-full opacity-30 animate-rr-blob animate-rr-float" style={{ background: "radial-gradient(circle,#FFD166,#FF8A5B)", animationDelay: "0ms" }} />
        <div className="absolute top-1/3 -right-40 w-[480px] h-[480px] rounded-full opacity-25 animate-rr-blob animate-rr-float-slow" style={{ background: "radial-gradient(circle,#7C6CF0,#B8AFFF)", animationDelay: "1200ms" }} />
        <div className="absolute bottom-1/4 -left-24 w-[360px] h-[360px] rounded-full opacity-20 animate-rr-blob animate-rr-float" style={{ background: "radial-gradient(circle,#37C8A8,#7DF5DC)", animationDelay: "2400ms" }} />
        <div className="absolute -bottom-20 right-1/4 w-[300px] h-[300px] rounded-full opacity-20 animate-rr-blob animate-rr-float-slow" style={{ background: "radial-gradient(circle,#FFD166,#FFED9E)", animationDelay: "600ms" }} />
      </div>

      <div className="relative z-10">

        {/* ── HERO ── */}
        <section className="pt-36 pb-20 px-4 max-w-6xl mx-auto" aria-labelledby="hero-heading">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

            {/* Left: Text */}
            <div className="flex-1 text-center lg:text-left animate-rr-fade-up">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-6 shadow-[0_4px_12px_-2px_rgba(255,138,91,0.2)]" style={{ backgroundColor: "#FFE9D6", color: "#D4612A" }}>
                <Sparkles size={14} />
                <span>{brand.kicker}</span>
              </div>

              <h1 id="hero-heading" className="font-fredoka font-bold text-5xl sm:text-6xl lg:text-7xl leading-tight mb-6" style={{ color: "#2D1B69" }}>
                Read{" "}
                <span className="relative inline-block">
                  less
                  {/* wavy underline doodle */}
                  <svg className="absolute -bottom-2 left-0 w-full animate-rr-bob" viewBox="0 0 100 12" preserveAspectRatio="none" aria-hidden="true" style={{ animationDelay: "300ms" }}>
                    <path d="M0,8 Q25,2 50,8 Q75,14 100,8" stroke="#FF8A5B" strokeWidth="3.5" fill="none" strokeLinecap="round" />
                  </svg>
                </span>
                {". "}
                Understand{" "}
                <span className="relative inline-block" style={{ color: "#7C6CF0" }}>
                  more
                  <svg className="absolute -bottom-2 left-0 w-full animate-rr-bob" viewBox="0 0 100 12" preserveAspectRatio="none" aria-hidden="true" style={{ animationDelay: "500ms" }}>
                    <path d="M0,8 Q25,14 50,6 Q75,0 100,8" stroke="#7C6CF0" strokeWidth="3.5" fill="none" strokeLinecap="round" />
                  </svg>
                </span>
                {"."}
              </h1>

              <p className="text-lg sm:text-xl leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0" style={{ color: "#5E4D80" }}>
                {brand.subhead}
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <a
                  href="#get-started"
                  id="get-started"
                  className="w-full sm:w-auto px-8 py-4 rounded-full text-white font-bold text-lg shadow-[0_8px_24px_-4px_rgba(255,138,91,0.5)] hover:scale-105 active:scale-95 transition-transform focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF8A5B]"
                  style={{ background: "linear-gradient(135deg,#FF8A5B,#FF6B35)" }}
                >
                  {cta.primary} ✨
                </a>
                <a
                  href="#how-it-works"
                  className="w-full sm:w-auto px-6 py-4 rounded-full font-semibold text-lg border-2 hover:scale-105 active:scale-95 transition-transform focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7C6CF0]"
                  style={{ borderColor: "#D0CAFF", color: "#7C6CF0", backgroundColor: "#F5F3FF" }}
                >
                  {cta.secondary} →
                </a>
              </div>
            </div>

            {/* Right: Illustrated concept */}
            <div className="flex-shrink-0 relative w-full max-w-sm lg:max-w-md animate-rr-fade-in" style={{ animationDelay: "200ms" }}>
              {/* PDF card */}
              <div className="relative mx-auto w-64">
                <div className="rounded-[2rem] p-5 shadow-[0_12px_40px_-8px_rgba(124,108,240,0.25)] animate-rr-float" style={{ backgroundColor: "#fff", animationDelay: "0ms" }}>
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-8 h-10 rounded-lg flex items-center justify-center text-white text-xs font-bold font-mono shadow-[0_4px_10px_-2px_rgba(255,138,91,0.4)]" style={{ background: "linear-gradient(160deg,#FF8A5B,#FF6B35)" }}>PDF</div>
                    <div>
                      <div className="h-2 rounded-full w-24 mb-1.5" style={{ backgroundColor: "#E5E0FF" }} />
                      <div className="h-2 rounded-full w-16" style={{ backgroundColor: "#F0EFFF" }} />
                    </div>
                  </div>
                  {/* Text squiggles mimicking dense document */}
                  {[40, 48, 36, 44, 40, 32].map((w, i) => (
                    <div key={i} className="h-1.5 rounded-full mb-2" style={{ width: `${w * 2}px`, backgroundColor: i % 3 === 0 ? "#E5E0FF" : "#F0EFFF" }} />
                  ))}
                </div>

                {/* Arrow with sparkles */}
                <div className="flex items-center justify-center my-4 gap-2" aria-hidden="true">
                  <svg className="animate-rr-bob w-8 h-8" viewBox="0 0 32 32" fill="none" style={{ animationDelay: "400ms" }}>
                    <path d="M6,16 Q16,4 26,16" stroke="#FF8A5B" strokeWidth="2.5" strokeLinecap="round" fill="none" />
                    <path d="M21,11 L26,16 L21,21" stroke="#FF8A5B" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span className="text-2xl animate-rr-bob" style={{ animationDelay: "200ms" }}>✨</span>
                </div>

                {/* Summary card */}
                <div className="rounded-[2rem] p-5 shadow-[0_12px_40px_-8px_rgba(55,200,168,0.3)] animate-rr-float" style={{ backgroundColor: "#EDFCF8", animationDelay: "600ms" }}>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-2xl">⭐</span>
                    <span className="font-fredoka font-bold text-lg" style={{ color: "#37C8A8" }}>Summary ready!</span>
                  </div>
                  <div className="h-2 rounded-full mb-2 w-full" style={{ backgroundColor: "#B3EDE2" }} />
                  <div className="h-2 rounded-full mb-2 w-5/6" style={{ backgroundColor: "#C8F3EB" }} />
                  <div className="flex gap-2 mt-3">
                    <span className="px-2 py-1 rounded-full text-xs font-semibold" style={{ backgroundColor: "#D4FFE4", color: "#1A7A50" }}>💡 Hints</span>
                    <span className="px-2 py-1 rounded-full text-xs font-semibold" style={{ backgroundColor: "#E8E4FF", color: "#5E44DB" }}>📌 Quotes</span>
                  </div>
                </div>

                {/* Floating doodles */}
                <svg className="absolute -top-6 -right-6 w-10 h-10 animate-rr-bob" viewBox="0 0 40 40" aria-hidden="true" style={{ animationDelay: "100ms" }}>
                  <path d="M20,5 L23,15 L33,15 L25,22 L28,33 L20,26 L12,33 L15,22 L7,15 L17,15 Z" fill="#FFD166" opacity="0.9" />
                </svg>
                <svg className="absolute -bottom-4 -left-6 w-8 h-8 animate-rr-bob" viewBox="0 0 32 32" aria-hidden="true" style={{ animationDelay: "700ms" }}>
                  <circle cx="16" cy="16" r="10" fill="none" stroke="#7C6CF0" strokeWidth="2.5" strokeDasharray="4 3" />
                </svg>
              </div>
            </div>
          </div>
        </section>

        {/* ── FEATURES ── */}
        <section className="py-20 px-4 max-w-6xl mx-auto" aria-labelledby="features-heading">
          <div className="text-center mb-12 animate-rr-fade-up">
            <h2 id="features-heading" className="font-fredoka font-bold text-4xl sm:text-5xl mb-4" style={{ color: "#2D1B69" }}>
              Everything you need to{" "}
              <span style={{ color: "#FF8A5B" }}>get it</span>
            </h2>
            <p className="text-lg max-w-xl mx-auto" style={{ color: "#5E4D80" }}>
              Four superpowers that turn any dense PDF into something you can actually use.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {features.map((f, i) => {
              const palette = featurePalette[i] ?? featurePalette[0];
              const Icon = iconMap[f.icon as IconName];
              return (
                <div
                  key={f.id}
                  className="rounded-[2rem] p-6 shadow-[0_8px_28px_-6px_rgba(0,0,0,0.08)] hover:scale-105 hover:shadow-[0_16px_40px_-8px_rgba(0,0,0,0.13)] transition-all duration-300 cursor-default animate-rr-fade-up"
                  style={{ backgroundColor: palette.bg, animationDelay: `${i * 80}ms` }}
                >
                  <div className="flex items-center justify-center w-14 h-14 rounded-2xl mb-5 shadow-[0_4px_12px_-2px_rgba(0,0,0,0.08)]" style={{ backgroundColor: palette.iconBg, color: palette.icon }}>
                    {Icon && <Icon size={26} />}
                  </div>
                  <h3 className="font-fredoka font-bold text-xl mb-2" style={{ color: "#2D1B69" }}>{f.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#5E4D80" }}>{f.blurb}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* ── HOW IT WORKS ── */}
        <section id="how-it-works" className="py-20 px-4 max-w-4xl mx-auto" aria-labelledby="steps-heading">
          <div className="text-center mb-14 animate-rr-fade-up">
            <h2 id="steps-heading" className="font-fredoka font-bold text-4xl sm:text-5xl mb-4" style={{ color: "#2D1B69" }}>
              Three{" "}
              <span style={{ color: "#37C8A8" }}>easy</span>{" "}
              steps
            </h2>
            <p className="text-lg" style={{ color: "#5E4D80" }}>From upload to insight in under a minute.</p>
          </div>

          <div className="relative">
            {/* Dotted connector line — visible on md+ */}
            <div className="hidden md:block absolute top-12 left-[16.5%] right-[16.5%] h-0" aria-hidden="true">
              <svg className="w-full" height="24" viewBox="0 0 600 24" preserveAspectRatio="none">
                <path d="M0,12 Q150,2 300,12 Q450,22 600,12" stroke="#D0CAFF" strokeWidth="3" strokeDasharray="8 6" fill="none" strokeLinecap="round" />
              </svg>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
              {steps.map((s, i) => (
                <div key={s.n} className="flex flex-col items-center text-center animate-rr-fade-up" style={{ animationDelay: `${i * 120}ms` }}>
                  <div
                    className="flex items-center justify-center w-24 h-24 rounded-full font-fredoka font-bold text-4xl text-white mb-6 shadow-[0_8px_28px_-6px_rgba(0,0,0,0.18)] animate-rr-bob"
                    style={{
                      background: i === 0
                        ? "linear-gradient(135deg,#FF8A5B,#FFD166)"
                        : i === 1
                        ? "linear-gradient(135deg,#7C6CF0,#B8AFFF)"
                        : "linear-gradient(135deg,#37C8A8,#7DF5DC)",
                      animationDelay: `${i * 300}ms`,
                    }}
                  >
                    {s.n}
                  </div>
                  <div className="rounded-[1.75rem] p-6 w-full shadow-[0_6px_22px_-6px_rgba(0,0,0,0.08)]" style={{ backgroundColor: "#fff" }}>
                    <h3 className="font-fredoka font-bold text-xl mb-2" style={{ color: "#2D1B69" }}>{s.title}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: "#5E4D80" }}>{s.blurb}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── STATS ── */}
        <section className="py-16 px-4" aria-label="Statistics">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
              {stats.map((s, i) => {
                const colors = [
                  { bg: "#FFF0E8", num: "#FF8A5B" },
                  { bg: "#EEF0FF", num: "#7C6CF0" },
                  { bg: "#E6FAF5", num: "#37C8A8" },
                  { bg: "#FFFAE8", num: "#E8A020" },
                ];
                const c = colors[i % 4];
                return (
                  <div
                    key={i}
                    className="rounded-[2rem] p-6 text-center shadow-[0_6px_20px_-6px_rgba(0,0,0,0.08)] hover:scale-105 transition-transform animate-rr-fade-up"
                    style={{ backgroundColor: c.bg, animationDelay: `${i * 80}ms` }}
                  >
                    <div className="font-fredoka font-bold text-4xl sm:text-5xl mb-2" style={{ color: c.num }}>{s.value}</div>
                    <div className="text-sm font-medium leading-snug" style={{ color: "#5E4D80" }}>{s.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── TESTIMONIALS ── */}
        <section className="py-20 px-4 max-w-6xl mx-auto" aria-labelledby="testimonials-heading">
          <div className="text-center mb-12 animate-rr-fade-up">
            <h2 id="testimonials-heading" className="font-fredoka font-bold text-4xl sm:text-5xl mb-4" style={{ color: "#2D1B69" }}>
              People{" "}
              <span style={{ color: "#7C6CF0" }}>love</span>{" "}
              it 💛
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="relative animate-rr-fade-up" style={{ animationDelay: `${i * 100}ms` }}>
                {/* Speech bubble card */}
                <div className="rounded-[2rem] p-6 shadow-[0_8px_28px_-6px_rgba(124,108,240,0.15)] relative" style={{ backgroundColor: "#fff" }}>
                  <p className="text-base leading-relaxed mb-6 italic" style={{ color: "#4A3875" }}>"{t.quote}"</p>
                  <div className="flex items-center gap-3">
                    <div
                      className="flex-shrink-0 w-11 h-11 rounded-full flex items-center justify-center font-fredoka font-bold text-white text-base shadow-[0_4px_12px_-2px_rgba(0,0,0,0.12)]"
                      style={{
                        background: i === 0
                          ? "linear-gradient(135deg,#FF8A5B,#FFD166)"
                          : i === 1
                          ? "linear-gradient(135deg,#7C6CF0,#B8AFFF)"
                          : "linear-gradient(135deg,#37C8A8,#7DF5DC)",
                      }}
                    >
                      {t.name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-semibold text-sm" style={{ color: "#2D1B69" }}>{t.name}</div>
                      <div className="text-xs" style={{ color: "#7C6CF0" }}>{t.role}</div>
                    </div>
                  </div>
                  {/* Bubble tail */}
                  <svg className="absolute -bottom-3 left-8" width="24" height="16" viewBox="0 0 24 16" aria-hidden="true">
                    <path d="M0,0 Q8,0 12,16 Q16,0 24,0 Z" fill="#fff" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── PRICING ── */}
        <section className="py-20 px-4 max-w-5xl mx-auto" aria-labelledby="pricing-heading">
          <div className="text-center mb-12 animate-rr-fade-up">
            <h2 id="pricing-heading" className="font-fredoka font-bold text-4xl sm:text-5xl mb-4" style={{ color: "#2D1B69" }}>
              Simple,{" "}
              <span style={{ color: "#FF8A5B" }}>friendly</span>{" "}
              pricing
            </h2>
            <p className="text-lg" style={{ color: "#5E4D80" }}>No surprises. Cancel any time. 🎉</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-end">
            {plans.map((p, i) => (
              <div
                key={p.name}
                className={`relative rounded-[2rem] p-7 shadow-[0_10px_36px_-8px_rgba(0,0,0,0.12)] transition-transform hover:scale-[1.02] animate-rr-fade-up ${p.featured ? "md:-translate-y-4" : ""}`}
                style={{
                  backgroundColor: p.featured ? "#7C6CF0" : "#fff",
                  color: p.featured ? "#fff" : "#2D1B69",
                  animationDelay: `${i * 100}ms`,
                  boxShadow: p.featured
                    ? "0 16px_48px_-10px_rgba(124,108,240,0.45)"
                    : undefined,
                }}
              >
                {p.featured && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full font-fredoka font-bold text-sm rotate-[-2deg] shadow-[0_4px_12px_-2px_rgba(255,209,102,0.5)]" style={{ backgroundColor: "#FFD166", color: "#2D1B69" }}>
                    ⭐ Most loved
                  </div>
                )}
                <div className="font-fredoka font-bold text-2xl mb-1">{p.name}</div>
                <div className="flex items-end gap-1 mb-1">
                  <span className="font-fredoka font-bold text-5xl">{p.price}</span>
                  <span className="text-sm mb-2 opacity-80">/{p.cadence}</span>
                </div>
                <p className="text-sm mb-5 opacity-80">{p.blurb}</p>
                <ul className="space-y-2.5 mb-7">
                  {p.features.map((feat, fi) => (
                    <li key={fi} className="flex items-start gap-2.5 text-sm">
                      <span className="flex-shrink-0 mt-0.5 text-base">{p.featured ? "✅" : "✓"}</span>
                      <span className={p.featured ? "text-white/90" : undefined} style={p.featured ? undefined : { color: "#5E4D80" }}>{feat}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#get-started"
                  className="block w-full py-3.5 rounded-full text-center font-bold text-base shadow-[0_4px_14px_-4px_rgba(0,0,0,0.2)] hover:scale-105 active:scale-95 transition-transform focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
                  style={{
                    backgroundColor: p.featured ? "#FFD166" : "#F0EEFF",
                    color: p.featured ? "#2D1B69" : "#7C6CF0",
                  }}
                >
                  {p.cta}
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="py-20 px-4 max-w-2xl mx-auto" aria-labelledby="faq-heading">
          <div className="text-center mb-10 animate-rr-fade-up">
            <h2 id="faq-heading" className="font-fredoka font-bold text-4xl sm:text-5xl mb-4" style={{ color: "#2D1B69" }}>
              Got questions? 🙋
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="rounded-[1.5rem] overflow-hidden shadow-[0_4px_16px_-4px_rgba(0,0,0,0.07)] animate-rr-fade-up"
                style={{ backgroundColor: "#fff", animationDelay: `${i * 60}ms` }}
              >
                <button
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left hover:bg-[#FAF8FF] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7C6CF0] focus-visible:ring-inset rounded-[1.5rem]"
                  aria-expanded={openFaq === i}
                  aria-controls={`faq-answer-${i}`}
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span className="font-semibold text-base" style={{ color: "#2D1B69" }}>{faq.q}</span>
                  <span
                    className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full font-bold text-lg transition-transform"
                    style={{
                      backgroundColor: openFaq === i ? "#7C6CF0" : "#F0EEFF",
                      color: openFaq === i ? "#fff" : "#7C6CF0",
                      transform: openFaq === i ? "rotate(45deg)" : "none",
                    }}
                    aria-hidden="true"
                  >
                    +
                  </span>
                </button>
                {openFaq === i && (
                  <div id={`faq-answer-${i}`} className="px-6 pb-5 text-sm leading-relaxed" style={{ color: "#5E4D80" }}>
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* ── FINAL CTA ── */}
        <section className="py-20 px-4" aria-labelledby="final-cta-heading">
          <div className="max-w-3xl mx-auto relative overflow-hidden rounded-[3rem] p-12 text-center shadow-[0_16px_56px_-10px_rgba(124,108,240,0.3)]" style={{ background: "linear-gradient(135deg,#7C6CF0,#B8AFFF)" }}>
            {/* Blob decorations */}
            <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full opacity-30 animate-rr-blob" style={{ backgroundColor: "#FFD166", animationDelay: "0ms" }} aria-hidden="true" />
            <div className="absolute -bottom-12 -left-12 w-36 h-36 rounded-full opacity-25 animate-rr-blob" style={{ backgroundColor: "#37C8A8", animationDelay: "800ms" }} aria-hidden="true" />

            <div className="relative z-10 animate-rr-fade-up">
              <div className="text-5xl mb-4 animate-rr-bob">📚</div>
              <h2 id="final-cta-heading" className="font-fredoka font-bold text-4xl sm:text-5xl text-white mb-4">
                Ready to read smarter?
              </h2>
              <p className="text-lg text-white/85 mb-8 max-w-lg mx-auto">
                Join thousands of researchers, students, and pros who use Ratio Reader every day.
              </p>
              <a
                href="#get-started"
                className="inline-flex items-center gap-2 px-10 py-4 rounded-full font-fredoka font-bold text-xl shadow-[0_8px_28px_-6px_rgba(0,0,0,0.25)] hover:scale-105 active:scale-95 transition-transform focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                style={{ backgroundColor: "#FFD166", color: "#2D1B69" }}
              >
                {cta.primary} 🚀
              </a>
            </div>
          </div>
        </section>

        {/* ── FOOTER ── */}
        <footer className="py-12 px-4 mt-4" style={{ backgroundColor: "#FFF0E4" }} role="contentinfo">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
              {/* Brand */}
              <div className="col-span-2 md:col-span-1">
                <div className="flex items-center gap-2 mb-3">
                  <span className="flex items-center justify-center w-9 h-9 rounded-full text-white font-fredoka font-bold text-base" style={{ background: "linear-gradient(135deg,#FF8A5B,#7C6CF0)" }}>R</span>
                  <span className="font-fredoka font-bold text-xl" style={{ color: "#2D1B69" }}>{brand.name}</span>
                </div>
                <p className="text-sm" style={{ color: "#7A5C8A" }}>{brand.tagline}</p>
                <p className="text-sm mt-1" style={{ color: "#7A5C8A" }}>{brand.domain}</p>
              </div>

              {/* Product */}
              <div>
                <h3 className="font-fredoka font-bold text-base mb-3" style={{ color: "#2D1B69" }}>Product</h3>
                <ul className="space-y-2 text-sm" style={{ color: "#7A5C8A" }}>
                  {["Features", "Pricing", "Changelog", "Roadmap"].map(l => (
                    <li key={l}><a href="#" className="hover:text-[#7C6CF0] transition-colors">{l}</a></li>
                  ))}
                </ul>
              </div>

              {/* Company */}
              <div>
                <h3 className="font-fredoka font-bold text-base mb-3" style={{ color: "#2D1B69" }}>Company</h3>
                <ul className="space-y-2 text-sm" style={{ color: "#7A5C8A" }}>
                  {["About", "Blog", "Careers", "Contact"].map(l => (
                    <li key={l}><a href="#" className="hover:text-[#7C6CF0] transition-colors">{l}</a></li>
                  ))}
                </ul>
              </div>

              {/* Legal */}
              <div>
                <h3 className="font-fredoka font-bold text-base mb-3" style={{ color: "#2D1B69" }}>Legal</h3>
                <ul className="space-y-2 text-sm" style={{ color: "#7A5C8A" }}>
                  {["Privacy", "Terms", "Security", "Cookies"].map(l => (
                    <li key={l}><a href="#" className="hover:text-[#7C6CF0] transition-colors">{l}</a></li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-8 border-t border-[#F0D9C8]">
              <p className="text-sm" style={{ color: "#9B7A99" }}>© 2026 Ratio Reader. Made with 💛</p>
              {/* Doodle star */}
              <svg className="w-6 h-6 animate-rr-bob" viewBox="0 0 24 24" aria-hidden="true" style={{ animationDelay: "500ms" }}>
                <path d="M12,2 L14,9 L21,9 L15.5,13.5 L17.5,21 L12,16.5 L6.5,21 L8.5,13.5 L3,9 L10,9 Z" fill="#FFD166" />
              </svg>
              <p className="text-xs" style={{ color: "#B89AB8" }}>Powered by AI · Loved by humans</p>
            </div>
          </div>
        </footer>

      </div>
    </div>
  );
}
