const footer = require("./footer.hbs");

describe("footer.hbs", () => {
  it("should match the snapshot", () => {
    expect(footer()).toMatchSnapshot();
  });
});
