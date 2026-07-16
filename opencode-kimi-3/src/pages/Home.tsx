import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

const designs = [
  {
    to: "/1",
    n: "01",
    name: "The Broadsheet",
    desc: "Editorial · cream paper · Fraunces & Newsreader · drop caps and column rules",
  },
  {
    to: "/2",
    n: "02",
    name: "RATIO://OS",
    desc: "Terminal · phosphor green · scanlines · a live typed ingestion session",
  },
  {
    to: "/3",
    n: "03",
    name: "Skim Smart",
    desc: "Riso print · misregistered inks · halftone · stickers and torn paper",
  },
  {
    to: "/4",
    n: "04",
    name: "RATIO—READER",
    desc: "Swiss grid · hairlines · tabular numerals · one electric blue",
  },
  {
    to: "/5",
    n: "05",
    name: "The Distillation",
    desc: "Aurora · deep space · glass panels · Instrument Serif italics",
  },
];

export function Home() {
  return (
    <div className="min-h-screen bg-[#0B0B0C] font-jetbrains text-[#D8D8D2]">
      <div className="grain grain-soft" />
      <div className="mx-auto max-w-3xl px-6 py-16 md:py-24">
        <p className="text-xs uppercase tracking-[0.35em] text-[#6F6F68]">
          Ratio Reader — design experiments
        </p>
        <h1 className="mt-4 text-3xl font-bold leading-tight md:text-5xl">
          Five landing pages.
          <br />
          <span className="text-[#6F6F68]">One idea: read less, know more.</span>
        </h1>
        <p className="mt-6 max-w-md text-sm leading-relaxed text-[#8B8B83]">
          Each route below is a complete, self-contained art direction for the
          same product. Click through and compare.
        </p>

        <div className="mt-14 divide-y divide-[#232324] border-y border-[#232324]">
          {designs.map((d) => (
            <Link
              key={d.to}
              to={d.to}
              className="group flex items-baseline gap-6 py-6 transition-colors hover:bg-[#141415] md:gap-10"
            >
              <span className="text-sm text-[#555550]">{d.n}</span>
              <span className="flex-1">
                <span className="block text-xl font-bold tracking-tight text-[#F0F0EA] md:text-2xl">
                  {d.name}
                </span>
                <span className="mt-1 block text-xs leading-relaxed text-[#77776F] md:text-sm">
                  {d.desc}
                </span>
              </span>
              <ArrowUpRight
                className="h-5 w-5 shrink-0 self-center text-[#555550] transition-all group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-[#F0F0EA]"
                strokeWidth={1.5}
              />
            </Link>
          ))}
        </div>

        <p className="mt-10 text-[11px] uppercase tracking-[0.25em] text-[#4A4A44]">
          routes: /1 /2 /3 /4 /5
        </p>
      </div>
    </div>
  );
}
