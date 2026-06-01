import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, useInView } from "motion/react";
import { Feather, Droplets, Wind, Sun, ArrowRight, Leaf } from "lucide-react";

/*
 * DESIGN 3: "MA (間) — THE SPACE BETWEEN"
 * Minimalist Japanese-inspired zen aesthetic
 * Generous whitespace, muted earth tones, delicate animations
 * Color palette: warm off-white, stone gray, sage green, ink black, subtle terracotta
 * Cormorant Garamond headings, Karla body
 */

function ZenReveal({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 25 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function EnsoBrush({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" className={className} fill="none">
      <motion.path
        d="M100 20 C140 20, 180 60, 180 100 C180 140, 140 180, 100 180 C60 180, 20 140, 20 100 C20 60, 55 25, 85 22"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 2.5, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
      />
    </svg>
  );
}

function ZenNav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-700 ${
        scrolled ? "bg-[#f5f0e8]/90 backdrop-blur-sm" : ""
      }`}
    >
      <div className="max-w-6xl mx-auto px-8 py-6 flex items-center justify-between">
        <span className="font-cormorant text-[#2a2520] text-xl font-light tracking-[0.15em]">
          ratio
        </span>
        <div className="hidden md:flex items-center gap-10">
          {["Philosophy", "Method", "Begin"].map((item) => (
            <a
              key={item}
              href="#"
              className="font-karla text-[#8a8278] text-xs tracking-[0.2em] uppercase hover:text-[#2a2520] transition-colors duration-500"
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </motion.nav>
  );
}

function ZenHero() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.2], [0, -40]);

  return (
    <section className="relative min-h-screen flex items-center bg-[#f5f0e8] overflow-hidden">
      {/* Subtle background texture */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }} />

      <motion.div style={{ opacity, y }} className="relative z-10 max-w-4xl mx-auto px-8 text-center">
        {/* Enso circle */}
        <div className="w-32 h-32 mx-auto mb-12 text-[#2a2520]/20">
          <EnsoBrush className="w-full h-full" />
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="font-karla text-[#8a8278] text-xs tracking-[0.4em] uppercase mb-8"
        >
          The art of understanding
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 1.2 }}
          className="font-cormorant text-[#2a2520] text-5xl md:text-7xl lg:text-8xl font-light leading-[1.1] mb-10"
        >
          Less noise.
          <br />
          <span className="italic text-[#6b7c5e]">More meaning.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.6 }}
          className="font-karla text-[#8a8278] text-base md:text-lg max-w-lg mx-auto leading-relaxed mb-14 font-light"
        >
          Upload a PDF. Receive its essence — distilled summaries, vital quotes, and
          quiet insights that deepen your comprehension.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2 }}
        >
          <button className="group font-karla text-[#2a2520] text-sm tracking-[0.15em] uppercase border-b border-[#2a2520] pb-2 hover:border-[#6b7c5e] hover:text-[#6b7c5e] transition-all duration-500 inline-flex items-center gap-3">
            Begin
            <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-500" />
          </button>
        </motion.div>
      </motion.div>

      {/* Scroll hint — minimal line */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="w-px h-10 bg-gradient-to-b from-[#2a2520]/20 to-transparent"
        />
      </motion.div>
    </section>
  );
}

function ZenPhilosophy() {
  return (
    <section className="bg-[#f5f0e8] py-32 md:py-48">
      <div className="max-w-3xl mx-auto px-8">
        <ZenReveal className="text-center">
          <Leaf className="w-5 h-5 text-[#6b7c5e]/40 mx-auto mb-8" strokeWidth={1} />
          <p className="font-cormorant text-[#2a2520] text-2xl md:text-4xl font-light leading-relaxed italic">
            In the tradition of &ldquo;ma&rdquo; — the Japanese concept of purposeful space —
            we believe that what you remove from a text is just as important as what you keep.
          </p>
          <div className="w-8 h-px bg-[#6b7c5e]/30 mx-auto mt-10" />
        </ZenReveal>
      </div>
    </section>
  );
}

function ZenFeatures() {
  const features = [
    {
      icon: Feather,
      title: "Summaries",
      subtitle: "要約 — Yōyaku",
      desc: "The core thesis and key arguments, distilled to their purest form. Nothing extraneous remains.",
    },
    {
      icon: Droplets,
      title: "Quotes",
      subtitle: "引用 — In'yō",
      desc: "The most essential passages surface naturally, like stones in a dry garden. Each one placed with intention.",
    },
    {
      icon: Wind,
      title: "Insights",
      subtitle: "洞察 — Dōsatsu",
      desc: "Hidden connections and subtleties that reveal themselves only through patient, deep analysis.",
    },
    {
      icon: Sun,
      title: "Hints",
      subtitle: "案内 — Annai",
      desc: "Gentle guidance that prepares your mind, like a path through a garden that reveals the landscape gradually.",
    },
  ];

  return (
    <section className="bg-[#eee8de] py-32">
      <div className="max-w-5xl mx-auto px-8">
        <ZenReveal className="mb-24">
          <p className="font-karla text-[#8a8278] text-xs tracking-[0.4em] uppercase text-center">
            The Four Elements
          </p>
        </ZenReveal>

        <div className="space-y-24 md:space-y-32">
          {features.map((f, i) => (
            <ZenReveal key={f.title} delay={0.1}>
              <div className={`flex flex-col ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} items-start gap-12 md:gap-20`}>
                <div className="flex-1">
                  <f.icon className="w-5 h-5 text-[#6b7c5e] mb-6" strokeWidth={1} />
                  <p className="font-karla text-[#8a8278] text-[10px] tracking-[0.3em] uppercase mb-3">
                    {f.subtitle}
                  </p>
                  <h3 className="font-cormorant text-[#2a2520] text-3xl md:text-4xl font-light mb-5">
                    {f.title}
                  </h3>
                  <p className="font-karla text-[#8a8278] font-light leading-relaxed text-sm">
                    {f.desc}
                  </p>
                </div>
                <div className="flex-1 w-full">
                  <div className="aspect-[4/3] bg-gradient-to-br from-[#e5dfd4] to-[#ddd5c8] rounded-sm flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-4 border border-[#c5bfb2]/30" />
                    <div className="space-y-3 p-10 w-full">
                      {[...Array(4)].map((_, j) => (
                        <div
                          key={j}
                          className="h-1.5 bg-[#c5bfb2]/30 rounded-full"
                          style={{ width: `${70 + Math.random() * 30}%` }}
                        />
                      ))}
                      <div className="mt-4 p-3 border-l-2 border-[#6b7c5e]/30">
                        <div className="h-1.5 bg-[#6b7c5e]/20 rounded-full w-4/5" />
                        <div className="h-1.5 bg-[#6b7c5e]/20 rounded-full w-3/5 mt-2" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ZenReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ZenProcess() {
  const steps = [
    { num: "一", label: "Upload", desc: "Place your document in our hands." },
    { num: "二", label: "Contemplate", desc: "Our engine reads with the patience of a monk." },
    { num: "三", label: "Receive", desc: "Clarity arrives, unhurried and complete." },
  ];

  return (
    <section className="bg-[#f5f0e8] py-32 md:py-48">
      <div className="max-w-4xl mx-auto px-8">
        <ZenReveal className="text-center mb-24">
          <p className="font-karla text-[#8a8278] text-xs tracking-[0.4em] uppercase">
            The Way
          </p>
        </ZenReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8">
          {steps.map((step, i) => (
            <ZenReveal key={step.label} delay={i * 0.2} className="text-center">
              <span className="font-cormorant text-[#2a2520]/10 text-7xl block mb-4">{step.num}</span>
              <h3 className="font-cormorant text-[#2a2520] text-2xl font-light mb-3">{step.label}</h3>
              <p className="font-karla text-[#8a8278] text-sm font-light leading-relaxed">{step.desc}</p>
            </ZenReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ZenTestimonial() {
  return (
    <section className="bg-[#2a2520] py-32 md:py-48">
      <div className="max-w-3xl mx-auto px-8 text-center">
        <ZenReveal>
          <div className="w-px h-16 bg-[#6b7c5e]/30 mx-auto mb-12" />
          <p className="font-cormorant text-[#e8e0d4] text-2xl md:text-3xl font-light leading-relaxed italic mb-10">
            &ldquo;Ratio Reader taught me that understanding isn&rsquo;t about consuming more.
            It&rsquo;s about seeing what was always there.&rdquo;
          </p>
          <p className="font-karla text-[#8a8278] text-xs tracking-[0.2em] uppercase">
            Haruki M. — Kyoto
          </p>
          <div className="w-px h-16 bg-[#6b7c5e]/30 mx-auto mt-12" />
        </ZenReveal>
      </div>
    </section>
  );
}

function ZenCTA() {
  return (
    <section className="bg-[#f5f0e8] py-32 md:py-48">
      <div className="max-w-2xl mx-auto px-8 text-center">
        <ZenReveal>
          <p className="font-karla text-[#8a8278] text-xs tracking-[0.4em] uppercase mb-8">
            Begin your practice
          </p>
          <h2 className="font-cormorant text-[#2a2520] text-4xl md:text-6xl font-light mb-8">
            Read with <span className="italic text-[#6b7c5e]">intention</span>
          </h2>
          <p className="font-karla text-[#8a8278] font-light leading-relaxed mb-14 max-w-md mx-auto">
            Your first reading is free. No account required.
            Simply upload, and let understanding unfold.
          </p>
          <button className="group font-karla text-[#f5f0e8] text-sm tracking-[0.15em] uppercase bg-[#2a2520] px-10 py-4 hover:bg-[#6b7c5e] transition-all duration-700 inline-flex items-center gap-3">
            Upload PDF
            <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-500" />
          </button>
        </ZenReveal>
      </div>
    </section>
  );
}

function ZenFooter() {
  return (
    <footer className="bg-[#f5f0e8] border-t border-[#ddd5c8] py-10">
      <div className="max-w-6xl mx-auto px-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="font-cormorant text-[#8a8278] text-sm font-light tracking-[0.1em]">
          ratio reader
        </span>
        <span className="font-karla text-[#b0a898] text-xs">
          &copy; 2025 — Made with stillness
        </span>
      </div>
    </footer>
  );
}

export default function Page3() {
  return (
    <div className="bg-[#f5f0e8] min-h-screen">
      <ZenNav />
      <ZenHero />
      <ZenPhilosophy />
      <ZenFeatures />
      <ZenProcess />
      <ZenTestimonial />
      <ZenCTA />
      <ZenFooter />
    </div>
  );
}
