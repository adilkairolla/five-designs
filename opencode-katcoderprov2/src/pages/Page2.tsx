import { BookOpen, Sparkles, Zap, Quote, ArrowRight, Upload, FileText } from "lucide-react";

export default function Page2() {
  return (
    <div className="min-h-screen bg-white text-black overflow-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Archivo+Black&family=Archivo:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap');

        .font-display { font-family: 'Archivo Black', 'Impact', sans-serif; }
        .font-sans { font-family: 'Archivo', sans-serif; }
        .font-mono { font-family: 'JetBrains Mono', monospace; }

        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee { animation: marquee 20s linear infinite; }

        @keyframes stagger-reveal {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .reveal { animation: stagger-reveal 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .reveal-d1 { animation-delay: 0.05s; }
        .reveal-d2 { animation-delay: 0.1s; }
        .reveal-d3 { animation-delay: 0.2s; }
        .reveal-d4 { animation-delay: 0.3s; }
        .reveal-d5 { animation-delay: 0.4s; }

        .swiss-grid {
          display: grid;
          gap: 0;
        }
        .swiss-grid > * {
          border-right: 2px solid black;
          border-bottom: 2px solid black;
        }
        .swiss-grid > *:nth-child(3n) {
          border-right: none;
        }
      `}</style>

      <nav className="flex items-center justify-between px-6 md:px-12 py-5 border-b-2 border-black reveal">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-black flex items-center justify-center">
            <BookOpen className="w-4 h-4 text-white" />
          </div>
          <span className="font-display text-xl tracking-tighter">RATIO</span>
        </div>
        <div className="flex items-center gap-8 font-sans text-sm font-medium">
          <a href="#" className="hover:underline underline-offset-4">Features</a>
          <a href="#" className="hover:underline underline-offset-4">Pricing</a>
          <a href="#" className="hover:underline underline-offset-4">About</a>
          <button className="bg-black text-white px-6 py-2 text-sm font-medium hover:bg-[#FF4444] transition-colors duration-200">
            Get Started
          </button>
        </div>
      </nav>

      <div className="w-full overflow-hidden border-b-2 border-black reveal">
        <div className="whitespace-nowrap animate-marquee flex">
          {[...Array(8)].map((_, i) => (
            <span key={i} className="font-mono text-sm px-6 py-2 border-r-2 border-black flex items-center gap-6">
              <span>UPLOAD PDF → GET SUMMARY → UNDERSTAND FASTER</span>
            </span>
          ))}
        </div>
      </div>

      <main>
        <section className="grid md:grid-cols-12 min-h-[70vh] border-b-2 border-black">
          <div className="md:col-span-7 p-8 md:p-16 flex flex-col justify-center border-b-2 md:border-b-0 md:border-r-2 border-black reveal reveal-d1">
            <div className="font-mono text-sm mb-4 text-[#FF4444]">[ 01 — INTRODUCTION ]</div>
            <h1 className="font-display text-6xl md:text-8xl leading-[0.85] tracking-tighter mb-8">
              READ<br />
              LESS.<br />
              <span className="text-[#FF4444]">LEARN</span><br />
              MORE.
            </h1>
            <p className="font-sans text-lg md:text-xl max-w-md mb-10 leading-relaxed">
              Ratio extracts the signal from the noise. Upload any PDF. Get instant summaries, key quotes, and AI-powered insights.
            </p>
            <div className="flex gap-4">
              <button className="group flex items-center gap-3 bg-black text-white px-8 py-4 font-sans font-medium text-base hover:bg-[#FF4444] transition-colors duration-200">
                <Upload className="w-5 h-5" />
                UPLOAD PDF
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 font-sans font-medium text-base border-2 border-black hover:bg-black hover:text-white transition-colors duration-200">
                TRY SAMPLE
              </button>
            </div>
          </div>
          <div className="md:col-span-5 bg-[#FFF0EC] flex items-center justify-center p-12 reveal reveal-d2">
            <div className="relative w-full max-w-sm">
              <div className="border-2 border-black p-6 bg-white">
                <div className="flex items-center justify-between mb-6 pb-4 border-b-2 border-black">
                  <FileText className="w-8 h-8" />
                  <span className="font-mono text-xs">ANALYZING...</span>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start gap-3 p-3 border-2 border-black">
                    <Quote className="w-4 h-4 mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-mono text-xs mb-1">KEY QUOTE</div>
                      <p className="font-sans text-sm">"The essence of strategy is choosing what not to do."</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 border-2 border-black bg-[#FF4444] text-white">
                    <Sparkles className="w-4 h-4 mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-mono text-xs mb-1">INSIGHT</div>
                      <p className="font-sans text-sm">3 core arguments identified across 47 pages.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 border-2 border-black">
                    <Zap className="w-4 h-4 mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-mono text-xs mb-1">SUMMARY</div>
                      <p className="font-sans text-sm">Reading time reduced from 4h to 12min.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-black -z-10" />
            </div>
          </div>
        </section>

        <section className="border-b-2 border-black">
          <div className="p-6 md:p-12 border-b-2 border-black reveal reveal-d3">
            <h2 className="font-display text-5xl md:text-6xl tracking-tighter">HOW IT WORKS</h2>
          </div>
          <div className="grid md:grid-cols-3">
            {[
              { num: "01", icon: Upload, title: "UPLOAD", desc: "Drop your PDF. Any format, any size." },
              { num: "02", icon: Sparkles, title: "ANALYZE", desc: "AI identifies key passages and themes." },
              { num: "03", icon: BookOpen, title: "UNDERSTAND", desc: "Get summaries, quotes, and insights." },
            ].map((step, i) => (
              <div key={i} className={`p-8 md:p-12 border-b-2 md:border-b-0 ${i < 2 ? 'md:border-r-2' : ''} border-black hover:bg-black hover:text-white transition-colors duration-200 group reveal reveal-d${i + 3}`}>
                <div className="font-mono text-5xl mb-6 group-hover:text-[#FF4444]">{step.num}</div>
                <div className="w-12 h-12 border-2 border-black flex items-center justify-center mb-6 group-hover:border-white group-hover:bg-white group-hover:bg-opacity-20">
                  <step.icon className="w-5 h-5" />
                </div>
                <h3 className="font-display text-2xl tracking-tighter mb-3">{step.title}</h3>
                <p className="font-sans text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="grid md:grid-cols-2 border-b-2 border-black">
          <div className="p-8 md:p-16 border-b-2 md:border-b-0 md:border-r-2 border-black reveal reveal-d3">
            <div className="font-mono text-sm mb-4 text-[#FF4444]">[ 02 — FEATURES ]</div>
            <h2 className="font-display text-4xl md:text-5xl tracking-tighter mb-8">
              EVERYTHING<br />YOU NEED
            </h2>
            <ul className="space-y-4 font-sans">
              {[
                "Smart summarization with adjustable length",
                "Key quote extraction with context",
                "AI-powered hints and explanations",
                "Cross-document search and comparison",
                "Export to Notion, Obsidian, and more",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-[#FF4444] mt-2 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-black text-white p-8 md:p-16 flex items-center justify-center reveal reveal-d4">
            <div className="font-mono text-sm leading-relaxed text-[#FF4444]">
              {`> loading document.pdf`}
              <br />
              {`> analyzing structure...`}
              <br />
              {`> extracting key passages...`}
              <br />
              {`> generating summary...`}
              <br />
              {`> 3 insights found`}
              <br />
              {`> 7 key quotes extracted`}
              <br />
              {`> reading time: 4h → 12min`}
              <br />
              {`> done.`}
              <span className="animate-pulse">_</span>
            </div>
          </div>
        </section>

        <section className="py-24 px-8 md:px-12 reveal reveal-d5">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-display text-5xl md:text-7xl tracking-tighter mb-8">
              READY TO<br /><span className="text-[#FF4444]">START?</span>
            </h2>
            <p className="font-sans text-lg mb-10 max-w-lg mx-auto">
              Join thousands of readers who understand more by reading less.
            </p>
            <button className="bg-black text-white px-10 py-5 font-sans font-medium text-lg hover:bg-[#FF4444] transition-colors duration-200 inline-flex items-center gap-3">
              GET STARTED FREE
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </section>

        <footer className="border-t-2 border-black px-6 md:px-12 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-black flex items-center justify-center">
                <BookOpen className="w-3 h-3 text-white" />
              </div>
              <span className="font-display text-lg">RATIO</span>
            </div>
            <div className="font-mono text-xs text-gray-500">
              © 2026 RATIO READER — ALL RIGHTS RESERVED
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
