const mongoose = require("mongoose");
const Blogposts = require("../models/blogposts");

mongoose.connect(
  process.env.DB_HOST,
  { useNewUrlParser: true }
);

const allPosts = Blogposts.aggregate([
  {
    $project: {
      _id: 1,
      author: 1,
      content: 1,
      date: 1,
      dateString: {
        $dateFromString: {
          dateString: "$date"
        }
      },
      id: 1,
      imagelink: 1,
      title: 1
    }
  },
  { $sort: { dateString: -1 } }
]).then(blogposts => {
  const addObject = { blogs: blogposts };
  return addObject;
});

const singlePost = paramsId =>
  Blogposts.find({ _id: paramsId }).then(result => result);

const newPost = convertedPost => {
  try {
    const createPost = Blogposts.create(convertedPost);
    return createPost;
  } catch (err) {
    // console.log(err);
  }
};

module.exports = { allPosts, singlePost, newPost };
