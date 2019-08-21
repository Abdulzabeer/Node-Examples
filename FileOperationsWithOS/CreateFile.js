const fs = require("fs");
fs.writeFile("Example.txt", "This is a example file", err => {
  if (err) {
    console.log(err);
  } else {
    console.log("File is created successfully");
  }
});
