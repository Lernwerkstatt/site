const express = require("express");
const router = express.Router();

router.get("/learn", (req, res, next) => {
  res.render("learn");
});

module.exports = router;
