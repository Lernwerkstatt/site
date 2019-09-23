const express = require("express");
const database = require("../services/database");
const events = require("../services/events");

const router = express.Router();

const ourValues = () => ({
  badge: "Über Uns",
  title: "Unsere Werte / Our Values",
  text: "Dafür steht Die Lernwerkstatt.",
  link: "/values",
  image: "img/home/notebook.png"
});

const event = calendar => ({
  badge: "Termin",
  title: calendar[0].name,
  text: calendar[0].date,
  image: calendar[0].cover.source,
  id: calendar[0].tag
});

const blog = latestPost => ({
  badge: "Blog",
  title: latestPost.title,
  text: `${latestPost.date} | ${latestPost.author}`,
  link: `/blogs/${latestPost.id}`,
  image: latestPost.imagelink
});

router.get("/", async (req, res) => {
  const refresh = req.query.refresh === "";

  let calendar = [
    {
      name: "Alle Events",
      date: "Rund um die Uhr",
      link: "https://www.facebook.com/dielernwerkstatt/events",
      cover: {
        source: "img/home/no_facebook.png"
      }
    }
  ];
  let latestPost;

  try {
    latestPost = await database.latestPost();
    calendar = await events.getEvents(refresh);
  } catch (error) {
    console.log({ message: "Can not read data", error });
  }

  const result = {
    calendar,
    ourValues: ourValues(),
    event: event(calendar),
    blog: blog(latestPost)
  };
  res.render("home", result);
});

module.exports = { router };
