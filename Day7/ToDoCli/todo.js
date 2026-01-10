const fs = require("fs");
const path = require("path");
const { Command } = require("commander");
const { randomUUID } = require("crypto");

const program = new Command();
const DATA_FILE = path.join(__dirname, "data.json");

function readData() {
  if (!fs.existsSync(DATA_FILE)) return [];
  return JSON.parse(fs.readFileSync(DATA_FILE, "utf-8"));
}

function writeData(data) {
  fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));
}

program
  .command("add <title>")
  .description("Add a new todo")
  .action((title) => {
    const data = readData();
    data.push({
      id: randomUUID(),
      title,
      createdAt: Date.now(),
      completed: false,
    });

    writeData(data);
    console.log("✅ Todo added");
  });

program.name("todo-list").description("A javascript todo").version("0.8.0");


program.parse(process.argv);
