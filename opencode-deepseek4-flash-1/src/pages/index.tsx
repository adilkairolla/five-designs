import { Link } from "react-router-dom";
import { usePage } from "@/lib/page";

const designs = [
  {
    path: "/1",
    name: "Marginalia",
    note: "The page, annotated",
    blurb:
      "A reading page with red-pen margin notes and a highlighter. The product demo is the design.",
    swatches: ["#FBF7EE", "#221F19", "#C63A2F", "#F4C84A"],
  },
  {
    path: "/2",
    name: "The Ratio Press",
    note: "Risograph poster",
    blurb:
      "Loud print-shop energy, a signal-to-padding dial, stamps, a ticker, and a manifesto.",
    swatches: ["#F1ECE0", "#17130E", "#FF4F8B", "#147D8A"],
  },
  {
    path: "/3",
    name: "The Reading Room",
    note: "Green walls, brass lamp",
    blurb:
      "A private library at night. Formal, quiet, and lit by one warm lamp.",
    swatches: ["#0B241D", "#C8A951", "#E9DFC8", "#FFD98E"],
  },
  {
    path: "/4",
    name: "The Long Read, Short",
    note: "Magazine feature",
    blurb:
      "An editorial spread about attention, with drop caps, pull quotes, and a verdict box.",
    swatches: ["#3B1220", "#F4EAE1", "#E8B4AD", "#C09159"],
  },
  {
    path: "/5",
    name: "Spec Sheet RR-001",
    note: "Engineering blueprint",
    blurb:
      "A cyanotype drawing of the reading process: exploded layers, parts list, dimension lines.",
    swatches: ["#123A6B", "#DCE9FF", "#F0D264", "#0B2647"],
  },
];

export function Index() {
  usePage(
    "Ratio Reader — five design directions",
    "https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500&family=Inter:wght@400;500;600&display=swap",
  );

  return (
    <div
      className="min-h-dvh bg-[#F2F1ED] text-[#16150F] antialiased"
      style={{ fontFamily: "Inter, system-ui, sans-serif" }}
    >
      <style>{`
        .dir-link:hover .dir-arrow { transform: translateX(6px); }
        .dir-arrow { transition: transform .25s ease; }
        .dir-card { transition: transform .25s ease, box-shadow .25s ease; }
        .dir-card:hover { transform: translateY(-3px); box-shadow: 8px 8px 0 #16150F; }
        @media (prefers-reduced-motion: reduce) {
          .dir-card, .dir-arrow { transition: none; }
          .dir-card:hover { transform: none; }
        }
      `}</style>

      <div className="mx-auto max-w-5xl px-6 py-14 sm:py-20">
        <header className="flex flex-wrap items-end justify-between gap-6 border-b-2 border-[#16150F] pb-8">
          <div>
            <p
              className="text-[11px] tracking-widest uppercase"
              style={{ fontFamily: "'IBM Plex Mono', monospace" }}
            >
              Ratio Reader — marketing site
            </p>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
              Five directions, one product.
            </h1>
            <p className="mt-3 max-w-xl text-[15px] leading-7 text-[#55534A]">
              The same pitch — upload a PDF, get the important parts back with
              hints, quotes, and insights — drawn five different ways. Pick a
              direction.
            </p>
          </div>
          <p
            className="text-xs text-[#55534A]"
            style={{ fontFamily: "'IBM Plex Mono', monospace" }}
          >
            v1.0 / 2026
          </p>
        </header>

        <ul className="mt-10 grid gap-5 sm:grid-cols-2">
          {designs.map((d, i) => (
            <li key={d.path} className={i === 0 ? "sm:col-span-2" : ""}>
              <Link
                to={d.path}
                className={`dir-card dir-link flex h-full gap-5 border-2 border-[#16150F] bg-white p-6 ${
                  i === 0 ? "sm:items-center" : "flex-col"
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span
                      className="text-xs text-[#55534A]"
                      style={{ fontFamily: "'IBM Plex Mono', monospace" }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h2
                      className={`mt-1 font-semibold tracking-tight ${
                        i === 0 ? "text-3xl sm:text-4xl" : "text-2xl"
                      }`}
                    >
                      {d.name}
                    </h2>
                    <p
                      className="mt-1 text-[11px] tracking-widest uppercase text-[#55534A]"
                      style={{ fontFamily: "'IBM Plex Mono', monospace" }}
                    >
                      {d.note}
                    </p>
                  </div>
                  <span className="dir-arrow text-2xl" aria-hidden>
                    →
                  </span>
                </div>

                <div className={i === 0 ? "sm:max-w-md" : ""}>
                  <p className="text-[15px] leading-7 text-[#55534A]">
                    {d.blurb}
                  </p>
                  <div className="mt-4 flex gap-1.5">
                    {d.swatches.map((c) => (
                      <span
                        key={c}
                        className="h-5 w-5 border border-[#16150F]"
                        style={{ background: c }}
                      />
                    ))}
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>

        <footer
          className="mt-12 border-t border-[#16150F]/20 pt-6 text-xs text-[#55534A]"
          style={{ fontFamily: "'IBM Plex Mono', monospace" }}
        >
          Routes /1 through /5. Each page is a self-contained design.
        </footer>
      </div>
    </div>
  );
}
