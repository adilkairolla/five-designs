import { UploadButton } from "./upload-button";
import type { UploadSlot } from "./upload-slots";

type PageHeaderProps = {
  onUpload: (slot: UploadSlot) => void;
};

export function PageHeader({ onUpload }: PageHeaderProps) {
  return (
    <header className="brackets-wrap brackets-header brackets-cols">
      <p className="brackets-wordmark">Ratio Reader</p>
      <UploadButton slot="top" onUpload={onUpload} />
    </header>
  );
}
