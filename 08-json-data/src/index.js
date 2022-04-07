//include express module or package
const express = require("express");

//create instance of express
const app = express();

// Serving Json data

app.get("/", function (req, res) {
  let jsonData = [
    {
      name: "anoth",
      id: 1,
      dummyDame: "Hello World",
    },
  ];
  res.json(jsonData);
  res.end();
});

// Demo url to check in postman http://localhost:4000/

// Json dtaa with with POST Parameters
app.post("/api", function (req, res) {
  const name = req.query.name;
  const id = req.query.id;

  res.send({
    name: name,
    id: id,
  });
});
// Demo url to check in postman http://localhost:4000/api?name=Anoth&id=44
// Result::::
// {
//     "name": "Anoth",
//     "id": "44"
// }

// The response from the will be json data

app.listen(4000, () => console.log("Listening on port 4000!"));
