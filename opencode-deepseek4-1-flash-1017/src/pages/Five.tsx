import { type ReactNode } from "react";
import { Link } from "react-router-dom";
import { ArrowDown, ArrowUpRight, FileText, ShieldCheck } from "lucide-react";

const kit = [
  {
    code: "01",
    name: "Summary",
    issued: "Every mission",
    body: "The whole document in one page. Main claim, evidence, consequence. No new claims smuggled in.",
    note: "The gist is not a guess.",
  },
  {
    code: "02",
    name: "Hints",
    issued: "Every mission",
    body: "Margin notes at the hard parts: definitions, assumptions, and the sentence that carries more weight than it looks.",
    note: "Help before you need it.",
  },
  {
    code: "03",
    name: "Quotes",
    issued: "Every mission",
    body: "Verbatim lines that hold the claim up, with page and paragraph. Take them into the meeting and cite them.",
    note: "The proof travels with the point.",
  },
  {
    code: "04",
    name: "Insights",
    issued: "Every mission",
    body: "What the document assumes, where it contradicts itself, and what to read next. Field intelligence, not vibes.",
    note: "Know the terrain around the text.",
  },
];

const procedure = [
  {
    n: "I",
    title: "Secure the document",
    body: "Drop in the PDF. Reports, papers, contracts, appendices, the lot. Up to 500 pages. It reads all of it, including the parts you would skip.",
  },
  {
    n: "II",
    title: "Set the reading depth",
    body: "Skim for the gist, study for the detail, or teach it back. The document is read once; the output can take any of the three shapes.",
  },
  {
    n: "III",
    title: "Extract the signal",
    body: "Receive one summary and three supporting layers. Every line is traceable. The scaffolding is discarded, not hidden.",
  },
  {
    n: "IV",
    title: "File the evidence",
    body: "Save quotes with citations, send the summary, or export the whole kit. The source stays attached for as long as you keep the document.",
  },
];

const logs = [
  {
    id: "LOG 041",
    time: "02:14",
    body: "Used it on a 98-page vendor contract. Found the auto-renewal clause in the summary before I found my coffee.",
    who: "Procurement, 60-person company",
    status: "VERIFIED USE",
  },
  {
    id: "LOG 042",
    time: "11:47",
    body: "I read the hints before the paper. For once I understood the method section on the first pass.",
    who: "PhD candidate, epidemiology",
    status: "VERIFIED USE",
  },
  {
    id: "LOG 043",
    time: "23:06",
    body: "The quote layer is the whole thing. Every claim I repeat still has its page number attached.",
    who: "Policy analyst",
    status: "VERIFIED USE",
  },
];

function Stamp({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <span className={`inline-block border-2 border-current px-2 py-1 font-staatliches text-sm uppercase tracking-[0.1em] ${className}`}>
      {children}
    </span>
  );
}

