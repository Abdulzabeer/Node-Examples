const fs = require("fs");
fs.mkdir("Folder1", err => {
  if (err) {
    console.log(err);
  } else {
    console.log("successfully created Folder");
  }
});
