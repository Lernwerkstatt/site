const express = require("express");
const posts = require("../services/database");

const router = express.Router();

router
  .route("/blogs")
  .get((req, res) => {
    posts.allPosts.then(data => res.render("blogs", data));
  })
  .post((req, res) => {
    posts.newPosts(req.body).then(newBlogpost => {
      res.setHeader("Content-Type", "application/json");
      res.json(newBlogpost);
    });
  });

router.route("/blogs/:id").get((req, res) => {
  posts.singlePosts(req.params.id).then(data => res.render("blogs", data[0]));
});

module.exports = router;
