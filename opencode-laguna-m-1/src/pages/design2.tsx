import { motion } from "framer-motion";
import { FileUp, Brain, BookOpen, Quote } from "lucide-react";

export default function Design2() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50 text-stone-800 font-serif relative overflow-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;600;700&family=Work+Sans:wght@300;400;500&display=swap');
        .font-serif { font-family: 'Cormorant Garamond', serif; }
        .font-sans { font-family: 'Work Sans', sans-serif; }
      `}</style>
      
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0,20 Q25,10 50,20 T100,20 L100,0 Z" fill="#fb923c" />
          <path d="M0,50 Q25,40 50,50 T100,50 L100,30 Z" fill="#f59e0b" />
          <path d="M0,80 Q25,70 50,80 T100,80 L100,60 Z" fill="#ec4899" />
        </svg>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-16">
        <motion.header
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block mb-8"
          >
            <span className="text-6xl md:text-8xl font-serif font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-700 via-orange-600 to-rose-700">
              Ratio
            </span>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-stone-600 max-w-2xl mx-auto leading-relaxed"
          >
            Like sunlight filtering through leaves, we illuminate what matters most in your documents.
          </motion.p>
        </motion.header>

        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="max-w-5xl mx-auto"
        >
          <div className="grid md:grid-cols-2 gap-12 mb-20">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-amber-200"
            >
              <FileUp className="w-12 h-12 text-amber-700 mb-4" />
              <h3 className="font-serif text-2xl font-bold mb-3">Upload & Transform</h3>
              <p className="text-stone-600 leading-relaxed">
                Drop your PDF and watch as artificial intelligence extracts wisdom from pages of text, 
                distilling complexity into clarity.
              </p>
              <div className="mt-6 h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent"></div>
            </motion.div>

            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-orange-200"
            >
              <Brain className="w-12 h-12 text-orange-700 mb-4" />
              <h3 className="font-serif text-2xl font-bold mb-3">AI Understanding</h3>
              <p className="text-stone-600 leading-relaxed">
                Our system comprehends context, identifies key themes, and surfaces insights 
                you might have overlooked.
              </p>
              <div className="mt-6 h-1 bg-gradient-to-r from-transparent via-orange-400 to-transparent"></div>
            </motion.div>

            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-rose-200"
            >
              <BookOpen className="w-12 h-12 text-rose-700 mb-4" />
              <h3 className="font-serif text-2xl font-bold mb-3">Key Insights</h3>
              <p className="text-stone-600 leading-relaxed">
                Get actionable summaries, critical quotes, and contextual hints that accelerate 
                your comprehension.
              </p>
              <div className="mt-6 h-1 bg-gradient-to-r from-transparent via-rose-400 to-transparent"></div>
            </motion.div>

            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-amber-200"
            >
              <Quote className="w-12 h-12 text-amber-700 mb-4" />
              <h3 className="font-serif text-2xl font-bold mb-3">Extract Quotes</h3>
              <p className="text-stone-600 leading-relaxed">
                Never lose a crucial passage. Our system highlights and extracts the most 
                significant quotes from your documents.
              </p>
              <div className="mt-6 h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent"></div>
            </motion.div>
          </div>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="text-center"
          >
            <button className="px-12 py-5 bg-gradient-to-r from-amber-700 to-orange-700 text-white rounded-full font-sans font-medium text-lg shadow-2xl hover:shadow-3xl transition-all hover:scale-105">
              Start Reading Smarter
            </button>
          </motion.div>
        </motion.main>
      </div>
    </div>
  );
}