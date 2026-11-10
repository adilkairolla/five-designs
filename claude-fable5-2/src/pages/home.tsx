import { Link } from "react-router-dom";

const DESIGNS = [
  { path: "/1", name: "Marginalia", note: "A page of Bacon on a green desk, marked up while you watch." },
  { path: "/2", name: "Proportion", note: "A live ratio. Drag the page count and the reading time shrinks." },
  { path: "/3", name: "Lamplight", note: "A dark page where your cursor is the lamp." },
  { path: "/4", name: "Receipt", note: "The whole pitch, printed as an itemized receipt." },
  { path: "/5", name: "Deck", note: "Everything that comes out of one PDF, as cards you can drag." },
];

export function Home() {
  return (
    <main className="mx-auto min-h-svh max-w-3xl px-6 py-20 font-sans text-black">
      <title>Ratio Reader: five landing pages</title>
      <h1 className="text-4xl font-semibold tracking-tight">Ratio Reader</h1>
      <p className="mt-3 text-lg text-black/70">Five landing page designs for the same product.</p>
      <ol className="mt-12 divide-y divide-black/15 border-y border-black/15">
        {DESIGNS.map((design) => (
          <li key={design.path}>
            <Link
              to={design.path}
              className="grid grid-cols-[3rem_1fr] items-baseline gap-x-4 py-5 hover:bg-black/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black sm:grid-cols-[3rem_10rem_1fr]"
            >
              <span className="text-black/50 tabular-nums">{design.path}</span>
              <span className="text-xl font-medium">{design.name}</span>
              <span className="col-start-2 text-black/70 sm:col-start-3">{design.note}</span>
            </Link>
          </li>
        ))}
      </ol>
    </main>
  );
}
