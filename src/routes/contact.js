const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const policy = require("../../data/policy.json");

const app = express();
const router = express.Router();

app.use(bodyParser.urlencoded({ extended: true }));

router
  .route("/contact")
  .get((req, res) => res.render("contact", policy))
  .post((req, res) => {
    const transporter = nodemailer.createTransport({
      host: process.env.CONTACT_HOST,
      port: process.env.CONTACT_PORT,
      auth: {
        user: process.env.CONTACT_USER,
        pass: process.env.CONTACT_PASS,
      },
    });

    const mailOptions = {
      from: `${req.body.name} <${req.body.email}>`,
      to: process.env.CONTACT_RECEIVE,
      subject: `Anfrage via Kontaktformular von ${req.body.name}`,
      text: `${req.body.name} (${req.body.email}) schreibt: ${req.body.message}`,
    };

    if (req.body && req.body.verification && req.body.verification === "send")
      transporter.sendMail(mailOptions, (error) => {
        if (error) {
          console.log("Failed contact form attempt");
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
