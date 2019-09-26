const express = require("express");
const friends = require("../../data/friends.json");

const router = express.Router();

router.get("/friends", (req, res) => {
  res.render("friends", friends);
});

module.exports = router;
