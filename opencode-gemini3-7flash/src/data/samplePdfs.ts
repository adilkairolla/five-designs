export interface QuoteItem {
  id: string;
  quote: string;
  author: string;
  page: number;
  paragraph: number;
  context: string;
  verified: boolean;
}

export interface HintItem {
  id: string;
  term: string;
  simplified: string;
  whyItMatters: string;
  level: "Beginner" | "Intermediate" | "Deep Dive";
}

export interface SampleDocument {
  id: string;
  title: string;
  author: string;
  category: string;
  originalPages: number;
  originalWordCount: number;
  originalReadTimeMinutes: number;
  color: string;
  summaryUltra: {
    readTimeMinutes: number;
    thesis: string;
    bullets: string[];
    killerTakeaway: string;
  };
  summaryBalanced: {
    readTimeMinutes: number;
    thesis: string;
    sections: {
      heading: string;
      content: string;
      keyQuoteId?: string;
    }[];
    actionItems: string[];
  };
  summaryDeep: {
    readTimeMinutes: number;
    thesis: string;
    sections: {
      heading: string;
      content: string;
      deepInsights: string[];
    }[];
  };
  quotes: QuoteItem[];
  hints: HintItem[];
  quizQuestions: {
    question: string;
    options: string[];
    correctIndex: number;
    explanation: string;
  }[];
}

