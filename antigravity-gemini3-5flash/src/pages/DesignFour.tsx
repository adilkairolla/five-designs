import { useState } from "react";
import { mockPapers } from "../mockData";
import type { MockPaper } from "../mockData";
import { BookOpen, Coffee, Bookmark, ChevronLeft, ChevronRight, PenTool } from "lucide-react";

export function DesignFour() {
  const [selectedPaper, setSelectedPaper] = useState<MockPaper>(mockPapers[0]);
  const [activeChapterIndex, setActiveChapterIndex] = useState(0);

  const activeChapter = selectedPaper.chapters[activeChapterIndex] || selectedPaper.chapters[0];

  const handlePageTurn = (direction: "prev" | "next") => {
    if (direction === "prev" && activeChapterIndex > 0) {
      setActiveChapterIndex(activeChapterIndex - 1);
    } else if (direction === "next" && activeChapterIndex < selectedPaper.chapters.length - 1) {
      setActiveChapterIndex(activeChapterIndex + 1);
    }
  };

  const handlePaperChange = (paper: MockPaper) => {
    setSelectedPaper(paper);
    setActiveChapterIndex(0);
  };

  return (
    <div className="min-h-screen bg-[#F5EFE6] text-[#2c3e2b] font-cozy-serif p-4 md:p-12 pb-32 flex flex-col justify-between">
      {/* Decorative Warm Banner */}
      <div className="max-w-5xl mx-auto w-full">
        
        {/* Header */}
        <header className="flex justify-between items-center border-b border-[#2c3e2b]/15 pb-6 mb-12">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#2c3e2b] text-[#FAF6F0] flex items-center justify-center">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <h1 className="font-cozy-display text-2xl font-semibold tracking-wide text-[#1a2c1b]">
                Ratio Reader
              </h1>
              <p className="text-[10px] tracking-widest uppercase font-sans text-[#5c6e5a] mt-0.5">
                The Quiet Reading Sanctuary
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 text-xs font-sans font-semibold text-[#5c6e5a]">
            <div className="flex gap-2">
              {mockPapers.map((paper) => (
                <button
                  key={paper.id}
                  onClick={() => handlePaperChange(paper)}
                  className={`px-3 py-1 rounded-full border transition-all cursor-pointer ${
                    selectedPaper.id === paper.id
                      ? "bg-[#2c3e2b] border-[#2c3e2b] text-[#FAF6F0]"
                      : "border-[#2c3e2b]/20 hover:border-[#2c3e2b]/60 text-[#2c3e2b]"
                  }`}
                >
                  {paper.title.slice(0, 15)}...
                </button>
              ))}
            </div>
            <Coffee className="w-4 h-4 text-[#8b765d]" />
          </div>
        </header>

        {/* Hero Section */}
        <section className="max-w-3xl mx-auto text-center space-y-6 mb-16">
          <span className="font-sans text-[10px] font-bold tracking-widest text-[#d97706] uppercase inline-flex items-center gap-1">
            <Bookmark className="w-3 h-3 fill-current" />
            <span>VOLUME VII // EDITION I</span>
          </span>
          <h2 className="font-cozy-display text-4xl sm:text-5xl text-[#1a2c1b] leading-tight font-medium">
            Restore stillness to your study. <br />
            Understand research, gently.
          </h2>
          <p className="text-base sm:text-lg text-[#5c6e5a] leading-relaxed max-w-2xl mx-auto">
            Ratio Reader translates dense, complex monographs and scientific essays into clean, digestible visual layouts. We isolate critical quotes and define complex vocabulary right in the margins, leaving you to focus on the concepts.
          </p>
        </section>

        {/* The Open Book Simulator */}
        <section className="bg-[#FCF9F5] border border-[#2c3e2b]/15 rounded-xl shadow-xl p-6 md:p-10 relative max-w-5xl mx-auto">
          {/* Subtle page center crease shadow */}
          <div className="absolute top-0 bottom-0 left-1/2 w-px bg-gradient-to-r from-black/5 via-black/10 to-transparent hidden md:block" />

          {/* Book Navigation */}
          <div className="flex justify-between items-center mb-6 border-b border-[#2c3e2b]/10 pb-4 text-xs font-sans text-[#5c6e5a]">
            <span className="font-semibold tracking-wider">{selectedPaper.title.toUpperCase()}</span>
            <div className="flex items-center gap-3">
              <button 
                onClick={() => handlePageTurn("prev")}
                disabled={activeChapterIndex === 0}
                className="p-1 rounded-full hover:bg-[#2c3e2b]/5 disabled:opacity-20 cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4 text-[#2c3e2b]" />
              </button>
              <span className="font-bold">CHAPTER {activeChapterIndex + 1} OF {selectedPaper.chapters.length}</span>
              <button 
                onClick={() => handlePageTurn("next")}
                disabled={activeChapterIndex === selectedPaper.chapters.length - 1}
                className="p-1 rounded-full hover:bg-[#2c3e2b]/5 disabled:opacity-20 cursor-pointer"
              >
                <ChevronRight className="w-4 h-4 text-[#2c3e2b]" />
              </button>
            </div>
          </div>

          {/* Main Book Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
            
            {/* Left Page: The Reading Column */}
            <div className="space-y-6">
              <span className="font-sans text-[9px] font-bold text-[#8b765d] tracking-widest uppercase block">// PARAGRAPH ANALYSIS</span>
              <h3 className="font-cozy-display text-2xl text-[#1a2c1b] leading-tight border-b border-[#2c3e2b]/5 pb-2">
                {activeChapter.title}
              </h3>
              
              <div className="text-sm sm:text-base leading-relaxed text-[#2c3e2b]/95 text-justify space-y-4">
                <p>
                  {activeChapter.text.split(" ").map((w, idx) => {
                    const clean = w.replace(/[^a-zA-Z]/g, "").toLowerCase();
                    const isKeyword = ["working", "memory", "signal", "friction", "latency", "consensus", "quorum"].includes(clean);
                    return (
                      <span 
                        key={idx} 
                        className={`inline-block mr-1 transition-all ${
                          isKeyword 
                            ? "bg-[#fef3c7] text-[#92400e] border-b border-[#b45309] font-medium px-0.5 rounded-sm" 
                            : ""
                        }`}
                      >
                        {w}
                      </span>
                    );
                  })}
                </p>
              </div>

              {/* Book pagination footer */}
              <div className="font-sans text-[10px] text-[#8b765d] pt-6 flex justify-between border-t border-[#2c3e2b]/5">
                <span>SECTION P.{activeChapterIndex * 4 + 2}</span>
                <span>RATIO ANALYSIS ENGINE</span>
              </div>
            </div>

            {/* Right Page: Summary & Margin Notes */}
            <div className="space-y-6 md:pl-4">
              
              {/* Sticky Summary Card */}
              <div className="bg-[#FEF9E7] border border-[#d97706]/20 p-5 rounded-lg shadow-sm space-y-3 relative transform rotate-1">
                {/* Pen illustration line */}
                <div className="absolute top-3 right-3 text-[#d97706]/40">
                  <PenTool className="w-4 h-4" />
                </div>
                <span className="font-sans text-[9px] font-bold text-[#b45309] tracking-widest uppercase block">STUDY GUIDE SUMMARY</span>
                <p className="text-xs sm:text-sm leading-relaxed text-[#5c3e1e] italic font-medium">
                  "{activeChapter.summary}"
                </p>
              </div>

              {/* Margin glossary notes */}
              <div className="space-y-3 pt-2">
                <span className="font-sans text-[9px] font-bold text-[#8b765d] tracking-widest uppercase block">MARGINAL ANNOTATIONS</span>
                <div className="space-y-3">
                  {activeChapter.notes.map((note, idx) => (
                    <div key={idx} className="border-l-2 border-[#8b765d]/40 pl-3.5 space-y-1">
                      <span className="font-sans font-bold text-[10px] uppercase text-[#1a2c1b] tracking-wider">
                        {note.term}
                      </span>
                      <p className="text-xs text-[#5c6e5a] leading-normal font-medium">
                        {note.explanation}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Book quote highlights */}
              <div className="space-y-3 pt-2">
                <span className="font-sans text-[9px] font-bold text-[#8b765d] tracking-widest uppercase block">KEY PASSAGE</span>
                {activeChapter.quotes.map((q, idx) => (
                  <div key={idx} className="border border-[#2c3e2b]/10 bg-white/40 p-4 rounded text-xs space-y-2">
                    <p className="italic text-[#2c3e2b]/90">"{q.text}"</p>
                    <span className="text-[10px] font-sans font-bold text-[#d97706] block text-right">─ Page {q.page}, {q.author}</span>
                  </div>
                ))}
              </div>

            </div>

          </div>
        </section>

        {/* Feature Grid */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-4xl mx-auto text-center md:text-left">
          <div className="space-y-2">
            <span className="font-sans text-[10px] font-bold tracking-widest text-[#d97706] uppercase block">I. READING SANCTUARY</span>
            <h4 className="font-cozy-display text-lg font-semibold text-[#1a2c1b]">Calm UI Layouts</h4>
            <p className="text-xs text-[#5c6e5a] leading-relaxed font-medium">
              We design interfaces that respect cognitive bandwidth. Muted sand tones, high-legibility fonts, and zero visual flashing allow deep, uninterrupted reading sessions.
            </p>
          </div>
          <div className="space-y-2">
            <span className="font-sans text-[10px] font-bold tracking-widest text-[#d97706] uppercase block">II. ANNOTATED GRAPH</span>
            <h4 className="font-cozy-display text-lg font-semibold text-[#1a2c1b]">Smart Glossaries</h4>
            <p className="text-xs text-[#5c6e5a] leading-relaxed font-medium">
              No more searching jargon. Our AI builds instant dictionaries customized to the specific paper, injecting definitions into side margins.
            </p>
          </div>
          <div className="space-y-2">
            <span className="font-sans text-[10px] font-bold tracking-widest text-[#d97706] uppercase block">III. PURE SIGNAL</span>
            <h4 className="font-cozy-display text-lg font-semibold text-[#1a2c1b]">Isolated Insights</h4>
            <p className="text-xs text-[#5c6e5a] leading-relaxed font-medium">
              By separating repetitive literature surveys from primary hypotheses, we save hours of reading boilerplate, letting you acquire core conceptual ideas in minutes.
            </p>
          </div>
        </section>

        {/* Cozy Footer */}
        <footer className="mt-24 border-t border-[#2c3e2b]/15 pt-8 flex flex-col sm:flex-row justify-between items-center text-xs font-sans text-[#5c6e5a] gap-4">
          <div>
            Ratio Reader — Designed for quiet intellects. © 2026.
          </div>
          <div className="flex gap-4">
            <a href="#" className="hover:underline">Catalog</a>
            <a href="#" className="hover:underline">Colophon</a>
            <a href="#" className="hover:underline">Journal</a>
          </div>
        </footer>

      </div>
    </div>
  );
}
