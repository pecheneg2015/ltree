import { LTreePath } from "../LTreePath";

const normalizeOffset = (val: number, mod: number): number => {
  if (val >= 0) return val % mod;
  else return Math.abs(val % mod) === 0 ? 0 : mod - Math.abs(val % mod);
};
export const subpath = (ltree: LTreePath, offset: number, len?: number) => {
  const path = ltree.value;
  const sliceLen = len ?? path.length;
  const normalizedOffset = normalizeOffset(offset, path.length);
  const resultPath = path
    .slice(normalizedOffset, normalizedOffset + sliceLen)
    .join(".");
  return new LTreePath(resultPath);
};

export default subpath;
