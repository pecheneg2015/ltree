import { LTreePath } from "../LTreePath";
import { nlevel } from "../utils/nlevel";
import { ltree2text } from "../utils";

describe("ltree2text", () => {
  test("empty path", () => {
    expect(ltree2text(new LTreePath(""))).toBe("");
  });
  test("not empty ltree", () => {
    expect(ltree2text(new LTreePath("1.2.3.4.5"))).toBe("1.2.3.4.5");
  });
});
