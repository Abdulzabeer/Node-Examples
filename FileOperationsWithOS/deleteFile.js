const fs = require("fs");
fs.unlink("Sample.txt", err => {
  if (err) {
    console.log(err);
  } else {
    console.log("successfully delete file");
  }
});
