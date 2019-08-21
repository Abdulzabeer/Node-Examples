const EventEmitter = require("events");
const eventEmitter = new EventEmitter();

eventEmitter.on("tutorial", (num1, num2) => {
  console.log(num1 + num2);
});

eventEmitter.emit("tutorial", 1, 2);
// const tutorial = require("./tutorial");
// console.log(tutorial(1, 2));

class Person extends EventEmitter {
  constructor(name) {
    super();
    this._name = name;
  }
  get name() {
    return this._name;
  }
}
const preson1 = new Person("person1");
const person2 = new Person("person2");

person2.on("name", () => {
  console.log("my name is " + person2.name);
});
preson1.on("name", () => {
  console.log("my name is " + preson1.name);
});
preson1.emit("name");
person2.emit("name");
