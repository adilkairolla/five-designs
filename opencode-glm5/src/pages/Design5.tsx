import { motion } from "motion/react";
import { ArrowRight, FileText, Layers, Lightbulb } from "lucide-react";

export default function Design5() {
  return (
    <div className="min-h-screen bg-[#fcfcfc] text-[#1a1a1a] overflow-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700;800&display=swap');
        
        .font-luxury { font-family: 'Manrope', system-ui, sans-serif; }
      `}</style>
      
      <nav className="fixed top-0 left-0 right-0 z-50 px-12 py-8">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="font-luxury text-xl font-semibold tracking-tight"
          >
            Ratio<span className="font-light">Reader</span>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.1 }}
            className="hidden md:flex gap-16 items-center"
          >
            <a href="#" className="font-luxury text-sm text-[#666] hover:text-[#1a1a1a] transition-colors tracking-wide">Features</a>
            <a href="#" className="font-luxury text-sm text-[#666] hover:text-[#1a1a1a] transition-colors tracking-wide">Pricing</a>
            <a href="#" className="font-luxury text-sm text-[#666] hover:text-[#1a1a1a] transition-colors tracking-wide">About</a>
            <button className="font-luxury text-sm px-8 py-3 bg-[#1a1a1a] text-white tracking-wide hover:bg-[#333] transition-all">
              Get Started
            </button>
          </motion.div>
        </div>
      </nav>

      <section className="relative min-h-screen flex items-center justify-center px-12 pt-20">
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-gradient-to-br from-[#f0f0f0] to-[#e8e8e8] rounded-full blur-3xl opacity-60" />
        <div className="absolute bottom-1/4 left-1/3 w-[400px] h-[400px] bg-gradient-to-tr from-[#f5f5f5] to-[#efefef] rounded-full blur-3xl opacity-40" />
        
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="relative z-10">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="font-luxury text-xs tracking-[0.3em] uppercase text-[#999] mb-12"
              >
                Intelligent Document Processing
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.1 }}
                className="font-luxury text-6xl md:text-7xl font-light leading-[1.1] tracking-tight mb-12"
              >
                The art of
                <br />
                <span className="font-semibold">understanding</span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="font-luxury text-lg text-[#666] leading-relaxed mb-12 max-w-md"
              >
                Transform any PDF into clear, actionable intelligence. 
                Ratio Reader distills complexity into clarity—summaries, 
                quotes, and insights at your command.
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex gap-6 items-center"
              >
                <button className="group font-luxury text-sm px-10 py-4 bg-[#1a1a1a] text-white tracking-wide hover:bg-[#333] transition-all flex items-center gap-4">
                  Begin
                  <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                </button>
                <a href="#" className="font-luxury text-sm text-[#666] hover:text-[#1a1a1a] transition-colors tracking-wide">
                  View Demo
                </a>
              </motion.div>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#f8f8f8] to-[#f0f0f0] rounded-sm transform rotate-1" />
              <div className="relative bg-white p-10 shadow-2xl shadow-black/5">
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#e0e0e0] to-transparent" />
                
                <div className="flex items-center justify-between mb-10 pb-6 border-b border-[#f0f0f0]">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-[#f5f5f5] flex items-center justify-center">
                      <FileText className="w-5 h-5 text-[#666]" strokeWidth={1.5} />
                    </div>
                    <span className="font-luxury text-sm text-[#666]">document.pdf</span>
                  </div>
                  <div className="font-luxury text-xs text-[#999]">Processing</div>
                </div>
                
                <div className="space-y-4 mb-10">
                  {[
                    { width: "w-full", delay: 0 },
                    { width: "w-4/5", delay: 0.05 },
                    { width: "w-11/12", delay: 0.1 },
                    { width: "w-3/4", delay: 0.15 },
                  ].map((line, i) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, width: 0 }}
                      animate={{ opacity: 1, width: "100%" }}
                      transition={{ duration: 1, delay: 0.8 + line.delay }}
                      className={`h-px bg-[#e5e5e5] ${line.width}`}
                    />
                  ))}
                </div>
                
                <div className="border-t border-[#f0f0f0] pt-6">
                  <div className="font-luxury text-xs tracking-wider uppercase text-[#999] mb-4">Key Insight</div>
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.4, duration: 0.8 }}
                    className="font-luxury text-[#1a1a1a] leading-relaxed"
                  >
                    The document outlines a strategic framework for sustainable growth...
                  </motion.div>
                </div>
              </div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.8 }}
                className="absolute -bottom-8 -right-8 bg-[#1a1a1a] text-white px-8 py-4"
              >
                <div className="font-luxury text-xs tracking-wider uppercase text-[#666] mb-1">Saved</div>
                <div className="font-luxury text-2xl font-light">87%</div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-32 px-12 relative">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-3 gap-px bg-[#f0f0f0]">
            {[
              { icon: FileText, title: "Summarize", desc: "Extract the essence of any document in moments" },
              { icon: Layers, title: "Organize", desc: "Structure complex information with intelligent parsing" },
              { icon: Lightbulb, title: "Enlighten", desc: "Discover insights hidden within the text" }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.8 }}
                className="bg-[#fcfcfc] p-16 group hover:bg-[#1a1a1a] transition-all duration-500"
              >
                <item.icon className="w-8 h-8 text-[#999] mb-10 group-hover:text-white transition-colors duration-500" strokeWidth={1} />
                <h3 className="font-luxury text-xl font-medium mb-4 group-hover:text-white transition-colors duration-500">{item.title}</h3>
                <p className="font-luxury text-sm text-[#666] leading-relaxed group-hover:text-[#999] transition-colors duration-500">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 px-12">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-24 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="font-luxury text-xs tracking-[0.3em] uppercase text-[#999] mb-8">
                Testimonial
              </div>
              <blockquote className="font-luxury text-2xl font-light text-[#333] leading-relaxed mb-10">
                "Ratio Reader has transformed how I approach complex documents. 
                The clarity it provides is remarkable."
              </blockquote>
              <div className="font-luxury text-sm text-[#666]">
                <div className="font-medium text-[#1a1a1a] mb-1">James Morrison</div>
                <div>Partner, Morrison & Associates</div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid grid-cols-2 gap-px bg-[#f0f0f0]"
            >
              {[
                { value: "50K", label: "Readers" },
                { value: "2M+", label: "Documents" },
                { value: "99%", label: "Accuracy" },
                { value: "4.9", label: "Rating" }
              ].map((stat, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className="bg-[#fcfcfc] p-10 text-center"
                >
                  <div className="font-luxury text-4xl font-light text-[#1a1a1a]">{stat.value}</div>
                  <div className="font-luxury text-xs text-[#999] tracking-wider mt-2">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-32 px-12 bg-[#1a1a1a] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-px bg-white" />
          <div className="absolute top-1/2 left-0 w-full h-px bg-white" />
          <div className="absolute bottom-0 left-0 w-full h-px bg-white" />
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="font-luxury text-xs tracking-[0.3em] uppercase text-[#666] mb-8">
              Begin Today
            </div>
            <h2 className="font-luxury text-5xl md:text-6xl font-light mb-10">
              The future of reading
            </h2>
            <p className="font-luxury text-lg text-[#999] mb-12 max-w-xl mx-auto leading-relaxed">
              Join discerning readers who value clarity over complexity. 
              No signup required.
            </p>
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="font-luxury text-sm px-14 py-5 bg-white text-[#1a1a1a] tracking-wide hover:bg-[#f5f5f5] transition-all"
            >
              Start Reading
            </motion.button>
          </motion.div>
        </div>
      </section>

      <footer className="py-12 px-12 border-t border-[#f0f0f0]">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="font-luxury text-lg font-semibold tracking-tight">
            Ratio<span className="font-light">Reader</span>
          </div>
          <div className="font-luxury text-xs text-[#999]">
            © 2024 Ratio Reader. Crafted with precision.
          </div>
        </div>
      </footer>
    </div>
  );
}
