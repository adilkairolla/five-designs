import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { faqs, features, pricing, sampleDoc, stats, steps, testimonials } from "../lib/content";

/* ------------------------------------------------------------------ */
/* Design 4 — "Lens"                                                    */
/* Midnight glass with aurora light. The hero is a wall of dense        */
/* document text; a circular lens follows your cursor and, inside it,   */
/* the noise becomes the summary. The product, demonstrated literally.  */
/* ------------------------------------------------------------------ */

const bg = "#07070e";

const dense = Array.from({ length: 4 }, () =>
  [
    "The dominant sequence transduction models are based on complex recurrent or convolutional neural networks that include an encoder and a decoder. The best performing models also connect the encoder and decoder through an attention mechanism. We propose a new simple network architecture, the Transformer, based solely on attention mechanisms, dispensing with recurrence and convolutions entirely. Experiments on two machine translation tasks show these models to be superior in quality while being more parallelizable and requiring significantly less time to train. Our model achieves 28.4 BLEU on the WMT 2014 English-to-German translation task, improving over the existing best results, including ensembles, by over 2 BLEU. On the WMT 2014 English-to-French translation task, our model establishes a new single-model state-of-the-art BLEU score of 41.8 after training for 3.5 days on eight GPUs, a small fraction of the training costs of the best models from the literature.",
  ].join(" "),
).join(" ");

function LensHero() {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.45);
  const sx = useSpring(mx, { stiffness: 220, damping: 28 });
  const sy = useSpring(my, { stiffness: 220, damping: 28 });
  const clip = useTransform([sx, sy], ([x, y]) => `circle(150px at ${(x as number) * 100}% ${(y as number) * 100}%)`);
  const ringX = useTransform(sx, (v) => `${v * 100}%`);
  const ringY = useTransform(sy, (v) => `${v * 100}%`);

  return (
    <div
      ref={ref}
      onPointerMove={(e) => {
        const r = ref.current!.getBoundingClientRect();
        mx.set((e.clientX - r.left) / r.width);
        my.set((e.clientY - r.top) / r.height);
        setActive(true);
      }}
      onPointerLeave={() => setActive(false)}
      className="relative mx-auto max-w-4xl cursor-none select-none overflow-hidden rounded-3xl border border-white/10 p-8 sm:p-12"
      style={{ background: "rgba(255,255,255,0.03)", backdropFilter: "blur(12px)" }}
    >
      {/* dense layer */}
      <p className="font-manrope text-[13px] leading-[1.7] text-white/25 sm:text-sm">{dense}</p>

      {/* lens layer */}
      <motion.div className="absolute inset-0 flex items-center overflow-hidden p-8 sm:p-12" style={{ clipPath: clip, background: "rgba(10,10,20,0.94)" }}>
        <div className="font-instrument text-xl leading-snug text-white sm:text-[1.7rem]">
          <p>
            <span className="text-[#9be7ff]">Summary.</span> {sampleDoc.summary}
          </p>
          <p className="mt-4">
            <span className="text-[#ffb6e6]">Insight.</span> {sampleDoc.insights[0]}
          </p>
          <p className="mt-4">
            <span className="text-[#c7f284]">Hint.</span> {sampleDoc.hints[1]}
          </p>
        </div>
      </motion.div>

      {/* ring */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          left: ringX,
          top: ringY,
          opacity: active ? 1 : 0.6,
          boxShadow: "0 0 0 1.5px rgba(255,255,255,0.7), 0 0 60px 10px rgba(120,160,255,0.25), inset 0 0 40px rgba(255,255,255,0.08)",
        }}
      />
      {!active && (
        <div className="pointer-events-none absolute inset-x-0 bottom-5 text-center font-manrope text-xs uppercase tracking-[0.3em] text-white/50">
          Move your cursor over the page
        </div>
      )}
    </div>
  );
}

