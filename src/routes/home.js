const express = require("express");
const path = require("path");
const fs = require("fs");
const moment = require("moment");
const posts = require("../services/database");

let allPosts;
let dateArray = [];

async function test() {
  allPosts = await posts.allPosts.then(datas => (allPosts = datas.blogs));
  for (let i = 0; i < allPosts.length; i++) {
    dateArray.push(allPosts[i].date);
  }
  console.log(dateArray);

  dateArray.sort(date_sort);

  console.log(dateArray);
}

test();

let date_sort = function(date1, date2) {
  if (date1 > date2) return 1;
  if (date1 < date2) return -1;
  return 0;
};

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

module.exports = { prepareHome, router };