export const SAMPLE_DOCUMENTS: SampleDocument[] = [
  {
    id: "deep-attention",
    title: "Attention Mechanisms & Cognitive Bandwidth",
    author: "Dr. Alistair Thorne, MIT Media Lab",
    category: "AI & Cognitive Science",
    originalPages: 54,
    originalWordCount: 18400,
    originalReadTimeMinutes: 75,
    color: "#6366F1",
    summaryUltra: {
      readTimeMinutes: 3,
      thesis: "Human attention behaves mathematically like transformer multi-head attention: fixed compute budget distributed across sensory inputs. Modern notifications trigger constant context-switching thrash, reducing raw cognitive throughput by up to 64%.",
      bullets: [
        "Human cognitive working memory operates on a finite 4-token parallel register.",
        "Asynchronous batching (blocking deep work intervals) restores neural focus 3.2x faster than staggered multitasking.",
        "Ratio compression enables readers to acquire high-order mental models without paying the working-memory tax of syntactic filler."
      ],
      killerTakeaway: "You don't suffer from a lack of focus; you suffer from excessive context bandwidth entropy."
    },
    summaryBalanced: {
      readTimeMinutes: 8,
      thesis: "A rigorous mathematical and biological review demonstrating that synthetic text compression mirrors biological synaptic pruning—allowing rapid knowledge ingestion without cognitive exhaustion.",
      sections: [
        {
          heading: "1. The Context Switching Tax",
          content: "Every micro-distraction induces a 23-minute cognitive latency before the prefrontal cortex restores full associative synthesis. In dense academic text, 70% of word count is syntactical glue rather than novel semantic signal.",
          keyQuoteId: "q1"
        },
        {
          heading: "2. The Golden Ratio of Synthesis (80/20)",
          content: "Extensive empirical trials across 1,200 researchers showed that reading 15% distilled summaries with contextual hints yielded higher 30-day retention than reading 100% of the raw uncompressed manuscripts.",
          keyQuoteId: "q2"
        },
        {
          heading: "3. Margin Anchors & Semantic Cues",
          content: "Dynamic terminology glosses positioned at the reader's eye-line eliminate saccadic disorientation and sustain continuous flow state across complex mathematical formulations."
        }
      ],
      actionItems: [
        "Compress dense technical PDFs by 80% before deep-reading.",
        "Anchor complex domain terms to real-world analogies immediately.",
        "Review verified page-pinned citations instead of re-reading full chapters."
      ]
    },
    summaryDeep: {
      readTimeMinutes: 16,
      thesis: "Comprehensive architectural comparison between bio-neural information retrieval and generative token distillation paradigms.",
      sections: [
        {
          heading: "Chapter I: Information Entropy in Technical Publishing",
          content: "Academic papers have increased in length by 240% since 1980, while semantic information density per page has declined by 41%. Authors over-pad text to meet institutional length criteria.",
          deepInsights: [
            "Passive voice structures add 34% token bloat without altering semantic truth.",
            "Visual diagrams and structured bullet matrices accelerate conceptual encoding by 4.8x."
          ]
        },
        {
          heading: "Chapter II: The Neural Decompressor Mechanism",
          content: "Ratio Reader functions as an external cortical pre-processor, performing semantic extraction, jargon flattening, and thesis isolation in real time.",
          deepInsights: [
            "Preserves exact quote fidelity with cryptographic page citations.",
            "Eliminates hallucination risk by bounding synthesis strictly to source document vectors."
          ]
        }
      ]
    },
    quotes: [
      {
        id: "q1",
        quote: "The true bottleneck of 21st-century intellect is not information scarcity, but the cognitive bandwidth required to parse syntactic fluff.",
        author: "Dr. Alistair Thorne",
        page: 14,
        paragraph: 3,
        context: "Section 2.4: Cognitive Load Limits in Knowledge Workers",
        verified: true
      },
      {
        id: "q2",
        quote: "When text is compressed to its mathematical core, comprehension improves because working memory is freed to build associative mental models.",
        author: "Dr. Alistair Thorne",
        page: 29,
        paragraph: 2,
        context: "Section 4.1: Empirical Retention Studies",
        verified: true
      },
      {
        id: "q3",
        quote: "A single well-anchored hint at the margin saves the mind from 15 minutes of tangential disorientation.",
        author: "Dr. Alistair Thorne",
        page: 42,
        paragraph: 1,
        context: "Section 5.3: Visual Scaffolding",
        verified: true
      }
    ],
    hints: [
      {
        id: "h1",
        term: "Saccadic Disorientation",
        simplified: "When your eyes lose their place or stutter on dense jargon, breaking your mental flow.",
        whyItMatters: "Ratio Reader eliminates this with high-contrast structural hierarchy.",
        level: "Beginner"
      },
      {
        id: "h2",
        term: "Context Switching Thrash",
        simplified: "The mental friction caused by jumping between footnotes, tabs, and google searches.",
        whyItMatters: "Integrated margin hints keep you 100% inside the document.",
        level: "Intermediate"
      },
      {
        id: "h3",
        term: "Synaptic Pruning",
        simplified: "The brain's natural method of deleting noise to strengthen core pathways.",
        whyItMatters: "Our AI summary mirrors this exact biological optimization.",
        level: "Deep Dive"
      }
    ],
    quizQuestions: [
      {
        question: "According to the paper, what percentage of dense technical text is syntactic filler vs core signal?",
        options: ["Around 20%", "Roughly 50%", "Over 70%", "Under 10%"],
        correctIndex: 2,
        explanation: "Research revealed up to 70% of academic text serves syntactic buffering rather than primary insight transmission."
      },
      {
        question: "How much longer are academic papers today compared to 1980?",
        options: ["50% longer", "120% longer", "240% longer", "No difference"],
        correctIndex: 2,
        explanation: "Chapter I notes a 240% expansion in page count while signal density actually decreased."
      }
    ]
  },
  {
    id: "antifragile-capital",
    title: "Asymmetric Upside & Convex Risk in Modern Markets",
    author: "Elena Rostova, Managing Partner, Volatility Alpha",
    category: "Finance & Strategy",
    originalPages: 82,
    originalWordCount: 29500,
    originalReadTimeMinutes: 120,
    color: "#10B981",
    summaryUltra: {
      readTimeMinutes: 4,
      thesis: "Predicting market crises is mathematically impossible; designing portfolio structures that gain from chaos and macro volatility is both deterministic and highly lucrative.",
      bullets: [
        "Fragile systems break under unexpected variance; antifragile systems capture outsized gains.",
        "80% of quarterly earnings reports contain boilerplate legal hedges with zero informational value.",
        "Instant PDF extraction extracts hidden debt covenants and revenue deceleration buried in footnotes."
      ],
      killerTakeaway: "Don't forecast the weather; build an ark that turns hurricane winds into kinetic propulsion."
    },
    summaryBalanced: {
      readTimeMinutes: 9,
      thesis: "A practical framework for executives and analysts to dissect 100+ page financial disclosures in under 10 minutes without missing critical liabilities.",
      sections: [
        {
          heading: "1. Footnote Forensic Analysis",
          content: "The most dangerous risks are never on page 1 of an annual report. They are concealed on page 74 under 'Contingent Commitments and Leases'.",
          keyQuoteId: "q4"
        },
        {
          heading: "2. The Convexity Principle",
          content: "Asymmetric bets offer capped downside with uncapped exponential upside. Identifying these requires isolating non-linear catalysts in earnings call transcripts.",
          keyQuoteId: "q5"
        }
      ],
      actionItems: [
        "Feed 10-K filings into Ratio Reader for instant footnote risk scoring.",
        "Generate quote matrices comparing executive forward guidance against audited balance sheets."
      ]
    },
    summaryDeep: {
      readTimeMinutes: 18,
      thesis: "Mathematical proofs and empirical trading logs from 2008 to 2025 detailing non-linear exposure strategies.",
      sections: [
        {
          heading: "Section I: The Illusion of Quantitative Precision",
          content: "Gaussian bell curves fail in fat-tailed systems. Over-reliance on standard deviation models creates catastrophic systemic blindspots.",
          deepInsights: [
            "Tail risk events occur 18x more frequently than normal distribution predicts.",
            "Synthesized ratio highlights pinpoint tail vulnerability in corporate balance sheets in seconds."
          ]
        }
      ]
    },
    quotes: [
      {
        id: "q4",
        quote: "The CEO writes the executive letter for the press; the lawyers write the footnotes for survival. Always read the footnotes first.",
        author: "Elena Rostova",
        page: 31,
        paragraph: 4,
        context: "Chapter 3: Detecting Corporate Narrative Distortions",
        verified: true
      },
      {
        id: "q5",
        quote: "True antifragility is having more upside than downside from random shocks. It is structural, not psychic.",
        author: "Elena Rostova",
        page: 58,
        paragraph: 1,
        context: "Chapter 6: Designing Convex Balance Sheets",
        verified: true
      }
    ],
    hints: [
      {
        id: "h4",
        term: "Convexity",
        simplified: "A payoff structure where mistakes cost very little, but wins pay off massively.",
        whyItMatters: "Key principle for risk management in fast-changing environments.",
        level: "Intermediate"
      },
      {
        id: "h5",
        term: "Fat-Tailed Distribution",
        simplified: "Rare, extreme events (like market crashes) happen far more often than standard math predicts.",
        whyItMatters: "Why traditional reading of averages misses the critical shock warnings.",
        level: "Deep Dive"
      }
    ],
    quizQuestions: [
      {
        question: "Where are the most critical corporate liabilities typically concealed according to the text?",
        options: ["The CEO's opening letter", "Page 1 revenue summaries", "The deep footnotes and appendices", "The marketing slide deck"],
        correctIndex: 2,
        explanation: "Footnotes under contingent liabilities frequently conceal the actual downside risks."
      }
    ]
  },
  {
    id: "stoic-time",
    title: "On the Ephemerality of Attention & The Golden Hours",
    author: "Marcus Aurelius & Modern Cognitive Commentators",
    category: "Philosophy & Daily Life",
    originalPages: 38,
    originalWordCount: 14200,
    originalReadTimeMinutes: 60,
    color: "#F59E0B",
    summaryUltra: {
      readTimeMinutes: 2,
      thesis: "We are not given a short life, but we make it short by wasting it on uncurated triviality. Reading everything is a form of cognitive greed; reading the distilled essence is intellectual reverence.",
      bullets: [
        "People protect their physical property with iron gates, yet gladly surrender their hours to uncurated documents.",
        "Quality of mind is determined by the signal ratio of your inputs.",
        "Filter ruthlessly so you may contemplate deeply."
      ],
      killerTakeaway: "It is not that we have so little time to read, but that we lose so much of it to noise."
    },
    summaryBalanced: {
      readTimeMinutes: 6,
      thesis: "Timeless classical maxims re-interpreted for the algorithmic era of infinite digital documents and reading exhaustion.",
      sections: [
        {
          heading: "1. The Tyranny of the Unread Stack",
          content: "Guilt from accumulating unread PDFs paralyzes deep thinking. Converting the backlog into curated Ratio Briefs releases creative agency.",
          keyQuoteId: "q6"
        },
        {
          heading: "2. The Art of Essential Extraction",
          content: "To read a masterwork is not to memorize every conjunction, but to engrave the 3 core mental models into your intuition.",
          keyQuoteId: "q7"
        }
      ],
      actionItems: [
        "Transform 20 backlog PDFs into 10-minute morning reflection briefs.",
        "Save 5 verified quotes to your personal digital commonplace book daily."
      ]
    },
    summaryDeep: {
      readTimeMinutes: 12,
      thesis: "Deep textual analysis connecting Senecan epistolary wisdom with 21st-century information theory.",
      sections: [
        {
          heading: "Book I: The Economy of Mind",
          content: "No person can become wise while drinking from every muddy stream. Drink from the distilled spring.",
          deepInsights: [
            "Intentional reading requires deliberate compression.",
            "Clarity is an act of courage against verbose complexity."
          ]
        }
      ]
    },
    quotes: [
      {
        id: "q6",
        quote: "You act like mortals in all that you fear, and like immortals in all that you desire to read and know.",
        author: "Seneca / Epistles",
        page: 9,
        paragraph: 2,
        context: "Letter XLIX: On the Shortness of Our Days",
        verified: true
      },
      {
        id: "q7",
        quote: "Limit yourself to a few authors whose minds you wish to inhabit; wandering among many breeds restlessness, not wisdom.",
        author: "Classical Annotation",
        page: 22,
        paragraph: 3,
        context: "Discourse III: The Solitude of Thought",
        verified: true
      }
    ],
    hints: [
      {
        id: "h6",
        term: "Commonplace Book",
        simplified: "A personal notebook where you collect distilled quotes, lessons, and insights.",
        whyItMatters: "Ratio Reader generates an automatic digital commonplace export for every PDF.",
        level: "Beginner"
      }
    ],
    quizQuestions: [
      {
        question: "According to Seneca's paradox, how do people treat their time compared to their property?",
        options: ["They guard time fiercely", "They squander time freely while guarding property with gates", "They value both equally", "They ignore physical wealth"],
        correctIndex: 1,
        explanation: "Seneca famously observed people are miserly with money but reckless with their priceless hours."
      }
    ]
  }
];

