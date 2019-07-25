const express = require("express");
const team = require("../../data/team.json");

const router = express.Router();

router.get("/about", (req, res) => {
  res.render("about", team);
});

module.exports = router;
