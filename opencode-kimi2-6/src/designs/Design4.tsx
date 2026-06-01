import { useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Triangle, Square, Circle, ArrowUpRight, FileText, Brain, Target, Sliders, Crosshair, Layers, Hexagon, Ratio } from "lucide-react";

function GeometricShape({ type, size, color, rotation, delay, className = "" }: any) {
  const shapes: any = {
    triangle: <Triangle size={size} fill={color} stroke={color} />,
    square: <Square size={size} fill={color} stroke={color} />,
    circle: <Circle size={size} fill={color} stroke={color} />,
    hexagon: <Hexagon size={size} fill={color} stroke={color} />,
  };

  return (
    <motion.div
      initial={{ opacity: 0, rotate: 0, scale: 0 }}
      whileInView={{ opacity: 1, rotate: rotation, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.6, type: "spring", stiffness: 100 }}
      whileHover={{ scale: 1.2, rotate: rotation + 15 }}
      className={`absolute ${className}`}
      style={{ color }}
    >
      {shapes[type] || shapes.square}
    </motion.div>
  );
}

function DiagonalStrip() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div
        className="absolute w-[200%] h-24 bg-[#DE1A1A] opacity-10 -left-[50%]"
        style={{ top: "30%", transform: "rotate(-5deg)" }}
      />
      <div
        className="absolute w-[200%] h-16 bg-[#F4D35E] opacity-15 -left-[50%]"
        style={{ top: "60%", transform: "rotate(-5deg)" }}
      />
    </div>
  );
}

