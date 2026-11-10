import { useState } from "react";
import type { ReactNode } from "react";
import {
  compressionRatio,
  formatDuration,
  formatPages,
  fullReadMinutes,
  summaryReadMinutes,
} from "@/lib/reading-estimate.ts";

const MIN_PAGES = 10;
const MAX_PAGES = 1200;
const SCALE = Math.log(MAX_PAGES / MIN_PAGES);

const PRESETS = [
  { label: "Research paper", pages: 24 },
  { label: "Annual report", pages: 180 },
  { label: "On the Origin of Species", pages: 502 },
  { label: "Textbook", pages: 640 },
  { label: "A very long book", pages: 1200 },
];

// The slider is logarithmic so a 24-page paper and a 1,200-page book both get usable travel.
function pagesFromSlider(position: number) {
  return Math.round(MIN_PAGES * Math.exp((position / 100) * SCALE));
}

function sliderFromPages(pages: number) {
  return (Math.log(pages / MIN_PAGES) / SCALE) * 100;
}

export function RatioDial() {
  const [pages, setPages] = useState(502);
  const full = fullReadMinutes(pages);
  const short = summaryReadMinutes(pages);
  const ratio = compressionRatio(pages);

  return (
    <div>
      <p
        role="img"
        aria-label={`${ratio} to 1`}
        className="text-[clamp(7rem,21vw,20rem)] leading-[0.8] font-extrabold tracking-[-0.04em] tabular-nums"
      >
        <span aria-hidden="true" className="wide">
          {ratio}
        </span>
        <span aria-hidden="true" className="narrow text-klein">
          :1
        </span>
      </p>

      <div className="mt-10 space-y-6 lg:mt-14">
        <ScaleBar label={`Reading all ${formatPages(pages)} pages`} value={formatDuration(full)}>
          <div className="h-10 w-full bg-black" />
        </ScaleBar>
        <ScaleBar label="Reading what matters, with Ratio Reader" value={formatDuration(short)} accent>
          <div
            className="ratio-bar h-10 min-w-1.5 bg-klein"
            style={{ width: `${(short / full) * 100}%` }}
          />
        </ScaleBar>
      </div>

      <div className="mt-12 grid items-center gap-x-8 gap-y-3 lg:grid-cols-[auto_minmax(0,1fr)_7rem]">
        <label htmlFor="pdf-pages" className="wide text-lg font-semibold">
          Pages in your PDF
        </label>
        <input
          id="pdf-pages"
          type="range"
          min={0}
          max={100}
          step={0.25}
          value={sliderFromPages(pages)}
          onChange={(event) => setPages(pagesFromSlider(Number(event.target.value)))}
          aria-valuetext={`${formatPages(pages)} pages`}
          className="ratio-slider"
        />
        <output htmlFor="pdf-pages" className="wide text-3xl font-bold tabular-nums lg:text-right">
          {formatPages(pages)}
        </output>
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        {PRESETS.map((preset) => (
          <button
            key={preset.label}
            type="button"
            aria-pressed={pages === preset.pages}
            onClick={() => setPages(preset.pages)}
            className="border border-black px-3.5 py-2 text-sm font-medium transition-colors hover:bg-klein-wash focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-klein aria-pressed:bg-black aria-pressed:text-white"
          >
            {preset.label}, {formatPages(preset.pages)} pages
          </button>
        ))}
      </div>

      <p className="mt-6 max-w-[44rem] text-sm leading-relaxed text-black/65">
        Both bars are drawn to the same scale. These are estimates: two minutes a page for the full
        text, and a summary that grows slowly as the document gets longer.
      </p>
    </div>
  );
}

function ScaleBar({
  label,
  value,
  accent = false,
  children,
}: {
  label: string;
  value: string;
  accent?: boolean;
  children: ReactNode;
}) {
  return (
    <div>
      <div
        className={`mb-2 flex items-baseline justify-between gap-6 text-lg font-semibold ${accent ? "text-klein" : ""}`}
      >
        <span>{label}</span>
        <span className="wide tabular-nums">{value}</span>
      </div>
      {children}
    </div>
  );
}
