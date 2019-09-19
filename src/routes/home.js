const express = require("express");
const database = require("../services/database");
const events = require("../services/events");

const router = express.Router();

const ourValues = () => ({
  badge: "Über Uns",
  title: "Unsere Werte",
  text: "Dafür steht Die Lernwerkstatt.",
  link: "/values",
  image: "img/home/notebook.png"
});

const event = calendar => ({
  badge: "Termin",
  title: calendar[0].name,
  text: calendar[0].date,
  link: calendar[0].link,
  image: calendar[0].cover.source
});

const blog = latestPost => ({
  badge: "Blog",
  title: latestPost.title,
  text: `${latestPost.date} | ${latestPost.author}`,
  link: `/blogs/${latestPost.id}`,
  image: latestPost.imagelink
});

router.get("/", async (req, res) => {
  try {
    const calendar = await events.getEvents();
    const latestPost = await database.latestPost();

    const cards = [
      // First static block
      ourValues(),
      // Second facebook block
      event(calendar),
      // Third blog block
      blog(latestPost)
    ];

    const result = {
      calendar,
      cards
    };
    res.render("home", result);
  } catch (error) {
    res.status(500).send({ message: "Can not read data", error });
  }
});

module.exports = { router };
