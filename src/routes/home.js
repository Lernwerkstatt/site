const express = require("express");
const database = require("../services/database");
const events = require("../services/events");
const cache = require("../middlewares/cache");

const router = express.Router();
cache.init();

function ourValues(locale) {
  if (locale === "en") {
    return {
      badge: "About us",
      title: "Our Values",
      text: "What Die Lernwerkstatt represents",
      link: "/values",
      image: "img/home/notebook.jpg",
    };
  }
  return {
    badge: "Über Uns",
    title: "Unsere Werte",
    text: "Dafür steht Die Lernwerkstatt",
    link: "/values",
    image: "img/home/notebook.jpg",
  };
}

const event = (calendar) => {
  let result = {
    badge: "Termin",
    title: "",
    text: "",
    image: "",
    id: "",
  };

  if (calendar && calendar.length > 0) {
    result = {
      badge: "Termin",
      title: calendar[0].name,
      text: calendar[0].date,
      image: calendar[0].cover.source,
      id: calendar[0].tag,
    };
  }
  return result;
};

const blog = (latestPost) => ({
  badge: "Blog",
  title: latestPost.title,
  text: `${latestPost.date} | ${latestPost.author}`,
  link: `/blogs/${latestPost.id}`,
  image: latestPost.imagelink,
});

const podcast = (latestVideoPost) => ({
  badge: "Podcast",
  title: latestVideoPost.title,
  text: `${latestVideoPost.date} | ${latestVideoPost.author}`,
  link: `/podcasts/${latestVideoPost.id}`,
  image: `https://img.youtube.com/vi/${latestVideoPost.video_id}/0.jpg`,
});

router.get("/", async (req, res) => {
  const calendar = await cache.get("events.json", events.getEvents);
  const latestPost = await cache.get("blogs.json", database.latestPost);
  const latestVideoPost = await cache.get(
    "videos.json",
    database.latestVideoPost
  );

  const result = {
    calendar,
    ourValues: ourValues(req.cookies.locale),
    event: event(calendar),
    blog: blog(latestPost),
    podcast: podcast(latestVideoPost),
  };
  res.render("home", result);
});

router.get("/invalidate", async (req, res) => {
  await cache.invalidate("events.json", events.getEvents);
  await cache.invalidate("blogs.json", database.latestPost);
  await cache.invalidate("videos.json", database.latestVideoPost);

  res.redirect("/");
});

module.exports = router;
