// What Ratio Reader returns for one sample PDF: Darwin's On the Origin of
// Species, first edition (1859). Every quote is word for word from that edition,
// whose wording differs from the later ones, so never retype or "correct" one
// from memory. Summary, hints, insights and answers are ours.

export type PageSpan = { from: number; to: number };

export type Chapter = {
  numeral: string | null;
  title: string;
  pages: PageSpan;
  approxWords: number;
};

export type Quote = { text: string; pages: PageSpan };

export const book = {
  title: "On the Origin of Species",
  author: "Charles Darwin",
  publisher: "John Murray",
  city: "London",
  year: 1859,
  edition: "first edition",
  pages: 502,
  text: { from: 1, to: 490 },
  index: { from: 491, to: 502 },
  approxWords: 150_000,
} as const;

export const chapters: readonly Chapter[] = [
  { numeral: null, title: "Introduction", pages: { from: 1, to: 6 }, approxWords: 1_700 },
  { numeral: "I", title: "Variation under Domestication", pages: { from: 7, to: 43 }, approxWords: 11_700 },
  { numeral: "II", title: "Variation under Nature", pages: { from: 44, to: 59 }, approxWords: 4_900 },
  { numeral: "III", title: "Struggle for Existence", pages: { from: 60, to: 79 }, approxWords: 6_200 },
  { numeral: "IV", title: "Natural Selection", pages: { from: 80, to: 130 }, approxWords: 15_700 },
  { numeral: "V", title: "Laws of Variation", pages: { from: 131, to: 170 }, approxWords: 12_200 },
  { numeral: "VI", title: "Difficulties on Theory", pages: { from: 171, to: 206 }, approxWords: 11_200 },
  { numeral: "VII", title: "Instinct", pages: { from: 207, to: 244 }, approxWords: 12_000 },
  { numeral: "VIII", title: "Hybridism", pages: { from: 245, to: 278 }, approxWords: 10_000 },
  {
    numeral: "IX",
    title: "On the Imperfection of the Geological Record",
    pages: { from: 279, to: 311 },
    approxWords: 9_800,
  },
  {
    numeral: "X",
    title: "On the Geological Succession of Organic Beings",
    pages: { from: 312, to: 345 },
    approxWords: 10_400,
  },
  { numeral: "XI", title: "Geographical Distribution", pages: { from: 346, to: 382 }, approxWords: 11_400 },
  {
    numeral: "XII",
    title: "Geographical Distribution—continued",
    pages: { from: 383, to: 410 },
    approxWords: 8_600,
  },
  {
    numeral: "XIII",
    title: "Mutual Affinities of Organic Beings: Morphology: Embryology: Rudimentary Organs",
    pages: { from: 411, to: 458 },
    approxWords: 14_600,
  },
  { numeral: "XIV", title: "Recapitulation and Conclusion", pages: { from: 459, to: 490 }, approxWords: 9_600 },
];

