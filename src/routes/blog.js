const express = require("express");
const path = require("path");
const fs = require("fs");

const router = express.Router();

const blogPath = path.join(__dirname, "../../data/blog.json");

router.get("/blog", (req, res) => {
  fs.readFile(blogPath, (err, data) => {
    if (err) throw err;
    const result = JSON.parse(data);
    const query = req.query.id;
    if (req.query.id) {
      res.render("singlepost", result.blogposts[query - 1]);
    } else {
      res.render("blog", result);
    }
  });
});

module.exports = router;
