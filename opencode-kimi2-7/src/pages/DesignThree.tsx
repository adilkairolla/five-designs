import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  FileText,
  Leaf,
  Wind,
  Sun,
  Droplets,
  Quote,
  ArrowRight,
  Sprout,
  BookOpen,
  Menu,
} from "lucide-react";

const features = [
  {
    icon: Sun,
    title: "Illuminate",
    body: "Summaries bring the main ideas into clear light, so you always know what matters.",
  },
  {
    icon: Droplets,
    title: "Distill",
    body: "Key quotes are extracted like essential oils — potent, pure, and easy to return to.",
  },
  {
    icon: Wind,
    title: "Clarify",
    body: "Hints arrive gently, explaining difficult passages without breaking the reading flow.",
  },
  {
    icon: Sprout,
    title: "Grow",
    body: "Insights connect ideas across pages, helping your understanding take root.",
  },
];

export function DesignThree() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <div
      ref={heroRef}
      className="min-h-screen bg-[#F6F1E5] text-[#2C3324] font-(--font-organic-body) overflow-x-hidden selection:bg-[#8A9A5B] selection:text-white"
    >
      {/* Subtle paper grain */}
      <div
        className="fixed inset-0 pointer-events-none z-50 opacity-[0.03] mix-blend-multiply"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Floating organic shapes */}
      <motion.div
        style={{ y: bgY }}
        className="fixed top-[-10%] right-[-5%] w-[50vw] h-[50vw] rounded-full bg-[#C67B5C]/10 blur-3xl pointer-events-none z-0"
      />
      <motion.div
        style={{ y: bgY }}
        className="fixed bottom-[-10%] left-[-10%] w-[60vw] h-[60vw] rounded-full bg-[#8A9A5B]/10 blur-3xl pointer-events-none z-0"
      />

      {/* Header */}
      <header className="relative z-10 px-6 md:px-12 lg:px-20 py-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-full bg-[#8A9A5B] flex items-center justify-center">
              <Leaf className="w-5 h-5 text-[#F6F1E5]" />
            </div>
            <span className="text-2xl font-medium font-(--font-organic-display)">Ratio Reader</span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#features" className="hover:text-[#C67B5C] transition-colors">Features</a>
            <a href="#story" className="hover:text-[#C67B5C] transition-colors">Story</a>
            <a href="#start" className="hover:text-[#C67B5C] transition-colors">Pricing</a>
            <button className="px-5 py-2 rounded-full bg-[#2C3324] text-[#F6F1E5] hover:bg-[#8A9A5B] transition-colors">
              Begin Reading
            </button>
          </nav>
          <button className="md:hidden">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      {/* Hero */}
      <section className="relative z-10 px-6 md:px-12 lg:px-20 pt-16 md:pt-28 pb-24">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#8A9A5B] mb-6">
              Reading, in harmony
            </p>
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-medium font-(--font-organic-display) leading-[0.95] mb-8">
              Let the text
              <br />
              <span className="italic text-[#C67B5C]">breathe.</span>
            </h1>
            <p className="text-lg md:text-xl text-[#2C3324]/75 leading-relaxed max-w-lg mb-10">
              Ratio Reader nurtures dense documents into clear summaries, gentle hints,
              and glowing quotes — so understanding grows naturally.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <button className="group px-8 py-4 rounded-full bg-[#8A9A5B] text-white font-medium hover:bg-[#2C3324] transition-colors flex items-center gap-2">
                Upload PDF
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 rounded-full border border-[#2C3324]/30 hover:bg-[#2C3324]/5 transition-colors">
                See How It Works
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="relative aspect-square">
              {/* Soft blob background */}
              <svg
                viewBox="0 0 500 500"
                className="absolute inset-0 w-full h-full text-[#E8DCC4] animate-[spin_60s_linear_infinite]"
              >
                <path
                  fill="currentColor"
                  d="M421.5,317.5c-29.4,68.6-108.3,117.9-189.1,110.4C140.9,419.8,58.2,340.6,65.2,247.3
                    C71.8,159.5,155.4,76.6,256.5,78.4C360.3,80.2,454.7,174.4,421.5,317.5z"
                />
              </svg>
              {/* Document card */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-3/4 bg-white/80 backdrop-blur-sm rounded-[2rem] shadow-xl p-8 border border-white/50">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-full bg-[#E8DCC4] flex items-center justify-center">
                      <FileText className="w-5 h-5 text-[#2C3324]" />
                    </div>
                    <span className="font-(--font-organic-display) text-xl">Your PDF</span>
                  </div>
                  <div className="space-y-3 mb-6">
                    <div className="h-2 bg-[#2C3324]/10 rounded-full w-full" />
                    <div className="h-2 bg-[#2C3324]/10 rounded-full w-[90%]" />
                    <div className="h-2 bg-[#8A9A5B]/30 rounded-full w-[60%]" />
                    <div className="h-2 bg-[#2C3324]/10 rounded-full w-[85%]" />
                  </div>
                  <div className="p-4 bg-[#F6F1E5] rounded-2xl border border-[#8A9A5B]/20">
                    <p className="text-sm font-(--font-organic-display) italic text-[#2C3324]/80">
                      "The central insight emerges slowly, like roots finding water."
                    </p>
                  </div>
                </div>
              </div>
              {/* Floating leaf accent */}
              <motion.div
                animate={{ y: [0, -12, 0], rotate: [0, 6, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                className="absolute top-8 right-8 text-[#8A9A5B]"
              >
                <Leaf className="w-12 h-12" />
              </motion.div>
              <motion.div
                animate={{ y: [0, 10, 0], rotate: [0, -5, 0] }}
                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                className="absolute bottom-12 left-8 text-[#C67B5C]"
              >
                <Sprout className="w-10 h-10" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features — growing cards */}
      <section id="features" className="relative z-10 px-6 md:px-12 lg:px-20 py-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#8A9A5B] mb-4">
              Four seasons of reading
            </p>
            <h2 className="text-4xl md:text-6xl font-medium font-(--font-organic-display) mb-6">
              Cultivate understanding
            </h2>
            <p className="text-[#2C3324]/70 text-lg">
              Every document passes through four careful stages, each designed to help you grow closer to the text.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ delay: i * 0.12, duration: 0.8 }}
                className="group bg-white/60 backdrop-blur-sm rounded-[2rem] p-8 border border-[#2C3324]/5 hover:bg-white hover:shadow-lg transition-all duration-500"
              >
                <div className="w-14 h-14 rounded-full bg-[#E8DCC4] flex items-center justify-center mb-6 group-hover:bg-[#8A9A5B] group-hover:text-white transition-colors">
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-medium font-(--font-organic-display) mb-3">{feature.title}</h3>
                <p className="text-[#2C3324]/70 leading-relaxed">{feature.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story / quote section */}
      <section id="story" className="relative z-10 px-6 md:px-12 lg:px-20 py-24">
        <div className="max-w-7xl mx-auto">
          <div className="bg-[#8A9A5B] rounded-[3rem] p-8 md:p-16 lg:p-20 text-[#F6F1E5] relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#C67B5C]/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#2C3324]/10 rounded-full blur-3xl" />
            <div className="relative z-10 grid lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-5">
                <Quote className="w-16 h-16 text-[#E8DCC4] mb-6" />
                <blockquote className="text-3xl md:text-5xl font-medium font-(--font-organic-display) leading-[1.1]">
                  "The best reading feels less like work and more like a walk through a quiet garden."
                </blockquote>
              </div>
              <div className="lg:col-span-7 space-y-6 text-lg leading-relaxed opacity-90">
                <p>
                  Ratio Reader was born from a simple belief: knowledge should feel approachable.
                  We built a tool that doesn't rush you, doesn't overload you, and never talks down to you.
                </p>
                <p>
                  Upload your PDF and receive a calm, curated companion — a summary that respects the original,
                  quotes that invite rereading, and hints that appear exactly when you need them.
                </p>
                <button className="mt-4 px-8 py-3 rounded-full bg-[#F6F1E5] text-[#2C3324] font-medium hover:bg-[#E8DCC4] transition-colors">
                  Read Our Story
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="relative z-10 px-6 md:px-12 lg:px-20 py-24">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-medium font-(--font-organic-display) text-center mb-16">
            The natural flow
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: "Sow", body: "Upload any PDF. Research paper, novel, manual, or manifesto." },
              { step: "Tend", body: "Ratio Reader carefully analyzes structure, voice, and argument." },
              { step: "Harvest", body: "Collect summaries, quotes, hints, and insights in one place." },
            ].map((item, i) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="text-center"
              >
                <div className="w-20 h-20 mx-auto rounded-full bg-[#E8DCC4] flex items-center justify-center mb-6">
                  <span className="text-2xl font-medium font-(--font-organic-display)">{item.step}</span>
                </div>
                <p className="text-[#2C3324]/70 leading-relaxed max-w-xs mx-auto">{item.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="start" className="relative z-10 px-6 md:px-12 lg:px-20 py-24">
        <div className="max-w-4xl mx-auto text-center">
          <BookOpen className="w-12 h-12 text-[#C67B5C] mx-auto mb-6" />
          <h2 className="text-4xl md:text-6xl font-medium font-(--font-organic-display) mb-6">
            Ready to read more gently?
          </h2>
          <p className="text-lg text-[#2C3324]/70 mb-10 max-w-2xl mx-auto">
            Start with a free upload. No credit card, no clutter — just a quieter way to understand what you read.
          </p>
          <button className="px-10 py-4 rounded-full bg-[#C67B5C] text-white font-medium hover:bg-[#2C3324] transition-colors">
            Try Ratio Reader Free
          </button>
        </div>
      </section>

      <footer className="relative z-10 px-6 md:px-12 lg:px-20 py-10 border-t border-[#2C3324]/10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-[#2C3324]/50">
          <div className="flex items-center gap-2">
            <Leaf className="w-4 h-4" />
            <span className="font-(--font-organic-display)">Ratio Reader</span>
          </div>
          <span>© 2026 Ratio Reader. Grown with care.</span>
        </div>
      </footer>
    </div>
  );
}
