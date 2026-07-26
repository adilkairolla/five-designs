import { Link } from "react-router-dom";

type Entry = {
  no: string;
  path: string;
  name: string;
  thesis: string;
  type: string;
  swatches: string[];
};

const ENTRIES: Entry[] = [
  {
    no: "01",
    path: "/1",
    name: "Proofsheet",
    thesis:
      "A manuscript under the blue pencil. Ratio's summary, hints and quotes live where a reader's own notes would — in the margins.",
    type: "Bodoni Moda · Newsreader · Courier Prime",
    swatches: ["#F4F4F0", "#14161A", "#1B3BC4", "#F0E24A"],
  },
  {
    no: "02",
    path: "/2",
    name: "Blueprint",
    thesis:
      "The structural drawing of an argument. Sheets, callouts, a title block, and a reading scale of 1:50.",
    type: "Saira Condensed · IBM Plex Sans · IBM Plex Mono",
    swatches: ["#0C2A4D", "#EAF1F7", "#7FA9D4", "#E0A43A"],
  },
  {
    no: "03",
    path: "/3",
    name: "Risograph",
    thesis:
      "A two-ink zine off a Riso drum. Overprint, grain, halftone, and a physical dial you crank from skim to gist.",
    type: "Bricolage Grotesque · Karla · Martian Mono",
    swatches: ["#E7E6DF", "#FF48A0", "#0F5FD8", "#141312"],
  },
  {
    no: "04",
    path: "/4",
    name: "Atlas",
    thesis:
      "A document as terrain. Contour lines for argument density, a legend for every insight type, a scale bar for the ratio.",
    type: "Marcellus · Jost",
    swatches: ["#E6EDE7", "#1D3A33", "#8A9A5B", "#C08552"],
  },
  {
    no: "05",
    path: "/5",
    name: "Nocturne",
    thesis:
      "An observatory for one paper. Concepts plotted as a star chart, brass instrument dials, chapters as logged observations.",
    type: "Cormorant Garamond · Spectral",
    swatches: ["#0B1026", "#F3EEE2", "#C9A24B", "#6C7BA8"],
  },
];

export function Contents() {
  return (
    <main className="min-h-screen bg-[#0E1013] px-6 py-16 font-plex text-[#D6D8DE] sm:px-10 lg:px-16">
      <div className="mx-auto max-w-5xl">
        <header className="border-b border-[#26292F] pb-10">
          <p className="font-plexmono text-[11px] tracking-[0.34em] text-[#7C8496] uppercase">
            Five directions · one product
          </p>
          <h1 className="mt-5 font-plex text-4xl font-light tracking-tight text-white sm:text-5xl">
            Ratio&nbsp;Reader
          </h1>
          <p className="mt-4 max-w-[62ch] text-[15px] leading-relaxed text-[#9AA1B0]">
            Upload a PDF and get the summary, the hints, the quotes and the
            insights that make it readable. Below are five complete landing
            pages for that product — each one built in a different visual
            language, sharing nothing but the facts.
          </p>
        </header>

        <ol className="mt-2">
          {ENTRIES.map((e) => (
            <li key={e.path}>
              <Link
                to={e.path}
                className="group grid grid-cols-1 gap-4 border-b border-[#1E2126] py-8 transition-colors hover:bg-[#14171C] focus-visible:bg-[#14171C] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7FA9D4] sm:grid-cols-[3.5rem_1fr_9rem] sm:items-baseline sm:gap-8"
              >
                <span className="font-plexmono text-xs tabular-nums text-[#6B7383] group-hover:text-[#E0A43A]">
                  {e.no}
                </span>
                <span>
                  <span className="block text-xl font-medium text-white">
                    {e.name}
                    <span className="ml-3 font-plexmono text-[11px] font-normal tracking-widest text-[#6B7383]">
                      {e.path}
                    </span>
                  </span>
                  <span className="mt-2 block max-w-[60ch] text-[14px] leading-relaxed text-[#98A0AF]">
                    {e.thesis}
                  </span>
                  <span className="mt-3 block font-plexmono text-[11px] tracking-wide text-[#666E7D]">
                    {e.type}
                  </span>
                </span>
                <span className="flex gap-1.5 sm:justify-end">
                  {e.swatches.map((s) => (
                    <span
                      key={s}
                      className="h-7 w-7 rounded-full ring-1 ring-white/10"
                      style={{ background: s }}
                    />
                  ))}
                </span>
              </Link>
            </li>
          ))}
        </ol>

        <p className="mt-10 font-plexmono text-[11px] tracking-wide text-[#5D6472]">
          Each page is self-contained: its own palette, type pairing, layout
          system and motion. Nothing is shared between them.
        </p>
      </div>
    </main>
  );
}
