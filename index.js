const express = require("express");
const morgan = require("morgan");
const exphbs = require("express-handlebars");
const fs = require("fs");

const port = process.env.PORT || 3000;
const app = express();

app.use(morgan("dev"));
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(express.static(__dirname + "/static"));

app.get("/", (req, res, next) => {
  fs.readFile("data/calendar.json", (err, data) => {
    if (err) throw err;
    res.render("home", JSON.parse(data));
  });
});

app.get("/home", (req, res, next) => {
  fs.readFile("data/calendar.json", (err, data) => {
    if (err) throw err;
    res.render("home", JSON.parse(data));
  });
});

app.get("/learn", (req, res, next) => {
  res.render("learn");
});

app.get("/courses", (req, res, next) => {
  res.render("courses");
});

app.get("/workshops", (req, res, next) => {
  res.render("workshops");
});

app.get("/about", (req, res, next) => {
  fs.readFile("data/team.json", (err, data) => {
    if (err) throw err;
    res.render("about", JSON.parse(data));
  });
});

app.get("/contact", (req, res, next) => {
  res.render("contact");
});

app.get("/support", (req, res, next) => {
  res.render("support");
});

app.get("/blog", (req, res, next) => {
  res.render("blog");
});

//The 404 Route (ALWAYS Keep this as the last route)
app.get("*", function(req, res) {
  res.render("error");
});

app.listen(port);
