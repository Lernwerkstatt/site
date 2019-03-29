const prepareHome = require("../prepareHome");

describe("function should get right icon from date", () => {
  const originalData = [
    {
      name: "Webkurs",
      date: "13.12.2018",
      time: "18:00-20:00",
      eventlink: "https://www.facebook.com/pg/dielernwerkstatt/events"
    }
  ];

  const expectedData = [
    {
      name: "Webkurs",
      date: "13.12.2018",
      time: "18:00-20:00",
      eventlink: "https://www.facebook.com/pg/dielernwerkstatt/events",
      dayicon: "img/calendar/thursday.png"
    }
  ];

  const falseData = [
    {
      name: "Webkurs",
      date: "13.12.2018",
      time: "18:00-20:00",
      eventlink: "https://www.facebook.com/pg/dielernwerkstatt/events",
      dayicon: "img/calendar/sunday.png"
    }
  ];

  test("check dayicon", () => {
    expect(prepareHome(originalData)).toEqual(expectedData);
    expect(prepareHome(originalData)).not.toEqual(falseData);
  });
});
