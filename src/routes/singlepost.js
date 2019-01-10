const express = require("express");
const path = require("path");
const fs = require("fs");

const router = express.Router();

const blogPath = path.join(__dirname, "../../data/blog.json");

router.get("/singlepost", (req, res) => {
  fs.readFile(blogPath, (err, data) => {
    if (err) throw err;
    const result = JSON.parse(data);
    console.log(result);
    const query = req.query.id;
    res.render("singlepost", result.blogposts[query - 1]);
  });
});

module.exports = router;
