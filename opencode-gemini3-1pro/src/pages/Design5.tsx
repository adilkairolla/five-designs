import { motion } from "framer-motion";
import { ArrowRight, ChevronRight, FileUp, Sparkles, MessageSquare } from "lucide-react";

export default function Design5() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-['Outfit'] relative overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-blue-100 rounded-full mix-blend-multiply filter blur-[100px] opacity-70 animate-pulse"></div>
      <div className="absolute top-[20%] right-[-10%] w-[50%] h-[50%] bg-indigo-100 rounded-full mix-blend-multiply filter blur-[100px] opacity-70 animate-pulse" style={{ animationDelay: "2s" }}></div>
      <div className="absolute bottom-[-10%] left-[20%] w-[40%] h-[40%] bg-sky-100 rounded-full mix-blend-multiply filter blur-[100px] opacity-70 animate-pulse" style={{ animationDelay: "4s" }}></div>

      <nav className="relative z-50 flex items-center justify-between px-8 py-6 max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-lg shadow-blue-500/30 text-white font-bold">r</div>
          <span className="font-bold text-xl tracking-tight">ratio.reader</span>
        </div>
        <div className="hidden md:flex gap-8 text-sm font-medium text-slate-500">
          <a href="#" className="hover:text-slate-900 transition-colors">Product</a>
          <a href="#" className="hover:text-slate-900 transition-colors">Features</a>
          <a href="#" className="hover:text-slate-900 transition-colors">Enterprise</a>
        </div>
        <button className="text-sm font-medium hover:text-blue-600 transition-colors flex items-center gap-1">
          Log in <ChevronRight size={16} />
        </button>
      </nav>

      <main className="relative z-10 max-w-7xl mx-auto px-8 pt-24 pb-32 flex flex-col items-center justify-center text-center min-h-[80vh]">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-sm font-medium mb-8"
        >
          <Sparkles size={14} />
          <span>Ratio Reader 2.0 is now live</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-6xl md:text-8xl font-black tracking-tighter mb-8 max-w-4xl leading-[0.95]"
        >
          Read smarter, <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">not harder.</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl text-slate-500 mb-12 max-w-2xl font-light leading-relaxed"
        >
          Upload any PDF. Our intelligent engine extracts the critical insights, highlights key quotes, and provides context for complex terms instantly.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 w-full justify-center max-w-md"
        >
          <button className="bg-slate-900 text-white rounded-full px-8 py-4 font-medium flex items-center justify-center gap-2 hover:bg-slate-800 hover:scale-105 transition-all shadow-xl shadow-slate-900/20 w-full sm:w-auto">
            Get Started Free <ArrowRight size={18} />
          </button>
          <button className="bg-white text-slate-900 border border-slate-200 rounded-full px-8 py-4 font-medium flex items-center justify-center gap-2 hover:bg-slate-50 transition-colors shadow-sm w-full sm:w-auto">
            <FileUp size={18} /> View Demo
          </button>
        </motion.div>

        {/* Feature Cards Float */}
        <div className="mt-32 grid md:grid-cols-3 gap-6 w-full max-w-5xl">
          {[
            { title: "Smart Summaries", desc: "Bullet points that capture the essence, not just the keywords.", icon: <FileUp className="text-blue-500 mb-4" size={28} /> },
            { title: "Contextual Hints", desc: "Hover over complex terms for instant, AI-generated explanations.", icon: <MessageSquare className="text-indigo-500 mb-4" size={28} /> },
            { title: "Key Quotes", desc: "Automatically highlights and extracts highly citeable sentences.", icon: <Sparkles className="text-sky-500 mb-4" size={28} /> }
          ].map((feature, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white/60 backdrop-blur-xl border border-slate-100 p-8 rounded-3xl shadow-xl shadow-slate-200/50 text-left hover:-translate-y-2 transition-transform cursor-default"
            >
              {feature.icon}
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-slate-500 font-light text-sm leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  );
}
