const fs = require("fs");
fs.rmdir("Folder1", err => {
  if (err) {
    console.log(err);
  } else {
    console.log("successfully deleted Folder");
  }
});
