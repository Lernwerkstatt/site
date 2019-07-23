const express = require("express");
const path = require("path");
const fs = require("fs");

const router = express.Router();

const partnersPath = path.join(__dirname, "../../data/partners.json");

router.get("/partners", (req, res) => {
  fs.readFile(partnersPath, (err, data) => {
    if (err) throw err;
    res.render("partners", JSON.parse(data));
  });
});

module.exports = router;
