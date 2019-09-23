const express = require("express");

const router = express.Router();

router.get("/friends", (req, res) => {
  res.render("friends");
});

module.exports = router;
