import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { product, features, steps, quotes, stats, faqs } from "../lib/content";

const tints = [
  { bg: "bg-[#EDE4FF]", text: "text-[#5B3FD1]", soft: "bg-[#DDD0FF]" },
  { bg: "bg-[#FFE8D6]", text: "text-[#C46A28]", soft: "bg-[#FFDCC0]" },
  { bg: "bg-[#D6F5E8]", text: "text-[#1F8A5D]", soft: "bg-[#BEEEDB]" },
  { bg: "bg-[#FFE0EC]", text: "text-[#C2457A]", soft: "bg-[#FFC9DD]" },
] as const;

function Blob({ className, color }: { className: string; color: string }) {
  return (
    <div
      aria-hidden
      className={`rr-blob pointer-events-none absolute rounded-full blur-3xl ${className}`}
      style={{ background: color }}
    />
  );
}

function FloatCard({
  children,
  className = "",
  rotate = 0,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  rotate?: number;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28, rotate: 0 }}
      animate={{ opacity: 1, y: [0, -14, 0], rotate }}
      transition={{
        opacity: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] },
        rotate: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] },
        y: { duration: 6, repeat: Infinity, ease: "easeInOut", delay },
      }}
      className={`rounded-[28px] shadow-[0_20px_50px_-20px_rgba(30,27,75,0.18)] ${className}`}
    >
      {children}
    </motion.div>
  );
}

