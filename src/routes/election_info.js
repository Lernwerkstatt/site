const express = require("express");

const router = express.Router();

router.get("/agsb/wahlpr", (req, res) => {
  res.render("election_info");
});

module.exports = router;
