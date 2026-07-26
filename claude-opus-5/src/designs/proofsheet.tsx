import { useEffect, useState } from "react";

/* ─────────────────────────────────────────────────────────────────────────────
   DESIGN 01 · PROOFSHEET
   A manuscript under the blue pencil. The thesis: Ratio Reader does the reading
   pass, and everything it finds arrives where a reader's own notes would — in
   the margin. Palette is cool paper + graphite ink + blue editing pencil, with
   highlighter yellow and a single warm red reserved for stamps.
   ────────────────────────────────────────────────────────────────────────── */

const CSS = `
.pf {
  --paper: #F4F4F0;
  --paper-2: #EDEDE7;
  --ink: #14161A;
  --graphite: #5E6373;
  --pencil: #1B3BC4;
  --pencil-soft: #E4E8FA;
  --marker: #F0E24A;
  --stamp: #B8402C;
  --rule: #C9C9C0;
  background: var(--paper);
  color: var(--ink);
  font-family: var(--font-newsreader);
  font-size: 17px;
  line-height: 1.62;
  overflow-x: clip;
}
.pf ::selection { background: var(--marker); color: var(--ink); }

.pf-hair { border-color: var(--rule); }

/* Wordmark ------------------------------------------------------------------ */
.pf-mark {
  font-family: var(--font-bodoni);
  font-weight: 500;
  letter-spacing: -0.015em;
}
.pf-mark sup {
  font-family: var(--font-courier);
  font-size: 0.42em;
  letter-spacing: 0.08em;
  color: var(--pencil);
  top: -0.85em;
  margin-left: 0.15em;
}

.pf-label {
  font-family: var(--font-courier);
  font-size: 11px;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: var(--graphite);
}

.pf-display {
  font-family: var(--font-bodoni);
  font-weight: 500;
  line-height: 0.94;
  letter-spacing: -0.025em;
  text-wrap: balance;
  font-variation-settings: "opsz" 88;
}
.pf-display em {
  font-style: italic;
  font-weight: 400;
}

/* Buttons ------------------------------------------------------------------- */
.pf-btn {
  font-family: var(--font-courier);
  font-size: 12px;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  padding: 0.85rem 1.5rem;
  background: var(--pencil);
  color: #fff;
  border: 1px solid var(--pencil);
  transition: background 140ms ease, color 140ms ease, transform 140ms ease;
}
.pf-btn:hover { background: #142FA0; transform: translateY(-1px); }
.pf-btn-ghost {
  background: transparent;
  color: var(--ink);
  border-color: var(--ink);
}
.pf-btn-ghost:hover { background: var(--ink); color: var(--paper); }
/* used on the two dark grounds — a Tailwind utility would lose the specificity
   race against .pf-btn, since this stylesheet is injected after Tailwind's */
.pf-btn-invert {
  background: var(--paper);
  color: var(--pencil);
  border-color: var(--paper);
}
.pf-btn-invert:hover { background: #fff; color: #142FA0; }
.pf :focus-visible {
  outline: 2px solid var(--pencil);
  outline-offset: 3px;
}

/* Stamp -------------------------------------------------------------------- */
.pf-stamp {
  font-family: var(--font-courier);
  color: var(--stamp);
  border: 2px solid var(--stamp);
  border-radius: 2px;
  padding: 0.4rem 0.7rem 0.3rem;
  letter-spacing: 0.2em;
  font-size: 11px;
  line-height: 1.2;
  text-transform: uppercase;
  transform: rotate(-7deg);
  opacity: 0.78;
  mix-blend-mode: multiply;
  box-shadow: inset 0 0 0 1px var(--paper);
}

/* The marked-up sheet ------------------------------------------------------- */
.pf-sheet {
  background: #FBFBF8;
  border: 1px solid var(--rule);
  box-shadow: 0 1px 0 var(--rule), 14px 14px 0 -1px rgba(20, 22, 26, 0.05);
  position: relative;
}
.pf-sheet::before {
  /* the printer's trim line */
  content: "";
  position: absolute;
  inset: 10px;
  border: 1px dashed rgba(94, 99, 115, 0.22);
  pointer-events: none;
}
.pf-excerpt {
  font-family: var(--font-newsreader);
  font-size: 19px;
  line-height: 1.85;
  max-width: 60ch;
}
.pf-excerpt .pf-lineno {
  font-family: var(--font-courier);
  font-size: 10px;
  color: #A9AAA2;
}

.pf-mk {
  /* display:inline so a mark wraps across lines like the words around it —
     an inline-block would box the phrase and break the paragraph's rhythm. */
  display: inline;
  font: inherit;
  color: inherit;
  background: none;
  border: 0;
  padding: 0;
  margin: 0;
  cursor: pointer;
  text-align: left;
  -webkit-box-decoration-break: clone;
  box-decoration-break: clone;
  transition: opacity 160ms ease;
}
.pf-mk-quote {
  background: linear-gradient(
    177deg,
    transparent 8%,
    color-mix(in srgb, var(--marker) 72%, transparent) 8%,
    color-mix(in srgb, var(--marker) 72%, transparent) 92%,
    transparent 92%
  );
  padding: 0 0.1em;
}
.pf-mk-term {
  text-decoration: underline wavy var(--pencil);
  text-decoration-thickness: 1.5px;
  text-underline-offset: 4px;
  text-decoration-skip-ink: none;
}
/* a circled phrase: kept nowrap so the drawn ellipse is never cut in half */
.pf-mk-claim {
  border: 1.5px solid var(--stamp);
  border-radius: 62% 38% 58% 42% / 52% 48% 52% 48%;
  padding: 0.08em 0.45em;
  margin: 0 0.12em;
  white-space: nowrap;
}
.pf-mk-claim[data-on] { background: rgba(184, 64, 44, 0.08); }
/* a proofreader's caret: sits at the insertion point, below the baseline */
.pf-mk-hint {
  font-family: var(--font-courier);
  color: var(--pencil);
  font-size: 1.5em;
  line-height: 0;
  vertical-align: -0.28em;
  letter-spacing: 0;
}
.pf-mk-hint[data-on] { color: #142FA0; }
.pf-sheet[data-active] .pf-mk:not([data-on]) { opacity: 0.42; }

/* Margin notes -------------------------------------------------------------- */
.pf-note {
  border-left: 2px solid var(--rule);
  padding: 0.15rem 0 0.35rem 0.9rem;
  transition: border-color 180ms ease, opacity 180ms ease, transform 180ms ease;
  opacity: 0.5;
}
.pf-note[data-on] {
  opacity: 1;
  border-left-color: var(--pencil);
  transform: translateX(3px);
}
.pf-note-kind {
  font-family: var(--font-courier);
  font-size: 10px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--pencil);
}
.pf-note-body {
  font-family: var(--font-courier);
  font-size: 12.5px;
  line-height: 1.6;
  color: #2A2D36;
}

/* Ratio dial ---------------------------------------------------------------- */
.pf-dial {
  font-family: var(--font-courier);
  font-size: 12px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  padding: 0.6rem 1rem;
  border: 1px solid var(--rule);
  background: transparent;
  color: var(--graphite);
  transition: all 140ms ease;
}
.pf-dial:hover { border-color: var(--ink); color: var(--ink); }
.pf-dial[aria-pressed="true"] {
  background: var(--ink);
  border-color: var(--ink);
  color: var(--paper);
}

/* Numbered galley ----------------------------------------------------------- */
.pf-step-no {
  font-family: var(--font-bodoni);
  font-size: 54px;
  line-height: 0.8;
  color: var(--pencil);
  font-variation-settings: "opsz" 72;
}

/* proof marks read clearly in the typewriter face; Bodoni's pilcrow does not */
.pf-glyph {
  font-family: var(--font-courier);
  font-size: 30px;
  line-height: 1;
  height: 30px;
  color: var(--pencil);
}

.pf-quotecard { background: var(--paper-2); border: 1px solid var(--rule); }
.pf-sig {
  font-family: var(--font-bodoni);
  font-style: italic;
  font-size: 15px;
}

/* Due-date pricing card ----------------------------------------------------- */
.pf-card {
  background: #FBFBF8;
  border: 1px solid var(--ink);
  position: relative;
}
.pf-card--feature { background: var(--pencil); color: #fff; border-color: var(--pencil); }
.pf-card--feature .pf-label,
.pf-card--feature .pf-note-body { color: rgba(255,255,255,0.72); }
.pf-card-rows { font-family: var(--font-courier); font-size: 12px; }
.pf-card-rows li { border-top: 1px dotted var(--rule); padding: 0.5rem 0; }
.pf-card--feature .pf-card-rows li { border-top-color: rgba(255,255,255,0.28); }

/* FAQ ---------------------------------------------------------------------- */
.pf-faq dt {
  font-family: var(--font-bodoni);
  font-size: 20px;
  font-weight: 500;
  font-variation-settings: "opsz" 32;
}
.pf-faq dd { max-width: 66ch; color: #33363F; }

/* Load-in ------------------------------------------------------------------ */
@keyframes pf-rise {
  from { opacity: 0; transform: translateY(0.5em); }
  to { opacity: 1; transform: none; }
}
.pf-rise { animation: pf-rise 620ms cubic-bezier(0.22, 0.68, 0.28, 1) both; }
@media (prefers-reduced-motion: reduce) {
  .pf * { animation: none !important; transition: none !important; }
}
`;

