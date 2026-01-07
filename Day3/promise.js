function aRandomPromis(ms) {
  let p = new Promise((resolve) => setTimeout(resolve, ms));
  return p;
}

function next() {
  console.log("Hello world");
}

aRandomPromis(300).then(next);
