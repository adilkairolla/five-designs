type NoteItemProps = {
  level: "h3" | "h4" | "h5";
  title: string;
  text: string;
  cite: string;
};

const TITLE_CLASS = {
  h3: "brackets-item-title",
  h4: "brackets-apparatus",
  h5: "brackets-apparatus",
} as const;

export function NoteItem({ level: Heading, title, text, cite }: NoteItemProps) {
  return (
    <>
      <Heading className={TITLE_CLASS[Heading]}>{title}</Heading>
      <p>
        {text}
        {"\u00A0"}
        <span className="brackets-cite">{cite}</span>
      </p>
    </>
  );
}
