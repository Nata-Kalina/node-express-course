const express = require("express");
const app = express();

app.get("/", (req, res) => {
  console.log("user hit the resource");
  res.status(200).send("Home Page");
});

app.get("/about", (req, res) => {
  res.status(200).send("About Page");
});

app.all("*", (req, res) => {
  res.status(404).send("<h1>Resource not found :(</h1>");
});

app.listen(5001, () => {
  console.log("Server is listening on port 5001");
});
// 1) app.get
// 2) app.post
// 3) app.put
// 4) app.delete
// 5) app.all
// 6) app.use
// 7) app.listen
