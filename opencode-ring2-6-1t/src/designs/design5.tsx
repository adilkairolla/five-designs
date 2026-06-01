import { useEffect, useState, useRef } from "react";

interface ScrollWave {
  id: number;
  top: string;
  delay: number;
}

interface ScrollBeam {
  id: number;
  left: string;
  delay: number;
  height: string;
}

export default function Design5() {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    setVisible(true);
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const waves: ScrollWave[] = [
    { id: 1, top: "65%", delay: 0 },
    { id: 2, top: "25%", delay: 0.3 },
    { id: 3, top: "85%", delay: 0.6 },
    { id: 4, top: "45%", delay: 0.9 },
    { id: 5, top: "10%", delay: 1.2 },
  ];

  const beams: ScrollBeam[] = [
    { id: 1, left: "15%", delay: 0, height: "60%" },
    { id: 2, left: "45%", delay: 0.4, height: "40%" },
    { id: 3, left: "75%", delay: 0.8, height: "70%" },
    { id: 4, left: "90%", delay: 1.2, height: "30%" },
  ];

  const steps = [
    {
      num: "01",
      title: "Stillness",
      desc: "Upload your document. Let the mind settle.",
    },
    {
      num: "02",
      title: "Attention",
      desc: "Our system reads carefully, noticing what others skip.",
    },
    {
      num: "03",
      title: "Understanding",
      desc: "Insights emerge — connections between ideas become clear.",
    },
    {
      num: "04",
      title: "Clarity",
      desc: "The essence is ready. Distilled. Precise. Yours.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#faf8f5] text-[#2d2a26] overflow-hidden">
      {/* Subtle noise grain */}
      <div
        className="fixed inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Floating ink wash blobs — Japanese sumi-e inspired */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {waves.map((w) => (
          <div
            key={w.id}
            className="absolute w-[600px] h-[600px] opacity-[0.06] animate-breathe"
            style={{
              background:
                "radial-gradient(ellipse at 30% 70%, #1a1a2e 0%, transparent 60%)",
              top: w.top,
              left: `${-10 + w.id * 15}%`,
              animationDelay: `${w.delay}s`,
              animationDuration: `${6 + w.id * 2}s`,
              transform: `rotate(${w.id * 12}deg)`,
            }}
          />
        ))}
        {beams.map((b) => (
          <div
            key={b.id}
            className="absolute w-[2px] opacity-[0.05] animate-breathe"
            style={{
              left: b.left,
              top: b.height,
              height: "300px",
              background:
                "linear-gradient(to bottom, transparent, #1a1a2e 40%, #1a1a2e 60%, transparent)",
              animationDelay: `${b.delay}s`,
              animationDuration: `${5 + b.id * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10">
        {/* Nav — zen minimal */}
        <nav className="flex items-center justify-between px-6 lg:px-12 py-6">
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-[#2d2a26]" />
            <span className="font-sans text-sm tracking-[0.35em] font-light uppercase">
              RATIO
            </span>
          </div>
          <div className="hidden md:flex gap-10 text-xs tracking-[0.25em] uppercase font-light text-[#8a8478]">
            <a href="#process" className="hover:text-[#2d2a26] transition">
              Process
            </a>
            <a href="#about" className="hover:text-[#2d2a26] transition">
              About
            </a>
            <a href="#begin" className="hover:text-[#2d2a26] transition">
              Begin
            </a>
          </div>
        </nav>

        {/* Hero — typographic breathing room */}
        <section className="px-6 lg:px-20 pt-28 pb-24 flex items-center">
          <div className="max-w-2xl mx-auto text-center">
            <div
              className={`transition-all duration-1000 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              {/* Single Japanese-style decorative line */}
              <div className="flex items-center justify-center gap-4 mb-8">
                <div className="h-[1px] w-8 bg-[#2d2a26]" />
                <div className="w-1 h-1 rounded-full bg-[#2d2a26]" />
                <div className="h-[1px] w-8 bg-[#2d2a26]" />
              </div>

              <h1
                className="font-serif text-[clamp(2.2rem,6vw,4rem)] leading-[1.2] tracking-tight font-light text-[#2d2a26]"
                style={{ lineHeight: 1.25 }}
              >
                The quietest
                <br />
                <span className="font-bold">understanding.</span>
              </h1>

              <p className="mt-8 text-base text-[#6a655e] leading-relaxed font-light max-w-md mx-auto">
                In a world of noise, Ratio offers stillness. Upload a PDF,
                and receive its essence — distilled with care, presented
                with respect for the text.
              </p>
            </div>

            <div
              className={`mt-12 transition-all duration-1000 delay-300 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <button className="bg-[#2d2a26] text-[#faf8f5] px-8 py-3.5 text-sm tracking-[0.2em] font-light hover:bg-[#1a1a1a] transition-all hover:shadow-xl hover:shadow-black/10">
                Begin Reading →
              </button>
            </div>
          </div>
        </section>

        {/* Ma divider */}
        <div className="w-16 h-[1px] bg-[#ddd2c4] mx-auto mb-2" />

        {/* Process — horizontal scroll feeling */}
        <section
          id="process"
          className="px-6 lg:px-20 py-32 relative"
          ref={sectionRef}
        >
          <div className="max-w-5xl mx-auto">
            <div className="mb-20">
              <span className="text-[10px] tracking-[0.4em] uppercase text-[#aaa] block mb-6">
                The Way
              </span>
              <h2 className="font-serif text-4xl font-light tracking-tight">
                Four Breaths
                <br />
                <span className="font-bold">of Reading</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
              {steps.map((step, i) => (
                <div
                  key={i}
                  className="group relative"
                  style={{
                    opacity: visible ? 1 : 0,
                    transform: visible ? "none" : "translateY(20px)",
                    transition: `all 0.8s ease ${i * 0.15}s`,
                  }}
                >
                  {/* Connecting line */}
                  {i < 3 && (
                    <div className="hidden xl:block absolute top-12 left-full w-8 h-[1px] bg-[#ddd2c4] group-hover:bg-[#2d2a26] transition-colors" />
                  )}
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-2xl font-serif text-[#aaa] group-hover:text-[#2d2a26] transition-colors">
                      {step.num}
                    </span>
                    <span className="text-xs tracking-[0.3em] uppercase text-[#888] group-hover:text-[#555] transition-colors">
                      {step.title}
                    </span>
                  </div>
                  <p className="text-sm text-[#888] leading-relaxed pl-2 border-l border-[#ddd2c4] group-hover:border-[#2d2a26] transition-colors">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stat — centered, breathing */}
        <section className="px-6 lg:px-20 py-20">
          <div className="max-w-3xl mx-auto text-center">
            <div
              className={`transition-all duration-1000 ${
                visible ? "opacity-100" : "opacity-0"
              }`}
            >
              <div className="font-serif text-6xl font-light text-[#2d2a26] mb-4">
                94<span className="text-[#888] text-3xl">%</span>
              </div>
              <p className="text-[#888] text-sm tracking-[0.15em] uppercase">
                Of users say Ratio changed how they read
              </p>
            </div>
          </div>
        </section>

        {/* CTA — Japanese inspired whitespace */}
        <section
          id="begin"
          className="px-6 lg:px-20 py-32 relative"
          style={{
            backgroundImage:
              "radial-gradient(ellipse at 50% 0%, rgba(45,42,38,0.03) 0%, transparent 70%)",
          }}
        >
          <div className="max-w-2xl mx-auto text-center">
            <span
              className={`text-[10px] tracking-[0.5em] uppercase text-[#aaa] block mb-8 ${
                visible ? "visible" : "opacity-0"
              }`}
              style={{ transition: "all 1s ease 1.5s" }}
            >
              Begin
            </span>
            <h2
              className={`font-serif text-[clamp(1.8rem,5vw,3rem)] leading-tight font-light tracking-tight text-[#2d2a26] ${
                visible ? "visible" : "opacity-0"
              }`}
              style={{ transition: "all 1s ease 1.8s" }}
            >
              Every document
              <br />
              <span className="font-bold">deserves attention.</span>
            </h2>
            <p
              className={`mt-6 text-[#888] text-sm leading-loose max-w-md mx-auto ${
                visible ? "visible" : "opacity-0"
              }`}
              style={{ transition: "all 1s ease 2.1s" }}
            >
              No clutter. No noise. Just the essence of what you need to
              read, offered with clarity.
            </p>
            <div
              className={`mt-10 space-y-3 ${visible ? "visible" : "opacity-0"}`}
              style={{ transition: "all 1s ease 2.4s" }}
            >
              <button className="bg-[#2d2a26] text-[#faf8f5] px-10 py-4 text-sm tracking-[0.2em] font-light hover:bg-[#1a1a1a] transition-all">
                Start with your first document
              </button>
              <br />
              <span className="text-[11px] text-[#b0aaa2] tracking-wide">
                Free. No account needed. Just upload.
              </span>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="px-6 lg:px-12 py-10 border-t border-[#e8e0d4] text-center">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 max-w-4xl mx-auto">
            <div className="flex gap-6 text-[11px] tracking-wider uppercase text-[#aaa]">
              <a href="#" className="hover:text-[#2d2a26] transition">
                Journal
              </a>
              <a href="#" className="hover:text-[#2d2a26] transition">
                Philosophy
              </a>
              <a href="#" className="hover:text-[#2d2a26] transition">
                Privacy
              </a>
            </div>
            <span className="text-[10px] text-[#bbb] tracking-wider">
              ratio reader. 2024.
            </span>
          </div>
        </footer>
      </div>
    </div>
  );
}