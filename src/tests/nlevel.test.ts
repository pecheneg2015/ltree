import { LTreePath } from "../LTreePath";
import { nlevel } from "../utils/nlevel";

describe("nlevel", () => {
  test("ltree(len=1)", () => {
    expect(nlevel(new LTreePath("1"))).toBe(1);
  });
  test("ltree(len=5)", () => {
    expect(nlevel(new LTreePath("1.2.3.4.5"))).toBe(5);
  });
});
