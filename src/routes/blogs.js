const express = require("express");
const posts = require("./posts");

const router = express.Router();

router.route("/blogs").get((req, res) => {
  posts.getAllPosts().then(data => res.render("blogs", data));
});

router.route("/blogs/:id").get((req, res) => {
  posts.getSinglePost(req.params.id).then(data => res.render("blogs", data));
});

module.exports = router;
