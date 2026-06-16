import { Link } from "react-router-dom";

const designs = [
  { n: "01", slug: "1", name: "The Broadsheet", tone: "Editorial · Newspaper" },
  { n: "02", slug: "2", name: "Swiss Concrete", tone: "Brutalist · Grid" },
  { n: "03", slug: "3", name: "Margin Notes", tone: "Organic · Paper-fold" },
  { n: "04", slug: "4", name: "Terminal 1985", tone: "Retro · CRT" },
  { n: "05", slug: "5", name: "Gilded Page", tone: "Art Deco · Luxury" },
];

export function Landing() {
  return (
    <div className="min-h-screen bg-[#0d0b08] text-[#e9e2d2] flex flex-col items-center justify-center p-8 md:p-16 font-serif">
      <p className="uppercase tracking-[0.5em] text-[10px] text-[#8a7d63] mb-8">
        Ratio Reader
      </p>
      <h1
        className="text-4xl md:text-6xl text-center leading-[0.95] mb-4"
        style={{ fontFamily: "'Fraunces', serif", fontWeight: 300 }}
      >
        Five ways to tell
        <br />
        <em className="italic font-light text-[#c9a24b]">
          the same story.
        </em>
      </h1>
      <p className="max-w-md text-center text-[#8a7d63] text-sm md:text-base mb-14">
        A reading tool that distills dense PDFs into summaries, hints & quotes.
        Below are five distinct directions for its landing page.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#2a241a] border border-[#2a241a] w-full max-w-4xl">
        {designs.map((d) => (
          <Link
            key={d.slug}
            to={`/${d.slug}`}
            className="group bg-[#0d0b08] hover:bg-[#161208] transition-colors p-8 md:p-10 flex flex-col gap-6"
          >
            <div className="flex items-baseline justify-between">
              <span
                className="text-5xl md:text-6xl text-[#3a342a] group-hover:text-[#c9a24b] transition-colors"
                style={{ fontFamily: "'Fraunces', serif", fontWeight: 900 }}
              >
                {d.n}
              </span>
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#6a5e48]">
                {d.tone}
              </span>
            </div>
            <span
              className="text-2xl md:text-3xl italic text-[#e9e2d2]"
              style={{ fontFamily: "'Fraunces', serif", fontWeight: 400 }}
            >
              {d.name}
            </span>
            <span className="text-[#c9a24b] text-xs uppercase tracking-[0.25em] opacity-0 group-hover:opacity-100 transition-opacity">
              View design →
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
