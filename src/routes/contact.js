const express = require("express");
const policy = require("../../data/policy.json");

const router = express.Router();

router.get("/contact", (req, res) => {
  res.render("contact", policy);
});

module.exports = router;