type Note = {
  id: string;
  kind: string;
  body: string;
  anchor: string;
};

const NOTES: Note[] = [
  {
    id: "quote",
    kind: "Quote · p. 12",
    body: "“Cell temperature diverged from the array setpoint by a median of 4.2 °C within ninety days of commissioning.” — pulled because it is the only number the abstract repeats.",
    anchor: "highlighted",
  },
  {
    id: "claim",
    kind: "Insight · assumption",
    body: "Written as an attribution, not a measurement. Airflow shadowing is instrumented at three of the eleven sites (§4.2); the other eight are inferred.",
    anchor: "circled",
  },
  {
    id: "hint",
    kind: "Hint · read next",
    body: "If seasonal load is a confound, why is the headline drift reported without a seasonal control? Table 3 has the monthly split. Start there.",
    anchor: "caret",
  },
  {
    id: "term",
    kind: "Term",
    body: "airflow shadowing — when one rack sits in the still air of the rack in front of it, so its fans move warm air rather than cool. Defined on p. 9, used 31 times.",
    anchor: "underlined",
  },
];

const RATIOS = [
  {
    id: "1:5",
    label: "1:5",
    name: "Digest",
    words: "1,140 words",
    time: "5 min",
    body: "Every subsection keeps its own paragraph, in the authors' order, with page numbers. Method and limitations are quoted rather than paraphrased. Use it when you will be asked questions about this document.",
  },
  {
    id: "1:20",
    label: "1:20",
    name: "Brief",
    words: "290 words",
    time: "90 sec",
    body: "One page: the thesis, the four claims that carry it, how the measurements were taken, and the limits the authors admit to in their own words. This is the default, and the one most people never change.",
  },
  {
    id: "1:100",
    label: "1:100",
    name: "Gist",
    words: "48 words",
    time: "15 sec",
    body: "What the document argues and whether it earned it. Eleven cold-storage sites drift 4.2 °C off setpoint in three months; quarterly rack rebalancing recovers most of the loss. Evidence is strong on drift, thin on cause.",
  },
];