// Three of these are fragments: inheritance stops where Darwin's sentence runs
// on, record starts inside one, and metaphor does both. Print `text` exactly
// and add no punctuation.
export const quotes = {
  beagle: {
    pages: { from: 1, to: 1 },
    text: "When on board H.M.S. ‘Beagle,’ as naturalist, I was much struck with certain facts in the distribution of the inhabitants of South America, and in the geological relations of the present to the past inhabitants of that continent.",
  },
  abstract: {
    pages: { from: 2, to: 2 },
    text: "This Abstract, which I now publish, must necessarily be imperfect.",
  },
  born: {
    pages: { from: 5, to: 5 },
    text: "As many more individuals of each species are born than can possibly survive; and as, consequently, there is a frequently recurring struggle for existence, it follows that any being, if it vary however slightly in any manner profitable to itself, under the complex and sometimes varying conditions of life, will have a better chance of surviving, and thus be naturally selected.",
  },
  immutable: {
    pages: { from: 6, to: 6 },
    text: "I am fully convinced that species are not immutable; but that those belonging to what are called the same genera are lineal descendants of some other and generally extinct species, in the same manner as the acknowledged varieties of any one species are the descendants of that species.",
  },
  inheritance: {
    pages: { from: 13, to: 13 },
    text: "The laws governing inheritance are quite unknown",
  },
  breeders: {
    pages: { from: 30, to: 30 },
    text: "The key is man’s power of accumulative selection: nature gives successive variations; man adds them up in certain directions useful to him.",
  },
  name: {
    pages: { from: 61, to: 61 },
    text: "I have called this principle, by which each slight variation, if useful, is preserved, by the term of Natural Selection, in order to mark its relation to man’s power of selection.",
  },
  metaphor: {
    pages: { from: 62, to: 62 },
    text: "I use the term Struggle for Existence in a large and metaphorical sense, including dependence of one being on another",
  },
  struggle: {
    pages: { from: 63, to: 63 },
    text: "A struggle for existence inevitably follows from the high rate at which all organic beings tend to increase.",
  },
  definition: {
    pages: { from: 81, to: 81 },
    text: "This preservation of favourable variations and the rejection of injurious variations, I call Natural Selection.",
  },
  scrutinising: {
    pages: { from: 84, to: 84 },
    text: "It may be said that natural selection is daily and hourly scrutinising, throughout the world, every variation, even the slightest; rejecting that which is bad, preserving and adding up all that is good; silently and insensibly working, whenever and wherever opportunity offers, at the improvement of each organic being in relation to its organic and inorganic conditions of life.",
  },
  tree: {
    pages: { from: 130, to: 130 },
    text: "As buds give rise by growth to fresh buds, and these, if vigorous, branch out and overtop on all sides many a feebler branch, so by generation I believe it has been with the great Tree of Life, which fills with its dead and broken branches the crust of the earth, and covers the surface with its ever branching and beautiful ramifications.",
  },
  difficulties: {
    pages: { from: 171, to: 171 },
    text: "Long before having arrived at this part of my work, a crowd of difficulties will have occurred to the reader.",
  },
  eye: {
    pages: { from: 186, to: 186 },
    text: "To suppose that the eye, with all its inimitable contrivances for adjusting the focus to different distances, for admitting different amounts of light, and for the correction of spherical and chromatic aberration, could have been formed by natural selection, seems, I freely confess, absurd in the highest possible degree.",
  },
  record: {
    pages: { from: 310, to: 311 },
    text: "I look at the natural geological record, as a history of the world imperfectly kept, and written in a changing dialect; of this history we possess the last volume alone, relating only to two or three countries. Of this volume, only here and there a short chapter has been preserved; and of each page, only here and there a few lines.",
  },
  argument: {
    pages: { from: 459, to: 459 },
    text: "As this whole volume is one long argument, it may be convenient to the reader to have the leading facts and inferences briefly recapitulated.",
  },
  primordial: {
    pages: { from: 484, to: 484 },
    text: "Therefore I should infer from analogy that probably all the organic beings which have ever lived on this earth have descended from some one primordial form, into which life was first breathed.",
  },
  ennobled: {
    pages: { from: 488, to: 489 },
    text: "When I view all beings not as special creations, but as the lineal descendants of some few beings which lived long before the first bed of the Silurian system was deposited, they seem to me to become ennobled.",
  },
  man: {
    pages: { from: 488, to: 488 },
    text: "Light will be thrown on the origin of man and his history.",
  },
  bank: {
    pages: { from: 489, to: 489 },
    text: "It is interesting to contemplate an entangled bank, clothed with many plants of many kinds, with birds singing on the bushes, with various insects flitting about, and with worms crawling through the damp earth, and to reflect that these elaborately constructed forms, so different from each other, and dependent on each other in so complex a manner, have all been produced by laws acting around us.",
  },
  grandeur: {
    pages: { from: 490, to: 490 },
    text: "There is grandeur in this view of life, with its several powers, having been originally breathed into a few forms or into one; and that, whilst this planet has gone cycling on according to the fixed law of gravity, from so simple a beginning endless forms most beautiful and most wonderful have been, and are being, evolved.",
  },
} as const satisfies Record<string, Quote>;

export type QuoteId = keyof typeof quotes;

export const keyQuotes: readonly QuoteId[] = [
  "born",
  "name",
  "scrutinising",
  "tree",
  "eye",
  "record",
  "grandeur",
];

