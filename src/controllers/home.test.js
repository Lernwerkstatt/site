const { getIndex } = require("./home");

jest.mock("../routes/posts");
jest.mock("../services/events");
jest.mock("../utilities/facebook");

describe("Home controller", () => {
  it("should provide proper view name", async () => {
    const request = {};
    await getIndex(request, responseMock);
    expect(responseMock.viewName).toEqual("home");
  });
});
