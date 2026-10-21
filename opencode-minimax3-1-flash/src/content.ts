export const product = {
  name: "Ratio Reader",
  shortName: "Ratio",
  tagline: "Read the part that matters.",
  promise:
    "Upload a PDF. Get back the summary, the hints, the quotes and the insights — in one short, layered digest.",
  cta: "Read your first PDF free",
  subCta: "No signup. Files are deleted after 24 hours.",
};

export const features = [
  {
    key: "summary",
    index: "01",
    title: "Summary",
    lead: "A five-minute read of a two-hundred-page document.",
    body: "Every PDF comes back as a layered digest: a one-paragraph answer to “what is this?”, then chapter-by-chapter breakdowns that expand only when you want them. Skim the top layer, drill into the rest.",
    detail: "Layered depth · page-linked · plain language",
  },
  {
    key: "hints",
    index: "02",
    title: "Hints",
    lead: "The words that stop you, explained where you trip.",
    body: "Jargon, acronyms, cross-references, historical context and citations get a quiet inline note right where they appear. No footnotes, no tab-switching to a second browser window at 2am.",
    detail: "Inline · context-aware · 40+ languages",
  },
  {
    key: "quotes",
    index: "03",
    title: "Quotes",
    lead: "The lines worth keeping, with the argument they support.",
    body: "Ratio Reader pulls the sharpest sentences out of your document and explains what each one is doing — the thesis, the concession, the turn. Every quote carries its page number and source link.",
    detail: "Ranked by impact · page-cited · exportable",
  },
  {
    key: "insights",
    index: "04",
    title: "Insights",
    lead: "The connections your document never spells out.",
    body: "Patterns, tensions and contradictions across the text, plus how it lines up with what you already know. Ask a follow-up question and the answer comes back grounded in the actual pages.",
    detail: "Cross-references · contradictions · follow-up Q&A",
  },
];

export const steps = [
  {
    number: "01",
    title: "Drop the PDF",
    body: "Drag in a file or paste a link. Scanned pages are read with OCR, so the scanned contract gets the same treatment as the born-digital one.",
  },
  {
    number: "02",
    title: "Ratio maps it",
    body: "The document is parsed into structure — sections, claims, citations, definitions — before a single word of the digest is written.",
  },
  {
    number: "03",
    title: "You read the digest",
    body: "Summary, hints, quotes and insights arrive together. Ask follow-ups, jump to the source page, then close the tab and keep the understanding.",
  },
];

export const stats = [
  { value: "2.4M", label: "pages digested" },
  { value: "11s", label: "median time to digest" },
  { value: "4", label: "insight layers per document" },
  { value: "40+", label: "languages supported" },
];

export const specs = [
  ["Input", "PDF, EPUB, DOCX, Markdown, scanned pages via OCR"],
  ["Output", "Layered summary, inline hints, ranked quotes, insights"],
  ["Time to digest", "11 seconds median for a 60-page paper"],
  ["Privacy", "Deleted after 24h. Never used to train models."],
  ["Team features", "Shared libraries, annotated digests, export to Notion & Obsidian"],
];

export const testimonials = [
  {
    quote:
      "I uploaded a 180-page policy PDF expecting to skim it. Ten minutes later I could brief the whole team on it without wrong pages being open on screen.",
    name: "Nadia Okonkwo",
    role: "Head of Research, Fieldnote",
  },
  {
    quote:
      "The hints are the part I didn't know I needed. It explains the acronym in the third paragraph of a contract before I can embarrass myself in the negotiation.",
    name: "Felix Amare",
    role: "Operations Lead, Northwind",
  },
  {
    quote:
      "It reads like a smart colleague sent me notes at 6am. The quotes alone save me an hour of writing.",
    name: "Mira Halvorsen",
    role: "Product Marketing, Kestrel",
  },
];

export const plans = [
  {
    name: "Reader",
    price: "Free",
    cadence: "forever",
    blurb: "For the occasional paper.",
    features: ["3 PDFs a month", "Summary + hints", "Page-cited quotes", "24h file retention"],
  },
  {
    name: "Plus",
    price: "$9",
    cadence: "per month",
    blurb: "For people who read a lot.",
    features: [
      "Unlimited PDFs",
      "All four insight layers",
      "Follow-up questions",
      "Exports to Notion, Obsidian, Markdown",
      "Library of saved digests",
    ],
    featured: true,
  },
  {
    name: "Team",
    price: "$15",
    cadence: "per user / month",
    blurb: "For teams that share research.",
    features: ["Everything in Plus", "Shared libraries", "Annotations & comments", "SSO + admin controls"],
  },
];

export const faqs = [
  {
    q: "Do you train on my documents?",
    a: "No. Your files are processed in isolation, never used to train any model, and permanently deleted within 24 hours. Team plans can pin retention to zero.",
  },
  {
    q: "What if the PDF is scanned or badly formatted?",
    a: "Ratio runs OCR and layout reconstruction first, so scanned contracts, slide decks and screenshot-heavy reports get the same structured digest as clean text.",
  },
  {
    q: "How accurate are the summaries?",
    a: "Every claim in a digest links back to the page it came from. If Ratio is unsure, it says so and shows the passage instead of guessing.",
  },
  {
    q: "Can I ask follow-up questions?",
    a: "Yes. Ask anything about the document in plain language and get an answer grounded in the original pages, with citations.",
  },
  {
    q: "Which languages are supported?",
    a: "More than 40, including English, Spanish, French, German, Portuguese, Hindi, Japanese, Arabic and Mandarin — and the output language follows the document unless you ask otherwise.",
  },
];

export const nav = ["Summary", "Hints", "Quotes", "Insights", "Pricing"];
