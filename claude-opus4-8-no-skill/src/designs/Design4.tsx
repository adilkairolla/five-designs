import { useState } from "react";
import { Link } from "react-router-dom";
import { ScrollText, Lightbulb, Quote, Sparkles } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { brand, features, steps, stats, testimonials, faqs, plans, cta } from "@/content";

const iconMap: Record<string, LucideIcon> = {
  ScrollText,
  Lightbulb,
  Quote,
  Sparkles,
};

function FaqItem({ q, a, idx }: { q: string; a: string; idx: number }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-t border-[#EDEDED]">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-start gap-6 py-5 text-left group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF4D2E]"
        aria-expanded={open}
      >
        <span className="font-plex-mono text-[10px] uppercase tracking-[0.12em] text-[#FF4D2E] shrink-0 mt-0.5 w-6">
          {String(idx + 1).padStart(2, "0")}
        </span>
        <span className="font-inter font-600 text-sm md:text-base text-[#111111] flex-1 tracking-[-0.01em]">
          {q}
        </span>
        <span
          className="font-plex-mono text-[#FF4D2E] text-base shrink-0 mt-0.5 leading-none"
          aria-hidden="true"
        >
          {open ? "−" : "+"}
        </span>
      </button>
      {open && (
        <p className="pl-12 pb-5 font-inter text-sm text-[#555555] leading-relaxed">
          {a}
        </p>
      )}
    </div>
  );
}

