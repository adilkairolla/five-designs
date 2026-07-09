import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  ArrowRight,
  Check,
  FileText,
  LoaderCircle,
  Sparkles,
  Upload,
  X,
} from "lucide-react";

type UploadButtonProps = {
  className?: string;
  label?: string;
  compact?: boolean;
};

export function Mark({ inverse = false }: { inverse?: boolean }) {
  return (
    <Link to="/1" className={`ratio-mark ${inverse ? "ratio-mark--inverse" : ""}`}>
      <span className="ratio-mark__symbol" aria-hidden="true">
        R<span>/</span>
      </span>
      <span>Ratio reader</span>
    </Link>
  );
}

export function DesignSwitcher({ light = false }: { light?: boolean }) {
  const { pathname } = useLocation();
  return (
    <nav className={`design-switcher ${light ? "design-switcher--light" : ""}`} aria-label="Design concepts">
      <span>View</span>
      {[1, 2, 3, 4, 5].map((number) => (
        <Link
          key={number}
          to={`/${number}`}
          className={pathname === `/${number}` ? "is-active" : ""}
          aria-label={`Open design ${number}`}
          title={`Design ${number}`}
        >
          {number}
        </Link>
      ))}
    </nav>
  );
}

export function UploadButton({ className = "", label = "Upload a PDF", compact = false }: UploadButtonProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [fileName, setFileName] = useState("");
  const [phase, setPhase] = useState<"idle" | "reading" | "ready">("idle");

  useEffect(() => {
    if (phase !== "reading") return;
    const timer = window.setTimeout(() => setPhase("ready"), 1250);
    return () => window.clearTimeout(timer);
  }, [phase]);

  function selectFile(file?: File) {
    if (!file) return;
    setFileName(file.name);
    setPhase("reading");
  }

  return (
    <>
      <input
        ref={inputRef}
        className="sr-only"
        type="file"
        accept="application/pdf,.pdf"
        onChange={(event) => selectFile(event.target.files?.[0])}
      />
      <button
        type="button"
        className={`upload-button ${compact ? "upload-button--compact" : ""} ${className}`}
        onClick={() => inputRef.current?.click()}
      >
        <Upload aria-hidden="true" />
        <span>{label}</span>
        {!compact && <ArrowRight aria-hidden="true" className="upload-button__arrow" />}
      </button>

      {phase !== "idle" && (
        <div className="upload-dialog" role="dialog" aria-modal="true" aria-label="PDF upload status">
          <button className="upload-dialog__backdrop" aria-label="Close upload status" onClick={() => setPhase("idle")} />
          <div className="upload-dialog__panel">
            <button className="upload-dialog__close" aria-label="Close" onClick={() => setPhase("idle")}>
              <X />
            </button>
            <div className={`upload-dialog__icon ${phase === "ready" ? "is-ready" : ""}`}>
              {phase === "ready" ? <Check /> : <LoaderCircle className="spin" />}
            </div>
            <p className="upload-dialog__eyebrow">{phase === "ready" ? "Ready to explore" : "Reading your document"}</p>
            <h2>{fileName}</h2>
            <p>
              {phase === "ready"
                ? "Ratio has mapped the key ideas, evidence, and quotes in your PDF."
                : "Finding the argument, useful evidence, and the details worth keeping."}
            </p>
            <div className="upload-dialog__progress"><span className={phase === "ready" ? "is-complete" : ""} /></div>
            {phase === "ready" && (
              <button className="upload-dialog__continue" onClick={() => setPhase("idle")}>
                Open your reader <Sparkles />
              </button>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export function FeatureIcon({ type }: { type: "summary" | "quote" | "hint" }) {
  if (type === "summary") return <FileText aria-hidden="true" />;
  if (type === "quote") return <span aria-hidden="true">“</span>;
  return <Sparkles aria-hidden="true" />;
}
