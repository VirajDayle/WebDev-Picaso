const { Command } = require("commander");
const program = new Command();

program
  .name("length-calculator")
  .description("CLI to some file word counter")
  .version("0.8.0");

program
  .command("count")
  .description("Count all the words in a file")
  .argument("<string>", "file name to split")
  .option("--first", "display just the first substring")
  .option("-s, --separator <char>", "separator character", ",")
  .action((str, options) => {
    const limit = options.first ? 1 : undefined;
    console.log(str.split(options.separator, limit));
  });

program.parse();