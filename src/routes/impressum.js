const express = require("express");

const router = express.Router();

router.get("/impressum", (req, res) => {
  res.render("impressum");
});

module.exports = router;
