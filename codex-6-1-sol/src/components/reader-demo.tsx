import { useRef, useState } from "react";
import type { ReactNode } from "react";
import { Dialog } from "radix-ui";
import { BookOpen, Check, FileText, Upload, X } from "lucide-react";
import { InsightPreview } from "./shared";
import { DemoContext } from "./use-reader-demo";
import type { DemoMode } from "./use-reader-demo";

type FileState =
  | { status: "empty" }
  | { status: "checking" }
  | { status: "selected"; name: string }
  | { status: "error"; message: string };

export function ReaderDemoProvider({ children }: { children: ReactNode }) {
  const [mode, setMode] = useState<DemoMode | null>(null);
  const [file, setFile] = useState<FileState>({ status: "empty" });
  const [dragging, setDragging] = useState(false);
  const selectionVersion = useRef(0);
  const openDemo = (nextMode: DemoMode) => {
    selectionVersion.current += 1;
    setFile({ status: "empty" });
    setDragging(false);
    setMode(nextMode);
  };

  async function selectFile(selected: File | undefined) {
    if (!selected) return;
    const version = ++selectionVersion.current;
    if (selected.size > 25 * 1024 * 1024) {
      setFile({ status: "error", message: "Choose a PDF smaller than 25 MB." });
      return;
    }
    setFile({ status: "checking" });
    try {
      const signature = new TextDecoder().decode(
        await selected.slice(0, 5).arrayBuffer(),
      );
      if (version !== selectionVersion.current) return;
      if (signature !== "%PDF-") {
        setFile({
          status: "error",
          message:
            "That file isn’t a PDF. Please choose a valid .pdf document.",
        });
        return;
      }
      setFile({ status: "selected", name: selected.name });
    } catch {
      if (version !== selectionVersion.current) return;
      setFile({
        status: "error",
        message: "We couldn’t read that file. Please try selecting it again.",
      });
    }
  }

  return (
    <DemoContext.Provider value={{ openDemo }}>
      {children}
      <Dialog.Root
        open={mode !== null}
        onOpenChange={(open) => {
          if (!open) {
            selectionVersion.current += 1;
            setMode(null);
          }
        }}
      >
        <Dialog.Portal>
          <Dialog.Overlay className="demo-overlay" />
          <Dialog.Content
            className="demo-dialog"
            aria-describedby="demo-description"
          >
            <Dialog.Close
              className="demo-close"
              aria-label="Close reading preview"
            >
              <X size={21} />
            </Dialog.Close>
            <div className="demo-heading">
              <span className="demo-icon">
                <BookOpen size={24} />
              </span>
              <div>
                <Dialog.Title>Your next little lightbulb moment.</Dialog.Title>
                <Dialog.Description id="demo-description">
                  Explore the interactive preview. A little less information, a
                  lot more understanding.
                </Dialog.Description>
              </div>
            </div>
            <div className="demo-mode-tabs">
              <button
                data-active={mode === "upload"}
                onClick={() => setMode("upload")}
              >
                <Upload size={15} />
                Select a PDF
              </button>
              <button
                data-active={mode === "sample"}
                onClick={() => setMode("sample")}
              >
                <BookOpen size={15} />
                Explore the sample
              </button>
            </div>
            {mode === "upload" && (
              <div className="demo-upload-area">
                <label
                  className={`upload-dropzone ${dragging ? "dragging" : ""}`}
                  onDragOver={(event) => {
                    event.preventDefault();
                    setDragging(true);
                  }}
                  onDragLeave={() => setDragging(false)}
                  onDrop={(event) => {
                    event.preventDefault();
                    setDragging(false);
                    void selectFile(event.dataTransfer.files[0]);
                  }}
                >
                  <input
                    type="file"
                    accept="application/pdf,.pdf"
                    onChange={(event) =>
                      void selectFile(event.target.files?.[0])
                    }
                    aria-label="Select your PDF"
                  />
                  <span className="upload-round-icon">
                    {file.status === "selected" ? (
                      <Check size={24} />
                    ) : (
                      <Upload size={24} />
                    )}
                  </span>
                  <strong>
                    {file.status === "selected"
                      ? file.name
                      : "Drop a PDF here, or click to browse"}
                  </strong>
                  <span>
                    {file.status === "checking"
                      ? "Checking your document…"
                      : "PDF documents up to 25 MB"}
                  </span>
                </label>
                <p className="demo-upload-note" role="status">
                  {file.status === "error"
                    ? file.message
                    : file.status === "selected"
                      ? "Your PDF is selected and stays on your device. Live analysis is coming soon; explore the sample insights below."
                      : "This is a product preview. Files stay on your device; live PDF analysis is coming soon."}
                </p>
              </div>
            )}
            <div className="demo-sample-label">
              <FileText size={14} />
              <span>Sample document: The art of paying attention</span>
              <span>12 pages</span>
            </div>
            <InsightPreview className="dialog-preview" />
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </DemoContext.Provider>
  );
}
