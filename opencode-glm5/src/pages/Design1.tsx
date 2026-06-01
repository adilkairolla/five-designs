import { motion } from "motion/react";
import { BookOpen, Sparkles, Quote, Brain, ArrowRight, FileText } from "lucide-react";

export default function Design1() {
  return (
    <div className="min-h-screen bg-[#FAF9F6] text-[#1a1a1a] overflow-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=Instrument+Serif:ital@0;1&display=swap');
        
        .font-editorial { font-family: 'Playfair Display', Georgia, serif; }
        .font-body { font-family: 'Cormorant Garamond', Georgia, serif; }
        .font-accent { font-family: 'Instrument Serif', Georgia, serif; }
      `}</style>
      
      <nav className="fixed top-0 left-0 right-0 z-50 px-8 py-6 flex justify-between items-center mix-blend-difference">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="font-editorial text-2xl font-medium tracking-tight text-white"
        >
          Ratio<span className="italic">Reader</span>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="flex gap-8 items-center"
        >
          <a href="#" className="font-body text-lg text-white/80 hover:text-white transition-colors">About</a>
          <a href="#" className="font-body text-lg text-white/80 hover:text-white transition-colors">Features</a>
          <button className="font-body text-lg px-6 py-2 border border-white/30 text-white hover:bg-white hover:text-black transition-all duration-300">
            Get Started
          </button>
        </motion.div>
      </nav>

      <section className="relative min-h-screen flex items-center">
        <div className="absolute inset-0 overflow-hidden">
          <motion.div 
            initial={{ scale: 1.2, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.08 }}
            transition={{ duration: 2 }}
            className="absolute -right-40 top-1/2 -translate-y-1/2"
          >
            <BookOpen className="w-[800px] h-[800px]" strokeWidth={0.5} />
          </motion.div>
        </div>
        
        <div className="container mx-auto px-8 grid grid-cols-12 gap-8 pt-24">
          <div className="col-span-7">
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="font-body text-xl tracking-[0.3em] uppercase text-[#8B7355] mb-8"
            >
              Intelligent Reading
            </motion.p>
            
            <motion.h1 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-editorial text-[7rem] leading-[0.9] font-medium tracking-tight mb-12"
            >
              Read
              <br />
              <span className="italic font-normal">Smarter</span>,
              <br />
              <span className="text-[#8B7355]">Faster</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="font-body text-2xl leading-relaxed text-[#4a4a4a] max-w-xl mb-12"
            >
              Transform any PDF into digestible insights. Ratio Reader distills 
              complex documents into clear summaries, meaningful quotes, and 
              actionable intelligence.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex gap-6 items-center"
            >
              <button className="group font-body text-lg px-10 py-4 bg-[#1a1a1a] text-white hover:bg-[#8B7355] transition-all duration-500 flex items-center gap-3">
                Start Reading
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <a href="#" className="font-body text-lg text-[#8B7355] border-b border-[#8B7355] pb-1 hover:text-[#1a1a1a] hover:border-[#1a1a1a] transition-colors">
                Watch Demo
              </a>
            </motion.div>
          </div>
          
          <div className="col-span-5 relative">
            <motion.div 
              initial={{ opacity: 0, x: 40, rotate: 5 }}
              animate={{ opacity: 1, x: 0, rotate: 3 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="absolute right-0 top-20 w-[420px] h-[560px] bg-white shadow-2xl p-8 transform"
            >
              <div className="absolute -top-4 -left-4 w-20 h-20 border-2 border-[#8B7355]" />
              <div className="h-full flex flex-col">
                <div className="flex items-center gap-3 mb-6 pb-6 border-b border-[#e5e5e5]">
                  <FileText className="w-6 h-6 text-[#8B7355]" />
                  <span className="font-body text-lg text-[#4a4a4a]">document.pdf</span>
                </div>
                <div className="flex-1 space-y-4">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 1.5, delay: 1 }}
                    className="h-3 bg-[#1a1a1a]"
                  />
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: "85%" }}
                    transition={{ duration: 1.2, delay: 1.1 }}
                    className="h-2 bg-[#e5e5e5]"
                  />
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: "92%" }}
                    transition={{ duration: 1.3, delay: 1.2 }}
                    className="h-2 bg-[#e5e5e5]"
                  />
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: "78%" }}
                    transition={{ duration: 1.1, delay: 1.3 }}
                    className="h-2 bg-[#e5e5e5]"
                  />
                </div>
                <div className="pt-6 border-t border-[#e5e5e5]">
                  <div className="font-accent text-xl text-[#8B7355] italic">
                    "Key insight extracted..."
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="absolute -left-8 bottom-32 w-48 h-48 bg-[#8B7355] flex items-center justify-center"
            >
              <div className="text-white text-center">
                <div className="font-editorial text-5xl font-medium">87%</div>
                <div className="font-body text-sm tracking-wide mt-2">Time Saved</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-32 bg-[#1a1a1a] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-px h-full bg-white" />
          <div className="absolute top-0 left-1/2 w-px h-full bg-white" />
          <div className="absolute top-0 left-3/4 w-px h-full bg-white" />
        </div>
        
        <div className="container mx-auto px-8">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-24"
          >
            <p className="font-body text-lg tracking-[0.3em] uppercase text-[#8B7355] mb-6">
              The Experience
            </p>
            <h2 className="font-editorial text-5xl md:text-6xl font-medium">
              Every Document,<br /><span className="italic font-normal">Distilled</span>
            </h2>
          </motion.div>
          
          <div className="grid grid-cols-3 gap-16">
            {[
              { icon: Sparkles, title: "Instant Summaries", desc: "AI-powered extraction of core concepts and key arguments in seconds" },
              { icon: Quote, title: "Meaningful Quotes", desc: "Discover the most impactful passages automatically highlighted for you" },
              { icon: Brain, title: "Deep Insights", desc: "Uncover hidden connections and themes across your reading" }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                className="relative"
              >
                <div className="absolute -top-8 -left-8 w-16 h-16 border border-[#8B7355]" />
                <item.icon className="w-12 h-12 text-[#8B7355] mb-6" strokeWidth={1} />
                <h3 className="font-editorial text-2xl mb-4">{item.title}</h3>
                <p className="font-body text-lg text-white/60 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 relative">
        <div className="container mx-auto px-8">
          <div className="grid grid-cols-2 gap-24 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <p className="font-body text-lg tracking-[0.3em] uppercase text-[#8B7355] mb-6">
                Testimonial
              </p>
              <blockquote className="font-accent text-4xl leading-snug text-[#1a1a1a] mb-8">
                "Ratio Reader has fundamentally changed how I process academic papers. 
                What used to take hours now takes minutes."
              </blockquote>
              <div className="font-body text-lg text-[#4a4a4a]">
                — Dr. Sarah Chen, MIT Researcher
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-[#8B7355]/10 transform -rotate-3" />
              <div className="relative bg-white p-12 shadow-xl">
                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <div className="font-editorial text-6xl text-[#8B7355]">2M+</div>
                    <div className="font-body text-[#4a4a4a] mt-2">Documents Processed</div>
                  </div>
                  <div>
                    <div className="font-editorial text-6xl text-[#8B7355]">98%</div>
                    <div className="font-body text-[#4a4a4a] mt-2">Accuracy Rate</div>
                  </div>
                  <div>
                    <div className="font-editorial text-6xl text-[#8B7355]">50K</div>
                    <div className="font-body text-[#4a4a4a] mt-2">Active Readers</div>
                  </div>
                  <div>
                    <div className="font-editorial text-6xl text-[#8B7355]">4.9</div>
                    <div className="font-body text-[#4a4a4a] mt-2">User Rating</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-32 bg-[#1a1a1a] text-white">
        <div className="container mx-auto px-8 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-editorial text-5xl md:text-7xl font-medium mb-8"
          >
            Begin Your <span className="italic">Journey</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-body text-2xl text-white/60 mb-12 max-w-2xl mx-auto"
          >
            Join thousands of readers who have transformed their relationship with information.
          </motion.p>
          <motion.button 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="group font-body text-lg px-12 py-5 bg-[#8B7355] text-white hover:bg-white hover:text-[#1a1a1a] transition-all duration-500"
          >
            Get Started Free
            <ArrowRight className="inline w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </div>
      </section>

      <footer className="py-12 border-t border-[#e5e5e5]">
        <div className="container mx-auto px-8 flex justify-between items-center">
          <div className="font-editorial text-xl">
            Ratio<span className="italic">Reader</span>
          </div>
          <div className="font-body text-[#4a4a4a]">
            © 2024 Ratio Reader. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
