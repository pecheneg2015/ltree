import { parse } from "./grammar/test";

console.log(parse("*"));
console.log(parse("*|*{5}|*|*{5,}|*{1,2}|*{,4}"));
console.log(parse("*"));
console.log(parse("*|?a|b"));