const OUTPUTS = [
  {
    glyph: "¶",
    name: "Summary",
    body: "Tiered, not truncated. The thesis first, then the claims that support it, then the detail — so you can stop at any depth and still be left with something whole.",
  },
  {
    glyph: "‸",
    name: "Hints",
    body: "Questions to hold while you read, written before you start. They point at the paragraph that will answer them, so a hint is a place to go, not a riddle.",
  },
  {
    glyph: "“",
    name: "Quotes",
    body: "The sentences that do the work, lifted verbatim with page and paragraph. Every one is a link back into the PDF, because a quote you cannot find is a rumour.",
  },
  {
    glyph: "⁂",
    name: "Insights",
    body: "The things a careful reader would notice on a second pass: an assumption doing load-bearing work, a number that contradicts a table, a term used two ways.",
  },
];

const STEPS = [
  {
    no: "1",
    title: "Drop the PDF on the desk",
    body: "Up to 900 pages, scanned or born-digital. Ratio runs OCR on anything it cannot read as text, including photographed pages and the fax-quality appendix nobody has re-typed since 1998.",
  },
  {
    no: "2",
    title: "It reads the whole thing, once",
    body: "Not the first ten pages and not a search index — the full document, in order, holding the argument in memory. A 400-page report takes about forty seconds.",
  },
  {
    no: "3",
    title: "Everything comes back in the margin",
    body: "Summary at the ratio you set, hints, quotes and insights, each anchored to the page it came from. Export to Markdown, Anki or plain text, or read it in place.",
  },
];

