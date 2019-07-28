const express = require("express");
const contact = require("../../data/contact.json");

const router = express.Router();

router.get("/contact", (req, res) => {
  res.render("contact", contact);
});

module.exports = router;
