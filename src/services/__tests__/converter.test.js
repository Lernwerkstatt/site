const converter = require("../converter");

describe("function should convert markdown to html", () => {
  const originalData = "**Something bold**";

  const expectedData = "<p><strong>Something bold</strong></p>";

  test("check markdown converter", () => {
    expect(converter.convertMarkdown(originalData)).toEqual(expectedData);
  });
});
