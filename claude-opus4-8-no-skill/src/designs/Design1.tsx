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

export default function Design1() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div
      className="min-h-screen rr-grain"
      style={{ backgroundColor: "#F3ECDD", color: "#1A1714" }}
    >
      {/* ── MASTHEAD / NAV ── */}
      <header
        className="sticky top-0 z-50 rr-grain"
        style={{ backgroundColor: "#F3ECDD", borderBottom: "2px solid #1A1714" }}
        role="banner"
      >
        <div
          className="mx-auto max-w-6xl px-4 md:px-8"
          style={{ borderBottom: "1px solid #C9B79C" }}
        >
          {/* Dateline bar */}
          <div
            className="flex items-center justify-between py-1"
            style={{ borderBottom: "1px solid #C9B79C" }}
          >
            <span
              className="font-space-mono text-[10px] uppercase tracking-widest"
              style={{ color: "#8C2F1E" }}
            >
              Vol. I · No. 1 · Wednesday, May 28, 2026
            </span>
            <Link
              to="/"
              className="font-space-mono text-[10px] uppercase tracking-widest transition-opacity hover:opacity-60"
              style={{ color: "#5E6149" }}
            >
              ← All Designs
            </Link>
          </div>
          {/* Brand name + CTA row */}
          <div className="flex items-center justify-between py-3">
            <span
              className="font-fraunces text-2xl md:text-4xl font-black leading-none"
              style={{ color: "#1A1714" }}
            >
              {brand.name}
            </span>
            <nav className="flex items-center gap-3 md:gap-6" aria-label="Main navigation">
              <span
                className="hidden md:block font-space-mono text-[11px] uppercase tracking-widest"
                style={{ color: "#5E6149" }}
              >
                {brand.kicker}
              </span>
              <a
                href="#pricing"
                className="font-space-mono text-[11px] uppercase tracking-widest px-4 py-2 border transition-all hover:opacity-80"
                style={{
                  borderColor: "#1A1714",
                  color: "#1A1714",
                  backgroundColor: "transparent",
                }}
              >
                Subscribe
              </a>
              <button
                className="font-space-mono text-[11px] uppercase tracking-widest px-4 py-2 transition-all hover:opacity-90"
                style={{ backgroundColor: "#8C2F1E", color: "#F3ECDD" }}
                aria-label={cta.primaryShort}
              >
                {cta.primaryShort}
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* ── HERO — Front Page ── */}
      <section
        className="mx-auto max-w-6xl px-4 md:px-8 pt-10 pb-16 animate-rr-fade-up"
        aria-label="Hero"
      >
        {/* Kicker / Category label */}
        <div className="flex items-center gap-3 mb-6">
          <span
            className="font-space-mono text-[10px] uppercase tracking-[0.2em]"
            style={{ color: "#8C2F1E" }}
          >
            {brand.kicker}
          </span>
          <span
            className="flex-1 h-px"
            style={{ backgroundColor: "#C9B79C" }}
            aria-hidden="true"
          />
        </div>

        {/* Giant headline */}
        <h1
          className="font-fraunces font-black leading-[0.92] mb-8"
          style={{ fontSize: "clamp(3rem, 9vw, 8rem)", color: "#1A1714" }}
        >
          Read less.{" "}
          <span className="italic relative inline-block">
            <span
              className="relative z-10"
              style={{ color: "#8C2F1E" }}
            >
              Understand
            </span>
            {/* Highlight sweep */}
            <span
              className="absolute inset-x-0 bottom-1 h-[0.18em] animate-rr-sweep origin-left"
              style={{ backgroundColor: "#C9B79C", zIndex: 0 }}
              aria-hidden="true"
            />
          </span>{" "}
          more.
        </h1>

        {/* Editorial columns */}
        <div className="grid md:grid-cols-12 gap-0 md:gap-8">
          {/* Lead / standfirst */}
          <div className="md:col-span-7">
            <p
              className="font-newsreader text-xl md:text-2xl leading-relaxed mb-6"
              style={{ color: "#1A1714" }}
            >
              {brand.taglineAlt}
            </p>
            {/* Drop cap paragraph */}
            <p
              className="font-newsreader text-base md:text-lg leading-relaxed"
              style={{ color: "#1A1714" }}
            >
              <span
                className="float-left font-fraunces font-black leading-none mr-2 mt-1"
                style={{
                  fontSize: "clamp(3.5rem, 6vw, 5rem)",
                  color: "#8C2F1E",
                  lineHeight: "0.8",
                }}
                aria-hidden="true"
              >
                U
              </span>
              pload a PDF and Ratio Reader distills it into a sharp summary, the quotes that matter,
              guided hints, and the insights you&apos;d otherwise miss. No more drowning in pages.
              No more skimming and hoping for the best. The signal, without the noise.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              <button
                className="font-space-mono text-sm uppercase tracking-widest px-6 py-3 transition-all hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#8C2F1E]"
                style={{
                  backgroundColor: "#8C2F1E",
                  color: "#F3ECDD",
                }}
                aria-label={cta.primary}
              >
                {cta.primary}
              </button>
              <a
                href="#how-it-works"
                className="font-space-mono text-sm uppercase tracking-widest px-6 py-3 border transition-all hover:opacity-70 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1A1714]"
                style={{
                  borderColor: "#1A1714",
                  color: "#1A1714",
                }}
              >
                {cta.secondary}
              </a>
            </div>
          </div>

          {/* Sidebar — pull quote */}
          <div
            className="md:col-span-5 mt-10 md:mt-0 pl-0 md:pl-8"
            style={{ borderLeft: "1px solid #C9B79C" }}
          >
            <p
              className="font-space-mono text-[10px] uppercase tracking-widest mb-4"
              style={{ color: "#5E6149" }}
            >
              Pull Quote
            </p>
            <blockquote>
              <p
                className="font-fraunces italic text-2xl md:text-3xl leading-tight"
                style={{ color: "#8C2F1E" }}
              >
                &ldquo;It&apos;s like having a brilliant friend who already read the book.&rdquo;
              </p>
              <footer
                className="font-space-mono text-[11px] uppercase tracking-widest mt-4"
                style={{ color: "#5E6149" }}
              >
                — Priya Raman, Grad student, philosophy
              </footer>
            </blockquote>

            {/* Stats bar teaser */}
            <div
              className="mt-8 pt-6 grid grid-cols-2 gap-4"
              style={{ borderTop: "1px solid #C9B79C" }}
            >
              {stats.slice(0, 2).map((s, i) => (
                <div key={i}>
                  <p
                    className="font-fraunces font-black text-3xl leading-none"
                    style={{ color: "#8C2F1E" }}
                  >
                    {s.value}
                  </p>
                  <p
                    className="font-newsreader text-sm mt-1"
                    style={{ color: "#5E6149" }}
                  >
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section rule */}
      <div
        className="mx-auto max-w-6xl px-4 md:px-8"
        aria-hidden="true"
      >
        <div style={{ borderTop: "2px solid #1A1714", borderBottom: "1px solid #C9B79C", height: "6px" }} />
      </div>

      {/* ── FEATURES — Departments ── */}
      <section
        id="features"
        className="mx-auto max-w-6xl px-4 md:px-8 py-16"
        aria-labelledby="features-heading"
      >
        <div className="flex items-center gap-4 mb-12">
          <span
            className="font-space-mono text-[10px] uppercase tracking-[0.25em]"
            style={{ color: "#8C2F1E" }}
          >
            Departments
          </span>
          <span className="flex-1 h-px" style={{ backgroundColor: "#C9B79C" }} aria-hidden="true" />
        </div>

        <h2
          id="features-heading"
          className="font-fraunces font-black text-4xl md:text-6xl leading-tight mb-12"
          style={{ color: "#1A1714" }}
        >
          What <em>Ratio</em> does for you
        </h2>

        <div className="grid md:grid-cols-2 gap-0">
          {features.map((f, i) => {
            const Icon = iconMap[f.icon as IconName];
            return (
              <article
                key={f.id}
                className="p-6 md:p-8"
                style={{
                  borderTop: "1px solid #C9B79C",
                  borderRight: i % 2 === 0 ? "1px solid #C9B79C" : undefined,
                }}
                aria-labelledby={`feat-${f.id}`}
              >
                <p
                  className="font-space-mono text-[10px] uppercase tracking-widest mb-4"
                  style={{ color: "#8C2F1E" }}
                >
                  Dept. 0{i + 1}
                </p>
                <div className="flex items-start gap-4">
                  <span style={{ color: "#C9B79C" }} aria-hidden="true">
                    <Icon size={20} />
                  </span>
                  <div>
                    <h3
                      id={`feat-${f.id}`}
                      className="font-fraunces font-bold text-xl md:text-2xl mb-2"
                      style={{ color: "#1A1714" }}
                    >
                      {f.title}
                    </h3>
                    <p
                      className="font-newsreader text-base md:text-lg leading-relaxed"
                      style={{ color: "#5E6149" }}
                    >
                      {f.blurb}
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* Section rule */}
      <div className="mx-auto max-w-6xl px-4 md:px-8" aria-hidden="true">
        <div style={{ borderTop: "2px solid #1A1714", borderBottom: "1px solid #C9B79C", height: "6px" }} />
      </div>

      {/* ── HOW IT WORKS ── */}
      <section
        id="how-it-works"
        className="mx-auto max-w-6xl px-4 md:px-8 py-16"
        aria-labelledby="how-heading"
      >
        <div className="flex items-center gap-4 mb-12">
          <span
            className="font-space-mono text-[10px] uppercase tracking-[0.25em]"
            style={{ color: "#8C2F1E" }}
          >
            How the Press Works
          </span>
          <span className="flex-1 h-px" style={{ backgroundColor: "#C9B79C" }} aria-hidden="true" />
        </div>

        <h2
          id="how-heading"
          className="font-fraunces font-black text-4xl md:text-6xl leading-tight mb-16"
          style={{ color: "#1A1714" }}
        >
          Three steps to clarity
        </h2>

        <div className="grid md:grid-cols-3 gap-0">
          {steps.map((s, i) => (
            <div
              key={s.n}
              className="py-8 px-6 md:px-0 md:pr-8"
              style={{
                borderTop: "1px solid #C9B79C",
                paddingLeft: i > 0 ? "2rem" : undefined,
                borderLeft: i > 0 ? "1px solid #C9B79C" : undefined,
              }}
            >
              <p
                className="font-fraunces font-black leading-none mb-6"
                style={{ fontSize: "clamp(4rem, 8vw, 7rem)", color: "#C9B79C" }}
                aria-hidden="true"
              >
                {String(s.n).padStart(2, "0")}
              </p>
              <h3
                className="font-fraunces font-bold text-xl md:text-2xl mb-3"
                style={{ color: "#1A1714" }}
              >
                {s.title}
              </h3>
              <p
                className="font-newsreader text-base md:text-lg leading-relaxed"
                style={{ color: "#5E6149" }}
              >
                {s.blurb}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Section rule */}
      <div className="mx-auto max-w-6xl px-4 md:px-8" aria-hidden="true">
        <div style={{ borderTop: "2px solid #1A1714", borderBottom: "1px solid #C9B79C", height: "6px" }} />
      </div>

      {/* ── STATS — Figures Bar ── */}
      <section
        className="mx-auto max-w-6xl px-4 md:px-8 py-16"
        aria-labelledby="stats-heading"
      >
        <p
          id="stats-heading"
          className="font-space-mono text-[10px] uppercase tracking-[0.25em] mb-10"
          style={{ color: "#8C2F1E" }}
        >
          The Numbers
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-0">
          {stats.map((s, i) => (
            <div
              key={i}
              className="py-6 pr-4 md:pr-8"
              style={{
                borderLeft: i > 0 ? "1px solid #C9B79C" : undefined,
                paddingLeft: i > 0 ? "1.5rem" : undefined,
              }}
            >
              <p
                className="font-fraunces font-black leading-none"
                style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)", color: "#8C2F1E" }}
              >
                {s.value}
              </p>
              <p
                className="font-space-mono text-[10px] uppercase tracking-wider mt-2 leading-tight"
                style={{ color: "#5E6149" }}
              >
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Section rule */}
      <div className="mx-auto max-w-6xl px-4 md:px-8" aria-hidden="true">
        <div style={{ borderTop: "2px solid #1A1714", borderBottom: "1px solid #C9B79C", height: "6px" }} />
      </div>

      {/* ── TESTIMONIALS — Letters to the Editor ── */}
      <section
        className="mx-auto max-w-6xl px-4 md:px-8 py-16"
        aria-labelledby="letters-heading"
      >
        <div className="flex items-center gap-4 mb-12">
          <span
            className="font-space-mono text-[10px] uppercase tracking-[0.25em]"
            style={{ color: "#8C2F1E" }}
          >
            Letters to the Editor
          </span>
          <span className="flex-1 h-px" style={{ backgroundColor: "#C9B79C" }} aria-hidden="true" />
        </div>

        <h2
          id="letters-heading"
          className="font-fraunces font-black text-4xl md:text-5xl leading-tight mb-16"
          style={{ color: "#1A1714" }}
        >
          Dispatches from our readers
        </h2>

        <div className="grid md:grid-cols-3 gap-0">
          {testimonials.map((t, i) => (
            <figure
              key={i}
              className="py-8 px-0 md:px-6"
              style={{
                borderTop: "1px solid #C9B79C",
                borderLeft: i > 0 ? "1px solid #C9B79C" : undefined,
              }}
            >
              <p
                className="font-fraunces font-black leading-none mb-4 select-none"
                style={{ fontSize: "4rem", color: "#C9B79C", lineHeight: "1" }}
                aria-hidden="true"
              >
                &ldquo;
              </p>
              <blockquote>
                <p
                  className="font-newsreader text-lg md:text-xl leading-relaxed mb-6"
                  style={{ color: "#1A1714" }}
                >
                  {t.quote}
                </p>
              </blockquote>
              <figcaption>
                <p
                  className="font-fraunces font-semibold text-base"
                  style={{ color: "#1A1714" }}
                >
                  {t.name}
                </p>
                <p
                  className="font-space-mono text-[10px] uppercase tracking-widest mt-1"
                  style={{ color: "#8C2F1E" }}
                >
                  {t.role}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* Section rule */}
      <div className="mx-auto max-w-6xl px-4 md:px-8" aria-hidden="true">
        <div style={{ borderTop: "2px solid #1A1714", borderBottom: "1px solid #C9B79C", height: "6px" }} />
      </div>

      {/* ── PULL QUOTE ── */}
      <section
        className="mx-auto max-w-4xl px-4 md:px-8 py-20 text-center"
        aria-label="Feature pull quote"
      >
        <p
          className="font-fraunces font-black italic leading-tight"
          style={{ fontSize: "clamp(1.8rem, 4vw, 3.5rem)", color: "#8C2F1E" }}
        >
          &ldquo;{brand.taglineAlt2}&rdquo;
        </p>
        <p
          className="font-space-mono text-[11px] uppercase tracking-widest mt-6"
          style={{ color: "#C9B79C" }}
        >
          — The Ratio Reader Promise
        </p>
      </section>

      {/* Section rule */}
      <div className="mx-auto max-w-6xl px-4 md:px-8" aria-hidden="true">
        <div style={{ borderTop: "2px solid #1A1714", borderBottom: "1px solid #C9B79C", height: "6px" }} />
      </div>

      {/* ── PRICING — Subscribe ── */}
      <section
        id="pricing"
        className="mx-auto max-w-6xl px-4 md:px-8 py-16"
        aria-labelledby="pricing-heading"
      >
        <div className="flex items-center gap-4 mb-12">
          <span
            className="font-space-mono text-[10px] uppercase tracking-[0.25em]"
            style={{ color: "#8C2F1E" }}
          >
            Subscribe
          </span>
          <span className="flex-1 h-px" style={{ backgroundColor: "#C9B79C" }} aria-hidden="true" />
        </div>

        <h2
          id="pricing-heading"
          className="font-fraunces font-black text-4xl md:text-6xl leading-tight mb-4"
          style={{ color: "#1A1714" }}
        >
          Choose your edition
        </h2>
        <p
          className="font-newsreader text-xl md:text-2xl mb-12"
          style={{ color: "#5E6149" }}
        >
          Every tier gives you the understanding edge. Upgrade anytime.
        </p>

        <div className="grid md:grid-cols-3 gap-0">
          {plans.map((p, i) => (
            <article
              key={p.name}
              className="p-6 md:p-8"
              style={{
                borderTop: p.featured ? `3px solid #8C2F1E` : "1px solid #C9B79C",
                borderLeft: i > 0 ? "1px solid #C9B79C" : undefined,
                backgroundColor: p.featured ? "#1A1714" : undefined,
              }}
              aria-label={`${p.name} plan`}
            >
              {p.featured && (
                <p
                  className="font-space-mono text-[10px] uppercase tracking-widest mb-4"
                  style={{ color: "#8C2F1E" }}
                >
                  Most Popular
                </p>
              )}
              <p
                className="font-space-mono text-[10px] uppercase tracking-widest mb-3"
                style={{ color: p.featured ? "#C9B79C" : "#5E6149" }}
              >
                {p.name}
              </p>
              <div className="flex items-baseline gap-1 mb-2">
                <span
                  className="font-fraunces font-black leading-none"
                  style={{ fontSize: "clamp(2.5rem, 5vw, 3.5rem)", color: p.featured ? "#F3ECDD" : "#1A1714" }}
                >
                  {p.price}
                </span>
                <span
                  className="font-space-mono text-xs"
                  style={{ color: p.featured ? "#C9B79C" : "#5E6149" }}
                >
                  /{p.cadence}
                </span>
              </div>
              <p
                className="font-newsreader text-base mb-6"
                style={{ color: p.featured ? "#C9B79C" : "#5E6149" }}
              >
                {p.blurb}
              </p>
              <ul className="space-y-2 mb-8">
                {p.features.map((feat, j) => (
                  <li
                    key={j}
                    className="font-newsreader text-sm flex items-start gap-2"
                    style={{ color: p.featured ? "#F3ECDD" : "#1A1714" }}
                  >
                    <span style={{ color: "#8C2F1E" }} aria-hidden="true">—</span>
                    {feat}
                  </li>
                ))}
              </ul>
              <button
                className="w-full font-space-mono text-xs uppercase tracking-widest py-3 border transition-all hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-offset-2"
                style={
                  p.featured
                    ? { backgroundColor: "#8C2F1E", color: "#F3ECDD", borderColor: "#8C2F1E" }
                    : { backgroundColor: "transparent", color: "#1A1714", borderColor: "#1A1714" }
                }
                aria-label={`${p.cta} — ${p.name} plan`}
              >
                {p.cta}
              </button>
            </article>
          ))}
        </div>
      </section>

      {/* Section rule */}
      <div className="mx-auto max-w-6xl px-4 md:px-8" aria-hidden="true">
        <div style={{ borderTop: "2px solid #1A1714", borderBottom: "1px solid #C9B79C", height: "6px" }} />
      </div>

      {/* ── FAQ — Q&A Column ── */}
      <section
        id="faq"
        className="mx-auto max-w-6xl px-4 md:px-8 py-16"
        aria-labelledby="faq-heading"
      >
        <div className="flex items-center gap-4 mb-12">
          <span
            className="font-space-mono text-[10px] uppercase tracking-[0.25em]"
            style={{ color: "#8C2F1E" }}
          >
            Questions &amp; Answers
          </span>
          <span className="flex-1 h-px" style={{ backgroundColor: "#C9B79C" }} aria-hidden="true" />
        </div>

        <div className="grid md:grid-cols-12 gap-8">
          <div className="md:col-span-4">
            <h2
              id="faq-heading"
              className="font-fraunces font-black text-3xl md:text-5xl leading-tight"
              style={{ color: "#1A1714" }}
            >
              Common correspondence
            </h2>
            <p
              className="font-newsreader text-base mt-4"
              style={{ color: "#5E6149" }}
            >
              Questions from our readers, answered plainly.
            </p>
          </div>

          <div
            className="md:col-span-8"
            style={{ borderLeft: "1px solid #C9B79C", paddingLeft: "2rem" }}
          >
            {faqs.map((f, i) => (
              <div
                key={i}
                style={{ borderBottom: "1px solid #C9B79C" }}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full text-left py-5 flex items-start justify-between gap-4 group focus:outline-none"
                  aria-expanded={openFaq === i}
                  aria-controls={`faq-answer-${i}`}
                >
                  <span
                    className="font-space-mono text-[11px] uppercase tracking-widest leading-relaxed"
                    style={{ color: "#8C2F1E" }}
                  >
                    Q: {f.q}
                  </span>
                  <span
                    className="font-fraunces font-black text-xl mt-0.5 transition-transform"
                    style={{
                      color: "#C9B79C",
                      transform: openFaq === i ? "rotate(45deg)" : "none",
                    }}
                    aria-hidden="true"
                  >
                    +
                  </span>
                </button>
                {openFaq === i && (
                  <div
                    id={`faq-answer-${i}`}
                    className="pb-5"
                  >
                    <p
                      className="font-newsreader text-base md:text-lg leading-relaxed"
                      style={{ color: "#1A1714" }}
                    >
                      {f.a}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section rule */}
      <div className="mx-auto max-w-6xl px-4 md:px-8" aria-hidden="true">
        <div style={{ borderTop: "2px solid #1A1714", borderBottom: "1px solid #C9B79C", height: "6px" }} />
      </div>

      {/* ── FINAL CTA ── */}
      <section
        className="py-24"
        style={{ backgroundColor: "#1A1714" }}
        aria-labelledby="final-cta-heading"
      >
        <div className="mx-auto max-w-4xl px-4 md:px-8 text-center">
          <p
            className="font-space-mono text-[10px] uppercase tracking-[0.25em] mb-6"
            style={{ color: "#8C2F1E" }}
          >
            Begin Reading
          </p>
          <h2
            id="final-cta-heading"
            className="font-fraunces font-black italic leading-tight mb-6"
            style={{ fontSize: "clamp(2.5rem, 7vw, 6rem)", color: "#F3ECDD" }}
          >
            Your next document awaits.
          </h2>
          <p
            className="font-newsreader text-xl md:text-2xl leading-relaxed mb-10 mx-auto max-w-2xl"
            style={{ color: "#C9B79C" }}
          >
            {brand.subhead}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              className="font-space-mono text-sm uppercase tracking-widest px-8 py-4 transition-all hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#1A1714]"
              style={{ backgroundColor: "#8C2F1E", color: "#F3ECDD" }}
              aria-label={cta.primary}
            >
              {cta.primary}
            </button>
            <span
              className="font-space-mono text-xs uppercase tracking-widest"
              style={{ color: "#5E6149" }}
            >
              No credit card required
            </span>
          </div>
        </div>
      </section>

      {/* ── FOOTER — Colophon ── */}
      <footer
        className="rr-grain"
        style={{ backgroundColor: "#F3ECDD", borderTop: "2px solid #1A1714" }}
        role="contentinfo"
      >
        <div className="mx-auto max-w-6xl px-4 md:px-8">
          {/* Brand bar */}
          <div
            className="py-6 flex items-center justify-between"
            style={{ borderBottom: "1px solid #C9B79C" }}
          >
            <span
              className="font-fraunces font-black text-2xl"
              style={{ color: "#1A1714" }}
            >
              {brand.name}
            </span>
            <span
              className="font-space-mono text-[10px] uppercase tracking-widest"
              style={{ color: "#5E6149" }}
            >
              {brand.domain}
            </span>
          </div>

          {/* Link columns */}
          <div className="py-10 grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { heading: "Product", links: ["Features", "Pricing", "Changelog", "Roadmap"] },
              { heading: "Company", links: ["About", "Blog", "Press", "Careers"] },
              { heading: "Legal", links: ["Privacy", "Terms", "Security", "Cookies"] },
              { heading: "Support", links: ["Help Center", "Contact", "Status", "API Docs"] },
            ].map((col) => (
              <nav key={col.heading} aria-label={col.heading}>
                <p
                  className="font-space-mono text-[10px] uppercase tracking-widest mb-4"
                  style={{ color: "#8C2F1E" }}
                >
                  {col.heading}
                </p>
                <ul className="space-y-2">
                  {col.links.map((l) => (
                    <li key={l}>
                      <a
                        href="#"
                        className="font-newsreader text-sm transition-opacity hover:opacity-60"
                        style={{ color: "#1A1714" }}
                      >
                        {l}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>

          {/* Colophon bar */}
          <div
            className="py-4 flex flex-col md:flex-row items-center justify-between gap-2"
            style={{ borderTop: "1px solid #C9B79C" }}
          >
            <p
              className="font-space-mono text-[9px] uppercase tracking-widest"
              style={{ color: "#C9B79C" }}
            >
              &copy; 2026 Ratio Reader · All rights reserved · Typeset in Fraunces &amp; Newsreader
            </p>
            <p
              className="font-space-mono text-[9px] uppercase tracking-widest"
              style={{ color: "#C9B79C" }}
            >
              Vol. I · No. 1 · Est. 2026
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
