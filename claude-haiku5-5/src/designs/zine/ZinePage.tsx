import "@fontsource-variable/archivo";
import "@fontsource/special-elite";
import "./zine.css";
import { brand, features, pitch, sample, steps } from "../../ratio/content";

function Misprint({ children, className }: { children: string; className?: string }) {
  return (
    <span className={className ? `zine-misprint ${className}` : "zine-misprint"}>
      <span className="zine-misprint-ink">{children}</span>
      <span className="zine-misprint-plate" aria-hidden="true">
        {children}
      </span>
    </span>
  );
}

function SheetHead({ id, title, detail }: { id: string; title: string; detail: string }) {
  return (
    <div>
      <h3 id={id} className="zine-h3">
        {title}
      </h3>
      <p className="zine-note mt-3">{detail}</p>
    </div>
  );
}

function Header() {
  return (
    <header className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-5 py-6 md:px-10">
      <a className="zine-wordmark" href="#">
        {brand.name}
      </a>
      <a className="zine-button" href="#">
        {brand.primaryCta}
      </a>
    </header>
  );
}

function Hero() {
  const teaser = `${sample.summary.split(". ")[0]}.`;

  return (
    <section
      className="zine-group zine-hero mx-auto max-w-6xl px-5 pt-6 pb-24 md:px-10 md:pt-12 md:pb-32"
      aria-labelledby="zine-hero-title"
    >
      <h1 id="zine-hero-title" className="zine-title">
        <Misprint>Cut any PDF down to a zine you can read in minutes.</Misprint>
      </h1>

      <div className="mt-12 grid gap-16 md:mt-20 md:grid-cols-12 md:items-end">
        <div className="md:col-span-6">
          <p className="zine-lede">{pitch}</p>
          <div className="mt-9 flex flex-wrap items-center gap-x-8 gap-y-5">
            <a className="zine-button" href="#">
              {brand.primaryCta}
            </a>
            <a className="zine-link" href="#">
              {brand.secondaryCta}
            </a>
          </div>
        </div>

        <div className="relative md:col-span-5 md:col-start-8">
          <div aria-hidden="true" className="zine-dots-blue absolute -right-10 -bottom-10 h-44 w-44" />
          <article className="zine-sheet zine-cover zine-tape" aria-label="Sample document">
            <p className="zine-small">Sample document</p>
            <p className="zine-cover-title">{sample.title}</p>
            <p className="zine-small">
              {sample.pages} pages, {sample.readMinutes} min read
            </p>
            <p className="zine-cover-teaser">{teaser}</p>
          </article>
          <p className="zine-badge absolute -top-14 -left-3 md:-top-20 md:-left-16">
            <Misprint className="zine-badge-big">{String(sample.pages)}</Misprint>
            <span>pages to</span>
            <Misprint className="zine-badge-big">{`${sample.readMinutes} min`}</Misprint>
          </p>
        </div>
      </div>
    </section>
  );
}

