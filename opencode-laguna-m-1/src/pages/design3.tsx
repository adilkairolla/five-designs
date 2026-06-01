import { motion } from "framer-motion";
import { Zap, BarChart3, Quote, ArrowRight } from "lucide-react";

export default function Design3() {
  return (
    <div className="min-h-screen bg-gray-950 text-white relative overflow-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Space+Grotesk:wght@300;400;500;700&display=swap');
        .font-display { font-family: 'Bebas Neue', sans-serif; }
        .font-body { font-family: 'Space Grotesk', sans-serif; }
      `}</style>
      
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-12">
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex justify-between items-center mb-16"
        >
          <div className="font-display text-3xl tracking-wider">RATIO</div>
          <div className="flex gap-8 font-body text-sm">
            <a href="#" className="hover:text-cyan-400 transition-colors">Features</a>
            <a href="#" className="hover:text-cyan-400 transition-colors">Pricing</a>
            <a href="#" className="hover:text-cyan-400 transition-colors">Docs</a>
          </div>
        </motion.nav>

        <div className="grid lg:grid-cols-12 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-5"
          >
            <h1 className="font-display text-7xl md:text-8xl leading-none mb-6">
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                READ
              </span>
              <span className="block text-white">SMART</span>
              <span className="block text-pink-400 text-5xl md:text-6xl">FASTER</span>
            </h1>
            
            <p className="font-body text-gray-300 text-lg mb-8 max-w-md">
              Transform dense PDFs into actionable intelligence. Our AI extracts what matters, 
              highlights key insights, and delivers understanding at lightning speed.
            </p>

            <div className="flex gap-4 mb-12">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg font-body font-medium flex items-center gap-2"
              >
                Get Started <ArrowRight className="w-4 h-4" />
              </motion.button>
              <button className="px-8 py-4 border border-gray-700 rounded-lg font-body font-medium hover:bg-gray-800 transition-colors">
                Watch Demo
              </button>
            </div>

            <div className="grid grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-4xl font-bold text-cyan-400 font-display">AI</div>
                <div className="text-xs text-gray-500 uppercase tracking-wider">Powered</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-purple-400 font-display">∞</div>
                <div className="text-xs text-gray-500 uppercase tracking-wider">Insights</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-pink-400 font-display">10x</div>
                <div className="text-xs text-gray-500 uppercase tracking-wider">Faster</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-7"
          >
            <div className="relative">
              <div className="absolute -top-4 -right-4 w-72 h-72 bg-cyan-500/30 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-purple-500/30 rounded-full blur-2xl"></div>
              
              <div className="relative bg-gray-900 rounded-2xl p-6 border border-gray-800">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <span className="text-xs text-gray-500">upload.pdf</span>
                </div>

                <div className="space-y-4">
                  <div className="px-4 py-3 bg-gray-800 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-body">Key Insights</span>
                      <Zap className="w-4 h-4 text-yellow-400" />
                    </div>
                    <div className="space-y-1">
                      <div className="h-2 bg-gradient-to-r from-cyan-500 to-transparent rounded-full w-5/6"></div>
                      <div className="h-2 bg-gradient-to-r from-purple-500 to-transparent rounded-full w-4/6"></div>
                      <div className="h-2 bg-gradient-to-r from-pink-500 to-transparent rounded-full w-3/6"></div>
                    </div>
                  </div>

                  <div className="px-4 py-3 bg-gray-800 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-body">Summary</span>
                      <BarChart3 className="w-4 h-4 text-green-400" />
                    </div>
                    <div className="text-xs text-gray-400">
                      Extracted key points: 12 • Quotes highlighted: 8 • Contextual hints: 15
                    </div>
                  </div>

                  <div className="px-4 py-3 bg-gray-800 rounded-lg">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-body">Quotes</span>
                      <Quote className="w-4 h-4 text-cyan-400" />
                    </div>
                    <p className="text-xs text-gray-400 mt-2 italic">
                      "The most important insight is often hidden in plain sight..."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}