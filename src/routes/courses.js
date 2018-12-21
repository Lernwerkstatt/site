const express = require("express");
const path = require("path");
const fs = require("fs");
const router = express.Router();

const rootPath = path.join(__dirname, "../", "../");
const coursesPath = path.join(rootPath, "data/courses.json");

router.get("/courses", (req, res) => {
  fs.readFile(coursesPath, (err, data) => {
    if (err) throw err;
    res.render("courses", JSON.parse(data));
  });
});

module.exports = router;
