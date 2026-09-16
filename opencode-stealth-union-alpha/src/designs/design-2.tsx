import { DesignSwitcher, DemoButton } from "./shared";
import "./design-2.css";
import {
  Quote,
  Lightbulb,
  Zap,
  Check,
  ArrowRight,
  ArrowUpRight,
  Paperclip,
  SlidersHorizontal,
  BookOpen,
  MessageSquareQuote,
  FileUp,
  MousePointerClick,
  Gauge,
  Asterisk,
  Sparkles,
} from "lucide-react";

const marqueeWords = [
  "PDF summaries",
  "Verbatim quotes",
  "Reading hints",
  "Actionable insights",
  "Zero skimming",
];

const benefits = [
  {
    icon: Gauge,
    title: "Ten minutes, not ten hours",
    copy: "Ratio reads the whole document and hands you the argument in plain language. You keep the structure, the evidence and the conclusion — minus the 80-page detour.",
  },
  {
    icon: MessageSquareQuote,
    title: "Quotes you can cite",
    copy: "Every summary line links back to a verbatim quote with its page number. Nothing is paraphrased into mush, so you can trust it in a meeting or a footnote.",
  },
  {
    icon: Lightbulb,
    title: "Hints before you commit",
    copy: "Not sure a paper deserves your evening? Get a hint — the one chart, one claim or one paragraph that tells you if it's worth a full read.",
  },
  {
    icon: SlidersHorizontal,
    title: "Depth on demand",
    copy: "Slide from executive brief to section-by-section teardown. Ratio adapts the summary to why you're reading, not just what you're reading.",
  },
  {
    icon: BookOpen,
    title: "Your library, linked",
    copy: "Every upload joins a searchable shelf. Ask which deck covered churn pricing and Ratio points at the exact page, not a folder name.",
  },
  {
    icon: Zap,
    title: "Built for heavy PDFs",
    copy: "Annual reports, court filings, 400-page textbooks. Ratio handles scanned pages, tables and footnotes without choking or losing the thread.",
  },
];

const steps = [
  {
    icon: FileUp,
    num: "Step 01",
    title: "Drop the PDF",
    copy: "Drag in a report, paper or contract — up to 500 pages. Ratio maps its structure in seconds, from cover page to appendix.",
  },
  {
    icon: MousePointerClick,
    num: "Step 02",
    title: "Pick your depth",
    copy: "Choose a skim, a summary or the deep cut. Each level keeps quotes and page references attached, so you can always check the source.",
  },
  {
    icon: Sparkles,
    num: "Step 03",
    title: "Read what matters",
    copy: "Get the brief, the best quotes and the hints in one clean view. Follow any insight straight to the exact page it came from.",
  },
];

const plans = [
  "Unlimited summaries and hints",
  "Every quote with page references",
  "Searchable library across all uploads",
  "Export to Notion, docs or plain text",
];

const footerCols = [
  {
    head: "Explore",
    links: [
      { label: "Why Ratio", href: "#d2-benefits" },
      { label: "How it works", href: "#d2-how" },
      { label: "Reader plan", href: "#d2-pricing" },
    ],
  },
  {
    head: "Your next read",
    links: [
      { label: "Summaries & quotes", href: "#d2-benefits" },
      { label: "Hints & insights", href: "#d2-how" },
      { label: "Back to the beginning ↗", href: "#d2-top" },
    ],
  },
];

