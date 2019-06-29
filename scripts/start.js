const path = require("path");
const inquirer = require("inquirer");
const fs = require("fs");
const webpack = require("webpack");
const open = require("open");

const rootDir = process.cwd();
const dirs = fs.readdirSync(path.resolve(rootDir, "./examples"));

if (!dirs.length) {
  console.log("you have no example here, bye~ ");
  process.exit();
}

inquirer
  .prompt([
    {
      type: "list",
      name: "pack",
      message: "What do you want to build?",
      choices: dirs
    }
  ])
  .then(answers => {
    const dir = path.resolve(rootDir, "examples", answers.pack);
    const config = require(path.resolve(dir, "webpack.config.js"));
    webpack(config, async (err, stats) => {
      if (err || stats.hasErrors()) {
        console.error(stats.toJson().errors);
        return;
      }
      console.log("build successfully!");
      const url = path.resolve(dir, "build", "index.html");
      console.log(`open ${url} in browser`);
      await open(url);
    });
  });
