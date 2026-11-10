import { Link, useLocation } from "react-router-dom";

const designs = [
  { id: "1", label: "Margin" },
  { id: "2", label: "Signal" },
  { id: "3", label: "Form" },
  { id: "4", label: "Soft" },
  { id: "5", label: "Press" },
];

export function DesignSwitcher() {
  const { pathname } = useLocation();
  if (pathname === "/") return null;

  return (
    <div className="fixed bottom-4 left-1/2 z-[100] -translate-x-1/2 md:bottom-5 md:left-auto md:right-5 md:translate-x-0">
      <div className="flex items-center gap-0.5 rounded-full border border-white/15 bg-black/70 px-1.5 py-1.5 shadow-xl shadow-black/30 backdrop-blur-xl">
        <Link
          to="/"
          className="mr-1 rounded-full px-2.5 py-1 font-mono text-[10px] tracking-[0.18em] text-white/45 uppercase transition hover:text-white"
        >
          hub
        </Link>
        {designs.map((d) => {
          const active = pathname === `/${d.id}`;
          return (
            <Link
              key={d.id}
              to={`/${d.id}`}
              title={`Design ${d.id} — ${d.label}`}
              className={`flex h-7 min-w-7 items-center justify-center rounded-full px-2 font-mono text-[11px] transition ${
                active
                  ? "bg-white text-black"
                  : "text-white/60 hover:bg-white/10 hover:text-white"
              }`}
            >
              {d.id}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
