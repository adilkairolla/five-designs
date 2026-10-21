export const brand = {
  name: "Ratio Reader",
  primaryCta: "Upload a PDF",
  secondaryCta: "See a sample",
};

export const pitch =
  "Upload a PDF and get the summary, the key points, plain-language hints, quotes with page numbers, and insights about how the ideas connect.";

export const sample = {
  title: "Everyday Economics, Chapter 4: Elasticity",
  pages: 46,
  readMinutes: 5,
  summary:
    "Elasticity measures how much buyers change their behavior when a price changes. When demand is elastic, a small price change moves sales a lot. When demand is inelastic, people keep buying nearly the same amount. The chapter shows how to calculate elasticity, why time and alternatives change it, and why it decides who ends up paying a tax.",
  keyPoints: [
    {
      text: "Elasticity is a ratio: the percent change in quantity demanded divided by the percent change in price.",
      page: 6,
    },
    {
      text: "Goods with close substitutes tend to be elastic. Necessities without substitutes tend to be inelastic.",
      page: 11,
    },
    {
      text: "Time matters. Demand for gasoline is far more elastic over five years than over five days.",
      page: 14,
    },
    {
      text: "Who bears a tax depends on elasticity, not on which side of the market sends the payment.",
      page: 27,
    },
    {
      text: "Total revenue rises when a price increase meets inelastic demand, and falls when demand is elastic.",
      page: 33,
    },
  ],
  hints: [
    {
      text: "Think of elasticity as a stretch test. A rubber band stretches a lot. A steel wire barely moves. Buyers work the same way.",
      page: 5,
    },
    {
      text: "Use midpoint percentages. Going from $10 to $12 and back from $12 to $10 gives two different answers unless you average the two prices.",
      page: 8,
    },
    {
      text: "When a question asks who pays a tax, ask which side has fewer alternatives. That side carries more of the burden.",
      page: 28,
    },
  ],
  quotes: [
    {
      text: "Elasticity is less about the price itself and more about how far a buyer can walk away from it.",
      page: 12,
    },
    {
      text: "A tax is rarely paid entirely by the person who sends the money to the government.",
      page: 27,
    },
    {
      text: "Necessities are not cheap to give up. They are expensive to live without.",
      page: 9,
    },
  ],
  insights: [
    {
      kind: "connects to",
      text: "Chapter 2 introduced supply and demand curves. Elasticity describes how steep those curves are in percentage terms, which is a different thing from their slope.",
      page: 3,
    },
    {
      kind: "blind spot",
      text: "Inelastic does not mean people don't care about price. It means the quantity barely changes when the price does.",
      page: 10,
    },
    {
      kind: "next step",
      text: "Pick two things you buy every week. Estimate how much you would cut back after a 10% price rise, then check your answer against the problem set on page 40.",
      page: 40,
    },
  ],
};

export const features = [
  {
    name: "Summary",
    detail: "The whole document in one paragraph, so you know if it deserves your full attention.",
  },
  {
    name: "Key points",
    detail: "The few ideas the document depends on, each linked to the page it comes from.",
  },
  {
    name: "Hints",
    detail: "Plain-language help for the parts that trip readers up: terms, analogies, and common mistakes.",
  },
  {
    name: "Quotes",
    detail: "Sentences worth remembering, with page numbers so you can check them in the original.",
  },
  {
    name: "Insights",
    detail: "How an idea connects to others, where readers usually go wrong, and what to do next.",
  },
];

export const steps = [
  {
    name: "Upload",
    detail: "Drop in a PDF: a paper, a report, a textbook chapter, or a contract.",
  },
  {
    name: "Skim",
    detail: "Read the summary and key points to decide what needs your close attention.",
  },
  {
    name: "Understand",
    detail: "Work through the hints, quotes, and insights, and check each quote against its page.",
  },
];
