import { motion } from "framer-motion";
import { FileText, Sparkles, BookOpen, Quote, ArrowRight, Upload, Zap, ChevronDown } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

const navLinks = ["Features", "How it works", "Pricing"];

const features = [
  {
    icon: FileText,
    title: "Instant Summaries",
    desc: "Upload any PDF and get a distilled breakdown of the most critical information in seconds. No fluff, just signal.",
  },
  {
    icon: Quote,
    title: "Key Quotes",
    desc: "We surface the most impactful passages so you can reference the exact words that matter.",
  },
  {
    icon: Sparkles,
    title: "Smart Hints",
    desc: "Contextual insights and connections you'd miss on your own. Like having a reading companion who's already finished the book.",
  },
  {
    icon: BookOpen,
    title: "Deep Understanding",
    desc: "Go beyond skimming. Ratio Reader helps you actually comprehend complex material by highlighting relationships and themes.",
  },
];

const steps = [
  { num: "01", title: "Upload", desc: "Drop your PDF or drag it in. Any length, any topic." },
  { num: "02", title: "Analyze", desc: "Our engine reads, distills, and structures the content." },
  { num: "03", title: "Discover", desc: "Get summaries, quotes, hints, and insights instantly." },
];

const quotes = [
  { text: "Ratio Reader turned a 400-page report into a 10-minute read without losing the nuance.", author: "Sarah K., Strategy Lead" },
  { text: "It's like having a PhD friend who's read everything and explains it perfectly.", author: "Marcus T., Founder" },
  { text: "I use it for every research paper. It's become indispensable.", author: "Dr. Lina M., Researcher" },
];

