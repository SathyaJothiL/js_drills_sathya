const f = require("./solution-drill1");
let p = [
  {
    id: 1,
    name: "Alice",
    age: 30,
    email: "alice@example.com",
    city: "New York",
    country: "USA",
    hobbies: ["reading", "painting"],
    isStudent: false,
  },
  {
    id: 2,
    name: "Bob",
    age: 25,
    email: "bob@example.com",
    city: "London",
    country: "UK",
    hobbies: ["playing guitar", "hiking"],
    isStudent: true,
  },
  {
    id: 3,
    name: "Charlie",
    age: 35,
    email: "charlie@example.com",
    city: "Paris",
    country: "France",
    hobbies: ["cooking", "gardening"],
    isStudent: false,
  },
  {
    id: 4,
    name: "David",
    age: 28,
    email: "david@example.com",
    city: "Berlin",
    country: "Germany",
    hobbies: ["photography", "traveling"],
    isStudent: true,
  },
  {
    id: 5,
    name: "Eve",
    age: 32,
    email: "eve@example.com",
    city: "Sydney",
    country: "Australia",
    hobbies: ["yoga", "surfing"],
    isStudent: false,
  },
  {
    id: 6,
    name: "Frank",
    age: 33,
    email: "frank@example.com",
    city: "Los Angeles",
    country: "USA",
    hobbies: ["playing basketball", "reading"],
    isStudent: true,
  },
  {
    id: 7,
    name: "Grace",
    age: 29,
    email: "grace@example.com",
    city: "Toronto",
    country: "Canada",
    hobbies: ["painting", "running"],
    isStudent: false,
  },
  {
    id: 8,
    name: "Hannah",
    age: 31,
    email: "hannah@example.com",
    city: "Melbourne",
    country: "Australia",
    hobbies: ["writing", "knitting"],
    isStudent: true,
  },
  {
    id: 9,
    name: "Ivy",
    age: 27,
    email: "ivy@example.com",
    city: "Tokyo",
    country: "Japan",
    hobbies: ["playing piano", "cooking"],
    isStudent: false,
  },
  {
    id: 10,
    name: "Jack",
    age: 34,
    //  email: 'jack@example.com',
    city: "Mumbai",
    country: "India",
    hobbies: ["playing cricket", "watching movies"],
    isStudent: true,
  },
];
//email addresses of all individuals.
//test cases
console.log(f.func1(null));
console.log(f.func1([]));
console.log(f.func1());
console.log(f.func1(8));
console.log(f.func1(p));
aray = [{ id: 1, name: "Alice", age: 30, email: 12 }];
console.log(f.func1(aray));

//hobbies of individuals with a specific age, say 30 years old.
//test cases
console.log(f.func2([]));
console.log(f.func2(null));
console.log(f.func2(p, 15));

//Students who live in Australia
//testcases
console.log(f.func3(p, 1));
console.log(f.func3(p, true));
console.log(f.func3(p, false));

//name and city of the individual at the index position 3 in the dataset.
//testcases
console.log(f.func4(p, 4));
console.log(f.func4(p, "4"));
console.log(f.func4(p, 3));

//ages of all individuals in the dataset
//testcases
console.log(f.func5(p));
console.log(
  f.func5([
    {
      id: 3,
      name: "Charlie",
      age: -6,
      email: "charlie@example.com",
      city: "Paris",
      country: "France",
      hobbies: ["cooking", "gardening"],
      isStudent: false,
    },
  ])
);
console.log(
  f.func5([
    {
      id: 3,
      name: "Charlie",
      age: null,
      email: "charlie@example.com",
      city: "Paris",
      country: "France",
      hobbies: ["cooking", "gardening"],
      isStudent: false,
    },
  ])
);
console.log(
  f.func5([
    {
      id: 3,
      name: "Charlie",
      email: "charlie@example.com",
      city: "Paris",
      country: "France",
      hobbies: ["cooking", "gardening"],
      isStudent: false,
    },
  ])
);

//display the first hobby of each individual in the dataset.
console.log(f.func6(p));
console.log(
  f.func6([
    {
      id: 3,
      name: "Charlie",
      email: "charlie@example.com",
      city: "Paris",
      country: "France",
      hobbies: [5, "gardening"],
      isStudent: false,
    },
  ])
);
console.log(
  f.func6([
    {
      id: 3,
      name: "Charlie",
      email: "charlie@example.com",
      city: "Paris",
      country: "France",
      hobbies: "playing",
      isStudent: false,
    },
  ])
);

//names and email addresses of individuals aged 25
console.log(f.func7(p, 25));
console.log(
  f.func7(
    [
      {
        id: 1,
        name: "Alice",
        age: 30,
        email: "alice@example.com",
        city: "New York",
        country: "USA",
        hobbies: ["reading", "painting"],
        isStudent: false,
      },
    ],
    30
  )
);
console.log(f.func7(p, -6));

//log the city and country of each individual in the dataset.
console.log(f.func8(p));
console.log(f.func8([]));
console.log(
  f.func8([
    {
      id: 2,
      name: "Bob",
      age: 25,
      email: "bob@example.com",
      city: "London",
      country: "UK",
      hobbies: ["playing guitar", "hiking"],
      isStudent: true,
    },
  ])
);
