export function splitLastWord(text: string) {
  const lastSpace = text.lastIndexOf(" ");
  return { lead: text.slice(0, lastSpace + 1), last: text.slice(lastSpace + 1) };
}
