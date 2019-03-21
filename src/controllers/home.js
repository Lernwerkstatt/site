const fs = require("fs").promises;
const path = require("path");

const { prepareHome } = require("../modules/home/utilities");

const homePath = path.join(__dirname, "../../data/home.json");

const getIndex = async (req, res) => {
  try {
    const data = await fs.readFile(homePath);
    res.render("home", prepareHome(data));
  } catch (error) {
    res.status(500).send({ message: "Can not read data", error });
  }
};

module.exports = { getIndex };
