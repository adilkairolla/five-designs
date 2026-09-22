import { useEffect, useRef, useState } from "react";
import { useReveal } from "@/lib/use-reveal";

const ACID = "#dfff1f";

const SEGMENTS: [string, number][] = [
  ["In this study,", 2],
  ["which draws on a longitudinal dataset", 1],
  ["collected over the course of six years", 1],
  ["from roughly 4,200 participants", 3],
  ["across eleven countries,", 1],
  ["we set out to examine,", 2],
  ["among a number of secondary questions that we discuss at length in the appendix,", 1],
  ["whether", 3],
  ["sleep", 5],
  ["duration in the night after learning", 3],
  ["predicts", 4],
  ["how much of the material is retained", 4],
  ["one week later.", 3],
  ["After controlling for age, baseline memory, caffeine intake, and several other confounding variables", 2],
  ["that prior literature has, with varying degrees of rigor, identified as relevant,", 1],
  ["we find that", 2],
  ["each additional hour of sleep", 5],
  ["was associated with", 4],
  ["a 14% improvement in retention,", 5],
  ["an effect that, notably, was strongest for", 3],
  ["abstract concepts", 4],
  ["rather than concrete facts,", 3],
  ["and which persisted even when participants were allowed to review their notes beforehand.", 2],
];

const STOPS = [
  { label: "1:1", note: "Original" },
  { label: "2:1", note: "Trim the filler" },
  { label: "4:1", note: "Drop the context" },
  { label: "8:1", note: "Keep the claim" },
  { label: "20:1", note: "Just the core" },
];

const TOTAL_WORDS = SEGMENTS.reduce((n, [t]) => n + t.split(" ").length, 0);

const OUTPUTS = [
  {
    n: "01",
    title: "SUMMARY",
    lede: "The argument, compressed to the length you set.",
    sample: "Each extra hour of sleep after learning → 14% better recall a week later. Strongest for abstract ideas.",
  },
  {
    n: "02",
    title: "HINTS",
    lede: "Pointers that tell you where to look and why.",
    sample: "Fig. 3 carries the whole paper. Look at the gap between the abstract and concrete lines before you read §4.",
  },
  {
    n: "03",
    title: "QUOTES",
    lede: "The exact lines worth citing, with page numbers.",
    sample: "“Consolidation, not repetition, is the bottleneck.” — p. 11",
  },
  {
    n: "04",
    title: "INSIGHTS",
    lede: "What the text implies but never says outright.",
    sample: "The effect held even with note review, so studying later at night may beat studying more.",
  },
];

const BENCH = [
  ["Q3 earnings report", "PDF · 312 pp", "1 page", "312:1", "11s"],
  ["Contract: master services agreement", "PDF · 64 pp", "Key obligations + 9 red flags", "32:1", "4s"],
  ["Organic Chemistry, ch. 7", "PDF · 48 pp", "Summary + 22 hint cards", "16:1", "5s"],
  ["PhD thesis (scanned)", "PDF · 228 pp", "Abstract, argument map, quotes", "57:1", "19s"],
  ["IPCC synthesis report", "PDF · 186 pp", "1 page + insight chain", "186:1", "14s"],
];

