/* eslint camelcase: "off" */

const fb = require("fb");
const showdown = require("showdown");
const {
  extractNearestDate,
  stringifyEventDate,
  createEventLink
} = require("../utilities/facebook");

const converter = new showdown.Converter({
  simplifiedAutoLink: true
});

const FB = new fb.Facebook({
  version: "v3.3"
});
FB.setAccessToken(process.env.FB_TOKEN);

const getEventImage = id =>
  new Promise((resolve, reject) => {
    FB.api(`/${id}?fields=cover`, res => {
      if (!res || res.error) {
        reject(res);
      }
      resolve(res.cover.source);
    });
  });

const getEvents = () =>
  new Promise((resolve, reject) => {
    FB.api(
      `/${
        process.env.FB_PAGE_ID
      }/events?fields=cover,description,end_time,id,name,start_time`,
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

            result.push({
              cover,
              date,
              description,
              htmlDescription,
              id,
              link,
              name,
              nearestDate
            });
          });
        }

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
  getEvents,
  getEventImage
};
