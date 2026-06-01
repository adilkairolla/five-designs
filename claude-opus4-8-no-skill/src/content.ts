// Shared marketing copy for the "Ratio Reader" landing pages.
// Every design imports from here so the messaging stays consistent
// while the art direction varies wildly between pages.

export const brand = {
  name: "Ratio Reader",
  short: "Ratio",
  domain: "ratioreader.com",
  // Headline variants — designs can pick whichever fits their tone.
  tagline: "Read less. Understand more.",
  taglineAlt: "Turn any PDF into pure understanding.",
  taglineAlt2: "The signal, without the noise.",
  subhead:
    "Upload a PDF and Ratio Reader distills it into a sharp summary, the quotes that matter, guided hints, and the insights you'd otherwise miss.",
  // One-liner for meta / hero kicker.
  kicker: "AI reading companion",
} as const;

export type Feature = {
  id: string;
  title: string;
  blurb: string;
  // lucide-react icon name — designs import the matching icon.
  icon: string;
};

export const features: Feature[] = [
  {
    id: "summary",
    title: "Instant summaries",
    blurb:
      "Distill any document down to what actually matters — the core argument in seconds, not hours.",
    icon: "ScrollText",
  },
  {
    id: "hints",
    title: "Smart hints",
    blurb:
      "Contextual nudges that guide you through dense passages so nothing important slips past.",
    icon: "Lightbulb",
  },
  {
    id: "quotes",
    title: "Key quotes",
    blurb:
      "The most important lines surfaced verbatim, sourced to the page, and ready to remember.",
    icon: "Quote",
  },
  {
    id: "insights",
    title: "Deeper insights",
    blurb:
      "Connections, implications, and takeaways the author left between the lines — made explicit.",
    icon: "Sparkles",
  },
];

export type Step = { n: number; title: string; blurb: string };

export const steps: Step[] = [
  {
    n: 1,
    title: "Upload your PDF",
    blurb:
      "Drag in a research paper, report, contract, or whole book. Up to 1,000 pages.",
  },
  {
    n: 2,
    title: "Ratio reads it",
    blurb:
      "Our model parses structure, weighs every section, and finds the load-bearing ideas.",
  },
  {
    n: 3,
    title: "Get your brief",
    blurb:
      "A clean summary plus quotes, hints, and insights — skimmable in two minutes.",
  },
];

export type Stat = { value: string; label: string };

export const stats: Stat[] = [
  { value: "10×", label: "faster than reading cover-to-cover" },
  { value: "4 hrs", label: "saved per long document, on average" },
  { value: "98%", label: "of key points retained in the summary" },
  { value: "1,000", label: "pages handled in a single upload" },
];

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "I get through three times the papers I used to. Ratio surfaces the argument and the caveats — I decide what to read in full.",
    name: "Dr. Lena Whitford",
    role: "Research scientist, neuroscience",
  },
  {
    quote:
      "Forty-page vendor contracts become a five-bullet brief with the clauses I actually need to push back on.",
    name: "Marcus Ardelean",
    role: "Operations lead",
  },
  {
    quote:
      "It's like having a brilliant friend who already read the book and tells you the parts worth your evening.",
    name: "Priya Raman",
    role: "Grad student, philosophy",
  },
];

export type Faq = { q: string; a: string };

export const faqs: Faq[] = [
  {
    q: "What kinds of PDFs work best?",
    a: "Anything text-heavy: research papers, business reports, legal documents, textbooks, and non-fiction. Scanned pages are handled with built-in OCR.",
  },
  {
    q: "Will it miss the nuance?",
    a: "Ratio keeps the caveats. Summaries preserve the author's qualifications and uncertainty, and every key quote links back to its exact page.",
  },
  {
    q: "Is my document private?",
    a: "Yes. Files are encrypted in transit and at rest, processed for your session only, and never used to train models.",
  },
  {
    q: "How long does it take?",
    a: "Most documents are ready in under thirty seconds. A 1,000-page book takes about two minutes.",
  },
];

export type Plan = {
  name: string;
  price: string;
  cadence: string;
  blurb: string;
  features: string[];
  cta: string;
  featured?: boolean;
};

export const plans: Plan[] = [
  {
    name: "Free",
    price: "$0",
    cadence: "forever",
    blurb: "For the occasional deep read.",
    features: ["5 documents / month", "Summaries & key quotes", "Up to 50 pages each"],
    cta: "Start free",
  },
  {
    name: "Pro",
    price: "$12",
    cadence: "per month",
    blurb: "For people who read for a living.",
    features: [
      "Unlimited documents",
      "Hints & deeper insights",
      "Up to 1,000 pages each",
      "Export to Markdown & Notion",
    ],
    cta: "Go Pro",
    featured: true,
  },
  {
    name: "Team",
    price: "$39",
    cadence: "per month",
    blurb: "Shared knowledge for the whole crew.",
    features: ["Everything in Pro", "Shared library", "5 seats included", "Priority processing"],
    cta: "Start a team",
  },
];

// Primary calls to action — reused across designs.
export const cta = {
  primary: "Upload your first PDF",
  primaryShort: "Try it free",
  secondary: "See how it works",
} as const;

// Metadata for the gallery / design switcher.
export type DesignMeta = {
  path: string;
  index: number;
  name: string;
  concept: string;
  palette: string[]; // hex swatches for the gallery preview
};

export const designIndex: DesignMeta[] = [
  {
    path: "/1",
    index: 1,
    name: "The Broadsheet",
    concept: "Editorial · literary print · warm paper & ink",
    palette: ["#F3ECDD", "#1A1714", "#8C2F1E", "#C9B79C"],
  },
  {
    path: "/2",
    index: 2,
    name: "Loud & Clear",
    concept: "Neo-brutalist · high-contrast · sticker energy",
    palette: ["#FFE600", "#0A0A0A", "#2F5BFF", "#FF5CA8"],
  },
  {
    path: "/3",
    index: 3,
    name: "Aurora",
    concept: "Dark futuristic · glass & glow · AI product",
    palette: ["#070713", "#7C5CFF", "#22D3EE", "#F0ABFC"],
  },
  {
    path: "/4",
    index: 4,
    name: "Grid",
    concept: "Swiss minimal · typographic · architectural",
    palette: ["#FFFFFF", "#111111", "#FF4D2E", "#EDEDED"],
  },
  {
    path: "/5",
    index: 5,
    name: "Soft Serve",
    concept: "Playful organic · claymorphic · friendly pastels",
    palette: ["#FFF4EC", "#FF8A5B", "#7C6CF0", "#37C8A8"],
  },
];
