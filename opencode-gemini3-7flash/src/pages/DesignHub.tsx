import { useState } from "react";
import { Link } from "react-router-dom";
import { 
  Sparkles, 
  ArrowRight, 
  Layers, 
  FileText, 
  Quote, 
  ExternalLink,
  Volume2
} from "lucide-react";
import { DESIGNS } from "../data/designs";

export function DesignHub() {
  const [activePersona, setActivePersona] = useState<string>("all");

  const filterDesigns = activePersona === "all" 
    ? DESIGNS 
    : DESIGNS.filter(d => {
        if (activePersona === "academic") return d.path === "/1" || d.path === "/2";
        if (activePersona === "executive") return d.path === "/4" || d.path === "/1";
        if (activePersona === "student") return d.path === "/5" || d.path === "/3";
        return true;
      });

  return (
    <div className="min-h-screen bg-[#06080E] text-slate-100 font-sans selection:bg-indigo-500 selection:text-white pt-16 pb-24 relative overflow-hidden">
      
      {/* Ambient background lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[450px] bg-indigo-600/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[500px] h-[350px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-2/3 left-10 w-[500px] h-[350px] bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Hub Hero Header */}
      <header className="max-w-6xl mx-auto px-4 sm:px-8 pt-10 pb-16 text-center relative z-10">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/80 text-indigo-300 text-xs font-mono shadow-xl mb-6">
          <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
          <span>Ratio Reader — 5 Distinct Creative Marketing Visions</span>
        </div>

        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold font-syne tracking-tight text-white mb-6 leading-[1.1]">
          The Golden Ratio of Reading. <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-cyan-300 to-amber-300">
            5 Master Designs. One Engine.
          </span>
        </h1>

        <p className="text-base sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-8">
          Ratio Reader transforms dense PDFs, research papers, textbooks, and reports into high-signal summaries, smart margin hints, and 100% verified quotes. Explore the five distinct landing page designs below:
        </p>

        {/* Persona Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 text-xs font-mono">
          <span className="text-slate-400 mr-2">Explore by perspective:</span>
          <button
            onClick={() => setActivePersona("all")}
            className={`px-3.5 py-1.5 rounded-full transition ${
              activePersona === "all" ? "bg-indigo-600 text-white font-bold" : "bg-slate-900 text-slate-300 hover:bg-slate-800"
            }`}
          >
            All 5 Designs
          </button>
          <button
            onClick={() => setActivePersona("academic")}
            className={`px-3.5 py-1.5 rounded-full transition ${
              activePersona === "academic" ? "bg-indigo-600 text-white font-bold" : "bg-slate-900 text-slate-300 hover:bg-slate-800"
            }`}
          >
            Scholarly & Research
          </button>
          <button
            onClick={() => setActivePersona("executive")}
            className={`px-3.5 py-1.5 rounded-full transition ${
              activePersona === "executive" ? "bg-indigo-600 text-white font-bold" : "bg-slate-900 text-slate-300 hover:bg-slate-800"
            }`}
          >
            C-Suite & Finance
          </button>
          <button
            onClick={() => setActivePersona("student")}
            className={`px-3.5 py-1.5 rounded-full transition ${
              activePersona === "student" ? "bg-indigo-600 text-white font-bold" : "bg-slate-900 text-slate-300 hover:bg-slate-800"
            }`}
          >
            Fast Study & Mindful
          </button>
        </div>
      </header>

      {/* 5 Unique Designs Cards Grid */}
      <section className="max-w-6xl mx-auto px-4 sm:px-8 py-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filterDesigns.map((design, index) => {
            const Icon = design.icon;
            return (
              <div
                key={design.path}
                className="group relative rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-slate-600 transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-xl hover:shadow-2xl hover:-translate-y-1"
              >
                {/* Visual Header Strip with Color */}
                <div className="p-6 pb-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <span className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center font-mono font-bold text-sm text-indigo-400 border border-slate-700">
                        0{index + 1}
                      </span>
                      <span className="text-xs font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">
                        {design.tag}
                      </span>
                    </div>
                    <span className="text-xs font-mono text-indigo-400 group-hover:translate-x-1 transition flex items-center gap-1">
                      {design.path} <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>

                  <div className="flex items-center gap-3 mb-2">
                    <div className={`p-2 rounded-xl ${design.accent}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold font-syne text-white">{design.name}</h3>
                      <p className="text-xs text-slate-400 font-mono">{design.style}</p>
                    </div>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed mt-3">
                    {design.desc}
                  </p>
                </div>

                {/* Footer Action */}
                <div className="p-4 pt-2 border-t border-slate-800/80 bg-slate-950/40">
                  <Link
                    to={design.path}
                    className="w-full py-2.5 px-4 rounded-xl bg-slate-800 hover:bg-indigo-600 text-white text-xs font-medium font-mono flex items-center justify-center gap-2 transition group-hover:bg-indigo-600 shadow-md"
                  >
                    <span>Launch Design {design.path}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}

          {/* Bonus Info Card */}
          <div className="p-6 rounded-2xl bg-gradient-to-br from-indigo-950/40 via-slate-900/60 to-slate-950 border border-indigo-900/40 flex flex-col justify-between">
            <div>
              <div className="w-8 h-8 rounded-lg bg-indigo-900/60 text-indigo-300 flex items-center justify-center mb-4">
                <Layers className="w-4 h-4" />
              </div>
              <h3 className="text-lg font-bold font-syne text-white mb-2">Universal Ratio Engine</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                All 5 landing pages are fully functional, interactive, and powered by the Ratio Reader compression algorithms and verified quote citations.
              </p>
            </div>
            <div className="pt-4 text-[11px] font-mono text-indigo-400">
              Interactive Demos • Audio Briefs • Confetti Quizzes
            </div>
          </div>
        </div>
      </section>

      {/* Core Technology Pillars Overview */}
      <section className="max-w-6xl mx-auto px-4 sm:px-8 py-16 border-t border-slate-800/80 mt-12">
        <div className="text-center max-w-xl mx-auto mb-12">
          <span className="text-xs font-mono text-indigo-400 uppercase tracking-widest block mb-2">
            THE RATIO READER ADVANTAGE
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-syne text-white">
            Why Traditional Reading Fails
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 font-mono text-xs">
          <div className="p-5 rounded-xl bg-slate-900/50 border border-slate-800">
            <FileText className="w-6 h-6 text-indigo-400 mb-3" />
            <h4 className="font-bold text-white mb-1">Adaptive Ratio Compression</h4>
            <p className="text-slate-400 font-sans text-xs">
              Compress any PDF from 10% executive flashes to 80% chapter mastery without losing key proofs.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-slate-900/50 border border-slate-800">
            <Quote className="w-6 h-6 text-cyan-400 mb-3" />
            <h4 className="font-bold text-white mb-1">Verified Page Coordinates</h4>
            <p className="text-slate-400 font-sans text-xs">
              Every quote and claim is mathematically anchored to source page numbers for instant auditability.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-slate-900/50 border border-slate-800">
            <Sparkles className="w-6 h-6 text-amber-400 mb-3" />
            <h4 className="font-bold text-white mb-1">Context Jargon Decoders</h4>
            <p className="text-slate-400 font-sans text-xs">
              Unpack obscure domain acronyms and dense jargon right in the margin as you read.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-slate-900/50 border border-slate-800">
            <Volume2 className="w-6 h-6 text-emerald-400 mb-3" />
            <h4 className="font-bold text-white mb-1">Studio AI Audio Briefs</h4>
            <p className="text-slate-400 font-sans text-xs">
              Listen to crisp conversational podcast-style briefings generated directly from your uploaded docs.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="max-w-6xl mx-auto px-4 sm:px-8 pt-12 text-center text-xs text-slate-500 font-mono border-t border-slate-800/80">
        <p>Ratio Reader Showcase — 5 Hand-Crafted Frontend Architecture Paradigms.</p>
        <p className="mt-1">Navigate seamlessly via top bar or routes /1, /2, /3, /4, /5.</p>
      </footer>
    </div>
  );
}
