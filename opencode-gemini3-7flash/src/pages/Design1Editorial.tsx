import { useState } from "react";
import { 
  CheckCircle2, 
  Quote as QuoteIcon, 
  Bookmark, 
  ArrowRight, 
  Sparkles, 
  Share2, 
  Check 
} from "lucide-react";
import { SAMPLE_DOCUMENTS, HOW_IT_WORKS_STEPS, TESTIMONIALS, PRICING_TIERS } from "../data/samplePdfs";

export function Design1Editorial() {
  const [selectedDocId, setSelectedDocId] = useState<string>("deep-attention");
  const [ratioLevel, setRatioLevel] = useState<"ultra" | "balanced" | "deep">("balanced");
  const [activeTab, setActiveTab] = useState<"summary" | "quotes" | "glossary">("summary");
  const [activeQuoteId, setActiveQuoteId] = useState<string>("q1");
  const [selectedHintId, setSelectedHintId] = useState<string | null>(null);
  const [copiedQuote, setCopiedQuote] = useState(false);

  const currentDoc = SAMPLE_DOCUMENTS.find((d) => d.id === selectedDocId) || SAMPLE_DOCUMENTS[0];

  const targetReadTime = ratioLevel === "ultra" 
    ? currentDoc.summaryUltra.readTimeMinutes 
    : ratioLevel === "balanced" 
      ? currentDoc.summaryBalanced.readTimeMinutes 
      : currentDoc.summaryDeep.readTimeMinutes;

  const handleCopyQuote = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedQuote(true);
    setTimeout(() => setCopiedQuote(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#FBF8F2] text-[#1D1917] font-sans selection:bg-[#D9381E] selection:text-white pt-14 pb-20 bg-grain">
      
      {/* Editorial Gazette Topmast Header */}
      <header className="border-b border-stone-300 max-w-6xl mx-auto px-4 sm:px-8 pt-6 pb-4">
        <div className="flex flex-wrap items-center justify-between border-b border-stone-300 pb-2 text-[11px] uppercase tracking-widest text-stone-600 font-mono">
          <div className="flex items-center gap-4">
            <span>Edition No. 1,048</span>
            <span className="hidden sm:inline">•</span>
            <span className="hidden sm:inline">The Scholarly Review of Reading Tech</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="font-semibold text-stone-900">Tuesday Dispatch</span>
            <span>•</span>
            <span className="text-[#D9381E] font-bold">Signal Over Noise</span>
          </div>
        </div>

        {/* Masthead Title */}
        <div className="py-6 text-center">
          <p className="font-editorial italic text-stone-600 text-sm sm:text-base mb-1">
            "The mind does not require more pages, but clearer illumination."
          </p>
          <h1 className="font-editorial text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-stone-950 uppercase">
            Ratio Reader
          </h1>
          <div className="flex items-center justify-center gap-3 text-xs sm:text-sm font-mono text-stone-700 mt-2 uppercase tracking-wider">
            <span>[ Est. 2026 ]</span>
            <span>—</span>
            <span>The Algorithmic Atelier for Distilled Thought</span>
            <span>—</span>
            <span>[ 100% Citation Fidelity ]</span>
          </div>
        </div>

        {/* Navigation Ribbon */}
        <nav className="border-t-2 border-b-2 border-stone-900 py-2.5 flex items-center justify-between text-xs font-semibold tracking-wider uppercase">
          <div className="flex items-center gap-6">
            <a href="#atelier" className="hover:text-[#D9381E] transition">The Ratio Press</a>
            <a href="#proofroom" className="hover:text-[#D9381E] transition hidden sm:inline">The Proofroom</a>
            <a href="#lexicon" className="hover:text-[#D9381E] transition hidden sm:inline">Margin Lexicon</a>
            <a href="#dispatch" className="hover:text-[#D9381E] transition">Testimonials</a>
            <a href="#gazette-pricing" className="hover:text-[#D9381E] transition">Subscription</a>
          </div>
          <a 
            href="#atelier"
            className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#1D1917] text-[#FBF8F2] hover:bg-[#D9381E] transition text-xs font-mono tracking-normal"
          >
            <span>Digest Any PDF</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </nav>
      </header>

      {/* Hero Section: The Broadsheet Headline & Editorial Narrative */}
      <section className="max-w-6xl mx-auto px-4 sm:px-8 pt-10 pb-16 border-b border-stone-300">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Column */}
          <div className="lg:col-span-8 lg:border-r lg:border-stone-300 lg:pr-8">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-stone-200/80 text-stone-800 text-[11px] font-mono uppercase tracking-wider mb-4 border border-stone-300">
              <Sparkles className="w-3.5 h-3.5 text-[#D9381E]" />
              <span>Special Report on Cognitive Satiation</span>
            </div>

            <h2 className="font-editorial text-3xl sm:text-5xl md:text-6xl font-bold leading-[1.08] text-stone-950 mb-6">
              The Death of Dense Monoliths: A Mechanical Remedy for the Reader's Eye.
            </h2>

            <p className="font-editorial italic text-xl sm:text-2xl text-stone-700 leading-relaxed mb-6">
              You upload a hundred pages of academic prose, legal obscurity, or market filings. In seconds, Ratio Reader extracts the golden ratio of meaning: crystal summaries, page-anchored quotes, and clarifying margin hints.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-stone-700 font-serif leading-relaxed mb-8">
              <p>
                <span className="font-editorial font-bold text-4xl float-left mr-2 leading-none text-stone-950">F</span>
                or centuries, scholarship has confused length with depth. The modern intellectual is buried under thousands of PDF pages, ninety percent of which serve syntactic vanity rather than core insight.
              </p>
              <p>
                Ratio Reader acts as your digital atelier: preserving the rigor of the source with verbatim page citations while reducing parse time by upwards of eighty percent.
              </p>
            </div>

            {/* Quick Action Badges */}
            <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-stone-300 font-mono text-xs">
              <div className="flex items-center gap-1.5 text-stone-800">
                <CheckCircle2 className="w-4 h-4 text-[#D9381E]" />
                <span>Zero Hallucinations</span>
              </div>
              <div className="flex items-center gap-1.5 text-stone-800">
                <CheckCircle2 className="w-4 h-4 text-[#D9381E]" />
                <span>Verbatim Page Pointers</span>
              </div>
              <div className="flex items-center gap-1.5 text-stone-800">
                <CheckCircle2 className="w-4 h-4 text-[#D9381E]" />
                <span>Instant Audio Briefings</span>
              </div>
            </div>
          </div>

          {/* Right Column: Key Dispatch Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            <div className="p-5 bg-[#F3EDE0] border border-stone-300 relative shadow-sm">
              <div className="absolute -top-3 right-4 px-2 py-0.5 bg-[#D9381E] text-white text-[10px] font-mono uppercase tracking-widest">
                The Core Thesis
              </div>
              <h3 className="font-editorial font-bold text-lg text-stone-900 mb-2">
                The 80 / 20 Knowledge Theorem
              </h3>
              <p className="text-xs text-stone-700 leading-relaxed font-serif mb-4">
                "Reading every sentence of an 80-page document is not discipline; it is an unforced error. The master reader consumes the structural essence and inspects the evidence at key coordinate points."
              </p>
              <div className="border-t border-stone-300 pt-3 flex items-center justify-between text-xs font-mono text-stone-600">
                <span>Original: 3.5 hrs</span>
                <span className="text-[#D9381E] font-bold">Ratio: 8 mins</span>
              </div>
            </div>

            {/* Document Selector for Demo */}
            <div className="p-4 bg-white border border-stone-300">
              <p className="text-[11px] font-mono uppercase tracking-wider text-stone-500 mb-2">
                Select Document to Inspect:
              </p>
              <div className="space-y-2">
                {SAMPLE_DOCUMENTS.map((doc) => (
                  <button
                    key={doc.id}
                    onClick={() => setSelectedDocId(doc.id)}
                    className={`w-full text-left p-2.5 text-xs transition border ${
                      selectedDocId === doc.id
                        ? "bg-[#1D1917] text-[#FBF8F2] border-[#1D1917]"
                        : "bg-stone-50 text-stone-800 border-stone-200 hover:border-stone-400"
                    }`}
                  >
                    <div className="font-semibold line-clamp-1">{doc.title}</div>
                    <div className="flex items-center justify-between text-[10px] opacity-80 mt-1 font-mono">
                      <span>{doc.category}</span>
                      <span>{doc.originalPages} pages</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Antique Seal Quote */}
            <div className="text-center p-4 border border-dashed border-stone-400 text-stone-600 font-editorial text-xs italic">
              "An illuminated margin note is worth ten unassisted re-readings."
              <div className="font-mono not-italic text-[10px] mt-1 text-stone-500">— Oxford Reading Guild</div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Main Feature: THE RATIO PRESS ATELIER */}
      <section id="atelier" className="max-w-6xl mx-auto px-4 sm:px-8 py-16 border-b border-stone-300">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-block px-3 py-1 bg-stone-200 text-stone-800 text-xs font-mono uppercase tracking-widest mb-3 border border-stone-300">
            Interactive Instrument
          </div>
          <h2 className="font-editorial text-3xl sm:text-4xl font-bold text-stone-950">
            The Ratio Press Engine
          </h2>
          <p className="text-sm text-stone-600 font-serif mt-2">
            Adjust the mechanical compression lever below to witness how a {currentDoc.originalPages}-page manuscript condenses without losing a single drop of intellectual authority.
          </p>
        </div>

        {/* Compression Lever Controls */}
        <div className="bg-white border-2 border-stone-900 p-4 sm:p-6 mb-8 shadow-sm">
          <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-stone-200">
            <div>
              <span className="text-xs font-mono uppercase text-stone-500">Current Manuscript:</span>
              <h4 className="font-editorial text-lg sm:text-xl font-bold text-stone-950">{currentDoc.title}</h4>
              <p className="text-xs text-stone-600">{currentDoc.author}</p>
            </div>
            
            {/* Ratio Mode Switcher */}
            <div className="flex items-center gap-1 bg-stone-100 p-1 border border-stone-300 rounded-none">
              <button
                onClick={() => setRatioLevel("ultra")}
                className={`px-3 py-1.5 text-xs font-mono transition uppercase ${
                  ratioLevel === "ultra"
                    ? "bg-[#D9381E] text-white font-bold"
                    : "text-stone-700 hover:text-black"
                }`}
              >
                90% Ratio (3 Min)
              </button>
              <button
                onClick={() => setRatioLevel("balanced")}
                className={`px-3 py-1.5 text-xs font-mono transition uppercase ${
                  ratioLevel === "balanced"
                    ? "bg-[#D9381E] text-white font-bold"
                    : "text-stone-700 hover:text-black"
                }`}
              >
                75% Ratio (8 Min)
              </button>
              <button
                onClick={() => setRatioLevel("deep")}
                className={`px-3 py-1.5 text-xs font-mono transition uppercase ${
                  ratioLevel === "deep"
                    ? "bg-[#D9381E] text-white font-bold"
                    : "text-stone-700 hover:text-black"
                }`}
              >
                50% Deep Study
              </button>
            </div>
          </div>

          {/* Metric Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-4 text-xs font-mono border-b border-stone-200 bg-stone-50 px-4 mt-4">
            <div>
              <span className="text-stone-500 block">Original Length:</span>
              <span className="font-bold text-stone-900">{currentDoc.originalPages} pages ({currentDoc.originalWordCount.toLocaleString()} wds)</span>
            </div>
            <div>
              <span className="text-stone-500 block">Original Reading Time:</span>
              <span className="font-bold text-stone-900">{currentDoc.originalReadTimeMinutes} minutes</span>
            </div>
            <div>
              <span className="text-stone-500 block">Distilled Reading Time:</span>
              <span className="font-bold text-[#D9381E]">{targetReadTime} minutes</span>
            </div>
            <div>
              <span className="text-stone-500 block">Time Reclaimed:</span>
              <span className="font-bold text-emerald-700">
                {Math.round(((currentDoc.originalReadTimeMinutes - targetReadTime) / currentDoc.originalReadTimeMinutes) * 100)}% Saved
              </span>
            </div>
          </div>

          {/* Sub-tab navigation */}
          <div className="flex items-center gap-4 pt-4 border-b border-stone-200 text-xs font-mono uppercase tracking-wider">
            <button
              onClick={() => setActiveTab("summary")}
              className={`pb-2 border-b-2 font-bold transition ${
                activeTab === "summary" ? "border-[#D9381E] text-[#D9381E]" : "border-transparent text-stone-600 hover:text-black"
              }`}
            >
              The Synthesized Text
            </button>
            <button
              onClick={() => setActiveTab("quotes")}
              className={`pb-2 border-b-2 font-bold transition ${
                activeTab === "quotes" ? "border-[#D9381E] text-[#D9381E]" : "border-transparent text-stone-600 hover:text-black"
              }`}
            >
              Verified Quotes ({currentDoc.quotes.length})
            </button>
            <button
              onClick={() => setActiveTab("glossary")}
              className={`pb-2 border-b-2 font-bold transition ${
                activeTab === "glossary" ? "border-[#D9381E] text-[#D9381E]" : "border-transparent text-stone-600 hover:text-black"
              }`}
            >
              Margin Jargon Hints ({currentDoc.hints.length})
            </button>
          </div>

          {/* Tab Content Display */}
          <div className="pt-6">
            {activeTab === "summary" && (
              <div className="space-y-6">
                {/* Core Thesis Callout */}
                <div className="p-5 bg-[#F9F4E8] border-l-4 border-[#D9381E]">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-stone-500 block mb-1">
                    Primary Thesis Synthesis:
                  </span>
                  <p className="font-editorial text-lg sm:text-xl text-stone-900 leading-snug">
                    {ratioLevel === "ultra" && currentDoc.summaryUltra.thesis}
                    {ratioLevel === "balanced" && currentDoc.summaryBalanced.thesis}
                    {ratioLevel === "deep" && currentDoc.summaryDeep.thesis}
                  </p>
                </div>

                {/* Structured Sections */}
                {ratioLevel === "ultra" && (
                  <div className="space-y-4 font-serif text-sm">
                    <h5 className="font-mono text-xs uppercase tracking-wider text-stone-500">Essential Bullets:</h5>
                    <ul className="space-y-2.5">
                      {currentDoc.summaryUltra.bullets.map((b, i) => (
                        <li key={i} className="flex items-start gap-2.5">
                          <span className="text-[#D9381E] font-mono font-bold">•</span>
                          <span className="text-stone-800">{b}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="p-4 bg-stone-900 text-stone-100 font-editorial text-base italic mt-4">
                      "{currentDoc.summaryUltra.killerTakeaway}"
                    </div>
                  </div>
                )}

                {ratioLevel === "balanced" && (
                  <div className="space-y-6 font-serif">
                    {currentDoc.summaryBalanced.sections.map((sec, i) => (
                      <div key={i} className="border-b border-stone-200 pb-4">
                        <h5 className="font-editorial text-lg font-bold text-stone-900 mb-1.5">{sec.heading}</h5>
                        <p className="text-sm text-stone-700 leading-relaxed">{sec.content}</p>
                      </div>
                    ))}
                    <div className="p-4 bg-stone-100 border border-stone-300">
                      <span className="text-xs font-mono uppercase tracking-wider text-stone-600 block mb-2">
                        Immediate Takeaways:
                      </span>
                      <ul className="space-y-1.5 text-xs text-stone-800 font-serif">
                        {currentDoc.summaryBalanced.actionItems.map((item, idx) => (
                          <li key={idx} className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 bg-[#D9381E] rounded-full" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}

                {ratioLevel === "deep" && (
                  <div className="space-y-6 font-serif">
                    {currentDoc.summaryDeep.sections.map((sec, i) => (
                      <div key={i} className="space-y-3">
                        <h5 className="font-editorial text-xl font-bold text-stone-900">{sec.heading}</h5>
                        <p className="text-sm text-stone-700 leading-relaxed">{sec.content}</p>
                        <div className="pl-4 border-l-2 border-stone-300 space-y-1 text-xs text-stone-600 font-mono">
                          {sec.deepInsights.map((ins, idx) => (
                            <p key={idx}>▸ {ins}</p>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {activeTab === "quotes" && (
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {currentDoc.quotes.map((q) => (
                    <div
                      key={q.id}
                      onClick={() => setActiveQuoteId(q.id)}
                      className={`p-4 border text-left cursor-pointer transition ${
                        activeQuoteId === q.id 
                          ? "bg-[#FAF4E6] border-stone-900 ring-1 ring-stone-900" 
                          : "bg-stone-50 border-stone-200 hover:border-stone-400"
                      }`}
                    >
                      <div className="flex items-center justify-between text-[11px] font-mono text-stone-500 mb-2">
                        <span className="text-[#D9381E] font-bold">Page {q.page}, ¶ {q.paragraph}</span>
                        <span className="px-1.5 py-0.5 bg-emerald-100 text-emerald-800 border border-emerald-300">
                          Verified Source
                        </span>
                      </div>
                      <p className="font-editorial italic text-stone-900 text-base mb-2">
                        "{q.quote}"
                      </p>
                      <div className="text-[11px] text-stone-600 font-mono">
                        {q.context}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="p-4 bg-stone-900 text-stone-200 flex items-center justify-between text-xs font-mono">
                  <span>Selected Quote pinned to original PDF coordinates.</span>
                  <button
                    onClick={() => handleCopyQuote(currentDoc.quotes[0].quote)}
                    className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#D9381E] text-white hover:bg-red-700 transition"
                  >
                    {copiedQuote ? <Check className="w-3.5 h-3.5" /> : <Share2 className="w-3.5 h-3.5" />}
                    <span>{copiedQuote ? "Copied Citation" : "Copy Formatted Citation"}</span>
                  </button>
                </div>
              </div>
            )}

            {activeTab === "glossary" && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {currentDoc.hints.map((hint) => (
                  <div
                    key={hint.id}
                    onClick={() => setSelectedHintId(selectedHintId === hint.id ? null : hint.id)}
                    className={`p-4 border cursor-pointer transition ${
                      selectedHintId === hint.id
                        ? "bg-[#FAF4E6] border-stone-900"
                        : "bg-white border-stone-200 hover:border-stone-400"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-mono px-2 py-0.5 bg-stone-100 text-stone-700 border border-stone-200">
                        {hint.level}
                      </span>
                      <Bookmark className="w-3.5 h-3.5 text-[#D9381E]" />
                    </div>
                    <h5 className="font-editorial font-bold text-stone-950 text-base mb-1">{hint.term}</h5>
                    <p className="text-xs text-stone-700 font-serif leading-relaxed mb-3">{hint.simplified}</p>
                    <div className="text-[11px] font-mono text-[#D9381E] pt-2 border-t border-stone-200">
                      Why it matters: <span className="text-stone-600 font-serif">{hint.whyItMatters}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* How it Works: The Four Pillars */}
      <section className="max-w-6xl mx-auto px-4 sm:px-8 py-16 border-b border-stone-300">
        <div className="text-center max-w-xl mx-auto mb-12">
          <p className="text-xs font-mono uppercase tracking-widest text-[#D9381E]">The Scholarly Method</p>
          <h2 className="font-editorial text-3xl sm:text-4xl font-bold text-stone-950">
            From Dense Monolith to Pure Comprehension
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {HOW_IT_WORKS_STEPS.map((step) => (
            <div key={step.step} className="p-5 bg-white border border-stone-300 relative group hover:border-stone-900 transition">
              <span className="font-editorial font-bold text-4xl text-stone-300 group-hover:text-[#D9381E] transition">
                {step.step}
              </span>
              <h4 className="font-editorial text-lg font-bold text-stone-950 mt-2 mb-2">{step.title}</h4>
              <p className="text-xs text-stone-600 font-serif leading-relaxed mb-4">{step.desc}</p>
              <div className="text-[11px] font-mono text-stone-500 pt-3 border-t border-stone-200">
                {step.highlight}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Dispatch */}
      <section id="dispatch" className="max-w-6xl mx-auto px-4 sm:px-8 py-16 border-b border-stone-300">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
          <div>
            <p className="text-xs font-mono uppercase tracking-widest text-stone-500">The Scholarly Forum</p>
            <h2 className="font-editorial text-3xl sm:text-4xl font-bold text-stone-950">
              Dispatches From the Reading Guild
            </h2>
          </div>
          <span className="text-xs font-mono text-stone-500">Over 240,000 pages parsed weekly</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, idx) => (
            <div key={idx} className="p-6 bg-[#FBF9F4] border border-stone-300 flex flex-col justify-between shadow-sm">
              <div>
                <QuoteIcon className="w-6 h-6 text-stone-300 mb-3" />
                <p className="font-editorial italic text-stone-800 text-base leading-relaxed mb-4">
                  "{t.quote}"
                </p>
              </div>
              <div className="pt-4 border-t border-stone-200">
                <div className="font-bold font-editorial text-stone-950 text-base">{t.name}</div>
                <div className="text-xs text-stone-600 font-mono">{t.role}</div>
                <div className="text-[11px] text-[#D9381E] font-mono mt-2">{t.pagesRead}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Subscription Pricing Gazette */}
      <section id="gazette-pricing" className="max-w-6xl mx-auto px-4 sm:px-8 py-16">
        <div className="text-center max-w-xl mx-auto mb-12">
          <p className="text-xs font-mono uppercase tracking-widest text-[#D9381E]">Annual & Monthly Registry</p>
          <h2 className="font-editorial text-3xl sm:text-4xl font-bold text-stone-950">
            Choose Your Reading Charter
          </h2>
          <p className="text-xs text-stone-600 font-serif mt-2">
            Cancel anytime. No lock-in. Full access to the Ratio compression engine and export suites.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {PRICING_TIERS.map((tier) => (
            <div
              key={tier.name}
              className={`p-6 border flex flex-col justify-between ${
                tier.popular
                  ? "bg-stone-900 text-stone-100 border-stone-900 shadow-xl relative"
                  : "bg-white text-stone-900 border-stone-300"
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 bg-[#D9381E] text-white text-[10px] font-mono uppercase tracking-widest">
                  The Preferred Scholar
                </div>
              )}

              <div>
                <div className="text-xs font-mono uppercase tracking-wider opacity-70 mb-1">{tier.name}</div>
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="font-editorial text-4xl font-bold">{tier.price}</span>
                  <span className="text-xs font-mono opacity-80">{tier.period}</span>
                </div>
                <p className={`text-xs font-serif mb-6 ${tier.popular ? "text-stone-300" : "text-stone-600"}`}>
                  {tier.description}
                </p>

                <div className="space-y-2.5 pt-4 border-t border-stone-700/40 text-xs font-serif">
                  {tier.features.map((f, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <Check className={`w-3.5 h-3.5 mt-0.5 ${tier.popular ? "text-[#D9381E]" : "text-stone-900"}`} />
                      <span className={tier.popular ? "text-stone-200" : "text-stone-800"}>{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-4">
                <button
                  className={`w-full py-2.5 text-xs font-mono uppercase tracking-wider transition ${
                    tier.popular
                      ? "bg-[#D9381E] text-white hover:bg-red-700"
                      : "bg-stone-900 text-white hover:bg-[#D9381E]"
                  }`}
                >
                  {tier.cta}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Gazette Colophon Footer */}
      <footer className="border-t-2 border-stone-900 max-w-6xl mx-auto px-4 sm:px-8 pt-10 text-stone-600 font-mono text-xs">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pb-8">
          <div>
            <h5 className="font-editorial text-lg font-bold text-stone-900 mb-2">Ratio Reader</h5>
            <p className="text-xs font-serif text-stone-700 leading-relaxed">
              Synthesizing scholarly literature, corporate disclosures, and long-form volumes into high-signal clarity.
            </p>
          </div>
          <div>
            <h5 className="font-mono text-xs font-bold text-stone-900 uppercase mb-2">Colophon</h5>
            <p className="text-[11px] text-stone-600 leading-relaxed">
              Typeset in Newsreader and JetBrains Mono. Built with deterministic citation vectors. Zero telemetry sold.
            </p>
          </div>
          <div className="text-right sm:text-right">
            <span className="inline-block p-2 border border-stone-400 text-[10px] text-stone-800 uppercase tracking-wider">
              Verification Protocol: 100% Truth-Bound
            </span>
          </div>
        </div>
        <div className="border-t border-stone-300 py-4 text-center text-[11px] text-stone-500">
          © {new Date().getFullYear()} Ratio Reader Atelier. All scholarly rights reserved.
        </div>
      </footer>
    </div>
  );
}
