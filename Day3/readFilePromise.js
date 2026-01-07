const fs = require("fs");


function readFilePromise(fileName) {
  return new Promise((resolve, reject) => {
    fs.readFile(fileName, "utf-8", (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
}

readFilePromise("Day2/a.txt")
  .then(function (data) {
    console.log(data);
    console.log("Hello world");
  })
  .catch(function (err) {
    console.error(err);
  });
