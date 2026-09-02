import { useState, useEffect } from "react";
import { SAMPLE_DOCUMENTS, type PdfDocument } from "../data/samplePdfs";
import {
  Terminal,
  Activity,
  Cpu,
  Layers,
  Zap,
  Filter,
  Copy,
  Check,
  ShieldAlert,
  Sliders,
  Code2,
  FileCode,
  Sparkles,
  Command,
  ArrowRight,
} from "lucide-react";
import confetti from "canvas-confetti";

export function Design2Cyber() {
  const [activeDoc, setActiveDoc] = useState<PdfDocument>(SAMPLE_DOCUMENTS[0]);
  const [telemetryMode, setTelemetryMode] = useState<"90" | "95" | "98">("95");
  const [copiedCmd, setCopiedCmd] = useState(false);
  const [terminalLog, setTerminalLog] = useState<string[]>([
    "SYS.BOOT // KERNEL 6.14-RATIO-RT",
    "PARSING TOKEN STREAM: 8,420 TOKENS INGESTED",
    "REJECTING 7,810 NOISE TOKENS (SEMANTIC SALIENCE THRESHOLD > 0.88)",
    "ISOLATING 3 CORE THEOREMS & 2 UNBREAKABLE CITATIONS",
    "DECOMPRESSION READY [LATENCY: 14ms]",
  ]);
  const [liveTokenCount, setLiveTokenCount] = useState(8420);

  useEffect(() => {
    const timer = setInterval(() => {
      setLiveTokenCount((prev) => (prev > 920 ? prev - 75 : 920));
    }, 40);
    return () => clearInterval(timer);
  }, [activeDoc]);

  const handleCopyCmd = () => {
    navigator.clipboard.writeText("npx ratio-reader ingest --file=manuscript.pdf --salience=0.95");
    setCopiedCmd(true);
    setTimeout(() => setCopiedCmd(false), 2000);
  };

  const handleDocChange = (doc: PdfDocument) => {
    setActiveDoc(doc);
    setLiveTokenCount(doc.originalWordCount);
    setTerminalLog([
      `SYS.EVENT // INGESTING ${doc.id.toUpperCase()}`,
      `ORIGINAL MASS: ${doc.originalPages} PAGES // ${doc.originalWordCount} WORDS`,
      `APPLYING ATTENTION HEAD FILTER: ${telemetryMode}% COMPRESSION`,
      `EXTRACTED ${doc.hints.length} SYSTEM WARNINGS & ${doc.quotes.length} VERBATIM QUOTES`,
      `STATUS: SYNTHESIS LOCKED`,
    ]);
    confetti({
      particleCount: 25,
      spread: 50,
      origin: { y: 0.8 },
      colors: ["#10B981", "#06B6D4", "#F59E0B"],
    });
  };

  return (
    <div className="min-h-screen bg-[#05080E] text-slate-200 font-mono selection:bg-emerald-500 selection:text-black pb-28 relative overflow-x-hidden">
      {/* Background Matrix Grid Overlay */}
      <div 
        className="fixed inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: `radial-gradient(#10B981 1px, transparent 1px), radial-gradient(#06B6D4 1px, #05080E 1px)`,
          backgroundSize: `40px 40px`,
          backgroundPosition: `0 0, 20px 20px`,
        }}
      />

      {/* Cyber Top Status Ribbon */}
      <header className="border-b border-emerald-950/80 bg-[#070C15]/90 backdrop-blur sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2.5 flex items-center justify-between text-xs">
          <div className="flex items-center gap-3">
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_#10B981]" />
            <span className="font-bold tracking-wider text-emerald-400 flex items-center gap-1.5">
              <Terminal className="w-4 h-4" />
              RATIO_CORE // v4.9.2
            </span>
            <span className="hidden md:inline px-2 py-0.5 rounded bg-emerald-950/60 border border-emerald-800/60 text-[10px] text-emerald-300">
              SECURE SYNTHESIZER
            </span>
          </div>

          <div className="flex items-center gap-4 text-[11px] text-slate-400">
            <span className="hidden sm:inline">
              ENGINES: <span className="text-cyan-400">ONLINE</span>
            </span>
            <span>
              ENTROPY: <span className="text-emerald-400">0.04%</span>
            </span>
            <button
              onClick={handleCopyCmd}
              className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-900 border border-slate-700 hover:border-emerald-500 hover:text-emerald-300 transition-colors text-[10px]"
            >
              {copiedCmd ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
              <span>{copiedCmd ? "COPIED" : "CLI COMMAND"}</span>
            </button>
          </div>
        </div>
      </header>

      {/* HUD Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pt-12 pb-8">
        <div className="border border-slate-800 rounded-xl bg-gradient-to-b from-[#09111E] to-[#060A12] p-6 sm:p-10 relative overflow-hidden shadow-2xl shadow-emerald-950/20">
          {/* Neon Corner Accents */}
          <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-emerald-500 pointer-events-none" />
          <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-cyan-500 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-cyan-500 pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-emerald-500 pointer-events-none" />

          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="space-y-4 max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-950/50 border border-emerald-800/50 text-xs text-emerald-400">
                <Activity className="w-3.5 h-3.5 animate-spin" />
                <span>COGNITIVE COMPRESSION ACCELERATOR</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
                DECONSTRUCT MONOLITHIC PDFS. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-400 to-amber-300">
                  EXTRACT 100% SIGNAL.
                </span>
              </h1>

              <p className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-2xl">
                Manual reading operates at 220 words/minute with an 85% cognitive fatigue penalty.
                Ratio Reader uses multi-stage neural salience filters to eliminate thesis fluff, isolate
                mathematical proofs, pinpoint verbatim quotes, and flag analytical traps.
              </p>

              {/* Quick CLI Pill */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-black/80 border border-slate-800 text-xs text-emerald-400 font-mono">
                  <span className="text-slate-600">$</span>
                  <span>ratio-reader ingest ./paper.pdf --ratio=0.10</span>
                </div>
                <button
                  onClick={handleCopyCmd}
                  className="px-4 py-2 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-black font-bold text-xs transition-colors flex items-center gap-1.5 shadow-[0_0_15px_#10B98188]"
                >
                  <Zap className="w-3.5 h-3.5 fill-current" />
                  INITIALIZE CLI ENGINE
                </button>
              </div>
            </div>

            {/* Live Telemetry Diagnostic Meter */}
            <div className="lg:w-80 shrink-0 bg-black/60 border border-slate-800 rounded-xl p-5 space-y-4">
              <div className="flex items-center justify-between text-xs pb-2 border-b border-slate-800">
                <span className="text-slate-400">SYSTEM TELEMETRY</span>
                <span className="text-emerald-400 font-bold">READY</span>
              </div>

              <div className="space-y-3 text-xs">
                <div>
                  <div className="flex justify-between text-[11px] mb-1">
                    <span className="text-slate-400">Signal-to-Noise Ratio</span>
                    <span className="text-emerald-400 font-bold">{activeDoc.stats.signalToNoise}</span>
                  </div>
                  <div className="h-1.5 w-full bg-slate-900 rounded-full overflow-hidden">
                    <div className="h-full bg-emerald-500 rounded-full w-[94%]" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-[11px] mb-1">
                    <span className="text-slate-400">Reading Acceleration</span>
                    <span className="text-cyan-400 font-bold">{activeDoc.stats.readingSpeedup}</span>
                  </div>
                  <div className="h-1.5 w-full bg-slate-900 rounded-full overflow-hidden">
                    <div className="h-full bg-cyan-500 rounded-full w-[88%]" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-[11px] mb-1">
                    <span className="text-slate-400">Cognitive Fatigue Load</span>
                    <span className="text-amber-400 font-bold">{activeDoc.stats.cognitiveLoadScore}</span>
                  </div>
                  <div className="h-1.5 w-full bg-slate-900 rounded-full overflow-hidden">
                    <div className="h-full bg-amber-500 rounded-full w-[24%]" />
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-[11px]">
                  <span className="text-slate-500">Active Token Stream:</span>
                  <span className="text-emerald-400 font-bold">{liveTokenCount} words</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main High-Density HUD Console */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
        {/* Document Selector & Compression Knobs */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
          <div className="flex items-center gap-2">
            <span className="text-xs text-slate-500 uppercase tracking-widest">INGEST TARGET:</span>
            <div className="flex flex-wrap gap-1.5">
              {SAMPLE_DOCUMENTS.map((doc) => (
                <button
                  key={doc.id}
                  onClick={() => handleDocChange(doc)}
                  className={`px-3 py-1.5 rounded text-xs transition-all border ${
                    activeDoc.id === doc.id
                      ? "bg-emerald-950/80 border-emerald-500 text-emerald-300 font-bold shadow-[0_0_10px_#10B98144]"
                      : "bg-[#0A101C] border-slate-800 text-slate-400 hover:text-white hover:border-slate-700"
                  }`}
                >
                  {doc.title.split(":")[0]}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-3 bg-[#0A101C] p-1.5 rounded-lg border border-slate-800 text-xs">
            <span className="text-slate-500 pl-2">SALIENCE FILTER:</span>
            {(["90", "95", "98"] as const).map((mode) => (
              <button
                key={mode}
                onClick={() => setTelemetryMode(mode)}
                className={`px-2.5 py-1 rounded transition-colors ${
                  telemetryMode === mode
                    ? "bg-cyan-500 text-black font-bold"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                {mode}% CUT
              </button>
            ))}
          </div>
        </div>

        {/* 3-Column Split HUD */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
          {/* Left Column: Stream Terminal Log & Raw Ingest (3 Cols) */}
          <div className="lg:col-span-3 bg-[#080E1A] border border-slate-800 rounded-xl p-4 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-2 border-b border-slate-800 text-xs">
                <span className="text-emerald-400 flex items-center gap-1.5">
                  <Terminal className="w-3.5 h-3.5" />
                  RAW_STREAM_LOG
                </span>
                <span className="text-slate-600">LIVE</span>
              </div>

              <div className="space-y-2 text-[11px] text-slate-400 font-mono">
                {terminalLog.map((log, i) => (
                  <div key={i} className="flex items-start gap-1.5 leading-snug">
                    <span className="text-emerald-500 select-none">&gt;</span>
                    <span className={i === terminalLog.length - 1 ? "text-emerald-300 font-bold" : ""}>
                      {log}
                    </span>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-slate-800/80">
                <span className="text-[10px] text-slate-500 uppercase block mb-2">Ingest Metadata</span>
                <div className="bg-black/60 rounded p-2.5 space-y-1.5 text-[11px]">
                  <div className="flex justify-between">
                    <span className="text-slate-500">Author:</span>
                    <span className="text-slate-300 text-right truncate max-w-[150px]">{activeDoc.author}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Domain:</span>
                    <span className="text-cyan-400">{activeDoc.category}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Mass:</span>
                    <span className="text-amber-400">{activeDoc.originalPages} pages</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Raw Read:</span>
                    <span className="text-slate-400">{activeDoc.readTimeOriginal}</span>
                  </div>
                  <div className="flex justify-between pt-1 border-t border-slate-800">
                    <span className="text-emerald-400 font-bold">Ratio Time:</span>
                    <span className="text-emerald-400 font-bold">{activeDoc.readTimeRatio}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4 mt-4 border-t border-slate-800">
              <label className="block w-full text-center py-2 px-3 rounded bg-slate-900 border border-slate-700 hover:border-emerald-500 text-xs text-slate-300 hover:text-emerald-400 cursor-pointer transition-colors">
                + INGEST LOCAL PDF
                <input
                  type="file"
                  accept=".pdf"
                  className="hidden"
                  onChange={(e) => {
                    if (e.target.files?.[0]) {
                      const name = e.target.files[0].name;
                      setTerminalLog((prev) => [
                        ...prev.slice(-3),
                        `INGESTING ${name}`,
                        "EXTRACTING VECTORS... OK",
                      ]);
                    }
                  }}
                />
              </label>
            </div>
          </div>

          {/* Center Column: Synthesized High-Signal Core (6 Cols) */}
          <div className="lg:col-span-6 bg-[#090F1D] border border-emerald-950/80 rounded-xl p-5 sm:p-6 space-y-6 shadow-lg shadow-black">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-xs">
              <span className="text-emerald-400 font-bold flex items-center gap-2">
                <Cpu className="w-4 h-4 text-emerald-400" />
                SYNTHESIZED_KNOWLEDGE_PAYLOAD
              </span>
              <span className="px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 text-[10px] border border-emerald-800">
                {activeDoc.compressionPercent}% REDUCTION
              </span>
            </div>

            {/* Core Executive Brief */}
            <div className="space-y-3">
              <span className="text-[11px] text-cyan-400 font-bold tracking-wider uppercase block">
                [EXECUTIVE_THESIS]
              </span>
              <p className="text-sm sm:text-base text-slate-200 leading-relaxed bg-black/40 p-4 rounded-lg border border-slate-800">
                {activeDoc.executiveSummary}
              </p>
            </div>

            {/* Deep Salience Layer */}
            {telemetryMode !== "98" && (
              <div className="space-y-2">
                <span className="text-[11px] text-slate-400 font-bold tracking-wider uppercase block">
                  [SUB-SURFACE_MECHANICS]
                </span>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed bg-[#050912] p-3.5 rounded-lg border border-slate-800/80">
                  {activeDoc.deepSummary}
                </p>
              </div>
            )}

            {/* Verbatim Anchor Quotes with Integrity Hash */}
            <div className="space-y-3 pt-2">
              <div className="flex items-center justify-between">
                <span className="text-[11px] text-amber-400 font-bold tracking-wider uppercase">
                  [VERBATIM_ANCHOR_CITATIONS]
                </span>
                <span className="text-[10px] text-slate-500">HASH: SHA256-VERIFIED</span>
              </div>

              <div className="space-y-3">
                {activeDoc.quotes.map((q, i) => (
                  <div
                    key={i}
                    className="p-3.5 bg-black/50 border-l-2 border-amber-400 rounded-r-lg space-y-1.5"
                  >
                    <p className="text-xs sm:text-sm text-slate-200 italic leading-relaxed">
                      "{q.quote}"
                    </p>
                    <div className="flex items-center justify-between text-[10px] text-slate-500 font-mono">
                      <span className="text-amber-400 font-bold">PAGE {q.page} // {q.speakerOrContext}</span>
                      <span>{q.significance}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Tactical Hints & Threat Matrix (3 Cols) */}
          <div className="lg:col-span-3 space-y-4">
            {/* Warning Flags & Semantic Traps */}
            <div className="bg-[#080E1A] border border-slate-800 rounded-xl p-4 space-y-3">
              <div className="flex items-center justify-between pb-2 border-b border-slate-800 text-xs">
                <span className="text-amber-400 flex items-center gap-1.5 font-bold">
                  <ShieldAlert className="w-3.5 h-3.5" />
                  CONTEXT_HINTS & TRAPS
                </span>
                <span className="text-slate-500 text-[10px]">{activeDoc.hints.length} ALERTS</span>
              </div>

              <div className="space-y-2.5">
                {activeDoc.hints.map((h, i) => (
                  <div
                    key={i}
                    className="p-3 bg-black/60 rounded border border-slate-800/80 hover:border-amber-500/50 transition-colors space-y-1"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] px-1.5 py-0.5 rounded bg-amber-950/80 text-amber-300 font-bold">
                        {h.tag}
                      </span>
                      <span className="text-[10px] text-slate-500 font-mono">P.{h.page}</span>
                    </div>
                    <p className="text-xs text-slate-300 leading-snug">{h.text}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Tactical Actionable Matrix */}
            <div className="bg-[#080E1A] border border-slate-800 rounded-xl p-4 space-y-3">
              <span className="text-xs text-cyan-400 font-bold flex items-center gap-1.5">
                <Zap className="w-3.5 h-3.5" />
                EXECUTION_LEVERS
              </span>
              <div className="space-y-2.5 text-xs">
                {activeDoc.keyInsights.map((ins, i) => (
                  <div key={i} className="p-2.5 bg-black/40 rounded border border-slate-800/80">
                    <span className="text-slate-200 font-bold block mb-1">{ins.headline}</span>
                    <span className="text-[11px] text-slate-400 block mb-1.5">{ins.takeaway}</span>
                    <div className="text-[10px] text-cyan-300 bg-cyan-950/40 p-1.5 rounded font-mono">
                      LEVER: {ins.practicalApplication}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cyber Pipeline Architecture Diagram */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="p-6 bg-[#070C16] border border-slate-800 rounded-xl space-y-6">
          <div className="text-center max-w-xl mx-auto space-y-1">
            <span className="text-xs text-emerald-400 font-mono uppercase tracking-widest">
              TELEMETRY ARCHITECTURE
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              The 4-Stage Zero-Loss Compression Pipeline
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs font-mono">
            <div className="p-4 bg-black/60 rounded border border-slate-800 space-y-2">
              <span className="text-emerald-400 text-lg font-bold block">01 / INGEST</span>
              <h3 className="text-white font-bold">Vector OCR Tokenizer</h3>
              <p className="text-slate-400 leading-relaxed">
                Deconstructs multi-column tables, equations, footnotes, and diagrams without OCR distortion.
              </p>
            </div>
            <div className="p-4 bg-black/60 rounded border border-slate-800 space-y-2">
              <span className="text-cyan-400 text-lg font-bold block">02 / PRUNE</span>
              <h3 className="text-white font-bold">Salience Filtering</h3>
              <p className="text-slate-400 leading-relaxed">
                Strips boilerplate, repetitive rhetorical flourishes, and academic formalities.
              </p>
            </div>
            <div className="p-4 bg-black/60 rounded border border-slate-800 space-y-2">
              <span className="text-amber-400 text-lg font-bold block">03 / ANCHOR</span>
              <h3 className="text-white font-bold">Provenance Verifier</h3>
              <p className="text-slate-400 leading-relaxed">
                Pins verbatim quotes with hash checksums directly to corresponding page and paragraph numbers.
              </p>
            </div>
            <div className="p-4 bg-black/60 rounded border border-slate-800 space-y-2">
              <span className="text-purple-400 text-lg font-bold block">04 / DISPATCH</span>
              <h3 className="text-white font-bold">Knowledge Artifact</h3>
              <p className="text-slate-400 leading-relaxed">
                Outputs clean markdown, JSON telemetry, or interactive web digest ready for memory retention.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cyber CTA */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-8 text-center space-y-4">
        <h3 className="text-2xl font-bold text-white">INITIALIZE YOUR FIRST KNOWLEDGE PIPELINE</h3>
        <p className="text-xs text-slate-400 font-mono">
          Free CLI tier available. 100% local embedding option for classified / confidential documents.
        </p>
        <div className="inline-flex items-center gap-3 bg-black border border-emerald-500/50 p-2 rounded-xl">
          <input
            type="text"
            readOnly
            value="curl -sSL https://ratio-reader.sh | bash"
            className="bg-transparent text-emerald-400 font-mono text-xs px-3 focus:outline-none w-64 sm:w-80"
          />
          <button
            onClick={() => {
              navigator.clipboard.writeText("curl -sSL https://ratio-reader.sh | bash");
              setCopiedCmd(true);
              setTimeout(() => setCopiedCmd(false), 2000);
            }}
            className="px-3 py-1.5 rounded bg-emerald-500 text-black font-bold text-xs hover:bg-emerald-400"
          >
            {copiedCmd ? "COPIED" : "RUN INSTALL"}
          </button>
        </div>
      </section>

      {/* Cyber Footer */}
      <footer className="max-w-7xl mx-auto px-4 sm:px-6 pt-10 border-t border-slate-900 text-xs text-slate-600 flex flex-col sm:flex-row items-center justify-between gap-3">
        <span>RATIO_SYSTEM // HUD_SPEC_V2 // TELEMETRY: GREEN</span>
        <span>LATENCY: 12ms // MEMORY: 64MB LEAN</span>
      </footer>
    </div>
  );
}
