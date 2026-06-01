import { useEffect, useRef } from "react";
import { BookOpen, Sparkles, Zap, Quote, ArrowRight, Upload } from "lucide-react";

export default function Page1() {
  const blobRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      if (!blobRef.current) return;
      const x = (e.clientX / window.innerWidth - 0.5) * 30;
      const y = (e.clientY / window.innerHeight - 0.5) * 30;
      blobRef.current.style.transform = `translate(${x}px, ${y}px) rotate(${x * 0.5}deg)`;
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <div className="min-h-screen bg-[#FDF8F3] text-[#2D2A26] overflow-hidden font-sans">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&family=Source+Serif+4:opsz,wght@0,300;0,400;0,600;1,400&display=swap');

        .font-display { font-family: 'Playfair Display', serif; }
        .font-body { font-family: 'Source Serif 4', serif; }

        @keyframes blob-float {
          0%, 100% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
          33% { border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%; }
          66% { border-radius: 70% 30% 50% 50% / 30% 50% 60% 50%; }
        }

        @keyframes drift {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(20px, -30px) scale(1.05); }
          50% { transform: translate(-10px, 20px) scale(0.95); }
          75% { transform: translate(30px, 10px) scale(1.02); }
        }

        @keyframes fade-slide-up {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .animate-fade-slide { animation: fade-slide-up 1s cubic-bezier(0.22, 1, 0.36, 1) forwards; opacity: 0; }
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-500 { animation-delay: 0.5s; }

        .blob-bg {
          animation: blob-float 12s ease-in-out infinite, drift 8s ease-in-out infinite;
        }

        .glass-card {
          background: rgba(255, 255, 255, 0.6);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.5);
        }

        .textured-bg {
          background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23d4c5a9' fill-opacity='0.12'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
        }
      `}</style>

      <nav className="flex items-center justify-between px-8 md:px-16 py-6 animate-fade-slide">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-[#C4A265] flex items-center justify-center">
            <BookOpen className="w-4 h-4 text-[#FDF8F3]" />
          </div>
          <span className="font-display font-semibold text-xl tracking-tight">Ratio</span>
        </div>
        <div className="flex items-center gap-6 font-body text-sm">
          <a href="#" className="hover:text-[#C4A265] transition-colors">Features</a>
          <a href="#" className="hover:text-[#C4A265] transition-colors">Pricing</a>
          <a href="#" className="hover:text-[#C4A265] transition-colors">About</a>
          <button className="bg-[#2D2A26] text-[#FDF8F3] px-5 py-2 rounded-full text-sm hover:bg-[#C4A265] transition-colors duration-300">
            Get Started
          </button>
        </div>
      </nav>

      <main className="relative">
        <div ref={blobRef} className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] blob-bg opacity-60"
          style={{
            background: 'radial-gradient(ellipse at 30% 30%, #E8D5B7 0%, #C4A265 40%, #A68B5B 70%, transparent 70%)',
            filter: 'blur(80px)',
          }}
        />
        <div className="absolute bottom-[10%] left-[-5%] w-[400px] h-[400px] blob-bg opacity-40"
          style={{
            background: 'radial-gradient(ellipse at 70% 70%, #D4C5A9 0%, #B8A88A 50%, transparent 70%)',
            filter: 'blur(60px)',
            animationDelay: '-4s',
          }}
        />

        <section className="relative z-10 px-8 md:px-16 pt-20 pb-32">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8 animate-fade-slide delay-100">
                <Sparkles className="w-4 h-4 text-[#C4A265]" />
                <span className="font-body text-sm">AI-Powered Reading Assistant</span>
              </div>
              <h1 className="font-display text-5xl md:text-7xl font-semibold leading-tight tracking-tight mb-6 animate-fade-slide delay-200">
                Read less.<br />
                <span className="italic text-[#C4A265]">Understand more.</span>
              </h1>
              <p className="font-body text-lg md:text-xl text-[#5A5650] leading-relaxed mb-10 max-w-lg animate-fade-slide delay-300">
                Upload any PDF and let Ratio distill the essence. Get summaries, key quotes, and insights that help you truly understand what you read.
              </p>
              <div className="flex flex-wrap gap-4 animate-fade-slide delay-300">
                <button className="group flex items-center gap-3 bg-[#2D2A26] text-[#FDF8F3] px-8 py-4 rounded-full text-base hover:bg-[#C4A265] transition-colors duration-300 shadow-lg shadow-[#2D2A26]/20">
                  <Upload className="w-5 h-5" />
                  Upload PDF
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="px-8 py-4 rounded-full text-base border border-[#2D2A26]/30 hover:border-[#C4A265] hover:text-[#C4A265] transition-colors duration-300">
                  Try a sample
                </button>
              </div>
            </div>

            <div className="relative animate-fade-slide delay-500">
              <div className="relative z-10 glass-card rounded-3xl p-8 shadow-2xl shadow-[#C4A265]/10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-3 h-3 rounded-full bg-[#C4A265]" />
                  <div className="w-3 h-3 rounded-full bg-[#D4C5A9]" />
                  <div className="w-3 h-3 rounded-full bg-[#E8D5B7]" />
                </div>
                <div className="space-y-4">
                  <div className="p-4 rounded-2xl bg-[#C4A265]/10 border-l-4 border-[#C4A265]">
                    <div className="flex items-center gap-2 mb-2">
                      <Quote className="w-4 h-4 text-[#C4A265]" />
                      <span className="font-display font-semibold text-sm">Key Quote</span>
                    </div>
                    <p className="font-body text-sm italic text-[#5A5650]">
                      "The measure of intelligence is the ability to change."
                    </p>
                  </div>
                  <div className="p-4 rounded-2xl bg-[#2D2A26]/5 border-l-4 border-[#2D2A26]/30">
                    <div className="flex items-center gap-2 mb-2">
                      <Zap className="w-4 h-4 text-[#2D2A26]" />
                      <span className="font-display font-semibold text-sm">Insight</span>
                    </div>
                    <p className="font-body text-sm text-[#5A5650]">
                      This passage explores the relationship between adaptability and cognitive flexibility...
                    </p>
                  </div>
                  <div className="p-4 rounded-2xl bg-gradient-to-r from-[#E8D5B7]/30 to-[#C4A265]/10 border-l-4 border-[#C4A265]">
                    <div className="flex items-center gap-2 mb-2">
                      <Sparkles className="w-4 h-4 text-[#C4A265]" />
                      <span className="font-display font-semibold text-sm">Summary</span>
                    </div>
                    <p className="font-body text-sm text-[#5A5650]">
                      3 key takeaways identified from 24 pages of content.
                    </p>
                  </div>
                </div>
              </div>
              <div className="absolute -inset-4 bg-gradient-to-tr from-[#C4A265]/20 to-[#E8D5B7]/20 rounded-3xl blur-2xl -z-10" />
            </div>
          </div>
        </section>

        <section className="relative z-10 px-8 md:px-16 py-24 textured-bg">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-display text-4xl md:text-5xl text-center mb-16">
              How it <span className="italic text-[#C4A265]">works</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: Upload, title: "Upload", desc: "Drop any PDF document" },
                { icon: Sparkles, title: "Analyze", desc: "AI extracts key insights" },
                { icon: BookOpen, title: "Understand", desc: "Read with clarity" },
              ].map((step, i) => (
                <div key={i} className="glass-card rounded-3xl p-8 text-center hover:-translate-y-2 transition-transform duration-500">
                  <div className="w-16 h-16 mx-auto rounded-full bg-[#C4A265]/10 flex items-center justify-center mb-6">
                    <step.icon className="w-7 h-7 text-[#C4A265]" />
                  </div>
                  <h3 className="font-display text-2xl font-semibold mb-3">{step.title}</h3>
                  <p className="font-body text-[#5A5650]">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <footer className="relative z-10 px-8 md:px-16 py-16 border-t border-[#2D2A26]/10">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-[#C4A265] flex items-center justify-center">
                <BookOpen className="w-3 h-3 text-[#FDF8F3]" />
              </div>
              <span className="font-display font-semibold">Ratio</span>
            </div>
            <p className="font-body text-sm text-[#5A5650]">© 2026 Ratio Reader. All rights reserved.</p>
          </div>
        </footer>
      </main>
    </div>
  );
}
