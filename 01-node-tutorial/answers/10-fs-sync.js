const { readFileSync, writeFileSync } = require("fs");
console.log("start");
const first = readFileSync("./content/first.txt", "utf8");
const second = readFileSync("./content/second.txt", "utf8");

//console.log(first, second);

//write text to the file and if it doesn't exist, node will create it
//flag:'a' for append
writeFileSync(
  "./content/result-sync.txt",
  `Here is the result: "${first}" + "${second}"`,
  { flag: "a" }
);
console.log("done with this task");
console.log("starting with next one");
