import { useEffect, useState } from "react";

/* ─────────────────────────────────────────────────────────────────────────────
   DESIGN 03 · RISOGRAPH
   A two-ink zine pulled off a Riso drum: fluorescent pink and blue on press
   grey, with grain, halftone fields, deliberate misregistration and overprint
   where the two inks cross. The ratio control is a physical dial, because on a
   duplicator you turn a knob and it prints differently.
   ────────────────────────────────────────────────────────────────────────── */

const GRAIN =
  "data:image/svg+xml;utf8," +
  encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" width="180" height="180">
      <filter id="g"><feTurbulence type="fractalNoise" baseFrequency="0.82" numOctaves="3" stitchTiles="stitch"/>
      <feColorMatrix type="saturate" values="0"/></filter>
      <rect width="180" height="180" filter="url(#g)" opacity="0.5"/>
    </svg>`,
  );

const CSS = `
.rz {
  --paper: #E9E7DF;
  --paper-2: #DCD9CD;
  --pink: #FF3D9A;
  --blue: #1B44C8;
  --ink: #241A4A;
  --ink-soft: #4A3F78;
  background: var(--paper);
  color: var(--ink);
  font-family: var(--font-karla);
  font-size: 17px;
  line-height: 1.62;
  position: relative;
  overflow-x: clip;
}
.rz ::selection { background: var(--pink); color: var(--paper); }
.rz :focus-visible { outline: 3px solid var(--pink); outline-offset: 2px; }

/* paper grain: one fixed layer over everything, multiplied into the ink */
.rz-grain {
  position: fixed;
  inset: 0;
  z-index: 40;
  pointer-events: none;
  background-image: url("${GRAIN}");
  background-size: 180px 180px;
  mix-blend-mode: multiply;
  opacity: 0.42;
}

/* Type ---------------------------------------------------------------------- */
.rz-display {
  font-family: var(--font-bricolage);
  font-weight: 800;
  font-variation-settings: "wdth" 82, "opsz" 40;
  text-transform: uppercase;
  line-height: 0.84;
  letter-spacing: -0.02em;
  text-wrap: balance;
}
.rz-h {
  font-family: var(--font-bricolage);
  font-weight: 700;
  font-variation-settings: "wdth" 88;
  text-transform: uppercase;
  line-height: 0.92;
  letter-spacing: -0.01em;
}
.rz-mono {
  font-family: var(--font-martian);
  font-size: 10.5px;
  font-weight: 600;
  letter-spacing: 0.02em;
  text-transform: uppercase;
}

/* misregistration: the pink plate lands a hair off the blue one */
.rz-offset { position: relative; display: inline-block; }
.rz-offset::before {
  content: attr(data-ghost);
  position: absolute;
  left: 0;
  top: 0;
  color: var(--pink);
  transform: translate(5px, 5px);
  z-index: -1;
  mix-blend-mode: multiply;
  animation: rz-register 1100ms cubic-bezier(0.2, 0.8, 0.2, 1) both;
}
@keyframes rz-register {
  from { transform: translate(16px, 13px); opacity: 0.4; }
  to { transform: translate(5px, 5px); opacity: 1; }
}

/* halftone + overprint fields ---------------------------------------------- */
.rz-dots {
  background-image: radial-gradient(circle at center, var(--pink) 1.7px, transparent 1.9px);
  background-size: 8px 8px;
}
.rz-dots-blue {
  background-image: radial-gradient(circle at center, var(--blue) 1.7px, transparent 1.9px);
  background-size: 8px 8px;
}
/* ink fields sit on the paper but under the type: multiply against the paper,
   never against the words */
.rz-blob { mix-blend-mode: multiply; pointer-events: none; z-index: 0; }

/* Blocks ------------------------------------------------------------------- */
.rz-box {
  border: 2.5px solid var(--ink);
  background: var(--paper);
  box-shadow: 7px 7px 0 var(--ink);
}
/* fluoro pink is a light ink: text on it has to be the dark ink to stay
   readable, while the deep blue takes the paper colour */
