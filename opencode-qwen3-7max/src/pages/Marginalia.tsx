import { DesignSwitcher } from "@/components/DesignSwitcher";
import { motion } from "motion/react";
import { Highlighter, Quote, Pen } from "lucide-react";

const CoffeeStain = ({ className = "" }: { className?: string }) => (
  <div className={`absolute pointer-events-none opacity-[0.07] ${className}`}>
    <svg viewBox="0 0 120 120" className="w-full h-full">
      <circle cx="60" cy="60" r="50" fill="none" stroke="#6b3a1f" strokeWidth="8" opacity="0.6" />
      <circle cx="60" cy="60" r="44" fill="none" stroke="#6b3a1f" strokeWidth="2" opacity="0.3" />
    </svg>
  </div>
);

const YellowHighlight = ({ children, deg = -1 }: { children: React.ReactNode; deg?: number }) => (
  <span
    className="relative inline-block px-2 py-0.5"
    style={{ transform: `rotate(${deg}deg)` }}
  >
    <span className="absolute inset-0 bg-yellow-200/80 -skew-x-2 scale-x-105" style={{ borderRadius: "2px" }} />
    <span className="relative">{children}</span>
  </span>
);

const ScribbleUnderline = ({ children }: { children: React.ReactNode }) => (
  <span className="relative inline-block">
    {children}
    <svg className="absolute left-0 -bottom-2 w-full h-2" viewBox="0 0 100 10" preserveAspectRatio="none">
      <path d="M 0 5 Q 20 0 40 5 T 80 5 T 100 5" stroke="#d32f2f" strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.7" />
    </svg>
  </span>
);

const StickyNote = ({ color, rotate, children, className = "" }: { color: string; rotate: number; children: React.ReactNode; className?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 20, rotate: 0 }}
    whileInView={{ opacity: 1, y: 0, rotate }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className={`absolute p-4 shadow-lg ${className}`}
    style={{ backgroundColor: color, transform: `rotate(${rotate}deg)`, fontFamily: "Kalam, cursive" }}
  >
    {children}
  </motion.div>
);

