const express = require("express");
const path = require("path");
const fs = require("fs");
const moment = require("moment");
const { promisify } = require("util");
const events = require("../services/events");

const router = express.Router();
const readFile = promisify(fs.readFile);

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

router.get("/", async (req, res) => {
  try {
    const calendar = await events.getEvents();
    const homeFile = await readFile(homePath, { encoding: "UTF-8" });
    console.log(homeFile);
    const home = JSON.parse(homeFile);

    res.render("home", { calendar, card: home.card });
  } catch (err) {
    console.log(err);
  }
});

module.exports = { prepareHome, router };
