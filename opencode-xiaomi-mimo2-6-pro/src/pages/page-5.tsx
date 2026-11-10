import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { product, features, steps, quotes, stats } from "../lib/content";

function Rule({ weight = 1, className = "" }: { weight?: number; className?: string }) {
  return <div className={`w-full bg-[#111] ${className}`} style={{ height: weight }} />;
}

function Column({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`font-oldstd text-[15px] leading-[1.7] text-[#111]/85 ${className}`}>{children}</div>;
}

export function Page5() {
  return (
    <div className="rr-grain relative min-h-screen bg-[#F0EDE4] text-[#111] selection:bg-[#C41E3A] selection:text-[#F0EDE4]">
      <div className="relative mx-auto max-w-[1100px] px-4 pt-6 pb-0 md:px-8">
        <div className="flex flex-wrap items-center justify-between gap-2 font-franklin text-[10px] tracking-[0.18em] uppercase">
          <p>Vol. XII · No. 05</p>
          <p>Monday, September 22, 2026</p>
          <p>Price: One PDF</p>
        </div>

        <Rule weight={3} className="mt-3" />
        <Rule className="mt-1" />

        <header className="py-8 text-center md:py-12">
          <p className="font-franklin text-[11px] tracking-[0.42em] text-[#C41E3A] uppercase">
            Special edition
          </p>
          <h1 className="mt-4 font-playfair text-[clamp(2.8rem,9vw,7.5rem)] leading-[0.85] font-black tracking-[-0.02em]">
            THE RATIO READER
          </h1>
          <p className="mt-4 font-oldstd text-lg italic text-[#111]/60">
            All the News That&rsquo;s Fit to Distill
          </p>
          <div className="mt-5 flex items-center justify-center gap-3 font-franklin text-[10px] tracking-[0.22em] uppercase">
            <span className="h-px w-10 bg-[#111]/40" />
            <span>Summary · Hints · Quotes · Insights</span>
            <span className="h-px w-10 bg-[#111]/40" />
          </div>
        </header>

        <Rule weight={2} />

        <nav className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 py-3 font-franklin text-[11px] font-semibold tracking-[0.16em] uppercase">
          {[
            ["Lead Story", "#lead"],
            ["The Four Reports", "#reports"],
            ["The Practice", "#practice"],
            ["Testimony", "#testimony"],
            ["Classifieds", "#cta"],
          ].map(([l, h]) => (
            <a key={h} href={h} className="border-b border-transparent pb-0.5 transition hover:border-[#C41E3A] hover:text-[#C41E3A]">
              {l}
            </a>
          ))}
        </nav>

        <Rule />
      </div>

      <section id="lead" className="relative mx-auto max-w-[1100px] px-4 py-10 md:px-8 md:py-14">
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <p className="font-franklin text-[11px] font-bold tracking-[0.28em] text-[#C41E3A] uppercase">
              Breaking · Reading Desk
            </p>
            <h2 className="mt-3 font-playfair text-[clamp(2.2rem,5.5vw,4.2rem)] leading-[0.98] font-black tracking-[-0.02em] text-balance">
              300-Page Report Finally Understood in Twelve Minutes, Witnesses Report
            </h2>
            <p className="mt-4 max-w-2xl font-oldstd text-xl leading-snug text-[#111]/70 italic">
              {product.tagline} New tool promises the argument before the slog — and the quotes without the hunt.
            </p>

            <div className="mt-8 gap-8 md:columns-2">
              <Column className="mb-5">
                <span className="float-left mt-2 mr-2 font-playfair text-[56px] leading-[0.75] font-black text-[#C41E3A]">
                  B
                </span>
                y Tuesday morning, Dr. A. Rahman&rsquo;s seminar had done something previously thought impossible:
                every student arrived with an opinion. Not a summary of the abstract. An opinion —
                with page numbers.
              </Column>
              <Column className="mb-5">
                The cause, according to the room, was not a sudden flowering of discipline. It was
                <em> Ratio Reader</em>, a tool that takes a PDF and returns four things: the argument,
                the places the author is slippery, the lines worth keeping, and the themes that only
                appear when the last page has been read.
              </Column>
              <Column className="mb-5">
                {product.description} What remains is the part of reading that still pays:
                the slow pass over the pages that repay it.
              </Column>
              <Column>
                <span className="border-y border-[#111]/25 py-1 font-franklin text-[11px] tracking-[0.18em] uppercase">
                  Continued in the reports below ↓
                </span>
              </Column>
            </div>
          </div>

          <aside className="lg:col-span-4">
            <div className="border-2 border-[#111] bg-[#E7E2D4] p-1">
              <div className="rr-halftone h-48 w-full bg-[#E7E2D4] opacity-70" />
              <div className="bg-[#F0EDE4] px-3 py-2">
                <p className="font-franklin text-[10px] leading-snug tracking-[0.12em] text-[#111]/60 uppercase">
                  Fig. 1 — A reader and her margins, before and after. (Illustration)
                </p>
              </div>
            </div>

            <div className="mt-6 border-2 border-[#111] bg-[#111] p-5 text-[#F0EDE4]">
              <p className="font-franklin text-[10px] tracking-[0.28em] text-[#F0EDE4]/60 uppercase">
                By the numbers
              </p>
              <dl className="mt-4 space-y-3">
                {stats.map((s) => (
                  <div key={s.label} className="flex items-baseline justify-between gap-3 border-b border-[#F0EDE4]/15 pb-2">
                    <dt className="font-oldstd text-sm text-[#F0EDE4]/70">{s.label}</dt>
                    <dd className="font-playfair text-3xl font-black">{s.value}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mt-6 border-y-2 border-[#C41E3A] py-5"
            >
              <p className="font-playfair text-2xl leading-tight font-bold italic">
                “A better reader is not the one who finishes. A better reader knows where to look.”
              </p>
              <p className="mt-3 font-franklin text-[10px] tracking-[0.2em] text-[#111]/50 uppercase">
                — The Ratio Editor&rsquo;s Note
              </p>
            </motion.div>
          </aside>
        </div>
      </section>

      <section className="relative mx-auto max-w-[1100px] px-4 md:px-8">
        <Rule weight={3} />
        <div className="grid grid-cols-3 divide-x divide-[#111]/25 border-b-2 border-[#111] py-3 text-center font-franklin text-[10px] font-semibold tracking-[0.2em] uppercase">
          <p className="px-2">In this issue</p>
          <p className="px-2">The four reports</p>
          <p className="px-2">Page 2 · The practice</p>
        </div>
        <Rule />
      </section>

      <section id="reports" className="relative mx-auto max-w-[1100px] px-4 py-12 md:px-8 md:py-16">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <h2 className="font-playfair text-[clamp(2rem,4vw,3.2rem)] leading-none font-black tracking-tight">
            The Four Reports
          </h2>
          <p className="font-oldstd text-base italic text-[#111]/55">
            What Ratio puts on your desk, filed from the front.
          </p>
        </div>

        <div className="grid gap-x-8 gap-y-10 md:grid-cols-2">
          {features.map((f, i) => (
            <motion.article
              key={f.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="border-t-2 border-[#111] pt-5"
            >
              <div className="flex items-baseline gap-3">
                <span className="font-playfair text-lg font-black text-[#C41E3A]">
                  R-{String(i + 1).padStart(2, "0")}
                </span>
                <p className="font-franklin text-[10px] tracking-[0.22em] text-[#111]/45 uppercase">
                  {f.short}
                </p>
              </div>
              <h3 className="mt-3 font-playfair text-3xl leading-[1.05] font-bold tracking-tight">
                {f.title}
              </h3>
              <Column className="mt-4">{f.body}</Column>
            </motion.article>
          ))}
        </div>
      </section>

      <section id="practice" className="relative border-y-2 border-[#111] bg-[#E7E2D4]/70">
        <div className="mx-auto max-w-[1100px] px-4 py-14 md:px-8">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <p className="font-franklin text-[11px] font-bold tracking-[0.28em] text-[#C41E3A] uppercase">
                The Practice
              </p>
              <h2 className="mt-3 font-playfair text-[clamp(2rem,4vw,3.4rem)] leading-[0.98] font-black tracking-tight">
                Three Movements, then the Room is Yours
              </h2>
            </div>
            <div className="grid gap-8 lg:col-span-8 md:grid-cols-3">
              {steps.map((s) => (
                <div key={s.n} className="border-t border-[#111]/30 pt-4">
                  <p className="font-playfair text-5xl leading-none font-black text-[#C41E3A]">{s.n}</p>
                  <h3 className="mt-3 font-playfair text-xl font-bold">{s.title}</h3>
                  <Column className="mt-2 text-[14px]">{s.body}</Column>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="testimony" className="relative mx-auto max-w-[1100px] px-4 py-14 md:px-8">
        <h2 className="border-b-2 border-[#111] pb-3 font-playfair text-[clamp(2rem,4vw,3.2rem)] leading-none font-black tracking-tight">
          Testimony from the Field
        </h2>
        <div className="mt-8 gap-8 md:columns-3">
          {quotes.map((q) => (
            <figure key={q.name} className="mb-8 break-inside-avoid border-t border-[#111]/30 pt-4">
              <blockquote className="font-oldstd text-[16px] leading-[1.65] text-[#111]/85 italic">
                “{q.text}”
              </blockquote>
              <figcaption className="mt-3 font-franklin text-[10px] tracking-[0.16em] uppercase">
                <span className="font-semibold">{q.name}</span>
                <span className="text-[#111]/50"> · {q.role}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="relative mx-auto max-w-[1100px] px-4 md:px-8">
        <Rule weight={3} />
        <div className="flex items-center justify-between py-3 font-franklin text-[10px] font-bold tracking-[0.28em] uppercase">
          <p>Classifieds</p>
          <p className="text-[#C41E3A]">All offers must include a PDF</p>
          <p>Deadline: Ongoing</p>
        </div>
        <Rule />
      </section>

      <section id="cta" className="relative mx-auto max-w-[1100px] px-4 py-14 md:px-8 md:py-20">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="font-franklin text-[11px] font-bold tracking-[0.28em] text-[#C41E3A] uppercase">
              Notice to readers
            </p>
            <h2 className="mt-4 font-playfair text-[clamp(2.4rem,6vw,5rem)] leading-[0.92] font-black tracking-[-0.02em] text-balance">
              Wanted: The File
              <br />
              You Keep Postponing.
            </h2>
            <div className="mt-6 gap-8 md:columns-2">
              <Column className="mb-4">
                {product.description} Ten documents free of charge to new subscribers.
                No card. No tour of the empty dashboard.
              </Column>
              <Column>
                Files are processed in isolation and destroyed in 24 hours unless
                the reader places them in a permanent library. Nothing is sold.
                Nothing is used to train models.
              </Column>
            </div>
          </div>

          <div className="border-2 border-[#111] bg-[#111] p-6 text-[#F0EDE4] lg:col-span-5">
            <p className="font-franklin text-[10px] tracking-[0.28em] text-[#F0EDE4]/55 uppercase">
              Place your order
            </p>
            <h3 className="mt-4 font-playfair text-3xl leading-tight font-black">
              Upload a PDF.
              <br />
              Leave with the argument.
            </h3>
            <p className="mt-4 font-oldstd text-[15px] leading-relaxed text-[#F0EDE4]/70">
              {product.tagline} The first ten documents are on the house.
            </p>
            <a
              href="#cta"
              className="mt-8 block w-full border-2 border-[#F0EDE4] bg-[#C41E3A] px-6 py-4 text-center font-franklin text-xs font-bold tracking-[0.24em] uppercase transition hover:bg-[#F0EDE4] hover:text-[#111]"
            >
              Choose a PDF →
            </a>
            <p className="mt-4 text-center font-franklin text-[10px] tracking-[0.16em] text-[#F0EDE4]/45 uppercase">
              Or speak to a reading clerk at ratio@example
            </p>
            <div className="mt-6 border-t border-[#F0EDE4]/20 pt-4 text-center">
              <Link
                to="/"
                className="font-franklin text-[10px] tracking-[0.2em] text-[#F0EDE4]/55 uppercase transition hover:text-[#F0EDE4]"
              >
                ← All five designs
              </Link>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t-2 border-[#111]">
        <div className="mx-auto flex max-w-[1100px] flex-wrap items-center justify-between gap-3 px-4 py-6 font-franklin text-[10px] tracking-[0.18em] uppercase md:px-8">
          <p className="font-playfair text-sm font-black tracking-normal">THE RATIO READER</p>
          <p className="text-[#111]/50">Design 05 — The Broadsheet</p>
          <p className="text-[#111]/50">© {new Date().getFullYear()} · Printed on recycled electrons</p>
        </div>
        <div className="mx-auto max-w-[1100px] px-4 pb-8 md:px-8">
          <div className="rr-halftone h-6 w-full opacity-15" />
        </div>
      </footer>
    </div>
  );
}
