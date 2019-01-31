const express = require("express");
const mongoose = require("mongoose");

const Blogposts = require("../models/blogposts");
const { dbUrl } = require("../../config/secrets");

mongoose.connect(
  dbUrl,
  { useNewUrlParser: true }
);

const router = express.Router();

function checkForWhitespace(post) {
  let counter = 320;

  while (post.charAt(counter) !== " " && counter <= post.length) {
    counter += 1;
  }
  return counter;
}

function addSummary(blogpost) {
  blogpost.forEach(element => {
    element.summary = element.content.substring(
      0,
      checkForWhitespace(element.content)
    );
    element.summary += " ...";
  });

  return blogpost;
}

router.route("/blogs").get((req, res) => {
  Blogposts.find({})
    .then(blogposts => {
      const postWithSummary = addSummary(blogposts);
      const addObject = { blogs: postWithSummary };
      res.render("blogs", addObject);
    })
    .catch(err => console.log(err));
});

router.route("/blogs/:id").get((req, res) => {
  Blogposts.find({ id: req.params.id })
    .then(result => {
      res.render("blogs", result[0]);
    })
    .catch(err => console.log(err));
});

module.exports = router;
