import { useState } from "react";
import { SAMPLE_PDFS } from "../data/samplePdfs";
import {
  Layers,
  Sparkles,
  Quote,
  Lightbulb,
  BookOpen,
  Aperture,
  Maximize2,
  Minimize2,
  ArrowUpRight,
  CheckCircle,
  SlidersHorizontal
} from "lucide-react";

type LayerId = "summary" | "hints" | "quotes" | "insights";

export function DesignFour() {
  const [docIndex, setDocIndex] = useState(0);
  const [isExploded, setIsExploded] = useState(true);
  const [focusedLayer, setFocusedLayer] = useState<LayerId>("summary");
  const [aperture, setAperture] = useState<"executive" | "golden" | "deep">("golden");

  const doc = SAMPLE_PDFS[docIndex];

  const layersMeta: {
    id: LayerId;
    wavelength: string;
    name: string;
    subtitle: string;
    gradient: string;
    border: string;
    badge: string;
    count: string;
  }[] = [
    {
      id: "summary",
      wavelength: "450nm · THESIS",
      name: "Layer 01: Core Summary",
      subtitle: "High-level structural synthesis",
      gradient: "from-indigo-500/15 via-blue-500/10 to-white/90",
      border: "border-indigo-500/40",
      badge: "bg-indigo-600 text-white",
      count: `Ratio ${doc.signalRatio}`
    },
    {
      id: "hints",
      wavelength: "530nm · SCAFFOLD",
      name: "Layer 02: Contextual Hints",
      subtitle: "Pre-emptive jargon & assumption decoder",
      gradient: "from-emerald-500/15 via-teal-500/10 to-white/90",
      border: "border-emerald-500/40",
      badge: "bg-emerald-600 text-white",
      count: `${doc.hints.length} Active Hints`
    },
    {
      id: "quotes",
      wavelength: "590nm · ANCHOR",
      name: "Layer 03: Verbatim Quotes",
      subtitle: "Exact page-indexed authorial syntax",
      gradient: "from-amber-500/15 via-orange-500/10 to-white/90",
      border: "border-amber-500/40",
      badge: "bg-amber-500 text-slate-950",
      count: `${doc.quotes.length} Exact Citations`
    },
    {
      id: "insights",
      wavelength: "660nm · SYNTHESIS",
      name: "Layer 04: Deep Insights",
      subtitle: "Counter-intuitive implications & footnotes",
      gradient: "from-rose-500/15 via-fuchsia-500/10 to-white/90",
      border: "border-rose-500/40",
      badge: "bg-rose-600 text-white",
      count: `${doc.insights.length} Breakthroughs`
    }
  ];

  return (
    <div className="min-h-screen bg-[#F5F7FB] text-[#0F172A] font-outfit selection:bg-indigo-600 selection:text-white relative overflow-x-hidden">
      <div className="pointer-events-none fixed inset-0 overflow-hidden -z-10">
        <div className="absolute -top-32 left-1/4 h-[520px] w-[520px] rounded-full bg-indigo-400/20 blur-[120px]" />
        <div className="absolute top-64 right-10 h-[440px] w-[440px] rounded-full bg-rose-300/20 blur-[110px]" />
        <div className="absolute bottom-10 left-16 h-[400px] w-[400px] rounded-full bg-emerald-300/20 blur-[110px]" />
      </div>

      <header className="sticky top-4 z-30 mx-auto max-w-6xl px-4">
        <div className="flex items-center justify-between rounded-2xl border border-white/80 bg-white/75 px-5 py-3.5 shadow-[0_8px_32px_rgba(15,23,42,0.06)] backdrop-blur-xl">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-600 via-fuchsia-500 to-amber-500 text-white font-bold shadow-md">
              R
            </div>
            <div>
              <div className="text-base font-bold tracking-tight text-slate-900 flex items-center gap-2">
                <span>Ratio Reader</span>
                <span className="rounded-full bg-slate-900/5 px-2 py-0.5 font-jetbrains text-[10px] font-medium text-slate-600">
                  OPTICAL PRISM · 04
                </span>
              </div>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-7 text-xs font-medium text-slate-600">
            <a href="#spatial-stack" className="hover:text-indigo-600 transition">
              Spatial Deconstructor
            </a>
            <a href="#focal-lens" className="hover:text-indigo-600 transition">
              Focal Aperture
            </a>
            <a href="#spectrum-bento" className="hover:text-indigo-600 transition">
              4-Wavelength Spectrum
            </a>
          </nav>

          <button
            type="button"
            onClick={() => setDocIndex((prev) => (prev + 1) % SAMPLE_PDFS.length)}
            className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-4 py-2 text-xs font-semibold text-white shadow-sm hover:bg-indigo-600 transition cursor-pointer"
          >
            <Aperture className="h-3.5 w-3.5" />
            <span>Refract Next PDF</span>
          </button>
        </div>
      </header>

      <section id="spatial-stack" className="mx-auto max-w-7xl px-4 pt-12 pb-16 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-white/80 px-3.5 py-1.5 text-xs font-medium text-indigo-700 shadow-sm backdrop-blur-md">
              <Sparkles className="h-3.5 w-3.5 text-indigo-600" />
              <span>Optical Clarity for Complex Documents</span>
            </div>

            <h1 className="mt-6 text-5xl sm:text-6xl lg:text-[64px] font-bold tracking-tight leading-[1.02] text-slate-950">
              Refract any dense PDF into{" "}
              <span className="font-newsreader italic font-normal bg-gradient-to-r from-indigo-600 via-rose-500 to-amber-500 bg-clip-text text-transparent">
                four crystalline layers.
              </span>
            </h1>

            <p className="mt-5 text-base sm:text-lg leading-relaxed text-slate-600">
              A 100-page PDF feels overwhelming because summary, prerequisite definitions, verbatim proof, and hidden insights are fused into a single opaque slab.{" "}
              <strong className="text-slate-900">Ratio Reader</strong> acts like an optical prism—cleanly separating your document into four transparent planes you can inspect in minutes.
            </p>

            <div className="mt-8 rounded-2xl border border-slate-200/80 bg-white/80 p-5 shadow-sm backdrop-blur-xl">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-4">
                <div>
                  <div className="font-jetbrains text-[10px] uppercase tracking-wider text-slate-400">
                    ACTIVE OPTICAL SPECIMEN
                  </div>
                  <div className="text-sm font-semibold text-slate-900 mt-0.5">
                    {doc.title}
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setIsExploded((prev) => !prev)}
                  className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-semibold text-slate-800 hover:bg-indigo-50 hover:border-indigo-200 transition cursor-pointer"
                >
                  {isExploded ? (
                    <>
                      <Minimize2 className="h-3.5 w-3.5 text-indigo-600" />
                      <span>Collapse Stack</span>
                    </>
                  ) : (
                    <>
                      <Maximize2 className="h-3.5 w-3.5 text-indigo-600" />
                      <span>Explode 4 Layers</span>
                    </>
                  )}
                </button>
              </div>

              <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-2">
                {layersMeta.map((layer) => {
                  const active = focusedLayer === layer.id;
                  return (
                    <button
                      key={layer.id}
                      type="button"
                      onClick={() => setFocusedLayer(layer.id)}
                      className={`rounded-xl border p-2.5 text-left transition cursor-pointer ${
                        active
                          ? "border-slate-900 bg-slate-900 text-white shadow-md"
                          : "border-slate-200/80 bg-white/60 text-slate-700 hover:bg-white"
                      }`}
                    >
                      <div className="font-jetbrains text-[9px] uppercase opacity-75">
                        {layer.wavelength.split(" · ")[1]}
                      </div>
                      <div className="text-xs font-semibold mt-0.5 truncate">
                        {layer.name.replace(/Layer 0\d: /, "")}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="mt-5 flex flex-wrap items-center gap-2">
              <span className="font-jetbrains text-xs text-slate-500 mr-1">Specimen:</span>
              {SAMPLE_PDFS.map((item, idx) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setDocIndex(idx)}
                  className={`rounded-full px-3.5 py-1.5 text-xs font-medium transition cursor-pointer ${
                    docIndex === idx
                      ? "bg-indigo-600 text-white shadow-sm"
                      : "bg-white/80 text-slate-600 border border-slate-200 hover:border-slate-300"
                  }`}
                >
                  {item.domain} ({item.pages}p → {item.ratioReadTime})
                </button>
              ))}
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative rounded-3xl border border-white bg-gradient-to-b from-white/80 to-slate-100/70 p-6 sm:p-10 shadow-[0_24px_60px_rgba(15,23,42,0.08)] backdrop-blur-2xl">
              <div className="flex items-center justify-between font-jetbrains text-[11px] text-slate-500 mb-6">
                <span>SPATIAL REFRACTION STACK ({doc.pages} PAGES)</span>
                <span className="text-indigo-600 font-semibold">CLICK ANY GLASS PLANE TO FOCUS</span>
              </div>

              <div className="space-y-4">
                {layersMeta.map((layer, index) => {
                  const isFocused = focusedLayer === layer.id;
                  const offsetPx = isExploded ? index * 10 : 0;
                  return (
                    <div
                      key={layer.id}
                      onClick={() => setFocusedLayer(layer.id)}
                      style={{
                        transform: isExploded
                          ? `translateX(${offsetPx}px) scale(${isFocused ? 1.02 : 0.98})`
                          : "none"
                      }}
                      className={`rounded-2xl border bg-gradient-to-r ${layer.gradient} p-5 backdrop-blur-xl transition-all duration-300 cursor-pointer ${
                        isFocused
                          ? `${layer.border} ring-2 ring-slate-900/10 shadow-xl`
                          : "border-white/80 opacity-80 hover:opacity-100 shadow-sm"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2.5">
                          <span className={`rounded-lg px-2.5 py-0.5 font-jetbrains text-[10px] font-bold ${layer.badge}`}>
                            {layer.wavelength}
                          </span>
                          <h3 className="text-sm font-bold text-slate-900">{layer.name}</h3>
                        </div>
                        <span className="font-jetbrains text-[11px] font-semibold text-slate-600">
                          {layer.count}
                        </span>
                      </div>

                      {layer.id === "summary" && (
                        <p className="mt-3 text-xs sm:text-sm text-slate-700 leading-relaxed">
                          {doc.summariesByRatio[aperture]}
                        </p>
                      )}
                      {layer.id === "hints" && (
                        <div className="mt-3 flex flex-wrap gap-2">
                          {doc.hints.map((h) => (
                            <span
                              key={h.id}
                              className="rounded-lg border border-emerald-500/30 bg-white/80 px-2.5 py-1 text-xs text-slate-800"
                            >
                              <strong className="text-emerald-700">{h.term}</strong> (p.{h.page}): {h.explanation.slice(0, 68)}...
                            </span>
                          ))}
                        </div>
                      )}
                      {layer.id === "quotes" && (
                        <blockquote className="mt-3 font-newsreader italic text-sm sm:text-base text-slate-900">
                          “{doc.quotes[0].text}” — <span className="font-jetbrains not-italic text-xs text-amber-700">Page {doc.quotes[0].page}</span>
                        </blockquote>
                      )}
                      {layer.id === "insights" && (
                        <div className="mt-3 text-xs sm:text-sm text-slate-800">
                          <strong className="text-rose-700">{doc.insights[0].title}:</strong> {doc.insights[0].thesis}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="focal-lens" className="mx-auto max-w-7xl px-4 py-12 sm:px-8">
        <div className="rounded-3xl border border-white bg-white/85 p-6 sm:p-12 shadow-[0_20px_50px_rgba(15,23,42,0.06)] backdrop-blur-2xl">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 border-b border-slate-200/80 pb-8">
            <div>
              <div className="inline-flex items-center gap-2 font-jetbrains text-xs uppercase tracking-wider text-indigo-600 font-semibold">
                <SlidersHorizontal className="h-4 w-4" />
                <span>OPTICAL FOCAL APERTURE · LIVE INSPECTOR</span>
              </div>
              <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-slate-900">
                Adjust your reading depth on the fly.
              </h2>
            </div>

            <div className="inline-flex rounded-2xl border border-slate-200 bg-slate-100/80 p-1.5">
              {(
                [
                  { id: "executive", label: "f/1.4 Ultra-Brief", time: "2 min" },
                  { id: "golden", label: "f/5.6 Golden Ratio", time: "9 min" },
                  { id: "deep", label: "f/16 Deep Synthesis", time: "15 min" }
                ] as const
              ).map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setAperture(item.id)}
                  className={`rounded-xl px-4 py-2 text-xs font-semibold transition cursor-pointer ${
                    aperture === item.id
                      ? "bg-white text-slate-950 shadow-sm"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  <div>{item.label}</div>
                  <div className="font-jetbrains text-[10px] text-indigo-600">{item.time}</div>
                </button>
              ))}
            </div>
          </div>

          <div id="spectrum-bento" className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div className="lg:col-span-7 rounded-2xl border border-indigo-100 bg-gradient-to-br from-indigo-50/60 via-white to-white p-6 sm:p-8 shadow-sm">
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-2 rounded-full bg-indigo-600/10 px-3 py-1 font-jetbrains text-xs font-bold text-indigo-700">
                  <BookOpen className="h-3.5 w-3.5" />
                  WAVELENGTH 01 · SUMMARY SYNTHESIS
                </span>
                <span className="font-jetbrains text-xs text-slate-400">
                  {doc.pages} pages → {doc.ratioReadTime}
                </span>
              </div>

              <p className="mt-5 font-newsreader text-2xl sm:text-3xl leading-snug text-slate-900">
                {doc.summariesByRatio[aperture]}
              </p>

              <div className="mt-6 space-y-3 border-t border-slate-200/70 pt-5">
                <div className="font-jetbrains text-xs uppercase tracking-wider text-slate-400">
                  Key Propositions Extracted:
                </div>
                {doc.coreTakeaways.map((takeaway, i) => (
                  <div key={i} className="flex items-start gap-3 text-sm text-slate-700">
                    <CheckCircle className="h-4 w-4 text-indigo-600 shrink-0 mt-0.5" />
                    <span>{takeaway}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 rounded-2xl border border-emerald-100 bg-gradient-to-br from-emerald-50/60 via-white to-white p-6 sm:p-8 shadow-sm">
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-2 rounded-full bg-emerald-600/10 px-3 py-1 font-jetbrains text-xs font-bold text-emerald-700">
                  <Lightbulb className="h-3.5 w-3.5" />
                  WAVELENGTH 02 · HINTS
                </span>
                <span className="font-jetbrains text-xs text-emerald-700 font-semibold">
                  Jargon Decoded
                </span>
              </div>

              <div className="mt-5 space-y-4">
                {doc.hints.map((hint) => (
                  <div
                    key={hint.id}
                    className="rounded-xl border border-emerald-200/60 bg-white/90 p-4 shadow-xs"
                  >
                    <div className="flex items-center justify-between font-jetbrains text-[10px] uppercase text-emerald-700 font-bold">
                      <span>{hint.category}</span>
                      <span>Page {hint.page}</span>
                    </div>
                    <h4 className="mt-1 text-base font-bold text-slate-900">{hint.term}</h4>
                    <p className="mt-1 text-xs text-slate-600 leading-relaxed">
                      {hint.explanation}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6 rounded-2xl border border-amber-100 bg-gradient-to-br from-amber-50/60 via-white to-white p-6 sm:p-8 shadow-sm">
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-2 rounded-full bg-amber-500/15 px-3 py-1 font-jetbrains text-xs font-bold text-amber-800">
                  <Quote className="h-3.5 w-3.5" />
                  WAVELENGTH 03 · VERBATIM QUOTES
                </span>
                <span className="font-jetbrains text-xs text-amber-700 font-semibold">
                  100% Exact Syntax
                </span>
              </div>

              <div className="mt-5 space-y-4">
                {doc.quotes.map((q) => (
                  <div
                    key={q.id}
                    className="rounded-xl border border-amber-200/60 bg-white/90 p-4"
                  >
                    <div className="flex items-center justify-between font-jetbrains text-[10px] text-amber-700 font-bold">
                      <span>PAGE {q.page} · {q.paragraph}</span>
                      <span>{q.relevanceScore}% SIGNAL</span>
                    </div>
                    <blockquote className="mt-2 font-newsreader italic text-lg text-slate-900 leading-snug">
                      “{q.text}”
                    </blockquote>
                    <p className="mt-2 text-xs text-slate-500">{q.significance}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6 rounded-2xl border border-rose-100 bg-gradient-to-br from-rose-50/60 via-white to-white p-6 sm:p-8 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-2 rounded-full bg-rose-500/10 px-3 py-1 font-jetbrains text-xs font-bold text-rose-700">
                    <Layers className="h-3.5 w-3.5" />
                    WAVELENGTH 04 · DEEP INSIGHTS
                  </span>
                  <span className="font-jetbrains text-xs text-rose-600 font-semibold">
                    Second-Order Synthesis
                  </span>
                </div>

                <div className="mt-5 space-y-4">
                  {doc.insights.map((ins) => (
                    <div
                      key={ins.id}
                      className="rounded-xl border border-rose-200/60 bg-white/90 p-4"
                    >
                      <div className="flex items-center justify-between font-jetbrains text-[10px] text-rose-600 font-bold uppercase">
                        <span>{ins.tag}</span>
                        <span>{ins.densityReduction}</span>
                      </div>
                      <h4 className="mt-1 text-base font-bold text-slate-900">{ins.title}</h4>
                      <p className="mt-1 text-xs text-slate-600 leading-relaxed">{ins.thesis}</p>
                      <div className="mt-2 rounded-lg bg-rose-50 px-3 py-1.5 font-jetbrains text-[11px] text-rose-800">
                        → {ins.implication}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 rounded-xl bg-slate-900 p-5 text-white flex items-center justify-between">
                <div>
                  <div className="text-sm font-bold">Bring your own PDF into the Prism</div>
                  <div className="text-xs text-slate-400">Instant 4-layer optical refraction</div>
                </div>
                <button
                  type="button"
                  onClick={() => setDocIndex((prev) => (prev + 1) % SAMPLE_PDFS.length)}
                  className="inline-flex items-center gap-1.5 rounded-lg bg-white px-4 py-2 text-xs font-bold text-slate-900 hover:bg-indigo-50 transition cursor-pointer"
                >
                  <span>Try Free</span>
                  <ArrowUpRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="mx-auto max-w-7xl px-4 py-8 sm:px-8 font-jetbrains text-xs text-slate-400 flex flex-col sm:flex-row justify-between gap-4">
        <div>RATIO READER · EDITION 04 (SPATIAL PRISM & OPTICAL REFRACTION)</div>
        <div>4-WAVELENGTH ENGINE · KEYS 1–5 TO SWITCH DESIGNS</div>
      </footer>
    </div>
  );
}
