const express = require("express");
const app = express();
const port = 3000;
const path = require("path");
const fs = require("fs");

app.use(express.json());

const DATA_FILE = path.join(__dirname, "list.json");

function readData() {
  if (!fs.existsSync(DATA_FILE)) return [];
  return JSON.parse(fs.readFileSync(DATA_FILE, "utf-8"));
}

function writeData(data) {
  fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));
}

app.get("/todo", (req, res) => {
  res.send(readData());
});

app.post("/adtodo", (req, res) => {
  const todo = req.body;
  const todos = readData();

  todos.push(todo);
  writeData(todos); // 🔥 THIS was missing

  res.status(201).send("Data received and saved");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