export default function Design4() {
  return (
    <div className="bg-white text-[#111111] font-inter">
      {/* ── NAV ────────────────────────────────────────────────────── */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-[#EDEDED]">
        <div className="max-w-screen-xl mx-auto px-6 md:px-12 h-12 flex items-center justify-between">
          <Link
            to="/"
            className="font-inter font-700 text-sm tracking-[-0.02em] text-[#111111] hover:text-[#FF4D2E] transition-colors"
          >
            {brand.short}
          </Link>
          <nav className="hidden md:flex items-center gap-8" aria-label="Primary navigation">
            <a
              href="#features"
              className="font-plex-mono text-[10px] uppercase tracking-[0.12em] text-[#555555] hover:text-[#111111] transition-colors"
            >
              Features
            </a>
            <a
              href="#method"
              className="font-plex-mono text-[10px] uppercase tracking-[0.12em] text-[#555555] hover:text-[#111111] transition-colors"
            >
              Method
            </a>
            <a
              href="#pricing"
              className="font-plex-mono text-[10px] uppercase tracking-[0.12em] text-[#555555] hover:text-[#111111] transition-colors"
            >
              Pricing
            </a>
          </nav>
          <a
            href="#get-started"
            className="bg-[#FF4D2E] text-white font-plex-mono text-[10px] uppercase tracking-[0.12em] px-4 py-2 hover:bg-[#e03d20] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF4D2E] focus-visible:ring-offset-2"
          >
            {cta.primaryShort}
          </a>
        </div>
      </header>

      <main>
        {/* ── HERO ───────────────────────────────────────────────────── */}
        <section
          className="pt-36 pb-28 md:pt-48 md:pb-40 px-6 md:px-12 max-w-screen-xl mx-auto animate-rr-fade-up"
          aria-label="Hero"
        >
          {/* Section index */}
          <div className="flex items-center gap-3 mb-10">
            <span className="font-plex-mono text-[10px] uppercase tracking-[0.14em] text-[#FF4D2E]">
              00
            </span>
            <span className="h-px w-8 bg-[#FF4D2E]" />
            <span className="font-plex-mono text-[10px] uppercase tracking-[0.14em] text-[#999999]">
              {brand.kicker}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-y-10 md:gap-12 items-end">
            {/* Headline — spans 8 cols */}
            <div className="md:col-span-8">
              <h1 className="font-inter font-black text-[clamp(3rem,9vw,8rem)] leading-[0.9] tracking-[-0.04em] text-[#111111]">
                Read less.{" "}
                <span className="text-[#FF4D2E]">Understand</span> more.
              </h1>
            </div>

            {/* Subhead + CTAs — spans 4 cols */}
            <div className="md:col-span-4 md:pb-2">
              <p className="font-inter text-sm md:text-base text-[#555555] leading-relaxed mb-8 max-w-xs">
                {brand.subhead}
              </p>
              <div className="flex flex-col sm:flex-row md:flex-col gap-3">
                <a
                  href="#get-started"
                  className="inline-flex items-center justify-center bg-[#FF4D2E] text-white font-plex-mono text-[10px] uppercase tracking-[0.12em] px-6 py-3.5 hover:bg-[#e03d20] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF4D2E] focus-visible:ring-offset-2"
                >
                  {cta.primary} →
                </a>
                <a
                  href="#method"
                  className="inline-flex items-center justify-center border border-[#EDEDED] text-[#111111] font-plex-mono text-[10px] uppercase tracking-[0.12em] px-6 py-3.5 hover:border-[#111111] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#111111] focus-visible:ring-offset-2"
                >
                  {cta.secondary}
                </a>
              </div>
            </div>
          </div>

          {/* Hairline bottom rule */}
          <div className="mt-20 md:mt-28 h-px bg-[#EDEDED]" />
        </section>

        {/* ── STATS ──────────────────────────────────────────────────── */}
        <section aria-label="Statistics" className="px-6 md:px-12 max-w-screen-xl mx-auto pb-24 md:pb-32">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-[#EDEDED]">
            {stats.map((s, i) => (
              <div key={i} className="px-6 py-8 first:pl-0">
                <p
                  className="font-inter font-black text-[clamp(2.25rem,5vw,4.5rem)] leading-none tracking-[-0.04em] text-[#111111] mb-2"
                  style={{ animationDelay: `${i * 80}ms` }}
                >
                  {s.value}
                </p>
                <p className="font-plex-mono text-[10px] uppercase tracking-[0.1em] text-[#777777] leading-snug">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
          <div className="h-px bg-[#EDEDED] mt-0" />
        </section>

        {/* ── FEATURES ───────────────────────────────────────────────── */}
        <section
          id="features"
          aria-labelledby="features-heading"
          className="px-6 md:px-12 max-w-screen-xl mx-auto pb-24 md:pb-32"
        >
          {/* Section header row */}
          <div className="flex items-center gap-4 mb-12">
            <span className="font-plex-mono text-[10px] uppercase tracking-[0.14em] text-[#FF4D2E]">
              01
            </span>
            <span className="h-px flex-1 bg-[#EDEDED]" />
            <span
              id="features-heading"
              className="font-plex-mono text-[10px] uppercase tracking-[0.14em] text-[#777777]"
            >
              Features
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-[#EDEDED] border-t border-b border-[#EDEDED]">
            {features.map((f, i) => {
              const Icon = iconMap[f.icon];
              return (
                <div key={f.id} className="p-8 md:p-10">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="font-plex-mono text-[10px] tracking-[0.12em] text-[#FF4D2E]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {Icon && (
                      <Icon
                        size={14}
                        className="text-[#BBBBBB]"
                        aria-hidden="true"
                        strokeWidth={1.5}
                      />
                    )}
                  </div>
                  <h3 className="font-inter font-700 text-lg tracking-[-0.02em] text-[#111111] mb-3">
                    {f.title}
                  </h3>
                  <p className="font-inter text-sm text-[#666666] leading-relaxed">
                    {f.blurb}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* ── HOW IT WORKS ───────────────────────────────────────────── */}
        <section
          id="method"
          aria-labelledby="method-heading"
          className="px-6 md:px-12 max-w-screen-xl mx-auto pb-24 md:pb-32"
        >
          <div className="flex items-center gap-4 mb-12">
            <span className="font-plex-mono text-[10px] uppercase tracking-[0.14em] text-[#FF4D2E]">
              02
            </span>
            <span className="h-px flex-1 bg-[#EDEDED]" />
            <span
              id="method-heading"
              className="font-plex-mono text-[10px] uppercase tracking-[0.14em] text-[#777777]"
            >
              Method
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-y-0">
            {steps.map((step, i) => (
              <div
                key={step.n}
                className="md:col-span-12 grid grid-cols-12 items-start border-t border-[#EDEDED] py-10 md:py-12 last:border-b"
              >
                {/* Step number */}
                <div className="col-span-2 md:col-span-1">
                  <span className="font-plex-mono text-[11px] uppercase tracking-[0.12em] text-[#FF4D2E]">
                    {String(step.n).padStart(2, "0")}
                  </span>
                </div>
                {/* Step title */}
                <div className="col-span-10 md:col-span-4">
                  <h3
                    className="font-inter font-800 text-[clamp(1.5rem,3vw,2.5rem)] tracking-[-0.03em] text-[#111111] leading-tight"
                    style={{ animationDelay: `${i * 100}ms` }}
                  >
                    {step.title}
                  </h3>
                </div>
                {/* Step blurb */}
                <div className="col-span-12 md:col-span-6 md:col-start-7 mt-4 md:mt-0">
                  <p className="font-inter text-sm md:text-base text-[#555555] leading-relaxed max-w-md">
                    {step.blurb}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── TESTIMONIALS ───────────────────────────────────────────── */}
        <section
          aria-labelledby="testimonials-heading"
          className="bg-[#F7F7F7] border-t border-b border-[#EDEDED] py-24 md:py-32"
        >
          <div className="px-6 md:px-12 max-w-screen-xl mx-auto">
            <div className="flex items-center gap-4 mb-14">
              <span className="font-plex-mono text-[10px] uppercase tracking-[0.14em] text-[#FF4D2E]">
                03
              </span>
              <span className="h-px flex-1 bg-[#DDDDDD]" />
              <span
                id="testimonials-heading"
                className="font-plex-mono text-[10px] uppercase tracking-[0.14em] text-[#999999]"
              >
                Evidence
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#DDDDDD]">
              {testimonials.map((t, i) => (
                <blockquote key={i} className="px-0 md:px-10 py-8 md:py-0 first:pl-0 last:pr-0">
                  <p className="font-inter text-base md:text-lg text-[#111111] leading-snug tracking-[-0.01em] mb-6">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <footer className="font-plex-mono text-[10px] uppercase tracking-[0.12em] text-[#888888]">
                    {t.name} &middot; {t.role}
                  </footer>
                </blockquote>
              ))}
            </div>
          </div>
        </section>

        {/* ── PRICING ────────────────────────────────────────────────── */}
        <section
          id="pricing"
          aria-labelledby="pricing-heading"
          className="px-6 md:px-12 max-w-screen-xl mx-auto py-24 md:py-32"
        >
          <div className="flex items-center gap-4 mb-14">
            <span className="font-plex-mono text-[10px] uppercase tracking-[0.14em] text-[#FF4D2E]">
              04
            </span>
            <span className="h-px flex-1 bg-[#EDEDED]" />
            <span
              id="pricing-heading"
              className="font-plex-mono text-[10px] uppercase tracking-[0.14em] text-[#777777]"
            >
              Pricing
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 border border-[#EDEDED] divide-y md:divide-y-0 md:divide-x divide-[#EDEDED]">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`p-8 md:p-10 flex flex-col ${plan.featured ? "bg-[#FAFAFA]" : ""}`}
              >
                {/* Plan name row */}
                <div className="flex items-center gap-3 mb-6">
                  <span className="font-plex-mono text-[11px] uppercase tracking-[0.12em] text-[#777777]">
                    {plan.name}
                  </span>
                  {plan.featured && (
                    <span className="font-plex-mono text-[9px] uppercase tracking-[0.14em] text-white bg-[#FF4D2E] px-2 py-0.5">
                      Popular
                    </span>
                  )}
                </div>

                {/* Price */}
                <div className="mb-2">
                  <span className="font-inter font-900 text-[clamp(2rem,4vw,3.5rem)] tracking-[-0.04em] text-[#111111] leading-none">
                    {plan.price}
                  </span>
                  <span className="font-plex-mono text-[10px] uppercase tracking-[0.1em] text-[#999999] ml-2">
                    / {plan.cadence}
                  </span>
                </div>

                <p className="font-inter text-sm text-[#666666] mb-8">{plan.blurb}</p>

                <ul className="space-y-2 mb-8 flex-1" aria-label={`${plan.name} plan features`}>
                  {plan.features.map((feat, fi) => (
                    <li key={fi} className="flex items-start gap-2 font-inter text-sm text-[#444444]">
                      <span className="text-[#FF4D2E] mt-0.5 shrink-0 font-plex-mono text-xs">→</span>
                      {feat}
                    </li>
                  ))}
                </ul>

                <a
                  href="#get-started"
                  className={`inline-flex items-center justify-center font-plex-mono text-[10px] uppercase tracking-[0.12em] px-5 py-3 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${
                    plan.featured
                      ? "bg-[#FF4D2E] text-white hover:bg-[#e03d20] focus-visible:ring-[#FF4D2E]"
                      : "border border-[#DDDDDD] text-[#111111] hover:border-[#111111] focus-visible:ring-[#111111]"
                  }`}
                >
                  {plan.cta}
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* ── FAQ ────────────────────────────────────────────────────── */}
        <section
          aria-labelledby="faq-heading"
          className="bg-[#F7F7F7] border-t border-[#EDEDED] py-24 md:py-32"
        >
          <div className="px-6 md:px-12 max-w-screen-xl mx-auto">
            <div className="flex items-center gap-4 mb-14">
              <span className="font-plex-mono text-[10px] uppercase tracking-[0.14em] text-[#FF4D2E]">
                05
              </span>
              <span className="h-px flex-1 bg-[#DDDDDD]" />
              <span
                id="faq-heading"
                className="font-plex-mono text-[10px] uppercase tracking-[0.14em] text-[#999999]"
              >
                FAQ
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12">
              <div className="md:col-span-8 md:col-start-3">
                {faqs.map((item, i) => (
                  <FaqItem key={i} q={item.q} a={item.a} idx={i} />
                ))}
                <div className="border-t border-[#DDDDDD]" />
              </div>
            </div>
          </div>
        </section>

        {/* ── FINAL CTA ──────────────────────────────────────────────── */}
        <section
          id="get-started"
          aria-label="Call to action"
          className="px-6 md:px-12 max-w-screen-xl mx-auto py-32 md:py-48"
        >
          <div className="grid grid-cols-1 md:grid-cols-12 items-end gap-10">
            <div className="md:col-span-8">
              <div className="flex items-center gap-3 mb-8">
                <span className="h-px w-8 bg-[#FF4D2E]" />
                <span className="font-plex-mono text-[10px] uppercase tracking-[0.14em] text-[#FF4D2E]">
                  {brand.taglineAlt2}
                </span>
              </div>
              <h2 className="font-inter font-black text-[clamp(2.5rem,7vw,6.5rem)] leading-[0.88] tracking-[-0.04em] text-[#111111]">
                Your first brief<br />
                is <span className="text-[#FF4D2E]">free.</span>
              </h2>
            </div>
            <div className="md:col-span-4 flex flex-col gap-4 md:pb-3">
              <p className="font-inter text-sm text-[#666666] leading-relaxed max-w-xs">
                Upload any PDF and see Ratio Reader at work in under thirty seconds.
              </p>
              <a
                href="#"
                className="inline-flex items-center justify-center bg-[#FF4D2E] text-white font-plex-mono text-[10px] uppercase tracking-[0.12em] px-7 py-4 hover:bg-[#e03d20] transition-colors w-full md:w-auto focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF4D2E] focus-visible:ring-offset-2"
              >
                {cta.primary} →
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* ── FOOTER ─────────────────────────────────────────────────── */}
      <footer
        className="border-t border-[#EDEDED] px-6 md:px-12 max-w-screen-xl mx-auto py-12 md:py-16"
        role="contentinfo"
      >
        <div className="grid grid-cols-2 md:grid-cols-12 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-3">
            <Link
              to="/"
              className="font-inter font-700 text-sm tracking-[-0.02em] text-[#111111] hover:text-[#FF4D2E] transition-colors"
            >
              {brand.name}
            </Link>
            <p className="font-plex-mono text-[10px] uppercase tracking-[0.1em] text-[#999999] mt-2">
              {brand.domain}
            </p>
          </div>

          {/* Nav columns */}
          <nav
            className="col-span-1 md:col-span-2 md:col-start-5 flex flex-col gap-2"
            aria-label="Product links"
          >
            <span className="font-plex-mono text-[9px] uppercase tracking-[0.14em] text-[#AAAAAA] mb-1">
              Product
            </span>
            {["Features", "Pricing", "Changelog", "Blog"].map((l) => (
              <a
                key={l}
                href="#"
                className="font-plex-mono text-[10px] uppercase tracking-[0.1em] text-[#555555] hover:text-[#111111] transition-colors"
              >
                {l}
              </a>
            ))}
          </nav>

          <nav
            className="col-span-1 md:col-span-2 flex flex-col gap-2"
            aria-label="Company links"
          >
            <span className="font-plex-mono text-[9px] uppercase tracking-[0.14em] text-[#AAAAAA] mb-1">
              Company
            </span>
            {["About", "Privacy", "Terms", "Contact"].map((l) => (
              <a
                key={l}
                href="#"
                className="font-plex-mono text-[10px] uppercase tracking-[0.1em] text-[#555555] hover:text-[#111111] transition-colors"
              >
                {l}
              </a>
            ))}
          </nav>

          {/* Copyright */}
          <div className="col-span-2 md:col-span-3 md:col-start-10 flex items-end justify-start md:justify-end">
            <p className="font-plex-mono text-[9px] uppercase tracking-[0.1em] text-[#BBBBBB]">
              © 2026 Ratio Reader
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
