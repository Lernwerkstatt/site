const express = require("express");
const team = require("../../data/team.json");

const router = express.Router();

router.get("/team", (req, res) => {
  res.render("team", team);
});

module.exports = router;
