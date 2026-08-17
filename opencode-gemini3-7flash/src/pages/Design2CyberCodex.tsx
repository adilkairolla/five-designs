import { useState } from "react";
import { 
  Terminal, 
  Cpu, 
  Activity, 
  Zap, 
  ShieldCheck, 
  Binary, 
  Volume2, 
  VolumeX, 
  Radio, 
  ArrowUpRight, 
  Hash, 
  Copy,
  Sparkles,
  HelpCircle,
  Check
} from "lucide-react";
import { SAMPLE_DOCUMENTS, PRICING_TIERS } from "../data/samplePdfs";

export function Design2CyberCodex() {
  const [selectedDocId, setSelectedDocId] = useState<string>("deep-attention");
  const [compressionRatio, setCompressionRatio] = useState<number>(85);
  const [isPlayingAudio, setIsPlayingAudio] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<"telemetry" | "signal" | "ledger" | "jargon">("signal");
  const [copiedHash, setCopiedHash] = useState<string | null>(null);
  const [scannerActive, setScannerActive] = useState<boolean>(false);

  const currentDoc = SAMPLE_DOCUMENTS.find((d) => d.id === selectedDocId) || SAMPLE_DOCUMENTS[0];

  // Calculated metrics
  const originalTokens = Math.round(currentDoc.originalWordCount * 1.33);
  const compressedTokens = Math.round(originalTokens * (1 - compressionRatio / 100));
  const estimatedReadTimeSec = Math.round((currentDoc.originalReadTimeMinutes * 60) * (1 - compressionRatio / 100));
  const readingTimeMin = Math.max(1, Math.round(estimatedReadTimeSec / 60));

  const triggerScanEffect = () => {
    setScannerActive(true);
    setTimeout(() => setScannerActive(false), 1200);
  };

  const copyHashToClipboard = (hash: string) => {
    navigator.clipboard.writeText(hash);
    setCopiedHash(hash);
    setTimeout(() => setCopiedHash(null), 2000);
  };

  return (
    <div className="min-h-screen bg-[#07090E] text-slate-100 font-sans selection:bg-cyan-500 selection:text-black pt-14 pb-20 bg-cyber-grid relative overflow-hidden">
      
      {/* Background Ambient Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* Cyber HUD Header */}
      <header className="border-b border-cyan-900/40 bg-black/60 backdrop-blur-md sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded bg-cyan-950 border border-cyan-500/50 flex items-center justify-center text-cyan-400 font-mono font-bold shadow-[0_0_15px_rgba(6,182,212,0.3)]">
              <Terminal className="w-4 h-4" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-mono font-bold tracking-wider text-sm text-cyan-300">RATIO.CODEX</span>
                <span className="text-[10px] font-mono px-1.5 py-0.2 bg-cyan-950/80 text-cyan-400 border border-cyan-800 rounded">v4.9.2</span>
              </div>
              <p className="text-[10px] font-mono text-slate-400 hidden sm:block">NEURAL PDF DECOMPRESSION PROTOCOL</p>
            </div>
          </div>

          {/* Telemetry Status Bar */}
          <div className="flex items-center gap-4 text-xs font-mono">
            <div className="hidden md:flex items-center gap-2 px-3 py-1 bg-slate-900/80 border border-slate-800 rounded">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span className="text-slate-400">LATENCY:</span>
              <span className="text-emerald-400 font-bold">14ms</span>
            </div>
            <div className="hidden lg:flex items-center gap-2 px-3 py-1 bg-slate-900/80 border border-slate-800 rounded">
              <span className="text-slate-400">SIGNAL FIDELITY:</span>
              <span className="text-cyan-400 font-bold">99.98%</span>
            </div>
            <a
              href="#terminal-decompressor"
              className="px-3.5 py-1.5 bg-gradient-to-r from-cyan-500 to-blue-600 text-black font-mono font-bold text-xs rounded hover:shadow-[0_0_20px_rgba(6,182,212,0.6)] transition"
            >
              INITIALIZE INGEST
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section: Cyber HUD */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 pt-12 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 font-mono text-xs">
              <Activity className="w-3.5 h-3.5 animate-pulse" />
              <span>COGNITIVE BANDWIDTH RESTORATION ENGINE</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-bold font-mono tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-cyan-400 leading-[1.1]">
              DECOMPRESS DENSE VECTORS INTO <span className="text-cyan-400 underline decoration-cyan-500/50">PURE SIGNAL</span>.
            </h1>

            <p className="text-base sm:text-lg text-slate-300 font-sans leading-relaxed">
              Synthesizing 200-page monographs, legal contracts, and dense research into surgical insights, verified cryptographic citations, and real-time jargon decoders.
            </p>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-3 gap-3 pt-2 font-mono">
              <div className="p-3 bg-slate-900/70 border border-cyan-900/40 rounded">
                <span className="text-[10px] text-slate-400 uppercase block">Max Compression</span>
                <span className="text-2xl font-bold text-cyan-400">92%</span>
                <span className="text-[10px] text-slate-500 block">Zero Signal Loss</span>
              </div>
              <div className="p-3 bg-slate-900/70 border border-violet-900/40 rounded">
                <span className="text-[10px] text-slate-400 uppercase block">Processing Velocity</span>
                <span className="text-2xl font-bold text-violet-400">1.8s</span>
                <span className="text-[10px] text-slate-500 block">per 100 pages</span>
              </div>
              <div className="p-3 bg-slate-900/70 border border-emerald-900/40 rounded">
                <span className="text-[10px] text-slate-400 uppercase block">Citation Proof</span>
                <span className="text-2xl font-bold text-emerald-400">100%</span>
                <span className="text-[10px] text-slate-500 block">Cryptographic</span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-4 font-mono text-xs">
              <a
                href="#terminal-decompressor"
                className="px-5 py-3 rounded bg-cyan-400 text-black font-bold flex items-center gap-2 hover:bg-cyan-300 shadow-[0_0_20px_rgba(6,182,212,0.4)] transition"
              >
                <Zap className="w-4 h-4 fill-black" />
                <span>LAUNCH DECOMPRESSOR</span>
              </a>
              <a
                href="#pricing-grid"
                className="px-5 py-3 rounded bg-slate-900 text-slate-300 border border-slate-700 hover:border-cyan-500 hover:text-white transition flex items-center gap-2"
              >
                <span>VIEW TELEMETRY TIERS</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Hero: Live Telemetry HUD Widget */}
          <div className="lg:col-span-5">
            <div className="bg-slate-950/90 border border-cyan-500/40 rounded-xl p-5 shadow-[0_0_35px_rgba(6,182,212,0.15)] relative overflow-hidden font-mono">
              <div className="flex items-center justify-between pb-3 border-b border-cyan-900/40 text-xs text-cyan-400">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
                  <span>NEURAL INGEST QUEUE</span>
                </div>
                <span>NODE #0492-X</span>
              </div>

              {/* Document Switcher inside widget */}
              <div className="my-4 space-y-2">
                <span className="text-[10px] text-slate-400 uppercase">Active Ingest Stream:</span>
                <div className="grid grid-cols-1 gap-1.5">
                  {SAMPLE_DOCUMENTS.map((doc) => (
                    <button
                      key={doc.id}
                      onClick={() => {
                        setSelectedDocId(doc.id);
                        triggerScanEffect();
                      }}
                      className={`text-left p-2 rounded text-xs transition border flex items-center justify-between ${
                        selectedDocId === doc.id
                          ? "bg-cyan-950/80 border-cyan-400 text-cyan-300 shadow-[inset_0_0_10px_rgba(6,182,212,0.2)]"
                          : "bg-slate-900/50 border-slate-800 text-slate-400 hover:border-slate-700"
                      }`}
                    >
                      <span className="font-bold line-clamp-1">{doc.title}</span>
                      <span className="text-[10px] text-cyan-400/80 font-mono ml-2 shrink-0">{doc.originalPages}p</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Compression Laser Bar */}
              <div className="p-3 bg-slate-900/80 border border-cyan-900/60 rounded mb-4">
                <div className="flex items-center justify-between text-xs text-slate-300 mb-1.5">
                  <span>Compression Ratio</span>
                  <span className="text-cyan-400 font-bold">{compressionRatio}% FILTERED</span>
                </div>
                <input
                  type="range"
                  min="40"
                  max="90"
                  value={compressionRatio}
                  onChange={(e) => setCompressionRatio(Number(e.target.value))}
                  className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
                />
                <div className="flex justify-between text-[10px] text-slate-500 mt-1">
                  <span>Deep Vector (40%)</span>
                  <span>Synthesized Core (90%)</span>
                </div>
              </div>

              {/* Live Signal Readout */}
              <div className="p-3 bg-black/60 border border-slate-800 rounded text-xs space-y-2">
                <div className="flex justify-between text-[11px] text-slate-400">
                  <span>RAW TOKENS: <strong className="text-slate-200">{originalTokens.toLocaleString()}</strong></span>
                  <span>SYNTHESIZED: <strong className="text-cyan-400">{compressedTokens.toLocaleString()}</strong></span>
                </div>
                <div className="flex justify-between text-[11px] text-slate-400">
                  <span>EST. PARSE TIME: <strong className="text-emerald-400">{readingTimeMin} min</strong> (was {currentDoc.originalReadTimeMinutes}m)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Main Feature: THE NEURAL TERMINAL DECOMPRESSOR */}
      <section id="terminal-decompressor" className="max-w-7xl mx-auto px-4 sm:px-8 py-16 border-t border-cyan-900/30">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-1 text-cyan-400 text-xs font-mono mb-2">
              <Binary className="w-4 h-4" />
              <span>TERMINAL INTERFACE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-mono text-white">
              Neural Decompressor & Citation Matrix
            </h2>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsPlayingAudio(!isPlayingAudio)}
              className={`flex items-center gap-2 px-3 py-1.5 rounded font-mono text-xs border transition ${
                isPlayingAudio
                  ? "bg-violet-950 border-violet-500 text-violet-300 shadow-[0_0_15px_rgba(139,92,246,0.3)]"
                  : "bg-slate-900 border-slate-700 text-slate-300 hover:text-white"
              }`}
            >
              {isPlayingAudio ? <Volume2 className="w-4 h-4 text-violet-400 animate-pulse" /> : <VolumeX className="w-4 h-4" />}
              <span>{isPlayingAudio ? "AUDIO BRIEF: STREAMING" : "PLAY AI AUDIO BRIEF"}</span>
            </button>
          </div>
        </div>

        {/* Audio Waveform Simulator when active */}
        {isPlayingAudio && (
          <div className="mb-6 p-4 rounded bg-violet-950/40 border border-violet-500/40 flex items-center justify-between font-mono text-xs animate-in fade-in">
            <div className="flex items-center gap-3">
              <Radio className="w-4 h-4 text-violet-400 animate-spin" />
              <div>
                <span className="text-violet-300 font-bold block">Synthesized Voice Brief: "Dr. Alistair Neural Matrix"</span>
                <span className="text-[10px] text-slate-400">Bitrate: 320kbps • Speech Rate: 1.25x • Frequency: 48kHz</span>
              </div>
            </div>
            {/* Animated frequency equalizer bars */}
            <div className="flex items-end gap-1 h-6">
              {[40, 75, 90, 50, 100, 60, 85, 30, 95, 45, 70, 80].map((h, i) => (
                <div
                  key={i}
                  className="w-1 bg-violet-400 rounded-t animate-pulse"
                  style={{ height: `${h}%`, animationDelay: `${i * 100}ms` }}
                />
              ))}
            </div>
          </div>
        )}

        {/* Terminal Container */}
        <div className="bg-[#0B0F19] border border-cyan-500/30 rounded-xl shadow-2xl overflow-hidden relative">
          
          {/* Laser Scanner Effect Bar */}
          {scannerActive && (
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_15px_rgba(6,182,212,1)] animate-bounce" />
          )}

          {/* Terminal Tabs */}
          <div className="bg-slate-950 px-4 py-2 border-b border-cyan-900/40 flex items-center justify-between font-mono text-xs">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
              <span className="text-slate-400 ml-2">ratio_kernel://{currentDoc.id}.pdf</span>
            </div>
            
            <div className="flex items-center gap-1">
              <button
                onClick={() => setActiveTab("signal")}
                className={`px-3 py-1 rounded text-xs transition ${
                  activeTab === "signal" ? "bg-cyan-950 text-cyan-300 border border-cyan-600" : "text-slate-400 hover:text-white"
                }`}
              >
                // 01. SIGNAL SYNTHESIS
              </button>
              <button
                onClick={() => setActiveTab("ledger")}
                className={`px-3 py-1 rounded text-xs transition ${
                  activeTab === "ledger" ? "bg-cyan-950 text-cyan-300 border border-cyan-600" : "text-slate-400 hover:text-white"
                }`}
              >
                // 02. CITATION LEDGER
              </button>
              <button
                onClick={() => setActiveTab("jargon")}
                className={`px-3 py-1 rounded text-xs transition ${
                  activeTab === "jargon" ? "bg-cyan-950 text-cyan-300 border border-cyan-600" : "text-slate-400 hover:text-white"
                }`}
              >
                // 03. JARGON DECODER
              </button>
            </div>
          </div>

          {/* Terminal Body */}
          <div className="p-6">
            {activeTab === "signal" && (
              <div className="space-y-6">
                <div className="p-4 bg-slate-950 border border-cyan-500/30 rounded-lg">
                  <div className="text-[10px] font-mono text-cyan-400 uppercase tracking-widest mb-1 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>SYNTACTIC CONDENSATION [{compressionRatio}%]</span>
                  </div>
                  <p className="text-base sm:text-lg font-mono text-slate-100 leading-relaxed">
                    {currentDoc.summaryBalanced.thesis}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {currentDoc.summaryBalanced.sections.map((sec, idx) => (
                    <div key={idx} className="p-4 bg-slate-900/60 border border-slate-800 rounded-lg">
                      <div className="text-xs font-mono font-bold text-cyan-300 mb-2 flex items-center justify-between">
                        <span>{sec.heading}</span>
                        <span className="text-[10px] text-slate-500 font-normal">SEC_0{idx + 1}</span>
                      </div>
                      <p className="text-xs text-slate-300 leading-relaxed font-sans">
                        {sec.content}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="p-4 bg-emerald-950/20 border border-emerald-500/30 rounded font-mono text-xs">
                  <span className="text-emerald-400 font-bold block mb-1">// ACTIONABLE HEURISTICS EXTRACTED:</span>
                  <div className="space-y-1 text-slate-300">
                    {currentDoc.summaryBalanced.actionItems.map((act, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <span className="text-emerald-400">›</span>
                        <span>{act}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === "ledger" && (
              <div className="space-y-4 font-mono">
                <div className="text-xs text-slate-400">
                  Every extracted quote is mathematically bounded to the source PDF coordinate vector to guarantee zero synthetic hallucination.
                </div>

                <div className="space-y-3">
                  {currentDoc.quotes.map((q) => {
                    const fakeHash = `0x${q.id}7f9a2b${q.page}e8c14`;
                    return (
                      <div key={q.id} className="p-4 bg-slate-950 border border-slate-800 rounded-lg space-y-2">
                        <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
                          <div className="flex items-center gap-2">
                            <span className="px-2 py-0.5 bg-cyan-950 text-cyan-400 border border-cyan-800 rounded text-[10px]">
                              PAGE {q.page} : PARAGRAPH {q.paragraph}
                            </span>
                            <span className="text-slate-400 text-[11px]">{q.author}</span>
                          </div>
                          
                          <button
                            onClick={() => copyHashToClipboard(fakeHash)}
                            className="flex items-center gap-1.5 text-[10px] text-slate-400 hover:text-cyan-400 transition"
                          >
                            <Hash className="w-3 h-3" />
                            <span>{copiedHash === fakeHash ? "HASH COPIED" : fakeHash}</span>
                            <Copy className="w-3 h-3" />
                          </button>
                        </div>

                        <p className="text-sm text-cyan-100 font-sans italic border-l-2 border-cyan-400 pl-3">
                          "{q.quote}"
                        </p>
                        <div className="text-[10px] text-slate-500">
                          CONTEXT ANCHOR: {q.context}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {activeTab === "jargon" && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 font-mono">
                {currentDoc.hints.map((hint) => (
                  <div key={hint.id} className="p-4 bg-slate-950 border border-violet-900/40 rounded-lg flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[10px] px-1.5 py-0.5 bg-violet-950 text-violet-300 border border-violet-800 rounded">
                          {hint.level}
                        </span>
                        <HelpCircle className="w-3.5 h-3.5 text-violet-400" />
                      </div>
                      <h4 className="text-sm font-bold text-white mb-1.5">{hint.term}</h4>
                      <p className="text-xs text-slate-300 font-sans leading-relaxed mb-3">
                        {hint.simplified}
                      </p>
                    </div>
                    <div className="text-[10px] text-violet-400 pt-2 border-t border-slate-800">
                      SYS_IMPACT: <span className="text-slate-400">{hint.whyItMatters}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Cybernetic Features Bento Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 py-16 border-t border-cyan-900/30">
        <div className="text-center max-w-xl mx-auto mb-12">
          <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-2">SYSTEM CAPABILITIES</div>
          <h2 className="text-3xl sm:text-4xl font-bold font-mono text-white">
            Architected for Cognitive Throughput
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-mono">
          <div className="p-6 bg-slate-950 border border-slate-800 rounded-xl hover:border-cyan-500/60 transition group">
            <Cpu className="w-8 h-8 text-cyan-400 mb-4 group-hover:scale-110 transition" />
            <h3 className="text-lg font-bold text-white mb-2">Dynamic Vector Density</h3>
            <p className="text-xs text-slate-400 font-sans leading-relaxed">
              Dial anywhere from 10% executive flashes to 60% chapter breakdowns. Text scales adaptively to your cognitive bandwidth.
            </p>
          </div>

          <div className="p-6 bg-slate-950 border border-slate-800 rounded-xl hover:border-violet-500/60 transition group">
            <ShieldCheck className="w-8 h-8 text-violet-400 mb-4 group-hover:scale-110 transition" />
            <h3 className="text-lg font-bold text-white mb-2">Zero-Hallucination Bounds</h3>
            <p className="text-xs text-slate-400 font-sans leading-relaxed">
              Every inference is strictly constrained to source PDF tokens. No fabricated references, no imaginative embellishments.
            </p>
          </div>

          <div className="p-6 bg-slate-950 border border-slate-800 rounded-xl hover:border-emerald-500/60 transition group">
            <Volume2 className="w-8 h-8 text-emerald-400 mb-4 group-hover:scale-110 transition" />
            <h3 className="text-lg font-bold text-white mb-2">Neural Voice Synthesis</h3>
            <p className="text-xs text-slate-400 font-sans leading-relaxed">
              Transform any 100-page academic paper into a 5-minute studio-grade audio brief for commute or gym listening.
            </p>
          </div>
        </div>
      </section>

      {/* Cyber Pricing Tier */}
      <section id="pricing-grid" className="max-w-7xl mx-auto px-4 sm:px-8 py-16 border-t border-cyan-900/30">
        <div className="text-center max-w-xl mx-auto mb-12">
          <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-2">ACCESS CLEARANCE</div>
          <h2 className="text-3xl sm:text-4xl font-bold font-mono text-white">
            Choose Your Processing Tier
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-mono">
          {PRICING_TIERS.map((tier) => (
            <div
              key={tier.name}
              className={`p-6 rounded-xl border flex flex-col justify-between ${
                tier.popular
                  ? "bg-slate-900/90 border-cyan-400 shadow-[0_0_30px_rgba(6,182,212,0.2)] relative"
                  : "bg-slate-950 border-slate-800"
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 bg-cyan-400 text-black text-[10px] font-bold rounded uppercase">
                  RECOMMENDED NODE
                </div>
              )}

              <div>
                <span className="text-xs text-slate-400 uppercase">{tier.name}</span>
                <div className="flex items-baseline gap-1 my-3">
                  <span className="text-4xl font-bold text-white">{tier.price}</span>
                  <span className="text-xs text-slate-400">{tier.period}</span>
                </div>
                <p className="text-xs text-slate-300 font-sans mb-6">{tier.description}</p>

                <div className="space-y-2 pt-4 border-t border-slate-800 text-xs">
                  {tier.features.map((f, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <Check className={`w-3.5 h-3.5 mt-0.5 ${tier.popular ? "text-cyan-400" : "text-slate-400"}`} />
                      <span className="text-slate-300">{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                className={`mt-8 w-full py-2.5 rounded font-bold text-xs transition ${
                  tier.popular
                    ? "bg-cyan-400 text-black hover:bg-cyan-300 shadow-[0_0_15px_rgba(6,182,212,0.4)]"
                    : "bg-slate-800 text-slate-200 hover:bg-slate-700 hover:text-white"
                }`}
              >
                {tier.cta}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-cyan-900/40 max-w-7xl mx-auto px-4 sm:px-8 pt-10 text-slate-500 font-mono text-xs">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-8">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400" />
            <span className="text-slate-300 font-bold">RATIO.CODEX DECOMPRESSION ENGINE</span>
          </div>
          <div>ENCRYPTION: AES-256-GCM • CITATION PROTOCOL: VERIFIED</div>
        </div>
      </footer>
    </div>
  );
}
