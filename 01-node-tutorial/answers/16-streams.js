const { createReadStream } = require("fs");

const stream = createReadStream("./content/big.txt", {
  highWaterMark: 90000,
  encoding: "utf8",
});

//'data' is the event that we want to listen
stream.on("data", (result) => {
  console.log(result);
});
//we're reading data in chunks
//by default each chunk is 64 kilobytes
//last buffer - remainder
//highWaterMark - control the size of the buffer

stream.on("error", (err) => console.log(err));
