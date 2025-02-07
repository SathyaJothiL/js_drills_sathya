
function counterFactory() {
  let count=1;
  return {
    increment: function(){
      count++;
      return count;
    },
    decrement: function(){
      count--;
      return count;
    }
}}


function limitFunctionCallCount(cb,n) {
  let count=0
  function inner(){
    if(count<n){
      count++
      return cb(count)
    }
    else{
      return null
    }
  }
  return inner
}
function callback(count){
  let a=`called ${count} times`
  return a
}


function cacheFunction(cb) {
  const cache={}
  function inner(args){
    arg=args.toString();
    if(cache[arg]){
      console.log("fetching catched result")
      return cache[arg]
    }
    else{
      console.log("calculating new result and storing in cache")
      let a=cb(arg);
      cache[arg]=a;
      return cache[arg]
    }
  }
  return inner
}
function square(arg){
  return arg*arg
}

module.exports={counterFactory:counterFactory,limitFunctionCallCount:limitFunctionCallCount,
  cacheFunction:cacheFunction,callback:callback,square:square
}

// Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.


    // Should return a function that invokes `cb`.
  // The returned function should only allow `cb` to be invoked `n` times.
  // Returning null is acceptable if cb can't be returned

  // Should return a function that invokes `cb`.
  // A cache (object) should be kept in closure scope.
  // The cache should keep track of all arguments have been used to invoke this function.
  // If the returned function is invoked with arguments that it has already seen
  // then it should return the cached result and not invoke `cb` again.
  // `cb` should only ever be invoked once for a given set of arguments.