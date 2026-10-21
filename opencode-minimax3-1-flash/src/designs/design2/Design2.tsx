import { useEffect, useState } from "react";
import { ChevronRight, Copy, CornerDownLeft, Cpu, FileText, ShieldCheck, Terminal } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { DesignSwitcher } from "@/components/DesignSwitcher";
import { faqs, features, plans, product, stats, steps } from "@/content";
import { cn } from "@/lib/utils";

type Tab = "summary" | "hints" | "quotes" | "insights";

const TABS: { id: Tab; label: string; cmd: string }[] = [
  { id: "summary", label: "summary", cmd: "ratio summary --depth 3" },
  { id: "hints", label: "hints", cmd: "ratio hints --inline" },
  { id: "quotes", label: "quotes", cmd: "ratio quotes --ranked" },
  { id: "insights", label: "insights", cmd: "ratio insights --cross-ref" },
];

const OUTPUT: Record<Tab, { line: string; body: string[]; meta: string }> = {
  summary: {
    line: "summary · 214 pages · 11s",
    body: [
      "The paper argues that reading failures are a distribution problem, not an",
      "attention problem: documents are engineered for storage and archiving, then",
      "handed to readers as if they were designed for comprehension.",
      "",
      "Three-part argument:",
      "  01  comprehension degrades with document length, not difficulty",
      "  02  navigation, not attention, is the bottleneck (p. 41–58)",
      "  03  the fix is editorial structure, not reader discipline (p. 118–140)",
    ],
    meta: "confidence 0.94 · 3 claims · 2 sections linked",
  },
  hints: {
    line: "hints · 23 contextual notes",
    body: [
      "[p.12] 'salience' — used here to mean the perceptual weight a fragment carries,",
      "        not statistical significance. Distinguish from p. 90 usage.",
      "",
      "[p.14] 'Hirsch, 1974' — first full citation on p. 214, appendix C.",
      "",
      "[p.77] 'reading fluency' — introduced without definition; Rowe borrows it",
      "        from Nation (2006). The text never says so.",
    ],
    meta: "23 notes · 6 jargon · 9 citations · 8 undefined terms",
  },
  quotes: {
    line: "quotes · ranked by impact",
    body: [
      "1.  \"We optimised the container and abandoned the reader.\"   p. 88",
      "2.  \"Length is not difficulty, but it is friction, and friction is a tax\"\n      on attention that the reader pays without consent.\"             p. 133",
      "3.  \"The document was not written for you. It was written for the\n      archive that would hold it.\"                                p. 19",
    ],
    meta: "3 quotes · all page-cited · exportable",
  },
  insights: {
    line: "insights · cross-reference pass",
    body: [
      "→ Tension: claims shorter docs are easier (p.41) but concedes layout causes\n  31% of measured slowdown (p.96). Unresolved in the paper.",
      "",
      "→ Contradiction with 2019 baseline (Muthukumar et al.): Rowe's 'attention is\n  not the bottleneck' directly opposes their 3x retention finding.",
      "",
      "→ Gap: no dataset from mobile reading, despite the introduction citing it.",
    ],
    meta: "3 insights · 2 tensions · 1 gap · 1 external ref",
  },
};

function Prompt({ children }: { children: React.ReactNode }) {
  return (
    <span className="font-mono text-[13px]">
      <span className="text-[#5AF2A1]">~/ratio</span>
      <span className="text-[#4A5561]">&nbsp;$ </span>
      {children}
    </span>
  );
}

