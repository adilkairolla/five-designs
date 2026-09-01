export const product = {
  name: "Ratio Reader",
  tagline: "Read less. Understand more.",
  pitch:
    "Upload any PDF and Ratio Reader distills it into the summary, hints, quotes and insights that actually matter, so you understand the whole thing in a fraction of the time.",
};

export const steps = [
  {
    n: "01",
    title: "Upload a PDF",
    body: "Drop in a research paper, a contract, a textbook chapter or a 200-page annual report. Scanned or native, it all works.",
  },
  {
    n: "02",
    title: "We read every line",
    body: "Ratio Reader maps the document's structure, arguments and evidence, then ranks each passage by how much it carries the meaning.",
  },
  {
    n: "03",
    title: "You get the essence",
    body: "A layered summary you can expand, plus hints, verbatim quotes and insights, all linked back to the exact page they came from.",
  },
];

export const features = [
  {
    key: "summary",
    title: "Layered summary",
    short: "The whole document in one paragraph, one page, or one chapter. You choose the ratio.",
    long: "Slide between a one-sentence gist and a detailed chapter-by-chapter brief. Every level is written fresh, never truncated, so it always reads as a whole.",
  },
  {
    key: "hints",
    title: "Reading hints",
    short: "Know what to look for before you dive in.",
    long: "Hints flag the assumptions, definitions and turning points that make the rest of the text click, like a good professor telling you where to slow down.",
  },
  {
    key: "quotes",
    title: "Verbatim quotes",
    short: "The lines worth remembering, with page numbers.",
    long: "Never paraphrased. Each quote is pulled exactly as written and cited to the page, ready to drop into your notes, essay or slide deck.",
  },
  {
    key: "insights",
    title: "Insights & connections",
    short: "What it means, what it contradicts, what to read next.",
    long: "Ratio Reader surfaces the implications the author left implicit, spots tensions between sections, and suggests questions to test your understanding.",
  },
];

export const stats = [
  { value: "12×", label: "faster to the point" },
  { value: "94%", label: "of key claims retained" },
  { value: "2.1M", label: "pages distilled" },
  { value: "40+", label: "languages" },
];

export const testimonials = [
  {
    quote: "I read forty papers for my literature review in a weekend. Ratio's quotes came with page numbers, so citing was trivial.",
    name: "Dr. Lena Okafor",
    role: "Postdoc, computational biology",
  },
  {
    quote: "It's the first tool that tells me what to pay attention to before I read, not after. The hints alone are worth it.",
    name: "Marcus Feld",
    role: "Law student",
  },
  {
    quote: "Our analysts drop 300-page filings in and get a brief that's honest about what the document doesn't say.",
    name: "Priya Raman",
    role: "Head of research, Alder Capital",
  },
];

export const sampleDoc = {
  title: "Attention Is All You Need",
  pages: 15,
  words: 6_800,
  summary:
    "The paper proposes the Transformer, a sequence model built entirely on attention that drops recurrence and convolution. Multi-head self-attention lets every token look at every other token in parallel, which trains far faster and sets new translation benchmarks.",
  hints: [
    "Section 3.2 defines scaled dot-product attention. Understand the ÷√dₖ term first; everything else builds on it.",
    "Positional encoding (3.5) is the answer to 'how does it know word order without recurrence?'",
  ],
  quotes: [
    { text: "We propose a new simple network architecture, the Transformer, based solely on attention mechanisms.", page: 1 },
    { text: "Self-attention could yield more interpretable models.", page: 7 },
  ],
  insights: [
    "The real contribution is parallelism, not accuracy. The speedup is what made scaling to today's models possible.",
    "Table 3 quietly shows that reducing heads to one hurts quality, an early argument for multi-head design.",
  ],
};

export const pricing = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    features: ["5 documents a month", "Up to 50 pages each", "Summary and quotes", "Export to Markdown"],
    cta: "Start free",
  },
  {
    name: "Reader",
    price: "$12",
    period: "per month",
    features: ["Unlimited documents", "Up to 600 pages each", "Hints, quotes and insights", "Ask follow-up questions", "Notion and Obsidian export"],
    cta: "Start 14-day trial",
    highlight: true,
  },
  {
    name: "Team",
    price: "$39",
    period: "per seat / month",
    features: ["Everything in Reader", "Shared libraries", "Batch upload and API", "SSO and audit log", "Priority support"],
    cta: "Talk to us",
  },
];

export const faqs = [
  {
    q: "Does it work with scanned PDFs?",
    a: "Yes. Scanned pages are OCR'd first, then processed exactly like native text. Handwritten notes in the margin are ignored unless you ask for them.",
  },
  {
    q: "How is this different from pasting into a chatbot?",
    a: "Ratio Reader reads the whole document, not a window of it. Every quote is verbatim and cited. Summaries are layered, so you can zoom in without losing the thread.",
  },
  {
    q: "Is my document used for training?",
    a: "No. Files are encrypted at rest, processed in isolation, and deleted from processing servers within 24 hours. You can delete them from your library anytime.",
  },
  {
    q: "What file sizes are supported?",
    a: "Up to 600 pages or 100 MB per document on the Reader plan. Team plans can request higher limits.",
  },
];
