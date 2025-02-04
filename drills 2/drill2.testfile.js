const f = require("./drill2-solution.js");
const i=require("../cars.js");

console.log("Dteails of car with an id of 33")
a = f.func1(i, 33);
console.log(a);
console.log(f.func1());

console.log("Last car in their inventory")
console.log(f.func2(i));

console.log("car models listed alphabetically")
console.log(f.func3(i));
console.log(f.func3([{car_model:null},{car_model:undefined}]));
console.log(f.func3([{car_make:null},{car_make:undefined}]));


yearlist = f.func4(i);
console.log("all the years from every car")
console.log(f.func4(i));
console.log(f.func4([{car_year:2000},{car_year:null},{car_year:undefined}]));

console.log("cars older than the year 2000")
console.log(f.func5(yearlist,2000));
console.log(f.func5(yearlist,500));

console.log("BMW and Audi cars")
console.log(f.func6(i));
console.log(f.func6([{"aus":90}]))
console.log(f.func6([]));