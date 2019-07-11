const express = require("express");

const router = express.Router();

router.get("/partners", (req, res) => {
  res.render("partners");
});

module.exports = router;
