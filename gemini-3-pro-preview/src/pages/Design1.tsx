import { ArrowRight, BookOpen, Brain, Quote, Upload } from "lucide-react";

export function Design1() {
  return (
    <div className="min-h-screen bg-[#F9F7F1] text-[#1A1A1A] font-[family-name:var(--font-academic-body)] selection:bg-[#631818] selection:text-white">
      {/* Navigation */}
      <nav className="w-full border-b border-[#E5E0D8] px-8 py-6 flex justify-between items-center sticky top-0 bg-[#F9F7F1]/90 backdrop-blur-sm z-50">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 border-2 border-[#1A1A1A] rounded-full flex items-center justify-center font-[family-name:var(--font-academic-heading)] font-bold italic">
            R
          </div>
          <span className="text-xl tracking-wide font-[family-name:var(--font-academic-heading)]">Ratio Reader</span>
        </div>
        <div className="flex gap-8 text-sm uppercase tracking-widest text-[#666]">
          <a href="#" className="hover:text-[#1A1A1A] transition-colors">Manifesto</a>
          <a href="#" className="hover:text-[#1A1A1A] transition-colors">Library</a>
          <a href="#" className="hover:text-[#1A1A1A] transition-colors">Pricing</a>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="max-w-6xl mx-auto px-8 py-24 md:py-32 grid md:grid-cols-2 gap-16 items-center border-b border-[#E5E0D8]">
        <div>
          <span className="block text-[#631818] font-bold tracking-widest text-xs mb-4 uppercase">Est. 2026 — Intelligence Amplification</span>
          <h1 className="text-6xl md:text-7xl font-[family-name:var(--font-academic-heading)] leading-[1.1] mb-8">
            The architecture <br/>
            <span className="italic text-[#666]">of understanding.</span>
          </h1>
          <p className="text-lg md:text-xl text-[#4A4A4A] leading-relaxed mb-10 max-w-md">
            Ratio Reader distills complexity into clarity. Upload documents and uncover the hidden structure of knowledge through intelligent summarization and contextual insight.
          </p>
          <div className="flex gap-4">
            <button className="bg-[#1A1A1A] text-[#F9F7F1] px-8 py-4 text-sm uppercase tracking-widest hover:bg-[#631818] transition-colors duration-300 flex items-center gap-2">
              Start Reading <ArrowRight size={16} />
            </button>
            <button className="border border-[#1A1A1A] px-8 py-4 text-sm uppercase tracking-widest hover:bg-[#E5E0D8] transition-colors duration-300">
              View Demo
            </button>
          </div>
        </div>
        
        {/* Abstract Hero Visual - Golden Ratio Rectangles */}
        <div className="relative h-[500px] border-2 border-[#1A1A1A] p-4 flex items-center justify-center overflow-hidden">
             <div className="absolute inset-0 grid grid-cols-12 grid-rows-12 opacity-10">
                {Array.from({ length: 144 }).map((_, i) => (
                    <div key={i} className="border-[0.5px] border-[#1A1A1A]"></div>
                ))}
            </div>
            <div className="relative z-10 w-64 h-80 border border-[#1A1A1A] bg-white shadow-[-20px_20px_0px_0px_rgba(26,26,26,0.1)] flex flex-col p-6">
                <div className="h-4 w-12 bg-[#631818] mb-8"></div>
                <div className="space-y-3">
                    <div className="h-2 w-full bg-[#E5E0D8]"></div>
                    <div className="h-2 w-full bg-[#E5E0D8]"></div>
                    <div className="h-2 w-3/4 bg-[#E5E0D8]"></div>
                    <div className="h-2 w-full bg-[#E5E0D8]"></div>
                    <div className="h-2 w-5/6 bg-[#E5E0D8]"></div>
                </div>
                <div className="mt-auto pt-6 border-t border-dashed border-[#E5E0D8]">
                    <div className="flex justify-between items-end">
                        <span className="font-[family-name:var(--font-academic-heading)] italic text-2xl">Aa</span>
                        <div className="h-8 w-8 rounded-full bg-[#F0F0F0] flex items-center justify-center">
                            <Quote size={12} className="text-[#666]" />
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Decorative circles */}
            <div className="absolute -top-12 -right-12 w-64 h-64 border border-[#1A1A1A] rounded-full opacity-20"></div>
            <div className="absolute bottom-12 -left-12 w-32 h-32 border border-[#631818] rounded-full opacity-20"></div>
        </div>
      </header>

      {/* Features Grid */}
      <section className="max-w-6xl mx-auto px-8 py-24">
        <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#E5E0D8] border border-[#E5E0D8]">
            <div className="p-10 hover:bg-white transition-colors duration-500 group">
                <div className="mb-6 text-[#631818]">
                    <Brain size={32} strokeWidth={1.5} />
                </div>
                <h3 className="font-[family-name:var(--font-academic-heading)] text-2xl mb-4 group-hover:italic transition-all">Syntactic Analysis</h3>
                <p className="text-[#666] leading-relaxed">
                    Our algorithms deconstruct sentence structures to isolate core propositions, stripping away rhetoric to reveal the bare logic.
                </p>
            </div>
            <div className="p-10 hover:bg-white transition-colors duration-500 group">
                 <div className="mb-6 text-[#631818]">
                    <BookOpen size={32} strokeWidth={1.5} />
                </div>
                <h3 className="font-[family-name:var(--font-academic-heading)] text-2xl mb-4 group-hover:italic transition-all">Contextual Synthesis</h3>
                <p className="text-[#666] leading-relaxed">
                    Connecting disparate ideas across large volumes of text. We build a knowledge graph of your document in real-time.
                </p>
            </div>
            <div className="p-10 hover:bg-white transition-colors duration-500 group">
                 <div className="mb-6 text-[#631818]">
                    <Quote size={32} strokeWidth={1.5} />
                </div>
                <h3 className="font-[family-name:var(--font-academic-heading)] text-2xl mb-4 group-hover:italic transition-all">Citation Engine</h3>
                <p className="text-[#666] leading-relaxed">
                    Never lose a source. Every insight is traceably linked back to its origin page and paragraph for instant verification.
                </p>
            </div>
        </div>
      </section>

      {/* Quote Break */}
      <section className="bg-[#1A1A1A] text-[#F9F7F1] py-32 px-8 text-center">
        <div className="max-w-3xl mx-auto">
            <Quote size={48} className="mx-auto mb-8 text-[#631818]" />
            <blockquote className="font-[family-name:var(--font-academic-heading)] text-3xl md:text-5xl leading-tight mb-8">
                "Reading is not just scanning text. It is the active reconstruction of the author's thought."
            </blockquote>
            <cite className="not-italic uppercase tracking-widest text-xs text-[#888]">
                — The Ratio Philosophy
            </cite>
        </div>
      </section>

      {/* Upload Interface Preview */}
      <section className="max-w-6xl mx-auto px-8 py-24">
        <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1 space-y-8">
                <div className="flex items-start gap-4">
                    <span className="font-[family-name:var(--font-academic-heading)] text-5xl text-[#E5E0D8]">01</span>
                    <div>
                        <h4 className="font-bold uppercase tracking-widest mb-2">Upload</h4>
                        <p className="text-[#666]">Drag and drop any PDF. We support academic papers, legal contracts, and classic literature.</p>
                    </div>
                </div>
                <div className="flex items-start gap-4">
                    <span className="font-[family-name:var(--font-academic-heading)] text-5xl text-[#E5E0D8]">02</span>
                    <div>
                        <h4 className="font-bold uppercase tracking-widest mb-2">Process</h4>
                        <p className="text-[#666]">Our engine reads at 10,000 words per second, identifying key themes and arguments.</p>
                    </div>
                </div>
                <div className="flex items-start gap-4">
                    <span className="font-[family-name:var(--font-academic-heading)] text-5xl text-[#631818]">03</span>
                    <div>
                        <h4 className="font-bold uppercase tracking-widest mb-2">Understand</h4>
                        <p className="text-[#666]">Interact with the summary. Ask questions. Get clarifying analogies tailored to your background.</p>
                    </div>
                </div>
            </div>
            <div className="flex-1 bg-white p-8 border border-[#E5E0D8] shadow-xl w-full">
                <div className="border border-dashed border-[#ccc] rounded-sm h-64 flex flex-col items-center justify-center bg-[#FAFAFA] group hover:bg-[#F5F5F5] transition-colors cursor-pointer">
                    <div className="h-16 w-16 bg-white border border-[#E5E0D8] rounded-full flex items-center justify-center mb-4 shadow-sm group-hover:scale-110 transition-transform">
                        <Upload size={24} className="text-[#1A1A1A]" />
                    </div>
                    <span className="font-[family-name:var(--font-academic-heading)] text-xl mb-2">Drop your PDF here</span>
                    <span className="text-xs uppercase tracking-widest text-[#999]">or click to browse</span>
                </div>
            </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#E5E0D8] py-12 text-center text-[#666] text-sm">
        <div className="font-[family-name:var(--font-academic-heading)] text-2xl text-[#1A1A1A] mb-4">Ratio Reader</div>
        <p>© 2026 Ratio Labs. Designed for the pursuit of clarity.</p>
      </footer>
    </div>
  );
}
