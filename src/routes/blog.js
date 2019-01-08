const express = require("express");
const path = require("path");
const fs = require("fs");

const router = express.Router();

const blogPath = path.join(__dirname, "../../data/blog.json");

router.get("/blog", (req, res) => {
  fs.readFile(blogPath, (err, data) => {
    if (err) throw err;
    res.render("blog", JSON.parse(data));
  });
});

module.exports = router;
