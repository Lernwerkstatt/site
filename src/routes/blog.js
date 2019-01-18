const express = require("express");
const path = require("path");
const fs = require("fs");

const router = express.Router();

const blogPath = path.join(__dirname, "../../data/blog.json");

function checkForWhitespace(post) {
  let counter = 320;

  while (post.charAt(counter) !== " " && counter <= post.length) {
    counter++;
  }

  return counter;
}

function addSummary(blogpost) {
  blogpost.blogposts.forEach(element => {
    element.summary = element.blogpost.substring(
      0,
      checkForWhitespace(element.blogpost)
    );
    element.summary += " ...";
  });

  return blogpost;
}

router.route("/blog").get((req, res) => {
  fs.readFile(blogPath, (err, data) => {
    if (err) throw err;
    const postWithSummary = addSummary(JSON.parse(data));

    res.render("blog", postWithSummary);
  });
});

router.route("/blog/:id").get((req, res) => {
  fs.readFile(blogPath, (err, data) => {
    if (err) throw err;
    const result = JSON.parse(data);
    const query = req.params.id;
    res.render("blog", result.blogposts[query - 1]);
  });
});

module.exports = router;
