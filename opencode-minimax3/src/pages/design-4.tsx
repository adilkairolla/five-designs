import { motion } from "motion/react";
import { useEffect, useState } from "react";

export function Design4() {
  return (
    <div
      className="min-h-screen bg-[#0a0e0a] text-[#39ff14] font-['VT323',monospace] overflow-x-hidden"
      style={{
        backgroundImage:
          "repeating-linear-gradient(0deg, rgba(57,255,20,0.04) 0px, rgba(57,255,20,0.04) 1px, transparent 1px, transparent 3px)",
      }}
    >
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=VT323&family=Share+Tech+Mono&family=Major+Mono+Display&family=Orbitron:wght@400;500;700;900&family=Press+Start+2P&display=swap"
      />

      <Scanlines />
      <Vignette />
      <CRT />

      <BootSequence />

      <Header />
      <Hero />
      <Ticker />
      <Features />
      <Process />
      <Demo />
      <Diagnostics />
      <Voices />
      <Plans />
      <Footer />
    </div>
  );
}

function Scanlines() {
  return (
    <div
      className="fixed inset-0 pointer-events-none z-[60] mix-blend-overlay opacity-30"
      style={{
        backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 1px, rgba(0,0,0,0.5) 1px, rgba(0,0,0,0.5) 2px)",
      }}
    />
  );
}

function Vignette() {
  return (
    <div
      className="fixed inset-0 pointer-events-none z-[55]"
      style={{
        background: "radial-gradient(ellipse at center, transparent 50%, rgba(0,0,0,0.7) 100%)",
      }}
    />
  );
}

function CRT() {
  return (
    <motion.div
      animate={{ x: [0, -2, 1, 0, 0] }}
      transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      className="fixed inset-0 pointer-events-none z-[58] opacity-[0.03]"
      style={{
        background: "linear-gradient(180deg, transparent 49%, rgba(57,255,20,0.5) 50%, transparent 51%)",
        backgroundSize: "100% 4px",
      }}
    />
  );
}

function BootSequence() {
  const [done, setDone] = useState(false);
  const [lines, setLines] = useState<string[]>([]);

  useEffect(() => {
    const bootLines = [
      "RATIO_READER OS v2.1.4 — 1986 EDITION",
      "COPYRIGHT (C) 2026 — ALL RIGHTS RESERVED",
      ">",
      "> INITIALISING NEURAL SUBSYSTEM... [OK]",
      "> LOADING LEXICAL CORPUS... [OK]",
      "> CALIBRATING RHETORIC ENGINE... [OK]",
      "> ESTABLISHING SECURE UPLINK... [OK]",
      ">",
      "> SYSTEM READY. AWAITING INPUT.",
    ];
    let i = 0;
    const id = setInterval(() => {
      if (i < bootLines.length) {
        setLines((l) => [...l, bootLines[i]]);
        i++;
      } else {
        clearInterval(id);
        setTimeout(() => setDone(true), 600);
      }
    }, 220);
    return () => clearInterval(id);
  }, []);

  if (done) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-[#0a0e0a] flex items-center justify-center p-8">
      <div className="font-['VT323'] text-[#39ff14] text-[20px] leading-[1.3] max-w-[700px]">
        {lines.map((l, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -4 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.1 }}
          >
            {l}
          </motion.div>
        ))}
        <span className="inline-block w-3 h-5 bg-[#39ff14] animate-pulse" />
      </div>
    </div>
  );
}

