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

app.get("/about", (req, res, next) => {
  const teamData = fs.readFileSync("data/team.json", (err, data) => {
    if (err) throw err;
  });

  const team = JSON.parse(teamData);
  res.render("about", team);
});

app.get("/", (req, res, next) => {
  res.render("home");
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
