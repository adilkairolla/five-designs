import { motion } from "framer-motion";
import { FileUp, Sparkles, Quote, BookOpen } from "lucide-react";

export default function Design5() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-serif">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=Lora:wght@400;500;600&display=swap');
        .font-display { font-family: 'Playfair Display', serif; }
        .font-body { font-family: 'Lora', serif; }
      `}</style>
      
      <div className="min-h-screen flex flex-col">
        <header className="border-b border-gray-200 py-8">
          <div className="container mx-auto px-6">
            <div className="flex justify-between items-center">
              <motion.span
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="font-display text-3xl tracking-wide"
              >
                Ratio
              </motion.span>
              <nav className="hidden md:flex gap-8 font-body text-sm">
                <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Features</a>
                <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">How it works</a>
                <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Pricing</a>
              </nav>
            </div>
          </div>
        </header>

        <main className="flex-1 container mx-auto px-6 py-20">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-center mb-20"
            >
              <h1 className="font-display text-6xl md:text-7xl leading-tight mb-8 text-gray-900">
                Reading,
                <br />
                <span className="italic font-normal">reimagined</span>
              </h1>
              <p className="font-body text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                Transform the way you consume information. Upload any PDF and receive 
                distilled insights, key quotes, and contextual understanding in seconds.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="space-y-16 mb-20"
            >
              <div className="grid md:grid-cols-3 gap-12">
                <div className="text-center">
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="w-20 h-20 border border-gray-300 rounded-full flex items-center justify-center mx-auto mb-6"
                  >
                    <FileUp className="w-8 h-8 text-gray-700" />
                  </motion.div>
                  <h3 className="font-display text-xl mb-3">Upload</h3>
                  <p className="font-body text-gray-600 text-sm leading-relaxed">
                    Simply drag and drop your PDF file. Our system handles the rest.
                  </p>
                </div>

                <div className="text-center">
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="w-20 h-20 border border-gray-300 rounded-full flex items-center justify-center mx-auto mb-6"
                  >
                    <Sparkles className="w-8 h-8 text-gray-700" />
                  </motion.div>
                  <h3 className="font-display text-xl mb-3">Analyze</h3>
                  <p className="font-body text-gray-600 text-sm leading-relaxed">
                    AI processes content to extract meaning, context, and relevance.
                  </p>
                </div>

                <div className="text-center">
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.7 }}
                    className="w-20 h-20 border border-gray-300 rounded-full flex items-center justify-center mx-auto mb-6"
                  >
                    <BookOpen className="w-8 h-8 text-gray-700" />
                  </motion.div>
                  <h3 className="font-display text-xl mb-3">Understand</h3>
                  <p className="font-body text-gray-600 text-sm leading-relaxed">
                    Receive curated insights tailored to your reading needs.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="border border-gray-200 rounded-lg p-10 mb-12 bg-gray-50"
            >
              <Quote className="w-10 h-10 text-gray-300 mb-4" />
              <p className="font-body text-xl italic text-gray-700 leading-relaxed mb-4">
                "The Ratio reader transformed how I approach academic papers. 
                What used to take hours now takes minutes."
              </p>
              <p className="font-body text-sm text-gray-500">
                — Dr. Sarah Chen, Research Scientist
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="text-center"
            >
              <button className="font-body px-12 py-4 border-2 border-gray-900 rounded-none hover:bg-gray-900 hover:text-white transition-all">
                Get Started
              </button>
              <p className="font-body text-xs text-gray-500 mt-4 uppercase tracking-wider">
                No credit card required
              </p>
            </motion.div>
          </div>
        </main>

        <footer className="border-t border-gray-200 py-8">
          <div className="container mx-auto px-6">
            <div className="flex justify-between items-center font-body text-xs text-gray-500">
              <span>© 2026 Ratio Reader</span>
              <span>Designed for thinkers</span>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}