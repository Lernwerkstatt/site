const showdown = require("showdown");

const convertPost = rawPost => {
  try {
    return new showdown.Converter().makeHtml(rawPost);
  } catch (err) {
    return new Error(err);
  }
};

module.exports = { convertPost };
