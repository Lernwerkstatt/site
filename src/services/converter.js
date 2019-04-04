const showdown = require("showdown");

const convertPost = rawPost => {
  try {
    return new showdown.Converter().makeHtml(rawPost);
  } catch (err) {
    console.log(err);
  }
};

module.exports = { convertPost };
