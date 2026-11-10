import { book } from "@/content/origin-of-species";

export function PrimerFooter() {
  return (
    <footer className="primer-plain-spread mt-16 gap-y-2 border-t-2 border-primer-ink px-4 pt-8 pb-12 text-sm leading-normal sm:px-10 lg:mt-24 lg:items-baseline lg:px-12">
      <p className="font-primer-slab text-xl leading-none font-bold">Ratio Reader</p>
      <p className="max-w-[30rem]">
        Sample: <cite>{book.title}</cite>
        {`, ${book.edition}, ${book.year}. This is a demo page. It does not process files.`}
      </p>
    </footer>
  );
}
