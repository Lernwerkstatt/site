const express = require("express");
const router = express.Router();

router.get("/blog", (req, res, next) => {
  res.render("blog");
});

module.exports = router;
