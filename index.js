const express = require("express");
const morgan = require("morgan");
const exphbs = require("express-handlebars");
const fs = require("fs");

let getCalendar;
fs.readFile("data/calendar.json", "utf8", function(err, data) {
  if (err) throw err;
  getCalendar = JSON.parse(data);
});

const port = process.env.PORT || 3000;
const app = express();

app.use(morgan("dev"));
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(express.static(__dirname + "/css"));
app.use(express.static(__dirname + "/static/img"));

app.get("/home", (req, res, next) => {
  res.render("home", getCalendar);
});

app.get("/about", (req, res, next) => {
  var calTeam = fs.readFileSync("data/team.json", (err, data) => {
    if (err) throw err;
  });

  var team = JSON.parse(calTeam);
  res.render("about", team);
});

app.get("/", (req, res, next) => {
  res.render("home", getCalendar);
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

app.get("/support", (req, res, next) => {
  res.render("support");
});

app.get("/blog", (req, res, next) => {
  res.render("blog");
});

app.get("/contact", (req, res, next) => {
  res.render("contact");
});

//The 404 Route (ALWAYS Keep this as the last route)
app.get('*', function(req, res){
  res.render("error");
});

app.listen(port);
