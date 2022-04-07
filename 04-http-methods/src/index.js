//include express module or package
const express = require("express");

//create instance of express
const app = express();

//creates get function with request and response parameters
app.get("/", function (req, res) {
  //sends response to client or browser
  res.send("Welcome to home with get method");
});

//creates post function with request and response parameters
app.post("/", function (req, res) {
  //sends response to client or browser
  res.send("Welcome to home with POST method");
});

//creates get function with request and response parameters
app.delete("/", function (req, res) {
  //sends response to client or browser
  res.send("Welcome to home DELETE method");
});

//creates all function with request and response parameters
app.all("/home", function (req, res) {
  //sends response to client or browser
  res.send("Welcome to Home");
});

app.listen(4000, () => console.log("Listening on port 4000!"));
