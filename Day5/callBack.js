function sayHello(name) {
  console.log(`Hello ${name}`);
}
// original function

function fn(callBack) {
  callBack(`Viraj`);
}
// new function with different name and call original function in it

greet(sayHello);
