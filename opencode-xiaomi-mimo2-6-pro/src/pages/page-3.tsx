import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { product, features, steps, quotes, stats } from "../lib/content";

const RED = "#E30613";

function Rule({ className = "" }: { className?: string }) {
  return <div className={`h-px w-full bg-black ${className}`} />;
}

export function Page3() {
  return (
    <div className="min-h-screen bg-white text-black selection:bg-[#E30613] selection:text-white">
      <header className="sticky top-0 z-50 border-b border-black bg-white">
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-4 md:px-10">
          <div className="flex items-center gap-3">
            <span className="inline-block h-3 w-3" style={{ background: RED }} />
            <span className="font-inter text-sm font-semibold tracking-tight">Ratio Reader</span>
          </div>
          <nav className="hidden items-center gap-8 md:flex">
            {[
              ["Output", "#output"],
              ["Method", "#method"],
              ["Evidence", "#evidence"],
              ["Start", "#start"],
            ].map(([label, href]) => (
              <a
                key={href}
                href={href}
                className="font-inter text-xs font-medium tracking-[0.18em] uppercase transition hover:text-[#E30613]"
              >
                {label}
              </a>
            ))}
          </nav>
          <p className="hidden font-inter text-xs tracking-[0.2em] text-black/40 uppercase md:block">
            01 / 05
          </p>
        </div>
      </header>

      <section className="relative mx-auto max-w-[1400px] px-6 pt-16 pb-0 md:px-10 md:pt-24">
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <p className="font-inter text-xs font-medium tracking-[0.28em] uppercase" style={{ color: RED }}>
              PDF → Summary · Hints · Quotes · Insights
            </p>
            <h1 className="mt-6 font-inter text-[clamp(3.5rem,14vw,11rem)] leading-[0.82] font-black tracking-[-0.055em]">
              READ
              <br />
              LESS.
            </h1>
            <div className="mt-2 flex items-end gap-6">
              <h1 className="font-inter text-[clamp(3.5rem,14vw,11rem)] leading-[0.82] font-black tracking-[-0.055em]">
                UNDER
              </h1>
              <span
                className="mb-3 inline-block h-[clamp(3rem,10vw,8rem)] w-[clamp(3rem,10vw,8rem)] shrink-0"
                style={{ background: RED }}
              />
            </div>
            <h1 className="font-inter text-[clamp(3.5rem,14vw,11rem)] leading-[0.82] font-black tracking-[-0.055em]">
              STAND.
            </h1>
          </div>

          <div className="flex flex-col justify-end lg:col-span-4">
            <Rule className="mb-6" />
            <p className="font-inter text-lg leading-[1.5] font-normal text-black/80">
              {product.description}
            </p>
            <p className="mt-6 font-inter text-sm leading-relaxed text-black/50">
              A 300-page report becomes a twelve-signal briefing. You keep the
              deep reading — aimed only at the pages that repay it.
            </p>
            <a
              href="#start"
              className="mt-8 inline-flex w-full items-center justify-between bg-black px-6 py-5 font-inter text-sm font-semibold tracking-[0.18em] text-white uppercase transition hover:bg-[#E30613]"
            >
              Upload a PDF
              <span>→</span>
            </a>
          </div>
        </div>

        <div className="mt-16 border-t border-black md:mt-24">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {stats.map((s) => (
              <div
                key={s.label}
                className="border-b border-black px-4 py-8 last:border-b-0 md:border-r md:border-b-0 md:last:border-r-0"
              >
                <p className="font-inter text-[clamp(2.5rem,6vw,4.5rem)] leading-none font-black tracking-[-0.04em]">
                  {s.value}
                </p>
                <p className="mt-3 font-inter text-[11px] font-medium tracking-[0.18em] uppercase">
                  {s.label}
                </p>
                <p className="mt-1 font-inter text-[11px] tracking-[0.14em] text-black/40 uppercase">
                  {s.unit}
                </p>
              </div>
            ))}
          </div>
          <Rule />
        </div>
      </section>

      <section id="output" className="mx-auto max-w-[1400px] px-6 py-24 md:px-10 md:py-32">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-3">
            <p className="font-inter text-xs font-medium tracking-[0.28em] uppercase">01 — Output</p>
            <h2 className="mt-5 font-inter text-[clamp(2.2rem,4vw,3.5rem)] leading-[0.95] font-black tracking-[-0.03em]">
              What lands
              <br />
              on the desk.
            </h2>
          </div>
          <div className="lg:col-span-9">
            <div className="border-t border-black">
              {features.map((f, i) => (
                <motion.article
                  key={f.id}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: i * 0.06 }}
                  className="group grid items-start gap-6 border-b border-black py-8 md:grid-cols-[80px_1fr_1.2fr_40px]"
                >
                  <p className="font-inter text-[clamp(2rem,4vw,3rem)] leading-none font-black tracking-[-0.04em] text-black/15 transition-colors group-hover:text-[#E30613]">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <h3 className="font-inter text-2xl font-bold tracking-tight md:text-[28px]">
                    {f.title}
                  </h3>
                  <p className="font-inter text-[15px] leading-[1.6] text-black/65">{f.body}</p>
                  <span
                    className="mt-1 hidden h-3 w-3 justify-self-end opacity-0 transition-opacity group-hover:opacity-100 md:block"
                    style={{ background: RED }}
                  />
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="method" className="border-y border-black bg-black text-white">
        <div className="mx-auto max-w-[1400px] px-6 py-24 md:px-10 md:py-32">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <p className="font-inter text-xs font-medium tracking-[0.28em] uppercase" style={{ color: RED }}>
                02 — Method
              </p>
              <h2 className="mt-5 font-inter text-[clamp(2.4rem,5vw,4rem)] leading-[0.92] font-black tracking-[-0.035em]">
                Three
                <br />
                moves.
              </h2>
            </div>
            <div className="grid gap-px bg-white/15 lg:col-span-8 lg:grid-cols-3">
              {steps.map((s, i) => (
                <div key={s.n} className="bg-black p-7">
                  <p className="font-inter text-5xl font-black tracking-[-0.04em] text-white/15">
                    {s.n}
                  </p>
                  <h3 className="mt-6 font-inter text-xl font-bold tracking-tight">{s.title}</h3>
                  <p className="mt-4 font-inter text-sm leading-[1.65] text-white/60">{s.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="evidence" className="mx-auto max-w-[1400px] px-6 py-24 md:px-10 md:py-32">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-3">
            <p className="font-inter text-xs font-medium tracking-[0.28em] uppercase">03 — Evidence</p>
            <h2 className="mt-5 font-inter text-[clamp(2.2rem,4vw,3.5rem)] leading-[0.95] font-black tracking-[-0.03em]">
              Testimony
              <br />
              from the field.
            </h2>
          </div>
          <div className="grid gap-px bg-black/15 lg:col-span-9 md:grid-cols-3">
            {quotes.map((q) => (
              <figure key={q.name} className="flex flex-col justify-between bg-white p-8">
                <blockquote className="font-inter text-lg leading-[1.5] font-medium tracking-tight">
                  “{q.text}”
                </blockquote>
                <figcaption className="mt-10 border-t border-black pt-4">
                  <p className="font-inter text-sm font-bold tracking-tight">{q.name}</p>
                  <p className="mt-1 font-inter text-[11px] tracking-[0.14em] text-black/45 uppercase">
                    {q.role}
                  </p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section id="start" className="border-t-8 border-black">
        <div className="mx-auto max-w-[1400px] px-6 py-24 md:px-10 md:py-36">
          <div className="grid items-end gap-10 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <p className="font-inter text-xs font-medium tracking-[0.28em] uppercase" style={{ color: RED }}>
                04 — Start
              </p>
              <h2 className="mt-6 font-inter text-[clamp(3rem,10vw,8rem)] leading-[0.85] font-black tracking-[-0.05em]">
                BRING
                <br />
                THE PDF.
              </h2>
            </div>
            <div className="lg:col-span-4">
              <p className="font-inter text-lg leading-[1.5]">
                {product.tagline} First ten documents free. No card. No tour.
              </p>
              <a
                href="#start"
                className="mt-8 inline-flex w-full items-center justify-between px-6 py-5 font-inter text-sm font-semibold tracking-[0.18em] text-white uppercase transition"
                style={{ background: RED }}
              >
                Choose file
                <span>↑</span>
              </a>
              <Link
                to="/"
                className="mt-5 inline-block font-inter text-xs font-medium tracking-[0.18em] text-black/40 uppercase transition hover:text-black"
              >
                ← All five designs
              </Link>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-black">
        <div className="mx-auto flex max-w-[1400px] flex-wrap items-center justify-between gap-4 px-6 py-6 font-inter text-[11px] font-medium tracking-[0.18em] uppercase md:px-10">
          <p>Ratio Reader</p>
          <p className="text-black/40">Design 03 — Form Follows Reading</p>
          <div className="flex items-center gap-3">
            <span className="inline-block h-2 w-2" style={{ background: RED }} />
            <p>© {new Date().getFullYear()}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