function KitVisual() {
  return (
    <div className="relative mx-auto w-full max-w-[440px]">
      <div className="absolute -left-2 -top-8 hidden font-staatliches text-[9rem] leading-none text-[#ede6d6]/[0.05] sm:block" aria-hidden="true">
        05
      </div>
      <div className="relative rotate-[1.5deg]">
        <div className="border-2 border-[#ede6d6]/40 bg-[#d8cfb9] p-2 shadow-[14px_14px_0_rgba(0,0,0,0.28)]">
          <div className="relative border border-[#242919]/40 bg-[#ede6d6] px-5 pb-6 pt-10 text-[#242919] sm:px-6">
            <div className="absolute -top-3 left-1/2 flex -translate-x-1/2 items-center gap-1 border-2 border-[#242919] bg-[#8d866d] px-6 py-1">
              <span className="size-1.5 rounded-full bg-[#242919]/60" />
              <span className="h-2 w-16 bg-[#242919]/20" />
              <span className="size-1.5 rounded-full bg-[#242919]/60" />
            </div>

            <div className="flex items-start justify-between gap-3 border-b-2 border-[#242919] pb-2">
              <div>
                <p className="font-space text-[8px] font-bold uppercase tracking-[0.16em]">Incident file / 041</p>
                <p className="mt-1 font-staatliches text-2xl uppercase leading-none">Quarterly strategy review</p>
              </div>
              <span className="shrink-0 border-2 border-[#242919] bg-[#ff5c1a] px-2 py-1 font-space text-[7px] font-bold uppercase tracking-[0.1em] text-[#1c2013]">
                64 pp
              </span>
            </div>

            <div className="relative mt-5">
              <div className="absolute -right-2 top-2 z-10 rotate-[-9deg] border-[3px] border-[#c8452f] px-3 py-1.5 text-[#c8452f]">
                <p className="font-staatliches text-xl uppercase leading-none tracking-[0.12em]">Too long</p>
                <p className="font-space text-[6px] font-bold uppercase tracking-[0.2em]">Read status: unknown</p>
              </div>
              <div className="space-y-1.5" aria-hidden="true">
                <div className="h-2 w-11/12 bg-[#242919]/25" />
                <div className="h-2 w-full bg-[#242919]/25" />
                <div className="h-2 w-10/12 bg-[#242919]/25" />
              </div>
              <div className="mt-3 bg-[#ff5c1a]/35 px-1.5 py-1.5">
                <div className="h-2 w-full bg-[#242919]/45" />
                <div className="mt-1 h-2 w-2/3 bg-[#242919]/45" />
              </div>
              <div className="mt-3 space-y-1.5" aria-hidden="true">
                <div className="h-2 w-full bg-[#242919]/20" />
                <div className="h-2 w-9/12 bg-[#242919]/20" />
                <div className="h-2 w-11/12 bg-[#242919]/20" />
              </div>
              <div className="mt-5 border-t-2 border-dashed border-[#242919]/35 pt-3">
                <p className="font-space text-[7px] font-bold uppercase tracking-[0.16em]">Recovered from source</p>
                <div className="mt-2 grid grid-cols-2 gap-1.5">
                  {["SUMMARY / 1 PP", "HINTS / 6", "QUOTES / 4", "INSIGHTS / 2"].map((item) => (
                    <span key={item} className="border border-[#242919]/40 px-1.5 py-1 font-space text-[7px] font-bold uppercase tracking-[0.06em]">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-5 flex items-center justify-between border-t border-[#242919]/25 pt-2 font-space text-[6.5px] font-bold uppercase tracking-[0.12em] text-[#242919]/55">
              <span>Ratio 64:4</span>
              <span>Source retained · page-linked</span>
            </div>
          </div>
        </div>

        <div className="absolute -bottom-10 -left-6 w-48 rotate-[-5deg] border-2 border-[#242919] bg-[#ff5c1a] p-3 text-[#1c2013] shadow-[5px_5px_0_rgba(0,0,0,0.3)] sm:-left-10 sm:w-52">
          <p className="font-staatliches text-base uppercase leading-none">Field card</p>
          <ol className="mt-2 space-y-1 font-space text-[7.5px] font-bold uppercase leading-relaxed tracking-[0.04em]">
            <li>1. Read the whole thing.</li>
            <li>2. Keep the proof.</li>
            <li>3. Discard the filler.</li>
          </ol>
        </div>

      </div>
    </div>
  );
}

export function Five() {
  return (
    <div className="grain grain-dark min-h-screen overflow-x-clip bg-[#242919] font-space text-[#ede6d6]">
      <div className="warning-stripes h-2" aria-hidden="true" />
      <div className="border-b border-[#ede6d6]/15 bg-[#1c2013]">
        <div className="mx-auto flex max-w-[1240px] items-center justify-between gap-4 px-4 py-2 sm:px-8">
          <p className="font-space text-[7.5px] font-bold uppercase tracking-[0.16em] text-[#ede6d6]/65">
            Field note — information overload is not a personal failure
          </p>
          <p className="hidden font-space text-[7.5px] font-bold uppercase tracking-[0.16em] text-[#ff5c1a] sm:block">
            FM 24-7 / Edition 05
          </p>
        </div>
      </div>

      <header className="border-b border-[#ede6d6]/20">
        <div className="mx-auto flex max-w-[1240px] flex-wrap items-center justify-between gap-4 px-4 py-4 sm:px-8">
          <Link to="/" className="flex items-center gap-3">
            <span className="flex size-10 items-center justify-center border-2 border-[#ede6d6] bg-[#ff5c1a]">
              <FileText className="size-5 text-[#1c2013]" strokeWidth={2.2} />
            </span>
            <div>
              <p className="font-staatliches text-xl uppercase leading-none tracking-[0.06em]">Ratio Reader</p>
              <p className="mt-1 font-space text-[7px] font-bold uppercase tracking-[0.16em] text-[#ede6d6]/50">
                Document reduction field manual
              </p>
            </div>
          </Link>
          <nav className="hidden items-center gap-6 font-space text-[8px] font-bold uppercase tracking-[0.14em] text-[#ede6d6]/65 lg:flex">
            <a href="#kit" className="hover:text-[#ff5c1a]">Kit contents</a>
            <a href="#procedure" className="hover:text-[#ff5c1a]">Procedure</a>
            <a href="#records" className="hover:text-[#ff5c1a]">Field records</a>
            <a href="#issues" className="hover:text-[#ff5c1a]">FAQ</a>
          </nav>
          <div className="flex items-center gap-3">
            <Link to="/1" className="hidden font-space text-[8px] font-bold uppercase tracking-[0.12em] text-[#ede6d6]/45 hover:text-[#ff5c1a] md:block">
              Back to 01
            </Link>
            <a
              href="#requisition"
              className="flex items-center gap-2 border-2 border-[#ff5c1a] bg-[#ff5c1a] px-4 py-2 font-staatliches text-sm uppercase tracking-[0.1em] text-[#1c2013] transition-colors hover:bg-transparent hover:text-[#ff5c1a]"
            >
              Deploy a PDF
              <ArrowUpRight className="size-3.5" />
            </a>
          </div>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden border-b border-[#ede6d6]/20">
          <div className="field-grid absolute inset-0 opacity-60" aria-hidden="true" />
          <div className="relative mx-auto grid max-w-[1240px] gap-16 px-4 pb-24 pt-12 sm:px-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-center lg:gap-8 lg:pb-28 lg:pt-16">
            <div className="anim-rise">
              <div className="flex flex-wrap items-center gap-3 font-space text-[8px] font-bold uppercase tracking-[0.16em] text-[#ede6d6]/55">
                <span className="bg-[#ff5c1a] px-2 py-1 text-[#1c2013]">FM 24-7</span>
                <span>Issued to anyone with too much to read</span>
              </div>
              <h1 className="mt-6 font-staatliches text-[clamp(3.8rem,9.2vw,8rem)] uppercase leading-[0.8] tracking-[0.005em]">
                Information
                <br />
                <span className="relative isolate inline-block">
                  <span className="absolute inset-x-[-0.06em] bottom-[0.05em] -z-10 h-[0.62em] -rotate-[0.6deg] bg-[#ff5c1a]" aria-hidden="true" />
                  Survival
                </span>
                <br />
                Manual
              </h1>
              <p className="mt-8 max-w-[48ch] font-space text-sm leading-[1.85] text-[#ede6d6]/78">
                You are not behind. You are outnumbered. Ratio Reader reads any PDF end to end and
                returns the field kit: a one-page summary, margin hints, citable quotes and the
                insights that change how you use it.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-5">
                <a
                  href="#requisition"
                  className="group flex items-center gap-3 border-2 border-[#ede6d6] bg-[#ede6d6] px-6 py-3.5 font-staatliches text-base uppercase tracking-[0.1em] text-[#1c2013] transition-colors hover:border-[#ff5c1a] hover:bg-[#ff5c1a]"
                >
                  Deploy a PDF
                  <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
                <a href="#procedure" className="flex items-center gap-2 font-space text-[8.5px] font-bold uppercase tracking-[0.14em] text-[#ede6d6]/60 underline decoration-[#ede6d6]/25 underline-offset-4 hover:text-[#ff5c1a]">
                  Read the procedure
                  <ArrowDown className="size-3.5" />
                </a>
              </div>
              <div className="mt-10 grid max-w-lg grid-cols-3 border-y border-[#ede6d6]/20">
                {[
                  ["01", "PDF in"],
                  ["04", "Layers out"],
                  ["00", "Guesses"],
                ].map(([num, label], i) => (
                  <div key={label} className={`py-3 ${i > 0 ? "border-l border-[#ede6d6]/20 pl-4" : ""}`}>
                    <p className="font-staatliches text-2xl leading-none text-[#ff5c1a]">{num}</p>
                    <p className="mt-1 font-space text-[7.5px] font-bold uppercase tracking-[0.14em] text-[#ede6d6]/55">{label}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="anim-rise anim-delay-2 relative pb-8">
              <KitVisual />
            </div>
          </div>
        </section>

        <div className="warning-stripes h-2" aria-hidden="true" />
        <div className="overflow-hidden border-b border-[#ede6d6]/20 bg-[#ff5c1a] py-2 text-[#1c2013]">
          <div className="marquee">
            <div className="marquee-track items-center gap-8 font-staatliches text-lg uppercase tracking-[0.12em]">
              {[...Array(2)].map((_, half) => (
                <div key={half} className="flex items-center gap-8">
                  {["Read the whole thing", "Return the useful part", "Keep the evidence", "Discard the filler", "Repeat as needed"].map((w, i) => (
                    <span key={`${half}-${i}`} className="flex items-center gap-8 whitespace-nowrap">
                      {w}
                      <span className="size-2 rotate-45 bg-[#1c2013]" aria-hidden="true" />
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>

        <section id="kit" className="bg-[#ede6d6] text-[#1c2013]">
          <div className="mx-auto max-w-[1240px] px-4 py-14 sm:px-8 lg:py-20">
            <div className="flex flex-wrap items-end justify-between gap-5 border-b-2 border-[#1c2013] pb-4">
              <div>
                <p className="font-space text-[8px] font-bold uppercase tracking-[0.18em] text-[#1c2013]/55">Section 01 / Kit contents</p>
                <h2 className="mt-2 font-staatliches text-[clamp(2.4rem,5vw,4.2rem)] uppercase leading-none tracking-[0.01em]">
                  Standard issue. No upsell.
                </h2>
              </div>
              <p className="max-w-xs font-space text-[11.5px] leading-relaxed text-[#1c2013]/65">
                Every document returns all four layers. You choose which ones to open. The source
                stays attached to all of them.
              </p>
            </div>
            <div className="mt-6 overflow-x-auto">
              <table className="w-full min-w-[640px] border-collapse text-left">
                <thead>
                  <tr className="border-b border-[#1c2013]/30 font-space text-[7.5px] font-bold uppercase tracking-[0.16em] text-[#1c2013]/50">
                    <th className="py-2 pr-4 font-bold">Code</th>
                    <th className="py-2 pr-4 font-bold">Item</th>
                    <th className="py-2 pr-4 font-bold">Description</th>
                    <th className="py-2 pr-4 font-bold">Issued</th>
                    <th className="py-2 text-right font-bold">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {kit.map((item) => (
                    <tr key={item.code} className="group border-b border-[#1c2013]/15 transition-colors hover:bg-[#1c2013]/[0.035]">
                      <td className="py-5 pr-4 align-top font-staatliches text-2xl text-[#1c2013]/40">{item.code}</td>
                      <td className="py-5 pr-6 align-top">
                        <p className="font-staatliches text-2xl uppercase leading-none">{item.name}</p>
                        <p className="mt-1.5 font-space text-[8px] font-bold uppercase tracking-[0.1em] text-[#ff5c1a]">{item.note}</p>
                      </td>
                      <td className="max-w-md py-5 pr-6 align-top font-space text-[12px] leading-[1.8] text-[#1c2013]/70">{item.body}</td>
                      <td className="py-5 pr-4 align-top font-space text-[8px] font-bold uppercase tracking-[0.1em] text-[#1c2013]/55">{item.issued}</td>
                      <td className="py-5 text-right align-top">
                        <span className="inline-block border border-[#1c2013]/40 px-2 py-1 font-space text-[7px] font-bold uppercase tracking-[0.12em]">In kit</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-[#1c2013]/15 pt-4">
              <p className="font-space text-[8px] font-bold uppercase tracking-[0.12em] text-[#1c2013]/45">
                Total weight: 1 PDF · Total time: ~30 seconds · Total filler: 0
              </p>
              <Stamp className="rotate-[-1deg] text-[#c8452f]">Inspected</Stamp>
            </div>
          </div>
        </section>

        <section id="procedure" className="border-y border-[#ede6d6]/20 bg-[#1c2013]">
          <div className="mx-auto grid max-w-[1240px] gap-12 px-4 py-14 sm:px-8 lg:grid-cols-[0.75fr_1.25fr] lg:py-20">
            <div>
              <p className="font-space text-[8px] font-bold uppercase tracking-[0.18em] text-[#ff5c1a]">Section 02 / Procedure</p>
              <h2 className="mt-3 font-staatliches text-[clamp(2.4rem,4.6vw,4rem)] uppercase leading-[0.88]">
                Four steps.
                <br />
                No dashboard.
              </h2>
              <p className="mt-5 max-w-xs font-space text-[11.5px] leading-[1.9] text-[#ede6d6]/60">
                The procedure is short on purpose. If you wanted to learn software, you would be
                learning software.
              </p>
              <div className="mt-8 border border-[#ede6d6]/20 p-4">
                <p className="flex items-center gap-2 font-space text-[7.5px] font-bold uppercase tracking-[0.14em] text-[#ff5c1a]">
                  <ShieldCheck className="size-3.5" /> Safety note
                </p>
                <p className="mt-2 font-space text-[10px] leading-[1.8] text-[#ede6d6]/55">
                  The full text is never discarded by the system. Only by your reading list. Every
                  output line keeps a route back to its page.
                </p>
              </div>
            </div>
            <ol className="border-t border-[#ede6d6]/20">
              {procedure.map((step) => (
                <li key={step.n} className="group relative grid gap-3 border-b border-[#ede6d6]/20 py-6 sm:grid-cols-[64px_1fr] sm:gap-6">
                  <span className="font-staatliches text-4xl leading-none text-[#ff5c1a]">{step.n}</span>
                  <div>
                    <h3 className="font-staatliches text-2xl uppercase leading-none tracking-[0.02em]">{step.title}</h3>
                    <p className="mt-2 max-w-xl font-space text-[12px] leading-[1.85] text-[#ede6d6]/62">{step.body}</p>
                  </div>
                  <span className="absolute bottom-0 left-0 h-px w-0 bg-[#ff5c1a] transition-all duration-500 group-hover:w-full" aria-hidden="true" />
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="bg-[#ede6d6] text-[#1c2013]">
          <div className="mx-auto max-w-[1240px] px-4 py-14 sm:px-8 lg:py-20">
            <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
              <div>
                <p className="font-space text-[8px] font-bold uppercase tracking-[0.18em] text-[#1c2013]/55">Section 03 / Equipment specs</p>
                <h2 className="mt-3 font-staatliches text-[clamp(2.4rem,4.6vw,4rem)] uppercase leading-[0.88]">
                  Tested under
                  <br />
                  real deadlines.
                </h2>
                <div className="mt-6 grid grid-cols-2 gap-px border border-[#1c2013]/25 bg-[#1c2013]/25">
                  {[
                    ["500", "Page maximum"],
                    ["~30s", "Median turnaround"],
                    ["16", "Languages supported"],
                    ["0", "Files used for training"],
                  ].map(([n, l]) => (
                    <div key={l} className="bg-[#ede6d6] p-4">
                      <p className="font-staatliches text-3xl leading-none">{n}</p>
                      <p className="mt-1.5 font-space text-[7.5px] font-bold uppercase leading-relaxed tracking-[0.1em] text-[#1c2013]/55">{l}</p>
                    </div>
                  ))}
                </div>
                <p className="mt-3 font-space text-[7px] font-bold uppercase leading-relaxed tracking-[0.1em] text-[#1c2013]/35">
                  Figures are typical performance, not a promise. The 30 seconds excludes making tea.
                </p>
              </div>

              <div id="records">
                <div className="flex flex-wrap items-end justify-between gap-3">
                  <div>
                    <p className="font-space text-[8px] font-bold uppercase tracking-[0.18em] text-[#1c2013]/55">Section 04 / Field records</p>
                    <h2 className="mt-2 font-staatliches text-3xl uppercase leading-none">Unedited after-action reports</h2>
                  </div>
                  <span className="font-space text-[7px] font-bold uppercase tracking-[0.12em] text-[#1c2013]/40">3 of 248 logged</span>
                </div>
                <div className="mt-4 border-t-2 border-[#1c2013]">
                  {logs.map((log) => (
                    <figure key={log.id} className="grid gap-3 border-b border-[#1c2013]/20 py-5 sm:grid-cols-[80px_1fr] sm:gap-5">
                      <div className="font-space text-[7.5px] font-bold uppercase leading-relaxed tracking-[0.1em] text-[#1c2013]/50">
                        <p className="text-[#ff5c1a]">{log.id}</p>
                        <p>{log.time}</p>
                      </div>
                      <div>
                        <blockquote className="font-space text-[13px] leading-[1.8] text-[#1c2013]/80">
                          &ldquo;{log.body}&rdquo;
                        </blockquote>
                        <figcaption className="mt-2 flex flex-wrap items-center gap-3 font-space text-[7px] font-bold uppercase tracking-[0.12em] text-[#1c2013]/45">
                          <span>{log.who}</span>
                          <span className="border border-[#1c2013]/30 px-1.5 py-0.5 text-[#1c2013]/60">{log.status}</span>
                        </figcaption>
                      </div>
                    </figure>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="issues" className="border-t border-[#ede6d6]/20 bg-[#242919]">
          <div className="mx-auto grid max-w-[1240px] gap-10 px-4 py-14 sm:px-8 lg:grid-cols-[0.7fr_1.3fr] lg:py-20">
            <div>
              <p className="font-space text-[8px] font-bold uppercase tracking-[0.18em] text-[#ff5c1a]">Section 05 / Troubleshooting</p>
              <h2 className="mt-3 font-staatliches text-[clamp(2.4rem,4.6vw,4rem)] uppercase leading-[0.88]">
                Questions from
                <br />
                the field.
              </h2>
              <p className="mt-5 max-w-xs font-space text-[11.5px] leading-[1.9] text-[#ede6d6]/55">
                If your question is not here, the answer is probably &ldquo;it reads the whole thing.&rdquo;
              </p>
            </div>
            <div className="border-t border-[#ede6d6]/20">
              {[
                {
                  q: "Does this replace reading?",
                  a: "No. It replaces the part where you read 60 pages to find four useful ones. You still do the thinking. That part is not for sale.",
                },
                {
                  q: "Can I check the summary against the source?",
                  a: "Every line links to its page and paragraph. Open the source beside the output. If it does not hold up, you have found something worth knowing about the tool.",
                },
                {
                  q: "Who can see my documents?",
                  a: "Only you. Files are not used for training, not shared, and deleted permanently when you delete them. Including their outputs.",
                },
                {
                  q: "What does it cost?",
                  a: "First three documents are free with no account. After that, $8 a month. Cancel in one click, take your files with you.",
                },
              ].map((item) => (
                <details key={item.q} className="group border-b border-[#ede6d6]/20">
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-4 py-4 font-staatliches text-xl uppercase leading-tight tracking-[0.02em] [&::-webkit-details-marker]:hidden">
                    {item.q}
                    <span className="mt-0.5 shrink-0 font-space text-sm text-[#ff5c1a] transition-transform group-open:rotate-45">+</span>
                  </summary>
                  <p className="max-w-2xl pb-5 font-space text-[12px] leading-[1.85] text-[#ede6d6]/60">{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section id="requisition" className="relative overflow-hidden border-t border-[#ede6d6]/20 bg-[#ff5c1a] text-[#1c2013]">
          <div className="pointer-events-none absolute inset-0 opacity-[0.08]" aria-hidden="true">
            <div className="absolute -bottom-16 -left-10 font-staatliches text-[18rem] leading-none">RR</div>
            <div className="absolute -right-6 top-0 font-staatliches text-[12rem] leading-none">05</div>
          </div>
          <div className="relative mx-auto grid max-w-[1240px] gap-10 px-4 py-14 sm:px-8 lg:grid-cols-[1fr_0.9fr] lg:items-center lg:py-20">
            <div>
              <p className="font-space text-[8px] font-bold uppercase tracking-[0.18em] text-[#1c2013]/60">Section 06 / Requisition</p>
              <h2 className="mt-3 max-w-2xl font-staatliches text-[clamp(2.8rem,6vw,5.2rem)] uppercase leading-[0.84]">
                Requisition your
                <br />
                field kit.
              </h2>
              <p className="mt-5 max-w-md font-space text-[11px] leading-[1.9] text-[#1c2013]/75">
                Three documents free. No account, no card, no onboarding sequence. Just the next
                thing on your list, returned in a shape you can use.
              </p>
              <div className="mt-6 flex flex-wrap gap-4 font-space text-[7.5px] font-bold uppercase tracking-[0.12em] text-[#1c2013]/60">
                <span>PDF in</span>
                <span>Summary out</span>
                <span>Source attached</span>
                <span>No training</span>
              </div>
            </div>

            <div className="border-2 border-[#1c2013] bg-[#ede6d6] p-5 shadow-[8px_8px_0_rgba(28,32,19,0.35)] sm:p-6">
              <div className="flex items-center justify-between border-b-2 border-[#1c2013] pb-2">
                <p className="font-staatliches text-lg uppercase">Requisition form 24-7</p>
                <span className="font-space text-[7px] font-bold uppercase tracking-[0.1em]">No. 000184</span>
              </div>
              <form className="mt-4" onSubmit={(e) => e.preventDefault()}>
                <label htmlFor="field-email" className="font-space text-[7.5px] font-bold uppercase tracking-[0.12em] text-[#1c2013]/60">
                  Email for the kit (optional)
                </label>
                <input
                  id="field-email"
                  type="email"
                  placeholder="reader@field.unit"
                  className="mt-1.5 w-full border-2 border-[#1c2013] bg-transparent px-3 py-2.5 font-space text-xs outline-none placeholder:text-[#1c2013]/30 focus:border-[#ff5c1a]"
                />
                <div className="mt-3 flex items-center justify-between gap-3 border border-[#1c2013]/30 px-3 py-2.5">
                  <span className="font-space text-[8px] font-bold uppercase tracking-[0.08em]">Attach PDF</span>
                  <span className="border border-[#1c2013] bg-[#ff5c1a] px-2.5 py-1 font-space text-[7px] font-bold uppercase tracking-[0.1em]">
                    Browse
                  </span>
                </div>
                <button
                  type="button"
                  className="mt-4 flex w-full items-center justify-center gap-2 bg-[#1c2013] px-5 py-3.5 font-staatliches text-base uppercase tracking-[0.1em] text-[#ede6d6] transition-colors hover:bg-[#c8452f]"
                >
                  Submit for reduction
                  <ArrowUpRight className="size-4" />
                </button>
                <p className="mt-2 text-center font-space text-[6.5px] font-bold uppercase leading-relaxed tracking-[0.1em] text-[#1c2013]/40">
                  Demo form. No document leaves your browser.
                </p>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t-2 border-[#ede6d6]/30 bg-[#1c2013]">
        <div className="mx-auto flex max-w-[1240px] flex-col gap-5 px-4 py-7 sm:px-8 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <span className="flex size-8 items-center justify-center border border-[#ede6d6] bg-[#ff5c1a]">
              <FileText className="size-4 text-[#1c2013]" strokeWidth={2.4} />
            </span>
            <div>
              <p className="font-staatliches text-base uppercase leading-none">Ratio Reader</p>
              <p className="mt-1 font-space text-[6.5px] font-bold uppercase tracking-[0.14em] text-[#ede6d6]/40">Field manual FM 24-7 · Est. 2026</p>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 font-space text-[7.5px] font-bold uppercase tracking-[0.12em] text-[#ede6d6]/55">
            <span className="text-[#ede6d6]/30">Five editions</span>
            {["1", "2", "3", "4", "5"].map((n) => (
              <Link key={n} to={`/${n}`} className={n === "5" ? "text-[#ff5c1a]" : "hover:text-[#ff5c1a]"}>
                {n.padStart(2, "0")}
              </Link>
            ))}
            <Link to="/" className="underline underline-offset-4 hover:text-[#ff5c1a]">Index</Link>
          </div>
          <p className="font-space text-[6.5px] font-bold uppercase tracking-[0.12em] text-[#ede6d6]/25">
            Unclassified · Marketing material · Do not burn
          </p>
        </div>
      </footer>
    </div>
  );
}
