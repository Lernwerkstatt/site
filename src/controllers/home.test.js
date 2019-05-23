describe("Home controller", () => {
  // TODO Mock properly
  it.skip("should provide proper view name", async () => {
    const { getIndex } = require("./home");
    const request = {};
    await getIndex(request, responseMock);
    expect(responseMock.viewName).toEqual("home");
  });
});