export function Page4() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -40]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 50]);

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#FFFDF8] text-[#1E1B4B] selection:bg-[#7C5CFF] selection:text-white">
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <Blob className="-top-24 -left-24 h-[420px] w-[420px] opacity-70" color="#E8E0FF" />
        <Blob className="top-40 -right-32 h-[520px] w-[520px] opacity-60" color="#FFE8D6" />
        <Blob className="bottom-0 left-1/3 h-[480px] w-[480px] opacity-50" color="#D6F5E8" />
      </div>

      <header className="relative z-10 mx-auto max-w-6xl px-6 pt-8 md:px-10">
        <div className="flex items-center justify-between rounded-full border border-white/60 bg-white/60 px-5 py-3 shadow-[0_8px_30px_-12px_rgba(30,27,75,0.12)] backdrop-blur-xl">
          <div className="flex items-center gap-2.5">
            <span className="flex h-8 w-8 items-center justify-center rounded-2xl bg-gradient-to-br from-[#7C5CFF] to-[#B388FF] font-jakarta text-sm font-extrabold text-white">
              r
            </span>
            <span className="font-jakarta text-base font-bold tracking-tight">Ratio Reader</span>
          </div>
          <nav className="hidden items-center gap-6 font-dm text-sm text-[#1E1B4B]/60 md:flex">
            <a href="#features" className="transition hover:text-[#7C5CFF]">Features</a>
            <a href="#how" className="transition hover:text-[#7C5CFF]">How it works</a>
            <a href="#love" className="transition hover:text-[#7C5CFF]">Love notes</a>
            <a href="#faq" className="transition hover:text-[#7C5CFF]">FAQ</a>
          </nav>
          <a
            href="#cta"
            className="rounded-full bg-[#1E1B4B] px-5 py-2.5 font-dm text-sm font-medium text-white transition hover:bg-[#7C5CFF]"
          >
            Try free
          </a>
        </div>
      </header>

      <section ref={heroRef} className="relative z-10 mx-auto max-w-6xl px-6 pt-16 pb-24 md:px-10 md:pt-24">
        <div className="grid items-center gap-16 lg:grid-cols-[1fr_1fr]">
          <motion.div style={{ y: y1 }}>
            <p className="inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-2 font-dm text-[13px] font-medium text-[#5B3FD1] shadow-sm backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-[#7C5CFF]" />
              PDFs in. Understanding out.
            </p>
            <h1 className="mt-6 font-jakarta text-[clamp(2.8rem,7vw,5rem)] leading-[0.98] font-extrabold tracking-[-0.03em] text-balance">
              Your PDFs,
              <br />
              finally{" "}
              <span className="relative inline-block">
                <span className="relative z-10">readable</span>
                <span className="absolute inset-x-0 bottom-1 z-0 h-3 rounded-full bg-[#FFE0A8]/80" />
              </span>
              .
            </h1>
            <p className="mt-7 max-w-lg font-dm text-lg leading-relaxed text-[#1E1B4B]/65">
              {product.description} Ratio hands you the summary, the hints, the
              quotes worth keeping, and the insights hiding in the middle chapters.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a
                href="#cta"
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#7C5CFF] to-[#A78BFA] px-7 py-4 font-dm text-base font-semibold text-white shadow-[0_12px_30px_-10px_rgba(124,92,255,0.7)] transition hover:shadow-[0_16px_40px_-10px_rgba(124,92,255,0.85)]"
              >
                Upload your first PDF
                <span className="transition-transform group-hover:translate-x-0.5">→</span>
              </a>
              <a href="#how" className="font-dm text-base font-medium text-[#1E1B4B]/55 transition hover:text-[#7C5CFF]">
                See how it works
              </a>
            </div>
            <div className="mt-10 flex items-center gap-4">
              <div className="flex -space-x-2">
                {["#7C5CFF", "#F59E0B", "#10B981", "#EC4899"].map((c) => (
                  <span
                    key={c}
                    className="h-8 w-8 rounded-full border-2 border-[#FFFDF8]"
                    style={{ background: c }}
                  />
                ))}
              </div>
              <p className="font-dm text-sm text-[#1E1B4B]/50">
                Loved by <strong className="font-semibold text-[#1E1B4B]">14,000+</strong> careful readers
              </p>
            </div>
          </motion.div>

          <div className="relative mx-auto h-[480px] w-full max-w-md lg:max-w-none">
            <motion.div style={{ y: y2 }} className="absolute inset-0">
              <FloatCard className="absolute top-6 left-0 w-[240px] bg-white p-6" rotate={-3} delay={0.15}>
                <p className="font-dm text-[11px] font-semibold tracking-[0.18em] text-[#5B3FD1] uppercase">
                  Summary
                </p>
                <p className="mt-3 font-jakarta text-sm leading-relaxed font-medium text-[#1E1B4B]/80">
                  “The paper argues attention is a budget, not a muscle — and proposes a compression method for long documents.”
                </p>
                <div className="mt-4 h-1.5 w-2/3 rounded-full bg-[#EDE4FF]" />
              </FloatCard>

              <FloatCard className="absolute top-32 right-0 w-[230px] bg-[#FFE8D6] p-6" rotate={4} delay={0.35}>
                <p className="font-dm text-[11px] font-semibold tracking-[0.18em] text-[#C46A28] uppercase">
                  Hint
                </p>
                <p className="mt-3 font-jakarta text-sm leading-relaxed font-medium text-[#1E1B4B]/80">
                  Watch the caveat on p. 214 — it quietly limits the main claim.
                </p>
                <div className="mt-4 flex gap-1">
                  <span className="h-1.5 w-10 rounded-full bg-[#C46A28]/40" />
                  <span className="h-1.5 w-16 rounded-full bg-[#C46A28]/25" />
                </div>
              </FloatCard>

              <FloatCard className="absolute bottom-24 left-4 w-[220px] bg-[#D6F5E8] p-6" rotate={-2} delay={0.55}>
                <p className="font-dm text-[11px] font-semibold tracking-[0.18em] text-[#1F8A5D] uppercase">
                  Quote · p. 88
                </p>
                <p className="mt-3 font-jakarta text-sm leading-relaxed font-medium text-[#1E1B4B]/85 italic">
                  “We do not read slowly because the text is hard. We read slowly because nothing told us where to look.”
                </p>
              </FloatCard>

              <FloatCard className="absolute right-2 bottom-0 w-[200px] bg-[#FFE0EC] p-5" rotate={3} delay={0.75}>
                <p className="font-dm text-[11px] font-semibold tracking-[0.18em] text-[#C2457A] uppercase">
                  Insight map
                </p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {["attention", "compression", "pedagogy", "contradiction"].map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-white/70 px-2.5 py-1 font-dm text-[11px] font-medium text-[#1E1B4B]/70"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </FloatCard>
            </motion.div>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-2 gap-4 md:grid-cols-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="rounded-[24px] border border-white/70 bg-white/55 p-6 text-center backdrop-blur-md"
            >
              <p className="font-jakarta text-4xl font-extrabold tracking-tight text-[#1E1B4B]">{s.value}</p>
              <p className="mt-2 font-dm text-sm font-medium text-[#1E1B4B]/55">{s.label}</p>
              <p className="mt-0.5 font-dm text-xs text-[#7C5CFF]">{s.unit}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="features" className="relative z-10 mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-28">
        <div className="text-center">
          <p className="font-dm text-sm font-semibold tracking-[0.22em] text-[#7C5CFF] uppercase">
            Four gentle superpowers
          </p>
          <h2 className="mx-auto mt-4 max-w-2xl font-jakarta text-4xl leading-[1.05] font-extrabold tracking-tight text-balance md:text-5xl">
            Everything you wanted from the reading — without the dread.
          </h2>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => {
            const t = tints[i % tints.length];
            return (
              <motion.article
                key={f.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="group rounded-[28px] bg-white/70 p-7 shadow-[0_16px_40px_-24px_rgba(30,27,75,0.2)] backdrop-blur-md transition hover:-translate-y-1 hover:shadow-[0_24px_50px_-24px_rgba(30,27,75,0.28)]"
              >
                <div className={`flex h-12 w-12 items-center justify-center rounded-2xl ${t.bg}`}>
                  <span className={`font-jakarta text-lg font-extrabold ${t.text}`}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="mt-5 font-jakarta text-xl font-bold tracking-tight">{f.title}</h3>
                <p className="mt-3 font-dm text-[15px] leading-relaxed text-[#1E1B4B]/60">{f.body}</p>
              </motion.article>
            );
          })}
        </div>
      </section>

      <section id="how" className="relative z-10 mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-24">
        <div className="rounded-[36px] border border-white/70 bg-white/50 p-8 backdrop-blur-xl md:p-14">
          <div className="text-center">
            <p className="font-dm text-sm font-semibold tracking-[0.22em] text-[#7C5CFF] uppercase">
              How it works
            </p>
            <h2 className="mx-auto mt-4 max-w-xl font-jakarta text-4xl font-extrabold tracking-tight text-balance md:text-5xl">
              Three soft steps. That's the whole product.
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {steps.map((s, i) => (
              <div key={s.n} className="relative rounded-[28px] bg-[#FFFDF8] p-8 shadow-[0_10px_30px_-18px_rgba(30,27,75,0.25)]">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#7C5CFF] to-[#A78BFA] font-dm text-sm font-bold text-white">
                  {i + 1}
                </span>
                <h3 className="mt-5 font-jakarta text-xl font-bold tracking-tight">{s.title}</h3>
                <p className="mt-3 font-dm text-[15px] leading-relaxed text-[#1E1B4B]/60">{s.body}</p>
                {i < 2 && (
                  <span className="absolute top-1/2 -right-4 hidden font-jakarta text-2xl text-[#7C5CFF]/50 md:block">
                    →
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="love" className="relative z-10 mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-24">
        <div className="text-center">
          <p className="font-dm text-sm font-semibold tracking-[0.22em] text-[#7C5CFF] uppercase">Love notes</p>
          <h2 className="mt-4 font-jakarta text-4xl font-extrabold tracking-tight md:text-5xl">
            From people who read for a living.
          </h2>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {quotes.map((q, i) => (
            <motion.figure
              key={q.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="rounded-[28px] bg-white/70 p-7 shadow-[0_16px_40px_-24px_rgba(30,27,75,0.18)] backdrop-blur-md"
            >
              <div className="mb-4 flex gap-1">
                {Array.from({ length: 5 }).map((_, s) => (
                  <span key={s} className="text-[#F59E0B]">★</span>
                ))}
              </div>
              <blockquote className="font-dm text-[15px] leading-relaxed text-[#1E1B4B]/75">
                “{q.text}”
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <span
                  className={`h-10 w-10 rounded-full ${tints[i % tints.length].soft}`}
                />
                <div>
                  <p className="font-jakarta text-sm font-bold">{q.name}</p>
                  <p className="font-dm text-xs text-[#1E1B4B]/50">{q.role}</p>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </section>

      <section id="faq" className="relative z-10 mx-auto max-w-3xl px-6 py-16 md:px-10 md:py-20">
        <p className="text-center font-dm text-sm font-semibold tracking-[0.22em] text-[#7C5CFF] uppercase">
          Good questions
        </p>
        <h2 className="mt-4 text-center font-jakarta text-3xl font-extrabold tracking-tight md:text-4xl">
          Before you ask.
        </h2>
        <div className="mt-10 space-y-3">
          {faqs.map((f) => (
            <details
              key={f.q}
              className="group rounded-[22px] border border-white/70 bg-white/55 px-6 py-5 backdrop-blur-md open:bg-white/80"
            >
              <summary className="cursor-pointer list-none font-jakarta text-base font-bold tracking-tight marker:hidden">
                <span className="flex items-center justify-between gap-4">
                  {f.q}
                  <span className="font-dm text-[#7C5CFF] transition group-open:rotate-45">＋</span>
                </span>
              </summary>
              <p className="mt-3 font-dm text-[15px] leading-relaxed text-[#1E1B4B]/60">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section id="cta" className="relative z-10 px-6 pb-24 md:px-10">
        <div className="relative mx-auto max-w-5xl overflow-hidden rounded-[40px] bg-gradient-to-br from-[#7C5CFF] via-[#9B7CFF] to-[#FFB38A] p-12 text-center text-white shadow-[0_30px_60px_-25px_rgba(124,92,255,0.6)] md:p-20">
          <div
            aria-hidden
            className="pointer-events-none absolute -top-20 -right-20 h-64 w-64 rounded-full bg-white/20 blur-3xl"
          />
          <h2 className="relative font-jakarta text-[clamp(2.2rem,5vw,3.8rem)] leading-[1.02] font-extrabold tracking-tight text-balance">
            Open the one you keep
            <br />
            meaning to read.
          </h2>
          <p className="relative mx-auto mt-6 max-w-lg font-dm text-lg text-white/85">
            {product.tagline} Ten documents free. No card, no dashboard tour, no empty states.
          </p>
          <div className="relative mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#cta"
              className="rounded-full bg-white px-8 py-4 font-dm text-base font-semibold text-[#5B3FD1] shadow-lg transition hover:scale-[1.03]"
            >
              Choose a PDF — free
            </a>
            <Link to="/" className="font-dm text-sm font-medium text-white/70 transition hover:text-white">
              ← All five designs
            </Link>
          </div>
        </div>
      </section>

      <footer className="relative z-10 mx-auto flex max-w-6xl flex-col items-center gap-2 px-6 pb-10 font-dm text-sm text-[#1E1B4B]/45 md:px-10">
        <p className="font-jakarta text-base font-bold text-[#1E1B4B]">Ratio Reader</p>
        <p>Design 04 — Soft Focus · © {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
}
