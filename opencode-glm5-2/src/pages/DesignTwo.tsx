import { motion } from "motion/react";

export function DesignTwo() {
  return (
    <div
      className="min-h-screen bg-[#e8e8e3] text-black"
      style={{ fontFamily: "'Archivo', sans-serif" }}
    >
      {/* Top bar */}
      <div className="border-b-2 border-black flex items-center justify-between px-4 py-2 text-[11px] uppercase tracking-widest font-bold">
        <span>RATIO/READER</span>
        <span className="hidden md:block">SUMMARY · HINTS · QUOTES</span>
        <span>SYS://ONLINE</span>
      </div>

      {/* Marquee */}
      <div className="overflow-hidden border-b-2 border-black bg-black text-[#e8e8e3] py-1">
        <div className="marquee whitespace-nowrap text-sm font-bold uppercase tracking-widest">
          {Array(4).fill("UPLOAD PDF → GET SUMMARY → READ SMARTER ✦ ").join("")}
          {Array(4).fill("UPLOAD PDF → GET SUMMARY → READ SMARTER ✦ ").join("")}
        </div>
      </div>

      {/* Hero grid */}
      <section className="grid grid-cols-12 border-b-2 border-black">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="col-span-12 md:col-span-8 border-r-0 md:border-r-2 border-black p-6 md:p-12 flex flex-col justify-between min-h-[70vh]"
        >
          <div className="flex items-start gap-4">
            <span className="text-[11px] uppercase tracking-widest font-bold border border-black px-2 py-1">
              001
            </span>
            <span className="text-[11px] uppercase tracking-widest font-bold">
              / The reading tool
            </span>
          </div>
          <h1
            className="text-[18vw] md:text-[12rem] leading-[0.82] font-black tracking-[-0.04em] uppercase"
            style={{ fontFamily: "'Archivo', sans-serif" }}
          >
            Ratio
            <br />
            <span className="bg-black text-[#e8e8e3] px-2">Reader.</span>
          </h1>
          <p className="text-base md:text-lg max-w-md mt-6 leading-snug">
            A PDF goes in. A summary, hints, and quotes come out. <strong>That is the whole product.</strong> No fluff. No dashboards. Just the ratio of signal to noise, corrected.
          </p>
        </motion.div>

        <div className="col-span-12 md:col-span-4 grid grid-rows-3 border-t-2 md:border-t-0 border-black">
          <div className="border-b-2 border-black p-6 flex flex-col justify-between bg-[#d4ff00]">
            <span className="text-[10px] uppercase tracking-widest font-bold">F.01</span>
            <span className="text-2xl font-black uppercase leading-none">Summary</span>
          </div>
          <div className="border-b-2 border-black p-6 flex flex-col justify-between">
            <span className="text-[10px] uppercase tracking-widest font-bold">F.02</span>
            <span className="text-2xl font-black uppercase leading-none">Hints</span>
          </div>
          <div className="p-6 flex flex-col justify-between bg-black text-[#e8e8e3]">
            <span className="text-[10px] uppercase tracking-widest font-bold">F.03</span>
            <span className="text-2xl font-black uppercase leading-none">Quotes</span>
          </div>
        </div>
      </section>

      {/* Manifesto */}
      <section className="grid grid-cols-12 border-b-2 border-black">
        <div className="col-span-12 md:col-span-4 border-r-0 md:border-r-2 border-black p-6 md:p-10">
          <span className="text-[11px] uppercase tracking-widest font-bold">/ Manifesto</span>
          <h2 className="text-3xl md:text-5xl font-black uppercase leading-[0.9] mt-3">
            We read wrong.
          </h2>
        </div>
        <div className="col-span-12 md:col-span-8 p-6 md:p-10 text-lg leading-relaxed">
          <p>
            The average PDF is 40 pages of padding around 4 pages of point. We were taught to read linearly, as if every sentence earned equal rent. It does not. <strong>Ratio Reader re-typesets a document by importance</strong> — the argument first, the evidence flagged, the memorable lines pulled forward. Reading becomes triage. You leave with the shape of the thing.
          </p>
        </div>
      </section>

      {/* Big numbers */}
      <section className="grid grid-cols-2 md:grid-cols-4 border-b-2 border-black">
        {[
          { n: "10×", l: "Faster than linear reading" },
          { n: "3", l: "Outputs: summary, hints, quotes" },
          { n: "0", l: "Accounts required to try" },
          { n: "PDF", l: "The only input format" },
        ].map((s, i) => (
          <motion.div
            key={s.n}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className={`p-6 md:p-8 border-black ${i < 3 ? "border-r-2" : ""} ${i < 2 ? "border-b-2 md:border-b-0" : ""}`}
          >
            <div className="text-5xl md:text-7xl font-black tracking-tight">{s.n}</div>
            <div className="text-[11px] uppercase tracking-widest mt-2">{s.l}</div>
          </motion.div>
        ))}
      </section>

      {/* Steps */}
      <section className="border-b-2 border-black">
        <div className="p-6 md:p-10 border-b-2 border-black">
          <span className="text-[11px] uppercase tracking-widest font-bold">/ Method · 03 steps</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3">
          {[
            { n: "01", t: "Drop the PDF", b: "Drag any document onto the dropzone. No login." },
            { n: "02", t: "Wait one breath", b: "Ratio reads, ranks, and rewrites the essentials." },
            { n: "03", t: "Read the ratio", b: "Summary, hints, quotes — in that order." },
          ].map((s, i) => (
            <div
              key={s.n}
              className={`p-6 md:p-10 border-black ${i < 2 ? "border-r-0 md:border-r-2 border-b-2 md:border-b-0" : ""}`}
            >
              <div className="text-[11px] uppercase tracking-widest font-bold mb-4">STEP {s.n}</div>
              <h3 className="text-2xl md:text-3xl font-black uppercase mb-2">{s.t}</h3>
              <p className="leading-snug">{s.b}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-black text-[#e8e8e3] p-8 md:p-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <h2
          className="text-5xl md:text-8xl font-black uppercase leading-[0.85] tracking-tight"
        >
          Stop reading
          <br />
          <span className="text-[#d4ff00]">everything.</span>
        </h2>
        <button className="bg-[#d4ff00] text-black px-10 py-6 text-lg font-black uppercase tracking-widest hover:bg-[#e8e8e3] transition-colors shrink-0">
          Upload PDF →
        </button>
      </section>

      <footer className="flex flex-col md:flex-row justify-between px-4 py-3 text-[11px] uppercase tracking-widest font-bold border-t-2 border-black">
        <span>© {new Date().getFullYear()} RATIO/READER</span>
        <span>BUILT FOR READERS, NOT SCROLLERS</span>
        <a href="/" className="hover:underline">← INDEX</a>
      </footer>
    </div>
  );
}
