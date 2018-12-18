const express = require("express");
const path = require("path");
const fs = require("fs");
const router = express.Router();

const rootPath = path.join(__dirname, "../", "../");
const calendarPath = path.join(rootPath, "data/calendar.json");

router.get("/", (req, res, next) => {
  fs.readFile(calendarPath, (err, data) => {
    if (err) throw err;
    res.render("home", JSON.parse(data));
  });
});

router.get("/home", (req, res, next) => {
  fs.readFile(calendarPath, (err, data) => {
    if (err) throw err;
    res.render("home", JSON.parse(data));
  });
});

module.exports = router;
