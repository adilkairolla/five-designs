import { useState } from "react";
import { SAMPLE_PDFS } from "../data/samplePdfs";
import {
  Flame,
  BookOpen,
  Quote,
  Lightbulb,
  Sparkles,
  Feather,
  Bookmark,
  ArrowUpRight
} from "lucide-react";

export function DesignFive() {
  const [selectedBook, setSelectedBook] = useState(0);
  const [companionMode, setCompanionMode] = useState<"hints" | "quotes" | "insights">("quotes");
  const [candlelightDim, setCandlelightDim] = useState(false);

  const doc = SAMPLE_PDFS[selectedBook];

  return (
    <div className="min-h-screen bg-[#110E0C] text-[#F4ECE1] font-dm selection:bg-[#D4AF37] selection:text-[#110E0C] relative">
      <div
        className="pointer-events-none fixed inset-0 transition-opacity duration-700"
        style={{
          background: candlelightDim
            ? "radial-gradient(circle at 50% 38%, rgba(212, 175, 55, 0.16), rgba(17, 14, 12, 0.96) 65%)"
            : "radial-gradient(circle at 50% 20%, rgba(212, 175, 55, 0.11), transparent 70%)"
        }}
      />

      <div className="relative z-20 border-b border-[#D4AF37]/20 bg-[#0C0A08] px-4 py-2 text-[11px] tracking-[0.2em] uppercase text-[#A89B8C]">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <span className="flex items-center gap-2 text-[#D4AF37]">
            <Flame className="h-3.5 w-3.5" />
            NOCTURNE SALON · EDITION V
          </span>
          <span className="hidden sm:inline">CONTEMPLATIVE READING INSTRUMENT</span>
          <button
            type="button"
            onClick={() => setCandlelightDim((prev) => !prev)}
            className="border border-[#D4AF37]/40 px-2.5 py-0.5 text-[10px] text-[#D4AF37] hover:bg-[#D4AF37]/15 transition cursor-pointer"
          >
            {candlelightDim ? "Restore Salon Lamps" : "Dim to Candlelight"}
          </button>
        </div>
      </div>

      <header className="relative z-20 border-b border-[#D4AF37]/15 bg-[#110E0C]/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-5 sm:px-8">
          <div className="flex items-center gap-3.5">
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#D4AF37]/60 bg-[#1B1613] font-cormorant text-2xl italic text-[#D4AF37]">
              R
            </div>
            <div>
              <div className="font-cormorant text-2xl tracking-wide text-[#F4ECE1]">
                Ratio Reader <span className="italic text-[#D4AF37]">Nocturne</span>
              </div>
              <div className="text-[10px] tracking-[0.22em] uppercase text-[#A89B8C]">
                PRIVATE LITERARY DISTILLERY
              </div>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-xs tracking-[0.15em] uppercase text-[#A89B8C]">
            <a href="#open-folio" className="hover:text-[#D4AF37] transition">
              I. The Open Folio
            </a>
            <a href="#whisper-margin" className="hover:text-[#D4AF37] transition">
              II. Socratic Whispers
            </a>
            <a href="#membership" className="hover:text-[#D4AF37] transition">
              III. Salon Key
            </a>
          </nav>

          <button
            type="button"
            onClick={() => setSelectedBook((prev) => (prev + 1) % SAMPLE_PDFS.length)}
            className="inline-flex items-center gap-2 border border-[#D4AF37] bg-[#D4AF37]/10 px-4 py-2 text-xs tracking-[0.14em] uppercase text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#110E0C] transition cursor-pointer"
          >
            <Feather className="h-3.5 w-3.5" />
            <span>Open Next Volume</span>
          </button>
        </div>
      </header>

      <section className="relative z-10 mx-auto max-w-5xl px-4 pt-14 pb-12 text-center sm:px-8">
        <div className="inline-flex items-center gap-2 border border-[#D4AF37]/30 bg-[#1B1613] px-4 py-1 text-[11px] tracking-[0.2em] uppercase text-[#D4AF37]">
          <span>FOR THOSE WHO READ TO UNDERSTAND, NOT MERELY TO FINISH</span>
        </div>

        <h1 className="mt-6 font-cormorant text-5xl sm:text-7xl lg:text-[78px] font-normal leading-[0.96] tracking-tight text-[#F4ECE1]">
          Imagine a brilliant friend read your PDF at midnight—and{" "}
          <span className="italic text-[#D4AF37]">left gold leaf in the margins.</span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl font-newsreader text-lg sm:text-xl leading-relaxed text-[#C4B7A6]">
          Upload any dense treatise, research monograph, or strategic dossier.{" "}
          <span className="text-[#F4ECE1]">Ratio Reader</span> distills its essential argument, whispers clarifying{" "}
          <em className="text-[#D4AF37]">hints</em> beside difficult passages, and preserves the author’s finest{" "}
          <em className="text-[#D4AF37]">verbatim quotes & insights</em>.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          {SAMPLE_PDFS.map((book, idx) => (
            <button
              key={book.id}
              type="button"
              onClick={() => setSelectedBook(idx)}
              className={`border px-4 py-2 text-xs tracking-wider uppercase transition cursor-pointer ${
                selectedBook === idx
                  ? "border-[#D4AF37] bg-[#D4AF37] text-[#110E0C] font-semibold"
                  : "border-[#D4AF37]/25 bg-[#1B1613] text-[#C4B7A6] hover:border-[#D4AF37]/60"
              }`}
            >
              Vol. {idx + 1}: {book.domain} ({book.pages} pp.)
            </button>
          ))}
        </div>
      </section>

      <section id="open-folio" className="relative z-10 mx-auto max-w-7xl px-4 py-8 sm:px-8">
        <div className="rounded-2xl border border-[#D4AF37]/35 bg-[#181310] p-3 sm:p-6 shadow-[0_30px_90px_rgba(0,0,0,0.85)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 rounded-xl border border-[#D4AF37]/20 bg-[#1E1814] overflow-hidden">
            <div className="lg:col-span-6 border-b lg:border-b-0 lg:border-r border-[#D4AF37]/25 p-6 sm:p-12 relative bg-gradient-to-r from-[#1E1814] via-[#211B16] to-[#191410]">
              <div className="absolute top-0 right-8 bg-[#8B1E1E] px-3 py-2 text-[10px] tracking-[0.2em] uppercase text-[#F4ECE1] shadow-md flex items-center gap-1">
                <Bookmark className="h-3 w-3 fill-current" />
                <span>RATIO {doc.signalRatio}</span>
              </div>

              <div className="text-[11px] tracking-[0.2em] uppercase text-[#D4AF37]">
                VERSO · DISTILLED SUMMARY
              </div>

              <h2 className="mt-3 font-cormorant text-3xl sm:text-4xl leading-tight text-[#F4ECE1]">
                {doc.title}
              </h2>
              <div className="mt-1 text-xs italic font-newsreader text-[#A89B8C]">
                {doc.author} · {doc.pages} pages read in {doc.ratioReadTime} (vs. {doc.rawReadTime} raw)
              </div>

              <div className="mt-8 border-y border-[#D4AF37]/20 py-6">
                <p className="font-newsreader text-lg sm:text-xl leading-relaxed text-[#F4ECE1] first-letter:float-left first-letter:mr-3 first-letter:font-cormorant first-letter:text-6xl first-letter:leading-none first-letter:text-[#D4AF37]">
                  {doc.summariesByRatio.golden}
                </p>
              </div>

              <div className="mt-7">
                <div className="text-[11px] tracking-[0.2em] uppercase text-[#D4AF37] mb-4">
                  THE FOUR PILLARS OF THIS VOLUME
                </div>
                <div className="space-y-3">
                  {doc.coreTakeaways.map((point, idx) => (
                    <div key={idx} className="flex items-start gap-3 font-newsreader text-sm text-[#D8CBB8]">
                      <span className="font-cormorant text-lg italic text-[#D4AF37]">
                        {["i.", "ii.", "iii.", "iv."][idx]}
                      </span>
                      <span className="leading-relaxed">{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 p-6 sm:p-12 bg-gradient-to-l from-[#1E1814] via-[#211B16] to-[#191410] flex flex-col justify-between">
              <div>
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#D4AF37]/20 pb-4">
                  <div className="text-[11px] tracking-[0.2em] uppercase text-[#D4AF37]">
                    RECTO · MARGINALIA & ILLUMINATIONS
                  </div>

                  <div className="flex gap-1.5">
                    {(
                      [
                        { id: "quotes", label: "Quotes", icon: Quote },
                        { id: "hints", label: "Hints", icon: Lightbulb },
                        { id: "insights", label: "Insights", icon: Sparkles }
                      ] as const
                    ).map((tab) => {
                      const Icon = tab.icon;
                      const active = companionMode === tab.id;
                      return (
                        <button
                          key={tab.id}
                          type="button"
                          onClick={() => setCompanionMode(tab.id)}
                          className={`inline-flex items-center gap-1.5 border px-3 py-1 text-xs tracking-wider uppercase transition cursor-pointer ${
                            active
                              ? "border-[#D4AF37] bg-[#D4AF37] text-[#110E0C] font-semibold"
                              : "border-[#D4AF37]/25 text-[#C4B7A6] hover:border-[#D4AF37]/60"
                          }`}
                        >
                          <Icon className="h-3 w-3" />
                          <span>{tab.label}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {companionMode === "quotes" && (
                  <div className="mt-6 space-y-5">
                    <p className="text-xs italic font-newsreader text-[#A89B8C]">
                      Passages underlined in gold leaf—preserved verbatim with exact page coordinates so you never misquote the author:
                    </p>
                    {doc.quotes.map((q) => (
                      <div
                        key={q.id}
                        className="border-l-2 border-[#D4AF37] bg-[#14100D]/80 p-5"
                      >
                        <div className="flex items-center justify-between text-[11px] tracking-[0.18em] uppercase text-[#D4AF37]">
                          <span>FOLIO PAGE {q.page} · {q.paragraph}</span>
                          <span>RESONANCE {q.relevanceScore}%</span>
                        </div>
                        <blockquote className="mt-2.5 font-cormorant text-2xl italic leading-snug text-[#F4ECE1]">
                          “{q.text}”
                        </blockquote>
                        <p className="mt-2.5 text-xs text-[#A89B8C] leading-relaxed">
                          <span className="text-[#D4AF37] uppercase tracking-wider text-[10px]">
                            Marginal Note:{" "}
                          </span>
                          {q.significance}
                        </p>
                      </div>
                    ))}
                  </div>
                )}

                {companionMode === "hints" && (
                  <div className="mt-6 space-y-5">
                    <p className="text-xs italic font-newsreader text-[#A89B8C]">
                      Gentle Socratic hints that clarify prerequisites, hidden assumptions, and domain jargon before they interrupt your flow:
                    </p>
                    {doc.hints.map((h) => (
                      <div
                        key={h.id}
                        className="border border-[#D4AF37]/30 bg-[#14100D]/80 p-5"
                      >
                        <div className="flex items-center justify-between text-[10px] tracking-[0.2em] uppercase text-[#D4AF37]">
                          <span>{h.category}</span>
                          <span>APPEARS ON PAGE {h.page}</span>
                        </div>
                        <h4 className="mt-2 font-cormorant text-2xl text-[#F4ECE1]">
                          {h.term}
                        </h4>
                        <p className="mt-1.5 font-newsreader text-sm text-[#D8CBB8] leading-relaxed">
                          {h.explanation}
                        </p>
                        <div className="mt-3 text-[11px] italic text-[#D4AF37]/80">
                          Illuminates → {h.unlocksSection}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {companionMode === "insights" && (
                  <div className="mt-6 space-y-5">
                    <p className="text-xs italic font-newsreader text-[#A89B8C]">
                      Second-order synthesis—what the author implies between the lines and in buried footnotes:
                    </p>
                    {doc.insights.map((ins) => (
                      <div
                        key={ins.id}
                        className="border border-[#D4AF37]/30 bg-[#14100D]/80 p-5"
                      >
                        <div className="flex items-center justify-between text-[10px] tracking-[0.2em] uppercase text-[#D4AF37]">
                          <span>{ins.tag}</span>
                          <span>{ins.densityReduction}</span>
                        </div>
                        <h4 className="mt-2 font-cormorant text-2xl text-[#F4ECE1]">
                          {ins.title}
                        </h4>
                        <p className="mt-1.5 font-newsreader text-sm text-[#D8CBB8] leading-relaxed">
                          {ins.thesis}
                        </p>
                        <div className="mt-3 border-t border-[#D4AF37]/15 pt-2 text-xs text-[#D4AF37]">
                          Counsel: {ins.implication}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="mt-8 border-t border-[#D4AF37]/20 pt-4 flex items-center justify-between text-xs text-[#A89B8C]">
                <span className="italic font-newsreader">
                  Click Quotes, Hints, or Insights above to turn the marginalia pages.
                </span>
                <span className="text-[#D4AF37] uppercase tracking-widest text-[10px]">
                  FOLIO {selectedBook + 1} OF 3
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="whisper-margin" className="relative z-10 mx-auto max-w-6xl px-4 py-16 sm:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <div className="text-[11px] tracking-[0.25em] uppercase text-[#D4AF37]">
            II. PHILOSOPHY OF THE SALON
          </div>
          <h2 className="mt-3 font-cormorant text-4xl sm:text-5xl text-[#F4ECE1]">
            Reading should feel like revelation, not labor.
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: BookOpen,
              title: "Proportionate Summaries",
              body: "Never drown in 90 pages of throat-clearing. See the architectural spine of the author's argument in five serene minutes."
            },
            {
              icon: Lightbulb,
              title: "Whispered Margin Hints",
              body: "When an unfamiliar theorem or historical allusion appears, a quiet note in the margin explains it without breaking your trance."
            },
            {
              icon: Quote,
              title: "Unbroken Authorial Voice",
              body: "Summaries tell you what a book is about; verbatim quotes let you hear how the author thinks. Ratio Reader gives you both."
            }
          ].map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                className="border border-[#D4AF37]/25 bg-[#181310] p-8 flex flex-col justify-between"
              >
                <div>
                  <div className="flex h-10 w-10 items-center justify-center border border-[#D4AF37]/40 text-[#D4AF37]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-6 font-cormorant text-3xl text-[#F4ECE1]">{item.title}</h3>
                  <p className="mt-3 font-newsreader text-sm leading-relaxed text-[#C4B7A6]">
                    {item.body}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-[#D4AF37]/15 text-[10px] tracking-[0.2em] uppercase text-[#D4AF37]">
                  SALON STANDARD 0{i + 1}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section id="membership" className="relative z-10 mx-auto max-w-5xl px-4 pb-20 sm:px-8">
        <div className="border border-[#D4AF37]/50 bg-gradient-to-b from-[#1B1613] to-[#120E0C] p-8 sm:p-14 text-center shadow-2xl">
          <div className="text-[11px] tracking-[0.25em] uppercase text-[#D4AF37]">
            III. ENTER THE READING ROOM
          </div>
          <h2 className="mt-3 font-cormorant text-4xl sm:text-6xl text-[#F4ECE1]">
            Bring your most intimidating PDF tonight.
          </h2>
          <p className="mx-auto mt-4 max-w-xl font-newsreader text-base sm:text-lg text-[#C4B7A6]">
            In under ten minutes, you will possess its central thesis, its sharpest verbatim quotes, and the hidden insights others miss after three hours.
          </p>
          <div className="mt-8 flex justify-center">
            <button
              type="button"
              onClick={() => setSelectedBook((prev) => (prev + 1) % SAMPLE_PDFS.length)}
              className="inline-flex items-center gap-3 border border-[#D4AF37] bg-[#D4AF37] px-8 py-4 text-xs font-bold tracking-[0.2em] uppercase text-[#110E0C] hover:bg-[#e5c247] transition cursor-pointer"
            >
              <span>Distill Your First Volume Free</span>
              <ArrowUpRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>

      <footer className="relative z-10 border-t border-[#D4AF37]/20 py-8 px-4 sm:px-8 text-center text-[11px] tracking-[0.2em] uppercase text-[#A89B8C]">
        RATIO READER · EDITION 05 (NOCTURNE SALON) · EX LIBRIS MMXXVI
      </footer>
    </div>
  );
}
