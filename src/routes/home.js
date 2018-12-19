const express = require("express");
const path = require("path");
const fs = require("fs");
const router = express.Router();

const rootPath = path.join(__dirname, "../", "../");
const calendarPath = path.join(rootPath, "data/calendar.json");

router.get("/", (req, res) => {
  fs.readFile(calendarPath, (err, data) => {
    if (err) throw err;
    let input = JSON.parse(data);
    res.render("home", createDayiconLink(input));
  });
});

router.get("/home", (req, res) => {
  fs.readFile(calendarPath, (err, data) => {
    if (err) throw err;
    res.render("home", JSON.parse(data));
  });
});

function createDayiconLink(data) {
  return data;
}

module.exports = router;

// "dayicon": "https://img.icons8.com/office/30/000000/monday.png",
