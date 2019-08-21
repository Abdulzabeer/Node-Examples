const fs = require("fs");
fs.rename("Example.txt", "Sample.txt", err => {
  if (err) {
    console.log(err);
  } else {
    console.log("successfully Renamed File");
  }
});
