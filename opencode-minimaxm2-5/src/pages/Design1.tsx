import { motion } from "motion/react";
import { Sparkles, Quote, Lightbulb, ArrowRight, FileText, Eye } from "lucide-react";

export default function Design1() {
  const features = [
    { icon: Sparkles, title: "AI Summaries", desc: "Instantly get concise summaries of any PDF" },
    { icon: Quote, title: "Key Quotes", desc: "Discover the most impactful passages" },
    { icon: Lightbulb, title: "Smart Hints", desc: "Get contextual insights and explanations" },
    { icon: Eye, title: "Better Understanding", desc: "Grasp complex concepts with ease" },
  ];

  const stats = [
    { number: "10K+", label: "Documents Processed" },
    { number: "50K+", label: "Happy Readers" },
    { number: "99%", label: "Accuracy Rate" },
  ];

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#1A1A1A] font-serif">
      <header className="border-b border-[#E8E4DD] py-6 px-8 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-[#1A1A1A] text-[#FDFBF7] flex items-center justify-center text-xl font-bold">R</div>
          <span className="text-2xl font-light tracking-wide">Ratio</span>
        </div>
        <nav className="flex gap-8 text-sm tracking-widest uppercase">
          <a href="#features" className="hover:opacity-60 transition-opacity">Features</a>
          <a href="#how-it-works" className="hover:opacity-60 transition-opacity">How It Works</a>
          <a href="#pricing" className="hover:opacity-60 transition-opacity">Pricing</a>
        </nav>
        <button className="bg-[#1A1A1A] text-[#FDFBF7] px-6 py-3 text-sm tracking-widest uppercase hover:bg-[#333] transition-colors">
          Get Started
        </button>
      </header>

      <section className="py-24 px-8 border-b border-[#E8E4DD]">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-12 gap-8"
          >
            <div className="col-span-7">
              <p className="text-xs tracking-[0.3em] uppercase text-[#666] mb-6">Introducing</p>
              <h1 className="text-7xl font-light leading-[1.1] mb-8">
                Read Smarter,<br />
                <span className="italic font-normal">Not Harder</span>
              </h1>
              <p className="text-lg text-[#666] max-w-md mb-10 leading-relaxed">
                Transform any PDF into actionable insights. Get summaries, quotes, and hints that help you understand content faster and deeper.
              </p>
              <div className="flex gap-4">
                <button className="bg-[#1A1A1A] text-[#FDFBF7] px-8 py-4 text-sm tracking-widest uppercase flex items-center gap-3 hover:bg-[#333] transition-colors">
                  Upload PDF <ArrowRight size={16} />
                </button>
                <button className="border border-[#1A1A1A] px-8 py-4 text-sm tracking-widest uppercase hover:bg-[#1A1A1A] hover:text-[#FDFBF7] transition-colors">
                  See Demo
                </button>
              </div>
            </div>
            <div className="col-span-5 relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="bg-[#1A1A1A] aspect-[3/4] rounded-sm p-8 text-[#FDFBF7] relative overflow-hidden"
              >
                <div className="absolute top-4 left-4 right-4 h-px bg-[#333]" />
                <div className="mt-8 mb-6">
                  <p className="text-xs tracking-widest uppercase text-[#666] mb-2">Summary</p>
                  <p className="text-sm leading-relaxed">The document explores the fundamental principles of machine learning, focusing on neural networks and their applications in modern AI systems...</p>
                </div>
                <div className="mb-6">
                  <p className="text-xs tracking-widest uppercase text-[#666] mb-2">Key Quote</p>
                  <p className="text-lg italic font-light">"Neural networks are inspired by the biological neural networks in animal brains."</p>
                </div>
                <div className="bg-[#FDFBF7] text-[#1A1A1A] p-4 rounded-sm">
                  <p className="text-xs tracking-widest uppercase mb-1">💡 Hint</p>
                  <p className="text-sm">This relates to deep learning architectures used in ChatGPT and similar models.</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="features" className="py-24 px-8 border-b border-[#E8E4DD]">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs tracking-[0.3em] uppercase text-[#666] mb-4 text-center">Features</p>
          <h2 className="text-5xl font-light text-center mb-16">Everything you need to understand any document</h2>
          <div className="grid grid-cols-4 gap-8">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="w-12 h-12 border border-[#1A1A1A] flex items-center justify-center mb-6 group-hover:bg-[#1A1A1A] group-hover:text-[#FDFBF7] transition-colors">
                  <feature.icon size={20} />
                </div>
                <h3 className="text-xl font-normal mb-3">{feature.title}</h3>
                <p className="text-[#666] text-sm leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-8 bg-[#1A1A1A] text-[#FDFBF7]">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-3 gap-16 text-center">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <p className="text-6xl font-light mb-2">{stat.number}</p>
                <p className="text-xs tracking-[0.2em] uppercase text-[#666]">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="how-it-works" className="py-24 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs tracking-[0.3em] uppercase text-[#666] mb-4">How It Works</p>
              <h2 className="text-5xl font-light mb-8">Three simple steps to understanding</h2>
              <div className="space-y-8">
                {[
                  { num: "01", title: "Upload your PDF", desc: "Drag and drop any PDF document" },
                  { num: "02", title: "AI analyzes content", desc: "Our AI extracts key information" },
                  { num: "03", title: "Get insights instantly", desc: "Receive summaries, quotes, and hints" },
                ].map((step, i) => (
                  <motion.div
                    key={step.num}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.15, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="flex gap-6"
                  >
                    <span className="text-xs tracking-widest text-[#666]">{step.num}</span>
                    <div>
                      <h4 className="text-lg font-normal mb-1">{step.title}</h4>
                      <p className="text-sm text-[#666]">{step.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, rotate: 2 }}
              whileInView={{ opacity: 1, rotate: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-[#F5F0E8] aspect-square p-12 relative"
            >
              <div className="absolute inset-8 border border-[#1A1A1A]" />
              <div className="relative z-10 h-full flex flex-col justify-center">
                <FileText size={48} className="mb-6 text-[#1A1A1A]" />
                <p className="text-sm tracking-widest uppercase mb-2">Sample Analysis</p>
                <p className="text-2xl font-light leading-relaxed">
                  "The key insight is that <span className="italic">attention mechanisms</span> allow models to focus on relevant parts of the input..."
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 px-8 border-t border-[#E8E4DD]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-light mb-8">Ready to transform your reading?</h2>
          <p className="text-[#666] text-lg mb-10 max-w-lg mx-auto">
            Join thousands of researchers, students, and professionals who use Ratio to understand documents faster.
          </p>
          <button className="bg-[#1A1A1A] text-[#FDFBF7] px-10 py-5 text-sm tracking-widest uppercase flex items-center gap-3 mx-auto hover:bg-[#333] transition-colors">
            Start Free Trial <ArrowRight size={16} />
          </button>
        </div>
      </section>

      <footer className="py-12 px-8 border-t border-[#E8E4DD]">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
            <span className="text-xl font-light">Ratio</span>
          </div>
          <p className="text-xs text-[#666] tracking-widest">© 2025 Ratio Reader. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
