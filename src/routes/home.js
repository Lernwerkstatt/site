const express = require("express");
const database = require("../services/database");
const events = require("../services/events");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const calendar = await events.getEvents();
    const latestPost = await database.latestPost();
    const facebookImage = await events.getEventImage(calendar[0].id);

    const card = [
      // First static block
      {
        badge: "Über Uns",
        title: "Unsere Werte",
        text: "Dafür steht Die Lernwerkstatt.",
        link: "/values",
        image: "img/home/notebook.png"
      },
      // Second facebook block
      {
        badge: "Termin",
        title: calendar[0].name,
        text: calendar[0].date,
        link: calendar[0].link,
        image: facebookImage
      },
      // Third blog block
      {
        badge: "Blog",
        title: latestPost.title,
        text: `${latestPost.date} | ${latestPost.author}`,
        link: `/blogs/${latestPost.id}`,
        image: latestPost.imagelink
      }
    ];

    const result = {
      calendar,
      card
    };
    res.render("home", result);
  } catch (error) {
    res.status(500).send({ message: "Can not read data", error });
  }
});

module.exports = { router };
