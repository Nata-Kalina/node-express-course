const EventEmitter = require("events");

const customEmitter = new EventEmitter();
//the instance of the class EventEmitter
//on - listen for an event
//emit - emit an event

customEmitter.on("response", (name, id) => {
  console.log(`data received: user: ${name} with id: ${id}`);
});
//1) we can have as many methods here as we want
customEmitter.on("response", () => {
  console.log(`some other logic here`);
});

customEmitter.emit("response", "john", 34);
//2) the order matters: first we listen the event, then we emit event
//3) we can pass the arguments when we're emitting the event