export default function Design2() {
  const [tab, setTab] = useState<Tab>("summary");
  const [copied, setCopied] = useState(false);
  const [typed, setTyped] = useState("");

  useEffect(() => {
    const full = "npx ratio-reader ./your-paper.pdf";
    let i = 0;
    const id = window.setInterval(() => {
      i += 1;
      setTyped(full.slice(0, i));
      if (i >= full.length) window.clearInterval(id);
    }, 42);
    return () => window.clearInterval(id);
  }, []);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText("npx ratio-reader ./your-paper.pdf");
    } catch {
      /* clipboard unavailable */
    }
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  };

  return (
    <div
      className="relative min-h-screen overflow-x-hidden bg-[#05070A] text-[#C9D4DE] antialiased"
      style={{ fontFamily: "'JetBrains Mono', monospace" }}
    >
      <div className="pointer-events-none fixed inset-0 rr-checker opacity-40" />
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(ellipse_at_50%_-10%,rgba(90,242,161,0.14),transparent_55%)]" />
      <div className="pointer-events-none fixed inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(90,242,161,0.6),transparent)]" />

      {/* ---------------- nav ---------------- */}
      <header className="sticky top-0 z-50 border-b border-[#151B23] bg-[#05070A]/85 backdrop-blur-md">
        <div className="mx-auto flex max-w-[1360px] items-center justify-between gap-6 px-4 py-3 sm:px-7">
          <div className="flex items-center gap-3">
            <Terminal className="h-4 w-4 text-[#5AF2A1]" strokeWidth={1.8} />
            <span className="font-mono text-[13px] tracking-tight text-[#E6EDF3]">
              ratio<span className="text-[#5AF2A1]">-</span>reader
            </span>
            <span className="hidden border border-[#1E2833] px-2 py-0.5 text-[9px] uppercase tracking-[0.2em] text-[#4A5561] sm:inline">
              v2.4 · stable
            </span>
          </div>
          <nav className="hidden items-center gap-5 text-[12px] text-[#7A8896] md:flex">
            {["/summary", "/hints", "/quotes", "/insights", "/pricing"].map((item) => (
              <a key={item} href="#commands" className="transition-colors hover:text-[#5AF2A1]">
                {item}
              </a>
            ))}
          </nav>
          <a
            href="#install"
            className="group inline-flex items-center gap-2 border border-[#5AF2A1] bg-[#5AF2A1]/10 px-4 py-1.5 text-[12px] text-[#5AF2A1] transition-colors hover:bg-[#5AF2A1] hover:text-[#05070A]"
          >
            <CornerDownLeft className="h-3 w-3" />
            install
          </a>
        </div>
      </header>

      {/* ---------------- hero ---------------- */}
      <section className="relative mx-auto max-w-[1360px] px-4 pb-12 pt-12 sm:px-7 sm:pt-16">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Reveal>
              <div className="flex items-center gap-2 text-[11px] text-[#4A5561]">
                <span className="h-2 w-2 animate-pulse rounded-full bg-[#5AF2A1]" />
                <span>PDF INGESTION PIPELINE — ONLINE</span>
              </div>
            </Reveal>

            <Reveal delay={0.05}>
              <h1
                className="mt-6 font-grotesk text-[clamp(2.4rem,5.6vw,4.3rem)] font-medium leading-[0.98] tracking-[-0.03em] text-[#E6EDF3]"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                stop reading
                <br />
                <span className="text-[#5AF2A1]">start</span> understanding
              </h1>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mt-6 max-w-[46ch] text-[13.5px] leading-[1.8] text-[#8C9AA8]">
                Ratio Reader ingests a PDF and emits four structured streams — summary,
                hints, quotes, insights — each one grounded in the page it came from.
                Read the argument, not the appendix.
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href="#install"
                  className="group inline-flex items-center gap-2 bg-[#5AF2A1] px-5 py-2.5 text-[12.5px] font-medium text-[#05070A] transition-transform hover:-translate-y-0.5"
                >
                  start_reading
                  <ChevronRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                </a>
                <a
                  href="#commands"
                  className="inline-flex items-center gap-2 border border-[#1E2833] px-5 py-2.5 text-[12.5px] text-[#8C9AA8] transition-colors hover:border-[#6BE9FF] hover:text-[#6BE9FF]"
                >
                  view_commands
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="mt-10 grid grid-cols-2 gap-px border border-[#151B23] bg-[#151B23] sm:grid-cols-4">
                {stats.map((s) => (
                  <div key={s.label} className="bg-[#05070A] px-4 py-4">
                    <p className="font-grotesk text-[20px] font-medium text-[#E6EDF3]">
                      {s.value}
                    </p>
                    <p className="mt-1 text-[9.5px] uppercase tracking-[0.14em] text-[#4A5561]">
                      {s.label}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          {/* terminal */}
          <Reveal delay={0.1} className="lg:col-span-7">
            <div className="border border-[#1E2833] bg-[#080B10] shadow-[0_0_60px_-20px_rgba(90,242,161,0.35)]">
              <div className="flex items-center gap-2 border-b border-[#1E2833] bg-[#0B0F15] px-4 py-2.5">
                <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F56]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#FFBD2E]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#27C93F]" />
                <span className="ml-2 text-[11px] text-[#4A5561]">zsh — ratio reader</span>
                <span className="ml-auto text-[10px] text-[#37424E]">utf-8 · 80×24</span>
              </div>

              <div className="flex flex-wrap gap-px border-b border-[#1E2833] bg-[#1E2833]">
                {TABS.map((t) => (
                  <button
                    key={t.id}
                    onClick={() => setTab(t.id)}
                    className={cn(
                      "flex-1 px-4 py-2.5 text-[11.5px] transition-colors",
                      tab === t.id
                        ? "bg-[#080B10] text-[#5AF2A1]"
                        : "bg-[#0B0F15] text-[#5C6976] hover:text-[#8C9AA8]",
                    )}
                  >
                    {t.label}
                  </button>
                ))}
              </div>

              <div className="min-h-[320px] p-4 sm:p-5">
                <p className="text-[12.5px]">
                  <Prompt>{TABS.find((t) => t.id === tab)?.cmd}</Prompt>
                </p>
                <p className="mt-1 text-[12px] text-[#37424E]">{OUTPUT[tab].line}</p>
                <div className="mt-3 whitespace-pre-wrap text-[12px] leading-[1.75] text-[#8C9AA8]">
                  {OUTPUT[tab].body.map((line, i) => (
                    <div key={i} className={cn(line.startsWith("→") && "text-[#6BE9FF]")}>
                      {line || " "}
                    </div>
                  ))}
                </div>
                <div className="mt-5 border-t border-[#151B23] pt-3">
                  <p className="text-[11px] text-[#4A5561]">{OUTPUT[tab].meta}</p>
                </div>
                <p className="mt-3 flex items-center gap-2 text-[12.5px]">
                  <span className="text-[#5AF2A1]">~/ratio</span>
                  <span className="text-[#4A5561]">&nbsp;$ </span>
                  <span className="h-4 w-2 bg-[#5AF2A1] rr-cursor" />
                </p>
              </div>

              <div className="flex items-center justify-between border-t border-[#1E2833] bg-[#0B0F15] px-4 py-2 font-mono text-[10px] text-[#37424E]">
                <span>session 7f3c · token 42ms · grounded</span>
                <span className="text-[#5AF2A1]">exit 0</span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------------- commands ---------------- */}
      <section id="commands" className="relative border-y border-[#151B23] bg-[#07090D]">
        <div className="mx-auto max-w-[1360px] px-4 py-20 sm:px-7 sm:py-24">
          <Reveal>
            <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.2em] text-[#4A5561]">
              <span className="text-[#5AF2A1]">01</span>
              <span className="h-px w-8 bg-[#1E2833]" />
              <span>the command surface</span>
            </div>
          </Reveal>

          <Reveal delay={0.05}>
            <h2
              className="mt-6 max-w-[16ch] text-[clamp(1.9rem,4vw,3.2rem)] leading-[1.02] tracking-[-0.03em] text-[#E6EDF3]"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Four subcommands. Zero filler.
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-px bg-[#151B23] md:grid-cols-2">
            {features.map((f, i) => (
              <Reveal key={f.key} delay={i * 0.06}>
                <div className="group h-full bg-[#07090D] p-7 transition-colors hover:bg-[#0A0E14] sm:p-8">
                  <div className="flex items-center justify-between">
                    <code className="text-[13px] text-[#5AF2A1]">ratio {f.key}</code>
                    <span className="font-mono text-[10px] text-[#37424E]">{f.index}</span>
                  </div>
                  <h3 className="mt-5 font-grotesk text-[22px] tracking-[-0.01em] text-[#E6EDF3]">
                    {f.title}
                  </h3>
                  <p className="mt-2 text-[12.5px] leading-[1.7] text-[#6BE9FF]/90">{f.lead}</p>
                  <p className="mt-3 max-w-[52ch] text-[12.5px] leading-[1.8] text-[#7A8896]">
                    {f.body}
                  </p>
                  <div className="mt-6 border-t border-[#151B23] pt-4">
                    <p className="font-mono text-[10.5px] uppercase tracking-[0.12em] text-[#4A5561]">
                      {f.detail}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- pipeline ---------------- */}
      <section className="relative mx-auto max-w-[1360px] px-4 py-20 sm:px-7 sm:py-24">
        <Reveal>
          <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.2em] text-[#4A5561]">
            <span className="text-[#5AF2A1]">02</span>
            <span className="h-px w-8 bg-[#1E2833]" />
            <span>pipeline</span>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {steps.map((s, i) => (
            <Reveal key={s.number} delay={i * 0.08}>
              <div className="relative h-full border border-[#1E2833] bg-[#080B10] p-6">
                <div className="flex items-center gap-3">
                  <span className="grid h-7 w-7 place-items-center border border-[#5AF2A1]/50 text-[11px] text-[#5AF2A1]">
                    {s.number}
                  </span>
                  <span className="text-[10px] uppercase tracking-[0.18em] text-[#37424E]">
                    stage_{i + 1}
                  </span>
                </div>
                <h3 className="mt-5 font-grotesk text-[19px] text-[#E6EDF3]">{s.title}</h3>
                <p className="mt-3 text-[12.5px] leading-[1.8] text-[#7A8896]">{s.body}</p>
                <div className="mt-6 flex items-center gap-2 text-[10.5px] text-[#37424E]">
                  {i === 0 && <FileText className="h-3.5 w-3.5" />}
                  {i === 1 && <Cpu className="h-3.5 w-3.5" />}
                  {i === 2 && <ShieldCheck className="h-3.5 w-3.5" />}
                  <span>{["accept", "structure", "deliver"][i]}</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---------------- pricing ---------------- */}
      <section id="pricing" className="border-y border-[#151B23] bg-[#07090D]">
        <div className="mx-auto max-w-[1360px] px-4 py-20 sm:px-7 sm:py-24">
          <Reveal>
            <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.2em] text-[#4A5561]">
              <span className="text-[#5AF2A1]">03</span>
              <span className="h-px w-8 bg-[#1E2833]" />
              <span>pricing</span>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-px bg-[#151B23] lg:grid-cols-3">
            {plans.map((plan, i) => (
              <Reveal key={plan.name} delay={i * 0.06}>
                <div
                  className={cn(
                    "flex h-full flex-col bg-[#07090D] p-7",
                    plan.featured && "bg-[#0B1016] ring-1 ring-[#5AF2A1]/40",
                  )}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[13px] text-[#E6EDF3]">{plan.name}</span>
                    {plan.featured && (
                      <span className="bg-[#5AF2A1] px-2 py-0.5 text-[9px] uppercase tracking-[0.14em] text-[#05070A]">
                        active
                      </span>
                    )}
                  </div>
                  <p className="mt-1 text-[11px] text-[#4A5561]">{plan.blurb}</p>
                  <p className="mt-6 font-grotesk text-[38px] leading-none text-[#E6EDF3]">
                    {plan.price}
                    <span className="ml-2 font-mono text-[10.5px] tracking-wide text-[#4A5561]">
                      {plan.cadence}
                    </span>
                  </p>
                  <ul className="mt-6 space-y-2.5 border-t border-[#151B23] pt-5">
                    {plan.features.map((f) => (
                      <li key={f} className="flex gap-3 text-[12px] text-[#7A8896]">
                        <span className="text-[#5AF2A1]">$</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#install"
                    className={cn(
                      "mt-7 inline-flex items-center justify-center gap-2 border px-4 py-2.5 text-[12px] transition-colors",
                      plan.featured
                        ? "border-[#5AF2A1] bg-[#5AF2A1]/10 text-[#5AF2A1] hover:bg-[#5AF2A1] hover:text-[#05070A]"
                        : "border-[#1E2833] text-[#8C9AA8] hover:border-[#5AF2A1] hover:text-[#5AF2A1]",
                    )}
                  >
                    $ ratio activate --plan={plan.name.toLowerCase()}
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- faq ---------------- */}
      <section className="mx-auto max-w-[1360px] px-4 py-20 sm:px-7 sm:py-24">
        <Reveal>
          <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.2em] text-[#4A5561]">
            <span className="text-[#5AF2A1]">04</span>
            <span className="h-px w-8 bg-[#1E2833]" />
            <span>ratio --help</span>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {faqs.map((faq, i) => (
            <Reveal key={faq.q} delay={i * 0.05}>
              <div className="h-full border border-[#1E2833] bg-[#080B10] p-6">
                <p className="flex gap-3 text-[12.5px] leading-[1.6] text-[#E6EDF3]">
                  <span className="shrink-0 text-[#5AF2A1]">Q</span>
                  {faq.q}
                </p>
                <p className="mt-3 flex gap-3 text-[12px] leading-[1.8] text-[#7A8896]">
                  <span className="shrink-0 text-[#4A5561]">A</span>
                  {faq.a}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---------------- install ---------------- */}
      <section id="install" className="border-t border-[#151B23] bg-[#07090D]">
        <div className="mx-auto max-w-[1360px] px-4 py-20 sm:px-7 sm:py-24">
          <Reveal>
            <div className="relative overflow-hidden border border-[#1E2833] bg-[#080B10] p-8 text-center sm:p-14">
              <div className="pointer-events-none absolute inset-0 rr-scan bg-[linear-gradient(180deg,transparent,rgba(90,242,161,0.07),transparent)]" />
              <h2
                className="relative text-[clamp(1.8rem,4.4vw,3.2rem)] leading-[1.05] tracking-[-0.03em] text-[#E6EDF3]"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                one command between you and the point
              </h2>
              <p className="relative mx-auto mt-4 max-w-[46ch] text-[13px] leading-[1.8] text-[#7A8896]">
                {product.promise}
              </p>

              <div className="relative mx-auto mt-10 flex max-w-[560px] items-center gap-3 border border-[#1E2833] bg-[#05070A] px-4 py-3.5 text-left">
                <span className="text-[#5AF2A1]">~/ratio</span>
                <span className="text-[#37424E]">&nbsp;$ </span>
                <span className="min-w-0 flex-1 truncate text-[13px] text-[#E6EDF3]">{typed}</span>
                <span className="h-4 w-2 shrink-0 bg-[#5AF2A1] rr-cursor" />
                <button
                  onClick={copy}
                  className="shrink-0 border border-[#1E2833] p-1.5 text-[#4A5561] transition-colors hover:border-[#5AF2A1] hover:text-[#5AF2A1]"
                  aria-label="Copy command"
                >
                  <Copy className="h-3.5 w-3.5" />
                </button>
              </div>
              <p className="relative mt-4 text-[11px] text-[#37424E]">
                {copied ? "copied to clipboard ✓" : "no signup · files deleted in 24h · 40+ languages"}
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------------- footer ---------------- */}
      <footer className="border-t border-[#151B23] bg-[#05070A]">
        <div className="mx-auto max-w-[1360px] px-4 py-12 sm:px-7">
          <div className="grid gap-8 md:grid-cols-12">
            <div className="md:col-span-4">
              <div className="flex items-center gap-3">
                <Terminal className="h-4 w-4 text-[#5AF2A1]" strokeWidth={1.8} />
                <span className="text-[13px] text-[#E6EDF3]">ratio-reader</span>
              </div>
              <p className="mt-4 max-w-[34ch] text-[12px] leading-[1.8] text-[#5C6976]">
                A reading tool for people with more documents than hours. Your files are
                never training data.
              </p>
            </div>
            {[
              { t: "docs", l: ["quickstart", "cli", "api", "changelog"] },
              { t: "product", l: ["summary", "hints", "quotes", "insights"] },
              { t: "legal", l: ["privacy", "terms", "security", "status"] },
            ].map((col) => (
              <div key={col.t} className="md:col-span-2">
                <p className="text-[10px] uppercase tracking-[0.2em] text-[#37424E]">{col.t}</p>
                <ul className="mt-4 space-y-2">
                  {col.l.map((l) => (
                    <li key={l}>
                      <a href="#top" className="text-[12px] text-[#7A8896] hover:text-[#5AF2A1]">
                        {l}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div className="md:col-span-2">
              <p className="text-[10px] uppercase tracking-[0.2em] text-[#37424E]">status</p>
              <p className="mt-4 flex items-center gap-2 text-[12px] text-[#7A8896]">
                <span className="h-2 w-2 rounded-full bg-[#5AF2A1]" /> all systems normal
              </p>
            </div>
          </div>
          <p className="mt-10 border-t border-[#151B23] pt-6 text-[10.5px] uppercase tracking-[0.16em] text-[#37424E]">
            © {new Date().getFullYear()} ratio-reader · exit 0
          </p>
        </div>
      </footer>

      <div className="fixed bottom-4 left-4 z-[60]">
        <DesignSwitcher
          className="border border-[#1E2833] bg-[#080B10]/90"
          buttonClassName="text-[#8C9AA8]"
          activeClassName="bg-[#5AF2A1] !text-[#05070A] opacity-100"
          label="dsn"
        />
      </div>
    </div>
  );
}
