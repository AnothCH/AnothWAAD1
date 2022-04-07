//include express module or package
const express = require("express");

//include cookie parser module or package
var cookieParser = require("cookie-parser");

//include session module or package

var session = require("express-session");
//create instance of express

var app = express();

app.use(cookieParser());
app.use(session({ secret: "Shh, its a secret!" }));

app.get("/", function (req, res) {
  if (req.session.page_views) {
    req.session.page_views++;
    res.send("You visited this page " + req.session.page_views + " times");
  } else {
    req.session.page_views = 1;
    res.send("Welcome to this page for the first time!");
  }
});

// Demo url to check in postman http://localhost:4000/

// Use the session middleware
app.use(session({ secret: "keyboard cat", cookie: { maxAge: 60000 } }));

// Access the session as req.session
app.get("/index", function (req, res, next) {
  if (req.session.views) {
    req.session.views++;
    res.setHeader("Content-Type", "text/html");
    res.write("<p>views: " + req.session.views + "</p>");
    res.write("<p>expires in: " + req.session.cookie.maxAge / 1000 + "s</p>");
    res.end();
  } else {
    req.session.views = 1;
    res.end("welcome to the session demo. refresh!");
  }
});

// Demo url to check in postman http://localhost:4000/index

app.listen(4000, () => console.log("Listening on port 4000!"));