const VOICES = [
  {
    body: "I get sent forty-page consultant reports and asked for an opinion by Thursday. The 1:20 brief is what I actually read; the quotes are what I paste into the deck.",
    who: "Nadia Feroz",
    role: "Strategy, industrial energy",
  },
  {
    body: "The hints changed how I supervise. I send students the questions before the paper, and the seminar starts two levels deeper than it used to.",
    who: "Dr. Ivan Marchetti",
    role: "Lecturer, materials science",
  },
  {
    body: "It caught that a figure in the appendix disagreed with the summary table. That is a thing I pay junior associates to find.",
    who: "Priya Raghunathan",
    role: "Counsel, regulatory practice",
  },
];

const PRICING = [
  {
    plan: "Reading room",
    price: "Free",
    per: "",
    note: "Five documents a month",
    rows: ["All four output types", "Up to 60 pages per file", "Markdown export"],
    cta: "Start reading",
    feature: false,
  },
  {
    plan: "Scholar",
    price: "$12",
    per: "/month",
    note: "Unlimited documents",
    rows: [
      "Up to 900 pages per file",
      "OCR for scans and photographs",
      "Anki + Markdown + citation export",
      "Cross-document connections",
    ],
    cta: "Take the Scholar card",
    feature: true,
  },
  {
    plan: "Shared shelf",
    price: "$29",
    per: "/seat/month",
    note: "For a team reading the same pile",
    rows: [
      "Everything in Scholar",
      "Shared margins and replies",
      "House glossary of terms",
      "SSO and audit log",
    ],
    cta: "Talk to us",
    feature: false,
  },
];

const FAQ = [
  {
    q: "Does it invent things?",
    a: "Every claim in a summary carries the page it came from, and every quote is copied, never reconstructed. Where the document is genuinely ambiguous, Ratio says so in the margin instead of choosing for you. If a line has no anchor, treat it as unsupported — and tell us, because that is a bug.",
  },
  {
    q: "What happens to my file?",
    a: "It is processed and then deleted within 24 hours unless you save it to your shelf. Nothing you upload is used to train a model. Documents on the Shared shelf plan stay inside your workspace.",
  },
  {
    q: "Scanned pages? Two columns? Footnotes?",
    a: "Yes, yes, and footnotes are read as footnotes — attached to the sentence that called them rather than swept to the end. Two-column layouts, tables and figure captions are reconstructed in reading order before anything is summarised.",
  },
  {
    q: "Which languages?",
    a: "Reading works in 34 languages. Output comes back in the language you ask for, so a German engineering standard can be summarised in English with the original quoted in German.",
  },
];

