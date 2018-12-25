const express = require("express");
const fs = require("fs");

const router = express.Router();

router.get("/workshops", (req, res) => {
  fs.readFile("data/workshops.json", (err, data) => {
    if (err) throw err;
    res.render("workshops", JSON.parse(data));
  });
});

module.exports = router;
