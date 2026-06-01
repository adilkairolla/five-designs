import { motion } from "motion/react";
import { BookOpen, Feather, Heart, Leaf, Upload, ArrowRight, Star } from "lucide-react";

export default function Design3() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FDF8F3] via-[#FEF6F0] to-[#F9F1EB] text-[#5D5A56] overflow-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,400;0,9..144,500;0,9..144,600;0,9..144,700;1,9..144,300;1,9..144,400;1,9..144,500;1,9..144,600;1,9..144,700&family=Nunito:wght@300;400;500;600;700&display=swap');
        
        .font-serif-soft { font-family: 'Fraunces', Georgia, serif; }
        .font-sans-soft { font-family: 'Nunito', sans-serif; }
        
        .blob-1 {
          border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
        }
        .blob-2 {
          border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%;
        }
        .blob-3 {
          border-radius: 50% 60% 40% 70% / 40% 70% 30% 60%;
        }
      `}</style>
      
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <motion.div 
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.4 }}
          transition={{ duration: 2 }}
          className="absolute -top-32 -right-32 w-[600px] h-[600px] bg-gradient-to-br from-[#E8D5C4] to-[#D4C4B0] blob-1 blur-3xl"
        />
        <motion.div 
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.3 }}
          transition={{ duration: 2, delay: 0.3 }}
          className="absolute top-1/2 -left-48 w-[500px] h-[500px] bg-gradient-to-tr from-[#D5E8D4] to-[#C4E0C2] blob-2 blur-3xl"
        />
        <motion.div 
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.25 }}
          transition={{ duration: 2, delay: 0.6 }}
          className="absolute -bottom-32 right-1/4 w-[400px] h-[400px] bg-gradient-to-tl from-[#E8D5E0] to-[#D4C4D0] blob-3 blur-3xl"
        />
      </div>

      <nav className="fixed top-0 left-0 right-0 z-50 px-8 py-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3"
          >
            <div className="w-10 h-10 bg-gradient-to-br from-[#9B8B7E] to-[#7A6B5E] rounded-2xl flex items-center justify-center shadow-lg shadow-[#9B8B7E]/20">
              <BookOpen className="w-5 h-5 text-white" strokeWidth={1.5} />
            </div>
            <span className="font-serif-soft text-2xl font-semibold text-[#5D5A56]">
              Ratio<span className="text-[#9B8B7E]">Reader</span>
            </span>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="hidden md:flex gap-10 items-center"
          >
            <a href="#" className="font-sans-soft text-[#8B8680] hover:text-[#5D5A56] transition-colors">Features</a>
            <a href="#" className="font-sans-soft text-[#8B8680] hover:text-[#5D5A56] transition-colors">Pricing</a>
            <a href="#" className="font-sans-soft text-[#8B8680] hover:text-[#5D5A56] transition-colors">About</a>
            <button className="bg-gradient-to-r from-[#9B8B7E] to-[#7A6B5E] text-white font-sans-soft font-medium px-7 py-3 rounded-full shadow-lg shadow-[#9B8B7E]/30 hover:shadow-xl hover:shadow-[#9B8B7E]/40 transition-all duration-300 hover:-translate-y-0.5">
              Get Started
            </button>
          </motion.div>
        </div>
      </nav>

      <section className="relative pt-36 pb-24 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-sm px-5 py-2 rounded-full mb-8 shadow-sm"
              >
                <Leaf className="w-4 h-4 text-[#7AB36E]" />
                <span className="font-sans-soft text-sm text-[#7AB36E] font-medium">Gentle on your time</span>
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="font-serif-soft text-5xl md:text-7xl font-medium leading-[1.1] text-[#3D3A36] mb-8"
              >
                Let your reading
                <br />
                <span className="italic text-[#9B8B7E]">bloom</span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="font-sans-soft text-xl text-[#8B8680] leading-relaxed mb-10 max-w-lg"
              >
                Upload your PDF and watch the wisdom unfold. Ratio Reader gently extracts 
                the essence of every document—summaries, quotes, and insights that help 
                you grow.
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-wrap gap-4 items-center"
              >
                <button className="group bg-gradient-to-r from-[#9B8B7E] to-[#7A6B5E] text-white font-sans-soft font-medium px-8 py-4 rounded-full shadow-lg shadow-[#9B8B7E]/30 hover:shadow-xl hover:shadow-[#9B8B7E]/40 transition-all duration-300 flex items-center gap-3 hover:-translate-y-0.5">
                  <Upload className="w-5 h-5" />
                  Upload your PDF
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <div className="font-sans-soft text-[#8B8680]">
                  Free to start • No signup needed
                </div>
              </motion.div>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, rotate: -3 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#E8D5C4] to-[#D4C4B0] blob-1 opacity-30 scale-110" />
              <div className="relative bg-white/80 backdrop-blur-sm rounded-[3rem] p-8 shadow-2xl shadow-[#9B8B7E]/10">
                <div className="absolute -top-6 -right-6 w-16 h-16 bg-gradient-to-br from-[#7AB36E] to-[#5A935E] rounded-2xl flex items-center justify-center shadow-lg shadow-[#7AB36E]/30">
                  <Feather className="w-7 h-7 text-white" />
                </div>
                
                <div className="bg-[#FDF8F3] rounded-2xl p-6 mb-6">
                  <div className="font-sans-soft text-sm text-[#9B8B7E] mb-3">Your document</div>
                  <div className="space-y-3">
                    {[
                      { width: "w-full", delay: 0 },
                      { width: "w-4/5", delay: 0.1 },
                      { width: "w-11/12", delay: 0.2 },
                      { width: "w-3/4", delay: 0.3 },
                    ].map((line, i) => (
                      <motion.div 
                        key={i}
                        initial={{ opacity: 0, width: 0 }}
                        animate={{ opacity: 1, width: "100%" }}
                        transition={{ duration: 0.8, delay: 0.8 + line.delay }}
                        className={`h-2.5 bg-[#E8D5C4] rounded-full ${line.width}`}
                      />
                    ))}
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-[#F0E6DB] to-[#E8D8CA] rounded-2xl p-6">
                  <div className="font-sans-soft text-sm text-[#9B8B7E] mb-3 flex items-center gap-2">
                    <Heart className="w-4 h-4" /> Key insights
                  </div>
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5 }}
                    className="font-serif-soft text-lg text-[#5D5A56] italic"
                  >
                    "The main argument centers around three core principles..."
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 px-8 relative">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-serif-soft text-4xl md:text-5xl font-medium text-[#3D3A36] mb-6">
              Features that <span className="italic text-[#9B8B7E]">nurture</span> your mind
            </h2>
            <p className="font-sans-soft text-lg text-[#8B8680] max-w-2xl mx-auto">
              Every tool designed with care to help you understand more deeply
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                icon: Feather, 
                title: "Gentle Summaries", 
                desc: "Thoughtful summaries that capture the heart of your documents without overwhelming",
                gradient: "from-[#E8D5C4] to-[#D4C4B0]" 
              },
              { 
                icon: Heart, 
                title: "Meaningful Quotes", 
                desc: "Discover passages that resonate, automatically highlighted for deeper reflection",
                gradient: "from-[#E8D5E0] to-[#D4C4D0]" 
              },
              { 
                icon: Leaf, 
                title: "Growing Insights", 
                desc: "Watch your understanding flourish with AI-powered analysis and connections",
                gradient: "from-[#D5E8D4] to-[#C4E0C2]" 
              }
            ].map((feature, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                whileHover={{ y: -8 }}
                className="group"
              >
                <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg shadow-[#9B8B7E]/5 hover:shadow-xl hover:shadow-[#9B8B7E]/10 transition-all duration-500 h-full">
                  <div className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="w-7 h-7 text-[#5D5A56]" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-serif-soft text-2xl font-medium text-[#3D3A36] mb-4">
                    {feature.title}
                  </h3>
                  <p className="font-sans-soft text-[#8B8680] leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-8 relative">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white/60 backdrop-blur-sm rounded-[3rem] p-12 md:p-16 shadow-xl shadow-[#9B8B7E]/10">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div 
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-1 mb-6">
                  {[1,2,3,4,5].map((star) => (
                    <Star key={star} className="w-5 h-5 fill-[#E8C87A] text-[#E8C87A]" />
                  ))}
                </div>
                <blockquote className="font-serif-soft text-2xl md:text-3xl text-[#3D3A36] italic leading-relaxed mb-8">
                  "Ratio Reader has transformed how I approach academic reading. 
                  It feels like having a gentle guide through complex texts."
                </blockquote>
                <div className="font-sans-soft text-[#8B8680]">
                  <div className="font-semibold text-[#5D5A56]">Emily Watson</div>
                  <div>PhD Candidate, Stanford University</div>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="grid grid-cols-2 gap-6"
              >
                {[
                  { value: "50K+", label: "Happy readers" },
                  { value: "2M+", label: "Documents processed" },
                  { value: "4.9", label: "Average rating" },
                  { value: "89%", label: "Time saved" }
                ].map((stat, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                    className="bg-gradient-to-br from-[#FDF8F3] to-[#F9F1EB] rounded-2xl p-6 text-center"
                  >
                    <div className="font-serif-soft text-4xl font-semibold text-[#9B8B7E]">{stat.value}</div>
                    <div className="font-sans-soft text-sm text-[#8B8680] mt-1">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-8 relative">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif-soft text-4xl md:text-6xl font-medium text-[#3D3A36] mb-8">
              Ready to <span className="italic text-[#9B8B7E]">begin</span>?
            </h2>
            <p className="font-sans-soft text-xl text-[#8B8680] mb-12 max-w-xl mx-auto">
              Join thousands of readers who have found a gentler way to understand their documents.
            </p>
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-gradient-to-r from-[#9B8B7E] to-[#7A6B5E] text-white font-sans-soft font-medium text-lg px-12 py-5 rounded-full shadow-xl shadow-[#9B8B7E]/30 hover:shadow-2xl hover:shadow-[#9B8B7E]/40 transition-all duration-300"
            >
              Start Reading — It's Free
            </motion.button>
          </motion.div>
        </div>
      </section>

      <footer className="py-12 px-8 border-t border-[#E8D5C4]">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-br from-[#9B8B7E] to-[#7A6B5E] rounded-xl flex items-center justify-center">
              <BookOpen className="w-4 h-4 text-white" strokeWidth={1.5} />
            </div>
            <span className="font-serif-soft text-lg font-medium text-[#5D5A56]">RatioReader</span>
          </div>
          <div className="font-sans-soft text-sm text-[#8B8680]">
            Made with care © 2024
          </div>
        </div>
      </footer>
    </div>
  );
}
