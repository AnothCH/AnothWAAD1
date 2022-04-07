//include express module or package
const express = require("express");

//create instance of express
const app = express();

var path = require("path");
var public = path.join(__dirname, "public");

// viewed at http://localhost:4000
app.get("/", function (req, res) {
  res.sendFile(path.join(public, "index.html"));
});

// Serving separate html file
app.get("/another", function (req, res) {
  res.sendFile(path.join(public, "Another.html"));
});

//  Demo url to check in postman http://localhost:4000/another

// built-in method to serve your static files
// app.use(express.static("public"));

app.listen(4000, () => console.log("Listening on port 4000!"));
