const express = require("express");
const policy = require("../../data/policy.json");

const router = express.Router();

router.get("/policy", (req, res) => {
  res.render("policy", policy);
});

module.exports = router;
