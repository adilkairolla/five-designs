export interface MockPaper {
  id: string;
  title: string;
  author: string;
  year: number;
  wordCount: number;
  readTime: string;
  summary: string;
  tags: string[];
  chapters: {
    title: string;
    text: string;
    summary: string;
    quotes: { text: string; author: string; page: number }[];
    notes: { term: string; explanation: string; position: number }[];
  }[];
  concepts: { name: string; relevance: number; description: string; connections: string[] }[];
}

export const mockPapers: MockPaper[] = [
  {
    id: "attention-economy",
    title: "Cognitive Filters in the Age of Information Density",
    author: "Dr. Elena Vance",
    year: 2025,
    wordCount: 14200,
    readTime: "45 min read",
    summary: "An exploration of how modern digital architecture exploits human cognitive limits, proposing a 'Ratio Reading' framework to filter noise and retain semantic core concepts.",
    tags: ["Cognitive Science", "Digital Design", "Attention Economy"],
    chapters: [
      {
        title: "I. The Bottleneck of Consciousness",
        text: "Human working memory is limited to roughly four chunks of information at any given moment. Yet, modern knowledge workers are bombarded with hundreds of pages of text daily. The friction between biological limits and digital volume creates an attention deficit. When we skim, we lose the logical progression of arguments, settling instead for surface-level impressions.",
        summary: "Human consciousness has a processing bottleneck (4 chunks of memory). Digital volume causes skimming, which destroys logical comprehension and retention.",
        quotes: [
          { text: "Skimming is the defense mechanism of an overloaded mind, but it leaves us intellectually bankrupt.", author: "Dr. Elena Vance", page: 3 }
        ],
        notes: [
          { term: "Four chunks", explanation: "Referencing Miller's Law on working memory capacity limits.", position: 10 }
        ]
      },
      {
        title: "II. The Ratio Reading Paradigm",
        text: "To counter this, we propose the Ratio Framework: dividing text into 'Signal' and 'Friction'. Signal is the core thesis, the evidentiary proof, and the unique insight. Friction is repetitive phrasing, excessive literature reviews, and formatting boilerplate. By programmatically filtering friction, we can increase reading efficiency by 400% without loss of comprehension.",
        summary: "The Ratio Framework filters 'Friction' (jargon, boilerplate) while preserving 'Signal' (thesis, proof, insights) to boost reading speeds by 4x.",
        quotes: [
          { text: "Reading is not about consuming symbols; it is about mapping structures of thought into your own mind.", author: "Dr. Elena Vance", page: 12 }
        ],
        notes: [
          { term: "Friction", explanation: "Non-essential text like redundant vocabulary, boilerplate citations, and decorative narrative.", position: 15 }
        ]
      }
    ],
    concepts: [
      { name: "Cognitive Load", relevance: 95, description: "The total amount of mental effort being used in the working memory.", connections: ["Attention Deficit", "Friction"] },
      { name: "Signal vs Friction", relevance: 90, description: "The ratio of meaningful information to distracting or redundant content in text.", connections: ["Cognitive Load", "Boilerplate"] },
      { name: "Semantic Mapping", relevance: 85, description: "The visual or mental restructuring of a text's arguments into a network of nodes.", connections: ["Cognitive Load"] }
    ]
  },
  {
    id: "distributed-consensus",
    title: "Consensus Protocols & Asymmetric Fault Tolerance",
    author: "Marcus Aurelius Chen",
    year: 2026,
    wordCount: 18500,
    readTime: "60 min read",
    summary: "A rigorous mathematical review of fault tolerance in high-throughput distributed networks, analyzing why classical consensus struggles under high network partitions.",
    tags: ["Computer Science", "Distributed Systems", "Cryptography"],
    chapters: [
      {
        title: "I. The Dilemma of Split Brains",
        text: "In distributed system engineering, partition tolerance is non-negotiable. When a network splits into two unreachable halves, a choice must be made between availability and consistency. Standard systems halt write operations, but modern asymmetric networks employ partial consensus keys to make localized decisions that resolve upon reconnection.",
        summary: "In network splits, systems must choose consistency or availability. Asymmetric systems use partial keys to permit safe local writes during splits.",
        quotes: [
          { text: "In a split system, silence is often more dangerous than a coordinated lie.", author: "Marcus A. Chen", page: 7 }
        ],
        notes: [
          { term: "Partition", explanation: "A communication failure between nodes where they split into separate networks.", position: 8 }
        ]
      },
      {
        title: "II. Asymmetric Keys & Latency",
        text: "By assigning weight to nodes based on historical reliability and proximity, latency drops by 30%. Rather than waiting for a global quorum, nodes achieve local quorum within high-density zones, using cryptography to guarantee that zone operations cannot conflict once the partition heals.",
        summary: "Assigning weights to nodes based on network history reduces latency by 30% and permits fast local consensus.",
        quotes: [
          { text: "Trust in distributed systems is not absolute; it is a fluid probability curve.", author: "Marcus A. Chen", page: 19 }
        ],
        notes: [
          { term: "Quorum", explanation: "The minimum number of votes that a distributed system must obtain to perform a transaction.", position: 22 }
        ]
      }
    ],
    concepts: [
      { name: "Consensus", relevance: 98, description: "Agreement among distributed nodes on a single data value or system state.", connections: ["Quorum", "Fault Tolerance"] },
      { name: "Network Partition", relevance: 92, description: "A communication breakdown separating nodes into disjoint sub-networks.", connections: ["Consensus"] },
      { name: "Asymmetric Weights", relevance: 88, description: "Varying vote weights of nodes based on performance and latency metrics.", connections: ["Consensus", "Quorum"] }
    ]
  }
];
