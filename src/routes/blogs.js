const express = require("express");
const posts = require("../services/database");

const router = express.Router();

router.route("/blogs").get((req, res) => {
  posts.allPosts.then(data => res.render("blogs", data));
});

router.route("/blogs/:id").get((req, res) => {
  const single = posts.singlePosts(req.params.id);
  res.render("blogs", single[0]);
});

module.exports = router;
