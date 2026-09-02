export interface PdfDocument {
  id: string;
  title: string;
  author: string;
  category: string;
  originalPages: number;
  originalWordCount: number;
  readTimeOriginal: string;
  readTimeRatio: string;
  compressionPercent: number;
  executiveSummary: string;
  deepSummary: string;
  hints: {
    tag: string;
    type: 'concept' | 'warning' | 'analogy' | 'context';
    text: string;
    page: number;
  }[];
  quotes: {
    quote: string;
    page: number;
    speakerOrContext: string;
    significance: string;
  }[];
  keyInsights: {
    headline: string;
    takeaway: string;
    practicalApplication: string;
  }[];
  stats: {
    signalToNoise: string;
    readingSpeedup: string;
    cognitiveLoadScore: string;
  };
}

export const SAMPLE_DOCUMENTS: PdfDocument[] = [
  {
    id: "attention-paper",
    title: "Attention Is All You Need",
    author: "Vaswani, Shazeer, Parmar, et al. (Google Brain / Research)",
    category: "Machine Learning / AI",
    originalPages: 15,
    originalWordCount: 8420,
    readTimeOriginal: "45 mins",
    readTimeRatio: "4 mins",
    compressionPercent: 91,
    executiveSummary:
      "The landmark paper that introduced the Transformer architecture, replacing sequential recurrent (RNN/LSTM) models with multi-head self-attention mechanisms. By dispensing with recurrence and convolutions entirely, Transformers allow massive parallel training and long-range semantic dependency capture across arbitrary token distances.",
    deepSummary:
      "Prior state-of-the-art models for sequence transduction relied on complex recurrent or convolutional neural networks connected via an attention mechanism. Recurrent models inherently preclude parallelization within training examples due to sequential byte-level constraints. Vaswani et al. proposed the Transformer, which models dependencies without regard to their distance in input or output sequences. Utilizing scaled dot-product attention, multi-head projection layers, and positional encodings, it achieves superior translation quality while requiring orders of magnitude less training wall-clock time.",
    hints: [
      {
        tag: "Core Intuition",
        type: "concept",
        text: "Think of Attention like a database query: Queries (Q) look for relevant Keys (K), and retrieve weighted Values (V).",
        page: 3,
      },
      {
        tag: "Why recurrence failed",
        type: "context",
        text: "Sequential execution (t must wait for t-1) choked modern GPU clusters. Removing loops enabled modern LLM scale.",
        page: 2,
      },
      {
        tag: "Common Trap",
        type: "warning",
        text: "Self-attention has O(N²) computational complexity with sequence length N, which is why context windows were historically constrained.",
        page: 6,
      },
    ],
    quotes: [
      {
        quote: "We propose the Transformer, a model architecture eschewing recurrence and instead relying entirely on an attention mechanism to draw global dependencies between input and output.",
        page: 1,
        speakerOrContext: "Abstract",
        significance: "The single sentence that sparked modern generative AI, GPTs, and Claude.",
      },
      {
        quote: "Scaled Dot-Product Attention allows the model to jointly attend to information from different representation subspaces at different positions.",
        page: 4,
        speakerOrContext: "Section 3.2.2",
        significance: "Defines the multi-head mathematical leap over single vector alignments.",
      },
    ],
    keyInsights: [
      {
        headline: "Parallelism over Recurrence",
        takeaway: "Hardware-friendly matrix multiplications trump sequential state-passing every single time.",
        practicalApplication: "When designing data pipelines, eliminate sequential bottlenecks to unlock GPU throughput.",
      },
      {
        headline: "Position Invariant Semantics",
        takeaway: "By injecting positional sinusoids, tokens maintain order without needing chronological step-processing.",
        practicalApplication: "Decouple structural order from semantic analysis.",
      },
    ],
    stats: {
      signalToNoise: "94.2%",
      readingSpeedup: "11.2x",
      cognitiveLoadScore: "-78%",
    },
  },
  {
    id: "thinking-fast-slow",
    title: "Thinking, Fast and Slow (Key Chapters)",
    author: "Daniel Kahneman (Nobel Laureate)",
    category: "Cognitive Science / Psychology",
    originalPages: 68,
    originalWordCount: 24500,
    readTimeOriginal: "130 mins",
    readTimeRatio: "7 mins",
    compressionPercent: 94,
    executiveSummary:
      "A masterclass in human irrationality. The brain operates across two distinct cognitive engines: System 1 (fast, emotional, associative, effortless) and System 2 (slow, deliberative, logical, energy-draining). Most human errors stem from System 1 substituting easy heuristic answers for hard statistical truths without System 2 noticing.",
    deepSummary:
      "Kahneman unpacks decades of behavioral economics research to demonstrate how human judgment systematically deviates from rational actor theory. We are susceptible to anchoring biases, loss aversion (losses loom twice as large as equivalent gains), base-rate neglect, and the 'What You See Is All There Is' (WYSIATI) illusion. Mastering critical decision-making requires developing systemic tripwires to alert sleepy System 2 when high-stakes choices are being made.",
    hints: [
      {
        tag: "Crucial Nuance",
        type: "concept",
        text: "System 1 is not 'bad' and System 2 is not 'good'. System 1 allows you to dodge oncoming cars; System 2 is too slow to navigate everyday life.",
        page: 24,
      },
      {
        tag: "Decision Trap",
        type: "warning",
        text: "WYSIATI: We construct coherent stories from sparse evidence and remain completely blind to the unobserved evidence.",
        page: 86,
      },
      {
        tag: "Mental Model",
        type: "analogy",
        text: "System 2 is like a lazy bureaucrat who accepts the automatic drafts of the energetic intern (System 1) 98% of the time.",
        page: 41,
      },
    ],
    quotes: [
      {
        quote: "A reliable way to make people believe in falsehoods is frequent repetition, because familiarity is not easily distinguished from truth.",
        page: 62,
        speakerOrContext: "On Cognitive Ease",
        significance: "Explains viral misinformation, propaganda, and marketing psychology.",
      },
      {
        quote: "We can be blind to the obvious, and we are also blind to our blindness.",
        page: 28,
        speakerOrContext: "Introduction",
        significance: "The foundational warning against supreme executive overconfidence.",
      },
    ],
    keyInsights: [
      {
        headline: "Loss Aversion Asymmetry",
        takeaway: "The psychological pain of losing $1,000 is twice as potent as the pleasure of gaining $1,000.",
        practicalApplication: "Frame propositions around risk prevention rather than bonus upside when overcoming status quo bias.",
      },
      {
        headline: "Premortem Antidote",
        takeaway: "Before executing a plan, assemble the team and assume the project failed catastrophicly 12 months from now.",
        practicalApplication: "Unlocks honest System 2 dissent that corporate politeness usually suppresses.",
      },
    ],
    stats: {
      signalToNoise: "96.5%",
      readingSpeedup: "18.5x",
      cognitiveLoadScore: "-84%",
    },
  },
  {
    id: "bitcoin-whitepaper",
    title: "Bitcoin: A Peer-to-Peer Electronic Cash System",
    author: "Satoshi Nakamoto",
    category: "Cryptography & Distributed Systems",
    originalPages: 9,
    originalWordCount: 3219,
    readTimeOriginal: "25 mins",
    readTimeRatio: "2.5 mins",
    compressionPercent: 90,
    executiveSummary:
      "A purely peer-to-peer version of electronic cash that allows online payments to be sent directly from one party to another without going through a financial institution. Solves the Byzantine Generals Problem and the double-spending problem through a proof-of-work blockchain.",
    deepSummary:
      "Nakamoto synthesizes hashcash proof-of-work, cryptographic timestamp servers, and Merkle tree state compression to forge trustless distributed consensus. Instead of relying on a trusted central clearinghouse, nodes vote with their CPU computational power. The longest chain not only serves as proof of the sequence of witnessed events, but also guarantees that it came from the largest pool of honest processing power.",
    hints: [
      {
        tag: "The Core Invention",
        type: "concept",
        text: "It was not cryptography (already existed) or digital coins (DigiCash failed earlier). It was aligning game-theoretic thermodynamic incentives via Proof of Work.",
        page: 3,
      },
      {
        tag: "Prerequisite",
        type: "context",
        text: "Double-spending: In digital software, copying money is like copying an MP3. Blockchain makes a digital asset physically un-copyable without a central banker.",
        page: 1,
      },
    ],
    quotes: [
      {
        quote: "What is needed is an electronic payment system based on cryptographic proof instead of trust, allowing any two willing parties to transact directly.",
        page: 1,
        speakerOrContext: "Abstract",
        significance: "The thesis statement of decentralized finance and permissionless commerce.",
      },
      {
        quote: "The proof-of-work also solves the problem of determining representation in majority decision making. One-CPU-one-vote.",
        page: 3,
        speakerOrContext: "Section 4",
        significance: "The foundation of Sybil attack resistance.",
      },
    ],
    keyInsights: [
      {
        headline: "Thermodynamic Security",
        takeaway: "Attacking the network costs more real electrical energy and compute than could possibly be stolen.",
        practicalApplication: "Design systems where cheating is mathematically unprofitable compared to participating honestly.",
      },
    ],
    stats: {
      signalToNoise: "98.1%",
      readingSpeedup: "10.0x",
      cognitiveLoadScore: "-72%",
    },
  },
];
