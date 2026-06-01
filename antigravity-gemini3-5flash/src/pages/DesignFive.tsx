import { useState } from "react";
import { mockPapers } from "../mockData";
import type { MockPaper } from "../mockData";
import { Sparkles, ArrowRight, ShieldCheck, Zap, Layers, Network, ChevronRight } from "lucide-react";

export function DesignFive() {
  const [selectedPaper, setSelectedPaper] = useState<MockPaper>(mockPapers[0]);
  const [activeConceptName, setActiveConceptName] = useState<string>("Cognitive Load");

  const handlePaperChange = (paper: MockPaper) => {
    setSelectedPaper(paper);
    if (paper.concepts.length > 0) {
      setActiveConceptName(paper.concepts[0].name);
    }
  };

  const activeConcept = selectedPaper.concepts.find(c => c.name === activeConceptName) || selectedPaper.concepts[0];

  return (
    <div className="min-h-screen text-white font-swiss-sans relative overflow-hidden pb-32 gradient-mesh animate-mesh">
      
      {/* Glow overlays */}
      <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] bg-pink-500/20 rounded-full blur-3xl animate-float-slow -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-violet-600/20 rounded-full blur-3xl animate-float-slow -z-10" style={{ animationDelay: "2s" }} />

      {/* Main Container */}
      <div className="max-w-6xl mx-auto px-6 space-y-16">
        
        {/* Glass Header */}
        <header className="mt-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl px-6 py-4 flex items-center justify-between shadow-2xl">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-pink-500 via-purple-600 to-indigo-600 flex items-center justify-center text-white shadow-lg shadow-purple-500/20">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <div>
              <span className="font-brutalist-display text-lg font-bold tracking-tight bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
                Ratio Reader
              </span>
              <span className="text-[9px] font-mono text-purple-400 block tracking-widest uppercase">LIQUID INTUITIVE GRAPH</span>
            </div>
          </div>

          <nav className="flex items-center gap-6 text-sm font-semibold text-slate-300">
            <a href="#canvas" className="hover:text-white transition-colors">THE CANVAS</a>
            <a href="#security" className="hover:text-white transition-colors">SPECIFICATIONS</a>
            <button className="bg-gradient-to-r from-pink-500 to-violet-600 text-white text-xs font-semibold px-4 py-2 rounded-xl hover:shadow-lg hover:shadow-pink-500/25 transition-all duration-200 scale-100 hover:scale-[1.02] cursor-pointer">
              GET TRIAL ACCESS
            </button>
          </nav>
        </header>

        {/* Hero Section */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-8">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-pink-300">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Next-Gen Semantic Visualizer</span>
            </div>
            <h2 className="font-brutalist-display text-4xl sm:text-6xl font-extrabold tracking-tight leading-[1.05] text-white">
              Map your reading <br />
              <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">in liquid orbits.</span>
            </h2>
            <p className="text-base text-slate-300 leading-relaxed max-w-xl">
              Ratio Reader maps your PDFs into interactive, visual node graphs. Break down complex literature, locate cross-chapter citations, and generate summaries inside a fluid web canvas.
            </p>
            <div className="flex gap-4">
              <a 
                href="#canvas"
                className="bg-white hover:bg-slate-100 text-slate-950 font-bold px-6 py-3 rounded-xl transition-all duration-200 shadow-xl inline-flex items-center gap-2 cursor-pointer scale-100 hover:scale-[1.02]"
              >
                <span>OPEN PREVIEW CANVAS</span>
                <ChevronRight className="w-4 h-4 text-slate-900" />
              </a>
              <button className="bg-white/5 hover:bg-white/10 text-white font-bold border border-white/10 px-6 py-3 rounded-xl transition-all duration-200 cursor-pointer">
                READ TECHNICAL DOCS
              </button>
            </div>
          </div>

          {/* SaaS Hero Graphic */}
          <div className="lg:col-span-5 relative group">
            <div className="absolute inset-0 bg-gradient-to-tr from-pink-500 to-indigo-600 rounded-3xl blur-2xl opacity-30 group-hover:opacity-45 transition duration-300 -z-10" />
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-3xl shadow-2xl space-y-6 transform hover:-translate-y-1 transition-transform duration-300">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <span className="text-xs font-bold text-slate-400 uppercase">SYSTEM DIAGNOSTICS</span>
                <div className="flex gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                  <span className="w-2.5 h-2.5 rounded-full bg-cyan-500" />
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center bg-white/5 p-3 rounded-xl border border-white/5">
                  <div className="flex items-center gap-3">
                    <Zap className="w-5 h-5 text-amber-400" />
                    <div>
                      <span className="text-xs font-semibold block text-white">Ingestion Speed</span>
                      <span className="text-[10px] text-slate-400">4,000 words per second</span>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-emerald-400">+400%</span>
                </div>
                <div className="flex justify-between items-center bg-white/5 p-3 rounded-xl border border-white/5">
                  <div className="flex items-center gap-3">
                    <Layers className="w-5 h-5 text-pink-400" />
                    <div>
                      <span className="text-xs font-semibold block text-white">Ingestion Compression</span>
                      <span className="text-[10px] text-slate-400">Pure Signal Isolation</span>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-emerald-400">90% Reduction</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Interactive Preview Canvas */}
        <section id="canvas" className="scroll-mt-8 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between border-b border-white/10 pb-4 gap-4">
            <div className="space-y-1">
              <h3 className="font-brutalist-display text-2xl font-bold uppercase tracking-tight">01 / CONCEPT ORBIT CANVAS</h3>
              <p className="text-xs text-slate-400">CLICK NODES TO TRACE SEMANTIC CONNECTIONS</p>
            </div>
            
            <div className="flex gap-2">
              {mockPapers.map((paper) => (
                <button
                  key={paper.id}
                  onClick={() => handlePaperChange(paper)}
                  className={`text-xs font-semibold px-4 py-1.5 rounded-xl border transition-all cursor-pointer ${
                    selectedPaper.id === paper.id
                      ? "bg-white/15 border-white/40 text-white"
                      : "bg-white/5 border-white/5 text-slate-400 hover:text-white"
                  }`}
                >
                  {paper.title.slice(0, 18)}...
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Interactive Canvas Graph Simulator (7 cols) */}
            <div className="lg:col-span-7 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 shadow-2xl relative min-h-[400px] flex items-center justify-center overflow-hidden">
              {/* Background abstract connection lines */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
                <line x1="20%" y1="30%" x2="50%" y2="50%" stroke="white" strokeWidth="1" strokeDasharray="4 4" />
                <line x1="80%" y1="35%" x2="50%" y2="50%" stroke="white" strokeWidth="1" strokeDasharray="4 4" />
                <line x1="50%" y1="75%" x2="50%" y2="50%" stroke="white" strokeWidth="1" strokeDasharray="4 4" />
                <line x1="20%" y1="30%" x2="50%" y2="75%" stroke="white" strokeWidth="1" strokeDasharray="4 4" />
                <line x1="80%" y1="35%" x2="50%" y2="75%" stroke="white" strokeWidth="1" strokeDasharray="4 4" />
              </svg>

              {/* Floating planetary concept nodes */}
              <div className="absolute inset-0 flex items-center justify-center">
                {/* Center Node (Core) */}
                <div className="relative">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-pink-500 to-violet-600 flex items-center justify-center p-0.5 shadow-2xl shadow-purple-500/30 animate-pulse">
                    <div className="w-full h-full bg-slate-950 rounded-full flex flex-col items-center justify-center text-center p-2">
                      <Network className="w-4 h-4 text-pink-400 mb-1" />
                      <span className="text-[9px] font-bold text-white uppercase leading-none">Ratio Core</span>
                    </div>
                  </div>
                </div>

                {/* Node 1 */}
                {selectedPaper.concepts[0] && (
                  <button
                    onClick={() => setActiveConceptName(selectedPaper.concepts[0].name)}
                    className={`absolute transform -translate-x-32 -translate-y-24 w-28 h-28 rounded-full flex items-center justify-center p-0.5 transition-all duration-300 cursor-pointer ${
                      activeConceptName === selectedPaper.concepts[0].name
                        ? "scale-110 shadow-xl shadow-pink-500/25 ring-2 ring-pink-400"
                        : "opacity-75 hover:opacity-100 hover:scale-105"
                    }`}
                  >
                    <div className="w-full h-full bg-white/5 backdrop-blur-xl border border-white/10 rounded-full flex flex-col items-center justify-center text-center p-2.5">
                      <span className="text-[10px] font-bold text-pink-300 uppercase leading-tight">{selectedPaper.concepts[0].name}</span>
                      <span className="text-[8px] text-slate-400 mt-1">{selectedPaper.concepts[0].relevance}% relevance</span>
                    </div>
                  </button>
                )}

                {/* Node 2 */}
                {selectedPaper.concepts[1] && (
                  <button
                    onClick={() => setActiveConceptName(selectedPaper.concepts[1].name)}
                    className={`absolute transform translate-x-32 -translate-y-16 w-28 h-28 rounded-full flex items-center justify-center p-0.5 transition-all duration-300 cursor-pointer ${
                      activeConceptName === selectedPaper.concepts[1].name
                        ? "scale-110 shadow-xl shadow-violet-500/25 ring-2 ring-violet-400"
                        : "opacity-75 hover:opacity-100 hover:scale-105"
                    }`}
                  >
                    <div className="w-full h-full bg-white/5 backdrop-blur-xl border border-white/10 rounded-full flex flex-col items-center justify-center text-center p-2.5">
                      <span className="text-[10px] font-bold text-violet-300 uppercase leading-tight">{selectedPaper.concepts[1].name}</span>
                      <span className="text-[8px] text-slate-400 mt-1">{selectedPaper.concepts[1].relevance}% relevance</span>
                    </div>
                  </button>
                )}

                {/* Node 3 */}
                {selectedPaper.concepts[2] && (
                  <button
                    onClick={() => setActiveConceptName(selectedPaper.concepts[2].name)}
                    className={`absolute transform -translate-y-36 w-28 h-28 rounded-full flex items-center justify-center p-0.5 transition-all duration-300 cursor-pointer ${
                      activeConceptName === selectedPaper.concepts[2].name
                        ? "scale-110 shadow-xl shadow-cyan-500/25 ring-2 ring-cyan-400"
                        : "opacity-75 hover:opacity-100 hover:scale-105"
                    }`}
                  >
                    <div className="w-full h-full bg-white/5 backdrop-blur-xl border border-white/10 rounded-full flex flex-col items-center justify-center text-center p-2.5">
                      <span className="text-[10px] font-bold text-cyan-300 uppercase leading-tight">{selectedPaper.concepts[2].name}</span>
                      <span className="text-[8px] text-slate-400 mt-1">{selectedPaper.concepts[2].relevance}% relevance</span>
                    </div>
                  </button>
                )}

                {/* Node 4 (Helper or detail) */}
                <div className="absolute transform translate-y-32 w-48 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl px-4 py-2.5 text-center text-[10px] text-slate-300">
                  <span className="text-white font-bold block mb-1">SELECTED PAPER:</span>
                  <span className="truncate block font-semibold text-purple-300">{selectedPaper.title}</span>
                </div>
              </div>
            </div>

            {/* Glass Detail Sidebar Card (5 cols) */}
            <div className="lg:col-span-5 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 shadow-2xl flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b border-white/10 pb-3">
                  <span className="text-xs font-bold text-pink-400 uppercase tracking-widest">CONCEPT DETAILS</span>
                  <span className="text-[10px] bg-pink-500/10 border border-pink-500/30 px-2 py-0.5 rounded-full text-pink-300">
                    Active Node
                  </span>
                </div>

                <div className="space-y-2 animate-fade-in">
                  <h4 className="text-lg font-bold text-white">{activeConcept.name}</h4>
                  <p className="text-xs leading-relaxed text-slate-300">
                    {activeConcept.description}
                  </p>
                </div>

                {/* Orbits connections lists */}
                <div className="space-y-2 pt-2">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">ORBITAL CORRELATION PATHS:</span>
                  <div className="flex flex-wrap gap-2">
                    {activeConcept.connections.map((c, i) => (
                      <span 
                        key={i} 
                        onClick={() => {
                          const exists = selectedPaper.concepts.find(item => item.name.toLowerCase().includes(c.toLowerCase()) || c.toLowerCase().includes(item.name.toLowerCase()));
                          if (exists) setActiveConceptName(exists.name);
                        }}
                        className="text-[10px] bg-white/5 hover:bg-white/10 border border-white/10 px-3 py-1 rounded-full text-slate-200 cursor-pointer transition-colors"
                      >
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action trigger button */}
              <button className="w-full bg-white hover:bg-slate-100 text-slate-950 py-3 rounded-2xl font-bold uppercase tracking-wider text-xs transition-all duration-200 flex items-center justify-center gap-1.5 cursor-pointer shadow-lg shadow-white/5">
                <span>PARSE NODE LITERATURE</span>
                <ArrowRight className="w-3.5 h-3.5 text-slate-950" />
              </button>
            </div>

          </div>
        </section>

        {/* Bottom Technical Specifications */}
        <section id="security" className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white/5 border border-white/10 p-6 rounded-2xl shadow-xl space-y-2.5">
            <ShieldCheck className="w-6 h-6 text-emerald-400" />
            <h4 className="text-sm font-bold uppercase tracking-wider">Zero-Knowledge Storage</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              We compile vector indexes client-side. Your uploaded research remains fully encrypted on your machine; we never train models on your proprietary publications.
            </p>
          </div>
          <div className="bg-white/5 border border-white/10 p-6 rounded-2xl shadow-xl space-y-2.5">
            <Layers className="w-6 h-6 text-pink-400" />
            <h4 className="text-sm font-bold uppercase tracking-wider">Inline citation mapping</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Every summary detail is bound to the source coordinates. Clicking any visual node highlights the exact text block and prints its page index instantly.
            </p>
          </div>
          <div className="bg-white/5 border border-white/10 p-6 rounded-2xl shadow-xl space-y-2.5">
            <Zap className="w-6 h-6 text-cyan-400" />
            <h4 className="text-sm font-bold uppercase tracking-wider">Sub-second Vectorization</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Using state-of-the-art token chunking algorithms, document summary indices load in less than 600 milliseconds, getting you reading immediately.
            </p>
          </div>
        </section>

        {/* Frosted Glass Footer */}
        <footer className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl px-6 py-6 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500 gap-4">
          <div>
            © 2026 Ratio Reader systems. Built on Vite + Tailwind 4.
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-slate-200 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-200 transition-colors">API Docs</a>
            <a href="#" className="hover:text-slate-200 transition-colors">Terminals</a>
          </div>
        </footer>

      </div>
    </div>
  );
}
