//include express module or package
const express = require("express");
var app = express();

// Setting up mysql connection in expressjs

const mysql = require("mysql");
const connection = mysql.createConnection({
  host: "localhost",
  user: "dbuser",
  password: "passowrd",
  database: "my_db",
});

connection.connect();

connection.query("SELECT 1 + 1 AS solution", (err, rows, fields) => {
  if (err) throw err;

  console.log("The solution is: ", rows[0].solution);
});

connection.end();

/* GET home page. */
app.get("/", function (req, res, next) {
  res.json({ message: "ok" });
});

app.listen(4000, () => console.log("Listening on port 4000!"));
