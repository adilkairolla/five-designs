import { useState } from "react";
import { 
  Briefcase, 
  CheckCircle2, 
  ArrowUpRight, 
  ChevronRight, 
  Share2, 
  Lock, 
  Send, 
  AlertTriangle, 
  Target 
} from "lucide-react";
import { SAMPLE_DOCUMENTS, PRICING_TIERS } from "../data/samplePdfs";

export function Design4ExecutiveVault() {
  const [selectedDocId, setSelectedDocId] = useState<string>("antifragile-capital");
  const [executiveHourlyRate, setExecutiveHourlyRate] = useState<number>(350);
  const [monthlyPdfCount, setMonthlyPdfCount] = useState<number>(24);
  const [activeTab, setActiveTab] = useState<"memo" | "risks" | "evidence" | "actions">("memo");
  const [exportedStatus, setExportedStatus] = useState<string | null>(null);

  const currentDoc = SAMPLE_DOCUMENTS.find((d) => d.id === selectedDocId) || SAMPLE_DOCUMENTS[1];

  // ROI Calculations
  const hoursPerDocSaved = (currentDoc.originalReadTimeMinutes - currentDoc.summaryBalanced.readTimeMinutes) / 60;
  const totalMonthlyHoursSaved = Math.round(hoursPerDocSaved * monthlyPdfCount);
  const totalMonthlyFinancialGain = Math.round(totalMonthlyHoursSaved * executiveHourlyRate);

  const triggerExport = (destination: string) => {
    setExportedStatus(destination);
    setTimeout(() => setExportedStatus(null), 2500);
  };

  return (
    <div className="min-h-screen bg-[#080B11] text-slate-100 font-sans selection:bg-amber-400 selection:text-black pt-14 pb-20">
      
      {/* Top Financial Ticker Bar */}
      <div className="bg-[#0D121D] border-b border-slate-800 text-[11px] font-mono text-slate-400 py-1.5 px-4 overflow-x-auto whitespace-nowrap">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-6">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-amber-400 font-bold">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
              INTELLIGENCE TERMINAL: LIVE
            </span>
            <span>SEC 10-K PARSE TIME: <strong className="text-emerald-400">1.9s</strong></span>
            <span>FOOTNOTE RISK DETECTION: <strong className="text-emerald-400">99.4%</strong></span>
            <span>CITATIONS AUDITED: <strong className="text-slate-200">2,419,000+</strong></span>
          </div>
          <div className="hidden sm:flex items-center gap-3">
            <span className="text-slate-500">SOC2 TYPE II CERTIFIED</span>
            <span>•</span>
            <span className="text-slate-500">ZERO DATA LOGGING</span>
          </div>
        </div>
      </div>

      {/* Executive Header */}
      <header className="border-b border-slate-800/80 bg-[#080B11]/90 backdrop-blur-md sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-3.5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-slate-950 font-bold shadow-[0_0_15px_rgba(245,158,11,0.3)]">
              <Briefcase className="w-4 h-4" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold tracking-tight text-base text-white">RATIO VAULT</span>
                <span className="text-[10px] font-mono px-2 py-0.5 bg-amber-400/10 text-amber-400 border border-amber-400/30 rounded">ENTERPRISE</span>
              </div>
              <p className="text-[10px] text-slate-400 font-mono hidden sm:block">Executive Decision Velocity Engine</p>
            </div>
          </div>

          <nav className="flex items-center gap-6 text-xs font-semibold uppercase tracking-wider text-slate-300">
            <a href="#simulator" className="hover:text-amber-400 transition hidden md:inline">Intelligence Deck</a>
            <a href="#roi-calculator" className="hover:text-amber-400 transition hidden sm:inline">ROI Matrix</a>
            <a href="#enterprise-pricing" className="hover:text-amber-400 transition">Pricing Plans</a>
            <a
              href="#simulator"
              className="px-4 py-2 rounded bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold transition flex items-center gap-1.5 shadow-[0_0_15px_rgba(245,158,11,0.25)]"
            >
              <span>Instant Briefing</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 pt-12 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-amber-400/10 border border-amber-400/30 text-amber-400 font-mono text-xs">
              <Target className="w-3.5 h-3.5" />
              <span>THE ASYMMETRIC ADVANTAGE</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white leading-[1.1]">
              Turn 200-Page Briefings into <span className="text-amber-400">4-Minute</span> Boardroom Decisions.
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-sans">
              Designed for C-suite leaders, investment partners, and managing directors who cannot afford to waste 6 hours per document or miss critical liabilities buried in page 90 footnotes.
            </p>

            {/* Value Props Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 font-mono text-xs">
              <div className="p-3 bg-slate-900/60 border border-slate-800 rounded">
                <span className="text-slate-400 block text-[10px]">EXEC RECLAIMED TIME</span>
                <span className="text-xl font-bold text-amber-400">88.5%</span>
              </div>
              <div className="p-3 bg-slate-900/60 border border-slate-800 rounded">
                <span className="text-slate-400 block text-[10px]">PRECISION CITATIONS</span>
                <span className="text-xl font-bold text-emerald-400">100% Truth</span>
              </div>
              <div className="p-3 bg-slate-900/60 border border-slate-800 rounded">
                <span className="text-slate-400 block text-[10px]">INSTANT SYNC</span>
                <span className="text-xl font-bold text-blue-400">Slack & Notion</span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href="#simulator"
                className="px-6 py-3 rounded bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs uppercase tracking-wider flex items-center gap-2 transition"
              >
                <span>Run Executive Simulator</span>
                <ChevronRight className="w-4 h-4" />
              </a>
              <a
                href="#roi-calculator"
                className="px-6 py-3 rounded bg-slate-900 border border-slate-700 hover:border-amber-400 text-slate-200 text-xs uppercase tracking-wider font-mono transition"
              >
                Calculate Team ROI
              </a>
            </div>
          </div>

          {/* Right Hero Bento Card */}
          <div className="lg:col-span-5">
            <div className="p-6 rounded-xl bg-slate-950 border border-slate-800 relative shadow-2xl space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-xs">
                <span className="text-amber-400 font-mono font-bold">BOARDROOM INTELLIGENCE DISPATCH</span>
                <span className="text-slate-500 font-mono">CONFIDENTIAL</span>
              </div>

              <div className="p-4 bg-slate-900/80 border border-amber-400/20 rounded-lg space-y-2">
                <span className="text-[10px] font-mono text-amber-400 uppercase tracking-wider block">
                  Automated Executive One-Pager:
                </span>
                <h4 className="font-bold text-white text-base">Asymmetric Upside & Convex Risk in Modern Markets</h4>
                <p className="text-xs text-slate-300 font-sans leading-relaxed">
                  "Fragile systems break under unexpected variance; antifragile systems capture outsized gains. Identifying tail risks requires isolating hidden covenants buried in page 74 footnotes."
                </p>
              </div>

              <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                <div className="p-3 bg-slate-900/40 border border-slate-800 rounded">
                  <span className="text-slate-400 block text-[10px]">DOCUMENT SIZE</span>
                  <span className="text-slate-200 font-bold">82 Pages (29.5k wds)</span>
                </div>
                <div className="p-3 bg-slate-900/40 border border-slate-800 rounded">
                  <span className="text-slate-400 block text-[10px]">TIME ALLOTTED</span>
                  <span className="text-emerald-400 font-bold">4 Min Executive Brief</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Main Feature: THE BOARDROOM SIMULATOR */}
      <section id="simulator" className="max-w-7xl mx-auto px-4 sm:px-8 py-16 border-t border-slate-800">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <span className="text-xs font-mono text-amber-400 uppercase tracking-widest block mb-1">
              LIVE EXECUTIVE WORKBENCH
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Boardroom Intelligence Simulator
            </h2>
          </div>

          {/* Export Actions Bar */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => triggerExport("Notion Boardroom Deck")}
              className="px-3 py-1.5 rounded bg-slate-900 border border-slate-700 hover:border-amber-400 text-xs font-mono text-slate-200 transition flex items-center gap-1.5"
            >
              <Send className="w-3.5 h-3.5 text-amber-400" />
              <span>Sync to Notion</span>
            </button>
            <button
              onClick={() => triggerExport("Slack Executive Memo")}
              className="px-3 py-1.5 rounded bg-slate-900 border border-slate-700 hover:border-amber-400 text-xs font-mono text-slate-200 transition flex items-center gap-1.5"
            >
              <Share2 className="w-3.5 h-3.5 text-blue-400" />
              <span>Push to Slack</span>
            </button>
          </div>
        </div>

        {/* Export Notification */}
        {exportedStatus && (
          <div className="mb-6 p-3 rounded bg-amber-400/10 border border-amber-400/40 text-amber-300 font-mono text-xs flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-amber-400" />
            <span>Successfully formatted & exported executive dispatch to {exportedStatus}!</span>
          </div>
        )}

        {/* Workbench Bento */}
        <div className="bg-slate-950 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl">
          
          {/* Document Tabs */}
          <div className="p-4 bg-slate-900/60 border-b border-slate-800 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono text-slate-400">SELECT BRIEFING:</span>
              <div className="flex flex-wrap gap-1.5">
                {SAMPLE_DOCUMENTS.map((doc) => (
                  <button
                    key={doc.id}
                    onClick={() => setSelectedDocId(doc.id)}
                    className={`px-3 py-1 rounded text-xs font-mono transition ${
                      selectedDocId === doc.id
                        ? "bg-amber-400 text-slate-950 font-bold"
                        : "bg-slate-800 text-slate-300 hover:text-white"
                    }`}
                  >
                    {doc.title.slice(0, 24)}...
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-1 font-mono text-xs">
              <button
                onClick={() => setActiveTab("memo")}
                className={`px-3 py-1 rounded transition ${
                  activeTab === "memo" ? "bg-amber-400/20 text-amber-400 border border-amber-400/40 font-bold" : "text-slate-400 hover:text-white"
                }`}
              >
                Executive Memo
              </button>
              <button
                onClick={() => setActiveTab("risks")}
                className={`px-3 py-1 rounded transition ${
                  activeTab === "risks" ? "bg-amber-400/20 text-amber-400 border border-amber-400/40 font-bold" : "text-slate-400 hover:text-white"
                }`}
              >
                Footnote Risks
              </button>
              <button
                onClick={() => setActiveTab("evidence")}
                className={`px-3 py-1 rounded transition ${
                  activeTab === "evidence" ? "bg-amber-400/20 text-amber-400 border border-amber-400/40 font-bold" : "text-slate-400 hover:text-white"
                }`}
              >
                Audit Evidence
              </button>
            </div>
          </div>

          {/* Workbench Body */}
          <div className="p-6">
            {activeTab === "memo" && (
              <div className="space-y-6">
                <div className="p-5 rounded-xl bg-slate-900 border border-slate-800">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono text-amber-400 uppercase tracking-wider">
                      Strategic Synthesis ({currentDoc.originalPages} Original Pages)
                    </span>
                    <span className="text-xs font-mono text-emerald-400">Read Time: 4 Mins</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{currentDoc.title}</h3>
                  <p className="text-sm text-slate-300 leading-relaxed font-sans">
                    {currentDoc.summaryBalanced.thesis}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {currentDoc.summaryBalanced.sections.map((sec, i) => (
                    <div key={i} className="p-4 rounded-xl bg-slate-900/50 border border-slate-800 space-y-2">
                      <h4 className="text-sm font-bold text-amber-300 font-mono">{sec.heading}</h4>
                      <p className="text-xs text-slate-300 leading-relaxed font-sans">{sec.content}</p>
                    </div>
                  ))}
                </div>

                <div className="p-4 rounded-xl bg-slate-900 border border-emerald-500/30">
                  <span className="text-xs font-mono text-emerald-400 font-bold uppercase block mb-2">
                    Board Action Directives:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-mono text-slate-300">
                    {currentDoc.summaryBalanced.actionItems.map((act, idx) => (
                      <div key={idx} className="p-2 bg-slate-950 rounded border border-slate-800 flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 mt-0.5 shrink-0" />
                        <span>{act}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === "risks" && (
              <div className="space-y-4 font-mono">
                <div className="p-4 rounded-xl bg-rose-950/20 border border-rose-500/30 flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-rose-300">Automated Footnote Forensic Audit</h4>
                    <p className="text-xs text-slate-300 font-sans mt-1">
                      Ratio Reader scanned 82 pages and flagged 2 non-linear tail risk variables concealed in legal appendices.
                    </p>
                  </div>
                </div>

                <div className="space-y-3">
                  {currentDoc.hints.map((hint) => (
                    <div key={hint.id} className="p-4 bg-slate-900 border border-slate-800 rounded-xl space-y-1">
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-amber-400 font-bold">{hint.term}</span>
                        <span className="text-[10px] px-2 py-0.5 bg-slate-800 rounded text-slate-400">{hint.level}</span>
                      </div>
                      <p className="text-xs text-slate-300 font-sans">{hint.simplified}</p>
                      <div className="text-[11px] text-emerald-400 pt-1">
                        Executive Mitigation: <span className="text-slate-400 font-sans">{hint.whyItMatters}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "evidence" && (
              <div className="space-y-4">
                <div className="text-xs font-mono text-slate-400">
                  Every claim is tied directly to audited page references for courtroom-level verification.
                </div>

                <div className="space-y-3">
                  {currentDoc.quotes.map((q) => (
                    <div key={q.id} className="p-4 bg-slate-900 border border-slate-800 rounded-xl space-y-2">
                      <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                        <span className="text-amber-400 font-bold">Source Anchor: Page {q.page}, Para {q.paragraph}</span>
                        <span className="text-emerald-400 flex items-center gap-1">
                          <CheckCircle2 className="w-3.5 h-3.5" /> Verified Quote
                        </span>
                      </div>
                      <p className="text-sm font-serif italic text-white">"{q.quote}"</p>
                      <div className="text-[11px] text-slate-500 font-mono">{q.context}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ROI of Attention Interactive Calculator */}
      <section id="roi-calculator" className="max-w-7xl mx-auto px-4 sm:px-8 py-16 border-t border-slate-800">
        <div className="p-8 rounded-2xl bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-mono text-amber-400 uppercase tracking-wider block mb-1">
              THE FINANCIAL MATHEMATICS
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Attention ROI Calculator
            </h2>
            <p className="text-xs text-slate-400 font-sans mt-1">
              Quantify the exact dollar value of executive and analyst hours reclaimed from reading dense documents.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Sliders */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-slate-300">Executive / Analyst Effective Hourly Rate:</span>
                  <span className="text-amber-400 font-bold text-base">${executiveHourlyRate} / hr</span>
                </div>
                <input
                  type="range"
                  min="100"
                  max="1000"
                  step="25"
                  value={executiveHourlyRate}
                  onChange={(e) => setExecutiveHourlyRate(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded appearance-none cursor-pointer accent-amber-400"
                />
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-slate-300">Monthly Document Volume per Team Member:</span>
                  <span className="text-amber-400 font-bold text-base">{monthlyPdfCount} PDFs / mo</span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="80"
                  value={monthlyPdfCount}
                  onChange={(e) => setMonthlyPdfCount(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded appearance-none cursor-pointer accent-amber-400"
                />
              </div>
            </div>

            {/* Total Results */}
            <div className="lg:col-span-5 p-6 rounded-xl bg-slate-950 border border-amber-400/30 text-center space-y-4">
              <div>
                <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block">
                  MONTHLY EXECUTIVE GAIN
                </span>
                <div className="text-4xl sm:text-5xl font-bold text-amber-400 font-mono mt-1">
                  ${totalMonthlyFinancialGain.toLocaleString()}
                </div>
                <span className="text-xs text-slate-400 font-mono">in recovered strategic compute</span>
              </div>

              <div className="pt-4 border-t border-slate-800 grid grid-cols-2 gap-2 text-xs font-mono">
                <div>
                  <span className="text-slate-500 block">Hours Reclaimed:</span>
                  <span className="text-white font-bold">{totalMonthlyHoursSaved} hrs / mo</span>
                </div>
                <div>
                  <span className="text-slate-500 block">Annual Value:</span>
                  <span className="text-emerald-400 font-bold">${(totalMonthlyFinancialGain * 12).toLocaleString()}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enterprise Pricing */}
      <section id="enterprise-pricing" className="max-w-7xl mx-auto px-4 sm:px-8 py-16 border-t border-slate-800">
        <div className="text-center max-w-xl mx-auto mb-12">
          <span className="text-xs font-mono text-amber-400 uppercase tracking-widest block mb-1">DEPLOYMENT</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Commercial Tier Licensing</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PRICING_TIERS.map((tier) => (
            <div
              key={tier.name}
              className={`p-6 rounded-xl border flex flex-col justify-between ${
                tier.popular
                  ? "bg-slate-900 border-amber-400 shadow-[0_0_25px_rgba(245,158,11,0.15)] relative"
                  : "bg-slate-950 border-slate-800"
              }`}
            >
              <div>
                <span className="text-xs font-mono text-slate-400 uppercase">{tier.name}</span>
                <div className="flex items-baseline gap-1 my-3">
                  <span className="text-4xl font-bold text-white font-mono">{tier.price}</span>
                  <span className="text-xs text-slate-400 font-mono">{tier.period}</span>
                </div>
                <p className="text-xs text-slate-300 font-sans mb-6">{tier.description}</p>

                <div className="space-y-2 pt-4 border-t border-slate-800 text-xs font-mono">
                  {tier.features.map((f, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className={`w-3.5 h-3.5 mt-0.5 ${tier.popular ? "text-amber-400" : "text-slate-500"}`} />
                      <span className="text-slate-300">{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                className={`mt-8 w-full py-2.5 rounded font-bold text-xs uppercase tracking-wider transition ${
                  tier.popular
                    ? "bg-amber-400 text-slate-950 hover:bg-amber-300 shadow-[0_0_15px_rgba(245,158,11,0.3)]"
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
      <footer className="border-t border-slate-800 max-w-7xl mx-auto px-4 sm:px-8 pt-10 text-slate-500 font-mono text-xs">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-8">
          <div className="flex items-center gap-2">
            <Lock className="w-4 h-4 text-amber-400" />
            <span className="text-slate-300 font-bold">RATIO READER ENTERPRISE VAULT</span>
          </div>
          <div>COMPLIANCE: SOC2 TYPE II • ZERO LOGGING • STRICT CITATION BOUNDS</div>
        </div>
      </footer>
    </div>
  );
}
