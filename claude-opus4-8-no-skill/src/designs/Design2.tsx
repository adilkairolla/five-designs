import { useState } from "react";
import { Link } from "react-router-dom";
import { ScrollText, Lightbulb, Quote, Sparkles, Plus, Minus, ChevronRight } from "lucide-react";
import { brand, features, steps, stats, testimonials, faqs, plans, cta } from "@/content";
import type { Feature, Plan, Faq } from "@/content";

const iconMap: Record<string, React.FC<{ size?: number; strokeWidth?: number }>> = {
  ScrollText,
  Lightbulb,
  Quote,
  Sparkles,
};

const featureBg = ["bg-[#FFE600]", "bg-[#2F5BFF]", "bg-[#FF5CA8]", "bg-white"];
const featureTextColor = ["text-black", "text-white", "text-black", "text-black"];
const featureIconBg = ["bg-black", "bg-[#FFE600]", "bg-black", "bg-[#FFE600]"];
const featureIconColor = ["text-[#FFE600]", "text-black", "text-[#FFE600]", "text-black"];

const stepColors = ["bg-[#FFE600]", "bg-[#2F5BFF]", "bg-[#FF5CA8]"];
const stepTextColors = ["text-black", "text-white", "text-black"];

const statBg = ["bg-[#2F5BFF]", "bg-[#FFE600]", "bg-[#FF5CA8]", "bg-black"];
const statTextColor = ["text-white", "text-black", "text-black", "text-white"];

const testimonialRotations = ["-2deg", "2deg", "-1deg"];
const testimonialBg = ["bg-[#FFE600]", "bg-white", "bg-[#FF5CA8]"];

function FeatureCard({ feature, index }: { feature: Feature; index: number }) {
  const IconComp = iconMap[feature.icon];
  return (
    <div
      className={`${featureBg[index]} ${featureTextColor[index]} border-[3px] border-black shadow-[6px_6px_0_#0A0A0A] p-6 flex flex-col gap-4 transition-transform hover:-translate-y-1`}
    >
      <div className={`${featureIconBg[index]} ${featureIconColor[index]} w-12 h-12 border-[3px] border-black shadow-[3px_3px_0_#0A0A0A] flex items-center justify-center`}>
        {IconComp && <IconComp size={22} strokeWidth={2.5} />}
      </div>
      <h3 className="font-grotesk font-bold text-xl uppercase tracking-tight leading-none">
        {feature.title}
      </h3>
      <p className="font-inter text-sm leading-relaxed opacity-80">{feature.blurb}</p>
    </div>
  );
}

function StepBlock({ n, title, blurb, index }: { n: number; title: string; blurb: string; index: number }) {
  const num = String(n).padStart(2, "0");
  return (
    <div
      className={`${stepColors[index]} ${stepTextColors[index]} border-[3px] border-black shadow-[8px_8px_0_#0A0A0A] p-8 flex flex-col sm:flex-row gap-6 items-start`}
    >
      <div className="font-space-mono font-bold text-7xl leading-none opacity-25 select-none flex-shrink-0">
        {num}
      </div>
      <div className="flex flex-col gap-2 pt-2">
        <h3 className="font-grotesk font-bold text-2xl uppercase tracking-tight">{title}</h3>
        <p className="font-inter text-base leading-relaxed opacity-80">{blurb}</p>
      </div>
    </div>
  );
}

function StatCell({ value, label, index }: { value: string; label: string; index: number }) {
  return (
    <div
      className={`${statBg[index]} ${statTextColor[index]} border-[3px] border-black shadow-[6px_6px_0_#0A0A0A] p-6 flex flex-col gap-2`}
    >
      <span className="font-grotesk font-bold text-5xl sm:text-6xl leading-none">{value}</span>
      <span className="font-space-mono text-xs uppercase tracking-widest opacity-75">{label}</span>
    </div>
  );
}

function TestimonialCard({ quote, name, role, index }: { quote: string; name: string; role: string; index: number }) {
  return (
    <div
      className={`${testimonialBg[index]} border-[3px] border-black shadow-[6px_6px_0_#0A0A0A] p-6 flex flex-col gap-4`}
      style={{ transform: `rotate(${testimonialRotations[index]})` }}
    >
      <p className="font-grotesk text-black font-medium text-base leading-relaxed">&ldquo;{quote}&rdquo;</p>
      <div className="border-t-[2px] border-black pt-3 mt-auto">
        <p className="font-space-mono text-black text-xs font-bold uppercase">{name}</p>
        <p className="font-space-mono text-black text-xs opacity-60">{role}</p>
      </div>
    </div>
  );
}

