import { useId } from "react";
import { JumpLink } from "@/components/jump-link";
import { book } from "@/content/origin-of-species";
import { cn } from "@/lib/cn";
import { NEW_WORDS } from "./new-words-list";
import type { NewWord, NewWordExample } from "./new-words-list";
import { PageCite } from "./page-cite";

const EXAMPLE_FORM_CLASS = {
  sentence: "",
  title: "font-bold",
  quote: "italic",
} as const satisfies Record<NewWordExample["form"], string>;

function ExampleSlip({ example }: { example: NewWordExample }) {
  const className = cn(
    "mt-2 flow-root bg-primer-blotter px-3 py-2 text-sm leading-normal 2xl:text-[1.0625rem]",
    EXAMPLE_FORM_CLASS[example.form],
  );

  if (example.form === "quote") {
    return (
      <blockquote className={className}>
        {example.text} <PageCite pages={example.pages} />
      </blockquote>
    );
  }

  return (
    <p className={className}>
      {example.text} <PageCite pages={example.pages} />
    </p>
  );
}

function NewWordEntry({ entry }: { entry: NewWord }) {
  return (
    <li>
      <JumpLink
        to={entry.target}
        className="primer-word-row block w-full cursor-pointer pt-3 text-left lg:pt-1"
      >
        <span className="flex items-baseline justify-between gap-4">
          <span className="primer-headword font-primer-slab text-[1.375rem] leading-[1.2] font-bold">
            {entry.word}
          </span>{" "}
          <span className="text-sm 2xl:text-[1.0625rem]">Lesson {entry.lesson}</span>
        </span>{" "}
        <span className="block text-sm leading-normal text-balance 2xl:text-[1.0625rem]">
          {entry.gloss}
        </span>
      </JumpLink>
      {entry.example ? <ExampleSlip example={entry.example} /> : null}
    </li>
  );
}

export function NewWords() {
  const headingId = useId();

  return (
    <nav aria-labelledby={headingId}>
      <h2 id={headingId} className="font-primer-slab text-xl leading-[1.3] font-bold">
        New words
      </h2>
      <p className="mt-1 text-sm leading-normal 2xl:text-[1.0625rem]">
        Sample: <cite>{book.title}</cite>, {book.year}.
      </p>
      <ul className="mt-4 grid gap-5 sm:grid-cols-2 sm:gap-x-8 lg:grid-cols-1 2xl:gap-y-4">
        {NEW_WORDS.map((entry) => (
          <NewWordEntry key={entry.word} entry={entry} />
        ))}
      </ul>
    </nav>
  );
}
