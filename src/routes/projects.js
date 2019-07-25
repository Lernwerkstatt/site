const express = require("express");
const projects = require("../../data/projects.json");

const router = express.Router();

router.get("/projects", (req, res) => {
  res.render("projects", projects);
});

module.exports = router;
