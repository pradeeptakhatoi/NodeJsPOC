const http = require("http");
let fs = require("fs");
//create a server object:
http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html" }); // http header
    const url = req.url;
    const date = new Date();
    if (url === "/") {
      fs.readFile("index.html", function (err, data) {
        res.write(data);
        res.end();
      });
    } else if (url === "/monday") {
      res.write("<h1>Monday<h1>"); //write a response
      res.write("<p>" + date + "</p>");
      res.end(); //end the response
    } else if (url === "/tuesday") {
      res.write("<h1>Tuesday<h1>"); //write a response
      res.write("<p>" + date + "</p>");
      res.end(); //end the response
    } else if (url === "/wednesday") {
      res.write("<h1>Wednesday<h1>"); //write a response
      res.write("<p>" + date + "</p>");
      res.end(); //end the response
    } else if (url === "/thursday") {
      res.write("<h1>Thursday<h1>"); //write a response
      res.write("<p>" + date + "</p>");
      res.end(); //end the response
    } else if (url === "/friday") {
      res.write("<h1>Friday<h1>"); //write a response
      res.write("<p>" + date + "</p>");
      res.end(); //end the response
    } else if (url === "/saturday") {
      res.write("<h1>Saturday<h1>"); //write a response
      res.write("<p>" + date + "</p>");
      res.end(); //end the response
    } else if (url === "/sunday") {
      res.write("<h1>Sunday<h1>"); //write a response
      res.write("<p>" + date + "</p>");
      res.end(); //end the response
    } else {
      res.write("<h1>Error 404!!<h1>"); //write a response
      res.end(); //end the response
    }
  })
  .listen(3000, function () {
    console.log("server start at port 3000"); //the server object listens on port 3000
  });