.rz-box-pink { background: var(--pink); color: var(--ink); }
.rz-box-blue { background: var(--blue); color: var(--paper); }

.rz-btn {
  font-family: var(--font-bricolage);
  font-weight: 800;
  text-transform: uppercase;
  font-size: 17px;
  letter-spacing: 0.01em;
  padding: 0.8rem 1.6rem;
  border: 2.5px solid var(--ink);
  background: var(--pink);
  color: var(--ink);
  box-shadow: 5px 5px 0 var(--ink);
  transition: transform 90ms ease, box-shadow 90ms ease;
}
.rz-btn:hover { transform: translate(2px, 2px); box-shadow: 2px 2px 0 var(--ink); }
.rz-btn:active { transform: translate(5px, 5px); box-shadow: 0 0 0 var(--ink); }
.rz-btn-blue { background: var(--blue); color: var(--paper); }
.rz-btn-paper { background: var(--paper); color: var(--ink); }

/* sticker ------------------------------------------------------------------ */
.rz-sticker {
  font-family: var(--font-martian);
  font-weight: 700;
  font-size: 11px;
  text-transform: uppercase;
  line-height: 1.35;
  text-align: center;
  width: 168px;
  height: 168px;
  font-size: 14px;
  display: grid;
  place-content: center;
  border-radius: 50%;
  border: 2.5px solid var(--ink);
  background: var(--pink);
  color: var(--ink);
  box-shadow: 6px 6px 0 var(--ink);
  transform: rotate(-11deg);
  transition: transform 180ms cubic-bezier(0.3, 1.4, 0.4, 1);
}
.rz-sticker:hover { transform: rotate(4deg) scale(1.04); }

/* marquee ------------------------------------------------------------------ */
.rz-marquee {
  border-top: 2.5px solid var(--ink);
  border-bottom: 2.5px solid var(--ink);
  background: var(--blue);
  color: var(--paper);
  overflow: hidden;
  display: flex;
}
.rz-marquee-track {
  display: flex;
  gap: 2.5rem;
  padding: 0.7rem 1.25rem;
  white-space: nowrap;
  animation: rz-slide 26s linear infinite;
  font-family: var(--font-bricolage);
  font-weight: 800;
  text-transform: uppercase;
  font-size: 21px;
  flex-shrink: 0;
}
@keyframes rz-slide {
  from { transform: translateX(0); }
  to { transform: translateX(-100%); }
}

/* the dial ---------------------------------------------------------------- */
.rz-dial-wrap { position: relative; }
.rz-knob { transition: transform 460ms cubic-bezier(0.34, 1.5, 0.42, 1); transform-origin: 130px 130px; }
.rz-dial-btn {
  font-family: var(--font-martian);
  font-weight: 700;
  font-size: 11px;
  text-transform: uppercase;
  padding: 0.5rem 0.85rem;
  border: 2.5px solid var(--ink);
  background: var(--paper);
  color: var(--ink);
  transition: background 120ms ease, color 120ms ease;
}
.rz-dial-btn[aria-pressed="true"] { background: var(--ink); color: var(--paper); }
.rz-dial-btn:hover { background: var(--pink); color: var(--paper); }

/* bubbles ----------------------------------------------------------------- */
.rz-bubble {
  border: 2.5px solid var(--ink);
  background: var(--paper);
  padding: 1.4rem 1.5rem;
  position: relative;
  box-shadow: 6px 6px 0 var(--pink);
}
.rz-bubble::after {
  content: "";
  position: absolute;
  bottom: -15px;
  left: 34px;
  width: 22px;
  height: 15px;
  background: var(--paper);
  border-right: 2.5px solid var(--ink);
  border-bottom: 2.5px solid var(--ink);
  transform: skewX(-24deg);
}

/* price tag --------------------------------------------------------------- */
.rz-tag {
  border: 2.5px solid var(--ink);
  background: var(--paper);
  position: relative;
  box-shadow: 7px 7px 0 var(--ink);
}
.rz-tag-hole {
  width: 16px;
  height: 16px;
  border: 2.5px solid var(--ink);
  border-radius: 50%;
  background: var(--paper-2);
}

