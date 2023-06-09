import { text2ltree } from "../utils";

describe("text2ltree", () => {
  test("invalid path", () => {
    expect(() => text2ltree("sdsdsW,")).toThrow();
  });
  test("valid path", () => {
    expect(() => text2ltree("")).not.toThrow();
  });
  test("empty path", () => {
    expect(text2ltree("").rawValue).toBe("");
  });
  test("valid path", () => {
    expect(text2ltree("123.456.789").rawValue).toBe("123.456.789");
  });
});
