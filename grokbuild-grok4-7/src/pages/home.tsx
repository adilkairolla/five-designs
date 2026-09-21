import { Link } from "react-router-dom";
import { designs } from "../content.ts";
import { Skip } from "../site.tsx";
import { usePage } from "../use-page.ts";

export function Home() {
  usePage("Ratio Reader", "#ffffff");

  return (
    <>
      <Skip />
      <main className="home" id="content">
        <div className="home-inner">
          <h1>Ratio Reader</h1>
          <p className="home-lead">
            Upload a PDF. Get the sentences that carry the meaning, plus the
            quotes, hints, and insights that make them understandable. Five
            pages explain the same product.
          </p>
          <ol className="home-list">
            {designs.map((design) => (
              <li key={design.href}>
                <Link to={design.href}>
                  {design.name}
                  <span className="vh">, page {design.href}</span>
                </Link>
                <p>{design.blurb}</p>
              </li>
            ))}
          </ol>
        </div>
      </main>
    </>
  );
}

export function Missing() {
  usePage("Not found — Ratio Reader", "#ffffff");

  return (
    <main className="home" id="content">
      <div className="home-inner">
        <h1>That page is not one of the five.</h1>
        <p className="home-lead">
          <Link to="/">Back to the contents</Link>
        </p>
      </div>
    </main>
  );
}
