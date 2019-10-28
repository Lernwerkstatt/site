const express = require("express");

const router = express.Router();

router.get("/imprint", (req, res) => {
  res.render("imprint");
});

module.exports = router;
