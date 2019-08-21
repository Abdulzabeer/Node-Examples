const fs = require("fs");
const zlib = require("zlib");
const gzib = zlib.createGzip();
const readStream = fs.createReadStream("./example.txt", "utf8");
const writeStream = fs.createWriteStream("example2.txt.gz");
readStream.pipe(gzib).pipe(writeStream);
