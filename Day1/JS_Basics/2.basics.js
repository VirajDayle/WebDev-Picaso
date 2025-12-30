// arrow function
const sum = (a, b) => a + b;

console.log(sum(20, 30));

let greet = (name) => `Hello ${name}`;
console.log(greet("Raju"));

// objects with the function inside them
let user = {
  greet: (name) => console.log(`Hello ${name}`),
  age: 21,
  occupation: (occ) => console.log(`I am a ${occ}`),
};

console.log(user.greet)