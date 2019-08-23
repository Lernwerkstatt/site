const { getIndex } = require("./home");

jest.mock("../services/database");
jest.mock("../services/events");

describe("Home controller", () => {
  // TODO Mock properly
  it("should provide proper view name", async () => {
    const request = {};
    await getIndex(request, responseMock);
    expect(responseMock.viewName).toEqual("home");
  });
});
