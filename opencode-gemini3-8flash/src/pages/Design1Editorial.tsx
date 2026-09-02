import { useState } from "react";
import { SAMPLE_DOCUMENTS, type PdfDocument } from "../data/samplePdfs";
import {
  BookOpen,
  Feather,
  Bookmark,
  Quote,
  Sparkles,
  ArrowRight,
  Sliders,
  UploadCloud,
  CheckCircle2,
  FileText,
  Search,
  Compass,
  ScrollText,
} from "lucide-react";
import confetti from "canvas-confetti";

export function Design1Editorial() {
  const [selectedDoc, setSelectedDoc] = useState<PdfDocument>(SAMPLE_DOCUMENTS[0]);
  const [compressionRatio, setCompressionRatio] = useState<number>(30); // 10% to 50%
  const [activeHintIndex, setActiveHintIndex] = useState<number>(0);
  const [isUploading, setIsUploading] = useState(false);
  const [customFileTitle, setCustomFileTitle] = useState<string | null>(null);

  const handleSimulatedUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setIsUploading(true);
      setTimeout(() => {
        setIsUploading(false);
        setCustomFileTitle(file.name.replace(".pdf", ""));
        confetti({
          particleCount: 40,
          spread: 60,
          origin: { y: 0.7 },
          colors: ["#8A252C", "#D97706", "#2A2421"],
        });
      }, 900);
    }
  };

  const calculateReadTime = (origTimeStr: string, ratio: number) => {
    const minutes = parseInt(origTimeStr) || 30;
    const reduced = Math.max(1, Math.round((minutes * ratio) / 100));
    return `${reduced} min read`;
  };

  return (
    <div className="min-h-screen bg-[#FBF8F3] text-[#1C1917] font-serif selection:bg-[#8B2626] selection:text-[#FBF8F3] pb-28">
      {/* Editorial Top Ribbon */}
      <header className="border-b border-[#E7DFD3] bg-[#F4EFE6]/70 backdrop-blur sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between text-xs tracking-widest uppercase font-mono text-[#57534E]">
          <div className="flex items-center gap-4">
            <span className="font-semibold text-[#8B2626] flex items-center gap-1.5">
              <ScrollText className="w-4 h-4 text-[#8B2626]" />
              The Scholarly Ratio
            </span>
            <span className="hidden sm:inline border-l border-[#D6CEC2] pl-4 text-[11px]">
              Folio No. IV • Autumn Gazette
            </span>
          </div>
          <div className="flex items-center gap-5">
            <a href="#manuscript-bench" className="hover:text-[#1C1917] transition-colors">
              Reading Desk
            </a>
            <a href="#trivium" className="hover:text-[#1C1917] transition-colors">
              The Method
            </a>
            <label className="cursor-pointer bg-[#8B2626] text-[#FBF8F3] px-3 py-1 rounded-sm text-[11px] font-sans font-medium tracking-normal hover:bg-[#6D1E1E] transition-colors shadow-sm">
              Upload Folio
              <input type="file" accept=".pdf" className="hidden" onChange={handleSimulatedUpload} />
            </label>
          </div>
        </div>
      </header>

      {/* Masthead */}
      <div className="max-w-5xl mx-auto px-6 pt-14 pb-8 text-center border-b border-[#E7DFD3]">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#D6CEC2] bg-[#F7F2E8] text-xs font-mono text-[#78716C] mb-6">
          <Feather className="w-3.5 h-3.5 text-[#8B2626]" />
          <span>The Intellectual Companion for Heavy Tomes & Monographs</span>
        </div>

        <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif tracking-tight font-normal text-[#1C1917] leading-[1.08] mb-6">
          Distill the monumental <br className="hidden sm:inline" />
          <em className="font-italic text-[#8B2626]">into the unforgettable.</em>
        </h1>

        <p className="max-w-2xl mx-auto text-lg sm:text-xl text-[#57534E] leading-relaxed font-sans font-light">
          Upload 60-page academic papers, legal treatises, and philosophy volumes.
          <strong className="font-medium text-[#1C1917]"> Ratio Reader</strong> compresses dense prose by up to 90%, 
          illuminating marginal hints and preserving exact verbatim quotes.
        </p>

        {/* Paper Stats strip */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto mt-10 pt-6 border-t border-[#E7DFD3] text-left">
          <div className="p-3 bg-[#F4EFE6]/60 rounded border border-[#E7DFD3]/80">
            <span className="block text-[11px] font-mono text-[#78716C] uppercase">Signal Retention</span>
            <span className="text-2xl font-serif font-bold text-[#8B2626]">96.8%</span>
            <span className="block text-xs text-[#57534E] font-sans">Core theorems preserved</span>
          </div>
          <div className="p-3 bg-[#F4EFE6]/60 rounded border border-[#E7DFD3]/80">
            <span className="block text-[11px] font-mono text-[#78716C] uppercase">Reading Velocity</span>
            <span className="text-2xl font-serif font-bold text-[#1C1917]">10x – 18x</span>
            <span className="block text-xs text-[#57534E] font-sans">Effortless mastery</span>
          </div>
          <div className="p-3 bg-[#F4EFE6]/60 rounded border border-[#E7DFD3]/80">
            <span className="block text-[11px] font-mono text-[#78716C] uppercase">Contextual Marginalia</span>
            <span className="text-2xl font-serif font-bold text-[#8B2626]">3 Types</span>
            <span className="block text-xs text-[#57534E] font-sans">Traps, Nuances, Analogies</span>
          </div>
          <div className="p-3 bg-[#F4EFE6]/60 rounded border border-[#E7DFD3]/80">
            <span className="block text-[11px] font-mono text-[#78716C] uppercase">Verbatim Anchor</span>
            <span className="text-2xl font-serif font-bold text-[#1C1917]">Exact Page</span>
            <span className="block text-xs text-[#57534E] font-sans">Every claim cited</span>
          </div>
        </div>
      </div>

      {/* Interactive Reading Desk / Book Spread */}
      <section id="manuscript-bench" className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div>
            <span className="text-xs font-mono tracking-widest text-[#8B2626] uppercase block mb-1">
              Interactive Examination Desk
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif text-[#1C1917]">
              Sample the Distillation Engine
            </h2>
          </div>

          {/* Sample Switcher Tabs */}
          <div className="flex flex-wrap items-center gap-2 p-1.5 bg-[#EDE6D8] rounded-lg border border-[#D6CEC2]">
            {SAMPLE_DOCUMENTS.map((doc) => (
              <button
                key={doc.id}
                onClick={() => {
                  setSelectedDoc(doc);
                  setCustomFileTitle(null);
                  setActiveHintIndex(0);
                }}
                className={`px-3 py-1.5 text-xs font-sans rounded transition-all ${
                  selectedDoc.id === doc.id && !customFileTitle
                    ? "bg-[#8B2626] text-[#FBF8F3] font-medium shadow-sm"
                    : "text-[#57534E] hover:text-[#1C1917]"
                }`}
              >
                {doc.title.split(":")[0].slice(0, 24)}...
              </button>
            ))}
          </div>
        </div>

        {/* Upload Banner / Notice */}
        {customFileTitle && (
          <div className="mb-6 p-4 bg-[#F4EFE6] border-2 border-dashed border-[#8B2626]/40 rounded-lg flex items-center justify-between text-sm font-sans">
            <div className="flex items-center gap-3">
              <FileText className="w-5 h-5 text-[#8B2626]" />
              <span>
                Simulated manuscript loaded: <strong>{customFileTitle}.pdf</strong>
              </span>
            </div>
            <button
              onClick={() => setCustomFileTitle(null)}
              className="text-xs text-[#8B2626] hover:underline font-mono"
            >
              Reset to classic library
            </button>
          </div>
        )}

        {/* Main Book Spread Container */}
        <div className="bg-[#FAF6EE] border-2 border-[#D6CEC2] rounded-xl shadow-xl shadow-[#1C1917]/5 overflow-hidden">
          {/* Top Bar of the Reader */}
          <div className="bg-[#EFE7D8] border-b border-[#D6CEC2] px-6 py-4 flex flex-wrap items-center justify-between gap-4">
            <div>
              <span className="text-[11px] font-mono text-[#78716C] uppercase block">Selected Folio</span>
              <h3 className="text-lg font-serif font-semibold text-[#1C1917]">
                {customFileTitle ? `${customFileTitle} (Uploaded Manuscript)` : selectedDoc.title}
              </h3>
              <p className="text-xs font-sans text-[#78716C]">{selectedDoc.author} • {selectedDoc.category}</p>
            </div>

            {/* Ratio Dial Slider */}
            <div className="bg-[#FAF6EE] px-4 py-2.5 rounded-lg border border-[#D6CEC2] flex items-center gap-4">
              <div className="text-right">
                <span className="block text-[10px] font-mono uppercase text-[#78716C]">Ratio Dial</span>
                <span className="text-xs font-sans font-semibold text-[#8B2626]">
                  {compressionRatio}% Depth ({calculateReadTime(selectedDoc.readTimeOriginal, compressionRatio)})
                </span>
              </div>
              <input
                type="range"
                min="10"
                max="50"
                step="5"
                value={compressionRatio}
                onChange={(e) => setCompressionRatio(Number(e.target.value))}
                className="w-28 sm:w-36 accent-[#8B2626] cursor-pointer"
              />
            </div>
          </div>

          {/* Book Interior - 2 Column Split Spread */}
          <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-[#E7DFD3]">
            {/* Left Page: The Distilled Synthesis & Core Thesis (7 Cols) */}
            <div className="lg:col-span-7 p-6 sm:p-10 space-y-6">
              <div className="flex items-center justify-between border-b border-[#E7DFD3] pb-3 text-xs font-mono text-[#78716C]">
                <span>CHAPTER ABSTRACT • SCRIPTUM</span>
                <span>ORIGINAL: {selectedDoc.originalPages} PAGES ({selectedDoc.readTimeOriginal})</span>
              </div>

              {/* Distilled Prose */}
              <div className="prose prose-stone max-w-none">
                <p className="text-xl sm:text-2xl font-serif text-[#1C1917] leading-relaxed first-letter:text-5xl first-letter:font-serif first-letter:float-left first-letter:mr-3 first-letter:text-[#8B2626] first-letter:font-bold">
                  {selectedDoc.executiveSummary}
                </p>

                {compressionRatio >= 25 && (
                  <p className="text-base sm:text-lg font-serif text-[#44403C] leading-relaxed pt-3 border-t border-[#EFE7D8]">
                    {selectedDoc.deepSummary}
                  </p>
                )}
              </div>

              {/* Verbatim Anchor Quotes */}
              <div className="pt-6 border-t border-[#E7DFD3] space-y-4">
                <div className="flex items-center gap-2 text-xs font-mono text-[#8B2626] uppercase">
                  <Quote className="w-3.5 h-3.5" />
                  <span>Verbatim Golden Citations (Page-Anchored)</span>
                </div>

                {selectedDoc.quotes.map((q, idx) => (
                  <blockquote
                    key={idx}
                    className="relative pl-5 border-l-2 border-[#8B2626] bg-[#F4EFE6]/80 p-4 rounded-r-md text-[#2A2421]"
                  >
                    <p className="italic font-serif text-base text-[#1C1917] mb-2 leading-relaxed">
                      "{q.quote}"
                    </p>
                    <div className="flex items-center justify-between text-xs font-sans text-[#78716C]">
                      <span className="font-mono text-[#8B2626] font-medium">Folio Page {q.page} • {q.speakerOrContext}</span>
                      <span className="italic">{q.significance}</span>
                    </div>
                  </blockquote>
                ))}
              </div>
            </div>

            {/* Right Page: The Scholarly Marginalia & Prerequisite Hints (5 Cols) */}
            <div className="lg:col-span-5 p-6 sm:p-8 bg-[#F5EFE4]/60 space-y-6">
              <div className="flex items-center justify-between border-b border-[#E7DFD3] pb-3 text-xs font-mono text-[#78716C]">
                <span className="flex items-center gap-1.5 text-[#8B2626]">
                  <Bookmark className="w-3.5 h-3.5" />
                  MARGINALIA & HINTS
                </span>
                <span>{selectedDoc.hints.length} ANNOTATIONS</span>
              </div>

              <p className="text-xs font-sans text-[#78716C] leading-normal">
                Click any annotation below to expand the contextual clarifying notes authored by Ratio's deep semantic inspector.
              </p>

              {/* Hints Stack */}
              <div className="space-y-3">
                {selectedDoc.hints.map((hint, idx) => {
                  const isSelected = activeHintIndex === idx;
                  return (
                    <div
                      key={idx}
                      onClick={() => setActiveHintIndex(idx)}
                      className={`cursor-pointer p-4 rounded-lg border transition-all ${
                        isSelected
                          ? "bg-[#FAF6EE] border-[#8B2626] shadow-md shadow-[#8B2626]/5 translate-x-1"
                          : "bg-[#F7F2E8] border-[#D6CEC2] hover:border-[#8B2626]/50"
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="inline-block px-2 py-0.5 rounded text-[10px] font-mono uppercase bg-[#8B2626]/10 text-[#8B2626] font-semibold">
                          {hint.tag}
                        </span>
                        <span className="text-[11px] font-mono text-[#78716C]">Ref: Page {hint.page}</span>
                      </div>
                      <p className="text-sm font-sans text-[#292524] leading-relaxed">
                        {hint.text}
                      </p>
                    </div>
                  );
                })}
              </div>

              {/* Actionable Cognitive Takeaways */}
              <div className="pt-4 border-t border-[#E7DFD3]">
                <span className="text-xs font-mono uppercase text-[#78716C] block mb-3">
                  Applied Takeaways
                </span>
                <div className="space-y-3">
                  {selectedDoc.keyInsights.map((ins, i) => (
                    <div key={i} className="text-xs font-sans bg-[#FAF6EE] p-3 rounded border border-[#E7DFD3]">
                      <h4 className="font-serif font-bold text-sm text-[#1C1917] mb-1">{ins.headline}</h4>
                      <p className="text-[#57534E] mb-2">{ins.takeaway}</p>
                      <div className="text-[11px] font-mono text-[#8B2626] bg-[#8B2626]/5 p-2 rounded">
                        <strong>Application:</strong> {ins.practicalApplication}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Book Bottom Ribbon */}
          <div className="bg-[#EFE7D8] border-t border-[#D6CEC2] px-6 py-3 flex flex-wrap items-center justify-between text-xs font-mono text-[#57534E]">
            <div className="flex items-center gap-4">
              <span>Original: {selectedDoc.originalWordCount.toLocaleString()} words</span>
              <span>•</span>
              <span className="text-[#8B2626] font-bold">Ratio Compressed: {selectedDoc.compressionPercent}% reduction</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700" />
              <span>Full semantic integrity verified</span>
            </div>
          </div>
        </div>
      </section>

      {/* The Scholarly Trivium (Methodology) */}
      <section id="trivium" className="max-w-5xl mx-auto px-6 py-16 border-t border-[#E7DFD3]">
        <div className="text-center max-w-xl mx-auto mb-12">
          <span className="text-xs font-mono uppercase tracking-widest text-[#8B2626] block mb-2">
            The Threefold Discipline
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif text-[#1C1917]">
            How Ratio Reader preserves scholarship while slashing reading time
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          <div className="p-6 bg-[#F4EFE6]/70 rounded-lg border border-[#E7DFD3] space-y-3">
            <span className="text-3xl font-serif text-[#8B2626] font-bold">I.</span>
            <h3 className="text-xl font-serif text-[#1C1917]">Linguistic Condensation</h3>
            <p className="text-sm font-sans text-[#57534E] leading-relaxed">
              Standard AI summarizers hallucinate or flatten subtle nuance into bland corporate bullets. 
              Ratio’s compression engine maps the logical skeleton of the work, retaining theoretical proof points.
            </p>
          </div>

          <div className="p-6 bg-[#F4EFE6]/70 rounded-lg border border-[#E7DFD3] space-y-3">
            <span className="text-3xl font-serif text-[#8B2626] font-bold">II.</span>
            <h3 className="text-xl font-serif text-[#1C1917]">Illuminated Marginalia</h3>
            <p className="text-sm font-sans text-[#57534E] leading-relaxed">
              Whenever the text touches on esoteric jargon or complex historical subtext, Ratio places 
              unobtrusive marginal hints, preventing cognitive friction before you stall.
            </p>
          </div>

          <div className="p-6 bg-[#F4EFE6]/70 rounded-lg border border-[#E7DFD3] space-y-3">
            <span className="text-3xl font-serif text-[#8B2626] font-bold">III.</span>
            <h3 className="text-xl font-serif text-[#1C1917]">Verbatim Anchor Points</h3>
            <p className="text-sm font-sans text-[#57534E] leading-relaxed">
              Never be caught citing an AI summary without backing. Every critical thesis is anchored directly 
              to its exact page and sentence in the original publication.
            </p>
          </div>
        </div>
      </section>

      {/* Upload Drag & Drop CTA */}
      <section className="max-w-3xl mx-auto px-6 py-12">
        <div className="p-8 sm:p-12 bg-[#FAF6EE] border-2 border-dashed border-[#8B2626]/50 rounded-2xl text-center space-y-4">
          <div className="w-12 h-12 rounded-full bg-[#8B2626]/10 text-[#8B2626] mx-auto flex items-center justify-between justify-center">
            <UploadCloud className="w-6 h-6" />
          </div>
          <h3 className="text-2xl sm:text-3xl font-serif text-[#1C1917]">
            Upload your first manuscript to Ratio
          </h3>
          <p className="text-sm font-sans text-[#57534E] max-w-md mx-auto">
            Drop any research paper, quarterly SEC report, or philosophical essay. Receive your distilled folio in seconds.
          </p>

          <div className="pt-2">
            <label className="inline-flex items-center gap-2 cursor-pointer bg-[#8B2626] text-[#FBF8F3] px-6 py-3 rounded text-sm font-sans font-medium hover:bg-[#6D1E1E] transition-colors shadow-md">
              <UploadCloud className="w-4 h-4" />
              <span>Select PDF Folio</span>
              <input type="file" accept=".pdf" className="hidden" onChange={handleSimulatedUpload} />
            </label>
          </div>
          <span className="block text-[11px] font-mono text-[#78716C]">
            Private & Encrypted • No models trained on your uploads
          </span>
        </div>
      </section>

      {/* Colophon Footer */}
      <footer className="max-w-6xl mx-auto px-6 pt-12 border-t border-[#E7DFD3] text-xs font-mono text-[#78716C] flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <span>RATIO READER • EST. 2026 • DESIGN 1: THE LITERARY SALON</span>
        </div>
        <div className="flex items-center gap-4">
          <a href="#manuscript-bench" className="hover:text-[#1C1917]">Back to Top</a>
          <span>•</span>
          <span>Crafted for Deep Contemplation</span>
        </div>
      </footer>
    </div>
  );
}
