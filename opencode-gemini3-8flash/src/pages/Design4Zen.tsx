import { useState, useEffect } from "react";
import { SAMPLE_DOCUMENTS, type PdfDocument } from "../data/samplePdfs";
import {
  Wind,
  Coffee,
  Volume2,
  VolumeX,
  BookOpen,
  Sparkles,
  Quote,
  Feather,
  ChevronDown,
  ChevronUp,
  Check,
  Copy,
  Sun,
  Moon,
  Compass,
} from "lucide-react";

export function Design4Zen() {
  const [activeDoc, setActiveDoc] = useState<PdfDocument>(SAMPLE_DOCUMENTS[1]);
  const [ambientSoundActive, setAmbientSoundActive] = useState<boolean>(false);
  const [readingDepth, setReadingDepth] = useState<"skim" | "reflect" | "deep">("reflect");
  const [expandedHintIndex, setExpandedHintIndex] = useState<number | null>(0);
  const [copiedQuoteIndex, setCopiedQuoteIndex] = useState<number | null>(null);
  const [breathState, setBreathState] = useState<"Inhale" | "Hold" | "Exhale">("Inhale");

  // Calming breathing cycle
  useEffect(() => {
    const states: ("Inhale" | "Hold" | "Exhale")[] = ["Inhale", "Hold", "Exhale"];
    let idx = 0;
    const interval = setInterval(() => {
      idx = (idx + 1) % states.length;
      setBreathState(states[idx]);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  const handleCopyQuote = (quoteText: string, idx: number) => {
    navigator.clipboard.writeText(`"${quoteText}" — ${activeDoc.title}`);
    setCopiedQuoteIndex(idx);
    setTimeout(() => setCopiedQuoteIndex(null), 2000);
  };

  return (
    <div className="min-h-screen bg-[#FBFBFA] text-[#222428] font-sans antialiased selection:bg-[#E3E8E4] selection:text-[#18191B] pb-28">
      {/* Serene Top Bar */}
      <header className="border-b border-[#ECECE9] bg-[#FBFBFA]/80 backdrop-blur sticky top-0 z-40">
        <div className="max-w-4xl mx-auto px-6 py-3 flex items-center justify-between text-xs text-[#6F737A]">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-[#10B981]/80" />
            <span className="font-medium tracking-wide text-[#1A1C1E]">Ratio Sanctuary</span>
            <span className="text-[#A2A6AD] hidden sm:inline">•</span>
            <span className="text-[11px] text-[#868A91] hidden sm:inline">Uncluttered Reading</span>
          </div>

          <div className="flex items-center gap-4">
            {/* Ambient Sound Simulator Toggle */}
            <button
              onClick={() => setAmbientSoundActive(!ambientSoundActive)}
              className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] transition-all border ${
                ambientSoundActive
                  ? "bg-[#EBF5EF] border-[#B2DFC0] text-[#1D7443] font-medium"
                  : "bg-[#F3F3F0] border-[#E5E5E0] text-[#6F737A] hover:text-[#1A1C1E]"
              }`}
            >
              {ambientSoundActive ? <Volume2 className="w-3 h-3 text-[#10B981]" /> : <VolumeX className="w-3 h-3" />}
              <span>{ambientSoundActive ? "Soft Rain (Simulated)" : "Sound Off"}</span>
            </button>

            {/* Breathing Rhythm Badge */}
            <div className="hidden sm:flex items-center gap-1.5 text-[11px] px-2.5 py-1 rounded-full bg-[#F3F3F0] text-[#6F737A]">
              <Wind className="w-3 h-3 animate-pulse text-[#10B981]" />
              <span>{breathState}</span>
            </div>
          </div>
        </div>
      </header>

      {/* Zen Hero Section */}
      <section className="max-w-3xl mx-auto px-6 pt-16 pb-12 text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F1F3F0] border border-[#E2E6E1] text-xs text-[#2D5A3C]">
          <Feather className="w-3.5 h-3.5" />
          <span>Restful Comprehension for Demanding Texts</span>
        </div>

        <h1 className="text-4xl sm:text-5xl font-light tracking-tight text-[#141517] leading-tight">
          Read with effortless clarity. <br />
          <span className="font-normal italic text-[#2D5A3C]">Without cognitive fatigue.</span>
        </h1>

        <p className="max-w-xl mx-auto text-base sm:text-lg text-[#5F636A] leading-relaxed font-light">
          When research papers and heavy tomes demand your attention, Ratio gently filters the clutter. 
          Receive the foundational thesis, illuminating hints, and golden citations in a peaceful space.
        </p>

        {/* Minimalist Document Switcher */}
        <div className="pt-6 flex flex-wrap justify-center gap-2">
          {SAMPLE_DOCUMENTS.map((doc) => (
            <button
              key={doc.id}
              onClick={() => setActiveDoc(doc)}
              className={`px-3.5 py-1.5 rounded-full text-xs transition-all border ${
                activeDoc.id === doc.id
                  ? "bg-[#1C1D20] text-white border-[#1C1D20] shadow-sm"
                  : "bg-white text-[#5F636A] border-[#E5E5E0] hover:text-[#1A1C1E] hover:border-[#CCD0D6]"
              }`}
            >
              {doc.title.split("(")[0].slice(0, 24)}
            </button>
          ))}
        </div>
      </section>

      {/* Main Focus Reading Container */}
      <main className="max-w-3xl mx-auto px-6 space-y-8">
        {/* Document Status Header Card */}
        <div className="bg-white border border-[#E8E8E4] rounded-2xl p-6 sm:p-8 shadow-sm space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-[#F0F0EC]">
            <div>
              <span className="text-[11px] uppercase tracking-wider text-[#91959C] block font-mono">
                {activeDoc.category}
              </span>
              <h2 className="text-xl sm:text-2xl font-normal text-[#1A1C1E] mt-0.5">
                {activeDoc.title}
              </h2>
              <p className="text-xs text-[#6F737A] mt-0.5">{activeDoc.author}</p>
            </div>

            {/* Depth Selector Pills */}
            <div className="flex items-center gap-1 p-1 bg-[#F5F5F2] rounded-xl self-start sm:self-center">
              <button
                onClick={() => setReadingDepth("skim")}
                className={`px-3 py-1 rounded-lg text-xs transition-all ${
                  readingDepth === "skim"
                    ? "bg-white text-[#1A1C1E] shadow-sm font-medium"
                    : "text-[#6F737A] hover:text-[#1A1C1E]"
                }`}
              >
                Skim
              </button>
              <button
                onClick={() => setReadingDepth("reflect")}
                className={`px-3 py-1 rounded-lg text-xs transition-all ${
                  readingDepth === "reflect"
                    ? "bg-white text-[#1A1C1E] shadow-sm font-medium"
                    : "text-[#6F737A] hover:text-[#1A1C1E]"
                }`}
              >
                Reflect
              </button>
              <button
                onClick={() => setReadingDepth("deep")}
                className={`px-3 py-1 rounded-lg text-xs transition-all ${
                  readingDepth === "deep"
                    ? "bg-white text-[#1A1C1E] shadow-sm font-medium"
                    : "text-[#6F737A] hover:text-[#1A1C1E]"
                }`}
              >
                Deep Study
              </button>
            </div>
          </div>

          {/* Reading Metrics Bar */}
          <div className="grid grid-cols-3 gap-2 py-2 text-center text-xs">
            <div className="p-2.5 bg-[#FAFBF9] rounded-xl border border-[#F0F0EB]">
              <span className="block text-[10px] text-[#868A91]">Reduced Reading</span>
              <span className="font-semibold text-[#1A1C1E] text-sm">{activeDoc.readTimeRatio}</span>
              <span className="block text-[10px] text-[#A2A6AD]">was {activeDoc.readTimeOriginal}</span>
            </div>
            <div className="p-2.5 bg-[#FAFBF9] rounded-xl border border-[#F0F0EB]">
              <span className="block text-[10px] text-[#868A91]">Noise Filtered</span>
              <span className="font-semibold text-[#2D5A3C] text-sm">{activeDoc.compressionPercent}%</span>
              <span className="block text-[10px] text-[#A2A6AD]">zero distortion</span>
            </div>
            <div className="p-2.5 bg-[#FAFBF9] rounded-xl border border-[#F0F0EB]">
              <span className="block text-[10px] text-[#868A91]">Cognitive Calm</span>
              <span className="font-semibold text-[#1A1C1E] text-sm">{activeDoc.stats.cognitiveLoadScore}</span>
              <span className="block text-[10px] text-[#A2A6AD]">strain reduction</span>
            </div>
          </div>

          {/* Core Prose Digest */}
          <div className="space-y-4 pt-2">
            <p className="text-base sm:text-lg text-[#2A2C30] leading-relaxed font-light">
              {activeDoc.executiveSummary}
            </p>

            {(readingDepth === "reflect" || readingDepth === "deep") && (
              <p className="text-sm sm:text-base text-[#4F535B] leading-relaxed font-light pt-3 border-t border-[#F2F2EE]">
                {activeDoc.deepSummary}
              </p>
            )}
          </div>
        </div>

        {/* Quiet Marginalia & Contextual Hints */}
        <section className="bg-white border border-[#E8E8E4] rounded-2xl p-6 sm:p-8 shadow-sm space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-[#F0F0EC]">
            <span className="text-xs font-medium uppercase tracking-wider text-[#6F737A] flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#2D5A3C]" />
              Thoughtful Marginalia
            </span>
            <span className="text-xs text-[#91959C]">{activeDoc.hints.length} hints</span>
          </div>

          <div className="space-y-2.5">
            {activeDoc.hints.map((hint, idx) => {
              const isExpanded = expandedHintIndex === idx;
              return (
                <div
                  key={idx}
                  className="rounded-xl border border-[#ECECE8] bg-[#FDFDFD] overflow-hidden transition-all"
                >
                  <button
                    onClick={() => setExpandedHintIndex(isExpanded ? null : idx)}
                    className="w-full p-3.5 text-left flex items-center justify-between hover:bg-[#F9F9F8] transition-colors"
                  >
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-0.5 rounded text-[10px] bg-[#EBF3ED] text-[#2D5A3C] font-medium">
                        {hint.tag}
                      </span>
                      <span className="text-xs text-[#71757D]">Ref. Page {hint.page}</span>
                    </div>
                    {isExpanded ? <ChevronUp className="w-4 h-4 text-[#868A91]" /> : <ChevronDown className="w-4 h-4 text-[#868A91]" />}
                  </button>

                  {isExpanded && (
                    <div className="p-3.5 pt-0 text-sm text-[#3E4249] leading-relaxed border-t border-[#F4F4F0] bg-[#FAFBF9]">
                      {hint.text}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* Quiet Quotes Sanctuary */}
        <section className="bg-white border border-[#E8E8E4] rounded-2xl p-6 sm:p-8 shadow-sm space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-[#F0F0EC]">
            <span className="text-xs font-medium uppercase tracking-wider text-[#6F737A] flex items-center gap-1.5">
              <Quote className="w-3.5 h-3.5 text-[#2D5A3C]" />
              Golden Quotes
            </span>
            <span className="text-xs text-[#91959C]">Exact Provenance</span>
          </div>

          <div className="space-y-4">
            {activeDoc.quotes.map((q, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-[#FAFBF9] border border-[#ECECE8] space-y-2 relative group"
              >
                <p className="text-sm sm:text-base text-[#1E2023] italic leading-relaxed font-light">
                  "{q.quote}"
                </p>
                <div className="flex items-center justify-between text-xs text-[#7A7E86]">
                  <span>Page {q.page} • {q.speakerOrContext}</span>
                  <button
                    onClick={() => handleCopyQuote(q.quote, idx)}
                    className="flex items-center gap-1 text-[11px] text-[#2D5A3C] hover:underline"
                  >
                    {copiedQuoteIndex === idx ? (
                      <>
                        <Check className="w-3 h-3" />
                        <span>Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3" />
                        <span>Save Quote</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Core Principles */}
        <section className="py-8 border-t border-[#E8E8E4] grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs text-[#5F636A]">
          <div className="space-y-1.5">
            <h4 className="font-medium text-[#1A1C1E] text-sm">Quiet Presence</h4>
            <p className="leading-relaxed">No ads, no clickbait tickers, no artificial urgency. Just calm reading space.</p>
          </div>
          <div className="space-y-1.5">
            <h4 className="font-medium text-[#1A1C1E] text-sm">Auditable Truth</h4>
            <p className="leading-relaxed">Every distilled thought ties back to its exact source page and paragraph.</p>
          </div>
          <div className="space-y-1.5">
            <h4 className="font-medium text-[#1A1C1E] text-sm">Cognitive Space</h4>
            <p className="leading-relaxed">Designed to let your own original synthesis and creative sparks emerge.</p>
          </div>
        </section>
      </main>

      {/* Serene Footer */}
      <footer className="max-w-4xl mx-auto px-6 pt-10 border-t border-[#ECECE9] text-xs text-[#8A8E96] flex flex-col sm:flex-row items-center justify-between gap-3">
        <span>RATIO READER • DESIGN 4: ZEN SANCTUARY</span>
        <span>A Sanctuary for the Reading Mind</span>
      </footer>
    </div>
  );
}
