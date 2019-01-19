const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const Blogposts = require("../../models/blogposts");
const dbUrl = require("../../config/secrets");

const connect = mongoose.connect(dbUrl);

// connect.then(
//   db => {
//     console.log("Connected!");
//   },
//   err => {
//     console.log(err);
//   }
// );

const router = express.Router();
router.use(bodyParser.json());

function checkForWhitespace(post) {
  let counter = 320;

  while (post.charAt(counter) !== " " && counter <= post.length) {
    counter++;
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

router.route("/blog").get((req, res) => {
  Blogposts.find({})
    .then(blogposts => {
      const postWithSummary = addSummary(blogposts);
      const addObject = { blogs: postWithSummary };
      res.render("blog", addObject);
    })
    .catch(err => console.log(err));
});

router.route("/blog/:id").get((req, res) => {
  Blogposts.find({ id: req.params.id })
    .then(result => {
      res.render("blog", result[0]);
    })
    .catch(err => console.log(err));
});

module.exports = router;
