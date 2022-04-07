//include express module or package
const express = require("express");

//create instance of express
const app = express();
app.get("/", (req, res) => res.send("Hello routing"));

// Creating a new route at localhost/hello
app.post("/hello", function (req, res) {
  res.send("You just called the post method at '/hello routing'!\n");
});

// Multiple route
app.get("/Hello/anoth", (req, res) => {
  res.send("Hello from Anoth!");
});

// Displaying parameters in the path of the route (Dynamic Route)
app.get("/hello/:helloId/anoth/:anothId", (req, res) => {
  res.send(req.params);
});

// If I enter localhost:4000/hello/5/anoth/3 in postman then the result will be
// {
//     "helloId": "5",
//     "anothId": "3"
// }

app.listen(4000, () => console.log("Listening on port 4000!"));
