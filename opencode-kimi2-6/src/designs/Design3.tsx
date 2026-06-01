import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Leaf, FileUp, TreePine, Sun, Droplets, Sprout, Wind, Flower2 } from "lucide-react";

function OrganicBlob({ className, color, delay = 0 }: any) {
  return (
    <motion.div
      initial={{ scale: 0, rotate: 0 }}
      whileInView={{ scale: 1, rotate: [0, 5, -3, 0] }}
      viewport={{ once: true }}
      transition={{ delay, duration: 2, type: "spring", stiffness: 50 }}
      className={`absolute pointer-events-none ${className}`}
      style={{
        backgroundColor: color,
        borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%",
        filter: "blur(1px)",
      }}
    >
      <motion.div
        animate={{
          borderRadius: ["60% 40% 30% 70% / 60% 30% 70% 40%", "30% 60% 70% 40% / 50% 60% 30% 60%", "60% 40% 30% 70% / 60% 30% 70% 40%"],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="w-full h-full"
      />
    </motion.div>
  );
}

function GrowingLine({ delay = 0 }: any) {
  return (
    <motion.div
      initial={{ scaleY: 0 }}
      whileInView={{ scaleY: 1 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 1.5, ease: "easeOut" }}
      className="w-[2px] h-20 origin-top mx-auto"
      style={{ backgroundColor: "#87A878" }}
    />
  );
}

function FeatureLeaf({ icon, title, desc, delay, align = "left" }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, x: align === "left" ? -60 : 60 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ delay, duration: 0.8, type: "spring", stiffness: 100 }}
      className={`flex items-start gap-6 ${align === "right" ? "flex-row-reverse text-right" : ""}`}
    >
      <motion.div
        whileHover={{ rotate: 360, scale: 1.1 }}
        transition={{ duration: 0.6 }}
        className="flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center"
        style={{
          backgroundColor: "rgba(135, 168, 120, 0.15)",
          border: "1px solid rgba(135, 168, 120, 0.3)",
        }}
      >
        {icon}
      </motion.div>
      <div>
        <h3 className="text-xl font-bold mb-2" style={{ color: "#1B3A2F", fontFamily: "'Alegreya', serif" }}>{title}</h3>
        <p className="text-sm leading-relaxed" style={{ color: "#4A6B42", fontFamily: "'Quattrocento Sans', sans-serif" }}>{desc}</p>
      </div>
    </motion.div>
  );
}

