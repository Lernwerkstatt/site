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

/*
function readJSON(filepath) {
  fs.readFile(filepath, function(err, data) {
    if (err) {
      return err;
    }
    var teamData;
    try {
      teamData = JSON.parse(data);
    } catch (exception) {
      return exception;
    }
    return teamData;
  });
}
*/

var calTeam = fs.readFileSync("data/team.json", (err, data) => {
  if (err) throw err;
});

var team = JSON.parse(calTeam);

app.get("/about", (req, res, next) => {
  //var team = readJSON("data/team.json");
  //console.log(team);
  debugger;
  res.render("about", team);
});

app.get("/", (req, res, next) => {
  res.render("home");
});

var publicDir = require("path").join(__dirname, "/data/img");
app.use(express.static(publicDir));

app.listen(port);