function Compressor() {
  const [stop, setStop] = useState(0);
  const threshold = stop + 1;
  const kept = SEGMENTS.filter(([, lvl]) => lvl >= threshold).reduce((n, [t]) => n + t.split(" ").length, 0);

  return (
    <div className="grid gap-0 border-4 border-black lg:grid-cols-[1fr_380px]">
      <div className="bg-[#f1f0ea] p-6 md:p-12">
        <div className="mb-6 flex items-center justify-between font-jetbrains text-xs tracking-widest uppercase">
          <span>sleep_and_memory_2025.pdf / abstract</span>
          <span className="bg-black px-2 py-1 text-[#dfff1f]">ratio {STOPS[stop].label}</span>
        </div>
        <p className="font-archivo text-xl leading-[1.55] font-medium text-black md:text-[1.7rem]" style={{ fontVariationSettings: '"wdth" 88' }}>
          {SEGMENTS.map(([text, lvl], i) => {
            const cut = lvl < threshold;
            return (
              <span key={i}>
                <span
                  className="transition-all duration-700 ease-[cubic-bezier(0.7,0,0.3,1)]"
                  style={{
                    fontSize: cut ? "0.18em" : "1em",
                    background: cut ? "#000" : lvl >= 5 && stop >= 3 ? ACID : "transparent",
                    color: cut ? "transparent" : "#000",
                    fontWeight: lvl >= 4 && stop >= 2 ? 800 : undefined,
                  }}
                >
                  {text}
                </span>{" "}
              </span>
            );
          })}
        </p>
      </div>

      <div className="flex flex-col justify-between border-t-4 border-black bg-black p-6 text-white md:p-10 lg:border-t-0 lg:border-l-4">
        <div>
          <div className="font-jetbrains text-xs tracking-widest text-white/50 uppercase">Compression</div>
          <div className="mt-2 font-archivo text-8xl leading-none font-black text-[#dfff1f]" style={{ fontVariationSettings: '"wdth" 62' }}>
            {STOPS[stop].label}
          </div>
          <div className="mt-2 font-jetbrains text-sm uppercase">{STOPS[stop].note}</div>

          <input
            type="range"
            min={0}
            max={STOPS.length - 1}
            step={1}
            value={stop}
            onChange={(e) => setStop(Number(e.target.value))}
            aria-label="Compression ratio"
            className="mt-10 h-3 w-full cursor-pointer appearance-none bg-white/15 accent-[#dfff1f] [&::-webkit-slider-thumb]:h-8 [&::-webkit-slider-thumb]:w-8 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:bg-[#dfff1f]"
          />
          <div className="mt-3 flex justify-between font-jetbrains text-[0.65rem] text-white/50">
            {STOPS.map((s, i) => (
              <button key={s.label} onClick={() => setStop(i)} className={i === stop ? "text-[#dfff1f]" : "hover:text-white"}>
                {s.label}
              </button>
            ))}
          </div>
        </div>

        <dl className="mt-10 grid grid-cols-2 gap-px bg-white/20 font-jetbrains text-xs">
          {[
            ["WORDS KEPT", `${kept}/${TOTAL_WORDS}`],
            ["READ TIME", `${Math.max(2, Math.round((kept / 238) * 60))}s`],
            ["MEANING", stop < 4 ? "100%" : "97%"],
            ["SOURCE LINKS", "p. 1–2"],
          ].map(([k, v]) => (
            <div key={k} className="bg-black p-3">
              <dt className="text-white/45">{k}</dt>
              <dd className="mt-1 text-lg text-white">{v}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}

type Job = { name: string; pages: number; progress: number } | null;

function DropZone() {
  const [job, setJob] = useState<Job>(null);
  const timer = useRef<number | undefined>(undefined);

  useEffect(() => () => window.clearInterval(timer.current), []);

  function start(name: string) {
    window.clearInterval(timer.current);
    const pages = 40 + Math.floor(Math.random() * 360);
    setJob({ name, pages, progress: 0 });
    timer.current = window.setInterval(() => {
      setJob((j) => {
        if (!j) return j;
        const progress = Math.min(100, j.progress + 3 + Math.random() * 9);
        if (progress >= 100) window.clearInterval(timer.current);
        return { ...j, progress };
      });
    }, 90);
  }

  return (
    <label
      onDragOver={(e) => e.preventDefault()}
      onDrop={(e) => {
        e.preventDefault();
        const file = e.dataTransfer.files[0];
        if (file) start(file.name);
      }}
      className="group relative block cursor-pointer border-4 border-dashed border-black bg-[#dfff1f] p-8 transition-colors hover:bg-white md:p-14"
    >
      <input
        type="file"
        accept="application/pdf"
        className="sr-only"
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (file) start(file.name);
        }}
      />
      {!job ? (
        <div className="flex flex-col items-start gap-6 md:flex-row md:items-end md:justify-between">
          <div className="font-archivo text-[3.5rem] leading-[0.85] font-black uppercase md:text-[8rem]" style={{ fontVariationSettings: '"wdth" 70' }}>
            Drop a PDF.
          </div>
          <div className="font-jetbrains text-sm uppercase">
            or click to browse →<br />
            <span className="opacity-60">up to 1,000 pages · free</span>
          </div>
        </div>
      ) : (
        <div className="font-jetbrains uppercase">
          <div className="flex flex-wrap justify-between gap-2 text-sm">
            <span className="truncate">{job.name}</span>
            <span>{job.pages} pp</span>
          </div>
          <div className="mt-6 h-10 border-4 border-black bg-white">
            <div className="h-full bg-black transition-[width] duration-100" style={{ width: `${job.progress}%` }} />
          </div>
          <div className="mt-6 font-archivo text-6xl font-black md:text-8xl" style={{ fontVariationSettings: '"wdth" 62' }}>
            {job.progress < 100 ? `${Math.floor(job.progress)}%` : `${job.pages}:1 — done.`}
          </div>
          <div className="mt-2 text-xs opacity-70">
            {job.progress < 35 ? "reading every page…" : job.progress < 70 ? "weighing passages…" : job.progress < 100 ? "writing hints & quotes…" : "demo only · sign up to see the result"}
          </div>
        </div>
      )}
    </label>
  );
}

export default function CompressorPage() {
  useReveal();

  return (
    <div className="min-h-screen overflow-x-hidden bg-black font-archivo text-white selection:bg-[#dfff1f] selection:text-black">
      <header className="sticky top-0 z-40 flex items-center justify-between border-b-4 border-[#dfff1f] bg-black px-4 py-3 md:px-8">
        <a href="#" className="font-archivo text-2xl font-black tracking-tight uppercase" style={{ fontVariationSettings: '"wdth" 62' }}>
          Ratio<span className="text-[#dfff1f]">/</span>Reader
        </a>
        <nav className="hidden gap-8 font-jetbrains text-xs tracking-widest uppercase md:flex">
          <a href="#demo" className="hover:text-[#dfff1f]">[01] Demo</a>
          <a href="#output" className="hover:text-[#dfff1f]">[02] Output</a>
          <a href="#bench" className="hover:text-[#dfff1f]">[03] Bench</a>
          <a href="#price" className="hover:text-[#dfff1f]">[04] Price</a>
        </nav>
        <a href="#drop" className="bg-[#dfff1f] px-4 py-2 font-jetbrains text-xs font-bold tracking-widest text-black uppercase hover:bg-white">
          Compress a PDF
        </a>
      </header>

      <section className="relative px-4 pt-10 pb-16 md:px-8 md:pt-16">
        <div className="grid gap-10 lg:grid-cols-[1fr_340px]">
          <h1 className="font-black uppercase leading-[0.8] tracking-tight">
            <span className="block text-[20vw] lg:text-[13.5vw]" style={{ fontVariationSettings: '"wdth" 62' }}>
              Read
            </span>
            <span className="squeeze block text-[20vw] text-white lg:text-[13.5vw]">less.</span>
            <span className="mt-2 inline-block bg-[#dfff1f] px-3 text-[13vw] text-black lg:text-[8.5vw]" style={{ fontVariationSettings: '"wdth" 75' }}>
              Know more.
            </span>
          </h1>

          <div className="flex flex-col justify-end gap-6">
            <div className="border-2 border-white/80 p-5 font-jetbrains text-xs leading-relaxed uppercase">
              <div className="flex justify-between text-white/50">
                <span>job #004812</span>
                <span className="text-[#dfff1f]">● complete</span>
              </div>
              <div className="mt-4 space-y-1">
                <div className="flex justify-between"><span className="text-white/50">in</span><span>annual_report.pdf</span></div>
                <div className="flex justify-between"><span className="text-white/50">pages</span><span>312</span></div>
                <div className="flex justify-between"><span className="text-white/50">out</span><span>1 page + 14 hints</span></div>
                <div className="flex justify-between"><span className="text-white/50">time</span><span>00:00:11</span></div>
              </div>
              <div className="mt-4 border-t border-white/30 pt-4 font-archivo text-6xl font-black text-[#dfff1f]" style={{ fontVariationSettings: '"wdth" 62' }}>
                312:1
              </div>
            </div>
            <p className="text-lg leading-snug text-white/80">
              Ratio Reader compresses any PDF into a <strong className="text-white">summary</strong>,{" "}
              <strong className="text-white">hints</strong>, <strong className="text-white">quotes</strong>, and{" "}
              <strong className="text-white">insights</strong>. It keeps the meaning and drops the page count.
            </p>
          </div>
        </div>
      </section>

      <div className="overflow-hidden border-y-4 border-black bg-[#dfff1f] py-4 text-black">
        <div className="marquee flex w-max gap-10 font-archivo text-4xl font-black whitespace-nowrap uppercase" style={{ fontVariationSettings: '"wdth" 70' }}>
          {Array.from({ length: 2 }).map((_, k) => (
            <div key={k} className="flex gap-10">
              {["Research papers", "Contracts", "Textbooks", "10-K filings", "Theses", "Manuals", "Policy briefs", "Case law", "Grant proposals"].map((t) => (
                <span key={t} className="flex items-center gap-10">
                  {t} <span>✺</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <section id="demo" className="bg-[#f1f0ea] px-4 py-20 text-black md:px-8 md:py-28">
        <div className="reveal mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <h2 className="font-black uppercase leading-[0.85]" style={{ fontVariationSettings: '"wdth" 62' }}>
            <span className="font-jetbrains text-sm font-normal tracking-widest">[01] live demo</span>
            <span className="mt-3 block text-6xl md:text-8xl">Drag the ratio.</span>
            <span className="block text-6xl text-black/30 md:text-8xl">Watch it think.</span>
          </h2>
          <p className="max-w-sm text-lg leading-snug">
            Ratio scores every clause for how much it carries the argument. Increase the ratio and the scaffolding
            collapses while the claim stays put.
          </p>
        </div>
        <div className="reveal">
          <Compressor />
        </div>
      </section>

      <section id="output" className="px-4 py-20 md:px-8 md:py-28">
        <div className="reveal mb-14">
          <span className="font-jetbrains text-sm tracking-widest uppercase">[02] what comes out</span>
          <h2 className="mt-3 text-6xl font-black uppercase leading-[0.85] md:text-8xl" style={{ fontVariationSettings: '"wdth" 62' }}>
            One PDF in.
            <br />
            <span className="text-[#dfff1f]">Four things out.</span>
          </h2>
        </div>
        <div className="grid gap-px border-2 border-white/25 bg-white/25 md:grid-cols-2">
          {OUTPUTS.map((o, i) => (
            <article
              key={o.n}
              className="reveal group relative bg-black p-8 transition-colors duration-300 hover:bg-[#dfff1f] hover:text-black md:p-12"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="flex items-start justify-between">
                <span className="font-archivo text-8xl leading-none font-black text-white/15 group-hover:text-black/20" style={{ fontVariationSettings: '"wdth" 62' }}>
                  {o.n}
                </span>
                <span className="font-jetbrains text-xs tracking-widest uppercase">↘ output</span>
              </div>
              <h3 className="mt-6 text-5xl font-black" style={{ fontVariationSettings: '"wdth" 110' }}>
                {o.title}
              </h3>
              <p className="mt-2 text-lg text-white/60 group-hover:text-black/70">{o.lede}</p>
              <div className="mt-8 border-l-4 border-[#dfff1f] pl-4 font-jetbrains text-sm leading-relaxed group-hover:border-black">
                {o.sample}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="bench" className="bg-white px-4 py-20 text-black md:px-8 md:py-28">
        <div className="reveal mb-12 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <span className="font-jetbrains text-sm tracking-widest uppercase">[03] benchmarks</span>
            <h2 className="mt-3 text-6xl font-black uppercase leading-[0.85] md:text-8xl" style={{ fontVariationSettings: '"wdth" 62' }}>
              Real documents.
              <br />
              Real ratios.
            </h2>
          </div>
          <p className="max-w-xs font-jetbrains text-xs uppercase">Median of 20 runs. Every output line links back to its source page.</p>
        </div>
        <div className="reveal overflow-x-auto">
          <table className="w-full min-w-[720px] border-collapse font-jetbrains text-sm uppercase">
            <thead>
              <tr className="border-b-4 border-black text-left text-xs tracking-widest">
                {["Document", "Input", "Output", "Ratio", "Time"].map((h) => (
                  <th key={h} className="py-3 pr-4 font-bold">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {BENCH.map((row) => (
                <tr key={row[0]} className="group border-b-2 border-black transition-colors hover:bg-black hover:text-white">
                  {row.map((cell, j) => (
                    <td
                      key={j}
                      className={`py-5 pr-4 ${j === 3 ? "font-archivo text-4xl font-black group-hover:text-[#dfff1f]" : ""}`}
                      style={j === 3 ? { fontVariationSettings: '"wdth" 62' } : undefined}
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section id="price" className="px-4 py-20 md:px-8 md:py-28">
        <div className="reveal mb-14">
          <span className="font-jetbrains text-sm tracking-widest uppercase">[04] price</span>
          <h2 className="mt-3 text-6xl font-black uppercase leading-[0.85] md:text-8xl" style={{ fontVariationSettings: '"wdth" 62' }}>
            Cheaper than
            <br />
            <span className="text-white/30 line-through decoration-[#dfff1f] decoration-8">your time.</span>
          </h2>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {[
            ["FREE", "$0", ["5 PDFs / month", "Summary + quotes", "60 pages max"]],
            ["PRO", "$9", ["Unlimited PDFs", "All 4 outputs", "1,000 pages max", "Export anywhere"]],
            ["TEAM", "$29", ["Everything in Pro", "Shared library", "Cross-document insights", "SSO + admin"]],
          ].map(([name, price, items], i) => (
            <div
              key={name as string}
              className={`reveal flex flex-col border-4 p-8 ${i === 1 ? "border-[#dfff1f] bg-[#dfff1f] text-black" : "border-white"}`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="flex justify-between font-jetbrains text-sm tracking-widest">
                <span>{name}</span>
                <span>/MO</span>
              </div>
              <div className="mt-4 text-[7rem] leading-none font-black" style={{ fontVariationSettings: '"wdth" 62' }}>
                {price}
              </div>
              <ul className="mt-6 flex-1 space-y-2 font-jetbrains text-sm uppercase">
                {(items as string[]).map((it) => (
                  <li key={it}>+ {it}</li>
                ))}
              </ul>
              <a
                href="#drop"
                className={`mt-8 block py-3 text-center font-jetbrains text-sm font-bold tracking-widest uppercase ${
                  i === 1 ? "bg-black text-[#dfff1f] hover:bg-white hover:text-black" : "bg-white text-black hover:bg-[#dfff1f]"
                }`}
              >
                Start →
              </a>
            </div>
          ))}
        </div>
      </section>

      <section id="drop" className="bg-[#f1f0ea] px-4 py-20 text-black md:px-8">
        <DropZone />
      </section>

      <footer className="overflow-hidden bg-black px-4 pt-10 md:px-8">
        <div className="flex flex-wrap justify-between gap-4 font-jetbrains text-xs tracking-widest text-white/50 uppercase">
          <span>© 2026 Ratio Reader</span>
          <span>Privacy · Terms · Status</span>
          <span>Your PDFs are never used for training.</span>
        </div>
        <div className="squeeze mt-6 text-center text-[27vw] leading-[0.75] font-black text-[#dfff1f] uppercase">Ratio</div>
      </footer>
    </div>
  );
}