/* faq --------------------------------------------------------------------- */
.rz-q {
  font-family: var(--font-bricolage);
  font-weight: 800;
  text-transform: uppercase;
  font-size: 19px;
  line-height: 1.1;
}

@keyframes rz-pop {
  from { opacity: 0; transform: translateY(14px) rotate(-1deg); }
  to { opacity: 1; transform: none; }
}
.rz-pop { animation: rz-pop 520ms cubic-bezier(0.2, 0.9, 0.3, 1) both; }

@media (prefers-reduced-motion: reduce) {
  .rz *, .rz *::before, .rz *::after {
    animation: none !important;
    transition: none !important;
  }
  .rz-offset::before { transform: translate(5px, 5px); }
}
`;

const DIAL = [
  {
    id: "1:5",
    angle: -52,
    name: "The long one",
    out: "1,140 words",
    time: "5 min",
    body: "Every section keeps its own paragraph, in the order the authors wrote it, page numbers attached. This is the one you print out before a meeting where you will be asked questions.",
  },
  {
    id: "1:20",
    angle: 0,
    name: "The usual",
    out: "290 words",
    time: "90 sec",
    body: "The thesis, the four claims holding it up, how they measured anything, and the limits the authors own up to. Nine out of ten people never turn the dial off this setting.",
  },
  {
    id: "1:100",
    angle: 52,
    name: "The whole point",
    out: "48 words",
    time: "15 sec",
    body: "What it argues, the number that carries it, and whether the evidence is any good. Small enough to read standing up, honest enough to act on.",
  },
];

const GETS = [
  {
    tag: "01",
    name: "Summary",
    body: "Tiered, not chopped. Thesis first, then the claims under it, then the detail. Stop wherever you like and you still have something whole in your hands.",
    ink: "pink",
  },
  {
    tag: "02",
    name: "Hints",
    body: "Questions written before you start reading, each pointing at the page that answers it. Reading with a question is a completely different sport.",
    ink: "paper",
  },
  {
    tag: "03",
    name: "Quotes",
    body: "The sentences that actually do the work, copied word for word with page and paragraph, clickable back into the PDF. No paraphrase pretending to be a quote.",
    ink: "paper",
  },
  {
    tag: "04",
    name: "Insights",
    body: "The second-pass stuff: an assumption doing too much work, a figure that argues with a table, a term the authors quietly redefine on page 22.",
    ink: "blue",
  },
];

const STEPS = [
  {
    n: "1",
    t: "Feed it the PDF",
    b: "Drag the file in. Up to 900 pages. Scanned, photographed, two-column, footnoted, faxed in 1998 — it gets read.",
  },
  {
    n: "2",
    t: "It reads the whole thing",
    b: "Front to back, once, holding the argument in memory instead of grepping for keywords. A 400-page report takes about forty seconds.",
  },
  {
    n: "3",
    t: "Turn the dial",
    b: "Pick your ratio, get your summary, hints, quotes and insights. Change your mind, turn the dial again, and it reprints in two seconds.",
  },
];

const VOICES = [
  {
    b: "I run a two-person law practice. Ratio does the first read on every filing that lands, and the quotes come with page numbers I can actually cite.",
    w: "Marisol Ibarra",
    r: "Solo practitioner",
  },
  {
    b: "Sixty papers for a lit review. The cross-document connections found three that were arguing with each other and I had missed all three.",
    w: "Dev Raghavan",
    r: "PhD candidate, epidemiology",
  },
  {
    b: "My reading pile used to be a guilt pile. Now it is a queue, and the queue moves.",
    w: "Hana Öztürk",
    r: "Product lead",
  },
];

const TAGS = [
  {
    name: "Zine",
    price: "Free",
    per: "forever",
    body: "Five documents a month, 60 pages each. Everything works, nothing is watermarked, no card.",
    rows: ["5 docs / month", "60 pages / file", "Markdown export"],
    cta: "Start free",
    hot: false,
  },
  {
    name: "Full run",
    price: "$12",
    per: "a month",
    body: "Unlimited documents at full length, with OCR for the ugly scans and connections across everything you have read.",
    rows: [
      "Unlimited docs",
      "900 pages / file",
      "OCR for scans + photos",
      "Cross-document connections",
      "Anki + citation export",
    ],
    cta: "Get the full run",
    hot: true,
  },
  {
    name: "Print shop",
    price: "$29",
    per: "a seat, a month",
    body: "For a team reading the same pile: shared margins, a house glossary, and the boring admin your IT people ask about.",
    rows: ["Everything in Full run", "Shared margins", "House glossary", "SSO + audit log"],
    cta: "Talk to us",
    hot: false,
  },
];

const FAQ = [
  {
    q: "Does it make things up?",
    a: "Every line of a summary carries the page it came from, and quotes are copied rather than regenerated. If a sentence has no anchor, treat it as unsupported and tell us — we count that as a bug, not a quirk.",
  },
  {
    q: "What happens to my file?",
    a: "Read, then deleted within 24 hours unless you save it to a shelf. Never used to train a model. Team files stay inside the team workspace.",
  },
  {
    q: "Ugly scans?",
    a: "Fine. OCR from 300 dpi up, including photographs of pages, rotated spreads and two-column layouts. Footnotes stay attached to the sentence that called them.",
  },
  {
    q: "Can I change the ratio later?",
    a: "That is the whole idea. Turn the dial after the fact and the same document is reprinted at the new ratio in about two seconds. Nothing is re-uploaded.",
  },
  {
    q: "Which languages?",
    a: "Reading in 34. Output in whichever one you ask for, so a Japanese standard can come back in English with the original quoted in Japanese.",
  },
  {
    q: "Is there an app?",
    a: "It runs in the browser, and it takes files from your desktop, your phone or a shared drive. Nothing to install, nothing to update.",
  },
];

export default function Risograph() {
  const [dialId, setDialId] = useState("1:20");
  const dial = DIAL.find((d) => d.id === dialId)!;

  useEffect(() => {
    document.title = "Ratio Reader — read more by reading less";
  }, []);

  return (
    <div className="rz min-h-screen">
      <style>{CSS}</style>
      <div className="rz-grain" aria-hidden />

      {/* ── nav ──────────────────────────────────────────────────────────── */}
      <header className="border-b-[2.5px] border-[var(--ink)]">
        <div className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-between gap-3 px-5 py-3.5 lg:px-8">
          <span className="rz-h text-[24px]">
            Ratio<span className="text-[var(--pink)]">/</span>Reader
          </span>
          <nav className="flex items-center gap-5">
            <a href="#gets" className="rz-mono hidden hover:text-[var(--pink)] sm:inline">
              What you get
            </a>
            <a href="#dial" className="rz-mono hidden hover:text-[var(--pink)] sm:inline">
              The dial
            </a>
            <a href="#tags" className="rz-mono hidden hover:text-[var(--pink)] sm:inline">
              Prices
            </a>
            <button className="rz-btn text-[14px]">Upload a PDF</button>
          </nav>
        </div>
      </header>

      {/* ── hero ─────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden">
        {/* overprint fields: where pink meets blue it goes near-black */}
        <div
          className="rz-blob absolute -top-16 -right-10 h-[260px] w-[260px] rotate-12 sm:h-[420px] sm:w-[420px] rz-dots"
          aria-hidden
        />
        <div
          className="rz-blob absolute top-40 -left-24 hidden h-[260px] w-[260px] rounded-full bg-[var(--blue)] opacity-90 sm:block"
          aria-hidden
        />

        <div className="relative z-10 mx-auto max-w-[1200px] px-5 pt-14 pb-16 lg:px-8">
          <p className="rz-mono rz-pop">
            A reading tool · two inks · no skimming
          </p>

          <h1 className="rz-display rz-pop mt-6 text-[clamp(3.4rem,12.5vw,9.5rem)]" style={{ animationDelay: "60ms" }}>
            <span className="rz-offset" data-ghost="Read more">
              Read more
            </span>
            <br />
            by reading
            <br />
            <span className="text-[var(--blue)]">less.</span>
          </h1>

          <div className="mt-12 grid gap-10 lg:grid-cols-[1.15fr_auto] lg:items-end">
            <div>
              <p
                className="rz-pop max-w-[54ch] text-[19px] leading-relaxed"
                style={{ animationDelay: "140ms" }}
              >
                Upload a PDF. Ratio Reader reads all of it and hands back the
                summary, the hints, the quotes and the insights — at whatever
                ratio you dial in. One page of reading for every hundred pages
                of document, if that is what the day allows.
              </p>
              <div
                className="rz-pop mt-8 flex flex-wrap items-center gap-4"
                style={{ animationDelay: "220ms" }}
              >
                <button className="rz-btn">Upload a PDF</button>
                <button className="rz-btn rz-btn-paper">See what comes back</button>
              </div>
            </div>

            <div className="rz-sticker rz-pop" style={{ animationDelay: "300ms" }}>
              5 docs
              <br />
              free
              <br />
              no card
            </div>
          </div>
        </div>
      </section>

      {/* ── marquee ──────────────────────────────────────────────────────── */}
      <div className="rz-marquee" role="presentation">
        {[0, 1].map((i) => (
          <div className="rz-marquee-track" key={i} aria-hidden={i === 1}>
            {[
              "34 pages → 48 words",
              "every claim page-anchored",
              "quotes copied, never invented",
              "900 pages max",
              "40 seconds",
              "34 languages",
            ].map((t) => (
              <span key={t}>
                {t} <span className="text-[var(--pink)]">✱</span>
              </span>
            ))}
          </div>
        ))}
      </div>

      {/* ── what you get ─────────────────────────────────────────────────── */}
      <section id="gets" className="mx-auto max-w-[1200px] px-5 py-20 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2 className="rz-display text-[clamp(2.4rem,6vw,4.4rem)]">
            Four things
            <br />
            come back
          </h2>
          <p className="rz-mono max-w-[26ch] normal-case">
            Not one wall of text. Four kinds of thing, each doing a different job.
          </p>
        </div>

        <div className="mt-12 grid gap-7 sm:grid-cols-2">
          {GETS.map((g, i) => (
            <article
              key={g.name}
              className={`rz-box p-7 ${
                g.ink === "pink"
                  ? "rz-box-pink"
                  : g.ink === "blue"
                    ? "rz-box-blue"
                    : ""
              }`}
              style={{ transform: `rotate(${i % 2 ? 0.5 : -0.6}deg)` }}
            >
              <p className="rz-mono opacity-70">{g.tag}</p>
              <h3 className="rz-h mt-3 text-[34px]">{g.name}</h3>
              <p className="mt-3 max-w-[42ch] text-[17px] leading-relaxed">
                {g.body}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* ── the dial ─────────────────────────────────────────────────────── */}
      <section
        id="dial"
        className="border-y-[2.5px] border-[var(--ink)] bg-[var(--paper-2)]"
      >
        <div className="mx-auto max-w-[1200px] px-5 py-20 lg:px-8">
          <div className="grid gap-14 lg:grid-cols-[auto_1fr] lg:gap-20">
            <div className="rz-dial-wrap flex flex-col items-center">
              <svg
                viewBox="0 0 260 260"
                className="h-[236px] w-[236px]"
                role="img"
                aria-label={`Ratio dial, currently set to ${dial.id}`}
              >
                <circle cx="130" cy="130" r="118" fill="none" stroke="var(--ink)" strokeWidth="4" />
                <circle cx="130" cy="130" r="103" fill="var(--paper)" stroke="none" />
                {/* tick field */}
                {Array.from({ length: 33 }, (_, i) => {
                  const a = (-120 + i * 7.5) * (Math.PI / 180);
                  const long = i % 8 === 0;
                  return (
                    <line
                      key={i}
                      x1={130 + Math.sin(a) * 96}
                      y1={130 - Math.cos(a) * 96}
                      x2={130 + Math.sin(a) * (long ? 78 : 87)}
                      y2={130 - Math.cos(a) * (long ? 78 : 87)}
                      stroke="var(--ink)"
                      strokeWidth={long ? 3 : 1.5}
                    />
                  );
                })}
                <g
                  className="rz-knob"
                  style={{ transform: `rotate(${dial.angle}deg)` }}
                >
                  <circle cx="130" cy="130" r="52" fill="var(--pink)" stroke="var(--ink)" strokeWidth="4" />
                  <line
                    x1="130"
                    y1="130"
                    x2="130"
                    y2="62"
                    stroke="var(--ink)"
                    strokeWidth="5"
                    strokeLinecap="round"
                  />
                  <circle cx="130" cy="130" r="7" fill="var(--ink)" />
                </g>
              </svg>

              <div className="mt-7 flex flex-wrap justify-center gap-2">
                {DIAL.map((d) => (
                  <button
                    key={d.id}
                    className="rz-dial-btn"
                    aria-pressed={dialId === d.id}
                    onClick={() => setDialId(d.id)}
                  >
                    {d.id}
                  </button>
                ))}
              </div>
              <p className="rz-mono mt-4 normal-case opacity-70">
                Turn it. Nothing is re-uploaded.
              </p>
            </div>

            <div>
              <p className="rz-mono">Set at {dial.id}</p>
              <h2 className="rz-display mt-4 text-[clamp(2.4rem,5.5vw,4.2rem)]">
                {dial.name}
              </h2>
              <div className="rz-box mt-7 p-7">
                <div className="flex flex-wrap items-baseline justify-between gap-3 border-b-[2.5px] border-[var(--ink)] pb-3">
                  <span className="rz-mono">
                    Thermal drift in cold-storage battery arrays · 34 pp.
                  </span>
                  <span className="rz-mono text-[var(--pink)]">
                    {dial.out} · {dial.time}
                  </span>
                </div>
                <p className="mt-5 max-w-[58ch] text-[19px] leading-relaxed">
                  {dial.body}
                </p>
              </div>
              <div className="mt-6 flex flex-wrap gap-6">
                {[
                  ["61", "quotes pulled"],
                  ["12", "claims mapped"],
                  ["9", "insights flagged"],
                ].map(([n, l]) => (
                  <div key={l}>
                    <p className="rz-h text-[40px] text-[var(--blue)] tabular-nums">
                      {n}
                    </p>
                    <p className="rz-mono normal-case">{l}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── how ──────────────────────────────────────────────────────────── */}
      <section className="mx-auto max-w-[1200px] px-5 py-20 lg:px-8">
        <h2 className="rz-display text-[clamp(2.4rem,6vw,4.4rem)]">
          Three moves
        </h2>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {STEPS.map((s) => (
            <div key={s.n} className="border-t-[2.5px] border-[var(--ink)] pt-5">
              <p
                className="rz-display text-[92px] leading-[0.7] text-[var(--pink)]"
                aria-hidden
              >
                {s.n}
              </p>
              <h3 className="rz-h mt-5 text-[27px]">{s.t}</h3>
              <p className="mt-3 max-w-[36ch] text-[17px] leading-relaxed">
                {s.b}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── voices ───────────────────────────────────────────────────────── */}
      <section className="border-y-[2.5px] border-[var(--ink)] bg-[var(--blue)] py-20 text-[var(--paper)]">
        <div className="mx-auto max-w-[1200px] px-5 lg:px-8">
          <h2 className="rz-display text-[clamp(2.2rem,5.5vw,4rem)]">
            People with piles
          </h2>
          <div className="mt-14 grid gap-12 md:grid-cols-3">
            {VOICES.map((v) => (
              <figure key={v.w}>
                <blockquote className="rz-bubble text-[var(--ink)]">
                  <p className="text-[17px] leading-relaxed">{v.b}</p>
                </blockquote>
                <figcaption className="mt-7 pl-1">
                  <p className="rz-h text-[19px]">{v.w}</p>
                  <p className="rz-mono mt-1 normal-case opacity-80">{v.r}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ── prices ───────────────────────────────────────────────────────── */}
      <section id="tags" className="mx-auto max-w-[1200px] px-5 py-20 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2 className="rz-display text-[clamp(2.4rem,6vw,4.4rem)]">Prices</h2>
          <p className="rz-mono normal-case">
            Monthly. Cancel in two clicks. No sales call.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {TAGS.map((t, i) => (
            <div
              key={t.name}
              className="rz-tag flex flex-col p-6"
              style={{ transform: `rotate(${i === 1 ? 0 : i === 0 ? -1 : 1}deg)` }}
            >
              <div className="flex items-center justify-between">
                <div className="rz-tag-hole" aria-hidden />
                {t.hot && (
                  <span className="rz-mono border-[2.5px] border-[var(--ink)] bg-[var(--pink)] px-2 py-1">
                    Most turned to
                  </span>
                )}
              </div>
              <h3 className="rz-h mt-5 text-[30px]">{t.name}</h3>
              <p className="rz-display mt-2 text-[58px] leading-[0.8] tabular-nums">
                {t.price}
              </p>
              <p className="rz-mono mt-2 normal-case">{t.per}</p>
              <p className="mt-4 text-[16px] leading-relaxed">{t.body}</p>
              <ul className="mt-6 mb-7 flex flex-col gap-1.5">
                {t.rows.map((r) => (
                  <li key={r} className="flex gap-2 text-[15px]">
                    <span aria-hidden className="text-[var(--pink)]">
                      ▸
                    </span>
                    {r}
                  </li>
                ))}
              </ul>
              <button
                className={`rz-btn mt-auto w-full ${t.hot ? "" : "rz-btn-blue"}`}
              >
                {t.cta}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* ── faq ──────────────────────────────────────────────────────────── */}
      <section className="border-t-[2.5px] border-[var(--ink)] bg-[var(--paper-2)]">
        <div className="mx-auto max-w-[1200px] px-5 py-20 lg:px-8">
          <h2 className="rz-display text-[clamp(2.4rem,6vw,4.4rem)]">
            Questions
            <br />
            we get asked
          </h2>
          <dl className="mt-12 grid gap-x-14 gap-y-9 md:grid-cols-2">
            {FAQ.map((f) => (
              <div key={f.q} className="border-t-[2.5px] border-[var(--ink)] pt-4">
                <dt className="rz-q">{f.q}</dt>
                <dd className="mt-2 max-w-[52ch] text-[16.5px] leading-relaxed">
                  {f.a}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ── closing ──────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden border-t-[2.5px] border-[var(--ink)] bg-[var(--pink)] text-[var(--ink)]">
        <div
          className="rz-blob rz-dots-blue absolute -bottom-20 -left-16 h-[220px] w-[220px] -rotate-6 sm:h-[340px] sm:w-[340px]"
          aria-hidden
        />
        <div className="relative z-10 mx-auto max-w-[1200px] px-5 py-24 lg:px-8">
          <h2 className="rz-display max-w-[18ch] text-[clamp(2.8rem,8vw,6.4rem)]">
            Your pile is not going to shrink on its own
          </h2>
          <div className="mt-10 flex flex-wrap items-center gap-5">
            <button className="rz-btn rz-btn-paper">Upload a PDF</button>
            <span className="rz-mono normal-case">
              Five documents free. No card. Nothing to install.
            </span>
          </div>
        </div>
      </section>

      <footer className="border-t-[2.5px] border-[var(--ink)]">
        <div className="mx-auto flex max-w-[1200px] flex-col gap-3 px-5 py-9 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <span className="rz-h text-[21px]">
            Ratio<span className="text-[var(--pink)]">/</span>Reader
          </span>
          <p className="rz-mono max-w-[62ch] normal-case">
            Printed in two inks: fluorescent pink and blue, on press grey. Set in
            Bricolage Grotesque, Karla and Martian Mono. Misregistration
            intentional.
          </p>
          <span className="rz-mono">© 2026</span>
        </div>
      </footer>
    </div>
  );
}
