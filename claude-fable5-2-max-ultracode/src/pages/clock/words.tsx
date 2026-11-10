import { Fragment } from "react";

type WordsProps = {
  words: readonly string[];
};

export function Words({ words }: WordsProps) {
  return words.map((word, index) => (
    <Fragment key={index}>
      {index > 0 && " "}
      <span className="clock-word">{word}</span>
    </Fragment>
  ));
}
