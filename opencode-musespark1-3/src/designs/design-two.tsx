import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowLeft, ChevronRight, Activity, Binary, Cpu, FileUp, Quote, Lightbulb, Network, Terminal, Zap, ShieldCheck, Check } from "lucide-react";

function useTypewriter(lines: string[]) {
  const [text, setText] = useState("");
  useEffect(() => {
    const full = lines.join("\n");
    let i = 0;
    const id = setInterval(() => {
      i += 3;
      setText(full.slice(0, i));
      if (i >= full.length) clearInterval(id);
    }, 24);
    return () => clearInterval(id);
  }, []);
  return text;
}

const LOG = ["$ ratio ingest thesis_q3.pdf --pages 212", "▸ parsing… tables ✓ figures ✓ refs ✓", "▸ signal/noise: 94.2% — compressing…", "✓ brief ready: 11 min read · 8 quotes · 5 hints"];

function Console() {
  const text = useTypewriter(LOG);
  return (
    <div className="relative overflow-hidden rounded-xl border border-[#C6FF4A]/25 bg-black/70 font-plex text-[13px] leading-relaxed shadow-[0_0_80px_-20px_#C6FF4A]">
      <div className="flex items-center gap-1.5 border-b border-white/10 px-4 py-2.5">
        <span className="size-2.5 rounded-full bg-[#FF5F56]" /><span className="size-2.5 rounded-full bg-[#FFBD2E]" /><span className="size-2.5 rounded-full bg-[#27C93F]" />
        <span className="ml-2 text-[11px] uppercase tracking-[0.25em] text-white/40">ratio — live ingest</span>
      </div>
      <div className="relative h-56 whitespace-pre-wrap p-5 text-[#C6FF4A]">
        {text}<span className="animate-blink">▊</span>
        <span className="animate-scanline pointer-events-none absolute left-0 h-10 w-full bg-gradient-to-b from-transparent via-[#C6FF4A]/10 to-transparent" />
      </div>
    </div>
  );
}

function UploadSim() {
  const [p, setP] = useState(0);
  const [done, setDone] = useState(false);
  useEffect(() => {
    if (p <= 0) return;
    if (p >= 100) { setDone(true); return; }
    const id = setTimeout(() => setP((v) => Math.min(100, v + 4)), 60);
    return () => clearTimeout(id);
  }, [p]);
  return (
    <div className="rounded-xl border border-white/10 bg-white/[0.03] p-6">
      <button
        onClick={() => { setP(1); setDone(false); }}
        className="w-full rounded-lg border border-dashed border-[#C6FF4A]/40 p-8 text-center transition-colors hover:border-[#C6FF4A] hover:bg-[#C6FF4A]/5"
      >
        <FileUp className="mx-auto size-7 text-[#C6FF4A]" />
        <p className="mt-2 font-grotesk font-bold">{done ? "brief_ready.pdf ✓ — run it again" : p > 0 ? `extracting signal… ${p}%` : "Drop PDF to run extraction"}</p>
        <p className="mt-1 font-plex text-xs text-white/40">click to simulate a 212-page ingest</p>
      </button>
      {p > 0 && (
        <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/10">
          <div className="h-full rounded-full bg-[#C6FF4A] transition-all" style={{ width: `${p}%` }} />
        </div>
      )}
      {done && (
        <div className="mt-4 grid grid-cols-3 gap-2 text-center font-plex text-xs">
          {[["11:42", "read time"], ["08", "quotes"], ["05", "hints"]].map(([v, l]) => (
            <div key={l} className="rounded-lg bg-[#C6FF4A]/10 p-3"><p className="text-lg font-bold text-[#C6FF4A]">{v}</p><p className="text-white/50">{l}</p></div>
          ))}
        </div>
      )}
    </div>
  );
}