function Steps() {
  return (
    <section
      className="zine-group mx-auto max-w-6xl px-5 pb-24 md:px-10 md:pb-32"
      aria-labelledby="zine-steps-title"
    >
      <h2 id="zine-steps-title" className="zine-h2 max-w-[14ch]">
        Read it in this order
      </h2>
      <ol className="zine-fold mt-12">
        {steps.map((step, index) => (
          <li key={step.name} className="zine-panel">
            <span className="zine-panel-index">{index + 1}</span>
            <h3 className="zine-h3">{step.name}</h3>
            <p>{step.detail}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}

function Outputs() {
  return (
    <section
      className="zine-group mx-auto max-w-6xl px-5 pb-24 md:px-10 md:pb-32"
      aria-labelledby="zine-outputs-title"
    >
      <h2 id="zine-outputs-title" className="zine-h2 max-w-[16ch]">
        What one upload gives you
      </h2>

      <div className="mt-16 grid gap-y-16 gap-x-8 md:grid-cols-12 md:gap-x-10">
        <article
          className="zine-sheet zine-sheet-a zine-tape md:col-span-7"
          aria-labelledby="zine-summary-title"
        >
          <SheetHead id="zine-summary-title" title={features[0].name} detail={features[0].detail} />
          <p className="zine-summary mt-8">{sample.summary}</p>
        </article>

        <article
          className="zine-sheet zine-sheet-b md:col-span-5 md:col-start-8 md:mt-28"
          aria-labelledby="zine-points-title"
        >
          <span className="zine-staples" aria-hidden="true" />
          <SheetHead id="zine-points-title" title={features[1].name} detail={features[1].detail} />
          <ul className="zine-list mt-8 grid gap-7">
            {sample.keyPoints.map((point) => (
              <li key={point.text} className="grid justify-items-start gap-2">
                <span className="zine-page">p. {point.page}</span>
                <p>{point.text}</p>
              </li>
            ))}
          </ul>
        </article>

        <div className="relative md:col-span-5">
          <div aria-hidden="true" className="zine-dots-pink absolute -top-8 -left-8 h-40 w-40" />
          <article className="zine-sheet zine-sheet-c" aria-labelledby="zine-hints-title">
            <SheetHead id="zine-hints-title" title={features[2].name} detail={features[2].detail} />
            <ul className="zine-list mt-8 grid gap-7">
              {sample.hints.map((hint) => (
                <li key={hint.text} className="grid justify-items-start gap-3">
                  <p className="zine-type">{hint.text}</p>
                  <span className="zine-page">p. {hint.page}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>

        <article
          className="zine-sheet zine-sheet-d md:col-span-6 md:col-start-7 md:mt-20"
          aria-labelledby="zine-quotes-title"
        >
          <SheetHead id="zine-quotes-title" title={features[3].name} detail={features[3].detail} />
          <div className="mt-8 grid gap-8">
            {sample.quotes.map((quote) => (
              <blockquote key={quote.text} className="zine-quote">
                <p className="zine-type">“{quote.text}”</p>
                <p className="mt-4">
                  <span className="zine-page">p. {quote.page}</span>
                </p>
              </blockquote>
            ))}
          </div>
        </article>

        <article
          className="zine-sheet zine-sheet-e md:col-span-12"
          aria-labelledby="zine-insights-title"
        >
          <SheetHead id="zine-insights-title" title={features[4].name} detail={features[4].detail} />
          <ul className="mt-10 grid gap-6 md:grid-cols-3">
            {sample.insights.map((insight) => (
              <li key={insight.text} className="zine-clip grid justify-items-start gap-4">
                <span className="zine-tag">{insight.kind}</span>
                <p>{insight.text}</p>
                <span className="zine-page">p. {insight.page}</span>
              </li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  );
}

function Finale() {
  return (
    <section
      className="zine-group mx-auto max-w-6xl px-5 pb-24 md:px-10 md:pb-32"
      aria-labelledby="zine-finale-title"
    >
      <div className="zine-finale p-7 md:p-14">
        <h2 id="zine-finale-title" className="zine-h2 max-w-[18ch]">
          <Misprint>Give the next PDF five minutes.</Misprint>
        </h2>
        <p className="zine-lede mt-8">
          Upload a PDF and read the summary, key points, hints, quotes, and insights before you start the first page.
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-5">
          <a className="zine-button" href="#">
            {brand.primaryCta}
          </a>
          <a className="zine-link" href="#">
            {brand.secondaryCta}
          </a>
        </div>
      </div>
    </section>
  );
}

function Colophon() {
  return (
    <footer className="zine-colophon mx-auto flex max-w-6xl flex-col gap-4 px-5 py-10 md:flex-row md:items-center md:justify-between md:px-10">
      <p className="zine-wordmark">{brand.name}</p>
      <p>Set in Archivo and Special Elite. Printed in pink and blue. © 2026 {brand.name}.</p>
    </footer>
  );
}

export function ZinePage() {
  return (
    <div className="ds-zine">
      <Header />
      <main>
        <Hero />
        <Steps />
        <Outputs />
        <Finale />
      </main>
      <Colophon />
    </div>
  );
}
