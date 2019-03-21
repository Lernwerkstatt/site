const { getIndex } = require("./home");
const { responseMock } = require("../tests/utilities");

describe("Home controller", function stupidRule() {
  beforeEach(() => {
    this.request = {};
    this.response = { ...responseMock };
  });

  afterEach(() => {
    this.response = { ...responseMock };
  });

  describe("root path", () => {
    it("should provide proper view name", async () => {
      await getIndex(this.request, this.response);
      expect(this.response.viewName).toEqual("home");
    });
  });
});
