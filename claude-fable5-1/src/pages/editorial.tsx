import { useMemo, useState } from "react";
import { motion } from "motion/react";
import { features, faqs, pricing, product, sampleDoc, steps, testimonials } from "../lib/content";

/* ------------------------------------------------------------------ */
/* Design 1 — "The Broadsheet"                                          */
/* A newspaper front page. Cream paper, ink black, one red accent.      */
/* The signature interaction is the Ratio Dial: a slider that visibly   */
/* strikes out the document until only what matters remains.           */
/* ------------------------------------------------------------------ */

const ink = "#161412";
const paper = "#f5f0e6";
const red = "#b8281e";

const docLines = [
  ["Abstract. The dominant sequence transduction models are based on complex recurrent or convolutional networks.", 0.9],
  ["These models include an encoder and a decoder connected through an attention mechanism.", 0.4],
  ["We propose a new simple architecture, the Transformer, based solely on attention.", 1.0],
  ["Experiments on two machine translation tasks show these models are superior in quality.", 0.6],
  ["The best models are also more parallelizable and require significantly less time to train.", 0.95],
  ["Our model achieves 28.4 BLEU on the WMT 2014 English-to-German translation task.", 0.7],
  ["This improves over the existing best results, including ensembles, by over 2 BLEU.", 0.3],
  ["Recurrent networks generate a sequence of hidden states as a function of the previous state.", 0.5],
  ["This inherently sequential nature precludes parallelization within training examples.", 0.85],
  ["Attention mechanisms allow modeling of dependencies without regard to their distance.", 0.8],
  ["In all but a few cases, however, such mechanisms are used in conjunction with a recurrent network.", 0.2],
  ["Multi-head attention lets the model jointly attend to information from different subspaces.", 0.9],
  ["Since our model contains no recurrence, we inject information about the position of tokens.", 0.75],
  ["We use sine and cosine functions of different frequencies for positional encodings.", 0.35],
  ["We trained on the standard WMT 2014 English-German dataset consisting of 4.5 million sentence pairs.", 0.25],
  ["Each training step took about 0.4 seconds on 8 NVIDIA P100 GPUs.", 0.15],
  ["Table 3 shows that reducing the number of attention heads hurts model quality.", 0.65],
  ["Self-attention could yield more interpretable models.", 0.55],
  ["We are excited about the future of attention-based models and plan to apply them to other tasks.", 0.1],
] as const;

function RatioDial() {
  const [ratio, setRatio] = useState(35);
  const kept = useMemo(() => docLines.filter(([, w]) => w * 100 >= 100 - ratio).length, [ratio]);
  const minutes = Math.max(1, Math.round((ratio / 100) * 31));

  return (
    <div className="border-y-2 py-5" style={{ borderColor: ink }}>
      <div className="mb-4 flex items-end justify-between gap-4">
        <div>
          <p className="font-inter text-[10px] font-semibold uppercase tracking-[0.2em]" style={{ color: red }}>
            Interactive · try the dial
          </p>
          <h3 className="font-fraunces text-2xl font-semibold leading-tight" style={{ fontVariationSettings: '"opsz" 72' }}>
            Turn the ratio. Watch the noise fall away.
          </h3>
        </div>
        <div className="text-right font-fraunces">
          <div className="text-4xl font-light tabular-nums leading-none" style={{ fontVariationSettings: '"opsz" 144' }}>
            {ratio}
            <span className="text-xl">%</span>
          </div>
          <div className="font-inter text-[10px] uppercase tracking-widest opacity-60">of original</div>
        </div>
      </div>

      <input
        type="range"
        min={5}
        max={100}
        value={ratio}
        onChange={(e) => setRatio(Number(e.target.value))}
        aria-label="Reading ratio"
        className="mb-4 h-1 w-full cursor-ew-resize appearance-none rounded-full"
        style={{ accentColor: red, background: `linear-gradient(to right, ${red} ${ratio}%, #d8d1c2 ${ratio}%)` }}
      />

      <div className="grid gap-x-6 gap-y-1 font-fraunces text-[13px] leading-snug sm:grid-cols-2" style={{ fontVariationSettings: '"opsz" 12' }}>
        {docLines.map(([line, w]) => {
          const keep = w * 100 >= 100 - ratio;
          return (
            <p
              key={line}
              className="transition-all duration-300"
              style={{
                opacity: keep ? 1 : 0.22,
                textDecoration: keep ? "none" : "line-through",
                textDecorationColor: red,
                backgroundColor: keep && w >= 0.85 ? "#fff3a3" : "transparent",
              }}
            >
              {line}
            </p>
          );
        })}
      </div>

      <div className="mt-5 flex flex-wrap gap-x-8 gap-y-2 border-t pt-3 font-inter text-xs" style={{ borderColor: "#c9c1b0" }}>
        <span>
          <b className="tabular-nums">{kept}</b> of {docLines.length} sentences kept
        </span>
        <span>
          Reading time <s className="opacity-50">31 min</s> <b className="tabular-nums">{minutes} min</b>
        </span>
        <span className="opacity-60">Highlighted = load-bearing claims</span>
      </div>
    </div>
  );
}

