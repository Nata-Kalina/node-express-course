const express = require("express");
const app = express();

const mySentence = require("../../01-node-tutorial/answers/practice2");

const consoleLog = (req, res, next) => {
  console.log(mySentence);
  next();
};

app.listen(5001, () => {
  //console.log("Server is listening on port 5001");
});

module.exports = consoleLog;
