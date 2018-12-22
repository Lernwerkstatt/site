const express = require("express");
const path = require("path");
const fs = require("fs");
const router = express.Router();

const calendarPath = path.join(__dirname, "../../data/team.json");

router.get("/about", (req, res) => {
  fs.readFile("data/team.json", (err, data) => {
    if (err) throw err;
    res.render("about", JSON.parse(data));
  });
});

module.exports = router;
