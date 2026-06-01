import { DesignSwitcher } from "@/components/DesignSwitcher";
import { motion } from "motion/react";
import { Droplets, Flame, Compass, Layers, ArrowRight } from "lucide-react";

function Blob({ className = "", colors, delay = 0 }: { className?: string; colors: string[]; delay?: number }) {
  return (
    <motion.div
      className={`absolute rounded-full blur-3xl pointer-events-none ${className}`}
      style={{
        background: `linear-gradient(${135 + delay * 30}deg, ${colors.join(", ")})`,
      }}
      animate={{
        scale: [1, 1.15, 0.95, 1.1, 1],
        rotate: [0, 15, -10, 5, 0],
        x: [0, 20, -15, 10, 0],
        y: [0, -20, 15, -10, 0],
      }}
      transition={{
        duration: 12 + delay * 2,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}

function GlassCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`rounded-3xl border border-white/20 p-8 backdrop-blur-xl ${className}`} style={{
      background: "linear-gradient(135deg, rgba(255,255,255,0.15), rgba(255,255,255,0.05))",
      boxShadow: "0 8px 32px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.3)",
    }}>
      {children}
    </div>
  );
}

function FloatingOrb({ size, color, position, duration = 8 }: { size: number; color: string; position: string; duration?: number }) {
  return (
    <motion.div
      className={`absolute rounded-full pointer-events-none ${position}`}
      style={{
        width: size,
        height: size,
        background: `radial-gradient(circle at 30% 30%, ${color}80, ${color}20, transparent)`,
        filter: "blur(1px)",
      }}
      animate={{
        y: [0, -30, 10, -20, 0],
        x: [0, 15, -10, 5, 0],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}

export function LiquidDreams() {
  return (
    <div
      className="relative min-h-screen overflow-hidden"
      style={{
        fontFamily: "'Fraunces', serif",
        background: "linear-gradient(160deg, #fef5f0 0%, #f5eef8 25%, #edf4fc 50%, #f0faf5 75%, #fef9f0 100%)",
      }}
    >
      <style>{`
        @keyframes morph {
          0%, 100% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
          25% { border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%; }
          50% { border-radius: 50% 60% 30% 60% / 30% 50% 70% 50%; }
          75% { border-radius: 60% 30% 50% 40% / 70% 40% 60% 30%; }
        }
        @keyframes drift {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          25% { transform: translate(30px, -20px) rotate(5deg); }
          50% { transform: translate(-20px, 20px) rotate(-3deg); }
          75% { transform: translate(10px, -10px) rotate(2deg); }
        }
      `}</style>

      <Blob colors={["#ffd6e8", "#d4a4ff"]} className="w-[600px] h-[600px] -top-40 -left-40 opacity-60" delay={0} />
      <Blob colors={["#a4d4ff", "#a4ffd4"]} className="w-[500px] h-[500px] top-1/3 -right-32 opacity-50" delay={1} />
      <Blob colors={["#ffdba4", "#ffa4d4"]} className="w-[400px] h-[400px] bottom-20 left-1/4 opacity-50" delay={2} />
      <Blob colors={["#d4ffe8", "#a4d4ff"]} className="w-[350px] h-[350px] top-1/2 left-1/2 opacity-40" delay={3} />

      <FloatingOrb size={80} color="#ff8fab" position="top-[20%] right-[15%]" duration={7} />
      <FloatingOrb size={60} color="#8fabff" position="top-[40%] left-[10%]" duration={9} />
      <FloatingOrb size={100} color="#abff8f" position="bottom-[15%] right-[25%]" duration={11} />
      <FloatingOrb size={50} color="#ff8fab" position="bottom-[30%] left-[20%]" duration={6} />

      <DesignSwitcher />

      <section className="relative z-10 max-w-5xl mx-auto px-6 pt-24 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center"
        >
          <motion.div
            className="inline-block mb-6 px-5 py-2 rounded-full text-sm"
            style={{
              background: "rgba(255,255,255,0.4)",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(255,255,255,0.5)",
              color: "#7c5295",
              fontFamily: "'Instrument Sans', sans-serif",
            }}
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            ✦ reading, but make it dreamy ✦
          </motion.div>

          <h1 className="text-6xl md:text-9xl leading-[0.85] mb-8" style={{ fontFamily: "'Playfair Display', serif" }}>
            <span className="italic" style={{ color: "#9b59b6" }}>read</span>{" "}
            <span style={{ color: "#2c3e50" }}>the</span>
            <br />
            <span style={{
              background: "linear-gradient(90deg, #ff8fab, #8fabff, #abff8f, #ffcc8f)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}>
              essence
            </span>
          </h1>

          <p className="max-w-xl mx-auto text-lg md:text-xl leading-relaxed" style={{ color: "#5a5a7a", fontFamily: "'Instrument Sans', sans-serif" }}>
            Ratio Reader dissolves dense PDFs into their most beautiful parts — insights float to the surface like dreams you actually remember.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="mt-10 inline-flex items-center gap-3 px-8 py-4 rounded-full text-lg font-medium text-white"
            style={{
              fontFamily: "'Instrument Sans', sans-serif",
              background: "linear-gradient(135deg, #ff8fab, #8fabff)",
              boxShadow: "0 8px 30px rgba(143, 171, 255, 0.3)",
            }}
          >
            float a PDF in
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </section>

      <section className="relative z-10 max-w-5xl mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl leading-tight" style={{ fontFamily: "'Playfair Display', serif", color: "#2c3e50" }}>
            three gentle <em className="italic" style={{ color: "#9b59b6" }}>waves</em>
          </h2>
          <p className="mt-4 text-lg" style={{ color: "#7a7a9a", fontFamily: "'Instrument Sans', sans-serif" }}>
            how your document flows into understanding
          </p>
        </motion.div>

        <div className="space-y-6">
          {[
            {
              num: "i.",
              title: "drop it in",
              desc: "Upload any PDF. Let it settle. Ratio reads alongside you — patient, unhurried, curious.",
              colors: ["#ffd6e8", "#ffeaf4"],
              icon: Droplets,
            },
            {
              num: "ii.",
              title: "watch it bloom",
              desc: "Key ideas unfurl. Quotes crystallize. Connections reveal themselves like petals opening at dawn.",
              colors: ["#d4e8ff", "#eaf4ff"],
              icon: Flame,
            },
            {
              num: "iii.",
              title: "absorb gently",
              desc: "Read the distilled essence at your own pace. Hints and insights guide you like a warm hand.",
              colors: ["#d9ffd9", "#eaffea"],
              icon: Compass,
            },
          ].map((item, i) => (
            <motion.div
              key={item.num}
              initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
            >
              <GlassCard className={`md:max-w-${i % 2 === 0 ? "lg" : "2xl"} ${i % 2 === 0 ? "" : "md:ml-auto"}`}>
                <div className="flex items-start gap-6">
                  <div
                    className="flex-shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center"
                    style={{
                      background: `linear-gradient(135deg, ${item.colors[0]}, ${item.colors[1]})`,
                      boxShadow: `0 8px 20px ${item.colors[0]}60`,
                    }}
                  >
                    <item.icon className="w-7 h-7" style={{ color: "#6b4c8a" }} strokeWidth={1.5} />
                  </div>
                  <div>
                    <div className="flex items-baseline gap-3 mb-2">
                      <span className="text-2xl italic" style={{ color: "#9b59b6", fontFamily: "'Playfair Display', serif" }}>
                        {item.num}
                      </span>
                      <h3 className="text-2xl md:text-3xl" style={{ fontFamily: "'Playfair Display', serif", color: "#2c3e50" }}>
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-base md:text-lg leading-relaxed" style={{ color: "#6a6a8a", fontFamily: "'Instrument Sans', sans-serif" }}>
                      {item.desc}
                    </p>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="relative z-10 max-w-5xl mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-6xl leading-tight" style={{ fontFamily: "'Playfair Display', serif", color: "#2c3e50" }}>
            what <em className="italic" style={{ color: "#9b59b6" }}>surfaces</em>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {[
            { title: "The heart of it", desc: "Core arguments, thesis statements, the ideas the whole piece orbits around.", gradient: "linear-gradient(135deg, #ffd6e8, #ffe0f0)", textColor: "#8b3a62" },
            { title: "Killer lines", desc: "The sentences worth bookmarking. Quotable, screenshotable, unforgettable.", gradient: "linear-gradient(135deg, #d4e8ff, #e0f0ff)", textColor: "#3a628b" },
            { title: "Hidden gems", desc: "Footnotes, asides, subtle connections that most readers miss. We catch them all.", gradient: "linear-gradient(135deg, #d9ffd9, #e0ffe0)", textColor: "#3a8b62" },
            { title: "Aha! moments", desc: "Context hints that make everything click. Background info that fills in the gaps.", gradient: "linear-gradient(135deg, #fff0d4, #fff5e0)", textColor: "#8b6c3a" },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div
                className="rounded-3xl p-8 h-full"
                style={{
                  background: item.gradient,
                  boxShadow: "0 10px 40px rgba(0,0,0,0.05)",
                }}
              >
                <Layers className="w-6 h-6 mb-4 opacity-40" style={{ color: item.textColor }} strokeWidth={1.5} />
                <h3 className="text-2xl md:text-3xl mb-3" style={{ fontFamily: "'Playfair Display', serif", color: item.textColor }}>
                  {item.title}
                </h3>
                <p className="text-base leading-relaxed" style={{ color: `${item.textColor}cc`, fontFamily: "'Instrument Sans', sans-serif" }}>
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="relative z-10 max-w-4xl mx-auto px-6 py-24 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-7xl leading-tight mb-6" style={{ fontFamily: "'Playfair Display', serif", color: "#2c3e50" }}>
            reading should feel
            <br />
            <em className="italic" style={{
              background: "linear-gradient(90deg, #ff8fab, #8fabff, #abff8f)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}>
              like this
            </em>
          </h2>
          <p className="text-lg mb-10 max-w-lg mx-auto" style={{ color: "#7a7a9a", fontFamily: "'Instrument Sans', sans-serif" }}>
            soft, curious, unhurried. let ratio reader do the heavy lifting while you enjoy the view.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-3 px-10 py-5 rounded-full text-lg font-medium text-white"
            style={{
              fontFamily: "'Instrument Sans', sans-serif",
              background: "linear-gradient(135deg, #9b59b6, #8fabff)",
              boxShadow: "0 12px 40px rgba(155, 89, 182, 0.3)",
            }}
          >
            drift into reading
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </section>

      <footer className="relative z-10 py-8 text-center text-sm" style={{ color: "#9a9ab0", fontFamily: "'Instrument Sans', sans-serif" }}>
        made with softness, for softer reading
      </footer>
    </div>
  );
}
