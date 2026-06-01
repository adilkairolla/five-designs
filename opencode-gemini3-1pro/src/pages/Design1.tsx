import { motion } from "framer-motion";
import { ArrowRight, FileText, Lightbulb, Quote } from "lucide-react";

export default function Design1() {
  return (
    <div className="min-h-screen bg-[#F4F4F0] text-black overflow-hidden font-['JetBrains_Mono']">
      {/* Navigation */}
      <nav className="fixed top-0 w-full border-b-[3px] border-black bg-[#F4F4F0] z-50 flex justify-between items-center px-4 md:px-8 h-20">
        <div className="font-['Syne'] font-extrabold text-3xl uppercase tracking-tighter">
          Ratio Reader
        </div>
        <div className="hidden md:flex gap-8 font-bold text-sm uppercase">
          <a href="#" className="hover:bg-black hover:text-[#F4F4F0] px-2 transition-colors">How it works</a>
          <a href="#" className="hover:bg-black hover:text-[#F4F4F0] px-2 transition-colors">Features</a>
          <a href="#" className="hover:bg-black hover:text-[#F4F4F0] px-2 transition-colors">Pricing</a>
        </div>
        <button className="bg-[#FF3366] text-white border-[3px] border-black font-bold uppercase px-6 py-2 shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all">
          Upload PDF
        </button>
      </nav>

      {/* Hero Section */}
      <main className="pt-20">
        <section className="grid md:grid-cols-12 min-h-[90vh] border-b-[3px] border-black">
          <div className="md:col-span-8 p-8 md:p-16 flex flex-col justify-center border-b-[3px] md:border-b-0 md:border-r-[3px] border-black relative">
            <div className="absolute top-8 left-8 text-xs font-bold bg-black text-white px-2 py-1 uppercase">
              v1.0.4 // Academic Focus
            </div>
            <motion.h1 
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, ease: "circOut" }}
              className="font-['Syne'] text-[12vw] md:text-[8vw] font-black leading-[0.85] tracking-tighter uppercase mb-8"
            >
              Don't Read. <br />
              <span className="text-[#FF3366]">Extract.</span>
            </motion.h1>
            <p className="text-xl md:text-2xl font-medium max-w-2xl mb-12">
              The brutalist approach to consuming PDFs. Drop a file. Get the summary, quotes, and pure signal. Zero fluff.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <button className="bg-black text-[#F4F4F0] text-xl md:text-2xl font-['Syne'] font-bold uppercase px-8 py-4 border-[3px] border-black shadow-[6px_6px_0px_#FF3366] hover:shadow-none hover:translate-x-1.5 hover:translate-y-1.5 transition-all flex items-center gap-4">
                Start Extracting <ArrowRight className="w-8 h-8" />
              </button>
            </div>
          </div>
          
          <div className="md:col-span-4 bg-[#D4FF00] p-8 flex flex-col justify-between relative overflow-hidden">
            <div className="font-['Syne'] font-bold text-4xl uppercase mb-8 z-10">Live Feed</div>
            <motion.div 
              animate={{ y: [0, -1000] }}
              transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
              className="space-y-4 opacity-40 z-0 absolute top-24 left-8 right-8 mix-blend-multiply"
            >
              {[...Array(10)].map((_, i) => (
                <div key={i} className="text-sm font-bold border-b-2 border-black pb-2">
                  <span className="text-[#FF3366]">[{new Date().getTime() - i * 1000}]</span> Uploaded "Quantum_Computing_Ch4.pdf" &gt;&gt; Extracting 42 hints.
                </div>
              ))}
            </motion.div>
            
            <div className="bg-white border-[3px] border-black p-6 shadow-[8px_8px_0px_rgba(0,0,0,1)] z-10 mt-auto">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                <div className="font-bold uppercase text-xs">System Status: Active</div>
              </div>
              <div className="text-sm">
                "Ratio Reader stripped 80% of the noise from my thesis reading list."
                <div className="mt-2 font-bold">- Dr. Aris Thorne</div>
              </div>
            </div>
          </div>
        </section>

        {/* Marquee */}
        <div className="bg-black text-[#D4FF00] py-4 overflow-hidden border-b-[3px] border-black whitespace-nowrap flex font-bold uppercase text-xl">
          <motion.div
            animate={{ x: [0, -1000] }}
            transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
            className="flex gap-8"
          >
            {[...Array(8)].map((_, i) => (
              <span key={i}>• SUMMARIES • HINTS • QUOTES • INSIGHTS</span>
            ))}
          </motion.div>
        </div>

        {/* Grid Features */}
        <section className="grid md:grid-cols-3 min-h-[50vh]">
          {[
            { icon: <FileText size={48} />, title: "Instant Summaries", desc: "Boils down 50 pages into 5 bullet points.", color: "bg-white" },
            { icon: <Lightbulb size={48} />, title: "Deep Hints", desc: "Contextual explanations of complex terminology.", color: "bg-[#D4FF00]" },
            { icon: <Quote size={48} />, title: "Key Quotes", desc: "Extracts highly citeable sentences automatically.", color: "bg-[#FF3366]" },
          ].map((feat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className={`p-12 border-b-[3px] md:border-b-0 border-r-[3px] border-black last:border-r-0 ${feat.color} flex flex-col`}
            >
              <div className={`mb-8 ${feat.color === 'bg-[#FF3366]' ? 'text-white' : 'text-black'}`}>
                {feat.icon}
              </div>
              <h3 className={`font-['Syne'] font-extrabold text-3xl uppercase mb-4 ${feat.color === 'bg-[#FF3366]' ? 'text-white' : 'text-black'}`}>
                {feat.title}
              </h3>
              <p className={`font-medium text-lg mt-auto ${feat.color === 'bg-[#FF3366]' ? 'text-white' : 'text-black'}`}>
                {feat.desc}
              </p>
            </motion.div>
          ))}
        </section>
      </main>
    </div>
  );
}
