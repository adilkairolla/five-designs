import { motion } from "framer-motion";
import { Sparkles, Quote, Lightbulb, Upload, ArrowRight, BookOpen, Heart, Leaf, Coffee, Sun } from "lucide-react";

export default function Design5Organic() {
  return (
    <div className="design-5 min-h-screen bg-[#fef9f3] text-[#3d3d3d] overflow-x-hidden" style={{ fontFamily: "var(--font-dm-sans)" }}>
      {/* Organic Background Shapes */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 right-20 w-64 h-64 bg-[#e07a5f]/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            y: [0, 20, 0],
            rotate: [0, -5, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-40 left-20 w-80 h-80 bg-[#81b29a]/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            y: [0, -15, 0],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 4 }}
          className="absolute top-1/2 right-1/3 w-72 h-72 bg-[#f2cc8f]/10 rounded-full blur-3xl"
        />
      </div>

      {/* Soft Navigation */}
      <motion.header
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 left-0 right-0 z-40 bg-[#fef9f3]/80 backdrop-blur-md"
      >
        <div className="max-w-6xl mx-auto px-8 py-6 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#e07a5f] rounded-full flex items-center justify-center">
              <BookOpen className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-medium text-[#3d3d3d]">Ratio Reader</span>
          </div>
          <nav className="hidden md:flex gap-8">
            {["Features", "How it Works", "Pricing"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-sm text-[#3d3d3d]/70 hover:text-[#e07a5f] transition-colors"
              >
                {item}
              </a>
            ))}
          </nav>
          <button className="px-6 py-2.5 bg-[#81b29a] text-white text-sm font-medium rounded-full hover:bg-[#6b9b82] transition-colors">
            Get Started
          </button>
        </div>
      </motion.header>

      {/* Hero Section */}
      <section className="relative pt-40 pb-24 px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#81b29a]/10 rounded-full mb-8"
            >
              <Leaf className="w-4 h-4 text-[#81b29a]" />
              <span className="text-sm text-[#81b29a]">Gentle on the mind</span>
            </motion.div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-medium text-[#3d3d3d] mb-8 leading-tight">
              Reading that
              <br />
              <span className="text-[#e07a5f]">feels natural</span>
            </h1>

            <p className="text-lg text-[#3d3d3d]/70 mb-10 max-w-2xl mx-auto leading-relaxed">
              Transform overwhelming documents into calm, digestible insights. 
              Like a warm cup of tea for your mind, Ratio Reader makes learning 
              feel effortless and peaceful.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <button className="group flex items-center gap-3 px-8 py-4 bg-[#e07a5f] text-white rounded-full font-medium hover:bg-[#d56a50] transition-colors">
                <Upload className="w-5 h-5" />
                Upload your PDF
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="flex items-center gap-3 px-8 py-4 bg-white text-[#3d3d3d] rounded-full font-medium border border-[#3d3d3d]/10 hover:border-[#e07a5f] transition-colors">
                <Coffee className="w-5 h-5" />
                See how it works
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Warm Features Cards */}
      <section className="py-20 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Sparkles,
                title: "Gentle Summaries",
                desc: "Complex ideas made simple and warm",
                color: "bg-[#e07a5f]",
              },
              {
                icon: Quote,
                title: "Meaningful Quotes",
                desc: "Words that touch your heart",
                color: "bg-[#81b29a]",
              },
              {
                icon: Lightbulb,
                title: "Soft Guidance",
                desc: "Hints that illuminate without overwhelming",
                color: "bg-[#f2cc8f]",
              },
              {
                icon: Heart,
                title: "Mindful Reading",
                desc: "Preserve your mental energy",
                color: "bg-[#e07a5f]",
              },
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="group bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <div className={`w-14 h-14 ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-medium text-[#3d3d3d] mb-3">{feature.title}</h3>
                <p className="text-[#3d3d3d]/60 text-sm leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Cozy Process Section */}
      <section className="py-24 px-8 bg-white/50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-sm text-[#81b29a] font-medium mb-4 block">Simple Process</span>
            <h2 className="text-4xl md:text-5xl font-medium text-[#3d3d3d]">Three gentle steps</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                icon: Upload,
                title: "Share your document",
                desc: "Upload any PDF, just like sharing a photo with a friend. No complications, no stress.",
              },
              {
                step: "2",
                icon: Sun,
                title: "Let it breathe",
                desc: "Our AI gently processes your text, finding the essence without rushing. Take a moment.",
              },
              {
                step: "3",
                icon: BookOpen,
                title: "Enjoy the clarity",
                desc: "Receive a beautifully crafted summary that feels like a warm conversation.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                viewport={{ once: true }}
                className="relative text-center"
              >
                <div className="w-20 h-20 bg-[#fef9f3] rounded-full flex items-center justify-center mx-auto mb-6">
                  <item.icon className="w-8 h-8 text-[#e07a5f]" />
                </div>
                <span className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-8 bg-[#e07a5f] text-white rounded-full flex items-center justify-center text-sm font-medium">
                  {item.step}
                </span>
                <h3 className="text-xl font-medium text-[#3d3d3d] mb-4">{item.title}</h3>
                <p className="text-[#3d3d3d]/60 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-24 px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-[#81b29a]/10 rounded-[2.5rem] p-12 md:p-16 text-center relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#e07a5f]/5 to-transparent" />
            <div className="relative">
              <Quote className="w-12 h-12 mx-auto mb-8 text-[#e07a5f]" />
              <blockquote className="text-2xl md:text-3xl text-[#3d3d3d] leading-relaxed mb-8 font-light">
                "Ratio Reader has transformed how I approach dense research papers. 
                It feels like having a patient, knowledgeable friend who helps me 
                understand without ever making me feel overwhelmed."
              </blockquote>
              <div className="flex items-center justify-center gap-4">
                <div className="w-12 h-12 bg-[#e07a5f] rounded-full" />
                <div className="text-left">
                  <div className="font-medium text-[#3d3d3d]">Sarah Mitchell</div>
                  <div className="text-sm text-[#3d3d3d]/60">Graduate Student</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Warm CTA */}
      <section className="py-24 px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="bg-gradient-to-br from-[#e07a5f] to-[#d56a50] rounded-[2.5rem] p-12 md:p-16 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#f2cc8f]/20 rounded-full blur-2xl" />
            <div className="relative">
              <h2 className="text-4xl md:text-5xl font-medium mb-6">
                Ready to read with ease?
              </h2>
              <p className="text-lg text-white/80 mb-10 max-w-xl mx-auto">
                Join thousands of readers who have discovered a gentler way to learn. 
                Your first document is free.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button className="px-8 py-4 bg-white text-[#e07a5f] rounded-full font-medium hover:bg-[#fef9f3] transition-colors">
                  Start Free Trial
                </button>
                <button className="px-8 py-4 bg-white/20 text-white rounded-full font-medium hover:bg-white/30 transition-colors">
                  View Plans
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-8 bg-white">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#e07a5f] rounded-full flex items-center justify-center">
              <BookOpen className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-medium text-[#3d3d3d]">Ratio Reader</span>
          </div>
          <div className="text-sm text-[#3d3d3d]/50">
            © 2024 Ratio Reader. Made with warmth.
          </div>
          <div className="flex gap-8 text-sm">
            {["Privacy", "Terms", "Contact"].map((item) => (
              <a key={item} href="#" className="text-[#3d3d3d]/70 hover:text-[#e07a5f] transition-colors">
                {item}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}