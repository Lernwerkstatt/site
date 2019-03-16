const showdown = require("showdown");

function convertMarkdown(newBlogpost) {
  const converter = new showdown.Converter();
  const convertedBlogpost = converter.makeHtml(newBlogpost);

  return convertedBlogpost;
}

module.exports = { convertMarkdown };
