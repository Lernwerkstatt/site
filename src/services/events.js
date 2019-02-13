const fb = require("fb");
const { facebookToken, facebookPageId } = require("../../config/secrets");
const moment = require("moment");

const FB = new fb.Facebook({ version: "v3.2" });
FB.setAccessToken(facebookToken);

FB.api(`/${facebookPageId}/events`, "get", {}, res => {
  if (!res || res.error) {
    console.log(!res ? "error occurred" : res.error);
    return;
  }
  const events = res;
  console.log(events);
});

const extractNearestDate = event => {
  const result = {
    start_time: event.start_time,
    end_time: event.end_time
  };

  if (event.event_times) {
    const upcoming = event.event_times.filter(
      t => new Date(t.start_time) > new Date()
    );
    const sorted = upcoming.sort(
      (a, b) => new Date(a.start_time) - new Date(b.start_time)
    );

    result.start_time = sorted[0].start_time;
    result.end_time = sorted[0].end_time;
  }

  return result;
};

const stringifyEventDate = eventDate => {
  let result = "";
  const start = moment(eventDate.start_time);
  const end = moment(eventDate.end_time);

  if (start.diff(end, "days") === 0) {
    result = `${start.format("DD.MM.YYYY HH:mm")} - ${end.format("HH:mm")}`;
  } else {
    result = `${start.format("DD.MM.YYYY HH:mm")} - ${end.format(
      "DD.MM.YYYY HH:mm"
    )}`;
  }
  return result;
};

module.exports = {
  extractNearestDate,
  stringifyEventDate
};
