function checkForWhitespace(post) {
  let counter = 320;

  while (post.charAt(counter) !== " " && counter <= post.length) {
    counter += 1;
  }
  return counter;
}

module.exports = checkForWhitespace;
