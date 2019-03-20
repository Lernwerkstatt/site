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

module.exports = { getAllPosts, getSinglePost };
