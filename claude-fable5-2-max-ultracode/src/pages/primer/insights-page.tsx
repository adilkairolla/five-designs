import { insights } from "@/content/origin-of-species";
import type { Insight } from "@/content/origin-of-species";
import { PageCite } from "./page-cite";

const INSIGHT_KINDS_IN_ORDER: readonly Insight["kind"][] = ["theme", "connection", "missing"];

const INSIGHT_KIND_HEADING = {
  theme: "A theme",
  connection: "How the parts connect",
  missing: "What is missing",
} as const satisfies Record<Insight["kind"], string>;

export function InsightsPage() {
  return (
    <div className="space-y-7">
      {INSIGHT_KINDS_IN_ORDER.map((kind) => (
        <div key={kind}>
          <h4 className="text-sm leading-normal">{INSIGHT_KIND_HEADING[kind]}</h4>
          <ul className="mt-2 space-y-4">
            {insights
              .filter((insight) => insight.kind === kind)
              .map((insight) => (
                <li key={insight.title}>
                  <p className="font-bold text-balance">{insight.title}</p>
                  <p className="flow-root text-pretty">
                    {insight.text} <PageCite pages={insight.pages} />
                  </p>
                </li>
              ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
