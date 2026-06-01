import { motion } from "framer-motion";
import { FileUp, Lightbulb, Quote } from "lucide-react";

export default function Design1() {
  return (
    <div className="min-h-screen bg-white text-black font-mono">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;700&display=swap');
        .font-mono { font-family: 'IBM Plex Mono', monospace; }
      `}</style>
      
      <div className="border-4 border-black min-h-screen flex flex-col">
        <header className="border-b-4 border-black p-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex justify-between items-center"
          >
            <h1 className="text-4xl font-bold tracking-tighter">RATIO</h1>
            <span className="text-xs uppercase tracking-widest border border-black px-3 py-1">
              Reader
            </span>
          </motion.div>
        </header>

        <main className="flex-1 p-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="max-w-6xl mx-auto"
          >
            <div className="grid grid-cols-12 gap-8">
              <div className="col-span-12 md:col-span-7">
                <motion.h2
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="text-7xl md:text-8xl font-bold leading-none tracking-tighter mb-6"
                >
                  READ<br />
                  <span className="border-t-4 border-black pt-2 inline-block">SMART</span>
                </motion.h2>
                
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="text-xl mb-8 max-w-md"
                >
                  Transform PDFs into distilled insight. One upload, infinite understanding.
                </motion.p>

                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.7 }}
                  className="flex gap-4"
                >
                  <button className="bg-black text-white px-8 py-4 font-bold hover:bg-gray-800 transition-colors">
                    UPLOAD PDF
                  </button>
                  <button className="border-2 border-black px-8 py-4 font-bold hover:bg-black hover:text-white transition-colors">
                    WATCH DEMO
                  </button>
                </motion.div>
              </div>

              <div className="col-span-12 md:col-span-5">
                <div className="border-4 border-black p-6 bg-gray-50">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <FileUp className="w-6 h-6 mt-1" />
                      <div>
                        <h3 className="font-bold text-lg">Summarize</h3>
                        <p className="text-sm">Extract key points in seconds</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Lightbulb className="w-6 h-6 mt-1" />
                      <div>
                        <h3 className="font-bold text-lg">Insights</h3>
                        <p className="text-sm">AI-powered understanding aids</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Quote className="w-6 h-6 mt-1" />
                      <div>
                        <h3 className="font-bold text-lg">Quotes</h3>
                        <p className="text-sm">Important excerpts highlighted</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="mt-24 border-t-4 border-black pt-8"
            >
              <div className="grid grid-cols-3 gap-8 text-center">
                <div>
                  <span className="text-5xl font-bold">98%</span>
                  <p className="text-xs uppercase tracking-widest mt-2">Accuracy</p>
                </div>
                <div>
                  <span className="text-5xl font-bold">30s</span>
                  <p className="text-xs uppercase tracking-widest mt-2">Processing</p>
                </div>
                <div>
                  <span className="text-5xl font-bold">∞</span>
                  <p className="text-xs uppercase tracking-widest mt-2">Insights</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </main>

        <footer className="border-t-4 border-black p-8">
          <div className="flex justify-between items-center text-xs uppercase tracking-widest">
            <span>RATIO READER © 2026</span>
            <span>MAKE READING EFFORTLESS</span>
          </div>
        </footer>
      </div>
    </div>
  );
}