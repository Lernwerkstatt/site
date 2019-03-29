const moment = require("moment");

function prepareHome(data) {
  data.forEach(element => {
    const weekday = moment(element.date, "DD.MM.YYYY")
      .format("dddd")
      .toLowerCase();
    element.dayicon = `img/calendar/${weekday}.png`;
    element.id = "id";
    element.id += element.link.slice(32, 48);
  });

  return data;
}

module.exports = prepareHome;
