const event = require("./event.hbs");
const modal = require("./modal.hbs");

describe("event.hbs", () => {
  it("should match the snapshot", () => {
    expect(
      event({
        id: "seven",
        name: "Webkurs",
        date: "13.12.2018",
        time: "18:00-20:00",
        eventlink: "https://www.facebook.com/pg/dielernwerkstatt/events",
        dayicon: "img/calendar/sunday.png"
      })
    ).toMatchSnapshot();
  });
});
