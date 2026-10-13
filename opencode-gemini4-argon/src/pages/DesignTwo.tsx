import { useState } from "react";
import { SAMPLE_PDFS } from "../data/samplePdfs";
import {
  Activity,
  Cpu,
  Radio,
  Sliders,
  Terminal,
  Zap,
  ShieldCheck,
  FileCode2,
  ArrowRight,
  Quote,
  Lightbulb,
  Sparkles,
  UploadCloud
} from "lucide-react";

export function DesignTwo() {
  const [selectedDocIdx, setSelectedDocIdx] = useState(1);
  const [snrThreshold, setSnrThreshold] = useState<number>(82);
  const [activeTab, setActiveTab] = useState<"all" | "summary" | "hints" | "quotes" | "insights">("all");
  const [scanning, setScanning] = useState(false);

  const doc = SAMPLE_PDFS[selectedDocIdx];

  const triggerScan = (idx: number) => {
    setScanning(true);
    setSelectedDocIdx(idx);
    setTimeout(() => setScanning(false), 600);
  };

  const ratioKey =
    snrThreshold >= 85 ? "executive" : snrThreshold >= 60 ? "golden" : "deep";

  return (
    <div className="min-h-screen bg-[#07090D] text-[#E2E8F0] font-space blueprint-grid selection:bg-[#FFB000] selection:text-[#07090D]">
      <div className="border-b border-white/10 bg-[#05070A] px-4 py-2 font-plex-mono text-[11px] text-slate-400">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-2 text-[#FFB000] font-semibold">
              <span className="h-2 w-2 rounded-full bg-[#FFB000] animate-ping" />
              SYS.RATIO // SIGNAL-TO-NOISE LAB
            </span>
            <span className="hidden sm:inline text-slate-600">|</span>
            <span className="hidden sm:inline text-[#00F0FF]">
              ATTENUATION: +{(snrThreshold * 0.32).toFixed(1)} dB
            </span>
          </div>
          <div className="flex items-center gap-5">
            <span>LATENCY: 38ms</span>
            <span className="text-emerald-400">HALLUCINATION RATE: 0.00%</span>
            <span className="rounded bg-white/10 px-2 py-0.5 text-white">DESIGN 02</span>
          </div>
        </div>
      </div>

      <header className="sticky top-0 z-30 border-b border-white/10 bg-[#07090D]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-8">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded border border-[#FFB000]/50 bg-[#FFB000]/10 font-plex-mono text-sm font-bold text-[#FFB000] shadow-[0_0_20px_rgba(255,176,0,0.2)]">
              S/N
            </div>
            <div>
              <div className="text-lg font-bold tracking-tight text-white flex items-center gap-2">
                <span>RATIO READER</span>
                <span className="rounded border border-[#00F0FF]/40 bg-[#00F0FF]/10 px-1.5 py-0.5 font-plex-mono text-[10px] text-[#00F0FF]">
                  TELEMETRY OS
                </span>
              </div>
              <div className="font-plex-mono text-[10px] text-slate-400">
                HIGH-FREQUENCY PDF ENTROPY EXTRACTOR
              </div>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-6 font-plex-mono text-xs text-slate-400">
            <a href="#oscilloscope" className="hover:text-[#FFB000] transition">
              [01. SNR FILTER]
            </a>
            <a href="#telemetry-matrix" className="hover:text-[#00F0FF] transition">
              [02. EXTRACTION MATRIX]
            </a>
            <a href="#benchmarks" className="hover:text-emerald-400 transition">
              [03. BENCHMARKS]
            </a>
          </div>

          <button
            type="button"
            onClick={() => triggerScan((selectedDocIdx + 1) % SAMPLE_PDFS.length)}
            className="inline-flex items-center gap-2 rounded border border-[#FFB000] bg-[#FFB000] px-4 py-2 font-plex-mono text-xs font-bold uppercase text-[#07090D] shadow-[0_0_25px_rgba(255,176,0,0.35)] hover:bg-[#ffc133] transition cursor-pointer"
          >
            <UploadCloud className="h-4 w-4" />
            <span>Ingest PDF Stream</span>
          </button>
        </div>
      </header>

      <section id="oscilloscope" className="mx-auto max-w-7xl px-4 pt-10 pb-16 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          <div className="lg:col-span-6 flex flex-col justify-between rounded-xl border border-white/10 bg-[#0D1117]/90 p-6 sm:p-10 shadow-2xl">
            <div>
              <div className="inline-flex items-center gap-2 rounded border border-[#00F0FF]/30 bg-[#00F0FF]/10 px-3 py-1 font-plex-mono text-xs text-[#00F0FF]">
                <Radio className="h-3.5 w-3.5" />
                <span>STOP READING AT 1:1 NOISE RATIO</span>
              </div>

              <h1 className="mt-6 text-4xl sm:text-6xl font-bold tracking-tight leading-[1.03] text-white">
                Strip the <span className="text-slate-600 line-through">academic static</span>. Lock onto pure <span className="text-[#FFB000]">epistemic signal</span>.
              </h1>

              <p className="mt-5 text-base leading-relaxed text-slate-300">
                Every 100-page PDF is a noisy transmission. <strong className="text-white">Ratio Reader</strong> runs a semantic spectrum analyzer across your document—isolating high-entropy <span className="text-[#FFB000] font-plex-mono">Summaries</span>, decoding domain bottlenecks with <span className="text-[#00F0FF] font-plex-mono">Inline Hints</span>, and locking onto <span className="text-emerald-400 font-plex-mono">Verbatim Quotes</span>.
              </p>
            </div>

            <div className="mt-8 rounded-lg border border-[#FFB000]/30 bg-[#07090D] p-5">
              <div className="flex items-center justify-between font-plex-mono text-xs">
                <span className="flex items-center gap-2 text-[#FFB000] font-semibold">
                  <Sliders className="h-4 w-4" />
                  INTERACTIVE NOISE GATE (DRAG TO FILTER FLUFF)
                </span>
                <span className="rounded bg-[#FFB000]/20 px-2 py-0.5 text-[#FFB000] font-bold">
                  {snrThreshold}% NOISE REJECTED
                </span>
              </div>

              <input
                type="range"
                min={25}
                max={95}
                value={snrThreshold}
                onChange={(e) => setSnrThreshold(Number(e.target.value))}
                className="mt-4 h-2 w-full cursor-pointer appearance-none rounded-lg bg-slate-800 accent-[#FFB000]"
              />

              <div className="mt-3 flex justify-between font-plex-mono text-[10px] text-slate-400">
                <button
                  type="button"
                  onClick={() => setSnrThreshold(35)}
                  className={`px-2 py-1 rounded cursor-pointer ${snrThreshold < 60 ? "bg-white/15 text-white" : "hover:text-white"}`}
                >
                  3:1 DEEP SCAN (35%)
                </button>
                <button
                  type="button"
                  onClick={() => setSnrThreshold(75)}
                  className={`px-2 py-1 rounded cursor-pointer ${snrThreshold >= 60 && snrThreshold < 85 ? "bg-[#00F0FF]/20 text-[#00F0FF]" : "hover:text-white"}`}
                >
                  GOLDEN RATIO (75%)
                </button>
                <button
                  type="button"
                  onClick={() => setSnrThreshold(92)}
                  className={`px-2 py-1 rounded cursor-pointer ${snrThreshold >= 85 ? "bg-[#FFB000]/20 text-[#FFB000]" : "hover:text-white"}`}
                >
                  16:1 ULTRA SIGNAL (92%)
                </button>
              </div>
            </div>

            <div className="mt-6">
              <div className="font-plex-mono text-[11px] uppercase text-slate-400 mb-2">
                Select Target PDF Telemetry Stream:
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {SAMPLE_PDFS.map((item, idx) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => triggerScan(idx)}
                    className={`text-left rounded border p-3 font-plex-mono transition cursor-pointer ${
                      selectedDocIdx === idx
                        ? "border-[#FFB000] bg-[#FFB000]/10 text-white"
                        : "border-white/10 bg-white/[0.02] text-slate-400 hover:border-white/30"
                    }`}
                  >
                    <div className="text-[10px] text-[#00F0FF]">CH_0{idx + 1} · {item.pages}P</div>
                    <div className="mt-1 text-xs font-semibold truncate">{item.domain}</div>
                    <div className="mt-1 text-[10px] text-slate-400">Ratio {item.signalRatio}</div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 flex flex-col justify-between rounded-xl border border-white/15 bg-[#0A0E14] p-6 sm:p-8 relative overflow-hidden">
            <div>
              <div className="flex items-center justify-between border-b border-white/10 pb-3 font-plex-mono text-xs">
                <div className="flex items-center gap-2 text-[#00F0FF]">
                  <Activity className="h-4 w-4" />
                  <span>STREAM: {doc.filename}</span>
                </div>
                <span className="text-emerald-400">
                  {scanning ? "SCANNING VECTORS..." : "LOCKED · 100% VERIFIED"}
                </span>
              </div>

              <div className="mt-4 rounded-lg border border-white/10 bg-[#05070A] p-4">
                <div className="flex items-center justify-between font-plex-mono text-[10px] text-slate-400 mb-2">
                  <span>PAGE ENTROPY SPECTRUM (PAGES 1 → {doc.pages})</span>
                  <span className="text-[#FFB000]">PEAK SIGNAL NODES HIGHLIGHTED</span>
                </div>
                <div className="flex items-end gap-1 h-20 pt-2">
                  {Array.from({ length: 36 }).map((_, i) => {
                    const rawHeight = ((i * 37 + selectedDocIdx * 19) % 85) + 15;
                    const isAboveGate = rawHeight >= snrThreshold;
                    return (
                      <div
                        key={i}
                        className="flex-1 rounded-t transition-all duration-300"
                        style={{
                          height: `${rawHeight}%`,
                          backgroundColor: isAboveGate
                            ? rawHeight > 88
                              ? "#FFB000"
                              : "#00F0FF"
                            : "rgba(148, 163, 184, 0.15)"
                        }}
                      />
                    );
                  })}
                </div>
                <div className="mt-2 flex justify-between font-plex-mono text-[10px] text-slate-500">
                  <span>p.01 [Intro Noise Filtered]</span>
                  <span className="text-[#00F0FF]">p.{doc.quotes[0].page} [Thesis Lock]</span>
                  <span className="text-[#FFB000]">p.{doc.quotes[2].page} [Critical Anomaly]</span>
                </div>
              </div>

              <div className="mt-5 rounded-lg border border-white/10 bg-[#05070A] p-5 font-plex-mono text-xs leading-relaxed">
                <div className="mb-3 flex items-center justify-between text-[10px] uppercase text-slate-400">
                  <span>LIVE SIGNAL EXTRACTION OUTPUT ({ratioKey.toUpperCase()} MODE)</span>
                  <span className="text-[#FFB000]">{doc.rawReadTime} → {doc.ratioReadTime}</span>
                </div>

                <p
                  className="transition-opacity duration-300 text-slate-500 line-through mb-2"
                  style={{ opacity: Math.max(0.12, (100 - snrThreshold) / 100) }}
                >
                  [BOILERPLATE REJECTED] In accordance with standard introductory literature surveys, previous authors have broadly discussed general background context...
                </p>

                <div className="my-3 rounded border-l-2 border-[#FFB000] bg-[#FFB000]/10 p-3 text-white font-space text-sm">
                  <div className="font-plex-mono text-[10px] font-bold text-[#FFB000] mb-1">
                    ★ ISOLATED CORE SIGNAL ({doc.signalRatio})
                  </div>
                  {doc.summariesByRatio[ratioKey]}
                </div>

                <div className="my-3 rounded border-l-2 border-[#00F0FF] bg-[#00F0FF]/10 p-3 text-slate-200">
                  <div className="font-plex-mono text-[10px] font-bold text-[#00F0FF] mb-1">
                    ⚡ AUTO-INJECTED HINT · DECODES P.{doc.hints[0].page} ({doc.hints[0].term})
                  </div>
                  <p className="font-space text-xs text-slate-200">{doc.hints[0].explanation}</p>
                </div>

                <div className="mt-3 rounded border-l-2 border-emerald-400 bg-emerald-500/10 p-3 text-slate-200">
                  <div className="font-plex-mono text-[10px] font-bold text-emerald-400 mb-1">
                    ✓ VERBATIM QUOTE LOCK · PAGE {doc.quotes[0].page} ({doc.quotes[0].paragraph})
                  </div>
                  <p className="italic font-space text-xs text-white">“{doc.quotes[0].text}”</p>
                </div>
              </div>
            </div>

            <div className="mt-5 grid grid-cols-3 gap-3 pt-4 border-t border-white/10 font-plex-mono text-xs">
              <div className="rounded bg-white/[0.03] p-3">
                <div className="text-[10px] text-slate-400">WORD REDUCTION</div>
                <div className="text-lg font-bold text-[#FFB000]">-89.4%</div>
              </div>
              <div className="rounded bg-white/[0.03] p-3">
                <div className="text-[10px] text-slate-400">HINTS INJECTED</div>
                <div className="text-lg font-bold text-[#00F0FF]">{doc.hints.length} Nodes</div>
              </div>
              <div className="rounded bg-white/[0.03] p-3">
                <div className="text-[10px] text-slate-400">EXACT CITATIONS</div>
                <div className="text-lg font-bold text-emerald-400">{doc.quotes.length} Locked</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="telemetry-matrix" className="mx-auto max-w-7xl px-4 py-12 sm:px-8">
        <div className="rounded-xl border border-white/15 bg-[#0D1117] p-6 sm:p-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10 pb-6">
            <div>
              <div className="font-plex-mono text-xs text-[#00F0FF] uppercase">
                // MULTI-CHANNEL EXTRACTION MATRIX
              </div>
              <h2 className="mt-1 text-2xl sm:text-4xl font-bold text-white">
                Inspect Every Distilled Channel of <span className="text-[#FFB000]">{doc.domain}</span>
              </h2>
            </div>

            <div className="flex flex-wrap gap-1.5 font-plex-mono text-xs">
              {(
                [
                  { id: "all", label: "ALL CHANNELS" },
                  { id: "summary", label: "01. SUMMARY" },
                  { id: "hints", label: "02. HINTS" },
                  { id: "quotes", label: "03. QUOTES" },
                  { id: "insights", label: "04. INSIGHTS" }
                ] as const
              ).map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className={`rounded px-3 py-1.5 transition cursor-pointer ${
                    activeTab === tab.id
                      ? "bg-[#FFB000] text-[#07090D] font-bold"
                      : "bg-white/5 text-slate-300 hover:bg-white/10"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-6">
            {(activeTab === "all" || activeTab === "summary") && (
              <div className={`${activeTab === "summary" ? "lg:col-span-12" : "lg:col-span-6"} rounded-lg border border-[#FFB000]/30 bg-[#07090D] p-6`}>
                <div className="flex items-center justify-between font-plex-mono text-xs text-[#FFB000] mb-4">
                  <span className="flex items-center gap-2 font-bold">
                    <Terminal className="h-4 w-4" />
                    CH_01 // EXECUTIVE & GOLDEN SYNTHESIS
                  </span>
                  <span>RATIO {doc.signalRatio}</span>
                </div>
                <p className="text-lg leading-relaxed text-white font-medium">
                  {doc.summariesByRatio[ratioKey]}
                </p>
                <div className="mt-6 space-y-2.5 border-t border-white/10 pt-4">
                  <div className="font-plex-mono text-[11px] uppercase text-slate-400">
                    Verified High-Signal Vectors:
                  </div>
                  {doc.coreTakeaways.map((item, i) => (
                    <div key={i} className="flex items-start gap-3 text-sm text-slate-300">
                      <span className="font-plex-mono text-xs text-[#FFB000] font-bold">
                        [0{i + 1}]
                      </span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {(activeTab === "all" || activeTab === "hints") && (
              <div className={`${activeTab === "hints" ? "lg:col-span-12" : "lg:col-span-6"} rounded-lg border border-[#00F0FF]/30 bg-[#07090D] p-6`}>
                <div className="flex items-center justify-between font-plex-mono text-xs text-[#00F0FF] mb-4">
                  <span className="flex items-center gap-2 font-bold">
                    <Lightbulb className="h-4 w-4" />
                    CH_02 // COGNITIVE BOTTLENECK HINTS
                  </span>
                  <span>PRE-EMPTIVE DECODER</span>
                </div>
                <div className="space-y-4">
                  {doc.hints.map((hint) => (
                    <div key={hint.id} className="rounded border border-white/10 bg-white/[0.02] p-4">
                      <div className="flex items-center justify-between font-plex-mono text-[11px]">
                        <span className="text-[#00F0FF] font-bold">
                          [{hint.category.toUpperCase()}] · {hint.term}
                        </span>
                        <span className="text-slate-400">PAGE {hint.page}</span>
                      </div>
                      <p className="mt-2 text-sm text-slate-300 leading-relaxed">
                        {hint.explanation}
                      </p>
                      <div className="mt-2 font-plex-mono text-[11px] text-emerald-400">
                        ↳ Unlocks: {hint.unlocksSection}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {(activeTab === "all" || activeTab === "quotes") && (
              <div className={`${activeTab === "quotes" ? "lg:col-span-12" : "lg:col-span-6"} rounded-lg border border-emerald-500/30 bg-[#07090D] p-6`}>
                <div className="flex items-center justify-between font-plex-mono text-xs text-emerald-400 mb-4">
                  <span className="flex items-center gap-2 font-bold">
                    <Quote className="h-4 w-4" />
                    CH_03 // VERBATIM SOURCE ANCHORS
                  </span>
                  <span>SHA-256 PAGE VERIFIED</span>
                </div>
                <div className="space-y-4">
                  {doc.quotes.map((q) => (
                    <div key={q.id} className="rounded border border-emerald-500/20 bg-emerald-500/[0.03] p-4">
                      <div className="flex items-center justify-between font-plex-mono text-[11px] text-emerald-400">
                        <span>PAGE {q.page} · SECTION {q.paragraph}</span>
                        <span>CONFIDENCE {q.relevanceScore}%</span>
                      </div>
                      <blockquote className="mt-2 text-base font-medium text-white italic">
                        “{q.text}”
                      </blockquote>
                      <p className="mt-2 text-xs text-slate-400">
                        <strong className="text-slate-200">Telemetry Note:</strong> {q.significance}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {(activeTab === "all" || activeTab === "insights") && (
              <div className={`${activeTab === "insights" ? "lg:col-span-12" : "lg:col-span-6"} rounded-lg border border-purple-400/30 bg-[#07090D] p-6`}>
                <div className="flex items-center justify-between font-plex-mono text-xs text-purple-300 mb-4">
                  <span className="flex items-center gap-2 font-bold">
                    <Sparkles className="h-4 w-4" />
                    CH_04 // SECOND-ORDER INSIGHTS & BURIED FOOTNOTES
                  </span>
                  <span>DEEP SYNTHESIS</span>
                </div>
                <div className="space-y-4">
                  {doc.insights.map((ins) => (
                    <div key={ins.id} className="rounded border border-white/10 bg-white/[0.02] p-4">
                      <div className="flex items-center justify-between font-plex-mono text-[11px]">
                        <span className="text-[#FFB000] font-bold">{ins.tag}</span>
                        <span className="text-slate-400">{ins.densityReduction}</span>
                      </div>
                      <h4 className="mt-1 text-base font-bold text-white">{ins.title}</h4>
                      <p className="mt-1 text-sm text-slate-300">{ins.thesis}</p>
                      <div className="mt-2.5 rounded bg-white/5 px-3 py-1.5 font-plex-mono text-xs text-[#00F0FF]">
                        ACTIONABLE VECTOR → {ins.implication}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <section id="benchmarks" className="mx-auto max-w-7xl px-4 py-12 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              icon: Cpu,
              title: "Semantic Entropy Parser",
              metric: "14.2x Faster",
              desc: "Scores every clause in your PDF for novel causal claims vs. repetitive literature review filler."
            },
            {
              icon: ShieldCheck,
              title: "Zero-Hallucination Quote Lock",
              metric: "100% Verbatim",
              desc: "Every summary node links directly to the exact character offset and page coordinate in your uploaded PDF."
            },
            {
              icon: Zap,
              title: "Proactive Jargon Radar",
              metric: "0 Tab Switches",
              desc: "Detects domain-specific acronyms, equations, and hidden assumptions and injects 2-line margin hints automatically."
            }
          ].map((card, i) => {
            const Icon = card.icon;
            return (
              <div
                key={i}
                className="rounded-xl border border-white/10 bg-[#0D1117] p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex h-10 w-10 items-center justify-center rounded border border-[#00F0FF]/30 bg-[#00F0FF]/10 text-[#00F0FF]">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="font-plex-mono text-sm font-bold text-[#FFB000]">
                      {card.metric}
                    </span>
                  </div>
                  <h3 className="mt-5 text-xl font-bold text-white">{card.title}</h3>
                  <p className="mt-2 text-sm text-slate-400 leading-relaxed">{card.desc}</p>
                </div>
                <div className="mt-6 pt-3 border-t border-white/10 font-plex-mono text-[11px] text-slate-500">
                  TELEMETRY SPEC v4.2 // ACTIVE
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 rounded-xl border border-[#FFB000]/40 bg-gradient-to-r from-[#0D1117] via-[#131924] to-[#0D1117] p-8 sm:p-12 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div>
            <div className="font-plex-mono text-xs text-[#FFB000] uppercase">
              READY FOR HIGH-DENSITY INGESTION
            </div>
            <h3 className="mt-2 text-3xl sm:text-4xl font-bold text-white">
              Pipe your next 100-page PDF into Ratio Reader.
            </h3>
            <p className="mt-2 text-sm text-slate-300 max-w-xl">
              No credit card required. Drop any research paper, financial filing, or technical specification and get instant Summaries, Hints, Quotes, and Insights.
            </p>
          </div>
          <button
            type="button"
            onClick={() => triggerScan((selectedDocIdx + 1) % SAMPLE_PDFS.length)}
            className="inline-flex items-center gap-3 rounded border border-[#FFB000] bg-[#FFB000] px-6 py-4 font-plex-mono text-xs font-bold uppercase text-[#07090D] shadow-[0_0_30px_rgba(255,176,0,0.4)] hover:bg-[#ffc43d] transition cursor-pointer shrink-0"
          >
            <FileCode2 className="h-4 w-4" />
            <span>Launch Telemetry Reader</span>
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </section>

      <footer className="mx-auto max-w-7xl px-4 py-8 sm:px-8 border-t border-white/10 font-plex-mono text-xs text-slate-500 flex flex-col sm:flex-row justify-between gap-4">
        <div>RATIO READER // EDITION 02: SIGNAL-TO-NOISE TELEMETRY LAB</div>
        <div>SNR ENGINE READY · PRESS 1–5 TO SWITCH EDITIONS</div>
      </footer>
    </div>
  );
}