function PageDoc({ variant }: { variant: number }) {
  return (
    <svg
      className="d2-card__page"
      viewBox="0 0 150 190"
      fill="none"
      aria-hidden="true"
    >
      <rect x="4" y="4" width="142" height="182" rx="6" fill="#fff" stroke="#0a0f3d" strokeWidth="3" />
      <rect x="20" y="26" width="70" height="9" rx="2" fill={variant === 0 ? "#1626ff" : "#d6ff4b"} />
      <rect x="20" y="42" width="96" height="5" rx="2" fill="#c7cdf2" />
      <rect x="20" y="54" width="82" height="5" rx="2" fill="#c7cdf2" />
      <rect x="20" y="66" width="102" height="5" rx="2" fill="#c7cdf2" />
      <rect x="20" y="86" width="46" height="34" rx="3" fill={variant === 0 ? "#d6ff4b" : "#eef1ff"} stroke="#0a0f3d" strokeWidth="2" />
      <rect x="74" y="86" width="56" height="5" rx="2" fill="#c7cdf2" />
      <rect x="74" y="98" width="56" height="5" rx="2" fill="#c7cdf2" />
      <rect x="74" y="110" width="38" height="5" rx="2" fill="#c7cdf2" />
      <rect x="20" y="134" width="110" height="5" rx="2" fill="#c7cdf2" />
      <rect x="20" y="146" width="88" height="5" rx="2" fill="#c7cdf2" />
      <rect x="110" y="160" width="28" height="14" rx="3" fill="#1626ff" />
    </svg>
  );
}

