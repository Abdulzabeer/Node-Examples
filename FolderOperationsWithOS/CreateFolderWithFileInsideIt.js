const fs = require("fs");
fs.mkdir("Folder1", err => {
  if (err) {
    console.log(err);
  } else {
    fs.writeFile("./Folder1/example.txt", "Somethimg in the file", err => {
      if (err) {
        console.log(err);
      } else {
        console.log("successfully Created File and Folder ");
      }
    });
  }
});
