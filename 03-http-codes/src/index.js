//include express module or package
const express = require("express");

//create instance of express
const app = express();

// 404 not found http code
app.get("/", (req, res) => {
  res.sendStatus(404).end();
});

// OK response http code

app.get("/home", (req, res) => {
  res.status(200).send("Standard response for successful HTTP requests. ");
});

// Server error http code
app.get("/profile", (req, res) => {
  res.status(500).send("Server Error");
  //or
  //   res.status(500).end();
});

app.listen(4000, () => console.log("Listening on port 4000!"));