function Rule({ thick }: { thick?: boolean }) {
  return <hr className={thick ? "border-t-4" : "border-t"} style={{ borderColor: ink }} />;
}

export function Editorial() {
  const today = new Date().toLocaleDateString("en-GB", { weekday: "long", day: "numeric", month: "long", year: "numeric" });

  return (
    <main className="min-h-screen font-fraunces" style={{ background: paper, color: ink }}>
      {/* paper grain */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-0 opacity-[0.35] mix-blend-multiply"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.18'/%3E%3C/svg%3E\")",
        }}
      />

      <div className="relative z-10 mx-auto max-w-6xl px-5 pb-28 pt-6 sm:px-8">
        {/* Ears + masthead */}
        <div className="flex items-center justify-between font-inter text-[11px] uppercase tracking-[0.18em]">
          <span>Vol. I · No. 1</span>
          <span className="hidden sm:inline">{today}</span>
          <span>Price: your attention</span>
        </div>
        <Rule />
        <div className="py-5 text-center">
          <h1 className="text-[15vw] font-black leading-[0.82] tracking-tight sm:text-8xl md:text-[7.5rem]" style={{ fontVariationSettings: '"opsz" 144' }}>
            Ratio <span className="font-light italic">Reader</span>
          </h1>
          <p className="mt-3 font-inter text-[11px] uppercase tracking-[0.3em]">
            The essential edition of every document you'll ever open
          </p>
        </div>
        <Rule thick />
        <div className="flex items-center justify-between py-1.5 font-inter text-[11px] uppercase tracking-[0.15em]">
          <span>Inside: How it works · Four sections · Letters · Classifieds</span>
          <a href="#classifieds" className="hidden font-semibold sm:inline" style={{ color: red }}>
            Subscribe →
          </a>
        </div>
        <Rule />

        {/* Front page lead */}
        <section className="grid gap-8 py-10 lg:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.2, 0.8, 0.2, 1] }}
            className="lg:col-span-8"
          >
            <p className="mb-3 font-inter text-[11px] font-semibold uppercase tracking-[0.2em]" style={{ color: red }}>
              Lead story
            </p>
            <h2 className="text-5xl font-medium leading-[0.98] tracking-tight sm:text-6xl md:text-7xl" style={{ fontVariationSettings: '"opsz" 144' }}>
              Read <em className="font-light">less</em>. Understand{" "}
              <em className="font-light" style={{ color: red }}>
                more
              </em>
              .
            </h2>
            <p className="mt-6 max-w-2xl text-xl leading-relaxed" style={{ fontVariationSettings: '"opsz" 18' }}>
              {product.pitch}
            </p>
            <p className="mt-4 font-inter text-xs uppercase tracking-widest opacity-60">By the Ratio Reader desk · 2 min read</p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#dial"
                className="inline-flex items-center gap-2 px-6 py-3 font-inter text-sm font-semibold uppercase tracking-widest text-white transition-transform hover:-translate-y-0.5"
                style={{ background: ink }}
              >
                Upload a PDF, free
              </a>
              <a href="#how" className="font-inter text-sm underline decoration-1 underline-offset-4">
                Read how it works ↓
              </a>
            </div>
          </motion.div>

          <motion.aside
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="border-l pl-6 lg:col-span-4"
            style={{ borderColor: ink }}
          >
            <p className="font-inter text-[11px] font-semibold uppercase tracking-[0.2em]">Quote of the day</p>
            <blockquote className="mt-3 text-2xl font-light italic leading-snug" style={{ fontVariationSettings: '"opsz" 72' }}>
              “{sampleDoc.quotes[0].text}”
            </blockquote>
            <p className="mt-3 font-inter text-xs opacity-70">
              {sampleDoc.title}, p. {sampleDoc.quotes[0].page}. Pulled verbatim by Ratio Reader.
            </p>
            <Rule />
            <div className="mt-4 grid grid-cols-2 gap-4">
              {[
                ["12×", "faster to the point"],
                ["94%", "of key claims kept"],
                ["2.1M", "pages distilled"],
                ["40+", "languages"],
              ].map(([v, l]) => (
                <div key={l}>
                  <div className="text-3xl font-semibold tabular-nums" style={{ fontVariationSettings: '"opsz" 144' }}>
                    {v}
                  </div>
                  <div className="font-inter text-[11px] uppercase tracking-wider opacity-60">{l}</div>
                </div>
              ))}
            </div>
          </motion.aside>
        </section>

        {/* Dial */}
        <section id="dial" className="scroll-mt-8">
          <RatioDial />
        </section>

        {/* How it works — three columns like a news brief */}
        <section id="how" className="scroll-mt-8 py-12">
          <div className="mb-6 flex items-baseline justify-between">
            <h3 className="text-3xl font-semibold tracking-tight" style={{ fontVariationSettings: '"opsz" 96' }}>
              How the edition is made
            </h3>
            <span className="font-inter text-[11px] uppercase tracking-widest opacity-60">Three steps</span>
          </div>
          <Rule />
          <div className="grid divide-y md:grid-cols-3 md:divide-x md:divide-y-0" style={{ borderColor: ink }}>
            {steps.map((s, i) => (
              <motion.div
                key={s.n}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: i * 0.12, duration: 0.6 }}
                className="py-6 md:px-6 md:first:pl-0 md:last:pr-0"
                style={{ borderColor: "#c9c1b0" }}
              >
                <div className="text-5xl font-light leading-none" style={{ color: red, fontVariationSettings: '"opsz" 144' }}>
                  {s.n}
                </div>
                <h4 className="mt-3 text-xl font-semibold">{s.title}</h4>
                <p className="mt-2 text-[15px] leading-relaxed opacity-85" style={{ fontVariationSettings: '"opsz" 14' }}>
                  {s.body}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Four sections */}
        <section className="py-4">
          <Rule thick />
          <div className="flex items-center justify-between gap-4 py-2 text-center font-inter text-[11px] uppercase tracking-[0.2em]">
            <span>Section B</span>
            <span>The four sections of every Ratio edition</span>
            <span>B1</span>
          </div>
          <Rule />
          <div className="grid gap-x-10 gap-y-8 py-8 md:grid-cols-2">
            {features.map((f, i) => (
              <article key={f.key} className="relative">
                <p className="font-inter text-[11px] font-semibold uppercase tracking-[0.2em]" style={{ color: red }}>
                  § {i + 1} · {f.title}
                </p>
                <h4 className="mt-2 text-3xl font-medium leading-tight tracking-tight" style={{ fontVariationSettings: '"opsz" 96' }}>
                  {f.short}
                </h4>
                <p
                  className="mt-4 text-[16px] leading-relaxed first-letter:float-left first-letter:mr-2 first-letter:text-6xl first-letter:font-black first-letter:leading-[0.8]"
                  style={{ fontVariationSettings: '"opsz" 14' }}
                >
                  {f.long}
                </p>
                <div className="mt-4 border-l-2 pl-4 font-inter text-xs leading-relaxed opacity-80" style={{ borderColor: red }}>
                  {f.key === "summary" && <>Example: “{sampleDoc.summary}”</>}
                  {f.key === "hints" && <>Example: “{sampleDoc.hints[0]}”</>}
                  {f.key === "quotes" && (
                    <>
                      Example: “{sampleDoc.quotes[1].text}” — p. {sampleDoc.quotes[1].page}
                    </>
                  )}
                  {f.key === "insights" && <>Example: “{sampleDoc.insights[0]}”</>}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Letters */}
        <section className="py-4">
          <Rule thick />
          <div className="flex items-center justify-between gap-4 py-2 text-center font-inter text-[11px] uppercase tracking-[0.2em]">
            <span>Section C</span>
            <span>Letters to the editor</span>
            <span>C1</span>
          </div>
          <Rule />
          <div className="grid gap-8 py-8 md:grid-cols-3">
            {testimonials.map((t) => (
              <figure key={t.name}>
                <blockquote className="text-lg leading-relaxed" style={{ fontVariationSettings: '"opsz" 18' }}>
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-3 font-inter text-xs">
                  <span className="font-semibold">{t.name}</span> <span className="opacity-60">· {t.role}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        {/* Classifieds — pricing */}
        <section id="classifieds" className="scroll-mt-8 py-4">
          <Rule thick />
          <div className="flex items-center justify-between gap-4 py-2 text-center font-inter text-[11px] uppercase tracking-[0.2em]">
            <span>Section D</span>
            <span>Classifieds · Subscriptions</span>
            <span>D1</span>
          </div>
          <Rule />
          <div className="grid gap-4 py-8 md:grid-cols-3">
            {pricing.map((p) => (
              <div
                key={p.name}
                className="flex flex-col border-2 p-5"
                style={{ borderColor: ink, background: p.highlight ? ink : "transparent", color: p.highlight ? paper : ink }}
              >
                <div className="flex items-baseline justify-between">
                  <h4 className="text-2xl font-semibold">{p.name}</h4>
                  {p.highlight && (
                    <span className="font-inter text-[10px] uppercase tracking-widest" style={{ color: "#ffd34d" }}>
                      Most read
                    </span>
                  )}
                </div>
                <div className="mt-3 text-5xl font-light tabular-nums" style={{ fontVariationSettings: '"opsz" 144' }}>
                  {p.price}
                  <span className="ml-1 font-inter text-xs uppercase tracking-wider opacity-70">{p.period}</span>
                </div>
                <ul className="mt-4 flex-1 space-y-1.5 font-inter text-sm">
                  {p.features.map((f) => (
                    <li key={f} className="flex gap-2">
                      <span style={{ color: p.highlight ? "#ffd34d" : red }}>■</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <button
                  className="mt-6 py-2.5 font-inter text-xs font-semibold uppercase tracking-widest transition-opacity hover:opacity-85"
                  style={{ background: p.highlight ? paper : ink, color: p.highlight ? ink : paper }}
                >
                  {p.cta}
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="py-4">
          <Rule />
          <div className="grid gap-8 py-8 md:grid-cols-2">
            {faqs.map((f) => (
              <div key={f.q}>
                <h5 className="text-xl font-semibold">{f.q}</h5>
                <p className="mt-2 text-[15px] leading-relaxed opacity-85" style={{ fontVariationSettings: '"opsz" 14' }}>
                  {f.a}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-8 text-center">
          <Rule thick />
          <h3 className="mt-10 text-5xl font-medium tracking-tight sm:text-6xl" style={{ fontVariationSettings: '"opsz" 144' }}>
            Your next document, <em className="font-light">condensed</em>.
          </h3>
          <p className="mx-auto mt-4 max-w-md font-inter text-sm opacity-70">
            Free for five documents a month. No card required, no training on your files.
          </p>
          <a
            href="#dial"
            className="mt-8 inline-block px-8 py-4 font-inter text-sm font-semibold uppercase tracking-widest text-white"
            style={{ background: red }}
          >
            Upload your first PDF
          </a>
          <div className="mt-10 font-inter text-[11px] uppercase tracking-[0.2em] opacity-60">
            Printed on recycled attention · Ratio Reader © 2026 · Colophon set in Fraunces &amp; Inter
          </div>
        </section>
      </div>
    </main>
  );
}
