import { useEffect, useState } from "react";

export default function Design1() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const raf = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(raf);
  }, []);

  const headline = "READ EVERYTHING.\nREMEMBER WHAT MATTERS.";
  const words = headline.split("");

  return (
    <div className="min-h-screen bg-[#f0ede6] text-[#1a1a2e] overflow-hidden font-serif">
      {/* Newspaper texture overlay */}
      <div
        className="fixed inset-0 opacity-[0.03] pointer-events-none animate-newsprint"
        style={{
          backgroundImage: `repeating-linear-gradient(
            0deg,
            transparent,
            transparent 28px,
            #000 28px,
            #000 29px
          ),
          repeating-linear-gradient(
            90deg,
            transparent,
            transparent 28px,
            #000 28px,
            #000 29px
          )`,
          backgroundSize: "100px 100px",
        }}
      />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center px-8 lg:px-20 pt-20 pb-10">
        {/* Bold diagonal accent */}
        <div className="absolute top-0 right-0 w-[60%] h-full bg-[#cc2200] opacity-[0.06] transform rotate-[3deg] origin-top-right" />

        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <div className="flex flex-col lg:flex-row lg:gap-20 items-start">
            {/* Left: Main headline */}
            <div className="lg:w-2/3">
              <div className="mb-8">
                <span className="text-[10px] tracking-[0.4em] font-bold uppercase text-[#cc2200]">
                  YOUR PDF. DECODED.
                </span>
              </div>
              <h1 className="font-display text-[clamp(2.8rem,8vw,7rem)] leading-[0.95] tracking-[-0.03em] font-black">
                {headline.split("\n").map((line, i) => (
                  <span key={i} className="block">
                    {visible
                      ? line.split("").map((char, j) => (
                          <span
                            key={j}
                            className="inline-block animate-fade-up"
                            style={{
                              animationDelay: `${i * 0.05 + j * 0.03}s`,
                              animationFillMode: "forwards",
                              opacity: 0,
                            }}
                          >
                            {char === " " ? "\u00A0" : char}
                          </span>
                        ))
                      : line}
                  </span>
                ))}
              </h1>
              <p className="mt-8 text-lg font-light leading-relaxed max-w-xl text-[#555]">
                Upload any PDF. Receive a distilled essence — key insights,
                powerful quotes, contextual hints, and a structured summary
                that respects your time.
              </p>
            </div>

            {/* Right: Mockup block */}
            <div className="lg:w-1/3 mt-12 lg:mt-0">
              <div className="relative">
                <div className="bg-white shadow-[8px_8px_0_0_#1a1a2e] p-1 rounded rotate-[1.5deg]">
                  <div className="bg-[#1a1a2e] text-white p-4 rounded-t flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-[#cc2200]" />
                    <div className="w-3 h-3 rounded-full bg-[#f5a623]" />
                    <div className="w-3 h-3 rounded-full bg-[#4cd964]" />
                    <span className="ml-3 text-xs font-mono opacity-60">summary.pdf</span>
                  </div>
                  <div className="p-5 font-mono text-[13px] leading-relaxed text-[#333] space-y-3">
                    <div className="flex gap-2">
                      <span className="text-[#cc2200]">▸</span>
                      <span>Summary generated...</span>
                    </div>
                    <div className="pl-4 text-[#666] leading-relaxed">
                      <div className="font-bold text-[#1a1a2e] mb-1">Key Finding:</div>
                      "The document reveals 3 critical factors driving
                      reader comprehension..."
                    </div>
                    <div className="pl-4 text-[#666] leading-relaxed">
                      <div className="font-bold text-[#1a1a2e] mb-1">Notable Quote:</div>
                      <span className="italic border-l-2 border-[#cc2200] pl-2">
                        "Understanding requires not reading more, but
                        reading with intention."
                      </span>
                    </div>
                    <div className="flex gap-2 mt-4">
                      <span className="text-[#cc2200]">▸</span>
                      <span className="bg-[#cc2200]/10 px-2 py-0.5 rounded text-[#cc2200] text-xs font-bold">
                        5 KEY TAKEAWAYS
                      </span>
                      <span className="bg-[#ffd166]/30 px-2 py-0.5 rounded text-[#8a7000] text-xs font-bold">
                        12 QUOTES
                      </span>
                      <span className="bg-[#8b9d83]/25 px-2 py-0.5 rounded text-[#4a5a40] text-xs font-bold">
                        8 HINTS
                      </span>
                    </div>
                  </div>
                </div>
                {/* Decorative ink splatter */}
                <div
                  className="absolute -bottom-4 -right-4 w-24 h-24 opacity-[0.12]"
                  style={{
                    background: "radial-gradient(ellipse at 30% 30%, #1a1a2e 0%, transparent 70%)",
                    transform: "rotate(25deg)",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Ribbon */}
      <section className="relative bg-[#1a1a2e] px-8 py-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { num: "94%", label: "Accuracy rate" },
              { num: "3 min", label: "Avg. processing time" },
              { num: "50K+", label: "Pages processed" },
              { num: "∞", label: "File formats supported" },
            ].map((s, i) => (
              <div key={i} className="animate-fade-up" style={{ animationDelay: `${i * 0.1}s`, opacity: 0 }}>
                <div className="font-display text-3xl lg:text-4xl font-black text-white tracking-tight">
                  {s.num}
                </div>
                <div className="text-xs tracking-[0.2em] uppercase mt-1 text-white/50">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="px-8 lg:px-20 py-24">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-16">
            <div className="w-16 h-[2px] bg-[#cc2200]" />
            <span className="text-[10px] tracking-[0.4em] font-bold uppercase">What you get</span>
          </div>
          <h2 className="font-display text-[clamp(2rem,5vw,3.5rem)] leading-tight font-black mb-16">
            Every PDF,<br />
            <span className="text-[#cc2200]">decoded.</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#ddd]">
            {[
              {
                icon: "⚡",
                title: "Instant Summary",
                desc: "AI-powered summarization that captures the essence, not just the words.",
              },
              {
                icon: "💬",
                title: "Smart Quotes",
                desc: "Curated pull-quotes that capture the document's most powerful statements.",
              },
              {
                icon: "🧭",
                title: "Reading Hints",
                desc: "Context-aware hints that guide you through complex arguments and data.",
              },
              {
                icon: "🎯",
                title: "Key Insights",
                desc: "Extracted insights ranked by relevance, importance, and novelty.",
              },
              {
                icon: "📊",
                title: "Visual Map",
                desc: "Interactive concept maps that show how ideas connect across your document.",
              },
              {
                icon: "🔍",
                title: "Deep Dive",
                desc: "Drill down into any section with follow-up questions and detailed analysis.",
              },
            ].map((f, i) => (
              <div
                key={i}
                className="bg-white p-8 lg:p-10 hover:bg-[#faf8f5] transition-colors animate-fade-up"
                style={{ animationDelay: `${i * 0.08}s`, opacity: 0 }}
              >
                <div className="text-4xl mb-4">{f.icon}</div>
                <h3 className="font-bold text-lg tracking-tight mb-3">{f.title}</h3>
                <p className="text-[#666] text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative px-8 lg:px-20 py-24 bg-[#1a1a2e]">
        <div className="absolute inset-0 opacity-[0.05]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `repeating-linear-gradient(
                0deg, transparent, transparent 20px, rgba(255,255,255,0.03) 20px, rgba(255,255,255,0.03) 21px
              )`,
            }}
          />
        </div>
        <div className="relative max-w-4xl mx-auto text-center">
          <span className="text-[10px] tracking-[0.4em] font-bold uppercase text-[#cc2200] mb-4 block">
            Start Reading Smarter
          </span>
          <h2 className="font-display text-[clamp(2.2rem,5vw,3.8rem)] leading-[1.1] font-black text-white mb-8">
            Upload. Read. Lead.
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto mb-10 text-lg leading-relaxed">
            Join thousands of professionals who get more from every document.
            Free to start, powerful enough to stay.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-[#cc2200] text-white px-8 py-4 rounded-none font-bold text-lg hover:bg-[#e63946] transition-colors tracking-wide uppercase">
              Try Ratio Reader →
            </button>
            <button className="border border-white/30 text-white px-8 py-4 rounded-none font-bold text-lg hover:bg-white/10 transition-colors tracking-wide">
              Watch Demo
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}