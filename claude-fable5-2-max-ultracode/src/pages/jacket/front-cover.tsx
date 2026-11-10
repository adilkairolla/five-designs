import { useId } from "react";
import { JumpLink } from "@/components/jump-link";
import { book } from "@/content/origin-of-species";
import type { PdfPick } from "@/lib/use-pdf-picker";
import { CoverLettering } from "./cover-lettering";
import { HEADLINE } from "./lettering";
import { UploadAction } from "./upload-action";

type FrontCoverProps = {
  pick: PdfPick;
  onUpload: () => void;
};

const SAMPLE_NOTE = `This page is a sample: the jacket Ratio Reader wrote for ${book.title}, all ${book.pages} pages of it.`;

export function FrontCover({ pick, onUpload }: FrontCoverProps) {
  const headlineId = useId();

  return (
    <section className="jacket-cover" aria-labelledby={headlineId}>
      <h1 id={headlineId}>
        <span className="sr-only">{HEADLINE}</span>
        <CoverLettering />
      </h1>
      <p className="jacket-lead mt-5 text-balance sm:mt-6">
        Upload a long PDF and Ratio Reader writes its jacket: a summary, hints for the hard parts, the key quotes with
        their page numbers, and insights.
      </p>
      <UploadAction className="mt-5" pick={pick} onUpload={onUpload} emptyNote={SAMPLE_NOTE}>
        <JumpLink to="jacket-summary" className="jacket-button jacket-button--quiet lg:hidden">
          See the sample
        </JumpLink>
      </UploadAction>
    </section>
  );
}
