//include express module or package
const express = require("express");
var app = express();
//include cookie parser module or package
var cookieParser = require("cookie-parser");

app.use(cookieParser());

// Setting cookie
app.get("/", function (req, res) {
  res.cookie("Cookie_Name", "Cookie_value").send("cookie set"); //Sets name = express
});
// cookie key will be set to Cookie_Name and cookie_Value will be set to value
//  Demo url to check in postman http://localhost:4000/

// Setting cookie and Adding Cookies with Expiration Time
app.get("/index", function (req, res) {
  //This cookie also expires after 360000 ms from the time it is set.
  res.cookie("name", "value", { maxAge: 3600 });
  res.end();
});
//  Demo url to check in postman http://localhost:4000/index

// Deleting Existing Cookies
app.get("/clear-cookie", function (req, res) {
  res.clearCookie("name");
  res.send("cookie foo cleared");
});

//  Demo url to check in postman http://localhost:4000/clear-cookie

app.listen(4000, () => console.log("Listening on port 4000!"));
