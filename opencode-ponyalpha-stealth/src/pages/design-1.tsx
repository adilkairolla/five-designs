import { motion } from "motion/react";

export function Design1() {
  return (
    <div className="min-h-screen bg-[#f8f6f3] text-[#1a1a1a] overflow-x-hidden">
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400&family=Source+Serif+4:ital,opsz,wght@0,8..60,300;0,8..60,400;0,8..60,600;1,8..60,400&family=DM+Sans:wght@400;500;700&display=swap" rel="stylesheet" />
      
      <style>{`
        .font-serif-display { font-family: 'Playfair Display', Georgia, serif; }
        .font-serif-body { font-family: 'Source Serif 4', Georgia, serif; }
        .font-sans { font-family: 'DM Sans', sans-serif; }
      `}</style>

      <motion.nav 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="fixed top-0 left-0 right-0 z-50 px-8 py-6 flex justify-between items-center bg-[#f8f6f3]/90 backdrop-blur-sm"
      >
        <div className="font-serif-display text-2xl font-bold tracking-tight">Ratio</div>
        <div className="font-sans text-sm flex gap-8">
          <a href="#features" className="hover:opacity-60 transition-opacity">Features</a>
          <a href="#how" className="hover:opacity-60 transition-opacity">How it works</a>
          <a href="#pricing" className="hover:opacity-60 transition-opacity">Pricing</a>
          <button className="bg-[#1a1a1a] text-white px-5 py-2 rounded-full hover:bg-[#333] transition-colors">Get Started</button>
        </div>
      </motion.nav>

      <section className="min-h-screen flex items-center justify-center px-8 pt-24">
        <div className="max-w-6xl mx-auto text-center">
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="font-sans text-sm tracking-[0.3em] uppercase text-[#666] mb-8"
          >
            Intelligent Document Analysis
          </motion.p>
          
          <motion.h1 
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="font-serif-display text-[clamp(3rem,10vw,8rem)] font-black leading-[0.9] tracking-tight mb-8"
          >
            Read Less.<br />
            <span className="italic font-normal">Understand More.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="font-serif-body text-xl text-[#444] max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            Upload any PDF. Receive distilled insights, key quotes, and contextual hints 
            that transform complex documents into clarity.
          </motion.p>
          
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex gap-4 justify-center"
          >
            <button className="font-sans bg-[#1a1a1a] text-white px-8 py-4 text-lg hover:bg-[#333] transition-colors">
              Start Free
            </button>
            <button className="font-sans border-2 border-[#1a1a1a] px-8 py-4 text-lg hover:bg-[#1a1a1a] hover:text-white transition-colors">
              Watch Demo
            </button>
          </motion.div>
        </div>
      </section>

      <section id="features" className="py-32 px-8 bg-[#efede9]">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="grid grid-cols-3 gap-16"
          >
            <div className="border-t-2 border-[#1a1a1a] pt-8">
              <div className="font-serif-display text-6xl font-black mb-4">01</div>
              <h3 className="font-serif-display text-2xl font-bold mb-4">Smart Summaries</h3>
              <p className="font-serif-body text-[#555] leading-relaxed">
                AI-powered extraction of core concepts, main arguments, and essential takeaways 
                from any document length.
              </p>
            </div>
            
            <div className="border-t-2 border-[#1a1a1a] pt-8">
              <div className="font-serif-display text-6xl font-black mb-4">02</div>
              <h3 className="font-serif-display text-2xl font-bold mb-4">Key Quotes</h3>
              <p className="font-serif-body text-[#555] leading-relaxed">
                Discover the most impactful passages, automatically highlighted and preserved 
                with proper citations.
              </p>
            </div>
            
            <div className="border-t-2 border-[#1a1a1a] pt-8">
              <div className="font-serif-display text-6xl font-black mb-4">03</div>
              <h3 className="font-serif-display text-2xl font-bold mb-4">Contextual Hints</h3>
              <p className="font-serif-body text-[#555] leading-relaxed">
                Receive intelligent prompts that guide your understanding without spoiling 
                the reading experience.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-32 px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="font-sans text-sm tracking-[0.3em] uppercase text-[#666] mb-6">The Process</p>
            <h2 className="font-serif-display text-5xl font-bold mb-20">
              Three Steps to Clarity
            </h2>
          </motion.div>
          
          <div className="space-y-24">
            <motion.div 
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex gap-16 items-start"
            >
              <div className="font-serif-display text-8xl font-black text-[#ddd]">1</div>
              <div>
                <h3 className="font-serif-display text-3xl font-bold mb-4">Upload Your Document</h3>
                <p className="font-serif-body text-lg text-[#555] leading-relaxed">
                  Drag and drop any PDF. Research papers, reports, books, articles — 
                  Ratio handles them all with equal precision.
                </p>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex gap-16 items-start justify-end"
            >
              <div className="text-right">
                <h3 className="font-serif-display text-3xl font-bold mb-4">AI Analysis Begins</h3>
                <p className="font-serif-body text-lg text-[#555] leading-relaxed">
                  Our language models parse structure, identify themes, and extract 
                  the intellectual core of your document.
                </p>
              </div>
              <div className="font-serif-display text-8xl font-black text-[#ddd]">2</div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex gap-16 items-start"
            >
              <div className="font-serif-display text-8xl font-black text-[#ddd]">3</div>
              <div>
                <h3 className="font-serif-display text-3xl font-bold mb-4">Receive Your Insights</h3>
                <p className="font-serif-body text-lg text-[#555] leading-relaxed">
                  Get a beautifully formatted summary, curated quotes, and contextual 
                  hints that illuminate your reading.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="pricing" className="py-32 px-8 bg-[#1a1a1a] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <p className="font-sans text-sm tracking-[0.3em] uppercase text-[#888] mb-6">Pricing</p>
            <h2 className="font-serif-display text-5xl font-bold mb-8">
              Start Reading Smarter
            </h2>
            <p className="font-serif-body text-xl text-[#aaa] mb-16 max-w-2xl mx-auto">
              Free for personal use. Upgrade for unlimited analysis and advanced features.
            </p>
            
            <div className="grid grid-cols-2 gap-8 max-w-2xl mx-auto">
              <div className="bg-[#252525] p-10 rounded-sm text-left">
                <div className="font-sans text-sm text-[#888] mb-2">Free</div>
                <div className="font-serif-display text-4xl font-bold mb-6">$0</div>
                <ul className="font-sans text-sm text-[#aaa] space-y-3 mb-8">
                  <li>5 documents per month</li>
                  <li>Basic summaries</li>
                  <li>5 quote highlights</li>
                </ul>
                <button className="font-sans w-full py-3 border border-white/30 hover:bg-white/10 transition-colors">
                  Get Started
                </button>
              </div>
              
              <div className="bg-white text-[#1a1a1a] p-10 rounded-sm text-left">
                <div className="font-sans text-sm text-[#666] mb-2">Pro</div>
                <div className="font-serif-display text-4xl font-bold mb-6">$12</div>
                <ul className="font-sans text-sm text-[#555] space-y-3 mb-8">
                  <li>Unlimited documents</li>
                  <li>Advanced analysis</li>
                  <li>Unlimited highlights</li>
                </ul>
                <button className="font-sans w-full py-3 bg-[#1a1a1a] text-white hover:bg-[#333] transition-colors">
                  Upgrade
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <footer className="py-16 px-8 border-t border-[#e0ddd8]">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="font-serif-display text-xl font-bold">Ratio</div>
          <div className="font-sans text-sm text-[#888]">
            © 2025 Ratio Reader. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
