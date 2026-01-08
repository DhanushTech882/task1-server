const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const PORT = 3000;

// Set EJS as view engine
app.set("view engine", "ejs");

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

// Home page
app.get("/", (req, res) => {
  res.render("index");
});

// Form submission
app.post("/submit", (req, res) => {
  const username = req.body.username;
  const email = req.body.email;

  res.render("result", {
    name: username,
    email: email,
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