export default function Proofsheet() {
  const [active, setActive] = useState<string | null>(null);
  const [ratio, setRatio] = useState("1:20");
  const chosen = RATIOS.find((r) => r.id === ratio)!;

  useEffect(() => {
    document.title = "Ratio Reader — read the margins";
  }, []);

  /* A span, not a button: a <button> is an atomic inline box in Chrome and
     cannot break across lines, which would box the marked phrase instead of
     letting it wrap with the paragraph. */
  const mk = (id: string, cls: string, children: React.ReactNode) => (
    <span
      role="button"
      tabIndex={0}
      className={`pf-mk ${cls}`}
      data-on={active === id ? "" : undefined}
      aria-describedby={`pf-note-${id}`}
      onMouseEnter={() => setActive(id)}
      onFocus={() => setActive(id)}
      onClick={() => setActive(id)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          setActive(id);
        }
      }}
    >
      {children}
    </span>
  );

  return (
    <div className="pf min-h-screen">
      <style>{CSS}</style>

      {/* ── masthead ─────────────────────────────────────────────────────── */}
      <header className="pf-hair border-b">
        <div className="mx-auto flex max-w-[1180px] items-baseline justify-between px-6 py-5 lg:px-10">
          <a href="#top" className="pf-mark text-[22px]">
            Ratio Reader<sup>1:20</sup>
          </a>
          <nav className="pf-label hidden items-baseline gap-8 md:flex">
            <a href="#sheet" className="hover:text-[var(--pencil)]">
              The margin
            </a>
            <a href="#ratio" className="hover:text-[var(--pencil)]">
              Ratio
            </a>
            <a href="#press" className="hover:text-[var(--pencil)]">
              Readers
            </a>
            <a href="#rates" className="hover:text-[var(--pencil)]">
              Rates
            </a>
          </nav>
          <button className="pf-btn">Upload a PDF</button>
        </div>
      </header>

      {/* ── hero ─────────────────────────────────────────────────────────── */}
      <section id="top" className="mx-auto max-w-[1180px] px-6 pt-16 pb-10 lg:px-10 lg:pt-24">
        <div className="grid gap-12 lg:grid-cols-[1fr_15rem] lg:gap-16">
          <div>
            <p className="pf-label pf-rise" style={{ animationDelay: "0ms" }}>
              Reading assistant · established for the unread pile
            </p>
            <h1 className="pf-display pf-rise mt-6 text-[clamp(3rem,7.6vw,6.4rem)]" style={{ animationDelay: "80ms" }}>
              We read the page.
              <br />
              You read <em>the margins.</em>
            </h1>
            <p
              className="pf-rise mt-8 max-w-[52ch] text-[19px] leading-relaxed text-[#2E313A]"
              style={{ animationDelay: "180ms" }}
            >
              Upload a PDF. Ratio Reader makes the pass you do not have time for
              and hands back a summary at the depth you choose, the quotes worth
              keeping, the questions worth holding, and the things a second
              reading would have caught.
            </p>
            <div
              className="pf-rise mt-9 flex flex-wrap items-center gap-4"
              style={{ animationDelay: "260ms" }}
            >
              <button className="pf-btn">Upload a PDF</button>
              <button className="pf-btn pf-btn-ghost">See a marked-up page</button>
              <span className="pf-label normal-case">
                Five free documents. No card.
              </span>
            </div>
          </div>

          <aside className="pf-rise lg:pt-14" style={{ animationDelay: "340ms" }}>
            <div className="pf-stamp inline-block">
              Proof
              <br />
              read
            </div>
            <p className="pf-note-body pf-hair mt-8 border-l-2 pl-4">
              A marked-up page is the oldest reading technology there is: the
              text in the block, the reader's thinking in the space beside it.
              Ratio keeps that shape. Nothing is rewritten in place.
            </p>
          </aside>
        </div>
      </section>

      {/* ── the marked-up sheet ──────────────────────────────────────────── */}
      <section id="sheet" className="mx-auto max-w-[1180px] px-6 pb-24 lg:px-10">
        <div className="pf-hair mb-8 flex flex-wrap items-baseline justify-between gap-3 border-t pt-5">
          <h2 className="pf-display text-[clamp(1.8rem,3.4vw,2.6rem)]">
            One paragraph, four kinds of attention
          </h2>
          <p className="pf-label">Hover or tab a mark</p>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1fr_20rem] lg:gap-14">
          <article className="pf-sheet p-7 sm:p-12" data-active={active ?? undefined}>
            <div className="pf-label pf-hair mb-8 flex flex-wrap justify-between gap-2 border-b pb-3">
              <span>Thermal drift in cold-storage battery arrays</span>
              <span>Okonjo, Vale &amp; Ramanathan · 34 pp.</span>
            </div>
            <p className="pf-excerpt">
              <span className="pf-lineno">12 </span>
              Across the eleven sites we instrumented, cell temperature{" "}
              {mk(
                "quote",
                "pf-mk-quote",
                "diverged from the array setpoint by a median of 4.2 °C within ninety days of commissioning",
              )}
              . {mk("claim", "pf-mk-claim", "We attribute")} the drift
              primarily to airflow shadowing between adjacent racks, though the
              effect is confounded by
              seasonal load{mk("hint", "pf-mk-hint", "‸")}. Operators who
              rebalanced racks quarterly recovered most of the lost capacity;
              those who relied on the manufacturer's default schedule did not.
              Because {mk("term", "pf-mk-term", "airflow shadowing")} scales
              with rack density, the effect is largest in exactly the
              retrofitted rooms operators are most reluctant to re-plan.
            </p>
            <p className="pf-label pf-hair mt-8 border-t pt-3">
              4 marks on this page · 61 in the document
            </p>
          </article>

          <aside className="flex flex-col gap-6">
            <p className="pf-label">In the margin</p>
            {NOTES.map((n) => (
              <div
                key={n.id}
                id={`pf-note-${n.id}`}
                className="pf-note"
                data-on={active === n.id ? "" : undefined}
              >
                <p className="pf-note-kind">{n.kind}</p>
                <p className="pf-note-body mt-1.5">{n.body}</p>
              </div>
            ))}
          </aside>
        </div>
      </section>

      {/* ── four outputs ─────────────────────────────────────────────────── */}
      <section className="pf-hair border-t bg-[var(--paper-2)]">
        <div className="mx-auto max-w-[1180px] px-6 py-20 lg:px-10">
          <h2 className="pf-display max-w-[24ch] text-[clamp(2rem,4vw,3.2rem)]">
            Four things come back from every document
          </h2>
          <div className="mt-14 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
            {OUTPUTS.map((o) => (
              <div key={o.name} className="pf-hair border-t pt-5">
                <div className="pf-glyph" aria-hidden>
                  {o.glyph}
                </div>
                <h3 className="pf-display mt-4 text-[24px]">{o.name}</h3>
                <p className="mt-3 text-[16px] leading-relaxed text-[#33363F]">
                  {o.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ratio dial ───────────────────────────────────────────────────── */}
      <section id="ratio" className="mx-auto max-w-[1180px] px-6 py-24 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[22rem_1fr] lg:gap-20">
          <div>
            <p className="pf-label">Set the ratio</p>
            <h2 className="pf-display mt-5 text-[clamp(2.2rem,4.5vw,3.4rem)]">
              How much of it do you actually need?
            </h2>
            <p className="mt-5 max-w-[40ch] text-[17px] leading-relaxed text-[#33363F]">
              A summary is a compression, so name the compression. One line of
              summary for every five lines of source, or twenty, or a hundred.
              The document does not change; how much of it reaches you does.
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              {RATIOS.map((r) => (
                <button
                  key={r.id}
                  className="pf-dial"
                  aria-pressed={ratio === r.id}
                  onClick={() => setRatio(r.id)}
                >
                  {r.label}
                </button>
              ))}
            </div>
          </div>

          <figure className="pf-sheet p-7 sm:p-11">
            <figcaption className="pf-label pf-hair flex flex-wrap justify-between gap-3 border-b pb-3">
              <span>
                {chosen.name} · set at {chosen.label}
              </span>
              <span>
                {chosen.words} · {chosen.time}
              </span>
            </figcaption>
            <p className="mt-6 max-w-[58ch] text-[19px] leading-[1.75]">
              {chosen.body}
            </p>
            <p className="pf-note-body pf-hair mt-8 border-t pt-4">
              Anchored to pp. 9–14, 22, 31. Every sentence above can be traced
              to a paragraph in the source.
            </p>
          </figure>
        </div>
      </section>

      {/* ── galley: how it works ─────────────────────────────────────────── */}
      <section className="pf-hair border-y bg-[#FBFBF8]">
        <div className="mx-auto max-w-[1180px] px-6 py-20 lg:px-10">
          <p className="pf-label">The pass, in order</p>
          <div className="mt-10 grid gap-12 md:grid-cols-3 md:gap-10">
            {STEPS.map((s) => (
              <div key={s.no}>
                <span className="pf-step-no">{s.no}</span>
                <h3 className="pf-display mt-4 text-[26px]">{s.title}</h3>
                <p className="mt-3 max-w-[36ch] text-[16px] leading-relaxed text-[#33363F]">
                  {s.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── voices ───────────────────────────────────────────────────────── */}
      <section id="press" className="mx-auto max-w-[1180px] px-6 py-24 lg:px-10">
        <h2 className="pf-display max-w-[20ch] text-[clamp(2rem,4vw,3.2rem)]">
          Notes from people with a pile
        </h2>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {VOICES.map((v) => (
            <blockquote key={v.who} className="pf-quotecard p-7">
              <p className="pf-note-body text-[13.5px] italic">{v.body}</p>
              <footer className="pf-hair mt-6 border-t pt-4">
                <p className="pf-sig">{v.who}</p>
                <p className="pf-label mt-1 normal-case">{v.role}</p>
              </footer>
            </blockquote>
          ))}
        </div>
      </section>

      {/* ── rates ────────────────────────────────────────────────────────── */}
      <section id="rates" className="pf-hair border-t bg-[var(--paper-2)]">
        <div className="mx-auto max-w-[1180px] px-6 py-20 lg:px-10">
          <div className="flex flex-wrap items-baseline justify-between gap-4">
            <h2 className="pf-display text-[clamp(2rem,4vw,3.2rem)]">Rates</h2>
            <p className="pf-label">Cancel from the account page, no letter required</p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {PRICING.map((p) => (
              <div
                key={p.plan}
                className={`pf-card p-7 ${p.feature ? "pf-card--feature" : ""}`}
              >
                <p className="pf-label">{p.plan}</p>
                <p className="pf-display mt-4 text-[44px] tabular-nums">
                  {p.price}
                  <span className="pf-label ml-1 tracking-normal normal-case">
                    {p.per}
                  </span>
                </p>
                <p className="pf-note-body mt-2">{p.note}</p>
                <ul className="pf-card-rows mt-6 mb-8">
                  {p.rows.map((r) => (
                    <li key={r}>{r}</li>
                  ))}
                </ul>
                <button
                  className={`pf-btn w-full ${p.feature ? "pf-btn-invert" : "pf-btn-ghost"}`}
                >
                  {p.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── faq ──────────────────────────────────────────────────────────── */}
      <section className="mx-auto max-w-[1180px] px-6 py-24 lg:px-10">
        <h2 className="pf-display text-[clamp(2rem,4vw,3.2rem)]">Queries</h2>
        <dl className="pf-faq mt-10 grid gap-10 md:grid-cols-2 md:gap-x-16">
          {FAQ.map((f) => (
            <div key={f.q} className="pf-hair border-t pt-5">
              <dt>{f.q}</dt>
              <dd className="mt-3 text-[16.5px] leading-relaxed">{f.a}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* ── closing ──────────────────────────────────────────────────────── */}
      <section className="pf-hair border-t bg-[var(--ink)] text-[var(--paper)]">
        <div className="mx-auto flex max-w-[1180px] flex-col items-start gap-8 px-6 py-24 lg:px-10">
          <h2 className="pf-display max-w-[26ch] text-[clamp(2.4rem,6vw,4.6rem)]">
            The pile is not going to read <em>itself.</em>
          </h2>
          <div className="flex flex-wrap items-center gap-4">
            <button className="pf-btn pf-btn-invert">Upload a PDF</button>
            <span className="pf-label" style={{ color: "rgba(244,244,240,0.6)" }}>
              First five documents free
            </span>
          </div>
        </div>
      </section>

      <footer className="pf-hair border-t">
        <div className="mx-auto flex max-w-[1180px] flex-col gap-4 px-6 py-10 lg:flex-row lg:items-baseline lg:justify-between lg:px-10">
          <p className="pf-mark text-[17px] whitespace-nowrap">
            Ratio Reader<sup>1:20</sup>
          </p>
          <p className="pf-label normal-case">
            Colophon: set in Bodoni Moda and Newsreader, with Courier Prime in
            the margin. Marks drawn in blue pencil.
          </p>
          <p className="pf-label">© 2026</p>
        </div>
      </footer>
    </div>
  );
}
