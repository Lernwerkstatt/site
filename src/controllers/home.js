const posts = require("../routes/posts");
const events = require("../services/events");

const facebook = require("../utilities/facebook");

const getIndex = async (req, res) => {
  try {
    let calendar = await events.getEvents();
    calendar = facebook.addCalendarIcon(calendar);
    const latestPost = await posts.getLatestPost();
    const facebookImage = await events.getEventImage(calendar[0].id);

    const card = [
      // First static block
      {
        badge: "Über Uns",
        title: "Unsere Werte",
        text: "Dafür steht die Lernwerkstatt.",
        link: "/values",
        image: "img/home/pencils.png"
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
        // eslint-disable-next-line no-underscore-dangle
        link: `/blogs/${latestPost._id}`,
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
};

module.exports = { getIndex };
