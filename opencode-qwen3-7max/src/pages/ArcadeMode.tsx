import { DesignSwitcher } from "@/components/DesignSwitcher";
import { motion } from "motion/react";
import { useState, useEffect } from "react";
import { Upload, Brain, Zap, Trophy, Heart, Star } from "lucide-react";

function PixelBorder({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`relative p-1 ${className}`}>
      <div className="absolute inset-0" style={{
        background: "linear-gradient(90deg, #ff004d, #ffa300, #ffec27, #00e436, #29adff, #83769c, #ff004d)",
        backgroundSize: "400% 100%",
        animation: "rainbow 4s linear infinite",
        imageRendering: "pixelated",
      }} />
      <div className="relative bg-[#1d2b53]">{children}</div>
    </div>
  );
}

function HealthBar({ value, max = 5, color = "#00e436", label }: { value: number; max?: number; color?: string; label: string }) {
  return (
    <div className="flex items-center gap-3">
      <span className="text-xs" style={{ fontFamily: "'Press Start 2P', monospace", color: "#c2c3c7" }}>
        {label}
      </span>
      <div className="flex gap-1">
        {Array.from({ length: max }).map((_, i) => (
          <div
            key={i}
            className="w-4 h-4 transition-all duration-300"
            style={{
              backgroundColor: i < value ? color : "#1d2b53",
              border: `2px solid ${color}`,
              boxShadow: i < value ? `0 0 8px ${color}60` : "none",
            }}
          />
        ))}
      </div>
    </div>
  );
}

function ScoreDisplay({ score, label }: { score: string; label: string }) {
  return (
    <div className="text-center">
      <div className="text-2xl md:text-3xl" style={{ fontFamily: "'Press Start 2P', monospace", color: "#ffec27", textShadow: "3px 3px 0 #ff004d" }}>
        {score}
      </div>
      <div className="text-[8px] mt-1" style={{ fontFamily: "'Press Start 2P', monospace", color: "#83769c" }}>
        {label}
      </div>
    </div>
  );
}

function TypewriterText({ text, delay = 0, className = "" }: { text: string; delay?: number; className?: string }) {
  const [displayed, setDisplayed] = useState("");
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const startTimer = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(startTimer);
  }, [delay]);

  useEffect(() => {
    if (!started) return;
    let i = 0;
    const interval = setInterval(() => {
      if (i <= text.length) {
        setDisplayed(text.slice(0, i));
        i++;
      } else {
        clearInterval(interval);
      }
    }, 30);
    return () => clearInterval(interval);
  }, [started, text]);

  return <span className={className}>{displayed}<span className="animate-pulse">_</span></span>;
}

const STARS = Array.from({ length: 50 }).map((_, i) => {
  const seed = (i * 9301 + 49297) % 233280;
  const r = (n: number) => ((seed * (n + 1) * 7 + 13) % 1000) / 1000;
  return {
    left: `${r(i) * 100}%`,
    top: `${r(i + 100) * 100}%`,
    animationDelay: `${r(i + 200) * 3}s`,
    animationDuration: `${1 + r(i + 300) * 2}s`,
    opacity: r(i + 400) * 0.7 + 0.1,
  };
});

function StarField() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {STARS.map((style, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-white animate-pulse"
          style={style}
        />
      ))}
    </div>
  );
}