function PricingCard({ plan }: { plan: Plan }) {
  const featured = plan.featured;
  return (
    <div
      className={`relative flex flex-col gap-5 border-[3px] border-black p-7 ${featured ? "bg-[#2F5BFF] text-white shadow-[10px_10px_0_#0A0A0A] scale-105" : "bg-white text-black shadow-[6px_6px_0_#0A0A0A]"}`}
      style={featured ? { transform: "scale(1.04) rotate(-0.5deg)" } : undefined}
    >
      {featured && (
        <div
          className="absolute -top-5 -right-4 bg-[#FFE600] text-black font-space-mono text-xs font-bold uppercase border-[2px] border-black shadow-[3px_3px_0_#000] px-3 py-1 animate-rr-bob"
          style={{ transform: "rotate(4deg)" }}
        >
          MOST POPULAR
        </div>
      )}
      <div>
        <p className={`font-space-mono text-xs uppercase tracking-widest mb-1 ${featured ? "text-[#FFE600]" : "text-[#2F5BFF]"}`}>
          {plan.name}
        </p>
        <div className="flex items-baseline gap-1">
          <span className="font-grotesk font-bold text-5xl">{plan.price}</span>
          <span className={`font-space-mono text-xs ${featured ? "text-white/60" : "text-black/50"}`}>/{plan.cadence}</span>
        </div>
        <p className={`font-inter text-sm mt-2 ${featured ? "text-white/75" : "text-black/60"}`}>{plan.blurb}</p>
      </div>
      <ul className="flex flex-col gap-2 flex-1">
        {plan.features.map((f) => (
          <li key={f} className="flex items-start gap-2">
            <ChevronRight size={14} strokeWidth={3} className={`flex-shrink-0 mt-0.5 ${featured ? "text-[#FFE600]" : "text-[#2F5BFF]"}`} />
            <span className="font-inter text-sm">{f}</span>
          </li>
        ))}
      </ul>
      <button
        className={`font-grotesk font-bold text-sm uppercase tracking-wide border-[3px] border-black py-3 px-5 transition-all shadow-[4px_4px_0_#000] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_#000] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none ${featured ? "bg-[#FFE600] text-black" : "bg-black text-white"}`}
      >
        {plan.cta}
      </button>
    </div>
  );
}

function FaqRow({ q, a }: Faq) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-[3px] border-black bg-white shadow-[4px_4px_0_#0A0A0A]">
      <button
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2F5BFF]"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
      >
        <span className="font-grotesk font-bold text-base uppercase tracking-tight">{q}</span>
        <span className="flex-shrink-0">
          {open ? <Minus size={18} strokeWidth={3} /> : <Plus size={18} strokeWidth={3} />}
        </span>
      </button>
      {open && (
        <div className="px-6 pb-5 border-t-[2px] border-black">
          <p className="font-inter text-sm leading-relaxed text-black/70 pt-4">{a}</p>
        </div>
      )}
    </div>
  );
}

