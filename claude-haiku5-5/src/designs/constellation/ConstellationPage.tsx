import type { CSSProperties } from "react";
import "@fontsource/gloock";
import "@fontsource-variable/jost";
import { brand, pitch, sample, steps } from "../../ratio/content";
import "./constellation.css";

type MarkKind = "key point" | "quote" | "hint" | "insight";
type Tone = "key" | "quote" | "hint" | "insight";

type Mark = {
  kind: MarkKind;
  label: string;
  text: string;
  page: number;
};

type Star = {
  page: number;
  x: number;
  y: number;
  size: number;
  delay: string;
  tone?: Tone;
  marks: Mark[];
};

const markOrder: MarkKind[] = ["key point", "quote", "hint", "insight"];

const toneOf: Record<MarkKind, Tone> = {
  "key point": "key",
  quote: "quote",
  hint: "hint",
  insight: "insight",
};

const toneSize: Record<Tone, number> = { key: 8, quote: 6, hint: 5.5, insight: 6 };

const constellationNames: Record<string, string> = {
  "connects to": "The Bridge",
  "blind spot": "The Mirror",
  "next step": "The Road",
};

const marks: Mark[] = [
  ...sample.keyPoints.map(({ text, page }) => ({ kind: "key point" as const, label: "key point", text, page })),
  ...sample.quotes.map(({ text, page }) => ({ kind: "quote" as const, label: "quote", text, page })),
  ...sample.hints.map(({ text, page }) => ({ kind: "hint" as const, label: "hint", text, page })),
  ...sample.insights.map(({ kind, text, page }) => ({ kind: "insight" as const, label: kind, text, page })),
];

const COLS = 9;
const ROWS = 8;

function createRandom(seed: number) {
  let state = seed;
  return () => {
    state = (state * 16807) % 2147483647;
    return state / 2147483647;
  };
}

const random = createRandom(1605);

const cells: { row: number; col: number }[] = [];
for (let row = 0; row < ROWS; row++) {
  for (let col = 0; col < COLS; col++) {
    const underHeadline = row >= 2 && col <= 3;
    if (!underHeadline) cells.push({ row, col });
  }
}
while (cells.length > sample.pages) {
  cells.splice(Math.floor(random() * cells.length), 1);
}
cells.sort((a, b) => a.row - b.row || (a.row % 2 === 0 ? a.col - b.col : b.col - a.col));

const stars: Star[] = cells.map(({ row, col }, index) => {
  const page = index + 1;
  const x = ((col + 0.5 + (random() - 0.5) * 0.6) / COLS) * 100;
  const y = ((row + 0.5 + (random() - 0.5) * 0.6) / ROWS) * 100;
  const pageMarks = marks.filter((mark) => mark.page === page);
  const kind = markOrder.find((candidate) => pageMarks.some((mark) => mark.kind === candidate));
  const tone = kind ? toneOf[kind] : undefined;
  const size = tone ? toneSize[tone] : 1.5 + random() * 1.5;
  const delay = `-${(random() * 7).toFixed(2)}s`;
  return { page, x, y, size, delay, tone, marks: pageMarks };
});

const plainStars = stars.filter((star) => !star.tone);

const distance = (a: Star, b: Star) => (a.x - b.x) ** 2 + (a.y - b.y) ** 2;

const constellationPaths = stars
  .filter((star) => star.tone === "insight")
  .map((star) => {
    const [first, second] = [...plainStars].sort((a, b) => distance(a, star) - distance(b, star));
    return {
      page: star.page,
      d: `M${first.x} ${first.y} L${star.x} ${star.y} L${second.x} ${second.y}`,
    };
  });

const wrap = "mx-auto w-full max-w-[1200px] px-6 py-24 lg:px-12";
const divider = "border-t border-[var(--line)]/40";
const heading = "ds-display text-4xl leading-tight sm:text-5xl";
const lede = "mt-5 max-w-[64ch] text-lg leading-8 text-[var(--muted)]";
const primaryCta =
  "inline-flex min-h-11 items-center rounded-full bg-[var(--star)] px-6 text-[17px] font-medium text-[var(--sky)] transition-colors hover:bg-[var(--key)]";
const secondaryCta =
  "inline-flex min-h-11 items-center rounded-full border border-[var(--star)]/50 px-6 text-[17px] font-medium transition-colors hover:border-[var(--star)]";