export function Design4() {
  const { scrollYProgress } = useScroll();
  const diagX = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const skewY = useTransform(scrollYProgress, [0, 1], [0, -3]);

  useEffect(() => {
    document.body.style.backgroundColor = "#F8F7F4";
    return () => { document.body.style.backgroundColor = ""; };
  }, []);

  const steps = [
    { num: "01", title: "INGEST", desc: "PDF enters the system" },
    { num: "02", title: "DECONSTRUCT", desc: "Content is broken into elements" },
    { num: "03", title: "SYNTHESIZE", desc: "Meaning is reconstructed" },
    { num: "04", title: "DEPLOY", desc: "Your summary is ready" },
  ];

  const features = [
    { icon: <Brain size={32} />, title: "NEURAL EXTRACT", desc: "Machine intelligence decomposes text into structural elements" },
    { icon: <Target size={32} />, title: "KEY VECTORS", desc: "Central concepts identified with surgical precision" },
    { icon: <Sliders size={32} />, title: "DEPTH CONTROL", desc: "Adjust summary granularity from outline to detailed" },
    { icon: <Crosshair size={32} />, title: "CROSS-SCAN", desc: "Find connections across all your documents" },
    { icon: <Layers size={32} />, title: "STACK VIEW", desc: "Layered analysis: themes, arguments, evidence" },
    { icon: <FileText size={32} />, title: "EXPORT BLOCKS", desc: "Structured output in clean, usable formats" },
  ];

  return (
    <div className="w-full relative overflow-hidden" style={{ backgroundColor: "#F8F7F4", color: "#1A1A1A", fontFamily: "'Archivo Black', sans-serif" }}>
      {/* Background diagonal */}
      <DiagonalStrip />
      <motion.div style={{ x: diagX }} className="fixed inset-0 pointer-events-none" />

      {/* Floating geometric shapes */}
      <GeometricShape type="triangle" size={80} color="#DE1A1A" rotation={20} delay={0.2} className="top-[15%] left-[5%] z-10 hidden lg:block" />
      <GeometricShape type="square" size={60} color="#F4D35E" rotation={-15} delay={0.4} className="top-[50%] right-[8%] z-10 hidden lg:block" />
      <GeometricShape type="circle" size={50} color="#1B998B" rotation={0} delay={0.6} className="top-[70%] left-[10%] z-10 hidden lg:block" />
      <GeometricShape type="hexagon" size={70} color="#DE1A1A" rotation={30} delay={0.8} className="bottom-[15%] right-[5%] z-10 hidden lg:block" />

      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-40 px-8 py-6 flex items-center justify-between border-b-4 border-black"
      >
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 bg-black flex items-center justify-center text-white">
            <Ratio size={20} />
          </div>
          <div>
            <span className="text-xl font-black tracking-tight uppercase">Ratio Reader</span>
          </div>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-bold uppercase tracking-wider">
          {["API", "Methodology", "Enterprise"].map((item, i) => (
            <a key={i} href="#" className="hover:text-[#DE1A1A] transition-colors relative">
              {item}
              <motion.div className="absolute -bottom-1 left-0 h-1 bg-[#DE1A1A]" initial={{ width: 0 }} whileHover={{ width: "100%" }} />
            </a>
          ))}
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-3 bg-[#DE1A1A] text-white font-bold uppercase text-sm tracking-wider hover:bg-black transition-colors"
        >
          Initialize
        </motion.button>
      </motion.nav>

      {/* Hero - Asymmetric */}
      <section className="relative z-20 min-h-screen grid lg:grid-cols-12 gap-0">
        {/* Left heavy block */}
        <motion.div
          style={{ skewY }}
          className="lg:col-span-7 bg-black text-white p-12 md:p-20 flex flex-col justify-center relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-48 h-48 bg-[#DE1A1A]" />
          <div className="absolute bottom-10 right-10 w-24 h-24 bg-[#F4D35E]" />
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative z-10"
          >
            <div className="inline-block px-4 py-2 bg-[#F4D35E] text-black text-xs font-black uppercase tracking-widest mb-8">
              v4.0 — Now Available
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl leading-[0.9] mb-8 tracking-tighter">
              DECODE<br />
              <span className="text-[#DE1A1A]">TEXT</span><br />
              AT SCALE
            </h1>
            <p className="text-lg text-gray-400 max-w-md mb-10 leading-relaxed" style={{ fontFamily: "'Bitter', serif" }}>
              Industrial-strength PDF analysis that breaks down any document into pure, actionable intelligence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 bg-[#DE1A1A] text-white font-black text-sm uppercase tracking-widest flex items-center gap-3 hover:bg-[#F4D35E] hover:text-black transition-all duration-300"
              >
                Deploy Now
                <ArrowUpRight size={18} />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 border-2 border-white text-white font-black text-sm uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300"
              >
                View Specs
              </motion.button>
            </div>
          </motion.div>
        </motion.div>

        {/* Right lighter block with stats */}
        <div className="lg:col-span-5 flex flex-col">
          <div className="flex-1 p-12 md:p-16 flex flex-col justify-center border-b-4 border-black">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <div className="text-xs font-black uppercase tracking-widest text-[#DE1A1A] mb-2">Processing Output</div>
              <div className="text-6xl md:text-7xl font-black tracking-tighter">2.4M</div>
              <div className="text-sm uppercase tracking-wider font-bold mt-1" style={{ fontFamily: "'Bitter', serif" }}>Documents Analyzed</div>
            </motion.div>
          </div>
          <div className="flex-1 p-12 md:p-16 flex flex-col justify-center" style={{ backgroundColor: "#F4D35E" }}>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <div className="text-xs font-black uppercase tracking-widest text-black mb-2">Engine Accuracy</div>
              <div className="text-6xl md:text-7xl font-black tracking-tighter text-black">94%</div>
              <div className="text-sm uppercase tracking-wider font-bold mt-1 text-black">Average F1 Score</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Strip */}
      <section className="relative z-20 py-20 border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-0">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className={`p-8 ${i < steps.length - 1 ? "border-r-2 border-black" : ""}`}
              >
                <div className="text-4xl font-black text-[#DE1A1A] mb-2">{step.num}</div>
                <div className="text-lg font-black uppercase tracking-wider mb-2">{step.title}</div>
                <div className="text-sm text-gray-600" style={{ fontFamily: "'Bitter', serif" }}>{step.desc}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features - Diagonal Grid */}
      <section className="relative z-20 py-24">
        <div className="max-w-7xl mx-auto px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-1 bg-[#DE1A1A]" />
              <span className="text-xs font-black uppercase tracking-widest">Capabilities</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase">
              The <span className="text-[#DE1A1A]">Engine</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className={`p-10 border-2 border-black transition-colors duration-300 hover:bg-black hover:text-white group ${
                  i % 2 === 0 ? "border-r-0 md:border-r-2" : ""
                } ${i < features.length - 2 ? "border-b-0 md:border-b-2" : ""}`}
              >
                <div className="flex items-start gap-6">
                  <div className="text-[#DE1A1A] group-hover:text-[#F4D35E] transition-colors">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-black uppercase tracking-wider mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-sm leading-relaxed opacity-70" style={{ fontFamily: "'Bitter', serif" }}>
                      {feature.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Manifesto Block */}
      <section className="relative z-20 py-32 border-t-4 border-black" style={{ backgroundColor: "#DE1A1A" }}>
        <div className="max-w-5xl mx-auto px-8 text-center relative overflow-hidden">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-xs font-black uppercase tracking-widest text-[#F4D35E] mb-6">Our Position</div>
            <h2 className="text-4xl md:text-6xl font-black leading-tight text-white mb-8 tracking-tight">
              INFORMATION SHOULD<br />
              NOT BE <span className="text-black">TRAPPED</span> IN PAGES.<br />
              IT SHOULD BE <span className="text-[#F4D35E]">FREE.</span>
            </h2>
            <div className="flex justify-center">
              <div className="w-24 h-1 bg-white" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Block */}
      <section className="relative z-20 py-32">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid md:grid-cols-2 gap-0 border-4 border-black">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-12 md:p-20 flex flex-col justify-center"
            >
              <h2 className="text-4xl md:text-6xl font-black leading-tight mb-6 tracking-tight">
                READY TO<br />
                <span className="text-[#DE1A1A]">DECONSTRUCT</span><br />
                YOUR FIRST DOC?
              </h2>
              <p className="text-lg text-gray-600 mb-8" style={{ fontFamily: "'Bitter', serif" }}>
                No setup required. Upload and analyze in under 3 seconds.
              </p>
              <div className="flex gap-4">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-4 bg-black text-white font-black text-sm uppercase tracking-widest hover:bg-[#DE1A1A] transition-colors flex items-center gap-2"
                >
                  Begin <ArrowUpRight size={16} />
                </motion.button>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-black text-white p-12 md:p-20 flex flex-col justify-center relative overflow-hidden"
            >
              <div className="absolute top-4 right-4 w-32 h-32 border-2 border-[#F4D35E] opacity-30" />
              <div className="absolute bottom-4 left-4 w-20 h-20 bg-[#DE1A1A] opacity-40" />
              <div className="relative">
                <div className="text-xs font-black uppercase tracking-widest text-[#F4D35E] mb-4">Current Load</div>
                <div className="text-5xl font-black mb-2">97.8%</div>
                <div className="w-full h-2 bg-gray-800 mb-4">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "97.8%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, delay: 0.3 }}
                    className="h-full bg-[#F4D35E]"
                  />
                </div>
                <div className="text-sm text-gray-400" style={{ fontFamily: "'Bitter', serif" }}>
                  System operating at optimal capacity. New users prioritized.
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-20 py-12 px-8 border-t-4 border-black">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-black flex items-center justify-center text-white">
              <Ratio size={16} />
            </div>
            <span className="font-black uppercase tracking-wider text-sm">Ratio Reader</span>
          </div>
          <div className="flex gap-8 text-xs font-black uppercase tracking-widest text-gray-500">
            {["Terms", "Privacy", "API Docs"].map((item, i) => (
              <a key={i} href="#" className="hover:text-[#DE1A1A] transition-colors">{item}</a>
            ))}
          </div>
          <div className="text-xs text-gray-400" style={{ fontFamily: "'Bitter', serif" }}>
            © 2026 RATIO READER // BUILT FOR SCALE
          </div>
        </div>
      </footer>
    </div>
  );
}
