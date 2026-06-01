import { BookOpen, Sparkles, Zap, Quote, ArrowRight, Upload, Star } from "lucide-react";

export default function Page5() {
  return (
    <div className="min-h-screen bg-[#FFF5E4] text-[#1A1A2E] overflow-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500&family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,600;9..40,700&display=swap');

        .font-display { font-family: 'Fraunces', serif; }
        .font-body { font-family: 'DM Sans', sans-serif; }

        @keyframes wobble {
          0%, 100% { transform: rotate(-1deg); }
          50% { transform: rotate(1deg); }
        }

        @keyframes bounce-in {
          0% { opacity: 0; transform: scale(0.8) translateY(40px); }
          60% { transform: scale(1.05) translateY(-10px); }
          100% { opacity: 1; transform: scale(1) translateY(0); }
        }

        @keyframes squiggle {
          0%, 100% { transform: translateX(0) rotate(0deg); }
          25% { transform: translateX(2px) rotate(1deg); }
          50% { transform: translateX(-1px) rotate(-1deg); }
          75% { transform: translateX(1px) rotate(0.5deg); }
        }

        .animate-bounce-in {
          animation: bounce-in 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
          opacity: 0;
        }
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-500 { animation-delay: 0.5s; }

        .wobble { animation: wobble 3s ease-in-out infinite; }
        .squiggle:hover { animation: squiggle 0.3s ease-in-out; }

        .paper-texture {
          background-image: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23noise)' opacity='0.03'/%3E%3C/svg%3E");
        }

        .hand-drawn-circle {
          border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
        }

        .blob-organic {
          border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
        }
      `}</style>

      <div className="fixed inset-0 paper-texture pointer-events-none opacity-50" />

      <nav className="relative z-10 flex items-center justify-between px-6 md:px-12 py-5 animate-bounce-in">
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-full bg-[#FF6B6B] flex items-center justify-center shadow-lg shadow-[#FF6B6B]/30">
            <BookOpen className="w-4 h-4 text-white" />
          </div>
          <span className="font-display font-bold text-2xl tracking-tight">Ratio</span>
        </div>
        <div className="flex items-center gap-6 font-body text-sm">
          <a href="#" className="hover:text-[#FF6B6B] transition-colors">Features</a>
          <a href="#" className="hover:text-[#FF6B6B] transition-colors">Pricing</a>
          <a href="#" className="hover:text-[#FF6B6B] transition-colors">About</a>
          <button className="bg-[#1A1A2E] text-white px-5 py-2.5 rounded-full text-sm font-medium shadow-lg shadow-[#1A1A2E]/20 hover:bg-[#FF6B6B] transition-colors duration-300 squiggle">
            Get Started
          </button>
        </div>
      </nav>

      <main className="relative z-10">
        <section className="px-6 md:px-12 pt-12 pb-24">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
            <div className="animate-bounce-in delay-100">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FFD93D]/30 mb-6 border-2 border-[#1A1A2E]">
                <Sparkles className="w-4 h-4 text-[#FF6B6B]" />
                <span className="font-body text-sm font-medium">✨ AI-Powered Reading Assistant</span>
              </div>
              <h1 className="font-display text-6xl md:text-8xl font-black leading-[0.9] tracking-tighter mb-8">
                Read <span className="text-[#FF6B6B]">less.</span><br />
                Understand <span className="text-[#4ECDC4]">more.</span>
              </h1>
              <p className="font-body text-lg md:text-xl text-[#444] leading-relaxed mb-10 max-w-md">
                Upload any PDF and let Ratio do the heavy lifting. Get summaries, key quotes, and insights that actually help you understand what you read.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="group flex items-center gap-3 bg-[#FF6B6B] text-white px-8 py-4 rounded-full text-base font-semibold shadow-xl shadow-[#FF6B6B]/30 hover:shadow-2xl hover:shadow-[#FF6B6B]/40 hover:-translate-y-1 transition-all duration-300 squiggle">
                  <Upload className="w-5 h-5" />
                  Upload PDF
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="px-8 py-4 rounded-full text-base font-semibold border-2 border-[#1A1A2E] hover:bg-[#1A1A2E] hover:text-white transition-colors duration-300">
                  Try a sample →
                </button>
              </div>
            </div>

            <div className="relative animate-bounce-in delay-300">
              <div className="relative">
                <div className="absolute -top-8 -left-8 w-24 h-24 blob-organic bg-[#FFD93D] opacity-60 wobble" />
                <div className="absolute -bottom-4 -right-4 w-16 h-16 blob-organic bg-[#4ECDC4] opacity-50 wobble" style={{ animationDelay: '-1s' }} />

                <div className="relative z-10 bg-white rounded-3xl p-8 shadow-2xl border-2 border-[#1A1A2E]">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-3 h-3 rounded-full bg-[#FF6B6B] border-2 border-[#1A1A2E]" />
                    <div className="w-3 h-3 rounded-full bg-[#FFD93D] border-2 border-[#1A1A2E]" />
                    <div className="w-3 h-3 rounded-full bg-[#4ECDC4] border-2 border-[#1A1A2E]" />
                  </div>
                  <div className="space-y-4">
                    <div className="p-4 rounded-2xl bg-[#FF6B6B]/10 border-2 border-[#1A1A2E]">
                      <div className="flex items-center gap-2 mb-2">
                        <Quote className="w-4 h-4 text-[#FF6B6B]" />
                        <span className="font-display font-bold text-sm">Key Quote</span>
                      </div>
                      <p className="font-body text-sm italic text-[#444]">
                        "The measure of intelligence is the ability to change."
                      </p>
                    </div>
                    <div className="p-4 rounded-2xl bg-[#4ECDC4]/10 border-2 border-[#1A1A2E]">
                      <div className="flex items-center gap-2 mb-2">
                        <Zap className="w-4 h-4 text-[#4ECDC4]" />
                        <span className="font-display font-bold text-sm">Insight</span>
                      </div>
                      <p className="font-body text-sm text-[#444]">
                        This passage explores the relationship between adaptability and cognitive flexibility...
                      </p>
                    </div>
                    <div className="p-4 rounded-2xl bg-[#FFD93D]/20 border-2 border-[#1A1A2E]">
                      <div className="flex items-center gap-2 mb-2">
                        <Sparkles className="w-4 h-4 text-[#FFD93D]" />
                        <span className="font-display font-bold text-sm">Summary</span>
                      </div>
                      <p className="font-body text-sm text-[#444]">
                        3 key takeaways identified from 24 pages of content.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative z-10 px-6 md:px-12 py-24">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-display text-5xl md:text-6xl font-black text-center mb-16 tracking-tighter">
              How it <span className="text-[#FF6B6B]">works</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: Upload, title: "Upload", desc: "Drop any PDF document", color: "#FF6B6B", bg: "#FF6B6B/10" },
                { icon: Sparkles, title: "Analyze", desc: "AI extracts key insights", color: "#4ECDC4", bg: "#4ECDC4/10" },
                { icon: BookOpen, title: "Understand", desc: "Read with clarity", color: "#FFD93D", bg: "#FFD93D/20" },
              ].map((step, i) => (
                <div
                  key={i}
                  className="bg-white rounded-3xl p-8 border-2 border-[#1A1A2E] shadow-lg hover:-translate-y-3 hover:shadow-xl transition-all duration-300 group animate-bounce-in"
                  style={{ animationDelay: `${0.2 + i * 0.1}s` }}
                >
                  <div className="w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-6 border-2 border-[#1A1A2E] transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6"
                    style={{ background: step.bg }}>
                    <step.icon className="w-8 h-8" style={{ color: step.color }} />
                  </div>
                  <h3 className="font-display text-3xl font-black text-center mb-3">{step.title}</h3>
                  <p className="font-body text-center text-[#666]">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="relative z-10 px-6 md:px-12 py-24">
          <div className="max-w-6xl mx-auto">
            <div className="bg-[#1A1A2E] rounded-[3rem] p-12 md:p-16 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 blob-organic bg-[#FF6B6B] opacity-20" />
              <div className="absolute bottom-0 left-0 w-48 h-48 blob-organic bg-[#4ECDC4] opacity-20" />

              <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="font-display text-4xl md:text-5xl font-black mb-6">
                    Everything you need to <span className="text-[#FFD93D]">master any text</span>
                  </h2>
                  <ul className="space-y-4 font-body text-white/80">
                    {[
                      "Smart summarization with adjustable length",
                      "Key quote extraction with full context",
                      "AI-powered hints and explanations",
                      "Cross-document search and comparison",
                      "Export to Notion, Obsidian, and more",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <Star className="w-5 h-5 text-[#FFD93D] flex-shrink-0 mt-0.5 fill-[#FFD93D]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { label: "Pages Analyzed", value: "2.4M+" },
                    { label: "Time Saved", value: "87%" },
                    { label: "Active Readers", value: "50K+" },
                    { label: "Documents", value: "500K+" },
                  ].map((stat, i) => (
                    <div key={i} className="bg-white/10 rounded-2xl p-6 text-center backdrop-blur-sm border border-white/20">
                      <div className="font-display text-3xl font-black text-[#FFD93D] mb-1">
                        {stat.value}
                      </div>
                      <div className="font-body text-xs text-white/60">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative z-10 px-6 md:px-12 py-24">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-display text-5xl md:text-7xl font-black mb-6 tracking-tighter">
              Ready to <span className="text-[#FF6B6B]">start?</span>
            </h2>
            <p className="font-body text-lg text-[#666] mb-10 max-w-lg mx-auto">
              Join thousands of readers who understand more by reading less.
            </p>
            <button className="group bg-[#FF6B6B] text-white px-10 py-5 rounded-full text-lg font-semibold shadow-xl shadow-[#FF6B6B]/30 hover:shadow-2xl hover:shadow-[#FF6B6B]/40 hover:-translate-y-1 transition-all duration-300 inline-flex items-center gap-3 squiggle">
              Get Started Free
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </section>

        <footer className="relative z-10 border-t-2 border-[#1A1A2E] px-6 md:px-12 py-12">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-[#FF6B6B] flex items-center justify-center">
                <BookOpen className="w-4 h-4 text-white" />
              </div>
              <span className="font-display font-bold text-xl">Ratio</span>
            </div>
            <p className="font-body text-sm text-[#888]">© 2026 Ratio Reader. All rights reserved.</p>
          </div>
        </footer>
      </main>
    </div>
  );
}
