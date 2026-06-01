import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, BookOpen, Quote, Sparkles, Upload } from 'lucide-react';

export default function Design1() {
  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-black selection:text-white">
      {/* Navigation */}
      <nav className="border-b border-black flex justify-between items-center px-6 py-4 sticky top-0 bg-white/90 backdrop-blur z-50">
        <div className="text-2xl font-bold tracking-tighter">RATIO.</div>
        <button className="flex items-center gap-2 text-sm font-medium border border-black px-4 py-2 hover:bg-black hover:text-white transition-colors">
          <Upload size={16} /> LOAD PDF
        </button>
      </nav>

      {/* Hero Section */}
      <header className="px-6 py-24 md:py-32 border-b border-black">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-7xl mx-auto"
        >
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-semibold tracking-tight leading-[0.9]">
            READ LESS.<br />
            <span className="italic font-serif">KNOW MORE.</span>
          </h1>
          <div className="mt-12 flex flex-col md:flex-row gap-8 items-start md:items-end justify-between">
            <p className="max-w-xl text-xl leading-relaxed">
              Ratio Reader distills complex documents into pure insight. 
              Upload your PDF and let our engine extract the essence, 
              providing summaries, quotes, and critical context instantly.
            </p>
            <button className="group flex items-center gap-4 text-2xl font-medium hover:underline decoration-2 underline-offset-4">
              Try the Demo <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </motion.div>
      </header>

      {/* Marquee / Divider */}
      <div className="border-b border-black overflow-hidden py-3 bg-black text-white">
        <div className="flex gap-12 animate-infinite-scroll whitespace-nowrap uppercase tracking-widest text-sm font-bold">
           {[...Array(10)].map((_, i) => (
             <React.Fragment key={i}>
                <span> • AI-Powered Analysis </span>
                <span> • Instant Summaries </span>
                <span> • Key Insights </span>
             </React.Fragment>
           ))}
        </div>
      </div>

      {/* Features Grid */}
      <section className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-black border-b border-black">
        <Feature 
          icon={<BookOpen size={32} />}
          title="Smart Summaries"
          desc="Get the executive summary of any document in seconds. No fluff, just facts."
        />
        <Feature 
          icon={<Quote size={32} />}
          title="Key Quotes"
          desc="Extract the most impactful statements and data points automatically."
        />
        <Feature 
          icon={<Sparkles size={32} />}
          title="Deep Context"
          desc="Understand the 'why' and 'how' behind the text with AI-generated hints."
        />
      </section>

      {/* Upload Demo Area */}
      <section className="px-6 py-24 bg-neutral-50 border-b border-black">
        <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8">Ready to distill your reading?</h2>
            
            <motion.div 
              whileHover={{ scale: 1.01 }}
              className="border-2 border-dashed border-black rounded-lg p-16 flex flex-col items-center justify-center bg-white cursor-pointer hover:bg-neutral-100 transition-colors"
            >
                <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center mb-6">
                    <Upload size={32} />
                </div>
                <p className="text-xl font-medium">Drop your PDF here</p>
                <p className="text-neutral-500 mt-2">or click to browse files</p>
            </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-12 flex justify-between items-end">
        <div>
            <div className="text-xl font-bold mb-2">RATIO.</div>
            <p className="text-neutral-500">© 2024 Ratio Reader Inc.</p>
        </div>
        <div className="flex gap-6 font-medium">
            <a href="#" className="hover:underline">Twitter</a>
            <a href="#" className="hover:underline">Instagram</a>
            <a href="#" className="hover:underline">Email</a>
        </div>
      </footer>
    </div>
  );
}

function Feature({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
    return (
        <div className="p-12 hover:bg-neutral-100 transition-colors group">
            <div className="mb-6 opacity-80 group-hover:scale-110 transition-transform origin-left">{icon}</div>
            <h3 className="text-2xl font-bold mb-4">{title}</h3>
            <p className="text-neutral-600 leading-relaxed">{desc}</p>
        </div>
    );
}
