const express = require("express");
const path = require("path");
const fs = require("fs");
const router = express.Router();

const rootPath = path.join(__dirname, "../", "../");
const workshopsPath = path.join(rootPath, "data/workshops.json");

router.get("/workshops", (req, res) => {
  fs.readFile(workshopsPath, (err, data) => {
    if (err) throw err;
    res.render("workshops", JSON.parse(data));
  });
});

module.exports = router;
