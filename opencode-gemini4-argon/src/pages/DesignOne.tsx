import { useState } from "react";
import { SAMPLE_PDFS } from "../data/samplePdfs";
import {
  FileText,
  Sparkles,
  Quote,
  Lightbulb,
  Compass,
  ArrowUpRight,
  Upload,
  CheckCircle2,
  BookOpen,
  Scale,
  Layers,
  Eye
} from "lucide-react";

type RatioMode = "executive" | "golden" | "deep";

export function DesignOne() {
  const [selectedPdfIndex, setSelectedPdfIndex] = useState(0);
  const [ratioMode, setRatioMode] = useState<RatioMode>("golden");
  const [activeHintId, setActiveHintId] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState(false);

  const doc = SAMPLE_PDFS[selectedPdfIndex];

  const handleSimulateUpload = () => {
    setIsUploading(true);
    setUploadSuccess(false);
    setTimeout(() => {
      setIsUploading(false);
      setUploadSuccess(true);
      setSelectedPdfIndex((prev) => (prev + 1) % SAMPLE_PDFS.length);
    }, 950);
  };

  return (
    <div className="min-h-screen bg-[#F6F1E7] text-[#151311] font-jakarta selection:bg-[#D9381E] selection:text-white editorial-grid">
      <div className="border-b border-[#151311]/15 bg-[#EFE8DA] px-4 py-1.5 font-jetbrains text-[11px] tracking-wider uppercase text-[#151311]/70">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-1.5 font-semibold text-[#D9381E]">
              <span className="h-2 w-2 rounded-full bg-[#D9381E]" />
              EDITION I · THE GOLDEN CODEX
            </span>
            <span className="hidden md:inline text-[#151311]/40">|</span>
            <span className="hidden md:inline">PROPORTION CONSTANT φ = 1.6180339887</span>
          </div>
          <div className="flex items-center gap-6">
            <span className="hidden sm:inline">SIGNAL-TO-NOISE ENGINE v4.2</span>
            <span className="text-[#151311] font-semibold">FOLIO 01 / 05</span>
          </div>
        </div>
      </div>

      <header className="sticky top-0 z-30 border-b border-[#151311]/20 bg-[#F6F1E7]/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-8">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center border border-[#151311] bg-[#151311] text-[#F6F1E7] font-instrument text-2xl italic">
              R:1
            </div>
            <div>
              <div className="font-instrument text-2xl leading-none tracking-tight">
                Ratio Reader
              </div>
              <div className="font-jetbrains text-[10px] tracking-widest uppercase text-[#151311]/60">
                Epistemic Proportion Instrument
              </div>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8 font-jetbrains text-xs uppercase tracking-wider">
            <a href="#codex-workbench" className="hover:text-[#D9381E] transition">
              I. Live Apparatus
            </a>
            <a href="#four-pillars" className="hover:text-[#D9381E] transition">
              II. Four Pillars
            </a>
            <a href="#anatomy" className="hover:text-[#D9381E] transition">
              III. Page Anatomy
            </a>
            <a href="#editions" className="hover:text-[#D9381E] transition">
              IV. Patronage
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={handleSimulateUpload}
              className="group relative inline-flex items-center gap-2 border border-[#151311] bg-[#D9381E] px-4 py-2 font-jetbrains text-xs font-semibold uppercase tracking-wider text-white shadow-[3px_3px_0px_#151311] transition hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0px_#151311] cursor-pointer"
            >
              <Upload className="h-3.5 w-3.5" />
              <span>{isUploading ? "Distilling PDF..." : "Upload PDF"}</span>
            </button>
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-7xl border-x border-b border-[#151311]/20">
        <div className="grid grid-cols-1 lg:grid-cols-12">
          <div className="lg:col-span-7 border-b lg:border-b-0 lg:border-r border-[#151311]/20 p-6 sm:p-12 lg:p-16 flex flex-col justify-between bg-[#F6F1E7]">
            <div>
              <div className="mb-6 inline-flex items-center gap-2 border border-[#151311]/30 bg-[#EFE8DA] px-3 py-1 font-jetbrains text-xs">
                <Scale className="h-3.5 w-3.5 text-[#D9381E]" />
                <span>THE LAW OF LITERARY PROPORTION · 14% HOLDS 78% OF MEANING</span>
              </div>

              <h1 className="font-instrument text-5xl sm:text-7xl lg:text-[82px] leading-[0.94] tracking-tight text-[#151311]">
                Read the <span className="italic text-[#D9381E]">golden ratio</span> of every PDF, never the filler.
              </h1>

              <p className="mt-6 max-w-xl text-base sm:text-lg leading-relaxed text-[#151311]/80">
                Dense monographs, 100-page macro reports, and research papers bury their breakthroughs under walls of gray prose.{" "}
                <strong className="font-semibold text-[#151311]">Ratio Reader</strong> reconstructs any PDF into a proportioned scholarly spread: a razor-sharp{" "}
                <span className="underline decoration-[#D9381E] decoration-2 underline-offset-4">summary</span>, proactive{" "}
                <span className="underline decoration-[#D9381E] decoration-2 underline-offset-4">margin hints</span>,{" "}
                <span className="underline decoration-[#D9381E] decoration-2 underline-offset-4">verbatim quotes</span>, and{" "}
                <span className="underline decoration-[#D9381E] decoration-2 underline-offset-4">second-order insights</span>.
              </p>
            </div>

            <div className="mt-10 pt-8 border-t border-[#151311]/15">
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="#codex-workbench"
                  className="inline-flex items-center gap-3 border border-[#151311] bg-[#151311] px-6 py-3.5 font-jetbrains text-xs font-semibold uppercase tracking-widest text-[#F6F1E7] shadow-[4px_4px_0px_#D9381E] transition hover:bg-[#D9381E] hover:shadow-[4px_4px_0px_#151311]"
                >
                  <span>Inspect Live Codex</span>
                  <ArrowUpRight className="h-4 w-4" />
                </a>
                <button
                  type="button"
                  onClick={handleSimulateUpload}
                  className="inline-flex items-center gap-2 border border-[#151311] bg-[#F6F1E7] px-5 py-3.5 font-jetbrains text-xs font-semibold uppercase tracking-wider text-[#151311] hover:bg-[#EFE8DA] transition cursor-pointer"
                >
                  <FileText className="h-4 w-4 text-[#D9381E]" />
                  <span>Try Sample PDF ({doc.pages} pages → {doc.ratioReadTime})</span>
                </button>
              </div>

              <div className="mt-6 grid grid-cols-3 gap-4 pt-4 font-jetbrains text-xs">
                <div>
                  <div className="text-[10px] uppercase text-[#151311]/55">Compression</div>
                  <div className="text-xl font-bold text-[#151311]">1 : 14.2</div>
                </div>
                <div className="border-l border-[#151311]/15 pl-4">
                  <div className="text-[10px] uppercase text-[#151311]/55">30-Day Recall</div>
                  <div className="text-xl font-bold text-[#D9381E]">+260%</div>
                </div>
                <div className="border-l border-[#151311]/15 pl-4">
                  <div className="text-[10px] uppercase text-[#151311]/55">Citation Fidelity</div>
                  <div className="text-xl font-bold text-[#151311]">100% Verbatim</div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col justify-between bg-[#EFE8DA]">
            <div className="relative border-b border-[#151311]/20 p-6 sm:p-8 overflow-hidden">
              <div className="flex items-center justify-between font-jetbrains text-[11px] uppercase tracking-wider text-[#151311]/60 mb-4">
                <span>FIG 1.1 — GOLDEN DECOMPOSITION</span>
                <span className="text-[#D9381E] font-bold">φ HARMONIC PARSER</span>
              </div>

              <div className="relative mx-auto aspect-[1.618/1] w-full border border-[#151311] bg-[#F6F1E7] shadow-[4px_4px_0px_#151311]">
                <svg
                  viewBox="0 0 618 382"
                  className="h-full w-full"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line x1="382" y1="0" x2="382" y2="382" stroke="#151311" strokeWidth="1.5" />
                  <line x1="382" y1="236" x2="618" y2="236" stroke="#151311" strokeWidth="1.5" />
                  <line x1="472" y1="236" x2="472" y2="382" stroke="#151311" strokeWidth="1.5" />
                  <line x1="382" y1="292" x2="472" y2="292" stroke="#151311" strokeWidth="1.5" />

                  <rect x="0" y="0" width="382" height="382" fill="#F6F1E7" />
                  <rect x="382" y="0" width="236" height="236" fill="#EFE8DA" />
                  <rect x="472" y="236" width="146" height="146" fill="#D9381E" fillOpacity="0.12" />
                  <rect x="382" y="292" width="90" height="90" fill="#151311" fillOpacity="0.06" />

                  <path
                    d="M 0 382 A 382 382 0 0 1 382 0 A 236 236 0 0 1 618 236 A 146 146 0 0 1 472 382 A 90 90 0 0 1 382 292 A 56 56 0 0 1 438 236"
                    stroke="#D9381E"
                    strokeWidth="2.5"
                    strokeDasharray="6 4"
                  />

                  <text x="24" y="42" fill="#151311" className="font-jetbrains text-[12px] font-bold">
                    01. DISTILLED SUMMARY (61.8%)
                  </text>
                  <text x="24" y="80" fill="#151311" className="font-instrument text-[26px] italic">
                    “78% of novelty lives in
                  </text>
                  <text x="24" y="112" fill="#151311" className="font-instrument text-[26px] italic">
                    14% of paragraphs.”
                  </text>
                  <text x="24" y="354" fill="#151311" fillOpacity="0.55" className="font-jetbrains text-[11px]">
                    RAW PDF: 64 PAGES → 9 MIN READ
                  </text>

                  <text x="398" y="34" fill="#151311" className="font-jetbrains text-[11px] font-bold">
                    02. VERBATIM QUOTES
                  </text>
                  <text x="398" y="62" fill="#D9381E" className="font-jetbrains text-[11px]">
                    §2.3 · Page 14 Anchor
                  </text>
                  <text x="398" y="86" fill="#151311" className="font-jakarta text-[11px]">
                    Exact syntax preserved
                  </text>
                  <text x="398" y="104" fill="#151311" className="font-jakarta text-[11px]">
                    with zero hallucination.
                  </text>

                  <text x="482" y="264" fill="#D9381E" className="font-jetbrains text-[10px] font-bold">
                    03. HINTS
                  </text>
                  <text x="482" y="284" fill="#151311" className="font-jakarta text-[10px]">
                    Jargon decoded
                  </text>
                  <text x="482" y="300" fill="#151311" className="font-jakarta text-[10px]">
                    in-margin.
                  </text>

                  <text x="390" y="325" fill="#151311" className="font-jetbrains text-[9px] font-bold">
                    04. INSIGHT
                  </text>
                  <text x="390" y="342" fill="#151311" className="font-jetbrains text-[9px]">
                    φ Synthesis
                  </text>
                </svg>
              </div>
            </div>

            <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between bg-[#EAE1D0]">
              <div className="flex items-center justify-between font-jetbrains text-[11px] uppercase text-[#151311]/70">
                <span>INGESTION CHAMBER</span>
                <span>PDF / EPUB / ARXIV</span>
              </div>

              <div className="my-4 border-2 border-dashed border-[#151311]/40 bg-[#F6F1E7] p-5 transition hover:border-[#D9381E]">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="font-jetbrains text-xs font-bold uppercase text-[#D9381E]">
                      Active Folio Loaded
                    </div>
                    <div className="mt-1 font-instrument text-2xl leading-snug text-[#151311]">
                      {doc.title}
                    </div>
                    <div className="mt-1 font-jetbrains text-xs text-[#151311]/60">
                      {doc.filename} · {doc.pages} pages · {doc.wordCount}
                    </div>
                  </div>
                  <span className="shrink-0 border border-[#151311] bg-[#151311] px-2.5 py-1 font-jetbrains text-xs font-bold text-[#F6F1E7]">
                    {doc.signalRatio}
                  </span>
                </div>

                <div className="mt-4 flex flex-wrap items-center gap-2 pt-3 border-t border-[#151311]/10">
                  {SAMPLE_PDFS.map((item, idx) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setSelectedPdfIndex(idx)}
                      className={`px-2.5 py-1 font-jetbrains text-[11px] border transition cursor-pointer ${
                        selectedPdfIndex === idx
                          ? "border-[#151311] bg-[#D9381E] text-white font-semibold"
                          : "border-[#151311]/25 bg-[#EFE8DA] text-[#151311]/80 hover:border-[#151311]"
                      }`}
                    >
                      Folio 0{idx + 1}: {item.domain}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between font-jetbrains text-xs text-[#151311]/70">
                <span>Raw Reading Time: <s className="text-[#151311]/40">{doc.rawReadTime}</s></span>
                <span className="font-bold text-[#D9381E]">Ratio Time: {doc.ratioReadTime}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="codex-workbench" className="mx-auto max-w-7xl border-x border-b border-[#151311]/20 bg-[#F6F1E7]">
        <div className="border-b border-[#151311]/20 bg-[#151311] px-6 py-5 text-[#F6F1E7] sm:px-10">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <div className="flex items-center gap-2 font-jetbrains text-xs uppercase tracking-widest text-[#D9381E]">
                <Compass className="h-4 w-4" />
                <span>INTERACTIVE SCHOLARLY APPARATUS · LIVE SPECIMEN</span>
              </div>
              <h2 className="mt-1 font-instrument text-3xl sm:text-4xl tracking-tight text-[#F6F1E7]">
                {doc.title}
              </h2>
              <p className="font-jetbrains text-xs text-[#F6F1E7]/60 mt-0.5">
                {doc.author} ({doc.year}) — {doc.pages} Pages Distilled into Proportional Layers
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
              <span className="font-jetbrains text-[11px] uppercase tracking-wider text-[#F6F1E7]/60">
                Compression Caliper:
              </span>
              <div className="inline-flex border border-[#F6F1E7]/30 bg-[#1F1C19] p-1">
                {(
                  [
                    { id: "executive", label: "16:1 Executive", sub: "2m" },
                    { id: "golden", label: "1.618:1 Golden", sub: "9m" },
                    { id: "deep", label: "3:1 Deep Study", sub: "15m" }
                  ] as const
                ).map((mode) => (
                  <button
                    key={mode.id}
                    type="button"
                    onClick={() => setRatioMode(mode.id)}
                    className={`px-3 py-1.5 font-jetbrains text-xs transition cursor-pointer ${
                      ratioMode === mode.id
                        ? "bg-[#D9381E] text-white font-semibold"
                        : "text-[#F6F1E7]/70 hover:text-white"
                    }`}
                  >
                    {mode.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {uploadSuccess && (
            <div className="mt-4 flex items-center gap-2 border border-[#D9381E]/50 bg-[#D9381E]/15 px-3 py-2 font-jetbrains text-xs text-[#F6F1E7]">
              <CheckCircle2 className="h-4 w-4 text-[#D9381E]" />
              <span>
                New PDF specimen parsed in 1.4s — extracted {doc.quotes.length} verbatim quotes, {doc.hints.length} margin hints, and {doc.insights.length} core insights.
              </span>
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12">
          <div className="lg:col-span-3 border-b lg:border-b-0 lg:border-r border-[#151311]/20 p-6 bg-[#EFE8DA]/60">
            <div className="flex items-center justify-between border-b border-[#151311]/20 pb-3">
              <div className="flex items-center gap-2 font-jetbrains text-xs font-bold uppercase tracking-wider text-[#151311]">
                <Lightbulb className="h-4 w-4 text-[#D9381E]" />
                <span>Left Margin: Hints</span>
              </div>
              <span className="font-jetbrains text-[10px] text-[#151311]/60">GLOSSA</span>
            </div>

            <p className="mt-3 text-xs leading-relaxed text-[#151311]/70">
              Ratio Reader detects conceptual bottlenecks before you hit them and places concise decoding hints in the margin.
            </p>

            <div className="mt-5 space-y-4">
              {doc.hints.map((hint, idx) => {
                const isSelected = activeHintId === hint.id;
                return (
                  <div
                    key={hint.id}
                    onClick={() => setActiveHintId(isSelected ? null : hint.id)}
                    className={`border p-4 transition cursor-pointer ${
                      isSelected
                        ? "border-[#D9381E] bg-[#F6F1E7] shadow-[3px_3px_0px_#D9381E]"
                        : "border-[#151311]/25 bg-[#F6F1E7] hover:border-[#151311]"
                    }`}
                  >
                    <div className="flex items-center justify-between font-jetbrains text-[10px] uppercase tracking-wider">
                      <span className="text-[#D9381E] font-bold">
                        HINT 0{idx + 1} · {hint.category}
                      </span>
                      <span className="border border-[#151311]/20 px-1.5 py-0.5 text-[#151311]/70">
                        p.{hint.page}
                      </span>
                    </div>
                    <h4 className="mt-2 font-instrument text-xl font-normal text-[#151311]">
                      {hint.term}
                    </h4>
                    <p className="mt-1.5 text-xs leading-relaxed text-[#151311]/80">
                      {hint.explanation}
                    </p>
                    <div className="mt-3 pt-2 border-t border-[#151311]/10 font-jetbrains text-[10px] text-[#151311]/60">
                      Unlocks → {hint.unlocksSection}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="lg:col-span-5 border-b lg:border-b-0 lg:border-r border-[#151311]/20 p-6 sm:p-8 bg-[#F6F1E7]">
            <div className="flex items-center justify-between border-b border-[#151311]/20 pb-3">
              <div className="flex items-center gap-2 font-jetbrains text-xs font-bold uppercase tracking-wider text-[#151311]">
                <BookOpen className="h-4 w-4 text-[#D9381E]" />
                <span>Center Folio: Distilled Summary</span>
              </div>
              <span className="font-jetbrains text-[10px] uppercase bg-[#151311] text-[#F6F1E7] px-2 py-0.5">
                {ratioMode} ratio
              </span>
            </div>

            <div className="mt-6 border-l-4 border-[#D9381E] bg-[#EFE8DA]/70 p-5">
              <div className="font-jetbrains text-[10px] uppercase tracking-widest text-[#D9381E] font-bold">
                SYNOPTIC SYNTHESIS ({doc.pages} PAGES → 1 PARAGRAPH)
              </div>
              <p className="mt-2 font-instrument text-2xl sm:text-[26px] leading-snug text-[#151311]">
                {doc.summariesByRatio[ratioMode]}
              </p>
            </div>

            <div className="mt-8">
              <div className="font-jetbrains text-xs font-bold uppercase tracking-wider text-[#151311]/70">
                Structural Propositions (Ranked by Epistemic Weight)
              </div>
              <div className="mt-4 space-y-3">
                {doc.coreTakeaways.map((point, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3.5 border border-[#151311]/15 bg-[#EFE8DA]/40 p-3.5"
                  >
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center border border-[#151311] bg-[#151311] font-jetbrains text-xs font-bold text-[#F6F1E7]">
                      {index + 1}
                    </span>
                    <p className="text-sm leading-relaxed text-[#151311]/90">{point}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 border border-[#151311]/25 bg-[#EFE8DA] p-5">
              <div className="flex items-center justify-between font-jetbrains text-[10px] uppercase tracking-wider text-[#151311]/60">
                <span>ORIGINAL PDF PASSAGE (HIGH-ENTROPY NODE)</span>
                <span>VERIFIED OCR LAYER</span>
              </div>
              <div className="mt-3 space-y-2.5 font-cormorant text-base italic leading-relaxed text-[#151311]/85">
                {doc.rawExcerpt.map((paragraph, i) => (
                  <p key={i}>“{paragraph}”</p>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 p-6 bg-[#EFE8DA]/60 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b border-[#151311]/20 pb-3">
                <div className="flex items-center gap-2 font-jetbrains text-xs font-bold uppercase tracking-wider text-[#151311]">
                  <Quote className="h-4 w-4 text-[#D9381E]" />
                  <span>Right Margin: Quotes & Insights</span>
                </div>
                <span className="font-jetbrains text-[10px] text-[#151311]/60">VERBATIM</span>
              </div>

              <div className="mt-5 space-y-4">
                {doc.quotes.map((q) => (
                  <div
                    key={q.id}
                    className="border border-[#151311] bg-[#F6F1E7] p-4 shadow-[3px_3px_0px_#151311]"
                  >
                    <div className="flex items-center justify-between font-jetbrains text-[10px] uppercase">
                      <span className="font-bold text-[#D9381E]">
                        PAGE {q.page} · {q.paragraph}
                      </span>
                      <span className="bg-[#151311] text-[#F6F1E7] px-1.5 py-0.5">
                        SIGNAL {q.relevanceScore}%
                      </span>
                    </div>
                    <blockquote className="mt-2 font-instrument text-xl italic leading-snug text-[#151311]">
                      “{q.text}”
                    </blockquote>
                    <p className="mt-2 text-xs text-[#151311]/75 border-t border-[#151311]/15 pt-2">
                      <strong className="font-semibold text-[#151311]">Why it matters:</strong>{" "}
                      {q.significance}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <div className="flex items-center gap-2 font-jetbrains text-xs font-bold uppercase tracking-wider text-[#151311] border-b border-[#151311]/20 pb-2">
                  <Sparkles className="h-4 w-4 text-[#D9381E]" />
                  <span>Distilled Insights & Implications</span>
                </div>
                <div className="mt-4 space-y-3">
                  {doc.insights.map((ins) => (
                    <div
                      key={ins.id}
                      className="border border-[#151311]/25 bg-[#F6F1E7] p-4"
                    >
                      <div className="flex items-center justify-between font-jetbrains text-[10px] uppercase">
                        <span className="text-[#D9381E] font-bold">{ins.tag}</span>
                        <span className="text-[#151311]/60">{ins.densityReduction}</span>
                      </div>
                      <h5 className="mt-1 font-semibold text-sm text-[#151311]">
                        {ins.title}
                      </h5>
                      <p className="mt-1 text-xs text-[#151311]/80 leading-relaxed">
                        {ins.thesis}
                      </p>
                      <div className="mt-2 bg-[#EFE8DA] px-2.5 py-1.5 font-jetbrains text-[11px] text-[#151311]">
                        → Action: {ins.implication}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="four-pillars" className="mx-auto max-w-7xl border-x border-b border-[#151311]/20 bg-[#EFE8DA] px-6 py-16 sm:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#151311]/20 pb-8">
          <div>
            <div className="font-jetbrains text-xs uppercase tracking-widest text-[#D9381E]">
              II. THE QUADRIVIUM OF COMPREHENSION
            </div>
            <h2 className="mt-2 font-instrument text-4xl sm:text-6xl tracking-tight text-[#151311]">
              Why a summary alone is never enough.
            </h2>
          </div>
          <p className="mt-4 md:mt-0 max-w-md text-sm leading-relaxed text-[#151311]/75">
            Generic AI chat tools flatten books into forgettable bullet points. Ratio Reader preserves the intellectual tension of your PDF through four proportional instruments.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              num: "I",
              ratio: "61.8%",
              title: "Multi-Ratio Summaries",
              desc: "Slide seamlessly between a 16:1 Executive Brief, a 1.618:1 Golden Synthesis, or a 3:1 Section-by-Section Deep Dive without losing narrative arc.",
              icon: Layers
            },
            {
              num: "II",
              ratio: "38.2%",
              title: "Proactive Margin Hints",
              desc: "Unfamiliar domain terminology, unstated assumptions, and mathematical prerequisites are decoded in the margin *before* you stall on a paragraph.",
              icon: Lightbulb
            },
            {
              num: "III",
              ratio: "23.6%",
              title: "Verbatim Quote Anchors",
              desc: "Every major claim is tethered to the author's exact syntax, page number, and section—so you can cite with confidence and zero hallucination.",
              icon: Quote
            },
            {
              num: "IV",
              ratio: "14.6%",
              title: "Second-Order Insights",
              desc: "Surfaces buried footnote admissions, methodological caveats, and counter-intuitive implications that linear skimmers miss 90% of the time.",
              icon: Eye
            }
          ].map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.num}
                className="flex flex-col justify-between border border-[#151311] bg-[#F6F1E7] p-6 shadow-[4px_4px_0px_#151311]"
              >
                <div>
                  <div className="flex items-center justify-between font-jetbrains text-xs">
                    <span className="flex h-7 w-7 items-center justify-center bg-[#151311] text-[#F6F1E7] font-bold">
                      {pillar.num}
                    </span>
                    <span className="text-[#D9381E] font-bold">WEIGHT {pillar.ratio}</span>
                  </div>
                  <div className="mt-6 flex h-10 w-10 items-center justify-center border border-[#151311]/20 bg-[#EFE8DA]">
                    <Icon className="h-5 w-5 text-[#D9381E]" />
                  </div>
                  <h3 className="mt-4 font-instrument text-3xl text-[#151311]">
                    {pillar.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#151311]/75">
                    {pillar.desc}
                  </p>
                </div>
                <div className="mt-6 border-t border-[#151311]/15 pt-3 font-jetbrains text-[11px] uppercase text-[#151311]/60">
                  Verified Codex Module →
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section id="anatomy" className="mx-auto max-w-7xl border-x border-b border-[#151311]/20 bg-[#F6F1E7] px-6 py-16 sm:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-5">
            <div className="font-jetbrains text-xs uppercase tracking-widest text-[#D9381E]">
              III. COMPARATIVE ERGONOMICS
            </div>
            <h2 className="mt-2 font-instrument text-4xl sm:text-5xl leading-tight text-[#151311]">
              From typographic walls to harmonic architecture.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-[#151311]/80">
              Standard PDFs were invented in 1993 to emulate laser printers, not human working memory. Ratio Reader liberates the ideas trapped inside static two-column layouts.
            </p>
            <div className="mt-6 space-y-4 font-jetbrains text-xs">
              <div className="border-l-2 border-[#151311]/30 pl-4">
                <div className="font-bold text-[#151311]">WITHOUT RATIO READER</div>
                <div className="text-[#151311]/70 mt-1">
                  135 minutes of linear fatigue, 14 open browser tabs looking up jargon, forgotten arguments by next week.
                </div>
              </div>
              <div className="border-l-2 border-[#D9381E] pl-4">
                <div className="font-bold text-[#D9381E]">WITH RATIO READER</div>
                <div className="text-[#151311]/80 mt-1">
                  9 minutes of synoptic clarity: core thesis, inline conceptual hints, and exportable verbatim quotes.
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="border border-[#151311]/30 bg-[#E5DEC9] p-5 opacity-80">
              <div className="flex items-center justify-between font-jetbrains text-[10px] uppercase text-[#151311]/60 mb-4">
                <span>RAW MONOLITHIC PDF</span>
                <span>18% RETENTION</span>
              </div>
              <div className="space-y-2">
                {Array.from({ length: 14 }).map((_, i) => (
                  <div
                    key={i}
                    className="h-2.5 bg-[#151311]/20"
                    style={{ width: `${i % 4 === 3 ? 68 : 100}%` }}
                  />
                ))}
              </div>
              <div className="my-4 border border-[#151311]/20 p-3 text-[11px] font-jetbrains text-[#151311]/60">
                [Dense undefined theorem on p.34 triggers skimming drift]
              </div>
              <div className="space-y-2">
                {Array.from({ length: 8 }).map((_, i) => (
                  <div key={i} className="h-2.5 bg-[#151311]/20 w-full" />
                ))}
              </div>
            </div>

            <div className="border-2 border-[#151311] bg-[#F6F1E7] p-5 shadow-[6px_6px_0px_#D9381E]">
              <div className="flex items-center justify-between font-jetbrains text-[10px] uppercase text-[#D9381E] font-bold mb-4">
                <span>RATIO CODEX FOLIO</span>
                <span>89% RETENTION</span>
              </div>
              <div className="border border-[#151311] bg-[#EFE8DA] p-3 mb-3">
                <div className="font-jetbrains text-[9px] uppercase text-[#D9381E] font-bold">
                  GOLDEN THESIS (1:14)
                </div>
                <div className="font-instrument text-lg leading-snug mt-0.5">
                  Core proposition isolated with 99% citation confidence.
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2.5 mb-3">
                <div className="border border-[#151311]/30 bg-[#F6F1E7] p-2.5">
                  <div className="font-jetbrains text-[9px] font-bold text-[#151311]">
                    MARGIN HINT
                  </div>
                  <div className="text-[11px] text-[#151311]/75 mt-1">
                    Decodes prerequisite jargon in 2 lines.
                  </div>
                </div>
                <div className="border border-[#D9381E] bg-[#D9381E]/10 p-2.5">
                  <div className="font-jetbrains text-[9px] font-bold text-[#D9381E]">
                    EXACT QUOTE · P.14
                  </div>
                  <div className="text-[11px] italic font-instrument text-[#151311] mt-1">
                    “Verbatim authorial proof...”
                  </div>
                </div>
              </div>
              <div className="border border-[#151311] bg-[#151311] text-[#F6F1E7] p-2.5 font-jetbrains text-[10px]">
                ★ INSIGHT: Footnote 44 reverses headline chart.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="editions" className="mx-auto max-w-7xl border-x border-b border-[#151311]/20 bg-[#151311] text-[#F6F1E7] px-6 py-16 sm:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6">
            <div className="font-jetbrains text-xs uppercase tracking-widest text-[#D9381E]">
              IV. BEGIN YOUR FOLIO
            </div>
            <h2 className="mt-2 font-instrument text-5xl sm:text-6xl leading-[0.98]">
              Reclaim 12 hours of deep reading every week.
            </h2>
            <p className="mt-4 text-sm sm:text-base text-[#F6F1E7]/75 max-w-lg leading-relaxed">
              Upload your first PDF—research paper, legal brief, technical RFC, or 300-page book—and watch Ratio Reader construct its Golden Codex in seconds.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <button
                type="button"
                onClick={handleSimulateUpload}
                className="inline-flex items-center gap-3 bg-[#D9381E] px-6 py-4 font-jetbrains text-xs font-bold uppercase tracking-widest text-white shadow-[4px_4px_0px_#F6F1E7] hover:bg-[#b82d16] transition cursor-pointer"
              >
                <Upload className="h-4 w-4" />
                <span>Upload Your First PDF Free</span>
              </button>
            </div>
          </div>

          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="border border-[#F6F1E7]/25 bg-[#1D1A17] p-6">
              <div className="font-jetbrains text-xs uppercase text-[#F6F1E7]/60">
                READER EDITION
              </div>
              <div className="mt-2 font-instrument text-4xl">$0 <span className="text-lg font-jetbrains text-[#F6F1E7]/50">/ forever</span></div>
              <ul className="mt-6 space-y-2.5 text-xs text-[#F6F1E7]/80 font-jetbrains">
                <li>· 5 PDF Distillations per week</li>
                <li>· Golden Ratio & Executive Summaries</li>
                <li>· Inline Contextual Hints</li>
                <li>· Verbatim Page-Anchored Quotes</li>
              </ul>
            </div>

            <div className="border-2 border-[#D9381E] bg-[#F6F1E7] text-[#151311] p-6 shadow-[6px_6px_0px_#D9381E]">
              <div className="flex justify-between items-center font-jetbrains text-xs uppercase">
                <span className="font-bold text-[#D9381E]">FELLOW & ATELIER</span>
                <span className="bg-[#151311] text-[#F6F1E7] px-2 py-0.5 text-[10px]">UNLIMITED</span>
              </div>
              <div className="mt-2 font-instrument text-4xl">$16 <span className="text-lg font-jetbrains text-[#151311]/50">/ month</span></div>
              <ul className="mt-6 space-y-2.5 text-xs text-[#151311]/85 font-jetbrains">
                <li>· Unlimited 500-page PDF Monographs</li>
                <li>· Cross-Document Quote Synthesis</li>
                <li>· Obsidian, Notion & BibTeX Export</li>
                <li>· Custom Domain Hint Calibration</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <footer className="mx-auto max-w-7xl px-6 py-8 font-jetbrains text-xs text-[#151311]/60 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>RATIO READER · EDITION 01 (THE GOLDEN CODEX) · PRINTED IN DIGITAL VELLUM</div>
        <div>φ = (1 + √5) / 2 · ALL CITATIONS VERBATIM</div>
      </footer>
    </div>
  );
}
