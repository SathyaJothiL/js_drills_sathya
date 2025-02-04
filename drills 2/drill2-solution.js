

function func1(arr, idval) {
    if(arr==undefined || idval==undefined){
        return "Missing parameters"
    }
    if(!Array.isArray || arr.length==0){
        return "Invalid"
    }
  if (arr.length == 0) {
    return "Empty dataset";
  }
  if (!Array.isArray(arr)) {
    return "Invalid dataset";
  }
  if (typeof idval !== "number") {
    return "Invalid ID. ID must be a Number";
  }

  let result;

  arr.forEach(func);
  function func(val) {
    
    if (val.id == idval) {
      result = val;
    }
  }
  if (result == null) {
    return `No car is found with id ${idval}`;
  }
  return `Car ${idval} is Car with Make ${result.car_make} with Model ${result.car_model}  `;
}

// console.log(result)

function func2(arr) {
    if(!Array.isArray || arr.length==0){
        return "Invalid"
    }
  len = arr.length;
  result = arr.at(len - 1);
  return `The last car is ${result.car_make} with Model ${result.car_model} `;
}


function func3(arr) {
    if(!Array.isArray || arr.length==0){
        return "Invalid"
    }
const filtered=arr.filter(func);
function func(val){
    return typeof(val.car_model)==="string" 
}
if(filtered.length==0){
    return "No cars have model"
}
  const mapped = filtered.map(func);
  function func(val) {
      return val.car_model;
    }
  mapped.sort();
  return mapped;
}

function func4(arr) {
    if(!Array.isArray || arr.length==0){
        return "Invalid"
    }
filtered=arr.filter(func)
function func(val){
    return typeof(val.car_year)==="number"
}
  mapped = filtered.map(func);
  function func(val) {
    return val.car_year;
  }
  return mapped;
}


function func5(arr,yrval) {
    if(!Array.isArray || arr.length==0){
        return "Invalid"
    }
  const filtered = arr.filter(func);
  function func(val) {
    return val < yrval;
  }
  if(filtered.length==0){
    return `No cars are less than ${yrval}`
  }
  return filtered;
}


function func6(arr) {
    if(!Array.isArray || arr.length==0){
        return "Invalid Dataset"
    }
  const ba = arr.filter(func);
  function func(val) {
    return val.car_make == "BMW" || val.car_make == "Audi";
  }
  if(ba.length==0){
    return "No BMW and Audi cars in inventory"
  }
  const ba2 = arr.map(func);
  function func(val) {
    return val.car_model;
  }
  return JSON.stringify(ba2);
}

module.exports={func1:func1,func2:func2,func3:func3,func4:func4,func5:func5,func6:func6}
