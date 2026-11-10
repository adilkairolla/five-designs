import { book } from "@/content/origin-of-species";
import { useClock } from "./use-clock";

export function SiteFooter() {
  const pace = useClock((clock) => clock.wordsPerMinute);

  return (
    <footer className="bg-clock-pane py-10">
      <div className="clock-wrap px-4 sm:px-8 lg:px-12">
        <div className="text-[0.9375rem]/[1.5] text-clock-unread lg:grid lg:grid-cols-[22rem_minmax(0,38rem)] lg:gap-x-8">
          <p className="font-bold text-clock-white">Ratio Reader</p>
          <div className="mt-1 space-y-1 lg:mt-0">
            <p>
              Sample: {book.title}, {book.edition}, {book.year}.
            </p>
            <p>This is a demo page. It does not process files, and nothing you pick is uploaded.</p>
            <p>Reading times are approximate, at {pace} words a minute.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
