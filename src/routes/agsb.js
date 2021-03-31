const express = require("express");

const router = express.Router();

router.get("/agsb", (req, res) => {
  res.render("agsb");
});

module.exports = router;
