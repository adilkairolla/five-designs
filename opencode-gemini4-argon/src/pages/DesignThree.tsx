import { useState } from "react";
import { SAMPLE_PDFS } from "../data/samplePdfs";
import {
  Scissors,
  Stamp,
  BookmarkCheck,
  Sparkles,
  FileUp,
  Quote,
  Lightbulb,
  Pin,
  Check,
  ArrowUpRight
} from "lucide-react";

export function DesignThree() {
  const [activeDocIdx, setActiveDocIdx] = useState(2);
  const [pinnedCards, setPinnedCards] = useState<string[]>(["q-301", "h-301"]);
  const [inkFilter, setInkFilter] = useState<"all" | "hints" | "quotes" | "insights">("all");

  const doc = SAMPLE_PDFS[activeDocIdx];

  const togglePin = (id: string) => {
    setPinnedCards((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <div className="min-h-screen bg-[#F3EFEA] text-[#141413] font-jakarta riso-grain selection:bg-[#E8FF3B] selection:text-[#141413]">
      <div className="overflow-hidden border-b-2 border-[#141413] bg-[#E8FF3B] py-2 font-space-mono text-xs font-bold uppercase tracking-wider text-[#141413]">
        <div className="animate-marquee flex gap-10 whitespace-nowrap">
          <span>★ RATIO READER ZINE PRESS · EDITION 03</span>
          <span>● TURN BORING 100-PAGE PDFS INTO TACTILE INDEX CARDS</span>
          <span>★ COBALT INK = SUMMARY · CORAL INK = HINTS · CITRON INK = VERBATIM QUOTES</span>
          <span>● NO MORE WALLS OF TIMES NEW ROMAN</span>
          <span>★ RATIO READER ZINE PRESS · EDITION 03</span>
          <span>● TURN BORING 100-PAGE PDFS INTO TACTILE INDEX CARDS</span>
          <span>★ COBALT INK = SUMMARY · CORAL INK = HINTS · CITRON INK = VERBATIM QUOTES</span>
        </div>
      </div>

      <header className="border-b-2 border-[#141413] bg-[#F3EFEA]/95 backdrop-blur-sm sticky top-0 z-30">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-8">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 -rotate-3 items-center justify-center border-2 border-[#141413] bg-[#FF4F38] font-fraunces text-2xl font-black text-white shadow-[3px_3px_0px_#1B32B8]">
              R!
            </div>
            <div>
              <div className="font-fraunces text-2xl font-black tracking-tight text-[#141413]">
                Ratio Reader <span className="text-[#1B32B8] italic font-normal">Press</span>
              </div>
              <div className="font-space-mono text-[10px] uppercase tracking-widest text-[#141413]/70">
                CATALOG NO. 03 · ARCHIVAL IDEA HERBARIUM
              </div>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-6 font-space-mono text-xs font-bold uppercase">
            <a href="#zine-table" className="hover:text-[#FF4F38] underline decoration-2 underline-offset-4">
              01. Specimen Table
            </a>
            <a href="#three-drums" className="hover:text-[#1B32B8] underline decoration-2 underline-offset-4">
              02. 3-Ink Process
            </a>
            <a href="#card-drawer" className="hover:text-[#FF4F38] underline decoration-2 underline-offset-4">
              03. Index Drawer ({pinnedCards.length})
            </a>
          </div>

          <button
            type="button"
            onClick={() => setActiveDocIdx((prev) => (prev + 1) % SAMPLE_PDFS.length)}
            className="inline-flex items-center gap-2 border-2 border-[#141413] bg-[#1B32B8] px-4 py-2 font-space-mono text-xs font-bold uppercase text-white shadow-[4px_4px_0px_#FF4F38] transition hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0px_#FF4F38] cursor-pointer"
          >
            <FileUp className="h-4 w-4" />
            <span>Feed Next PDF Into Press</span>
          </button>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-4 pt-10 pb-16 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 border-2 border-[#141413] bg-white px-3 py-1 font-space-mono text-xs font-bold uppercase text-[#1B32B8] shadow-[3px_3px_0px_#141413] -rotate-1">
              <Scissors className="h-3.5 w-3.5 text-[#FF4F38]" />
              <span>CLIP THE WISDOM · COMPOST THE FLUFF</span>
            </div>

            <h1 className="mt-6 font-fraunces text-5xl sm:text-7xl font-black leading-[0.96] tracking-tight text-[#141413]">
              Every dense PDF is a{" "}
              <span className="inline-block bg-[#E8FF3B] px-3 border-2 border-[#141413] shadow-[4px_4px_0px_#1B32B8] -rotate-1">
                treasure chest
              </span>{" "}
              locked inside a filing cabinet.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#141413]/85 font-medium">
              Drop any intimidating PDF onto the <strong className="font-bold text-[#1B32B8]">Ratio Reader</strong> press. Within seconds, we print you a pocket-sized{" "}
              <span className="bg-[#1B32B8]/15 px-1.5 font-space-mono text-sm font-bold text-[#1B32B8]">
                Summary Zine
              </span>
              , rubber-stamp{" "}
              <span className="bg-[#FF4F38]/15 px-1.5 font-space-mono text-sm font-bold text-[#FF4F38]">
                Helpful Hints
              </span>{" "}
              next to confusing terms, and clip the best{" "}
              <span className="bg-[#E8FF3B] px-1.5 font-space-mono text-sm font-bold text-[#141413]">
                Verbatim Quotes & Insights
              </span>{" "}
              onto collectible index cards.
            </p>

            <div className="mt-8">
              <div className="font-space-mono text-xs font-bold uppercase text-[#141413]/70 mb-3">
                Choose a Printed Specimen from the Archive:
              </div>
              <div className="flex flex-wrap gap-3">
                {SAMPLE_PDFS.map((item, idx) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setActiveDocIdx(idx)}
                    className={`border-2 border-[#141413] px-4 py-2.5 font-space-mono text-xs font-bold uppercase transition cursor-pointer ${
                      activeDocIdx === idx
                        ? "bg-[#FF4F38] text-white shadow-[4px_4px_0px_#141413] -translate-y-0.5"
                        : "bg-white text-[#141413] shadow-[3px_3px_0px_#1B32B8] hover:bg-[#E8FF3B]"
                    }`}
                  >
                    #{idx + 1} · {item.domain} ({item.pages}p)
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative border-2 border-[#141413] bg-white p-6 sm:p-8 shadow-[10px_10px_0px_#1B32B8,-6px_-6px_0px_#FF4F38] rotate-1">
              <div className="flex items-center justify-between border-b-2 border-dashed border-[#141413]/30 pb-4 mb-5">
                <div className="flex gap-2">
                  <span className="h-4 w-4 rounded-full border-2 border-[#141413] bg-[#F3EFEA]" />
                  <span className="h-4 w-4 rounded-full border-2 border-[#141413] bg-[#F3EFEA]" />
                  <span className="h-4 w-4 rounded-full border-2 border-[#141413] bg-[#F3EFEA]" />
                </div>
                <span className="border-2 border-[#FF4F38] px-2 py-0.5 font-space-mono text-[11px] font-bold text-[#FF4F38] rotate-2">
                  RATIO {doc.signalRatio}
                </span>
              </div>

              <div className="font-space-mono text-xs font-bold uppercase text-[#1B32B8]">
                SPECIMEN FILE: {doc.filename}
              </div>
              <h2 className="mt-2 font-fraunces text-2xl sm:text-3xl font-black leading-tight text-[#141413]">
                {doc.title}
              </h2>
              <div className="mt-1 font-space-mono text-xs text-[#141413]/70">
                By {doc.author} · {doc.pages} Pages Compressed to {doc.ratioReadTime}
              </div>

              <div className="mt-5 border-2 border-[#1B32B8] bg-[#1B32B8]/5 p-4">
                <div className="inline-block bg-[#1B32B8] px-2 py-0.5 font-space-mono text-[10px] font-bold uppercase text-white">
                  DRUM 1 · THE BIG SUMMARY
                </div>
                <p className="mt-2 font-fraunces text-lg leading-snug text-[#141413]">
                  {doc.summariesByRatio.golden}
                </p>
              </div>

              <div className="mt-4 border-2 border-[#141413] bg-[#E8FF3B] p-4 shadow-[4px_4px_0px_#141413] -rotate-1">
                <div className="flex items-center justify-between font-space-mono text-[10px] font-bold uppercase">
                  <span className="text-[#FF4F38]">★ MARGIN HINT STAMP (P.{doc.hints[0].page})</span>
                  <span>DECODED!</span>
                </div>
                <div className="mt-1 font-bold text-sm text-[#141413]">
                  What is “{doc.hints[0].term}”?
                </div>
                <p className="mt-1 text-xs leading-relaxed text-[#141413]/85">
                  {doc.hints[0].explanation}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="three-drums" className="border-y-2 border-[#141413] bg-[#1B32B8] text-white py-14 px-4 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <div className="inline-block bg-[#E8FF3B] px-2.5 py-1 font-space-mono text-xs font-bold uppercase text-[#141413]">
                HOW RATIO READER WORKS
              </div>
              <h2 className="mt-3 font-fraunces text-4xl sm:text-5xl font-black">
                Three passes of ink. Zero wasted hours.
              </h2>
            </div>
            <p className="max-w-md font-space-mono text-xs text-white/80 leading-relaxed">
              Instead of dumping a generic wall of AI text, Ratio Reader separates your PDF into distinct tactile layers you can scan at a glance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                pass: "PASS 01 · COBALT DRUM",
                title: "The Skeleton Summary",
                color: "bg-white text-[#141413]",
                shadow: "shadow-[6px_6px_0px_#E8FF3B]",
                body: "We compress 100+ pages into a crisp 3-tier summary so you grasp the core thesis in 90 seconds before reading a single paragraph."
              },
              {
                pass: "PASS 02 · CORAL DRUM",
                title: "Rubber-Stamped Hints",
                color: "bg-[#FF4F38] text-white",
                shadow: "shadow-[6px_6px_0px_#141413]",
                body: "Whenever the author drops dense jargon, unstated assumptions, or complex formulas, we stamp a plain-English hint right beside it."
              },
              {
                pass: "PASS 03 · CITRON DRUM",
                title: "Clipped Quotes & Insights",
                color: "bg-[#E8FF3B] text-[#141413]",
                shadow: "shadow-[6px_6px_0px_#FF4F38]",
                body: "We clip the sharpest verbatim quotes (with exact page numbers) and synthesize counter-intuitive insights onto index cards."
              }
            ].map((drum) => (
              <div
                key={drum.pass}
                className={`border-2 border-[#141413] p-6 ${drum.color} ${drum.shadow}`}
              >
                <div className="font-space-mono text-xs font-bold uppercase opacity-80">
                  {drum.pass}
                </div>
                <h3 className="mt-2 font-fraunces text-3xl font-black">{drum.title}</h3>
                <p className="mt-3 text-sm leading-relaxed font-medium">{drum.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="zine-table" className="mx-auto max-w-7xl px-4 py-16 sm:px-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b-2 border-[#141413] pb-6">
          <div>
            <div className="font-space-mono text-xs font-bold uppercase text-[#FF4F38]">
              ★ INTERACTIVE SPECIMEN BOARD · CLICK ANY CARD TO PIN
            </div>
            <h2 className="mt-1 font-fraunces text-3xl sm:text-5xl font-black text-[#141413]">
              Extracted Cards for “{doc.domain}”
            </h2>
          </div>

          <div className="flex flex-wrap gap-2 font-space-mono text-xs font-bold">
            {(
              [
                { id: "all", label: "ALL CARDS (9)" },
                { id: "hints", label: "HINTS (3)" },
                { id: "quotes", label: "QUOTES (3)" },
                { id: "insights", label: "INSIGHTS (3)" }
              ] as const
            ).map((f) => (
              <button
                key={f.id}
                type="button"
                onClick={() => setInkFilter(f.id)}
                className={`border-2 border-[#141413] px-3 py-1.5 uppercase transition cursor-pointer ${
                  inkFilter === f.id
                    ? "bg-[#141413] text-[#E8FF3B]"
                    : "bg-white text-[#141413] hover:bg-[#E8FF3B]"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {(inkFilter === "all" || inkFilter === "quotes") &&
            doc.quotes.map((q, idx) => {
              const isPinned = pinnedCards.includes(q.id);
              return (
                <div
                  key={q.id}
                  onClick={() => togglePin(q.id)}
                  className={`group relative flex flex-col justify-between border-2 border-[#141413] bg-white p-6 transition cursor-pointer ${
                    idx % 2 === 0 ? "rotate-[0.6deg]" : "-rotate-[0.6deg]"
                  } hover:rotate-0 shadow-[6px_6px_0px_#1B32B8]`}
                >
                  <div>
                    <div className="flex items-center justify-between border-b-2 border-dashed border-[#141413]/20 pb-3">
                      <span className="inline-flex items-center gap-1.5 bg-[#E8FF3B] border border-[#141413] px-2 py-0.5 font-space-mono text-[10px] font-bold uppercase">
                        <Quote className="h-3 w-3" />
                        VERBATIM QUOTE · P.{q.page}
                      </span>
                      <span
                        className={`inline-flex items-center gap-1 font-space-mono text-[11px] font-bold ${
                          isPinned ? "text-[#FF4F38]" : "text-[#141413]/40 group-hover:text-[#141413]"
                        }`}
                      >
                        {isPinned ? <Check className="h-3.5 w-3.5" /> : <Pin className="h-3.5 w-3.5" />}
                        {isPinned ? "PINNED" : "PIN CARD"}
                      </span>
                    </div>

                    <blockquote className="mt-4 font-fraunces text-xl font-bold italic leading-snug text-[#141413]">
                      “{q.text}”
                    </blockquote>
                  </div>

                  <div className="mt-5 pt-3 border-t border-[#141413]/15">
                    <div className="font-space-mono text-[10px] font-bold uppercase text-[#1B32B8]">
                      WHY WE CLIPPED THIS ({q.relevanceScore}% MATCH):
                    </div>
                    <p className="mt-1 text-xs text-[#141413]/80 leading-relaxed">
                      {q.significance}
                    </p>
                  </div>
                </div>
              );
            })}

          {(inkFilter === "all" || inkFilter === "hints") &&
            doc.hints.map((h, idx) => {
              const isPinned = pinnedCards.includes(h.id);
              return (
                <div
                  key={h.id}
                  onClick={() => togglePin(h.id)}
                  className={`group relative flex flex-col justify-between border-2 border-[#141413] bg-[#FFFDF9] p-6 transition cursor-pointer ${
                    idx % 2 === 0 ? "-rotate-[0.8deg]" : "rotate-[0.8deg]"
                  } hover:rotate-0 shadow-[6px_6px_0px_#FF4F38]`}
                >
                  <div>
                    <div className="flex items-center justify-between border-b-2 border-dashed border-[#141413]/20 pb-3">
                      <span className="inline-flex items-center gap-1.5 bg-[#FF4F38] text-white px-2 py-0.5 font-space-mono text-[10px] font-bold uppercase">
                        <Lightbulb className="h-3 w-3" />
                        HINT · {h.category}
                      </span>
                      <span className="font-space-mono text-[11px] font-bold text-[#141413]/60">
                        PAGE {h.page}
                      </span>
                    </div>

                    <h3 className="mt-4 font-fraunces text-2xl font-black text-[#141413]">
                      {h.term}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-[#141413]/85">
                      {h.explanation}
                    </p>
                  </div>

                  <div className="mt-5 flex items-center justify-between bg-[#F3EFEA] border border-[#141413]/20 px-3 py-2 font-space-mono text-[10px]">
                    <span>UNLOCKS: {h.unlocksSection}</span>
                    <span className="font-bold text-[#FF4F38]">{isPinned ? "★ SAVED" : "+ SAVE"}</span>
                  </div>
                </div>
              );
            })}

          {(inkFilter === "all" || inkFilter === "insights") &&
            doc.insights.map((ins) => {
              const isPinned = pinnedCards.includes(ins.id);
              return (
                <div
                  key={ins.id}
                  onClick={() => togglePin(ins.id)}
                  className="group relative flex flex-col justify-between border-2 border-[#141413] bg-[#E8FF3B] p-6 transition cursor-pointer hover:rotate-0 shadow-[6px_6px_0px_#141413]"
                >
                  <div>
                    <div className="flex items-center justify-between border-b-2 border-[#141413]/20 pb-3">
                      <span className="inline-flex items-center gap-1.5 bg-[#141413] text-[#E8FF3B] px-2 py-0.5 font-space-mono text-[10px] font-bold uppercase">
                        <Sparkles className="h-3 w-3" />
                        INSIGHT · {ins.tag}
                      </span>
                      <span className="font-space-mono text-[10px] font-bold">
                        {ins.densityReduction}
                      </span>
                    </div>

                    <h3 className="mt-4 font-fraunces text-2xl font-black text-[#141413]">
                      {ins.title}
                    </h3>
                    <p className="mt-2 text-sm font-medium leading-relaxed text-[#141413]">
                      {ins.thesis}
                    </p>
                  </div>

                  <div className="mt-5 border-t-2 border-[#141413] pt-3 font-space-mono text-xs font-bold text-[#1B32B8] flex items-center justify-between">
                    <span>→ {ins.implication}</span>
                    <span>{isPinned ? "✓" : "+"}</span>
                  </div>
                </div>
              );
            })}
        </div>

        <div
          id="card-drawer"
          className="mt-14 border-2 border-[#141413] bg-white p-8 shadow-[8px_8px_0px_#141413] flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6"
        >
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center border-2 border-[#141413] bg-[#E8FF3B]">
              <BookmarkCheck className="h-6 w-6 text-[#141413]" />
            </div>
            <div>
              <div className="font-space-mono text-xs font-bold uppercase text-[#1B32B8]">
                YOUR PERSONAL ZINE BOX · {pinnedCards.length} CARDS PINNED
              </div>
              <h3 className="mt-1 font-fraunces text-3xl font-black text-[#141413]">
                Ready to print your own PDFs into instant wisdom?
              </h3>
              <p className="mt-1 text-sm text-[#141413]/75">
                Upload lecture notes, dense books, or 80-page reports. Export your pinned Quotes, Hints & Insights to Notion, Readwise, or printable PDF zines.
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={() => setActiveDocIdx((prev) => (prev + 1) % SAMPLE_PDFS.length)}
            className="inline-flex items-center gap-2 border-2 border-[#141413] bg-[#FF4F38] px-6 py-4 font-space-mono text-xs font-bold uppercase text-white shadow-[4px_4px_0px_#141413] hover:bg-[#1B32B8] transition cursor-pointer shrink-0"
          >
            <Stamp className="h-4 w-4" />
            <span>Start Pressing PDFs Free</span>
            <ArrowUpRight className="h-4 w-4" />
          </button>
        </div>
      </section>

      <footer className="border-t-2 border-[#141413] bg-[#141413] text-[#F3EFEA] py-8 px-4 sm:px-8 font-space-mono text-xs">
        <div className="mx-auto max-w-7xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>RATIO READER PRESS // EDITION 03 (HERBARIUM OF IDEAS)</div>
          <div className="text-[#E8FF3B]">RISO INK REGISTERED · USE KEYS 1–5 TO EXPLORE ALL 5 DESIGNS</div>
        </div>
      </footer>
    </div>
  );
}
