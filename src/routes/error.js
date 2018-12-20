const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("error");
});

module.exports = router;
