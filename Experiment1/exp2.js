const EventEmitter= require("events");
const myEmitter=new EventEmitter();

//Event listener
myEmitter.on("Click",()=> {
    console.log("Button clicked !");
});

//trigger the event
myEmitter.emit("Click");
