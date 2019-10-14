const fs = require("fs");
const moment = require("moment");
const fb = require("fb");
const showdown = require("showdown");

const {
  extractNearestDate,
  stringifyEventDate,
  createEventLink,
  addCalendarIcon
} = require("../utilities/facebook");

const fileData = require("../../data/events.json");

const converter = new showdown.Converter({
  simplifiedAutoLink: true
});

const fbOptions = {
  version: "v3.3",
  accessToken: process.env.FB_TOKEN
};

const getEvents = refresh =>
  new Promise((resolve, reject) => {
    if (!refresh && moment(fileData.date).isSame(moment(), "hour")) {
      resolve(fileData.events);
    } else {
      const FB = new fb.Facebook(fbOptions);
      FB.api(
        `/${process.env.FB_PAGE_ID}/events?fields=cover,description,end_time,id,name,start_time,event_times`,
        "get",
        {
          time_filter: "upcoming"
        },
        res => {
          if (!res || res.error) {
            reject(res);
          }

          const result = [];
          if (res.data) {
            res.data.forEach(event => {
              const { cover, description, id, name } = event;
              const nearestDate = extractNearestDate(event);
              const date = stringifyEventDate(nearestDate);
              const link = createEventLink(nearestDate.id);
              const htmlDescription = converter.makeHtml(description);
              const { dayicon, tag } = addCalendarIcon({ link, date });

              result.push({
                cover,
                date,
                description,
                htmlDescription,
                id,
                link,
                name,
                nearestDate,
                tag,
                dayicon
              });
            });

            result.sort(
              (a, b) =>
                new Date(a.nearestDate.start_time) -
                new Date(b.nearestDate.start_time)
            );
          }

          const jsonContent = JSON.stringify({
            date: moment().format(),
            events: result
          });

          fs.writeFile(
            `${__dirname}/../../data/events.json`,
            jsonContent,
            "utf8",
            err => {
              reject(err);
            }
          );

          resolve(result);
        }
      );
    }
  });

module.exports = {
  getEvents
};
