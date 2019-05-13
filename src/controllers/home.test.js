const { getIndex } = require("./home");

describe("Home controller", () => {
  it("should provide proper view name", async () => {
    const request = {};
    await getIndex(request, responseMock);
    expect(responseMock.viewName).toEqual("home");
  });
});
