const fs = require("fs");
// const data = {
//   name: "Abdul zabeer H",
//   date: new Date()
// };
// var json = JSON.parse(data);
fs.appendFile("Sample.txt", "some text", err => {
  if (err) {
    console.log(err);
  } else {
    console.log("Successfully Appended data");
  }
});
