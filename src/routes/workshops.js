const express = require("express");
const path = require("path");
const fs = require("fs");

const router = express.Router();

const workshopsPath = path.join(__dirname, "../../data/workshops.json");

router.get("/workshops", (req, res) => {
  fs.readFile(workshopsPath, (err, data) => {
    if (err) throw err;
    res.render("workshops", JSON.parse(data));
  });
});

module.exports = router;
