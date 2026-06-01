import { motion } from "motion/react";
import { Sparkles, Quote, Lightbulb, ArrowRight, Leaf, Sun, Droplets, FileText, BookOpen, Heart } from "lucide-react";

export default function Design3() {
  const features = [
    { icon: Sparkles, title: "Gentle Summaries", desc: "Clear, concise summaries that respect your time" },
    { icon: Quote, title: "Beautiful Quotes", desc: "Curated passages that capture the essence" },
    { icon: Lightbulb, title: "Helpful Hints", desc: "Gentle guidance to deepen understanding" },
    { icon: Heart, title: "Stress-Free", desc: "Reading made calm and enjoyable" },
  ];

  return (
    <div className="min-h-screen bg-[#F7F5F0] text-[#2D3B2D] font-sans overflow-hidden">
      <div className="fixed inset-0 pointer-events-none">
        <svg className="absolute top-0 right-0 w-[600px] h-[600px] text-[#E8E4D9]/50" viewBox="0 0 200 200">
          <path fill="currentColor" d="M44.7,-76.4C58.9,-69.2,71.8,-59.1,79.6,-46.6C87.4,-34.1,90.1,-19.2,85.9,-6.3C81.7,6.6,70.6,17.5,60.5,27.2C50.4,36.9,41.3,45.4,30.8,52.4C20.3,59.4,8.4,64.9,-3.3,71.6C-15,78.3,-30.5,86.2,-44.1,85.4C-57.7,84.6,-69.4,75.1,-77.4,63.1C-85.4,51.1,-89.7,36.6,-87.3,22.9C-84.9,9.2,-75.8,-3.7,-67.5,-14.8C-59.2,-25.9,-51.7,-35.2,-42.6,-43.5C-33.5,-51.8,-22.8,-59.1,-11.2,-66.8C0.4,-74.5,13.7,-82.6,26.5,-83.1L39.3,-83.6L44.7,-76.4Z" transform="translate(100 100)" />
        </svg>
        <svg className="absolute bottom-0 left-0 w-[400px] h-[400px] text-[#D4C9B8]/40" viewBox="0 0 200 200">
          <path fill="currentColor" d="M44.7,-76.4C58.9,-69.2,71.8,-59.1,79.6,-46.6C87.4,-34.1,90.1,-19.2,85.9,-6.3C81.7,6.6,70.6,17.5,60.5,27.2C50.4,36.9,41.3,45.4,30.8,52.4C20.3,59.4,8.4,64.9,-3.3,71.6C-15,78.3,-30.5,86.2,-44.1,85.4C-57.7,84.6,-69.4,75.1,-77.4,63.1C-85.4,51.1,-89.7,36.6,-87.3,22.9C-84.9,9.2,-75.8,-3.7,-67.5,-14.8C-59.2,-25.9,-51.7,-35.2,-42.6,-43.5C-33.5,-51.8,-22.8,-59.1,-11.2,-66.8C0.4,-74.5,13.7,-82.6,26.5,-83.1L39.3,-83.6L44.7,-76.4Z" transform="translate(100 100)" />
        </svg>
      </div>

      <header className="relative z-10 py-6 px-8 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-[#4A6741] rounded-full flex items-center justify-center">
            <Leaf className="text-white" size={20} />
          </div>
          <span className="text-2xl font-light">Ratio</span>
        </div>
        <nav className="hidden md:flex gap-8 text-sm font-medium">
          <a href="#features" className="hover:text-[#4A6741] transition-colors">Features</a>
          <a href="#about" className="hover:text-[#4A6741] transition-colors">About</a>
          <a href="#testimonials" className="hover:text-[#4A6741] transition-colors">Stories</a>
        </nav>
        <button className="bg-[#4A6741] text-white px-7 py-3 rounded-full font-medium hover:bg-[#3d5636] transition-colors">
          Get Started
        </button>
      </header>

      <section className="relative z-10 py-20 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-[#8B9A7D] font-medium mb-4">Welcome to peaceful reading</p>
              <h1 className="text-5xl md:text-6xl font-light leading-[1.2] mb-6">
                Let us help you <span className="italic text-[#4A6741]">understand</span> better
              </h1>
              <p className="text-lg text-[#6B7B6B] mb-10 leading-relaxed max-w-md">
                Ratio transforms dense PDFs into clear, digestible insights. 
                No more overwhelming pages—just gentle guidance when you need it.
              </p>
              <div className="flex gap-4">
                <button className="bg-[#4A6741] text-white px-8 py-4 rounded-full font-medium flex items-center gap-2 hover:bg-[#3d5636] transition-colors">
                  Upload PDF <ArrowRight size={18} />
                </button>
                <button className="border-2 border-[#4A6741] text-[#4A6741] px-8 py-4 rounded-full font-medium hover:bg-[#4A6741] hover:text-white transition-colors">
                  See How It Works
                </button>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="relative"
            >
              <div className="absolute -inset-6 bg-gradient-to-br from-[#D4C9B8] to-[#E8E4D9] rounded-[40px]" />
              <div className="relative bg-white rounded-[32px] p-10 shadow-xl">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-3 h-3 rounded-full bg-[#4A6741]" />
                  <div className="w-3 h-3 rounded-full bg-[#D4C9B8]" />
                  <div className="w-3 h-3 rounded-full bg-[#D4C9B8]" />
                </div>
                <div className="space-y-6">
                  <div className="bg-[#F7F5F0] p-5 rounded-2xl">
                    <div className="flex items-center gap-2 mb-2">
                      <Sparkles size={16} className="text-[#4A6741]" />
                      <p className="text-xs font-medium text-[#4A6741] uppercase tracking-wide">Summary</p>
                    </div>
                    <p className="text-sm text-[#6B7B6B]">This research explores how mindfulness practices can reduce stress and improve focus in daily life...</p>
                  </div>
                  <div className="bg-[#F7F5F0] p-5 rounded-2xl">
                    <div className="flex items-center gap-2 mb-2">
                      <Quote size={16} className="text-[#8B9A7D]" />
                      <p className="text-xs font-medium text-[#8B9A7D] uppercase tracking-wide">Key Quote</p>
                    </div>
                    <p className="text-sm italic text-[#4A6741]">"The present moment is the only moment available to us..."</p>
                  </div>
                  <div className="bg-[#4A6741] p-5 rounded-2xl">
                    <div className="flex items-center gap-2 mb-2">
                      <Lightbulb size={16} className="text-white" />
                      <p className="text-xs font-medium text-white uppercase tracking-wide">Hint</p>
                    </div>
                    <p className="text-sm text-white/90">This relates to meditation techniques used in modern wellness programs.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="features" className="relative z-10 py-24 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#8B9A7D] font-medium mb-3">Made with care</p>
            <h2 className="text-4xl font-light">Reading, reimagined</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-[#F0EBE0] rounded-full flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="text-[#4A6741]" size={24} />
                </div>
                <h3 className="text-lg font-medium mb-2">{feature.title}</h3>
                <p className="text-sm text-[#6B7B6B]">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 py-24 px-8 bg-[#4A6741] text-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-light mb-6">Designed for your peace of mind</h2>
              <p className="text-white/80 mb-8 leading-relaxed">
                We believe reading should be a joy, not a struggle. Ratio was created 
                to make complex documents accessible to everyone, without the overwhelm.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <p className="text-4xl font-light mb-2">10K+</p>
                  <p className="text-white/60 text-sm">Documents processed</p>
                </div>
                <div>
                  <p className="text-4xl font-light mb-2">50K+</p>
                  <p className="text-white/60 text-sm">Happy readers</p>
                </div>
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-sm rounded-3xl p-10"
            >
              <div className="grid grid-cols-2 gap-6">
                {[
                  { icon: Sun, label: "Clear Summaries" },
                  { icon: Droplets, label: "Key Insights" },
                  { icon: Leaf, label: "Easy Quotes" },
                  { icon: BookOpen, label: "Better Learning" },
                ].map((item) => (
                  <div key={item.label} className="text-center">
                    <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-3">
                      <item.icon size={24} />
                    </div>
                    <p className="text-sm">{item.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="relative z-10 py-24 px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-light mb-6">Start your gentle journey</h2>
          <p className="text-[#6B7B6B] mb-10 max-w-md mx-auto">
            Join thousands who've discovered a calmer way to read and understand documents.
          </p>
          <button className="bg-[#4A6741] text-white px-10 py-4 rounded-full font-medium inline-flex items-center gap-2 hover:bg-[#3d5636] transition-colors">
            Try Ratio Free <ArrowRight size={18} />
          </button>
        </div>
      </section>

      <footer className="relative z-10 py-12 px-8 border-t border-[#E8E4D9]">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#4A6741] rounded-full flex items-center justify-center">
              <Leaf className="text-white" size={18} />
            </div>
            <span className="text-xl font-light">Ratio</span>
          </div>
          <p className="text-[#8B9A7D] text-sm">© 2025 Ratio Reader. Made with care.</p>
        </div>
      </footer>
    </div>
  );
}