export function Design1() {
  return (
    <div className="min-h-screen bg-[#FAFAF8] text-[#1A1A1A] font-serif selection:bg-[#FF3D00] selection:text-white">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400;1,700&family=DM+Sans:wght@300;400;500;600;700&display=swap');
        .font-display { font-family: 'Playfair Display', serif; }
        .font-sans { font-family: 'DM Sans', sans-serif; }
        .editorial-grid {
          display: grid;
          grid-template-columns: repeat(12, 1fr);
          gap: 1.5rem;
        }
        .grain {
          position: fixed;
          inset: 0;
          pointer-events: none;
          opacity: 0.03;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
          z-index: 9999;
        }
      `}</style>
      <div className="grain" />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-[#1A1A1A]/10 bg-[#FAFAF8]/80 backdrop-blur-md">
        <div className="max-w-[1400px] mx-auto px-8 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-[#FF3D00] rounded-sm flex items-center justify-center">
              <span className="text-white font-bold text-sm font-sans">R</span>
            </div>
            <span className="font-display text-xl font-bold tracking-tight">Ratio Reader</span>
          </div>
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a key={link} href="#" className="font-sans text-sm font-medium text-[#1A1A1A]/60 hover:text-[#1A1A1A] transition-colors tracking-wide uppercase">
                {link}
              </a>
            ))}
          </div>
          <button className="font-sans text-sm font-semibold bg-[#1A1A1A] text-[#FAFAF8] px-6 py-2.5 rounded-sm hover:bg-[#FF3D00] transition-colors tracking-wide">
            Get Started
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-40 pb-24 px-8">
        <div className="editorial-grid max-w-[1400px] mx-auto items-end">
          <div className="col-span-12 lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="mb-6"
            >
              <span className="font-sans text-xs font-semibold tracking-[0.3em] uppercase text-[#FF3D00]">
                Read Smarter
              </span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="font-display text-[clamp(3rem,8vw,8rem)] font-black leading-[0.9] tracking-tight mb-8"
            >
              Every page,
              <br />
              <span className="italic text-[#FF3D00]">distilled.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="font-sans text-lg text-[#1A1A1A]/60 max-w-md leading-relaxed mb-10"
            >
              Upload any PDF. Get summaries, key quotes, and smart insights that make dense material instantly digestible.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="flex items-center gap-6"
            >
              <button className="font-sans font-semibold bg-[#1A1A1A] text-[#FAFAF8] px-8 py-4 text-sm tracking-wide hover:bg-[#FF3D00] transition-colors flex items-center gap-3 group">
                <Upload size={16} />
                Upload Your First PDF
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="font-sans text-sm font-medium text-[#1A1A1A]/50 hover:text-[#1A1A1A] transition-colors underline underline-offset-4">
                See it in action →
              </button>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="col-span-12 lg:col-span-5 mt-12 lg:mt-0"
          >
            <div className="relative">
              <div className="bg-[#1A1A1A] aspect-[3/4] rounded-sm overflow-hidden relative">
                <div className="absolute inset-0 flex flex-col justify-between p-8">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#FF3D00]" />
                    <div className="w-2 h-2 rounded-full bg-[#FF3D00]/40" />
                    <div className="w-2 h-2 rounded-full bg-[#FF3D00]/20" />
                  </div>
                  <div className="space-y-4">
                    <div className="h-1 bg-white/10 rounded-full w-full" />
                    <div className="h-1 bg-white/10 rounded-full w-4/5" />
                    <div className="h-1 bg-white/10 rounded-full w-3/5" />
                    <div className="mt-6 p-4 border border-[#FF3D00]/30 rounded-sm">
                      <p className="font-display text-[#FF3D00] text-sm italic leading-relaxed">
                        "The most important insight from this document is the correlation between..."
                      </p>
                    </div>
                    <div className="h-1 bg-white/10 rounded-full w-5/6" />
                    <div className="h-1 bg-white/10 rounded-full w-2/3" />
                    <div className="h-1 bg-white/10 rounded-full w-4/5" />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-sans text-[10px] text-white/30 tracking-widest uppercase">Ratio Reader</span>
                    <Zap size={14} className="text-[#FF3D00]" />
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-[#FF3D00]/20 rounded-sm -z-10" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-[1400px] mx-auto px-8">
        <div className="h-px bg-[#1A1A1A]/10" />
      </div>

      {/* Features */}
      <section className="py-24 px-8">
        <div className="max-w-[1400px] mx-auto">
          <div className="editorial-grid items-start">
            <div className="col-span-12 lg:col-span-4">
              <motion.span
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={0}
                className="font-sans text-xs font-semibold tracking-[0.3em] uppercase text-[#FF3D00]"
              >
                What it does
              </motion.span>
              <motion.h2
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={1}
                className="font-display text-5xl lg:text-6xl font-bold mt-4 leading-[1.1]"
              >
                Everything you need,
                <br />
                <span className="italic">nothing you don't.</span>
              </motion.h2>
            </div>
            <div className="col-span-12 lg:col-span-8 mt-12 lg:mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
                {features.map((f, i) => (
                  <motion.div
                    key={f.title}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                    custom={i}
                    className="group"
                  >
                    <f.icon size={24} className="text-[#FF3D00] mb-4" />
                    <h3 className="font-display text-2xl font-bold mb-3">{f.title}</h3>
                    <p className="font-sans text-sm text-[#1A1A1A]/50 leading-relaxed">{f.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-24 px-8 bg-[#1A1A1A] text-[#FAFAF8]">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-20">
            <span className="font-sans text-xs font-semibold tracking-[0.3em] uppercase text-[#FF3D00]">
              How it works
            </span>
            <h2 className="font-display text-5xl lg:text-7xl font-bold mt-4">
              Three steps. <span className="italic text-[#FF3D00]">That's it.</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {steps.map((s, i) => (
              <motion.div
                key={s.num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                className="relative"
              >
                <span className="font-display text-8xl font-black text-white/[0.06] absolute -top-8 -left-2">
                  {s.num}
                </span>
                <h3 className="font-display text-3xl font-bold mb-3 relative">{s.title}</h3>
                <p className="font-sans text-sm text-white/50 leading-relaxed relative">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-8">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-16">
            <span className="font-sans text-xs font-semibold tracking-[0.3em] uppercase text-[#FF3D00]">
              Testimonials
            </span>
            <h2 className="font-display text-5xl lg:text-6xl font-bold mt-4">
              Loved by <span className="italic">readers.</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {quotes.map((q, i) => (
              <motion.blockquote
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="border-t-2 border-[#1A1A1A] pt-8"
              >
                <p className="font-display text-lg italic leading-relaxed mb-6">"{q.text}"</p>
                <cite className="font-sans text-sm text-[#1A1A1A]/50 not-italic">{q.author}</cite>
              </motion.blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-8 bg-[#FF3D00] text-white text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <h2 className="font-display text-5xl lg:text-7xl font-black leading-[1.1] mb-6">
            Stop reading.
            <br />
            <span className="italic">Start understanding.</span>
          </h2>
          <p className="font-sans text-lg text-white/70 mb-10">
            Upload your first PDF free. No credit card required.
          </p>
          <button className="font-sans font-semibold bg-white text-[#FF3D00] px-10 py-4 text-sm tracking-wide hover:bg-[#1A1A1A] hover:text-white transition-colors">
            Get Started Free
          </button>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-8 border-t border-[#1A1A1A]/10">
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 bg-[#FF3D00] rounded-sm flex items-center justify-center">
              <span className="text-white font-bold text-xs font-sans">R</span>
            </div>
            <span className="font-display text-sm font-bold">Ratio Reader</span>
          </div>
          <p className="font-sans text-xs text-[#1A1A1A]/40">
            © 2026 Ratio Reader. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {["Privacy", "Terms", "Contact"].map((l) => (
              <a key={l} href="#" className="font-sans text-xs text-[#1A1A1A]/40 hover:text-[#1A1A1A] transition-colors">
                {l}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
