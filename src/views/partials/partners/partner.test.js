const partner = require("./partner.hbs");

describe("partner.hbs", () => {
  it("should match the snapshot", () => {
    expect(
      partner({
        img: "img/logo.png",
        name: "Partner X"
      })
    ).toMatchSnapshot();
  });
});
