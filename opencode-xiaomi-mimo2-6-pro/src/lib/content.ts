export const product = {
  name: "Ratio Reader",
  short: "Ratio",
  tagline: "Read less. Understand more.",
  description:
    "Upload any PDF and get the summary, the quotes, the hints, and the hidden structure — before you commit to reading it line by line.",
};

export const features = [
  {
    id: "summary",
    title: "Distilled summaries",
    short: "Summary",
    body: "The argument, the evidence, the conclusions — reduced to what actually matters. No filler paragraphs, no padded conclusions.",
  },
  {
    id: "hints",
    title: "Reading hints",
    short: "Hints",
    body: "Know what to look for before you start. Ratio flags the claims, the caveats, the buried ledes, and the places the author gets slippery.",
  },
  {
    id: "quotes",
    title: "Living quotes",
    short: "Quotes",
    body: "Every line worth keeping, extracted with its context and page number. Build a citation library as you skim.",
  },
  {
    id: "insights",
    title: "Insight maps",
    short: "Insights",
    body: "Themes, contradictions, and connections across the whole document — not just the first page and the conclusion.",
  },
];

export const steps = [
  {
    n: "01",
    title: "Drop the PDF",
    body: "Any length. Any language. Papers, reports, contracts, novels, filings — if it's a PDF, Ratio will take it.",
  },
  {
    n: "02",
    title: "Ratio reads every page",
    body: "Structure, arguments, quotes, and contradictions are mapped end to end. A 300-page report becomes a briefing.",
  },
  {
    n: "03",
    title: "Walk in prepared",
    body: "Open the summary. Scan the hints. Copy the quotes. Then read only what still needs reading — with your own eyes.",
  },
];

export const stats = [
  { value: "312", label: "pages in", unit: "avg. report" },
  { value: "12", label: "insights out", unit: "curated" },
  { value: "40", label: "min saved", unit: "per document" },
  { value: "94", label: "% claims found", unit: "recall" },
];

export const quotes = [
  {
    text: "I stopped printing papers I would never finish. Now I walk into the seminar with the argument already in my head.",
    name: "M. Okafor",
    role: "PhD candidate, comparative literature",
  },
  {
    text: "It is like having a research assistant who already did the reading — and underlined the good parts.",
    name: "L. Bergström",
    role: "Investigative journalist",
  },
  {
    text: "My students finally show up with opinions. They ran out of excuses the day we adopted this.",
    name: "Dr. A. Rahman",
    role: "Lecturer, political science",
  },
];

export const faqs = [
  {
    q: "What kind of PDFs work best?",
    a: "Anything with text. Research papers, annual reports, legal filings, manuals, books. Scanned documents work too when the scan is legible.",
  },
  {
    q: "Does Ratio replace reading?",
    a: "No — it replaces the first two hours. You still do the deep reading, but you do it on the parts that repay attention.",
  },
  {
    q: "How long does a document take?",
    a: "Most documents under 200 pages are ready in under a minute. Long books take a few. You can leave the tab — we'll ping you.",
  },
  {
    q: "Where do my files go?",
    a: "Processed in an isolated session and deleted after 24 hours unless you save them to a library. Nothing is used to train models.",
  },
];