export type AbridgedFragment = { quote: QuoteId; kept: string };

// The whole book as one paragraph of Darwin's words. `kept` is the part of each
// quote that stays; the pages between two fragments are what was cut.
export const abridgement: readonly AbridgedFragment[] = [
  { quote: "beagle", kept: "When on board H.M.S. ‘Beagle,’ as naturalist, I was much struck with certain facts" },
  { quote: "immutable", kept: "I am fully convinced that species are not immutable" },
  {
    quote: "name",
    kept: "I have called this principle, by which each slight variation, if useful, is preserved, by the term of Natural Selection",
  },
  {
    quote: "scrutinising",
    kept: "It may be said that natural selection is daily and hourly scrutinising, throughout the world, every variation, even the slightest",
  },
  { quote: "difficulties", kept: "a crowd of difficulties will have occurred to the reader" },
  { quote: "argument", kept: "this whole volume is one long argument" },
  {
    quote: "grandeur",
    kept: "from so simple a beginning endless forms most beautiful and most wonderful have been, and are being, evolved.",
  },
];

export type SummarySentence = {
  term: string;
  text: string;
  pages: PageSpan;
  cite: QuoteId;
};

// `term` appears in its sentence word for word; read alone, the five terms are
// the argument.
export const summary: readonly SummarySentence[] = [
  {
    term: "variation",
    text: "Individuals of every species vary, and breeders have shown how far a variation can be carried by choosing which animals and plants to breed from.",
    pages: { from: 7, to: 59 },
    cite: "breeders",
  },
  {
    term: "struggle",
    text: "Far more individuals are born than can survive, so every living thing is caught in a struggle for existence.",
    pages: { from: 60, to: 79 },
    cite: "struggle",
  },
  {
    term: "selection",
    text: "Any variation that helps in that struggle tends to be preserved and inherited; Darwin calls this natural selection and argues that, given enough time, it turns varieties into new species.",
    pages: { from: 80, to: 170 },
    cite: "definition",
  },
  {
    term: "objections",
    text: "He then raises the strongest objections to his own theory, among them the eye, instinct, sterile hybrids and gaps among the fossils, and replies to each in turn.",
    pages: { from: 171, to: 311 },
    cite: "difficulties",
  },
  {
    term: "descent",
    text: "Fossils, the geographic distribution of species and the likeness of embryos all point the same way: species were not created separately but share descent from a few common ancestors.",
    pages: { from: 312, to: 490 },
    cite: "ennobled",
  },
];

// kind: what to read first, what a term means, or what to watch for.
export type Hint = {
  kind: "first" | "term" | "watch";
  title: string;
  text: string;
  pages: PageSpan;
  quote?: QuoteId;
};

export const hints: readonly Hint[] = [
  {
    kind: "first",
    title: "Start with Chapter IV",
    text: "Natural Selection is the longest chapter and carries the central idea. If you read one chapter closely, make it this one.",
    pages: { from: 80, to: 130 },
  },
  {
    kind: "watch",
    title: "Keep the diagram open",
    text: "The book has a single illustration, a folding diagram facing page 117. Darwin explains it on pages 116 to 125 and sends you back to it in Chapters X and XIII.",
    pages: { from: 116, to: 125 },
  },
  {
    kind: "term",
    title: "“Struggle” is a metaphor",
    text: "Darwin means more than fighting. The phrase also covers depending on other living things and succeeding in leaving offspring.",
    pages: { from: 62, to: 62 },
    quote: "metaphor",
  },
  {
    kind: "watch",
    title: "He has no theory of inheritance",
    text: "Darwin says plainly that he does not know how traits are passed on. Where the argument leans on heredity, he is reasoning from what breeders observe, not from a mechanism.",
    pages: { from: 13, to: 13 },
    quote: "inheritance",
  },
  {
    kind: "watch",
    title: "The eye passage is an objection, not a verdict",
    text: "In Chapter VI Darwin states each objection at full strength before he answers it. His reply to this one begins in the very next sentence.",
    pages: { from: 186, to: 186 },
    quote: "eye",
  },
  {
    kind: "first",
    title: "Lost in a chapter? Read its last pages first",
    text: "Eight chapters end with a section headed Summary (IV to VIII, X, XII and XIII); those in X and XII also cover IX and XI. Chapter XIV recapitulates the whole book.",
    pages: { from: 459, to: 490 },
    quote: "argument",
  },
];

