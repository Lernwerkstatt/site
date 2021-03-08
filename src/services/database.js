const { Blogposts, Videoposts } = require("../models/blogposts");

const allPosts = () =>
  Blogposts.aggregate([
    {
      $project: {
        author: 1,
        date: 1,
        dateString: {
          $dateFromString: {
            dateString: "$date",
          },
        },
        id: 1,
        imagelink: 1,
        title: 1,
      },
    },
    { $sort: { dateString: -1 } },
  ]).then((posts) => posts);

const allVideoPosts = () =>
  Videoposts.aggregate([
    {
      $project: {
        author: 1,
        date: 1,
        dateString: {
          $dateFromString: {
            dateString: "$date",
          },
        },
        id: 1,
        video_id: 1,
        title: 1,
      },
    },
    { $sort: { dateString: -1 } },
  ]).then((posts) => posts);

const latestPost = () => allPosts().then((result) => result[0]);

const singlePost = (id) => Blogposts.findOne({ id }).then((result) => result);

const newPost = (post) => Blogposts.create(post);

const latestVideoPost = () => allVideoPosts().then((result) => result[0]);

const singleVideoPost = (id) =>
  Videoposts.findOne({ id }).then((result) => result);

const newVideoPost = (post) => Videoposts.create(post);

module.exports = {
  allPosts,
  singlePost,
  newPost,
  latestPost,
  allVideoPosts,
  singleVideoPost,
  newVideoPost,
  latestVideoPost,
};
