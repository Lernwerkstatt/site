const workshop = require("./seminars.hbs");

describe("seminars.hbs", () => {
  it("should match the snapshot", () => {
    expect(
      workshop({
        name: "Workshop",
        description: "This is a workshop",
        mainLink: "http://www.die-lernwerkstatt.org/",
        link1: "http://www.die-lernwerkstatt.org/",
        link2: "http://www.die-lernwerkstatt.org/",
        link3: "http://www.die-lernwerkstatt.org/",
        additional: "More information"
      })
    ).toMatchSnapshot();
  });
});
