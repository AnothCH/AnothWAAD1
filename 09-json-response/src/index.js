//include express module or package
const express = require("express");

//create instance of express
const app = express();

// Serving Json data

app.get("/", function (req, res) {
  res.json({ message: "Hello World" });
});

// Demo url to check in postman http://localhost:4000/

app.post("/test", function (req, res) {
  // Without `express.json()`, `req.body` is undefined.
  console.log(`${req.body}`);
  res.json({ message: "Post method ok" });
});

// Demo url to check in postman http://localhost:4000/test

app.listen(4000, () => console.log("Listening on port 4000!"));
