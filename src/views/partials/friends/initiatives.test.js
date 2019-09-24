const initiative = require("./initiatives.hbs");

describe("initiatives.hbs", () => {
  it("should match the snapshot", () => {
    expect(
      initiative({
        name: "Initiative",
        link: "http://www.die-lernwerkstatt.org/",
        text: "This is an initiative"
      })
    ).toMatchSnapshot();
  });
});
