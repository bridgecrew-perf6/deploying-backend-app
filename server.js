require("dotenv").config();

const express = require("express");

const app = express();

const PORT = process.env.PORT || 3000;

app.set("view engine", "ejs");

//home route
app.get("/", (req, res) => {
  res.render("home");
});

//start the server
app.listen(PORT, () => {
  console.log(`Server is up and running on port ${PORT}`);
});

console.log(process.env.PORT);
