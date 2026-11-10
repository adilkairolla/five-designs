import { book } from "@/content/origin-of-species";

export function PageFooter() {
  return (
    <footer className="brackets-wrap brackets-cols brackets-footer">
      <p className="brackets-wordmark">Ratio Reader</p>
      <p className="brackets-prose">
        Sample: <cite>{book.title}</cite>, {book.edition}, {book.year}. This is a demo page: it does
        not process files, and nothing you pick here is uploaded.
      </p>
    </footer>
  );
}
