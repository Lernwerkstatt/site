const express = require("express");
const path = require("path");
const fs = require("fs");

const router = express.Router();

const blogPath = path.join(__dirname, "../../data/blog.json");

router.route("/blog").get((req, res) => {
  fs.readFile(blogPath, (err, data) => {
    if (err) throw err;
    const result = JSON.parse(data);
    res.render("blog", result);
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
