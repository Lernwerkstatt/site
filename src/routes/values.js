const express = require("express");

const router = express.Router();

router.get("/values", (req, res) => {
  res.render("values");
});

module.exports = router;
