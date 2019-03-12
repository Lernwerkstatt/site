const mongoose = require("mongoose");
const showdown = require("showdown");

const Blogposts = require("../models/blogposts");
const { dbUrl } = require("../../config/secrets");

mongoose.connect(
  dbUrl,
  { useNewUrlParser: true }
);

function checkForWhitespace(post) {
  let counter = 320;

  while (post.charAt(counter) !== " " && counter <= post.length) {
    counter += 1;
  }
  return counter;
}

function addSummary(blogpost) {
  blogpost.forEach(element => {
    element.summary = element.content.substring(
      0,
      checkForWhitespace(element.content)
    );
    element.summary += " ...";
  });

  return blogpost;
}

function convertMarkdown(newBlogpost) {
  const converter = new showdown.Converter();
  const convertedBlogpost = converter.makeHtml(newBlogpost);

  return convertedBlogpost;
}

const allPosts = Blogposts.find({})
  .then(blogposts => {
    const postWithSummary = addSummary(blogposts);
    const addObject = { blogs: postWithSummary };
    return addObject;
  })
  .catch(err => console.log(err));

const singlePosts = paramsId =>
  Blogposts.find({ id: paramsId })
    .then(result => result)
    .catch(err => console.log(err));

const newPosts = postBody =>
  Blogposts.create(postBody)
    .then(blogposts => {
      const newBlogpost = convertMarkdown(blogposts);
      return newBlogpost;
    })
    .catch(err => console.log(err));

module.exports = { allPosts, singlePosts, newPosts, convertMarkdown };
