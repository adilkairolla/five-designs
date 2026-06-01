import { NavLink } from "react-router-dom";

type VariantSwitcherProps = {
  tone?: "light" | "dark";
  className?: string;
};

function cx(...values: Array<string | false | undefined>) {
  return values.filter(Boolean).join(" ");
}

export function VariantSwitcher({
  tone = "light",
  className,
}: VariantSwitcherProps) {
  const toneClasses =
    tone === "dark"
      ? {
          container:
            "border-white/20 bg-white/5 text-white shadow-[0_0_0_1px_rgba(255,255,255,0.06)]",
          button:
            "border-white/20 bg-black/20 text-white/80 hover:border-white/40 hover:text-white",
          active: "border-white bg-white text-black",
        }
      : {
          container: "border-black/15 bg-white/80 text-black backdrop-blur",
          button:
            "border-black/20 bg-white text-black/75 hover:border-black/50 hover:text-black",
          active: "border-black bg-black text-white",
        };

  return (
    <div
      className={cx(
        "inline-flex items-center gap-2 rounded-full border p-2 text-xs font-semibold tracking-[0.14em]",
        toneClasses.container,
        className,
      )}
    >
      <span className="px-2 opacity-60">DESIGN</span>
      {["1", "2", "3", "4", "5"].map((id) => (
        <NavLink
          key={id}
          to={`/${id}`}
          className={({ isActive }) =>
            cx(
              "rounded-full border px-3 py-1.5 transition",
              toneClasses.button,
              isActive && toneClasses.active,
            )
          }
        >
          {id}
        </NavLink>
      ))}
    </div>
  );
}
