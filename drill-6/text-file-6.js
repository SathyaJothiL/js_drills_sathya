const f=require('./solutions-6')
const testObject = { name: "Bruce Wayne", age: 25, location: "Gotham" };

console.log("Keys");
const a=f.keys(testObject);
console.log(a)

console.log("Values");
const v=f.values(testObject)
console.log(v)

console.log("MapObject");
const c=f.mapObject(f.mapcall,testObject);
console.log(c)

console.log("Pairs");
const p=f.pairs(testObject)
console.log(p)

console.log("Invert");
const inv=f.invert({first:"sathya",last:"joe",full:"sathya joe"})
console.log(inv)

console.log("Defaults");
defaultobj={name:"muthu",age:"25",location: "Chennai"}
let d=f.defaults({ name: "Bruce Wayne", age: undefined, location: "Gotham" },defaultobj)
console.log(d)
d=f.defaults({ name: "Bruce Wayne", age: 36, location: undefined },defaultobj)
console.log(d)