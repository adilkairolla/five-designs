import { Search, Menu, ArrowRight, Bookmark } from "lucide-react";

export function Design5() {
  return (
    <div className="min-h-screen bg-[#F5F5F0] text-[#0A192F] font-[family-name:var(--font-editorial-body)] overflow-x-hidden">
      
      {/* Top Bar */}
      <header className="px-8 py-6 flex justify-between items-center border-b border-[#0A192F]/10">
        <Menu size={24} strokeWidth={1} />
        <div className="font-[family-name:var(--font-editorial-heading)] text-3xl font-bold italic tracking-wide">
            Ratio.
        </div>
        <div className="flex gap-6 items-center">
            <span className="hidden md:inline text-xs uppercase tracking-widest border-b border-transparent hover:border-[#C5A059] transition-all cursor-pointer">Subscribe</span>
            <Search size={20} strokeWidth={1} />
        </div>
      </header>

      {/* Hero Section - Asymmetric Grid */}
      <main className="grid lg:grid-cols-12 min-h-[80vh]">
        {/* Left Text Area */}
        <div className="lg:col-span-7 p-8 md:p-20 flex flex-col justify-center relative">
            <div className="absolute top-0 left-8 h-full w-px bg-[#0A192F]/10 hidden lg:block"></div>
            
            <span className="font-[family-name:var(--font-editorial-heading)] text-[#C5A059] text-xl italic mb-4 block">
                Volume I — The Future of Text
            </span>
            
            <h1 className="font-[family-name:var(--font-editorial-heading)] text-7xl md:text-9xl leading-[0.85] mb-8 relative z-10 mix-blend-multiply">
                The Art <br/>
                <span className="italic font-light ml-12">of Insight</span>
            </h1>

            <div className="grid md:grid-cols-2 gap-12 mt-8">
                <p className="text-[#0A192F]/80 leading-loose text-sm md:text-base border-t border-[#0A192F] pt-4">
                    <span className="float-left text-5xl font-[family-name:var(--font-editorial-heading)] leading-[0.8] mr-2 mt-1">W</span>
                    e live in an age of information abundance but insight scarcity. Ratio Reader bridges the gap, offering a sophisticated tool for the discerning mind to deconstruct, analyze, and absorb the written word with unprecedented elegance.
                </p>
                <div className="flex flex-col justify-between">
                    <p className="font-[family-name:var(--font-editorial-heading)] text-2xl italic leading-tight mb-6">
                        "A masterclass in cognitive amplification."
                    </p>
                    <button className="self-start group flex items-center gap-4 text-xs uppercase tracking-widest hover:text-[#C5A059] transition-colors">
                        Begin Journey <span className="w-12 h-px bg-[#0A192F] group-hover:bg-[#C5A059] transition-colors"></span>
                    </button>
                </div>
            </div>
        </div>

        {/* Right Visual Area */}
        <div className="lg:col-span-5 bg-[#0A192F] text-[#F5F5F0] relative overflow-hidden flex flex-col p-12">
            <div className="absolute top-0 right-8 h-full w-px bg-white/10"></div>
            <div className="absolute top-1/2 left-0 w-full h-px bg-white/10"></div>
            
            {/* Abstract Graphic */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-96 border border-[#C5A059] rotate-12 opacity-30"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-96 border border-white rotate-[-5deg] opacity-20"></div>

            <div className="relative z-10 mt-auto">
                <span className="block font-[family-name:var(--font-editorial-heading)] text-5xl italic mb-4">01.</span>
                <h3 className="text-2xl font-light uppercase tracking-widest mb-4">Distillation</h3>
                <p className="text-white/60 font-light text-sm leading-relaxed max-w-xs">
                    Our algorithms don't just summarize; they curate. Experience a bespoke reading list generated from your own documents.
                </p>
            </div>
        </div>
      </main>

      {/* Ticker / Bar */}
      <div className="border-y border-[#0A192F] py-4 bg-white overflow-hidden">
        <div className="flex justify-between max-w-6xl mx-auto px-8 font-[family-name:var(--font-editorial-heading)] text-lg italic text-[#666]">
            <span>Artificial Intelligence</span>
            <span>—</span>
            <span>Cognitive Science</span>
            <span>—</span>
            <span>Literature</span>
            <span>—</span>
            <span>Philosophy</span>
            <span>—</span>
            <span>Law</span>
        </div>
      </div>

      {/* Showcase Section */}
      <section className="max-w-7xl mx-auto px-8 py-32">
        <div className="flex flex-col md:flex-row gap-16 items-start">
             <div className="w-full md:w-1/3">
                <h2 className="font-[family-name:var(--font-editorial-heading)] text-6xl mb-8">
                    Essential <br/> Features
                </h2>
                <div className="space-y-8">
                    <div className="group cursor-pointer">
                        <div className="flex justify-between items-center border-b border-[#0A192F]/20 pb-4 mb-2 group-hover:border-[#0A192F] transition-colors">
                            <span className="font-bold text-sm uppercase tracking-widest">Context</span>
                            <ArrowRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0" />
                        </div>
                        <p className="text-sm text-[#666] h-0 overflow-hidden group-hover:h-auto transition-all duration-500">
                            Deep linking to external sources and historical context.
                        </p>
                    </div>
                     <div className="group cursor-pointer">
                        <div className="flex justify-between items-center border-b border-[#0A192F]/20 pb-4 mb-2 group-hover:border-[#0A192F] transition-colors">
                            <span className="font-bold text-sm uppercase tracking-widest">Analysis</span>
                            <ArrowRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0" />
                        </div>
                    </div>
                     <div className="group cursor-pointer">
                        <div className="flex justify-between items-center border-b border-[#0A192F]/20 pb-4 mb-2 group-hover:border-[#0A192F] transition-colors">
                            <span className="font-bold text-sm uppercase tracking-widest">Synthesis</span>
                            <ArrowRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0" />
                        </div>
                    </div>
                </div>
             </div>

             <div className="w-full md:w-2/3 relative">
                <div className="aspect-[4/3] bg-[#E5E5E0] relative overflow-hidden">
                    <div className="absolute inset-8 border border-[#0A192F]">
                        <div className="absolute top-0 left-0 bg-[#0A192F] text-white px-4 py-1 text-xs uppercase tracking-widest">
                            Fig. A
                        </div>
                        <div className="p-12 h-full flex flex-col justify-center items-center text-center">
                            <Bookmark className="mb-6 text-[#C5A059]" size={32} />
                            <h3 className="font-[family-name:var(--font-editorial-heading)] text-4xl italic mb-4">"The Reading Room"</h3>
                            <p className="max-w-md text-sm leading-relaxed">
                                A distraction-free environment where your documents are transformed into beautiful, readable typography.
                            </p>
                        </div>
                    </div>
                </div>
             </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0A192F] text-[#F5F5F0] py-24 px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
            <div>
                <span className="font-[family-name:var(--font-editorial-heading)] text-5xl italic">Ratio.</span>
                <p className="mt-4 text-[#8892B0] text-sm max-w-xs">
                    Elevating the standard of digital literacy through design and intelligence.
                </p>
            </div>
            <div className="grid grid-cols-2 gap-12 text-sm uppercase tracking-widest">
                <div className="flex flex-col gap-4">
                    <a href="#" className="hover:text-[#C5A059] transition-colors">Manifesto</a>
                    <a href="#" className="hover:text-[#C5A059] transition-colors">Technology</a>
                    <a href="#" className="hover:text-[#C5A059] transition-colors">Pricing</a>
                </div>
                 <div className="flex flex-col gap-4">
                    <a href="#" className="hover:text-[#C5A059] transition-colors">Twitter</a>
                    <a href="#" className="hover:text-[#C5A059] transition-colors">Instagram</a>
                    <a href="#" className="hover:text-[#C5A059] transition-colors">LinkedIn</a>
                </div>
            </div>
        </div>
      </footer>
    </div>
  );
}
