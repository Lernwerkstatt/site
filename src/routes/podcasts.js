const express = require("express");
const { v4: uuidv4 } = require("uuid");
const moment = require("moment");
const converter = require("../services/converter");
const database = require("../services/database");

const router = express.Router();

router.route("/podcasts").get((req, res) => {
  database
    .allVideoPosts()
    .then((podcasts) => res.render("podcasts", { podcasts }));
});

router
  .route("/podcasts/create")
  .get((req, res) => res.render("podcastform"))
  .post((req, res) => {
    database.newVideoPost({
      id: uuidv4(),
      title: req.body.title,
      date: moment().format("DD.MM.YYYY"),
      author: req.body.author,
      content: converter.convertPost(req.body.content),
      video_id: req.body.video_id,
    });
    res.redirect("/podcasts");
  });

router.route("/podcasts/:id").get((req, res) => {
  database
    .singleVideoPost(req.params.id)
    .then((post) => res.render("podcasts", post));
});

module.exports = router;
