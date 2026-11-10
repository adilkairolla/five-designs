import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { product, features, steps, quotes, stats } from "../lib/content";

function Label({ children, tone = "cyan" }: { children: React.ReactNode; tone?: "cyan" | "muted" | "violet" }) {
  const color = tone === "cyan" ? "text-[#00E5FF]" : tone === "violet" ? "text-[#A78BFA]" : "text-white/35";
  return (
    <p className={`font-mono text-[10px] tracking-[0.28em] uppercase ${color}`}>{children}</p>
  );
}

function CompressionViz() {
  const pages = Array.from({ length: 24 }, (_, i) => i);
  const signals = ["THESIS", "CLAIM 02", "CAVEAT", "EVIDENCE", "PAGE 214", "QUOTE", "TENSION", "METRIC", "REBUTTAL", "SOURCE", "GAP", "CLOSE"];

  return (
    <div className="relative overflow-hidden border border-white/10 bg-[#0A0A12]/90 p-5 shadow-[0_0_80px_-20px_rgba(0,229,255,0.25)] backdrop-blur">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,transparent_0%,rgba(0,229,255,0.06)_50%,transparent_100%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-16 rr-scan bg-gradient-to-b from-transparent via-[#00E5FF]/25 to-transparent" />

      <div className="mb-4 flex items-center justify-between">
        <Label>ingest · doc_312p.pdf</Label>
        <span className="flex items-center gap-2 font-mono text-[10px] tracking-[0.2em] text-[#00E5FF] uppercase">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#00E5FF]" />
          decoding
        </span>
      </div>

      <div className="grid grid-cols-[auto_1fr] gap-4">
        <div className="grid grid-cols-3 gap-1">
          {pages.map((i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0.85, scaleY: 1 }}
              animate={{ opacity: [0.85, 0.35, 0.85], scaleY: [1, 0.55, 1] }}
              transition={{ duration: 2.4, delay: i * 0.05, repeat: Infinity, repeatType: "mirror" }}
              className="h-2 w-3 origin-center bg-white/25"
              style={{ boxShadow: "0 0 8px rgba(0,229,255,0.15)" }}
            />
          ))}
          <p className="col-span-3 mt-2 font-mono text-[9px] tracking-[0.18em] text-white/30 uppercase">
            312 pages
          </p>
        </div>

        <div className="flex flex-col justify-center gap-2">
          <div className="flex items-center gap-2">
            <div className="h-px flex-1 bg-gradient-to-r from-white/40 via-[#00E5FF]/50 to-[#8B5CF6]/50" />
            <span className="font-mono text-[10px] tracking-[0.22em] text-white/45">→</span>
            <div className="h-px flex-1 bg-gradient-to-r from-[#8B5CF6]/50 to-white/20" />
          </div>
          <div className="flex flex-wrap gap-1.5 pt-1">
            {signals.map((s, i) => (
              <motion.span
                key={s}
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 + i * 0.12, duration: 0.4 }}
                className="border border-[#00E5FF]/35 bg-[#00E5FF]/8 px-2 py-1 font-mono text-[9px] tracking-[0.16em] text-[#00E5FF] uppercase"
              >
                {s}
              </motion.span>
            ))}
          </div>
          <p className="mt-1 font-mono text-[9px] tracking-[0.18em] text-white/30 uppercase">12 signals</p>
        </div>
      </div>

      <div className="mt-5 grid grid-cols-3 gap-px border-t border-white/8 bg-white/5 pt-px">
        {[
          ["compression", "26×"],
          ["recall", "94%"],
          ["elapsed", "00:47"],
        ].map(([k, v]) => (
          <div key={k} className="bg-[#0A0A12] px-3 py-3">
            <p className="font-mono text-[9px] tracking-[0.2em] text-white/30 uppercase">{k}</p>
            <p className="mt-1 font-space text-xl text-white">{v}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function TerminalCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="group relative border border-white/10 bg-[#0A0A12]/80 transition-colors hover:border-[#00E5FF]/40">
      <div className="flex items-center gap-2 border-b border-white/8 px-4 py-2.5">
        <span className="h-2 w-2 rounded-full bg-[#FF5F57]" />
        <span className="h-2 w-2 rounded-full bg-[#FEBC2E]" />
        <span className="h-2 w-2 rounded-full bg-[#28C840]" />
        <p className="ml-2 font-mono text-[10px] tracking-[0.18em] text-white/35 uppercase">{title}</p>
      </div>
      <div className="p-5">{children}</div>
    </div>
  );
}

export function Page2() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 60]);

  return (
    <div className="rr-grid-lines relative min-h-screen bg-[#06060B] text-[#E8E8F0] selection:bg-[#00E5FF] selection:text-black">
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 opacity-[0.35]"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 70% 0%, rgba(0,229,255,0.14), transparent 60%), radial-gradient(ellipse 40% 30% at 10% 20%, rgba(139,92,246,0.12), transparent 55%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.5) 2px, rgba(255,255,255,0.5) 3px)",
        }}
      />

      <header className="relative z-10 mx-auto flex max-w-6xl items-center justify-between px-6 py-6 md:px-10">
        <div className="flex items-baseline gap-3">
          <span className="font-space text-lg font-medium tracking-tight">ratio</span>
          <span className="font-mono text-[10px] tracking-[0.24em] text-[#00E5FF] uppercase">reader</span>
        </div>
        <nav className="hidden items-center gap-7 font-mono text-[11px] tracking-[0.18em] text-white/45 uppercase md:flex">
          <a href="#pipeline" className="transition hover:text-[#00E5FF]">pipeline</a>
          <a href="#modules" className="transition hover:text-[#00E5FF]">modules</a>
          <a href="#feed" className="transition hover:text-[#00E5FF]">feed</a>
          <a
            href="#deploy"
            className="border border-[#00E5FF]/50 bg-[#00E5FF]/10 px-3 py-1.5 text-[#00E5FF] transition hover:bg-[#00E5FF] hover:text-black"
          >
            upload
          </a>
        </nav>
      </header>

      <section ref={heroRef} className="relative z-10 mx-auto max-w-6xl px-6 pt-16 pb-24 md:px-10 md:pt-24">
        <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div style={{ y }}>
            <div className="mb-6 flex items-center gap-3">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#00E5FF]" />
              <Label>system online · v2.4.1 · latency 47s</Label>
            </div>
            <h1 className="font-space text-[clamp(2.8rem,7.5vw,5.8rem)] leading-[0.92] font-medium tracking-[-0.035em] text-balance">
              Compress the page.
              <br />
              <span className="text-[#00E5FF]">Keep the signal.</span>
            </h1>
            <p className="mt-8 max-w-xl font-space text-lg leading-relaxed text-white/55">
              {product.description} Ratio reads every page of your PDF and returns
              the twelve things you needed to know before you opened it.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#deploy"
                className="group relative inline-flex items-center gap-3 border border-[#00E5FF] bg-[#00E5FF] px-7 py-4 font-mono text-[12px] tracking-[0.22em] text-black uppercase transition hover:shadow-[0_0_32px_rgba(0,229,255,0.55)]"
              >
                <span className="rr-blink">▮</span> drop_pdf.exe
              </a>
              <a href="#pipeline" className="font-mono text-[11px] tracking-[0.2em] text-white/40 uppercase transition hover:text-white">
                view pipeline →
              </a>
            </div>

            <div className="mt-12 grid max-w-md grid-cols-4 gap-px border border-white/8 bg-white/8">
              {stats.map((s) => (
                <div key={s.label} className="bg-[#06060B] px-3 py-4">
                  <p className="font-space text-2xl text-[#00E5FF]">{s.value}</p>
                  <p className="mt-1 font-mono text-[9px] leading-tight tracking-[0.14em] text-white/35 uppercase">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <CompressionViz />
          </motion.div>
        </div>
      </section>

      <section id="pipeline" className="relative z-10 border-y border-white/8 bg-[#0A0A12]/60">
        <div className="mx-auto max-w-6xl px-6 py-24 md:px-10">
          <Label tone="violet">02 · pipeline</Label>
          <h2 className="mt-4 max-w-3xl font-space text-4xl leading-[1.05] font-medium tracking-tight text-balance md:text-5xl">
            Ingest. Decode. Brief.
          </h2>
          <p className="mt-5 max-w-xl font-mono text-[12px] leading-relaxed tracking-[0.04em] text-white/45">
            Three stages. No wizard. No twelve-step onboarding. Your PDF leaves as a briefing.
          </p>

          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {steps.map((s, i) => (
              <motion.div
                key={s.n}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="relative border border-white/10 bg-[#06060B] p-7"
              >
                <div className="mb-6 flex items-center justify-between">
                  <span className="font-space text-5xl font-medium text-white/10">0{i + 1}</span>
                  <span className="h-2 w-2 rounded-full bg-[#8B5CF6]" />
                </div>
                <h3 className="font-space text-xl font-medium tracking-tight">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/50">{s.body}</p>
                {i < 2 && (
                  <span className="absolute top-1/2 -right-3 hidden font-mono text-[#00E5FF] md:block">▸</span>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="modules" className="relative z-10 mx-auto max-w-6xl px-6 py-28 md:px-10">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <Label>03 · modules</Label>
            <h2 className="mt-4 font-space text-4xl font-medium tracking-tight md:text-5xl">
              Four outputs. Zero noise.
            </h2>
          </div>
          <p className="font-mono text-[11px] tracking-[0.18em] text-white/35 uppercase">
            stdout · ratio.reader
          </p>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {features.map((f, i) => (
            <motion.div
              key={f.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
            >
              <TerminalCard title={`${f.short.toLowerCase()}.module`}>
                <div className="mb-4 flex items-baseline justify-between">
                  <h3 className="font-space text-xl font-medium tracking-tight">{f.title}</h3>
                  <span className="font-mono text-[10px] text-[#00E5FF]">[{String(i + 1).padStart(2, "0")}]</span>
                </div>
                <p className="text-sm leading-relaxed text-white/55">{f.body}</p>
                <div className="mt-5 flex gap-1">
                  {Array.from({ length: 8 }).map((_, b) => (
                    <span
                      key={b}
                      className="h-1 flex-1 bg-[#00E5FF]"
                      style={{ opacity: 0.2 + b * 0.1 }}
                    />
                  ))}
                </div>
              </TerminalCard>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="feed" className="relative z-10 border-y border-white/8 bg-[#0A0A12]/60">
        <div className="mx-auto max-w-6xl px-6 py-24 md:px-10">
          <Label tone="violet">04 · field reports</Label>
          <h2 className="mt-4 font-space text-4xl font-medium tracking-tight md:text-5xl">
            Operators talking.
          </h2>
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {quotes.map((q, i) => (
              <blockquote key={q.name} className="border border-white/10 bg-[#06060B] p-7">
                <p className="font-mono text-[10px] tracking-[0.22em] text-[#8B5CF6] uppercase">
                  report_{String(i + 1).padStart(2, "0")}
                </p>
                <p className="mt-5 text-[15px] leading-relaxed text-white/75">“{q.text}”</p>
                <footer className="mt-6 border-t border-white/8 pt-4">
                  <p className="font-space text-sm text-white">{q.name}</p>
                  <p className="mt-0.5 font-mono text-[10px] tracking-[0.14em] text-white/35 uppercase">
                    {q.role}
                  </p>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section id="deploy" className="relative z-10 mx-auto max-w-6xl px-6 py-32 md:px-10">
        <div className="relative overflow-hidden border border-[#00E5FF]/30 bg-gradient-to-br from-[#0A0A12] to-[#0D0A1A] p-10 md:p-16">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-40"
            style={{
              background: "radial-gradient(circle at 80% 20%, rgba(0,229,255,0.18), transparent 45%)",
            }}
          />
          <div className="relative max-w-3xl">
            <Label>05 · deploy</Label>
            <h2 className="mt-5 font-space text-[clamp(2.4rem,6vw,4.5rem)] leading-[0.95] font-medium tracking-[-0.03em] text-balance">
              Point Ratio at the file
              <br />
              you keep postponing.
            </h2>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-white/55">
              {product.tagline} First ten documents free. No card. Files purged in 24h
              unless you pin them to a library.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-5">
              <a
                href="#deploy"
                className="group inline-flex items-center gap-3 bg-[#00E5FF] px-8 py-5 font-mono text-[12px] tracking-[0.22em] text-black uppercase transition hover:shadow-[0_0_40px_rgba(0,229,255,0.5)]"
              >
                initialize_ upload
              </a>
              <Link to="/" className="font-mono text-[11px] tracking-[0.2em] text-white/35 uppercase transition hover:text-white">
                ← hub
              </Link>
            </div>
          </div>
        </div>
      </section>

      <footer className="relative z-10 border-t border-white/8">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-8 font-mono text-[10px] tracking-[0.18em] text-white/30 uppercase md:flex-row md:items-center md:justify-between md:px-10">
          <p>ratio reader · design 02 · signal / compression</p>
          <p className="text-[#00E5FF]">read less. understand more.</p>
          <p>© {new Date().getFullYear()}</p>
        </div>
      </footer>

      <div className="overflow-hidden border-t border-white/8 py-3">
        <div className="rr-marquee flex w-max gap-8 font-mono text-[10px] tracking-[0.3em] whitespace-nowrap text-white/20 uppercase">
          {Array.from({ length: 2 }).map((_, r) => (
            <span key={r} className="flex gap-8">
              {Array.from({ length: 6 }).map((_, i) => (
                <span key={i}>
                  312 pages · 12 signals · 94% recall · 40 min saved · distill / hint / quote / map ·{" "}
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
