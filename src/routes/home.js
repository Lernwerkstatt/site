const express = require("express");
const path = require("path");
const fs = require("fs");
const moment = require("moment");
const posts = require("../services/database");

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

async function latestBlogPost(res, result) {
  try {
    const post = await posts.allPosts;
    result.card[2].blogtitle = post.blogs[0].title;
    result.card[2].author = post.blogs[0].author;
    result.card[2].date = post.blogs[0].date;
    res.render("home", result);
  } catch (error) {
    console.log(error);
  }
}

router.get("/", (req, res) => {
  fs.readFile(homePath, (err, data) => {
    if (err) throw err;
    latestBlogPost(res, prepareHome(data));
  });
});

module.exports = { prepareHome, router };
