const express = require("express");
const posts = require("../services/database");

const router = express.Router();

const getAllPosts = async (req, res) => {
  try {
    const data = await posts.allPosts;
    res.render("blogs", data);
  } catch (error) {
    res.status(500).send({ message: "Can not read data", error });
  }
};

const getSinglePost = async (req, res) => {
  try {
    const data = await posts.singlePost(req.params.id);
    res.render("blogs", data[0]);
  } catch (error) {
    res.status(500).send({ message: "Can not read data", error });
  }
};

router.route("/blogs").get((req, res) => {
  getAllPosts(req, res);
});

router.route("/blogs/:id").get((req, res) => {
  getSinglePost(req, res);
});

module.exports = router;
