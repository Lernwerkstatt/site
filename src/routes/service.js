const express = require("express");

const router = express.Router();

const letsEncryptReponse = process.env.CERTBOT_RESPONSE;

router.get("/.well-known/acme-challenge/:content", (req, res) => {
  res.send(letsEncryptReponse);
});

router.get(/de|en/, (req, res) => {
  res.cookie("locale", req.path.substr(1), { maxAge: 900000, httpOnly: true });
  res.redirect("back");
});

router.use((req, res) => {
  res.status(404).render("error");
});

module.exports = router;
