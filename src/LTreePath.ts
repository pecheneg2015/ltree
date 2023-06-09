export class LTreePath {
  private static _ltreeRegExp =
    /(^$|^[a-zA-Z0-9_]{1,255}(.[a-zA-Z0-9]{1,255}){0,65534}$)/;
  private _pathRaw = "";
  private _pathArr: string[] = [];

  static isValidPathString(val: string): boolean {
    return this._ltreeRegExp.test(val);
  }
  constructor(path: string) {
    if (!LTreePath.isValidPathString(path))
      throw new Error("Invalid LTREE path string");
    this._pathRaw = path;
    this._pathArr = path.split(".");
  }

  get value() {
    return this._pathArr;
  }

  get rawValue() {
    return this._pathRaw;
  }
}
