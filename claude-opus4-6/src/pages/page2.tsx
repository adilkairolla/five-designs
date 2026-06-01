import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useInView, AnimatePresence } from "motion/react";
import {
  Upload,
  Zap,
  Brain,
  MessageSquareQuote,
  Compass,
  ArrowRight,
  Check,
  ChevronRight,
  Star,
  Play,
} from "lucide-react";

/*
 * DESIGN 2: "PRISM"
 * Vibrant gradient-heavy SaaS with bold geometry & glassmorphism
 * Color palette: electric violet → cyan → hot pink gradients, dark base
 * Sora headings, Outfit body. Floating glass cards, animated mesh gradients.
 */

function AnimatedGradientOrb({ className = "", delay = 0 }: { className?: string; delay?: number }) {
  return (
    <motion.div
      animate={{
        scale: [1, 1.2, 1],
        rotate: [0, 180, 360],
      }}
      transition={{ duration: 20, delay, repeat: Infinity, ease: "linear" }}
      className={`absolute rounded-full blur-[120px] opacity-30 ${className}`}
    />
  );
}

function GlassCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`relative backdrop-blur-xl bg-white/[0.05] border border-white/[0.08] rounded-2xl overflow-hidden ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] to-transparent pointer-events-none" />
      <div className="relative z-10">{children}</div>
    </div>
  );
}

function RevealOnScroll({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
      animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#0a0a1a]/80 backdrop-blur-xl border-b border-white/5" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-violet-500 to-cyan-400 flex items-center justify-center shadow-lg shadow-violet-500/25">
            <span className="font-sora text-white font-bold text-sm">R</span>
          </div>
          <span className="font-sora text-white font-semibold text-lg">
            Ratio<span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400">Reader</span>
          </span>
        </div>

        <div className="hidden md:flex items-center gap-1">
          {["Features", "How it Works", "Pricing"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
              className="font-outfit text-white/50 text-sm px-4 py-2 rounded-lg hover:text-white hover:bg-white/5 transition-all"
            >
              {item}
            </a>
          ))}
          <button className="ml-4 font-outfit text-sm bg-gradient-to-r from-violet-600 to-cyan-500 text-white px-5 py-2.5 rounded-xl hover:shadow-lg hover:shadow-violet-500/25 transition-all duration-300 hover:scale-105">
            Get Started Free
          </button>
        </div>
      </div>
    </motion.nav>
  );
}

function Hero() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 0.3], [0, -80]);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#08081a]">
      {/* Animated background orbs */}
      <AnimatedGradientOrb className="w-[600px] h-[600px] bg-violet-600 top-[-200px] left-[-200px]" />
      <AnimatedGradientOrb className="w-[500px] h-[500px] bg-cyan-500 bottom-[-100px] right-[-100px]" delay={5} />
      <AnimatedGradientOrb className="w-[400px] h-[400px] bg-pink-500 top-[30%] right-[20%]" delay={10} />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <motion.div style={{ y }} className="relative z-10 max-w-6xl mx-auto px-6 pt-24">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-white/5 backdrop-blur border border-white/10 rounded-full px-4 py-1.5 mb-8"
            >
              <Zap className="w-3.5 h-3.5 text-cyan-400" />
              <span className="font-outfit text-xs text-white/60">Powered by advanced AI analysis</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="font-sora text-white text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.05] mb-6"
            >
              Read Smarter.
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-cyan-400 to-pink-400">
                Understand Deeper.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="font-outfit text-white/50 text-lg md:text-xl max-w-xl mb-10 leading-relaxed mx-auto lg:mx-0"
            >
              Upload any PDF and instantly get AI-powered summaries, key quotes, and
              actionable insights. Turn hours of reading into minutes of understanding.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.45 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <button className="group font-outfit font-semibold bg-gradient-to-r from-violet-600 to-cyan-500 text-white px-8 py-4 rounded-2xl text-lg hover:shadow-2xl hover:shadow-violet-500/30 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2">
                Try It Free
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="group font-outfit text-white/70 px-8 py-4 rounded-2xl text-lg border border-white/10 hover:border-white/20 hover:bg-white/5 transition-all duration-300 flex items-center justify-center gap-2">
                <Play className="w-4 h-4" />
                Watch Demo
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex items-center gap-6 mt-10 justify-center lg:justify-start"
            >
              <div className="flex -space-x-2">
                {[
                  "bg-gradient-to-br from-violet-400 to-violet-600",
                  "bg-gradient-to-br from-cyan-400 to-cyan-600",
                  "bg-gradient-to-br from-pink-400 to-pink-600",
                  "bg-gradient-to-br from-amber-400 to-amber-600",
                ].map((bg, i) => (
                  <div key={i} className={`w-8 h-8 rounded-full ${bg} border-2 border-[#08081a] flex items-center justify-center`}>
                    <span className="text-white text-[10px] font-bold">{String.fromCharCode(65 + i)}</span>
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="font-outfit text-white/40 text-xs">12,000+ readers trust Ratio</span>
              </div>
            </motion.div>
          </div>

          {/* Hero visual — floating glass card mockup */}
          <motion.div
            initial={{ opacity: 0, x: 60, rotateY: -15 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="flex-1 relative hidden lg:block"
            style={{ perspective: 1000 }}
          >
            <GlassCard className="p-6 max-w-md ml-auto">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-400/60" />
                <div className="w-3 h-3 rounded-full bg-amber-400/60" />
                <div className="w-3 h-3 rounded-full bg-green-400/60" />
              </div>

              <div className="space-y-3 mb-5">
                <div className="h-2 bg-white/10 rounded-full w-3/4" />
                <div className="h-2 bg-white/10 rounded-full w-full" />
                <div className="h-2 bg-white/10 rounded-full w-5/6" />
              </div>

              <div className="bg-gradient-to-r from-violet-500/20 to-cyan-500/20 border border-violet-500/20 rounded-xl p-4 mb-4">
                <div className="flex items-center gap-2 mb-2">
                  <Brain className="w-4 h-4 text-violet-400" />
                  <span className="font-outfit text-violet-300 text-xs font-medium">Key Insight</span>
                </div>
                <div className="space-y-2">
                  <div className="h-2 bg-violet-300/20 rounded-full w-full" />
                  <div className="h-2 bg-violet-300/20 rounded-full w-4/5" />
                </div>
              </div>

              <div className="bg-cyan-500/10 border border-cyan-500/15 rounded-xl p-4">
                <div className="flex items-center gap-2 mb-2">
                  <MessageSquareQuote className="w-4 h-4 text-cyan-400" />
                  <span className="font-outfit text-cyan-300 text-xs font-medium">Notable Quote</span>
                </div>
                <div className="space-y-2">
                  <div className="h-2 bg-cyan-300/20 rounded-full w-full" />
                  <div className="h-2 bg-cyan-300/20 rounded-full w-2/3" />
                </div>
              </div>
            </GlassCard>

            {/* Floating accent card */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -left-8 top-1/3"
            >
              <GlassCard className="p-3 flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <div>
                  <span className="font-outfit text-white text-xs font-medium block">Analysis Complete</span>
                  <span className="font-outfit text-white/40 text-[10px]">47 insights found</span>
                </div>
              </GlassCard>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

function Features() {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Summaries",
      desc: "Get chapter-by-chapter breakdowns that capture arguments, not just keywords.",
      gradient: "from-violet-500 to-purple-600",
      glow: "violet",
    },
    {
      icon: MessageSquareQuote,
      title: "Smart Quote Extraction",
      desc: "The most important passages surfaced automatically, with context annotations.",
      gradient: "from-cyan-500 to-blue-600",
      glow: "cyan",
    },
    {
      icon: Compass,
      title: "Reading Hints & Guides",
      desc: "Contextual hints that prime your brain before tackling difficult sections.",
      gradient: "from-pink-500 to-rose-600",
      glow: "pink",
    },
    {
      icon: Zap,
      title: "Instant Processing",
      desc: "Upload and get results in seconds, not minutes. Even for 500+ page documents.",
      gradient: "from-amber-500 to-orange-600",
      glow: "amber",
    },
  ];

  return (
    <section id="features" className="relative bg-[#08081a] py-32 overflow-hidden">
      <AnimatedGradientOrb className="w-[400px] h-[400px] bg-violet-700 top-[10%] left-[-10%]" delay={3} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <RevealOnScroll className="text-center mb-16">
          <span className="font-outfit text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400 text-sm font-medium tracking-wider uppercase">
            Features
          </span>
          <h2 className="font-sora text-white text-4xl md:text-5xl font-bold mt-3 mb-5">
            Everything You Need to
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400">
              Read Brilliantly
            </span>
          </h2>
          <p className="font-outfit text-white/40 text-lg max-w-2xl mx-auto">
            Four powerful tools working together to transform how you consume written knowledge.
          </p>
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((f, i) => (
            <RevealOnScroll key={f.title} delay={i * 0.1}>
              <GlassCard className="p-8 group hover:border-white/15 transition-all duration-500 h-full cursor-default">
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${f.gradient} flex items-center justify-center mb-5 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-${f.glow}-500/25 transition-all duration-300`}>
                  <f.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-sora text-white text-xl font-semibold mb-3">{f.title}</h3>
                <p className="font-outfit text-white/40 leading-relaxed">{f.desc}</p>
              </GlassCard>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    { icon: Upload, title: "Upload PDF", desc: "Drag & drop or select any PDF file", color: "violet" },
    { icon: Brain, title: "AI Analysis", desc: "Our engine processes every page", color: "cyan" },
    { icon: MessageSquareQuote, title: "Get Insights", desc: "Summaries, quotes, hints — all organized", color: "pink" },
  ];

  return (
    <section id="how-it-works" className="relative bg-[#0a0a1e] py-32 overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <RevealOnScroll className="text-center mb-20">
          <span className="font-outfit text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-400 text-sm font-medium tracking-wider uppercase">
            How It Works
          </span>
          <h2 className="font-sora text-white text-4xl md:text-5xl font-bold mt-3">
            Three Steps to Clarity
          </h2>
        </RevealOnScroll>

        <div className="relative flex flex-col md:flex-row items-stretch gap-8">
          {/* Connecting line */}
          <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-violet-500/30 via-cyan-500/30 to-pink-500/30 hidden md:block" />

          {steps.map((step, i) => (
            <RevealOnScroll key={step.title} delay={i * 0.15} className="flex-1">
              <div className="relative text-center">
                <div className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${
                  step.color === "violet" ? "from-violet-500 to-violet-700" :
                  step.color === "cyan" ? "from-cyan-500 to-cyan-700" :
                  "from-pink-500 to-pink-700"
                } flex items-center justify-center mx-auto mb-6 relative z-10 shadow-xl shadow-${step.color}-500/20`}>
                  <step.icon className="w-8 h-8 text-white" />
                </div>
                <span className="font-sora text-white/10 text-6xl font-bold absolute top-[-20px] left-1/2 -translate-x-1/2 z-0">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-sora text-white text-xl font-semibold mb-2">{step.title}</h3>
                <p className="font-outfit text-white/40">{step.desc}</p>
                {i < 2 && (
                  <ChevronRight className="w-6 h-6 text-white/10 absolute top-10 -right-7 hidden md:block" />
                )}
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}

function PricingSection() {
  const [annual, setAnnual] = useState(true);

  const plans = [
    {
      name: "Free",
      price: "0",
      desc: "Try it out",
      features: ["3 PDFs per month", "Basic summaries", "Top 5 quotes per doc"],
      cta: "Get Started",
      featured: false,
    },
    {
      name: "Pro",
      price: annual ? "12" : "16",
      desc: "For serious readers",
      features: ["Unlimited PDFs", "Deep analysis", "Full quote library", "Reading hints", "Priority processing"],
      cta: "Start Free Trial",
      featured: true,
    },
    {
      name: "Team",
      price: annual ? "29" : "39",
      desc: "For organizations",
      features: ["Everything in Pro", "Shared library", "Team annotations", "API access", "Admin dashboard"],
      cta: "Contact Sales",
      featured: false,
    },
  ];

  return (
    <section id="pricing" className="relative bg-[#08081a] py-32 overflow-hidden">
      <AnimatedGradientOrb className="w-[500px] h-[500px] bg-cyan-600 top-[20%] right-[-15%]" delay={7} />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <RevealOnScroll className="text-center mb-12">
          <span className="font-outfit text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-pink-400 text-sm font-medium tracking-wider uppercase">
            Pricing
          </span>
          <h2 className="font-sora text-white text-4xl md:text-5xl font-bold mt-3 mb-5">
            Simple, Transparent Pricing
          </h2>

          {/* Toggle */}
          <div className="inline-flex items-center gap-3 bg-white/5 rounded-full p-1 border border-white/10">
            <button
              onClick={() => setAnnual(false)}
              className={`font-outfit text-sm px-4 py-2 rounded-full transition-all ${!annual ? "bg-white/10 text-white" : "text-white/40"}`}
            >
              Monthly
            </button>
            <button
              onClick={() => setAnnual(true)}
              className={`font-outfit text-sm px-4 py-2 rounded-full transition-all ${annual ? "bg-white/10 text-white" : "text-white/40"}`}
            >
              Annual <span className="text-emerald-400 text-xs">-25%</span>
            </button>
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan, i) => (
            <RevealOnScroll key={plan.name} delay={i * 0.1}>
              <div className={`relative rounded-2xl p-8 h-full flex flex-col ${
                plan.featured
                  ? "bg-gradient-to-b from-violet-500/20 to-cyan-500/10 border border-violet-500/30"
                  : "bg-white/[0.03] border border-white/[0.06]"
              }`}>
                {plan.featured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-violet-500 to-cyan-500 text-white text-xs font-outfit font-medium px-4 py-1 rounded-full">
                    Most Popular
                  </div>
                )}
                <h3 className="font-sora text-white text-xl font-semibold">{plan.name}</h3>
                <p className="font-outfit text-white/40 text-sm mt-1">{plan.desc}</p>
                <div className="mt-6 mb-8">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={plan.price}
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="font-sora text-white text-5xl font-bold inline-block"
                    >
                      ${plan.price}
                    </motion.span>
                  </AnimatePresence>
                  <span className="font-outfit text-white/30 text-sm">/month</span>
                </div>
                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 font-outfit text-white/50 text-sm">
                      <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full py-3 rounded-xl font-outfit font-medium transition-all duration-300 ${
                    plan.featured
                      ? "bg-gradient-to-r from-violet-600 to-cyan-500 text-white hover:shadow-lg hover:shadow-violet-500/25 hover:scale-[1.02]"
                      : "bg-white/5 text-white border border-white/10 hover:bg-white/10"
                  }`}
                >
                  {plan.cta}
                </button>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA2() {
  return (
    <section className="relative bg-[#08081a] py-32 overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <RevealOnScroll>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-violet-600/20 via-cyan-600/20 to-pink-600/20 rounded-3xl blur-xl" />
            <GlassCard className="p-12 md:p-16">
              <h2 className="font-sora text-white text-3xl md:text-5xl font-bold mb-5">
                Ready to Transform Your Reading?
              </h2>
              <p className="font-outfit text-white/40 text-lg max-w-xl mx-auto mb-8">
                Join thousands of readers who understand more in less time.
                Start free — no credit card required.
              </p>
              <button className="group font-outfit font-semibold bg-gradient-to-r from-violet-600 to-cyan-500 text-white px-10 py-4 rounded-2xl text-lg hover:shadow-2xl hover:shadow-violet-500/30 transition-all duration-300 hover:scale-105 inline-flex items-center gap-2">
                Get Started Free
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </GlassCard>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}

function Footer2() {
  return (
    <footer className="bg-[#06061a] border-t border-white/5 py-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-violet-500 to-cyan-500 flex items-center justify-center">
            <span className="font-sora text-white text-xs font-bold">R</span>
          </div>
          <span className="font-outfit text-white/30 text-sm">&copy; 2025 Ratio Reader</span>
        </div>
        <div className="flex items-center gap-6 font-outfit text-white/30 text-sm">
          <a href="#" className="hover:text-white/60 transition-colors">Privacy</a>
          <a href="#" className="hover:text-white/60 transition-colors">Terms</a>
          <a href="#" className="hover:text-white/60 transition-colors">Support</a>
        </div>
      </div>
    </footer>
  );
}

export default function Page2() {
  return (
    <div className="bg-[#08081a] min-h-screen">
      <Nav />
      <Hero />
      <Features />
      <HowItWorks />
      <PricingSection />
      <CTA2 />
      <Footer2 />
    </div>
  );
}
