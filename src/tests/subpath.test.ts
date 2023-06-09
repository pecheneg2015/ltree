import { LTreePath } from "../LTreePath";
import { subpath } from "../utils";

describe("subpath", () => {
  test("negative offset:-1", () => {
    expect(subpath(new LTreePath("1.2.3.4.5"), -1).rawValue).toBe("5");
  });
  test("negative offset:-2", () => {
    expect(subpath(new LTreePath("1.2.3.4.5"), -2).rawValue).toBe("4.5");
  });
  test("negative offset:-5", () => {
    expect(subpath(new LTreePath("1.2.3.4.5"), -5).rawValue).toBe("1.2.3.4.5");
  });
  test("negative offset:-6", () => {
    expect(subpath(new LTreePath("1.2.3.4.5"), -6).rawValue).toBe("5");
  });
  test("negative offset:-7", () => {
    expect(subpath(new LTreePath("1.2.3.4.5"), -7).rawValue).toBe("4.5");
  });
  test("negative offset:-10", () => {
    expect(subpath(new LTreePath("1.2.3.4.5"), -10).rawValue).toBe("1.2.3.4.5");
  });

  test("positive offset:1", () => {
    expect(subpath(new LTreePath("1.2.3.4.5"), 1).rawValue).toBe("2.3.4.5");
  });
  test("positive offset:2", () => {
    expect(subpath(new LTreePath("1.2.3.4.5"), 2).rawValue).toBe("3.4.5");
  });
  test("positive offset: 5", () => {
    expect(subpath(new LTreePath("1.2.3.4.5"), 5).rawValue).toBe("1.2.3.4.5");
  });
  test("positive offset:6", () => {
    expect(subpath(new LTreePath("1.2.3.4.5"), 6).rawValue).toBe("2.3.4.5");
  });
  test("negative offset:7", () => {
    expect(subpath(new LTreePath("1.2.3.4.5"), 7).rawValue).toBe("3.4.5");
  });
  test("negative offset:10", () => {
    expect(subpath(new LTreePath("1.2.3.4.5"), 10).rawValue).toBe("1.2.3.4.5");
  });

  test("negative offset with len :-1", () => {
    expect(subpath(new LTreePath("1.2.3.4.5"), -1, 5).rawValue).toBe("5");
  });
  test("negative offset with len :-2", () => {
    expect(subpath(new LTreePath("1.2.3.4.5"), -2, 1).rawValue).toBe("4");
  });
  test("negative offset with len:-5", () => {
    expect(subpath(new LTreePath("1.2.3.4.5"), -5, 3).rawValue).toBe("1.2.3");
  });
  test("negative offset:-6", () => {
    expect(subpath(new LTreePath("1.2.3.4.5"), -6, 10).rawValue).toBe("5");
  });
  test("negative offset:-7", () => {
    expect(subpath(new LTreePath("1.2.3.4.5"), -7, 1).rawValue).toBe("4");
  });
  test("negative offset:-10", () => {
    expect(subpath(new LTreePath("1.2.3.4.5"), -10, 0).rawValue).toBe("");
  });
});
//TODO: Тесты для отрицательного len
