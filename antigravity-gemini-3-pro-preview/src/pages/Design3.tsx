import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Sun, Wind, UploadCloud } from 'lucide-react';

export default function Design3() {
  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#4A4A4A] font-serif selection:bg-[#E6D5B8] selection:text-[#2C3E50]">
      {/* Decorative Blobs */}
      <div className="fixed inset-0 z-0 opacity-40 pointer-events-none overflow-hidden">
        <motion.div 
            animate={{ 
                x: [0, 50, 0], 
                y: [0, 30, 0], 
                rotate: [0, 5, 0] 
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[-10%] left-[-5%] w-[40rem] h-[40rem] bg-[#D4E2D4] rounded-full blur-[80px]" 
        />
        <motion.div 
            animate={{ 
                x: [0, -40, 0], 
                y: [0, -60, 0],
                rotate: [0, -5, 0]
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-[-10%] right-[-5%] w-[35rem] h-[35rem] bg-[#E8DCC4] rounded-full blur-[80px]" 
        />
      </div>

      <div className="relative z-10">
        <nav className="px-8 py-6 flex justify-between items-center max-w-6xl mx-auto">
            <span className="text-2xl italic font-medium text-[#2C5F2D]">Ratio Reader.</span>
            <div className="hidden md:flex gap-8 text-sm uppercase tracking-widest text-[#888]">
                <a href="#" className="hover:text-black transition-colors">Philosophy</a>
                <a href="#" className="hover:text-black transition-colors">Features</a>
                <a href="#" className="hover:text-black transition-colors">Pricing</a>
            </div>
            <button className="bg-[#2C5F2D] text-white px-6 py-2 rounded-full hover:bg-[#1F441F] transition-colors shadow-lg shadow-[#2C5F2D]/20">
                Get Started
            </button>
        </nav>

        <section className="px-6 py-20 md:py-32 max-w-4xl mx-auto text-center">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                <h1 className="text-5xl md:text-7xl font-light mb-8 leading-[1.1] text-[#1a1a1a]">
                    Natural reading, <br />
                    <span className="italic text-[#97BC62] font-normal">refined understanding.</span>
                </h1>
                <p className="text-xl md:text-2xl leading-relaxed text-[#666] mb-12 max-w-2xl mx-auto font-sans font-light">
                    Ratio cultivates knowledge from your documents, growing insights organically without the weeds of information overload.
                </p>
                
                <div className="flex justify-center gap-4">
                     <button className="px-8 py-4 bg-[#E6D5B8] text-[#3E3E3E] rounded-2xl font-sans font-medium hover:bg-[#DBC4A0] transition-transform hover:-translate-y-1 shadow-sm">
                        See How It Works
                     </button>
                     <button className="px-8 py-4 bg-white border border-[#E6D5B8] text-[#3E3E3E] rounded-2xl font-sans font-medium hover:bg-[#FAFAFA] transition-transform hover:-translate-y-1 shadow-sm">
                        Upload Document
                     </button>
                </div>
            </motion.div>
        </section>

        <section className="px-6 py-20 bg-white/50 backdrop-blur-sm mt-12 rounded-[3rem] max-w-7xl mx-auto mb-12 shadow-sm border border-white">
            <div className="grid md:grid-cols-3 gap-12 px-6">
                <OrganicCard 
                    icon={<Leaf className="text-[#97BC62]" />}
                    title="Essence Extraction"
                    desc="We distill the purest points from your reading material, preserving the vital nutrients of information."
                />
                 <OrganicCard 
                    icon={<Sun className="text-[#FFCC5C]" />}
                    title="Illuminating Insights"
                    desc="Shed light on complex paragraphs with AI-powered explanations that feel natural and intuitive."
                />
                 <OrganicCard 
                    icon={<Wind className="text-[#88D8B0]" />}
                    title="Breezy Summaries"
                    desc="Glide through long reports. Our summaries are designed to be as light and refreshing as a gentle wind."
                />
            </div>
        </section>

        <section className="py-24 text-center">
             <div className="inline-block p-12 border-2 border-dashed border-[#D4E2D4] rounded-[2rem] bg-[#FDFBF7] hover:border-[#97BC62] transition-colors cursor-pointer group">
                <UploadCloud size={48} className="mx-auto text-[#97BC62] mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-serif text-[#2C5F2D] mb-2">Plant your PDF here</h3>
                <p className="font-sans text-[#888]">Drag & drop to begin growth</p>
             </div>
        </section>
      </div>
    </div>
  );
}

function OrganicCard({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
    return (
        <div className="text-center">
            <div className="mx-auto w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-6 rotate-3 hover:rotate-6 transition-transform duration-300">
                {icon}
            </div>
            <h3 className="text-2xl mb-4 font-normal text-[#2C3E50]">{title}</h3>
            <p className="text-[#666] leading-relaxed font-sans font-light">{desc}</p>
        </div>
    );
}
