import { LTreePath } from "../LTreePath";

describe("LtreePath", () => {
  test("Invalid path", () => {
    expect(() => new LTreePath("asd0d_d.a~!sdas")).toThrow();
  });

  test("Valid path", () => {
    expect(() => new LTreePath("Russia.Moscow")).not.toThrow();
  });
  //
  // test("invalid max len value(>65536)", () => {
  //   expect(() => new LTreePath(65537)).toThrowError();
  // });
  //
  // test("invalid max len value(string)", () => {
  //   // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //   // @ts-ignore
  //   expect(() => new LTreePath("test")).toThrowError();
  // });
  //
  // test("invalid max len value(boolean)", () => {
  //   // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //   // @ts-ignore
  //   expect(() => new LTreePath(false)).toThrowError();
  // });
});