export default function Design2() {
  return (
    <div className="bg-white min-h-screen font-grotesk text-black">
      {/* ── NAV ── */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#FFE600] border-b-[3px] border-black h-14 flex items-center px-4 sm:px-8 justify-between">
        <div className="flex items-center gap-3">
          <Link to="/" className="font-space-mono text-xs text-black/50 hover:text-black transition-colors mr-2 hidden sm:inline">
            ← all designs
          </Link>
          <span className="font-grotesk font-bold text-lg uppercase tracking-tight">{brand.name}</span>
          <span className="font-space-mono text-[10px] bg-black text-[#FFE600] px-2 py-0.5 uppercase tracking-widest">
            {brand.kicker}
          </span>
        </div>
        <a
          href="#get-started"
          className="font-grotesk font-bold text-xs uppercase tracking-wide bg-black text-[#FFE600] border-[2px] border-black shadow-[3px_3px_0_#555] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[2px_2px_0_#555] active:translate-x-[3px] active:translate-y-[3px] active:shadow-none transition-all px-4 py-2"
        >
          {cta.primaryShort}
        </a>
      </nav>

      {/* ── HERO ── */}
      <section className="bg-[#FFE600] border-b-[3px] border-black pt-28 pb-20 px-4 sm:px-8 relative overflow-hidden" id="get-started">
        {/* Background grid lines */}
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{
          backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 39px, #0A0A0A 39px, #0A0A0A 40px), repeating-linear-gradient(90deg, transparent, transparent 39px, #0A0A0A 39px, #0A0A0A 40px)"
        }} />

        <div className="relative max-w-5xl mx-auto">
          {/* Sticker badge */}
          <div
            className="inline-block font-space-mono text-xs font-bold uppercase bg-[#FF5CA8] text-black border-[2px] border-black shadow-[4px_4px_0_#000] px-4 py-2 mb-8 animate-rr-bob"
            style={{ transform: "rotate(-6deg)" }}
          >
            ★ NEW! READ 10× FASTER ★
          </div>

          <h1 className="font-grotesk font-bold text-[clamp(2.5rem,10.5vw,8.5rem)] uppercase leading-[0.95] tracking-tighter mb-6">
            <span className="block">
              READ{" "}
              <span className="inline-block bg-black text-[#FFE600] px-3">LESS.</span>
            </span>
            <span className="block">
              <span className="inline-block bg-[#2F5BFF] text-white px-3">UNDERSTAND</span>
            </span>
            <span className="block">
              <span className="inline-block bg-[#FF5CA8] text-black px-3">MORE.</span>
            </span>
          </h1>

          <p className="font-inter text-lg sm:text-xl text-black/70 max-w-2xl mb-10 leading-relaxed">
            {brand.subhead}
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="font-grotesk font-bold text-base uppercase tracking-wide bg-black text-white border-[3px] border-black shadow-[6px_6px_0_#0A0A0A] hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-[3px_3px_0_#0A0A0A] active:translate-x-[6px] active:translate-y-[6px] active:shadow-none transition-all px-8 py-4">
              {cta.primary} →
            </button>
            <button className="font-grotesk font-bold text-base uppercase tracking-wide bg-transparent text-black border-[3px] border-black shadow-[6px_6px_0_#0A0A0A] hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-[3px_3px_0_#0A0A0A] active:translate-x-[6px] active:translate-y-[6px] active:shadow-none transition-all px-8 py-4">
              {cta.secondary}
            </button>
          </div>
        </div>
      </section>

      {/* ── MARQUEE BAND ── */}
      <div className="bg-black border-b-[3px] border-black overflow-hidden py-3" aria-hidden="true">
        <div className="flex animate-rr-marquee whitespace-nowrap">
          {Array.from({ length: 8 }).map((_, i) => (
            <span key={i} className="font-space-mono text-[#FFE600] text-sm font-bold uppercase tracking-widest mr-8">
              READ LESS ★ UNDERSTAND MORE ★ RATIO READER ★&nbsp;
            </span>
          ))}
        </div>
      </div>

      {/* ── FEATURES ── */}
      <section className="bg-white border-b-[3px] border-black py-20 px-4 sm:px-8" aria-labelledby="features-heading">
        <div className="max-w-5xl mx-auto">
          <p className="font-space-mono text-xs uppercase tracking-widest text-[#2F5BFF] mb-2">What you get</p>
          <h2 id="features-heading" className="font-grotesk font-bold text-4xl sm:text-6xl uppercase tracking-tight mb-12">
            Four tools.<br />One sharp brief.
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, i) => (
              <FeatureCard key={feature.id} feature={feature} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="bg-[#0A0A0A] border-b-[3px] border-black py-20 px-4 sm:px-8" aria-labelledby="steps-heading">
        <div className="max-w-5xl mx-auto">
          <p className="font-space-mono text-xs uppercase tracking-widest text-[#FFE600] mb-2">How it works</p>
          <h2 id="steps-heading" className="font-grotesk font-bold text-4xl sm:text-6xl uppercase tracking-tight text-white mb-12">
            Three steps.<br />Zero fluff.
          </h2>
          <div className="flex flex-col gap-4">
            {steps.map((step, i) => (
              <StepBlock key={step.n} n={step.n} title={step.title} blurb={step.blurb} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="bg-white border-b-[3px] border-black py-20 px-4 sm:px-8" aria-labelledby="stats-heading">
        <div className="max-w-5xl mx-auto">
          <p className="font-space-mono text-xs uppercase tracking-widest text-[#FF5CA8] mb-2">By the numbers</p>
          <h2 id="stats-heading" className="font-grotesk font-bold text-4xl sm:text-6xl uppercase tracking-tight mb-12">
            The numbers<br />don&apos;t lie.
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {stats.map((stat, i) => (
              <StatCell key={stat.label} value={stat.value} label={stat.label} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="bg-[#2F5BFF] border-b-[3px] border-black py-20 px-4 sm:px-8" aria-labelledby="testimonials-heading">
        <div className="max-w-5xl mx-auto">
          <p className="font-space-mono text-xs uppercase tracking-widest text-[#FFE600] mb-2">Real readers</p>
          <h2 id="testimonials-heading" className="font-grotesk font-bold text-4xl sm:text-6xl uppercase tracking-tight text-white mb-14">
            They said it,<br />not us.
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12">
            {testimonials.map((t, i) => (
              <TestimonialCard key={t.name} quote={t.quote} name={t.name} role={t.role} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── PRICING ── */}
      <section className="bg-[#FFE600] border-b-[3px] border-black py-20 px-4 sm:px-8" aria-labelledby="pricing-heading">
        <div className="max-w-5xl mx-auto">
          <p className="font-space-mono text-xs uppercase tracking-widest text-black/50 mb-2">Pricing</p>
          <h2 id="pricing-heading" className="font-grotesk font-bold text-4xl sm:text-6xl uppercase tracking-tight mb-14">
            Pick your plan.<br />No tricks.
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 items-start">
            {plans.map((plan) => (
              <PricingCard key={plan.name} plan={plan} />
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="bg-white border-b-[3px] border-black py-20 px-4 sm:px-8" aria-labelledby="faq-heading">
        <div className="max-w-3xl mx-auto">
          <p className="font-space-mono text-xs uppercase tracking-widest text-[#2F5BFF] mb-2">FAQ</p>
          <h2 id="faq-heading" className="font-grotesk font-bold text-4xl sm:text-6xl uppercase tracking-tight mb-10">
            Questions?<br />Answered.
          </h2>
          <div className="flex flex-col gap-3">
            {faqs.map((faq) => (
              <FaqRow key={faq.q} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="bg-[#FF5CA8] border-b-[3px] border-black py-24 px-4 sm:px-8 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{
          backgroundImage: "radial-gradient(circle, #0A0A0A 1px, transparent 1px)",
          backgroundSize: "24px 24px"
        }} />
        <div className="relative max-w-3xl mx-auto flex flex-col items-center gap-8">
          <div
            className="font-space-mono text-xs font-bold uppercase bg-[#FFE600] text-black border-[2px] border-black shadow-[3px_3px_0_#000] px-4 py-2 animate-rr-bob"
            style={{ transform: "rotate(-3deg)" }}
            aria-hidden="true"
          >
            ★ IT&apos;S FREE TO START ★
          </div>
          <h2 className="font-grotesk font-bold text-5xl sm:text-8xl uppercase leading-none tracking-tighter text-black">
            STOP READING.<br />
            <span className="inline-block bg-black text-white px-4">START KNOWING.</span>
          </h2>
          <p className="font-inter text-lg text-black/70 max-w-xl">
            {brand.taglineAlt} No credit card required.
          </p>
          <button className="font-grotesk font-bold text-xl uppercase tracking-wide bg-black text-white border-[3px] border-black shadow-[8px_8px_0_#0A0A0A] hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-[4px_4px_0_#0A0A0A] active:translate-x-[8px] active:translate-y-[8px] active:shadow-none transition-all px-10 py-5">
            {cta.primary} →
          </button>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-[#0A0A0A] py-14 px-4 sm:px-8">
        <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-8 mb-10">
          <div className="col-span-2 sm:col-span-1">
            <p className="font-grotesk font-bold text-xl uppercase text-white mb-1">{brand.name}</p>
            <p className="font-space-mono text-xs text-white/40 uppercase">{brand.domain}</p>
          </div>
          <div>
            <p className="font-space-mono text-xs uppercase tracking-widest text-white/30 mb-3">Product</p>
            <ul className="flex flex-col gap-2">
              {["Features", "Pricing", "Changelog", "Roadmap"].map((l) => (
                <li key={l}>
                  <a href="#" className="font-inter text-sm text-white/60 hover:text-white transition-colors">{l}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-space-mono text-xs uppercase tracking-widest text-white/30 mb-3">Company</p>
            <ul className="flex flex-col gap-2">
              {["About", "Blog", "Press", "Careers"].map((l) => (
                <li key={l}>
                  <a href="#" className="font-inter text-sm text-white/60 hover:text-white transition-colors">{l}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-space-mono text-xs uppercase tracking-widest text-white/30 mb-3">Legal</p>
            <ul className="flex flex-col gap-2">
              {["Privacy", "Terms", "Security", "Cookies"].map((l) => (
                <li key={l}>
                  <a href="#" className="font-inter text-sm text-white/60 hover:text-white transition-colors">{l}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t-[2px] border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="font-space-mono text-xs text-white/30">© 2026 Ratio Reader. All rights reserved.</p>
          <Link to="/" className="font-space-mono text-xs text-white/30 hover:text-white transition-colors">
            ← all designs
          </Link>
        </div>
      </footer>
    </div>
  );
}
