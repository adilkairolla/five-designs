import { 
  Feather, 
  Terminal, 
  Leaf, 
  Briefcase, 
  Gamepad2,
  type LucideIcon
} from "lucide-react";

export interface DesignItem {
  path: string;
  name: string;
  style: string;
  accent: string;
  icon: LucideIcon;
  tag: string;
  desc: string;
}

export const DESIGNS: DesignItem[] = [
  {
    path: "/1",
    name: "Editorial Broadside",
    style: "Swiss Typography & Lit Review",
    accent: "bg-amber-600 text-white",
    icon: Feather,
    tag: "Print & Scholarly",
    desc: "Tactile serif typography, mechanical ratio wheel, ink annotations, and dual broadsheet layout."
  },
  {
    path: "/2",
    name: "Cybernetic Codex",
    style: "Sci-Fi HUD & Neural Signal",
    accent: "bg-cyan-500 text-black",
    icon: Terminal,
    tag: "Futuristic Dark HUD",
    desc: "Laser telemetry, spectral wave analyzer, token decompressor, and cryptographic citation hashes."
  },
  {
    path: "/3",
    name: "Zen Ratio",
    style: "Mindful Japandi Sanctuary",
    accent: "bg-emerald-700 text-amber-50",
    icon: Leaf,
    tag: "Calming & Organic",
    desc: "Oat milk tones, tea ceremony pacing, ambient lo-fi soundscapes, and breath-paced focus capsule."
  },
  {
    path: "/4",
    name: "Executive Vault",
    style: "Bloomberg Terminal for Knowledge",
    accent: "bg-amber-400 text-slate-950",
    icon: Briefcase,
    tag: "High-Finance & Strategy",
    desc: "Obsidian bento grids, ROI attention calculator, footnote risk scoring, and 1-click boardroom decks."
  },
  {
    path: "/5",
    name: "Neo-Pop Arcade",
    style: "Gen-Z Anti-Brainrot Studio",
    accent: "bg-yellow-400 text-black",
    icon: Gamepad2,
    tag: "Vibrant & Gamified",
    desc: "Neo-brutalist pop shadows, comic tooltips, interactive speed quiz with confetti & meme jargon decoders."
  }
];