function StarButton({ star }: { star: Star }) {
  const flip = star.x > 55;
  const className =
    "star-hit group absolute grid size-10 -translate-x-1/2 -translate-y-1/2 place-items-center hover:z-30 focus:z-30";
  const style = { left: `${star.x}%`, top: `${star.y}%` };
  const glow = (
    <span
      aria-hidden="true"
      className="star"
      data-tone={star.tone}
      style={{ "--size": `${star.size}px`, "--delay": star.delay } as CSSProperties}
    />
  );

  if (star.marks.length === 0) {
    return (
      <span aria-hidden="true" className={className} style={style}>
        {glow}
      </span>
    );
  }

  const summary = star.marks.map((mark) => mark.label).join(", ");

  return (
    <button type="button" aria-label={`Page ${star.page}: ${summary}`} className={className} style={style}>
      {glow}
      <span aria-hidden="true" className="absolute top-full mt-0.5 text-xs tabular-nums text-[var(--muted)]">
        p. {star.page}
      </span>
      <span
        aria-hidden="true"
        className={`pointer-events-none absolute top-1/2 w-[min(18rem,70vw)] -translate-y-1/2 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus:opacity-100 ${flip ? "right-full mr-4" : "left-full ml-4"}`}
      >
        <span className="block border border-[var(--line)] bg-[var(--plate)] p-4 text-left">
          <span className="block text-sm text-[var(--muted)]">Page {star.page}</span>
          {star.marks.map((mark) => (
            <span key={mark.text} className="mt-3 block">
              <span className="mark-label block text-sm" data-tone={toneOf[mark.kind]}>
                {mark.label}
              </span>
              <span className="block text-[15px] leading-6">{mark.text}</span>
            </span>
          ))}
        </span>
      </span>
    </button>
  );
}

