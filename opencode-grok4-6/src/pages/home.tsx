import { Link } from "react-router-dom";
import { useEffect } from "react";

const designs = [
  {
    n: "1",
    name: "Highlighter",
    line: "A desk, a xeroxed paper, the one sentence that matters.",
  },
  {
    n: "2",
    name: "Receipt",
    line: "412 pages in. You keep the change.",
  },
  {
    n: "3",
    name: "Fiche",
    line: "Slide the film in. Only the useful frames light up.",
  },
  {
    n: "4",
    name: "Essay",
    line: "A short essay, annotated by a friend who already read it.",
  },
  {
    n: "5",
    name: "Tear",
    line: "The document on the left. What you need on the right.",
  },
];

export function Home() {
  useEffect(() => {
    document.title = "Ratio Reader";
  }, []);

  return (
    <main className="home">
      <style>{`
        .home {
          min-height: 100vh;
          background: #eceae4;
          color: #1b1b1b;
          font-family: "Libre Franklin", sans-serif;
          padding: 12vh 8vw 10vh;
        }
        .home-kicker {
          font-size: 11px;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          color: #6a675f;
          margin: 0 0 1.2rem;
        }
        .home h1 {
          font-family: "Newsreader", serif;
          font-weight: 400;
          font-size: clamp(2.4rem, 6vw, 4.4rem);
          letter-spacing: -0.03em;
          line-height: 0.95;
          margin: 0 0 0.8rem;
        }
        .home-sub {
          max-width: 34rem;
          color: #4a4740;
          font-size: 1.05rem;
          line-height: 1.55;
          margin: 0 0 4rem;
        }
        .home-list {
          display: grid;
          gap: 0;
          border-top: 1px solid #1b1b1b;
        }
        .home-list a {
          display: grid;
          grid-template-columns: 3rem 8rem 1fr;
          gap: 1rem;
          align-items: baseline;
          padding: 1.15rem 0;
          border-bottom: 1px solid #1b1b1b;
          color: inherit;
          text-decoration: none;
        }
        .home-list a:hover .home-name {
          text-decoration: underline;
          text-underline-offset: 4px;
        }
        .home-n {
          font-family: "IBM Plex Mono", monospace;
          font-size: 0.8rem;
        }
        .home-name {
          font-family: "Newsreader", serif;
          font-size: 1.35rem;
        }
        .home-line {
          color: #5c594f;
          font-size: 0.95rem;
        }
        @media (max-width: 720px) {
          .home-list a {
            grid-template-columns: 2rem 1fr;
          }
          .home-line {
            grid-column: 2;
          }
        }
      `}</style>
      <p className="home-kicker">Ratio Reader · five studies</p>
      <h1>Upload a PDF. Keep the ratio.</h1>
      <p className="home-sub">
        Five marketing pages for the same tool. Each one is a different way of
        looking at a long document.
      </p>
      <div className="home-list">
        {designs.map((d) => (
          <Link key={d.n} to={`/${d.n}`}>
            <span className="home-n">/{d.n}</span>
            <span className="home-name">{d.name}</span>
            <span className="home-line">{d.line}</span>
          </Link>
        ))}
      </div>
    </main>
  );
}
