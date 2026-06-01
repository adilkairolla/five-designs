import { motion } from 'framer-motion';
import { File, X } from 'lucide-react';

export default function Design4() {
  return (
    <div className="min-h-screen bg-[#FFF44F] font-mono text-black">
      {/* Top Banner */}
      <div className="bg-black text-white p-2 text-center font-bold uppercase tracking-widest border-b-4 border-black">
        ⚠️ Warning: Extreme Clarity Ahead ⚠️
      </div>

      <div className="max-w-7xl mx-auto p-4 md:p-8">
        {/* Header */}
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 border-4 border-black bg-white p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter italic">
                RATIO<br/>READER
            </h1>
            <button className="mt-6 md:mt-0 bg-[#FF69B4] text-black text-xl font-bold px-8 py-4 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none transition-all">
                START_NOW
            </button>
        </header>

        {/* Hero Content */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-[#50BFE6] border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                <h2 className="text-4xl font-bold mb-6 bg-white inline-block border-2 border-black px-2">WHAT IS IT?</h2>
                <p className="text-xl font-medium leading-relaxed mb-6">
                    IT'S A TOOL. YOU UPLOAD A PDF. IT TELLS YOU WHAT'S INSIDE. FAST. NO NONSENSE.
                </p>
                <ul className="list-disc pl-6 space-y-2 text-lg font-bold">
                    <li>SUMMARIES</li>
                    <li>INSIGHTS</li>
                    <li>QUOTES</li>
                </ul>
            </div>
            
            <div className="flex flex-col gap-8">
                 <div className="bg-[#FF9F1C] border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex items-center justify-between group cursor-pointer hover:bg-[#FFB449]">
                    <span className="text-2xl font-bold">UPLOAD PDF</span>
                    <File size={40} className="border-2 border-black p-1 bg-white" />
                 </div>
                 <div className="bg-[#CBF3F0] border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex-grow flex items-center justify-center">
                    <div className="text-center transform -rotate-2">
                        <div className="text-6xl font-black mb-2">100%</div>
                        <div className="text-2xl font-bold bg-black text-white px-2">ACCURACY*</div>
                        <div className="text-xs mt-2">*mostly</div>
                    </div>
                 </div>
            </div>
        </div>

        {/* Marquee */}
        <div className="bg-white border-4 border-black py-4 mb-16 overflow-hidden shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <div className="flex animate-infinite-scroll whitespace-nowrap font-black text-2xl">
                 <span className="mx-8">DONT READ IT. JUST KNOW IT.</span>
                 <span className="mx-8 text-[#FF69B4]">///</span>
                 <span className="mx-8">PDF CRUSHER 3000</span>
                 <span className="mx-8 text-[#50BFE6]">///</span>
                 <span className="mx-8">RATIO READER</span>
                 <span className="mx-8 text-[#FF9F1C]">///</span>
                 <span className="mx-8">YOUR BRAIN ON STEROIDS</span>
            </div>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
            <BrutalistCard 
                title="NO FLUFF" 
                content="We cut the garbage. You get the gold." 
                color="bg-[#FF69B4]" 
            />
             <BrutalistCard 
                title="SPEED" 
                content="Faster than reading? Yes. Obviously." 
                color="bg-[#CBF3F0]" 
            />
             <BrutalistCard 
                title="SMART" 
                content="It thinks so you don't have to." 
                color="bg-[#50BFE6]" 
            />
        </div>

        <footer className="mt-16 text-center font-bold text-xl border-t-4 border-black pt-8">
            Created because reading is hard. © 2024.
        </footer>
      </div>
    </div>
  );
}

function BrutalistCard({ title, content, color }: { title: string, content: string, color: string }) {
    return (
        <motion.div 
            whileHover={{ scale: 1.05, rotate: 1 }}
            className={`${color} border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]`}
        >
            <div className="flex justify-between items-start mb-4">
                <h3 className="text-3xl font-black bg-white border-2 border-black inline-block px-2">{title}</h3>
                <X size={24} className="border-2 border-black bg-white cursor-pointer hover:bg-black hover:text-white" />
            </div>
            <p className="font-bold text-lg">{content}</p>
        </motion.div>
    );
}
