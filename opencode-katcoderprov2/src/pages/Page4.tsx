import { BookOpen, Sparkles, Zap, Quote, ArrowRight, Upload, Layers, Brain } from "lucide-react";

export default function Page4() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0F0C29] via-[#302B63] to-[#24243E] text-white overflow-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap');

        .font-display { font-family: 'Outfit', sans-serif; }
        .font-body { font-family: 'Plus Jakarta Sans', sans-serif; }

        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(2deg); }
        }

        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          33% { transform: translateY(-15px) translateX(10px); }
          66% { transform: translateY(10px) translateX(-10px); }
        }

        @keyframes glow-pulse {
          0%, 100% { opacity: 0.5; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.1); }
        }

        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
          opacity: 0;
        }
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-500 { animation-delay: 0.5s; }

        .glass {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(24px);
          -webkit-backdrop-filter: blur(24px);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .glass-strong {
          background: rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(32px);
          -webkit-backdrop-filter: blur(32px);
          border: 1px solid rgba(255, 255, 255, 0.15);
        }

        .blob {
          border-radius: 50%;
          filter: blur(80px);
        }
      `}</style>

      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[10%] w-[500px] h-[500px] blob bg-[#7B2FF2] opacity-30 animate-[float-slow_15s_ease-in-out_infinite]" />
        <div className="absolute bottom-[10%] right-[5%] w-[400px] h-[400px] blob bg-[#2F80ED] opacity-25 animate-[float-slow_20s_ease-in-out_infinite]" style={{ animationDelay: '-5s' }} />
        <div className="absolute top-[30%] right-[20%] w-[300px] h-[300px] blob bg-[#F77062] opacity-20 animate-[float-slow_18s_ease-in-out_infinite]" style={{ animationDelay: '-10s' }} />
      </div>

      <nav className="relative z-10 flex items-center justify-between px-6 md:px-12 py-6 animate-fade-in-up">
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-xl glass-strong flex items-center justify-center">
            <BookOpen className="w-4 h-4 text-white" />
          </div>
          <span className="font-display font-semibold text-xl tracking-tight">Ratio</span>
        </div>
        <div className="flex items-center gap-8 font-body text-sm text-white/70">
          <a href="#" className="hover:text-white transition-colors">Features</a>
          <a href="#" className="hover:text-white transition-colors">Pricing</a>
          <a href="#" className="hover:text-white transition-colors">About</a>
          <button className="glass-strong px-5 py-2.5 rounded-xl text-sm font-medium hover:bg-white/20 transition-colors duration-300">
            Get Started
          </button>
        </div>
      </nav>

      <main className="relative z-10">
        <section className="px-6 md:px-12 pt-16 pb-32">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in-up delay-100">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
                <Sparkles className="w-4 h-4 text-[#7B2FF2]" />
                <span className="font-body text-sm text-white/80">AI-Powered Reading Assistant</span>
              </div>
              <h1 className="font-display text-5xl md:text-7xl font-bold leading-tight mb-6">
                Read less.<br />
                <span className="bg-gradient-to-r from-[#7B2FF2] via-[#2F80ED] to-[#F77062] bg-clip-text text-transparent">Understand more.</span>
              </h1>
              <p className="font-body text-lg text-white/60 leading-relaxed mb-10 max-w-lg">
                Upload any PDF and let Ratio extract the gold. Get instant summaries, key quotes, and AI-powered insights that help you truly understand what you read.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="group flex items-center gap-3 bg-gradient-to-r from-[#7B2FF2] to-[#2F80ED] text-white px-8 py-4 rounded-2xl text-base font-medium hover:shadow-lg hover:shadow-[#7B2FF2]/40 transition-all duration-300">
                  <Upload className="w-5 h-5" />
                  Upload PDF
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="px-8 py-4 rounded-2xl text-base font-medium glass hover:bg-white/15 transition-colors duration-300">
                  Try a sample
                </button>
              </div>
            </div>

            <div className="relative animate-fade-in-up delay-300">
              <div className="relative z-10 glass-strong rounded-3xl p-8 shadow-2xl shadow-[#7B2FF2]/20" style={{ animation: 'float 6s ease-in-out infinite' }}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-3 h-3 rounded-full bg-[#F77062]" />
                  <div className="w-3 h-3 rounded-full bg-[#2F80ED]" />
                  <div className="w-3 h-3 rounded-full bg-[#7B2FF2]" />
                </div>
                <div className="space-y-4">
                  <div className="p-4 rounded-2xl bg-gradient-to-r from-[#7B2FF2]/20 to-[#7B2FF2]/5 border-l-4 border-[#7B2FF2]">
                    <div className="flex items-center gap-2 mb-2">
                      <Quote className="w-4 h-4 text-[#7B2FF2]" />
                      <span className="font-display font-semibold text-sm">Key Quote</span>
                    </div>
                    <p className="font-body text-sm text-white/70 italic">
                      "The measure of intelligence is the ability to change."
                    </p>
                  </div>
                  <div className="p-4 rounded-2xl bg-gradient-to-r from-[#2F80ED]/20 to-[#2F80ED]/5 border-l-4 border-[#2F80ED]">
                    <div className="flex items-center gap-2 mb-2">
                      <Brain className="w-4 h-4 text-[#2F80ED]" />
                      <span className="font-display font-semibold text-sm">Insight</span>
                    </div>
                    <p className="font-body text-sm text-white/70">
                      This passage explores the relationship between adaptability and cognitive flexibility...
                    </p>
                  </div>
                  <div className="p-4 rounded-2xl bg-gradient-to-r from-[#F77062]/20 to-[#F77062]/5 border-l-4 border-[#F77062]">
                    <div className="flex items-center gap-2 mb-2">
                      <Zap className="w-4 h-4 text-[#F77062]" />
                      <span className="font-display font-semibold text-sm">Summary</span>
                    </div>
                    <p className="font-body text-sm text-white/70">
                      3 key takeaways identified from 24 pages of content.
                    </p>
                  </div>
                </div>
              </div>
              <div className="absolute -inset-6 bg-gradient-to-tr from-[#7B2FF2]/20 via-[#2F80ED]/20 to-[#F77062]/20 rounded-3xl blur-3xl -z-10 animate-[glow-pulse_4s_ease-in-out_infinite]" />
            </div>
          </div>
        </section>

        <section className="relative z-10 px-6 md:px-12 py-24">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-center mb-6 animate-fade-in-up delay-200">
              How it <span className="bg-gradient-to-r from-[#7B2FF2] to-[#2F80ED] bg-clip-text text-transparent">works</span>
            </h2>
            <p className="font-body text-white/50 text-center mb-16 max-w-lg mx-auto animate-fade-in-up delay-200">
              Three simple steps to transform how you read
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: Upload, title: "Upload", desc: "Drop any PDF document", color: "#7B2FF2" },
                { icon: Layers, title: "Analyze", desc: "AI extracts key insights", color: "#2F80ED" },
                { icon: BookOpen, title: "Understand", desc: "Read with clarity", color: "#F77062" },
              ].map((step, i) => (
                <div
                  key={i}
                  className="glass rounded-3xl p-8 hover:-translate-y-2 transition-all duration-500 group animate-fade-in-up"
                  style={{ animationDelay: `${0.3 + i * 0.1}s` }}
                >
                  <div className="w-16 h-16 mx-auto rounded-2xl flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-110"
                    style={{ background: `${step.color}20`, border: `1px solid ${step.color}40` }}>
                    <step.icon className="w-7 h-7" style={{ color: step.color }} />
                  </div>
                  <h3 className="font-display text-2xl font-semibold text-center mb-3">{step.title}</h3>
                  <p className="font-body text-white/50 text-center text-sm">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="relative z-10 px-6 md:px-12 py-24">
          <div className="max-w-6xl mx-auto">
            <div className="glass rounded-3xl p-12 md:p-16">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
                    Everything you need to <span className="bg-gradient-to-r from-[#7B2FF2] to-[#2F80ED] bg-clip-text text-transparent">master any text</span>
                  </h2>
                  <ul className="space-y-4 font-body text-white/70">
                    {[
                      "Smart summarization with adjustable length",
                      "Key quote extraction with full context",
                      "AI-powered hints and explanations",
                      "Cross-document search and comparison",
                      "Export to Notion, Obsidian, and more",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-gradient-to-r from-[#7B2FF2] to-[#2F80ED] flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Sparkles className="w-3 h-3 text-white" />
                        </div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { label: "Pages Analyzed", value: "2.4M+" },
                    { label: "Avg. Time Saved", value: "87%" },
                    { label: "Active Readers", value: "50K+" },
                    { label: "Documents", value: "500K+" },
                  ].map((stat, i) => (
                    <div key={i} className="glass-strong rounded-2xl p-6 text-center">
                      <div className="font-display text-3xl font-bold bg-gradient-to-r from-[#7B2FF2] to-[#2F80ED] bg-clip-text text-transparent mb-1">
                        {stat.value}
                      </div>
                      <div className="font-body text-xs text-white/50">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative z-10 px-6 md:px-12 py-24">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-display text-4xl md:text-6xl font-bold mb-6 animate-fade-in-up">
              Ready to <span className="bg-gradient-to-r from-[#7B2FF2] via-[#2F80ED] to-[#F77062] bg-clip-text text-transparent">start?</span>
            </h2>
            <p className="font-body text-white/60 mb-10 max-w-lg mx-auto animate-fade-in-up delay-100">
              Join thousands of readers who understand more by reading less.
            </p>
            <button className="group bg-gradient-to-r from-[#7B2FF2] to-[#2F80ED] text-white px-10 py-5 rounded-2xl text-lg font-medium hover:shadow-xl hover:shadow-[#7B2FF2]/40 transition-all duration-300 inline-flex items-center gap-3 animate-fade-in-up delay-200">
              Get Started Free
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </section>

        <footer className="relative z-10 border-t border-white/10 px-6 md:px-12 py-12">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg glass-strong flex items-center justify-center">
                <BookOpen className="w-3 h-3 text-white" />
              </div>
              <span className="font-display font-semibold">Ratio</span>
            </div>
            <p className="font-body text-sm text-white/40">© 2026 Ratio Reader. All rights reserved.</p>
          </div>
        </footer>
      </main>
    </div>
  );
}