export const HOW_IT_WORKS_STEPS = [
  {
    step: "01",
    title: "Upload Any PDF or Doc",
    desc: "Drop research papers, 300-page textbooks, legal briefs, earnings reports, or dense books. Instant OCR & structure parsing.",
    icon: "UploadCloud",
    highlight: "Processes 200 pages in 3.4 seconds"
  },
  {
    step: "02",
    title: "Dial Your Custom Ratio",
    desc: "From 10:1 (executive briefing in 2 mins) to 3:1 (deep chapter-by-chapter mastery). You control the compression dial.",
    icon: "Sliders",
    highlight: "Smart adaptive density slider"
  },
  {
    step: "03",
    title: "Instant Clarity & Insights",
    desc: "Receive structured summaries, contextual margin hints for complex jargon, and verified page-pinned quote anchors.",
    icon: "Sparkles",
    highlight: "100% verified citations, 0% hallucinations"
  },
  {
    step: "04",
    title: "Audio Briefs & Commonplace Export",
    desc: "Listen on the go with studio AI voices, or export formatted notes to Notion, Obsidian, Slack, and Anki flashcards.",
    icon: "Headphones",
    highlight: "1-click export to your second brain"
  }
];

export const TESTIMONIALS = [
  {
    name: "Dr. Maya Lin",
    role: "Neuroscience Researcher, Stanford",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&h=200&q=80",
    quote: "Ratio Reader cut my weekly literature review time from 18 hours to under 3 hours. The margin hints for domain-crossing jargon are pure genius.",
    rating: 5,
    pagesRead: "1,420 pages saved this month"
  },
  {
    name: "Julian Vance",
    role: "Principal, Apex Venture Capital",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&h=200&q=80",
    quote: "I run every 100-page prospectus and S-1 through Ratio Reader before partner meetings. The verified quote bookmarks give me instant courtroom-level confidence.",
    rating: 5,
    pagesRead: "84 documents compressed"
  },
  {
    name: "Soraya Chen",
    role: "LL.M Candidate & Legal Clerk",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&h=200&q=80",
    quote: "Reading 400 pages of antitrust jurisprudence a week used to feel like drowning. Now I extract key holdings, precedents, and razor-sharp quotes effortlessly.",
    rating: 5,
    pagesRead: "3,200 pages analyzed"
  }
];

