const express = require("express");
const contact = require("../../data/contact.json");

const router = express.Router();

router.get("/support", (req, res) => {
  res.render("support", contact);
});

module.exports = router;
