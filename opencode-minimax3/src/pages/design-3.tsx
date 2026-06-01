import { motion } from "motion/react";

export function Design3() {
  return (
    <div
      className="min-h-screen text-[#3d2e3a] font-['Fraunces',serif] overflow-x-hidden"
      style={{
        background: "linear-gradient(180deg, #fff4ec 0%, #fde4ec 40%, #e4efff 100%)",
      }}
    >
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,400;0,9..144,500;0,9..144,600;0,9..144,700;0,9..144,800;1,9..144,300;1,9..144,400;1,9..144,500;1,9..144,700&family=DM+Sans:wght@300;400;500;600;700&family=Caveat:wght@400;500;600;700&display=swap"
      />

      <Blobs />

      <Nav />
      <Hero />
      <Features />
      <Demo />
      <Voices />
      <Promise />
      <Pricing />
      <Footer />
    </div>
  );
}

function Blobs() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      <motion.div
        animate={{ y: [0, -30, 0], x: [0, 20, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full"
        style={{ background: "radial-gradient(circle, rgba(255,154,162,0.4), transparent 70%)" }}
      />
      <motion.div
        animate={{ y: [0, 40, 0], x: [0, -30, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/3 -right-40 w-[700px] h-[700px] rounded-full"
        style={{ background: "radial-gradient(circle, rgba(164,200,255,0.35), transparent 70%)" }}
      />
      <motion.div
        animate={{ y: [0, -20, 0], x: [0, 30, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-0 left-1/4 w-[500px] h-[500px] rounded-full"
        style={{ background: "radial-gradient(circle, rgba(200,182,255,0.4), transparent 70%)" }}
      />
    </div>
  );
}

function Nav() {
  return (
    <nav className="relative z-20 px-6 md:px-12 py-6 flex items-center justify-between max-w-[1400px] mx-auto">
      <a href="/" className="flex items-center gap-2">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#ff9aa2] to-[#ffb8b8] flex items-center justify-center shadow-sm">
          <span className="font-['Fraunces'] text-[22px] font-500 text-white">r</span>
        </div>
        <span className="font-['Fraunces'] text-[22px] font-500 tracking-tight">ratio reader</span>
      </a>
      <div className="hidden md:flex items-center gap-8 font-['DM_Sans'] text-[14px] font-500">
        <a href="#features" className="hover:text-[#ff6b8a] transition">How it works</a>
        <a href="#demo" className="hover:text-[#ff6b8a] transition">A peek</a>
        <a href="#pricing" className="hover:text-[#ff6b8a] transition">Pricing</a>
        <a
          href="#"
          className="px-5 py-2.5 rounded-full bg-[#3d2e3a] text-[#fff4ec] hover:bg-[#ff6b8a] transition font-600"
        >
          Start reading →
        </a>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="relative z-10 px-6 md:px-12 pt-12 md:pt-20 pb-32 max-w-[1400px] mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 backdrop-blur-sm border border-white shadow-sm mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-[#ff6b8a] animate-pulse" />
            <span className="font-['DM_Sans'] text-[12px] font-500 text-[#3d2e3a]">
              now reading · 12,481 books this week
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-['Fraunces'] text-[clamp(56px,9vw,128px)] leading-[0.92] tracking-[-0.03em] font-500"
          >
            <span className="block">finally,</span>
            <span className="block italic font-300 text-[#ff6b8a]">a friend</span>
            <span className="block">who's already</span>
            <span className="block">read the book.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-10 max-w-[52ch] text-[20px] md:text-[22px] leading-[1.5] font-['DM_Sans'] font-400 text-[#3d2e3a]/80"
          >
            Drop in any PDF. Get back the thesis, the best lines, the
            arguments, and the threads worth pulling. It's like a book club
            of one — and the friend is on time.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-4"
          >
            <a
              href="#"
              className="group inline-flex items-center gap-3 px-7 py-4 rounded-full bg-[#3d2e3a] text-[#fff4ec] font-['DM_Sans'] font-600 text-[15px] hover:bg-[#ff6b8a] transition shadow-lg shadow-[#3d2e3a]/20"
            >
              <UploadIcon />
              upload a pdf
              <span className="group-hover:translate-x-1 transition">→</span>
            </a>
            <a href="#demo" className="font-['DM_Sans'] text-[14px] font-500 underline underline-offset-4 decoration-2 decoration-[#ff9aa2] hover:decoration-[#3d2e3a]">
              see what comes back
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="lg:col-span-5 relative"
        >
          <HeroIllustration />
        </motion.div>
      </div>
    </section>
  );
}

function UploadIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path d="M12 16V4m0 0L7 9m5-5 5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M5 18h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function HeroIllustration() {
  return (
    <div className="relative w-full aspect-square max-w-[500px] mx-auto">
      {/* Main card */}
      <motion.div
        animate={{ y: [0, -8, 0], rotate: [-2, 2, -2] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-8 bg-white rounded-[32px] shadow-2xl shadow-[#ff9aa2]/30 p-8"
      >
        <div className="font-['DM_Sans'] text-[11px] font-500 text-[#3d2e3a]/50 uppercase tracking-[0.15em] mb-4">
          from · kahneman · 2011
        </div>
        <div className="font-['Fraunces'] text-[26px] leading-[1.15] font-500 tracking-[-0.01em] mb-6">
          Thinking,<br /><em className="text-[#ff6b8a]">fast</em> and <em className="text-[#a4c8ff]">slow</em>
        </div>
        <div className="space-y-3 font-['DM_Sans'] text-[13px] leading-[1.5] text-[#3d2e3a]/70">
          <div className="h-2 rounded-full bg-gradient-to-r from-[#ff9aa2] to-transparent" style={{ width: "92%" }} />
          <div className="h-2 rounded-full bg-gradient-to-r from-[#a4c8ff] to-transparent" style={{ width: "78%" }} />
          <div className="h-2 rounded-full bg-gradient-to-r from-[#c8b6ff] to-transparent" style={{ width: "85%" }} />
        </div>
        <div className="mt-6 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#fff4ec] text-[#3d2e3a] font-['DM_Sans'] text-[11px] font-500">
          <span className="w-1.5 h-1.5 rounded-full bg-[#ff6b8a]" />
          ready in 2:48
        </div>
      </motion.div>

      {/* Sticky note */}
      <motion.div
        animate={{ rotate: [6, 10, 6] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-4 -left-4 bg-[#ffd6a5] p-5 rounded-2xl shadow-lg max-w-[200px] rotate-[6deg]"
      >
        <div className="font-['Caveat'] text-[24px] leading-[1.1] text-[#3d2e3a]">
          oh this one<br/>is <em>so good</em>
        </div>
      </motion.div>

      {/* Quote bubble */}
      <motion.div
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-4 -right-4 bg-[#a4c8ff] p-5 rounded-2xl shadow-lg max-w-[220px]"
      >
        <div className="font-['Fraunces'] italic text-[16px] leading-[1.3] text-[#3d2e3a]">
          "Nothing in life is as important as you think it is, while you are thinking about it."
        </div>
        <div className="mt-3 font-['DM_Sans'] text-[10px] font-500 text-[#3d2e3a]/60 tracking-wider uppercase">
          p. 187 · kept quote
        </div>
      </motion.div>

      {/* Small floating dot */}
      <motion.div
        animate={{ y: [0, -20, 0], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-4 right-12 w-4 h-4 rounded-full bg-[#ff6b8a]"
      />
    </div>
  );
}

function Features() {
  const features = [
    {
      title: "the précis",
      body: "A 200-word distillation. Plain language, your register. The thesis, in your pocket.",
      icon: "✦",
      color: "from-[#ff9aa2] to-[#ffc1c8]",
      tag: "what it's saying",
    },
    {
      title: "the chart",
      body: "Each chapter, broken into claim, evidence, concession. You see the architecture, not just the rooms.",
      icon: "◐",
      color: "from-[#a4c8ff] to-[#c8d8ff]",
      tag: "how it moves",
    },
    {
      title: "the kept quotes",
      body: "Twelve to twenty sentences — extracted, not summarised — that reward a second read.",
      icon: "❝",
      color: "from-[#c8b6ff] to-[#d8caff]",
      tag: "the best lines",
    },
    {
      title: "the open threads",
      body: "The questions the book raises but doesn't close. Perfect fuel for essays, talks, dinner.",
      icon: "↗",
      color: "from-[#ffd6a5] to-[#ffe8c8]",
      tag: "what's unresolved",
    },
  ];

  return (
    <section id="features" className="relative z-10 px-6 md:px-12 py-24 max-w-[1400px] mx-auto">
      <div className="text-center mb-20">
        <div className="font-['Caveat'] text-[36px] text-[#ff6b8a] mb-3 rotate-[-2deg]">four little things</div>
        <h2 className="font-['Fraunces'] text-[clamp(40px,6vw,80px)] leading-[0.95] font-500 tracking-[-0.02em] max-w-[16ch] mx-auto">
          one pdf goes in.
          <br />
          <em className="italic font-300 text-[#a4c8ff]">four treasures</em> come out.
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            whileHover={{ y: -8 }}
            className="group relative bg-white/70 backdrop-blur-sm rounded-[28px] p-10 border border-white shadow-lg shadow-[#3d2e3a]/5 cursor-default"
          >
            <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${f.color} flex items-center justify-center text-[32px] mb-6 shadow-inner`}>
              {f.icon}
            </div>
            <div className="font-['DM_Sans'] text-[11px] uppercase tracking-[0.2em] text-[#3d2e3a]/50 mb-2 font-500">
              {f.tag}
            </div>
            <h3 className="font-['Fraunces'] text-[40px] leading-[1] font-500 tracking-[-0.01em] mb-4">
              {f.title}
            </h3>
            <p className="font-['DM_Sans'] text-[16px] leading-[1.5] text-[#3d2e3a]/75 max-w-[40ch]">
              {f.body}
            </p>
            <div className="absolute top-8 right-8 opacity-0 group-hover:opacity-100 transition">
              <div className="w-8 h-8 rounded-full border border-[#3d2e3a]/20 flex items-center justify-center text-[14px]">
                →
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function Demo() {
  return (
    <section id="demo" className="relative z-10 px-6 md:px-12 py-24 max-w-[1400px] mx-auto">
      <div className="text-center mb-16">
        <div className="font-['Caveat'] text-[36px] text-[#a4c8ff] mb-3 rotate-[2deg]">a peek inside</div>
        <h2 className="font-['Fraunces'] text-[clamp(40px,6vw,80px)] leading-[0.95] font-500 tracking-[-0.02em]">
          what you'll <em className="italic font-300 text-[#ff6b8a]">get back.</em>
        </h2>
      </div>

      <div className="bg-white/80 backdrop-blur-sm rounded-[36px] p-8 md:p-12 border border-white shadow-2xl shadow-[#3d2e3a]/10 max-w-[1100px] mx-auto">
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-[#3d2e3a]/10">
          <div>
            <div className="font-['DM_Sans'] text-[12px] uppercase tracking-[0.2em] text-[#3d2e3a]/50 mb-1 font-500">
              your reading of
            </div>
            <div className="font-['Fraunces'] text-[28px] font-500">
              Thinking, Fast and Slow
              <span className="font-['DM_Sans'] text-[16px] text-[#3d2e3a]/50 ml-2 font-400">— Kahneman, 2011</span>
            </div>
          </div>
          <div className="text-right">
            <div className="font-['DM_Sans'] text-[11px] uppercase tracking-[0.2em] text-[#3d2e3a]/50 mb-1 font-500">
              finished in
            </div>
            <div className="font-['Fraunces'] text-[24px] text-[#ff6b8a] font-500">2:48</div>
          </div>
        </div>

        <div className="space-y-10">
          <Block
            tag="the précis"
            color="bg-[#ff9aa2]"
            body="Kahneman proposes that the mind runs on two systems. System 1 is fast, intuitive, prone to error. System 2 is slow, deliberate, lazy. The book is a catalogue of the errors System 1 makes when System 2 fails to intervene — anchoring, availability, framing, loss aversion — and a meditation on what it costs us to live on autopilot."
          />
          <Block
            tag="a kept quote"
            color="bg-[#a4c8ff]"
            body="Nothing in life is as important as you think it is, while you are thinking about it."
            italic
            page="p. 187"
          />
          <Block
            tag="an open thread"
            color="bg-[#c8b6ff]"
            body="Kahneman admits he has no reliable method for training System 2 to be more vigilant. The book identifies the problem with extraordinary precision. The remedy remains, by his own admission, an open question."
          />
        </div>
      </div>
    </section>
  );
}

function Block({ tag, color, body, italic, page }: { tag: string; color: string; body: string; italic?: boolean; page?: string }) {
  return (
    <div>
      <div className="flex items-center gap-3 mb-4">
        <span className={`w-3 h-3 rounded-full ${color}`} />
        <div className="font-['DM_Sans'] text-[12px] uppercase tracking-[0.2em] text-[#3d2e3a]/60 font-500">
          {tag}
        </div>
        {page && (
          <div className="font-['DM_Sans'] text-[11px] text-[#3d2e3a]/40 ml-auto font-500">
            {page}
          </div>
        )}
      </div>
      <p className={`font-['Fraunces'] ${italic ? "italic text-[28px] md:text-[32px] leading-[1.35]" : "text-[19px] leading-[1.55]"} text-[#3d2e3a]`}>
        {body}
      </p>
    </div>
  );
}

function Voices() {
  const voices = [
    { q: "I uploaded a 600-page book I'd been avoiding for two years. Got the spine in three minutes. Read the rest in a week.", n: "Elena M.", r: "Editor, Paris Review" },
    { q: "It's the only AI tool I actually use weekly. It reads the way a careful friend would.", n: "James T.", r: "PhD candidate, MIT" },
    { q: "The open-threads section alone is worth the subscription. I start more essays from those than from the books themselves.", n: "Sofia R.", r: "Writer, Brooklyn" },
  ];

  return (
    <section className="relative z-10 px-6 md:px-12 py-24 max-w-[1400px] mx-auto">
      <div className="text-center mb-16">
        <div className="font-['Caveat'] text-[36px] text-[#c8b6ff] mb-3 rotate-[-1deg]">lovely notes</div>
        <h2 className="font-['Fraunces'] text-[clamp(40px,6vw,72px)] leading-[0.95] font-500 tracking-[-0.02em]">
          nice things, <em className="italic font-300 text-[#c8b6ff]">people said.</em>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {voices.map((v, i) => (
          <motion.div
            key={v.n}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="bg-white/70 backdrop-blur-sm rounded-[28px] p-8 border border-white"
          >
            <div className="font-['Fraunces'] text-[20px] leading-[1.4] mb-8">
              "{v.q}"
            </div>
            <div className="flex items-center gap-3 pt-4 border-t border-[#3d2e3a]/10">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#ff9aa2] to-[#c8b6ff] flex items-center justify-center text-white font-['Fraunces'] font-500">
                {v.n[0]}
              </div>
              <div>
                <div className="font-['DM_Sans'] text-[14px] font-600">{v.n}</div>
                <div className="font-['DM_Sans'] text-[12px] text-[#3d2e3a]/60">{v.r}</div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function Promise() {
  return (
    <section className="relative z-10 px-6 md:px-12 py-24 max-w-[1400px] mx-auto">
      <div className="bg-gradient-to-br from-[#ffd6a5] via-[#ff9aa2] to-[#c8b6ff] rounded-[40px] p-10 md:p-20 text-center text-[#3d2e3a]">
        <div className="font-['Caveat'] text-[40px] mb-2">a small promise</div>
        <h2 className="font-['Fraunces'] text-[clamp(40px,6vw,80px)] leading-[0.95] font-500 tracking-[-0.02em] max-w-[18ch] mx-auto">
          we won't make the book <em className="italic font-300">smaller.</em>
          <br />
          we'll make it <em className="italic font-300 text-white">legible.</em>
        </h2>
        <p className="mt-8 max-w-[50ch] mx-auto text-[17px] font-['DM_Sans'] leading-[1.55] opacity-80">
          We don't compress, summarise, or guess. We read the whole book, and
          we give you back the parts worth keeping. Your library stays
          yours. We never train on your PDFs.
        </p>
      </div>
    </section>
  );
}

function Pricing() {
  const plans = [
    { name: "taste", price: "$0", period: "for two weeks", body: "5 full reads. No card. Just a hello.", cta: "try it", featured: false },
    { name: "monthly", price: "$12", period: "a month", body: "20 reads, all features, cancel whenever.", cta: "subscribe", featured: true },
    { name: "yearly", price: "$108", period: "a year", body: "unlimited reads. two months free.", cta: "subscribe", featured: false },
  ];

  return (
    <section id="pricing" className="relative z-10 px-6 md:px-12 py-24 max-w-[1400px] mx-auto">
      <div className="text-center mb-16">
        <div className="font-['Caveat'] text-[36px] text-[#ff6b8a] mb-3 rotate-[1deg]">three little plans</div>
        <h2 className="font-['Fraunces'] text-[clamp(40px,6vw,72px)] leading-[0.95] font-500 tracking-[-0.02em]">
          pick a <em className="italic font-300 text-[#ff6b8a]">flavour.</em>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[1000px] mx-auto">
        {plans.map((p, i) => (
          <motion.div
            key={p.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className={`rounded-[32px] p-8 border ${
              p.featured
                ? "bg-[#3d2e3a] text-[#fff4ec] border-[#3d2e3a] scale-105"
                : "bg-white/70 backdrop-blur-sm text-[#3d2e3a] border-white"
            }`}
          >
            <div className={`font-['Caveat'] text-[28px] mb-4 ${p.featured ? "text-[#ff9aa2]" : "text-[#ff6b8a]"}`}>
              {p.name}
            </div>
            <div className="font-['Fraunces'] text-[64px] leading-none font-500 tracking-[-0.02em] mb-2">
              {p.price}
            </div>
            <div className={`font-['DM_Sans'] text-[13px] mb-6 ${p.featured ? "opacity-70" : "opacity-60"}`}>
              {p.period}
            </div>
            <p className={`font-['DM_Sans'] text-[14px] leading-[1.5] mb-8 min-h-[60px] ${p.featured ? "opacity-80" : "opacity-70"}`}>
              {p.body}
            </p>
            <a
              href="#"
              className={`block text-center px-6 py-3.5 rounded-full font-['DM_Sans'] font-600 text-[14px] transition ${
                p.featured
                  ? "bg-[#fff4ec] text-[#3d2e3a] hover:bg-[#ff9aa2] hover:text-white"
                  : "bg-[#3d2e3a] text-[#fff4ec] hover:bg-[#ff6b8a]"
              }`}
            >
              {p.cta}
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="relative z-10 px-6 md:px-12 py-12 max-w-[1400px] mx-auto border-t border-[#3d2e3a]/10">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 font-['DM_Sans'] text-[13px]">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[#ff9aa2] to-[#ffb8b8] flex items-center justify-center">
            <span className="font-['Fraunces'] text-white text-[16px]">r</span>
          </div>
          <span className="font-['Fraunces'] text-[18px] font-500">ratio reader</span>
        </div>
        <div className="opacity-60">© 2026 — built for readers who'd rather understand than endure</div>
        <a href="/" className="hover:text-[#ff6b8a] transition">← other designs</a>
      </div>
    </footer>
  );
}
