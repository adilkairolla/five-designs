import { UploadButton } from "./upload-button";

export function PrimerHeader({ onUpload }: { onUpload: () => void }) {
  return (
    <header className="flex items-center justify-between gap-4 px-4 py-3 sm:px-10 sm:py-4 lg:px-12">
      <p className="font-primer-slab text-xl leading-none font-bold">Ratio Reader</p>
      <UploadButton size="small" onClick={onUpload} />
    </header>
  );
}
