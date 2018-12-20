const express = require("express");
const router = express.Router();

router.get("/workshops", (req, res) => {
  res.render("workshops");
});

module.exports = router;
