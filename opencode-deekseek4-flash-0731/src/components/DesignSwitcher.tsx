import { Link, useLocation } from "react-router-dom";

const PAGES = ["/1", "/2", "/3", "/4", "/5"];

export function DesignSwitcher() {
  const { pathname } = useLocation();
  return (
    <nav className="fixed bottom-4 right-4 z-50 flex items-center gap-1 rounded-full border border-white/10 bg-black/85 p-1.5 shadow-2xl backdrop-blur-md">
      {PAGES.map((to) => {
        const active = pathname === to;
        return (
          <Link
            key={to}
            to={to}
            aria-label={`Design ${to.slice(1)}`}
            className={`grid h-8 w-8 place-items-center rounded-full font-mono text-xs transition-colors ${
              active
                ? "bg-white text-black"
                : "text-white/60 hover:bg-white/10 hover:text-white"
            }`}
          >
            {to.slice(1)}
          </Link>
        );
      })}
    </nav>
  );
}
