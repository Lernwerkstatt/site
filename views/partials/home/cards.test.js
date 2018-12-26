const cards = require("./cards.hbs");

describe("cards.hbs", () => {
  it("should match the snapshot", () => {
    expect(
      cards({
        title: "Aktuelles",
        text:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis ea consequatur quibusdam sint laboriosam voluptates."
      })
    ).toMatchSnapshot();
  });
});
