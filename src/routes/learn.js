const express = require("express");
const router = express.Router();

router.get("/learn", (req, res) => {
  res.render("learn");
});

module.exports = router;
