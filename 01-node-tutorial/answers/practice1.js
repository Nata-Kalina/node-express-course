const os = require("os");
const { writeFile } = require("fs");

const mySentence = require("./practice2");
const name = os.userInfo().username;

writeFile("./content/practice.txt", `${mySentence} ${name}`, (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
});