export function DesignTwo() {
  const stats = [["212→12", "compression"], ["94.2%", "signal kept"], ["40k+", "operators"], ["4.9★", "rating"]];
  const feats = [
    { icon: Quote, t: "QUOTE_EXTRACT", p: "Key sentences pulled with page anchors. One click jumps to source context — trust, but verify at machine speed." },
    { icon: Lightbulb, t: "HINT_INJECT", p: "Margin hints decode jargon, flag weak methodology, and define terms inline at your level." },
    { icon: Network, t: "INSIGHT_GRAPH", p: "Cross-chapter links surface contradictions and hidden theses no linear skim would catch." },
    { icon: ShieldCheck, t: "ZERO_RETENTION", p: "AES-256 at rest, TLS in flight, EU/US regions. Files auto-purge. Never trained on." },
  ];
  return (
    <div className="min-h-screen bg-[#0B0D08] font-grotesk text-[#EAF5D6]">
      <div className="grid-dark fixed inset-0" />
      <div className="pointer-events-none fixed -top-40 left-1/2 h-96 w-[700px] -translate-x-1/2 rounded-full bg-[#C6FF4A]/15 blur-[120px]" />
      <div className="relative">
        <header className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5">
          <Link to="/" className="flex items-center gap-2 font-plex text-xs uppercase tracking-widest text-white/50 hover:text-[#C6FF4A]"><ArrowLeft className="size-4" /> Index</Link>
          <p className="flex items-center gap-2 font-plex text-sm font-bold tracking-widest"><Activity className="size-4 text-[#C6FF4A]" /> RATIO_READER <span className="rounded bg-[#C6FF4A] px-1.5 py-0.5 text-[10px] text-black">v2.6</span></p>
          <a href="#pricing-2" className="rounded-full bg-[#C6FF4A] px-5 py-2 text-xs font-bold uppercase tracking-widest text-black transition-transform hover:scale-105">Deploy</a>
        </header>

        <main className="mx-auto max-w-6xl px-5 pb-20">
          <div className="grid items-center gap-10 pt-8 lg:grid-cols-2">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <p className="inline-flex items-center gap-2 rounded-full border border-[#C6FF4A]/30 bg-[#C6FF4A]/5 px-4 py-1.5 font-plex text-xs text-[#C6FF4A]"><span className="size-1.5 animate-blink rounded-full bg-[#C6FF4A]" /> SYSTEM ONLINE — 1,204 briefs minted today</p>
              <h1 className="mt-5 text-5xl font-bold leading-[0.95] sm:text-7xl">FEED PDF.<br /><span className="text-[#C6FF4A]">GET SIGNAL.</span><br /><span className="text-white/30">SKIP NOISE.</span></h1>
              <p className="mt-5 max-w-md text-white/60">Ratio Reader strips dense documents to their highest-value information — summaries, cited quotes, margin hints and cross-chapter insights — in minutes, not weekends.</p>
              <div className="mt-7"><UploadSim /></div>
              <div className="mt-5 flex gap-6 font-plex text-xs text-white/40">
                <span className="flex items-center gap-1.5"><Terminal className="size-3.5" /> CLI + API</span>
                <span className="flex items-center gap-1.5"><Cpu className="size-3.5" /> 1,000-page ingest</span>
                <span className="flex items-center gap-1.5"><Binary className="size-3.5" /> OCR built-in</span>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.15 }}>
              <Console />
              <div className="mt-4 grid grid-cols-4 gap-2">
                {stats.map(([v, l]) => (
                  <div key={l} className="rounded-lg border border-white/10 bg-white/[0.03] p-3 text-center">
                    <p className="text-lg font-bold text-[#C6FF4A]">{v}</p>
                    <p className="font-plex text-[10px] uppercase tracking-widest text-white/40">{l}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <div className="mt-12 overflow-hidden rounded-lg border border-[#C6FF4A]/20 bg-[#C6FF4A]/5 py-2">
            <div className="animate-marquee-fast flex w-max gap-8 whitespace-nowrap font-plex text-xs uppercase tracking-[0.25em] text-[#C6FF4A]/80">
              {Array(2).fill(["summary cores", "quote extraction", "hint injection", "insight graphs", "citation export", "audio briefs", "zero retention"]).flat().map((t, i) => (
                <span key={i}>/// {t}</span>
              ))}
            </div>
          </div>

          <section className="mt-16">
            <p className="font-plex text-xs uppercase tracking-[0.3em] text-[#C6FF4A]">[ 01 — pipeline ]</p>
            <h2 className="mt-2 text-4xl font-bold sm:text-5xl">Three stages. Zero filler.</h2>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {[["INGEST", "Drop any PDF — scanned, exported, 1,000 pages. OCR + table parsing included."], ["DISTILL", "Pick your ratio. Thesis, evidence, exceptions — compressed to a skim or a study guide."], ["VERIFY", "Every claim pinned to a page. Quotes export to APA/MLA/Chicago in one click."]].map(([t, p], i) => (
                <motion.div key={t} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="group rounded-xl border border-white/10 bg-white/[0.03] p-6 transition-colors hover:border-[#C6FF4A]/50">
                  <p className="font-plex text-4xl font-bold text-white/10 transition-colors group-hover:text-[#C6FF4A]">0{i + 1}</p>
                  <h3 className="mt-3 flex items-center gap-2 font-bold tracking-wide">{t} <ChevronRight className="size-4 text-[#C6FF4A]" /></h3>
                  <p className="mt-2 text-sm text-white/55">{p}</p>
                </motion.div>
              ))}
            </div>
          </section>

          <section className="mt-16">
            <p className="font-plex text-xs uppercase tracking-[0.3em] text-[#C6FF4A]">[ 02 — modules ]</p>
            <h2 className="mt-2 text-4xl font-bold sm:text-5xl">Everything a skim leaves behind.</h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {feats.map((f, i) => (
                <motion.div key={f.t} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }} className="rounded-xl border border-white/10 bg-gradient-to-br from-white/[0.05] to-transparent p-7">
                  <f.icon className="size-6 text-[#C6FF4A]" />
                  <h3 className="mt-4 font-plex text-sm font-bold tracking-[0.2em]">{f.t}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/55">{f.p}</p>
                </motion.div>
              ))}
            </div>
          </section>

          <section className="mt-16 rounded-2xl border border-[#C6FF4A]/25 bg-[#C6FF4A]/[0.04] p-8 sm:p-12">
            <Zap className="size-7 text-[#C6FF4A]" />
            <blockquote className="mt-4 text-2xl font-medium leading-snug sm:text-3xl">“We fed it 400 pages of due-diligence docs on a Friday. By standup Monday, the whole team argued from the same two-page brief.”</blockquote>
            <p className="mt-4 font-plex text-xs uppercase tracking-[0.25em] text-white/40">— Priya S., ops lead · verified log #8841</p>
          </section>

          <section id="pricing-2" className="mt-16">
            <p className="font-plex text-xs uppercase tracking-[0.3em] text-[#C6FF4A]">[ 03 — access tiers ]</p>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {[
                { n: "FREE_TIER", p: "$0", f: ["3 docs / mo", "5-min summaries", "Quotes + pages"] },
                { n: "PRO_TIER", p: "$12", f: ["Unlimited docs", "Hints + insight graph", "Audio briefs", "Citation export"], hot: true },
                { n: "FLEET_TIER", p: "$39", f: ["5 seats", "API + bulk ingest", "SSO + audit log"] },
              ].map((t) => (
                <div key={t.n} className={`rounded-xl p-7 ${t.hot ? "border border-[#C6FF4A] bg-[#C6FF4A] text-black" : "border border-white/10 bg-white/[0.03]"}`}>
                  <p className="font-plex text-xs font-bold tracking-[0.25em]">{t.n}</p>
                  <p className="mt-2 text-5xl font-bold">{t.p}<span className="text-base font-normal opacity-60">/mo</span></p>
                  <ul className="mt-5 space-y-2 text-sm">{t.f.map((x) => <li key={x} className="flex items-center gap-2"><Check className="size-4" />{x}</li>)}</ul>
                  <button className={`mt-6 w-full rounded-lg py-3 text-xs font-bold uppercase tracking-widest ${t.hot ? "bg-black text-[#C6FF4A]" : "border border-white/20 hover:border-[#C6FF4A] hover:text-[#C6FF4A]"}`}>Initialize</button>
                </div>
              ))}
            </div>
          </section>

          <footer className="mt-16 flex items-center justify-between border-t border-white/10 py-6 font-plex text-xs text-white/35">
            <p>RATIO_READER © 2026 — all signals reserved</p>
            <Link to="/" className="hover:text-[#C6FF4A]">← back to index</Link>
          </footer>
        </main>
      </div>
    </div>
  );
}
