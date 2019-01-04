const express = require("express");

const router = express.Router();

router.get("/subscribe", (req, res) => {
  res.render("subscribe");
});

module.exports = router;
