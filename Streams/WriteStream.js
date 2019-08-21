const fs = require("fs");
const readStream = fs.createReadStream("./example.txt", "utf8");
const writeStream = fs.createWriteStream("examle2.txt");
readStream.on("data", chunk => {
  writeStream.write(chunk);
});
