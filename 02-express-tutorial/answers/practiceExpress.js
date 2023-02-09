const express = require("express");
const path = require("path");
const app = express();

const consoleLog = require("./practice-middleware");

app.use(consoleLog);

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./new-public/index.html"));
});

app.get("/sample", (req, res) => {
  res.send("<h1>This is workig.</h1>");
});

app.listen(3000, () => {
  console.log("server is listening on port 3000");
});
