require("dotenv").config();

const express = require("express");

const app = express();

app.set("view engine", "ejs");

//home route
app.get("/", (req, res) => {
  res.render("home");
});

//start the server
app.listen(3000, () => {
  console.log(`Server is up and running on port 3000`);
});
