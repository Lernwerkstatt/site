const express = require("express");
const path = require("path");
const fs = require("fs");

const router = express.Router();

const projectsPath = path.join(__dirname, "../../data/workshops.json");

router.get("/projects", (req, res) => {
  fs.readFile(projectsPath, (err, data) => {
    if (err) throw err;
    res.render("workshops", JSON.parse(data));
  });
});

module.exports = router;
