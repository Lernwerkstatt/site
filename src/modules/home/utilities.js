const moment = require("moment");

function prepareHome(data) {
  const result = JSON.parse(data);

  result.calendar.forEach(element => {
    const weekday = moment(element.date, "DD.MM.YYYY")
      .format("dddd")
      .toLowerCase();
    element.dayicon = `img/calendar/${weekday}.png`;
  });

  return result;
}

module.exports = { prepareHome };
