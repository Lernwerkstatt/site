const express = require("express");
const uuidv1 = require("uuid/v1");
const moment = require("moment");
const posts = require("./posts");
const converter = require("../services/converter");
const database = require("../services/database");

const router = express.Router();

router.route("/blogs").get((req, res) => {
  posts
    .getAllPosts()
    .then(data => data.blogs)
    .then(blogs => {
      const result = {
        blogs
      };
      res.render("blogs", result);
    });
});

router
  .route("/blogs/create")
  .get((req, res) => {
    res.render("blogform");
  })
  .post((req, res) => {
    database
      .newPost({
        id: uuidv1(),
        title: req.body.title,
        date: moment().format("DD.MM.YYYY"),
        author: req.body.author,
        content: converter.convertPost(req.body.content),
        imagelink: "/img/blogs/Platzhalter.jpg"
      })
      .then(newBlogpost => {
        res.setHeader("Content-Type", "application/json");
        res.json(newBlogpost);
      });
    res.redirect("/blogs");
  });

router.route("/blogs/:id").get((req, res) => {
  posts.getSinglePost(req.params.id).then(data => res.render("blogs", data));
});

module.exports = router;
