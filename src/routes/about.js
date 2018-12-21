const express = require("express");
const path = require("path");
const fs = require("fs");
const router = express.Router();

const rootPath = path.join(__dirname, "../", "../");
const teamPath = path.join(rootPath, "data/team.json");

router.get("/about", (req, res) => {
  fs.readFile(teamPath, (err, data) => {
    if (err) throw err;
    res.render("about", JSON.parse(data));
  });
});

module.exports = router;
