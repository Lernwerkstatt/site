const express = require("express");

const router = express.Router();

router.get("/calendar", (req, res) => {
  res.redirect("https://teamup.com/ksb15466a44b299f51");
});

module.exports = router;
