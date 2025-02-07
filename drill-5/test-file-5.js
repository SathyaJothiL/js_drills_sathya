const f=require('./solution-5')
const a=f.counterFactory();
console.log("Increment");
console.log(a.increment());
console.log("Decrement");
console.log(a.decrement());

const b=f.limitFunctionCallCount(f.callback,5)
console.log(b());
console.log(b());
console.log(b());
console.log(b());
console.log(b());
console.log(b());


const i=f.cacheFunction(f.square);
console.log(i(1));
console.log(i(2));
console.log(i(2));