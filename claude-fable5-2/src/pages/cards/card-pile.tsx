import { useRef, useState } from "react";
import type { CSSProperties, PointerEvent, ReactNode } from "react";

const PILE_BREAKPOINT = "(min-width: 64rem)";
const KIND = "condensed text-[1.55em] leading-none font-extrabold";

type Placement = { left: string; top: string; turn: string };

type PileCard = {
  id: string;
  width: string;
  scattered: Placement;
  sorted: Placement;
  className: string;
  content: ReactNode;
};

const CARDS: PileCard[] = [
  {
    id: "pdf",
    width: "14%",
    scattered: { left: "2%", top: "15%", turn: "-7deg" },
    sorted: { left: "0%", top: "4%", turn: "0deg" },
    className: "rounded-md bg-white p-[1.1em]",
    content: (
      <>
        <p className="leading-tight font-bold break-words">the-wealth-of-nations.pdf</p>
        <p className="mt-[0.3em] opacity-70">1,152 pages</p>
        <div aria-hidden="true" className="mt-[1.1em] space-y-[0.5em]">
          {[100, 93, 97, 58, 0, 100, 89, 95, 71, 0, 98, 84].map((width, line) => (
            <div key={line} className="h-[0.32em] rounded-full bg-forest/15" style={{ width: `${width}%` }} />
          ))}
        </div>
      </>
    ),
  },
  {
    id: "summary",
    width: "24%",
    scattered: { left: "13%", top: "3%", turn: "4deg" },
    sorted: { left: "16%", top: "4%", turn: "0deg" },
    className: "rounded-[1.4em] bg-chalk p-[1.35em]",
    content: (
      <>
        <p className={KIND}>Summary</p>
        <ol className="mt-[0.9em] list-decimal space-y-[0.7em] pl-[1.2em] leading-[1.35] marker:font-bold">
          <li>
            Wealth comes from labour, and labour gets more productive when it is divided. Ten
            workers sharing eighteen steps make 48,000 pins a day. <PageRef>p. 8</PageRef>
          </li>
          <li>
            People trade out of self-interest, and that is enough to coordinate an economy with
            nobody directing it. <PageRef>p. 19</PageRef>
          </li>
          <li>
            The size of the market limits how far work can be divided. <PageRef>p. 23</PageRef>
          </li>
        </ol>
      </>
    ),
  },
  {
    id: "hint-skim",
    width: "16%",
    scattered: { left: "37%", top: "43%", turn: "-5deg" },
    sorted: { left: "42%", top: "4%", turn: "0deg" },
    className: "rounded-[0.3em] bg-butter p-[1.15em]",
    content: (
      <>
        <p className={KIND}>Hint</p>
        <p className="mt-[0.6em] leading-[1.35]">
          Books IV and V are about 18th-century policy. The core theory is all in Book I.
        </p>
      </>
    ),
  },
  {
    id: "quote",
    width: "22%",
    scattered: { left: "49%", top: "2%", turn: "6deg" },
    sorted: { left: "60%", top: "4%", turn: "0deg" },
    className: "rounded-[2em] bg-tangerine p-[1.5em]",
    content: (
      <>
        <p className={KIND}>Quote</p>
        <p className="mt-[0.6em] text-[1.22em] leading-[1.18] font-bold">
          “It is not from the benevolence of the butcher, the brewer, or the baker, that we expect
          our dinner, but from their regard to their own interest.”
        </p>
        <p className="mt-[0.8em]">Adam Smith, p. 20</p>
      </>
    ),
  },
  {
    id: "insight",
    width: "17%",
    scattered: { left: "77%", top: "37%", turn: "-4deg" },
    sorted: { left: "83%", top: "4%", turn: "0deg" },
    className: "rounded-[1.4em] bg-forest p-[1.25em] text-lilac",
    content: (
      <>
        <p className={KIND}>Insight</p>
        <p className="mt-[0.6em] leading-[1.35]">
          The “invisible hand” appears once in the whole book, in a passage about imports. Its fame
          came later.
        </p>
      </>
    ),
  },
  {
    id: "hint-stock",
    width: "16%",
    scattered: { left: "58%", top: "61%", turn: "9deg" },
    sorted: { left: "42%", top: "50%", turn: "0deg" },
    className: "rounded-[0.3em] bg-butter p-[1.15em]",
    content: (
      <>
        <p className={KIND}>Hint</p>
        <p className="mt-[0.6em] leading-[1.35]">
          “Stock” means capital. Swap the word in your head and Book II gets easier.
        </p>
      </>
    ),
  },
];

function PageRef({ children }: { children: ReactNode }) {
  return <span className="font-bold whitespace-nowrap text-tangerine">{children}</span>;
}

function usePile(count: number) {
  const [sorted, setSorted] = useState(false);
  const [offsets, setOffsets] = useState(() => Array.from({ length: count }, () => ({ x: 0, y: 0 })));
  const [stack, setStack] = useState(() => Array.from({ length: count }, (_, index) => index));
  const [dragging, setDragging] = useState<number | null>(null);
  const grab = useRef({ pointerX: 0, pointerY: 0, x: 0, y: 0 });

  const toggleSorted = () => {
    setSorted((value) => !value);
    setOffsets((all) => all.map(() => ({ x: 0, y: 0 })));
  };

  const dragHandlers = (index: number) => ({
    onPointerDown: (event: PointerEvent<HTMLElement>) => {
      if (!window.matchMedia(PILE_BREAKPOINT).matches) return;
      event.currentTarget.setPointerCapture(event.pointerId);
      grab.current = { pointerX: event.clientX, pointerY: event.clientY, ...offsets[index] };
      setDragging(index);
      setStack((order) => [...order.filter((card) => card !== index), index]);
    },
    onPointerMove: (event: PointerEvent<HTMLElement>) => {
      if (dragging !== index) return;
      const { pointerX, pointerY, x, y } = grab.current;
      const next = { x: x + event.clientX - pointerX, y: y + event.clientY - pointerY };
      setOffsets((all) => all.map((offset, card) => (card === index ? next : offset)));
    },
    onPointerUp: () => setDragging(null),
    onPointerCancel: () => setDragging(null),
  });

  return { sorted, toggleSorted, offsets, stack, dragging, dragHandlers };
}

export function CardPile() {
  const { sorted, toggleSorted, offsets, stack, dragging, dragHandlers } = usePile(CARDS.length);

  return (
    <div>
      <div className="pile relative grid gap-4 sm:grid-cols-2 lg:block">
        {CARDS.map((card, index) => {
          const place = sorted ? card.sorted : card.scattered;
          const position = {
            "--left": place.left,
            "--top": place.top,
            "--turn": place.turn,
            "--width": card.width,
            "--dx": `${offsets[index].x}px`,
            "--dy": `${offsets[index].y}px`,
            zIndex: stack.indexOf(index) + 1,
          } as CSSProperties;

          return (
            <div
              key={card.id}
              data-dragging={dragging === index}
              className={`pile-card text-[0.9375rem] ${card.className}`}
              style={position}
              {...dragHandlers(index)}
            >
              {card.content}
            </div>
          );
        })}
      </div>

      <div className="mt-6 hidden flex-wrap items-center gap-x-6 gap-y-3 lg:flex">
        <button
          type="button"
          onClick={toggleSorted}
          className="rounded-full border-2 border-forest px-5 py-2.5 font-bold transition-colors hover:bg-forest hover:text-butter focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-forest"
        >
          {sorted ? "Scatter the cards" : "Sort the cards"}
        </button>
        <p className="text-lg">Drag them around. Everything on this table came out of one PDF.</p>
      </div>
    </div>
  );
}
