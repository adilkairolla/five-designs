import { motion } from "motion/react";
import { useEffect, useState } from "react";

export function Design2() {
  return (
    <div
      className="min-h-screen bg-[#fafafa] text-[#0a0a0a] font-['JetBrains_Mono',monospace] selection:bg-[#ff3b00] selection:text-white"
    >
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400&family=Space+Mono:wght@400;700&family=Archivo+Black&display=swap"
      />

      <Crosshair />

      <Header />
      <Hero />
      <Marquee />
      <Protocol />
      <Spec />
      <Demo />
      <Benchmarks />
      <Manifesto />
      <Pricing />
      <Footer />
    </div>
  );
}

function Crosshair() {
  return (
    <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-50">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 border border-[#ff3b00]/30 rounded-full" />
      <div className="absolute top-4 right-4 text-[10px] tracking-[0.2em] text-[#0a0a0a]/40 font-['JetBrains_Mono']">
        N 40.7128° / W 74.0060° / Z+02
      </div>
    </div>
  );
}

function Header() {
  return (
    <header className="border-b-2 border-[#0a0a0a] sticky top-0 bg-[#fafafa] z-40">
      <div className="grid grid-cols-12">
        <a href="/" className="col-span-6 md:col-span-3 p-4 border-r-2 border-[#0a0a0a] flex items-center gap-3">
          <div className="w-3 h-3 bg-[#ff3b00]" />
          <div className="text-[12px] font-bold tracking-[0.2em]">RATIO//READER</div>
        </a>
        <div className="hidden md:flex col-span-3 border-r-2 border-[#0a0a0a] items-center justify-center text-[10px] tracking-[0.3em]">
          ░░░ DOSSIER_02.B ░░░
        </div>
        <nav className="hidden md:flex col-span-4 border-r-2 border-[#0a0a0a] items-center">
          <a href="#protocol" className="flex-1 p-4 text-[10px] tracking-[0.2em] hover:bg-[#0a0a0a] hover:text-[#fafafa] transition text-center border-r border-[#0a0a0a]">PROTOCOL</a>
          <a href="#spec" className="flex-1 p-4 text-[10px] tracking-[0.2em] hover:bg-[#0a0a0a] hover:text-[#fafafa] transition text-center border-r border-[#0a0a0a]">SPEC</a>
          <a href="#demo" className="flex-1 p-4 text-[10px] tracking-[0.2em] hover:bg-[#0a0a0a] hover:text-[#fafafa] transition text-center">OUTPUT</a>
        </nav>
        <a href="#" className="col-span-6 md:col-span-2 p-4 bg-[#0a0a0a] text-[#fafafa] text-[11px] tracking-[0.2em] font-bold hover:bg-[#ff3b00] transition text-center">
          EXECUTE →
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="border-b-2 border-[#0a0a0a] relative">
      <div className="grid grid-cols-12 min-h-[80vh]">
        <div className="col-span-12 md:col-span-1 border-r-2 border-[#0a0a0a] flex flex-col justify-between p-3 text-[9px] tracking-[0.2em]">
          <div>↑ 001/005</div>
          <div className="rotate-[-90deg] origin-center whitespace-nowrap self-center">PROCEDURAL//TEXT//ANALYSIS</div>
          <div>↓ SCROLL</div>
        </div>

        <div className="col-span-12 md:col-span-11 p-8 md:p-12 flex flex-col">
          <div className="text-[10px] tracking-[0.3em] mb-8 opacity-60">
            [ SUBJECT: PDF_DOSSIER.MD ] / [ OP: RATIO.EXTRACT ] / [ T+00:00:00 ]
          </div>

          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="font-['Archivo_Black'] text-[clamp(48px,9vw,140px)] leading-[0.85] tracking-[-0.04em] uppercase"
          >
            DROP A PDF.
            <br />
            <span className="text-[#ff3b00]">GET THE</span>
            <br />
            <span className="inline-flex items-baseline gap-4">
              SPINE.
              <motion.span
                animate={{ rotate: [0, 8, -8, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="inline-block text-[0.4em] align-super"
              >
                *
              </motion.span>
            </span>
          </motion.h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-[1200px]">
            <div className="border-t-2 border-[#0a0a0a] pt-4">
              <div className="text-[10px] tracking-[0.2em] opacity-60 mb-2">[001] INPUT</div>
              <p className="text-[13px] leading-[1.5]">
                Any PDF, any length. 30 pages or 3,000. We do not cap. We do not compress the source.
              </p>
            </div>
            <div className="border-t-2 border-[#0a0a0a] pt-4">
              <div className="text-[10px] tracking-[0.2em] opacity-60 mb-2">[002] PROCESS</div>
              <p className="text-[13px] leading-[1.5]">
                Model reads it the way a careful reader would, in full, in order. No summarising what it has not read.
              </p>
            </div>
            <div className="border-t-2 border-[#ff3b00] pt-4">
              <div className="text-[10px] tracking-[0.2em] text-[#ff3b00] mb-2">[003] OUTPUT</div>
              <p className="text-[13px] leading-[1.5]">
                A précis. The argument, charted. The kept quotes. The open threads. Yours in &lt;180s.
              </p>
            </div>
          </div>

          <div className="mt-auto pt-16 flex items-center gap-6">
            <a
              href="#"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-[#0a0a0a] text-[#fafafa] text-[12px] tracking-[0.2em] font-bold hover:bg-[#ff3b00] transition"
            >
              <span className="w-2 h-2 bg-[#ff3b00] group-hover:bg-[#fafafa] transition" />
              UPLOAD_PDF.EXE
            </a>
            <a href="#demo" className="text-[11px] tracking-[0.2em] underline underline-offset-4 decoration-2 hover:text-[#ff3b00]">
              ▸ VIEW_SAMPLE_OUTPUT
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Marquee() {
  const items = ["READ_FASTER", "THINK_DEEPER", "OUTPUT_IS_CITED", "NO_HALLUCINATIONS", "YOUR_PDFS_ONLY", "TERMINAL_GRADE", "v2.1.4", "▓▒░ STABLE ░▒▓"];
  return (
    <div className="border-b-2 border-[#0a0a0a] overflow-hidden bg-[#0a0a0a] text-[#fafafa] py-3">
      <div className="flex gap-8 whitespace-nowrap font-['Archivo_Black'] text-[20px] tracking-[0.1em] animate-[scroll2_22s_linear_infinite]">
        {[...items, ...items, ...items].map((t, i) => (
          <span key={i}>{t} ◤</span>
        ))}
      </div>
      <style>{`@keyframes scroll2 { from { transform: translateX(0); } to { transform: translateX(-33.33%); } }`}</style>
    </div>
  );
}

function Protocol() {
  return (
    <section id="protocol" className="border-b-2 border-[#0a0a0a]">
      <div className="grid grid-cols-12">
        <div className="col-span-12 md:col-span-2 border-r-2 border-[#0a0a0a] p-6">
          <div className="text-[10px] tracking-[0.3em]">/002</div>
          <div className="text-[10px] tracking-[0.3em] mt-1">PROTOCOL</div>
        </div>
        <div className="col-span-12 md:col-span-10 p-8 md:p-12">
          <h2 className="font-['Archivo_Black'] text-[clamp(36px,5vw,72px)] leading-[0.9] tracking-[-0.03em] uppercase mb-12">
            4 PHASES.<br/>0 STEPS SKIPPED.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4">
            {[
              { p: "01", t: "INGEST", s: "T+0:00", d: "PDF parsed, structure preserved, figures indexed." },
              { p: "02", t: "READ", s: "T+0:08", d: "Full text, sequential. We do not skip. We do not sample." },
              { p: "03", t: "EXTRACT", s: "T+0:42", d: "Thesis, claim-set, key quotes, open threads." },
              { p: "04", t: "DELIVER", s: "T+2:54", d: "Output as markdown, doc, or interactive reading." },
            ].map((step, i) => (
              <div
                key={step.p}
                className={`p-6 ${i !== 0 ? "border-l-2 border-[#0a0a0a]" : ""} ${i !== 3 ? "border-r-2 border-[#0a0a0a]" : ""} bg-[#fafafa] hover:bg-[#0a0a0a] hover:text-[#fafafa] transition-colors group min-h-[280px] flex flex-col`}
              >
                <div className="flex items-baseline justify-between mb-6">
                  <div className="font-['Archivo_Black'] text-[48px] leading-none">{step.p}</div>
                  <div className="text-[10px] tracking-[0.2em] opacity-60 group-hover:opacity-100">{step.s}</div>
                </div>
                <div className="font-['Archivo_Black'] text-[28px] tracking-[0.05em] mb-3">{step.t}</div>
                <p className="text-[12px] leading-[1.5] opacity-80 mt-auto">{step.d}</p>
                <div className="mt-4 h-1 bg-[#0a0a0a]/10 group-hover:bg-[#fafafa]/20 relative overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: i * 0.1 }}
                    className="absolute inset-y-0 left-0 bg-[#ff3b00] group-hover:bg-[#fafafa]"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Spec() {
  const specs = [
    ["FILE_INPUT", ".PDF / 50MB MAX / 3000PP"],
    ["LANGUAGE", "EN, FR, DE, ES, IT, JA, ZH"],
    ["OUTPUT_TIME", "<180s (median)"],
    ["QUOTE_FIDELITY", "VERBATIM, CITED"],
    ["ARGUMENT_DEPTH", "CHAPTER-LEVEL CLAIM GRAPH"],
    ["DATA_HANDLING", "EPHEMERAL / ZERO RETENTION"],
  ];

  return (
    <section id="spec" className="border-b-2 border-[#0a0a0a] bg-[#0a0a0a] text-[#fafafa]">
      <div className="grid grid-cols-12">
        <div className="col-span-12 md:col-span-2 border-r-2 border-[#fafafa] p-6">
          <div className="text-[10px] tracking-[0.3em]">/003</div>
          <div className="text-[10px] tracking-[0.3em] mt-1">SPEC</div>
        </div>
        <div className="col-span-12 md:col-span-10 p-8 md:p-12">
          <div className="flex items-baseline justify-between mb-12">
            <h2 className="font-['Archivo_Black'] text-[clamp(36px,5vw,72px)] leading-[0.9] tracking-[-0.03em] uppercase">
              THE SPEC SHEET.
            </h2>
            <div className="text-[10px] tracking-[0.2em] opacity-60 hidden md:block">REV. 26.06.01</div>
          </div>

          <div className="border-2 border-[#fafafa]">
            <div className="grid grid-cols-12 border-b-2 border-[#fafafa] text-[10px] tracking-[0.3em]">
              <div className="col-span-1 p-3 border-r-2 border-[#fafafa]">#</div>
              <div className="col-span-4 p-3 border-r-2 border-[#fafafa]">PARAMETER</div>
              <div className="col-span-7 p-3">VALUE</div>
            </div>
            {specs.map(([k, v], i) => (
              <div
                key={k}
                className={`grid grid-cols-12 text-[12px] ${i !== specs.length - 1 ? "border-b border-[#fafafa]/20" : ""} hover:bg-[#ff3b00] transition-colors group`}
              >
                <div className="col-span-1 p-3 border-r-2 border-[#fafafa]/20 font-['Archivo_Black']">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div className="col-span-4 p-3 border-r-2 border-[#fafafa]/20 tracking-[0.15em]">{k}</div>
                <div className="col-span-7 p-3 font-bold">{v}</div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex items-center gap-6 text-[11px] tracking-[0.2em]">
            <div>● CERTIFIED</div>
            <div>● TESTED_47,212 PDFs</div>
            <div>● UPTIME 99.97%</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Demo() {
  const [phase, setPhase] = useState(0);
  const phases = [
    { t: "INGEST", c: "> pdf.upload(\"kahneman_2011.pdf\", 499p)", o: "→ 499 pages indexed · 312 figures · 1,847 paragraphs" },
    { t: "READ", c: "> model.read({ sequential: true, sample: 0 })", o: "→ reading... 47% [██████████░░░░░░░░░░] t+0:21" },
    { t: "EXTRACT", c: "> extract({ precis: true, quotes: 16, threads: true })", o: "→ thesis: \"Two-system cognition, mapped and stress-tested.\"" },
    { t: "DELIVER", c: "> format('markdown')", o: "→ ratio_reader__kahneman_2011.md (4.2kb) · done in 2:48" },
  ];

  useEffect(() => {
    const id = setInterval(() => setPhase((p) => (p + 1) % phases.length), 2400);
    return () => clearInterval(id);
  }, [phases.length]);

  return (
    <section id="demo" className="border-b-2 border-[#0a0a0a]">
      <div className="grid grid-cols-12">
        <div className="col-span-12 md:col-span-2 border-r-2 border-[#0a0a0a] p-6">
          <div className="text-[10px] tracking-[0.3em]">/004</div>
          <div className="text-[10px] tracking-[0.3em] mt-1">OUTPUT</div>
        </div>
        <div className="col-span-12 md:col-span-10 p-8 md:p-12">
          <h2 className="font-['Archivo_Black'] text-[clamp(36px,5vw,72px)] leading-[0.9] tracking-[-0.03em] uppercase mb-12">
            WATCH IT RUN.
          </h2>

          <div className="border-2 border-[#0a0a0a] bg-[#0a0a0a] text-[#fafafa]">
            <div className="flex items-center gap-2 border-b-2 border-[#fafafa] p-3">
              <div className="w-3 h-3 rounded-full bg-[#ff3b00]" />
              <div className="w-3 h-3 rounded-full bg-[#fafafa]/30" />
              <div className="w-3 h-3 rounded-full bg-[#fafafa]/30" />
              <div className="flex-1 text-center text-[10px] tracking-[0.3em] opacity-60">
                ratio_reader@terminal:~/uploads
              </div>
            </div>

            <div className="p-6 font-['JetBrains_Mono'] min-h-[340px]">
              <div className="text-[10px] tracking-[0.3em] text-[#ff3b00] mb-4">
                ╔══ PHASE :: {phases[phase].t} ══╗
              </div>
              <div className="text-[14px] mb-2">
                <span className="text-[#ff3b00]">$</span> {phases[phase].c}
              </div>
              <motion.div
                key={phase}
                initial={{ opacity: 0, x: -4 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                className="text-[13px] opacity-80 ml-4 mb-8"
              >
                {phases[phase].o}
              </motion.div>

              <div className="border-t border-[#fafafa]/20 pt-6 mt-6">
                <div className="text-[10px] tracking-[0.3em] opacity-60 mb-3">▒▒ PRECIS ▒▒</div>
                <p className="text-[15px] leading-[1.6] max-w-[80ch]">
                  Kahneman proposes that the mind operates through two systems.
                  <span className="bg-[#ff3b00] text-[#0a0a0a] px-1"> System 1</span> is fast, intuitive, prone to error.{" "}
                  <span className="bg-[#ff3b00] text-[#0a0a0a] px-1">System 2</span> is slow, deliberate, lazy. The book is a
                  catalogue of the errors System 1 makes when System 2 fails to intervene — anchoring, availability,
                  framing, loss aversion — and a meditation on what it costs us to live on autopilot.
                </p>
              </div>

              <div className="mt-4">
                <div className="text-[10px] tracking-[0.3em] opacity-60 mb-3">▒▒ KEPT_QUOTE.01 ▒▒</div>
                <p className="text-[15px] leading-[1.6] italic opacity-90 max-w-[80ch]">
                  {"\u201C"}Nothing in life is as important as you think it is, while you are thinking about it.{"\u201D"}
                </p>
              </div>

              <div className="mt-8 flex items-center gap-2 text-[#ff3b00]">
                <span className="inline-block w-2 h-3 bg-[#ff3b00] animate-pulse" />
                <span className="text-[12px] tracking-[0.2em]">LIVE · phase_{phase + 1}/4</span>
              </div>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-2">
            {phases.map((p, i) => (
              <div
                key={p.t}
                className={`p-3 border-2 ${i === phase ? "border-[#ff3b00] bg-[#ff3b00]/10" : "border-[#0a0a0a]/30"} text-[11px] tracking-[0.2em] font-bold`}
              >
                [{i + 1}] {p.t}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Benchmarks() {
  const rows = [
    { name: "PRECIS_ACCURACY", us: "94.2", them: "71.8", winner: true },
    { name: "QUOTE_FIDELITY", us: "100.0", them: "82.1", winner: true },
    { name: "READ_TIME (499p)", us: "2:48", them: "11:04", winner: true },
    { name: "HALLUCINATION_RATE", us: "0.4%", them: "8.7%", winner: true, inverted: true },
    { name: "ARGUMENT_GRAPH", us: "FULL", them: "PARTIAL", winner: true },
  ];
  return (
    <section className="border-b-2 border-[#0a0a0a]">
      <div className="grid grid-cols-12">
        <div className="col-span-12 md:col-span-2 border-r-2 border-[#0a0a0a] p-6">
          <div className="text-[10px] tracking-[0.3em]">/005</div>
          <div className="text-[10px] tracking-[0.3em] mt-1">BENCH</div>
        </div>
        <div className="col-span-12 md:col-span-10 p-8 md:p-12">
          <h2 className="font-['Archivo_Black'] text-[clamp(36px,5vw,72px)] leading-[0.9] tracking-[-0.03em] uppercase mb-3">
            BENCHMARKS.
          </h2>
          <p className="text-[12px] tracking-[0.2em] opacity-60 mb-12">▒ vs. OTHER READER_TOOLS · N=200 PDFs</p>

          <div className="border-2 border-[#0a0a0a]">
            <div className="grid grid-cols-12 border-b-2 border-[#0a0a0a] text-[10px] tracking-[0.3em] font-bold">
              <div className="col-span-6 p-3 border-r-2 border-[#0a0a0a]">METRIC</div>
              <div className="col-span-3 p-3 border-r-2 border-[#0a0a0a] text-[#ff3b00]">RATIO_READER</div>
              <div className="col-span-3 p-3 opacity-50">THE_FIELD</div>
            </div>
            {rows.map((r, i) => (
              <div
                key={r.name}
                className={`grid grid-cols-12 text-[12px] ${i !== rows.length - 1 ? "border-b-2 border-[#0a0a0a]" : ""}`}
              >
                <div className="col-span-6 p-4 border-r-2 border-[#0a0a0a] font-bold tracking-[0.1em]">
                  {r.name}
                </div>
                <div className="col-span-3 p-4 border-r-2 border-[#0a0a0a] font-['Archivo_Black'] text-[18px] text-[#ff3b00]">
                  {r.us} {r.winner && "▰"}
                </div>
                <div className="col-span-3 p-4 opacity-50">{r.them}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Manifesto() {
  return (
    <section className="border-b-2 border-[#0a0a0a] bg-[#ff3b00] text-[#fafafa]">
      <div className="grid grid-cols-12">
        <div className="col-span-12 md:col-span-2 border-r-2 border-[#fafafa] p-6">
          <div className="text-[10px] tracking-[0.3em]">/006</div>
          <div className="text-[10px] tracking-[0.3em] mt-1">STANCE</div>
        </div>
        <div className="col-span-12 md:col-span-10 p-8 md:p-16">
          <h2 className="font-['Archivo_Black'] text-[clamp(40px,7vw,120px)] leading-[0.85] tracking-[-0.04em] uppercase">
            READING IS
            <br />
            NOT
            <br />
            CONSUMING.
          </h2>
          <p className="mt-12 max-w-[60ch] text-[16px] leading-[1.6] border-t-2 border-[#fafafa] pt-6">
            Most "AI readers" summarise the way a bored intern would: a list of facts, a softer version of the title.
            They save you time by giving you less. Ratio Reader returns the book. Thesis intact. Quotes verbatim.
            Threads left open. We do not compress. We <span className="font-['Archivo_Black']">EXTRACT</span>.
          </p>
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  return (
    <section className="border-b-2 border-[#0a0a0a]">
      <div className="grid grid-cols-12">
        <div className="col-span-12 md:col-span-2 border-r-2 border-[#0a0a0a] p-6">
          <div className="text-[10px] tracking-[0.3em]">/007</div>
          <div className="text-[10px] tracking-[0.3em] mt-1">PRICING</div>
        </div>
        <div className="col-span-12 md:col-span-10 p-8 md:p-12">
          <h2 className="font-['Archivo_Black'] text-[clamp(36px,5vw,72px)] leading-[0.9] tracking-[-0.03em] uppercase mb-12">
            LICENCE.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-2 border-[#0a0a0a]">
            {[
              { tier: "TEST", price: "$0", period: "/14D", body: "5 reads. 50MB cap. No card.", cta: "INIT()" },
              { tier: "WORK", price: "$12", period: "/MO", body: "20 reads. Full output. Cited quotes.", cta: "SUBSCRIBE()", highlight: true },
              { tier: "DEEP", price: "$108", period: "/YR", body: "Unlimited reads. Priority queue.", cta: "SUBSCRIBE()" },
            ].map((p, i) => (
              <div
                key={p.tier}
                className={`p-8 flex flex-col ${i !== 0 ? "border-l-2 border-[#0a0a0a]" : ""} ${i !== 2 ? "border-r-0" : ""} ${p.highlight ? "bg-[#0a0a0a] text-[#fafafa]" : "bg-[#fafafa]"}`}
              >
                <div className="text-[10px] tracking-[0.3em] mb-8 opacity-70">▒ {p.tier}_TIER</div>
                <div className="font-['Archivo_Black'] text-[72px] leading-none tracking-[-0.04em]">{p.price}</div>
                <div className="text-[11px] tracking-[0.2em] opacity-60 mb-8">{p.period}</div>
                <p className="text-[12px] leading-[1.5] mb-12 min-h-[60px]">{p.body}</p>
                <a
                  href="#"
                  className={`mt-auto text-center px-6 py-3 text-[11px] tracking-[0.3em] font-bold border-2 transition ${
                    p.highlight
                      ? "border-[#fafafa] hover:bg-[#fafafa] hover:text-[#0a0a0a]"
                      : "border-[#0a0a0a] hover:bg-[#0a0a0a] hover:text-[#fafafa]"
                  }`}
                >
                  {p.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="grid grid-cols-12 border-t-2 border-[#0a0a0a]">
      <div className="col-span-6 md:col-span-4 p-6 border-r-2 border-[#0a0a0a]">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-3 h-3 bg-[#ff3b00]" />
          <div className="text-[12px] font-bold tracking-[0.2em]">RATIO//READER</div>
        </div>
        <div className="text-[10px] tracking-[0.2em] opacity-60">© 2026 — DOSSIER_02.B</div>
      </div>
      <div className="hidden md:flex col-span-4 p-6 border-r-2 border-[#0a0a0a] items-center text-[10px] tracking-[0.3em] opacity-60">
        MADE IN BERLIN / TOKYO / ONLINE
      </div>
      <div className="col-span-6 md:col-span-4 p-6 flex items-center justify-end">
        <a href="/" className="text-[10px] tracking-[0.3em] hover:text-[#ff3b00]">← BACK_TO_INDEX</a>
      </div>
    </footer>
  );
}
