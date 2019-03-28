const fs = require("fs").promises;
const path = require("path");
const posts = require("../routes/posts");
const events = require("../services/events");

const { prepareHome } = require("../modules/home/utilities");

const homePath = path.join(__dirname, "../../data/home.json");

const getIndex = async (req, res) => {
  try {
    const data = await fs.readFile(homePath, { encoding: "utf-8" });
    let calendar = await events.getEvents();
    calendar = prepareHome(calendar);
    const latestPost = await posts.getLatestPost();

    const home = JSON.parse(data);
    home.card[2].blogtitle = latestPost.title;
    home.card[2].author = latestPost.author;
    home.card[2].date = latestPost.date;

    const result = {
      calendar,
      card: home.card
    };
    res.render("home", result);
  } catch (error) {
    res.status(500).send({ message: "Can not read data", error });
  }
};

module.exports = { getIndex };
