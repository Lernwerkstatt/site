const modal = require("./modal.hbs");

describe("modal.hbs", () => {
  it("should match the snapshot", () => {
    expect(
      modal({
        id: "testModal",
        headline: "I'm a headline",
        text:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis ea consequatur quibusdam sint laboriosam voluptates."
      })
    ).toMatchSnapshot();
  });
});
