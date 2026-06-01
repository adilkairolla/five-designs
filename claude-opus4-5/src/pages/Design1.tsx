import { motion } from "motion/react";
import { Upload, BookOpen, Sparkles, Quote, ArrowRight, Star } from "lucide-react";

// Design 1: "Literary Noir" - Dark, editorial, newspaper-inspired with dramatic typography
export function Design1() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#e8e4dc] overflow-hidden" style={{ fontFamily: "'Source Serif 4', serif" }}>
      {/* Grain overlay */}
      <div
        className="fixed inset-0 pointer-events-none opacity-[0.03] z-50"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Newspaper column lines */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="max-w-7xl mx-auto h-full flex">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="flex-1 border-x border-[#e8e4dc]/5" />
          ))}
        </div>
      </div>

      {/* Navigation */}
      <motion.nav
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="fixed top-0 left-0 right-0 z-40 border-b border-[#e8e4dc]/10"
      >
        <div className="max-w-7xl mx-auto px-8 py-6 flex items-center justify-between">
          <div className="text-2xl tracking-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
            <span className="font-bold">RATIO</span>
            <span className="font-light italic ml-1">reader</span>
          </div>
          <div className="flex items-center gap-12 text-sm tracking-widest uppercase">
            <a href="#" className="hover:text-[#c9a959] transition-colors">About</a>
            <a href="#" className="hover:text-[#c9a959] transition-colors">Features</a>
            <a href="#" className="hover:text-[#c9a959] transition-colors">Pricing</a>
            <button className="border border-[#c9a959] text-[#c9a959] px-6 py-2 hover:bg-[#c9a959] hover:text-[#0a0a0a] transition-all">
              Try Free
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center pt-24">
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-12 gap-4">
          {/* Left column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="col-span-2 border-r border-[#e8e4dc]/10 pr-4"
          >
            <div className="text-xs tracking-widest uppercase text-[#c9a959] mb-4">Est. 2024</div>
            <div className="text-xs leading-relaxed text-[#e8e4dc]/50">
              The definitive tool for the modern reader. Transform dense documents into crystalline understanding.
            </div>
            <div className="mt-8 flex flex-col gap-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3 h-3 fill-[#c9a959] text-[#c9a959]" />
              ))}
            </div>
          </motion.div>

          {/* Center - Main headline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="col-span-8 text-center px-8"
          >
            <div className="text-xs tracking-[0.5em] uppercase mb-8 text-[#c9a959]">
              — A New Chapter in Reading —
            </div>
            <h1 className="text-[8rem] leading-[0.85] tracking-tight mb-8" style={{ fontFamily: "'Playfair Display', serif" }}>
              <span className="block font-light italic">Read</span>
              <span className="block font-bold">SMARTER</span>
            </h1>
            <div className="w-24 h-px bg-[#c9a959] mx-auto mb-8" />
            <p className="font-display text-xl leading-relaxed max-w-xl mx-auto text-[#e8e4dc]/70">
              Upload any PDF. Receive the essence. Summaries, insights, and revelations extracted with surgical precision.
            </p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="mt-12 flex items-center justify-center gap-6"
            >
              <button className="group bg-[#c9a959] text-[#0a0a0a] px-10 py-4 font-bold tracking-widest uppercase text-sm flex items-center gap-3 hover:bg-[#e8e4dc] transition-colors">
                Upload Your First PDF
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <span className="text-xs text-[#e8e4dc]/50">No credit card required</span>
            </motion.div>
          </motion.div>

          {/* Right column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="col-span-2 border-l border-[#e8e4dc]/10 pl-4"
          >
            <div className="text-xs tracking-widest uppercase text-[#c9a959] mb-4">Quick Stats</div>
            <div className="space-y-6 text-sm">
              <div>
                <div className="text-3xl font-display font-bold">847K</div>
                <div className="text-[#e8e4dc]/50 text-xs">Documents Processed</div>
              </div>
              <div>
                <div className="text-3xl font-display font-bold">2.3M</div>
                <div className="text-[#e8e4dc]/50 text-xs">Hours Saved</div>
              </div>
              <div>
                <div className="text-3xl font-display font-bold">98%</div>
                <div className="text-[#e8e4dc]/50 text-xs">Accuracy Rate</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-32 border-y border-[#e8e4dc]/10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto px-8 text-center"
        >
          <Quote className="w-16 h-16 text-[#c9a959]/30 mx-auto mb-8" />
          <blockquote className="font-display text-4xl italic leading-relaxed text-[#e8e4dc]/90">
            "The art of reading is in large part that of acquiring a better understanding of life from one's encounter with it in a book."
          </blockquote>
          <cite className="block mt-8 text-sm tracking-widest uppercase text-[#c9a959]">
            — Mortimer Adler
          </cite>
        </motion.div>
      </section>

      {/* Features - Newspaper layout */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <div className="text-xs tracking-[0.5em] uppercase text-[#c9a959] mb-4">Features</div>
            <h2 className="font-display text-6xl font-bold">THE RATIO METHOD</h2>
          </motion.div>

          <div className="grid grid-cols-3 gap-8">
            {[
              {
                icon: Upload,
                title: "UPLOAD",
                subtitle: "The Document",
                description: "Drop your PDF into the void. Academic papers, business reports, dense manuscripts—all welcome."
              },
              {
                icon: Sparkles,
                title: "EXTRACT",
                subtitle: "The Essence",
                description: "Our algorithms dissect, analyze, and distill. Key arguments surface. Crucial data emerges."
              },
              {
                icon: BookOpen,
                title: "UNDERSTAND",
                subtitle: "The Meaning",
                description: "Receive summaries, insights, notable quotes. Understanding blooms where confusion once reigned."
              }
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                viewport={{ once: true }}
                className="border border-[#e8e4dc]/10 p-8 hover:border-[#c9a959]/50 transition-colors group"
              >
                <feature.icon className="w-8 h-8 text-[#c9a959] mb-6" />
                <div className="text-xs tracking-widest text-[#c9a959] mb-2">{feature.subtitle}</div>
                <h3 className="font-display text-4xl font-bold mb-4 group-hover:text-[#c9a959] transition-colors">
                  {feature.title}
                </h3>
                <div className="w-12 h-px bg-[#e8e4dc]/20 mb-4" />
                <p className="text-[#e8e4dc]/60 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials - Editorial style */}
      <section className="py-32 bg-[#e8e4dc] text-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="text-xs tracking-[0.5em] uppercase text-[#8b7355] mb-4">Testimonial</div>
              <h2 className="font-display text-5xl font-bold leading-tight mb-8">
                "RATIO READER CHANGED HOW I APPROACH RESEARCH"
              </h2>
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-[#0a0a0a] rounded-full" />
                <div>
                  <div className="font-bold">Dr. Eleanor Vance</div>
                  <div className="text-sm text-[#0a0a0a]/60">Professor of Literature, Yale</div>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="border-l border-[#0a0a0a]/20 pl-16"
            >
              <p className="font-display text-xl leading-relaxed text-[#0a0a0a]/80">
                In academia, time is the scarcest resource. Ratio Reader doesn't just save time—it fundamentally enhances comprehension. I process three times as many papers now, with deeper understanding than before.
              </p>
              <div className="mt-8 flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#c9a959] text-[#c9a959]" />
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto px-8 text-center"
        >
          <div className="border border-[#c9a959] p-16">
            <div className="text-xs tracking-[0.5em] uppercase text-[#c9a959] mb-6">Begin Your Journey</div>
            <h2 className="font-display text-6xl font-bold mb-6">
              THE FIRST CHAPTER<br />AWAITS
            </h2>
            <p className="text-[#e8e4dc]/60 mb-10 max-w-lg mx-auto">
              Join thousands of readers who have discovered a better way to consume knowledge. Your first 50 pages are free.
            </p>
            <button className="group bg-[#c9a959] text-[#0a0a0a] px-12 py-5 font-bold tracking-widest uppercase flex items-center gap-3 mx-auto hover:bg-[#e8e4dc] transition-colors">
              Start Reading Now
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#e8e4dc]/10 py-16">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-4 gap-12">
            <div>
              <div className="font-display text-2xl mb-4">
                <span className="font-bold">RATIO</span>
                <span className="font-light italic ml-1">reader</span>
              </div>
              <p className="text-sm text-[#e8e4dc]/50">
                Transforming how the world reads, one document at a time.
              </p>
            </div>
            <div>
              <h4 className="text-xs tracking-widest uppercase text-[#c9a959] mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-[#e8e4dc]/60">
                <li><a href="#" className="hover:text-[#c9a959] transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-[#c9a959] transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-[#c9a959] transition-colors">API</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xs tracking-widest uppercase text-[#c9a959] mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-[#e8e4dc]/60">
                <li><a href="#" className="hover:text-[#c9a959] transition-colors">About</a></li>
                <li><a href="#" className="hover:text-[#c9a959] transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-[#c9a959] transition-colors">Careers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xs tracking-widest uppercase text-[#c9a959] mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-[#e8e4dc]/60">
                <li><a href="#" className="hover:text-[#c9a959] transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-[#c9a959] transition-colors">Terms</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-16 pt-8 border-t border-[#e8e4dc]/10 text-center text-xs text-[#e8e4dc]/40">
            © 2024 Ratio Reader. All rights reserved. Read wisely.
          </div>
        </div>
      </footer>
    </div>
  );
}
