import { useEffect, useState } from "react";

export default function Design4() {
  const [visible, setVisible] = useState(false);
  useEffect(() => setVisible(true), []);

  const layers = [
    {
      color: "%23ff6b6b0a",
      size: 600,
      x: "-10%",
      y: "-10%",
      blur: 120,
    },
    {
      color: "%2300b5ad08",
      size: 500,
      x: "80%",
      y: "20%",
      blur: 100,
    },
    {
      color: "%23ffd16608",
      size: 400,
      x: "40%",
      y: "70%",
      blur: 80,
    },
    {
      color: "%237c5cbf06",
      size: 350,
      x: "70%",
      y: "80%",
      blur: 60,
    },
  ];

  const tools = [
    {
      label: "SUMMARY",
      color: "#ff6b6b",
      icon: "◈",
      desc: "The core argument distilled into its essential form.",
    },
    {
      label: "QUOTES",
      color: "#00b5ad",
      icon: "❝",
      desc: "The most compelling passages, pulled and attributed.",
    },
    {
      label: "HINTS",
      color: "#ffd166",
      icon: "⟡",
      desc: "Contextual breadcrumbs that illuminate complexity.",
    },
    {
      label: "MAP",
      color: "#7c5cbf",
      icon: "◎",
      desc: "Visual connections between ideas and arguments.",
    },
    {
      label: "ANALYSIS",
      color: "#4cd964",
      icon: "◇",
      desc: "Critical breakdown of methodology and claims.",
    },
    {
      label: "FLASH",
      color: "#ff9a56",
      icon: "⚡",
      desc: "Three-sentence answer to 'What is this about?'",
    },
  ];

  const risoColors = [
    "from-[#ff6b6b]/30",
    "from-[#00b5ad]/30",
    "from-[#ffd166]/30",
    "from-[#7c5cbf]/30",
    "from-[#4cd964]/30",
    "from-[#ff9a56]/30",
  ];

  return (
    <div className="min-h-screen bg-[#f5f0e8] overflow-hidden relative">
      {/* Riso ink blobs as background */}
      {layers.map((layer, i) => (
        <div
          key={i}
          className={`absolute rounded-full mix-blend-multiply animate-breathe`}
          style={{
            width: layer.size,
            height: layer.size,
            left: layer.x,
            top: layer.y,
            background: `radial-gradient(circle, ${layer.color}, transparent 70%)`,
            animationDelay: `${i * 0.8}s`,
            animationDuration: `${4 + i * 2}s`,
            filter: `blur(${layer.blur}px)`,
          }}
        />
      ))}

      {/* Grain overlay */}
      <div
        className="fixed inset-0 pointer-events-none opacity-[0.12] animate-grain-shift"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative z-10">
        {/* Top bar */}
        <nav className="flex items-center justify-between px-6 lg:px-10 py-5">
          <div className="flex items-center gap-2">
            <div className="relative">
              <div className="w-8 h-8 rounded bg-[#ff6b6b] absolute animate-breathe" style={{ animationDelay: "0s" }} />
              <div className="w-8 h-8 rounded bg-[#00b5ad] absolute top-1 left-1 animate-breathe opacity-70" style={{ animationDelay: "0.5s" }} />
              <div className="w-8 h-8 rounded bg-[#ffd166] animate-breathe opacity-80" style={{ animationDelay: "1s" }} />
            </div>
            <span className="font-black text-lg tracking-[-0.05em] uppercase">
              Rat<span className="text-[#ff6b6b]">i</span>o
            </span>
          </div>
          <div className="flex gap-3">
            {["/1", "/2", "/3", "/4", "/5"].map((p, i) => (
              <a key={i} href={p} className="w-2 h-2 rounded-full bg-[#ddd] hover:opacity-60 transition" style={{ background: [
                "#ff6b6b", "#00b5ad", "#ffd166", "#7c5cbf", "#818cf8"
              ][i] }} />
            ))}
          </div>
        </nav>

        {/* Hero */}
        <section className="px-6 lg:px-10 pt-20 pb-16">
          <div className="max-w-7xl mx-auto">
            <div
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
                visible ? "visible" : "opacity-0"
              }`}
              style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}
            >
              <div>
                <div className="mb-6">
                  <span className="text-[11px] tracking-[0.5em] uppercase font-bold text-[#888]">
                    Risograph Edition
                  </span>
                </div>
                <h1
                  className="display font-black text-[clamp(3rem,8vw,5.5rem)] leading-[0.95] tracking-[-0.03em]"
                  style={{
                    backgroundImage: "linear-gradient(135deg, #cc2200, #ff6b6b, #00b5ad, #7c5cbf, #ffd166)",
                    backgroundSize: "300% 300%",
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                    color: "transparent",
                    animation: "none",
                  }}
                >
                  Print Your<br />
                  <span className="font-serif italic">Digital Mind.</span>
                </h1>
                <p className="mt-6 text-base text-[#666] leading-[1.7] max-w-lg">
                  Like your favorite risograph poster, Ratio layers bold ideas
                  onto crisp understanding. Upload a PDF and receive a
                  multi-dimensional reading experience.
                </p>
                <div className="mt-8 flex gap-3">
                  <button className="bg-[#1a1a2e] text-white px-7 py-3.5 font-semibold text-sm tracking-[0.08em] hover:opacity-90 transition uppercase">
                    Start a Print →
                  </button>
                  <button className="border border-[#333] text-[#333] px-7 py-3.5 font-semibold text-sm tracking-[0.08em] hover:bg-[#1a1a2e]/5 transition uppercase">
                    Explore Gallery
                  </button>
                </div>
              </div>

              {/* Decorative risograph mockup */}
              <div className="relative">
                <div className="relative bg-white shadow-xl rounded-none p-2 rotate-[2deg]">
                  <div className="bg-[#f5f0e8] p-6 rounded-none border border-[#ddd]">
                    {/* Fake document layers */}
                    <div className="space-y-3">
                      <div className="flex gap-2">
                        <div className="w-16 h-6 rounded bg-[#ff6b6b]/20" />
                        <div className="w-16 h-6 rounded bg-[#00b5ad]/20 ml-2" />
                        <div className="w-16 h-6 rounded bg-[#7c5cbf]/20 ml-auto" />
                      </div>
                      {[
                        { w: "w-3/4", c: "#ddd" },
                        { w: "w-full", c: "#ddd" },
                        { w: "w-2/3", c: "#e0e0e0" },
                        { w: "w-full", c: "#e0e0e0" },
                        { w: "w-1/2", c: "#e8e8e8" },
                        { w: "w-5/6", c: "#e8e8e8" },
                      ].map((bar, i) => (
                        <div
                          key={i}
                          className={`h-3 rounded-none ${bar.w}`}
                          style={{ backgroundColor: bar.c }}
                        />
                      ))}
                    </div>
                    <div className="mt-4 grid grid-cols-3 gap-2">
                      {[
                        "from-[#ff6b6b]/20 via-[#00b5ad]/20 to-[#7c5cbf]/20",
                        "from-[#7c5cbf]/20 via-[#ffd166]/20 to-[#ff6b6b]/20",
                        "from-[#00b5ad]/20 via-[#7c5cbf]/20 to-[#ffd166]/20",
                      ].map((gradient, i) => (
                        <div
                          key={i}
                          className={`h-20 rounded bg-gradient-to-br ${gradient} opacity-60`}
                        />
                      ))}
                    </div>
                    <div className="mt-4 flex gap-2 justify-center">
                      {["Summary", "Quotes", "Hints"].map((label, i) => (
                        <span
                          key={i}
                          className="text-[9px] tracking-[0.3em] px-2 py-1 font-bold uppercase"
                          style={{
                            color: ["#ff6b6b", "#00b5ad", "#7c5cbf"][i],
                            border: `1px solid ${["#ff6b6b", "#00b5ad", "#7c5cbf"][i]}`,
                          }}
                        >
                          {label}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                {/* Overlapping colored sheets behind */}
                <div
                  className="absolute -bottom-2 -right-2 w-full h-full rounded bg-[#ff6b6b]/10"
                  style={{ zIndex: -1, transform: "rotate(3deg)" }}
                />
                <div
                  className="absolute -top-2 -left-2 w-full h-full rounded bg-[#00b5ad]/10"
                  style={{ zIndex: -1, transform: "rotate(-2deg)" }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Feature tools as risograph cards */}
        <section className="px-6 lg:px-10 py-16">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-black text-3xl lg:text-4xl tracking-tight uppercase">
                The <span className="font-serif italic">Tools</span>
              </h2>
              <p className="text-sm text-[#888] mt-2 tracking-[0.15em]">
                Each layer reveals something new
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#ddd]">
              {tools.map((tool, i) => (
                <div
                  key={i}
                  className={`bg-[#f5f0e8] p-8 lg:p-10 transform transition-all ${
                    visible ? "visible translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                  style={{
                    animationDelay: `${0.8 + i * 0.1}s`,
                    animationFillMode: "forwards",
                  }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-3xl">{tool.icon}</span>
                    <span
                      className="font-black text-xs tracking-[0.3em] uppercase"
                      style={{ color: tool.color }}
                    >
                      {tool.label}
                    </span>
                  </div>
                  <p className="text-sm text-[#555] leading-relaxed">{tool.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Riso print demo */}
        <section className="px-6 lg:px-10 py-20 bg-white">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="font-black text-3xl lg:text-4xl tracking-tight uppercase mb-4">
              See It In Action
            </h2>
            <p className="text-sm text-[#888] tracking-[0.15em] mb-12">
              Each color = a layer of understanding
            </p>
            <div className="relative h-72 lg:h-96 rounded bg-gradient-to-br from-[#f5f0e8] to-[#eee8dc] overflow-hidden">
              {/* Simulated risograph print layers */}
              <div
                className="absolute inset-0 opacity-30"
                style={{
                  backgroundImage: `repeating-circle(var(--circle-size, 3px) at 20% 30%, #ff6b6b 0px, #ff6b6b 2px, transparent 2px, transparent 4px)`,
                }}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">📄 → 🧠 → 💡</div>
                  <div className="font-black text-xl tracking-[0.2em] uppercase text-[#333]">
                    Upload. Analyze.
                    <br />
                    <span className="font-serif italic text-[#ff6b6b]">
                      Understand.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-6 lg:px-10 py-24 relative">
          <div
            className="absolute inset-0 bg-[#1a1a2e]"
            style={{
              clipPath: "polygon(0 15%, 100% 0%, 100% 100%, 0% 100%)",
            }}
          />
          <div className="relative max-w-3xl mx-auto text-center z-10">
            <span className="text-[10px] tracking-[0.5em] uppercase text-[#ffd166] block mb-6">
              Start Your Print
            </span>
            <h2 className="font-black text-[clamp(2rem,5vw,3.2rem)] leading-tight text-white mb-8">
              Add Layers to
              <br />
              Your Reading
            </h2>
            <button className="bg-[#ff6b6b] text-white px-10 py-4 font-black text-sm tracking-[0.15em] uppercase hover:bg-[#e5554e] transition-all hover:scale-[1.02]">
              Upload a PDF →
            </button>
          </div>
        </section>

        {/* Footer */}
        <footer className="px-6 lg:px-10 py-10 border-t border-[#e0d8cc]">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex gap-4">
              <span className="text-sm text-[#888]">Twitter</span>
              <span className="text-sm text-[#888]">GitHub</span>
              <span className="text-sm text-[#888]">Blog</span>
            </div>
            <span className="text-sm text-[#aaa]">
              © 2024 Ratio. All layers reserved.
            </span>
          </div>
        </footer>
      </div>
    </div>
  );
}