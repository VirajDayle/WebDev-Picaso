function test() {
  var x = 10;
  let z = 21;
}

test();
if (true) {
  var x = 15;
}

if (true) {
  let z = 19;
}

console.log(x);
console.log(z);

// both are not working on the functions
//  they var work on outside of the function but let even not use outside of the function

