import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { BookOpen, Upload, Lightbulb, Quote, ArrowRight, Layers, FileText } from "lucide-react";

function FloatingCard({ children, delay, x, y, rotate }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60, rotate: 0 }}
      animate={{ opacity: 1, y: [0, -12, 0], rotate: [rotate - 2, rotate + 2, rotate - 2] }}
      transition={{
        opacity: { delay, duration: 0.8 },
        y: { delay, duration: 5, repeat: Infinity, ease: "easeInOut" },
        rotate: { delay, duration: 6, repeat: Infinity, ease: "easeInOut" },
      }}
      className="absolute shadow-2xl"
      style={{ left: x, top: y }}
    >
      {children}
    </motion.div>
  );
}

export function Design1() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const rotate1 = useTransform(scrollYProgress, [0, 1], [0, 12]);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    document.body.style.backgroundColor = "#F9F6F1";
    return () => {
      document.body.style.backgroundColor = "";
    };
  }, []);

  const staggerContainer = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as const } },
  };

  const quotes = [
    { text: "The only way out is through", author: "Robert Frost" },
    { text: "Everything you can imagine is real", author: "Picasso" },
    { text: "In the middle of difficulty lies opportunity", author: "Einstein" },
  ];

  return (
    <div ref={containerRef} className="min-h-[200vh] w-full relative overflow-hidden" style={{ backgroundColor: "#F9F6F1" }}>
      {/* Decorative Background Elements */}
      <div className="fixed inset-0 pointer-events-none" style={{ zIndex: 0 }}>
        <svg className="absolute top-0 right-0 w-[800px] h-[800px] opacity-[0.04]" viewBox="0 0 200 200">
          <circle cx="100" cy="100" r="80" fill="none" stroke="#2C1810" strokeWidth="0.5" />
          <circle cx="100" cy="100" r="60" fill="none" stroke="#2C1810" strokeWidth="0.5" />
          <circle cx="100" cy="100" r="40" fill="none" stroke="#2C1810" strokeWidth="0.5" />
        </svg>
        <svg className="absolute bottom-20 left-0 w-[600px] h-[600px] opacity-[0.03]" viewBox="0 0 100 100">
          {[...Array(5)].map((_, i) => (
            <path key={i} d={`M 0 ${20 + i * 20} Q 50 ${10 + i * 20} 100 ${20 + i * 20}`} fill="none" stroke="#2C1810" strokeWidth="0.3" />
          ))}
        </svg>
      </div>

      {/* Navigation */}
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50 px-8 py-6 flex items-center justify-between"
        style={{ fontFamily: "'Source Serif 4', serif" }}
      >
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[#8B1E3F] flex items-center justify-center">
            <BookOpen size={18} className="text-[#F9F6F1]" />
          </div>
          <span className="text-2xl font-bold tracking-tight text-[#2C1810]">Ratio Reader</span>
        </div>
        <div className="hidden md:flex items-center gap-10 text-sm font-medium text-[#5C4033]">
          <a href="#features" className="hover:text-[#8B1E3F] transition-colors">Features</a>
          <a href="#how" className="hover:text-[#8B1E3F] transition-colors">How it Works</a>
          <a href="#pricing" className="hover:text-[#8B1E3F] transition-colors">Pricing</a>
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-2.5 bg-[#2C1810] text-[#F9F6F1] text-sm font-semibold rounded-none border border-[#2C1810] hover:bg-transparent hover:text-[#2C1810] transition-all duration-300"
        >
          Get Started
        </motion.button>
      </motion.nav>

      {/* SECTION 1: Hero */}
      <section className="relative min-h-screen flex items-center justify-center px-6 pt-32 pb-20" style={{ perspective: "1200px" }}>
        {/* Floating Book Cards */}
        <FloatingCard delay={0.3} x="5%" y="15%" rotate={-8}>
          <div className="w-56 p-5 bg-white border border-[#E8DDD4] shadow-[8px_8px_0_#8B1E3F]">
            <FileText size={20} className="text-[#8B1E3F] mb-3" />
            <div className="text-xs font-semibold uppercase tracking-widest text-[#8B1E3F] mb-2">AI Summary</div>
            <p className="text-sm leading-relaxed text-[#3D2B1F]">
              "This text explores the interconnected nature of consciousness and reality through quantum physics..."
            </p>
            <div className="mt-3 flex gap-1">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="h-1 flex-1 bg-[#D4A853] rounded-full" />
              ))}
            </div>
          </div>
        </FloatingCard>

        <FloatingCard delay={0.6} x="70%" y="50%" rotate={5}>
          <div className="w-48 p-4 bg-[#2C1810] text-[#F9F6F1]">
            <Quote size={16} className="text-[#D4A853] mb-2" />
            <blockquote className="text-sm italic leading-relaxed font-serif">
              "The greatest minds are not remembered for what they read, but for what they understood"
            </blockquote>
          </div>
        </FloatingCard>

        <FloatingCard delay={0.9} x="78%" y="10%" rotate={12}>
          <div className="w-40 h-28 bg-[#D4A853] flex items-end p-3 shadow-lg">
            <div className="flex flex-col">
              <div className="text-xs font-bold uppercase text-[#2C1810] mb-1">Insight #42</div>
              <div className="text-[10px] font-mono text-[#2C1810] opacity-70">PATTERNS IN COMPLEX SYSTEMS</div>
            </div>
          </div>
        </FloatingCard>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="relative z-10 text-center max-w-5xl mx-auto"
        >
          <motion.div variants={fadeUp} className="mb-6 inline-flex items-center gap-2 px-4 py-2 bg-[#8B1E3F]/10 border border-[#8B1E3F]/20 text-[#8B1E3F] text-xs font-bold uppercase tracking-[0.2em]">
            <span className="w-2 h-2 rounded-full bg-[#8B1E3F] animate-pulse" />
            Now in Public Beta
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="text-6xl md:text-8xl lg:text-9xl font-black leading-[0.9] tracking-tight mb-8"
            style={{ fontFamily: "'Playfair Display', serif", color: "#2C1810" }}
          >
            <span className="block">Understand</span>
            <span className="block italic text-[#8B1E3F]">Everything,</span>
            <span className="block">Faster.</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-xl md:text-2xl leading-relaxed max-w-2xl mx-auto mb-12 text-[#5C4033]"
            style={{ fontFamily: "'Source Serif 4', serif" }}
          >
            Upload any PDF and receive intelligent summaries, key insights, and contextual hints that transform how you read and learn.
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.button
              onHoverStart={() => setIsHovered(true)}
              onHoverEnd={() => setIsHovered(false)}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="group relative px-10 py-4 bg-[#8B1E3F] text-white text-lg font-semibold overflow-hidden transition-colors"
            >
              <span className="relative z-10 flex items-center gap-3">
                Upload Your First Document
                <motion.span
                  animate={{ x: isHovered ? 8 : 0 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <ArrowRight size={20} />
                </motion.span>
              </span>
              <motion.div
                className="absolute inset-0 bg-[#2C1810]"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="px-10 py-4 border-2 border-[#2C1810] text-[#2C1810] text-lg font-semibold hover:bg-[#2C1810] hover:text-[#F9F6F1] transition-all duration-300"
            >
              See How It Works
            </motion.button>
          </motion.div>

          {/* Stats Bar */}
          <motion.div
            variants={fadeUp}
            className="mt-20 pt-12 border-t border-[#2C1810]/10 flex flex-wrap justify-center gap-12 md:gap-20"
          >
            {[
              { value: "2.4M+", label: "Documents Processed" },
              { value: "94%", label: "Accuracy Score" },
              { value: "<3s", label: "Avg. Processing Time" },
              { value: "50K+", label: "Active Readers" },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl md:text-4xl font-black text-[#8B1E3F]" style={{ fontFamily: "'Playfair Display', serif" }}>
                  {stat.value}
                </div>
                <div className="text-sm mt-1 text-[#5C4033] uppercase tracking-wider font-medium">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* SECTION 2: Features Grid */}
      <section id="features" className="relative py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="mb-20"
          >
            <div className="text-xs font-bold uppercase tracking-[0.3em] text-[#8B1E3F] mb-4">Features</div>
            <h2 className="text-5xl md:text-7xl font-black text-[#2C1810] leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
              More Than Just<br />
              <span className="italic text-[#8B1E3F]">Summaries</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <Upload size={28} />,
                title: "Instant Upload",
                desc: "Drag and drop any PDF. We accept scanned documents, academic papers, and textbooks.",
                color: "#8B1E3F",
                accent: "#F9E1E8",
              },
              {
                icon: <Layers size={28} />,
                title: "Smart Summaries",
                desc: "AI distills hundreds of pages into actionable insights, preserving the author's voice and intent.",
                color: "#2C1810",
                accent: "#E8DDD4",
              },
              {
                icon: <Lightbulb size={28} />,
                title: "Context Hints",
                desc: "Get relevant background information and cross-references as you read, all in real-time.",
                color: "#D4A853",
                accent: "#FAF0DB",
              },
              {
                icon: <Quote size={28} />,
                title: "Key Quotes",
                desc: "Automatically extract and organize the most impactful quotes with full context and attribution.",
                color: "#8B1E3F",
                accent: "#F9E1E8",
              },
              {
                icon: <BookOpen size={28} />,
                title: "Knowledge Graph",
                desc: "Visualize connections between concepts across all your documents in an interactive graph.",
                color: "#2C1810",
                accent: "#E8DDD4",
              },
              {
                icon: <FileText size={28} />,
                title: "Export & Share",
                desc: "Export summaries in multiple formats. Share insights with colleagues or save to your library.",
                color: "#D4A853",
                accent: "#FAF0DB",
              },
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group relative p-8 border border-[#2C1810]/10 hover:border-[#8B1E3F]/30 transition-colors duration-500"
                style={{ backgroundColor: feature.accent }}
              >
                <div className="mb-6" style={{ color: feature.color }}>
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-[#2C1810] mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
                  {feature.title}
                </h3>
                <p className="text-[#5C4033] leading-relaxed text-base" style={{ fontFamily: "'Source Serif 4', serif" }}>
                  {feature.desc}
                </p>
                <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-[#8B1E3F] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Learn more <ArrowRight size={14} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: Quote Scroll */}
      <section className="relative py-32 overflow-hidden" style={{ backgroundColor: "#2C1810" }}>
        <motion.div style={{ y: y1 }} className="absolute top-0 right-0 w-96 h-96 bg-[#8B1E3F] rounded-full opacity-5 blur-3xl" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-4xl md:text-6xl font-black text-[#F9F6F1] mb-16 leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
              What Our Readers<br />
              <span className="italic text-[#D4A853]">Discovered</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {quotes.map((quote, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2, duration: 0.7 }}
                className="p-8 border border-[#F9F6F1]/10"
              >
                <Quote size={32} className="text-[#D4A853] mb-6 opacity-60" />
                <p className="text-2xl text-[#F9F6F1] leading-relaxed italic mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                  "{quote.text}"
                </p>
                <div className="h-px w-12 bg-[#D4A853] mb-4" />
                <p className="text-sm font-semibold text-[#D4A853] uppercase tracking-widest">{quote.author}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: CTA */}
      <section className="py-32 px-6">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto text-center relative"
        >
          <motion.div
            style={{ y: y2, rotate: rotate1 }}
            className="absolute -top-20 -right-20 w-64 h-64 border border-[#8B1E3F]/20 rounded-full hidden lg:block"
          />
          <motion.div
            style={{ y: y1 }}
            className="absolute -bottom-16 -left-16 w-48 h-48 border border-[#D4A853]/20 hidden lg:block"
          />

          <div className="text-xs font-bold uppercase tracking-[0.3em] text-[#8B1E3F] mb-4">Start Reading Smarter</div>
          <h2 className="text-5xl md:text-7xl font-black text-[#2C1810] mb-8 leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
            Ready to <span className="italic text-[#8B1E3F]">Transform</span><br />
            How You Read?
          </h2>
          <p className="text-xl text-[#5C4033] max-w-2xl mx-auto mb-12" style={{ fontFamily: "'Source Serif 4', serif" }}>
            Join thousands of researchers, students, and professionals who have already revolutionized their reading workflow.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-12 py-5 bg-[#8B1E3F] text-white text-lg font-bold tracking-wide hover:bg-[#2C1810] transition-colors duration-300 shadow-[8px_8px_0_#2C1810]"
          >
            Get Started — It's Free
          </motion.button>

          <div className="mt-8 flex items-center justify-center gap-6 text-sm text-[#5C4033]" style={{ fontFamily: "'Source Serif 4', serif" }}>
            <span>No credit card required</span>
            <span className="w-1 h-1 bg-[#8B1E3F] rounded-full" />
            <span>Cancel anytime</span>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 border-t border-[#2C1810]/10" style={{ backgroundColor: "#F9F6F1" }}>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[#8B1E3F] flex items-center justify-center">
              <BookOpen size={14} className="text-[#F9F6F1]" />
            </div>
            <span className="text-xl font-bold text-[#2C1810]" style={{ fontFamily: "'Playfair Display', serif" }}>Ratio Reader</span>
          </div>
          <div className="flex gap-8 text-sm text-[#5C4033]">
            <a href="#" className="hover:text-[#8B1E3F] transition-colors">Privacy</a>
            <a href="#" className="hover:text-[#8B1E3F] transition-colors">Terms</a>
            <a href="#" className="hover:text-[#8B1E3F] transition-colors">Contact</a>
          </div>
          <p className="text-sm text-[#5C4033]/60" style={{ fontFamily: "'Source Serif 4', serif" }}>
            © 2026 Ratio Reader. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
