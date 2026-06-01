import { useState, useEffect } from "react";
import { mockPapers } from "../mockData";
import type { MockPaper } from "../mockData";
import { Terminal, Shield, Cpu, RefreshCw, Layers, Zap, CornerDownRight, Play } from "lucide-react";

export function DesignTwo() {
  const [selectedPaper, setSelectedPaper] = useState<MockPaper>(mockPapers[0]);
  const [systemLogs, setSystemLogs] = useState<string[]>([]);
  const [activeConcept, setActiveConcept] = useState<string>("");
  const [scanSpeed, setScanSpeed] = useState<"normal" | "turbo">("normal");
  const [isCompiling, setIsCompiling] = useState(false);

  // Initialize concepts
  useEffect(() => {
    if (selectedPaper.concepts.length > 0) {
      setActiveConcept(selectedPaper.concepts[0].name);
    }
    
    // Simulate terminal logs compiling
    setIsCompiling(true);
    setSystemLogs([`[INIT] INITIALIZING COGNITIVE SCAN FOR DOC_ID: ${selectedPaper.id.toUpperCase()}`]);
    
    const logs = [
      `[LOAD] FETCHING BINARY DATA STREAM... DONE (${selectedPaper.wordCount} words)`,
      `[PARS] STRIPPING SYNTACTIC COGNITIVE FRICTION... STRIPPED 84% BOILERPLATE`,
      `[MAPP] LOCATING CRITICAL SEMANTIC NODES... DETECTED ${selectedPaper.concepts.length} CORES`,
      `[STAT] GENERATING HIGHLIGHT VECTORS... CITATIONS MATCHED ON P.${selectedPaper.chapters[0].quotes[0].page}`,
      `[READY] RATIO READER OPERATIONAL AT 100% EFFICIENCY`
    ];

    let currentLogIndex = 0;
    const interval = setInterval(() => {
      if (currentLogIndex < logs.length) {
        setSystemLogs(prev => [...prev, logs[currentLogIndex]]);
        currentLogIndex++;
      } else {
        setIsCompiling(false);
        clearInterval(interval);
      }
    }, 450);

    return () => clearInterval(interval);
  }, [selectedPaper]);

  const conceptDetails = selectedPaper.concepts.find(c => c.name === activeConcept);

  return (
    <div className="min-h-screen bg-[#030712] text-emerald-400 font-cyber-mono p-4 md:p-8 pb-32 relative overflow-hidden">
      {/* Matrix Grid Background Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none -z-10"
        style={{
          backgroundImage: "linear-gradient(to right, #10b981 1px, transparent 1px), linear-gradient(to bottom, #10b981 1px, transparent 1px)",
          backgroundSize: "24px 24px"
        }}
      />
      
      {/* Scanline element */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-emerald-500/5 to-transparent h-1/3 w-full animate-scanline -z-10" />

      {/* Main Terminal Shell Grid */}
      <div className="max-w-7xl mx-auto space-y-6">
        
        {/* Diagnostic Top Header Bar */}
        <header className="border border-emerald-800/80 bg-slate-950/80 p-4 flex flex-col sm:flex-row items-center justify-between gap-4 rounded-lg glow-box-cyan">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="w-9 h-9 rounded bg-emerald-950 border border-emerald-500 flex items-center justify-center text-emerald-400 glow-cyan">
                <Terminal className="w-5 h-5" />
              </div>
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-emerald-500 rounded-full animate-ping" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-sans font-extrabold text-white text-lg tracking-wider uppercase">RATIO READER HUD</span>
                <span className="text-[10px] bg-emerald-950 border border-emerald-700 px-1.5 py-0.5 rounded text-emerald-400 font-mono">v4.0.9</span>
              </div>
              <p className="text-[9px] text-emerald-500/80 tracking-widest uppercase">COGNITIVE COMPRESSION CODES // HOST_TERMINAL_MAC</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 text-xs">
            <div className="flex items-center gap-2 border border-emerald-900 bg-emerald-950/50 px-3 py-1 rounded">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[10px] text-emerald-300">CORE STATUS: OPERATIONAL</span>
            </div>
            <div className="flex items-center gap-2 border border-cyan-900 bg-cyan-950/50 px-3 py-1 rounded text-cyan-400">
              <Cpu className="w-3.5 h-3.5" />
              <span className="text-[10px]">PARSING ENGINE: CLAUDE-QUANTUM</span>
            </div>
          </div>
        </header>

        {/* Hero Section styled as system specifications */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-8 border border-emerald-800/60 bg-slate-950/50 p-6 rounded-lg space-y-4">
            <div className="flex items-center gap-2 text-xs text-emerald-500 font-semibold tracking-wider uppercase">
              <Zap className="w-4 h-4 text-emerald-400 animate-pulse" />
              <span>SYS_OBJECTIVE // ABSTRACT</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-sans font-bold tracking-tight text-white uppercase leading-none">
              ISOLATE THE SIGNAL. <br />
              <span className="text-cyan-400 glow-cyan">BYPASS THE NOISE METADATA.</span>
            </h2>
            <p className="text-xs text-slate-400 leading-relaxed font-mono">
              Ratio Reader bypasses classical skimming models. By applying high-throughput natural language consensus algorithms, our system partitions source PDFs into key semantic coordinates. Raw files shrink by up to 90%, leaving only dense, high-retention cognitive assets.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 text-[10px]">
              <div className="border border-emerald-900/60 bg-emerald-950/20 p-3 rounded">
                <span className="text-emerald-500 block">LATENCY DROP</span>
                <span className="text-lg font-bold text-white tracking-tight">-30% INGESTION</span>
              </div>
              <div className="border border-cyan-900/60 bg-cyan-950/20 p-3 rounded">
                <span className="text-cyan-500 block">COMPRESSION RATE</span>
                <span className="text-lg font-bold text-white tracking-tight">10x DATA RETENTION</span>
              </div>
              <div className="border border-red-900/60 bg-red-950/20 p-3 rounded text-red-400">
                <span className="text-red-400 block">COGNITIVE LOAD</span>
                <span className="text-lg font-bold text-white tracking-tight">MINIMIZED FRICTION</span>
              </div>
            </div>
          </div>

          {/* Paper selector diagnostics panel */}
          <div className="lg:col-span-4 border border-emerald-800/60 bg-slate-950/60 p-4 rounded-lg flex flex-col justify-between space-y-4">
            <div>
              <span className="text-[10px] text-emerald-500 block mb-2 uppercase tracking-widest">LOAD SOURCE CODES:</span>
              <div className="space-y-2">
                {mockPapers.map((paper) => (
                  <button
                    key={paper.id}
                    onClick={() => setSelectedPaper(paper)}
                    className={`w-full text-left p-2.5 rounded border transition-all text-xs flex justify-between items-center cursor-pointer ${
                      selectedPaper.id === paper.id
                        ? "bg-emerald-950/80 border-emerald-400 text-emerald-300 shadow-[0_0_10px_rgba(16,189,129,0.2)]"
                        : "bg-slate-950/90 border-emerald-900/40 text-emerald-600 hover:border-emerald-700/80 hover:text-emerald-400"
                    }`}
                  >
                    <div className="truncate pr-2">
                      <span className="font-semibold">{paper.title}</span>
                      <span className="text-[9px] block opacity-60">AUTH: {paper.author.toUpperCase()}</span>
                    </div>
                    <Layers className="w-3.5 h-3.5 flex-shrink-0" />
                  </button>
                ))}
              </div>
            </div>

            <div className="border-t border-emerald-900/40 pt-3">
              <span className="text-[9px] text-emerald-500 block mb-1">SCANNING SPEED:</span>
              <div className="flex gap-2 text-[10px]">
                <button 
                  onClick={() => setScanSpeed("normal")} 
                  className={`flex-1 py-1 rounded text-center border cursor-pointer ${scanSpeed === "normal" ? "bg-emerald-900/40 border-emerald-500 text-white" : "border-emerald-900 text-emerald-700"}`}
                >
                  NORMAL (450ms)
                </button>
                <button 
                  onClick={() => setScanSpeed("turbo")} 
                  className={`flex-1 py-1 rounded text-center border cursor-pointer ${scanSpeed === "turbo" ? "bg-cyan-900/40 border-cyan-500 text-white" : "border-cyan-900 text-cyan-700"}`}
                >
                  TURBO (100ms)
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Live Interface Simulator */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Main Scanning terminal */}
          <div className="lg:col-span-8 border border-emerald-800/80 bg-slate-950/95 rounded-lg overflow-hidden flex flex-col h-[550px] shadow-2xl relative">
            
            {/* Terminal Window Header */}
            <div className="bg-slate-900 px-4 py-2 border-b border-emerald-900/60 flex items-center justify-between text-[10px]">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-red-600/80 inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-600/80 inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-600/80 inline-block" />
                <span className="text-emerald-500 font-mono ml-2">DOCUMENT_VIEWER.EXE</span>
              </div>
              <div className="text-emerald-600 font-mono tracking-wider">
                100% PARSED // OK
              </div>
            </div>

            {/* Document Content with scan overlays */}
            <div className="p-6 overflow-y-auto flex-grow space-y-6 relative text-xs text-emerald-100 leading-relaxed">
              {/* Scanline active box */}
              <div className="absolute inset-x-0 h-1 bg-emerald-500/20 shadow-[0_0_12px_#10b981] animate-scanline" />

              <div className="border border-emerald-900/40 p-4 bg-slate-950/80 rounded space-y-2">
                <div className="flex justify-between items-center text-[10px] text-emerald-500">
                  <span>METADATA HEADER</span>
                  <span>ID: {selectedPaper.id.toUpperCase()}</span>
                </div>
                <h3 className="text-sm font-bold text-white">{selectedPaper.title}</h3>
                <p className="text-[10px] text-cyan-400">AUTHOR: {selectedPaper.author} // YEAR: {selectedPaper.year}</p>
              </div>

              {selectedPaper.chapters.map((ch, cIdx) => (
                <div key={cIdx} className="space-y-3 pt-2">
                  <div className="flex items-center gap-2">
                    <CornerDownRight className="w-3.5 h-3.5 text-cyan-400" />
                    <span className="text-[10px] text-cyan-400 font-bold uppercase tracking-wider">{ch.title}</span>
                  </div>
                  
                  <div className="border-l border-emerald-800/40 pl-4 space-y-2 text-emerald-300">
                    <p>
                      {ch.text.split(" ").map((w, wIdx) => {
                        const clean = w.replace(/[^a-zA-Z]/g, "").toLowerCase();
                        const isMain = ["chunks", "working", "memory", "cognitive", "signal", "friction", "latency", "consensus", "quorum"].includes(clean);
                        return (
                          <span 
                            key={wIdx} 
                            className={`inline-block mr-1 transition-all ${
                              isMain ? "bg-emerald-950 text-emerald-300 border border-emerald-500/60 px-0.5 rounded font-semibold" : "opacity-80"
                            }`}
                          >
                            {w}
                          </span>
                        );
                      })}
                    </p>

                    {/* Monospace Quote Insert */}
                    {ch.quotes.map((q, qIdx) => (
                      <div key={qIdx} className="mt-4 border border-cyan-800/50 bg-cyan-950/20 p-3 rounded text-[11px] text-cyan-300">
                        <span className="text-[9px] text-cyan-500 block uppercase font-bold tracking-widest">// CRITICAL CITATION P.{q.page}</span>
                        <span className="italic">"{q.text}"</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Side Telemetry panel */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            
            {/* Live diagnostic terminal compiler console */}
            <div className="border border-emerald-800/60 bg-slate-950/90 rounded-lg p-4 h-[240px] flex flex-col shadow-lg">
              <div className="flex items-center justify-between border-b border-emerald-950 pb-2 mb-2">
                <span className="text-[9px] text-emerald-500 tracking-wider uppercase font-semibold">DIAGNOSTIC PROCESS LOG:</span>
                {isCompiling ? (
                  <RefreshCw className="w-3.5 h-3.5 text-emerald-400 animate-spin" />
                ) : (
                  <span className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_#10b981]" />
                )}
              </div>
              
              <div className="flex-grow overflow-y-auto space-y-1.5 font-mono text-[9px] leading-relaxed text-emerald-400">
                {systemLogs.map((log, idx) => (
                  <div key={idx} className="flex items-start gap-1">
                    <span className="text-emerald-700/80">❯</span>
                    <span className="break-all">{log}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Concept Nodes Interface */}
            <div className="border border-cyan-800/80 bg-slate-950/90 rounded-lg p-4 flex-grow flex flex-col justify-between shadow-lg glow-box-cyan">
              <div>
                <span className="text-[9px] text-cyan-400 block tracking-widest uppercase mb-3">// CONCEPT MAP TELEMETRY</span>
                
                {/* Node graph buttons mock */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {selectedPaper.concepts.map((concept, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveConcept(concept.name)}
                      className={`text-[9px] font-semibold px-2 py-1 rounded border transition-all cursor-pointer ${
                        activeConcept === concept.name
                          ? "bg-cyan-950 border-cyan-400 text-cyan-300 shadow-[0_0_6px_rgba(6,182,212,0.3)]"
                          : "bg-slate-950 border-cyan-950 text-cyan-700 hover:border-cyan-800 hover:text-cyan-500"
                      }`}
                    >
                      {concept.name.toUpperCase()}
                    </button>
                  ))}
                </div>

                {/* Node Details */}
                {conceptDetails && (
                  <div className="border border-cyan-900/40 bg-cyan-950/10 p-3 rounded space-y-2 text-cyan-100 text-xs animate-fade-in">
                    <div className="flex justify-between items-center border-b border-cyan-900/30 pb-1.5">
                      <span className="font-bold text-white text-xs">{conceptDetails.name}</span>
                      <span className="text-[9px] text-cyan-400 font-mono">RELEVANCE: {conceptDetails.relevance}%</span>
                    </div>
                    <p className="text-[11px] leading-relaxed text-slate-300">{conceptDetails.description}</p>
                    
                    <div className="pt-1.5 space-y-1">
                      <span className="text-[9px] text-cyan-500 block uppercase">NODE ROUTING PATHS:</span>
                      <div className="flex gap-1.5 flex-wrap">
                        {conceptDetails.connections.map((c, idx) => (
                          <span key={idx} className="text-[8px] bg-cyan-950 border border-cyan-800/40 px-1 rounded text-cyan-300">
                            {c.toUpperCase()}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Action execute button */}
              <button className="w-full mt-4 border border-emerald-500 bg-emerald-950/50 hover:bg-emerald-500 hover:text-black py-2.5 rounded font-sans font-bold uppercase tracking-wider text-xs text-emerald-400 transition-all cursor-pointer shadow-[0_0_10px_rgba(16,189,129,0.15)] flex items-center justify-center gap-1.5">
                <Play className="w-3.5 h-3.5 fill-current" />
                <span>EXECUTE DEEP CONTEXT PARSE</span>
              </button>
            </div>

          </div>

        </section>

        {/* Console grid footer specs */}
        <footer className="border border-slate-900 bg-slate-950/40 p-4 rounded text-[9px] flex flex-col md:flex-row items-center justify-between text-slate-500 gap-4">
          <div className="flex items-center gap-2">
            <Shield className="w-3.5 h-3.5" />
            <span>SECURE PROTOCOL RATIO READER // CRYPTO SIGNATURE CONFIRMED</span>
          </div>
          <div className="flex gap-4">
            <span>MEM: 12.04 MB</span>
            <span>CPU: 0.12%</span>
            <span>SHARDS: 3/3 OK</span>
          </div>
        </footer>

      </div>
    </div>
  );
}
