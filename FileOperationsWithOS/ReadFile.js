const fs = require("fs");
fs.writeFile("Example.txt", "This is a example file", err => {
  if (err) {
    console.log(err);
  } else {
    fs.readFile("Example.txt", "utf8", (err, file) => {
      if (err) {
        console.log(err);
      } else {
        console.log(file);
      }
    });
    console.log("File is created successfully");
  }
});
