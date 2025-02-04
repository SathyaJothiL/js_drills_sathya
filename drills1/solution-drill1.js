function func1(arr) {
  if (!Array.isArray(arr)) {
    return "Invalid Dataset";
  }
  if (arr.length == 0) {
    return "Empty Dataset";
  }
  let e = [];
  for (let i of arr) {
    if (typeof i.email !== "string") {
      e.push("Email input is not valid");
    }
    if (!i.email) {
      e.push("Empty email input");
    } else {
      e.push(i.email);
    }
  }

  return e;
}

function func2(arr, ageval) {
  if (!Array.isArray(arr)) {
    return "Invalid dataset";
  }
  if (!arr.length) {
    return "Empty dataset";
  }
  if (typeof ageval !== "number" || ageval < 0) {
    return "Invalid age";
  }
  h = [];
  for (let i of arr) {
    if (i.age == ageval && Array.isArray(i.hobbies)) {
      h.push(i.name, i.hobbies);
    }
  }
  return h.length > 0 ? h : `No hobbies with age ${ageval}`;
}

function aus() {
  if (!Array.isArray(arr)) {
    return "Invalid dataset";
  }
  if (!arr.length) {
    return "Empty dataset";
  }
  console.log("Students who live in Australia");
  for (const i of arrayOfObjects) {
    if (i.isStudent == true) {
      console.log(i.name);
    }
  }
}

function func3(arr, boolval) {
  if (typeof boolval !== "boolean") {
    return "Invalid boolean value ";
  }
  if (boolval == false) {
    return "Incorrect Input";
  }
  l = [];
  for (const i of arr) {
    if (i.isStudent == true && typeof i.country === "string") {
      l.push(i.name);
    }
  }
  return l.length > 0 ? l : "No students live in Australia";
}

function func4(arr, indx) {
  if (typeof indx !== "number") {
    return "Invalid position";
  }
  if (indx > arr.length) {
    return "Index is greater than length of the array";
  }
  if (typeof arr[indx - 1] === "undefined" || typeof arr[indx - 1] == null) {
    return `Property at index ${indx} has no value`;
  }
  let l = [];
  l.push(arr[indx - 1].name, arr[indx - 1].city);
  return l;
}

function func5(arr) {
  l = [];
  for (const i of arr) {
    if (typeof i.age === "undefined" || i.age === null) {
      l.push(`${i.name} has no age property`);
    } else if (i.age < 0) {
      l.push(`${i.name} has invalid age`);
    } else {
      l.push(`${i.name} age is ${i.age}`);
    }
  }
  return l;
}

function func6(arr) {
  let l = [];
  for (let i of arr) {
    if (!Array.isArray(i.hobbies)) {
      l.push("Hobbies is not an array");
      continue;
    } else {
      if (typeof i.hobbies[0] !== "string") {
        l.push("Invalid value for hobbies");
      } else {
        l.push(i.hobbies[0]);
      }
    }
  }
  return l;
}

function func7(arr, ageval) {
  if (ageval < 0 || !Array.isArray(arr)) {
    return "invalid input";
  }
  let l = [];
  for (i of arr) {
    if (i.age == ageval && typeof i.email === "string") {
      l.push(i.email);
    } else if (i.age == ageval && typeof i.email !== "string") {
      l.push(`Invalid email with age ${ageval}`);
    } else if (i.age == ageval) {
      l.push(i.email);
    }
  }
  return l.length > 0 ? l : `No emails with person of age ${ageval}`;
}

function func8(arr) {
  if (!Array.isArray(arr)) {
    return "Invalid Output";
  }
  let l = [];
  for (i of arr) {
    if (typeof i.city === "string" && typeof i.country === "string") {
      l.push(`city and country of ${i.name} is ${i.city} and ${i.country}`);
    } else {
      l.push(`Invalid property value`);
    }
  }
  return l;
}

module.exports = {
  func1: func1,
  func2: func2,
  func3: func3,
  func4: func4,
  func5: func5,
  func6: func6,
  func7: func7,
  func8: func8,
};
