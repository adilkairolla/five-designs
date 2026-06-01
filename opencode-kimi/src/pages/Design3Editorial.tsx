import { motion } from "framer-motion";
import { Sparkles, Quote, Lightbulb, ArrowRight, BookOpen, Bookmark, Share2 } from "lucide-react";

export default function Design3Editorial() {
  return (
    <div className="design-3 min-h-screen bg-[#faf9f6] text-[#2c2c2c] overflow-x-hidden" style={{ fontFamily: "var(--font-cormorant)" }}>
      {/* Elegant Header */}
      <motion.header
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="fixed top-0 left-0 right-0 z-40 bg-[#faf9f6]/95 backdrop-blur-sm border-b border-[#2c2c2c]/10"
      >
        <div className="max-w-7xl mx-auto px-8 py-6 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <span className="text-2xl font-light tracking-widest">Ratio Reader</span>
          </div>
          <nav className="hidden md:flex gap-12">
            {["Features", "Journal", "About"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-sm tracking-widest text-[#2c2c2c]/60 hover:text-[#c41e3a] transition-colors uppercase"
              >
                {item}
              </a>
            ))}
          </nav>
          <button className="text-sm tracking-widest border-b border-[#2c2c2c] pb-1 hover:text-[#c41e3a] hover:border-[#c41e3a] transition-colors uppercase">
            Subscribe
          </button>
        </div>
      </motion.header>

      {/* Hero Section - Editorial Style */}
      <section className="pt-40 pb-20 px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="grid lg:grid-cols-12 gap-12 items-end"
          >
            <div className="lg:col-span-7">
              <span className="text-sm tracking-[0.3em] text-[#c41e3a] uppercase mb-6 block">The Art of Reading</span>
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-light leading-[0.95] mb-8">
                Understanding
                <br />
                <span className="italic">Made</span> Beautiful
              </h1>
              <p className="text-xl leading-relaxed text-[#2c2c2c]/70 max-w-xl mb-10" style={{ fontFamily: "var(--font-dm-sans)" }}>
                Transform dense documents into elegant summaries. Discover insights, 
                collect quotes, and deepen your understanding with contextual guidance 
                that feels like a conversation with a brilliant friend.
              </p>
              <div className="flex flex-wrap gap-6" style={{ fontFamily: "var(--font-dm-sans)" }}>
                <button className="group flex items-center gap-3 text-sm tracking-widest uppercase">
                  Begin Reading
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                </button>
                <button className="text-sm tracking-widest text-[#2c2c2c]/60 uppercase hover:text-[#c41e3a] transition-colors">
                  Explore Features
                </button>
              </div>
            </div>
            <div className="lg:col-span-5">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.3 }}
                className="relative"
              >
                <div className="aspect-[4/5] bg-gradient-to-br from-[#f0ede8] to-[#e8e4dc] rounded-sm relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center p-8">
                      <Quote className="w-12 h-12 mx-auto mb-6 text-[#c41e3a] opacity-40" />
                      <p className="text-2xl italic leading-relaxed text-[#2c2c2c]/80">
                        "The greatest minds discuss ideas. 
                        Average minds discuss events. 
                        Small minds discuss people."
                      </p>
                      <p className="mt-6 text-sm tracking-widest text-[#2c2c2c]/50 uppercase">
                        — Eleanor Roosevelt
                      </p>
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 w-8 h-8 border border-[#d4af37] rounded-full flex items-center justify-center">
                    <Bookmark className="w-4 h-4 text-[#d4af37]" />
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Editorial Grid - Features */}
      <section className="py-24 px-8 border-t border-[#2c2c2c]/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-3">
              <span className="text-sm tracking-[0.3em] text-[#c41e3a] uppercase">Features</span>
              <h2 className="text-4xl font-light mt-4 leading-tight">
                Tools for the
                <br />
                <span className="italic">Curious Mind</span>
              </h2>
            </div>
            <div className="lg:col-span-9">
              <div className="grid md:grid-cols-2 gap-px bg-[#2c2c2c]/10">
                {[
                  {
                    icon: Sparkles,
                    title: "Thoughtful Summaries",
                    desc: "Our AI doesn't just shorten—it captures the essence, preserving the author's voice and intention with elegant brevity.",
                  },
                  {
                    icon: Quote,
                    title: "Curated Quotations",
                    desc: "Automatically extract passages that resonate. Build your personal collection of wisdom from every text you encounter.",
                  },
                  {
                    icon: Lightbulb,
                    title: "Illuminating Context",
                    desc: "Complex ideas explained with grace. Receive gentle guidance through difficult concepts without losing the thread.",
                  },
                  {
                    icon: Share2,
                    title: "Elegant Sharing",
                    desc: "Export your insights in beautifully formatted documents. Share knowledge that looks as good as it reads.",
                  },
                ].map((feature, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-[#faf9f6] p-10 group hover:bg-[#f5f3ed] transition-colors"
                  >
                    <feature.icon className="w-6 h-6 text-[#c41e3a] mb-6" />
                    <h3 className="text-2xl font-light mb-4">{feature.title}</h3>
                    <p className="text-[#2c2c2c]/60 leading-relaxed" style={{ fontFamily: "var(--font-dm-sans)" }}>
                      {feature.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-32 px-8 bg-[#2c2c2c] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Quote className="w-16 h-16 mx-auto mb-8 text-[#d4af37] opacity-60" />
            <blockquote className="text-3xl md:text-4xl font-light leading-relaxed italic mb-8">
              "Reading is to the mind what exercise is to the body. 
              Ratio Reader ensures every page strengthens your understanding."
            </blockquote>
            <div className="w-16 h-px bg-[#d4af37] mx-auto mb-6" />
            <p className="text-sm tracking-[0.3em] uppercase opacity-60">The Reader's Manifesto</p>
          </motion.div>
        </div>
      </section>

      {/* Journal Section - How It Works */}
      <section className="py-24 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-sm tracking-[0.3em] text-[#c41e3a] uppercase">Process</span>
            <h2 className="text-5xl font-light mt-4">The Reading Ritual</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-16">
            {[
              {
                step: "I",
                title: "Upload",
                desc: "Present your document with a simple gesture. We accept the written word in all its digital forms.",
              },
              {
                step: "II",
                title: "Reflect",
                desc: "Our AI contemplates your text, extracting meaning and crafting summaries with scholarly care.",
              },
              {
                step: "III",
                title: "Discover",
                desc: "Receive insights presented with editorial elegance. Read, save, and share your newfound understanding.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <span className="text-6xl font-light text-[#2c2c2c]/10">{item.step}</span>
                <h3 className="text-2xl font-light mt-4 mb-4">{item.title}</h3>
                <p className="text-[#2c2c2c]/60 leading-relaxed" style={{ fontFamily: "var(--font-dm-sans)" }}>
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Subscribe CTA */}
      <section className="py-24 px-8 border-t border-[#2c2c2c]/10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <BookOpen className="w-10 h-10 mx-auto mb-6 text-[#c41e3a]" />
            <h2 className="text-4xl font-light mb-6">
              Begin Your Journey
            </h2>
            <p className="text-lg text-[#2c2c2c]/60 mb-10" style={{ fontFamily: "var(--font-dm-sans)" }}>
              Join a community of thoughtful readers who believe understanding 
              matters more than mere consumption.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center" style={{ fontFamily: "var(--font-dm-sans)" }}>
              <input
                type="email"
                placeholder="Your email address"
                className="px-6 py-4 bg-white border border-[#2c2c2c]/20 rounded-sm focus:outline-none focus:border-[#c41e3a] transition-colors w-full sm:w-80"
              />
              <button className="px-8 py-4 bg-[#2c2c2c] text-white text-sm tracking-widest uppercase hover:bg-[#c41e3a] transition-colors">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-8 border-t border-[#2c2c2c]/10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <span className="text-xl font-light tracking-widest">Ratio Reader</span>
          <div className="text-sm text-[#2c2c2c]/40" style={{ fontFamily: "var(--font-dm-sans)" }}>
            © 2024 Ratio Reader. Crafted for the love of reading.
          </div>
          <div className="flex gap-8 text-sm tracking-widest uppercase" style={{ fontFamily: "var(--font-dm-sans)" }}>
            {["Privacy", "Terms", "Contact"].map((item) => (
              <a key={item} href="#" className="text-[#2c2c2c]/60 hover:text-[#c41e3a] transition-colors">
                {item}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}