export function Design3() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const sunY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const leafRotate = useTransform(scrollYProgress, [0, 1], [0, 20]);

  useEffect(() => {
    document.body.style.backgroundColor = "#FAF7F0";
    return () => { document.body.style.backgroundColor = ""; };
  }, []);

  const seeds = [
    { number: "01", title: "Plant", desc: "Upload your PDF like planting a seed. Our system recognizes and categorizes the document instantly." },
    { number: "02", title: "Nourish", desc: "Deep learning algorithms extract and map the conceptual structure of your content." },
    { number: "03", title: "Bloom", desc: "Receive beautiful summaries and insights that grow your knowledge organically." },
    { number: "04", title: "Harvest", desc: "Collect, organize, and share your findings. Build a permanent library of wisdom." },
  ];

  return (
    <div ref={containerRef} className="min-h-[200vh] w-full relative overflow-hidden" style={{ backgroundColor: "#FAF7F0", color: "#1B3A2F" }}>
      {/* Background organic elements */}
      <div className="fixed inset-0 pointer-events-none" style={{ zIndex: 0 }}>
        <OrganicBlob className="top-[-10%] right-[-5%] w-[500px] h-[500px] opacity-20" color="#87A878" delay={0} />
        <OrganicBlob className="bottom-[10%] left-[-10%] w-[400px] h-[400px] opacity-15" color="#CB5A28" delay={0.3} />
        <OrganicBlob className="top-[40%] right-[20%] w-[200px] h-[200px] opacity-10" color="#6B8F5E" delay={0.6} />
      </div>

      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-40 px-8 py-6 flex items-center justify-between"
      >
        <div className="flex items-center gap-3">
          <motion.div
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.6 }}
            className="w-12 h-12 rounded-full flex items-center justify-center"
            style={{ backgroundColor: "#87A878" }}
          >
            <Leaf size={22} className="text-white" />
          </motion.div>
          <span className="text-2xl font-bold" style={{ color: "#1B3A2F", fontFamily: "'Alegreya', serif" }}>
            Ratio Reader
          </span>
        </div>
        <div className="hidden md:flex items-center gap-10 text-sm" style={{ fontFamily: "'Quattrocento Sans', sans-serif", color: "#4A6B42" }}>
          {["Philosophy", "Process", "Features", "Ecology"].map((item, i) => (
            <a key={i} href="#" className="hover:text-[#CB5A28] transition-colors relative group">
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#CB5A28] group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-3 rounded-full text-sm font-bold tracking-wide transition-all duration-300"
          style={{ backgroundColor: "#CB5A28", color: "white" }}
        >
          Join the Garden
        </motion.button>
      </motion.nav>

      {/* Hero */}
      <section className="relative z-20 min-h-screen flex items-center px-8 pt-10 pb-20">
        <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-12 gap-8 items-center">
          {/* Left text */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, type: "spring", stiffness: 50 }}
            className="lg:col-span-7"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8" style={{ backgroundColor: "rgba(135, 168, 120, 0.15)", border: "1px solid rgba(135, 168, 120, 0.3)" }}>
              <Sprout size={14} style={{ color: "#87A878" }} />
              <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "#4A6B42" }}>Nurturing Ideas Daily</span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.05] mb-8" style={{ fontFamily: "'Alegreya', serif", color: "#1B3A2F" }}>
              Where Ideas
              <span className="block italic" style={{ color: "#CB5A28" }}>Take Root</span>
              and Flourish
            </h1>

            <p className="text-lg md:text-xl leading-relaxed mb-10 max-w-lg" style={{ color: "#4A6B42", fontFamily: "'Quattrocento Sans', sans-serif" }}>
              Just as gardens grow from careful tending, knowledge grows from deep understanding. Upload a PDF and watch your comprehension bloom.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 10px 40px rgba(203, 90, 40, 0.3)" }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-full font-bold tracking-wide text-white flex items-center gap-3 transition-all duration-300"
                style={{ backgroundColor: "#CB5A28" }}
              >
                Plant Your First Seed
                <Droplets size={18} />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-full font-bold tracking-wide text-sm border-2 transition-all duration-300"
                style={{ borderColor: "#87A878", color: "#1B3A2F" }}
              >
                Explore the Ecosystem
              </motion.button>
            </div>
          </motion.div>

          {/* Right visual */}
          <motion.div
            style={{ rotate: leafRotate }}
            className="lg:col-span-5 relative hidden lg:flex justify-center items-center"
          >
            <div className="relative w-80 h-96">
              {/* Main book illustration made with CSS shapes */}
              <motion.div
                animate={{ y: [0, -15, 0], rotate: [0, 2, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-80 rounded-[30%_70%_70%_30%/30%_30%_70%_70%]"
                style={{ backgroundColor: "rgba(135, 168, 120, 0.15)", border: "2px solid rgba(135, 168, 120, 0.2)" }}
              >
                <div className="absolute inset-8 flex flex-col items-center justify-center gap-3">
                  <FileUp size={32} style={{ color: "#87A878" }} />
                  <div className="w-32 h-2 rounded-full" style={{ backgroundColor: "rgba(135, 168, 120, 0.3)" }} />
                  <div className="w-24 h-2 rounded-full" style={{ backgroundColor: "rgba(135, 168, 120, 0.2)" }} />
                  <div className="w-28 h-2 rounded-full" style={{ backgroundColor: "rgba(135, 168, 120, 0.25)" }} />
                  <div className="w-20 h-2 rounded-full" style={{ backgroundColor: "rgba(135, 168, 120, 0.15)" }} />
                </div>
              </motion.div>

              {/* Tiny leaf decorations */}
              <motion.div
                animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
                transition={{ duration: 5, delay: 0.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-0 right-0"
              >
                <Leaf size={24} style={{ color: "#87A878" }} />
              </motion.div>
              <motion.div
                animate={{ y: [0, -15, 0], rotate: [0, -15, 0] }}
                transition={{ duration: 7, delay: 1, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-10 left-4"
              >
                <Leaf size={20} style={{ color: "#6B8F5E", transform: "scaleX(-1)" }} />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Spacer with growing lines */}
      <section className="relative z-20 py-16 flex justify-center">
        <GrowingLine delay={0} />
      </section>

      {/* Seeds/Steps Section */}
      <section className="relative z-20 py-24 px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <div className="text-xs font-bold uppercase tracking-[0.3em] mb-4" style={{ color: "#87A878" }}>The Cycle</div>
            <h2 className="text-4xl md:text-6xl font-bold mb-6" style={{ fontFamily: "'Alegreya', serif", color: "#1B3A2F" }}>
              From <span className="italic" style={{ color: "#CB5A28" }}>Seed</span> to <span className="italic" style={{ color: "#CB5A28" }}>Harvest</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {seeds.map((seed, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.7 }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className="group relative p-8 rounded-[60px_40px_50px_70px/50px_60px_30px_50px]"
                style={{ backgroundColor: "rgba(135, 168, 120, 0.08)", border: "1px solid rgba(135, 168, 120, 0.15)" }}
              >
                <div className="text-5xl font-black opacity-10 mb-4" style={{ color: "#87A878" }}>{seed.number}</div>
                <div className="w-10 h-10 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: i % 2 === 0 ? "#87A878" : "#CB5A28" }}>
                  {i === 0 && <Sprout size={20} className="text-white" />}
                  {i === 1 && <TreePine size={20} className="text-white" />}
                  {i === 2 && <Flower2 size={20} className="text-white" />}
                  {i === 3 && <Sun size={20} className="text-white" />}
                </div>
                <h3 className="text-xl font-bold mb-3" style={{ fontFamily: "'Alegreya', serif", color: "#1B3A2F" }}>{seed.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#4A6B42", fontFamily: "'Quattrocento Sans', sans-serif" }}>{seed.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Zig-Zag */}
      <section className="relative z-20 py-24 px-8">
        <div className="max-w-5xl mx-auto space-y-24">
          <FeatureLeaf
            icon={<FileUp size={24} style={{ color: "#87A878" }} />}
            title="Organic Upload"
            desc="Drag and drop any PDF like scattering seeds. We accept all formats and begin tending to your content immediately."
            delay={0}
          />
          <FeatureLeaf
            icon={<TreePine size={24} style={{ color: "#6B8F5E" }} />}
            title="Deep Root Analysis"
            desc="Our algorithms dig deep into the soil of your documents, establishing strong conceptual roots that connect every idea."
            delay={0.1}
            align="right"
          />
          <FeatureLeaf
            icon={<Wind size={24} style={{ color: "#4A6B42" }} />}
            title="Pollen Knowledge"
            desc="Insights spread naturally between documents. Cross-referencing happens organically, creating a thriving ecosystem of ideas."
            delay={0.2}
          />
          <FeatureLeaf
            icon={<Sun size={24} style={{ color: "#CB5A28" }} />}
            title="Seasonal Growth"
            desc="Your knowledge library evolves and matures over time. Revisit summaries and watch your understanding deepen with each reading."
            delay={0.3}
            align="right"
          />
        </div>
      </section>

      {/* Quote / Philosophy */}
      <section className="relative z-20 py-32 px-8">
        <div className="max-w-4xl mx-auto text-center relative">
          <motion.div style={{ y: sunY }} className="absolute -top-20 left-1/2 -translate-x-1/2">
            <div className="w-32 h-32 rounded-full opacity-20" style={{ backgroundColor: "#CB5A28", filter: "blur(40px)" }} />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="text-7xl font-serif opacity-20 mb-4" style={{ color: "#87A878", fontFamily: "'Alegreya', serif" }}>"</div>
            <blockquote className="text-3xl md:text-4xl leading-relaxed italic mb-8" style={{ fontFamily: "'Alegreya', serif", color: "#1B3A2F" }}>
              In nature, nothing exists alone.<br />
              Neither do your ideas.
            </blockquote>
            <div className="flex justify-center mb-2">
              <div className="w-12 h-[1px]" style={{ backgroundColor: "#CB5A28" }} />
            </div>
            <p className="text-sm font-bold uppercase tracking-widest" style={{ color: "#4A6B42" }}>— The Philosophy of Ratio Reader</p>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative z-20 py-32 px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center relative p-16 rounded-[80px_60px_120px_80px/80px_100px_60px_100px]"
          style={{ backgroundColor: "#1B3A2F", color: "#FAF7F0" }}
        >
          <OrganicBlob className="top-[-30px] left-[-30px] w-40 h-40 opacity-30" color="#87A878" delay={0} />
          <OrganicBlob className="bottom-[-20px] right-[-20px] w-32 h-32 opacity-20" color="#CB5A28" delay={0.3} />
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-bold mb-6" style={{ fontFamily: "'Alegreya', serif" }}>
              Ready to <span className="italic" style={{ color: "#CB5A28" }}>Cultivate</span><br />
              Your Mind?
            </h2>
            <p className="text-lg mb-10 opacity-80 max-w-lg mx-auto" style={{ fontFamily: "'Quattrocento Sans', sans-serif" }}>
              Every great library started with a single book. Plant your first PDF and begin growing.
            </p>
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 20px 60px rgba(203, 90, 40, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 rounded-full font-bold text-lg tracking-wide text-white"
              style={{ backgroundColor: "#CB5A28" }}
            >
              Begin Your Journey
            </motion.button>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="relative z-20 py-16 px-8" style={{ backgroundColor: "#1B3A2F", color: "#87A878" }}>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: "rgba(135, 168, 120, 0.2)" }}>
              <Leaf size={18} className="text-[#87A878]" />
            </div>
            <span className="text-xl font-bold" style={{ fontFamily: "'Alegreya', serif", color: "#FAF7F0" }}>Ratio Reader</span>
          </div>
          <div className="flex gap-8 text-sm" style={{ color: "rgba(135, 168, 120, 0.7)" }}>
            {["Philosophy", "Careers", "Privacy"].map((item, i) => (
              <a key={i} href="#" className="hover:text-[#CB5A28] transition-colors">{item}</a>
            ))}
          </div>
          <p className="text-sm opacity-50">© 2026 Ratio Reader. Cultivated with care.</p>
        </div>
      </footer>
    </div>
  );
}
