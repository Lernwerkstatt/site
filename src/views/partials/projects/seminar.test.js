const workshop = require("./seminar.hbs");

describe("seminar.hbs", () => {
  it("should match the snapshot", () => {
    expect(
      workshop({
        name: "Workshop",
        link: "http://www.die-lernwerkstatt.org/",
        text: "This is a workshop"
      })
    ).toMatchSnapshot();
  });
});
