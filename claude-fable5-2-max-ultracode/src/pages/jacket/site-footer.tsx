import { book } from "@/content/origin-of-species";
import { PRODUCT_NAME } from "./jacket-copy";

export function SiteFooter() {
  return (
    <footer className="jacket-footer bg-jacket-white">
      <div className="jacket-footer-main">
        <p className="jacket-wordmark text-jacket-magenta">{PRODUCT_NAME}</p>
        <p className="jacket-note">
          Sample: {book.title}, {book.edition}, {book.year}.
        </p>
      </div>
      <p className="jacket-footer-side jacket-note">
        This is a demo page. It has no reader behind it, so nothing you pick is uploaded or processed.
      </p>
    </footer>
  );
}
