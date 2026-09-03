import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowLeft, ArrowUpRight, Plus, Minus, Check } from "lucide-react";

const BLUE = "#2B4EFF";

function Accordion({ q, a, i }: { q: string; a: string; i: string }) {
  const [open, setOpen] = useState(i === "01");
  return (
    <div className="border-t border-black">
      <button onClick={() => setOpen(!open)} className="flex w-full items-center gap-6 py-5 text-left">
        <span className="font-plex text-xs text-black/40">{i}</span>
        <span className="flex-1 text-xl font-semibold tracking-tight">{q}</span>
        {open ? <Minus className="size-5" /> : <Plus className="size-5" />}
      </button>
      {open && <p className="max-w-2xl pb-6 pl-12 text-[15px] leading-relaxed text-black/60">{a}</p>}
    </div>
  );
}

export function DesignFour() {
  const [file, setFile] = useState<string | null>(null);
  return (
    <div className="min-h-screen bg-white font-inter text-black">
      <header className="border-b border-black">
        <div className="mx-auto grid max-w-7xl grid-cols-3 items-center px-6 py-4">
          <Link to="/" className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] hover:opacity-60"><ArrowLeft className="size-4" /> Index</Link>
          <p className="text-center text-lg font-extrabold tracking-tight">Ratio Reader<span style={{ color: BLUE }}>.</span></p>
          <div className="text-right"><a href="#pricing-4" className="bg-black px-5 py-2.5 text-xs font-bold uppercase tracking-[0.2em] text-white hover:opacity-80">Start — free</a></div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-6">
        <section className="grid gap-10 border-b border-black py-14 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}>
              <p className="font-plex text-xs uppercase tracking-[0.3em]" style={{ color: BLUE }}>( 001 — Document compression instrument )</p>
              <h1 className="mt-4 text-6xl font-extrabold leading-[0.95] tracking-[-0.03em] sm:text-8xl">Read less.<br />Know <span style={{ color: BLUE }}>exactly</span><br />more.</h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-black/60">Ratio Reader reduces any PDF to its essential information: a precise summary, cited quotations, explanatory hints, and structured insights. Nothing decorative. Everything verifiable.</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <label className="cursor-pointer bg-black px-7 py-4 text-sm font-bold uppercase tracking-[0.15em] text-white hover:opacity-80">
                  {file ? `Loaded: ${file.slice(0, 28)}` : "Upload PDF — free"}
                  <input type="file" accept="application/pdf" className="hidden" onChange={(e) => setFile(e.target.files?.[0]?.name ?? null)} />
                </label>
                <a href="#spec-4" className="border border-black px-7 py-4 text-sm font-bold uppercase tracking-[0.15em] hover:bg-black hover:text-white">Specification ↓</a>
              </div>
              <dl className="mt-10 grid grid-cols-3 border-t border-black pt-6">
                {[["17.7×", "mean compression"], ["100%", "claims cited"], ["±0", "filler retained"]].map(([v, l]) => (
                  <div key={l}><dt className="text-4xl font-extrabold tracking-tight">{v}</dt><dd className="mt-1 font-plex text-[11px] uppercase tracking-[0.2em] text-black/50">{l}</dd></div>
                ))}
              </dl>
            </motion.div>
          </div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="lg:col-span-4">
            <div className="border border-black">
              <div className="flex justify-between border-b border-black px-4 py-2 font-plex text-[11px] uppercase tracking-[0.2em]"><span>Fig. A — input / output</span><span>212 pp.</span></div>
              <div className="grid grid-cols-2">
                <div className="border-r border-black p-5">
                  <div className="space-y-1.5">{Array(14).fill(0).map((_, i) => <div key={i} className="h-1.5 bg-black/15" style={{ width: `${92 - (i % 5) * 12}%` }} />)}</div>
                  <p className="mt-4 font-plex text-[11px] uppercase tracking-widest text-black/50">Before — 212 pages</p>
                </div>
                <div className="p-5" style={{ background: BLUE }}>
                  <div className="space-y-1.5">{Array(4).fill(0).map((_, i) => <div key={i} className="h-1.5 bg-white" style={{ width: `${95 - i * 18}%` }} />)}</div>
                  <p className="mt-4 font-plex text-[11px] uppercase tracking-widest text-white/80">After — 12 min</p>
                </div>
              </div>
              <div className="border-t border-black px-4 py-3 font-plex text-[11px]"><span className="font-bold">8</span> quotes · <span className="font-bold">5</span> hints · <span className="font-bold">3</span> insights · <span className="font-bold">0</span> filler</div>
            </div>
            <p className="mt-3 font-plex text-[11px] leading-relaxed text-black/45">Diagrammatic proof of compression. Ratio adjustable 5:1 – 50:1. Every retained sentence traceable to source page.</p>
          </motion.div>
        </section>

        <section id="spec-4" className="grid gap-0 border-b border-black py-14 lg:grid-cols-12">
          <div className="lg:col-span-4"><p className="font-plex text-xs uppercase tracking-[0.3em]" style={{ color: BLUE }}>( 002 — Method )</p>
            <h2 className="mt-3 text-4xl font-extrabold tracking-tight">Protocol,<br />not magic.</h2></div>
          <div className="lg:col-span-8">
            {[
              ["01", "Ingest", "Upload a PDF of up to 1,000 pages. Scanned documents receive OCR; tables, figures and references are parsed structurally. Encryption in transit and at rest."],
              ["02", "Distill", "Select a compression ratio. The system isolates thesis, supporting evidence and counter-evidence, then renders a summary at the specified length."],
              ["03", "Annotate", "Receive hints decoding terminology, quotations with page anchors, and insight structures mapping relations across chapters."],
            ].map(([n, h, p]) => (
              <motion.div key={n} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="grid grid-cols-12 gap-4 border-t border-black py-7 first:border-t-0">
                <span className="col-span-2 font-plex text-sm text-black/40">{n}</span>
                <h3 className="col-span-4 text-2xl font-bold tracking-tight">{h}</h3>
                <p className="col-span-6 text-[15px] leading-relaxed text-black/60">{p}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="border-b border-black py-14">
          <p className="font-plex text-xs uppercase tracking-[0.3em]" style={{ color: BLUE }}>( 003 — Output schema )</p>
          <div className="mt-6 grid gap-px bg-black sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["S — Summary", "Chapter-wise compression to five propositions each. Total length set by ratio dial."],
              ["Q — Quotations", "Load-bearing sentences, page-anchored. Exportable to APA / MLA / Chicago."],
              ["H — Hints", "Terminology glosses and method caveats, calibrated to reader level."],
              ["I — Insights", "Cross-chapter relations: supports, contradicts, implies. Rendered as cards."],
            ].map(([h, p]) => (
              <div key={h} className="bg-white p-7 transition-colors hover:bg-black hover:text-white">
                <h3 className="text-lg font-extrabold tracking-tight">{h}</h3>
                <p className="mt-3 text-sm leading-relaxed opacity-60">{p}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="grid gap-10 border-b border-black py-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="font-plex text-xs uppercase tracking-[0.3em]" style={{ color: BLUE }}>( 004 — Evidence )</p>
            <blockquote className="mt-4 text-3xl font-bold leading-tight tracking-tight">“The brief held up under partner review. Every number traced to a page.”</blockquote>
            <p className="mt-4 font-plex text-xs uppercase tracking-[0.2em] text-black/50">D. Okafor — diligence lead, n=400 pp. verified</p>
          </div>
          <div className="lg:col-span-7">
            <Accordion i="01" q="How is accuracy ensured?" a="Every retained claim carries a page anchor. Jump to source context in one click; exports include anchors so reviewers can audit the brief against the original." />
            <Accordion i="02" q="What documents are supported?" a="Any PDF up to 1,000 pages: reports, papers, contracts, books, scanned archives (OCR included). Tables and figures are parsed, not skipped." />
            <Accordion i="03" q="Is my data used for training?" a="No. Files are encrypted, processed in-region, auto-purged after 30 days, and never used for model training. SOC 2 Type II, SSO and audit logs on team plans." />
            <div className="border-b border-black" />
          </div>
        </section>

        <section id="pricing-4" className="border-b border-black py-14">
          <div className="flex items-end justify-between">
            <h2 className="text-4xl font-extrabold tracking-tight">Tariff<span style={{ color: BLUE }}>.</span></h2>
            <p className="font-plex text-xs uppercase tracking-[0.2em] text-black/50">Per month, cancellable</p>
          </div>
          <div className="mt-8 grid gap-px bg-black md:grid-cols-3">
            {[
              { n: "I — Basic", p: "0", f: ["3 documents / mo", "Standard summary", "Quotes + anchors"] },
              { n: "II — Professional", p: "12", f: ["Unlimited documents", "Hints + insight schema", "Audio + citation export"] },
              { n: "III — Institutional", p: "39", f: ["5 seats", "API + bulk ingest", "SSO, audit, region pin"] },
            ].map((t, i) => (
              <div key={t.n} className={`p-8 ${i === 1 ? "text-white" : "bg-white"}`} style={i === 1 ? { background: BLUE } : undefined}>
                <p className="font-plex text-xs uppercase tracking-[0.25em] opacity-70">{t.n}</p>
                <p className="mt-3 text-6xl font-extrabold tracking-tight">${t.p}</p>
                <ul className="mt-6 space-y-2.5 text-sm">{t.f.map((x) => <li key={x} className="flex items-center gap-2"><Check className="size-4" />{x}</li>)}</ul>
                <button className={`mt-7 w-full py-3.5 text-xs font-bold uppercase tracking-[0.2em] ${i === 1 ? "bg-white text-black" : "bg-black text-white"}`}>Select {t.n}</button>
              </div>
            ))}
          </div>
        </section>

        <footer className="flex items-center justify-between py-8">
          <p className="text-lg font-extrabold tracking-tight">Ratio Reader<span style={{ color: BLUE }}>.</span></p>
          <p className="hidden font-plex text-[11px] uppercase tracking-[0.2em] text-black/45 sm:block">Helvetica-grade clarity · Grid 12 col · © 2026</p>
          <Link to="/" className="flex items-center gap-1 text-xs font-bold uppercase tracking-[0.2em] hover:opacity-60">Index <ArrowUpRight className="size-4" /></Link>
        </footer>
      </main>
    </div>
  );
}
