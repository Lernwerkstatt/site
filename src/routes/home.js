const express = require("express");
const path = require("path");
const fs = require("fs");
const moment = require("moment");
const router = express.Router();

const rootPath = path.join(__dirname, "../", "../");
const calendarPath = path.join(rootPath, "data/calendar.json");

router.get("/", (req, res) => {
  fs.readFile(calendarPath, (err, data) => {
    if (err) throw err;
    let input = JSON.parse(data);
    res.render("home", addDayiconLink(input));
  });
});

router.get("/home", (req, res) => {
  fs.readFile(calendarPath, (err, data) => {
    if (err) throw err;
    let input = JSON.parse(data);
    res.render("home", addDayiconLink(input));
  });
});

function addDayiconLink(data) {
  data.calendar.forEach(element => {
    let weekday = moment(element.date, "DD.MM.YYYY").format("dddd");
    element["dayicon"] = `img/calendar/${weekday}.png`;
  });
  return data;
}

module.exports = router;
