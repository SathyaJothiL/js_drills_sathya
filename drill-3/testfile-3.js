const u = require("./users");
const f = require("./solution-3");

console.log("all users who are interested in playing video games.");
a = f.f1(u);
console.log(a);

console.log("all users staying in Germany");
b = f.f2(u, "Germany");
console.log(b);

console.log("all users with masters Degree");
c = f.f3(u);
console.log(c);

console.log(
  "Users grouped based on their Programming language mentioned in their designation"
);
d = f.f4(u);
console.log(d);
