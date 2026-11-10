import { citePages } from "@/content/book-math";
import { insights } from "@/content/origin-of-species";

export function InsightList() {
  return (
    <ul className="jacket-list jacket-list--loose mt-8">
      {insights.map((insight) => (
        <li key={insight.title}>
          <h3 className="jacket-subhead">{insight.title}</h3>
          <p className="jacket-body mt-1">
            {insight.text} <span className="jacket-label">{citePages(insight.pages)}</span>
          </p>
        </li>
      ))}
    </ul>
  );
}
