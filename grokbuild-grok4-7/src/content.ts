export type Kind = "claim" | "quote" | "hint" | "insight";

export type Sentence = {
  id: string;
  text: string;
  kept: boolean;
  kind: Kind | null;
  mass: number;
  note: string;
  hint?: string;
  insight?: string;
};

export const quote =
  "A block with no canopy empties out after lunch, even when the shops stay open.";

export const claim =
  "Shade is infrastructure. Streets that lose their trees lose afternoon foot traffic within a season.";

export const pitSentence =
  "Replacement plantings fail when the pit holds less than three cubic meters of soil.";

export const decision =
  "The decision in front of the city is soil volume, not a higher tree count.";

export const summary =
  "Street trees are infrastructure, not decoration. Blocks without shade lose their afternoon foot traffic, measured on twelve blocks in July. New trees fail when the planting pit holds less than three cubic meters of soil, about the volume of a small closet. The decision in the document is larger pits, not a higher tree count.";

export const canopyHint =
  "Canopy means the shade cast by the crowns overhead, not the number of trunks on the block.";

export const pitHint =
  "A pit is the underground box a street tree is planted in. Three cubic meters is about a small closet of soil. Less than that, and the roots overheat.";

export const claimHint =
  "Infrastructure means something the street needs in order to work, the way it needs a drain. The briefing is arguing against treating trees as decoration.";

export const decisionHint =
  "The opening pages read as a request to plant more trees. This sentence replaces that request.";

export const insightText =
  "The briefing opens as if it were asking for more trees. The sentence that matters asks for more soil. Planting more trees in small pits is the plan the document is walking away from.";

export const kindLabel: Record<Kind, string> = {
  claim: "Claim",
  quote: "Quote",
  hint: "Hint",
  insight: "Insight",
};

export const sentences: Sentence[] = [
  {
    id: "mayor",
    text: "The mayor’s office asked for the briefing after three summers of heat warnings.",
    kept: false,
    kind: null,
    mass: 22,
    note: "This says who asked for the file. It does not change the recommendation, so it stays in the original.",
  },
  {
    id: "filed",
    text: "The parks department filed it in March, after a winter that killed a noticeable share of young street trees.",
    kept: false,
    kind: null,
    mass: 30,
    note: "A date and a cause. Useful background, not the argument.",
  },
  {
    id: "length",
    text: "The document runs to 42 pages, with budget tables, vendor bids, and a survey appendix.",
    kept: false,
    kind: null,
    mass: 18,
    note: "This tells you the file is long. Ratio Reader exists so you can find the point without reading all 42 pages first.",
  },
  {
    id: "shade",
    text: claim,
    kept: true,
    kind: "claim",
    mass: 100,
    note: "This is the claim the rest of the briefing is built to support.",
    hint: claimHint,
    insight:
      "Read this first. The counts, the tables, and the appendix exist to defend this sentence.",
  },
  {
    id: "surveyors",
    text: "Surveyors counted people on twelve blocks in July, once at noon and once at four.",
    kept: false,
    kind: null,
    mass: 26,
    note: "This is the method. Open it when you need to trust the numbers, not when you need the point.",
  },
  {
    id: "canopy",
    text: `“${quote}”`,
    kept: true,
    kind: "quote",
    mass: 88,
    note: "Ratio Reader keeps this in the author’s words. A paraphrase would sand it down.",
    hint: canopyHint,
    insight:
      "This is the line the briefing wants repeated. The foot-traffic counts are the evidence for it.",
  },
  {
    id: "appendix",
    text: "The survey method is described in appendix C and follows the 2019 counting guide.",
    kept: false,
    kind: null,
    mass: 16,
    note: "A pointer to another section. Ratio Reader keeps the finding and leaves the pointer.",
  },
  {
    id: "pit",
    text: pitSentence,
    kept: true,
    kind: "hint",
    mass: 96,
    note: "Readers skip this sentence because the noun is unexplained. The hint is why it gets kept.",
    hint: pitHint,
    insight:
      "A reader who does not know what a pit is will miss the only concrete recommendation in the file.",
  },
  {
    id: "costs",
    text: "Unit costs for soil, guards, and watering are listed in table 4.",
    kept: false,
    kind: null,
    mass: 20,
    note: "A table reference. It matters to a budget officer. It is not the argument.",
  },
  {
    id: "vendors",
    text: "Two vendors bid on the soil mix, and both bids are reproduced in full.",
    kept: false,
    kind: null,
    mass: 28,
    note: "Both bids are printed in full. That is a large part of why the PDF is 42 pages. The prices support the soil question. They are not the question.",
  },
  {
    id: "soil",
    text: decision,
    kept: true,
    kind: "insight",
    mass: 78,
    note: "This sentence changes what the earlier pages mean.",
    hint: decisionHint,
    insight: insightText,
  },
  {
    id: "dissent",
    text: "A note from the facilities office, reprinted without comment, prefers fewer and larger trees.",
    kept: false,
    kind: null,
    mass: 34,
    note: "The facilities office already agrees, in a note the briefing reprints and does not discuss. The insight above has captured it.",
  },
  {
    id: "watering",
    text: "Watering schedules for the first two summers are attached as a spreadsheet.",
    kept: false,
    kind: null,
    mass: 15,
    note: "An attachment. File names and spreadsheets stay in the original.",
  },
  {
    id: "thanks",
    text: "The closing pages thank the survey volunteers and list next quarter’s hearings.",
    kept: false,
    kind: null,
    mass: 24,
    note: "Courtesy and a calendar. Neither one changes the recommendation.",
  },
  {
    id: "comments",
    text: "Comments are due before the April budget session.",
    kept: false,
    kind: null,
    mass: 12,
    note: "A deadline. It matters for the calendar, and it is separate from the argument.",
  },
];

export const keptCount = sentences.filter((sentence) => sentence.kept).length;

export const designs = [
  {
    href: "/1",
    name: "Exam sheet",
    blurb:
      "Click any sentence. The margin says why it was kept, or why it stays in the original.",
  },
  {
    href: "/2",
    name: "Index card",
    blurb:
      "The pitch is written on one card. Turn it over for the summary, the quote, the hint, and the insight.",
  },
  {
    href: "/3",
    name: "Fraction",
    blurb:
      "The product is a fraction. A slider puts back the sentences Ratio Reader would leave out.",
  },
  {
    href: "/4",
    name: "Highlighter",
    blurb:
      "Yellow, pink, green, and blue. Each highlighter marks a different kind of help.",
  },
  {
    href: "/5",
    name: "Long read",
    blurb:
      "The pale sentences are still there. The dark ones are the ratio. Open a dark sentence for the hint.",
  },
] as const;
