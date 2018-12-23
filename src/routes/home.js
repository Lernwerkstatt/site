const express = require("express");
const path = require("path");
const fs = require("fs");
const moment = require("moment");

const router = express.Router();

const rootPath = path.join(__dirname, "../", "../");
const calendarPath = path.join(rootPath, "data/calendar.json");

function prepareCalendar(data) {
  const result = JSON.parse(data);

  result.calendar.forEach(element => {
    const weekday = moment(element.date, "DD.MM.YYYY")
      .format("dddd")
      .toLowerCase();
    element.dayicon = `img/calendar/${weekday}.png`;
  });

  return result;
}

router.get("/", (req, res) => {
  fs.readFile(calendarPath, (err, data) => {
    if (err) throw err;
    res.render("home", prepareCalendar(data));
  });
});

router.get("/home", (req, res) => {
  fs.readFile(calendarPath, (err, data) => {
    if (err) throw err;
    res.render("home", prepareCalendar(data));
  });
});

module.exports = router;
