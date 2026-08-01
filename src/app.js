require("dotenv").config();
let express = require("express");
let cookieparser = require("cookie-parser");

let app = express();

app.use(express.json());
app.use(cookieparser());

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Auth service is running",
  });
});

module.exports = app;
