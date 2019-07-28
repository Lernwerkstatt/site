const express = require("express");
const partners = require("../../data/partners.json");

const router = express.Router();

router.get("/partners", (req, res) => {
  res.render("partners", partners);
});

module.exports = router;
