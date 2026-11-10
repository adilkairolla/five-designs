export type KeySplit = { left: string; key: string; right: string };
export type KeyParts = { left: string; key: string; tail: string; right: string };

export const TRIM_MARK = "…";
export const KEY_SLOT = 10;

const MARK_ROOM = TRIM_MARK.length + 1;

const isLetter = (character: string | undefined) => character !== undefined && /\p{L}/u.test(character);

/** First whole-word, case-sensitive match. Slices, never trims: left + key + right === text. */
export function splitAtKey(text: string, key: string): KeySplit {
  let from = 0;
  for (;;) {
    const at = text.indexOf(key, from);
    if (at === -1) return { left: "", key, right: ` ${text}` };
    if (!isLetter(text[at - 1]) && !isLetter(text[at + key.length])) {
      return { left: text.slice(0, at), key, right: text.slice(at + key.length) };
    }
    from = at + 1;
  }
}

export function tokens(text: string): string[] {
  return text.split(/(\p{L}+)/u);
}

export function stemOf(word: string): string {
  const lower = word.toLowerCase();
  return lower.length > 3 && lower.endsWith("s") && !lower.endsWith("ss") ? lower.slice(0, -1) : lower;
}

export function isHit(token: string, stem: string): boolean {
  const lower = token.toLowerCase();
  return lower === stem || lower === `${stem}s`;
}

export function carries(text: string, stem: string): boolean {
  return tokens(text).some((token) => isHit(token, stem));
}

/** Split at the first token that is a hit for `stem`, or null when the text does not carry it. */
export function splitAtHit(text: string, stem: string): KeySplit | null {
  let offset = 0;
  for (const token of tokens(text)) {
    if (isHit(token, stem)) {
      return { left: text.slice(0, offset), key: token, right: text.slice(offset + token.length) };
    }
    offset += token.length;
  }
  return null;
}

/** Punctuation that follows the key with no space rides with it, while key and tail fit the band. */
export function withTail(split: KeySplit): KeyParts {
  const run = /^[^\s\p{L}\p{N}]+/u.exec(split.right)?.[0] ?? "";
  const tail = split.key.length + run.length <= KEY_SLOT ? run : "";
  return { left: split.left, key: split.key, tail, right: split.right.slice(tail.length) };
}

export function trimLeftContext(left: string, budget: number): string {
  const shown = left.trimEnd();
  if (shown.length <= budget) return left;
  const words = shown.split(" ");
  let kept = "";
  for (let start = words.length - 1; start >= 0; start -= 1) {
    const candidate = words.slice(start).join(" ");
    if (candidate.length + MARK_ROOM > budget) break;
    kept = candidate;
  }
  const gap = left.endsWith(" ") ? " " : "";
  return (kept === "" ? TRIM_MARK : `${TRIM_MARK} ${kept}`) + gap;
}

export function trimRightContext(right: string, budget: number): string {
  const shown = right.trimStart();
  if (shown.length <= budget) return right;
  const words = shown.split(" ");
  let kept = "";
  for (let end = 1; end <= words.length; end += 1) {
    const candidate = words.slice(0, end).join(" ");
    if (candidate.length + MARK_ROOM > budget) break;
    kept = candidate;
  }
  const gap = right.startsWith(" ") ? " " : "";
  return gap + (kept === "" ? TRIM_MARK : `${kept} ${TRIM_MARK}`);
}
