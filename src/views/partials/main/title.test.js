const title = require("./title.hbs");

describe("title.hbs", () => {
  it("should match the snapshot", () => {
    expect(title()).toMatchSnapshot();
  });
});