const home = require("../home");

describe("Test data", () => {
  const dataOriginal = {
    calendar: [
      {
        name: "Webkurs",
        date: "13.12.2018",
        time: "18:00-20:00",
        eventlink: "https://www.facebook.com/pg/dielernwerkstatt/events"
      }
    ]
  };

  const stringifyData = JSON.stringify(dataOriginal);

  const dataExpected = {
    calendar: [
      {
        name: "Webkurs",
        date: "13.12.2018",
        time: "18:00-20:00",
        eventlink: "https://www.facebook.com/pg/dielernwerkstatt/events",
        dayicon: "img/calendar/thursday.png"
      }
    ]
  };
  const dataWrong = {
    calendar: [
      {
        name: "Webkurs",
        date: "13.12.2018",
        time: "18:00-20:00",
        eventlink: "https://www.facebook.com/pg/dielernwerkstatt/events",
        dayicon: "img/calendar/sunday.png"
      }
    ]
  };

  test("check dayicon", () => {
    expect(home.prepareHome(stringifyData)).toEqual(dataExpected);
    expect(home.prepareHome(stringifyData)).not.toEqual(dataWrong);
  });
});
