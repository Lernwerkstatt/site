const express = require("express");
const path = require("path");
const fs = require("fs");

const router = express.Router();

const contactPath = path.join(__dirname, "../../data/contact.json");

router.get("/contact", (req, res) => {
  fs.readFile(contactPath, (err, data) => {
    if (err) throw err;
    res.render("contact", JSON.parse(data));
  });
});

module.exports = router;
