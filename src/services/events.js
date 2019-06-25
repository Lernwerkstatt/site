/* eslint camelcase: "off" */

const fb = require("fb");
const {
  extractNearestDate,
  stringifyEventDate,
  createEventLink
} = require("../utilities/facebook");

const FB = new fb.Facebook({ version: "v3.3" });
FB.setAccessToken(process.env.FB_TOKEN);

const getEvents = () =>
  new Promise((resolve, reject) => {
    FB.api(
      `/${process.env.FB_PAGE_ID}/events`,
      "get",
      { time_filter: "upcoming" },
      res => {
        if (!res || res.error) {
          console.log(!res ? "error occurred" : res.error);
          reject(res);
        }

        const result = [];

        res.data.forEach(event => {
          const { name, description } = event;
          const nearestDate = extractNearestDate(event);
          const date = stringifyEventDate(nearestDate);
          const link = createEventLink(nearestDate.id);

          result.push({ name, nearestDate, date, link, description });
        });

        result.sort(
          (a, b) =>
            new Date(a.nearestDate.start_time) -
            new Date(b.nearestDate.start_time)
        );
        resolve(result);
      }
    );
  });

module.exports = {
  getEvents
};
