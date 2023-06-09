import { LTreePath } from "../LTreePath";

export const nlevel = (ltree: LTreePath): number => {
  return ltree.value.length;
};

export default nlevel;