export function Marginalia() {
  return (
    <div className="min-h-screen relative" style={{ backgroundColor: "#f4ecd8", fontFamily: "'DM Serif Display', serif" }}>
      <DesignSwitcher />

      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence baseFrequency='0.9' /%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23n)' opacity='0.04' /%3E%3C/svg%3E\")",
      }} />

      <div className="absolute left-[5%] top-0 bottom-0 w-px bg-red-300/30" />
      <div className="absolute left-[8%] top-0 bottom-0 w-px bg-red-300/20" />

      <section className="relative max-w-5xl mx-auto px-8 md:px-16 py-20 md:py-32">
        <CoffeeStain className="w-48 h-48 -top-10 -right-10" />
        <CoffeeStain className="w-32 h-32 bottom-40 left-10" />

        <StickyNote color="#fff59d" rotate={4} className="hidden md:block -right-4 top-10 w-48 text-[13px] leading-tight text-gray-700">
          ↑ try scrolling!
          <br />
          this page is wild 🤯
        </StickyNote>

        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <div className="font-[Caveat] text-2xl text-red-700 mb-2" style={{ transform: "rotate(-2deg)" }}>
            dear reader,
          </div>
          <h1 className="text-6xl md:text-8xl leading-[0.95] text-stone-900 mb-6">
            Read less.
            <br />
            <ScribbleUnderline>
              <span style={{ color: "#8b4513" }}>Understand</span>
            </ScribbleUnderline>
            <br />
            more.
          </h1>

          <StickyNote color="#a5d6a7" rotate={-3} className="block md:hidden relative mt-4 w-56 text-sm text-gray-800">
            this is <b>ratio reader</b> btw ✨
          </StickyNote>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-10 max-w-xl text-lg leading-relaxed text-stone-700 font-[Instrument_Serif:serif]"
          style={{ fontFamily: "'Fraunces', serif" }}
        >
          Upload a PDF. Ratio Reader pulls out the{" "}
          <YellowHighlight deg={-1}>juicy bits</YellowHighlight>
          {" "}— key ideas, killer quotes, the stuff your future self will actually remember.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-12 inline-block"
        >
          <button className="group relative bg-stone-900 text-[#f4ecd8] px-8 py-4 text-xl font-[Caveat] hover:bg-stone-800 transition-all" style={{ transform: "rotate(-1deg)" }}>
            <span className="relative z-10">→ start reading smarter</span>
            <svg className="absolute -top-1 -left-1 -right-1 -bottom-1 text-stone-900" preserveAspectRatio="none" viewBox="0 0 100 40">
              <path d="M 2 2 L 98 2 L 98 38 L 2 38 Z" stroke="currentColor" strokeWidth="1.5" fill="none" strokeDasharray="3 2" />
            </svg>
          </button>
          <div className="font-[Caveat] text-red-600 text-lg mt-3" style={{ transform: "rotate(2deg)" }}>
            ✎ it's free, promise
          </div>
        </motion.div>
      </section>

      <section className="relative max-w-5xl mx-auto px-8 md:px-16 py-20 border-t border-stone-300/50">
        <CoffeeStain className="w-40 h-40 top-20 right-0" />
        
        <div className="font-[Caveat] text-2xl text-red-700 mb-8" style={{ transform: "rotate(-1deg)" }}>
          — what ratio reader actually does —
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12 relative">
          <StickyNote color="#ffcc80" rotate={3} className="hidden md:block -top-16 left-1/3 w-40 text-xs text-gray-800">
            honestly? this changed how i read papers
          </StickyNote>

          {[
            {
              icon: Highlighter,
              title: "Highlights the important stuff",
              body: "Ratio finds the thesis, the arguments, the data that matters. The rest stays in the drawer.",
              color: "#fff59d",
              rotate: -1,
            },
            {
              icon: Quote,
              title: "Pulls out killer quotes",
              body: "The sentences that make you stop and think. The ones you'll want to screenshot.",
              color: "#b3e5fc",
              rotate: 2,
            },
            {
              icon: Pen,
              title: "Adds hints & context",
              body: "Margin notes on steroids. Background info, connections, 'aha!' moments you'd otherwise miss.",
              color: "#f8bbd0",
              rotate: -2,
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30, rotate: 0 }}
              whileInView={{ opacity: 1, y: 0, rotate: item.rotate }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="relative p-6 shadow-lg"
              style={{ backgroundColor: item.color, fontFamily: "Kalam, cursive" }}
            >
              <item.icon className="w-8 h-8 mb-3 text-stone-900" strokeWidth={1.5} />
              <h3 className="text-xl font-bold text-stone-900 mb-2" style={{ fontFamily: "'DM Serif Display', serif" }}>
                {item.title}
              </h3>
              <p className="text-stone-800 text-sm leading-relaxed">{item.body}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="relative max-w-5xl mx-auto px-8 md:px-16 py-20 border-t border-stone-300/50">
        <CoffeeStain className="w-56 h-56 -left-20 top-10" />

        <div className="font-[Caveat] text-2xl text-red-700 mb-8" style={{ transform: "rotate(-2deg)" }}>
          — how it feels —
        </div>

        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative bg-white p-8 md:p-12 shadow-2xl border border-stone-200"
          style={{ transform: "rotate(-1deg)" }}
        >
          <StickyNote color="#fff176" rotate={-5} className="hidden md:block -top-8 -right-6 w-44 text-xs text-gray-800">
            ↑ this is what your brain looks like on ratio
          </StickyNote>

          <div className="font-[Caveat] text-xl text-stone-500 mb-4" style={{ transform: "rotate(1deg)" }}>
            chapter 1: the problem with reading
          </div>
          <p className="text-stone-800 text-lg leading-relaxed" style={{ fontFamily: "'Fraunces', serif" }}>
            Most non-fiction books could be an essay. Most essays could be a paragraph. We're drowning in words,
            {" "}<YellowHighlight>starving for insight</YellowHighlight>.
          </p>
          <div className="font-[Caveat] mt-4 text-red-700 text-lg" style={{ transform: "rotate(-1deg)" }}>
            → that's exactly why we built this ✦
          </div>
        </motion.div>
      </section>

      <section className="relative max-w-5xl mx-auto px-8 md:px-16 py-20 border-t border-stone-300/50">
        <div className="font-[Caveat] text-2xl text-red-700 mb-6" style={{ transform: "rotate(-1deg)" }}>
          — works with everything —
        </div>
        <div className="flex flex-wrap gap-3">
          {["Research Papers", "Books (PDF)", "Essays", "Reports", "Whitepapers", "Theses", "Articles", "Manuals"].map((tag, i) => (
            <motion.span
              key={tag}
              initial={{ opacity: 0, scale: 0.8, rotate: (i % 2 === 0 ? -2 : 2) }}
              whileInView={{ opacity: 1, scale: 1, rotate: (i % 2 === 0 ? -2 : 2) }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="px-4 py-2 bg-white border-2 border-stone-900 text-stone-900 font-[Caveat] text-xl"
              style={{ transform: `rotate(${i % 2 === 0 ? -2 : 2}deg)` }}
            >
              {tag}
            </motion.span>
          ))}
        </div>
      </section>

      <section className="relative max-w-5xl mx-auto px-8 md:px-16 py-24 border-t border-stone-300/50 text-center">
        <CoffeeStain className="w-64 h-64 -right-10 bottom-0" />
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="font-[Caveat] text-3xl text-red-700 mb-4" style={{ transform: "rotate(-2deg)" }}>
            — one more thing —
          </div>
          <h2 className="text-5xl md:text-7xl text-stone-900 leading-tight mb-8" style={{ fontFamily: "'DM Serif Display', serif" }}>
            Stop reading <ScribbleUnderline>everything.</ScribbleUnderline>
            <br />
            Start reading <YellowHighlight deg={1}>what matters.</YellowHighlight>
          </h2>
          <button className="bg-stone-900 text-[#f4ecd8] px-10 py-5 text-2xl font-[Caveat] hover:bg-stone-800 transition-all" style={{ transform: "rotate(-1deg)" }}>
            → upload a pdf now ✦
          </button>
          <div className="mt-6 font-[Caveat] text-stone-600 text-lg">
            psst: it takes 30 seconds. and it's free. seriously.
          </div>
        </motion.div>
      </section>

      <footer className="py-8 text-center font-[Caveat] text-lg text-stone-500 border-t border-stone-300/50">
        made with ☕ and way too many highlighted books
      </footer>
    </div>
  );
}
