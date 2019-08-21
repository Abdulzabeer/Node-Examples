const fs = require("fs");
fs.readdir("./Folder1", (err, files) => {
  if (err) {
    console.log(err);
  } else {
    for (let file of files) {
      fs.unlink("./Folder1/" + file, err => {
        if (err) {
          console.log(err);
        } else {
          console.log("File successfully delete");
        }
      });
    }
  }
});
