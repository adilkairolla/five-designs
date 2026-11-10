const STEPS = [
  { when: "First", text: "You upload a PDF." },
  { when: "Then", text: "Ratio Reader reads the whole thing." },
  { when: "After that", text: "You have a summary, hints, quotes and insights." },
] as const;

export function Steps() {
  return (
    <section aria-labelledby="clock-steps-title">
      <div className="clock-wrap px-4 pt-20 sm:px-8 md:pt-28 lg:px-12">
        <h2 id="clock-steps-title" className="clock-h2">
          With your own PDF, it goes like this.
        </h2>
        <ol className="mt-8 space-y-4">
          {STEPS.map((step) => (
            <li
              key={step.when}
              className="grid grid-cols-[5.5rem_minmax(0,1fr)] gap-x-4 text-[1.25rem]/[1.25] font-medium md:grid-cols-[9rem_minmax(0,1fr)] md:text-[1.75rem]/[1.25]"
            >
              <span className="text-clock-unread">{step.when}</span>
              <span>{step.text}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