export function ConstellationPage() {
  return (
    <div className="ds-constellation">
      <header className="flex items-center justify-between px-6 py-5 lg:px-12">
        <p className="ds-display text-2xl">{brand.name}</p>
        <button type="button" className={primaryCta}>
          {brand.primaryCta}
        </button>
      </header>

      <main>
        <section aria-labelledby="hero-title" className="relative flex min-h-[calc(100svh-5.25rem)] flex-col lg:block">
          <div className="relative z-10 order-2 w-full px-6 pb-12 lg:absolute lg:inset-x-0 lg:bottom-0 lg:order-none lg:px-12 lg:pb-16">
            <div className="mx-auto max-w-[1200px]">
              <div className="max-w-[36rem]">
                <h1 id="hero-title" className="ds-display text-[clamp(3.25rem,6.4vw,5.5rem)] leading-[0.98]">
                  Find the bright parts of any PDF.
                </h1>
                <p className="mt-6 max-w-[60ch] text-lg leading-8 text-[var(--muted)]">{pitch}</p>
                <div className="mt-9 flex flex-wrap gap-4">
                  <button type="button" className={primaryCta}>
                    {brand.primaryCta}
                  </button>
                  <a href="#chapter" className={secondaryCta}>
                    {brand.secondaryCta}
                  </a>
                </div>
                <p className="mt-6 text-sm text-[var(--muted)]">
                  A sample chapter, one star per page. Hover or tab to a star to read it.
                </p>
              </div>
            </div>
          </div>

          <div className="relative order-1 h-[66svh] min-h-[400px] lg:absolute lg:inset-0 lg:order-none lg:h-auto lg:min-h-0">
            <svg aria-hidden="true" viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 size-full overflow-visible">
              {constellationPaths.map((line) => (
                <path key={line.page} d={line.d} pathLength={1} className="constellation-line" />
              ))}
            </svg>
            {stars.map((star) => (
              <StarButton key={star.page} star={star} />
            ))}
            <ul className="sr-only">
              {marks.map((mark) => (
                <li key={mark.text}>
                  Page {mark.page}, {mark.label}: {mark.text}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="chapter" aria-labelledby="chapter-title" className={divider}>
          <div className={wrap}>
            <h2 id="chapter-title" className={heading}>
              What the chapter says
            </h2>
            <div className="mt-12 border border-[var(--line)] p-2">
              <div className="border border-[var(--line)]/40 p-6 sm:p-10">
                <h3 className="ds-display text-3xl sm:text-4xl">{sample.title}</h3>
                <dl className="mt-8 grid grid-cols-3 gap-6 border-y border-[var(--line)]/40 py-6">
                  <div>
                    <dt className="text-sm text-[var(--muted)]">Pages</dt>
                    <dd className="ds-display mt-1 text-4xl sm:text-5xl">{sample.pages}</dd>
                  </div>
                  <div>
                    <dt className="text-sm text-[var(--muted)]">Minutes to read</dt>
                    <dd className="ds-display mt-1 text-4xl sm:text-5xl">{sample.readMinutes}</dd>
                  </div>
                  <div>
                    <dt className="text-sm text-[var(--muted)]">Bright stars</dt>
                    <dd className="ds-display mt-1 text-4xl sm:text-5xl">{sample.keyPoints.length}</dd>
                  </div>
                </dl>
                <p className="mt-8 max-w-[64ch] text-lg leading-8">{sample.summary}</p>
              </div>
            </div>
          </div>
        </section>

        <section aria-labelledby="bright-title" className={divider}>
          <div className={wrap}>
            <h2 id="bright-title" className={heading}>
              Bright stars
            </h2>
            <p className={lede}>
              Key points are the bright stars: the ideas the rest of the chapter depends on. Each one keeps its page
              number, so you can check it.
            </p>
            <ul className="mt-12 grid max-w-[64ch] gap-8">
              {sample.keyPoints.map((point) => (
                <li key={point.text} className="grid grid-cols-[auto_1fr] gap-x-5">
                  <span aria-hidden="true" className="glyph mt-2.5" data-tone="key" />
                  <div>
                    <p className="text-xl leading-8">{point.text}</p>
                    <p className="mt-1 text-sm text-[var(--muted)]">Page {point.page}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section aria-labelledby="faint-title" className={divider}>
          <div className={wrap}>
            <h2 id="faint-title" className={heading}>
              Faint stars
            </h2>
            <p className={lede}>
              Hints are dimmer stars. Each one explains a term, an analogy, or a mistake readers often make at that
              spot.
            </p>
            <ul className="mt-12 grid max-w-[64ch] gap-8">
              {sample.hints.map((hint) => (
                <li key={hint.text} className="grid grid-cols-[auto_1fr] gap-x-5">
                  <span aria-hidden="true" className="glyph mt-2.5" data-tone="hint" />
                  <div>
                    <p className="text-lg leading-8">{hint.text}</p>
                    <p className="mt-1 text-sm text-[var(--muted)]">Page {hint.page}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section aria-labelledby="pinned-title" className={divider}>
          <div className={wrap}>
            <h2 id="pinned-title" className={heading}>
              Pinned light
            </h2>
            <p className={lede}>
              Quotes are sentences worth keeping. Each one is pinned to its page, so you can find it in the original.
            </p>
            <ul className="mt-12 grid max-w-[44rem] gap-12">
              {sample.quotes.map((quote) => (
                <li key={quote.text}>
                  <figure>
                    <blockquote className="ds-display text-[clamp(1.5rem,3vw,2rem)] leading-snug">
                      “{quote.text}”
                    </blockquote>
                    <figcaption className="mt-4 flex items-center gap-3 text-sm text-[var(--muted)]">
                      <span aria-hidden="true" className="glyph" data-tone="quote" />
                      Page {quote.page}
                    </figcaption>
                  </figure>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section aria-labelledby="constellations-title" className={divider}>
          <div className={wrap}>
            <h2 id="constellations-title" className={heading}>
              Constellations
            </h2>
            <p className={lede}>
              Insights join nearby stars into named figures. Each one shows how an idea connects, where readers go
              wrong, or what to do next.
            </p>
            <ul className="mt-12 grid gap-10 md:grid-cols-3">
              {sample.insights.map((insight) => (
                <li key={insight.text} className="border-t border-[var(--insight)]/40 pt-6">
                  <h3 className="ds-display text-3xl">{constellationNames[insight.kind]}</h3>
                  <p className="mark-label mt-2 text-sm" data-tone="insight">
                    {insight.kind}
                  </p>
                  <p className="mt-4 text-[17px] leading-7">{insight.text}</p>
                  <p className="mt-4 text-sm text-[var(--muted)]">Page {insight.page}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section aria-labelledby="start-title" className={divider}>
          <div className={wrap}>
            <h2 id="start-title" className={heading}>
              Start with one PDF
            </h2>
            <p className={lede}>Upload a chapter, paper, report, or contract. Then read the bright stars first.</p>
            <ol role="list" className="mt-12 grid list-none gap-8 md:grid-cols-3">
              {steps.map((step, index) => (
                <li key={step.name} className="grid grid-cols-[auto_1fr] gap-x-4">
                  <span aria-hidden="true" className="ds-display text-4xl leading-none text-[var(--key)]">
                    {index + 1}
                  </span>
                  <div>
                    <p className="text-xl font-medium">{step.name}</p>
                    <p className="mt-2 leading-7 text-[var(--muted)]">{step.detail}</p>
                  </div>
                </li>
              ))}
            </ol>
            <div className="mt-14 flex flex-wrap gap-4">
              <button type="button" className={primaryCta}>
                {brand.primaryCta}
              </button>
              <a href="#chapter" className={secondaryCta}>
                {brand.secondaryCta}
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className={divider}>
        <div className="mx-auto flex max-w-[1200px] flex-col gap-3 px-6 py-12 sm:flex-row sm:items-end sm:justify-between lg:px-12">
          <p className="ds-display text-2xl">{brand.name}</p>
          <p className="text-sm text-[var(--muted)]">Charted from {sample.title}. © 2026</p>
        </div>
      </footer>
    </div>
  );
}
