const fs = require("fs");
fs.unlink("./Folder1/example.txt", err => {
  if (err) {
    console.log(err);
  } else {
    fs.rmdir("Folder1", err => {
      console.log("Successfully folder with files are deleted");
    });
  }
});
