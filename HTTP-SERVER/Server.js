const http = require("http");
const server = http.createServer((req, res) => {
  res.write("hello world from node js");
  res.end();
});
server.listen("3002");
