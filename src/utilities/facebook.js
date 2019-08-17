const moment = require("moment");

const extractNearestDate = event => {
  let result = {
    start_time: event.start_time,
    end_time: event.end_time,
    id: event.id
  };

  const today = new Date();

  if (event.event_times) {
    const allEvents = [...event.event_times, result];
    const upcoming = allEvents.filter(t => new Date(t.start_time) > today);

    upcoming.sort((a, b) => moment(a.start_time).diff(moment(b.start_time)));

    result = { ...upcoming[0] };
  }

  return result;
};

const stringifyEventDate = eventDate => {
  let result = "";
  const start = moment.parseZone(eventDate.start_time);
  const end = moment.parseZone(eventDate.end_time);

  if (start.isSame(end, "day")) {
    result = `${start.format("DD.MM.YYYY HH:mm")} - ${end.format("HH:mm")}`;
  } else {
    result = `${start.format("DD.MM.YYYY HH:mm")} - ${end.format(
      "DD.MM.YYYY HH:mm"
    )}`;
  }
  return result;
};

const createEventLink = id => `https://www.facebook.com/events/${id}`;

const addCalendarIcon = element => {
  const weekday = moment(element.date, "DD.MM.YYYY")
    .format("dddd")
    .toLowerCase();
  return {
    dayicon: `img/calendar/${weekday}.png`,
    tag: `tag${element.link.slice(32, 48)}`
  };
};

module.exports = {
  extractNearestDate,
  stringifyEventDate,
  createEventLink,
  addCalendarIcon
};
