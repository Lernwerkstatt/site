const express = require("express");
const path = require("path");
const fs = require("fs");
const posts = require("./posts");
const helper = require("../utilities/helpfunctions");

const router = express.Router();

const homePath = path.join(__dirname, "../../data/home.json");

router.get("/", (req, res) => {
  fs.readFile(homePath, (err, data) => {
    if (err) throw err;
    posts
      .getLatestPost(helper.prepareHome(data))
      .then(result => res.render("home", result));
  });
});

module.exports = { router };
