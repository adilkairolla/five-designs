// Each line is fitted to a 1000-unit box from its measured ink width in Sofia Sans Extra
// Condensed 800 with ligatures off: fontSize = 1000 / ink width, x = minus the left side
// bearing, textLength = the advance at that size.
export const COVER_LINES = [
  { text: "Read the jacket", x: -8.27, baseline: 148.9, fontSize: 212.1, textLength: 1011.55 },
  { text: "first.", x: -8.22, baseline: 620.5, fontSize: 631.95, textLength: 1028.83 },
] as const;

export const LETTERING_BOX = "0 0 1000 624.4";

export const HEADLINE = COVER_LINES.map((line) => line.text).join(" ");
