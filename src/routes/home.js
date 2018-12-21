const express = require("express");
const path = require("path");
const fs = require("fs");
const router = express.Router();
const dayIcons = [
  "https://img.icons8.com/office/30/000000/sunday.png",
  "https://img.icons8.com/office/30/000000/monday.png",
  "https://img.icons8.com/office/30/000000/tuesday.png",
  "https://img.icons8.com/office/30/000000/wednesday.png",
  "https://img.icons8.com/office/30/000000/thursday.png",
  "https://img.icons8.com/office/30/000000/friday.png",
  "https://img.icons8.com/office/30/000000/saturday.png"
];

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
    let input = JSON.parse(data);
    res.render("home", createDayiconLink(input));
  });
});

function createDayiconLink(data) {
  data.calendar.forEach(element => {
    let tempDate = new Date(convertGermanToEnglishDate(element.date));
    element["dayicon"] = dayIcons[tempDate.getDay()];
  });
  return data;
}

function convertGermanToEnglishDate(date) {
  let result =
    date.slice(3, 5) + "/" + date.slice(0, 2) + "/" + date.slice(6, 10);

  return result;
}

module.exports = router;
