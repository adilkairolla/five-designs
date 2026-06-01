import { motion } from "framer-motion";
import { FileUp, Brain, Zap, Quote } from "lucide-react";

export default function Design4() {
  return (
    <div className="min-h-screen bg-black text-green-400 font-mono relative overflow-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Share+Tech+Mono&display=swap');
        .font-display { font-family: 'Orbitron', sans-serif; }
        .font-mono { font-family: 'Share Tech Mono', monospace; }
      `}</style>
      
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(0, 255, 136, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 255, 136, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '20px 20px'
        }}></div>
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-green-400 to-transparent animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-green-400 to-transparent animate-pulse"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-20">
        <motion.header
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center mb-20"
        >
          <motion.h1
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="font-display text-7xl md:text-9xl text-green-400 mb-4 tracking-wider"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-lime-400 to-green-400">
              RATIO
            </span>
          </motion.h1>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ delay: 0.5, duration: 1 }}
            className="h-0.5 bg-gradient-to-r from-transparent via-green-400 to-transparent mx-auto mb-6"
          ></motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="font-mono text-green-400/70 text-lg"
          >
            // ARTIFICIAL INTELLIGENCE READING ASSISTANT v2.0
          </motion.p>
        </motion.header>

        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <div className="max-w-4xl mx-auto mb-20">
            <div className="border border-green-400/30 rounded-lg p-8 bg-black/50 backdrop-blur">
              <div className="text-green-400 mb-6">
                <span className="text-pink-400">const</span> <span className="text-cyan-400">ratio</span> = <span className="text-yellow-400">new</span> <span className="text-purple-400">PDFReader</span>()
              </div>
              
              <div className="space-y-6">
                <motion.div
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="flex items-start gap-4 border-l-2 border-green-400 pl-4"
                >
                  <FileUp className="w-8 h-8 text-green-400 mt-1" />
                  <div>
                    <h3 className="font-display text-xl text-green-400 mb-2">UPLOAD</h3>
                    <p className="font-mono text-sm text-green-400/70">
                      &gt; pdf.file.upload() // processing...
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.7 }}
                  className="flex items-start gap-4 border-l-2 border-lime-400 pl-4"
                >
                  <Brain className="w-8 h-8 text-lime-400 mt-1" />
                  <div>
                    <h3 className="font-display text-xl text-lime-400 mb-2">ANALYZE</h3>
                    <p className="font-mono text-sm text-green-400/70">
                      &gt; ai.extract.meaning() // analyzing...
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.8 }}
                  className="flex items-start gap-4 border-l-2 border-emerald-400 pl-4"
                >
                  <Zap className="w-8 h-8 text-emerald-400 mt-1" />
                  <div>
                    <h3 className="font-display text-xl text-emerald-400 mb-2">INSIGHTS</h3>
                    <p className="font-mono text-sm text-green-400/70">
                      &gt; insights.generate() // complete // 98% accuracy
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.9 }}
                  className="flex items-start gap-4 border-l-2 border-teal-400 pl-4"
                >
                  <Quote className="w-8 h-8 text-teal-400 mt-1" />
                  <div>
                    <h3 className="font-display text-xl text-teal-400 mb-2">QUOTES</h3>
                    <p className="font-mono text-sm text-green-400/70">
                      &quot;The best code is no code at all.&quot; (highlighted)
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1 }}
            className="text-center space-y-6"
          >
            <div className="flex flex-wrap justify-center gap-6">
              <div className="px-6 py-3 border border-green-400 rounded hover:bg-green-400 hover:text-black transition-all cursor-pointer">
                [UPLOAD PDF]
              </div>
              <div className="px-6 py-3 border border-lime-400 rounded hover:bg-lime-400 hover:text-black transition-all cursor-pointer">
                [VIEW DEMO]
              </div>
              <div className="px-6 py-3 border border-emerald-400 rounded hover:bg-emerald-400 hover:text-black transition-all cursor-pointer">
                [API DOCS]
              </div>
            </div>

            <div className="font-mono text-xs text-green-400/50">
              <span className="text-pink-400">/**</span><br />
              <span className="text-cyan-400"> * </span>Transform reading into understanding<br />
              <span className="text-pink-400"> */</span>
            </div>
          </motion.div>
        </motion.main>
      </div>
    </div>
  );
}