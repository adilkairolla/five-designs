import { useRef, useState, useEffect } from "react";
import { motion, useInView, useScroll, useTransform } from "motion/react";
import { BookMarked, Bookmark, PenTool, Glasses, ArrowRight, Coffee, Star } from "lucide-react";

/*
 * DESIGN 4: "THE READING ROOM"
 * Retro / vintage book aesthetic
 * Paper textures, warm tones, typewriter accents, handwritten flourishes
 * Color palette: aged parchment, leather brown, forest green, burgundy, gilded gold
 * Libre Baskerville headings, Special Elite accents, Crimson Pro body
 */

function VintageReveal({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function PaperTexture() {
  return (
    <div
      className="absolute inset-0 pointer-events-none opacity-[0.04]"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
      }}
    />
  );
}

function VintageNav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        scrolled ? "bg-[#f0e6d3]/95 backdrop-blur-sm shadow-sm" : ""
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <BookMarked className="w-6 h-6 text-[#5c3a1e]" strokeWidth={1.5} />
          <span className="font-baskerville text-[#3a2a1a] text-lg">Ratio Reader</span>
        </div>
        <div className="hidden md:flex items-center gap-8">
          {["Features", "How It Works", "Testimonials"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
              className="font-crimson text-[#7a6a5a] text-sm hover:text-[#5c3a1e] transition-colors"
            >
              {item}
            </a>
          ))}
          <button className="font-elite text-[#f0e6d3] text-sm bg-[#5c3a1e] px-5 py-2.5 hover:bg-[#7a4e2a] transition-colors">
            Open a Book
          </button>
        </div>
      </div>
    </motion.nav>
  );
}

function VintageHero() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 0.3], [0, -60]);

  return (
    <section className="relative min-h-screen flex items-center bg-[#f0e6d3] overflow-hidden">
      <PaperTexture />

      {/* Decorative border */}
      <div className="absolute inset-6 md:inset-10 border border-[#c8b89a]/40 pointer-events-none" />
      <div className="absolute inset-8 md:inset-12 border border-[#c8b89a]/20 pointer-events-none" />

      {/* Corner ornaments */}
      {[
        "top-6 left-6 md:top-10 md:left-10",
        "top-6 right-6 md:top-10 md:right-10 rotate-90",
        "bottom-6 left-6 md:bottom-10 md:left-10 -rotate-90",
        "bottom-6 right-6 md:bottom-10 md:right-10 rotate-180",
      ].map((pos, i) => (
        <div key={i} className={`absolute ${pos} w-8 h-8`}>
          <div className="absolute top-0 left-0 w-full h-px bg-[#8a6e4e]" />
          <div className="absolute top-0 left-0 w-px h-full bg-[#8a6e4e]" />
          <div className="absolute top-1 left-1 w-1 h-1 rounded-full bg-[#8a6e4e]" />
        </div>
      ))}

      <motion.div style={{ y }} className="relative z-10 max-w-4xl mx-auto px-8 text-center py-24">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-6"
        >
          <span className="font-elite text-[#8a6e4e] text-sm tracking-wider">
            ~ Since 2025 ~
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="font-baskerville text-[#3a2a1a] text-4xl md:text-6xl lg:text-7xl leading-tight mb-6"
        >
          A Companion for
          <br />
          the <span className="italic text-[#7a3b2a]">Thoughtful</span> Reader
        </motion.h1>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex items-center justify-center gap-4 mb-8"
        >
          <div className="w-16 h-px bg-[#8a6e4e]" />
          <Coffee className="w-4 h-4 text-[#8a6e4e]" strokeWidth={1.5} />
          <div className="w-16 h-px bg-[#8a6e4e]" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="font-crimson text-[#7a6a5a] text-lg md:text-xl max-w-xl mx-auto leading-relaxed italic mb-12"
        >
          Upload your PDF and let Ratio Reader do the careful reading for you — extracting
          summaries, memorable quotes, and insights that bring every text to life.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button className="group font-baskerville bg-[#5c3a1e] text-[#f0e6d3] px-8 py-4 text-lg hover:bg-[#7a4e2a] transition-all duration-300 flex items-center justify-center gap-3 shadow-md">
            Upload Your First Book
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="font-crimson text-[#7a6a5a] px-8 py-4 text-lg border border-[#c8b89a] hover:border-[#8a6e4e] hover:text-[#5c3a1e] transition-all duration-300">
            Learn the Method
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
}

