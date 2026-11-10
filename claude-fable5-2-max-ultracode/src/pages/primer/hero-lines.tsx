import { PDF_LINES } from "./lessons";

function CopybookRule() {
  return (
    <span className="primer-copybook" aria-hidden="true">
      <span className="primer-copybook-rule primer-copybook-rule--cap" />
      <span className="primer-copybook-rule primer-copybook-rule--mid">
        <span className="primer-copybook-dashes" />
      </span>
      <span className="primer-copybook-rule primer-copybook-rule--base" />
    </span>
  );
}

export function HeroLines() {
  return (
    <h1 className="primer-big-lines">
      {PDF_LINES.map((line, index) => (
        <span key={line} className="primer-big-line">
          {index === 0 ? <CopybookRule /> : null}
          <span className="primer-hero-text">{line}</span>{" "}
        </span>
      ))}
    </h1>
  );
}
