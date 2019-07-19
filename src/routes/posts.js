const posts = require("../services/database");

const getAllPosts = async () => {
  try {
    const data = await posts.allPosts;
    return data;
  } catch (error) {
    // console.log({ message: "Can not read data", error });
  }
};

const getSinglePost = async id => {
  try {
    const data = await posts.singlePost(id);
    return data[0];
  } catch (error) {
    // console.log({ message: "Can not read data", error });
  }
};

const getLatestPost = async () => {
  try {
    const allPosts = await getAllPosts();
    return allPosts.blogs[allPosts.blogs.length - 1];
  } catch (error) {
    // console.log({ message: "Can not read data", error });
  }
};

module.exports = { getAllPosts, getSinglePost, getLatestPost };
