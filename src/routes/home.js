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

function generateCard(result, postsArray) {
  let latestPost = postsArray.blogs[0];
  for (let i = 1; i < postsArray.blogs.length; i++) {
    if (
      latestPost.date.substring(6, 10) <
      postsArray.blogs[i].date.substring(6, 10)
    ) {
      latestPost = postsArray.blogs[i];
    } else if (
      latestPost.date.substring(6, 10) ===
        postsArray.blogs[i].date.substring(6, 10) &&
      latestPost.date.substring(3, 5) < postsArray.blogs[i].date.substring(3, 5)
    ) {
      latestPost = postsArray.blogs[i];
    } else if (
      latestPost.date.substring(6, 10) ===
        postsArray.blogs[i].date.substring(6, 10) &&
      latestPost.date.substring(3, 5) ===
        postsArray.blogs[i].date.substring(3, 5) &&
      latestPost.date.substring(0, 2) < postsArray.blogs[i].date.substring(0, 2)
    ) {
      latestPost = postsArray.blogs[i];
    }
  }
  result.card[2].blogtitle = latestPost.title;
  result.card[2].author = latestPost.author;
  result.card[2].date = latestPost.date;
}

async function latestBlogPost(res, result) {
  try {
    const postsArray = await posts.allPosts;
    generateCard(result, postsArray);
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
