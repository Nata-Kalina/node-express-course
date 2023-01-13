const http = require("http");

//req represetns incoming requests from the client
//res is what we're sending back
const server = http.createServer((req, res) => {
  //console.log(req);
  if (req.url === "/") {
    res.end("Welcome to our home page!");
  } else if (req.url === "/about") {
    res.end("Here is our short history");
  } else {
    res.end(
      `<h1>Oops! </h1>
    <p>We can't seem to find the page you are looking for :(</p>
    <a href="/">back home</a>`
    );
  }
});

//we need to define the port our server will be listening to
server.listen(5001);