export type Insight = {
  kind: "theme" | "connection" | "missing";
  title: string;
  text: string;
  pages: PageSpan;
  quote?: QuoteId;
};

export const insights: readonly Insight[] = [
  {
    kind: "theme",
    title: "The book is itself a summary",
    text: "Darwin calls it an Abstract, warns that it must be imperfect and hopes to give the full evidence in a later work.",
    pages: { from: 1, to: 2 },
    quote: "abstract",
  },
  {
    kind: "connection",
    title: "One long argument in five moves",
    text: "Variation, struggle, selection, objections, descent. Each move builds on the ones before it, and Darwin himself calls the volume one long argument.",
    pages: { from: 459, to: 459 },
    quote: "argument",
  },
  {
    kind: "connection",
    title: "More than a quarter of the book argues against itself",
    text: "Chapters VI to IX set out the objections to the theory and answer them. That is 141 of the 490 pages of text.",
    pages: { from: 171, to: 311 },
  },
  {
    kind: "missing",
    title: "The word “evolution” never appears",
    text: "Neither does “survival of the fittest.” The closest this edition comes is its last word, “evolved.”",
    pages: { from: 490, to: 490 },
    quote: "grandeur",
  },
  {
    kind: "missing",
    title: "Human origins get one sentence",
    text: "The origin of man is mentioned directly once, near the end, and then left alone.",
    pages: { from: 488, to: 488 },
    quote: "man",
  },
];

export type Question = { question: string; answer: string; quote: QuoteId };

export const questions: readonly Question[] = [
  {
    question: "What does Darwin mean by “struggle for existence”?",
    answer: "More than fighting. The phrase also covers depending on other living things and leaving offspring.",
    quote: "metaphor",
  },
  {
    question: "Why is it called natural selection?",
    answer: "To mark its likeness to what breeders do when they choose which animals and plants to breed from.",
    quote: "name",
  },
  {
    question: "Does Darwin think the eye is too perfect to explain?",
    answer: "No. He states the objection at full strength, then answers it in the next sentence.",
    quote: "eye",
  },
  {
    question: "How does a useful variation reach the next generation?",
    answer: "By inheritance, though Darwin cannot say how it works. He writes that its laws are quite unknown and argues from what breeders observe.",
    quote: "inheritance",
  },
  {
    question: "What does the book say about human origins?",
    answer: "One sentence, which promises that light will be thrown on the subject.",
    quote: "man",
  },
  {
    question: "Where does Darwin sum up his own argument?",
    answer: "In Chapter XIV, which opens by calling the whole volume one long argument.",
    quote: "argument",
  },
];

export type KeyTerm = {
  term: string;
  gloss: string;
  firstPage: number;
  approxUses: number;
};

// Counted in the text of pages 1 to 490; show `approxUses` with "about".
export const keyTerms: readonly KeyTerm[] = [
  {
    term: "variation",
    gloss: "A difference between individuals of the same species.",
    firstPage: 3,
    approxUses: 173,
  },
  {
    term: "struggle for existence",
    gloss: "The effort to survive and leave offspring when more are born than can live, including relying on others.",
    firstPage: 4,
    approxUses: 24,
  },
  {
    term: "natural selection",
    gloss: "The keeping of variations that help and the loss of those that harm.",
    firstPage: 5,
    approxUses: 272,
  },
  {
    term: "incipient species",
    gloss: "Darwin’s name for a well-marked variety: a species in the making.",
    firstPage: 52,
    approxUses: 16,
  },
  {
    term: "divergence of character",
    gloss: "The tendency of descendants to grow less alike, and so to split into separate species.",
    firstPage: 5,
    approxUses: 20,
  },
  {
    term: "descent with modification",
    gloss: "Darwin’s phrase for what is now called evolution: species changing as they descend from earlier ones.",
    firstPage: 171,
    approxUses: 20,
  },
];
