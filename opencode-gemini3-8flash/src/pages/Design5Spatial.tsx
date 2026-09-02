import { useState } from "react";
import { SAMPLE_DOCUMENTS, type PdfDocument } from "../data/samplePdfs";
import {
  Layers,
  Sparkles,
  Zap,
  Quote,
  Shield,
  Eye,
  ArrowUpRight,
  Share2,
  Bookmark,
  CheckCircle,
  Compass,
  Cpu,
  Fingerprint,
} from "lucide-react";
import confetti from "canvas-confetti";

export function Design5Spatial() {
  const [activeDoc, setActiveDoc] = useState<PdfDocument>(SAMPLE_DOCUMENTS[0]);
  const [activeLayer, setActiveLayer] = useState<"synthesis" | "hints" | "quotes" | "action">("synthesis");
  const [prismTilt, setPrismTilt] = useState<number>(0); // -15 to 15 degrees

  const handleTriggerPrismBurst = () => {
    confetti({
      particleCount: 45,
      spread: 80,
      origin: { y: 0.65 },
      colors: ["#8B5CF6", "#06B6D4", "#F43F5E", "#E2E8F0"],
    });
  };

  return (
    <div className="min-h-screen bg-[#070913] text-slate-100 font-sans selection:bg-violet-500 selection:text-white pb-32 relative overflow-hidden">
      {/* Dynamic Ambient Glowing Orbs */}
      <div className="fixed top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-violet-600/20 blur-[130px] pointer-events-none animate-pulse-slow" />
      <div className="fixed bottom-[-10%] right-[-10%] w-[550px] h-[550px] rounded-full bg-cyan-600/15 blur-[140px] pointer-events-none animate-pulse-slow" />
      <div className="fixed top-[40%] left-[60%] w-[400px] h-[400px] rounded-full bg-fuchsia-600/10 blur-[120px] pointer-events-none" />

      {/* Spatial Glass Top Bar */}
      <header className="border-b border-white/[0.08] bg-[#0A0D1F]/60 backdrop-blur-2xl sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 py-3.5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-violet-600 via-fuchsia-500 to-cyan-400 p-[1px] shadow-lg shadow-violet-500/20">
              <div className="w-full h-full bg-[#0B0F24] rounded-[11px] flex items-center justify-center">
                <Layers className="w-4 h-4 text-cyan-300" />
              </div>
            </div>
            <div>
              <span className="font-semibold text-sm tracking-tight text-white flex items-center gap-1.5">
                Ratio Prism
                <span className="text-[10px] font-mono px-1.5 py-0.5 rounded-full bg-violet-500/20 text-violet-300 border border-violet-500/30">
                  SPATIAL 5.0
                </span>
              </span>
            </div>
          </div>

          <div className="flex items-center gap-4 text-xs">
            <span className="text-slate-400 hidden sm:inline">Spatial Document Intelligence</span>
            <button
              onClick={handleTriggerPrismBurst}
              className="px-4 py-1.5 rounded-xl bg-gradient-to-r from-violet-600 to-cyan-600 hover:from-violet-500 hover:to-cyan-500 text-white font-medium shadow-lg shadow-violet-600/30 transition-all cursor-pointer flex items-center gap-1.5"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Launch Studio</span>
            </button>
          </div>
        </div>
      </header>

      {/* Spatial Hero Section */}
      <section className="max-w-6xl mx-auto px-6 pt-16 pb-10 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.05] border border-white/[0.1] backdrop-blur-xl text-xs text-violet-300 mb-6 shadow-inner">
          <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
          <span>Multi-Dimensional PDF Synthesis</span>
        </div>

        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1] mb-6">
          The Spatial Prism <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-fuchsia-300 to-cyan-400">
            For The Written Word.
          </span>
        </h1>

        <p className="max-w-2xl mx-auto text-base sm:text-xl text-slate-300 leading-relaxed font-light">
          Drop any monolithic PDF into the Ratio Prism. Watch flat pages refract into four living, interconnected cognitive dimensions.
        </p>

        {/* Document Selection Glass Pills */}
        <div className="mt-8 flex flex-wrap justify-center items-center gap-2.5">
          {SAMPLE_DOCUMENTS.map((doc) => (
            <button
              key={doc.id}
              onClick={() => setActiveDoc(doc)}
              className={`px-4 py-2 rounded-2xl text-xs transition-all backdrop-blur-xl border ${
                activeDoc.id === doc.id
                  ? "bg-violet-600/30 border-violet-400 text-white shadow-[0_0_20px_rgba(139,92,246,0.3)] font-semibold"
                  : "bg-white/[0.04] border-white/[0.08] text-slate-400 hover:text-white hover:bg-white/[0.08]"
              }`}
            >
              {doc.title.split("(")[0]}
            </button>
          ))}
        </div>
      </section>

      {/* The 4-Layer Document Prism Explorer */}
      <section className="max-w-6xl mx-auto px-6 py-6 relative z-10">
        {/* Layer Selector Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6 p-2 rounded-2xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-2xl">
          <div className="flex flex-wrap items-center gap-2">
            {[
              { id: "synthesis", label: "01 / Synthesis Layer", icon: Cpu, color: "text-violet-400" },
              { id: "hints", label: "02 / Cognitive Hints", icon: Shield, color: "text-amber-400" },
              { id: "quotes", label: "03 / Crystal Citations", icon: Quote, color: "text-cyan-400" },
              { id: "action", label: "04 / Action Matrix", icon: Zap, color: "text-fuchsia-400" },
            ].map((layer) => {
              const Icon = layer.icon;
              const isActive = activeLayer === layer.id;
              return (
                <button
                  key={layer.id}
                  onClick={() => setActiveLayer(layer.id as any)}
                  className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs transition-all ${
                    isActive
                      ? "bg-white/[0.12] text-white font-medium border border-white/[0.15] shadow-lg shadow-black/40"
                      : "text-slate-400 hover:text-white hover:bg-white/[0.04]"
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${layer.color}`} />
                  <span>{layer.label}</span>
                </button>
              );
            })}
          </div>

          <div className="flex items-center gap-3 px-3 text-xs text-slate-400">
            <span className="text-[11px] font-mono">Prism Compression:</span>
            <span className="text-cyan-400 font-bold">{activeDoc.compressionPercent}%</span>
          </div>
        </div>

        {/* Main Spatial Hologram Card */}
        <div 
          className="rounded-3xl border border-white/[0.12] bg-gradient-to-b from-white/[0.07] to-white/[0.02] backdrop-blur-3xl p-6 sm:p-10 shadow-2xl shadow-black/80 relative transition-transform duration-300"
          style={{
            transform: `perspective(1000px) rotateX(${prismTilt * 0.3}deg)`,
          }}
        >
          {/* Subtle Top Gradient Line */}
          <div className="absolute top-0 left-10 right-10 h-[1px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-50" />

          {/* Document Header in Glass */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-white/[0.08]">
            <div>
              <span className="text-[11px] font-mono tracking-wider uppercase text-cyan-400">
                {activeDoc.category}
              </span>
              <h2 className="text-2xl sm:text-3xl font-semibold text-white mt-1">
                {activeDoc.title}
              </h2>
              <p className="text-xs text-slate-400 mt-1">{activeDoc.author}</p>
            </div>

            <div className="flex items-center gap-3 text-xs">
              <div className="px-3 py-2 rounded-xl bg-white/[0.05] border border-white/[0.1]">
                <span className="block text-[10px] text-slate-400 font-mono">Original</span>
                <span className="font-semibold text-white">{activeDoc.originalPages} pages ({activeDoc.readTimeOriginal})</span>
              </div>
              <div className="px-3 py-2 rounded-xl bg-violet-600/20 border border-violet-500/30">
                <span className="block text-[10px] text-violet-300 font-mono">Ratio Distilled</span>
                <span className="font-semibold text-cyan-300">{activeDoc.readTimeRatio}</span>
              </div>
            </div>
          </div>

          {/* Dynamic Layer Content Display */}
          <div className="py-8">
            {activeLayer === "synthesis" && (
              <div className="space-y-6">
                <div>
                  <span className="text-xs font-mono uppercase tracking-widest text-violet-400 block mb-2">
                    Executive Knowledge Core
                  </span>
                  <p className="text-lg sm:text-xl text-slate-100 font-light leading-relaxed">
                    {activeDoc.executiveSummary}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/[0.08]">
                  <span className="text-xs font-mono uppercase tracking-widest text-slate-400 block mb-2">
                    Sub-Surface Cognitive Foundations
                  </span>
                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-light">
                    {activeDoc.deepSummary}
                  </p>
                </div>
              </div>
            )}

            {activeLayer === "hints" && (
              <div className="space-y-4">
                <div className="text-xs font-mono uppercase tracking-widest text-amber-400 mb-2">
                  Contextual Traps, Misconceptions & Blindspot Radars
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {activeDoc.hints.map((hint, idx) => (
                    <div
                      key={idx}
                      className="p-5 rounded-2xl bg-white/[0.04] border border-white/[0.08] hover:border-amber-400/40 transition-all space-y-2"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-amber-400/10 text-amber-300 border border-amber-400/20">
                          {hint.tag}
                        </span>
                        <span className="text-[11px] font-mono text-slate-500">Page {hint.page}</span>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">{hint.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeLayer === "quotes" && (
              <div className="space-y-4">
                <div className="text-xs font-mono uppercase tracking-widest text-cyan-400 mb-2">
                  Crystalline Verbatim Citations (Exact Page Proofs)
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {activeDoc.quotes.map((q, idx) => (
                    <div
                      key={idx}
                      className="p-6 rounded-2xl bg-white/[0.04] border border-cyan-400/20 hover:border-cyan-400/50 transition-all space-y-3 relative group"
                    >
                      <p className="text-base text-slate-100 italic leading-relaxed font-light">
                        "{q.quote}"
                      </p>
                      <div className="flex items-center justify-between text-xs text-slate-400 pt-2 border-t border-white/[0.06]">
                        <span className="text-cyan-300 font-mono">Page {q.page} // {q.speakerOrContext}</span>
                        <span className="text-[11px] italic">{q.significance}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeLayer === "action" && (
              <div className="space-y-4">
                <div className="text-xs font-mono uppercase tracking-widest text-fuchsia-400 mb-2">
                  Actionable Matrix & Decision Frameworks
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {activeDoc.keyInsights.map((ins, idx) => (
                    <div
                      key={idx}
                      className="p-5 rounded-2xl bg-white/[0.04] border border-fuchsia-400/20 hover:border-fuchsia-400/50 transition-all space-y-2"
                    >
                      <h4 className="font-semibold text-white text-base">{ins.headline}</h4>
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{ins.takeaway}</p>
                      <div className="text-xs font-mono text-fuchsia-300 bg-fuchsia-500/10 p-2.5 rounded-xl border border-fuchsia-500/20">
                        <strong>LEVER:</strong> {ins.practicalApplication}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Spatial Bottom Ribbon */}
          <div className="pt-6 border-t border-white/[0.08] flex flex-wrap items-center justify-between text-xs text-slate-400">
            <div className="flex items-center gap-2">
              <Fingerprint className="w-4 h-4 text-cyan-400" />
              <span className="font-mono">CRYPTO-ANCHORED TO ORIGINAL FOLIO VECTORS</span>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={handleTriggerPrismBurst}
                className="hover:text-white transition-colors flex items-center gap-1"
              >
                <span>Export to Obsidian / Notion</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Spatial Feature Grid */}
      <section className="max-w-6xl mx-auto px-6 py-16 relative z-10">
        <div className="text-center max-w-xl mx-auto mb-10 space-y-2">
          <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">
            SPATIAL CAPABILITIES
          </span>
          <h3 className="text-2xl sm:text-3xl font-bold text-white">
            Designed for high-velocity researchers and leaders
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-xl space-y-3">
            <div className="w-10 h-10 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-violet-400">
              <Cpu className="w-5 h-5" />
            </div>
            <h4 className="text-lg font-semibold text-white">Zero Semantic Loss</h4>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Unlike ordinary summaries that flatten arguments, Ratio isolates the mathematical logic and causal chain.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-xl space-y-3">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
              <Quote className="w-5 h-5" />
            </div>
            <h4 className="text-lg font-semibold text-white">Crystalline Citations</h4>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Every critical thesis point carries its exact page number and verbatim author quote for effortless citation.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-xl space-y-3">
            <div className="w-10 h-10 rounded-xl bg-fuchsia-500/10 border border-fuchsia-500/20 flex items-center justify-center text-fuchsia-400">
              <Shield className="w-5 h-5" />
            </div>
            <h4 className="text-lg font-semibold text-white">Contextual Blindspot Radar</h4>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Detects counter-intuitive traps, subtle nuances, and background mental models so you avoid common misconceptions.
            </p>
          </div>
        </div>
      </section>

      {/* Spatial CTA */}
      <section className="max-w-4xl mx-auto px-6 py-12 text-center relative z-10">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-violet-900/40 via-purple-900/30 to-cyan-900/40 border border-white/[0.15] backdrop-blur-2xl space-y-6 shadow-2xl">
          <h3 className="text-3xl sm:text-4xl font-bold text-white">
            Transform Your Reading Speed Today.
          </h3>
          <p className="text-sm sm:text-base text-slate-300 max-w-lg mx-auto">
            Experience the future of document digestion. Free for research papers, books, and reports.
          </p>

          <button
            onClick={handleTriggerPrismBurst}
            className="px-8 py-3.5 rounded-2xl bg-gradient-to-r from-violet-500 to-cyan-500 hover:from-violet-400 hover:to-cyan-400 text-white font-semibold text-sm shadow-xl shadow-cyan-500/20 transition-all cursor-pointer inline-flex items-center gap-2"
          >
            <span>UPLOAD PDF TO PRISM</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="max-w-7xl mx-auto px-6 pt-10 border-t border-white/[0.08] text-xs text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-3 relative z-10">
        <span>RATIO READER • DESIGN 5: SPATIAL GLASS PRISM</span>
        <span>Living Spatial Intelligence</span>
      </footer>
    </div>
  );
}
