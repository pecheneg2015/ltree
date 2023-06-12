import { parse } from "./grammar/lxtqueryParser";

console.log(parse("!test"));
console.log(parse("test"));
console.log(parse("test&test"));
console.log(parse("test|test"));
console.log(parse("((a|b&c))&test"));
console.log(parse("!((a|b&c))&test"));
console.log(parse("!!test&test"));
console.log(parse("!!(a&((test&test))|g)"));
console.log(parse("!!test_A*%&test@"));
console.log(parse("test_A*%"));
