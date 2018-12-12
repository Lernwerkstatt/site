const express = require("express");
const morgan = require("morgan");
const exphbs = require("express-handlebars");
const path = require("path");
const fs = require("fs");

const getCalendar = fs.readFileSync("data/calendar.json", (err, data) => {
  if (err) throw err;
});

const convertToJson = JSON.parse(getCalendar);
const port = process.env.PORT || 3000;
const app = express();

app.use(morgan("dev"));
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(express.static(__dirname + "/css"));

app.get("/home", (req, res, next) => {
  res.render("home", convertToJson);
});

app.get("/about", (req, res, next) => {
  var calTeam = fs.readFileSync("data/team.json", (err, data) => {
    if (err) throw err;
  });

  var team = JSON.parse(calTeam);
  res.render("about", team);
});

app.get("/", (req, res, next) => {
  res.render("home", convertToJson);
});

app.get("/learn", (req, res, next) => {
  res.render("learn");
});

app.get("/course", (req, res, next) => {
  res.render("course");
});

app.get("/workshops", (req, res, next) => {
  res.render("workshops");
});

app.get("/support", (req, res, next) => {
  res.render("support");
});

app.get("/error", (req, res, next) => {
  res.render("error");
});

app.get("/blog", (req, res, next) => {
  res.render("blog");
});

app.get("/contact", (req, res, next) => {
  res.render("contact");
});

const publicDir = require("path").join(__dirname, "/static/img");
app.use(express.static(publicDir));

app.listen(port);

// Please ignore. Just leaving this here for now to ask a question in class
// function readJSON(filepath) {
//   fs.readFileSync(filepath, function(err, data) {
//     debugger;
//     if (err) {
//       return err;
//     }
//     var teamData;
//     try {
//       teamData = JSON.parse(data);
//     } catch (exception) {
//       return exception;
//     }
//     return teamData;
//   });
// }
// var team = readJSON("data/team.json");
