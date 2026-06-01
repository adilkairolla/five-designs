import { Outlet, useLocation, NavLink } from "react-router-dom";

export default function Layout() {
  const loc = useLocation();
  const designs = [
    { num: 1, name: "Brutalist", path: "/1" },
    { num: 2, name: "Neon Bloom", path: "/2" },
    { num: 3, name: "Origami", path: "/3" },
    { num: 4, name: "Riso", path: "/4" },
    { num: 5, name: "Zen", path: "/5" },
  ];

  return (
    <div className="min-h-screen">
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-black/85 backdrop-blur-xl border-b border-white/5">
        <a href="/" className="text-white font-extrabold text-xl tracking-tight">
          RATIO<span className="text-amber-400">.</span>
        </a>
        <div className="flex items-center gap-1">
          {designs.map((d) => (
            <NavLink
              key={d.num}
              to={d.path}
              className={({ isActive }) =>
                `px-3 py-1.5 text-xs font-semibold rounded-full transition-all duration-300 ${
                  isActive || loc.pathname === d.path
                    ? "bg-amber-400 text-black"
                    : "text-white/60 hover:text-white hover:bg-white/10"
                }`
              }
            >
              {d.name}
            </NavLink>
          ))}
        </div>
      </nav>
      <main className="pt-16">
        <Outlet />
      </main>
    </div>
  );
}