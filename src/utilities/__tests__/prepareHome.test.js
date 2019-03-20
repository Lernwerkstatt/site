const helper = require("../prepareHome");

describe("function should get right icon from date", () => {
  const originalData = {
    calendar: [
      {
        name: "Webkurs",
        date: "13.12.2018",
        time: "18:00-20:00",
        eventlink: "https://www.facebook.com/pg/dielernwerkstatt/events"
      }
    ]
  };

  const stringifiedData = JSON.stringify(originalData);

  const expectedData = {
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
  const falseData = {
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
    expect(helper.prepareHome(stringifiedData)).toEqual(expectedData);
    expect(helper.prepareHome(stringifiedData)).not.toEqual(falseData);
  });
});
