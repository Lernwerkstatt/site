const express = require("express");
const contact = require("../../data/contact.json");

const router = express.Router();

router.get("/subscribe", (req, res) => {
  res.render("subscribe", contact);
});

module.exports = router;
