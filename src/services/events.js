const fb = require("fb");
const showdown = require("showdown");
const {
  extractNearestDate,
  stringifyEventDate,
  createEventLink,
  addCalendarIcon
} = require("../utilities/facebook");

const converter = new showdown.Converter({
  simplifiedAutoLink: true
});

const fbOptions = {
  version: "v3.3",
  accessToken: process.env.FB_TOKEN
};

const getEvents = () =>
  new Promise((resolve, reject) => {
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

        let result = [];
        if (res.data) {
          result = res.data
            .map(event => {
              const { cover, description, id, name } = event;
              const nearestDate = extractNearestDate(event);
              const date = stringifyEventDate(nearestDate);
              const link = createEventLink(nearestDate.id);
              const htmlDescription = converter.makeHtml(description);
              const { dayicon, tag } = addCalendarIcon({ link, date });

              return {
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
              };
            })
            .sort(
              (a, b) =>
                new Date(a.nearestDate.start_time) -
                new Date(b.nearestDate.start_time)
            );
        }

        resolve(result);
      }
    );
  });

module.exports = {
  getEvents
};
