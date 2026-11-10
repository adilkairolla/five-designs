import { Link } from "react-router-dom";

const DESIGNS = [
  {
    path: "/1",
    name: "Square brackets",
    idea: "A 502-page book cut to one paragraph of its own words, with every cut counted and open to inspection.",
  },
  {
    path: "/2",
    name: "Dust jacket",
    idea: "The jacket Ratio Reader would write for the book, laid flat: flap, back cover, spine and a bookmark.",
  },
  {
    path: "/3",
    name: "Still reading",
    idea: "A clock reads the book at your pace beside the finished summary, so you watch the ratio happen.",
  },
  {
    path: "/4",
    name: "Keyword axis",
    idea: "Every line slides until its key word sits on one green axis. Read down for the gist, across for the sentence.",
  },
  {
    path: "/5",
    name: "First reader",
    idea: "The product explained the way a first schoolbook would: short lessons, new words, a question at the end.",
  },
];

export function DesignIndex() {
  return (
    <main className="mx-auto min-h-dvh max-w-2xl px-6 py-16 font-sans text-neutral-950 sm:py-24">
      <title>Ratio Reader: five landing pages</title>
      <h1 className="text-3xl font-semibold tracking-tight">Ratio Reader</h1>
      <p className="mt-3 text-lg text-neutral-600">
        Five landing pages for one product. Each uses the same sample: what Ratio Reader returns for
        Darwin’s On the Origin of Species.
      </p>
      <ol className="mt-12 divide-y divide-neutral-200 border-y border-neutral-200">
        {DESIGNS.map((design) => (
          <li key={design.path}>
            <Link
              to={design.path}
              className="group grid grid-cols-[3rem_1fr] gap-x-4 py-5 outline-offset-4 focus-visible:outline-2 focus-visible:outline-neutral-950"
            >
              <span className="text-lg text-neutral-500 tabular-nums">{design.path}</span>
              <span>
                <span className="text-lg font-medium underline-offset-4 group-hover:underline">
                  {design.name}
                </span>
                <span className="mt-1 block text-neutral-600">{design.idea}</span>
              </span>
            </Link>
          </li>
        ))}
      </ol>
    </main>
  );
}
