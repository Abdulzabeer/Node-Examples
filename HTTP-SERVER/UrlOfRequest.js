const http = require("http");
const server = http.createServer((req, res) => {
  if (req.url == "/") {
    res.write("<h1>Hello World</h1>");
    res.end();
  } else {
    res.write("some other url page not existes");
    res.end();
  }
});
server.listen("3003");
