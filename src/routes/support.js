const express = require("express");
const policy = require("../../data/policy.json");

const router = express.Router();

router.get("/support", (req, res) => {
  res.render("support", policy);
});

module.exports = router;
