function sum(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function any(a, b, op) {
  return op(a, b);
}

console.log(any(20, 30, multiply));
