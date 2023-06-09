import { LTreePath } from "../LTreePath";

const normalizeOffset = (len: number, offset: number): number => {
  if (offset >= 0) {
    return offset >= len - 1 ? len - 1 : offset;
  } else {
    return offset <= -len ? 0 : len + offset;
  }
};
export const findIndex = (
  ltree: LTreePath,
  subltree: LTreePath,
  offset = 0
): number => {
  const maxLen = ltree.value.length;
  const startIndex = normalizeOffset(ltree.value.length, offset);
  if (subltree.value.length > maxLen - startIndex + 1) return -1;

  for (let i = startIndex; i <= maxLen - subltree.value.length; i++) {
    if (
      JSON.stringify(ltree.value.slice(i, i + subltree.value.length)) ===
      JSON.stringify(subltree.value)
    ) {
      return i;
    }
  }
  return -1;
};

export default findIndex;
