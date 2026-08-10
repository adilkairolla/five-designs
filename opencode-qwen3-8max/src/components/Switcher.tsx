import { NavLink } from "react-router-dom";

const designs = [
  { n: 1, label: "Manuscript", to: "/1" },
  { n: 2, label: "Ratio Glass", to: "/2" },
  { n: 3, label: "Zine Brut", to: "/3" },
  { n: 4, label: "Terminal", to: "/4" },
  { n: 5, label: "Editorial", to: "/5" },
];

export function Switcher({ current = 0 }: { current?: number }) {
  void current;
  return (
    <nav className="fixed right-4 top-4 z-[200] flex items-center gap-1 rounded-full border border-black/10 bg-white/85 px-2 py-1.5 font-mono text-[11px] tracking-tight text-neutral-700 shadow-lg shadow-black/10 backdrop-blur-md">
      <span className="mx-1 text-neutral-400">designs</span>
      {designs.map((d) => (
        <NavLink
          key={d.n}
          to={d.to}
          title={d.label}
          className={({ isActive }) =>
            `flex h-6 w-6 items-center justify-center rounded-full transition ${
              isActive
                ? "bg-neutral-900 text-white"
                : "text-neutral-500 hover:bg-neutral-900/10"
            }`
          }
        >
          {d.n}
        </NavLink>
      ))}
    </nav>
  );
}
