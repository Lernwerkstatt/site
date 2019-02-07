const express = require("express");
const allPosts = require("../services/database");

const router = express.Router();

router.route("/blogs").get((req, res) => {
  allPosts.then(data => res.render("blogs", data));
});

/* router.route("/blogs/:id").get((req, res) => {
  Blogposts.find({ id: req.params.id })
    .then(result => {
      res.render("blogs", result[0]);
    })
    .catch(err => console.log(err));
}); */

module.exports = router;
