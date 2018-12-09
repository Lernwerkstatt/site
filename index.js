const express = require("express");
const morgan = require("morgan");
const exphbs = require("express-handlebars");
const path = require("path");
const readJson = require("fs");

const getCalendar = readJson.readFileSync("data/calendar.json", (err, data) => {
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
  res.render("about");
});

app.get("/", (req, res, next) => {  
  res.render("home", convertToJson);
});

const publicDir = require("path").join(__dirname, "/images");
app.use(express.static(publicDir));

app.listen(port);
