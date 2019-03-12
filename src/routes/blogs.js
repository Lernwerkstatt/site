const express = require("express");
const uuidv1 = require("uuid/v1");
const moment = require("moment");

const posts = require("../services/database");

const router = express.Router();

router.route("/blogs").get((req, res) => {
  posts.allPosts.then(data => res.render("blogs", data));
});

router
  .route("/blogs/create")
  .get((req, res) => {
    res.render("blogform");
  })
  .post((req, res) => {
    posts
      .newPosts({
        id: uuidv1(),
        title: req.body.title,
        date: moment().format("DD.MM.YYYY"),
        author: req.body.author,
        content: req.body.content,
        imagelink: req.body.imagelink
      })
      .then(newBlogpost => {
        res.setHeader("Content-Type", "application/json");
        res.json(newBlogpost);
      });
    res.redirect("/blogs");
  });

router.route("/blogs/:id").get((req, res) => {
  posts.singlePosts(req.params.id).then(data => res.render("blogs", data[0]));
});

module.exports = router;
