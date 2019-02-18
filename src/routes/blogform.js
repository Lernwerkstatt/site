const express = require("express");
const posts = require("../services/database");

const router = express.Router();

router
  .route("/blogform")
  .get((req, res) => {
    res.render("blogform");
  })
  .post((req, res) => {
    posts.newPosts(req.body).then(newBlogpost => {
      res.setHeader("Content-Type", "application/json");
      res.json(newBlogpost);
    });
  });

module.exports = router;
