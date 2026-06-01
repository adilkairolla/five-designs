import { motion } from "framer-motion";
import { Upload, Quote, BookOpen, BrainCircuit } from "lucide-react";

export default function Design2() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-800 font-['Bricolage_Grotesque'] p-4 md:p-8">
      {/* Header */}
      <header className="flex justify-between items-center max-w-7xl mx-auto py-6 px-8 bg-white/50 backdrop-blur-xl rounded-[2rem] shadow-sm mb-12">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-tr from-violet-500 to-fuchsia-500 rounded-2xl flex items-center justify-center text-white font-black text-xl shadow-lg">R</div>
          <span className="font-extrabold text-2xl tracking-tight">RatioReader</span>
        </div>
        <button className="bg-slate-900 text-white font-bold px-6 py-3 rounded-2xl hover:bg-slate-800 transition-all hover:scale-105 active:scale-95 shadow-md">
          Start for free
        </button>
      </header>

      <main className="max-w-7xl mx-auto space-y-6">
        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-6 h-auto md:h-[80vh]">
          
          {/* Main Hero Card (Large) */}
          <motion.div 
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, type: "spring" }}
            className="md:col-span-2 md:row-span-2 bg-gradient-to-br from-[#E0E7FF] to-[#EDE9FE] rounded-[3rem] p-10 md:p-14 flex flex-col justify-center relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-96 h-96 bg-fuchsia-300 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-pulse"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-300 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>
            
            <div className="relative z-10">
              <span className="bg-white/60 backdrop-blur-md px-4 py-2 rounded-full font-bold text-violet-700 text-sm mb-6 inline-block shadow-sm">
                ✨ The smartest way to read
              </span>
              <h1 className="text-5xl md:text-7xl font-black leading-[1.1] tracking-tight mb-6">
                Understand any PDF in <span className="text-violet-600">seconds.</span>
              </h1>
              <p className="text-xl text-slate-600 font-medium mb-10 max-w-md leading-relaxed">
                Upload your reading material. We'll extract the core insights, best quotes, and summarize the noise away.
              </p>
              
              <div className="bg-white p-4 rounded-3xl shadow-xl border border-white/40 flex items-center gap-4 group cursor-pointer hover:shadow-2xl transition-all">
                <div className="bg-violet-100 p-4 rounded-2xl group-hover:bg-violet-600 group-hover:text-white transition-colors">
                  <Upload size={28} />
                </div>
                <div>
                  <div className="font-bold text-lg">Drop your PDF here</div>
                  <div className="text-sm text-slate-500">Up to 50MB supported</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Feature: Summaries */}
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="md:col-span-1 md:row-span-1 bg-[#FCE7F3] rounded-[2.5rem] p-8 flex flex-col relative overflow-hidden group"
          >
            <div className="bg-pink-200 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 text-pink-600">
              <BookOpen size={32} />
            </div>
            <h3 className="text-2xl font-black mb-2">Instant Summaries</h3>
            <p className="text-pink-900/70 font-medium">TL;DR generation that actually captures the nuance.</p>
            <div className="absolute -bottom-6 -right-6 text-pink-300 opacity-20 group-hover:scale-110 transition-transform duration-500">
              <BookOpen size={160} />
            </div>
          </motion.div>

          {/* Feature: Insights */}
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="md:col-span-1 md:row-span-1 bg-[#D1FAE5] rounded-[2.5rem] p-8 flex flex-col relative overflow-hidden group"
          >
             <div className="bg-emerald-200 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 text-emerald-700">
              <BrainCircuit size={32} />
            </div>
            <h3 className="text-2xl font-black mb-2">Deep Insights</h3>
            <p className="text-emerald-900/70 font-medium">Auto-generated context for confusing terminology.</p>
          </motion.div>

          {/* Feature: Quotes */}
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="md:col-span-2 md:row-span-1 bg-slate-900 text-white rounded-[3rem] p-10 flex items-center justify-between relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-violet-600/20 to-transparent"></div>
            <div className="relative z-10 max-w-sm">
              <div className="flex items-center gap-3 mb-4 text-violet-300">
                <Quote size={24} /> <span className="font-bold tracking-widest uppercase text-sm">Extraction</span>
              </div>
              <h3 className="text-3xl font-black mb-4 leading-tight">Perfect quotes, ready to cite.</h3>
              <p className="text-slate-400 font-medium">Ratio Reader highlights the most impactful sentences so you don't have to search.</p>
            </div>
            <div className="hidden lg:block relative z-10 w-48 h-48 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 p-6 shadow-2xl rotate-3 hover:rotate-0 transition-all">
              <div className="w-8 h-2 bg-white/20 rounded-full mb-4"></div>
              <div className="space-y-2 mb-4">
                <div className="w-full h-2 bg-white/20 rounded-full"></div>
                <div className="w-full h-2 bg-white/20 rounded-full"></div>
                <div className="w-3/4 h-2 bg-white/20 rounded-full"></div>
              </div>
              <div className="w-full h-20 bg-violet-500/30 rounded-lg border border-violet-400/50 p-2 text-[8px] text-violet-200 font-mono flex items-center justify-center text-center">
                "The fundamental aspect of..."
              </div>
            </div>
          </motion.div>

        </div>
      </main>
    </div>
  );
}
