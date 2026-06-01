import { Sparkles, Upload, Terminal, Cpu, ArrowRight } from "lucide-react";

export default function Page3() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#E0E0E0] overflow-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Mono:ital,wght@0,400;0,700;1,400&family=Orbitron:wght@400;500;600;700;800;900&display=swap');

        .font-display { font-family: 'Orbitron', sans-serif; }
        .font-mono { font-family: 'Space Mono', monospace; }

        @keyframes scanline {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100vh); }
        }

        @keyframes flicker {
          0%, 95%, 100% { opacity: 1; }
          96% { opacity: 0.8; }
          97% { opacity: 1; }
          98% { opacity: 0.6; }
        }

        @keyframes glitch {
          0%, 100% { transform: translate(0); }
          20% { transform: translate(-2px, 2px); }
          40% { transform: translate(-2px, -2px); }
          60% { transform: translate(2px, 2px); }
          80% { transform: translate(2px, -2px); }
        }

        @keyframes neon-pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.8; }
        }

        @keyframes reveal-line {
          from { width: 0; }
          to { width: 100%; }
        }

        .scanline::after {
          content: '';
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 4px;
          background: linear-gradient(to bottom, transparent, rgba(0, 255, 136, 0.15), transparent);
          animation: scanline 6s linear infinite;
          pointer-events: none;
          z-index: 9999;
        }

        .crt-overlay {
          background: repeating-linear-gradient(
            0deg,
            transparent,
            transparent 2px,
            rgba(0, 0, 0, 0.08) 2px,
            rgba(0, 0, 0, 0.08) 4px
          );
          pointer-events: none;
        }

        .neon-text {
          text-shadow: 0 0 10px rgba(0, 255, 136, 0.5), 0 0 40px rgba(0, 255, 136, 0.2);
        }

        .neon-border {
          box-shadow: 0 0 10px rgba(0, 255, 136, 0.3), inset 0 0 10px rgba(0, 255, 136, 0.1);
        }

        .glitch:hover {
          animation: glitch 0.3s ease-in-out;
        }

        .reveal-line-anim {
          display: inline-block;
          overflow: hidden;
          white-space: nowrap;
          animation: reveal-line 1s steps(40) forwards;
        }
      `}</style>

      <div className="fixed inset-0 crt-overlay z-50" />
      <div className="scanline" />

      <div className="fixed inset-0 pointer-events-none z-40"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 50%, rgba(0,0,0,0.4) 100%)',
        }}
      />

      <nav className="relative z-10 flex items-center justify-between px-6 md:px-12 py-5 border-b border-[#00FF88]/20">
        <div className="flex items-center gap-2">
          <Terminal className="w-6 h-6 text-[#00FF88]" />
          <span className="font-display text-xl tracking-widest text-[#00FF88] neon-text">RATIO</span>
        </div>
        <div className="flex items-center gap-8 font-mono text-xs">
          <a href="#" className="text-[#666] hover:text-[#00FF88] transition-colors">[FEATURES]</a>
          <a href="#" className="text-[#666] hover:text-[#00FF88] transition-colors">[PRICING]</a>
          <a href="#" className="text-[#666] hover:text-[#00FF88] transition-colors">[ABOUT]</a>
          <button className="border border-[#00FF88] text-[#00FF88] px-6 py-2 text-xs hover:bg-[#00FF88] hover:text-[#0A0A0A] transition-colors duration-200">
            [GET_STARTED]
          </button>
        </div>
      </nav>

      <main className="relative z-10">
        <section className="px-6 md:px-12 pt-20 pb-32">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="font-mono text-[#00FF88] text-xs mb-6 flex items-center gap-3">
                <span className="w-2 h-2 bg-[#00FF88] animate-pulse" />
                <span>SYSTEM.ONLINE // v2.4.1</span>
              </div>
              <h1 className="font-display text-5xl md:text-7xl font-bold leading-tight mb-6 tracking-wider">
                <span className="block text-[#00FF88] neon-text glitch">READ LESS</span>
                <span className="block text-white">UNDERSTAND</span>
                <span className="block text-[#00FF88] neon-text glitch">MORE</span>
              </h1>
              <p className="font-mono text-sm md:text-base text-[#888] mb-10 max-w-md leading-relaxed" style={{ animation: 'flicker 8s infinite' }}>
                {`// Upload any PDF document`}
                <br />
                {`// AI extracts key information`}
                <br />
                {`// Get summaries, quotes, insights`}
                <br />
                {`// Understand faster than ever`}
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="group flex items-center gap-3 bg-[#00FF88] text-[#0A0A0A] px-8 py-4 font-mono text-sm font-bold hover:bg-[#00CC6A] transition-colors duration-200 neon-border">
                  <Upload className="w-5 h-5" />
                  [UPLOAD_PDF]
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="px-8 py-4 font-mono text-sm border border-[#333] text-[#666] hover:border-[#00FF88] hover:text-[#00FF88] transition-colors duration-200">
                  [TRY_SAMPLE]
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="border border-[#00FF88]/30 bg-[#0D0D0D] p-1 neon-border">
                <div className="border-b border-[#00FF88]/20 px-4 py-2 flex items-center justify-between">
                  <div className="flex gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#FF0055]" />
                    <div className="w-2 h-2 rounded-full bg-[#FFCC00]" />
                    <div className="w-2 h-2 rounded-full bg-[#00FF88]" />
                  </div>
                  <span className="font-mono text-[10px] text-[#666]">ratio_terminal.exe</span>
                </div>
                <div className="p-6 font-mono text-xs space-y-4">
                  <div className="text-[#666]">
                    <span className="text-[#00FF88]">$</span> loading document.pdf
                  </div>
                  <div className="text-[#666]">
                    <span className="text-[#00FF88]">$</span> parsing 47 pages...
                  </div>
                  <div className="border border-[#00FF88]/30 p-4 bg-[#00FF88]/5">
                    <div className="flex items-center gap-2 mb-3">
                      <Cpu className="w-4 h-4 text-[#00FF88]" />
                      <span className="text-[#00FF88]">[ANALYSIS_COMPLETE]</span>
                    </div>
                    <div className="space-y-2 text-[#888]">
                      <div className="flex items-center gap-2">
                        <span className="text-[#00FF88]">▸</span>
                        <span>3 key insights extracted</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-[#00FF88]">▸</span>
                        <span>7 important quotes identified</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-[#00FF88]">▸</span>
                        <span>Reading time: <span className="text-[#FF0055] line-through">4h</span> → <span className="text-[#00FF88]">12min</span></span>
                      </div>
                    </div>
                  </div>
                  <div className="text-[#666]">
                    <span className="text-[#00FF88]">$</span>
                    <span className="animate-pulse">_</span>
                  </div>
                </div>
              </div>
              <div className="absolute -inset-2 border border-[#00FF88]/10 -z-10" />
              <div className="absolute -inset-4 border border-[#00FF88]/5 -z-20" />
            </div>
          </div>
        </section>

        <section className="border-y border-[#00FF88]/20">
          <div className="grid md:grid-cols-3">
            {[
              { icon: Upload, code: "01", title: "UPLOAD", desc: "Drop PDF files. Any format. Any size." },
              { icon: Cpu, code: "02", title: "PROCESS", desc: "Neural engine extracts key passages." },
              { icon: Sparkles, code: "03", title: "OUTPUT", desc: "Get summaries, quotes, and insights." },
            ].map((step, i) => (
              <div key={i} className={`p-10 border-r border-[#00FF88]/20 last:border-r-0 hover:bg-[#00FF88]/5 transition-colors duration-200 group`}>
                <div className="font-mono text-[#333] text-xs mb-4">[ STEP_{step.code} ]</div>
                <div className="w-14 h-14 border border-[#00FF88]/40 flex items-center justify-center mb-6 group-hover:border-[#00FF88] group-hover:neon-border transition-all duration-300">
                  <step.icon className="w-6 h-6 text-[#00FF88]" />
                </div>
                <h3 className="font-display text-xl text-white mb-3 tracking-wider">{step.title}</h3>
                <p className="font-mono text-xs text-[#666]">{step.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="px-6 md:px-12 py-24">
          <div className="max-w-6xl mx-auto">
            <div className="font-mono text-[#00FF88] text-xs mb-6">[ SYSTEM_CAPABILITIES ]</div>
            <h2 className="font-display text-4xl md:text-5xl text-white mb-16 tracking-wider">
              CORE <span className="text-[#00FF88] neon-text">MODULES</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: "SMART_SUMMARIZE", desc: "Adjustable summary length from TL;DR to detailed breakdown" },
                { title: "QUOTE_EXTRACT", desc: "Identifies and categorizes key passages with full context" },
                { title: "AI_HINTS", desc: "On-demand explanations for complex concepts and references" },
                { title: "CROSS_SEARCH", desc: "Search across all your uploaded documents simultaneously" },
                { title: "EXPORT_ALL", desc: "Export to Notion, Obsidian, Roam, Logseq, and Markdown" },
                { title: "COLLAB_MODE", desc: "Share insights and annotations with your team" },
              ].map((mod, i) => (
                <div key={i} className="border border-[#333] p-6 hover:border-[#00FF88] transition-colors duration-200 group">
                  <div className="font-mono text-[#00FF88] text-xs mb-2 group-hover:animate-pulse">
                    {`> ${mod.title}`}
                  </div>
                  <p className="font-mono text-xs text-[#666]">{mod.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 md:px-12 py-24 border-t border-[#00FF88]/20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-display text-4xl md:text-6xl text-white mb-6 tracking-wider">
              INITIALIZE <span className="text-[#00FF88] neon-text">NOW</span>
            </h2>
            <p className="font-mono text-sm text-[#666] mb-10">
              Join 50,000+ readers who process information at machine speed.
            </p>
            <button className="bg-[#00FF88] text-[#0A0A0A] px-10 py-5 font-mono text-sm font-bold hover:bg-[#00CC6A] transition-colors duration-200 inline-flex items-center gap-3 neon-border">
              [ START_FREE_TRIAL ]
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </section>

        <footer className="border-t border-[#00FF88]/20 px-6 md:px-12 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Terminal className="w-5 h-5 text-[#00FF88]" />
              <span className="font-display text-base text-[#00FF88]">RATIO</span>
            </div>
            <div className="font-mono text-[10px] text-[#444]">
              © 2026 RATIO READER // ALL SYSTEMS NOMINAL
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
