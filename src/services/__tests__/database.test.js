const database = require("../database");

describe("function should convert markdown to html", () => {
  const originalData = "**Something bold**";

  const expectedData = "<p><strong>Something bold</strong></p>";

  test("check markdown converter", () => {
    expect(database.convertMarkdown(originalData)).toEqual(expectedData);
  });
});
