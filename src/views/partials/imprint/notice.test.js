const notice = require("./notice.hbs");

describe("notice.hbs", () => {
  it("should match the snapshot", () => {
    expect(
      notice({
        imprint_text: "Lorem ipsum"
      })
    ).toMatchSnapshot();
  });
});
