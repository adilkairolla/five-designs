import { useState } from "react";
import { motion } from "motion/react";
import { faqs, features, pricing, sampleDoc, stats, steps, testimonials } from "../lib/content";

/* ------------------------------------------------------------------ */
/* Design 3 — "Loud"                                                    */
/* Neo-brutalist poster. Flat primaries, 3px black borders, hard        */
/* offset shadows, stickers, marquees. Signature: a drop-zone that      */
/* explodes into four sticky notes when you hover / drop.               */
/* ------------------------------------------------------------------ */

const yellow = "#ffe600";
const pink = "#ff4fa3";
const blue = "#3d5bff";
const green = "#4dff88";
const black = "#0b0b0b";

const shadow = "6px 6px 0 #0b0b0b";
const box = { border: `3px solid ${black}`, boxShadow: shadow };

function Sticker({ children, rotate = -8, color = pink, className = "" }: { children: React.ReactNode; rotate?: number; color?: string; className?: string }) {
  return (
    <span
      className={`inline-block px-3 py-1 font-archivo text-xs uppercase tracking-wide ${className}`}
      style={{ background: color, border: `3px solid ${black}`, transform: `rotate(${rotate}deg)`, boxShadow: "3px 3px 0 #0b0b0b" }}
    >
      {children}
    </span>
  );
}

