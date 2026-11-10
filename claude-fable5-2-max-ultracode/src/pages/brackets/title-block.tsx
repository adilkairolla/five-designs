import { book } from "@/content/origin-of-species";

export function TitleBlock() {
  return (
    <div className="brackets-title">
      <h1 className="brackets-h1">
        <span>{book.pages} pages, cut to one paragraph.</span> <span>Every cut is shown.</span>
      </h1>
      <p className="brackets-lede">
        Upload a long PDF and Ratio&nbsp;Reader returns four things: a summary, hints, quotes and
        insights. This is what it returned for <cite>{book.title}</cite>.
      </p>
    </div>
  );
}
