let sum = 0;
function each(elements, cb) {
  if (!Array.isArray(elements)) {
    return "Not an array";
  }
  for (let i = 0; i < elements.length; i++) {
    cb(elements[i], i, elements);
  }
  console.log(`sum is ${sum}`);
}
function cb1(x, indx, arr) {
  sum += x;
}

function map(elements, cb) {
  if (!Array.isArray(elements)) {
    return "Not an array";
  }
  let list = [];
  for (const i of elements) {
    res = cb(i);
    list.push(res);
  }
  return list;
}
function cb2(x) {
  return x * x;
}

function reduce(elements, cb, startingValue) {
  if (!Array.isArray(elements)) {
    return "Not an array";
  }
  if (elements.length === 0) {
    return "empty array";
  }
  let a = startingValue;
  let i = 0;
  if (startingValue === undefined) {
    a = elements[0];
    i = 1;
  }
  for (i; i < elements.length; i++) {
    // console.log(`prev val is ${a}, cur val is ${elements[i]} , cur indx is ${i}`)
    a = cb3(a, elements[i], i);
  }
  return a;
}
function cb3(prevval, curval, curindx) {
  prevval += curval;
  return prevval;
}

function find(elements, cb) {
  if (!Array.isArray(elements)) {
    return "Not an array";
  }
  for (const i of elements) {
    a = cb(i);
    if (a) {
      return i;
    }
  }
  return undefined;
}
function cb4(x) {
  if (x == 3) {
    return true;
  }
}

function filter(elements, cb) {
  if (!Array.isArray(elements)) {
    return "Not an array";
  }
  let l = [];
  for (i of elements) {
    a = cb(i);
    if (a) {
      l.push(i);
    }
  }
  return l;
}
function cb5(x) {
  if (x % 2 === 0) {
    return true;
  }
  return false;
}

function flatten(elements, depth = 1, cb) {
  if (!Array.isArray(elements)) {
    return "Not an array";
  }
  if (depth === true) {
    depth = 1;
  }
  if (depth === false || typeof depth !== "number") {
    return elements;
  }
  let l = [];
  for (i of elements) {
    a = cb(i, depth);
    l.push(a);
  }
  return l;
}
function cb6(x, depth) {
  let e = [],
    f = 0;
  for (let i = 0; i < depth; i++) {
    if (Array.isArray(x)) {
      x = x[0];
    } else {
      f = 1;
      e.push(x);
      break;
    }
  }
  if (f == 0) {
    e.push(x);
  }
  return e[0];
}

module.exports = {
  each: each,
  map: map,
  reduce: reduce,
  find: find,
  filter: filter,
  flatten: flatten,
  cb1: cb1,
  cb2: cb2,
  cb3: cb3,
  cb4: cb4,
  cb5: cb5,
  cb6: cb6,
};

// use this array to test your code.
/*
    Complete the following functions.
    These functions only need to work with arrays.
    A few of these functions mimic the behavior of the `Built` in JavaScript Array Methods.
    The idea here is to recreate the functions from scratch BUT if you'd like,
    feel free to Re-use any of your functions you build within your other functions.
    **DONT** Use for example. .forEach() to recreate each, and .map() to recreate map etc.
    You CAN use concat, push, pop, etc. but do not use the exact method that you are replicating

*/
// Do NOT use forEach to complete this function.
// Iterates over a list of elements, yielding each in turn to the `cb` function.
// This only needs to work with arrays.
// You should also pass the index into `cb` as the second argument
// based off http://underscorejs.org/#each

// Do NOT use .map, to complete this function.
// How map works: Map calls a provided callback function once for each element in an array, in order, and functionructs a new array from the res .
// Produces a new array of values by mapping each value in list through a transformation function (iteratee).
// Return the new array.

// Do NOT use .reduce to complete this function.
// How reduce works: A reduce function combines all elements into a single value going from left to right.
// Elements will be passed one by one into `cb` along with the `startingValue`.
// `startingValue` should be the first argument passed to `cb` and the array element should be the second argument.
// `startingValue` is the starting value.  If `startingValue` is undefined then make `elements[0]` the initial value.

// Do NOT use .includes, to complete this function.
// Look through each value in `elements` and pass each element to `cb`.
// If `cb` returns `true` then return that element.
// Return `undefined` if no elements pass the truth test.

// Do NOT use .filter, to complete this function.
// Similar to `find` but you will return an array of all elements that passed the truth test
// Return an empty array if no elements pass the truth test

// Flattens a nested array (the nesting can be to any depth).
// Hint: You can solve this using recursion.
// Example: flatten([1, [2], [3, [[4]]]]); => [1, 2, 3, 4];
