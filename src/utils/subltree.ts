import { LTreePath } from "../LTreePath";

export const subltree = (ltree: LTreePath, start: number, end: number) => {
  const path = ltree.value.slice(start, end).join(".");
  return new LTreePath(path);
};

export default subltree;
