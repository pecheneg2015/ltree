import { parse } from "./grammar/lxtqueryParser";

console.log(parse("!test"));
console.log(parse("test"));
console.log(parse("test&test"));
console.log(parse("test|test"));
console.log(parse("(test&test)"));
console.log(parse("!!(test&test)"));
// console.log(parse("!"));
// console.log(parse("*.*{5}.*.*{4,}.*{1,2}.*{,4}"));
// console.log(parse("*.!a.b"));
// console.log(parse("*.!a*@.b%.a%*")[1]);
// console.log(parse("Top.*{0,2}.sport*@.!football|tennis.Russ*|Spain"));
