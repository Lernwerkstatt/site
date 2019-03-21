const mongoose = require("mongoose");

const converter = require("./converter");
const Blogposts = require("../models/blogposts");
const { dbUrl } = require("../../config/secrets");
const addSummary = require("../utilities/addSummary");

mongoose.connect(
  dbUrl,
  { useNewUrlParser: true }
);

const allPosts = Blogposts.find({})
  .then(blogposts => {
    const postWithSummary = addSummary(blogposts);
    const addObject = { blogs: postWithSummary };
    return addObject;
  })
  .catch(err => console.log(err));

const singlePost = paramsId =>
  Blogposts.find({ _id: paramsId })
    .then(result => result)
    .catch(err => console.log(err));

const newPosts = postBody =>
  Blogposts.create(postBody)
    .then(blogposts => {
      const newBlogpost = converter.convertMarkdown(blogposts);
      return newBlogpost;
    })
    .catch(err => console.log(err));

module.exports = { allPosts, singlePost, newPosts };
