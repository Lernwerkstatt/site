const express = require("express");

const router = express.Router();

router.get("/projects", (req, res) => {
  res.render("projects");
});

module.exports = router;
