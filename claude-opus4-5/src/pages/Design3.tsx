import { motion } from "motion/react";
import { Upload, Leaf, Sparkles, BookOpen, ArrowRight, Wind, Droplets } from "lucide-react";

// Design 3: "Organic Flow" - Soft, nature-inspired, flowing curves with earthy tones
export function Design3() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#faf8f5] to-[#f0ebe3] text-[#2d3a2d] overflow-hidden" style={{ fontFamily: "'DM Sans', sans-serif" }}>
      {/* Organic blob backgrounds */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 5, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-1/4 -right-1/4 w-[60vw] h-[60vw] rounded-full bg-gradient-to-br from-[#a8c5a8]/20 to-[#d4b896]/10 blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            rotate: [0, -5, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-1/4 -left-1/4 w-[50vw] h-[50vw] rounded-full bg-gradient-to-tr from-[#c9b896]/20 to-[#8fb38f]/10 blur-3xl"
        />
      </div>

      {/* Floating nature elements */}
      <div className="fixed inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -30, 0],
              x: [0, 15, 0],
              rotate: [0, 10, 0],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
            className="absolute"
            style={{
              top: `${15 + i * 15}%`,
              left: `${10 + i * 15}%`,
            }}
          >
            <Leaf className="w-6 h-6 text-[#a8c5a8]/30" style={{ transform: `rotate(${i * 45}deg)` }} />
          </motion.div>
        ))}
      </div>

      {/* Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-[#faf8f5]/70"
      >
        <div className="max-w-6xl mx-auto px-8 py-5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#6b8f6b] to-[#a8c5a8] flex items-center justify-center">
              <BookOpen className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-medium tracking-tight">
              ratio<span className="text-[#6b8f6b]">reader</span>
            </span>
          </div>
          <div className="hidden md:flex items-center gap-10 text-sm">
            <a href="#" className="text-[#2d3a2d]/70 hover:text-[#6b8f6b] transition-colors">How it works</a>
            <a href="#" className="text-[#2d3a2d]/70 hover:text-[#6b8f6b] transition-colors">Features</a>
            <a href="#" className="text-[#2d3a2d]/70 hover:text-[#6b8f6b] transition-colors">Pricing</a>
            <button className="bg-gradient-to-r from-[#6b8f6b] to-[#8fb38f] text-white px-6 py-2.5 rounded-full hover:shadow-lg hover:shadow-[#6b8f6b]/20 transition-all">
              Get Started
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center pt-20 pb-20 px-8">
        <div className="max-w-6xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left content */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full mb-8 border border-[#a8c5a8]/30"
              >
                <Sparkles className="w-4 h-4 text-[#6b8f6b]" />
                <span className="text-sm text-[#6b8f6b]">AI-Powered Reading Assistant</span>
              </motion.div>

              <h1 className="text-5xl lg:text-7xl font-light leading-[1.1] tracking-tight mb-8">
                Let your{" "}
                <span className="relative inline-block">
                  <span className="relative z-10 font-medium text-[#6b8f6b]">reading</span>
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                    className="absolute bottom-2 left-0 right-0 h-3 bg-[#a8c5a8]/30 -z-0 origin-left"
                  />
                </span>{" "}
                breathe
              </h1>

              <p className="text-xl text-[#2d3a2d]/70 leading-relaxed mb-10 max-w-lg">
                Upload your PDFs and watch as we gently extract the essence — summaries, insights, and wisdom — leaving you with clarity, not clutter.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="group bg-gradient-to-r from-[#6b8f6b] to-[#8fb38f] text-white px-8 py-4 rounded-full text-lg flex items-center gap-3 shadow-lg shadow-[#6b8f6b]/20 hover:shadow-xl hover:shadow-[#6b8f6b]/30 transition-all"
                >
                  Start Reading
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>
                <span className="text-sm text-[#2d3a2d]/50">Free for your first 50 pages</span>
              </div>
            </motion.div>

            {/* Right - Visual element */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              {/* Organic card stack */}
              <div className="relative aspect-square max-w-lg mx-auto">
                {/* Background organic shapes */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                    className="w-full h-full rounded-[40%_60%_70%_30%/30%_30%_70%_70%] bg-gradient-to-br from-[#a8c5a8]/20 to-[#d4b896]/10"
                  />
                </div>

                {/* Main card */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute inset-8 bg-white/80 backdrop-blur-md rounded-3xl shadow-xl shadow-[#2d3a2d]/10 p-8 flex flex-col"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-3 h-3 rounded-full bg-[#e8b4b4]" />
                    <div className="w-3 h-3 rounded-full bg-[#e8d4b4]" />
                    <div className="w-3 h-3 rounded-full bg-[#b4e8b4]" />
                  </div>
                  <div className="flex-1 flex flex-col gap-4">
                    <div className="h-6 bg-gradient-to-r from-[#a8c5a8]/30 to-transparent rounded-full w-3/4" />
                    <div className="h-4 bg-[#2d3a2d]/10 rounded-full w-full" />
                    <div className="h-4 bg-[#2d3a2d]/10 rounded-full w-5/6" />
                    <div className="h-4 bg-[#2d3a2d]/10 rounded-full w-4/6" />
                    <div className="mt-4 p-4 bg-[#faf8f5] rounded-2xl">
                      <div className="text-xs text-[#6b8f6b] mb-2 font-medium">Key Insight</div>
                      <div className="h-3 bg-[#6b8f6b]/20 rounded-full w-full mb-2" />
                      <div className="h-3 bg-[#6b8f6b]/20 rounded-full w-4/5" />
                    </div>
                  </div>
                </motion.div>

                {/* Floating elements */}
                <motion.div
                  animate={{ y: [0, -15, 0], x: [0, 5, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  className="absolute -top-4 -right-4 bg-white rounded-2xl p-4 shadow-lg shadow-[#2d3a2d]/10"
                >
                  <Wind className="w-6 h-6 text-[#a8c5a8]" />
                </motion.div>
                <motion.div
                  animate={{ y: [0, 10, 0], x: [0, -5, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute -bottom-4 -left-4 bg-white rounded-2xl p-4 shadow-lg shadow-[#2d3a2d]/10"
                >
                  <Droplets className="w-6 h-6 text-[#8fb38f]" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features - Flowing cards */}
      <section className="py-32 px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <span className="inline-flex items-center gap-2 text-sm text-[#6b8f6b] mb-4">
              <Leaf className="w-4 h-4" />
              Natural Understanding
            </span>
            <h2 className="text-4xl lg:text-5xl font-light tracking-tight">
              Reading, <span className="font-medium text-[#6b8f6b]">reimagined</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Upload,
                title: "Gentle Upload",
                description: "Simply drop your PDF into our garden. We handle the rest with care.",
                color: "from-[#a8c5a8] to-[#8fb38f]",
              },
              {
                icon: Sparkles,
                title: "Essence Extraction",
                description: "Like morning dew, we gather the most precious insights from your documents.",
                color: "from-[#d4b896] to-[#c9a87c]",
              },
              {
                icon: BookOpen,
                title: "Clear Understanding",
                description: "Receive summaries, hints, and quotes that bloom into comprehension.",
                color: "from-[#b8a8c5] to-[#a08fb8]",
              },
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 hover:bg-white/80 transition-all hover:shadow-xl hover:shadow-[#2d3a2d]/5 border border-[#a8c5a8]/20">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <feature.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-medium mb-3">{feature.title}</h3>
                  <p className="text-[#2d3a2d]/60 leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits - Organic layout */}
      <section className="py-32 px-8 relative">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            {/* Visual side */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-[60px] bg-gradient-to-br from-[#a8c5a8]/30 to-[#d4b896]/20 relative overflow-hidden">
                {/* Organic patterns */}
                <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 400 500">
                  <path
                    d="M50,250 Q100,100 200,150 T350,250 Q300,400 200,350 T50,250"
                    fill="none"
                    stroke="#6b8f6b"
                    strokeWidth="2"
                  />
                  <path
                    d="M100,200 Q150,50 250,100 T400,200 Q350,350 250,300 T100,200"
                    fill="none"
                    stroke="#8fb38f"
                    strokeWidth="1.5"
                  />
                </svg>

                {/* Stats overlays */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-12 right-8 bg-white/90 backdrop-blur-sm rounded-2xl p-5 shadow-lg"
                >
                  <div className="text-3xl font-light text-[#6b8f6b]">73%</div>
                  <div className="text-sm text-[#2d3a2d]/60">Time saved</div>
                </motion.div>
                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  className="absolute bottom-16 left-8 bg-white/90 backdrop-blur-sm rounded-2xl p-5 shadow-lg"
                >
                  <div className="text-3xl font-light text-[#8fb38f]">2.5x</div>
                  <div className="text-sm text-[#2d3a2d]/60">Better retention</div>
                </motion.div>
              </div>
            </motion.div>

            {/* Content side */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-flex items-center gap-2 text-sm text-[#6b8f6b] mb-4">
                <Wind className="w-4 h-4" />
                Why Ratio Reader
              </span>
              <h2 className="text-4xl font-light tracking-tight mb-8">
                Less noise,<br />
                <span className="font-medium text-[#6b8f6b]">more wisdom</span>
              </h2>
              <div className="space-y-6">
                {[
                  "Intelligent summaries that capture the heart of any document",
                  "Key quotes highlighted and ready for reference",
                  "Contextual hints to deepen your understanding",
                  "Clean, distraction-free reading experience",
                ].map((benefit, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#a8c5a8] to-[#8fb38f] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-[#2d3a2d]/70 leading-relaxed">{benefit}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-32 px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="bg-white/60 backdrop-blur-sm rounded-[40px] p-12 border border-[#a8c5a8]/20">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#a8c5a8] to-[#d4b896] mx-auto mb-8 flex items-center justify-center">
              <span className="text-2xl text-white font-medium">MK</span>
            </div>
            <blockquote className="text-2xl font-light leading-relaxed text-[#2d3a2d]/80 mb-8">
              "Ratio Reader feels like having a wise friend who reads everything first and tells you exactly what matters. It's transformed how I approach research."
            </blockquote>
            <div>
              <div className="font-medium text-[#6b8f6b]">Maya Krishnan</div>
              <div className="text-sm text-[#2d3a2d]/50">Environmental Researcher</div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-gradient-to-br from-[#6b8f6b] to-[#8fb38f] rounded-[40px] p-12 md:p-16 text-center text-white relative overflow-hidden">
            {/* Organic background pattern */}
            <div className="absolute inset-0 opacity-10">
              <svg className="w-full h-full" viewBox="0 0 400 300">
                <circle cx="50" cy="50" r="100" fill="white" />
                <circle cx="350" cy="250" r="80" fill="white" />
                <circle cx="200" cy="150" r="60" fill="white" />
              </svg>
            </div>

            <div className="relative z-10">
              <Leaf className="w-12 h-12 mx-auto mb-6 opacity-80" />
              <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-6">
                Begin your journey
              </h2>
              <p className="text-xl text-white/80 mb-10 max-w-lg mx-auto">
                Let your reading flourish. Start with 50 free pages and discover a more mindful way to consume knowledge.
              </p>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-white text-[#6b8f6b] px-10 py-4 rounded-full text-lg font-medium shadow-lg hover:shadow-xl transition-all"
              >
                Start Reading Free
              </motion.button>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-8 border-t border-[#a8c5a8]/20">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#6b8f6b] to-[#a8c5a8] flex items-center justify-center">
                  <BookOpen className="w-4 h-4 text-white" />
                </div>
                <span className="text-lg font-medium">
                  ratio<span className="text-[#6b8f6b]">reader</span>
                </span>
              </div>
              <p className="text-sm text-[#2d3a2d]/50">
                Nurturing understanding, one document at a time.
              </p>
            </div>
            {[
              { title: "Product", links: ["Features", "Pricing", "API"] },
              { title: "Company", links: ["About", "Blog", "Careers"] },
              { title: "Support", links: ["Help", "Contact", "Privacy"] },
            ].map((col) => (
              <div key={col.title}>
                <h4 className="font-medium text-[#6b8f6b] mb-4">{col.title}</h4>
                <ul className="space-y-2">
                  {col.links.map((link) => (
                    <li key={link}>
                      <a href="#" className="text-sm text-[#2d3a2d]/50 hover:text-[#6b8f6b] transition-colors">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-12 pt-8 border-t border-[#a8c5a8]/10 text-center text-sm text-[#2d3a2d]/40">
            © 2024 Ratio Reader. Cultivating wisdom through technology.
          </div>
        </div>
      </footer>
    </div>
  );
}
