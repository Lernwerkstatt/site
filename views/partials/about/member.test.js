const teamMember = require("./member.hbs");

describe("member.hbs", () => {
  it("should match the snapshot", () => {
    expect(
      teamMember({
        name: "Max Muster",
        id: "max",
        img: "img/logo.png",
        description: "Lorem ipsum."
      })
    ).toMatchSnapshot();
  });
});
