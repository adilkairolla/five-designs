import { useEffect, useState } from "react";

export default function Design3() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  const PaperFold = ({ children, className = "", delay = 0 }) => (
    <div
      className={`animate-paper-fold ${className}`}
      style={{ animationDelay: `${delay}s` }}
    >
      {children}
    </div>
  );

  return (
    <div className="min-h-screen bg-[#f5f0e8] text-[#2d2d2d] overflow-hidden">
      {/* Paper texture */}
      <div
        className="fixed inset-0 pointer-events-none opacity-[0.15]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='200' height='200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.5'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Warm spotlight */}
      <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-[#c4a882]/10 rounded-full blur-[120px]" />

      <div className="relative z-10">
        {/* Nav */}
        <nav className="flex items-center justify-between px-6 lg:px-12 py-6">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-[#c4a882] rotate-45" />
            <span className="font-serif text-xl tracking-widest">RATİO.</span>
          </div>
          <div className="hidden md:flex gap-8 text-sm tracking-wide text-[#8b7355]">
            <a href="#">Manifest</a>
            <a href="#">Way It Works</a>
            <a href="#">Journal</a>
            <a href="#">Atelier</a>
          </div>
        </nav>

        {/* Hero — centered typographic composition */}
        <section className="px-6 lg:px-20 pt-16 pb-20 flex items-center min-h-[70vh]">
          <div className="max-w-3xl mx-auto text-center">
            <div className="mb-8">
              <span
                className={`inline-block text-[10px] tracking-[0.5em] uppercase text-[#b8a080] mb-6 ${
                  visible ? "animate-fade-up" : "opacity-0"
                }`}
                style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}
              >
                Reading Reimagined
              </span>
            </div>

            {/* The hero headline — staggered lines */}
            <div className={`space-y-2 ${visible ? "visible" : "opacity-0"}`}>
              <p
                className="font-serif text-[clamp(2.2rem,7vw,4.5rem)] leading-[1.1] tracking-[-0.02em] text-[#2d2d2d] animate-fade-up"
                style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}
              >
                Every page
              </p>
              <p
                className="font-serif text-[clamp(2.2rem,7vw,4.5rem)] leading-[1.1] tracking-[-0.02em] ml-8 animate-fade-up"
                style={{ animationDelay: "0.45s", animationFillMode: "forwards" }}
              >
                holds a shape.
              </p>
              <p
                className="font-serif text-[clamp(1.4rem,3.5vw,2.5rem)] leading-[1.3] tracking-wide font-normal text-[#8b7355] pl-4 animate-fade-up"
                style={{ animationDelay: "0.65s", animationFillMode: "forwards" }}
              >
                Ratio finds it, folds it, and hands it back to you
                <br />
                as something you can hold in your mind.
              </p>
            </div>

            <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
              <button
                className={`bg-[#2d2d2d] text-[#f5f0e8] px-8 py-3.5 font-serif text-sm tracking-[0.15em] hover:bg-[#1a1a1a] transition-all animate-offset-wobble ${
                  visible ? "visible" : "opacity-0"
                }`}
                style={{ animationDelay: "0.9s", animationFillMode: "forwards" }}
              >
                Begin Reading
              </button>
              <button
                className={`border border-[#8b7355] text-[#8b7355] px-8 py-3.5 font-serif text-sm tracking-[0.15em] hover:bg-[#c4a882]/10 transition-all ${
                  visible ? "visible" : "opacity-0"
                }`}
                style={{ animationDelay: "1s", animationFillMode: "forwards" }}
              >
                Our Philosophy
              </button>
            </div>
          </div>
        </section>

        {/* The "paper fold" features section */}
        <section className="px-6 lg:px-20 py-24">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-[10px] tracking-[0.4em] uppercase text-[#b8a080] block mb-4">
                How It Feels
              </span>
              <h2 className="font-serif text-4xl font-bold tracking-tight">
                Three Gentle Steps
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  emoji: "📎",
                  title: "Drop Your Document",
                  desc: "Any PDF. Your thesis, a contract, a novel chapter. Ratio meets it where it is.",
                  bg: "bg-[#efe6d8]",
                },
                {
                  emoji: "🕊️",
                  title: "Let It Settle",
                  desc: "Our analysis unfolds quietly. Key ideas rise to the surface like ink on handmade paper.",
                  bg: "bg-[#e8dfcf]",
                },
                {
                  emoji: "✉️",
                  title: "Receive the Essence",
                  desc: "A structured letter of insights — quotes, clues, summaries — written for your mind.",
                  bg: "bg-[#e0d6c6]",
                },
              ].map((item, i) => (
                <PaperFold key={i} delay={i * 0.15}>
                  <div
                    className={`${item.bg} p-8 lg:p-10 border border-[#d4c8b4] ${
                      visible ? "visible" : "opacity-0"
                    }`}
                    style={{
                      animationDelay: `${0.8 + i * 0.2}s`,
                      animationFillMode: "forwards",
                      transform: `perspective(600px) rotateX(${(i - 1) * 0.5}deg) rotateY(${(i - 1) * 0.8}deg)`,
                    }}
                  >
                    <div className="text-5xl mb-6">{item.emoji}</div>
                    <h3 className="font-serif text-xl font-bold mb-4">
                      {item.title}
                    </h3>
                    <p className="text-[#8b7355] leading-relaxed text-sm font-light">
                      {item.desc}
                    </p>
                  </div>
                </PaperFold>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonial / quote section styled as a letter */}
        <section className="px-6 lg:px-20 pb-20">
          <div className="max-w-3xl mx-auto">
            <div
              className={`bg-[#efe6d8] border border-[#d4c8b4] p-10 lg:p-14 relative ${
                visible ? "visible" : "opacity-0"
              }`}
              style={{ animationDelay: "1.4s", animationFillMode: "forwards" }}
            >
              <div className="absolute top-2 left-4 text-6xl text-[#c4a882] opacity-30 font-serif">
                "
              </div>
              <blockquote className="relative z-10 font-serif text-xl leading-relaxed text-[#555] italic">
                I used to spend hours wading through dense academic papers.
                Ratio gives me the thread — the essential line of thinking —
                and suddenly 40 pages feel like 4.
              </blockquote>
              <div className="mt-8 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#c4a882]/30" />
                <div>
                  <div className="text-sm font-bold text-[#2d2d2d]">
                    Dr. Elena Vasquez
                  </div>
                  <div className="text-xs text-[#b8a080] tracking-wide">
                    Associate Professor, Comparative Literature
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA — styled as stationery */}
        <section className="px-6 lg:px-20 pb-28">
          <div className="max-w-2xl mx-auto text-center">
            <span className="text-[10px] tracking-[0.4em] uppercase text-[#b8a080] block mb-4">
              Begin the Practice
            </span>
            <h2 className="font-serif text-[clamp(2rem,5vw,3rem)] leading-tight tracking-tight mb-6">
              Fold Your Next Read
              <br />
              Into Something Small
            </h2>
            <p className="text-[#8b7355] leading-relaxed mb-10 max-w-lg mx-auto">
              Free for your first document. No account required to feel the
              difference.
            </p>
            <button className="bg-[#2d2d2d] text-[#f5f0e8] px-10 py-4 font-serif text-sm tracking-[0.2em] hover:bg-[#1a1a1a] transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-black/20">
                Upload Your First PDF
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}