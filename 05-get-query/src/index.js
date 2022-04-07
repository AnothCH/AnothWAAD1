//include express module or package
const express = require("express");

//create instance of express
const app = express();

//Here, I Used Query paramater, then the server will respond back with the user_id and name.
app.get("/api/users", function (req, res) {
  const user_id = req.query.id;
  const name = req.query.name;

  res.send({
    user_id: user_id,
    name: name,
  });
});

//  Demo url to check in postman http://localhost:4000/api/users?id=1&token=anoth

// -------------------------

// req.params with Routes
app.get("/app/:version", function (req, res) {
  res.send(req.params.version);
});
// The server will respond back with the app version.
//   Demo utl to check in postman http://localhost:4000/app/2.0

app.listen(4000, () => console.log("Listening on port 4000!"));
