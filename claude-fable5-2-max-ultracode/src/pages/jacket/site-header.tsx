import { PRODUCT_NAME, UPLOAD_LABEL } from "./jacket-copy";

type SiteHeaderProps = {
  onUpload: () => void;
};

export function SiteHeader({ onUpload }: SiteHeaderProps) {
  return (
    <header className="jacket-header">
      <p className="jacket-wordmark text-jacket-magenta">{PRODUCT_NAME}</p>
      <button
        type="button"
        className="jacket-button jacket-button--quiet jacket-button--small"
        onClick={onUpload}
      >
        {UPLOAD_LABEL}
      </button>
    </header>
  );
}
