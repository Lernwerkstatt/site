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
    result.card[2].blogtitle = allPosts.blogs[0].title;
    result.card[2].author = allPosts.blogs[0].author;
    result.card[2].date = allPosts.blogs[0].date;

    return result;
  } catch (error) {
    console.log({ message: "Can not read data", error });
  }
};

module.exports = { getAllPosts, getSinglePost, getLatestPost };
