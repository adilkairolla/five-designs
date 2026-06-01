import { motion } from "motion/react";

export function Design3() {
  return (
    <div className="min-h-screen bg-[#faf9f7] text-[#2d2a26] overflow-x-hidden">
      <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=Nunito:wght@300;400;600&family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,600;1,9..144,300&display=swap" rel="stylesheet" />
      
      <style>{`
        .font-serif { font-family: 'Cormorant Garamond', Georgia, serif; }
        .font-sans { font-family: 'Nunito', sans-serif; }
        .font-display { font-family: 'Fraunces', Georgia, serif; }
        .blob { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
      `}</style>

      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <motion.div 
          className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-gradient-to-br from-[#e8dfd5] to-[#d4c8b8] blob opacity-60"
          animate={{ 
            borderRadius: ["60% 40% 30% 70% / 60% 30% 70% 40%", "40% 60% 70% 30% / 30% 70% 40% 60%", "60% 40% 30% 70% / 60% 30% 70% 40%"]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute -bottom-60 -left-40 w-[700px] h-[700px] bg-gradient-to-tr from-[#dce8df] to-[#c5d8ca] blob opacity-50"
          animate={{ 
            borderRadius: ["40% 60% 70% 30% / 30% 70% 40% 60%", "60% 40% 30% 70% / 60% 30% 70% 40%", "40% 60% 70% 30% / 30% 70% 40% 60%"]
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <motion.nav 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="fixed top-0 left-0 right-0 z-50 px-10 py-6 flex justify-between items-center"
      >
        <div className="font-serif text-3xl font-semibold tracking-wide">Ratio</div>
        <div className="font-sans text-sm flex gap-10 items-center font-light">
          <a href="#features" className="hover:text-[#8b7355] transition-colors">Features</a>
          <a href="#process" className="hover:text-[#8b7355] transition-colors">How it works</a>
          <a href="#pricing" className="hover:text-[#8b7355] transition-colors">Pricing</a>
          <button className="bg-[#2d2a26] text-white px-7 py-3 rounded-full font-normal hover:bg-[#4a453f] transition-colors">
            Get Started
          </button>
        </div>
      </motion.nav>

      <section className="min-h-screen flex items-center justify-center px-10 pt-20 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="font-sans text-sm tracking-[0.2em] uppercase text-[#8b7355] mb-8 font-light">
              Understanding Made Simple
            </p>
            
            <h1 className="font-display text-[clamp(3.5rem,8vw,7rem)] font-light leading-[1.1] mb-8 tracking-tight">
              Let your documents
              <br />
              <span className="italic">speak to you</span>
            </h1>
            
            <p className="font-serif text-2xl text-[#5a534a] max-w-2xl mx-auto mb-14 leading-relaxed font-light italic">
              Upload any PDF and receive a gentle guide through its contents — 
              summaries, quotes, and hints crafted to illuminate understanding.
            </p>
            
            <div className="flex gap-6 justify-center">
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="font-sans bg-[#2d2a26] text-white px-10 py-5 text-lg rounded-full font-light hover:bg-[#4a453f] transition-colors shadow-lg shadow-[#2d2a26]/10"
              >
                Begin your journey
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="font-sans bg-white/60 backdrop-blur-sm border border-[#d4c8b8] px-10 py-5 text-lg rounded-full font-light hover:bg-white/80 transition-colors"
              >
                See how it works
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="features" className="py-32 px-10 relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <p className="font-sans text-sm tracking-[0.2em] uppercase text-[#8b7355] mb-4">What we offer</p>
            <h2 className="font-serif text-5xl font-light">Thoughtful features for mindful reading</h2>
          </motion.div>
          
          <div className="grid grid-cols-3 gap-12">
            {[
              { 
                title: "Gentle Summaries", 
                desc: "Receive carefully crafted summaries that capture the essence without overwhelming detail.",
                icon: "🌿"
              },
              { 
                title: "Meaningful Quotes", 
                desc: "Discover the passages that matter most, presented with care and proper attribution.",
                icon: "💭"
              },
              { 
                title: "Guiding Hints", 
                desc: "Let subtle prompts illuminate your path through complex ideas and themes.",
                icon: "✨"
              },
            ].map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-5xl mb-6">{feature.icon}</div>
                <h3 className="font-serif text-2xl font-normal mb-4">{feature.title}</h3>
                <p className="font-sans text-[#6b645b] leading-relaxed font-light">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="py-32 px-10 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-24">
            <p className="font-sans text-sm tracking-[0.2em] uppercase text-[#8b7355] mb-4">The journey</p>
            <h2 className="font-serif text-5xl font-light">Three peaceful steps</h2>
          </div>
          
          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#d4c8b8] via-[#c5d8ca] to-[#d4c8b8]" />
            
            {[
              { step: "01", title: "Share your document", desc: "Gently upload any PDF — research papers, books, articles. We welcome them all." },
              { step: "02", title: "Receive understanding", desc: "Our thoughtful AI reads and extracts meaning, preparing insights just for you." },
              { step: "03", title: "Grow your knowledge", desc: "Explore summaries, contemplate quotes, and follow gentle hints to deeper understanding." },
            ].map((item, i) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className={`flex items-center gap-16 mb-20 ${i % 2 === 1 ? 'flex-row-reverse' : ''}`}
              >
                <div className={`flex-1 ${i % 2 === 1 ? 'text-right' : ''}`}>
                  <div className="font-sans text-xs tracking-[0.2em] text-[#8b7355] mb-2">{item.step}</div>
                  <h3 className="font-serif text-3xl font-normal mb-4">{item.title}</h3>
                  <p className="font-sans text-[#6b645b] leading-relaxed font-light">{item.desc}</p>
                </div>
                <div className="w-4 h-4 bg-[#2d2a26] rounded-full relative z-10" />
                <div className="flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="py-32 px-10 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <p className="font-sans text-sm tracking-[0.2em] uppercase text-[#8b7355] mb-4">Pricing</p>
            <h2 className="font-serif text-5xl font-light mb-4">Begin freely, grow naturally</h2>
            <p className="font-sans text-[#6b645b] font-light">Start with our free tier and expand when you're ready.</p>
          </div>
          
          <div className="grid grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white/60 backdrop-blur-sm border border-[#e8dfd5] rounded-3xl p-10"
            >
              <div className="font-sans text-sm text-[#8b7355] mb-2">Free</div>
              <div className="font-serif text-5xl font-light mb-8">$0</div>
              <ul className="font-sans text-sm text-[#5a534a] space-y-4 mb-10 font-light">
                <li className="flex gap-3"><span className="text-[#8b7355]">·</span> 5 documents per month</li>
                <li className="flex gap-3"><span className="text-[#8b7355]">·</span> Basic summaries</li>
                <li className="flex gap-3"><span className="text-[#8b7355]">·</span> 5 quote highlights</li>
              </ul>
              <button className="font-sans w-full py-4 border border-[#d4c8b8] rounded-full font-light hover:bg-[#2d2a26] hover:text-white hover:border-[#2d2a26] transition-colors">
                Get Started
              </button>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-[#2d2a26] text-white rounded-3xl p-10"
            >
              <div className="font-sans text-sm text-[#a09080] mb-2">Pro</div>
              <div className="font-serif text-5xl font-light mb-8">$12</div>
              <ul className="font-sans text-sm text-[#d4c8b8] space-y-4 mb-10 font-light">
                <li className="flex gap-3"><span>·</span> Unlimited documents</li>
                <li className="flex gap-3"><span>·</span> Advanced analysis</li>
                <li className="flex gap-3"><span>·</span> Unlimited highlights</li>
              </ul>
              <button className="font-sans w-full py-4 bg-white text-[#2d2a26] rounded-full font-light hover:bg-[#f5f3f0] transition-colors">
                Upgrade
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      <footer className="py-16 px-10 border-t border-[#e8dfd5] relative z-10">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="font-serif text-xl font-semibold">Ratio</div>
          <div className="font-sans text-sm text-[#8b7355] font-light">
            © 2025 Ratio Reader. Crafted with care.
          </div>
        </div>
      </footer>
    </div>
  );
}
