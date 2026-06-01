import { Terminal, Shield, Cpu, ChevronRight, ScanLine } from "lucide-react";

export function Design2() {
  return (
    <div className="min-h-screen bg-[#050505] text-[#E0E0E0] font-[family-name:var(--font-cyber-mono)] selection:bg-[#00FF41] selection:text-black overflow-x-hidden relative">
      
      {/* Background Grid */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-20" 
           style={{ backgroundImage: 'linear-gradient(#00FF41 1px, transparent 1px), linear-gradient(90deg, #00FF41 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>

      {/* Navigation */}
      <nav className="relative z-50 border-b border-[#333] bg-[#050505]/90 backdrop-blur-md px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <Cpu className="text-[#00FF41] animate-pulse" />
          <span className="font-[family-name:var(--font-cyber-heading)] text-xl tracking-widest uppercase text-white">
            Ratio<span className="text-[#00FF41]">_Reader</span>
            <span className="text-[10px] ml-2 bg-[#333] px-2 py-0.5 rounded text-[#00FF41]">v2.0.45</span>
          </span>
        </div>
        <div className="hidden md:flex gap-8 text-xs uppercase tracking-widest text-[#00F3FF]">
            <span className="cursor-pointer hover:bg-[#00F3FF] hover:text-black px-2 py-1 transition-colors">[ System ]</span>
            <span className="cursor-pointer hover:bg-[#00F3FF] hover:text-black px-2 py-1 transition-colors">[ Modules ]</span>
            <span className="cursor-pointer hover:bg-[#00F3FF] hover:text-black px-2 py-1 transition-colors">[ Access ]</span>
        </div>
        <button className="border border-[#FF003C] text-[#FF003C] px-6 py-2 text-xs uppercase hover:bg-[#FF003C] hover:text-white transition-all shadow-[0_0_10px_rgba(255,0,60,0.3)] hover:shadow-[0_0_20px_rgba(255,0,60,0.6)]">
          Initialize
        </button>
      </nav>

      {/* Hero */}
      <main className="relative z-10 max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
            <div className="inline-block border border-[#00F3FF] bg-[#00F3FF]/10 px-4 py-1 text-[#00F3FF] text-xs tracking-widest mb-4">
                :: NEURAL LINK ESTABLISHED ::
            </div>
            <h1 className="text-5xl md:text-7xl font-[family-name:var(--font-cyber-heading)] leading-none text-white uppercase glitch-text">
                Decrypt <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00FF41] to-[#00F3FF]">Knowledge</span>
            </h1>
            <p className="text-lg text-[#888] max-w-lg border-l-2 border-[#333] pl-6">
                Ratio Reader bypasses cognitive limits. Upload raw PDF data. Receive processed, high-fidelity intelligence in milliseconds.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-8">
                <button className="bg-[#00FF41] text-black px-8 py-4 font-bold uppercase tracking-wider hover:bg-white transition-colors skew-x-[-10deg]">
                    <span className="skew-x-[10deg] block">Upload Stream</span>
                </button>
                <button className="border border-[#333] bg-[#111] text-white px-8 py-4 uppercase tracking-wider hover:border-[#00F3FF] transition-colors skew-x-[-10deg] group">
                    <span className="skew-x-[10deg] flex items-center gap-2">
                        Execute Demo <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform"/>
                    </span>
                </button>
            </div>

            <div className="flex gap-8 text-[10px] text-[#555] font-mono pt-8">
                <div>
                    <span className="block text-[#00FF41]">CPU LOAD</span>
                    12%
                </div>
                <div>
                    <span className="block text-[#00FF41]">MEMORY</span>
                    64TB
                </div>
                <div>
                    <span className="block text-[#00FF41]">UPTIME</span>
                    99.9999%
                </div>
            </div>
        </div>

        {/* Visual Terminal */}
        <div className="relative border border-[#333] bg-[#0A0A0A] p-2 h-[500px] shadow-[0_0_50px_rgba(0,255,65,0.05)]">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#00FF41] to-transparent opacity-50 animate-[scan_2s_linear_infinite]"></div>
            
            <div className="bg-[#000] h-full p-6 overflow-hidden font-mono text-xs md:text-sm">
                <div className="flex justify-between border-b border-[#333] pb-2 mb-4">
                    <span className="text-[#888]">root@ratio-reader:~</span>
                    <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-[#333]"></div>
                        <div className="w-3 h-3 rounded-full bg-[#333]"></div>
                        <div className="w-3 h-3 rounded-full bg-[#00FF41]"></div>
                    </div>
                </div>
                <div className="space-y-2 text-[#00FF41]">
                    <p>&gt; initiating_sequence...</p>
                    <p>&gt; loading_modules: [pdf_parser, semantic_engine, insight_generator]</p>
                    <p className="text-white">&gt; analyzing "quantum_mechanics_vol1.pdf"</p>
                    <div className="my-4 border border-[#00FF41]/30 p-4 bg-[#00FF41]/5">
                        <div className="flex justify-between text-[#00F3FF] mb-2">
                            <span>Analysis Progress</span>
                            <span>87%</span>
                        </div>
                        <div className="w-full h-2 bg-[#333]">
                            <div className="h-full bg-[#00F3FF] w-[87%]"></div>
                        </div>
                    </div>
                    <p>&gt; <span className="text-[#FF003C]">WARNING:</span> Insight density critical.</p>
                    <p>&gt; Extracting key axioms:</p>
                    <ul className="list-disc pl-5 space-y-1 text-[#AAA]">
                        <li>Wave-particle duality confirmed in section 3.</li>
                        <li>Observer effect correlates with data density.</li>
                        <li>Entanglement requires non-local variables.</li>
                    </ul>
                    <p className="animate-pulse">_</p>
                </div>
            </div>
        </div>
      </main>

      {/* Feature Strip */}
      <section className="border-y border-[#333] bg-[#0A0A0A] py-16 mt-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
            <div className="border border-[#333] p-8 hover:border-[#00FF41] transition-colors group">
                <Terminal className="text-[#00FF41] mb-6 w-10 h-10 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl text-white font-[family-name:var(--font-cyber-heading)] mb-2">Binary Parsing</h3>
                <p className="text-[#888] text-sm">Convert unstructured PDF blobs into structured JSON streams. Zero latency.</p>
            </div>
            <div className="border border-[#333] p-8 hover:border-[#FF003C] transition-colors group">
                <ScanLine className="text-[#FF003C] mb-6 w-10 h-10 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl text-white font-[family-name:var(--font-cyber-heading)] mb-2">Pattern Recog</h3>
                <p className="text-[#888] text-sm">Identify recurring themes and hidden connections invisible to the naked eye.</p>
            </div>
            <div className="border border-[#333] p-8 hover:border-[#00F3FF] transition-colors group">
                <Shield className="text-[#00F3FF] mb-6 w-10 h-10 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl text-white font-[family-name:var(--font-cyber-heading)] mb-2">Secure Core</h3>
                <p className="text-[#888] text-sm">Military-grade encryption for your intellectual property. Data is never persisted.</p>
            </div>
        </div>
      </section>

      {/* CTA */}
      <footer className="text-center py-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
            <div className="w-[600px] h-[600px] border border-[#00FF41] rounded-full animate-[spin_10s_linear_infinite]"></div>
        </div>
        <h2 className="text-4xl md:text-5xl font-[family-name:var(--font-cyber-heading)] text-white mb-8 uppercase">
            Upgrade Your <br/><span className="text-[#00FF41]">Processing Power</span>
        </h2>
        <button className="bg-[#FF003C] text-white px-12 py-4 font-bold uppercase tracking-widest hover:bg-[#D00030] shadow-[0_0_30px_rgba(255,0,60,0.4)] transition-all">
            Get Access Now
        </button>
      </footer>
    </div>
  );
}