function VintageFeatures() {
  const features = [
    {
      icon: Glasses,
      title: "Intelligent Summaries",
      desc: "Like a well-read friend who tells you exactly what matters. Chapter-by-chapter distillation of core ideas and arguments.",
      note: "Works with academic papers, novels, reports & more",
    },
    {
      icon: Bookmark,
      title: "Quote Collection",
      desc: "The passages you'd underline if you had the time. We find the most quotable, insightful, and pivotal sentences in any document.",
      note: "Each quote comes with contextual annotations",
    },
    {
      icon: PenTool,
      title: "Marginal Notes & Insights",
      desc: "Those 'aha!' connections that emerge from careful reading — we surface the hidden threads and implications between ideas.",
      note: "Cross-reference analysis reveals deeper patterns",
    },
    {
      icon: BookMarked,
      title: "Reading Guides",
      desc: "Before you dive in, we prepare your mind. Vocabulary aids, context frames, and conceptual scaffolding for any text.",
      note: "Especially valuable for dense or technical works",
    },
  ];

  return (
    <section id="features" className="relative bg-[#e8dcc4] py-32 overflow-hidden">
      <PaperTexture />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <VintageReveal className="text-center mb-20">
          <span className="font-elite text-[#8a6e4e] text-sm tracking-wider">
            What We Offer
          </span>
          <h2 className="font-baskerville text-[#3a2a1a] text-3xl md:text-5xl mt-4">
            The Reader&rsquo;s Toolkit
          </h2>
          <div className="flex items-center justify-center gap-3 mt-4">
            <div className="w-12 h-px bg-[#8a6e4e]/40" />
            <Star className="w-3 h-3 text-[#8a6e4e]/40" strokeWidth={1} />
            <div className="w-12 h-px bg-[#8a6e4e]/40" />
          </div>
        </VintageReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((f, i) => (
            <VintageReveal key={f.title} delay={i * 0.12}>
              <div className="group bg-[#f0e6d3] p-8 border border-[#c8b89a]/50 hover:border-[#8a6e4e]/40 transition-all duration-500 h-full relative overflow-hidden">
                <PaperTexture />
                <div className="relative z-10">
                  <f.icon className="w-6 h-6 text-[#7a3b2a] mb-5" strokeWidth={1.5} />
                  <h3 className="font-baskerville text-[#3a2a1a] text-xl mb-3">{f.title}</h3>
                  <p className="font-crimson text-[#7a6a5a] leading-relaxed mb-4">
                    {f.desc}
                  </p>
                  <p className="font-elite text-[#a08e7a] text-xs">
                    {f.note}
                  </p>
                </div>
              </div>
            </VintageReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function VintageHowItWorks() {
  const steps = [
    { num: "01", title: "Choose Your Text", desc: "Upload any PDF — from academic papers to classic literature to business reports." },
    { num: "02", title: "We Read Carefully", desc: "Our engine analyzes structure, tone, argument, and evidence with scholarly precision." },
    { num: "03", title: "Receive Your Notes", desc: "Summaries, marked quotes, insights, and reading hints — all beautifully organized." },
    { num: "04", title: "Read with Confidence", desc: "Approach any text with the background knowledge of someone who's read it twice." },
  ];

  return (
    <section id="how-it-works" className="relative bg-[#f0e6d3] py-32">
      <PaperTexture />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <VintageReveal className="text-center mb-20">
          <span className="font-elite text-[#8a6e4e] text-sm tracking-wider">The Process</span>
          <h2 className="font-baskerville text-[#3a2a1a] text-3xl md:text-5xl mt-4">
            How It Works
          </h2>
        </VintageReveal>

        <div className="space-y-12">
          {steps.map((step, i) => (
            <VintageReveal key={step.num} delay={i * 0.1}>
              <div className="flex gap-6 md:gap-10 items-start">
                <span className="font-elite text-[#c8b89a] text-3xl md:text-4xl shrink-0 w-16 text-right">
                  {step.num}
                </span>
                <div className="pt-1 border-t border-[#c8b89a]/40 flex-1">
                  <h3 className="font-baskerville text-[#3a2a1a] text-xl md:text-2xl mb-2">
                    {step.title}
                  </h3>
                  <p className="font-crimson text-[#7a6a5a] leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            </VintageReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function VintageQuote() {
  return (
    <section className="relative bg-[#3a2a1a] py-32 overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' fill='white'/%3E%3C/svg%3E")`,
      }} />

      <div className="max-w-3xl mx-auto px-8 text-center relative z-10">
        <VintageReveal>
          <div className="font-baskerville text-[#c8b89a]/20 text-8xl mb-4">&ldquo;</div>
          <blockquote className="font-baskerville text-[#e8dcc4] text-2xl md:text-3xl leading-relaxed italic mb-8">
            I finally understand what it means to &lsquo;read actively.&rsquo; Ratio Reader
            doesn&rsquo;t replace reading — it teaches you how to read better.
          </blockquote>
          <div className="flex items-center justify-center gap-4">
            <div className="w-8 h-px bg-[#8a6e4e]" />
            <span className="font-elite text-[#8a6e4e] text-sm">Professor Eleanor Ashworth</span>
            <div className="w-8 h-px bg-[#8a6e4e]" />
          </div>
        </VintageReveal>
      </div>
    </section>
  );
}

function VintageTestimonials() {
  const reviews = [
    {
      text: "Like having a personal librarian who's read everything. The summaries are scholarly but accessible.",
      name: "Thomas Hartley",
      role: "Doctoral Candidate",
      stars: 5,
    },
    {
      text: "I use it for every research paper now. The quote extraction saves me hours of highlighting.",
      name: "Margaret Chen",
      role: "Law Student",
      stars: 5,
    },
    {
      text: "The reading hints feature is brilliant — it's like getting cliff notes from a tenured professor.",
      name: "James Okafor",
      role: "Book Club Organizer",
      stars: 5,
    },
  ];

  return (
    <section id="testimonials" className="relative bg-[#e8dcc4] py-32">
      <PaperTexture />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <VintageReveal className="text-center mb-16">
          <span className="font-elite text-[#8a6e4e] text-sm tracking-wider">From Our Readers</span>
          <h2 className="font-baskerville text-[#3a2a1a] text-3xl md:text-5xl mt-4">
            Trusted by Readers
          </h2>
        </VintageReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <VintageReveal key={r.name} delay={i * 0.12}>
              <div className="bg-[#f0e6d3] p-7 border border-[#c8b89a]/40 h-full relative">
                <PaperTexture />
                <div className="relative z-10">
                  <div className="flex gap-0.5 mb-4">
                    {[...Array(r.stars)].map((_, j) => (
                      <Star key={j} className="w-3.5 h-3.5 fill-[#c9a84c] text-[#c9a84c]" />
                    ))}
                  </div>
                  <p className="font-crimson text-[#5a4a3a] italic leading-relaxed mb-5">
                    &ldquo;{r.text}&rdquo;
                  </p>
                  <div className="border-t border-[#c8b89a]/30 pt-4">
                    <p className="font-baskerville text-[#3a2a1a] text-sm">{r.name}</p>
                    <p className="font-elite text-[#a08e7a] text-xs mt-0.5">{r.role}</p>
                  </div>
                </div>
              </div>
            </VintageReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function VintageCTA() {
  return (
    <section className="relative bg-[#f0e6d3] py-32">
      <PaperTexture />

      <div className="max-w-3xl mx-auto px-8 text-center relative z-10">
        <VintageReveal>
          <BookMarked className="w-8 h-8 text-[#8a6e4e] mx-auto mb-6" strokeWidth={1} />
          <h2 className="font-baskerville text-[#3a2a1a] text-3xl md:text-5xl mb-6 leading-tight">
            Every Book Has a Story
            <br />
            <span className="italic text-[#7a3b2a]">Within the Story</span>
          </h2>
          <p className="font-crimson text-[#7a6a5a] text-lg max-w-lg mx-auto leading-relaxed mb-10 italic">
            Upload your first PDF for free. No registration required.
            Let&rsquo;s find what you&rsquo;ve been reading past.
          </p>
          <button className="group font-baskerville bg-[#5c3a1e] text-[#f0e6d3] px-10 py-4 text-lg hover:bg-[#7a4e2a] transition-all duration-300 inline-flex items-center gap-3 shadow-md">
            Start Reading
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </VintageReveal>
      </div>
    </section>
  );
}

function VintageFooter() {
  return (
    <footer className="relative bg-[#3a2a1a] py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <BookMarked className="w-4 h-4 text-[#8a6e4e]" strokeWidth={1.5} />
          <span className="font-crimson text-[#8a6e4e] text-sm">
            &copy; 2025 Ratio Reader
          </span>
        </div>
        <div className="flex items-center gap-6 font-crimson text-[#6a5a4a] text-sm">
          <a href="#" className="hover:text-[#c8b89a] transition-colors">Privacy</a>
          <a href="#" className="hover:text-[#c8b89a] transition-colors">Terms</a>
          <a href="#" className="hover:text-[#c8b89a] transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  );
}

export default function Page4() {
  return (
    <div className="bg-[#f0e6d3] min-h-screen">
      <VintageNav />
      <VintageHero />
      <VintageFeatures />
      <VintageHowItWorks />
      <VintageQuote />
      <VintageTestimonials />
      <VintageCTA />
      <VintageFooter />
    </div>
  );
}
