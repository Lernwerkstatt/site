const express = require("express");
const { v4: uuidv4 } = require("uuid");
const moment = require("moment");
const converter = require("../services/converter");
const database = require("../services/database");

const router = express.Router();

router.route("/blogs").get((req, res) => {
  database.allPosts().then((blogs) => res.render("blogs", { blogs }));
});

router
  .route("/blogs/create")
  .get((req, res) => res.render("blogform"))
  .post((req, res) => {
    database.newPost({
      id: uuidv4(),
      title: req.body.title,
      date: moment().format("DD.MM.YYYY"),
      author: req.body.author,
      content: converter.convertPost(req.body.content),
      imagelink: req.body.imagelink || "/img/blogs/default.jpg",
    });
    res.redirect("/blogs");
  });

router.route("/blogs/:id").get((req, res) => {
  database.singlePost(req.params.id).then((post) => res.render("blogs", post));
});

module.exports = router;
