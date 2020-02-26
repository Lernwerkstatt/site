const express = require("express");

const router = express.Router();

router.get("/openki", (req, res) => {
  res.render("openki");
});

module.exports = router;
