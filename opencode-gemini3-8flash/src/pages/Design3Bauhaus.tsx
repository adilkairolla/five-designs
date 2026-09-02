import { useState } from "react";
import { SAMPLE_DOCUMENTS, type PdfDocument } from "../data/samplePdfs";
import {
  Sparkles,
  Zap,
  Flame,
  CheckCircle,
  HelpCircle,
  Lightbulb,
  FileCheck2,
  Trash2,
  ThumbsUp,
  ArrowRight,
  Smile,
  ShieldCheck,
  Star,
  Quote,
  Layers,
} from "lucide-react";
import confetti from "canvas-confetti";

export function Design3Bauhaus() {
  const [selectedDoc, setSelectedDoc] = useState<PdfDocument>(SAMPLE_DOCUMENTS[1]); // Thinking Fast and Slow
  const [fluffLevel, setFluffLevel] = useState<number>(15); // 10% to 100%
  const [activeTab, setActiveTab] = useState<"summary" | "hints" | "quotes" | "receipts">("summary");
  const [isCopied, setIsCopied] = useState(false);

  const triggerJuicyConfetti = () => {
    confetti({
      particleCount: 50,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#FDE047", "#2563EB", "#EF4444", "#000000"],
    });
  };

  return (
    <div className="min-h-screen bg-[#FFFDF7] text-black font-sans selection:bg-yellow-300 selection:text-black pb-28 relative">
      {/* Playful Dot Grid Texture */}
      <div 
        className="fixed inset-0 pointer-events-none opacity-15"
        style={{
          backgroundImage: `radial-gradient(#000 1.5px, transparent 1.5px)`,
          backgroundSize: `24px 24px`,
        }}
      />

      {/* Top Banner Ribbon */}
      <header className="border-b-4 border-black bg-yellow-300 sticky top-0 z-40 px-4 sm:px-8 py-3 shadow-[0_4px_0px_#000]">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2 font-display font-extrabold text-lg sm:text-xl tracking-tight">
            <span className="p-1 bg-black text-white rounded-md rotate-[-3deg] inline-block shadow-[2px_2px_0px_#EF4444]">
              RATIO
            </span>
            <span>READER!</span>
            <span className="hidden sm:inline-block text-xs uppercase bg-black text-yellow-300 px-2 py-0.5 rounded font-mono ml-2">
              v3.0 BENTO
            </span>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="#sandbox"
              className="text-xs sm:text-sm font-bold hover:underline hidden sm:inline-block"
            >
              Test The Slicer
            </a>
            <button
              onClick={triggerJuicyConfetti}
              className="px-4 py-1.5 bg-black text-white font-bold text-xs sm:text-sm rounded-lg border-2 border-black hover:bg-white hover:text-black hover:shadow-[3px_3px_0px_#000] transition-all cursor-pointer flex items-center gap-1.5"
            >
              <Zap className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
              <span>Get Ratio Free</span>
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-8 pt-12 pb-10">
        <div className="relative">
          {/* Floating Sticker Badges */}
          <div className="hidden lg:flex absolute -top-4 right-8 rotate-[8deg] z-10 bg-coral-500 bg-[#EF4444] text-white font-display font-black text-sm px-4 py-2 border-3 border-black shadow-[4px_4px_0px_#000] items-center gap-1.5">
            <Flame className="w-4 h-4 fill-yellow-300 text-yellow-300" />
            <span>85% LESS BRAIN ROT</span>
          </div>
          <div className="hidden lg:flex absolute -bottom-6 left-4 rotate-[-6deg] z-10 bg-[#2563EB] text-white font-display font-black text-sm px-4 py-2 border-3 border-black shadow-[4px_4px_0px_#000] items-center gap-1.5">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span>100% UNFLUFFED SIGNAL</span>
          </div>

          {/* Main Hero Card */}
          <div className="bg-white border-4 border-black rounded-3xl p-6 sm:p-12 shadow-[10px_10px_0px_#000] space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-yellow-200 border-2 border-black rounded-full text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-4 h-4 text-black fill-yellow-400" />
              <span>The Antidote to 120-Page Sleep Inducers</span>
            </div>

            <h1 className="text-4xl sm:text-6xl md:text-7xl font-display font-black tracking-tight leading-[1.05] text-black">
              STOP DROWNING IN <br />
              <span className="inline-block bg-yellow-300 px-3 py-0.5 border-3 border-black shadow-[4px_4px_0px_#000] rotate-[-1deg] my-1">
                90-PAGE PDFS.
              </span>
            </h1>

            <p className="max-w-2xl text-base sm:text-xl font-medium text-neutral-800 leading-relaxed">
              Ratio Reader slashes through corporate fluff, drops golden verbatim quotes, and hands you cheat-code marginal hints. 
              Understand dense books and papers in <strong>4 minutes</strong> instead of 4 hours.
            </p>

            {/* Quick Interactive Upload or Try Samples */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={triggerJuicyConfetti}
                className="px-6 py-3.5 bg-[#2563EB] text-white font-display font-black text-base rounded-2xl border-3 border-black shadow-[5px_5px_0px_#000] hover:translate-x-1 hover:translate-y-1 hover:shadow-[2px_2px_0px_#000] transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>DROP YOUR PDF (IT'S FREE)</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <a
                href="#sandbox"
                className="px-6 py-3.5 bg-yellow-300 text-black font-display font-extrabold text-base rounded-2xl border-3 border-black shadow-[5px_5px_0px_#000] hover:translate-x-1 hover:translate-y-1 hover:shadow-[2px_2px_0px_#000] transition-all"
              >
                PLAY WITH LIVE DEMO ↓
              </a>
            </div>

            {/* Trust Badges */}
            <div className="pt-6 border-t-2 border-black/10 flex flex-wrap items-center gap-6 text-xs font-bold text-neutral-700">
              <span className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-emerald-600" /> 140,000+ PDFs Unfluffed
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-emerald-600" /> Exact Page Citations
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-emerald-600" /> Zero Hallucinations
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Bento Sandbox */}
      <section id="sandbox" className="max-w-6xl mx-auto px-4 sm:px-8 py-10">
        <div className="text-center max-w-xl mx-auto mb-8 space-y-2">
          <span className="bg-[#EF4444] text-white font-display font-black text-xs px-3 py-1 rounded-full border-2 border-black uppercase shadow-[2px_2px_0px_#000]">
            TACTILE SANDBOX
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-black tracking-tight">
            Dial Down the Fluff. Dial Up the Brain Power.
          </h2>
          <p className="text-sm font-medium text-neutral-600">
            Slide the tactile dial below to see how Ratio Reader shreds wordy pages into pure crystalline comprehension.
          </p>
        </div>

        {/* Tactile Fluff Slider Card */}
        <div className="bg-yellow-100 border-4 border-black rounded-3xl p-6 sm:p-8 shadow-[8px_8px_0px_#000] mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-neutral-600 block">
                COMPRESSION LEVEL DIAL
              </span>
              <span className="font-display font-black text-xl sm:text-2xl text-black">
                {fluffLevel <= 20 ? "🚀 10:1 PURE BULLETPROOF ESSENCE" : fluffLevel <= 40 ? "⚡ 5:1 CHAPTER SUMMARY" : "📖 2:1 DEEP COMPANION"}
              </span>
            </div>

            {/* Document Picker Pills */}
            <div className="flex flex-wrap gap-2">
              {SAMPLE_DOCUMENTS.map((doc) => (
                <button
                  key={doc.id}
                  onClick={() => setSelectedDoc(doc)}
                  className={`px-3 py-1.5 rounded-xl border-2 border-black font-display font-bold text-xs transition-all ${
                    selectedDoc.id === doc.id
                      ? "bg-black text-white shadow-[2px_2px_0px_#EF4444]"
                      : "bg-white text-black hover:bg-neutral-100"
                  }`}
                >
                  {doc.title.split("(")[0].slice(0, 20)}...
                </button>
              ))}
            </div>
          </div>

          {/* The Big Tactile Slider */}
          <div className="space-y-2">
            <div className="flex justify-between text-xs font-black font-mono">
              <span className="text-[#EF4444]">🔥 10% (CRISP 3-MIN READ)</span>
              <span className="text-neutral-500">25% (DEEP DIVE)</span>
              <span className="text-neutral-700">50% (EXPANDED ANALYSIS)</span>
            </div>
            <input
              type="range"
              min="10"
              max="50"
              step="5"
              value={fluffLevel}
              onChange={(e) => setFluffLevel(Number(e.target.value))}
              className="w-full h-4 bg-white border-2 border-black rounded-lg accent-[#2563EB] cursor-pointer shadow-[2px_2px_0px_#000]"
            />
          </div>
        </div>

        {/* 4-Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Card 1: The Distilled Essence (Red Bento - 7 Cols) */}
          <div className="md:col-span-7 bg-white border-4 border-black rounded-3xl p-6 sm:p-8 shadow-[8px_8px_0px_#000] space-y-4 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-3 border-b-2 border-black">
                <span className="px-3 py-1 bg-yellow-300 border-2 border-black font-display font-black text-xs rounded-lg uppercase shadow-[2px_2px_0px_#000]">
                  THE JUICE (SUMMARY)
                </span>
                <span className="font-mono text-xs font-bold text-neutral-600">
                  Cut from {selectedDoc.originalPages} pages to {selectedDoc.readTimeRatio}
                </span>
              </div>

              <div>
                <h3 className="font-display font-black text-2xl text-black mb-1">
                  {selectedDoc.title}
                </h3>
                <p className="text-xs font-mono text-neutral-500 mb-4">{selectedDoc.author}</p>
                <p className="text-base sm:text-lg font-medium text-neutral-800 leading-relaxed bg-[#FFFDF7] p-4 rounded-xl border-2 border-black/80">
                  {selectedDoc.executiveSummary}
                </p>
              </div>

              {fluffLevel > 20 && (
                <div className="p-4 bg-yellow-50 rounded-xl border-2 border-dashed border-black/40 text-sm font-medium text-neutral-700 leading-relaxed">
                  <span className="font-bold text-black block mb-1">Sub-Surface Breakdown:</span>
                  {selectedDoc.deepSummary}
                </div>
              )}
            </div>

            <div className="pt-4 border-t-2 border-black flex items-center justify-between text-xs font-bold">
              <span className="text-emerald-700 flex items-center gap-1">
                <CheckCircle className="w-4 h-4 fill-emerald-100" /> 100% Salience Verified
              </span>
              <button
                onClick={() => {
                  navigator.clipboard.writeText(selectedDoc.executiveSummary);
                  setIsCopied(true);
                  setTimeout(() => setIsCopied(false), 2000);
                }}
                className="px-3 py-1 bg-neutral-100 border border-black rounded hover:bg-black hover:text-white transition-colors"
              >
                {isCopied ? "COPIED!" : "COPY SUMMARY"}
              </button>
            </div>
          </div>

          {/* Card 2: Cheat Code Hints (Blue Bento - 5 Cols) */}
          <div className="md:col-span-5 bg-[#2563EB] text-white border-4 border-black rounded-3xl p-6 sm:p-8 shadow-[8px_8px_0px_#000] space-y-4">
            <div className="flex items-center justify-between pb-3 border-b-2 border-white/20">
              <span className="px-3 py-1 bg-yellow-300 text-black border-2 border-black font-display font-black text-xs rounded-lg uppercase shadow-[2px_2px_0px_#000]">
                💡 CHEAT CODE HINTS
              </span>
              <span className="font-mono text-xs font-bold text-white/80">
                {selectedDoc.hints.length} UNLOCKED
              </span>
            </div>

            <p className="text-xs text-white/90">
              What the author won't tell you upfront. Traps, nuances, and mental models:
            </p>

            <div className="space-y-3">
              {selectedDoc.hints.map((hint, i) => (
                <div
                  key={i}
                  className="bg-white text-black p-3.5 rounded-2xl border-3 border-black shadow-[4px_4px_0px_#000] space-y-1"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-black uppercase px-2 py-0.5 bg-black text-yellow-300 rounded">
                      {hint.tag}
                    </span>
                    <span className="text-[10px] font-mono font-bold text-neutral-500">Page {hint.page}</span>
                  </div>
                  <p className="text-xs font-medium text-neutral-900 leading-snug">{hint.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Card 3: Verbatim Receipts (Yellow Bento - 6 Cols) */}
          <div className="md:col-span-6 bg-[#FDE047] border-4 border-black rounded-3xl p-6 sm:p-8 shadow-[8px_8px_0px_#000] space-y-4">
            <div className="flex items-center justify-between pb-3 border-b-2 border-black">
              <span className="px-3 py-1 bg-[#EF4444] text-white border-2 border-black font-display font-black text-xs rounded-lg uppercase shadow-[2px_2px_0px_#000]">
                🎯 THE RECEIPTS (QUOTES)
              </span>
              <span className="font-mono text-xs font-bold text-neutral-800">
                WORD-FOR-WORD
              </span>
            </div>

            <div className="space-y-3">
              {selectedDoc.quotes.map((q, i) => (
                <div
                  key={i}
                  className="bg-white p-4 rounded-2xl border-3 border-black shadow-[4px_4px_0px_#000] space-y-2"
                >
                  <p className="text-sm font-bold text-black italic leading-snug">
                    "{q.quote}"
                  </p>
                  <div className="flex items-center justify-between text-xs font-mono font-bold text-neutral-600">
                    <span className="text-[#2563EB]">Page {q.page} • {q.speakerOrContext}</span>
                    <span className="text-[10px] text-neutral-500">{q.significance}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Card 4: Action Levers (Coral Bento - 6 Cols) */}
          <div className="md:col-span-6 bg-[#EF4444] text-white border-4 border-black rounded-3xl p-6 sm:p-8 shadow-[8px_8px_0px_#000] space-y-4">
            <div className="flex items-center justify-between pb-3 border-b-2 border-white/30">
              <span className="px-3 py-1 bg-black text-white border-2 border-black font-display font-black text-xs rounded-lg uppercase shadow-[2px_2px_0px_#FDE047]">
                ⚡ IMMEDIATE ACTION LEVERS
              </span>
              <span className="font-mono text-xs font-bold text-white/90">
                PRACTICAL
              </span>
            </div>

            <div className="space-y-3">
              {selectedDoc.keyInsights.map((ins, i) => (
                <div
                  key={i}
                  className="bg-white text-black p-4 rounded-2xl border-3 border-black shadow-[4px_4px_0px_#000] space-y-1.5"
                >
                  <h4 className="font-display font-black text-base text-black">{ins.headline}</h4>
                  <p className="text-xs text-neutral-700">{ins.takeaway}</p>
                  <div className="text-[11px] font-bold text-[#2563EB] bg-blue-50 p-2 rounded-lg border border-blue-200">
                    <strong>Rule:</strong> {ins.practicalApplication}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Comparison: Typical Boring AI vs Ratio Reader */}
      <section className="max-w-5xl mx-auto px-4 sm:px-8 py-12">
        <div className="bg-white border-4 border-black rounded-3xl p-6 sm:p-10 shadow-[10px_10px_0px_#000] space-y-6">
          <h3 className="text-2xl sm:text-3xl font-display font-black text-center">
            Standard AI Summarizers vs Ratio Reader
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="p-5 rounded-2xl bg-neutral-100 border-3 border-black space-y-3">
              <span className="px-2.5 py-1 bg-neutral-300 text-neutral-800 font-bold text-xs rounded border border-black uppercase">
                ❌ Generic AI Tools
              </span>
              <ul className="text-sm space-y-2 text-neutral-700 font-medium">
                <li>• Hallucinates facts and numbers</li>
                <li>• Sounds like a boring robot bureaucrat</li>
                <li>• Zero page citations (you can't cite it)</li>
                <li>• Misses tricky counter-arguments</li>
                <li>• Takes everything literally</li>
              </ul>
            </div>

            <div className="p-5 rounded-2xl bg-yellow-200 border-3 border-black space-y-3 shadow-[4px_4px_0px_#000]">
              <span className="px-2.5 py-1 bg-black text-yellow-300 font-bold text-xs rounded border border-black uppercase">
                ✨ Ratio Reader
              </span>
              <ul className="text-sm space-y-2 text-black font-bold">
                <li>• Dial your comprehension ratio (10% to 50%)</li>
                <li>• Verbatim quotes with exact page receipts</li>
                <li>• Context hints & mental models highlighted</li>
                <li>• Slices fluff while keeping author voice</li>
                <li>• 100% auditable provenance</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Big Tactile CTA */}
      <section className="max-w-4xl mx-auto px-4 sm:px-8 py-10 text-center space-y-6">
        <div className="bg-black text-white p-8 sm:p-12 rounded-3xl border-4 border-black shadow-[12px_12px_0px_#EF4444] space-y-6">
          <h3 className="text-3xl sm:text-5xl font-display font-black text-yellow-300">
            START CRUSHING BOOKS IN RECORD TIME.
          </h3>
          <p className="text-neutral-300 max-w-lg mx-auto text-base">
            No credit card needed. Drop your first PDF and discover how much faster you learn with Ratio.
          </p>

          <button
            onClick={triggerJuicyConfetti}
            className="px-8 py-4 bg-yellow-300 text-black font-display font-black text-lg rounded-2xl border-3 border-black shadow-[6px_6px_0px_#FFF] hover:translate-x-1 hover:translate-y-1 hover:shadow-[2px_2px_0px_#FFF] transition-all cursor-pointer inline-flex items-center gap-2"
          >
            <span>DROP A PDF RIGHT NOW</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="max-w-6xl mx-auto px-4 sm:px-8 pt-8 border-t-3 border-black font-mono text-xs font-bold flex flex-col sm:flex-row items-center justify-between gap-3">
        <span>RATIO READER • DESIGN 3: BAUHAUS NEO-BRUTAL</span>
        <span>CRAFTED WITH TACTILE BENTO CRAFT</span>
      </footer>
    </div>
  );
}
