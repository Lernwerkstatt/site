const express = require("express");
const morgan = require("morgan");
const exphbs = require("express-handlebars");
const path = require("path");
const fs = require("fs");

const port = process.env.PORT || 3000;

const app = express();
app.use(morgan("dev"));
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(express.static(__dirname + "/css"));

app.get("/home", (req, res, next) => {
  res.render("home");
});

var calTeam = fs.readFileSync("data/team.json", (err, data) => {
  if (err) throw err;
});

var team = JSON.parse(calTeam);

app.get("/about", (req, res, next) => {
  res.render("about", team);
});

app.get("/", (req, res, next) => {
  res.render("home");
});

var publicDir = require("path").join(__dirname, "/data/img");
app.use(express.static(publicDir));

app.listen(port);

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
