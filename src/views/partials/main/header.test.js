const header = require("./header.hbs");

describe("header.hbs", () => {
  it("should match the snapshot", () => {
    expect(header()).toMatchSnapshot();
  });
});
