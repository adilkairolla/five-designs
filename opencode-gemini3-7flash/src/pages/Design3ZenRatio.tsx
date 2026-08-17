import { useState, useEffect } from "react";
import { 
  Leaf, 
  Check, 
  Volume2, 
  VolumeX, 
  ShieldCheck, 
  ArrowRight,
  Bookmark
} from "lucide-react";
import { SAMPLE_DOCUMENTS, PRICING_TIERS } from "../data/samplePdfs";

export function Design3ZenRatio() {
  const [selectedDocId, setSelectedDocId] = useState<string>("stoic-time");
  const [breathPhase, setBreathPhase] = useState<"Inhale" | "Hold" | "Exhale">("Inhale");
  const [ambientSound, setAmbientSound] = useState<boolean>(false);
  const [fontSize, setFontSize] = useState<"normal" | "large">("normal");
  const [activeHintIndex, setActiveHintIndex] = useState<number>(0);

  const currentDoc = SAMPLE_DOCUMENTS.find((d) => d.id === selectedDocId) || SAMPLE_DOCUMENTS[2];

  // Gentle breathing cycle simulation
  useEffect(() => {
    const interval = setInterval(() => {
      setBreathPhase((prev) => {
        if (prev === "Inhale") return "Hold";
        if (prev === "Hold") return "Exhale";
        return "Inhale";
      });
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-[#F7F4EB] text-[#2D3748] font-sans selection:bg-[#2F5243] selection:text-[#F7F4EB] pt-14 pb-20">
      
      {/* Zen Sanctuary Top Navigation */}
      <header className="max-w-5xl mx-auto px-6 py-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-[#2F5243] flex items-center justify-center text-[#F7F4EB] shadow-sm">
            <Leaf className="w-4 h-4" />
          </div>
          <div>
            <span className="font-serif text-lg font-semibold tracking-wide text-[#1A202C]">Ratio Sanctuary</span>
            <span className="block text-[10px] text-[#718096] uppercase tracking-wider font-mono">Mindful Reading</span>
          </div>
        </div>

        <div className="flex items-center gap-6 text-sm font-medium text-[#4A5568]">
          <a href="#ceremony" className="hover:text-[#2F5243] transition hidden sm:inline">The Tea Ceremony</a>
          <a href="#focus-capsule" className="hover:text-[#2F5243] transition">Focus Capsule</a>
          <a href="#peaceful-pricing" className="hover:text-[#2F5243] transition">Quiet Pricing</a>
          <a
            href="#focus-capsule"
            className="px-4 py-1.5 rounded-full bg-[#2F5243] text-[#F7F4EB] text-xs hover:bg-[#233F33] transition shadow-sm"
          >
            Enter Sanctuary
          </a>
        </div>
      </header>

      {/* Hero: Mindful Reading Sanctuary */}
      <section className="max-w-4xl mx-auto px-6 pt-10 pb-16 text-center">
        
        {/* Breathing Circle Widget */}
        <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-[#EAE4D3] text-[#2F5243] text-xs font-medium mb-6">
          <span className="w-2.5 h-2.5 rounded-full bg-[#2F5243] animate-ping" />
          <span>Take a quiet breath: <strong className="font-serif italic">{breathPhase}</strong></span>
        </div>

        <h1 className="font-serif text-4xl sm:text-6xl text-[#1A202C] font-normal leading-[1.15] mb-6">
          Reading shouldn't feel like drowning. Reclaim the quiet joy of deep understanding.
        </h1>

        <p className="text-base sm:text-lg text-[#4A5568] max-w-2xl mx-auto leading-relaxed mb-8">
          Upload any 100-page monograph, research paper, or dense manuscript. Ratio Reader filters the noise, leaving you with pure, radiant insights, margin clarity, and verified quotes.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="#focus-capsule"
            className="px-6 py-3 rounded-full bg-[#2F5243] text-[#F7F4EB] font-medium text-sm hover:bg-[#233F33] transition shadow-md flex items-center gap-2"
          >
            <span>Experience the Focus Capsule</span>
            <ArrowRight className="w-4 h-4" />
          </a>
          <div className="flex items-center gap-2 text-xs text-[#718096]">
            <ShieldCheck className="w-4 h-4 text-[#2F5243]" />
            <span>No ads • No algorithmic distractions • 100% serene</span>
          </div>
        </div>
      </section>

      {/* Interactive Main Feature: THE FOCUS CAPSULE */}
      <section id="focus-capsule" className="max-w-5xl mx-auto px-6 py-12">
        <div className="bg-[#FFFFFF] border border-[#E2D9C8] rounded-3xl p-6 sm:p-10 shadow-[0_15px_40px_rgba(47,82,67,0.06)] relative">
          
          {/* Header Controls of Reader */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-[#EAE4D3]">
            <div>
              <span className="text-[11px] font-mono uppercase tracking-widest text-[#718096]">Current Contemplation</span>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#1A202C]">{currentDoc.title}</h3>
              <p className="text-xs text-[#718096] italic font-serif">{currentDoc.author}</p>
            </div>

            {/* Ambient sound toggle & font size */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => setAmbientSound(!ambientSound)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium border transition ${
                  ambientSound
                    ? "bg-[#EAE4D3] border-[#2F5243] text-[#2F5243]"
                    : "border-[#E2D9C8] text-[#718096] hover:text-[#1A202C]"
                }`}
              >
                {ambientSound ? <Volume2 className="w-3.5 h-3.5" /> : <VolumeX className="w-3.5 h-3.5" />}
                <span>{ambientSound ? "Rain on Paper (Playing)" : "Ambient Sound"}</span>
              </button>

              <div className="flex items-center gap-1 bg-[#F7F4EB] p-1 rounded-full border border-[#E2D9C8]">
                <button
                  onClick={() => setFontSize("normal")}
                  className={`px-2.5 py-0.5 rounded-full text-xs transition ${
                    fontSize === "normal" ? "bg-[#2F5243] text-[#F7F4EB]" : "text-[#718096]"
                  }`}
                >
                  Aa
                </button>
                <button
                  onClick={() => setFontSize("large")}
                  className={`px-2.5 py-0.5 rounded-full text-sm font-bold transition ${
                    fontSize === "large" ? "bg-[#2F5243] text-[#F7F4EB]" : "text-[#718096]"
                  }`}
                >
                  Aa+
                </button>
              </div>
            </div>
          </div>

          {/* Document Chooser Pills */}
          <div className="flex flex-wrap gap-2 py-4">
            {SAMPLE_DOCUMENTS.map((doc) => (
              <button
                key={doc.id}
                onClick={() => setSelectedDocId(doc.id)}
                className={`px-3.5 py-1 rounded-full text-xs font-serif transition ${
                  selectedDocId === doc.id
                    ? "bg-[#2F5243] text-[#F7F4EB] font-bold"
                    : "bg-[#F7F4EB] text-[#4A5568] hover:bg-[#EAE4D3]"
                }`}
              >
                {doc.title}
              </button>
            ))}
          </div>

          {/* Reading Surface & Margin Notes Split */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-4 items-start">
            
            {/* Left 8 cols: Peaceful Text */}
            <div className="lg:col-span-8 space-y-6">
              <div className="p-5 rounded-2xl bg-[#F7F4EB] border border-[#EAE4D3]">
                <span className="text-[10px] font-mono text-[#718096] uppercase tracking-wider block mb-2">
                  The Distilled Essence (3-Min Reflection)
                </span>
                <p className={`font-serif italic text-[#1A202C] leading-relaxed ${
                  fontSize === "large" ? "text-xl" : "text-base sm:text-lg"
                }`}>
                  "{currentDoc.summaryBalanced.thesis}"
                </p>
              </div>

              {/* Sections */}
              <div className="space-y-6">
                {currentDoc.summaryBalanced.sections.map((sec, idx) => (
                  <div key={idx} className="space-y-2">
                    <h4 className="font-serif text-lg font-bold text-[#1A202C]">{sec.heading}</h4>
                    <p className={`text-[#4A5568] leading-relaxed font-serif ${
                      fontSize === "large" ? "text-base" : "text-sm"
                    }`}>
                      {sec.content}
                    </p>
                  </div>
                ))}
              </div>

              {/* Verified Quote Highlight Box */}
              <div className="p-5 rounded-2xl bg-[#F0EBE0] border-l-4 border-[#2F5243] space-y-2">
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#718096]">
                  Anchored Quote • Page {currentDoc.quotes[0].page}
                </span>
                <p className="font-serif text-base italic text-[#1A202C]">
                  "{currentDoc.quotes[0].quote}"
                </p>
                <div className="text-xs text-[#718096]">— {currentDoc.quotes[0].author}</div>
              </div>
            </div>

            {/* Right 4 cols: Gentle Margin Insights */}
            <div className="lg:col-span-4 space-y-4">
              <div className="p-4 rounded-2xl bg-[#FBF9F4] border border-[#EAE4D3]">
                <div className="flex items-center gap-2 text-xs font-serif font-bold text-[#2F5243] mb-3">
                  <Bookmark className="w-4 h-4 text-[#2F5243]" />
                  <span>Margin Clarity Notes</span>
                </div>

                <div className="space-y-3">
                  {currentDoc.hints.map((hint, i) => (
                    <div
                      key={hint.id}
                      onClick={() => setActiveHintIndex(i)}
                      className={`p-3 rounded-xl border text-xs cursor-pointer transition ${
                        activeHintIndex === i
                          ? "bg-[#FFFFFF] border-[#2F5243] shadow-sm"
                          : "bg-transparent border-[#EAE4D3] hover:border-[#CBD5E0]"
                      }`}
                    >
                      <div className="font-serif font-bold text-[#1A202C] mb-1">{hint.term}</div>
                      <p className="text-[#4A5568] leading-relaxed mb-1.5">{hint.simplified}</p>
                      <span className="text-[10px] text-[#2F5243] font-medium block">
                        Why this matters: {hint.whyItMatters}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Serene metrics */}
              <div className="p-4 rounded-2xl bg-[#EAE4D3]/50 text-center text-xs text-[#4A5568] space-y-1">
                <div>Original reading burden: <strong className="text-[#1A202C]">{currentDoc.originalReadTimeMinutes} mins</strong></div>
                <div>Sanctuary summary: <strong className="text-[#2F5243]">8 mins</strong></div>
                <div className="text-[11px] text-[#718096] italic mt-2">"More silence, less noise."</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Tea Ceremony of Reading (Step-by-step narrative) */}
      <section id="ceremony" className="max-w-4xl mx-auto px-6 py-16 text-center">
        <p className="text-xs font-mono uppercase tracking-widest text-[#2F5243] mb-2">The Ritual</p>
        <h2 className="font-serif text-3xl sm:text-4xl text-[#1A202C] mb-12">
          The Tea Ceremony of Reading
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          <div className="p-6 rounded-2xl bg-white border border-[#E2D9C8]">
            <div className="w-10 h-10 rounded-full bg-[#EAE4D3] text-[#2F5243] flex items-center justify-center font-serif font-bold text-base mb-4">
              I
            </div>
            <h3 className="font-serif text-lg font-bold text-[#1A202C] mb-2">Infuse the Manuscript</h3>
            <p className="text-xs text-[#4A5568] leading-relaxed">
              Drop in any PDF—no matter how dense, unwieldy, or heavy. The engine parses the structure gently.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-[#E2D9C8]">
            <div className="w-10 h-10 rounded-full bg-[#EAE4D3] text-[#2F5243] flex items-center justify-center font-serif font-bold text-base mb-4">
              II
            </div>
            <h3 className="font-serif text-lg font-bold text-[#1A202C] mb-2">Steep Out the Filler</h3>
            <p className="text-xs text-[#4A5568] leading-relaxed">
              Syntactic fluff and repetitive filler are dissolved, leaving behind only the pure semantic liquor.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-[#E2D9C8]">
            <div className="w-10 h-10 rounded-full bg-[#EAE4D3] text-[#2F5243] flex items-center justify-center font-serif font-bold text-base mb-4">
              III
            </div>
            <h3 className="font-serif text-lg font-bold text-[#1A202C] mb-2">Savor the Clarity</h3>
            <p className="text-xs text-[#4A5568] leading-relaxed">
              Drink in the core mental models, margin clarity glosses, and verified page-pinned quotes in total peace.
            </p>
          </div>
        </div>
      </section>

      {/* Quiet Pricing */}
      <section id="peaceful-pricing" className="max-w-4xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <p className="text-xs font-mono uppercase tracking-widest text-[#2F5243] mb-2">Sanctuary Membership</p>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#1A202C]">
            Simple, Mindful Pricing
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PRICING_TIERS.map((tier) => (
            <div
              key={tier.name}
              className={`p-6 rounded-2xl border flex flex-col justify-between ${
                tier.popular
                  ? "bg-[#2F5243] text-[#F7F4EB] border-[#2F5243] shadow-xl"
                  : "bg-white text-[#2D3748] border-[#E2D9C8]"
              }`}
            >
              <div>
                <span className="text-xs font-mono uppercase tracking-wider opacity-80">{tier.name}</span>
                <div className="flex items-baseline gap-1 my-3">
                  <span className="font-serif text-3xl font-bold">{tier.price}</span>
                  <span className="text-xs opacity-75">{tier.period}</span>
                </div>
                <p className={`text-xs mb-6 font-serif ${tier.popular ? "text-[#EAE4D3]" : "text-[#718096]"}`}>
                  {tier.description}
                </p>

                <div className="space-y-2 text-xs pt-4 border-t border-current/20 font-serif">
                  {tier.features.map((f, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 mt-0.5 shrink-0" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                className={`mt-8 w-full py-2.5 rounded-full text-xs font-medium transition ${
                  tier.popular
                    ? "bg-[#F7F4EB] text-[#2F5243] hover:bg-white"
                    : "bg-[#2F5243] text-[#F7F4EB] hover:bg-[#233F33]"
                }`}
              >
                {tier.cta}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Zen Footer */}
      <footer className="max-w-4xl mx-auto px-6 pt-10 text-center text-xs text-[#718096] font-serif border-t border-[#E2D9C8]">
        <p className="italic mb-2">"In quietude, understanding blooms."</p>
        <p className="text-[11px] font-mono">© {new Date().getFullYear()} Ratio Sanctuary. Crafted for calm minds.</p>
      </footer>
    </div>
  );
}
