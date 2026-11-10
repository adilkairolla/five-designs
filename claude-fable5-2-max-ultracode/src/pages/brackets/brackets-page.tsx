import "@fontsource/old-standard-tt/400.css";
import "@fontsource/old-standard-tt/400-italic.css";
import "@fontsource/old-standard-tt/700.css";
import { ClosingBand } from "./closing-band";
import { PageFooter } from "./page-footer";
import { PageHeader } from "./page-header";
import { Stage } from "./stage";
import { useUploadSlots } from "./use-upload-slots";

export function BracketsPage() {
  const upload = useUploadSlots();

  return (
    <div className="brackets min-h-dvh bg-brackets-salmon font-brackets-serif text-brackets-oxblood">
      <title>Ratio Reader: a summary, hints, quotes and insights from a long PDF</title>
      <input {...upload.inputProps} />
      <PageHeader onUpload={upload.uploadFrom} />
      <main>
        <Stage
          pick={upload.pickIn("top")}
          onPickAgain={upload.pickAgain}
          onDismiss={upload.dismiss}
        />
        <ClosingBand
          pick={upload.pickIn("closing")}
          onUpload={upload.uploadFrom}
          onPickAgain={upload.pickAgain}
          onDismiss={upload.dismiss}
        />
      </main>
      <PageFooter />
    </div>
  );
}
