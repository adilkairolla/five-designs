export interface PdfQuote {
  id: string;
  page: number;
  paragraph: string;
  text: string;
  significance: string;
  relevanceScore: number;
}

export interface PdfHint {
  id: string;
  term: string;
  page: number;
  category: "Prerequisite" | "Hidden Assumption" | "Mental Model" | "Subtext";
  explanation: string;
  unlocksSection: string;
}

export interface PdfInsight {
  id: string;
  title: string;
  tag: string;
  thesis: string;
  implication: string;
  densityReduction: string;
}

export interface SamplePdfDocument {
  id: string;
  filename: string;
  title: string;
  author: string;
  year: string;
  domain: string;
  pages: number;
  wordCount: string;
  rawReadTime: string;
  ratioReadTime: string;
  signalRatio: string;
  rawExcerpt: string[];
  summariesByRatio: {
    executive: string;
    golden: string;
    deep: string;
  };
  coreTakeaways: string[];
  quotes: PdfQuote[];
  hints: PdfHint[];
  insights: PdfInsight[];
}

export const SAMPLE_PDFS: SamplePdfDocument[] = [
  {
    id: "attention-ecologies",
    filename: "epistemic_foraging_in_dense_texts_2026.pdf",
    title: "Epistemic Foraging & Cognitive Bandwidth in High-Density Literature",
    author: "Dr. Clara Vance & K. Takahashi (MIT Media Lab)",
    year: "2026",
    domain: "Cognitive Science",
    pages: 64,
    wordCount: "28,400 words",
    rawReadTime: "2h 15m",
    ratioReadTime: "9m 30s",
    signalRatio: "1 : 14.2",
    rawExcerpt: [
      "Whereas linear reading assumes uniform information entropy across paragraphs, empirical eye-tracking across 1,400 doctoral researchers demonstrates that 78.4% of conceptual novelty resides in structural transition nodes and methodological caveats.",
      "When readers encounter uncalibrated lexical density without scaffolding hints, working memory saturates within 11 minutes, inducing 'skimming drift'—a state where ocular fixation continues while semantic encoding drops below 18%.",
      "By pre-computing a multi-scale semantic skeleton—pairing distilled propositions with verbatim anchor quotes and just-in-time conceptual hints—comprehension retention at 30 days increases by 2.6x despite an 84% reduction in time-on-page."
    ],
    summariesByRatio: {
      executive:
        "78% of a paper's new value is concentrated in 14% of its paragraphs. Linear reading causes working-memory fatigue within 11 minutes; pairing hierarchical summaries with verbatim quotes and scaffolding hints boosts 30-day retention by 2.6x in one-seventh the time.",
      golden:
        "Vance & Takahashi prove that human comprehension fails on dense PDFs not from lack of effort, but from uniform pacing across non-uniform information entropy. Their 'Epistemic Foraging' model shows that readers who preview structural claims, anchor them to exact authorial quotes, and resolve unfamiliar terms via inline hints retain 260% more after 30 days while cutting reading time from 135 minutes to under 10 minutes.",
      deep:
        "Across 1,400 researchers reading 60-page monographs, ocular tracking revealed 'skimming drift' after 11 minutes of unassisted reading. The authors introduce a tri-layer reading protocol: (1) Ratio Compression to isolate high-entropy claims, (2) Contextual Hint Injection to decode domain jargon before working memory stalls, and (3) Verbatim Quote Tethering so readers never hallucinate or lose the author's original nuance."
    },
    coreTakeaways: [
      "Information entropy in academic & technical PDFs follows a steep power law: 14% of clauses carry 78% of causal weight.",
      "Unassisted reading triggers 'skimming drift' at minute 11—your eyes move across lines while encoding drops below 18%.",
      "Just-in-time hints resolve domain bottlenecks 4.3x faster than switching tabs to search external definitions.",
      "Anchoring summaries to verbatim page-cited quotes prevents the 'gist distortion' common in standard AI summaries."
    ],
    quotes: [
      {
        id: "q-1",
        page: 14,
        paragraph: "§2.3",
        text: "Skimming is not a moral failure of attention; it is a rational foraging response to unindexed typographic walls.",
        significance: "Reframes why readers abandon dense PDFs and establishes the thesis for non-linear structural reading.",
        relevanceScore: 99
      },
      {
        id: "q-2",
        page: 29,
        paragraph: "§4.1",
        text: "A summary severed from the author's exact syntax is a rumor; a summary tethered to verbatim quotes is an instrument.",
        significance: "Explains why Ratio Reader pairs every compressed claim with an exact, clickable PDF quote.",
        relevanceScore: 96
      },
      {
        id: "q-3",
        page: 47,
        paragraph: "§6.2",
        text: "One well-timed conceptual hint at the threshold of a dense theorem saves 19 minutes of downstream misinterpretation.",
        significance: "Quantifies the leverage of proactive margin hints over passive dictionary lookup.",
        relevanceScore: 93
      }
    ],
    hints: [
      {
        id: "h-1",
        term: "Information Entropy Gradient",
        page: 8,
        category: "Prerequisite",
        explanation: "Think of a PDF like a mountain range: boilerplate introductions are flat plains (low entropy), while methodological limitations and novel proofs are sharp peaks (high entropy).",
        unlocksSection: "Section 2: Why Linear Reading Fails"
      },
      {
        id: "h-2",
        term: "Skimming Drift",
        page: 19,
        category: "Mental Model",
        explanation: "The illusion of reading when your eyes track every word on a page, yet you reach the bottom and cannot recall a single argument.",
        unlocksSection: "Section 3: Ocular Telemetry Findings"
      },
      {
        id: "h-3",
        term: "Control Group Baseline",
        page: 34,
        category: "Hidden Assumption",
        explanation: "The study tested doctoral candidates reading outside their primary sub-specialty—meaning the findings apply strongest when you tackle unfamiliar or cross-disciplinary PDFs.",
        unlocksSection: "Section 5: Retention Benchmarks"
      }
    ],
    insights: [
      {
        id: "i-1",
        title: "The Paradox of Completeness",
        tag: "Counter-Intuitive",
        thesis: "Reading 100% of words in sequence yields lower comprehension than reading 18% of structurally selected nodes with hints.",
        implication: "Stop treating PDFs like novels. Read radially from high-leverage claims outward.",
        densityReduction: "91% less cognitive load"
      },
      {
        id: "i-2",
        title: "Syntax Carries Epistemic Weight",
        tag: "Methodological",
        thesis: "Paraphrased bullet points strip away hedging words ('may', 'under constrained regimes') that reverse a paper's real conclusion.",
        implication: "Always pair macro-summaries with verbatim quotes from the Limitations section.",
        densityReduction: "Zero nuance loss"
      },
      {
        id: "i-3",
        title: "Pre-Emptive Scaffolding",
        tag: "Cognitive Leverage",
        thesis: "Seeing a 2-sentence hint *before* a complex diagram prevents working-memory eviction.",
        implication: "Read Ratio Reader's Hints rail for 45 seconds before diving into any technical proof.",
        densityReduction: "4.3x faster synthesis"
      }
    ]
  },
  {
    id: "sovereign-compute",
    filename: "global_grid_bottlenecks_and_compute_2026_q3.pdf",
    title: "Thermodynamics of Sovereign Compute: Grid Bottlenecks 2026–2030",
    author: "Aethelgard Macro Research Group",
    year: "2026",
    domain: "Macro & Infrastructure",
    pages: 112,
    wordCount: "54,900 words",
    rawReadTime: "4h 10m",
    ratioReadTime: "14m 00s",
    signalRatio: "1 : 17.8",
    rawExcerpt: [
      "While equity markets price silicon wafer allocation as the binding constraint on frontier cluster scaling, transformer substation queues in North America and Northern Europe have quietly extended to 58 months.",
      "Consequently, megawatt-hour time-to-power—rather than FLOPs-per-dollar—now governs the marginal internal rate of return across hyperscale capital expenditure.",
      "Decommissioned industrial smelting sites with legacy high-voltage interconnects command a 340% valuation premium over greenfield land parcels."
    ],
    summariesByRatio: {
      executive:
        "Power interconnect queues (58 months), not GPU supply, are the true bottleneck for AI infrastructure through 2030. Legacy industrial brownfield sites with existing high-voltage substations command a 3.4x valuation premium.",
      golden:
        "Across 112 pages of utility filings, Aethelgard demonstrates that capital expenditure has shifted from silicon scarcity to transformer and transmission scarcity. Investors focusing on chip fabrication miss that 62% of announced 2027 clusters lack firm grid energized dates—creating massive arbitrage in legacy industrial real estate with pre-existing high-voltage interconnects.",
      deep:
        "By auditing 410 utility interconnection queues across PJM, ERCOT, and NordPool, the report exposes a structural mismatch: silicon product cycles turn every 18 months while high-voltage step-down transformers require 46–58 months of lead time. The authors model three winners: brownfield aluminum/steel sites, behind-the-meter modular turbines, and voltage-regulating grid software."
    },
    coreTakeaways: [
      "High-voltage transformer lead times have stretched from 14 months (2021) to 58 months (2026).",
      "62% of announced hyperscale data center megawatts for 2027 lack firm utility energization contracts.",
      "Retired smelting & paper mill sites with existing 345kV lines trade at 340% premiums over raw land.",
      "Behind-the-meter generation bridges the 4-year utility queue gap at a $24/MWh premium that still clears IRR hurdles."
    ],
    quotes: [
      {
        id: "q-201",
        page: 22,
        paragraph: "§1.4",
        text: "Silicon depreciates in thirty-six months; a 500-kilovolt substation permit takes fifty-eight. The physics of copper has veto power over the roadmap of code.",
        significance: "The single most cited thesis sentence in the entire 112-page macro report.",
        relevanceScore: 99
      },
      {
        id: "q-202",
        page: 67,
        paragraph: "§5.2",
        text: "We are witnessing the repricing of rust-belt substations as tier-one digital beachfront.",
        significance: "Captures the real-estate rotation toward retired heavy-industry interconnects.",
        relevanceScore: 95
      },
      {
        id: "q-203",
        page: 94,
        paragraph: "§8.1",
        text: "Footnote 44: Queue withdrawal penalties were tripled in Q1, yet speculative duplicate filings still represent 41% of headline gigawatt demand.",
        significance: "Buried in a footnote on page 94: headline utility demand numbers are inflated by ~41%.",
        relevanceScore: 97
      }
    ],
    hints: [
      {
        id: "h-201",
        term: "Behind-the-Meter (BTM)",
        page: 15,
        category: "Prerequisite",
        explanation: "Power generated and consumed directly on-site without passing through the public regulated transmission grid—bypassing multi-year utility approval queues.",
        unlocksSection: "Section 3: Bypassing Transmission Queues"
      },
      {
        id: "h-202",
        term: "Phantom Queue Capacity",
        page: 94,
        category: "Hidden Assumption",
        explanation: "Developers submit 3–4 requests for the same project across different counties to see which approves fastest, inflating headline power shortage charts.",
        unlocksSection: "Section 8: Bear Case on Utility Demand"
      },
      {
        id: "h-203",
        term: "Grain-Oriented Electrical Steel (GOES)",
        page: 41,
        category: "Subtext",
        explanation: "The specialized magnetic steel inside every large grid transformer; only a handful of mills globally produce it, creating the true manufacturing bottleneck.",
        unlocksSection: "Section 4: Supply Chain Anatomy"
      }
    ],
    insights: [
      {
        id: "i-201",
        title: "The Footnote 44 Distortion",
        tag: "Buried Signal",
        thesis: "Page 94's footnote quietly admits 41% of utility queue applications are duplicate speculative placeholders.",
        implication: "Consensus demand forecasts are overstated by nearly half; only under-construction substations count.",
        densityReduction: "Found on p.94 of 112"
      },
      {
        id: "i-202",
        title: "Time-to-Power Beats Cost-of-Power",
        tag: "Economic Flip",
        thesis: "Paying 2x for electricity today beats waiting 36 months for cheap hydro when GPU clusters depreciate at 30%/year.",
        implication: "Speed of energization dominates energy unit cost in cluster economics.",
        densityReduction: "18 tables distilled"
      },
      {
        id: "i-203",
        title: "Metallurgy is the Hidden Choke Point",
        tag: "Second-Order Effect",
        thesis: "Transformer delays trace back to Grain-Oriented Electrical Steel capacity, not assembly labor.",
        implication: "Track specialty steel capacity to forecast when grid bottlenecks actually ease.",
        densityReduction: "Cross-referenced §4 & §7"
      }
    ]
  },
  {
    id: "poetics-of-proportion",
    filename: "muller_brockmann_grid_and_cognition_1981_scan.pdf",
    title: "The Architecture of the Page: Proportion as a Cognitive Instrument",
    author: "Prof. Lukas H. Brennwald (ETH Zürich Archive)",
    year: "1984 / Restored OCR",
    domain: "Design Theory & Typography",
    pages: 88,
    wordCount: "36,200 words",
    rawReadTime: "2h 50m",
    ratioReadTime: "11m 00s",
    signalRatio: "1 : 15.4",
    rawExcerpt: [
      "The margin is not passive leftover paper; it is the acoustic chamber in which the printed proposition resonates and is interrogated by the reader's pencil.",
      "When typographic hierarchy collapses into uniform gray blocks, the eye is deprived of spatial landmarks, forcing sequential decoding where synoptic comprehension was intended.",
      "Every classical codex understood that commentary, gloss, and aphorism must orbit the primary text in proportional harmonic ratios—1:1.618, 2:3, 3:5—so the mind perceives structure before parsing syllables."
    ],
    summariesByRatio: {
      executive:
        "Great page architecture uses margins, harmonic ratios, and surrounding glosses so readers perceive argument structure before reading individual words. Uniform blocks of text destroy spatial memory.",
      golden:
        "Brennwald's archival monograph argues that Renaissance and Swiss typographers treated the page as a spatial knowledge engine. By surrounding core arguments with proportional margins, compressed glosses, and extracted maxims, the reader builds an immediate mental map—an ancient technique that modern flat PDFs accidentally erased.",
      deep:
        "Examining 400 years of scholarly book design from Aldus Manutius to Josef Müller-Brockmann, Brennwald shows that comprehension depends on 'synoptic geometry'—the interplay between primary prose, marginal hints, and distilled aphorisms. Ratio Reader digitally restores this lost multi-layered codex architecture for any PDF."
    },
    coreTakeaways: [
      "Spatial landmarks on a page account for 60% of how readers recall where an argument lived.",
      "Renaissance scholarly books placed summaries and hints directly in the margins ('glosses') rather than hiding them at the end.",
      "Modern PDFs flattened rich multi-scale book layouts into uniform scrolling columns, degrading deep reading.",
      "Proportional visual hierarchy lets the brain grasp the shape of an argument before decoding every sentence."
    ],
    quotes: [
      {
        id: "q-301",
        page: 11,
        paragraph: "§1.1",
        text: "The margin is not passive leftover paper; it is the acoustic chamber in which the printed proposition resonates.",
        significance: "Defines the philosophical inspiration behind Ratio Reader's Hints & Insights rail.",
        relevanceScore: 98
      },
      {
        id: "q-302",
        page: 43,
        paragraph: "§3.4",
        text: "To understand a book swiftly, one must first see its skeleton from ten paces away, then inspect its joints with a jeweler's loupe.",
        significance: "Captures the dual necessity of high-level summary (skeleton) and verbatim quotes (loupe).",
        relevanceScore: 97
      },
      {
        id: "q-303",
        page: 76,
        paragraph: "§6.1",
        text: "When every paragraph carries identical visual weight, the urgent truth and the polite digression become indistinguishable.",
        significance: "Critiques raw unparsed documents and justifies Ratio signal scoring.",
        relevanceScore: 94
      }
    ],
    hints: [
      {
        id: "h-301",
        term: "Marginal Gloss (Glossa Ordinaria)",
        page: 18,
        category: "Prerequisite",
        explanation: "In medieval and Renaissance manuscripts, scholars wrote short explanations and definitions directly around the main text so future readers wouldn't get lost.",
        unlocksSection: "Chapter 2: The Living Margin"
      },
      {
        id: "h-302",
        term: "Synoptic vs. Sequential Reading",
        page: 39,
        category: "Mental Model",
        explanation: "Sequential reading processes word 1, word 2, word 3 in a line; synoptic reading sees the whole map of claims, counter-arguments, and evidence simultaneously.",
        unlocksSection: "Chapter 4: Spatial Cognition"
      },
      {
        id: "h-303",
        term: "Canon of Page Construction",
        page: 52,
        category: "Subtext",
        explanation: "A geometric method using diagonal lines across a two-page spread to divide text area and whitespace into golden or harmonic ratios (2:3:4:6).",
        unlocksSection: "Chapter 5: Harmonic Grids"
      }
    ],
    insights: [
      {
        id: "i-301",
        title: "PDFs Broke 500 Years of Book Ergonomics",
        tag: "Historical Insight",
        thesis: "Early printed books had built-in summaries and margin hints; 20th-century office PDFs stripped them out for printer convenience.",
        implication: "Ratio Reader isn't replacing reading—it's restoring the lost scholarly apparatus of the codex.",
        densityReduction: "88 pages synthesized"
      },
      {
        id: "i-302",
        title: "The Skeleton-and-Loupe Principle",
        tag: "Reading Strategy",
        thesis: "Comprehension peaks when you oscillate between a 10,000-foot thesis map and 1:1 verbatim quote inspection.",
        implication: "Never read a summary without checking its anchor quotes; never read raw pages without a structural map.",
        densityReduction: "Dual-scale clarity"
      },
      {
        id: "i-303",
        title: "Visual Proportion Calms Cognitive Anxiety",
        tag: "UX Psychology",
        thesis: "Clear proportional ratios between summary, hints, and source text reduce perceived reading overwhelm by 72%.",
        implication: "Design and typography are directly upstream of comprehension speed.",
        densityReduction: "1:1.618 harmony"
      }
    ]
  }
];
