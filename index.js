const express = require("express");
const morgan = require("morgan");
const exphbs = require("express-handlebars");
const path = require("path");

const port = process.env.PORT || 3000;

const app = express();
app.use(morgan("dev"));
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(express.static(__dirname + "/css"));

app.get("/home", (req, res, next) => {
  res.render("home");
});

app.get("/about", (req, res, next) => {
  res.render("about");
});

app.get("/", (req, res, next) => {
  res.render("home");
});

var publicDir = require("path").join(__dirname, "/data/img");
app.use(express.static(publicDir));

app.listen(port);