function Glass({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-xl ${className}`} style={{ boxShadow: "inset 0 1px 0 rgba(255,255,255,0.08)" }}>
      {children}
    </div>
  );
}

function TiltCard({ children }: { children: React.ReactNode }) {
  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const srx = useSpring(rx, { stiffness: 200, damping: 20 });
  const sry = useSpring(ry, { stiffness: 200, damping: 20 });
  return (
    <motion.div
      style={{ rotateX: srx, rotateY: sry, transformPerspective: 900 }}
      onPointerMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        ry.set(((e.clientX - r.left) / r.width - 0.5) * 12);
        rx.set(-((e.clientY - r.top) / r.height - 0.5) * 12);
      }}
      onPointerLeave={() => {
        rx.set(0);
        ry.set(0);
      }}
    >
      {children}
    </motion.div>
  );
}

export function Lens() {
  return (
    <main className="min-h-screen overflow-x-hidden font-manrope text-white" style={{ background: bg }}>
      {/* aurora */}
      <div aria-hidden className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="animate-drift absolute -left-40 -top-40 h-[60vw] w-[60vw] rounded-full opacity-50 blur-[120px]" style={{ background: "radial-gradient(circle, #4c6fff, transparent 60%)" }} />
        <div className="animate-drift absolute -right-40 top-1/3 h-[50vw] w-[50vw] rounded-full opacity-40 blur-[120px]" style={{ background: "radial-gradient(circle, #ff5fb0, transparent 60%)", animationDelay: "-6s" }} />
        <div className="animate-drift absolute bottom-0 left-1/3 h-[50vw] w-[50vw] rounded-full opacity-40 blur-[120px]" style={{ background: "radial-gradient(circle, #33e6c1, transparent 60%)", animationDelay: "-12s" }} />
      </div>

      <div className="relative mx-auto max-w-6xl px-5 pb-28 sm:px-8">
        <header className="flex items-center justify-between py-6">
          <div className="flex items-center gap-2 text-sm font-semibold">
            <span className="h-6 w-6 rounded-full" style={{ background: "conic-gradient(from 180deg, #9be7ff, #ffb6e6, #c7f284, #9be7ff)" }} />
            Ratio Reader
          </div>
          <nav className="hidden gap-8 text-sm text-white/60 sm:flex">
            <a href="#features" className="hover:text-white">
              Features
            </a>
            <a href="#how" className="hover:text-white">
              How it works
            </a>
            <a href="#pricing" className="hover:text-white">
              Pricing
            </a>
          </nav>
          <a href="#pricing" className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-black transition-transform hover:scale-105">
            Get started
          </a>
        </header>

        {/* Hero */}
        <section className="pb-12 pt-10 text-center sm:pt-16">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/70">
              <span className="h-1.5 w-1.5 rounded-full bg-[#c7f284]" /> Now reading 40+ languages
            </span>
            <h1 className="mx-auto mt-6 max-w-4xl text-5xl font-extrabold leading-[1.02] tracking-tight sm:text-7xl">
              Every document has a <span className="font-instrument font-normal italic text-[#9be7ff]">clear part</span>.<br />
              We find it for you.
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-lg text-white/60">
              Upload a PDF. Ratio Reader returns a layered summary, reading hints, verbatim quotes and the insights in between, each one linked to its page.
            </p>
            <div className="mt-8 flex justify-center gap-3">
              <a href="#pricing" className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition-transform hover:scale-105">
                Upload a PDF
              </a>
              <a href="#how" className="rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold backdrop-blur hover:bg-white/10">
                See how
              </a>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.3 }} className="mt-14">
            <LensHero />
          </motion.div>
        </section>

        {/* Stats */}
        <section className="grid grid-cols-2 gap-3 py-6 md:grid-cols-4">
          {stats.map((s) => (
            <Glass key={s.label} className="p-5">
              <div className="font-instrument text-4xl">{s.value}</div>
              <div className="mt-1 text-xs uppercase tracking-wider text-white/50">{s.label}</div>
            </Glass>
          ))}
        </section>

        {/* Features */}
        <section id="features" className="scroll-mt-10 py-20">
          <h2 className="text-center text-3xl font-extrabold tracking-tight sm:text-5xl">
            Four layers of <span className="font-instrument font-normal italic text-[#ffb6e6]">understanding</span>
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-center text-white/60">Not a chatbot answer. A structured reading, produced from the whole document and cited to the page.</p>
          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {features.map((f, i) => {
              const accents = ["#9be7ff", "#c7f284", "#ffb6e6", "#ffd280"];
              const a = accents[i];
              return (
                <TiltCard key={f.key}>
                  <Glass className="h-full p-7">
                    <div className="flex items-center gap-3">
                      <span className="h-8 w-8 rounded-full" style={{ background: `radial-gradient(circle at 30% 30%, #fff, ${a})`, boxShadow: `0 0 30px ${a}66` }} />
                      <h3 className="text-xl font-bold">{f.title}</h3>
                    </div>
                    <p className="mt-4 font-instrument text-2xl leading-snug" style={{ color: a }}>
                      {f.short}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-white/60">{f.long}</p>
                    <div className="mt-5 rounded-xl border border-white/10 bg-black/30 p-4 text-[13px] leading-relaxed text-white/80">
                      {f.key === "summary" && sampleDoc.summary}
                      {f.key === "hints" && sampleDoc.hints[0]}
                      {f.key === "quotes" && (
                        <>
                          “{sampleDoc.quotes[0].text}” <span className="text-white/40">— p. {sampleDoc.quotes[0].page}</span>
                        </>
                      )}
                      {f.key === "insights" && sampleDoc.insights[1]}
                    </div>
                  </Glass>
                </TiltCard>
              );
            })}
          </div>
        </section>

        {/* How */}
        <section id="how" className="scroll-mt-10 py-10">
          <div className="grid gap-8 lg:grid-cols-3">
            {steps.map((s, i) => (
              <motion.div key={s.n} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.12 }}>
                <div className="font-instrument text-6xl text-white/20">{s.n}</div>
                <h3 className="mt-2 text-xl font-bold">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60">{s.body}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20">
          <div className="grid gap-4 md:grid-cols-3">
            {testimonials.map((t) => (
              <Glass key={t.name} className="p-6">
                <p className="font-instrument text-xl leading-snug">“{t.quote}”</p>
                <div className="mt-5 text-sm">
                  <div className="font-semibold">{t.name}</div>
                  <div className="text-white/50">{t.role}</div>
                </div>
              </Glass>
            ))}
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="scroll-mt-10 py-10">
          <h2 className="text-center text-3xl font-extrabold tracking-tight sm:text-5xl">
            Simple <span className="font-instrument font-normal italic text-[#c7f284]">pricing</span>
          </h2>
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {pricing.map((p) => (
              <div
                key={p.name}
                className="rounded-2xl p-[1px]"
                style={{ background: p.highlight ? "linear-gradient(135deg, #9be7ff, #ffb6e6, #c7f284)" : "rgba(255,255,255,0.1)" }}
              >
                <div className="flex h-full flex-col rounded-2xl p-7" style={{ background: "#0d0d18" }}>
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-bold">{p.name}</h3>
                    {p.highlight && <span className="rounded-full bg-white/10 px-2 py-0.5 text-[10px] uppercase tracking-wider">Popular</span>}
                  </div>
                  <div className="mt-4 font-instrument text-5xl">
                    {p.price}
                    <span className="ml-2 font-manrope text-xs text-white/50">{p.period}</span>
                  </div>
                  <ul className="mt-6 flex-1 space-y-2 text-sm text-white/70">
                    {p.features.map((f) => (
                      <li key={f} className="flex gap-2">
                        <span className="text-[#c7f284]">✓</span> {f}
                      </li>
                    ))}
                  </ul>
                  <button className={`mt-6 rounded-full py-2.5 text-sm font-semibold transition-transform hover:scale-[1.02] ${p.highlight ? "bg-white text-black" : "border border-white/20 bg-white/5"}`}>{p.cta}</button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20">
          <div className="grid gap-x-10 gap-y-8 md:grid-cols-2">
            {faqs.map((f) => (
              <div key={f.q}>
                <h4 className="text-lg font-bold">{f.q}</h4>
                <p className="mt-2 text-sm leading-relaxed text-white/60">{f.a}</p>
              </div>
            ))}
          </div>
        </section>

        <footer className="rounded-3xl border border-white/10 bg-white/[0.03] p-10 text-center">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-5xl">
            Bring your <span className="font-instrument font-normal italic text-[#9be7ff]">heaviest</span> PDF.
          </h2>
          <a href="#pricing" className="mt-6 inline-block rounded-full bg-white px-8 py-3 text-sm font-semibold text-black transition-transform hover:scale-105">
            Start free
          </a>
          <p className="mt-8 text-xs text-white/40">Ratio Reader © 2026 · Files encrypted, never trained on</p>
        </footer>
      </div>
    </main>
  );
}
