const fs = require("fs").promises;
const path = require("path");
const posts = require("../routes/posts");

const { prepareHome } = require("../modules/home/utilities");

const homePath = path.join(__dirname, "../../data/home.json");

const getIndex = async (req, res) => {
  try {
    const data = await fs.readFile(homePath);
    await posts
      .getLatestPost(prepareHome(data))
      .then(result => res.render("home", result));
  } catch (error) {
    res.status(500).send({ message: "Can not read data", error });
  }
};

module.exports = { getIndex };
