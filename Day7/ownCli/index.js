const { Command } = require("commander");
const fs = require("fs");
const program = new Command();

const wordCounter = (filePath) => {
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.log("Error reading file:", err);
      return;
    }
    console.log(`Words in file : ${data.trim().split(/\s+/).length} `);
  });
};

program
  .name("length-calculator")
  .description("CLI to some file word counter")
  .version("0.8.0");

program
  .command("count")
  .description("Count all the words in a file")
  .argument("<string>", "file name to split")
  .action((str) => wordCounter(str));

program.parse();
