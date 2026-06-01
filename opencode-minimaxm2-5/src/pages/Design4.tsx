import { motion } from "motion/react";
import { Sparkles, Quote, Lightbulb, ArrowRight } from "lucide-react";

export default function Design4() {
  return (
    <div className="min-h-screen bg-white text-black font-sans overflow-x-hidden">
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
          opacity: 0.03
        }} />
      </div>

      <header className="relative z-10 border-b-4 border-black py-6 px-8 flex justify-between items-center bg-white">
        <div className="flex items-center gap-0">
          <div className="w-14 h-14 bg-black text-white flex items-center justify-center text-2xl font-black">R</div>
          <span className="text-3xl font-black tracking-tighter ml-2">RATIO</span>
        </div>
        <nav className="hidden md:flex gap-0 font-bold text-sm">
          {['FEATURES', 'HOW', 'PRICING', 'FAQ'].map((item) => (
            <a key={item} href="#" className="px-6 py-3 border-l-2 border-black hover:bg-black hover:text-white transition-colors">
              {item}
            </a>
          ))}
        </nav>
        <button className="bg-[#FF3D00] text-white px-8 py-4 font-black text-sm uppercase tracking-wider hover:bg-black transition-colors">
          Get Started
        </button>
      </header>

      <section className="relative z-10 py-24 px-8 bg-black text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-block bg-[#FF3D00] text-white px-4 py-2 font-bold text-xs mb-8">
                NEW VERSION 2.0
              </div>
              <h1 className="text-7xl md:text-8xl font-black leading-[0.9] mb-8">
                READ<br/>
                ANYTHING<br/>
                <span className="text-[#FF3D00]">FASTER</span>
              </h1>
              <p className="text-xl font-bold mb-10 text-gray-400 max-w-md">
                Upload PDF. Get instant summary, quotes, and insights. 
                No fluff. Just results.
              </p>
              <div className="flex flex-col sm:flex-row gap-0">
                <button className="bg-white text-black px-10 py-6 font-black text-lg uppercase tracking-wider hover:bg-[#FF3D00] hover:text-white transition-colors flex items-center justify-center gap-3">
                  Upload PDF <ArrowRight size={20} />
                </button>
                <button className="border-2 border-white text-white px-10 py-6 font-black text-lg uppercase tracking-wider hover:bg-white hover:text-black transition-colors">
                  Demo
                </button>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="relative"
            >
              <div className="absolute -top-4 -left-4 w-24 h-24 border-4 border-[#FF3D00]" />
              <div className="bg-[#FF3D00] p-8 text-white">
                <div className="border-2 border-white p-6">
                  <div className="flex justify-between items-center mb-6">
                    <span className="font-black text-xs tracking-wider">DOCUMENT ANALYSIS</span>
                    <div className="flex gap-2">
                      <div className="w-3 h-3 bg-white" />
                      <div className="w-3 h-3 bg-white/50" />
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-white text-black p-4">
                      <p className="font-black text-xs mb-1">SUMMARY</p>
                      <p className="text-sm font-bold">The study examines the impact of AI on modern workforce productivity...</p>
                    </div>
                    <div className="border-2 border-white p-4">
                      <p className="font-black text-xs mb-1 text-[#FF3D00]">KEY QUOTE</p>
                      <p className="text-sm font-bold">"Artificial intelligence will transform every industry..."</p>
                    </div>
                    <div className="bg-black text-white p-4">
                      <p className="font-black text-xs mb-1">HINT</p>
                      <p className="text-sm">Related to: Automation, Future of Work, Tech Trends</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="relative z-10 py-24 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="border-4 border-black p-12">
            <h2 className="text-5xl md:text-6xl font-black text-center mb-4">WHAT YOU GET</h2>
            <p className="text-center font-bold text-gray-600 mb-16">No BS. Just value.</p>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: Sparkles, title: "SUMMARIES", desc: "AI-powered instant summaries of any PDF document" },
                { icon: Quote, title: "QUOTES", desc: "Extract the most important passages automatically" },
                { icon: Lightbulb, title: "HINTS", desc: "Get contextual insights to understand faster" },
              ].map((feature, i) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="bg-black text-white p-8"
                >
                  <feature.icon size={40} className="mb-6 text-[#FF3D00]" />
                  <h3 className="font-black text-xl mb-3">{feature.title}</h3>
                  <p className="font-bold text-gray-400">{feature.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 py-24 px-8 bg-[#FF3D00] text-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl font-black mb-8">HOW IT WORKS</h2>
              <div className="space-y-6">
                {[
                  { num: '01', title: 'DROP YOUR PDF', desc: 'Drag and drop any document' },
                  { num: '02', title: 'WAIT 2 SECONDS', desc: 'Our AI does the heavy lifting' },
                  { num: '03', title: 'GET INSIGHTS', desc: 'Summary, quotes, hints - done' },
                ].map((step) => (
                  <div key={step.num} className="flex gap-6 items-start">
                    <span className="text-4xl font-black text-black">{step.num}</span>
                    <div>
                      <h4 className="font-black text-xl">{step.title}</h4>
                      <p className="font-bold opacity-80">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <motion.div
              initial={{ rotate: 5 }}
              whileInView={{ rotate: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white text-black p-8 border-4 border-black"
            >
              <div className="font-mono text-sm mb-6">
                <p className="mb-2">$ ratio analyze document.pdf</p>
                <p className="text-[#FF3D00]">{'&gt;'} Processing...</p>
                <p className="text-[#FF3D00]">{'&gt;'} Generating summary...</p>
                <p className="text-[#FF3D00]">{'&gt;'} Extracting quotes...</p>
                <p className="text-[#FF3D00]">{'&gt;'} Creating hints...</p>
                <p className="mt-2">✓ Complete in 1.2s</p>
              </div>
              <div className="bg-black text-white p-4 font-mono text-xs">
                <p>✓ Summary generated</p>
                <p>✓ 5 key quotes found</p>
                <p>✓ 3 contextual hints</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="relative z-10 py-24 px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-black mb-8">START NOW</h2>
          <p className="text-xl font-bold mb-10">Join 10,000+ people who read smarter</p>
          <button className="bg-black text-white px-16 py-6 font-black text-xl uppercase tracking-wider hover:bg-[#FF3D00] transition-colors">
            Try Free
          </button>
        </div>
      </section>

      <footer className="relative z-10 py-12 px-8 border-t-4 border-black">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-0">
            <div className="w-12 h-12 bg-black text-white flex items-center justify-center text-xl font-black">R</div>
            <span className="text-2xl font-black tracking-tighter ml-2">RATIO</span>
          </div>
          <p className="font-bold text-sm">© 2025 RATIO READER. ALL RIGHTS RESERVED.</p>
        </div>
      </footer>
    </div>
  );
}