function Header() {
  const [time, setTime] = useState("");
  useEffect(() => {
    const update = () => {
      const d = new Date();
      setTime(
        `${String(d.getUTCHours()).padStart(2, "0")}:${String(d.getUTCMinutes()).padStart(2, "0")}:${String(d.getUTCSeconds()).padStart(2, "0")} UTC`
      );
    };
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <header className="relative z-20 border-b-2 border-[#39ff14]/40">
      <div className="px-6 md:px-12 py-3 flex items-center justify-between text-[18px]">
        <a href="/" className="flex items-center gap-3">
          <div className="w-4 h-4 border-2 border-[#39ff14] relative">
            <div className="absolute inset-0.5 bg-[#39ff14] animate-pulse" />
          </div>
          <span className="tracking-[0.15em]">RATIO//READER</span>
        </a>
        <div className="hidden md:flex items-center gap-8 text-[16px] opacity-70">
          <a href="#features" className="hover:text-[#ff00aa] hover:opacity-100 transition">▸ /features</a>
          <a href="#demo" className="hover:text-[#ff00aa] hover:opacity-100 transition">▸ /demo</a>
          <a href="#plans" className="hover:text-[#ff00aa] hover:opacity-100 transition">▸ /plans</a>
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden md:block opacity-50 text-[16px]">{time}</div>
          <a
            href="#"
            className="px-5 py-1.5 border-2 border-[#39ff14] text-[16px] tracking-[0.15em] hover:bg-[#39ff14] hover:text-[#0a0e0a] transition font-bold"
          >
            [UPLOAD]
          </a>
        </div>
      </div>
      <div className="px-6 md:px-12 py-1 text-[14px] opacity-40 flex items-center gap-3 border-t border-[#39ff14]/20">
        <span>▣</span>
        <span>UPLINK: STABLE</span>
        <span>·</span>
        <span>MEM: 14,212 / 16,384</span>
        <span>·</span>
        <span>PROC: 47</span>
        <span>·</span>
        <span className="text-[#ff00aa]">●REC</span>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative z-10 px-6 md:px-12 py-20 md:py-32">
      <div className="max-w-[1400px] mx-auto">
        <div className="text-[18px] opacity-50 mb-6">
          <span className="text-[#ff00aa]">$</span> ratio_reader --intake --mood=sharp
        </div>

        <h1 className="font-['Orbitron'] font-black text-[clamp(40px,8vw,120px)] leading-[0.9] tracking-[-0.02em] uppercase">
          <Glitch text="READ_ANY" />
          <br />
          <span className="text-[#ff00aa]">PDF</span>
          <span className="opacity-50">_</span>
          <br />
          <span className="relative inline-block">
            RETURN_THE
            <span className="text-[#ff00aa]">_</span>
          </span>
          <br />
          <Glitch text="SIGNAL." color="#39ff14" />
        </h1>

        <div className="mt-12 max-w-[700px] font-['Share_Tech_Mono'] text-[18px] leading-[1.5] opacity-80">
          <span className="text-[#ff00aa]">{`>`}</span> DROP ANY PDF. ACADEMIC PAPER, ANNUAL
          REPORT, A 600PP TREATISE. RATIO READER RETURNS THE THESIS, THE
          EVIDENCE, THE KEPT QUOTES, AND THE UNFINISHED THREADS — IN UNDER 180
          SECONDS. NOISE REMOVED. SIGNAL PRESERVED.
        </div>

        <div className="mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-6">
          <a
            href="#"
            className="group inline-flex items-center gap-3 px-7 py-3 bg-[#39ff14] text-[#0a0e0a] font-['Orbitron'] font-bold text-[16px] tracking-[0.2em] hover:bg-[#ff00aa] transition border-2 border-[#39ff14]"
          >
            ▸ UPLOAD_PDF
            <span className="opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition">→</span>
          </a>
          <a href="#demo" className="text-[18px] underline underline-offset-4 decoration-2 decoration-[#ff00aa] hover:text-[#ff00aa]">
            ▸ view_sample_output
          </a>
        </div>

        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-px bg-[#39ff14]/30 border-2 border-[#39ff14]/30">
          {[
            ["00:02:48", "AVG_RESPONSE"],
            ["94.2%", "PRECIS_ACCURACY"],
            ["100%", "QUOTE_FIDELITY"],
            ["12,481", "READS_TODAY"],
          ].map(([v, l]) => (
            <div key={l} className="bg-[#0a0e0a] p-4">
              <div className="font-['Orbitron'] font-black text-[24px] md:text-[32px] text-[#ff00aa]">{v}</div>
              <div className="text-[14px] opacity-50 mt-1 tracking-[0.15em]">{l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Glitch({ text, color = "#ff00aa" }: { text: string; color?: string }) {
  return (
    <span className="relative inline-block">
      <span className="relative z-10">{text}</span>
      <span
        className="absolute inset-0 z-0"
        style={{ color, transform: "translate(2px, 0)", opacity: 0.6 }}
        aria-hidden
      >
        {text}
      </span>
      <span
        className="absolute inset-0 z-0"
        style={{ color, transform: "translate(-2px, 0)", opacity: 0.6 }}
        aria-hidden
      >
        {text}
      </span>
    </span>
  );
}

function Ticker() {
  return (
    <div className="relative z-10 border-y-2 border-[#39ff14]/40 bg-[#39ff14] text-[#0a0e0a] py-2 overflow-hidden">
      <div className="flex gap-8 whitespace-nowrap font-['Orbitron'] font-bold text-[16px] tracking-[0.2em] animate-[ticker_30s_linear_infinite]">
        {[..."▣ NOISE_OUT_▣ SIGNAL_IN_▣ CITED_QUOTES_▣ NO_HALLUCINATIONS_▣ YOUR_PDFS_ONLY_▣ TERMINAL_GRADE_▣ v2.1.4_▣ "].length > 0 &&
          Array.from({ length: 4 }).flatMap(() => [
            "▣ NOISE_OUT",
            "▣ SIGNAL_IN",
            "▣ CITED_QUOTES",
            "▣ NO_HALLUCINATIONS",
            "▣ YOUR_PDFS_ONLY",
            "▣ TERMINAL_GRADE",
            "▣ v2.1.4_STABLE",
          ]).map((t, i) => (
            <span key={i}>{t}</span>
          ))}
      </div>
      <style>{`@keyframes ticker { from { transform: translateX(0); } to { transform: translateX(-50%); } }`}</style>
    </div>
  );
}

function Features() {
  const items = [
    { n: "01", t: "PRÉCIS", d: "Thesis in 200 words. Plain register. No abstract filler.", c: "#39ff14" },
    { n: "02", t: "ARGUMENT_GRAPH", d: "Each chapter: claim / evidence / concession. The architecture, mapped.", c: "#ff00aa" },
    { n: "03", t: "KEPT_QUOTES", d: "12–20 sentences, extracted verbatim. Cite the page.", c: "#39ff14" },
    { n: "04", t: "OPEN_THREADS", d: "What the book raises but does not close. Fuel for essays.", c: "#ff00aa" },
  ];

  return (
    <section id="features" className="relative z-10 px-6 md:px-12 py-20 border-b-2 border-[#39ff14]/30">
      <div className="max-w-[1400px] mx-auto">
        <div className="font-['Share_Tech_Mono'] text-[16px] opacity-50 mb-3">
          $ cat /ratio_reader/modules.list
        </div>
        <h2 className="font-['Orbitron'] font-black text-[clamp(36px,5vw,72px)] leading-[0.9] uppercase mb-3">
          ▣ 4_MODULES <span className="opacity-30">/</span> 1_BOOK
        </h2>
        <p className="font-['Share_Tech_Mono'] text-[18px] opacity-60 mb-12 max-w-[60ch]">
          Four instruments. One upload. Each module runs once per PDF, in
          parallel. The output is a reading, not a report.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#39ff14]/30 border-2 border-[#39ff14]/30">
          {items.map((it) => (
            <div
              key={it.n}
              className="bg-[#0a0e0a] p-8 hover:bg-[#0f140f] transition group min-h-[280px] flex flex-col relative"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="font-['Orbitron'] font-black text-[64px] leading-none" style={{ color: it.c, opacity: 0.3 }}>
                  {it.n}
                </div>
                <div className="text-[14px] opacity-40 font-['Share_Tech_Mono']">▣ ACTIVE</div>
              </div>
              <div className="font-['Orbitron'] font-black text-[28px] tracking-[0.05em] mb-4" style={{ color: it.c }}>
                {it.t}
              </div>
              <p className="font-['Share_Tech_Mono'] text-[16px] leading-[1.5] opacity-80 mt-auto">
                {it.d}
              </p>
              <div className="absolute bottom-3 right-3 text-[14px] opacity-30 group-hover:opacity-100 group-hover:text-[#ff00aa] transition">
                →
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section className="relative z-10 px-6 md:px-12 py-20 border-b-2 border-[#39ff14]/30 bg-[#0f140f]">
      <div className="max-w-[1400px] mx-auto">
        <div className="font-['Share_Tech_Mono'] text-[16px] opacity-50 mb-3">
          $ ratio_reader --trace
        </div>
        <h2 className="font-['Orbitron'] font-black text-[clamp(36px,5vw,72px)] leading-[0.9] uppercase mb-12">
          ▣ PROTOCOL<span className="text-[#ff00aa]">_</span>TRACE
        </h2>

        <div className="space-y-2 font-['Share_Tech_Mono'] text-[16px] md:text-[18px]">
          {[
            { p: "T+0:00.00", c: "[INGEST]", m: "PDF parsed · 499 pages · 312 figures indexed" },
            { p: "T+0:00.08", c: "[READ]", m: "Sequential full read · 1,847 paragraphs · t+0:42" },
            { p: "T+0:00.42", c: "[EXTRACT]", m: "Thesis identified · 16 quotes flagged · 7 threads open" },
            { p: "T+0:02.48", c: "[DELIVER]", m: "Output written · 4.2 KB markdown · done." },
          ].map((row, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.15 }}
              className="grid grid-cols-12 gap-4 py-3 border-b border-[#39ff14]/15 hover:bg-[#39ff14]/5"
            >
              <div className="col-span-3 md:col-span-2 opacity-50">{row.p}</div>
              <div className="col-span-3 md:col-span-2 text-[#ff00aa] font-bold">{row.c}</div>
              <div className="col-span-6 md:col-span-8">{row.m}</div>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 font-['Share_Tech_Mono'] text-[16px] opacity-60">
          <span className="text-[#39ff14]">$</span> echo "STATUS: OK · READY_FOR_NEXT"
          <span className="inline-block w-3 h-4 bg-[#39ff14] animate-pulse ml-2 align-middle" />
        </div>
      </div>
    </section>
  );
}

function Demo() {
  return (
    <section id="demo" className="relative z-10 px-6 md:px-12 py-20 border-b-2 border-[#39ff14]/30">
      <div className="max-w-[1400px] mx-auto">
        <div className="font-['Share_Tech_Mono'] text-[16px] opacity-50 mb-3">
          $ cat output/kahneman_2011.ratio
        </div>
        <h2 className="font-['Orbitron'] font-black text-[clamp(36px,5vw,72px)] leading-[0.9] uppercase mb-3">
          ▣ SAMPLE_OUTPUT
        </h2>
        <p className="font-['Share_Tech_Mono'] text-[18px] opacity-60 mb-12 max-w-[60ch]">
          What you get when you upload Daniel Kahneman's{" "}
          <em className="text-[#ff00aa]">Thinking, Fast and Slow</em>.
        </p>

        <div className="border-2 border-[#39ff14]/40 bg-[#0a0a0a]">
          <div className="border-b-2 border-[#39ff14]/40 px-4 py-2 flex items-center gap-2 text-[16px] opacity-60">
            <span className="w-3 h-3 rounded-full bg-[#ff00aa]" />
            <span className="w-3 h-3 rounded-full bg-[#39ff14]" />
            <span className="w-3 h-3 rounded-full border border-[#39ff14]/40" />
            <span className="ml-4">kahneman_2011.ratio</span>
          </div>

          <div className="p-6 md:p-8 space-y-10">
            <div>
              <div className="flex items-center gap-3 mb-3 font-['Share_Tech_Mono'] text-[16px]">
                <span className="text-[#ff00aa]">▣</span>
                <span className="tracking-[0.2em]">/PRECIS</span>
                <span className="opacity-40">// 200w</span>
              </div>
              <p className="font-['Share_Tech_Mono'] text-[18px] leading-[1.5] opacity-90 pl-6 border-l-2 border-[#39ff14]/30">
                Kahneman proposes that the mind runs on two systems.{" "}
                <span className="bg-[#39ff14] text-[#0a0e0a] px-1">System 1</span> is fast, intuitive, prone to error.{" "}
                <span className="bg-[#ff00aa] text-[#0a0e0a] px-1">System 2</span> is slow, deliberate, lazy. The book is
                a catalogue of the errors System 1 makes when System 2 fails to
                intervene — anchoring, availability, framing, loss aversion —
                and a meditation on what it costs us to live on autopilot.
              </p>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-3 font-['Share_Tech_Mono'] text-[16px]">
                <span className="text-[#ff00aa]">▣</span>
                <span className="tracking-[0.2em]">/KEPT_QUOTE_01</span>
                <span className="opacity-40">// p.187</span>
              </div>
              <p className="font-['VT323'] text-[28px] md:text-[32px] leading-[1.3] italic opacity-90 pl-6 border-l-2 border-[#ff00aa]/40">
                "Nothing in life is as important as you think it is, while you are thinking about it."
              </p>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-3 font-['Share_Tech_Mono'] text-[16px]">
                <span className="text-[#ff00aa]">▣</span>
                <span className="tracking-[0.2em]">/OPEN_THREAD_03</span>
              </div>
              <p className="font-['Share_Tech_Mono'] text-[18px] leading-[1.5] opacity-90 pl-6 border-l-2 border-[#39ff14]/30">
                Kahneman admits he has no reliable method for training System 2
                to be more vigilant. The book identifies the problem with
                extraordinary precision. The remedy remains, by his own
                admission, an open question.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Diagnostics() {
  const rows = [
    ["L1: TEXT_PARSE", "100.00", "OK"],
    ["L2: SEQUENTIAL_READ", "100.00", "OK"],
    ["L3: THESIS_EXTRACT", "94.20", "OK"],
    ["L4: QUOTE_FIDELITY", "100.00", "OK"],
    ["L5: OPEN_THREAD_DETECT", "88.40", "OK"],
    ["L6: OUTPUT_FORMAT", "100.00", "OK"],
  ];

  return (
    <section className="relative z-10 px-6 md:px-12 py-20 border-b-2 border-[#39ff14]/30 bg-[#0f140f]">
      <div className="max-w-[1400px] mx-auto">
        <div className="font-['Share_Tech_Mono'] text-[16px] opacity-50 mb-3">
          $ cat /var/log/ratio_reader/benchmarks.log
        </div>
        <h2 className="font-['Orbitron'] font-black text-[clamp(36px,5vw,72px)] leading-[0.9] uppercase mb-3">
          ▣ DIAGNOSTICS
        </h2>
        <p className="font-['Share_Tech_Mono'] text-[18px] opacity-60 mb-12">
          Last full benchmark, 200 PDFs. Compared against the field median.
        </p>

        <div className="border-2 border-[#39ff14]/40">
          <div className="grid grid-cols-12 border-b-2 border-[#39ff14]/40 font-['Orbitron'] font-bold text-[14px] tracking-[0.2em]">
            <div className="col-span-6 p-3 border-r-2 border-[#39ff14]/40">SUBSYSTEM</div>
            <div className="col-span-3 p-3 border-r-2 border-[#39ff14]/40 text-[#ff00aa]">SCORE</div>
            <div className="col-span-3 p-3">STATUS</div>
          </div>
          {rows.map(([n, v, s], i) => (
            <div
              key={n}
              className={`grid grid-cols-12 font-['Share_Tech_Mono'] text-[16px] hover:bg-[#39ff14]/5 ${
                i !== rows.length - 1 ? "border-b border-[#39ff14]/20" : ""
              }`}
            >
              <div className="col-span-6 p-3 border-r-2 border-[#39ff14]/20">{n}</div>
              <div className="col-span-3 p-3 border-r-2 border-[#39ff14]/20 text-[#ff00aa] font-bold">{v}</div>
              <div className="col-span-3 p-3">
                <span className="text-[#39ff14]">● {s}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Voices() {
  return (
    <section className="relative z-10 px-6 md:px-12 py-20 border-b-2 border-[#39ff14]/30">
      <div className="max-w-[1400px] mx-auto">
        <div className="font-['Share_Tech_Mono'] text-[16px] opacity-50 mb-3">
          $ tail -f /var/log/users/testimonials.log
        </div>
        <h2 className="font-['Orbitron'] font-black text-[clamp(36px,5vw,72px)] leading-[0.9] uppercase mb-12">
          ▣ USER_FEEDBACK
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#39ff14]/30 border-2 border-[#39ff14]/30">
          {[
            ['"I uploaded a 600pp book I had been avoiding for two years. Got the spine in 3 minutes."', "ELENA_M", "EDITOR"],
            ['"The only AI tool I actually use weekly. Reads like a careful friend."', "JAMES_T", "PHD_CANDIDATE"],
            ['"The open-threads section alone is worth the subscription."', "SOFIA_R", "WRITER"],
          ].map(([q, n, r]) => (
            <div key={n} className="bg-[#0a0e0a] p-6 min-h-[280px] flex flex-col">
              <div className="font-['Share_Tech_Mono'] text-[16px] leading-[1.5] opacity-90 flex-1">
                {q}
              </div>
              <div className="mt-6 pt-4 border-t border-[#39ff14]/20 font-['Orbitron'] text-[14px] tracking-[0.2em]">
                <span className="text-[#ff00aa]">{`>`}</span> {n}
                <span className="opacity-40"> :: {r}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Plans() {
  return (
    <section id="plans" className="relative z-10 px-6 md:px-12 py-20">
      <div className="max-w-[1400px] mx-auto">
        <div className="font-['Share_Tech_Mono'] text-[16px] opacity-50 mb-3">
          $ ls /ratio_reader/plans
        </div>
        <h2 className="font-['Orbitron'] font-black text-[clamp(36px,5vw,72px)] leading-[0.9] uppercase mb-12">
          ▣ LICENCE_TIERS
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#39ff14]/30 border-2 border-[#39ff14]/30">
          {[
            { t: "TEST", p: "$0", per: "/14D", b: "5 reads. 50MB cap. No card.", c: "INIT()" },
            { t: "WORK", p: "$12", per: "/MO", b: "20 reads. Cited quotes. Full output.", c: "SUBSCRIBE()", h: true },
            { t: "DEEP", p: "$108", per: "/YR", b: "Unlimited reads. Priority queue.", c: "SUBSCRIBE()" },
          ].map((p) => (
            <div
              key={p.t}
              className={`p-8 min-h-[400px] flex flex-col ${p.h ? "bg-[#39ff14] text-[#0a0e0a]" : "bg-[#0a0e0a]"}`}
            >
              <div className="font-['Share_Tech_Mono'] text-[16px] tracking-[0.2em] opacity-70 mb-6">
                ▣ {p.t}_TIER
              </div>
              <div className="font-['Orbitron'] font-black text-[80px] leading-none tracking-[-0.04em]">
                {p.p}
              </div>
              <div className="font-['Share_Tech_Mono'] text-[16px] opacity-60 mb-8 mt-1">{p.per}</div>
              <p className={`font-['Share_Tech_Mono'] text-[16px] leading-[1.5] mb-12 flex-1 ${p.h ? "" : "opacity-80"}`}>
                {p.b}
              </p>
              <a
                href="#"
                className={`block text-center px-6 py-3 font-['Orbitron'] font-bold text-[14px] tracking-[0.2em] border-2 transition ${
                  p.h
                    ? "border-[#0a0e0a] hover:bg-[#0a0e0a] hover:text-[#39ff14]"
                    : "border-[#39ff14] hover:bg-[#39ff14] hover:text-[#0a0e0a]"
                }`}
              >
                {p.c}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="relative z-10 border-t-2 border-[#39ff14]/40">
      <div className="px-6 md:px-12 py-6 flex flex-col md:flex-row items-center justify-between gap-4 font-['Share_Tech_Mono'] text-[16px]">
        <div className="opacity-60">$ echo "© 2026 RATIO_READER — END_OF_TRANSMISSION"</div>
        <a href="/" className="hover:text-[#ff00aa]">▸ BACK_TO_INDEX</a>
      </div>
    </footer>
  );
}
