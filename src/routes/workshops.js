const express = require("express");
const router = express.Router();

router.get("/workshops", (req, res, next) => {
  res.render("workshops");
});

module.exports = router;
