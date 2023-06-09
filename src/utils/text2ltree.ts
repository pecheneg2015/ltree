import { LTreePath } from "../LTreePath";

export const text2ltree = (val: string): LTreePath => {
  return new LTreePath(val);
};

export default text2ltree;
