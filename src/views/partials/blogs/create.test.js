const form = require("./create.hbs");

describe("create.hbs", () => {
  it("should match the snapshot", () => {
    expect(form({})).toMatchSnapshot();
  });
});
