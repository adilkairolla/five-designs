import { useRef } from "react";
import type { CSSProperties, PointerEvent, ReactNode } from "react";

function useLamp() {
  const wallRef = useRef<HTMLDivElement>(null);

  const moveLamp = (event: PointerEvent<HTMLDivElement>) => {
    const wall = wallRef.current;
    if (!wall) return;
    const bounds = wall.getBoundingClientRect();
    wall.style.setProperty("--lamp-x", `${event.clientX - bounds.left}px`);
    wall.style.setProperty("--lamp-y", `${event.clientY - bounds.top}px`);
  };

  return { wallRef, moveLamp };
}

export function LampWall() {
  const { wallRef, moveLamp } = useLamp();

  return (
    <figure className="mx-auto max-w-[64rem]">
      <div
        ref={wallRef}
        onPointerMove={moveLamp}
        className="wall cursor-crosshair px-2 py-6 font-cormorant text-[clamp(1.3rem,2.45vw,2rem)] leading-[1.5] font-medium sm:px-6"
      >
        <div aria-hidden="true" className="wall-glow" />
        <div className="wall-dim">
          <EntangledBank />
        </div>
        <div aria-hidden="true" className="wall-reveal px-2 py-6 sm:px-6">
          <EntangledBank />
        </div>
      </div>
      <figcaption className="mt-6 px-2 text-center text-[0.9375rem] leading-relaxed text-dusk sm:px-6">
        The last paragraph of On the Origin of Species, pages 489 and 490. Ratio Reader lit three
        passages. Move the light over the rest: the full text never goes away.
      </figcaption>
    </figure>
  );
}

function EntangledBank() {
  return (
    <p>
      It is interesting to contemplate an entangled bank, clothed with many plants of many kinds,
      with birds singing on the bushes, with various insects flitting about, and with worms crawling
      through the damp earth, and to reflect that these elaborately constructed forms, so different
      from each other, and dependent on each other in so complex a manner,{" "}
      <Lit delay={0.7}>have all been produced by laws acting around us.</Lit> These laws, taken in
      the largest sense, being Growth with Reproduction; Inheritance which is almost implied by
      reproduction; Variability from the indirect and direct action of the external conditions of
      life, and from use and disuse;{" "}
      <Lit delay={1.5}>
        a Ratio of Increase so high as to lead to a Struggle for Life, and as a consequence to
        Natural Selection,
      </Lit>{" "}
      entailing Divergence of Character and the Extinction of less-improved forms. Thus, from the
      war of nature, from famine and death, the most exalted object which we are capable of
      conceiving, namely, the production of the higher animals, directly follows. There is grandeur
      in this view of life, with its several powers, having been originally breathed into a few
      forms or into one; and that, whilst this planet has gone cycling on according to the fixed law
      of gravity,{" "}
      <Lit delay={2.3}>
        from so simple a beginning endless forms most beautiful and most wonderful have been, and
        are being, evolved.
      </Lit>
    </p>
  );
}

function Lit({ delay, children }: { delay: number; children: ReactNode }) {
  return (
    <span className="lit" style={{ "--d": `${delay}s` } as CSSProperties}>
      {children}
    </span>
  );
}
