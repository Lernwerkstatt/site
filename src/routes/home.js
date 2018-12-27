const express = require("express");
const path = require("path");
const fs = require("fs");
const moment = require("moment");

const router = express.Router();

const homePath = path.join(__dirname, "../../data/home.json");

function prepareHome(data) {
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
  fs.readFile(homePath, (err, data) => {
    if (err) throw err;
    res.render("home", prepareHome(data));
  });
});

router.get("/home", (req, res) => {
  fs.readFile(homePath, (err, data) => {
    if (err) throw err;
    res.render("home", prepareHome(data));
  });
});

module.exports = router;
