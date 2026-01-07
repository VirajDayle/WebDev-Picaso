function waitFor3(resolve,ms){
    setTimeout(resolve,ms)
}
function setTimeOutPromisified() {
  return new Promise(waitFor3);
}

function sayHello() {
  console.log("Hello world");
}

setTimeOutPromisified(2000).then(sayHello);