export function ArcadeMode() {
  return (
    <div className="relative min-h-screen bg-[#1d2b53] text-white overflow-hidden" style={{ fontFamily: "'VT323', monospace" }}>
      <style>{`
        @keyframes rainbow {
          0% { background-position: 0% 50%; }
          100% { background-position: 400% 50%; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>

      <StarField />
      <DesignSwitcher />

      <div className="absolute inset-0 pointer-events-none z-10" style={{
        backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 1px, rgba(0,0,0,0.15) 1px, rgba(0,0,0,0.15) 2px)",
      }} />

      <div className="absolute inset-0 pointer-events-none z-10" style={{
        background: "radial-gradient(ellipse at center, transparent 50%, rgba(0,0,0,0.4) 100%)",
      }} />

      <section className="relative z-20 max-w-5xl mx-auto px-6 pt-20 pb-16">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center mb-4"
        >
          <div className="inline-block mb-8">
            <div className="text-xs" style={{ fontFamily: "'Press Start 2P', monospace", color: "#ff004d" }}>
              PRESS START TO PLAY
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <PixelBorder className="max-w-3xl mx-auto">
            <div className="p-8 md:p-12 text-center">
              <div className="text-[10px] text-[#83769c] mb-4" style={{ fontFamily: "'Press Start 2P', monospace" }}>
                ★ PLAYER 1 READY ★
              </div>

              <h1 className="text-4xl md:text-6xl leading-tight mb-6" style={{ fontFamily: "'Press Start 2P', monospace" }}>
                <span style={{ color: "#ff004d", textShadow: "4px 4px 0 #7e2553" }}>RATIO</span>
                <br />
                <span style={{ color: "#00e436", textShadow: "4px 4px 0 #008751", animation: "float 2s ease-in-out infinite", display: "inline-block" }}>READER</span>
              </h1>

              <TypewriterText
                text="LEVEL UP YOUR READING GAME"
                delay={1000}
                className="block text-xl md:text-2xl text-[#ffec27]"
              />
            </div>
          </PixelBorder>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
          className="flex justify-center gap-8 md:gap-16 mt-8"
        >
          <ScoreDisplay score="10X" label="SPEED BONUS" />
          <ScoreDisplay score="∞" label="INSIGHTS" />
          <ScoreDisplay score="$$$" label="TIME SAVED" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="text-center mt-10"
        >
          <p className="text-xl text-[#c2c3c7] max-w-lg mx-auto leading-relaxed">
            Stop grinding through boring PDFs page by page.
            {" "}<span className="text-[#ffec27]">Ratio Reader</span>{" "}
            is your ultimate cheat code for absorbing knowledge.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-8 px-8 py-4 text-lg font-bold"
            style={{
              fontFamily: "'Press Start 2P', monospace",
              backgroundColor: "#00e436",
              color: "#1d2b53",
              boxShadow: "4px 4px 0 #008751",
              textShadow: "none",
              animation: "blink 1.5s ease-in-out infinite",
            }}
          >
            ▶ INSERT COIN
          </motion.button>
          <div className="text-xs text-[#83769c] mt-3" style={{ fontFamily: "'Press Start 2P', monospace" }}>
            (it's free to play lol)
          </div>
        </motion.div>
      </section>

      <section className="relative z-20 max-w-5xl mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-4xl" style={{ fontFamily: "'Press Start 2P', monospace", color: "#29adff", textShadow: "3px 3px 0 #1d2b53" }}>
            POWER-UPS
          </h2>
          <div className="text-sm text-[#83769c] mt-2" style={{ fontFamily: "'Press Start 2P', monospace" }}>
            each pdf comes equipped with:
          </div>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { icon: Upload, title: "SUMMON", desc: "Drop any PDF", color: "#ff004d", bar: "UPLOAD" },
            { icon: Brain, title: "ANALYZE", desc: "AI reads & maps", color: "#29adff", bar: "BRAIN" },
            { icon: Zap, title: "EXTRACT", desc: "Pull key insights", color: "#ffec27", bar: "POWER" },
            { icon: Trophy, title: "CONQUER", desc: "Absorb & remember", color: "#00e436", bar: "XP" },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative"
            >
              <PixelBorder>
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <item.icon className="w-5 h-5" style={{ color: item.color }} />
                    <span className="text-xs" style={{ fontFamily: "'Press Start 2P', monospace", color: item.color }}>
                      {item.title}
                    </span>
                  </div>
                  <p className="text-sm text-[#c2c3c7] mb-3">{item.desc}</p>
                  <HealthBar value={5} color={item.color} label={item.bar} />
                </div>
              </PixelBorder>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="relative z-20 max-w-5xl mx-auto px-6 py-16">
        <PixelBorder className="max-w-2xl mx-auto">
          <div className="p-8">
            <div className="text-xs text-[#83769c] mb-6" style={{ fontFamily: "'Press Start 2P', monospace" }}>
              // DIALOG BOX
            </div>

            {[
              { who: "NPC", color: "#29adff", msg: "Yo have you tried Ratio Reader? It basically speed-runs PDFs for you." },
              { who: "YOU", color: "#ffec27", msg: "Wait what?? How does it work?" },
              { who: "NPC", color: "#29adff", msg: "You upload a PDF and boom — summaries, key quotes, hints about stuff you'd miss. It's like having a study buddy with infinite attention span." },
              { who: "YOU", color: "#ffec27", msg: "That sounds OP. Nerf this???" },
              { who: "NPC", color: "#29adff", msg: "lol no. The devs said 'let them cook' and shipped it." },
            ].map((line, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="flex gap-3 mb-4"
              >
                <span className="text-xs font-bold shrink-0 mt-0.5" style={{ fontFamily: "'Press Start 2P', monospace", color: line.color, fontSize: "8px" }}>
                  {line.who}:
                </span>
                <p className="text-sm text-[#c2c3c7] leading-relaxed">{line.msg}</p>
              </motion.div>
            ))}
          </div>
        </PixelBorder>
      </section>

      <section className="relative z-20 max-w-5xl mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="text-2xl md:text-3xl" style={{ fontFamily: "'Press Start 2P', monospace", color: "#ff004d", textShadow: "3px 3px 0 #7e2553" }}>
            WORKS WITH EVERYTHING
          </h2>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-3">
          {["RESEARCH", "BOOKS", "ESSAYS", "REPORTS", "PAPERS", "MANUALS", "THESIS", "ZINES"].map((tag, i) => (
            <motion.div
              key={tag}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="px-4 py-2 border-2 text-sm"
              style={{
                fontFamily: "'Press Start 2P', monospace",
                fontSize: "8px",
                borderColor: ["#ff004d", "#ffa300", "#ffec27", "#00e436", "#29adff", "#83769c", "#ff77a8", "#ff004d"][i],
                color: ["#ff004d", "#ffa300", "#ffec27", "#00e436", "#29adff", "#83769c", "#ff77a8", "#ff004d"][i],
              }}
            >
              ◆ {tag}
            </motion.div>
          ))}
        </div>
      </section>

      <section className="relative z-20 max-w-3xl mx-auto px-6 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <div className="text-[10px] text-[#83769c] mb-4" style={{ fontFamily: "'Press Start 2P', monospace" }}>
            FINAL BOSS: BORING READING
          </div>
          <h2 className="text-3xl md:text-5xl mb-8" style={{ fontFamily: "'Press Start 2P', monospace", lineHeight: "1.4" }}>
            <span style={{ color: "#ffec27" }}>READY</span>
            <br />
            <span style={{ color: "#00e436" }}>PLAYER</span>
            <br />
            <span style={{ color: "#ff004d" }}>ONE?</span>
          </h2>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 text-lg font-bold"
            style={{
              fontFamily: "'Press Start 2P', monospace",
              background: "linear-gradient(90deg, #ff004d, #ffa300, #ffec27, #00e436, #29adff)",
              backgroundSize: "400% 100%",
              animation: "rainbow 3s linear infinite",
              color: "#1d2b53",
              boxShadow: "6px 6px 0 #000",
            }}
          >
            ▶ START GAME
          </motion.button>
        </motion.div>
      </section>

      <footer className="relative z-20 py-8 text-center">
        <div className="text-[8px] text-[#83769c]" style={{ fontFamily: "'Press Start 2P', monospace" }}>
          © RATIO READER /// HIGH SCORE TABLE
        </div>
        <div className="flex justify-center gap-2 mt-3">
          {[Heart, Star, Zap].map((Icon, i) => (
            <Icon key={i} className="w-3 h-3" style={{ color: ["#ff004d", "#ffec27", "#00e436"][i] }} />
          ))}
        </div>
      </footer>
    </div>
  );
}
