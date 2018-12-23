const express = require("express");
const fs = require("fs");

const router = express.Router();

router.get("/about", (req, res) => {
  fs.readFile("data/team.json", (err, data) => {
    if (err) throw err;
    res.render("about", JSON.parse(data));
  });
});

module.exports = router;