function Marquee({ text, bg }: { text: string; bg: string }) {
  const items = Array.from({ length: 12 }, () => text);
  return (
    <div className="overflow-hidden border-y-[3px] py-2 font-archivo text-lg uppercase" style={{ background: bg, borderColor: black }}>
      <div className="animate-marquee flex w-max gap-8 whitespace-nowrap">
        {items.concat(items).map((t, i) => (
          <span key={i} className="flex items-center gap-8">
            {t} <span>✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}

function DropZone() {
  const [open, setOpen] = useState(false);
  const notes = [
    { label: "Summary", body: sampleDoc.summary, color: yellow, rot: -4, x: "-40%", y: "-30%" },
    { label: "Hint", body: sampleDoc.hints[0], color: green, rot: 5, x: "40%", y: "-40%" },
    { label: "Quote · p.7", body: `"${sampleDoc.quotes[1].text}"`, color: pink, rot: -6, x: "-45%", y: "40%" },
    { label: "Insight", body: sampleDoc.insights[1], color: blue, rot: 4, x: "40%", y: "35%" },
  ];
  return (
    <div className="relative">
      <button
        onMouseEnter={() => setOpen(true)}
        onClick={() => setOpen((v) => !v)}
        onDragOver={(e) => {
          e.preventDefault();
          setOpen(true);
        }}
        onDrop={(e) => {
          e.preventDefault();
          setOpen(true);
        }}
        className="relative z-10 w-full bg-white p-8 text-left font-grotesk transition-transform active:translate-x-1 active:translate-y-1 active:shadow-none sm:p-12"
        style={{ ...box, borderStyle: "dashed" }}
      >
        <div className="font-archivo text-3xl uppercase leading-none sm:text-5xl">
          Drop a PDF
          <br />
          right here.
        </div>
        <p className="mt-4 max-w-xs text-sm font-medium">Or hover to see what {sampleDoc.title} becomes. 15 pages → 4 sticky notes.</p>
        <div className="mt-6 inline-block px-4 py-2 font-archivo text-sm uppercase text-white" style={{ background: black }}>
          {open ? "Boom. Read it in 2 min." : "Choose file"}
        </div>
      </button>

      {notes.map((n, i) => (
        <motion.div
          key={n.label}
          initial={false}
          animate={open ? { opacity: 1, x: n.x, y: n.y, rotate: n.rot, scale: 1 } : { opacity: 0, x: 0, y: 0, rotate: 0, scale: 0.6 }}
          transition={{ type: "spring", stiffness: 260, damping: 18, delay: open ? i * 0.07 : 0 }}
          className="pointer-events-none absolute left-1/2 top-1/2 z-20 w-56 -translate-x-1/2 -translate-y-1/2 p-4 font-grotesk text-[12px] leading-snug sm:w-64"
          style={{ background: n.color, color: n.color === blue ? "#fff" : black, ...box }}
        >
          <div className="mb-1 font-archivo text-[11px] uppercase">{n.label}</div>
          {n.body}
        </motion.div>
      ))}
    </div>
  );
}

export function Brutalist() {
  return (
    <main className="min-h-screen font-grotesk" style={{ background: yellow, color: black }}>
      {/* Nav */}
      <header className="border-b-[3px] px-5 py-4 sm:px-8" style={{ borderColor: black }}>
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center bg-white font-archivo text-xl" style={box}>
              R
            </span>
            <span className="font-archivo text-lg uppercase">Ratio Reader</span>
          </div>
          <nav className="hidden items-center gap-6 text-sm font-bold uppercase sm:flex">
            <a href="#what" className="hover:underline">
              What
            </a>
            <a href="#how" className="hover:underline">
              How
            </a>
            <a href="#price" className="hover:underline">
              Price
            </a>
          </nav>
          <a href="#price" className="px-4 py-2 font-archivo text-sm uppercase text-white transition-transform hover:-translate-y-0.5" style={{ background: blue, ...box }}>
            Try free
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-14 sm:px-8 lg:grid-cols-2 lg:py-20">
        <div className="relative">
          <div className="absolute -top-6 left-0 sm:-top-8">
            <Sticker rotate={-6}>New · v2</Sticker>
          </div>
          <h1 className="font-archivo text-[17vw] uppercase leading-[0.85] sm:text-7xl lg:text-8xl">
            Read
            <br />
            less.
            <br />
            <span className="inline-block bg-white px-2" style={{ border: `3px solid ${black}`, boxShadow: shadow, color: pink }}>
              Get
            </span>{" "}
            more.
          </h1>
          <p className="mt-8 max-w-md text-lg font-medium leading-snug">
            Upload a PDF. Get the summary, the hints, the quotes and the insights. Skip the 200 pages of throat-clearing.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#price" className="px-6 py-3 font-archivo uppercase text-white transition-transform hover:-translate-y-0.5" style={{ background: black, border: `3px solid ${black}`, boxShadow: `6px 6px 0 ${pink}` }}>
              Upload a PDF →
            </a>
            <a href="#how" className="bg-white px-6 py-3 font-archivo uppercase transition-transform hover:-translate-y-0.5" style={box}>
              How?
            </a>
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <Sticker rotate={3} color={green}>
              No card
            </Sticker>
            <Sticker rotate={-2} color="#fff">
              5 free / mo
            </Sticker>
            <Sticker rotate={4} color={blue} className="text-white">
              40+ langs
            </Sticker>
          </div>
        </div>
        <motion.div initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }} transition={{ type: "spring", stiffness: 120, damping: 14 }}>
          <DropZone />
        </motion.div>
      </section>

      <Marquee text="Summary · Hints · Quotes · Insights" bg={pink} />

      {/* Stats */}
      <section className="mx-auto grid max-w-6xl grid-cols-2 gap-4 px-5 py-12 sm:px-8 md:grid-cols-4">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 20, rotate: 0 }}
            whileInView={{ opacity: 1, y: 0, rotate: i % 2 ? 1.5 : -1.5 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="bg-white p-5"
            style={box}
          >
            <div className="font-archivo text-4xl sm:text-5xl">{s.value}</div>
            <div className="mt-1 text-sm font-bold uppercase">{s.label}</div>
          </motion.div>
        ))}
      </section>

      {/* What you get */}
      <section id="what" className="scroll-mt-6 px-5 py-12 sm:px-8" style={{ background: "#fff", borderTop: `3px solid ${black}`, borderBottom: `3px solid ${black}` }}>
        <div className="mx-auto max-w-6xl">
          <h2 className="font-archivo text-4xl uppercase leading-none sm:text-6xl">
            Four things.
            <br />
            <span style={{ color: blue }}>Every</span> document.
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {features.map((f, i) => {
              const colors = [yellow, green, pink, blue];
              const c = colors[i];
              return (
                <motion.article
                  key={f.key}
                  whileHover={{ rotate: i % 2 ? 1 : -1, y: -4 }}
                  className="p-6"
                  style={{ background: c, color: c === blue ? "#fff" : black, ...box }}
                >
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="font-archivo text-2xl uppercase leading-none">{f.title}</h3>
                    <span className="font-archivo text-4xl leading-none opacity-40">0{i + 1}</span>
                  </div>
                  <p className="mt-3 text-lg font-bold leading-snug">{f.short}</p>
                  <p className="mt-3 text-sm font-medium leading-relaxed">{f.long}</p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* How */}
      <section id="how" className="mx-auto max-w-6xl scroll-mt-6 px-5 py-14 sm:px-8">
        <h2 className="font-archivo text-4xl uppercase leading-none sm:text-6xl">How it works</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {steps.map((s, i) => (
            <div key={s.n} className="relative bg-white p-6 pt-10" style={box}>
              <span className="absolute -top-5 left-5 grid h-12 w-12 place-items-center font-archivo text-xl text-white" style={{ background: [pink, blue, black][i], border: `3px solid ${black}` }}>
                {i + 1}
              </span>
              <h3 className="font-archivo text-xl uppercase">{s.title}</h3>
              <p className="mt-2 text-sm font-medium leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>
      </section>

      <Marquee text="Upload · Distill · Understand" bg={green} />

      {/* Testimonials as speech bubbles */}
      <section className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
        <h2 className="font-archivo text-4xl uppercase leading-none sm:text-5xl">People are shouting</h2>
        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <div key={t.name} className="relative">
              <div className="relative bg-white p-5 text-[15px] font-medium leading-relaxed" style={box}>
                “{t.quote}”
                <span className="absolute -bottom-[15px] left-8 h-6 w-6 rotate-45 bg-white" style={{ borderRight: `3px solid ${black}`, borderBottom: `3px solid ${black}` }} />
              </div>
              <div className="mt-6 flex items-center gap-3 pl-2">
                <span className="grid h-10 w-10 place-items-center font-archivo" style={{ background: [pink, green, blue][i], color: i === 2 ? "#fff" : black, border: `3px solid ${black}` }}>
                  {t.name[0]}
                </span>
                <div className="text-sm">
                  <div className="font-archivo uppercase">{t.name}</div>
                  <div className="font-medium opacity-70">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section id="price" className="scroll-mt-6 px-5 py-14 sm:px-8" style={{ background: blue, color: "#fff", borderTop: `3px solid ${black}` }}>
        <div className="mx-auto max-w-6xl">
          <h2 className="font-archivo text-4xl uppercase leading-none sm:text-6xl">Pick your ratio</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {pricing.map((p, i) => (
              <div
                key={p.name}
                className="flex flex-col p-6"
                style={{ background: p.highlight ? yellow : "#fff", color: black, ...box, transform: `rotate(${[-1, 0, 1][i]}deg)` }}
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-archivo text-2xl uppercase">{p.name}</h3>
                  {p.highlight && <Sticker rotate={6}>Best</Sticker>}
                </div>
                <div className="mt-4 font-archivo text-6xl leading-none">{p.price}</div>
                <div className="mt-1 text-sm font-bold uppercase opacity-70">{p.period}</div>
                <ul className="mt-6 flex-1 space-y-2 text-sm font-medium">
                  {p.features.map((f) => (
                    <li key={f} className="flex gap-2">
                      <span className="font-archivo">→</span> {f}
                    </li>
                  ))}
                </ul>
                <button className="mt-6 py-3 font-archivo uppercase text-white transition-transform hover:-translate-y-0.5" style={{ background: p.highlight ? pink : black, border: `3px solid ${black}`, boxShadow: `4px 4px 0 ${p.highlight ? black : pink}` }}>
                  {p.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
        <h2 className="font-archivo text-4xl uppercase leading-none sm:text-5xl">Questions, answers</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {faqs.map((f) => (
            <details key={f.q} className="group bg-white p-5" style={box}>
              <summary className="flex cursor-pointer list-none items-center justify-between font-archivo text-base uppercase">
                {f.q}
                <span className="transition-transform group-open:rotate-45">+</span>
              </summary>
              <p className="mt-3 text-sm font-medium leading-relaxed">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 pb-32 pt-10 text-center sm:px-8">
        <h2 className="font-archivo text-[12vw] uppercase leading-[0.85] sm:text-7xl lg:text-8xl">
          Stop
          <br />
          skimming.
        </h2>
        <a href="#price" className="mt-8 inline-block bg-white px-10 py-4 font-archivo text-xl uppercase transition-transform hover:-translate-y-1" style={{ border: `3px solid ${black}`, boxShadow: `8px 8px 0 ${pink}` }}>
          Upload a PDF, free
        </a>
        <p className="mt-10 text-xs font-bold uppercase">Ratio Reader © 2026 · Made loud on purpose</p>
      </section>
    </main>
  );
}
