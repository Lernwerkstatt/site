const express = require("express");
const nodemailer = require("nodemailer");
const policy = require("../../data/policy.json");

const router = express.Router();

router
  .route("/contact")
  .get((req, res) => res.render("contact", policy))
  .post((req, res) => {
    const transporter = nodemailer.createTransport({
      host: process.env.CONTACT_HOST,
      port: process.env.CONTACT_PORT,
      auth: {
        user: process.env.CONTACT_SENDER,
        pass: process.env.CONTACT_PASS,
      },
    });

    const mailOptions = {
      from: process.env.CONTACT_USER,
      to: process.env.CONTACT_RECEIVE,
      subject: `Anfrage via Kontaktformular von ${req.body.name}`,
      text: `${req.body.name} (${req.body.email}) schreibt: ${req.body.message}`,
    };

    if (req.body && req.body.verification && req.body.verification === "send")
      transporter.sendMail(mailOptions, (error) => {
        if (error) {
          console.log(error);
          console.log("Failed contact form attempt: ");
          console.log(mailOptions);
          res.redirect("contact");
        } else {
          res.redirect("contact");
        }
      });
    else {
      res.redirect("contact");
    }
  });

module.exports = router;
