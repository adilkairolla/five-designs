import { useState } from "react";
import { mockPapers } from "../mockData";
import type { MockPaper } from "../mockData";
import { ArrowRight, Info } from "lucide-react";

export function DesignThree() {
  const [selectedPaper, setSelectedPaper] = useState<MockPaper>(mockPapers[0]);
  const [isStructured, setIsStructured] = useState(true);

  return (
    <div className="min-h-screen bg-white text-slate-950 font-swiss-sans p-6 md:p-16 pb-32">
      {/* Structural Border Grid Wrapper */}
      <div className="max-w-6xl mx-auto space-y-16">
        
        {/* Navigation & Brand */}
        <header className="grid grid-cols-1 md:grid-cols-12 gap-6 border-b border-slate-200 pb-8 text-xs font-semibold tracking-wider">
          <div className="md:col-span-4 flex items-center gap-2">
            <span className="w-5 h-5 bg-[#ff4500] inline-block flex-shrink-0" />
            <span className="font-extrabold uppercase">Ratio Reader ── 3.0</span>
          </div>
          <div className="md:col-span-5 text-slate-500 uppercase">
            DESIGN FRAMEWORK: SWISS GRID SYSTEM
          </div>
          <div className="md:col-span-3 text-right flex items-center justify-end gap-6">
            <a href="#simulator" className="hover:text-[#ff4500] transition-colors">01 / PREVIEW</a>
            <a href="#stats" className="hover:text-[#ff4500] transition-colors">02 / DATA</a>
          </div>
        </header>

        {/* Hero Column Grid */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-8 pt-6">
          <div className="md:col-span-8 space-y-6">
            <span className="text-[11px] font-extrabold tracking-widest text-[#ff4500] uppercase block">
              COGNITIVE ARCHITECTURE
            </span>
            <h2 className="text-4xl sm:text-6xl font-bold tracking-tight text-slate-900 leading-[1.05]">
              Structure creates speed. <br />
              We strip semantic clutter.
            </h2>
          </div>
          <div className="md:col-span-4 flex flex-col justify-between pt-4">
            <p className="text-sm leading-relaxed text-slate-500">
              The human eye reads best in strict column metrics. By converting chaotic, unstructured academic paragraphs into clean tabular hierarchies, Ratio Reader raises reading velocity by 400%.
            </p>
            <div className="pt-8">
              <a 
                href="#simulator"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#ff4500] hover:text-slate-950 transition-colors group"
              >
                <span>ENTER PREVIEW MODE</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </section>

        {/* Modular Grid Info Blocks */}
        <section className="grid grid-cols-1 md:grid-cols-3 border-t border-b border-slate-200 divide-y md:divide-y-0 md:divide-x divide-slate-200 py-10 my-10">
          <div className="py-6 md:py-0 md:pr-8 space-y-3">
            <span className="text-[10px] font-bold text-slate-400">01 / THE RATIO SWITCH</span>
            <h4 className="text-sm font-bold uppercase tracking-wider">Isolate Signal</h4>
            <p className="text-xs text-slate-500 leading-relaxed">
              We extract only the evidentiary claims, formulas, and structural theses. The remaining fluff is completely faded out, allowing you to ingest content in a single glance.
            </p>
          </div>
          <div className="py-6 md:py-0 md:px-8 space-y-3">
            <span className="text-[10px] font-bold text-slate-400">02 / MARGIN INTEGRATION</span>
            <h4 className="text-sm font-bold uppercase tracking-wider">Contextual Anchors</h4>
            <p className="text-xs text-slate-500 leading-relaxed">
              Acronyms and jargon are programmatically defined and anchored to the page margin. No need to click away or interrupt the reading flow to search external definitions.
            </p>
          </div>
          <div className="py-6 md:py-0 md:pl-8 space-y-3">
            <span className="text-[10px] font-bold text-slate-400">03 / QUANTIFIABLE FLOW</span>
            <h4 className="text-sm font-bold uppercase tracking-wider">Scientific Rigor</h4>
            <p className="text-xs text-slate-500 leading-relaxed">
              Tested on over 40,000 research articles, ensuring that the semantic layout output matches natural eye tracking vectors to enhance retention.
            </p>
          </div>
        </section>

        {/* Interactive Grid Simulator */}
        <section id="simulator" className="scroll-mt-8 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between border-b border-slate-200 pb-4 gap-4">
            <div className="space-y-1">
              <h3 className="text-lg font-bold uppercase tracking-wider">01 / GRID SYSTEM PREVIEW</h3>
              <p className="text-xs text-slate-500">TOGGLE THE STRUCTURE SWITCH TO CONVERT THE LAYOUT</p>
            </div>
            
            <div className="flex items-center gap-6">
              {/* Selector */}
              <div className="flex gap-2">
                {mockPapers.map((paper) => (
                  <button
                    key={paper.id}
                    onClick={() => setSelectedPaper(paper)}
                    className={`text-[10px] font-semibold uppercase tracking-wider pb-1 border-b cursor-pointer transition-colors ${
                      selectedPaper.id === paper.id ? "border-[#ff4500] text-[#ff4500]" : "border-transparent text-slate-400 hover:text-slate-900"
                    }`}
                  >
                    {paper.title.split(" ")[0]}... {paper.year}
                  </button>
                ))}
              </div>

              {/* Toggle Switch */}
              <div className="flex items-center gap-2 text-xs">
                <span className="text-slate-400 uppercase font-medium">Grid Structure:</span>
                <button
                  onClick={() => setIsStructured(!isStructured)}
                  className={`px-3 py-1 text-[10px] font-semibold border cursor-pointer uppercase transition-all ${
                    isStructured 
                      ? "bg-[#ff4500] border-[#ff4500] text-white" 
                      : "bg-white border-slate-300 text-slate-700 hover:border-slate-800"
                  }`}
                >
                  {isStructured ? "Active" : "Standard"}
                </button>
              </div>
            </div>
          </div>

          {/* Structured Output Screen */}
          <div className="border border-slate-200 bg-slate-50/50 p-6 md:p-10 rounded-sm min-h-[450px] transition-all duration-300">
            {isStructured ? (
              /* Structured Mode: Multi-column Swiss Layout */
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start animate-fade-in">
                
                {/* Column 1: The Summary (4 cols) */}
                <div className="md:col-span-4 space-y-4 border-r border-slate-200/80 pr-6">
                  <span className="text-[10px] font-bold text-slate-400 tracking-wider block">COLUMN A / DISTILLED THESIS</span>
                  <div className="space-y-3">
                    <p className="text-xs font-semibold leading-relaxed text-slate-800">
                      {selectedPaper.summary}
                    </p>
                    <div className="border-t border-slate-200 pt-4 space-y-2">
                      <span className="text-[9px] font-bold text-[#ff4500] tracking-wider uppercase block">CHAPTER BLUEPRINTS</span>
                      {selectedPaper.chapters.map((ch, idx) => (
                        <div key={idx} className="space-y-1">
                          <span className="text-[10px] font-bold block text-slate-900">{ch.title}</span>
                          <p className="text-[11px] text-slate-500 leading-normal">{ch.summary}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Column 2: Selected Paragraphs (5 cols) */}
                <div className="md:col-span-5 space-y-6">
                  <span className="text-[10px] font-bold text-slate-400 tracking-wider block">COLUMN B / SEMANTIC CORES</span>
                  
                  {selectedPaper.chapters.map((ch, idx) => (
                    <div key={idx} className="space-y-3">
                      <span className="text-[9px] font-bold text-slate-400 block tracking-wider">{ch.title.toUpperCase()}</span>
                      <p className="text-xs leading-relaxed text-slate-800">
                        {ch.text.split(" ").map((w, wIdx) => {
                          const clean = w.replace(/[^a-zA-Z]/g, "").toLowerCase();
                          const isBold = ["memory", "chunks", "signal", "friction", "latency", "consensus", "writes"].includes(clean);
                          return (
                            <span key={wIdx} className={isBold ? "font-bold text-slate-950 underline decoration-[#ff4500]/30 mr-1" : "text-slate-600 mr-1"}>
                              {w}
                            </span>
                          );
                        })}
                      </p>
                      
                      {ch.notes.map((note, nIdx) => (
                        <div key={nIdx} className="bg-slate-100 p-2 rounded text-[10px] border-l-2 border-[#ff4500] text-slate-600 flex items-start gap-2">
                          <Info className="w-3.5 h-3.5 text-[#ff4500] mt-0.5 flex-shrink-0" />
                          <div>
                            <span className="font-bold text-slate-800">{note.term}:</span> {note.explanation}
                          </div>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>

                {/* Column 3: The Citation quotes (3 cols) */}
                <div className="md:col-span-3 space-y-6 border-l border-slate-200/80 pl-6">
                  <span className="text-[10px] font-bold text-slate-400 tracking-wider block">COLUMN C / ANCHOR QUOTES</span>
                  
                  {selectedPaper.chapters.flatMap((c) => c.quotes).map((q, idx) => (
                    <div key={idx} className="space-y-2">
                      <span className="text-[9px] font-semibold text-slate-400 block">CITED ON PAGE {q.page}</span>
                      <p className="text-xs font-semibold leading-relaxed text-slate-900 italic border-l-2 border-[#ff4500] pl-3">
                        "{q.text}"
                      </p>
                      <span className="text-[9px] font-bold uppercase text-[#ff4500] block text-right">─ {q.author.split(" ").pop()}</span>
                    </div>
                  ))}
                </div>

              </div>
            ) : (
              /* Standard Unstructured Document View */
              <div className="max-w-2xl mx-auto space-y-6 animate-fade-in py-6">
                <span className="text-[10px] font-bold text-slate-400 tracking-wider block">RAW UNSTRUCTURED PARAGRAPHS</span>
                <h4 className="text-lg font-bold">{selectedPaper.title}</h4>
                <p className="text-xs text-slate-400">By {selectedPaper.author} ({selectedPaper.year})</p>
                <div className="text-xs leading-relaxed text-slate-600 space-y-6 pt-4">
                  {selectedPaper.chapters.map((ch, idx) => (
                    <div key={idx} className="space-y-2">
                      <h5 className="font-semibold text-slate-800">{ch.title}</h5>
                      <p>{ch.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Speed Data Table */}
        <section id="stats" className="scroll-mt-8 space-y-6 border-t border-slate-200 pt-12">
          <div className="space-y-1">
            <h3 className="text-lg font-bold uppercase tracking-wider">02 / READING PERFORMANCE METRICS</h3>
            <p className="text-xs text-slate-500 font-medium">A COMPARATIVE ANALYSIS OF WORKFLOW DENSITY</p>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="border-b-2 border-slate-900 uppercase font-bold text-slate-800">
                  <th className="py-3 pr-4">Metrics analyzed</th>
                  <th className="py-3 px-4">Standard workflow</th>
                  <th className="py-3 px-4 text-[#ff4500]">Ratio reader workflow</th>
                  <th className="py-3 pl-4 text-right">Performance boost</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-slate-600">
                <tr className="hover:bg-slate-50/50">
                  <td className="py-4 pr-4 font-semibold text-slate-950">Average Reading Velocity</td>
                  <td className="py-4 px-4">250 WPM (Words Per Minute)</td>
                  <td className="py-4 px-4 font-semibold text-slate-900">1,000 WPM (Structured Equivalency)</td>
                  <td className="py-4 pl-4 text-right font-bold text-emerald-600">+300% Speed</td>
                </tr>
                <tr className="hover:bg-slate-50/50">
                  <td className="py-4 pr-4 font-semibold text-slate-950">Cognitive Clutter Ratio</td>
                  <td className="py-4 px-4">80% text is non-essential</td>
                  <td className="py-4 px-4 font-semibold text-slate-900">0% fluff (Isolated Core logic)</td>
                  <td className="py-4 pl-4 text-right font-bold text-emerald-600">100% Signal</td>
                </tr>
                <tr className="hover:bg-slate-50/50">
                  <td className="py-4 pr-4 font-semibold text-slate-950">Acronym Definition Friction</td>
                  <td className="py-4 px-4">Average 3.5 browser tabs opened per paper</td>
                  <td className="py-4 px-4 font-semibold text-slate-900">0 tabs (Inline margin anchors)</td>
                  <td className="py-4 pl-4 text-right font-bold text-emerald-600">-100% Context hops</td>
                </tr>
                <tr className="hover:bg-slate-50/50">
                  <td className="py-4 pr-4 font-semibold text-slate-950">Average Retention (24h test)</td>
                  <td className="py-4 px-4">32% of facts retained</td>
                  <td className="py-4 px-4 font-semibold text-slate-900">78% of structural facts retained</td>
                  <td className="py-4 pl-4 text-right font-bold text-emerald-600">+143% Retention</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Minimal Swiss Footer */}
        <footer className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center text-[10px] text-slate-400 font-semibold tracking-wider uppercase gap-4">
          <div>
            © 2026 RATIO READER. STUTTGART / ZURICH / SAN FRANCISCO.
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-slate-900 transition-colors">Documentation</a>
            <a href="#" className="hover:text-slate-900 transition-colors">Specifications</a>
            <a href="#" className="hover:text-slate-900 transition-colors">Colophon</a>
          </div>
        </footer>

      </div>
    </div>
  );
}
