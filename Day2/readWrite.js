const fs = require("fs");

fs.readFile("Day2/a.txt", "utf-8",(err,content) => console.log(content));
fs.readFile("Day2/b.txt", "utf-8",(err,content) => console.log(content));
fs.readFile("Day2/c.txt", "utf-8",(err,content) => console.log(content));

console.log("Yes")