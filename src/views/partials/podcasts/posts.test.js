const modal = require("./posts.hbs");

describe("posts.hbs", () => {
  it("should match the snapshot", () => {
    expect(
      modal({
        title: "Post",
        date: "01.01.2000",
        author: "unknown",
        video_id: "xyz",
      })
    ).toMatchSnapshot();
  });
});
