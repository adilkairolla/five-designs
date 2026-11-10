import { book } from "@/content/origin-of-species";

const PAGES = Array.from({ length: book.pages }, (_, index) => index + 1);

type PageStripProps = {
  currentPage: number;
};

export function PageStrip({ currentPage }: PageStripProps) {
  return (
    <div
      role="img"
      aria-label={`All ${book.pages} pages of the book. A straight read is on page ${currentPage}.`}
      className="clock-strip"
    >
      {PAGES.map((page) => (
        <span key={page} className="clock-cell" data-read={page <= currentPage ? "" : undefined} />
      ))}
    </div>
  );
}