export function DesignTwo() {
  return (
    <div className="d2">
      <div className="d2-wrap" id="d2-top">
        <header className="d2-nav">
          <a href="#d2-top" className="d2-logo">
            <span className="d2-logo__mark">R</span>
            Ratio
          </a>
          <nav className="d2-nav__links" aria-label="Primary">
            <a href="#d2-benefits">Benefits</a>
            <a href="#d2-how">How it works</a>
            <a href="#d2-pricing">Pricing</a>
          </nav>
          <div className="d2-nav__cta">
            <DemoButton className="d2-ease d2-btn d2-btn--cobalt" label="Open sample">
              Open sample
            </DemoButton>
          </div>
        </header>

        <section className="d2-hero">
          <div className="d2-hero__grid">
            <div>
              <span className="d2-kicker">
                <Asterisk size={18} />
                The reading ratio, inverted
              </span>
              <h1 className="d2-hero__title">
                Less PDF.
                <br />
                More <em>POV.</em>
              </h1>
              <p className="d2-hero__lede">
                Ratio turns dense PDFs into sharp summaries, verbatim quotes, hints and
                insights — each one anchored to the exact page it came from. Spend your
                attention on the ten percent that matters.
              </p>
              <div className="d2-hero__actions">
                <DemoButton className="d2-ease d2-btn" label="Upload a PDF">
                  Upload a PDF
                  <ArrowRight size={18} />
                </DemoButton>
                <DemoButton
                  className="d2-ease d2-btn d2-btn--cobalt"
                  label="See a live sample"
                >
                  See a live sample
                </DemoButton>
              </div>
              <p className="d2-hero__note">
                <Paperclip size={15} />
                No account needed for your first document
              </p>
              <div className="d2-hero__stats">
                <div>
                  <div className="d2-stat__num">4 ways</div>
                  <div className="d2-stat__label">to find the point</div>
                </div>
                <div>
                  <div className="d2-stat__num">1 PDF</div>
                  <div className="d2-stat__label">a clearer picture</div>
                </div>
                <div>
                  <div className="d2-stat__num">Your pace</div>
                  <div className="d2-stat__label">your next insight</div>
                </div>
              </div>
            </div>

            <div className="d2-collage">
              <span className="d2-sticker d2-sticker--hero">
                <Zap size={15} />
                Fresh off the press
              </span>
              <article className="d2-card d2-card--summary">
                <h4>Summary — Q3 board deck</h4>
                <p>
                  Growth held at 11% while CAC fell for the third quarter running. The ask:
                  $2M to double the enterprise pod.
                </p>
              </article>
              <article className="d2-card d2-card--quote">
                <Quote size={20} />
                <p>
                  “We don't have a demand problem. We have a follow-through problem, and it
                  starts Monday.”
                </p>
                <cite>— p.14, all-hands memo</cite>
              </article>
              <div className="d2-card d2-card--doc">
                <div className="d2-card__pages">
                  <PageDoc variant={0} />
                  <PageDoc variant={1} />
                </div>
              </div>
              <article className="d2-card d2-card--hint">
                <div className="d2-hint-row">
                  <Lightbulb size={18} />
                  <p>
                    <strong>Hint:</strong> the retention chart on p.22 tells the whole story —
                    read §3 before anything else.
                  </p>
                </div>
              </article>
              <div className="d2-card--meta">#12 of 38 · 4 min read</div>
            </div>
          </div>
        </section>

        <div className="d2-marquee" aria-hidden="true">
          <div className="d2-marquee__track">
            {[0, 1].map((n) => (
              <div className="d2-marquee__group" key={n}>
                {marqueeWords.map((w) => (
                  <span className="d2-marquee__item" key={w}>
                    {w}
                    <Asterisk size={16} />
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>

        <section className="d2-section" id="d2-benefits">
          <div className="d2-section__head d2-section__head--split">
            <h2 className="d2-section__title">
              Everything you keep, <em>nothing you skim.</em>
            </h2>
            <p className="d2-section__sub">
              Most tools compress documents into beige porridge. Ratio keeps the texture — the
              claims, the quotes, the charts — and drops the rest.
            </p>
          </div>
          <div className="d2-benefits">
            {benefits.map((b) => (
              <article className="d2-benefit" key={b.title}>
                <div className="d2-benefit__icon">
                  <b.icon size={24} />
                </div>
                <h3>{b.title}</h3>
                <p>{b.copy}</p>
                <ArrowUpRight size={20} />
              </article>
            ))}
          </div>
        </section>

        <section className="d2-section d2-section--cloud" id="d2-how">
          <div className="d2-section__head">
            <span className="d2-kicker">
              <MousePointerClick size={16} />
              How it works
            </span>
            <h2 className="d2-section__title">
              Three steps between you <em>and the point.</em>
            </h2>
            <p className="d2-section__sub">
              From raw PDF to anchored insight in under a minute — no prompt writing, no
              configuration, no twelve-step setup wizard.
            </p>
          </div>
          <div className="d2-steps">
            {steps.map((s, i) => (
              <article className={`d2-step${i === 2 ? " d2-step--hi" : ""}`} key={s.num}>
                <span className="d2-step__num">
                  <s.icon size={16} />
                  {s.num}
                </span>
                <h3>{s.title}</h3>
                <p>{s.copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="d2-pricing d2-section" id="d2-pricing">
          <div className="d2-pricing__inner">
            <div>
              <span className="d2-kicker d2-kicker--lime">
                <Gauge size={16} />
                Pricing
              </span>
              <h2 className="d2-pricing__title">
                One plan. <em>Every page.</em>
              </h2>
              <p className="d2-pricing__note">
                <Check size={16} />
                Start free — no card, no trial countdown
              </p>
            </div>
            <div className="d2-price-card">
              <span className="d2-price-card__flag">
                <Zap size={14} />
                Reader plan
              </span>
              <div className="d2-price-card__price">
                <strong>$9</strong>
                <span>/ month</span>
              </div>
              <p className="d2-price-card__desc">
                For people who read for a living. Unlimited documents, every feature, cancel
                whenever the reading pile shrinks.
              </p>
              <ul className="d2-price-card__list">
                {plans.map((p) => (
                  <li key={p}>
                    <Check size={17} />
                    {p}
                  </li>
                ))}
              </ul>
              <DemoButton className="d2-ease d2-btn" label="Try Ratio free">
                Try Ratio free
                <ArrowRight size={18} />
              </DemoButton>
              <p className="d2-price-card__fine">First 3 documents free · then $9/mo</p>
            </div>
          </div>
        </section>

        <footer className="d2-footer">
          <div className="d2-footer__grid">
            <div className="d2-footer__brand">
              <a href="#d2-top" className="d2-logo d2-logo--invert">
                <span className="d2-logo__mark">R</span>
                Ratio
              </a>
              <p>
                The reader for people with too much to read. Summaries, quotes, hints and
                insights — anchored to the page, always.
              </p>
            </div>
            {footerCols.map((c) => (
              <div className="d2-footer__col" key={c.head}>
                <h4>{c.head}</h4>
                <ul>
                  {c.links.map((l) => (
                    <li key={l.label}>
                      <a href={l.href}>{l.label}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="d2-footer__bar">
            <span>© 2026 Ratio Reading, Inc.</span>
            <em>Read less, know more.</em>
            <span>Made for heavy readers</span>
          </div>
        </footer>

        <DesignSwitcher current={2} />
      </div>
    </div>
  );
}
