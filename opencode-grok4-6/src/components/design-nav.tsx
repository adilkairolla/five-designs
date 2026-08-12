import { Link, useLocation } from "react-router-dom";

export function DesignNav({ brand = "Ratio" }: { brand?: string }) {
  const { pathname } = useLocation();

  return (
    <nav className="dnav" aria-label="Designs">
      <Link to="/" className="dnav-brand">
        {brand}
      </Link>
      <div className="dnav-links">
        {[1, 2, 3, 4, 5].map((n) => (
          <Link
            key={n}
            to={`/${n}`}
            data-active={pathname === `/${n}` ? "true" : "false"}
            aria-current={pathname === `/${n}` ? "page" : undefined}
          >
            {n}
          </Link>
        ))}
      </div>
    </nav>
  );
}
