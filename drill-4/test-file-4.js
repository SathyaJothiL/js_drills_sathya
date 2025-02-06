const f = require("./solution-4");
const items = [1, 2, 3, 4, 5, 5];
const nestedArray = [1, [2], [[3]], [[[4]]]];

console.log("each");
res = f.each(items, f.cb1); // no return
console.log(res);

console.log("map");
b = f.map(items, f.cb2);
console.log("power of array elements");
console.log(b);
b = f.map([], f.cb2); //empty array
console.log(b);
b = f.map("hi", f.cb2); // not an array
console.log(b);

console.log("reduce");
startingVal = 0;
b = f.reduce(items, f.cb3, startingVal);
console.log(`total sum of array is ${b}`);
b = f.reduce([], f.cb3, startingVal); //empty array
console.log(b);

console.log("find");
res = f.find(items, f.cb4);
console.log(`the element ${res} is found`);
res = f.find([1, 2, 4], f.cb4);
console.log(res); // if no element pass the test case
res = f.find([], f.cb4);
console.log(res); //undefined for empty array

console.log("filter");
res = f.filter(items, f.cb5);
console.log("filtering even numbers");
console.log(res);
res = f.filter([1, 3, 5], f.cb5);
console.log(res); // if no element pass test case

console.log("flatten");
let depth;
res = f.flatten(nestedArray, depth, f.cb6); //default depth=1
console.log(res);
depth = 2;
res = f.flatten(nestedArray, depth, f.cb6); //depth=2
console.log(res);
res = f.flatten(nestedArray, true, f.cb6); //depth=true
console.log(res);
res = f.flatten(nestedArray, false, f.cb6); //depth=false
console.log(res);
res = f.flatten(nestedArray, "67", f.cb6); //depth=string
console.log(res);
