const card = require("./cardModal.hbs");

describe("cardModal.hbs", () => {
  it("should match the snapshot", () => {
    expect(
      card({
        title: "Aktuelles",
        text:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis ea consequatur quibusdam sint laboriosam voluptates."
      })
    ).toMatchSnapshot();
  });
});
