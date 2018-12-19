const express = require("express");
const router = express.Router();

router.get("/support", (req, res, next) => {
  res.render("support");
});

module.exports = router;
