import { LTreePath } from "../LTreePath";

export function lca(...ltreeArr: LTreePath[]): LTreePath | null {
  if (ltreeArr.length > 8) throw new Error("Max arguments count: 8");
  return lcaArr(ltreeArr);
}

const getMinItemInfo = (
  ltreeArr: LTreePath[]
): { ind: number; len: number } => {
  if (ltreeArr.length === 0) throw new Error("Min ltree array length: 1");
  let minItemLen = Number.POSITIVE_INFINITY;
  let minItemInd = -1;
  ltreeArr.forEach((e, i) => {
    const len = e.value.length;
    if (len < minItemLen) {
      minItemLen = len;
      minItemInd = i;
    }
  });
  return {
    len: minItemLen,
    ind: minItemInd,
  };
};
export function lcaArr(ltreeArr: LTreePath[]): LTreePath | null {
  if (ltreeArr.length === 0) return null;
  const { ind: minItemInd, len: minItemLen } = getMinItemInfo(ltreeArr);
  if (ltreeArr[minItemInd].rawValue === "") return null;
  if (minItemLen === 1) return new LTreePath("");

  const res = [];
  for (let i = 0; i < minItemLen; i++) {
    const resultSet = new Set();
    ltreeArr.forEach((e) => resultSet.add(e.value[i]));
    if (resultSet.size === 1) res.push(ltreeArr[0].value[i]);
    else break;
  }
  return new LTreePath(res.join("."));
}

export default lca;
