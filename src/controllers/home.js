const posts = require("../routes/posts");
const events = require("../services/events");

const facebook = require("../utilities/facebook");

const getIndex = async (req, res) => {
  try {
    let calendar = await events.getEvents();
    calendar = facebook.addCalendarIcon(calendar);
    const latestPost = await posts.getLatestPost();

    const card = [
      // First static block
      {
        title: "Lorem Ipsum 1",
        text: "Doler sit amet."
      },
      // Second facebook block
      {
        title: calendar[0].name,
        text: calendar[0].description
      },
      // Third blog block
      {
        title: latestPost.title,
        text: latestPost.content
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
};

module.exports = { getIndex };
