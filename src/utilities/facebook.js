const moment = require("moment");

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
      (a, b) => new Date(a.start_time) > new Date(b.start_time)
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

const createEventLink = id => `https://www.facebook.com/events/${id}`;

const addCalendarIcon = data => {
  data.forEach(element => {
    const weekday = moment(element.date, "DD.MM.YYYY")
      .format("dddd")
      .toLowerCase();
    element.dayicon = `img/calendar/${weekday}.png`;
    element.id = "id";
    element.id += element.link.slice(32, 48);
  });
  return data;
};

module.exports = {
  extractNearestDate,
  stringifyEventDate,
  createEventLink,
  addCalendarIcon
};
