import { Feather, Sun, Coffee, Heart, Smile, Sparkles } from "lucide-react";

export function Design4() {
  return (
    <div className="min-h-screen bg-[#FFFBF7] text-[#5D5D5D] font-[family-name:var(--font-soft-body)] overflow-x-hidden selection:bg-[#C1E1C1] selection:text-[#2D2D2D]">
      
      {/* Background Blobs */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute -top-20 -right-20 w-[600px] h-[600px] bg-[#FFE4E1]/60 rounded-full blur-3xl opacity-50 animate-pulse"></div>
        <div className="absolute top-1/2 -left-20 w-[500px] h-[500px] bg-[#C1E1C1]/40 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-[#E6E6FA]/60 rounded-full blur-3xl opacity-50"></div>
      </div>

      {/* Navigation */}
      <nav className="max-w-6xl mx-auto px-6 py-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
            <div className="bg-[#FFDAB9] p-2 rounded-2xl">
                <Feather className="text-[#8B4513]" size={24} />
            </div>
            <span className="font-[family-name:var(--font-soft-heading)] font-bold text-2xl text-[#4A4A4A]">ratio</span>
        </div>
        <div className="hidden md:flex gap-8 font-bold text-[#888]">
            <a href="#" className="hover:text-[#FF8C69] transition-colors">Features</a>
            <a href="#" className="hover:text-[#FF8C69] transition-colors">Pricing</a>
            <a href="#" className="hover:text-[#FF8C69] transition-colors">About</a>
        </div>
        <button className="bg-white text-[#4A4A4A] border-2 border-[#EFEFEF] px-6 py-2 rounded-full font-bold shadow-sm hover:shadow-md hover:border-[#FFDAB9] transition-all">
            Login
        </button>
      </nav>

      {/* Hero Section */}
      <main className="max-w-5xl mx-auto px-6 py-20 text-center">
        <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-[#EFEFEF] mb-8 animate-bounce">
            <Sun size={16} className="text-yellow-400" />
            <span className="text-sm font-bold text-[#666]">New: Smart Audio Summaries</span>
        </div>
        
        <h1 className="font-[family-name:var(--font-soft-heading)] text-5xl md:text-7xl font-extrabold text-[#2D2D2D] mb-6 leading-tight">
            Reading feels <br/>
            <span className="relative inline-block">
                <span className="relative z-10 text-[#FF8C69]">good again.</span>
                <span className="absolute bottom-2 left-0 w-full h-4 bg-[#FFDAB9]/50 -z-0 rounded-full"></span>
            </span>
        </h1>
        
        <p className="text-lg md:text-xl text-[#777] max-w-2xl mx-auto mb-12 leading-relaxed">
            Ratio helps you gently digest complex documents. No stress, no rush. Just the insights you need, served in a way that makes sense.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-[#FF8C69] text-white px-8 py-4 rounded-3xl font-bold text-lg shadow-[0_10px_20px_rgba(255,140,105,0.3)] hover:-translate-y-1 hover:shadow-[0_15px_30px_rgba(255,140,105,0.4)] transition-all flex items-center justify-center gap-2">
                <Sparkles size={20} />
                Try for Free
            </button>
            <button className="bg-white text-[#555] border-2 border-[#EFEFEF] px-8 py-4 rounded-3xl font-bold text-lg hover:bg-[#FAF9F6] hover:border-[#DDD] transition-all">
                View Example
            </button>
        </div>

        {/* Floating Cards Visual */}
        <div className="relative mt-20 h-[400px] w-full max-w-4xl mx-auto">
            {/* Card 1 */}
            <div className="absolute left-0 md:left-10 top-10 bg-white p-6 rounded-3xl shadow-[0_20px_40px_rgba(0,0,0,0.05)] w-64 rotate-[-6deg] hover:rotate-0 hover:scale-105 transition-all duration-500 z-10">
                <div className="flex gap-2 mb-4">
                    <div className="w-8 h-8 rounded-full bg-[#E6E6FA] flex items-center justify-center">
                        <Coffee size={16} className="text-[#9370DB]" />
                    </div>
                    <div>
                        <div className="h-2 w-20 bg-[#F0F0F0] rounded-full mb-1"></div>
                        <div className="h-2 w-12 bg-[#F0F0F0] rounded-full"></div>
                    </div>
                </div>
                <div className="space-y-2">
                    <div className="h-3 w-full bg-[#F5F5F5] rounded-full"></div>
                    <div className="h-3 w-full bg-[#F5F5F5] rounded-full"></div>
                    <div className="h-3 w-2/3 bg-[#F5F5F5] rounded-full"></div>
                </div>
            </div>

            {/* Card 2 (Center) */}
            <div className="absolute left-1/2 -translate-x-1/2 top-0 bg-white p-8 rounded-3xl shadow-[0_30px_60px_rgba(0,0,0,0.08)] w-72 md:w-80 z-20 hover:-translate-y-2 transition-transform duration-500">
                <div className="flex justify-between items-center mb-6">
                    <span className="font-bold text-lg text-[#2D2D2D]">Key Insight</span>
                    <Heart size={20} className="text-[#FF8C69] fill-[#FF8C69]" />
                </div>
                <p className="text-[#555] leading-relaxed mb-6 font-medium">
                    "The study concludes that positive reinforcement significantly improves learning retention by 45% compared to traditional methods."
                </p>
                <div className="flex gap-2">
                    <span className="px-3 py-1 bg-[#C1E1C1]/30 text-[#556B2F] rounded-full text-xs font-bold">#Learning</span>
                    <span className="px-3 py-1 bg-[#FFDAB9]/50 text-[#8B4513] rounded-full text-xs font-bold">#Psychology</span>
                </div>
            </div>

            {/* Card 3 */}
            <div className="absolute right-0 md:right-10 top-16 bg-white p-6 rounded-3xl shadow-[0_20px_40px_rgba(0,0,0,0.05)] w-64 rotate-[6deg] hover:rotate-0 hover:scale-105 transition-all duration-500 z-10">
                <div className="flex gap-2 mb-4">
                     <div className="w-8 h-8 rounded-full bg-[#FFDAB9] flex items-center justify-center">
                        <Smile size={16} className="text-[#8B4513]" />
                    </div>
                    <div>
                        <div className="h-2 w-20 bg-[#F0F0F0] rounded-full mb-1"></div>
                        <div className="h-2 w-12 bg-[#F0F0F0] rounded-full"></div>
                    </div>
                </div>
                 <div className="space-y-2">
                    <div className="h-3 w-full bg-[#F5F5F5] rounded-full"></div>
                    <div className="h-3 w-full bg-[#F5F5F5] rounded-full"></div>
                    <div className="h-3 w-3/4 bg-[#F5F5F5] rounded-full"></div>
                </div>
            </div>
        </div>
      </main>

      {/* Features */}
      <section className="py-20 bg-white/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-12">
            <div className="text-center">
                <div className="bg-[#E6E6FA] w-16 h-16 rounded-2xl mx-auto flex items-center justify-center mb-6 rotate-3">
                    <Sparkles className="text-[#9370DB]" />
                </div>
                <h3 className="font-[family-name:var(--font-soft-heading)] font-bold text-xl mb-3">Instant Clarity</h3>
                <p className="text-[#777]">Turn 50 pages into 5 paragraphs. We distill the essence so you can understand quickly.</p>
            </div>
            <div className="text-center">
                <div className="bg-[#C1E1C1] w-16 h-16 rounded-2xl mx-auto flex items-center justify-center mb-6 -rotate-3">
                    <Feather className="text-[#556B2F]" />
                </div>
                <h3 className="font-[family-name:var(--font-soft-heading)] font-bold text-xl mb-3">Lightweight</h3>
                <p className="text-[#777]">Works on any device. Fast, responsive, and gentle on your battery and your eyes.</p>
            </div>
            <div className="text-center">
                <div className="bg-[#FFDAB9] w-16 h-16 rounded-2xl mx-auto flex items-center justify-center mb-6 rotate-2">
                    <Smile className="text-[#8B4513]" />
                </div>
                <h3 className="font-[family-name:var(--font-soft-heading)] font-bold text-xl mb-3">Friendly Guide</h3>
                <p className="text-[#777]">Stuck on a concept? Ratio acts as a tutor, explaining difficult terms in simple language.</p>
            </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 text-center text-[#888]">
        <div className="font-[family-name:var(--font-soft-heading)] font-bold text-2xl text-[#4A4A4A] mb-4">ratio</div>
        <p className="mb-8">Made with <Heart size={16} className="inline text-[#FF8C69] mx-1"/> for readers everywhere.</p>
      </footer>
    </div>
  );
}
