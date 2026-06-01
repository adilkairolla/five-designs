import { motion } from "framer-motion";
import { Book, Feather, Eye } from "lucide-react";

export default function Design4() {
  return (
    <div className="min-h-screen bg-[#F5F2EB] text-[#2C2B29] font-['Cormorant_Garamond'] selection:bg-[#E8DCC4]">
      {/* Top Bar / Masthead */}
      <header className="border-b border-[#2C2B29]/20 py-6 px-8 flex justify-between items-center">
        <div className="text-sm font-sans tracking-widest uppercase text-[#8B8678]">Issue N° 1</div>
        <div className="text-4xl italic font-medium tracking-tight">Ratio Reader</div>
        <button className="text-sm font-sans tracking-widest uppercase hover:text-[#8B8678] transition-colors border-b border-[#2C2B29]">
          Subscribe
        </button>
      </header>

      <main className="max-w-[1400px] mx-auto px-8 py-20">
        
        {/* Main Editorial Layout */}
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column - Meta & Actions */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="lg:col-span-3 flex flex-col gap-12"
          >
            <div className="space-y-4 font-sans text-sm tracking-widest text-[#5C5A56] uppercase leading-relaxed">
              <p>Vol. I — The Art of Extraction</p>
              <p>Curated summaries</p>
              <p>Profound quotes</p>
              <p>Contextual hints</p>
            </div>
            
            <button className="self-start group flex items-center gap-4 bg-[#2C2B29] text-[#F5F2EB] px-8 py-4 font-sans text-xs tracking-[0.2em] uppercase hover:bg-[#4A4844] transition-colors">
              <Feather size={16} className="group-hover:-translate-y-1 transition-transform" />
              Upload Manuscript
            </button>
            
            <div className="pt-12 border-t border-[#2C2B29]/20">
              <h4 className="text-2xl italic mb-4">"The sheer elegance of understanding."</h4>
              <p className="font-sans text-xs text-[#8B8678] uppercase tracking-widest">
                — A reader's testimony
              </p>
            </div>
          </motion.div>

          {/* Center/Right Hero Text */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="lg:col-span-9"
          >
            <h1 className="text-7xl lg:text-[8rem] leading-[0.85] tracking-tighter font-medium mb-12 relative">
              <span className="block">Distill the</span>
              <span className="block italic text-[#8B8678] ml-12 lg:ml-24">Essence</span>
              <span className="block">of Any Text.</span>
            </h1>
            
            <div className="grid md:grid-cols-2 gap-12 mt-24">
              <div className="text-2xl leading-relaxed">
                <span className="float-left text-6xl leading-[0.5] mr-3 mt-2 text-[#8B8678]">R</span>
                atio Reader transforms dense academic papers, lengthy reports, and complex documents into elegant, digestible narratives. We strip away the verbosity to reveal the core arguments.
              </div>
              
              <div className="space-y-8 font-sans text-[#5C5A56]">
                <div className="border-l border-[#2C2B29]/30 pl-6">
                  <div className="text-[#2C2B29] font-medium uppercase tracking-widest text-xs mb-2 flex items-center gap-2">
                    <Book size={14} /> Intelligent Summaries
                  </div>
                  <p className="text-sm leading-loose">
                    Our system reads with the care of a scholar, producing summaries that capture not just the facts, but the subtle thesis of the author.
                  </p>
                </div>
                
                <div className="border-l border-[#2C2B29]/30 pl-6">
                  <div className="text-[#2C2B29] font-medium uppercase tracking-widest text-xs mb-2 flex items-center gap-2">
                    <Eye size={14} /> Illuminated Hints
                  </div>
                  <p className="text-sm leading-loose">
                    Obscure terminology is softly highlighted, providing immediate clarity without breaking the flow of your reading experience.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Abstract Decorative Element */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 0.5 }}
          className="mt-32 h-[400px] w-full bg-[#E8DCC4] rounded-t-full flex items-center justify-center relative overflow-hidden"
        >
          <div className="absolute w-[800px] h-[800px] border-[1px] border-[#2C2B29]/10 rounded-full animate-[spin_60s_linear_infinite]"></div>
          <div className="absolute w-[600px] h-[600px] border-[1px] border-[#2C2B29]/10 rounded-full animate-[spin_40s_linear_infinite_reverse]"></div>
          <h2 className="text-5xl italic text-[#8B8678] z-10 font-light mix-blend-multiply">
            Read less. Understand more.
          </h2>
        </motion.div>

      </main>
    </div>
  );
}
