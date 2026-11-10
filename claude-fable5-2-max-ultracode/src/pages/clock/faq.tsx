import { faqItems, faqReadingTime } from "./page-copy";
import { useClock } from "./use-clock";

export function Faq() {
  const pace = useClock((clock) => clock.wordsPerMinute);

  return (
    <section aria-labelledby="clock-faq-title">
      <div className="clock-wrap px-4 pt-20 sm:px-8 md:pt-28 lg:px-12">
        <h2 id="clock-faq-title" className="clock-h2">
          Four questions, about {faqReadingTime(pace)}.
        </h2>
        <div className="mt-10">
          {faqItems(pace).map((item) => (
            <div
              key={item.id}
              className="border-t border-clock-cell/55 py-7 lg:grid lg:grid-cols-[minmax(0,22rem)_minmax(0,38rem)] lg:gap-x-8"
            >
              <h3 className="text-[1.125rem]/[1.3] font-[650] md:text-[1.25rem]/[1.3]">{item.question}</h3>
              <p className="mt-2 max-w-[38rem] lg:mt-0">{item.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
