import { useState } from "react";
import { mockPapers } from "../mockData";
import type { MockPaper } from "../mockData";
import { Sparkles, ChevronRight, Layers } from "lucide-react";

export function DesignOne() {
  const [selectedPaper, setSelectedPaper] = useState<MockPaper>(mockPapers[0]);
  const [showSignalOnly, setShowSignalOnly] = useState(false);
  const [activeTab, setActiveTab] = useState<"summary" | "quotes" | "concepts">("summary");

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-black font-brutalist-sans p-6 md:p-12 pb-32">
      {/* Top Banner */}
      <div className="border-3 border-black bg-black text-white p-3 text-center text-xs font-bold uppercase tracking-widest mb-8 shadow-[4px_4px_0px_0px_#eab308]">
        ⚡ RATIO READER: DENSE ACADEMIC PAPERS DISTILLED INTO SEMANTIC GOLD ⚡
      </div>

      {/* Header */}
      <header className="flex flex-col md:flex-row md:items-center justify-between border-b-3 border-black pb-6 mb-12">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-black border-2 border-black flex items-center justify-center text-yellow-400 font-brutalist-display text-3xl font-extrabold shadow-[2px_2px_0px_0px_#22d3ee]">
            R
          </div>
          <div>
            <h1 className="text-3xl font-extrabold tracking-tight font-brutalist-display uppercase leading-none">
              RATIO READER
            </h1>
            <p className="text-xs font-bold tracking-wider text-slate-500 uppercase mt-1">
              THE NO-SLOP ACADEMIC INGESTION TOOL
            </p>
          </div>
        </div>
        <nav className="flex items-center gap-4 mt-4 md:mt-0 text-sm font-bold">
          <a href="#demo" className="hover:underline">THE DEMO</a>
          <a href="#how" className="hover:underline">CORE MECHANICS</a>
          <button className="border-2 border-black bg-yellow-400 px-4 py-1.5 text-xs font-bold uppercase shadow-[2px_2px_0px_0px_#000] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0px_0px_#000] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all cursor-pointer">
            GET PRO VERSION
          </button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-block border-2 border-black bg-cyan-200 text-black px-3 py-1 font-extrabold text-xs uppercase shadow-[2px_2px_0px_0px_#000]">
            * NOW LAUNCHED *
          </div>
          <h2 className="text-5xl md:text-7xl font-extrabold tracking-tighter uppercase font-brutalist-display leading-[0.9] text-black">
            STOP READING <span className="bg-yellow-300 px-2 py-0.5 border border-black inline-block -rotate-1">BOILERPLATE.</span>
          </h2>
          <p className="text-lg md:text-xl font-bold leading-snug border-l-4 border-black pl-4">
            Academic literature is padded. We extract the vital architecture of any PDF. Get summaries, context-aware definitions, and exact quotes instantly.
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <a 
              href="#demo"
              className="border-3 border-black bg-black text-white hover:bg-yellow-400 hover:text-black font-extrabold uppercase px-6 py-3.5 text-sm tracking-wider shadow-[4px_4px_0px_0px_#eab308] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_#000] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none transition-all cursor-pointer inline-flex items-center gap-2"
            >
              <span>RUN INTERACTIVE SIMULATOR</span>
              <ChevronRight className="w-4 h-4" />
            </a>
            <button className="border-3 border-black bg-white hover:bg-cyan-200 text-black font-extrabold uppercase px-6 py-3.5 text-sm tracking-wider shadow-[4px_4px_0px_0px_#000] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_#000] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none transition-all cursor-pointer">
              UPLOAD DIRECTLY
            </button>
          </div>
        </div>

        {/* Hero Card */}
        <div className="lg:col-span-5 border-3 border-black bg-white p-6 shadow-[8px_8px_0px_0px_#000] flex flex-col justify-between space-y-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 bg-yellow-400 border-l-3 border-b-3 border-black px-4 py-1 text-xs font-bold uppercase">
            STATS
          </div>
          <div className="space-y-4">
            <span className="text-xs uppercase font-extrabold tracking-widest text-slate-500">BENEFITS</span>
            <ul className="space-y-3 font-bold text-sm">
              <li className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 bg-black border border-black rotate-45 inline-block" />
                <span>400% faster reading speeds</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 bg-black border border-black rotate-45 inline-block" />
                <span>Retention rate boosted by 82%</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 bg-black border border-black rotate-45 inline-block" />
                <span>No hallucinations (exact citations)</span>
              </li>
            </ul>
          </div>
          <div className="bg-yellow-100 border-2 border-black p-4 text-xs font-bold leading-relaxed shadow-[3px_3px_0px_0px_#000]">
            "Ratio Reader has completely shifted how we audit academic research. The signal-to-noise ratio is immaculate."
            <div className="mt-2 text-slate-600 font-extrabold uppercase">— Dev Audit Lab</div>
          </div>
        </div>
      </section>

      {/* Simulator Demo */}
      <section id="demo" className="scroll-mt-6 border-3 border-black bg-white p-6 md:p-8 shadow-[10px_10px_0px_0px_#000] space-y-8">
        <div className="border-b-3 border-black pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h3 className="text-2xl font-black font-brutalist-display uppercase tracking-tight">
              INTERACTIVE DEMO / PREVIEW ENGINE
            </h3>
            <p className="text-xs font-bold text-slate-500 mt-1">SELECT A MOCK PDF AND TOGGLE THE SIGNAL FILTER</p>
          </div>
          
          <div className="flex flex-wrap items-center gap-2.5">
            {mockPapers.map((paper) => (
              <button
                key={paper.id}
                onClick={() => setSelectedPaper(paper)}
                className={`px-3 py-1.5 border-2 border-black text-xs font-bold uppercase transition-all shadow-[2px_2px_0px_0px_#000] cursor-pointer ${
                  selectedPaper.id === paper.id ? "bg-black text-yellow-400" : "bg-white hover:bg-slate-100 text-black"
                }`}
              >
                {paper.title.slice(0, 20)}...
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Document Panel */}
          <div className="lg:col-span-7 border-3 border-black bg-stone-50 p-6 flex flex-col justify-between shadow-[4px_4px_0px_0px_#000] relative">
            <div className="absolute top-4 right-4 flex items-center gap-2">
              <span className="text-[10px] font-extrabold uppercase text-slate-500 tracking-wider">FILTER NOISE:</span>
              <button 
                onClick={() => setShowSignalOnly(!showSignalOnly)}
                className={`relative w-11 h-6 rounded-full border-2 border-black transition-colors duration-200 cursor-pointer ${
                  showSignalOnly ? "bg-yellow-400" : "bg-white"
                }`}
              >
                <span className={`absolute top-0.5 left-0.5 w-4.5 h-4.5 rounded-full border border-black bg-black transition-transform duration-200 ${
                  showSignalOnly ? "translate-x-5 bg-yellow-900" : ""
                }`} />
              </button>
            </div>

            <div className="space-y-6">
              <div className="space-y-1">
                <span className="text-[10px] font-bold uppercase tracking-wider text-yellow-600 bg-yellow-200 border border-black px-2 py-0.5">
                  SOURCE DOCUMENT
                </span>
                <h4 className="text-xl font-extrabold tracking-tight pt-2">{selectedPaper.title}</h4>
                <p className="text-xs font-bold text-slate-500">By {selectedPaper.author} • {selectedPaper.year} • {selectedPaper.wordCount} words</p>
              </div>

              <div className="space-y-6 border-t-2 border-dashed border-black/20 pt-6">
                {selectedPaper.chapters.map((ch, idx) => (
                  <div key={idx} className="space-y-2">
                    <h5 className="text-sm font-bold uppercase tracking-wide text-slate-600">{ch.title}</h5>
                    <div className="text-sm leading-relaxed font-medium text-slate-800 space-y-4">
                      <p className="relative">
                        {ch.text.split(" ").map((word, wIdx) => {
                          // Simple mock highlighting: highlight specific words related to concepts
                          const cleanWord = word.replace(/[^a-zA-Z]/g, "").toLowerCase();
                          const isSignal = cleanWord === "working" || cleanWord === "memory" || cleanWord === "cognitive" || cleanWord === "signal" || cleanWord === "friction" || cleanWord === "consensus" || cleanWord === "latency" || cleanWord === "nodes" || cleanWord === "split";
                          
                          if (showSignalOnly && !isSignal) {
                            return (
                              <span key={wIdx} className="opacity-15 transition-opacity duration-300 inline-block mr-1">
                                {word}
                              </span>
                            );
                          }
                          return (
                            <span 
                              key={wIdx} 
                              className={`transition-all duration-300 inline-block mr-1 ${
                                isSignal ? "bg-yellow-300 border-b border-black font-bold" : ""
                              }`}
                            >
                              {word}
                            </span>
                          );
                        })}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 border-t-2 border-black pt-4 flex justify-between items-center text-xs font-bold text-slate-500">
              <span>PAGE 1 OF 12</span>
              <span>COMPRESSION: {showSignalOnly ? "90%" : "0%"}</span>
            </div>
          </div>

          {/* Analysis Panel */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Tabs */}
            <div className="flex border-3 border-black bg-black p-1 shadow-[3px_3px_0px_0px_#000]">
              {(["summary", "quotes", "concepts"] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`flex-1 py-1.5 text-xs font-bold uppercase tracking-wide transition-colors cursor-pointer ${
                    activeTab === tab ? "bg-yellow-400 text-black" : "text-white hover:bg-slate-800"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Tab content panel */}
            <div className="border-3 border-black bg-white p-6 shadow-[4px_4px_0px_0px_#22d3ee] flex-grow min-h-[300px]">
              {activeTab === "summary" && (
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <div className="p-1 bg-yellow-400 border border-black">
                      <Sparkles className="w-4 h-4 text-black" />
                    </div>
                    <h5 className="text-md font-bold uppercase">DILUTED BOILERPLATE STRIPPED</h5>
                  </div>
                  <p className="text-sm font-bold text-slate-600 bg-slate-100 border border-black p-3.5">
                    {selectedPaper.summary}
                  </p>
                  <div className="space-y-3 pt-2">
                    <p className="text-xs uppercase font-extrabold tracking-wider text-slate-500">CHAPTER BULLETS:</p>
                    {selectedPaper.chapters.map((ch, idx) => (
                      <div key={idx} className="border-l-3 border-black pl-3 py-1 space-y-1">
                        <span className="text-[10px] font-extrabold uppercase text-yellow-600">{ch.title}</span>
                        <p className="text-xs font-bold leading-normal">{ch.summary}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === "quotes" && (
                <div className="space-y-4">
                  <h5 className="text-md font-bold uppercase">VERBATIM COMPASS QUOTES</h5>
                  <div className="space-y-4">
                    {selectedPaper.chapters.flatMap((c) => c.quotes).map((q, idx) => (
                      <div key={idx} className="bg-cyan-50 border-2 border-black p-4 shadow-[3px_3px_0px_0px_#000] relative">
                        <span className="absolute -top-3 left-4 bg-black text-white px-2 py-0.5 text-[9px] font-bold border border-black">
                          CITED P.{q.page}
                        </span>
                        <p className="text-sm italic font-extrabold leading-snug mt-1">"{q.text}"</p>
                        <p className="text-[10px] text-slate-500 font-bold uppercase text-right mt-2">— {q.author}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === "concepts" && (
                <div className="space-y-4">
                  <h5 className="text-md font-bold uppercase font-brutalist-display">THE COGNITIVE WEB</h5>
                  <p className="text-xs font-bold text-slate-500">High-relevance semantic entities mapped in the PDF:</p>
                  <div className="space-y-3">
                    {selectedPaper.concepts.map((concept, idx) => (
                      <div key={idx} className="border-2 border-black p-3 hover:bg-amber-50 transition-colors">
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-sm font-bold uppercase">{concept.name}</span>
                          <span className="text-[10px] bg-black text-yellow-400 font-bold px-1.5 py-0.5 border border-black">
                            {concept.relevance}% relevance
                          </span>
                        </div>
                        <p className="text-xs font-medium text-slate-600 leading-normal">{concept.description}</p>
                        <div className="flex flex-wrap gap-1.5 mt-2">
                          <span className="text-[9px] font-bold text-slate-400">LINKS:</span>
                          {concept.connections.map((conn, cIdx) => (
                            <span key={cIdx} className="text-[9px] font-extrabold uppercase bg-slate-100 border border-slate-300 px-1">
                              {conn}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Grid of features */}
      <section id="how" className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="border-3 border-black bg-white p-6 shadow-[5px_5px_0px_0px_#000] space-y-3">
          <div className="w-10 h-10 bg-black flex items-center justify-center text-white font-bold text-lg border-2 border-black shadow-[2px_2px_0px_0px_#eab308]">
            01
          </div>
          <h4 className="text-lg font-extrabold uppercase">ASYNCHRONOUS HIGHLIGHTS</h4>
          <p className="text-xs font-bold text-slate-600 leading-relaxed">
            Instead of manually clicking highlighter lines, our engine isolates primary arguments automatically on document upload, saving hours of visual search time.
          </p>
        </div>
        <div className="border-3 border-black bg-white p-6 shadow-[5px_5px_0px_0px_#000] space-y-3">
          <div className="w-10 h-10 bg-black flex items-center justify-center text-white font-bold text-lg border-2 border-black shadow-[2px_2px_0px_0px_#22d3ee]">
            02
          </div>
          <h4 className="text-lg font-extrabold uppercase">ANNOTATED GLOSSARY</h4>
          <p className="text-xs font-bold text-slate-600 leading-relaxed">
            Every technical acronym, historical citation, or field-specific jargon gets mapped to a margin card. Hovering provides full contextual data without tab-switching.
          </p>
        </div>
        <div className="border-3 border-black bg-white p-6 shadow-[5px_5px_0px_0px_#000] space-y-3">
          <div className="w-10 h-10 bg-black flex items-center justify-center text-white font-bold text-lg border-2 border-black shadow-[2px_2px_0px_0px_#f43f5e]">
            03
          </div>
          <h4 className="text-lg font-extrabold uppercase">COGNITIVE COMPRESSION</h4>
          <p className="text-xs font-bold text-slate-600 leading-relaxed">
            We shrink files by removing standard boilerplate (literature history, generic formulas, citations, repetitive reviews), keeping 100% of core logic.
          </p>
        </div>
      </section>

      {/* Brutalist Footer */}
      <footer className="mt-24 border-t-3 border-black pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-extrabold">
        <div className="flex items-center gap-2">
          <Layers className="w-4 h-4" />
          <span>RATIO SYSTEM INC. © 2026. ALL RIGHTS OBLITERATED.</span>
        </div>
        <div className="flex gap-4">
          <a href="#" className="hover:underline">PRIVACY.TXT</a>
          <a href="#" className="hover:underline">TERMS.TXT</a>
          <a href="#" className="hover:underline">GITHUB</a>
        </div>
      </footer>
    </div>
  );
}
