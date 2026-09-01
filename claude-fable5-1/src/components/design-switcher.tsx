import { Link, useLocation } from "react-router-dom";

const designs = [
  { path: "/1", label: "Editorial" },
  { path: "/2", label: "Blueprint" },
  { path: "/3", label: "Loud" },
  { path: "/4", label: "Lens" },
  { path: "/5", label: "Golden" },
];

export function DesignSwitcher() {
  const { pathname } = useLocation();
  return (
    <nav
      aria-label="Switch design"
      className="fixed bottom-4 left-1/2 z-[100] -translate-x-1/2 rounded-full border border-white/15 bg-neutral-900/85 p-1 text-xs font-medium text-white shadow-2xl backdrop-blur-md"
      style={{ fontFamily: "Inter, system-ui, sans-serif" }}
    >
      <ul className="flex items-center gap-0.5">
        {designs.map((d, i) => {
          const active = pathname === d.path;
          return (
            <li key={d.path}>
              <Link
                to={d.path}
                className={`flex h-8 items-center gap-1.5 rounded-full px-3 transition-colors ${
                  active ? "bg-white text-neutral-900" : "text-neutral-300 hover:bg-white/10 hover:text-white"
                }`}
              >
                <span className="tabular-nums opacity-60">{i + 1}</span>
                <span className="hidden sm:inline">{d.label}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
