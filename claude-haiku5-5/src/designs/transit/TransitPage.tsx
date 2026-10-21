import "@fontsource-variable/schibsted-grotesk";
import { useEffect, useRef } from "react";
import { brand, features, pitch, sample, steps } from "../../ratio/content";
import "./transit.css";

const ratio = Math.round(sample.pages / sample.readMinutes);

function PageChip({ page }: { page: number }) {
  return <span className="transit-chip">Page {page}</span>;
}

function label(kind: string) {
  return kind.charAt(0).toUpperCase() + kind.slice(1);
}

export function TransitPage() {
  const railRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const rail = railRef.current;
    if (!rail) return;

    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");

    const update = () => {
      if (motion.matches) {
        rail.style.setProperty("--route-progress", "1");
        return;
      }
      const { top, height } = rail.getBoundingClientRect();
      const head = window.innerHeight / 2 - top;
      const span = Math.max(height - window.innerHeight / 2, 1);
      const progress = Math.min(Math.max(head / span, 0), 1);
      rail.style.setProperty("--route-progress", progress.toFixed(4));
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <div className="ds-transit">
      <header className="flex items-center justify-between gap-4 px-5 py-5 md:px-10">
        <a href="#" className="flex items-center gap-3 text-lg font-bold">
          <span aria-hidden="true" className="transit-brand-mark" />
          {brand.name}
        </a>
        <a href="#" className="transit-cta">
          {brand.primaryCta}
        </a>
      </header>

      <main className="transit-route">
        <div ref={railRef} aria-hidden="true" className="transit-rail">
          <svg viewBox="0 0 6 100" preserveAspectRatio="none">
            <path className="transit-track" d="M3 0V100" />
          </svg>
          <span className="transit-progress" />
          <span className="transit-here">
            <span className="transit-here-label">You are here</span>
          </span>
        </div>

        <section aria-labelledby="hero-title" className="transit-hero">
          <span aria-hidden="true" className="transit-origin" />
          <div className="transit-column max-w-5xl">
            <h1 id="hero-title" className="transit-title">
              Map any long PDF before you read it.
            </h1>
            <p className="mt-8 max-w-xl text-xl leading-relaxed">{pitch}</p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a href="#" className="transit-cta">
                {brand.primaryCta}
              </a>
              <a href="#summary" className="transit-cta transit-cta--ghost">
                {brand.secondaryCta}
              </a>
            </div>
          </div>

          <div className="transit-strip">
            <span aria-hidden="true" className="transit-hub" />
            <ol className="transit-steps">
              {steps.map((step) => (
                <li key={step.name} className="font-semibold">
                  {step.name}
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section aria-labelledby="steps-title" className="transit-block">
          <div className="transit-column">
            <h2 id="steps-title" className="transit-heading">
              How it works
            </h2>
            <p className="transit-intro">
              Three stops take you from a stack of pages to the parts you need.
            </p>
          </div>
          <ol>
            {steps.map((step) => (
              <li key={step.name} className="transit-row transit-row--red">
                <h3 className="text-2xl font-bold">{step.name}</h3>
                <p className="mt-1 max-w-xl leading-relaxed">{step.detail}</p>
              </li>
            ))}
          </ol>
        </section>

        <section id="summary" aria-labelledby="summary-title" className="transit-block">
          <div className="transit-row transit-row--origin">
            <h2 id="summary-title" className="transit-heading">
              Summary
            </h2>
            <p className="transit-muted mt-4 max-w-xl leading-relaxed">{features[0].detail}</p>
            <div className="transit-board">
              <p className="text-lg font-bold">{sample.title}</p>
              <dl className="mt-5 grid grid-cols-3 gap-3 tabular-nums">
                <div>
                  <dt className="transit-muted text-sm">Pages</dt>
                  <dd className="text-2xl font-extrabold md:text-3xl">{sample.pages}</dd>
                </div>
                <div>
                  <dt className="transit-muted text-sm">Read time</dt>
                  <dd className="text-2xl font-extrabold md:text-3xl">{sample.readMinutes} min</dd>
                </div>
                <div>
                  <dt className="transit-muted text-sm">Length ratio</dt>
                  <dd className="text-2xl font-extrabold md:text-3xl">{ratio}:1</dd>
                </div>
              </dl>
            </div>
            <p className="mt-10 max-w-2xl text-2xl font-medium leading-snug">{sample.summary}</p>
          </div>
        </section>

        <section aria-labelledby="key-points-title" className="transit-block">
          <div className="transit-column">
            <h2 id="key-points-title" className="transit-heading">
              Key points
            </h2>
            <p className="transit-intro">{features[1].detail}</p>
          </div>
          <ol>
            {sample.keyPoints.map((point) => (
              <li key={point.text} className="transit-row transit-row--blue">
                <p className="max-w-2xl">{point.text}</p>
                <PageChip page={point.page} />
              </li>
            ))}
          </ol>
        </section>

        <section aria-labelledby="hints-title" className="transit-block">
          <div className="transit-column">
            <h2 id="hints-title" className="transit-heading">
              Hints
            </h2>
            <p className="transit-intro">{features[2].detail}</p>
          </div>
          <ul>
            {sample.hints.map((hint) => (
              <li key={hint.text} className="transit-row transit-row--green">
                <p className="max-w-2xl">{hint.text}</p>
                <PageChip page={hint.page} />
              </li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="quotes-title" className="transit-block">
          <div className="transit-column">
            <h2 id="quotes-title" className="transit-heading">
              Quotes
            </h2>
            <p className="transit-intro">{features[3].detail}</p>
          </div>
          <ul>
            {sample.quotes.map((quote) => (
              <li key={quote.text} className="transit-row transit-row--yellow">
                <blockquote className="max-w-2xl">“{quote.text}”</blockquote>
                <PageChip page={quote.page} />
              </li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="insights-title" className="transit-block transit-block--express">
          <div className="transit-column">
            <h2 id="insights-title" className="transit-heading">
              Insights
            </h2>
            <p className="transit-intro">{features[4].detail}</p>
          </div>
          <ul>
            {sample.insights.map((insight) => (
              <li key={insight.text} className="transit-row transit-row--express">
                <p className="text-sm font-bold">{label(insight.kind)}</p>
                <p className="max-w-2xl">{insight.text}</p>
                <PageChip page={insight.page} />
              </li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="legend-title" className="transit-block">
          <div className="transit-column">
            <h2 id="legend-title" className="transit-heading">
              Legend
            </h2>
            <p className="transit-intro">
              Follow the lines to read the map. Each color marks a different kind of stop.
            </p>
            <ul className="transit-legend">
              <li>
                <span className="transit-key-slot">
                  <span aria-hidden="true" className="transit-key-line transit-key-line--red" />
                </span>
                <p>
                  <strong className="font-bold">Red line.</strong> Reading steps: upload, skim, and
                  understand.
                </p>
              </li>
              <li>
                <span className="transit-key-slot">
                  <span aria-hidden="true" className="transit-key-line" />
                </span>
                <p>
                  <strong className="font-bold">Blue line.</strong> The chapter itself. Each stop is
                  a key point, with its page.
                </p>
              </li>
              <li>
                <span className="transit-key-slot">
                  <span aria-hidden="true" className="transit-key-line transit-key-line--green" />
                </span>
                <p>
                  <strong className="font-bold">Green branch.</strong> Hints, where a hard idea
                  meets an easier one.
                </p>
              </li>
              <li>
                <span className="transit-key-slot">
                  <span aria-hidden="true" className="transit-key-square" />
                </span>
                <p>
                  <strong className="font-bold">Yellow landmark.</strong> Quotes worth remembering,
                  each with its page.
                </p>
              </li>
              <li>
                <span className="transit-key-slot">
                  <span aria-hidden="true" className="transit-key-diamond" />
                </span>
                <p>
                  <strong className="font-bold">Red express.</strong> Insights that skip the details
                  and show how ideas connect.
                </p>
              </li>
            </ul>
          </div>
        </section>
      </main>

      <section aria-labelledby="end-title" className="transit-end">
        <div className="transit-column">
          <h2 id="end-title" className="transit-heading">
            Start a new route.
          </h2>
          <p className="transit-intro">
            Upload a PDF and see its route before you read a single page.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#" className="transit-cta">
              {brand.primaryCta}
            </a>
            <a href="#summary" className="transit-cta transit-cta--ghost">
              {brand.secondaryCta}
            </a>
          </div>
        </div>
      </section>

      <footer className="transit-footer">
        <div aria-hidden="true" className="transit-key-bar">
          <span />
          <span />
          <span />
          <span />
        </div>
        <div className="flex flex-col gap-2 px-5 py-10 md:px-10">
          <p className="text-lg font-bold">{brand.name}</p>
          <p className="text-sm">© 2026 {brand.name}. Maps for long documents.</p>
        </div>
      </footer>
    </div>
  );
}
