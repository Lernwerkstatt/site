const express = require("express");

const router = express.Router();

router.get("/gallery", (req, res) => {
  const result = {
    apiKey: process.env.PIXLEE_INSTAGRAM_API_KEY
  };
  res.render("gallery", result);
});

module.exports = router;
