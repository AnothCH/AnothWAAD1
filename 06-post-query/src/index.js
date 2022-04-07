//include express module or package
const express = require("express");

//create instance of express
const app = express();

//Here, I Used POST Query paramater, then the server will respond back with name.

// req.body with POST Parameters
app.post("/api/users", function (req, res) {
  const name = req.query.name;

  res.send({
    name: name,
  });
});

// Demo url to check in postman http://localhost:4000/api/users?name=anoth

app.listen(4000, () => console.log("Listening on port 4000!"));
