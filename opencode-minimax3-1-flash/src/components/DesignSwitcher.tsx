import { Link, useLocation } from "react-router-dom";

type DesignSwitcherProps = {
  className?: string;
  buttonClassName?: string;
  activeClassName?: string;
  label?: string;
};

const DESIGNS = [
  { id: "1", name: "Editorial" },
  { id: "2", name: "Terminal" },
  { id: "3", name: "Notebook" },
  { id: "4", name: "Brutalist" },
  { id: "5", name: "Aurora" },
];

export function DesignSwitcher({
  className = "",
  buttonClassName = "",
  activeClassName = "",
  label = "Designs",
}: DesignSwitcherProps) {
  const { pathname } = useLocation();
  const current = pathname.replace(/^\//, "").split("/")[0];

  return (
    <div
      className={`pointer-events-auto flex items-center gap-1 rounded-full p-1 text-[11px] font-medium shadow-xl backdrop-blur-md ${className}`}
    >
      <span className={`px-2 pl-3 text-[10px] uppercase tracking-[0.18em] ${buttonClassName}`}>
        {label}
      </span>
      {DESIGNS.map((design) => {
        const active = current === design.id;
        return (
          <Link
            key={design.id}
            to={`/${design.id}`}
            title={design.name}
            className={`grid h-7 w-7 place-items-center rounded-full transition-colors ${buttonClassName} ${
              active ? activeClassName : "opacity-55 hover:opacity-100"
            }`}
          >
            {design.id}
          </Link>
        );
      })}
    </div>
  );
}
