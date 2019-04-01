const modal = require("./modal.hbs");

describe("modal.hbs", () => {
  it("should match the snapshot", () => {
    expect(modal({})).toMatchSnapshot();
  });
});
