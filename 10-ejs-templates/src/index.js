//include express module or package
const express = require("express");

//create instance of express
const app = express();

// setting EJS as the Express app view engine
app.set("view engine", "ejs");

// Passing the user data in ejs template and render in html format
const user = {
  firstName: "Anoth",
  lastName: "Jeev",
};
app.get("/", (req, res) => {
  res.render("pages/index", {
    user: user,
  });
});
app.listen(4000, () => console.log("Listening on port 4000!"));