export const PRICING_TIERS = [
  {
    name: "Free Explorer",
    price: "$0",
    period: "forever",
    description: "Perfect for students and casual curious readers.",
    features: [
      "Up to 5 PDF uploads / month",
      "Standard 80% compression ratio",
      "Essential margin jargon hints",
      "Verified quote citations",
      "Export to Markdown & PDF"
    ],
    cta: "Start Reading Free",
    popular: false
  },
  {
    name: "Pro Scholar",
    price: "$14",
    period: "/ month",
    description: "For researchers, executives, analysts & power readers.",
    features: [
      "Unlimited PDF & EPUB uploads",
      "Dynamic ratio slider (10% to 90%)",
      "Deep contextual jargon decoders",
      "Natural AI Audio Briefs (Studio voices)",
      "Instant 1-click sync to Notion & Obsidian",
      "Interactive knowledge mind-maps & quizzes",
      "Priority document OCR & mathematical formulas"
    ],
    cta: "Start 14-Day Free Trial",
    popular: true
  },
  {
    name: "Team & Enterprise",
    price: "$39",
    period: "/ seat / month",
    description: "For investment teams, law firms, and research labs.",
    features: [
      "Shared team PDF library & annotations",
      "Custom domain taxonomy & jargon dictionaries",
      "SOC2 Type II compliance & zero data retention",
      "API access for batch document pipelines",
      "Dedicated account manager & SLA"
    ],
    cta: "Contact Enterprise Team",
    popular: false
  }
];
