const modal = require("./posts.hbs");

describe("posts.hbs", () => {
  it("should match the snapshot", () => {
    expect(
      modal({
        title: "Blogpost",
        date: "01.01.2000",
        author: "unknown",
        blogpost:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis ea consequatur quibusdam sint laboriosam voluptates.",
        imagelink: "/img/logo.png",
      })
    ).toMatchSnapshot();
  });
});
