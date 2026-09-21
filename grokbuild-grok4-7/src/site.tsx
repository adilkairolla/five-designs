import { Link } from "react-router-dom";
import { designs } from "./content.ts";

export function Skip() {
  return (
    <a className="skip" href="#content">
      Skip to content
    </a>
  );
}

export function VersionNav({ href }: { href: (typeof designs)[number]["href"] }) {
  return (
    <footer className="vnav">
      <p>
        <Link to="/">Contents</Link>
      </p>
      <ol>
        {designs.map((design) => {
          const label = `${design.href.slice(1)}. ${design.name}`;
          return (
            <li key={design.href}>
              {design.href === href ? (
                <span aria-current="page">{label}</span>
              ) : (
                <Link to={design.href}>{label}</Link>
              )}
            </li>
          );
        })}
      </ol>
    </footer>
  );
}
