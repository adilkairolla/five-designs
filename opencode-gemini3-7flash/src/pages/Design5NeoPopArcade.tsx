import { useState } from "react";
import confetti from "canvas-confetti";
import { 
  Gamepad2, 
  Flame, 
  Zap, 
  Trophy, 
  Check, 
  X, 
  Brain 
} from "lucide-react";
import { SAMPLE_DOCUMENTS, PRICING_TIERS } from "../data/samplePdfs";

export function Design5NeoPopArcade() {
  const [brainrotRatio, setBrainrotRatio] = useState<number>(80);
  const [selectedDocId, setSelectedDocId] = useState<string>("deep-attention");
  const [selectedQuizAnswer, setSelectedQuizAnswer] = useState<number | null>(null);
  const [quizSubmitted, setQuizSubmitted] = useState<boolean>(false);
  const [unlockedBadges, setUnlockedBadges] = useState<string[]>(["Fluff Buster"]);

  const currentDoc = SAMPLE_DOCUMENTS.find((d) => d.id === selectedDocId) || SAMPLE_DOCUMENTS[0];
  const quiz = currentDoc.quizQuestions[0];

  const handleQuizChoice = (index: number) => {
    setSelectedQuizAnswer(index);
    setQuizSubmitted(true);
    if (index === quiz.correctIndex) {
      // Trigger confetti celebration!
      confetti({
        particleCount: 120,
        spread: 70,
        origin: { y: 0.6 }
      });
      if (!unlockedBadges.includes("Quiz God")) {
        setUnlockedBadges([...unlockedBadges, "Quiz God"]);
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#FFF455] text-[#121212] font-sans selection:bg-[#8B5CF6] selection:text-white pt-14 pb-20">
      
      {/* Top Arcade Marquee */}
      <div className="bg-[#121212] text-[#FFF455] font-mono text-xs font-bold py-2 border-b-4 border-black overflow-hidden whitespace-nowrap">
        <div className="flex items-center gap-8 animate-marquee">
          <span>⚡ STOP READING 90-PAGE FLUFF</span>
          <span>•</span>
          <span>🎮 UNLOCK 10X BIG BRAIN CLARITY</span>
          <span>•</span>
          <span>🔥 100% VERIFIED CITATIONS, ZERO SLEEPY JARGON</span>
          <span>•</span>
          <span>🚀 OVER 500,000 PAGES DE-BRAINROTTED</span>
        </div>
      </div>

      {/* Arcade Header */}
      <header className="max-w-6xl mx-auto px-4 sm:px-8 py-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-[#8B5CF6] border-3 border-black shadow-[4px_4px_0px_#000] flex items-center justify-center text-white text-2xl rotate-[-3deg]">
            <Brain className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-2xl tracking-tight uppercase">RATIO ARCADE</span>
              <span className="px-2 py-0.5 rounded-full bg-[#10B981] text-black text-[10px] font-black border-2 border-black shadow-[2px_2px_0px_#000]">
                LEVEL 99
              </span>
            </div>
            <p className="text-xs font-bold text-slate-800">The Anti-Brainrot PDF Decompressor</p>
          </div>
        </div>

        <nav className="flex items-center gap-4">
          <a
            href="#arcade-zone"
            className="px-4 py-2 rounded-xl bg-[#8B5CF6] hover:bg-[#7C3AED] text-white font-black text-xs uppercase tracking-wider border-3 border-black shadow-[3px_3px_0px_#000] transition active:translate-x-1 active:translate-y-1 active:shadow-none"
          >
            Play Live Arcade
          </a>
        </nav>
      </header>

      {/* Hero: Vibrant Neo-Pop */}
      <section className="max-w-6xl mx-auto px-4 sm:px-8 pt-6 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#FF7BE5] text-black font-black text-xs border-2 border-black shadow-[3px_3px_0px_#000] rotate-[-1deg]">
              <Flame className="w-4 h-4 fill-black" />
              <span>CURE YOUR ACADEMIC READING EXHAUSTION</span>
            </div>

            <h1 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight text-black leading-[0.95]">
              Stop Drowning in <span className="bg-[#FF5757] text-white px-2 py-1 rounded-xl border-3 border-black shadow-[4px_4px_0px_#000] inline-block rotate-[2deg]">90-Page</span> Boring PDFs.
            </h1>

            <p className="text-base sm:text-xl font-bold text-slate-900 leading-snug">
              Turn soul-crushing textbooks, research jargon, and corporate snooze-fests into 3-minute atomic summaries with funny meme hints & locked-in quotes! ⚡
            </p>

            {/* Achievement Badges */}
            <div className="flex flex-wrap gap-2 pt-2">
              <span className="px-3 py-1 bg-white border-2 border-black rounded-lg text-xs font-black shadow-[2px_2px_0px_#000]">
                🚀 10x Reading Speed
              </span>
              <span className="px-3 py-1 bg-[#10B981] border-2 border-black rounded-lg text-xs font-black shadow-[2px_2px_0px_#000]">
                🎯 0% Hallucinations
              </span>
              <span className="px-3 py-1 bg-[#FF7BE5] border-2 border-black rounded-lg text-xs font-black shadow-[2px_2px_0px_#000]">
                💡 Jargon Translated to Human
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href="#arcade-zone"
                className="px-6 py-4 rounded-2xl bg-[#10B981] hover:bg-[#059669] text-black font-black text-sm uppercase tracking-wider border-3 border-black shadow-[5px_5px_0px_#000] transition active:translate-x-1 active:translate-y-1 active:shadow-none flex items-center gap-2"
              >
                <Zap className="w-5 h-5 fill-black" />
                <span>TRY LIVE DROPZONE</span>
              </a>
              <a
                href="#arcade-pricing"
                className="px-6 py-4 rounded-2xl bg-white hover:bg-slate-100 text-black font-black text-sm uppercase tracking-wider border-3 border-black shadow-[5px_5px_0px_#000] transition active:translate-x-1 active:translate-y-1 active:shadow-none"
              >
                Unlock Arcade Pass
              </a>
            </div>
          </div>

          {/* Right Hero: Brainrot to Big Brain Interactive Slider */}
          <div className="lg:col-span-5">
            <div className="p-6 rounded-3xl bg-white border-4 border-black shadow-[8px_8px_0px_#000] space-y-4">
              <div className="flex items-center justify-between pb-3 border-b-3 border-black">
                <span className="font-black text-xs uppercase tracking-wider">BRAINROT TRANSFORMER</span>
                <span className="px-2 py-0.5 bg-[#FFF455] border-2 border-black rounded font-black text-[10px]">
                  DIAL RATIO
                </span>
              </div>

              {/* Slider */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-black">
                  <span>💀 100% Brainrot Fluff</span>
                  <span className="text-[#8B5CF6]">🧠 90% Distilled Clarity</span>
                </div>
                <input
                  type="range"
                  min="20"
                  max="90"
                  value={brainrotRatio}
                  onChange={(e) => setBrainrotRatio(Number(e.target.value))}
                  className="w-full h-4 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#8B5CF6] border-2 border-black"
                />
              </div>

              {/* Visual Card changing with slider */}
              <div className={`p-4 rounded-2xl border-3 border-black transition-all ${
                brainrotRatio > 60 
                  ? "bg-[#D1FAE5] shadow-[4px_4px_0px_#000]" 
                  : "bg-[#FEE2E2] shadow-[4px_4px_0px_#000]"
              }`}>
                <div className="text-xs font-black uppercase mb-1">
                  {brainrotRatio > 60 ? "✨ BIG BRAIN STATUS ACHIEVED:" : "💀 CURRENTLY SUFFERING ACADEMIC PAIN:"}
                </div>
                <p className="text-xs font-bold leading-relaxed">
                  {brainrotRatio > 60
                    ? "Read time slashed from 2 hours to 3 minutes! Key insights, page 14 quote locked in, zero wasted neurons."
                    : "Reading 48 pages of passive-voice filler sentences. Eye lids heavy. Retained approximately 4%."}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Main Feature: THE DROPZONE ARCADE */}
      <section id="arcade-zone" className="max-w-6xl mx-auto px-4 sm:px-8 py-16">
        <div className="p-6 sm:p-10 rounded-3xl bg-white border-4 border-black shadow-[10px_10px_0px_#000] space-y-8">
          
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b-3 border-black">
            <div>
              <div className="flex items-center gap-2">
                <Gamepad2 className="w-6 h-6 text-[#8B5CF6]" />
                <h3 className="text-2xl sm:text-3xl font-black uppercase">THE DROPZONE ARCADE</h3>
              </div>
              <p className="text-xs font-bold text-slate-700">Choose a loaded PDF or test your reading speed quiz!</p>
            </div>

            {/* Document Switcher */}
            <div className="flex flex-wrap gap-2">
              {SAMPLE_DOCUMENTS.map((doc) => (
                <button
                  key={doc.id}
                  onClick={() => {
                    setSelectedDocId(doc.id);
                    setQuizSubmitted(false);
                    setSelectedQuizAnswer(null);
                  }}
                  className={`px-3 py-1.5 rounded-xl font-black text-xs border-2 border-black transition ${
                    selectedDocId === doc.id
                      ? "bg-[#8B5CF6] text-white shadow-[3px_3px_0px_#000] translate-x-[-1px] translate-y-[-1px]"
                      : "bg-[#FFF455] text-black hover:bg-yellow-300"
                  }`}
                >
                  {doc.title.slice(0, 20)}...
                </button>
              ))}
            </div>
          </div>

          {/* Synthesis Card */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            
            {/* Left 7 cols: Summary & Meme decoders */}
            <div className="lg:col-span-7 space-y-4">
              <div className="p-5 rounded-2xl bg-[#FEF08A] border-3 border-black shadow-[4px_4px_0px_#000]">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-black uppercase px-2 py-0.5 bg-black text-white rounded">
                    3-MIN ATOMIC SUMMARY
                  </span>
                  <span className="text-xs font-black text-slate-900">
                    Saves {currentDoc.originalReadTimeMinutes - 3} Minutes
                  </span>
                </div>
                <h4 className="text-lg font-black text-black mb-2">{currentDoc.title}</h4>
                <p className="text-xs font-bold text-slate-800 leading-relaxed mb-4">
                  "{currentDoc.summaryUltra.thesis}"
                </p>
                <div className="p-3 bg-white rounded-xl border-2 border-black font-black text-xs text-[#8B5CF6]">
                  ⚡ TL;DR: "{currentDoc.summaryUltra.killerTakeaway}"
                </div>
              </div>

              {/* Jargon Sticker Decoders */}
              <div className="space-y-2">
                <span className="text-xs font-black uppercase">Jargon Decoded to Plain English:</span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {currentDoc.hints.map((hint) => (
                    <div key={hint.id} className="p-3 rounded-xl bg-white border-2 border-black shadow-[3px_3px_0px_#000]">
                      <div className="font-black text-xs text-[#8B5CF6] mb-1">🏷️ {hint.term}</div>
                      <p className="text-[11px] font-bold text-slate-700 leading-snug">{hint.simplified}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right 5 cols: Interactive Confetti Speed Quiz */}
            <div className="lg:col-span-5 p-5 rounded-2xl bg-[#EDE9FE] border-3 border-black shadow-[4px_4px_0px_#000] space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5 font-black text-xs uppercase">
                  <Trophy className="w-4 h-4 text-[#8B5CF6]" />
                  <span>10-Second Speed Quiz</span>
                </div>
                <span className="px-2 py-0.5 rounded bg-black text-white text-[10px] font-black font-mono">+50 XP</span>
              </div>

              <p className="text-xs font-black text-slate-900">
                {quiz.question}
              </p>

              <div className="space-y-2">
                {quiz.options.map((opt, idx) => {
                  const isSelected = selectedQuizAnswer === idx;
                  const isCorrect = idx === quiz.correctIndex;
                  return (
                    <button
                      key={idx}
                      disabled={quizSubmitted}
                      onClick={() => handleQuizChoice(idx)}
                      className={`w-full p-3 rounded-xl border-2 border-black text-left text-xs font-black transition flex items-center justify-between ${
                        quizSubmitted
                          ? isCorrect
                            ? "bg-[#10B981] text-white shadow-[2px_2px_0px_#000]"
                            : isSelected
                              ? "bg-[#EF4444] text-white shadow-[2px_2px_0px_#000]"
                              : "bg-white text-slate-400"
                          : "bg-white text-black hover:bg-[#FFF455] shadow-[2px_2px_0px_#000] active:translate-x-0.5 active:translate-y-0.5"
                      }`}
                    >
                      <span>{opt}</span>
                      {quizSubmitted && isCorrect && <Check className="w-4 h-4" />}
                      {quizSubmitted && isSelected && !isCorrect && <X className="w-4 h-4" />}
                    </button>
                  );
                })}
              </div>

              {quizSubmitted && (
                <div className="p-3 rounded-xl bg-white border-2 border-black text-xs font-bold animate-in fade-in">
                  <span className="font-black text-[#8B5CF6] block mb-1">
                    {selectedQuizAnswer === quiz.correctIndex ? "🎉 BINGO! +50 XP" : "💡 NICE TRY!"}
                  </span>
                  <p className="text-[11px] text-slate-700">{quiz.explanation}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Arcade Pass Pricing */}
      <section id="arcade-pricing" className="max-w-6xl mx-auto px-4 sm:px-8 py-16">
        <div className="text-center max-w-xl mx-auto mb-12">
          <span className="px-3 py-1 rounded-full bg-black text-[#FFF455] font-black text-xs uppercase border-2 border-black shadow-[3px_3px_0px_#FFF455]">
            ARCADE PASSES
          </span>
          <h2 className="text-3xl sm:text-5xl font-black uppercase text-black mt-3">
            Unlock Unlimited Superpowers
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PRICING_TIERS.map((tier) => (
            <div
              key={tier.name}
              className={`p-6 rounded-3xl border-4 border-black flex flex-col justify-between ${
                tier.popular
                  ? "bg-[#8B5CF6] text-white shadow-[8px_8px_0px_#000] rotate-[-1deg]"
                  : "bg-white text-black shadow-[6px_6px_0px_#000]"
              }`}
            >
              <div>
                <span className="text-xs font-black uppercase">{tier.name}</span>
                <div className="flex items-baseline gap-1 my-3">
                  <span className="text-4xl font-black">{tier.price}</span>
                  <span className="text-xs font-bold opacity-80">{tier.period}</span>
                </div>
                <p className="text-xs font-bold mb-6 opacity-90">{tier.description}</p>

                <div className="space-y-2 pt-4 border-t-2 border-black/20 text-xs font-bold">
                  {tier.features.map((f, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <Check className="w-4 h-4 shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                className={`mt-8 w-full py-3 rounded-2xl font-black text-xs uppercase tracking-wider border-3 border-black shadow-[4px_4px_0px_#000] transition active:translate-x-1 active:translate-y-1 active:shadow-none ${
                  tier.popular
                    ? "bg-[#FFF455] text-black hover:bg-yellow-300"
                    : "bg-[#8B5CF6] text-white hover:bg-[#7C3AED]"
                }`}
              >
                {tier.cta}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="max-w-6xl mx-auto px-4 sm:px-8 pt-10 text-center font-black text-xs text-black border-t-3 border-black">
        <p className="mb-1">⚡ RATIO ARCADE: ZERO FLUFF, 100% SIGNAL.</p>
        <p className="text-slate-600 font-bold">© {new Date().getFullYear()} Ratio Reader. Level up your reading brain.</p>
      </footer>
    </div>
  );
}
