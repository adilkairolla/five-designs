import { motion } from "motion/react";

export function Design5() {
  return (
    <div className="min-h-screen bg-[#1a1814] text-[#f5f0e8] overflow-x-hidden">
      <link href="https://fonts.googleapis.com/css2?family=Cormorant:ital,wght@0,300;0,400;0,600;1,300;1,400&family=Montserrat:wght@300;400;500;600&family=Cinzel:wght@400;600;700&display=swap" rel="stylesheet" />
      
      <style>{`
        .font-display { font-family: 'Cinzel', Georgia, serif; }
        .font-serif { font-family: 'Cormorant', Georgia, serif; }
        .font-sans { font-family: 'Montserrat', sans-serif; }
        
        .gold-text {
          background: linear-gradient(135deg, #d4af37 0%, #f4e4bc 50%, #d4af37 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .gold-border {
          border-image: linear-gradient(135deg, #d4af37, #f4e4bc, #d4af37) 1;
        }
        .gold-glow {
          box-shadow: 0 0 60px rgba(212, 175, 55, 0.15), 0 0 120px rgba(212, 175, 55, 0.05);
        }
      `}</style>

      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(212,175,55,0.08),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(212,175,55,0.05),transparent_40%)]" />
      </div>

      <motion.nav 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="fixed top-0 left-0 right-0 z-50 px-12 py-6 flex justify-between items-center bg-[#1a1814]/90 backdrop-blur-sm border-b border-[#d4af37]/20"
      >
        <div className="font-display text-2xl font-semibold tracking-[0.3em] gold-text">RATIO</div>
        <div className="font-sans text-xs flex gap-12 items-center tracking-[0.15em] uppercase">
          <a href="#features" className="text-[#a09080] hover:text-[#d4af37] transition-colors">Features</a>
          <a href="#process" className="text-[#a09080] hover:text-[#d4af37] transition-colors">Process</a>
          <a href="#pricing" className="text-[#a09080] hover:text-[#d4af37] transition-colors">Membership</a>
          <button className="bg-gradient-to-r from-[#d4af37] to-[#b8962f] text-[#1a1814] px-8 py-3 font-medium hover:from-[#f4e4bc] hover:to-[#d4af37] transition-all">
            Begin
          </button>
        </div>
      </motion.nav>

      <section className="min-h-screen flex items-center justify-center px-12 pt-20 relative">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="font-sans text-xs tracking-[0.4em] uppercase text-[#8b7355] mb-10">
              The Art of Understanding
            </div>
            
            <h1 className="font-display text-[clamp(3rem,8vw,6rem)] font-normal leading-[1.15] tracking-[0.1em] mb-8">
              <span className="gold-text">Distill</span> the Essence
              <br />
              <span className="font-serif italic text-[#a09080] text-[0.7em]">of Every Document</span>
            </h1>
            
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mx-auto mb-10" />
            
            <p className="font-serif text-2xl text-[#a09080] max-w-2xl mx-auto mb-14 leading-relaxed italic font-light">
              Elevate your reading experience. Upload any PDF and receive 
              curated insights, meaningful quotes, and illuminating context.
            </p>
            
            <div className="flex gap-8 justify-center">
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="font-sans bg-gradient-to-r from-[#d4af37] to-[#b8962f] text-[#1a1814] px-12 py-5 text-sm tracking-[0.2em] uppercase font-medium hover:from-[#f4e4bc] hover:to-[#d4af37] transition-all gold-glow"
              >
                Commence
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="font-sans border border-[#d4af37]/50 px-12 py-5 text-sm tracking-[0.2em] uppercase text-[#d4af37] hover:bg-[#d4af37]/10 transition-colors"
              >
                Discover More
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="features" className="py-32 px-12 relative">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-24"
          >
            <div className="font-sans text-xs tracking-[0.4em] uppercase text-[#8b7355] mb-4">Distinction</div>
            <h2 className="font-display text-4xl tracking-[0.15em] gold-text">THE RATIO EXPERIENCE</h2>
          </motion.div>
          
          <div className="grid grid-cols-3 gap-px bg-[#d4af37]/20">
            {[
              { 
                title: "Curated Summaries", 
                desc: "Receive elegantly distilled overviews that capture the soul of your documents.",
                num: "I"
              },
              { 
                title: "Notable Passages", 
                desc: "Discover the most profound excerpts, preserved with grace and proper attribution.",
                num: "II"
              },
              { 
                title: "Illuminating Context", 
                desc: "Allow thoughtful prompts to guide your understanding without revelation.",
                num: "III"
              },
            ].map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                viewport={{ once: true }}
                className="bg-[#1a1814] p-12"
              >
                <div className="font-display text-4xl gold-text mb-6">{feature.num}</div>
                <h3 className="font-display text-lg tracking-[0.1em] mb-4">{feature.title}</h3>
                <p className="font-serif text-[#8b7355] leading-relaxed italic">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="py-32 px-12 relative">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-24">
            <div className="font-sans text-xs tracking-[0.4em] uppercase text-[#8b7355] mb-4">Methodology</div>
            <h2 className="font-display text-4xl tracking-[0.15em] gold-text">THE PATH TO CLARITY</h2>
          </div>
          
          <div className="space-y-1">
            {[
              { step: "01", title: "Present Your Document", desc: "Gracefully upload any PDF to our refined system. Papers, volumes, articles — all are welcomed." },
              { step: "02", title: "Receive Analysis", desc: "Our discerning AI examines structure, identifies themes, and extracts the essence." },
              { step: "03", title: "Gain Understanding", desc: "Explore your curated summary, contemplate selected passages, and follow gentle guidance." },
            ].map((item, i) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="border-t border-[#d4af37]/20 py-12 flex gap-12 items-start"
              >
                <div className="font-display text-5xl text-[#d4af37]/30 tracking-wider w-20">{item.step}</div>
                <div>
                  <h3 className="font-display text-xl tracking-[0.1em] mb-3">{item.title}</h3>
                  <p className="font-serif text-lg text-[#8b7355] leading-relaxed italic">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="py-32 px-12 relative">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="font-sans text-xs tracking-[0.4em] uppercase text-[#8b7355] mb-4">Membership</div>
            <h2 className="font-display text-4xl tracking-[0.15em] gold-text">SELECT YOUR TIER</h2>
          </div>
          
          <div className="grid grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="border border-[#d4af37]/30 p-12"
            >
              <div className="font-sans text-xs tracking-[0.3em] text-[#8b7355] mb-2 uppercase">Standard</div>
              <div className="font-display text-5xl tracking-wider gold-text mb-8">$0</div>
              <ul className="font-serif text-[#8b7355] space-y-4 mb-10 italic">
                <li>5 documents per month</li>
                <li>Basic summaries</li>
                <li>5 highlighted passages</li>
              </ul>
              <button className="font-sans w-full py-4 border border-[#d4af37]/50 text-sm tracking-[0.2em] uppercase text-[#d4af37] hover:bg-[#d4af37]/10 transition-colors">
                Begin Journey
              </button>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-[#252018] to-[#1a1814] border border-[#d4af37]/50 p-12 gold-glow"
            >
              <div className="font-sans text-xs tracking-[0.3em] text-[#d4af37] mb-2 uppercase">Patron</div>
              <div className="font-display text-5xl tracking-wider gold-text mb-8">$12</div>
              <ul className="font-serif text-[#a09080] space-y-4 mb-10 italic">
                <li>Unlimited documents</li>
                <li>Advanced analysis</li>
                <li>Unlimited passages</li>
              </ul>
              <button className="font-sans w-full py-4 bg-gradient-to-r from-[#d4af37] to-[#b8962f] text-[#1a1814] text-sm tracking-[0.2em] uppercase font-medium hover:from-[#f4e4bc] hover:to-[#d4af37] transition-all">
                Elevate Status
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      <footer className="py-16 px-12 border-t border-[#d4af37]/20">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="font-display text-lg tracking-[0.3em] gold-text">RATIO</div>
          <div className="font-sans text-xs text-[#8b7355] tracking-[0.15em]">
            © 2025 RATIO READER. CRAFTED WITH PRECISION.
          </div>
        </div>
      </footer>
    </div>
  );
}
