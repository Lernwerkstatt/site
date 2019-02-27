const express = require("express");
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
    posts.newPosts(req.body).then(newBlogpost => {
      res.setHeader("Content-Type", "application/json");
      res.json(newBlogpost);
    });
    res.redirect("/blogs");
  });

router.route("/blogs/:id").get((req, res) => {
  posts.singlePosts(req.params.id).then(data => res.render("blogs", data[0]));
});

module.exports = router;
