import { Star, X } from "lucide-react";

export function Design3() {
  return (
    <div className="min-h-screen bg-white text-black font-[family-name:var(--font-brutal-body)] overflow-x-hidden">
      {/* Marquee Header */}
      <div className="bg-[#FF5200] border-b-4 border-black py-3 overflow-hidden whitespace-nowrap">
        <div className="inline-block animate-[slide_10s_linear_infinite]">
          <span className="text-xl font-black uppercase mx-4">Read Faster. Learn More.</span>
          <span className="text-xl font-black uppercase mx-4">///</span>
          <span className="text-xl font-black uppercase mx-4">Stop Wasting Time.</span>
          <span className="text-xl font-black uppercase mx-4">///</span>
          <span className="text-xl font-black uppercase mx-4">Read Faster. Learn More.</span>
          <span className="text-xl font-black uppercase mx-4">///</span>
          <span className="text-xl font-black uppercase mx-4">Stop Wasting Time.</span>
          <span className="text-xl font-black uppercase mx-4">///</span>
        </div>
      </div>

      {/* Main Nav */}
      <nav className="border-b-4 border-black px-6 py-6 flex flex-col md:flex-row justify-between md:items-center gap-4">
        <h1 className="text-6xl md:text-8xl font-[family-name:var(--font-brutal-heading)] uppercase tracking-tighter leading-[0.8]">
            Ratio<br/>Reader
        </h1>
        <div className="flex flex-col gap-2">
             <button className="bg-black text-white px-8 py-3 text-lg font-bold uppercase hover:bg-[#FF5200] hover:text-black transition-colors border-2 border-transparent hover:border-black">
                Menu
             </button>
        </div>
      </nav>

      {/* Hero Grid */}
      <main className="grid lg:grid-cols-[2fr_1fr] border-b-4 border-black">
        {/* Left Content */}
        <div className="p-6 md:p-12 lg:border-r-4 border-black flex flex-col justify-center">
             <h2 className="text-5xl md:text-7xl uppercase font-black leading-none mb-8">
                Your brain is <span className="text-[#0047FF] underline decoration-4 underline-offset-4">slow</span>. <br/>
                We fix that.
             </h2>
             <p className="text-xl md:text-2xl font-bold mb-12 max-w-xl">
                Upload PDFs. Get the summary. Skip the fluff. The most aggressive reading tool on the internet.
             </p>
             <div className="flex flex-col md:flex-row gap-4">
                <button className="bg-[#0047FF] text-white px-8 py-6 text-xl font-black uppercase border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all">
                    Start Reading Now
                </button>
                <button className="bg-white text-black px-8 py-6 text-xl font-black uppercase border-4 border-black hover:bg-[#FF5200] transition-colors">
                    How it works
                </button>
             </div>
        </div>

        {/* Right Visual */}
        <div className="bg-[#EFEFEF] relative overflow-hidden flex items-center justify-center border-t-4 lg:border-t-0 border-black min-h-[400px]">
             <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-[150%] font-[family-name:var(--font-brutal-heading)] text-[200px] leading-none opacity-5 -rotate-45 select-none text-center">
                    RATIO RATIO RATIO
                </div>
             </div>
             <div className="relative z-10 bg-white border-4 border-black p-8 shadow-[12px_12px_0px_0px_#FF5200] max-w-xs rotate-2 hover:rotate-0 transition-transform duration-300">
                <div className="flex justify-between items-center mb-4 border-b-4 border-black pb-2">
                    <span className="font-bold text-xl">SUMMARY.TXT</span>
                    <X size={24} strokeWidth={3} />
                </div>
                <p className="font-bold text-lg leading-tight uppercase">
                    &gt; The document argues that <span className="bg-[#FFFF00]">efficiency is paramount</span>.
                    <br/><br/>
                    &gt; Key data points suggest a 400% increase in retention.
                </p>
             </div>
        </div>
      </main>

      {/* Stats Section */}
      <section className="grid md:grid-cols-3 border-b-4 border-black">
        <div className="p-12 border-b-4 md:border-b-0 md:border-r-4 border-black bg-[#FF5200] text-center">
            <span className="block text-6xl font-[family-name:var(--font-brutal-heading)] mb-2">100+</span>
            <span className="font-black uppercase text-xl">Pages Analyzed</span>
        </div>
        <div className="p-12 border-b-4 md:border-b-0 md:border-r-4 border-black bg-white text-center">
            <span className="block text-6xl font-[family-name:var(--font-brutal-heading)] mb-2">0.5s</span>
            <span className="font-black uppercase text-xl">Processing Time</span>
        </div>
        <div className="p-12 bg-[#0047FF] text-white text-center">
            <span className="block text-6xl font-[family-name:var(--font-brutal-heading)] mb-2">10X</span>
            <span className="font-black uppercase text-xl">Productivity</span>
        </div>
      </section>

      {/* Info Boxes */}
      <section className="p-6 md:p-20 bg-black text-white">
        <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
                <div className="border-4 border-white p-8 hover:bg-white hover:text-black transition-colors duration-300">
                    <Star size={48} fill="currentColor" className="mb-6" />
                    <h3 className="text-4xl font-[family-name:var(--font-brutal-heading)] uppercase mb-4">No Nonsense</h3>
                    <p className="text-lg font-bold">We strip away the formatting, the ads, the filler. Just pure information delivered straight to your cortex.</p>
                </div>
                <div className="border-4 border-white p-8 hover:bg-[#FF5200] hover:text-black hover:border-[#FF5200] transition-colors duration-300">
                    <div className="w-12 h-12 bg-current mb-6"></div>
                    <h3 className="text-4xl font-[family-name:var(--font-brutal-heading)] uppercase mb-4">Structure</h3>
                    <p className="text-lg font-bold">Automatic highlighting of key terms. Definition popups. Contextual analysis. It's reading, evolved.</p>
                </div>
            </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="p-12 bg-[#EFEFEF] flex flex-col md:flex-row justify-between items-end gap-8">
        <div>
            <h2 className="text-6xl font-[family-name:var(--font-brutal-heading)] uppercase mb-4">Ratio</h2>
            <p className="font-bold max-w-sm">
                Built for the bold. <br/>
                San Francisco, CA.
            </p>
        </div>
        <div className="flex flex-col gap-2 w-full md:w-auto">
            <input type="email" placeholder="ENTER EMAIL" className="bg-white border-4 border-black p-4 font-bold placeholder:text-black focus:outline-none focus:ring-4 focus:ring-[#FF5200]" />
            <button className="bg-black text-white p-4 font-black uppercase hover:bg-[#0047FF]">Subscribe</button>
        </div>
      </footer>
    </div>
  );
}
