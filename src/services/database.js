const mongoose = require("mongoose");
const Blogposts = require("../models/blogposts");

mongoose.connect(
  process.env.DB_HOST,
  { useNewUrlParser: true }
);

const allPosts = Blogposts.find({})
  .then(blogposts => {
    const addObject = { blogs: blogposts };
    return addObject;
  })
  .catch(err => console.log(err));

const singlePost = paramsId =>
  Blogposts.find({ _id: paramsId })
    .then(result => result)
    .catch(err => console.log(err));

const newPost = convertedPost => {
  try {
    const createPost = Blogposts.create(convertedPost);
    return createPost;
  } catch (err) {
    console.log(err);
  }
};

module.exports = { allPosts, singlePost, newPost };
