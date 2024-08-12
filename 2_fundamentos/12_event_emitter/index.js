import EventEmitter from "events";
const eventEmitter = new EventEmitter();

eventEmitter.on("start", () => {
  //quando executado vai trazer a mensagem durante
  console.log("Durante");
});

console.log("Antes");

eventEmitter.emit("start");

console.log("Depois");
