const posts = require("../services/database");

const getAllPosts = async () => {
  try {
    const data = await posts.allPosts;
    return data;
  } catch (error) {
    console.log({ message: "Can not read data", error });
  }
};

const getSinglePost = async id => {
  try {
    const data = await posts.singlePost(id);
    return data[0];
  } catch (error) {
    console.log({ message: "Can not read data", error });
  }
};

const getLatestPost = async result => {
  try {
    const allPosts = await getAllPosts();
    result.card[2].blogtitle = allPosts.blogs[allPosts.blogs.length - 1].title;
    result.card[2].author = allPosts.blogs[allPosts.blogs.length - 1].author;
    result.card[2].date = allPosts.blogs[allPosts.blogs.length - 1].date;

    return result;
  } catch (error) {
    console.log({ message: "Can not read data", error });
  }
};

module.exports = { getAllPosts, getSinglePost, getLatestPost };
