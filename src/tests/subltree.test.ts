import { LTreePath } from "../LTreePath";
import { nlevel } from "../utils/nlevel";
import { ltree2text, subltree } from "../utils";

describe("subltree", () => {
  test("empty path", () => {
    expect(subltree(new LTreePath(""), -100, 100).rawValue).toBe("");
  });
  test("empty slice", () => {
    expect(subltree(new LTreePath("1.2.3.4.5"), 0, 0).rawValue).toBe("");
  });
  test("full slice", () => {
    expect(subltree(new LTreePath("1.2.3.4.5"), 0, 5).rawValue).toBe(
      "1.2.3.4.5"
    );
  });
  test("partial slice", () => {
    expect(subltree(new LTreePath("1.2.3.4.5"), 1, 4).rawValue).toBe("2.3.4");
  });
});
